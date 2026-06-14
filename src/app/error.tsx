'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h2 className="font-sora font-bold text-2xl text-[color:var(--color-primary)] mb-3">
          Something went wrong
        </h2>
        <p className="font-inter text-sm text-[color:var(--color-text-secondary)] mb-6">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="btn-accent"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
