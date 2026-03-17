'use client'

import Link from 'next/link'
import { ArrowRight, Mail, MessageCircle, Send } from 'lucide-react'
import { formatRelativeTime, cn } from '@/lib/utils'

interface Message {
  id: string
  channel: string
  sender: string
  subject?: string
  body: string
  project?: string
  urgency: string
  read: boolean
  created_at: string
}

interface InboxSnapshotProps {
  messages: Message[]
}

function ChannelIcon({ channel }: { channel: string }) {
  switch (channel) {
    case 'email':
      return <Mail className="w-4 h-4" />
    case 'whatsapp':
      return <MessageCircle className="w-4 h-4" />
    case 'telegram':
      return <Send className="w-4 h-4" />
    default:
      return <Mail className="w-4 h-4" />
  }
}

export function InboxSnapshot({ messages }: InboxSnapshotProps) {
  const priorityMessages = messages
    .filter(m => !m.read)
    .slice(0, 4)

  return (
    <div className="bg-card rounded-xl border border-border p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1">
            Inbox Snapshot
          </div>
          <h2 className="text-lg font-semibold text-foreground">Priority communications</h2>
        </div>
        <Link 
          href="/messages"
          className="flex items-center gap-1 text-sm text-primary hover:underline"
        >
          Open messages
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="space-y-3">
        {priorityMessages.map((message, index) => (
          <div 
            key={message.id}
            className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-start gap-3">
              {message.urgency === 'urgent' && (
                <span className="mt-1.5 w-2 h-2 rounded-full bg-destructive animate-pulse-dot flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={cn(
                    "p-1 rounded",
                    message.channel === 'email' && "bg-primary/10 text-primary",
                    message.channel === 'whatsapp' && "bg-emerald-500/10 text-emerald-500",
                    message.channel === 'telegram' && "bg-sky-500/10 text-sky-500"
                  )}>
                    <ChannelIcon channel={message.channel} />
                  </span>
                  <span className="font-medium text-sm text-foreground truncate">
                    {message.sender}
                  </span>
                  {message.project && (
                    <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                      {message.project}
                    </span>
                  )}
                  <span className="text-xs text-muted-foreground ml-auto flex-shrink-0">
                    {formatRelativeTime(message.created_at)}
                  </span>
                </div>
                {message.subject && (
                  <div className="text-sm font-medium text-foreground mb-0.5 truncate">
                    {message.subject}
                  </div>
                )}
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {message.body}
                </p>
              </div>
            </div>
          </div>
        ))}

        {priorityMessages.length === 0 && (
          <div className="text-center py-8 text-muted-foreground text-sm">
            No unread messages
          </div>
        )}
      </div>
    </div>
  )
}
