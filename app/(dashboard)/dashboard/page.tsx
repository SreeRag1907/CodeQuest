import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trophy,
  Flame,
  Star,
  BookOpen,
  Code,
  LineChart,
  Zap,
  Award
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <main className="flex-1 overflow-y-auto px-4 py-8 container">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* XP Card */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total XP</CardTitle>
                  <Trophy className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2,350 XP</div>
                  <Progress value={65} className="mt-2" />
                  <p className="text-xs text-muted-foreground mt-2">
                    350 XP until next level
                  </p>
                </CardContent>
              </Card>

              {/* Streak Card */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
                  <Flame className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7 Days</div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Personal best: 15 days
                  </div>
                </CardContent>
              </Card>

              {/* Badges Card */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Badges Earned</CardTitle>
                  <Star className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-xs text-muted-foreground mt-2">
                    3 badges close to unlocking
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Current Courses */}
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Current Courses</CardTitle>
                  <CardDescription>Your active learning paths</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <BookOpen className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">JavaScript Fundamentals</p>
                          <p className="text-xs text-muted-foreground">65% Complete</p>
                        </div>
                      </div>
                      <Progress value={65} className="w-[100px]" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Code className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Python Basics</p>
                          <p className="text-xs text-muted-foreground">30% Complete</p>
                        </div>
                      </div>
                      <Progress value={30} className="w-[100px]" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your learning progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <LineChart className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Completed JavaScript Arrays Quiz</p>
                        <p className="text-xs text-muted-foreground">2 hours ago • +50 XP</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Code className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Solved Python Challenge</p>
                        <p className="text-xs text-muted-foreground">5 hours ago • +100 XP</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="courses">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Course Cards */}
              <Card>
                <CardHeader>
                  <CardTitle>JavaScript Path</CardTitle>
                  <CardDescription>Master modern JavaScript</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Progress</span>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <Progress value={65} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Python Path</CardTitle>
                  <CardDescription>Learn Python programming</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Progress</span>
                      <span className="text-sm font-medium">30%</span>
                    </div>
                    <Progress value={30} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Achievement Cards */}
              <Card>
                <CardHeader className="flex flex-row items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Quick Learner</CardTitle>
                    <CardDescription>Complete 5 lessons in one day</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Progress value={100} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Code Master</CardTitle>
                    <CardDescription>Solve 50 coding challenges</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Progress value={60} className="mt-2" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}