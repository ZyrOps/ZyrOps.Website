type Props = {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
}

export function Illustration({
  src,
  alt,
  className = '',
  width = 640,
  height = 480,
  priority = false,
}: Props) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      className={`w-full select-none ${className}`}
      draggable={false}
    />
  )
}

export const ILLUSTRATIONS = {
  ai: '/illustrations/artificial-intelligence.svg',
  agent: '/illustrations/ai-agent.svg',
  chat: '/illustrations/ai-chat.svg',
  cloud: '/illustrations/cloud-hosting.svg',
  mobile: '/illustrations/mobile-development.svg',
  secure: '/illustrations/secure-server.svg',
  team: '/illustrations/team-collaboration.svg',
  data: '/illustrations/data-processing.svg',
  programming: '/illustrations/programming.svg',
  product: '/illustrations/product-iteration.svg',
  engineer: '/illustrations/software-engineer.svg',
  developer: '/illustrations/developer-activity.svg',
  web: '/illustrations/web-development.svg',
  building: '/illustrations/building-websites.svg',
  typing: '/illustrations/typing-code.svg',
  engineering: '/illustrations/engineering-team.svg',
  dashboard: '/illustrations/dashboard.svg',
  start: '/illustrations/start-building.svg',
  codegen: '/illustrations/ai-code-generation.svg',
  demo: '/illustrations/product-demo.svg',
  connect: '/illustrations/connecting-teams.svg',
  growth: '/illustrations/growth-analytics.svg',
  decisions: '/illustrations/business-decisions.svg',
  vision: '/illustrations/visionary-technology.svg',
  innovative: '/illustrations/innovative.svg',
  preferences: '/illustrations/preferences.svg',
  agreement: '/illustrations/agreement.svg',
  collaboration: '/illustrations/real-time-collaboration.svg',
  analytics: '/illustrations/analytics.svg',
  notFound: '/illustrations/page-not-found.svg',
} as const
