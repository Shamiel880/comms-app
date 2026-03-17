'use client'

import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { cn } from '@/lib/utils'

export function AskButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          'fixed bottom-6 right-6 flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 text-white shadow-lg hover:bg-emerald-600 transition-all z-50',
          isOpen && 'hidden'
        )}
      >
        <MessageCircle className="w-5 h-5" />
        <span className="font-medium text-sm">Ask Priority OS</span>
      </button>

      {/* Chat Drawer */}
      <div
        className={cn(
          'fixed bottom-6 right-6 w-96 bg-card border border-border rounded-2xl shadow-2xl transition-all duration-300 z-50',
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="font-semibold text-sm">Priority OS Assistant</div>
              <div className="text-xs text-muted-foreground">AI-powered help</div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg hover:bg-muted transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="h-72 p-4 overflow-y-auto">
          <div className="bg-muted rounded-lg p-3 max-w-[85%]">
            <p className="text-sm">
              Hi! I can help you understand your priorities, summarize messages, or suggest what to focus on next. What would you like to know?
            </p>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about your priorities..."
              className="flex-1 h-10 px-4 rounded-lg bg-muted border-0 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
