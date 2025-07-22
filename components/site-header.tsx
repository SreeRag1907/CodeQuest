'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import { SignIn, SignUp } from '@clerk/nextjs'
import { Code, Menu, X } from 'lucide-react'
import { UserButton, useUser } from '@clerk/nextjs'

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const pathname = usePathname()

  const { isSignedIn, user, isLoaded } = useUser()

  const routes = [
    { href: '/', label: 'Home' },
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#blog', label: 'Blog' },
  ]

  const openModal = (signup: boolean = false) => {
    setIsSignUp(signup)
    setIsModalOpen(true)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Left Section: Logo */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold tracking-tight">
              CodeQuest Pro
            </span>
          </Link>
        </div>

        {/* Center Section: Nav - grow and center */}
        <nav className="hidden md:flex flex-1 justify-center space-x-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === route.href
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        {/* Right Section: Auth buttons + Theme toggle + Hamburger */}
        <div className="flex items-center gap-4">
          {/* Auth Buttons */}
          {isLoaded &&
            (isSignedIn ? (
              <div className="hidden md:flex items-center gap-4">
                <Link href="/dashboard">
                  <Button variant="ghost" size="sm">
                    Dashboard
                  </Button>
                </Link>
                <UserButton afterSignOutUrl="/" />
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => openModal(false)}
                >
                  Log in
                </Button>
                <Button size="sm" onClick={() => openModal(true)}>
                  Sign up
                </Button>
              </div>
            ))}

          {/* Theme Toggle - Always show */}
          <ThemeToggle />

          {/* Mobile Hamburger Menu - Always show */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 flex flex-col gap-4">
            <nav className="flex flex-col gap-2">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    'px-2 py-1.5 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground',
                    pathname === route.href
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
            {isLoaded && (
              <div className="flex flex-col gap-2 pt-2 border-t">
                {isSignedIn ? (
                  <Link href="/dashboard">
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      size="sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      size="sm"
                      onClick={() => {
                        setIsMenuOpen(false)
                        openModal(false)
                      }}
                    >
                      Log in
                    </Button>
                    <Button
                      className="w-full"
                      size="sm"
                      onClick={() => {
                        setIsMenuOpen(false)
                        openModal(true)
                      }}
                    >
                      Sign up
                    </Button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Auth Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-full max-w-md sm:max-w-lg overflow-y-auto max-h-[100vh] bg-zinc-900 text-white rounded-xl shadow-lg">
          <DialogHeader>
            <h2 className="text-2xl font-bold text-center mb-4">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h2>
          </DialogHeader>

          <div className="flex justify-center">
            {isSignUp ? (
              <SignUp
                afterSignUpUrl="/dashboard"
                appearance={{
                  baseTheme: undefined, // Use dark theme if needed
                  elements: {
                    card: 'bg-transparent shadow-none',
                    formButtonPrimary: 'bg-primary hover:bg-primary/90',
                    footerActionLink: 'text-primary hover:text-primary/90',
                  },
                }}
              />
            ) : (
              <SignIn
                afterSignInUrl="/dashboard"
                appearance={{
                  baseTheme: undefined,
                  elements: {
                    card: 'bg-transparent shadow-none',
                    formButtonPrimary: 'bg-primary hover:bg-primary/90',
                    footerActionLink: 'text-primary hover:text-primary/90',
                  },
                }}
              />
            )}
          </div>

          <div className="mt-4 text-center text-sm">
            {isSignUp ? (
              <>
                Already have an account?{' '}
                <button
                  onClick={() => setIsSignUp(false)}
                  className="text-primary underline"
                >
                  Sign In
                </button>
              </>
            ) : (
              <>
                Don’t have an account?{' '}
                <button
                  onClick={() => setIsSignUp(true)}
                  className="text-primary underline"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </header>
  )
}
