'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Flame, Star, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-6">
        <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-2xl font-bold">JD</span>
        </div>
        <div>
          <h2 className="text-3xl font-bold">John Doe</h2>
          <p className="text-muted-foreground">Joined March 2024</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total XP</CardTitle>
              <Trophy className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,350</div>
              <Progress value={65} className="mt-2" />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
              <Flame className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7 Days</div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
              <BookOpen className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Badges Earned</CardTitle>
              <Star className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Learning Statistics</CardTitle>
            <CardDescription>Your progress over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Daily Average XP</span>
                <span className="font-medium">245 XP</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Best Streak</span>
                <span className="font-medium">15 days</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Challenges Completed</span>
                <span className="font-medium">47</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Time Spent Learning</span>
                <span className="font-medium">64 hours</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Achievements</CardTitle>
            <CardDescription>Latest milestones reached</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "JavaScript Master", date: "March 15, 2024" },
                { title: "7-Day Streak", date: "March 14, 2024" },
                { title: "First Challenge", date: "March 10, 2024" },
              ].map((achievement, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span>{achievement.title}</span>
                  <span className="text-sm text-muted-foreground">{achievement.date}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}