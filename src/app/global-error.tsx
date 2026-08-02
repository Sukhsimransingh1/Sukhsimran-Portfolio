'use client'

/**
 * GLOBAL ERROR BOUNDARY
 * ----------------------------------------------------------------------------
 * Last-resort boundary for errors thrown in the ROOT LAYOUT itself.
 *
 * `error.tsx` sits inside the layout, so it cannot catch an error that occurs
 * while the layout is rendering. This file replaces the entire document, which
 * is why it must render its own `<html>` and `<body>` — the root layout that
 * would normally provide them is the thing that failed.
 *
 * It therefore has no access to providers, fonts or global styles. Styling is
 * inline and minimal by necessity, not by preference.
 *
 * This should effectively never render. If it does, the layout is broken.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          backgroundColor: '#fafafa',
          color: '#18181b',
        }}
      >
        <main style={{ maxWidth: '32rem', padding: '2rem' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            Something went wrong
          </h1>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>
            A critical error occurred. Please reload the page.
          </p>
          {error.digest ? (
            <p style={{ fontSize: '0.875rem', opacity: 0.6, marginBottom: '1.5rem' }}>
              Reference: {error.digest}
            </p>
          ) : null}
          <button
            onClick={reset}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid currentColor',
              borderRadius: '0.5rem',
              background: 'none',
              font: 'inherit',
              cursor: 'pointer',
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  )
}
