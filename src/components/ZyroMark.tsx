export function ZyroMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <img
      src="/logo.webp"
      alt=""
      width={36}
      height={36}
      className={`object-contain ${className}`}
      decoding="async"
      aria-hidden="true"
    />
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
