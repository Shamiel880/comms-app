'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Project {
  id: string
  name: string
  description?: string
  status: string
  progress: number
  open_tasks: number
  urgent_items: number
}

interface PortfolioGlanceProps {
  projects: Project[]
}

function getStatusConfig(status: string) {
  switch (status.toLowerCase()) {
    case 'at-risk':
    case 'at risk':
      return {
        label: 'At risk',
        className: 'bg-destructive/10 text-destructive'
      }
    case 'on-track':
    case 'on track':
      return {
        label: 'On track',
        className: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
      }
    case 'watch':
      return {
        label: 'Watch',
        className: 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
      }
    default:
      return {
        label: status,
        className: 'bg-muted text-muted-foreground'
      }
  }
}

export function PortfolioGlance({ projects }: PortfolioGlanceProps) {
  return (
    <div className="bg-card rounded-xl border border-border p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1">
            Active Projects
          </div>
          <h2 className="text-lg font-semibold text-foreground">Portfolio at a glance</h2>
        </div>
        <Link 
          href="/projects"
          className="flex items-center gap-1 text-sm text-primary hover:underline"
        >
          View all
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="space-y-3">
        {projects.map((project, index) => {
          const statusConfig = getStatusConfig(project.status)
          return (
            <div 
              key={project.id}
              className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm text-foreground">
                      {project.name}
                    </span>
                    <span className={cn(
                      "text-[10px] font-medium uppercase px-2 py-0.5 rounded-full",
                      statusConfig.className
                    )}>
                      {statusConfig.label}
                    </span>
                  </div>
                  {project.description && (
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {project.description}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground flex-shrink-0">
                  <span>{project.open_tasks} open</span>
                  {project.urgent_items > 0 && (
                    <span className="text-destructive font-medium">
                      {project.urgent_items} urgent
                    </span>
                  )}
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={cn(
                      "h-full rounded-full transition-all duration-500",
                      project.status.toLowerCase().includes('risk') 
                        ? "bg-destructive" 
                        : project.status.toLowerCase() === 'watch'
                          ? "bg-amber-500"
                          : "bg-emerald-500"
                    )}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-muted-foreground w-10 text-right">
                  {project.progress}%
                </span>
              </div>
            </div>
          )
        })}

        {projects.length === 0 && (
          <div className="text-center py-8 text-muted-foreground text-sm">
            No active projects
          </div>
        )}
      </div>
    </div>
  )
}
