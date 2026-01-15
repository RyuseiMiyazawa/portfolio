'use client';

import { Rocket, Code2, Zap } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-20">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center">
        <div className="mb-8">
          <Image
            src="/profile.jpg"
            alt="宮澤 琉世"
            width={200}
            height={200}
            className="rounded-full object-cover shadow-xl"
            priority
          />
        </div>
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          宮澤 琉世
        </h1>
        <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Full Stack Developer | Freelance Engineer
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mb-10">
          フロントエンド・バックエンド・インフラまで一貫対応できるフルスタックエンジニアです。
          <br />
          AIを実業務に組み込んで運用まで落とし込む実装力と、新しい技術への迅速なキャッチアップが強みです。
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/RyuseiMiyazawa"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            GitHub
          </a>
          <a
            href="#skills"
            className="px-8 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            View Skills
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Languages</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• TypeScript</li>
              <li>• Python</li>
              <li>• Ruby</li>
              <li>• Java</li>
              <li>• PHP</li>
              <li>• SQL / VBA</li>
            </ul>
          </div>
          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-purple-600">Frontend</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Next.js (App Router)</li>
              <li>• React / React Query</li>
              <li>• Chakra UI</li>
              <li>• Tailwind CSS</li>
              <li>• Framer Motion</li>
              <li>• Chart.js</li>
            </ul>
          </div>
          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-green-600">Backend</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• FastAPI</li>
              <li>• Ruby on Rails</li>
              <li>• Laravel</li>
              <li>• REST API設計</li>
            </ul>
          </div>
          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-orange-600">Cloud & Infrastructure</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• AWS (Lambda, S3, SQS, API Gateway)</li>
              <li>• Docker</li>
              <li>• Vercel</li>
              <li>• Supabase</li>
            </ul>
          </div>
          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-pink-600">AI / API</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• OpenAI API (GPT-4)</li>
              <li>• Google Gemini API</li>
              <li>• プロンプトエンジニアリング</li>
            </ul>
          </div>
          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Database & Tools</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• PostgreSQL / MySQL</li>
              <li>• Git / GitHub</li>
              <li>• ESLint / Prettier</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 -mx-4 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">強み</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Rocket className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI実装力</h3>
              <p className="text-gray-600 dark:text-gray-400">
                AIを検証で終わらせず、実業務に組み込んで運用まで落とし込む
              </p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-purple-100 dark:bg-purple-900 rounded-full">
                <Code2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">フルスタック対応</h3>
              <p className="text-gray-600 dark:text-gray-400">
                フロントからインフラまで一人で設計・実装・デプロイできる
              </p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-yellow-100 dark:bg-yellow-900 rounded-full">
                <Zap className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">高速キャッチアップ</h3>
              <p className="text-gray-600 dark:text-gray-400">
                新しい技術への迅速な習得と実務への応用力
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
