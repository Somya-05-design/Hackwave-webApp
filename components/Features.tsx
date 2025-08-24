'use client'

import { 
  Code,
  Shield,
  Users,
  GitBranch
} from 'lucide-react'

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

const Features = () => {
  const features: FeatureItem[] = [
    {
      icon: Code,
      title: 'AI Requirement Analysis',
      description:
        'Refine features with AI-driven goals, dependencies, constraints, and edge cases.'
    },
    {
      icon: GitBranch,
      title: 'Real-time GitHub Sync',
      description:
        'Track commits, PRs, bugs, and deployments without leaving the platform.'
    },
    {
      icon: Shield,
      title: 'PRD & Gherkin Generator',
      description:
        'Automatically generate detailed product documents and test scenarios.'
    },
    {
      icon: Users,
      title: 'Team Productivity Suite',
      description:
        'Manage projects, track issues, and collaborate with a Notion-style interface.'
    }
  ]

  const CardIcon = ({ Icon }: { Icon: React.ElementType }) => (
    <div className="w-7 h-7 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center">
      <Icon className="w-3 h-3" />
    </div>
  )

  return (
    <section id="features" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-3">Everything you need, supercharged by AI</h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">A unified platform to manage the entire product lifecycle.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map(({ title, description, icon: Icon }) => (
              <div key={title} className="group rounded-xl border border-neutral-200 overflow-hidden">
                <div className="bg-white p-4 transition-transform duration-300 ease-out group-hover:scale-[1.03] will-change-transform">
                  <CardIcon Icon={Icon} />
                  <h3 className="mt-3 text-sm sm:text-base font-semibold text-neutral-900">{title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-6">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Features
