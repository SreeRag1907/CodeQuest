import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "I've tried many coding platforms, but CodeQuest Pro makes learning fun with its gamification approach. I've maintained a 60-day streak and learned more JavaScript than in my entire university course.",
    name: "Alex Johnson",
    title: "Front-end Developer",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    quote: "The interactive challenges and immediate feedback helped me improve my Python skills rapidly. The XP system keeps me motivated to learn every day.",
    name: "Sarah Chen",
    title: "Data Scientist",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    quote: "As a self-taught developer, CodeQuest Pro provided the structure I needed. The progression from basics to advanced concepts is well-designed, and the gamification makes it addictive.",
    name: "Miguel Rodriguez",
    title: "Full-stack Developer",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    quote: "Our team uses CodeQuest Pro for continuous learning. The team features allow us to track progress and create friendly competition. It's been great for onboarding new developers too.",
    name: "Emily Taylor",
    title: "Engineering Manager",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20" id="blog">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">
            Testimonials
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            What our users are saying
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Join thousands of developers who have transformed their coding skills with CodeQuest Pro.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12 border-2 border-background">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
                <div className="mt-4 relative pl-6">
                  <Quote className="absolute left-0 top-0 h-4 w-4 text-muted-foreground" />
                  <p className="text-muted-foreground">{testimonial.quote}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}