import { personalInfo } from '../data/portfolio'
import { FaGithub, FaLinkedin, FaEnvelope, FaTerminal } from 'react-icons/fa'
import { useModals } from '../context/ModalContext'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const { setResumeOpen, setConnectOpen } = useModals()

  return (
    <footer className="relative border-t border-terminal-border/50">
      {/* Terminal-style top bar */}
      <div className="bg-terminal-card/50 py-3 px-4 border-b border-terminal-border/30">
        <div className="max-w-7xl mx-auto flex items-center gap-2 font-mono text-xs text-gray-600">
          <FaTerminal size={10} className="text-terminal-green/50" />
          <span className="text-terminal-green/40">anurag@portfolio</span>
          <span className="text-gray-700">:</span>
          <span className="text-terminal-blue/40">~</span>
          <span className="text-gray-700">$</span>
          <span className="text-gray-500 ml-1">exit 0</span>
          <span className="text-terminal-green/30 ml-1">// session complete</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="font-mono text-lg font-bold mb-3">
              <span className="text-terminal-green">&lt;</span>
              <span className="text-white">AG</span>
              <span className="text-terminal-green"> /&gt;</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Sr. DevOps Engineer building resilient, secure infrastructure at scale. 4x cloud-certified. Open to DevOps, security, and freelance opportunities.
            </p>
            <div className="flex items-center gap-3">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-terminal-bg/60 border border-terminal-border/50 text-gray-500 hover:text-terminal-green hover:border-terminal-green/50 transition-all">
                <FaGithub size={16} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-terminal-bg/60 border border-terminal-border/50 text-gray-500 hover:text-terminal-blue hover:border-terminal-blue/50 transition-all">
                <FaLinkedin size={16} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="p-2 rounded-lg bg-terminal-bg/60 border border-terminal-border/50 text-gray-500 hover:text-terminal-orange hover:border-terminal-orange/50 transition-all">
                <FaEnvelope size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-mono text-xs text-terminal-green/50 mb-4">// quick_links</div>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-mono text-sm text-gray-500 hover:text-terminal-green transition-colors py-1"
                >
                  <span className="text-terminal-green/40 mr-1">$</span> {link.label.toLowerCase()}
                </a>
              ))}
              <button
                onClick={() => setResumeOpen(true)}
                className="font-mono text-sm text-gray-500 hover:text-terminal-green transition-colors py-1 text-left"
              >
                <span className="text-terminal-green/40 mr-1">$</span> resume.pdf
              </button>
            </div>
          </div>

          {/* Status */}
          <div>
            <div className="font-mono text-xs text-terminal-green/50 mb-4">// system_status</div>
            <div className="space-y-3 font-mono text-sm">
              <button onClick={() => setConnectOpen(true)} className="flex items-center gap-2 hover:text-terminal-green transition-colors">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-gray-400 hover:text-terminal-green">Available for hire</span>
              </button>
              <button onClick={() => setConnectOpen(true)} className="flex items-center gap-2 hover:text-terminal-green transition-colors">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-gray-400 hover:text-terminal-green">Open to freelance</span>
              </button>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-gray-400">99.9% uptime delivered</span>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-terminal-bg/60 border border-terminal-border/30">
                <div className="text-gray-600 text-xs">response_time</div>
                <div className="text-terminal-green text-sm">&lt; 24 hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-terminal-border/30 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="font-mono text-xs text-gray-600">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="font-mono text-xs text-gray-700 flex items-center gap-1">
            crafted with <span className="text-terminal-green">Terraform</span>, deployed with <span className="text-terminal-blue">ArgoCD</span>, powered by <span className="text-terminal-orange">caffeine</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
