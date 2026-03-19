import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { education } from '../data/portfolio'
import { FaGraduationCap } from 'react-icons/fa'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-terminal-green/60 text-sm mb-2">
            <span className="text-terminal-green">05.</span> education
          </div>
          <h2 className="section-heading text-white mb-12">Education</h2>

          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              className="glass-card glow-border rounded-2xl p-8 flex items-start gap-6"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-terminal-green/20 to-terminal-blue/20 flex items-center justify-center shrink-0">
                <FaGraduationCap className="text-terminal-green" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                <p className="text-terminal-green font-mono text-sm mt-1">{edu.degree}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-gray-500 font-mono text-sm">
                  <span>{edu.duration}</span>
                  <span>&middot;</span>
                  <span>{edu.location}</span>
                  <span>&middot;</span>
                  <span>CGPA: {edu.cgpa}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
