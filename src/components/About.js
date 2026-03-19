import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { personalInfo, certifications, openTo } from '../data/portfolio'
import { FaServer, FaShieldAlt, FaBug, FaLaptopCode, FaCertificate } from 'react-icons/fa'

const openToIcons = { FaServer, FaShieldAlt, FaBug, FaLaptopCode }

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-terminal-green/60 text-sm mb-2">
            <span className="text-terminal-green">01.</span> about
          </div>
          <h2 className="section-heading text-white mb-12">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="glass-card glow-border rounded-2xl p-8">
              <div className="font-mono text-xs text-terminal-green/50 mb-4">// bio.config</div>
              <p className="text-gray-300 leading-relaxed text-lg">{personalInfo.bio}</p>
            </div>

            <div className="space-y-4">
              <div className="glass-card glow-border rounded-2xl p-6">
                <div className="font-mono text-xs text-terminal-green mb-2">current_role</div>
                <div className="text-white text-lg font-semibold">Sr. DevOps Engineer</div>
                <div className="text-gray-500 font-mono text-sm">@ Blackduck (formerly Synopsys) &middot; June 2025 - Present</div>
              </div>
              <div className="glass-card glow-border rounded-2xl p-6">
                <div className="font-mono text-xs text-terminal-blue mb-2">education</div>
                <div className="text-white text-lg font-semibold">B.Tech, Computer Science</div>
                <div className="text-gray-500 font-mono text-sm">IIIT Naya Raipur &middot; 2019-2023</div>
              </div>
              <div className="glass-card glow-border rounded-2xl p-6">
                <div className="font-mono text-xs text-terminal-orange mb-2">focus_areas</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Multi-Cloud (AWS + GCP)', 'Kubernetes & Service Mesh', 'GitOps & CI/CD', 'Security & Compliance', 'Platform Engineering', 'AI-Powered DevOps'].map(area => (
                    <span key={area} className="tech-badge">{area}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-12">
            <h3 className="font-mono text-terminal-green text-sm mb-4 flex items-center gap-2">
              <FaCertificate size={14} /> // certifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass-card glow-border rounded-xl p-4 text-center group hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-terminal-green text-2xl mb-2 group-hover:scale-110 transition-transform">
                    <FaCertificate />
                  </div>
                  <div className="text-white text-sm font-semibold">{cert.name}</div>
                  <div className="text-gray-500 text-xs font-mono mt-1">{cert.issuer}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Open To */}
          <div>
            <h3 className="font-mono text-terminal-green text-sm mb-4">// open_to</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {openTo.map((item, i) => {
                const Icon = openToIcons[item.icon] || FaServer
                return (
                  <motion.div
                    key={item.area}
                    initial={{ opacity: 0, y: 15 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="glass-card glow-border rounded-xl p-5 group hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={18} />
                    </div>
                    <div className="text-white font-semibold text-sm mb-1">{item.area}</div>
                    <div className="text-gray-500 text-xs leading-relaxed">{item.description}</div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
