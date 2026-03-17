'use client'

import { useState } from 'react'
import useSWR, { mutate } from 'swr'
import { DashboardLayout } from '@/components/dashboard-layout'
import { CheckSquare, Filter, Mail, MessageCircle, Send, ChevronDown } from 'lucide-react'
import { formatRelativeTime, cn } from '@/lib/utils'

const fetcher = (url: string) => fetch(url).then(res => res.json())

interface Task {
  id: string
  title: string
  description?: string
  project?: string
  status: string
  priority: string
  source_channel?: string
  assigned?: string
  due?: string
  progress: number
  created_at: string
}

function ChannelIcon({ channel, className }: { channel: string; className?: string }) {
  switch (channel) {
    case 'email':
      return <Mail className={cn("w-3 h-3", className)} />
    case 'whatsapp':
      return <MessageCircle className={cn("w-3 h-3", className)} />
    case 'telegram':
      return <Send className={cn("w-3 h-3", className)} />
    default:
      return null
  }
}

const statusOptions = [
  { value: 'pending', label: 'Pending', color: 'bg-muted text-muted-foreground' },
  { value: 'in-progress', label: 'In Progress', color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400' },
  { value: 'done', label: 'Done', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' },
  { value: 'blocked', label: 'Blocked', color: 'bg-destructive/10 text-destructive' }
]

export default function TasksPage() {
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [channelFilter, setChannelFilter] = useState<string>('all')
  const [projectFilter, setProjectFilter] = useState<string>('all')
  const [updatingTask, setUpdatingTask] = useState<string | null>(null)
  const [toast, setToast] = useState<string | null>(null)
  
  const { data: tasks = [] } = useSWR<Task[]>('/api/tasks', fetcher, {
    refreshInterval: 5000
  })

  const statuses = ['all', 'pending', 'in-progress', 'done', 'blocked']
  const channels = ['all', 'email', 'whatsapp', 'telegram']
  const projects = ['all', ...new Set(tasks.filter(t => t.project).map(t => t.project))]

  const filteredTasks = tasks.filter(t => {
    if (statusFilter !== 'all' && t.status !== statusFilter) return false
    if (channelFilter !== 'all' && t.source_channel !== channelFilter) return false
    if (projectFilter !== 'all' && t.project !== projectFilter) return false
    return true
  })

  const handleStatusChange = async (taskId: string, newStatus: string) => {
    setUpdatingTask(taskId)
    try {
      await fetch(`/api/tasks/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      })

      // Send notification
      await fetch('/api/notifications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          taskId,
          newStatus,
          recipients: ['team']
        })
      })

      mutate('/api/tasks')
      setToast(`Task updated to ${newStatus}`)
      setTimeout(() => setToast(null), 3000)
    } catch (error) {
      console.error('Failed to update task:', error)
    } finally {
      setUpdatingTask(null)
    }
  }

  const getStatusConfig = (status: string) => {
    return statusOptions.find(s => s.value === status) || statusOptions[0]
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1">
            Execution Lane
          </div>
          <h1 className="text-2xl font-bold text-foreground">Tasks</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage and track all tasks extracted from communications
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filters:</span>
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="h-9 px-3 rounded-lg bg-muted border-0 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {statuses.map(s => (
              <option key={s} value={s}>
                {s === 'all' ? 'All statuses' : s.charAt(0).toUpperCase() + s.slice(1).replace('-', ' ')}
              </option>
            ))}
          </select>

          <select
            value={channelFilter}
            onChange={(e) => setChannelFilter(e.target.value)}
            className="h-9 px-3 rounded-lg bg-muted border-0 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {channels.map(ch => (
              <option key={ch} value={ch}>
                {ch === 'all' ? 'All channels' : ch.charAt(0).toUpperCase() + ch.slice(1)}
              </option>
            ))}
          </select>

          <select
            value={projectFilter}
            onChange={(e) => setProjectFilter(e.target.value)}
            className="h-9 px-3 rounded-lg bg-muted border-0 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {projects.map(p => (
              <option key={p} value={p}>
                {p === 'all' ? 'All projects' : p}
              </option>
            ))}
          </select>

          <span className="text-xs text-muted-foreground ml-auto">
            {filteredTasks.length} task{filteredTasks.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Tasks Table */}
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left px-4 py-3 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  Task
                </th>
                <th className="text-left px-4 py-3 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  Source
                </th>
                <th className="text-left px-4 py-3 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  Project
                </th>
                <th className="text-left px-4 py-3 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  Status
                </th>
                <th className="text-left px-4 py-3 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  Assigned
                </th>
                <th className="text-left px-4 py-3 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  Due
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task, index) => {
                const statusConfig = getStatusConfig(task.status)
                return (
                  <tr 
                    key={task.id}
                    className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors animate-fade-in"
                    style={{ animationDelay: `${index * 20}ms` }}
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {task.priority === 'urgent' && (
                          <span className="w-2 h-2 rounded-full bg-destructive animate-pulse-dot flex-shrink-0" />
                        )}
                        <div>
                          <div className="font-medium text-sm text-foreground">
                            {task.title}
                          </div>
                          {task.description && (
                            <div className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                              {task.description}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      {task.source_channel && (
                        <div className={cn(
                          "inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs",
                          task.source_channel === 'email' && "bg-primary/10 text-primary",
                          task.source_channel === 'whatsapp' && "bg-emerald-500/10 text-emerald-500",
                          task.source_channel === 'telegram' && "bg-sky-500/10 text-sky-500"
                        )}>
                          <ChannelIcon channel={task.source_channel} />
                          {task.source_channel}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {task.project && (
                        <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                          {task.project}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="relative">
                        <select
                          value={task.status}
                          onChange={(e) => handleStatusChange(task.id, e.target.value)}
                          disabled={updatingTask === task.id}
                          className={cn(
                            "appearance-none pr-7 pl-2 py-1 rounded text-[10px] font-medium uppercase cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring",
                            statusConfig.color,
                            updatingTask === task.id && "opacity-50"
                          )}
                        >
                          {statusOptions.map(opt => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none" />
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm text-muted-foreground">
                        {task.assigned || '-'}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={cn(
                        "text-sm",
                        task.due && new Date(task.due) < new Date() 
                          ? "text-destructive font-medium" 
                          : "text-muted-foreground"
                      )}>
                        {task.due ? formatRelativeTime(task.due) : '-'}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          {filteredTasks.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <CheckSquare className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p className="text-sm">No tasks found</p>
            </div>
          )}
        </div>

        {/* Toast */}
        {toast && (
          <div className="fixed bottom-6 right-6 bg-foreground text-background px-4 py-3 rounded-lg shadow-lg animate-fade-in z-50">
            <p className="text-sm font-medium">{toast}</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
