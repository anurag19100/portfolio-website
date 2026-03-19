import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '../data/portfolio'
import {
  SiKubernetes, SiDocker, SiTerraform, SiLinux,
  SiJenkins, SiGithubactions, SiGit, SiGitlab,
  SiPrometheus, SiGrafana, SiElasticsearch, SiDatadog, SiNewrelic, SiIstio,
  SiPython, SiGnubash, SiJavascript, SiGo, SiGooglecloud,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

const iconMap = {
  SiAmazonwebservices: FaAws,
  SiGooglecloud,
  SiKubernetes, SiDocker, SiTerraform, SiLinux,
  SiJenkins, SiGithubactions, SiGit, SiGitlab,
  SiPrometheus, SiGrafana, SiElasticsearch, SiDatadog, SiNewrelic, SiIstio,
  SiPython, SiGnubash, SiJavascript, SiGo,
  SiArgo: SiGithubactions,
  SiApachegroovy: SiJavascript,
  SiHarness: SiGithubactions,
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-terminal-green/60 text-sm mb-2">
            <span className="text-terminal-green">02.</span> skills
          </div>
          <h2 className="section-heading text-white mb-12">
            Tech <span className="gradient-text">Stack</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((category, ci) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: ci * 0.15 }}
                className="glass-card glow-border rounded-2xl p-6"
              >
                <h3 className="font-mono text-terminal-green text-sm mb-6">{`// ${category.category}`}</h3>
                <div className="space-y-4">
                  {category.items.map((skill) => {
                    const Icon = iconMap[skill.icon]
                    return (
                      <div key={skill.name} className="group">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            {Icon && <Icon className="text-terminal-green/60 group-hover:text-terminal-green transition-colors" size={16} />}
                            <span className="text-gray-300 text-sm font-mono">{skill.name}</span>
                          </div>
                          <span className="text-terminal-green/60 text-xs font-mono">{skill.level}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-terminal-border rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-terminal-green/80 to-terminal-blue/80"
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: ci * 0.15 + 0.3 }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
