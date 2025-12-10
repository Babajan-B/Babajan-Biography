"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Menu, X, Youtube, ExternalLink, Play } from "lucide-react";

const navItems = [
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "skills", label: "My Skills" },
  { id: "work", label: "Work" },
  { id: "youtube", label: "YouTube" },
  { id: "tools", label: "Tools" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background decorative text */}
      <div className="bg-text bg-text-1">DESIGN</div>
      <div className="bg-text bg-text-2">CODE</div>
      <div className="bg-text bg-text-3">BIOINFORMATICS</div>

      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex lg:flex-col fixed left-0 top-0 h-full sidebar-width glass p-8 z-40">
        <div className="flex flex-col items-start mb-12">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 via-pink-500 to-teal-400 flex items-center justify-center mb-4 glow">
            <span className="text-2xl font-black text-black">B</span>
          </div>
          <div>
            <h1 className="text-xl font-bold">Babajan</h1>
            <p className="text-sm text-gray-400 mt-1">Bioinformatics Lead</p>
          </div>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-cyan-400/20 to-teal-400/20 text-cyan-300 border-l-2 border-cyan-400"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8">
          <div className="flex gap-4 mb-6">
            <a href="https://github.com/Babajan-B" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/babajan-banaganapalli" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://youtube.com/@bioinformaticswithbb" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors">
              <Youtube size={20} />
            </a>
            <a href="https://scholar.google.com/citations?user=UawBJy8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/></svg>
            </a>
          </div>
          <div className="vertical-text text-xs text-gray-500 text-center">
            Scroll down ↓
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 glass z-50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-pink-500 to-teal-400 flex items-center justify-center">
              <span className="text-lg font-black text-black">B</span>
            </div>
            <span className="font-bold">Babajan</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 glass mt-2 mx-6 rounded-xl p-4"
          >
            <nav>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="lg:ml-[280px] relative z-10">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20 lg:pt-0">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                              <div className="space-y-8">
              {/* Social Links Bar */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4"
              >
                <a
                  href="https://github.com/Babajan-B"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 glass rounded-full hover:bg-white/10 transition-all duration-300 group"
                >
                  <Github size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors hidden sm:inline">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/babajan-banaganapalli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 glass rounded-full hover:bg-white/10 transition-all duration-300 group"
                >
                  <Linkedin size={18} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                  <span className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors hidden sm:inline">LinkedIn</span>
                </a>
                <a
                  href="https://youtube.com/@bioinformaticswithbb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 glass rounded-full hover:bg-white/10 transition-all duration-300 group"
                >
                  <Youtube size={18} className="text-gray-400 group-hover:text-red-500 transition-colors" />
                  <span className="text-sm text-gray-400 group-hover:text-red-500 transition-colors hidden sm:inline">YouTube</span>
                </a>
                <a
                  href="https://scholar.google.com/citations?user=UawBJy8AAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 glass rounded-full hover:bg-white/10 transition-all duration-300 group"
                >
                  <svg className="w-[18px] h-[18px] text-gray-400 group-hover:text-blue-500 transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/></svg>
                  <span className="text-sm text-gray-400 group-hover:text-blue-500 transition-colors hidden sm:inline">Scholar</span>
                </a>
              </motion.div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-sm text-gray-400 mb-4"
                >
                  &lt;introduction&gt;
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl lg:text-7xl font-black leading-[1.1] mb-6"
                >
                  Hi,<br />
                  I&apos;m <span className="gradient-text">Dr Babajan</span>,<br />
                  Lead Bioinformatics Scientist
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg text-gray-300 mb-8 max-w-md"
                >
                  Expert in Bioinformatics with over 15 years of experience in advanced bioinformatics, AI-driven pipeline generation, and computational biology.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Link
                    href="#contact"
                    className="inline-flex items-center px-8 py-4 rounded-lg btn-primary font-bold text-lg transition-all duration-300"
                  >
                    Contact me!
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -bottom-4 right-0 text-sm text-gray-400"
                >
                  &lt;/introduction&gt;
                </motion.div>
              </div>
            </div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-pink-500 to-teal-400 rounded-3xl glow"></div>
                <div className="absolute inset-2 rounded-3xl overflow-hidden">
          <Image
                    src="/profile.jpg"
                    alt="Dr Babajan Banaganapalli"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                          <span class="text-6xl font-bold text-gray-600">B</span>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-10 -right-6 bg-pink-500 text-black px-3 py-1 rounded-full text-sm font-bold glow-pink">
                GEN AI
              </div>
              <div className="absolute -bottom-6 -left-6 bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                HOURS
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <Section id="about" title="About">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I am Dr. Babajan Banaganapalli, a Lead Bioinformatics Scientist with more than fifteen years of experience in advanced bioinformatics and computational biology. I am the founder of <a href="https://bioinformaticsbb.online" className="text-cyan-400 hover:text-cyan-300 transition-colors">Bioinformatics with BB</a>, a comprehensive platform dedicated to empowering the scientific community through innovative training programs and state of the art bioinformatics solutions.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My work centers on advancing genomics and multi omics research through the strategic integration of modern AI capabilities. I have mastered recent AI and foundation model technologies, enabling me to streamline and accelerate the development of sophisticated applications in genomics, clinical bioinformatics, proteomics, and drug discovery. By applying these tools, I design intelligent workflows, automate complex analyses, and deliver scalable solutions that enhance research efficiency and drive scientific innovation. Through my platform, I translate these advancements into practical training and specialized services for researchers worldwide.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Years Experience", value: "13+" },
                { label: "Projects Completed", value: "50+" },
                { label: "Research Papers", value: "110+" },
                { label: "AI Models Developed", value: "15+" }
              ].map((stat, index) => (
                <div key={index} className="flex justify-between items-center p-4 glass rounded-lg">
                  <span className="text-gray-300">{stat.label}</span>
                  <span className="text-2xl font-bold gradient-text">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Portfolio Section */}
        <Section id="portfolio" title="Portfolio">
          {/* Research Category */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold gradient-text mb-6 text-center">Research</h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {/* Google Scholar Profile */}
              <motion.a
                href="https://scholar.google.com/citations?user=UawBJy8AAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group glass rounded-xl p-5 hover:bg-white/10 transition-all duration-300 cursor-pointer flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold group-hover:gradient-text transition-all duration-300 mb-1">
                    Google Scholar
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">Research profile with citations</p>
                  <div className="flex items-center text-blue-400 text-xs group-hover:text-blue-300 transition-colors">
                    <ExternalLink size={12} className="mr-1" />
                    View Profile
                  </div>
                </div>
              </motion.a>

              {/* Bioinformatics Books */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="group glass rounded-xl p-5 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold gradient-text mb-1">
                      Bioinformatics Books
                    </h3>
                    <p className="text-gray-400 text-sm">Published on Springer</p>
                  </div>
                </div>
                <div className="space-y-1.5 pl-16">
                  <a
                    href="https://link.springer.com/book/10.1007/978-3-030-02634-9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-cyan-400 text-xs hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink size={10} className="mr-1.5 flex-shrink-0" />
                    <span className="truncate">Essentials of Bioinformatics Vol. I</span>
                  </a>
                  <a
                    href="https://link.springer.com/book/10.1007/978-3-030-18375-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-cyan-400 text-xs hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink size={10} className="mr-1.5 flex-shrink-0" />
                    <span className="truncate">Essentials of Bioinformatics Vol. II</span>
                  </a>
                  <a
                    href="https://link.springer.com/book/10.1007/978-3-030-19318-8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-cyan-400 text-xs hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink size={10} className="mr-1.5 flex-shrink-0" />
                    <span className="truncate">Essentials of Bioinformatics Vol. III</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Software Development Category */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-6 text-center">Software Development</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Android Apps */}
              <motion.a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group glass rounded-xl p-5 hover:bg-white/10 transition-all duration-300 cursor-pointer flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                    <line x1="12" y1="18" x2="12.01" y2="18"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold group-hover:gradient-text transition-all duration-300 mb-1">Android Apps</h3>
                  <p className="text-gray-400 text-sm mb-2">Quran Telugu & Urdu/English apps</p>
                  <div className="flex items-center text-green-400 text-xs group-hover:text-green-300 transition-colors">
                    <ExternalLink size={12} className="mr-1" />
                    Google Play
                  </div>
                </div>
              </motion.a>

              {/* Bioinformatics Tools */}
              <motion.a
                href="https://bioinformaticsbb.online"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="group glass rounded-xl p-5 hover:bg-white/10 transition-all duration-300 cursor-pointer flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold group-hover:gradient-text transition-all duration-300 mb-1">Bioinformatics Tools</h3>
                  <p className="text-gray-400 text-sm mb-2">15+ analysis tools & pipelines</p>
                  <div className="flex items-center text-cyan-400 text-xs group-hover:text-cyan-300 transition-colors">
                    <ExternalLink size={12} className="mr-1" />
                    Web Platform
                  </div>
                </div>
              </motion.a>

              {/* Medical Journal Platform */}
              <motion.a
                href="https://bioinformaticsbb.online"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="group glass rounded-xl p-5 hover:bg-white/10 transition-all duration-300 cursor-pointer flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold group-hover:gradient-text transition-all duration-300 mb-1">Medical Journal</h3>
                  <p className="text-gray-400 text-sm mb-2">Journal of Advanced Medicine</p>
                  <div className="flex items-center text-blue-400 text-xs group-hover:text-blue-300 transition-colors">
                    <ExternalLink size={12} className="mr-1" />
                    Website
                  </div>
                </div>
              </motion.a>

              {/* Clinical Analysis Tools */}
              <motion.a
                href="https://bioinformaticsbb.online"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="group glass rounded-xl p-5 hover:bg-white/10 transition-all duration-300 cursor-pointer flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold group-hover:gradient-text transition-all duration-300 mb-1">Clinical Tools</h3>
                  <p className="text-gray-400 text-sm mb-2">ACMG classifier & variant prediction</p>
                  <div className="flex items-center text-red-400 text-xs group-hover:text-red-300 transition-colors">
                    <ExternalLink size={12} className="mr-1" />
                    Web Tools
                  </div>
                </div>
              </motion.a>

              {/* Educational Resources */}
              <motion.a
                href="https://bioinformaticsbb.online"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="group glass rounded-xl p-5 hover:bg-white/10 transition-all duration-300 cursor-pointer flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold group-hover:gradient-text transition-all duration-300 mb-1">Educational Resources</h3>
                  <p className="text-gray-400 text-sm mb-2">Books, tutorials & learning materials</p>
                  <div className="flex items-center text-purple-400 text-xs group-hover:text-purple-300 transition-colors">
                    <ExternalLink size={12} className="mr-1" />
                    Publications
                  </div>
                </div>
              </motion.a>

              {/* AI Pipeline Generator */}
              <motion.a
                href="https://bioinformaticsbb.online"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="group glass rounded-xl p-5 hover:bg-white/10 transition-all duration-300 cursor-pointer flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold group-hover:gradient-text transition-all duration-300 mb-1">AI Pipeline Generator</h3>
                  <p className="text-gray-400 text-sm mb-2">Automated bioinformatics pipelines</p>
                  <div className="flex items-center text-orange-400 text-xs group-hover:text-orange-300 transition-colors">
                    <ExternalLink size={12} className="mr-1" />
                    Web Platform
                  </div>
                </div>
              </motion.a>
            </div>
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="My Skills">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: "Bioinformatics", skills: ["Genomics", "Variant Analysis", "NGS", "GWAS"] },
              { category: "AI/ML", skills: ["Deep Learning", "NLP", "Computer Vision", "MLOps"] },
              { category: "Programming", skills: ["Python", "R", "JavaScript", "SQL"] },
              { category: "Frameworks", skills: ["TensorFlow", "PyTorch", "React", "Next.js"] },
              { category: "Cloud/DevOps", skills: ["AWS", "Docker", "Kubernetes", "CI/CD"] },
              { category: "Databases", skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] }
            ].map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl"
              >
                <h3 className="text-lg font-bold gradient-text mb-4">{group.category}</h3>
                <div className="space-y-2">
                  {group.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Work Section */}
        <Section id="work" title="Work">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Clinical Bioinformatics",
                description: "Advanced diagnostics and variant analysis workflows for clinical applications",
                tags: ["Clinical", "Genomics", "Diagnostics"],
                status: "Featured"
              },
              {
                title: "Proteomics Analysis",
                description: "Mass spectrometry data processing and peptide identification solutions",
                tags: ["Proteomics", "Mass Spec", "Analysis"],
                status: "Active"
              },
              {
                title: "Drug Designing",
                description: "Structure-based drug design and computational molecular modeling tools",
                tags: ["Drug Design", "Molecular Modeling"],
                status: "Live"
              },
              {
                title: "Machine Learning",
                description: "AI-driven biomarker discovery and predictive modeling for precision medicine",
                tags: ["ML", "AI", "Biomarkers"],
                status: "Active"
              },
              {
                title: "Systems Biology",
                description: "Neoantigen modeling and pathway analysis workflows",
                tags: ["Systems Biology", "Pathways"],
                status: "Live"
              },
              {
                title: "AI Pipeline Generation",
                description: "Automated pipelines for high-throughput bioinformatics data analysis",
                tags: ["AI", "Automation", "Pipelines"],
                status: "Featured"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer"
                onClick={() => window.open("https://bioinformaticsbb.online", "_blank")}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-cyan-400/20 text-cyan-300">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-cyan-400 text-sm group-hover:text-cyan-300 transition-colors">
                  <ExternalLink size={16} className="mr-2" />
                  Visit Bioinformatics with BB
                </div>
              </motion.div>
            ))}
          </div>
        </Section>


        {/* YouTube Section */}
        <Section id="youtube" title="YouTube Channel">
          <div className="text-center mb-12">
            <div className="glass p-8 rounded-xl max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Youtube className="text-red-500" size={48} />
                <div>
                  <h3 className="text-2xl font-bold gradient-text">Bioinformatics with BB</h3>
                  <p className="text-gray-400">Learn bioinformatics and cutting-edge advancements</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">40+</div>
                  <div className="text-gray-400">Videos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">25K+</div>
                  <div className="text-gray-400">Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">1.5M+</div>
                  <div className="text-gray-400">Views</div>
                </div>
              </div>
              
              <button
                onClick={() => window.open("https://youtube.com/@bioinformaticswithbb", "_blank")}
                className="btn-primary px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center gap-3 transition-all duration-300"
              >
                <Youtube size={24} />
                Visit YouTube Channel
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Bioinformatics Fundamentals", category: "Beginner", duration: "15:30" },
              { title: "Python for Bioinformatics", category: "Programming", duration: "22:45" },
              { title: "NGS Data Analysis", category: "Advanced", duration: "28:10" },
              { title: "Machine Learning in Genomics", category: "AI/ML", duration: "35:20" },
              { title: "Drug Design Workflows", category: "Structural Biology", duration: "18:55" },
              { title: "Proteomics Analysis", category: "Analysis", duration: "25:40" },
              { title: "Clinical Bioinformatics", category: "Clinical", duration: "30:15" },
              { title: "AI Pipeline Development", category: "AI/ML", duration: "40:30" }
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group glass rounded-xl overflow-hidden cursor-pointer hover:bg-white/10 transition-all duration-300"
                onClick={() => window.open("https://youtube.com/@bioinformaticswithbb", "_blank")}
              >
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative flex items-center justify-center">
                  <Play className="text-white/60 group-hover:text-red-400 transition-colors" size={32} />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-300 group-hover:gradient-text transition-all duration-300 mb-2">
                    {video.title}
                  </h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-400">
                    {video.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Tools Section */}
        <Section id="tools" title="Bioinformatics Tools">
          <div className="mb-8 text-center">
            <p className="text-gray-400 max-w-2xl mx-auto">
              Access our comprehensive suite of bioinformatics tools designed for researchers and students. 
              All tools are available at <a href="https://bioinformaticsbb.online" className="text-cyan-400 hover:text-cyan-300 transition-colors">bioinformaticsbb.online</a>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Data Visualization",
                tools: ["Basic Plots", "Chromatogram Viewer"],
                description: "Interactive visualization tools for data analysis"
              },
              {
                category: "Sequence Analysis", 
                tools: ["Sequence Search Tool", "Nucleotide Sequence Annotation", "Pairwise Alignment"],
                description: "Comprehensive sequence analysis utilities"
              },
              {
                category: "Gene Expression",
                tools: ["MicroArray Analysis", "RNA-Seq Analysis"],
                description: "Advanced expression analysis pipelines"
              },
              {
                category: "MAF & Prediction",
                tools: ["MAF Tool (GnomeAD)", "REVEL and MAF", "Genome Converter"],
                description: "Variant frequency and pathogenicity prediction"
              },
              {
                category: "Primer Design",
                tools: ["Advanced Primer Design"],
                description: "Sophisticated PCR primer design with specificity checking"
              },
              {
                category: "Custom Services",
                tools: ["Tailored Solutions"],
                description: "Custom bioinformatics solutions for specific needs"
              }
            ].map((toolGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer"
                onClick={() => window.open("https://bioinformaticsbb.online", "_blank")}
              >
                <h3 className="text-xl font-bold gradient-text mb-3">{toolGroup.category}</h3>
                <p className="text-gray-400 text-sm mb-4">{toolGroup.description}</p>
                
                <div className="space-y-2 mb-4">
                  {toolGroup.tools.map((tool, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                      <span className="text-gray-300 text-sm">{tool}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center text-cyan-400 text-sm hover:text-cyan-300 transition-colors">
                  <ExternalLink size={16} className="mr-2" />
                  Launch Tools
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 glass p-6 rounded-xl text-center">
            <h4 className="text-xl font-bold gradient-text mb-4">Note</h4>
            <p className="text-gray-400">
              Please note that loading tools may take 30–50 seconds. All tools are hosted on our platform for optimal performance and reliability.
            </p>
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Contact">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold gradient-text mb-4">Let&apos;s work together</h3>
                <p className="text-gray-300 leading-relaxed">
                  I&apos;m always interested in new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out.
                </p>
              </div>
              
              <div className="space-y-4">
                <a
                  href="mailto:b.babajaan@gmail.com"
                  className="flex items-center gap-4 p-4 glass rounded-lg hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center">
                    <Mail className="text-black" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold group-hover:gradient-text transition-all duration-300">Email</div>
                    <div className="text-sm text-gray-400">b.babajaan@gmail.com</div>
                  </div>
                </a>
                
                <a
                  href="https://linkedin.com/in/babajan-banaganapalli"
                  className="flex items-center gap-4 p-4 glass rounded-lg hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <Linkedin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold group-hover:gradient-text transition-all duration-300">LinkedIn</div>
                    <div className="text-sm text-gray-400">Connect with me</div>
                  </div>
                </a>

                <a
                  href="https://youtube.com/@bioinformaticswithbb"
                  className="flex items-center gap-4 p-4 glass rounded-lg hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                    <Youtube className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold group-hover:gradient-text transition-all duration-300">YouTube</div>
                    <div className="text-sm text-gray-400">Bioinformatics with BB</div>
                  </div>
                </a>

                <a
                  href="https://bioinformaticsbb.online"
                  className="flex items-center gap-4 p-4 glass rounded-lg hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center">
                    <ExternalLink className="text-black" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold group-hover:gradient-text transition-all duration-300">Website</div>
                    <div className="text-sm text-gray-400">bioinformaticsbb.online</div>
                  </div>
                </a>
              </div>
            </div>
            
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const data = Object.fromEntries(new FormData(form).entries());
                
                try {
                  await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                  });
                  form.reset();
                  alert("Message sent! I'll get back to you soon.");
                } catch {
                  alert("Something went wrong. Please try again.");
                }
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg glass outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg glass outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                />
              </div>
              <textarea
                name="message"
                required
                placeholder="Your message..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg glass outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full btn-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </Section>
      </main>
    </div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">{title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full"></div>
        </motion.div>
        <div className="relative">
          {children}
        </div>
      </div>
    </section>
  );
}
