'use client'

import { Shield } from 'lucide-react'

interface Project {
  name: string
  status: string
}

interface AgentNotesProps {
  urgentMessages: number
  urgentTasks: number
  projects: Project[]
}

export function AgentNotes({ urgentMessages, urgentTasks, projects }: AgentNotesProps) {
  const atRiskProjects = projects.filter(
    p => p.status.toLowerCase().includes('risk')
  )
  
  const generateSummary = () => {
    const parts: string[] = []
    
    if (urgentMessages > 0) {
      parts.push(`${urgentMessages} urgent message${urgentMessages > 1 ? 's' : ''} need${urgentMessages === 1 ? 's' : ''} attention`)
    }
    
    if (urgentTasks > 0) {
      parts.push(`${urgentTasks} task${urgentTasks > 1 ? 's are' : ' is'} blocking progress`)
    }
    
    if (atRiskProjects.length > 0) {
      parts.push(`${atRiskProjects.map(p => p.name).join(' and ')} ${atRiskProjects.length > 1 ? 'are' : 'is'} at risk`)
    }
    
    if (parts.length === 0) {
      return "All clear. No urgent items require immediate attention. Focus on progressing your active tasks."
    }
    
    return parts.join('. ') + '. Consider addressing these priorities first.'
  }

  return (
    <div className="bg-card rounded-xl border border-border p-4">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
          <Shield className="w-4 h-4 text-primary" />
        </div>
        <div>
          <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1">
            Agent notes
          </div>
          <p className="text-sm text-foreground leading-relaxed">
            {generateSummary()}
          </p>
        </div>
      </div>
    </div>
  )
}
