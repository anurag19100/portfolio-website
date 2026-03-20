import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { openTo } from '../data/portfolio'
import { FaServer, FaCloud, FaShieldAlt, FaLaptopCode } from 'react-icons/fa'
import { useModals } from '../context/ModalContext'

const openToIcons = { FaServer, FaCloud, FaShieldAlt, FaLaptopCode }

export default function OpenTo() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const { setConnectOpen } = useModals()

  return (
    <section className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-terminal-green/60 text-sm mb-2">
            <span className="text-terminal-green">07.</span> open_to
          </div>
          <h2 className="section-heading text-white mb-4">
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mb-12">
            Looking for a DevOps engineer who ships reliable infrastructure? Let&apos;s talk.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {openTo.map((item, i) => {
              const Icon = openToIcons[item.icon] || FaServer
              return (
                <motion.div
                  key={item.area}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="glass-card glow-border rounded-xl p-5 group hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  onClick={() => setConnectOpen(true)}
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="text-white" size={18} />
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">
                    {item.area}
                  </div>
                  <div className="text-gray-500 text-xs leading-relaxed">
                    {item.description}
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
