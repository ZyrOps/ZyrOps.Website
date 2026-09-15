export function ZyroMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M24 4L43.5 15.25V30.75L24 42L4.5 30.75V15.25L24 4Z"
        stroke="#A357FD"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M24 4L24 20L10.15 28L4.5 24.75V15.25L24 4Z"
        fill="#A357FD"
        fillOpacity="0.32"
      />
      <path
        d="M24 20L43.5 15.25V30.75L24 42L24 26L37.85 18L24 20Z"
        fill="#A357FD"
        fillOpacity="0.8"
      />
      <path d="M24 20L10.15 28L24 36L37.85 28L24 20Z" fill="#111113" />
    </svg>
  )
}

export function ZyroWordmark({ className = 'h-8' }: { className?: string }) {
  return (
    <img
      src="/zyropsfull.png"
      alt="ZyrOps"
      width={160}
      height={40}
      className={`w-auto object-contain ${className}`}
      decoding="async"
    />
  )
}
