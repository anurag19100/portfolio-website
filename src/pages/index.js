import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Terminal from '../components/Terminal'
import ResumeModal from '../components/ResumeModal'
import ConnectModal from '../components/ConnectModal'
import { useModals } from '../context/ModalContext'

export default function Home() {
  const { resumeOpen, setResumeOpen, connectOpen, setConnectOpen } = useModals()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Head>
        <title>Anurag Gupta | DevOps Engineer</title>
      </Head>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 bg-terminal-bg flex items-center justify-center z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <div className="font-mono text-terminal-green text-sm mb-4">
                <span className="opacity-60">$</span> initializing system...
              </div>
              <div className="w-64 h-1 bg-terminal-border rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-terminal-green to-terminal-blue"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.8 }}
                />
              </div>
              <div className="font-mono text-terminal-green/50 text-xs mt-2">
                loading modules...
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Terminal />
              <Skills />
              <Experience />
              <Projects />
              <Education />
              <Contact />
            </main>
            <Footer />
            <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
            <ConnectModal isOpen={connectOpen} onClose={() => setConnectOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
