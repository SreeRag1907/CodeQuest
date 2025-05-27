'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { LayoutDashboard, BookOpen, Trophy, User } from 'lucide-react';

const routes = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { label: 'Courses', icon: BookOpen, href: '/dashboard/courses' },
  { label: 'Achievements', icon: Trophy, href: '/dashboard/achievements' },
  { label: 'Profile', icon: User, href: '/dashboard/profile' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed  left-0 h-screen w-64 border-r bg-card flex flex-col py-6 px-3 z-50">
      <div className="flex-1 flex flex-col gap-1">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 text-sm rounded-lg transition-colors hover:bg-accent",
              pathname === route.href ? "bg-accent" : "transparent"
            )}
          >
            <route.icon className="h-4 w-4" />
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
