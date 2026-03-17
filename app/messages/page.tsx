'use client'

import { useState } from 'react'
import useSWR, { mutate } from 'swr'
import { DashboardLayout } from '@/components/dashboard-layout'
import { Mail, MessageCircle, Send, Filter, AlertCircle, Check } from 'lucide-react'
import { formatRelativeTime, cn } from '@/lib/utils'

const fetcher = (url: string) => fetch(url).then(res => res.json())

interface Message {
  id: string
  channel: string
  sender: string
  subject?: string
  body: string
  project?: string
  urgency: string
  read: boolean
  task_extracted: boolean
  created_at: string
}

function ChannelIcon({ channel, className }: { channel: string; className?: string }) {
  switch (channel) {
    case 'email':
      return <Mail className={cn("w-4 h-4", className)} />
    case 'whatsapp':
      return <MessageCircle className={cn("w-4 h-4", className)} />
    case 'telegram':
      return <Send className={cn("w-4 h-4", className)} />
    default:
      return <Mail className={cn("w-4 h-4", className)} />
  }
}

export default function MessagesPage() {
  const [channelFilter, setChannelFilter] = useState<string>('all')
  const [urgencyFilter, setUrgencyFilter] = useState<string>('all')
  const [projectFilter, setProjectFilter] = useState<string>('all')
  
  const { data: messages = [] } = useSWR<Message[]>('/api/messages', fetcher, {
    refreshInterval: 5000
  })

  const channels = ['all', 'email', 'whatsapp', 'telegram']
  const urgencies = ['all', 'urgent', 'normal']
  const projects = ['all', ...new Set(messages.filter(m => m.project).map(m => m.project))]

  const filteredMessages = messages.filter(m => {
    if (channelFilter !== 'all' && m.channel !== channelFilter) return false
    if (urgencyFilter !== 'all' && m.urgency !== urgencyFilter) return false
    if (projectFilter !== 'all' && m.project !== projectFilter) return false
    return true
  })

  const handleToggleRead = async (id: string, currentRead: boolean) => {
    await fetch(`/api/messages/${id}/status`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ read: !currentRead })
    })
    mutate('/api/messages')
  }

  const handleToggleUrgent = async (id: string, currentUrgency: string) => {
    await fetch(`/api/messages/${id}/status`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ urgency: currentUrgency === 'urgent' ? 'normal' : 'urgent' })
    })
    mutate('/api/messages')
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1">
            Unified Communications
          </div>
          <h1 className="text-2xl font-bold text-foreground">Messages</h1>
          <p className="text-sm text-muted-foreground mt-1">
            All incoming messages across Email, WhatsApp, and Telegram
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filters:</span>
          </div>

          {/* Channel Filter */}
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

          {/* Urgency Filter */}
          <select
            value={urgencyFilter}
            onChange={(e) => setUrgencyFilter(e.target.value)}
            className="h-9 px-3 rounded-lg bg-muted border-0 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {urgencies.map(u => (
              <option key={u} value={u}>
                {u === 'all' ? 'All urgency' : u.charAt(0).toUpperCase() + u.slice(1)}
              </option>
            ))}
          </select>

          {/* Project Filter */}
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
            {filteredMessages.length} message{filteredMessages.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Messages List */}
        <div className="space-y-3">
          {filteredMessages.map((message, index) => (
            <div 
              key={message.id}
              className={cn(
                "bg-card rounded-xl border border-border p-4 hover:bg-muted/50 transition-colors animate-fade-in",
                !message.read && "border-l-2 border-l-primary"
              )}
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <div className="flex items-start gap-4">
                {/* Channel Icon */}
                <div className={cn(
                  "p-2 rounded-lg flex-shrink-0",
                  message.channel === 'email' && "bg-primary/10",
                  message.channel === 'whatsapp' && "bg-emerald-500/10",
                  message.channel === 'telegram' && "bg-sky-500/10"
                )}>
                  <ChannelIcon 
                    channel={message.channel} 
                    className={cn(
                      message.channel === 'email' && "text-primary",
                      message.channel === 'whatsapp' && "text-emerald-500",
                      message.channel === 'telegram' && "text-sky-500"
                    )}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {message.urgency === 'urgent' && (
                      <span className="w-2 h-2 rounded-full bg-destructive animate-pulse-dot flex-shrink-0" />
                    )}
                    <span className="font-medium text-sm text-foreground">
                      {message.sender}
                    </span>
                    {message.project && (
                      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                        {message.project}
                      </span>
                    )}
                    {message.task_extracted && (
                      <span className="text-[10px] font-medium uppercase tracking-wider text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                        Task Extracted
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground ml-auto flex-shrink-0">
                      {formatRelativeTime(message.created_at)}
                    </span>
                  </div>
                  
                  {message.subject && (
                    <div className={cn(
                      "text-sm mb-1",
                      !message.read ? "font-medium text-foreground" : "text-foreground"
                    )}>
                      {message.subject}
                    </div>
                  )}
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {message.body}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => handleToggleRead(message.id, message.read)}
                    className={cn(
                      "p-2 rounded-lg transition-colors",
                      message.read 
                        ? "text-muted-foreground hover:bg-muted" 
                        : "text-primary bg-primary/10 hover:bg-primary/20"
                    )}
                    title={message.read ? "Mark as unread" : "Mark as read"}
                  >
                    <Check className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleToggleUrgent(message.id, message.urgency)}
                    className={cn(
                      "p-2 rounded-lg transition-colors",
                      message.urgency === 'urgent'
                        ? "text-destructive bg-destructive/10 hover:bg-destructive/20"
                        : "text-muted-foreground hover:bg-muted"
                    )}
                    title={message.urgency === 'urgent' ? "Remove urgent" : "Mark as urgent"}
                  >
                    <AlertCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredMessages.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <Mail className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p className="text-sm">No messages found</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
