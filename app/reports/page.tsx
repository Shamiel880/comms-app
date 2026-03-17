'use client'

import { useState, useRef } from 'react'
import useSWR from 'swr'
import { DashboardLayout } from '@/components/dashboard-layout'
import { FileText, Download, Clock, Mail, MessageCircle, Send, CheckSquare, FolderKanban, Bell } from 'lucide-react'
import { formatDate, cn } from '@/lib/utils'

const fetcher = (url: string) => fetch(url).then(res => res.json())

interface Message {
  id: string
  channel: string
  urgency: string
  read: boolean
  created_at: string
}

interface Task {
  id: string
  title: string
  status: string
  priority: string
  created_at: string
}

interface Project {
  id: string
  name: string
  status: string
  progress: number
  open_tasks: number
  urgent_items: number
}

interface Notification {
  id: string
  taskId: string
  newStatus: string
  created_at: string
}

export default function ReportsPage() {
  const [scheduleFrequency, setScheduleFrequency] = useState('weekly')
  const [scheduleEmail, setScheduleEmail] = useState('')
  const [isScheduling, setIsScheduling] = useState(false)
  const [scheduleSuccess, setScheduleSuccess] = useState(false)
  const [showReport, setShowReport] = useState(false)
  const reportRef = useRef<HTMLDivElement>(null)

  const { data: messages = [] } = useSWR<Message[]>('/api/messages', fetcher)
  const { data: tasks = [] } = useSWR<Task[]>('/api/tasks', fetcher)
  const { data: projects = [] } = useSWR<Project[]>('/api/projects', fetcher)
  const { data: notifications = [] } = useSWR<Notification[]>('/api/notifications', fetcher)

  // Calculate report data
  const messagesByChannel = {
    email: messages.filter(m => m.channel === 'email').length,
    whatsapp: messages.filter(m => m.channel === 'whatsapp').length,
    telegram: messages.filter(m => m.channel === 'telegram').length
  }

  const tasksByStatus = {
    pending: tasks.filter(t => t.status === 'pending').length,
    'in-progress': tasks.filter(t => t.status === 'in-progress').length,
    done: tasks.filter(t => t.status === 'done').length,
    blocked: tasks.filter(t => t.status === 'blocked').length
  }

  const unresolvedTasks24h = tasks.filter(t => {
    const created = new Date(t.created_at)
    const now = new Date()
    const hoursDiff = (now.getTime() - created.getTime()) / (1000 * 60 * 60)
    return t.status !== 'done' && hoursDiff > 24
  })

  const handleScheduleReport = async () => {
    if (!scheduleEmail) return

    setIsScheduling(true)
    try {
      await fetch('/api/reports/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          frequency: scheduleFrequency,
          email: scheduleEmail
        })
      })
      setScheduleSuccess(true)
      setTimeout(() => setScheduleSuccess(false), 3000)
    } catch (error) {
      console.error('Failed to schedule report:', error)
    } finally {
      setIsScheduling(false)
    }
  }

  const handleDownloadPDF = () => {
    window.print()
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1">
            Reports
          </div>
          <h1 className="text-2xl font-bold text-foreground">Analytics & Exports</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Generate reports and schedule automated delivery
          </p>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Manual Report */}
          <div className="bg-card rounded-xl border border-border p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground">Generate Report</h2>
                <p className="text-xs text-muted-foreground">View report in-page or download as PDF</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowReport(true)}
                className="flex-1 h-10 px-4 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                Generate Report
              </button>
              <button
                onClick={handleDownloadPDF}
                className="h-10 px-4 rounded-lg bg-muted text-foreground font-medium text-sm hover:bg-muted/80 transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                PDF
              </button>
            </div>
          </div>

          {/* Scheduled Reports */}
          <div className="bg-card rounded-xl border border-border p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-amber-500/10 rounded-lg">
                <Clock className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground">Schedule Reports</h2>
                <p className="text-xs text-muted-foreground">Automatically send reports via email</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex gap-3">
                <select
                  value={scheduleFrequency}
                  onChange={(e) => setScheduleFrequency(e.target.value)}
                  className="h-10 px-3 rounded-lg bg-muted border-0 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="custom">Custom</option>
                </select>
                <input
                  type="email"
                  value={scheduleEmail}
                  onChange={(e) => setScheduleEmail(e.target.value)}
                  placeholder="Recipient email"
                  className="flex-1 h-10 px-4 rounded-lg bg-muted border-0 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <button
                onClick={handleScheduleReport}
                disabled={isScheduling || !scheduleEmail}
                className="w-full h-10 px-4 rounded-lg bg-foreground text-background font-medium text-sm hover:bg-foreground/90 transition-colors disabled:opacity-50"
              >
                {isScheduling ? 'Scheduling...' : scheduleSuccess ? 'Scheduled!' : 'Schedule'}
              </button>
            </div>
          </div>
        </div>

        {/* Report Content */}
        {showReport && (
          <div ref={reportRef} className="print:p-0 space-y-6">
            {/* Report Header */}
            <div className="bg-card rounded-xl border border-border p-5 print:border-0 print:shadow-none">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-bold text-foreground">Priority OS Report</h2>
                <span className="text-sm text-muted-foreground">{formatDate(new Date())}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Comprehensive overview of communications, tasks, and project status
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Messages by Channel */}
              <div className="bg-card rounded-xl border border-border p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <h3 className="font-semibold text-sm text-foreground">Messages by Channel</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">Email</span>
                    </div>
                    <span className="font-medium text-foreground">{messagesByChannel.email}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm text-foreground">WhatsApp</span>
                    </div>
                    <span className="font-medium text-foreground">{messagesByChannel.whatsapp}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4 text-sky-500" />
                      <span className="text-sm text-foreground">Telegram</span>
                    </div>
                    <span className="font-medium text-foreground">{messagesByChannel.telegram}</span>
                  </div>
                  <div className="border-t border-border pt-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Total</span>
                    <span className="font-bold text-foreground">{messages.length}</span>
                  </div>
                </div>
              </div>

              {/* Tasks by Status */}
              <div className="bg-card rounded-xl border border-border p-5">
                <div className="flex items-center gap-2 mb-4">
                  <CheckSquare className="w-4 h-4 text-muted-foreground" />
                  <h3 className="font-semibold text-sm text-foreground">Tasks by Status</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={cn("text-xs font-medium uppercase px-2 py-0.5 rounded-full", "bg-muted text-muted-foreground")}>
                      Pending
                    </span>
                    <span className="font-medium text-foreground">{tasksByStatus.pending}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={cn("text-xs font-medium uppercase px-2 py-0.5 rounded-full", "bg-amber-500/10 text-amber-600")}>
                      In Progress
                    </span>
                    <span className="font-medium text-foreground">{tasksByStatus['in-progress']}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={cn("text-xs font-medium uppercase px-2 py-0.5 rounded-full", "bg-emerald-500/10 text-emerald-600")}>
                      Done
                    </span>
                    <span className="font-medium text-foreground">{tasksByStatus.done}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={cn("text-xs font-medium uppercase px-2 py-0.5 rounded-full", "bg-destructive/10 text-destructive")}>
                      Blocked
                    </span>
                    <span className="font-medium text-foreground">{tasksByStatus.blocked}</span>
                  </div>
                  <div className="border-t border-border pt-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Total</span>
                    <span className="font-bold text-foreground">{tasks.length}</span>
                  </div>
                </div>
              </div>

              {/* Unresolved Tasks */}
              <div className="bg-card rounded-xl border border-border p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <h3 className="font-semibold text-sm text-foreground">Unresolved 24h+</h3>
                </div>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {unresolvedTasks24h.length > 0 ? (
                    unresolvedTasks24h.map(task => (
                      <div key={task.id} className="p-2 bg-destructive/5 rounded-lg">
                        <span className="text-sm text-foreground">{task.title}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">No overdue tasks</p>
                  )}
                </div>
                <div className="border-t border-border pt-3 mt-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">Count</span>
                  <span className={cn(
                    "font-bold",
                    unresolvedTasks24h.length > 0 ? "text-destructive" : "text-emerald-500"
                  )}>
                    {unresolvedTasks24h.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Project Progress */}
            <div className="bg-card rounded-xl border border-border p-5">
              <div className="flex items-center gap-2 mb-4">
                <FolderKanban className="w-4 h-4 text-muted-foreground" />
                <h3 className="font-semibold text-sm text-foreground">Project Progress Summary</h3>
              </div>
              <div className="space-y-4">
                {projects.map(project => (
                  <div key={project.id} className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">{project.name}</span>
                        <span className={cn(
                          "text-[10px] font-medium uppercase px-2 py-0.5 rounded-full",
                          project.status.toLowerCase().includes('risk') && "bg-destructive/10 text-destructive",
                          project.status.toLowerCase() === 'on-track' && "bg-emerald-500/10 text-emerald-600",
                          project.status.toLowerCase() === 'watch' && "bg-amber-500/10 text-amber-600"
                        )}>
                          {project.status}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-foreground">{project.progress}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={cn(
                          "h-full rounded-full",
                          project.status.toLowerCase().includes('risk') ? "bg-destructive" : 
                          project.status.toLowerCase() === 'watch' ? "bg-amber-500" : "bg-emerald-500"
                        )}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span>{project.open_tasks} open tasks</span>
                      {project.urgent_items > 0 && (
                        <span className="text-destructive">{project.urgent_items} urgent</span>
                      )}
                    </div>
                  </div>
                ))}
                {projects.length === 0 && (
                  <p className="text-sm text-muted-foreground">No projects</p>
                )}
              </div>
            </div>

            {/* Notification History */}
            <div className="bg-card rounded-xl border border-border p-5">
              <div className="flex items-center gap-2 mb-4">
                <Bell className="w-4 h-4 text-muted-foreground" />
                <h3 className="font-semibold text-sm text-foreground">Recent Notification History</h3>
              </div>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {notifications.slice(0, 10).map(notification => (
                  <div key={notification.id} className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
                    <span className="text-sm text-foreground">Task {notification.taskId.slice(0, 8)}</span>
                    <span className={cn(
                      "text-[10px] font-medium uppercase px-2 py-0.5 rounded-full",
                      notification.newStatus === 'done' && "bg-emerald-500/10 text-emerald-600",
                      notification.newStatus === 'in-progress' && "bg-amber-500/10 text-amber-600",
                      notification.newStatus === 'blocked' && "bg-destructive/10 text-destructive"
                    )}>
                      {notification.newStatus}
                    </span>
                  </div>
                ))}
                {notifications.length === 0 && (
                  <p className="text-sm text-muted-foreground">No notifications</p>
                )}
              </div>
            </div>
          </div>
        )}

        {!showReport && (
          <div className="text-center py-16 text-muted-foreground">
            <FileText className="w-16 h-16 mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium mb-1">No report generated yet</p>
            <p className="text-sm">Click "Generate Report" to view your analytics</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
