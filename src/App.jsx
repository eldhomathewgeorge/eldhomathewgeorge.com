import profile from '/assets/profile.jpg'
import DarkModeToggle from './components/DarkModeToggle';


export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      {/* Navigation */}
      <nav className="max-w-5xl mx-auto w-full px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-tealAccent">Eldho Mathew George</h1>
        <div className="flex items-center space-x-4">
        <a href="#projects" className="hover:text-tealAccent">Projects</a>
        <a href="#blog" className="hover:text-tealAccent">Blog</a>
        <a href="#contact" className="hover:text-tealAccent">Contact</a>
        <DarkModeToggle />
</div>

      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl w-full">
          <div>
            <h2 className="text-4xl font-bold mb-2">Hi, I’m <span className="text-tealAccent">Eldho</span>.</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I’m a Full-Stack .NET Developer passionate about building scalable web applications 
              and creating helpful tools like <a href="https://quickfincalc.in" className="text-tealAccent underline">QuickFinCalc</a>.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#projects" className="px-5 py-2 bg-tealAccent text-white rounded-lg hover:opacity-90">View Projects</a>
              <a href="/assets/Resume.pdf" className="px-5 py-2 border border-tealAccent text-tealAccent rounded-lg hover:bg-tealAccent hover:text-white">Download Resume</a>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={profile} alt="Eldho Mathew George" className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-tealAccent" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Eldho Mathew George — Built with React & TailwindCSS
      </footer>
    </div>
  )
}
