import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaDownload, FaExpand } from 'react-icons/fa'
import { personalInfo } from '../data/portfolio'

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl h-[85vh] glass-card rounded-2xl overflow-hidden border border-terminal-border"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 bg-terminal-card border-b border-terminal-border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer hover:bg-red-500" onClick={onClose} />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-gray-500 font-mono text-xs ml-2">anurag_gupta_cv.pdf</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.resumeFile}
                  download
                  className="p-2 text-gray-500 hover:text-terminal-green transition-colors"
                  title="Download"
                >
                  <FaDownload size={14} />
                </a>
                <a
                  href={personalInfo.resumeFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-500 hover:text-terminal-green transition-colors"
                  title="Open in new tab"
                >
                  <FaExpand size={14} />
                </a>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-white transition-colors"
                >
                  <FaTimes size={14} />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <iframe
              src={`${personalInfo.resumeFile}#toolbar=0&navpanes=0`}
              className="w-full h-full bg-white"
              title="Resume"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
