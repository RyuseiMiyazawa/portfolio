import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'すべてのフィールドを入力してください' },
        { status: 400 }
      );
    }

    // ResendのAPIキーが設定されているかチェック
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'your_resend_api_key_here') {
      console.log('📧 お問い合わせ（デモモード - APIキー未設定）:');
      console.log('名前:', name);
      console.log('メール:', email);
      console.log('メッセージ:', message);

      return NextResponse.json({
        success: true,
        demo: true,
        message: 'デモモード: コンソールにログ出力しました'
      });
    }

    // Resend無料プランでは、登録したメールアドレスにのみ送信可能
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'miyazawar0926@gmail.com',
      replyTo: email,
      subject: `ポートフォリオからのお問い合わせ: ${name}`,
      text: `
新しいお問い合わせ

名前: ${name}
メールアドレス: ${email}

メッセージ:
${message}
      `,
      html: `
        <h2>新しいお問い合わせ</h2>
        <p><strong>名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>メッセージ:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'メッセージの送信に失敗しました' },
      { status: 500 }
    );
  }
}
