import profile from '/assets/profile.jpg'
import DarkModeToggle from './components/DarkModeToggle'

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      {/* Navigation */}
      <nav className="w-full border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg sm:text-xl font-semibold text-tealAccent">
            Eldho Mathew George
          </h1>
          <div className="flex items-center space-x-4 text-sm sm:text-base">
            <a href="#projects" className="hover:text-tealAccent">Projects</a>
            <a href="#blog" className="hover:text-tealAccent">Blog</a>
            <a href="#contact" className="hover:text-tealAccent">Contact</a>
            <DarkModeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 py-10 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl w-full">
          
          {/* Text Section */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
              Hi, I’m <span className="text-tealAccent">Eldho.</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I’m a Full-Stack .NET Developer passionate about building scalable web applications 
              and creating helpful tools like{' '}
              <a href="https://quickfincalc.in" className="text-tealAccent underline">
                QuickFinCalc
              </a>.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="px-5 py-2 bg-tealAccent text-white rounded-lg hover:opacity-90 transition"
              >
                View Projects
              </a>
              <a
                href="/assets/Resume.pdf"
                className="px-5 py-2 border border-tealAccent text-tealAccent rounded-lg hover:bg-tealAccent hover:text-white transition"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
              <img
                src={profile}
                alt="Eldho Mathew George"
                className="rounded-full object-cover w-full h-full border-4 border-tealAccent shadow-lg"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs sm:text-sm text-gray-500 border-t border-gray-100 dark:border-gray-800">
        © {new Date().getFullYear()} Eldho Mathew George — Built with React & TailwindCSS
      </footer>
    </div>
  )
}
