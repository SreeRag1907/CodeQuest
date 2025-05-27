'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Zap, Star, Award } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
  {
    id: "quick-learner",
    title: "Quick Learner",
    description: "Complete 5 lessons in one day",
    progress: 100,
    icon: Zap,
    date: "Earned on March 15, 2024",
  },
  {
    id: "code-master",
    title: "Code Master",
    description: "Solve 50 coding challenges",
    progress: 60,
    icon: Award,
    date: "In progress - 30/50 completed",
  },
  {
    id: "streak-master",
    title: "Streak Master",
    description: "Maintain a 7-day learning streak",
    progress: 85,
    icon: Star,
    date: "5/7 days completed",
  },
];

export default function AchievementsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Trophy className="h-8 w-8 text-primary" />
        <div>
          <h2 className="text-3xl font-bold">Achievements</h2>
          <p className="text-muted-foreground">Track your learning milestones</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <achievement.icon className="h-5 w-5 text-primary" />
                  <CardTitle>{achievement.title}</CardTitle>
                </div>
                <CardDescription>{achievement.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Progress value={achievement.progress} />
                  <p className="text-sm text-muted-foreground">{achievement.date}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}