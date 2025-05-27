import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Code, 
  Trophy, 
  LineChart, 
  BookOpen, 
  Users, 
  Terminal, 
  Brain,
  Zap,
} from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Multi-Language Courses",
      description: "Learn JavaScript, Python, Java, C++, Rust and more with structured learning paths tailored to your skill level."
    },
    {
      icon: Trophy,
      title: "XP & Achievement System",
      description: "Earn experience points, unlock badges, and maintain streaks as you progress through increasingly challenging content."
    },
    {
      icon: Terminal,
      title: "Interactive Code Editor",
      description: "Write, run and test your code directly in the browser with our powerful Monaco-based editor with syntax highlighting."
    },
    {
      icon: Brain,
      title: "Adaptive Learning Path",
      description: "Our system adapts to your skill level, offering personalized challenges that match your current abilities."
    },
    {
      icon: LineChart,
      title: "Progress Tracking",
      description: "Visualize your learning journey with detailed statistics, skill graphs, and completion rates for each topic."
    },
    {
      icon: Users,
      title: "Community Challenges",
      description: "Compete with other learners in weekly coding challenges and climb the global leaderboards."
    },
    {
      icon: Zap,
      title: "Daily Streaks",
      description: "Build consistency with daily learning goals and receive streak bonuses for continuous practice."
    },
    {
      icon: Code,
      title: "Real-World Projects",
      description: "Apply your skills to practical projects that simulate real development scenarios and build your portfolio."
    }
  ];

  return (
    <section className="py-20 bg-muted/50" id="features">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">
            Features
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Everything you need to master programming
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Our platform combines interactive learning with gamification to make coding fun and engaging.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="h-full bg-card transition-all hover:shadow-md">
              <CardHeader>
                <div className="p-2 w-fit rounded-lg bg-primary/10 mb-3">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}