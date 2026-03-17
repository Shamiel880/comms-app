'use client'

import { Sidebar } from './sidebar'
import { TopNav } from './top-nav'
import { AskButton } from './ask-button'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { data: stats } = useSWR('/api/stats', fetcher, {
    refreshInterval: 5000
  })

  const { data: messages } = useSWR('/api/messages', fetcher, {
    refreshInterval: 5000
  })

  const { data: tasks } = useSWR('/api/tasks', fetcher, {
    refreshInterval: 5000
  })

  const unreadMessages = messages?.filter((m: { read: boolean }) => !m.read)?.length || 0
  const openTasks = tasks?.filter((t: { status: string }) => t.status !== 'done')?.length || 0

  return (
    <div className="flex h-screen bg-background">
      <Sidebar 
        stats={{
          unreadMessages,
          openTasks,
          activeProjects: stats?.total_messages ? 4 : 0
        }}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
      <AskButton />
    </div>
  )
}
