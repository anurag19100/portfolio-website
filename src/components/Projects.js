import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { devopsProjects } from '../data/portfolio'
import { FaServer, FaNetworkWired, FaChartLine, FaDocker, FaCogs, FaDollarSign, FaRobot, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const categoryIcons = {
  'Platform Engineering': FaServer,
  'Infrastructure as Code': FaNetworkWired,
  'Observability': FaChartLine,
  'Auto-Scaling': FaCogs,
  'CI/CD': FaDocker,
  'FinOps': FaDollarSign,
  'AI / MLOps': FaRobot,
}

const categoryColors = {
  'Platform Engineering': 'from-blue-500 to-cyan-500',
  'Infrastructure as Code': 'from-purple-500 to-pink-500',
  'Observability': 'from-orange-500 to-yellow-500',
  'Auto-Scaling': 'from-green-500 to-emerald-500',
  'CI/CD': 'from-red-500 to-orange-500',
  'FinOps': 'from-yellow-500 to-green-500',
  'AI / MLOps': 'from-violet-500 to-fuchsia-500',
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-terminal-green/60 text-sm mb-2">
            <span className="text-terminal-green">04.</span> projects
          </div>
          <h2 className="section-heading text-white mb-4">
            DevOps <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-500 font-mono text-sm mb-12">
            {'//'} open source &amp; production systems
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devopsProjects.map((project, i) => {
              const Icon = categoryIcons[project.category] || FaServer
              const gradient = categoryColors[project.category] || 'from-gray-500 to-gray-600'
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card glow-border rounded-2xl p-6 group hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={18} />
                    </div>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-terminal-green transition-colors">
                        <FaGithub size={18} />
                      </a>
                    )}
                  </div>
                  <div className="text-xs font-mono text-terminal-green/60 mb-2">{project.category}</div>
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-terminal-green transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span key={tag} className="tech-badge text-[10px]">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
