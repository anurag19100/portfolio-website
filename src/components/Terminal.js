import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const commands = [
  { cmd: 'kubectl get nodes', output: 'NAME          STATUS   ROLES    AGE   VERSION\nmaster-01     Ready    master   365d  v1.30.2\nworker-01     Ready    <none>   365d  v1.30.2\nworker-02     Ready    <none>   365d  v1.30.2\nworker-03     Ready    <none>   200d  v1.30.2' },
  { cmd: 'kubectl get pods -n production | wc -l', output: '142' },
  { cmd: 'terraform plan | tail -1', output: 'Plan: 0 to add, 0 to change, 0 to destroy.' },
  { cmd: 'curl -s http://monitoring/api/v1/uptime', output: '{"status":"healthy","uptime":"99.97%","incidents_resolved":30}' },
  { cmd: 'aws ce get-cost --monthly-savings', output: '{"monthly_savings":"$20,000","optimization":"CastAI + Kyverno"}' },
]

export default function Terminal() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [visibleCmds, setVisibleCmds] = useState(0)

  useEffect(() => {
    if (!inView) return
    const interval = setInterval(() => {
      setVisibleCmds(prev => {
        if (prev >= commands.length) {
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, 800)
    return () => clearInterval(interval)
  }, [inView])

  return (
    <section className="py-16" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="glass-card rounded-2xl overflow-hidden border border-terminal-border"
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-terminal-card border-b border-terminal-border">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="text-gray-500 font-mono text-xs ml-2">anurag@bigbasket ~ production</span>
          </div>

          <div className="p-6 font-mono text-sm space-y-3 min-h-[300px] bg-[#0d0d0d]">
            {commands.slice(0, visibleCmds).map((cmd, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-terminal-green">$</span>
                  <span className="text-gray-300">{cmd.cmd}</span>
                </div>
                <pre className="text-gray-500 ml-4 mt-1 text-xs whitespace-pre-wrap">{cmd.output}</pre>
              </motion.div>
            ))}
            {visibleCmds < commands.length && (
              <div className="flex items-center gap-2">
                <span className="text-terminal-green">$</span>
                <span className="w-2 h-4 bg-terminal-green/70 animate-pulse" />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
