import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Island_Moments } from 'next/font/google'
import { InteractiveGridPattern } from '@/components/magicui/interactive-grid-pattern'
import { cn } from '@/lib/utils'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const islandMoments = Island_Moments({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-island-moments',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Clavio - Island Moments',
  description: 'Experience the magic of island moments with Clavio. Discover beautiful destinations and create unforgettable memories.',
  keywords: 'island, moments, travel, destinations, memories, clavio',
  authors: [{ name: 'Clavio Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${islandMoments.variable}`}>
      <body className={`${inter.className} antialiased bg-neutral-50 text-neutral-900 relative`}>
        <div className="fixed inset-0 -z-10">
          <InteractiveGridPattern
            className={cn(
              "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
            )}
          />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
