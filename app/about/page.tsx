export default function About() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-5xl font-bold mb-8">About Me</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">自己紹介</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          フルスタックWeb開発者として、モダンな技術スタックを使用したWebアプリケーション開発に取り組んでいます。
          ユーザー体験を第一に考え、パフォーマンスとデザインの両立を追求しています。
        </p>
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
        <h2 className="text-3xl font-semibold mb-6">経験</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold">Web Developer</h3>
            <p className="text-gray-500 mb-2">2023 - Present</p>
            <p className="text-gray-600 dark:text-gray-300">
              Next.js、React、TypeScriptを使用したフルスタックWebアプリケーション開発。
              ユーザー認証、データベース設計、API開発、デプロイまで一貫して担当。
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">興味・関心</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>モダンなWeb技術とフレームワークの学習</li>
          <li>UI/UXデザインとユーザー体験の改善</li>
          <li>パフォーマンス最適化とアクセシビリティ</li>
          <li>AI技術のWeb開発への応用</li>
        </ul>
      </section>
    </div>
  );
}
