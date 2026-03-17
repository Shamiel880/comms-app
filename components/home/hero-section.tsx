'use client'

interface HeroSectionProps {
  date: string
}

export function HeroSection({ date }: HeroSectionProps) {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-4">
        Priority Workspace
      </div>
      
      <h1 className="text-2xl font-bold text-foreground mb-3 text-balance">
        A calmer place to rank the work that matters first.
      </h1>
      
      <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-xl">
        Mail, WhatsApp, Telegram, and texts land in one view so urgent communication, tasks, and project pressure stay connected without feeling noisy.
      </p>
      
      <div className="inline-flex items-center px-3 py-1.5 bg-muted rounded-full">
        <span className="text-xs font-medium text-muted-foreground">{date}</span>
      </div>
    </div>
  )
}
