import Link from 'next/link';
import { Code } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Code className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">CodeQuest Pro</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Master programming languages through interactive, gamified lessons and coding challenges.
            </p>
          </div>
          
          <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Platform</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/features" className="text-muted-foreground hover:text-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/roadmap" className="text-muted-foreground hover:text-primary transition-colors">
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link href="/changelog" className="text-muted-foreground hover:text-primary transition-colors">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/documentation" className="text-muted-foreground hover:text-primary transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-muted-foreground hover:text-primary transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials" className="text-muted-foreground hover:text-primary transition-colors">
                    Tutorials
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CodeQuest Pro. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors">
              Twitter
            </Link>
            <Link href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors">
              GitHub
            </Link>
            <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}