import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { personalInfo, stats, socialLinks } from '../data/portfolio'
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe, FaBug, FaShieldAlt, FaBriefcase, FaRocket, FaLaptopCode, FaCode, FaMedium, FaDev, FaStackOverflow, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { useModals } from '../context/ModalContext'

const iconMap = {
  FaGithub, FaLinkedin, FaEnvelope, FaGlobe, FaBug, FaShieldAlt,
  FaXTwitter, FaBriefcase, FaRocket, FaLaptopCode, FaCode,
  FaMedium, FaDev, FaStackOverflow,
}

export default function Hero() {
  const [showProfiles, setShowProfiles] = useState(false)
  const { setConnectOpen } = useModals()

  const grouped = socialLinks.reduce((acc, link) => {
    if (!acc[link.category]) acc[link.category] = []
    acc[link.category].push(link)
    return acc
  }, {})

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-terminal-green/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-terminal-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-sm text-terminal-green/60 mb-6"
          >
            <span className="text-terminal-green">$</span> whoami
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl sm:text-7xl md:text-8xl font-bold mb-4 tracking-tight"
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl font-mono text-gray-400 mb-8 h-10"
          >
            <span className="text-terminal-green mr-2">&gt;</span>
            <TypeAnimation
              sequence={personalInfo.typingTexts.flatMap(text => [text, 2000])}
              repeat={Infinity}
              speed={50}
              className="text-gray-300"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-500 font-mono text-sm mb-10"
          >
            @ {personalInfo.company} &middot; {personalInfo.location}
          </motion.p>

          {/* Quick links + Let's Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-4 mb-6"
          >
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 glass-card glow-border rounded-xl hover:text-terminal-green transition-all">
              <FaGithub size={22} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 glass-card glow-border rounded-xl hover:text-terminal-blue transition-all">
              <FaLinkedin size={22} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="p-3 glass-card glow-border rounded-xl hover:text-terminal-orange transition-all">
              <FaEnvelope size={22} />
            </a>
            <button
              onClick={() => setConnectOpen(true)}
              className="px-6 py-3 bg-terminal-green/10 border border-terminal-green/50 text-terminal-green font-mono text-sm rounded-xl hover:bg-terminal-green/20 transition-all flex items-center gap-2"
            >
              Let&apos;s Connect
            </button>
          </motion.div>

          {/* Collapsible All Profiles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mb-12"
          >
            <button
              onClick={() => setShowProfiles(!showProfiles)}
              className="mx-auto flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-terminal-green font-mono text-xs transition-colors"
            >
              {showProfiles ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
              {showProfiles ? 'hide profiles' : 'all profiles & links'}
              {showProfiles ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
            </button>

            <AnimatePresence>
              {showProfiles && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="glass-card glow-border rounded-2xl p-6 mt-3 max-w-2xl mx-auto">
                    {Object.entries(grouped).map(([category, links]) => (
                      <div key={category} className="mb-4 last:mb-0">
                        <div className="font-mono text-xs text-terminal-green/50 mb-2">// {category}</div>
                        <div className="flex flex-wrap gap-2">
                          {links.map((link) => {
                            const Icon = iconMap[link.icon] || FaGlobe
                            return (
                              <a
                                key={link.name}
                                href={link.url}
                                target={link.url.startsWith('http') ? '_blank' : undefined}
                                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="flex items-center gap-2 px-3 py-2 bg-terminal-bg/50 border border-terminal-border rounded-lg hover:border-terminal-green/50 hover:text-terminal-green transition-all text-gray-400 text-sm font-mono group"
                              >
                                <Icon size={14} className="group-hover:scale-110 transition-transform" />
                                {link.name}
                              </a>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div key={i} className="glass-card glow-border rounded-xl px-4 py-5 text-center flex flex-col justify-center min-h-[100px]">
                <div className="text-lg md:text-xl font-bold text-terminal-green font-mono leading-tight mb-1.5">{stat.value}</div>
                <div className="text-[11px] text-gray-500 font-mono leading-snug">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* Scroll indicator - fixed to bottom of viewport */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="font-mono text-terminal-green/40 text-xs text-center block hover:text-terminal-green/70 transition-colors"
        >
          scroll down
          <div className="mt-1">v</div>
        </motion.a>
      </motion.div>
    </section>
  )
}
