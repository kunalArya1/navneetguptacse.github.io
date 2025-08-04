export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-100 to-indigo-200 dark:from-gray-950 dark:via-slate-900 dark:to-indigo-950 transition-all duration-700 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-400 to-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-6 bg-white/10 dark:bg-black/20 shadow-2xl fixed top-0 left-0 z-50 backdrop-blur-lg border-b border-white/20 dark:border-gray-700/30">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img src="/globe.svg" alt="Logo" className="w-10 h-10 drop-shadow-xl animate-pulse" />
            <div className="absolute inset-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-30 animate-ping"></div>
          </div>
          <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">Navneet Gupta</span>
        </div>
        <div className="hidden md:flex gap-10 text-lg font-semibold">
          <a href="#home" className="relative group hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#projects" className="relative group hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#skills" className="relative group hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
            Skills
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#blog" className="relative group hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#experience" className="relative group hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
            Experience
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contact" className="relative group hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 mt-16 z-10 overflow-hidden">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-48 h-48 border border-purple-500 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 border border-pink-500 rounded-full animate-pulse animation-delay-4000"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-500 rounded-full animate-float"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-purple-500 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute top-60 left-1/3 w-2 h-2 bg-pink-500 rounded-full animate-float animation-delay-2000"></div>
          <div className="absolute bottom-40 right-20 w-3 h-3 bg-cyan-500 rounded-full animate-float animation-delay-3000"></div>
          <div className="absolute bottom-60 left-20 w-2 h-2 bg-green-500 rounded-full animate-float animation-delay-4000"></div>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-20 space-y-12 max-w-6xl mx-auto">
          {/* Animated Globe with Enhanced Effects */}
          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse blur-2xl"></div>
            </div>
            <div className="relative">
              <img src="/globe.svg" alt="Globe" className="w-36 h-36 mx-auto drop-shadow-2xl animate-spin-slow filter brightness-110" />
              <div className="absolute inset-0 w-36 h-36 mx-auto bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              {/* Orbital rings */}
              <div className="absolute -inset-8 border-2 border-blue-500/20 rounded-full animate-spin-reverse"></div>
              <div className="absolute -inset-16 border border-purple-500/20 rounded-full animate-spin-slow"></div>
            </div>
          </div>

          {/* Enhanced Typography */}
          <div className="space-y-8">
            <div className="relative">
              <h1 className="text-7xl sm:text-9xl font-black leading-none tracking-tight animate-fade-in-up">
                <span className="block bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl">
                  Navneet
                </span>
                <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent drop-shadow-2xl mt-2">
                  Gupta
                </span>
              </h1>
              {/* Text shadow effect */}
              <div className="absolute inset-0 text-7xl sm:text-9xl font-black leading-none tracking-tight opacity-20 blur-lg">
                <span className="block text-blue-500">Navneet</span>
                <span className="block text-purple-500 mt-2">Gupta</span>
              </div>
            </div>

            {/* Professional Title */}
            <div className="relative animate-fade-in-up animation-delay-500">
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-700 dark:text-gray-300 mb-4">
                Frontend Developer & 
                <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent"> Creative Technologist</span>
              </h2>
              <div className="flex justify-center space-x-4 mb-8">
                <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <div className="h-1 w-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                <div className="h-1 w-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></div>
              </div>
            </div>

            {/* Enhanced Description */}
            <p className="text-lg sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up animation-delay-700">
              Welcome to my digital universe. I craft 
              <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent font-semibold"> exceptional web experiences </span>
              that blend cutting-edge technology with stunning design. Let's build the future together.
            </p>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 animate-fade-in-up animation-delay-1000">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white font-bold shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 text-lg overflow-hidden transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>Let's Connect</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Sparkle effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full animate-ping"></div>
                <div className="absolute bottom-3 right-6 w-1 h-1 bg-white rounded-full animate-ping animation-delay-500"></div>
              </div>
            </a>
            
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl border-2 border-transparent bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm text-gray-800 dark:text-gray-200 font-bold transition-all duration-500 text-lg hover:scale-105 hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899) border-box'
              }}
            >
              <span className="flex items-center gap-3">
                <span>View Projects</span>
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
          </div>

          {/* Enhanced Tech Stack Icons */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 animate-fade-in-up animation-delay-1500">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm p-4 rounded-2xl border border-white/20 dark:border-gray-700/30 hover:scale-110 transition-all duration-300">
                <img src="/next.svg" alt="Next.js" className="w-12 h-12 drop-shadow-lg" />
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm p-4 rounded-2xl border border-white/20 dark:border-gray-700/30 hover:scale-110 transition-all duration-300">
                <img src="/vercel.svg" alt="Vercel" className="w-12 h-12 drop-shadow-lg" />
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm p-4 rounded-2xl border border-white/20 dark:border-gray-700/30 hover:scale-110 transition-all duration-300">
                <img src="/window.svg" alt="Window" className="w-12 h-12 drop-shadow-lg" />
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm p-4 rounded-2xl border border-white/20 dark:border-gray-700/30 hover:scale-110 transition-all duration-300">
                <img src="/file.svg" alt="File" className="w-12 h-12 drop-shadow-lg" />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400">
              <span className="text-sm font-medium">Scroll to explore</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 sm:px-16 relative">
        <div className="bg-white/20 dark:bg-gray-900/20 rounded-3xl backdrop-blur-xl shadow-2xl border border-white/30 dark:border-gray-700/30 p-8 sm:p-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full shadow-lg"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              Discover my latest work and creative solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Example Project Card */}
            <div className="group bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 backdrop-blur-sm border border-white/50 dark:border-gray-700/50">
              <div className="relative mb-6">
                <img src="/window.svg" alt="Project" className="w-20 h-20 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-blue-600 transition-colors">Portfolio Website</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center leading-relaxed">A modern portfolio website built with Next.js and Tailwind CSS, featuring responsive design and smooth animations.</p>
              <a href="#" className="group/link text-blue-600 hover:text-purple-500 font-semibold transition-colors relative">
                View Project
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover/link:w-full transition-all duration-300"></span>
              </a>
            </div>
            <div className="group bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 backdrop-blur-sm border border-white/50 dark:border-gray-700/50">
              <div className="relative mb-6">
                <img src="/file.svg" alt="Project" className="w-20 h-20 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-purple-600 transition-colors">Blog Platform</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center leading-relaxed">A fast and SEO-friendly blog platform with markdown support and easy content management.</p>
              <a href="#" className="group/link text-purple-600 hover:text-pink-500 font-semibold transition-colors relative">
                View Project
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover/link:w-full transition-all duration-300"></span>
              </a>
            </div>
            <div className="group bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 backdrop-blur-sm border border-white/50 dark:border-gray-700/50">
              <div className="relative mb-6">
                <img src="/globe.svg" alt="Project" className="w-20 h-20 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-green-600 transition-colors">Open Source Contributions</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center leading-relaxed">Contributed to various open source projects, improving documentation and adding new features.</p>
              <a href="#" className="group/link text-green-600 hover:text-blue-500 font-semibold transition-colors relative">
                View Project
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 group-hover/link:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-4 sm:px-16 relative">
        <div className="bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-gray-900/80 rounded-3xl backdrop-blur-xl shadow-2xl border border-white/30 dark:border-gray-700/30 p-8 sm:p-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">Skills</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full shadow-lg"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="group px-8 py-4 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl text-xl font-bold hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 border border-white/50 dark:border-gray-700/50 backdrop-blur-sm cursor-pointer">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-300">Next.js</span>
            </span>
            <span className="group px-8 py-4 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl text-xl font-bold hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 border border-white/50 dark:border-gray-700/50 backdrop-blur-sm cursor-pointer">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">React</span>
            </span>
            <span className="group px-8 py-4 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl text-xl font-bold hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 border border-white/50 dark:border-gray-700/50 backdrop-blur-sm cursor-pointer">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent group-hover:from-indigo-500 group-hover:to-purple-600 transition-all duration-300">TypeScript</span>
            </span>
            <span className="group px-8 py-4 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl text-xl font-bold hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 border border-white/50 dark:border-gray-700/50 backdrop-blur-sm cursor-pointer">
              <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent group-hover:from-teal-500 group-hover:to-cyan-500 transition-all duration-300">Tailwind CSS</span>
            </span>
            <span className="group px-8 py-4 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl text-xl font-bold hover:scale-110 hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 border border-white/50 dark:border-gray-700/50 backdrop-blur-sm cursor-pointer">
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent group-hover:from-emerald-500 group-hover:to-green-600 transition-all duration-300">Node.js</span>
            </span>
            <span className="group px-8 py-4 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl text-xl font-bold hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 border border-white/50 dark:border-gray-700/50 backdrop-blur-sm cursor-pointer">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent group-hover:from-red-500 group-hover:to-orange-500 transition-all duration-300">Git</span>
            </span>
            <span className="group px-8 py-4 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl text-xl font-bold hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 border border-white/50 dark:border-gray-700/50 backdrop-blur-sm cursor-pointer">
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent group-hover:from-rose-500 group-hover:to-pink-500 transition-all duration-300">Open Source</span>
            </span>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-32 px-4 sm:px-16 relative">
        <div className="bg-white/20 dark:bg-gray-900/20 rounded-3xl backdrop-blur-xl shadow-2xl border border-white/30 dark:border-gray-700/30 p-8 sm:p-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">Blog</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full shadow-lg"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights from my journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Example Blog Card */}
            <article className="group bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-xl p-8 flex flex-col hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 backdrop-blur-sm border border-white/50 dark:border-gray-700/50">
              <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"></div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors leading-tight">How to Build a Stunning Portfolio with Next.js</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed">A step-by-step guide to creating a beautiful and performant portfolio website using Next.js and Tailwind CSS.</p>
              <a href="#" className="group/link text-blue-600 hover:text-purple-500 font-semibold transition-colors mt-auto relative">
                Read More
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover/link:w-full transition-all duration-300"></span>
              </a>
            </article>
            <article className="group bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-xl p-8 flex flex-col hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 backdrop-blur-sm border border-white/50 dark:border-gray-700/50">
              <div className="h-2 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"></div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors leading-tight">Mastering TypeScript for React Developers</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed">Tips and best practices for using TypeScript effectively in your React projects.</p>
              <a href="#" className="group/link text-purple-600 hover:text-pink-500 font-semibold transition-colors mt-auto relative">
                Read More
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover/link:w-full transition-all duration-300"></span>
              </a>
            </article>
            <article className="group bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-xl p-8 flex flex-col hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 backdrop-blur-sm border border-white/50 dark:border-gray-700/50">
              <div className="h-2 w-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full mb-6"></div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-green-600 transition-colors leading-tight">Contributing to Open Source: Getting Started</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed">Learn how to make your first open source contribution and why it matters.</p>
              <a href="#" className="group/link text-green-600 hover:text-teal-500 font-semibold transition-colors mt-auto relative">
                Read More
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-teal-500 group-hover/link:w-full transition-all duration-300"></span>
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-4 sm:px-16 relative">
        <div className="bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-gray-900/80 rounded-3xl backdrop-blur-xl shadow-2xl border border-white/30 dark:border-gray-700/30 p-8 sm:p-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">Experience</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full shadow-lg"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              My professional journey and milestones
            </p>
          </div>
          <div className="flex flex-col gap-12 max-w-4xl mx-auto">
            <div className="group bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-xl p-8 flex flex-col sm:flex-row gap-8 items-center hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 backdrop-blur-sm border border-white/50 dark:border-gray-700/50">
              <div className="relative">
                <img src="/vercel.svg" alt="Company" className="w-20 h-20 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-3xl font-bold mb-2 group-hover:text-blue-600 transition-colors">Frontend Developer @ Vercel</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 font-semibold">2023 - Present</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">Building scalable and performant web applications with Next.js and React. Working on cutting-edge projects that serve millions of users worldwide.</p>
              </div>
            </div>
            <div className="group bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-xl p-8 flex flex-col sm:flex-row gap-8 items-center hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 backdrop-blur-sm border border-white/50 dark:border-gray-700/50">
              <div className="relative">
                <img src="/next.svg" alt="Company" className="w-20 h-20 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-3xl font-bold mb-2 group-hover:text-purple-600 transition-colors">Open Source Contributor</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 font-semibold">2021 - 2023</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">Contributed to various open source projects, improved documentation, and added new features. Active member of the developer community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="w-full py-16 text-center relative mt-20">
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/30 shadow-2xl">
          <div className="max-w-6xl mx-auto px-8 py-12">
            <div className="mb-12">
              <h2 className="text-4xl sm:text-5xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">Let's Connect</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full shadow-lg mb-6"></div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Ready to bring your ideas to life? Let's collaborate and create something amazing together.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
              <a 
                href="https://github.com/navneetguptacse" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-3 px-8 py-4 bg-white/20 dark:bg-gray-800/20 rounded-2xl backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
              >
                <span className="text-xl font-semibold group-hover:text-blue-600 transition-colors">GitHub</span>
                <span className="text-sm opacity-70">@navneetguptacse</span>
              </a>
              <a 
                href="https://linkedin.com/in/navneetguptacse" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-3 px-8 py-4 bg-white/20 dark:bg-gray-800/20 rounded-2xl backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
              >
                <span className="text-xl font-semibold group-hover:text-blue-600 transition-colors">LinkedIn</span>
                <span className="text-sm opacity-70">@navneetguptacse</span>
              </a>
              <a 
                href="mailto:navneetguptacse@gmail.com" 
                className="group flex items-center gap-3 px-8 py-4 bg-white/20 dark:bg-gray-800/20 rounded-2xl backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <span className="text-xl font-semibold group-hover:text-purple-600 transition-colors">Email</span>
                <span className="text-sm opacity-70">navneetguptacse@gmail.com</span>
              </a>
            </div>
            
            <div className="border-t border-white/20 dark:border-gray-700/30 pt-8">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                &copy; {new Date().getFullYear()} <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">Navneet Gupta</span>. All rights reserved.
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
                Designed with ❤️ using Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
