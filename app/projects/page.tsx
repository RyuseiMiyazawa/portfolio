import Image from 'next/image';

export default function Projects() {
  const workProjects = [
    {
      title: 'HRテック企業 人材育成支援プラットフォーム',
      period: '2025/06 ～ 現在',
      description: 'AIを活用した人材育成支援Webアプリケーション。Next.js App Router + TypeScript によるフロントエンド設計・実装を担当。',
      tech: ['Next.js 14', 'React', 'TypeScript', 'Chakra UI', 'React Query', 'Rails API', 'AWS'],
      role: 'フロントエンドエンジニア',
      achievements: [
        'React Hook Form を用いた複雑なフォーム構築',
        'カスタムフック設計によるロジックの再利用性向上',
        'AI機能との連携実装'
      ]
    },
    {
      title: '大手スポーツ団体 新規サイト開発',
      period: '2024/10 ～ 2025/06',
      description: '大手スポーツ団体向けの会員制Webサイト新規開発。ログイン機能、お知らせ機能、スケジュール機能を実装。',
      tech: ['Next.js', 'React', 'TypeScript', 'REST API'],
      role: 'フロントエンドエンジニア',
      achievements: [
        'API通信処理の共通化',
        'コンポーネント設計とディレクトリ構成の整備'
      ]
    },
    {
      title: '記事自動タグ付けAPI開発',
      period: '2024/10 ～ 2025/02',
      description: 'OpenAI GPT-4を活用した記事内容解析・タグ自動生成APIの開発。サーバーレスアーキテクチャで構築。',
      tech: ['Python', 'FastAPI', 'AWS Lambda', 'API Gateway', 'OpenAI API'],
      role: 'バックエンドエンジニア',
      achievements: [
        '記事投稿時の手動タグ付け作業を自動化',
        'サーバーレス設計による運用コスト削減'
      ]
    },
    {
      title: '中古車販売会社 OCR処理ワークフロー構築',
      period: '2024/11 ～ 2025/03',
      description: 'TIFFファイルのOCR処理自動化システム。S3トリガー + Lambda + SQSによるイベント駆動アーキテクチャ。',
      tech: ['Python', 'AWS Lambda', 'S3', 'SQS', 'Docker', 'boto3'],
      role: 'インフラ・バックエンドエンジニア',
      achievements: [
        'SQS並列処理導入により処理速度を約30%向上',
        '100件以上のOCR処理を安定稼働で実証'
      ]
    },
    {
      title: '業務管理システム開発（2年間）',
      period: '2022/06 ～ 2024/04',
      description: '株式会社ジーネックスにて業務管理システムの開発・保守。顧客管理、案件管理、請求管理機能を担当。',
      tech: ['Ruby on Rails', 'Laravel', 'Java', 'MySQL', 'Git'],
      role: 'フルスタック開発',
      achievements: [
        'OOP設計、MVCアーキテクチャの実務習得',
        'チーム開発の基礎を確立'
      ]
    }
  ];

  const personalProjects = [
    {
      title: 'Skill Tracker',
      period: '2026/01',
      description: 'フルスタックスキル管理アプリ。AI音声入力、データ可視化、ユーザー認証機能を実装。設計からデプロイまで一人で完結。',
      tech: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase', 'Gemini API', 'Chart.js', 'Framer Motion'],
      role: 'フルスタック開発',
      link: 'https://skill-tracker-mu.vercel.app',
      github: 'https://github.com/RyuseiMiyazawa/skill-tracker',
      image: '/skill-tracker.png',
      achievements: [
        'AI駆動入力による自動スキル抽出',
        '音声入力 + AI解析の実装',
        'Supabase RLSによるセキュアなデータ管理'
      ]
    }
  ];

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <div
      key={index}
      className="border border-gray-200 dark:border-gray-700 rounded-lg p-8 hover:shadow-xl transition-all hover:border-blue-400"
    >
      {project.image && (
        <div className="mb-6 rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
          {project.period}
        </span>
      </div>

      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold mb-3">
          {project.role}
        </span>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-400">主な成果：</h3>
        <ul className="space-y-1">
          {project.achievements.map((achievement: string, i: number) => (
            <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
              <span className="mr-2">✓</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-400">使用技術：</h3>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {(project.link || project.github) && (
        <div className="flex gap-4 mt-6">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              GitHub
            </a>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Personal Projects Section */}
      <section className="mb-20">
        <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Personal Projects
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">個人開発プロジェクト</p>

        <div className="max-w-5xl mx-auto space-y-8">
          {personalProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Work Experience Section */}
      <section>
        <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Work Experience
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">業務経歴</p>

        <div className="max-w-5xl mx-auto space-y-8">
          {workProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
