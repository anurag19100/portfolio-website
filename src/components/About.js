import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { personalInfo } from '../data/portfolio'

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

          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card glow-border rounded-2xl p-8">
              <div className="font-mono text-xs text-terminal-green/50 mb-4">// bio.config</div>
              <p className="text-gray-300 leading-relaxed text-lg">{personalInfo.bio}</p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Passionate about building resilient, scalable systems that empower development teams to ship faster.
                I specialize in Kubernetes orchestration, infrastructure automation, and observability &mdash;
                turning complex infrastructure challenges into elegant, automated solutions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="glass-card glow-border rounded-2xl p-6">
                <div className="font-mono text-xs text-terminal-green mb-2">current_role</div>
                <div className="text-white text-lg font-semibold">DevOps Engineer I</div>
                <div className="text-gray-500 font-mono text-sm">@ BigBasket &middot; July 2023 - Present</div>
              </div>
              <div className="glass-card glow-border rounded-2xl p-6">
                <div className="font-mono text-xs text-terminal-blue mb-2">education</div>
                <div className="text-white text-lg font-semibold">B.Tech, Computer Science</div>
                <div className="text-gray-500 font-mono text-sm">IIIT Naya Raipur &middot; 2019-2023</div>
              </div>
              <div className="glass-card glow-border rounded-2xl p-6">
                <div className="font-mono text-xs text-terminal-orange mb-2">focus_areas</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Cloud Infrastructure', 'Container Orchestration', 'CI/CD Pipelines', 'Cost Optimization', 'Observability', 'Platform Engineering'].map(area => (
                    <span key={area} className="tech-badge">{area}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
