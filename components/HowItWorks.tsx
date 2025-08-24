'use client'

import React, { useState } from 'react'
import { 
  Code, 
  GitBranch, 
  Cloud, 
  CheckCircle, 
  ArrowRight,
  Play,
  Zap,
  Users,
  LucideIcon
} from 'lucide-react'

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  color: 'primary' | 'accent';
  duration: string;
}

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0)

  const steps: Step[] = [
    {
      icon: Code,
      title: 'Write Code',
      description: 'Start building with AI-powered code suggestions and intelligent autocomplete.',
      details: [
        'AI code generation',
        'Smart autocomplete',
        'Real-time suggestions',
        'Error detection'
      ],
      color: 'primary',
      duration: '2-5 minutes'
    },
    {
      icon: GitBranch,
      title: 'Commit & Push',
      description: 'Seamlessly integrate with Git workflows and automated version control.',
      details: [
        'Git integration',
        'Branch management',
        'Conflict resolution',
        'Auto-commit'
      ],
      color: 'accent',
      duration: '30 seconds'
    },
    {
      icon: Cloud,
      title: 'Auto-Deploy',
      description: 'Watch your app deploy automatically with zero configuration required.',
      details: [
        'Instant deployment',
        'Auto-scaling',
        'Global CDN',
        'SSL certificates'
      ],
      color: 'primary',
      duration: '10-30 seconds'
    },
    {
      icon: CheckCircle,
      title: 'Monitor & Scale',
      description: 'Track performance, monitor usage, and scale automatically as needed.',
      details: [
        'Real-time monitoring',
        'Performance metrics',
        'Auto-scaling',
        'Cost optimization'
      ],
      color: 'accent',
      duration: 'Continuous'
    }
  ]

  const getColorClasses = (color: string, type: 'bg' | 'text' | 'border') => {
    if (color === 'primary') {
      return type === 'bg' ? 'bg-primary-50' : type === 'text' ? 'text-primary-600' : 'border-primary-200'
    }
    return type === 'bg' ? 'bg-accent-50' : type === 'text' ? 'text-accent-600' : 'border-accent-200'
  }

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get from idea to production in{' '}
            <span className="gradient-text">minutes, not days</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined workflow makes it incredibly simple to build, deploy, and scale your applications.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative cursor-pointer transition-all duration-300 ${
                activeStep === index ? 'scale-105' : 'hover:scale-105'
              }`}
              onClick={() => setActiveStep(index)}
            >
              {/* Step Number */}
              <div className={`absolute -top-4 -left-4 w-8 h-8 ${getColorClasses(step.color, 'bg')} rounded-full flex items-center justify-center text-sm font-bold ${getColorClasses(step.color, 'text')}`}>
                {index + 1}
              </div>

              {/* Step Card */}
              <div className={`card p-6 h-full ${
                activeStep === index ? 'ring-2 ring-primary-500 shadow-lg' : ''
              }`}>
                <div className={`w-16 h-16 ${getColorClasses(step.color, 'bg')} rounded-2xl flex items-center justify-center mb-4`}>
                  <step.icon className={`w-8 h-8 ${getColorClasses(step.color, 'text')}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {step.description}
                </p>
                <div className="text-sm font-medium text-primary-600 mb-4">
                  ⚡ {step.duration}
                </div>
                <div className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className={`w-8 h-8 ${getColorClasses(step.color, 'bg')} rounded-full flex items-center justify-center`}>
                    <ArrowRight className={`w-4 h-4 ${getColorClasses(step.color, 'text')}`} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Step Details */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex items-center space-x-2 ${getColorClasses(steps[activeStep].color, 'bg')} rounded-full px-4 py-2 mb-6`}>
                {React.createElement(steps[activeStep].icon, {
                  className: `w-5 h-5 ${getColorClasses(steps[activeStep].color, 'text')}`
                })}
                <span className={`text-sm font-medium ${getColorClasses(steps[activeStep].color, 'text')}`}>
                  Step {activeStep + 1}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {steps[activeStep].title}
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                {steps[activeStep].description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {steps[activeStep].details.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 ${getColorClasses(steps[activeStep].color, 'bg')} rounded-full`}></div>
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <button className="btn-primary group">
                  Try It Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="btn-secondary group">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className={`w-full h-80 ${getColorClasses(steps[activeStep].color, 'bg')} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                {React.createElement(steps[activeStep].icon, {
                  className: `w-24 h-24 ${getColorClasses(steps[activeStep].color, 'text')} opacity-20`
                })}
                
                {/* Animated elements based on step */}
                {activeStep === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-2 border-primary-300 rounded-lg animate-pulse"></div>
                    <div className="absolute w-24 h-24 border-2 border-primary-400 rounded-lg animate-pulse animation-delay-500"></div>
                  </div>
                )}
                
                {activeStep === 1 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-accent-200 rounded-full animate-bounce"></div>
                    <div className="absolute w-16 h-16 bg-accent-300 rounded-full animate-bounce animation-delay-300"></div>
                  </div>
                )}
                
                {activeStep === 2 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-28 h-28 bg-primary-200 rounded-xl animate-pulse"></div>
                    <div className="absolute w-20 h-20 bg-primary-300 rounded-xl animate-pulse animation-delay-700"></div>
                  </div>
                )}
                
                {activeStep === 3 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-accent-200 rounded-2xl animate-pulse"></div>
                    <div className="absolute w-24 h-24 bg-accent-300 rounded-2xl animate-pulse animation-delay-500"></div>
                  </div>
                )}
              </div>
              
              {/* Floating stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">{steps[activeStep].duration}</div>
                  <div className="text-xs text-gray-500">Time to complete</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Flow */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            The complete development cycle
          </h3>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center space-y-4">
                  <div className={`w-16 h-16 ${getColorClasses(step.color, 'bg')} rounded-2xl flex items-center justify-center`}>
                    <step.icon className={`w-8 h-8 ${getColorClasses(step.color, 'text')}`} />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">{step.title}</div>
                    <div className="text-sm text-gray-600">{step.duration}</div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block w-16 h-0.5 bg-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
