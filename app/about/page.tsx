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
        <h2 className="text-3xl font-semibold mb-6">My Story</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-3">大学生からフリーランスへ</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              大学2年次、文芸創作学科で学びながらも、自分の手で何かを創り出したいという想いが強くなっていました。偶然出会ったプログラミングに魅了され、独学でWeb開発を学び始めました。
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-3">
              学びを深めるため、株式会社ジーネックスでインターンとして参画。Ruby on Rails、Laravel、Javaを使った業務システム開発に約2年間携わり、オブジェクト指向設計やMVCアーキテクチャ、チーム開発の基礎を実務レベルで習得しました。
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-3">転機となった決断</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              卒業を控えた時期、多くの同級生が企業への就職を選ぶ中、私は別の道を選びました。
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-3">
              <strong className="text-blue-600 dark:text-blue-400">新卒でフリーランスエンジニアとして独立する</strong>という決断です。
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-3">
              この選択には大きな不安もありました。しかし、学生時代に培った技術力と、自分の手でキャリアを築きたいという強い想いが背中を押しました。企業に属するのではなく、自らの力で価値を生み出し、多様なプロジェクトに挑戦することで、より速く成長できると確信していました。
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">技術スタックの進化</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              フリーランスとして活動を始めてから、技術スタックを大きく拡張しました。従来のRuby・Java・PHPに加え、Next.js・TypeScript・Python・AWSといったモダンな技術を習得。特にAI技術との連携に力を入れ、OpenAI APIやGoogle Gemini APIを活用したプロジェクトを複数手がけました。
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-3">
              HRテック企業での人材育成プラットフォーム開発、大手スポーツ団体の新規サイト構築、AI記事タグ付けAPI開発、OCR処理の自動化など、フロントエンド・バックエンド・インフラと幅広い領域で実績を積み重ねています。
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-3">これから</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              AIを実業務に落とし込む実装力、フルスタック開発の対応範囲の広さ、新技術への高速キャッチアップという強みを活かし、クライアントに価値を提供し続けたいと考えています。
            </p>
          </div>
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
