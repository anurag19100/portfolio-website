import { personalInfo } from '../data/portfolio'
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-terminal-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm text-gray-500">
            <span className="text-terminal-green">&lt;</span>
            Built by {personalInfo.name}
            <span className="text-terminal-green"> /&gt;</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-terminal-green transition-colors">
              <FaGithub size={18} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-terminal-blue transition-colors">
              <FaLinkedin size={18} />
            </a>
          </div>
          <div className="font-mono text-xs text-gray-600 flex items-center gap-1">
            Made with <FaHeart className="text-red-500" size={10} /> and lots of YAML
          </div>
        </div>
      </div>
    </footer>
  )
}
