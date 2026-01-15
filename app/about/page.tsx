export default function About() {
  // 年齢を自動計算
  const birthDate = new Date('2002-09-26');
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">基本情報</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">名前</h3>
            <p className="text-xl">宮澤 琉世（ミヤザワ リュウセイ）</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">生年月日</h3>
            <p className="text-xl">2002年9月26日（満{age}歳）</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">所属</h3>
            <p className="text-xl">フリーランス</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">最寄駅</h3>
            <p className="text-xl">JR中央本線 多治見駅</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">学歴</h2>
        <div className="border-l-4 border-blue-600 pl-6">
          <h3 className="text-xl font-semibold">東海大学 文化社会学部 文芸創作学科</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-2">2025年3月 卒業</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">自己紹介</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          フロントエンド・バックエンド・インフラまで一貫対応できるフルスタックエンジニアです。
        </p>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">経歴</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            学生時代より約2年間、株式会社ジーネックスにてRuby・Java・PHPを用いた業務系システム開発に携わり、オブジェクト指向設計、MVCアーキテクチャ、チーム開発の基礎を実務レベルで習得。その後、Next.js・TypeScript・Python・AWSを中心としたモダンな技術スタックへとスキルを拡張し、AI連携、サーバーレスアーキテクチャ、OCR自動化などを実運用レベルで構築。
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">スキル</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS', 'Framer Motion'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'PostgreSQL', 'Supabase', 'API Development', 'Authentication'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Tools & Others</h3>
            <div className="flex flex-wrap gap-2">
              {['Git', 'GitHub', 'Vercel', 'Docker', 'VS Code', 'AI Integration'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">職務経歴</h2>
        <div className="space-y-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold">フリーランスエンジニア</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-3">2025/06 ～ 現在</p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• HRテック企業 人材育成支援プラットフォーム開発（フロントエンド）</li>
              <li>• 大手スポーツ団体 新規サイト開発（フロントエンド）</li>
              <li>• AI記事タグ付けAPI開発（バックエンド）</li>
              <li>• 中古車販売会社 OCR処理ワークフロー構築（インフラ・バックエンド）</li>
            </ul>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold">株式会社ジーネックス（インターン）</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-3">2022/06 ～ 2024/04（約2年間）</p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• 業務管理システム開発・保守</li>
              <li>• Ruby on Rails / Laravel / Java を使用した機能開発</li>
              <li>• 顧客管理、案件管理、請求管理機能の実装</li>
              <li>• チーム開発、コードレビュー対応</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">強み</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">AI実装力</h3>
            <p className="text-gray-600 dark:text-gray-300">
              AIを検証で終わらせず、実業務に組み込んで運用まで落とし込む
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">フルスタック対応</h3>
            <p className="text-gray-600 dark:text-gray-300">
              フロントからインフラまで一人で設計・実装・デプロイできる
            </p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-yellow-600 dark:text-yellow-400">高速キャッチアップ</h3>
            <p className="text-gray-600 dark:text-gray-300">
              新しい技術への迅速な習得と実務への応用力
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
