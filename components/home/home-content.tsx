'use client'

import useSWR from 'swr'
import { formatDate } from '@/lib/utils'
import { HeroSection } from './hero-section'
import { StatCards } from './stat-cards'
import { InboxSnapshot } from './inbox-snapshot'
import { FocusQueue } from './focus-queue'
import { PortfolioGlance } from './portfolio-glance'
import { AgentNotes } from './agent-notes'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export function HomeContent() {
  const { data: stats } = useSWR('/api/stats', fetcher, { refreshInterval: 5000 })
  const { data: messages } = useSWR('/api/messages', fetcher, { refreshInterval: 5000 })
  const { data: tasks } = useSWR('/api/tasks', fetcher, { refreshInterval: 5000 })
  const { data: projects } = useSWR('/api/projects', fetcher, { refreshInterval: 5000 })

  const urgentMessages = messages?.filter((m: { urgency: string }) => m.urgency === 'urgent')?.length || 0
  const urgentTasks = tasks?.filter((t: { status: string; priority: string }) => 
    t.status === 'blocked' || t.priority === 'urgent'
  )?.length || 0

  return (
    <div className="p-6 space-y-6">
      {/* Hero + Stats Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <HeroSection date={formatDate(new Date())} />
        </div>
        <div className="space-y-4">
          <StatCards 
            urgentComms={urgentMessages}
            urgentTasks={urgentTasks}
            portfolioProgress={stats?.portfolio_progress || 0}
          />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Inbox + Agent Notes */}
        <div className="lg:col-span-2 space-y-6">
          <InboxSnapshot messages={messages || []} />
          <AgentNotes 
            urgentMessages={urgentMessages}
            urgentTasks={urgentTasks}
            projects={projects || []}
          />
        </div>

        {/* Right Column - Focus Queue */}
        <div>
          <FocusQueue tasks={tasks || []} />
        </div>
      </div>

      {/* Portfolio Section */}
      <PortfolioGlance projects={projects || []} />
    </div>
  )
}
