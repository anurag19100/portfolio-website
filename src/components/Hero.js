import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { personalInfo, stats } from '../data/portfolio'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Hero() {
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-4 mb-16"
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
            <a href="#contact" className="px-6 py-3 bg-terminal-green/10 border border-terminal-green/50 text-terminal-green font-mono text-sm rounded-xl hover:bg-terminal-green/20 transition-all flex items-center gap-2">
              Let&apos;s Connect
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div key={i} className="glass-card glow-border rounded-xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-terminal-green font-mono">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1 font-mono">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="font-mono text-terminal-green/40 text-xs text-center"
          >
            scroll down
            <div className="mt-1">v</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
