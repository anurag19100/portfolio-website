import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { personalInfo, certifications } from '../data/portfolio'
import { FaCertificate } from 'react-icons/fa'

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

          {/* Two-column: Bio + Info cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Left: Bio */}
            <div className="glass-card glow-border rounded-2xl p-8">
              <div className="font-mono text-xs text-terminal-green/50 mb-4">// bio.config</div>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">{personalInfo.bio}</p>

              <div className="space-y-3">
                {(personalInfo.bioHighlights || []).map((h, i) => (
                  <div key={i} className="bg-terminal-bg/60 rounded-xl p-4 border border-terminal-border/50">
                    <div className="font-mono text-xs text-terminal-green font-semibold mb-1.5">{h.label}</div>
                    <div className="text-gray-400 text-sm leading-relaxed">{h.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Info cards stacked */}
            <div className="flex flex-col gap-4">
              <div className="glass-card glow-border rounded-2xl p-6">
                <div className="font-mono text-xs text-terminal-green mb-2">current_role</div>
                <div className="text-white text-lg font-semibold">Sr. DevOps Engineer</div>
                <div className="text-gray-500 font-mono text-sm">@ Blackduck (formerly Synopsys)</div>
                <div className="text-gray-600 font-mono text-xs mt-1">Enterprise security &middot; Global scale</div>
              </div>
              <div className="glass-card glow-border rounded-2xl p-6">
                <div className="font-mono text-xs text-terminal-blue mb-2">previous</div>
                <div className="text-white text-lg font-semibold">DevOps Engineer I</div>
                <div className="text-gray-500 font-mono text-sm">@ BigBasket (2+ years)</div>
                <div className="text-gray-600 font-mono text-xs mt-1">Quick-commerce &middot; Zero downtime</div>
              </div>
              <div className="glass-card glow-border rounded-2xl p-6 flex-1">
                <div className="font-mono text-xs text-terminal-orange mb-2">focus_areas</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['AWS', 'GCP', 'Kubernetes', 'Terraform', 'GitOps', 'Service Mesh', 'CI/CD', 'Observability', 'Security', 'Platform Eng', 'FinOps', 'Python'].map(area => (
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
                  <div className="text-white text-sm font-semibold">
                    {cert.name}
                  </div>
                  <div className="text-gray-500 text-xs font-mono mt-1">
                    {cert.issuer}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
