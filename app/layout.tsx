// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { cn } from '@/lib/utils'
import { Providers } from './providers'
import { SiteHeader } from '@/components/site-header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CodeQuest Pro',
  description: 'Gamified programming lessons',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(inter.className, 'min-h-screen bg-background')}>
          <Providers>
            <SiteHeader/>
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
