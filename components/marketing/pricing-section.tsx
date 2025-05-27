'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { CheckCircle2 } from 'lucide-react';

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Free",
      description: "Basic access to get started with programming",
      price: { monthly: 0, annual: 0 },
      features: [
        "Access to 5 beginner courses",
        "Basic code challenges",
        "Community forum access",
        "Progress tracking",
        "XP and streaks system"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Pro",
      description: "Full access to all courses and premium features",
      price: { monthly: 19, annual: 15 },
      features: [
        "Access to all 30+ courses",
        "Advanced code challenges",
        "Priority support",
        "Offline mode",
        "Certificate of completion",
        "Custom learning paths",
        "Ad-free experience"
      ],
      buttonText: "Subscribe to Pro",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Team",
      description: "For teams and organizations learning together",
      price: { monthly: 49, annual: 39 },
      features: [
        "Everything in Pro plan",
        "Team management dashboard",
        "Progress analytics",
        "Shared workspaces",
        "Customizable curriculum",
        "SSO authentication",
        "Dedicated support"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section className="py-20" id="pricing" >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">
            Pricing
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Simple, transparent pricing
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Choose the plan that's right for you and start your coding journey today.
          </p>
          
          <div className="flex items-center space-x-2 mt-6">
            <Label htmlFor="billing-switch">Monthly</Label>
            <Switch 
              id="billing-switch" 
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
            />
            <Label htmlFor="billing-switch" className="flex items-center">
              Annual
              <span className="ml-2 rounded-full bg-green-100 dark:bg-green-900 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-300">
                Save 20%
              </span>
            </Label>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <Card 
              key={i} 
              className={`flex flex-col ${plan.popular ? 'border-primary shadow-lg relative' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  Most Popular
                </div>
              )}
              
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="text-muted-foreground ml-2">
                      {isAnnual ? '/mo (billed annually)' : '/month'}
                    </span>
                  )}
                </div>
                
                <ul className="space-y-3 text-sm">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button variant={plan.buttonVariant} className="w-full" size="lg">
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}