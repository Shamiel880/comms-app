'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { 
  Home, 
  MessageSquare, 
  CheckSquare, 
  FolderKanban, 
  Sun, 
  Moon,
  Layers,
  FileText,
  Bell
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavItemProps {
  href: string
  icon: React.ReactNode
  label: string
  description: string
  badge?: number
  active?: boolean
}

function NavItem({ href, icon, label, description, badge, active }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors',
        active 
          ? 'bg-primary/10 text-primary' 
          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
      )}
    >
      <span className={cn('flex-shrink-0', active && 'text-primary')}>
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className={cn('font-medium text-sm', active && 'text-primary')}>
            {label}
          </span>
          {badge !== undefined && badge > 0 && (
            <span className="flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-medium bg-primary text-primary-foreground rounded-full">
              {badge}
            </span>
          )}
        </div>
        <span className="text-xs text-muted-foreground truncate block">
          {description}
        </span>
      </div>
    </Link>
  )
}

interface SidebarProps {
  stats?: {
    unreadMessages?: number
    openTasks?: number
    activeProjects?: number
  }
}

export function Sidebar({ stats }: SidebarProps) {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const navItems = [
    {
      href: '/',
      icon: <Home className="w-5 h-5" />,
      label: 'Home',
      description: 'Eagle-eye dashboard',
      badge: undefined
    },
    {
      href: '/messages',
      icon: <MessageSquare className="w-5 h-5" />,
      label: 'Messages',
      description: 'Unified communications',
      badge: stats?.unreadMessages
    },
    {
      href: '/tasks',
      icon: <CheckSquare className="w-5 h-5" />,
      label: 'Tasks',
      description: 'Execution lane',
      badge: stats?.openTasks
    },
    {
      href: '/projects',
      icon: <FolderKanban className="w-5 h-5" />,
      label: 'Projects',
      description: 'Portfolio view',
      badge: stats?.activeProjects
    },
    {
      href: '/notifications',
      icon: <Bell className="w-5 h-5" />,
      label: 'Notifications',
      description: 'Activity history',
      badge: undefined
    },
    {
      href: '/reports',
      icon: <FileText className="w-5 h-5" />,
      label: 'Reports',
      description: 'Analytics & exports',
      badge: undefined
    }
  ]

  return (
    <aside className="w-64 h-screen bg-card border-r border-border flex flex-col">
      {/* Logo Section */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center">
            <Layers className="w-5 h-5 text-background" />
          </div>
          <div>
            <div className="font-semibold text-sm">LEMCO</div>
            <div className="text-xs text-muted-foreground">Priority OS</div>
          </div>
        </div>
      </div>

      {/* Demo Notice */}
      <div className="px-4 py-3 border-b border-border">
        <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1">
          Demo Workspace
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Using seeded messages, tasks, and projects for this prototype.
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            {...item}
            active={pathname === item.href}
          />
        ))}
      </nav>

      {/* Theme Toggle */}
      <div className="p-3 border-t border-border">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
          <span className="text-sm font-medium">
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </span>
        </button>
      </div>
    </aside>
  )
}
