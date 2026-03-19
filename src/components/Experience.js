import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { experience } from '../data/portfolio'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [expandedIdx, setExpandedIdx] = useState(null)

  return (
    <section id="experience" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-terminal-green/60 text-sm mb-2">
            <span className="text-terminal-green">03.</span> experience
          </div>
          <h2 className="section-heading text-white mb-12">
            Work <span className="gradient-text">Experience</span>
          </h2>

          <div className="space-y-8">
            {experience.map((exp, ei) => (
              <motion.div
                key={ei}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: ei * 0.2 }}
                className="glass-card glow-border rounded-2xl p-8 relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-terminal-green to-terminal-blue" />

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-terminal-green font-mono text-sm hover:underline">
                      @ {exp.company}
                    </a>
                    {exp.subtitle && (
                      <span className="text-gray-600 font-mono text-xs ml-1">{exp.subtitle}</span>
                    )}
                  </div>
                  <div className="text-gray-500 font-mono text-sm mt-2 md:mt-0">
                    {exp.duration} &middot; {exp.location}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {exp.highlights.map((item, hi) => (
                    <motion.div
                      key={hi}
                      className="bg-terminal-bg/50 rounded-xl p-4 border border-terminal-border/50 hover:border-terminal-green/30 transition-all cursor-pointer group"
                      onClick={() => setExpandedIdx(expandedIdx === `${ei}-${hi}` ? null : `${ei}-${hi}`)}
                      layout
                    >
                      <div className="flex items-start justify-between">
                        <h4 className="text-white font-semibold text-sm group-hover:text-terminal-green transition-colors">
                          {item.title}
                        </h4>
                        {item.impact && (
                          <span className="text-xs font-mono text-terminal-green bg-terminal-green/10 px-2 py-1 rounded-full whitespace-nowrap ml-2">
                            {item.impact}
                          </span>
                        )}
                      </div>
                      {expandedIdx === `${ei}-${hi}` && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                        >
                          <p className="text-gray-400 text-sm mt-3 leading-relaxed">{item.description}</p>
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {item.tags.map(tag => (
                              <span key={tag} className="tech-badge text-[10px]">{tag}</span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
