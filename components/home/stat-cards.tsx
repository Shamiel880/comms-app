'use client'

import { MessageSquare, AlertTriangle, TrendingUp } from 'lucide-react'

interface StatCardsProps {
  urgentComms: number
  urgentTasks: number
  portfolioProgress: number
}

export function StatCards({ urgentComms, urgentTasks, portfolioProgress }: StatCardsProps) {
  return (
    <div className="space-y-3">
      {/* Urgent Communications */}
      <div className="bg-card rounded-xl border border-border p-4 bg-primary/5">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-3xl font-bold text-foreground">{urgentComms}</div>
            <div className="text-xs font-medium text-muted-foreground mt-1">
              Urgent Communications
            </div>
            <div className="text-[10px] text-muted-foreground">Need attention now</div>
          </div>
          <div className="p-2 bg-primary/10 rounded-lg">
            <MessageSquare className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>

      {/* Urgent Tasks */}
      <div className="bg-card rounded-xl border border-border p-4 bg-destructive/5">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-3xl font-bold text-foreground">{urgentTasks}</div>
            <div className="text-xs font-medium text-muted-foreground mt-1">
              Urgent Tasks
            </div>
            <div className="text-[10px] text-muted-foreground">Blocking delivery</div>
          </div>
          <div className="p-2 bg-destructive/10 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-destructive" />
          </div>
        </div>
      </div>

      {/* Portfolio Progress */}
      <div className="bg-card rounded-xl border border-border p-4 bg-amber-500/5">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-3xl font-bold text-foreground">{portfolioProgress}%</div>
            <div className="text-xs font-medium text-muted-foreground mt-1">
              Portfolio Progress
            </div>
            <div className="text-[10px] text-muted-foreground">Across active projects</div>
          </div>
          <div className="p-2 bg-amber-500/10 rounded-lg">
            <TrendingUp className="w-5 h-5 text-amber-500" />
          </div>
        </div>
      </div>
    </div>
  )
}
