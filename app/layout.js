import Script from 'next/script'
import './globals.css'

export const metadata = {
  title: 'Kunal Arora | AI & ML Engineer',
  description: 'Portfolio of Kunal Arora - AI & ML Engineer specializing in LLMs, Computer Vision, and Deep Learning',
  keywords: ['AI', 'Machine Learning', 'LLM', 'Computer Vision', 'Deep Learning', 'PyTorch', 'TensorFlow'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.11.1/build/spline-viewer.js"
          strategy="beforeInteractive"
        />
        <div className="grid-background"></div>
        {children}
      </body>
    </html>
  )
}
