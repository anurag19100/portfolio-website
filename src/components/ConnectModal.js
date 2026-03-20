import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaEnvelope, FaLaptopCode, FaBriefcase, FaShieldAlt, FaServer, FaPaperPlane, FaCheck, FaSpinner, FaCalendarAlt } from 'react-icons/fa'
import { personalInfo } from '../data/portfolio'

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ''

const inquiryTypes = [
  { id: 'freelance', label: 'Freelance Project', icon: FaLaptopCode, color: 'text-terminal-blue', subject: 'Freelance Inquiry', description: 'DevOps consulting, cloud migration, infra audits' },
  { id: 'hiring', label: 'Job Opportunity', icon: FaBriefcase, color: 'text-terminal-green', subject: 'Job Opportunity', description: 'Full-time or contract DevOps/SRE roles' },
  { id: 'security', label: 'Security Audit', icon: FaShieldAlt, color: 'text-terminal-orange', subject: 'Security Audit Request', description: 'Infrastructure security, compliance, pen-testing' },
  { id: 'general', label: 'General Inquiry', icon: FaServer, color: 'text-gray-400', subject: 'General Inquiry', description: 'Collaboration, open-source, or just say hi' },
]

export default function ConnectModal({ isOpen, onClose }) {
  const [selected, setSelected] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '', budget: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const resetForm = () => {
    setSelected(null)
    setFormData({ name: '', email: '', message: '', budget: '' })
    setStatus('idle')
  }

  const handleClose = () => {
    onClose()
    setTimeout(resetForm, 300)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const type = inquiryTypes.find(t => t.id === selected)

    // If no Web3Forms key, fallback to mailto
    if (!WEB3FORMS_KEY) {
      const subject = `${type?.subject || "Let's Connect"} — from ${formData.name || 'Portfolio'}`
      const body = [
        `Hi Anurag,`,
        ``,
        `Type: ${type?.label || 'General'}`,
        formData.name ? `Name: ${formData.name}` : '',
        formData.email ? `Reply-to: ${formData.email}` : '',
        selected === 'freelance' && formData.budget ? `Budget: ${formData.budget}` : '',
        ``,
        formData.message || 'I would like to connect with you.',
      ].filter(Boolean).join('\n')
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      handleClose()
      return
    }

    setStatus('sending')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `${type?.subject || "Let's Connect"} — from ${formData.name || 'Portfolio Visitor'}`,
          from_name: formData.name || 'Portfolio Visitor',
          replyto: formData.email,
          name: formData.name,
          email: formData.email,
          inquiry_type: type?.label || 'General',
          budget: selected === 'freelance' ? (formData.budget || 'Not specified') : 'N/A',
          message: formData.message || 'No message provided.',
        }),
      })

      const data = await response.json()
      if (data.success) {
        setStatus('sent')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg glass-card rounded-2xl overflow-hidden border border-terminal-border"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 bg-terminal-card border-b border-terminal-border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer hover:bg-red-500" onClick={handleClose} />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-gray-500 font-mono text-xs ml-2">connect --with anurag</span>
              </div>
              <button onClick={handleClose} className="p-1 text-gray-500 hover:text-white transition-colors">
                <FaTimes size={14} />
              </button>
            </div>

            <div className="p-6">
              {/* Success State */}
              {status === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-terminal-green/10 border border-terminal-green/50 flex items-center justify-center mx-auto mb-4">
                    <FaCheck className="text-terminal-green" size={24} />
                  </div>
                  <div className="font-mono text-terminal-green text-sm mb-2">// message_sent</div>
                  <h3 className="text-white text-lg font-semibold mb-2">Message Delivered!</h3>
                  <p className="text-gray-500 text-sm mb-6">
                    I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={handleClose}
                    className="px-6 py-2 bg-terminal-green/10 border border-terminal-green/50 text-terminal-green font-mono text-sm rounded-xl hover:bg-terminal-green/20 transition-all"
                  >
                    close
                  </button>
                </motion.div>
              ) : !selected ? (
                /* Step 1: Select type */
                <>
                  <div className="font-mono text-xs text-terminal-green/50 mb-1">// select_inquiry_type</div>
                  <h3 className="text-white text-lg font-semibold mb-5">How can I help you?</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setSelected(type.id)}
                        className="glass-card glow-border rounded-xl p-4 text-left group hover:-translate-y-1 transition-all duration-200"
                      >
                        <type.icon className={`${type.color} mb-2 group-hover:scale-110 transition-transform`} size={20} />
                        <div className="text-white text-sm font-semibold">{type.label}</div>
                        <div className="text-gray-500 text-xs mt-1 leading-relaxed">{type.description}</div>
                      </button>
                    ))}
                  </div>

                  {/* Schedule a Call */}
                  <div className="mt-4">
                    <button
                      onClick={() => {
                        const openCalendly = () => {
                          window.Calendly.initPopupWidget({ url: personalInfo.calendly })
                        }
                        if (window.Calendly) {
                          openCalendly()
                        } else {
                          const script = document.createElement('script')
                          script.src = 'https://assets.calendly.com/assets/external/widget.js'
                          script.onload = openCalendly
                          document.head.appendChild(script)
                        }
                      }}
                      className="w-full glass-card glow-border rounded-xl p-4 text-left group hover:-translate-y-1 transition-all duration-200 flex items-center gap-3"
                    >
                      <FaCalendarAlt className="text-terminal-green" size={20} />
                      <div>
                        <div className="text-white text-sm font-semibold">Schedule a Call</div>
                        <div className="text-gray-500 text-xs mt-0.5">Book a 30-min slot directly on my calendar</div>
                      </div>
                    </button>
                  </div>

                  <div className="mt-4 pt-4 border-t border-terminal-border/50 text-center">
                    <a
                      href={`mailto:${personalInfo.email}?subject=Let's Connect`}
                      className="font-mono text-xs text-gray-500 hover:text-terminal-green transition-colors inline-flex items-center gap-1.5"
                    >
                      <FaEnvelope size={10} /> or email directly at {personalInfo.email}
                    </a>
                  </div>
                </>
              ) : (
                /* Step 2: Form */
                <form onSubmit={handleSubmit}>
                  <button
                    type="button"
                    onClick={() => { setSelected(null); setStatus('idle') }}
                    className="font-mono text-xs text-gray-500 hover:text-terminal-green transition-colors mb-3"
                  >
                    &larr; back
                  </button>
                  <div className="font-mono text-xs text-terminal-green/50 mb-1">
                    // {inquiryTypes.find(t => t.id === selected)?.label.toLowerCase().replace(' ', '_')}
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-5">
                    {inquiryTypes.find(t => t.id === selected)?.label}
                  </h3>

                  <div className="space-y-3">
                    <div>
                      <label className="font-mono text-xs text-gray-500 mb-1 block">name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full bg-terminal-bg/60 border border-terminal-border rounded-lg px-3 py-2 text-sm text-gray-300 font-mono focus:border-terminal-green/50 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-xs text-gray-500 mb-1 block">email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full bg-terminal-bg/60 border border-terminal-border rounded-lg px-3 py-2 text-sm text-gray-300 font-mono focus:border-terminal-green/50 focus:outline-none transition-colors"
                      />
                    </div>
                    {selected === 'freelance' && (
                      <div>
                        <label className="font-mono text-xs text-gray-500 mb-1 block">budget_range</label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full bg-terminal-bg/60 border border-terminal-border rounded-lg px-3 py-2 text-sm text-gray-300 font-mono focus:border-terminal-green/50 focus:outline-none transition-colors"
                        >
                          <option value="">Select budget range</option>
                          <option value="< $1,000">&lt; $1,000</option>
                          <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                          <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                          <option value="$15,000+">$15,000+</option>
                          <option value="Let's discuss">Let&apos;s discuss</option>
                        </select>
                      </div>
                    )}
                    <div>
                      <label className="font-mono text-xs text-gray-500 mb-1 block">message *</label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your project or opportunity..."
                        rows={3}
                        className="w-full bg-terminal-bg/60 border border-terminal-border rounded-lg px-3 py-2 text-sm text-gray-300 font-mono focus:border-terminal-green/50 focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {status === 'error' && (
                    <div className="mt-3 p-2 rounded-lg bg-red-500/10 border border-red-500/30 font-mono text-xs text-red-400">
                      Failed to send. Try again or email directly at {personalInfo.email}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="mt-5 w-full flex items-center justify-center gap-2 px-6 py-3 bg-terminal-green/10 border border-terminal-green text-terminal-green font-mono text-sm rounded-xl hover:bg-terminal-green/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <FaSpinner size={12} className="animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane size={12} /> Send Message
                      </>
                    )}
                  </button>
                  <div className="text-center mt-2">
                    <span className="font-mono text-[10px] text-gray-600">
                      Powered by Web3Forms &middot; Your message goes directly to my inbox
                    </span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
