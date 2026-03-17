'use client'

import useSWR from 'swr'
import { DashboardLayout } from '@/components/dashboard-layout'
import { Bell, Mail, MessageCircle, Send, CheckSquare } from 'lucide-react'
import { formatRelativeTime, cn } from '@/lib/utils'

const fetcher = (url: string) => fetch(url).then(res => res.json())

interface Notification {
  id: string
  taskId: string
  taskTitle?: string
  newStatus: string
  channel?: string
  recipients: string[]
  created_at: string
}

function ChannelIcon({ channel, className }: { channel?: string; className?: string }) {
  switch (channel) {
    case 'email':
      return <Mail className={cn("w-4 h-4", className)} />
    case 'whatsapp':
      return <MessageCircle className={cn("w-4 h-4", className)} />
    case 'telegram':
      return <Send className={cn("w-4 h-4", className)} />
    default:
      return <Bell className={cn("w-4 h-4", className)} />
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case 'done':
      return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
    case 'in-progress':
      return 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
    case 'blocked':
      return 'bg-destructive/10 text-destructive'
    default:
      return 'bg-muted text-muted-foreground'
  }
}

export default function NotificationsPage() {
  const { data: notifications = [] } = useSWR<Notification[]>('/api/notifications', fetcher, {
    refreshInterval: 5000
  })

  // Sort by most recent first
  const sortedNotifications = [...notifications].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  )

  return (
    <DashboardLayout>
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1">
            Activity History
          </div>
          <h1 className="text-2xl font-bold text-foreground">Notifications</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Log of all status changes and notifications sent
          </p>
        </div>

        {/* Notifications List */}
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left px-4 py-3 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  Task
                </th>
                <th className="text-left px-4 py-3 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  Status Change
                </th>
                <th className="text-left px-4 py-3 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  Channel
                </th>
                <th className="text-left px-4 py-3 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  Recipients
                </th>
                <th className="text-left px-4 py-3 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  Timestamp
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedNotifications.map((notification, index) => (
                <tr 
                  key={notification.id}
                  className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 20}ms` }}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span className="font-medium text-sm text-foreground">
                        {notification.taskTitle || `Task ${notification.taskId.slice(0, 8)}`}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={cn(
                      "text-[10px] font-medium uppercase px-2 py-1 rounded-full",
                      getStatusColor(notification.newStatus)
                    )}>
                      {notification.newStatus.replace('-', ' ')}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {notification.channel ? (
                      <div className={cn(
                        "inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs",
                        notification.channel === 'email' && "bg-primary/10 text-primary",
                        notification.channel === 'whatsapp' && "bg-emerald-500/10 text-emerald-500",
                        notification.channel === 'telegram' && "bg-sky-500/10 text-sky-500"
                      )}>
                        <ChannelIcon channel={notification.channel} />
                        {notification.channel}
                      </div>
                    ) : (
                      <span className="text-xs text-muted-foreground">-</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      {notification.recipients.map((recipient, i) => (
                        <span 
                          key={i}
                          className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded"
                        >
                          {recipient}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-muted-foreground">
                      {formatRelativeTime(notification.created_at)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {sortedNotifications.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <Bell className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p className="text-sm">No notifications yet</p>
              <p className="text-xs mt-1">Notifications will appear when task statuses change</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
