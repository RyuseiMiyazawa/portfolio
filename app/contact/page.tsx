'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'エラーが発生しました');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'エラーが発生しました');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
  return (
    <div className="container mx-auto px-4 py-20 max-w-2xl">
      <h1 className="text-5xl font-bold mb-8 text-center">Contact</h1>

      <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
        お気軽にお問い合わせください
      </p>

      <div className="space-y-8">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">連絡先</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-700 dark:text-gray-300">Email</h3>
              <a href="mailto:miyazawar0926@gmail.com" className="text-blue-600 hover:underline">
                miyazawar0926@gmail.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 dark:text-gray-300">GitHub</h3>
              <a
                href="https://github.com/RyuseiMiyazawa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                github.com/RyuseiMiyazawa
              </a>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">お問い合わせフォーム</h2>

          {status === 'success' && (
            <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-300">
              メッセージを送信しました。ありがとうございます！
            </div>
          )}

          {status === 'error' && (
            <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                お名前
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                placeholder="山田太郎"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                メッセージ
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                placeholder="お問い合わせ内容をご記入ください"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? '送信中...' : '送信'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
