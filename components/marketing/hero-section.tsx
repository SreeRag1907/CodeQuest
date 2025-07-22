'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Code,
  CheckCircle2 
} from 'lucide-react';
import { useUser } from '@clerk/nextjs';

const languageColors = {
  javascript: 'text-yellow-400',
  python: 'text-blue-400',
  java: 'text-orange-400',
  'c++': 'text-pink-400',
  rust: 'text-red-400',
} as const;

type LanguageKey = keyof typeof languageColors;

export function HeroSection() {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageKey>('javascript');
  const { isSignedIn, isLoaded } = useUser();
  
  useEffect(() => {
    const languages: LanguageKey[] = ['javascript', 'python', 'java', 'c++', 'rust'];
    const interval = setInterval(() => {
      setCurrentLanguage((prev) => {
        const currentIndex = languages.indexOf(prev);
        const nextIndex = (currentIndex + 1) % languages.length;
        return languages[nextIndex];
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 md:py-32" id="hero"> 
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute inset-x-0 top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-purple-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
          ></div>
        </div>
      </div>

      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-10">
        <div className="space-y-4 max-w-[800px]">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Master <span className={`relative inline-block ${languageColors[currentLanguage]} transition-colors duration-300`}>{currentLanguage}</span> with 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"> gamified learning</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
            Learn programming through interactive challenges, quizzes, and earn rewards while building real-world skills.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          {isLoaded && (
            <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
              <Button size="lg" className="w-full sm:w-auto group">
                Start Learning for Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          )}
          <Link href="/pricing">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View Pricing
            </Button>
          </Link>
        </div>

        <div className="pt-6 md:pt-10 w-full max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 text-left">
            {[
              { icon: CheckCircle2, text: "Interactive coding challenges" },
              { icon: CheckCircle2, text: "Gamified learning experience" },
              { icon: CheckCircle2, text: "Multiple programming languages" },
              { icon: CheckCircle2, text: "Progress tracking & XP system" },
              { icon: CheckCircle2, text: "Daily streaks & achievements" },
              { icon: CheckCircle2, text: "Real-world project scenarios" }
            ].map((feature, i) => (
              <div key={i} className="flex items-start space-x-3">
                <feature.icon className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm md:text-base">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 w-full max-w-5xl mx-auto rounded-xl overflow-hidden border shadow-lg">
          <div className="bg-card p-4 border-b">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <div className="px-2 py-1 ml-2 text-xs font-mono bg-muted rounded text-muted-foreground">
                index.js
              </div>
            </div>
          </div>
          <div className="bg-black text-white font-mono text-sm p-6 overflow-x-auto">
            <pre className="text-left">
              <code>
                <span className="text-blue-400">function</span>
                <span className="text-green-400"> calculateXP</span>
                <span className="text-yellow-400">(</span>
                <span className="text-purple-400">difficulty</span>
                <span className="text-yellow-400">, </span>
                <span className="text-purple-400">timeSpent</span>
                <span className="text-yellow-400">) {"{"}</span>
                <br />
                {"  "}
                <span className="text-blue-400">const</span>
                <span> baseXP </span>
                <span className="text-yellow-400">= </span>
                <span className="text-orange-400">difficulty</span>
                <span className="text-yellow-400"> * </span>
                <span className="text-green-400">10</span>
                <span className="text-yellow-400">;</span>
                <br />
                {"  "}
                <span className="text-blue-400">const</span>
                <span> timeBonus </span>
                <span className="text-yellow-400">= </span>
                <span className="text-green-400">Math</span>
                <span className="text-yellow-400">.</span>
                <span className="text-green-400">max</span>
                <span className="text-yellow-400">(</span>
                <span className="text-green-400">0</span>
                <span className="text-yellow-400">, </span>
                <span className="text-green-400">50</span>
                <span className="text-yellow-400"> - </span>
                <span className="text-orange-400">timeSpent</span>
                <span className="text-yellow-400">);</span>
                <br />
                <br />
                {"  "}
                <span className="text-blue-400">return</span>
                <span className="text-yellow-400"> baseXP + timeBonus;</span>
                <br />
                <span className="text-yellow-400">{"}"}</span>
                <br />
                <br />
                <span className="text-green-400">// Challenge completed!</span>
                <br />
                <span className="text-blue-400">const</span>
                <span> earnedXP </span>
                <span className="text-yellow-400">= </span>
                <span className="text-green-400">calculateXP</span>
                <span className="text-yellow-400">(</span>
                <span className="text-green-400">3</span>
                <span className="text-yellow-400">, </span>
                <span className="text-green-400">25</span>
                <span className="text-yellow-400">);</span>
                <br />
                <span className="text-green-400">console</span>
                <span className="text-yellow-400">.</span>
                <span className="text-green-400">log</span>
                <span className="text-yellow-400">(</span>
                <span className="text-orange-400">`Congratulations! You earned </span>
                <span className="text-yellow-400">${"{"}</span>
                <span className="text-orange-400">earnedXP</span>
                <span className="text-yellow-400">{"}"}</span>
                <span className="text-orange-400"> XP!`</span>
                <span className="text-yellow-400">);</span>
                <br />
                <span className="text-purple-500">// Output: Congratulations! You earned 55 XP!</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}