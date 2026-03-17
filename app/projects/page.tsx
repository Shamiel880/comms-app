'use client'

import { useState } from 'react'
import useSWR from 'swr'
import { DashboardLayout } from '@/components/dashboard-layout'
import { FolderKanban, ArrowRight, MessageSquare, CheckSquare, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const fetcher = (url: string) => fetch(url).then(res => res.json())

interface Project {
  id: string
  name: string
  description?: string
  status: string
  progress: number
  open_tasks: number
  urgent_items: number
}

interface Message {
  id: string
  channel: string
  sender: string
  subject?: string
  body: string
  project?: string
  urgency: string
  created_at: string
}

interface Task {
  id: string
  title: string
  project?: string
  status: string
  priority: string
}

function getStatusConfig(status: string) {
  switch (status.toLowerCase()) {
    case 'at-risk':
    case 'at risk':
      return {
        label: 'At risk',
        className: 'bg-destructive/10 text-destructive',
        progressColor: 'bg-destructive'
      }
    case 'on-track':
    case 'on track':
      return {
        label: 'On track',
        className: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
        progressColor: 'bg-emerald-500'
      }
    case 'watch':
      return {
        label: 'Watch',
        className: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
        progressColor: 'bg-amber-500'
      }
    default:
      return {
        label: status,
        className: 'bg-muted text-muted-foreground',
        progressColor: 'bg-primary'
      }
  }
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const { data: projects = [] } = useSWR<Project[]>('/api/projects', fetcher, {
    refreshInterval: 5000
  })

  const { data: messages = [] } = useSWR<Message[]>('/api/messages', fetcher, {
    refreshInterval: 5000
  })

  const { data: tasks = [] } = useSWR<Task[]>('/api/tasks', fetcher, {
    refreshInterval: 5000
  })

  const getProjectMessages = (projectName: string) => {
    return messages.filter(m => m.project === projectName)
  }

  const getProjectTasks = (projectName: string) => {
    return tasks.filter(t => t.project === projectName)
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1">
            Portfolio View
          </div>
          <h1 className="text-2xl font-bold text-foreground">Projects</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Overview of all active projects and their progress
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => {
            const statusConfig = getStatusConfig(project.status)
            return (
              <div 
                key={project.id}
                className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-all cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-muted rounded-lg">
                      <FolderKanban className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{project.name}</h3>
                      <span className={cn(
                        "text-[10px] font-medium uppercase px-2 py-0.5 rounded-full mt-1 inline-block",
                        statusConfig.className
                      )}>
                        {statusConfig.label}
                      </span>
                    </div>
                  </div>
                </div>

                {project.description && (
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                )}

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium text-foreground">{project.progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={cn("h-full rounded-full transition-all duration-500", statusConfig.progressColor)}
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {project.open_tasks} open task{project.open_tasks !== 1 ? 's' : ''}
                  </span>
                  {project.urgent_items > 0 && (
                    <span className="text-destructive font-medium">
                      {project.urgent_items} urgent
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-end mt-3 text-primary text-sm">
                  <span className="hover:underline">View details</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            )
          })}

          {projects.length === 0 && (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              <FolderKanban className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p className="text-sm">No projects found</p>
            </div>
          )}
        </div>

        {/* Project Detail Drawer */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <div 
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <div className="relative w-full max-w-lg bg-card border-l border-border h-full overflow-y-auto animate-fade-in">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-foreground">{selectedProject.name}</h2>
                    <span className={cn(
                      "text-[10px] font-medium uppercase px-2 py-0.5 rounded-full mt-2 inline-block",
                      getStatusConfig(selectedProject.status).className
                    )}>
                      {getStatusConfig(selectedProject.status).label}
                    </span>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {selectedProject.description && (
                  <p className="text-sm text-muted-foreground mb-6">
                    {selectedProject.description}
                  </p>
                )}

                {/* Progress */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium text-foreground">{selectedProject.progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={cn("h-full rounded-full transition-all", getStatusConfig(selectedProject.status).progressColor)}
                      style={{ width: `${selectedProject.progress}%` }}
                    />
                  </div>
                </div>

                {/* Linked Messages */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare className="w-4 h-4 text-muted-foreground" />
                    <h3 className="font-semibold text-sm text-foreground">
                      Linked Messages ({getProjectMessages(selectedProject.name).length})
                    </h3>
                  </div>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {getProjectMessages(selectedProject.name).slice(0, 5).map(msg => (
                      <div key={msg.id} className="p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm text-foreground">{msg.sender}</span>
                          <span className="text-xs text-muted-foreground">{msg.channel}</span>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-1">{msg.body}</p>
                      </div>
                    ))}
                    {getProjectMessages(selectedProject.name).length === 0 && (
                      <p className="text-sm text-muted-foreground">No linked messages</p>
                    )}
                  </div>
                </div>

                {/* Linked Tasks */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckSquare className="w-4 h-4 text-muted-foreground" />
                    <h3 className="font-semibold text-sm text-foreground">
                      Linked Tasks ({getProjectTasks(selectedProject.name).length})
                    </h3>
                  </div>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {getProjectTasks(selectedProject.name).map(task => (
                      <div key={task.id} className="p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm text-foreground">{task.title}</span>
                          <span className={cn(
                            "text-[10px] font-medium uppercase px-2 py-0.5 rounded-full",
                            task.status === 'done' && "bg-emerald-500/10 text-emerald-600",
                            task.status === 'in-progress' && "bg-amber-500/10 text-amber-600",
                            task.status === 'blocked' && "bg-destructive/10 text-destructive",
                            task.status === 'pending' && "bg-muted text-muted-foreground"
                          )}>
                            {task.status}
                          </span>
                        </div>
                      </div>
                    ))}
                    {getProjectTasks(selectedProject.name).length === 0 && (
                      <p className="text-sm text-muted-foreground">No linked tasks</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
