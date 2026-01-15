export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} 宮澤 琉世. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="https://github.com/RyuseiMiyazawa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://skill-tracker-mu.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
            >
              Skill Tracker
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
