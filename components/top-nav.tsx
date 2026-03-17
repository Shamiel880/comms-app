'use client'

import { Search } from 'lucide-react'
import { formatDate } from '@/lib/utils'

export function TopNav() {
  return (
    <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6">
      {/* Search Bar */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search messages, tasks, or projects"
            className="w-full h-10 pl-10 pr-4 rounded-lg bg-muted border-0 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">
          {formatDate(new Date())}
        </span>
        <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
          <span className="text-sm font-medium text-primary-foreground">MJ</span>
        </div>
      </div>
    </header>
  )
}
