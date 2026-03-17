'use client'

import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Task {
  id: string
  title: string
  description?: string
  project?: string
  status: string
  priority: string
  due?: string
  progress: number
}

interface FocusQueueProps {
  tasks: Task[]
}

function formatDueTime(due: string): string {
  const dueDate = new Date(due)
  const now = new Date()
  const diffHours = Math.round((dueDate.getTime() - now.getTime()) / (1000 * 60 * 60))
  
  if (diffHours < 0) return 'Overdue'
  if (diffHours < 1) return 'Due soon'
  if (diffHours < 24) return `${diffHours}h`
  return `${Math.round(diffHours / 24)}d`
}

export function FocusQueue({ tasks }: FocusQueueProps) {
  const focusTasks = tasks
    .filter(t => t.status !== 'done')
    .sort((a, b) => {
      // Prioritize urgent/blocked tasks
      if (a.priority === 'urgent' && b.priority !== 'urgent') return -1
      if (b.priority === 'urgent' && a.priority !== 'urgent') return 1
      if (a.status === 'blocked' && b.status !== 'blocked') return -1
      if (b.status === 'blocked' && a.status !== 'blocked') return 1
      return 0
    })
    .slice(0, 4)

  return (
    <div className="bg-card rounded-xl border border-border p-5 h-fit">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1">
            Today
          </div>
          <h2 className="text-lg font-semibold text-foreground">Focus queue</h2>
        </div>
        <Link 
          href="/tasks"
          className="flex items-center gap-1 text-sm text-primary hover:underline"
        >
          Open tasks
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="space-y-3">
        {focusTasks.map((task, index) => (
          <div 
            key={task.id}
            className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {task.project && (
              <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground mb-1">
                {task.project}
              </div>
            )}
            <div className="font-medium text-sm text-foreground mb-2">
              {task.title}
            </div>
            
            <div className="flex items-center justify-between gap-2 mb-2">
              {task.due && (
                <div className={cn(
                  "flex items-center gap-1 text-xs px-2 py-0.5 rounded-full",
                  formatDueTime(task.due) === 'Overdue' 
                    ? "bg-destructive/10 text-destructive"
                    : "bg-muted text-muted-foreground"
                )}>
                  <Clock className="w-3 h-3" />
                  {formatDueTime(task.due)}
                </div>
              )}
              <span className={cn(
                "text-[10px] font-medium uppercase px-2 py-0.5 rounded-full",
                task.status === 'blocked' && "bg-destructive/10 text-destructive",
                task.status === 'in-progress' && "bg-amber-500/10 text-amber-600 dark:text-amber-400",
                task.status === 'pending' && "bg-muted text-muted-foreground"
              )}>
                {task.status}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${task.progress}%` }}
              />
            </div>
          </div>
        ))}

        {focusTasks.length === 0 && (
          <div className="text-center py-8 text-muted-foreground text-sm">
            No tasks in queue
          </div>
        )}
      </div>
    </div>
  )
}
