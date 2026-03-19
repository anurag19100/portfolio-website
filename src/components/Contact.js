import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { personalInfo } from '../data/portfolio'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const contactItems = [
    { icon: FaEnvelope, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: 'text-terminal-orange' },
    { icon: FaPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: 'text-terminal-green' },
    { icon: FaGithub, label: 'GitHub', value: 'anurag19100', href: personalInfo.github, color: 'text-white' },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'in/anurag19100', href: personalInfo.linkedin, color: 'text-terminal-blue' },
    { icon: FaMapMarkerAlt, label: 'Location', value: personalInfo.location, href: '#', color: 'text-terminal-purple' },
  ]

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-terminal-green/60 text-sm mb-2">
            <span className="text-terminal-green">06.</span> contact
          </div>
          <h2 className="section-heading text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mb-12">
            I&apos;m always open to discussing new opportunities, DevOps challenges, or just having a chat about cloud infrastructure.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contactItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="glass-card glow-border rounded-2xl p-6 flex items-center gap-4 group hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`${item.color} group-hover:scale-110 transition-transform`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-mono">{item.label}</div>
                  <div className="text-gray-300 text-sm font-mono group-hover:text-terminal-green transition-colors">{item.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <a
              href={`mailto:${personalInfo.email}?subject=Let's Connect - DevOps Opportunity`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-terminal-green/10 border border-terminal-green text-terminal-green font-mono rounded-xl hover:bg-terminal-green/20 transition-all text-lg"
            >
              <FaEnvelope /> Send me a message
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
