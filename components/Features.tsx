'use client'

import { useState } from 'react'
import { 
  Code, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  GitBranch, 
  Cloud, 
  Lock,
  ArrowRight,
  CheckCircle,
  LucideIcon
} from 'lucide-react'

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  details: {
    title: string;
    items: string[];
  };
}

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0)

  const features: Feature[] = [
    {
      icon: Code,
      title: 'AI-Powered Code Generation',
      color: 'blue',
      description: 'Generate production-ready code with intelligent suggestions and auto-completion powered by advanced AI models.',
      details: {
        title: 'Smart Development Tools',
        items: [
          'Smart code suggestions',
          'Auto-completion',
          'Bug detection',
          'Performance optimization'
        ]
      }
    },
    {
      icon: Zap,
      title: 'Lightning Fast Deployment',
      color: 'green',
      description: 'Deploy your applications in seconds with our optimized infrastructure and intelligent scaling.',
      details: {
        title: 'Deployment Features',
        items: [
          'Instant deployment',
          'Auto-scaling',
          'Global CDN',
          'Zero downtime'
        ]
      }
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      color: 'red',
      description: 'Bank-level security with SOC 2 compliance, encryption at rest, and advanced threat protection.',
      details: {
        title: 'Security Features',
        items: [
          'SOC 2 Type II',
          'End-to-end encryption',
          'Advanced threat protection',
          'Compliance ready'
        ]
      }
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      color: 'purple',
      description: 'Real-time collaboration tools that keep your team in sync across all devices and time zones.',
      details: {
        title: 'Collaboration Features',
        items: [
          'Real-time editing',
          'Team workspaces',
          'Version control',
          'Code reviews'
        ]
      }
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      color: 'yellow',
      description: 'Comprehensive insights into your development process with detailed metrics and performance tracking.',
      details: {
        title: 'Analytics Features',
        items: [
          'Performance metrics',
          'Usage analytics',
          'Cost optimization',
          'Custom dashboards'
        ]
      }
    },
    {
      icon: GitBranch,
      title: 'Git Integration',
      color: 'indigo',
      description: 'Seamless integration with Git workflows, branching strategies, and automated deployment pipelines.',
      details: {
        title: 'Git Features',
        items: [
          'Git workflow automation',
          'Branch protection',
          'Auto-deployment',
          'Conflict resolution'
        ]
      }
    }
  ]

  const getColorClasses = (color: string, type: 'bg' | 'text' | 'border' = 'bg') => {
    const colors: Record<string, Record<string, string>> = {
      blue: {
        bg: 'bg-neutral-100',
        text: 'text-neutral-800',
        border: 'border-neutral-200'
      },
      green: {
        bg: 'bg-neutral-100',
        text: 'text-neutral-800',
        border: 'border-neutral-200'
      },
      red: {
        bg: 'bg-accent-100',
        text: 'text-accent-500',
        border: 'border-accent-200'
      },
      purple: {
        bg: 'bg-neutral-50',
        text: 'text-neutral-800',
        border: 'border-neutral-100'
      },
      yellow: {
        bg: 'bg-accent-50',
        text: 'text-accent-600',
        border: 'border-accent-100'
      },
      indigo: {
        bg: 'bg-neutral-50',
        text: 'text-neutral-800',
        border: 'border-neutral-100'
      },
      primary: {
        bg: 'bg-neutral-100',
        text: 'text-neutral-800',
        border: 'border-neutral-200'
      },
      accent: {
        bg: 'bg-accent-100',
        text: 'text-accent-500',
        border: 'border-accent-200'
      }
    };

    return colors[color]?.[type] || colors.blue[type];
  }

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Everything you need to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-accent-500">
              build amazing apps
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Powerful features designed to accelerate your development workflow and 
            help you ship better software faster.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 relative z-10">
            <div className={`inline-flex items-center space-x-2 ${getColorClasses(features[activeFeature].color, 'bg')} rounded-full px-4 py-2 mb-6`}>
              {(() => {
                const IconComponent = features[activeFeature].icon;
                return <IconComponent className={`w-5 h-5 ${getColorClasses(features[activeFeature].color, 'text')}`} />;
              })()}
              <span className={`text-sm font-medium ${getColorClasses(features[activeFeature].color, 'text')}`}>
                {features[activeFeature].title}
              </span>
            </div>
            <h3 className="text-3xl font-bold text-neutral-900 mb-4">
              {features[activeFeature].details.title}
            </h3>
            <p className="text-lg text-neutral-600 mb-8">
              {features[activeFeature].description}
            </p>
            <ul className="space-y-3 mb-8">
              {features[activeFeature].details.items.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary-300" />
                  <span className="text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
            <button className="inline-flex items-center text-accent-500 font-medium hover:text-accent-800 transition-colors">
              Learn more <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveFeature(index)}
                        className={`p-4 rounded-xl transition-all ${
                          activeFeature === index
                            ? `${getColorClasses(feature.color, 'bg')} shadow-lg transform -translate-y-1`
                            : 'bg-white hover:bg-neutral-50'
                        }`}
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className={`p-3 rounded-full ${getColorClasses(feature.color, 'bg')} mb-3`}>
                            <IconComponent className={`w-5 h-5 ${getColorClasses(feature.color, 'text')}`} />
                          </div>
                          <h4 className="text-sm font-medium text-neutral-900">
                            {feature.title}
                          </h4>
                        </div>
                      </button>
                    );
                  })}
                </div>
      </div>
    </section>
  )
}

export default Features
