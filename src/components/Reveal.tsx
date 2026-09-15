import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: 'div' | 'li' | 'article' | 'section'
}

const tags = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
  section: motion.section,
} as const

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  as = 'div',
}: Props) {
  const reduce = useReducedMotion()
  const Tag = tags[as]

  if (reduce) {
    const Static =
      as === 'li' ? 'li' : as === 'article' ? 'article' : as === 'section' ? 'section' : 'div'
    return <Static className={className}>{children}</Static>
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px', amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}
