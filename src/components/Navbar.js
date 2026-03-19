import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolio'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-terminal-bg/90 backdrop-blur-xl border-b border-terminal-border' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-mono text-terminal-green font-bold text-lg hover:animate-glow">
            &lt;AG /&gt;
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-sm text-gray-400 hover:text-terminal-green transition-colors relative group"
              >
                <span className="text-terminal-green/50 mr-1">./</span>
                {link.name.toLowerCase()}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-terminal-green group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href={personalInfo.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-terminal-green/50 text-terminal-green font-mono text-sm rounded hover:bg-terminal-green/10 transition-all"
            >
              resume.pdf
            </a>
          </div>
          <button
            className="md:hidden text-terminal-green"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="font-mono text-sm">{mobileOpen ? '[x]' : '[=]'}</div>
          </button>
        </div>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden pb-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 font-mono text-sm text-gray-400 hover:text-terminal-green"
              >
                <span className="text-terminal-green/50">$ </span>cd {link.name.toLowerCase()}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
