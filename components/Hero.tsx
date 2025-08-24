'use client'

import { ArrowRight, Play, Zap, Shield, Users } from 'lucide-react'
import Navigation from './Navigation'
import Link from 'next/link'

const Hero = () => {

  return (
    <section className="relative min-h-screen gradient-bg overflow-hidden">
      <Navigation />
      
             {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-neutral-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neutral-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="flex flex-col items-center text-center pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                     {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-neutral-50/80 backdrop-blur-sm border border-neutral-200 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-accent-500" />
            <span className="text-sm font-medium text-neutral-700">
              AI-Powered Development Platform
            </span>
          </div>

                     {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 max-w-4xl animate-slide-up">
            the key to unlocking Environment
          </h1>



                     {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 animate-slide-up animation-delay-400">
            <a href="/demo" className="btn-primary">
              Start Demo
            </a>
            <Link href="/demo" className="btn-secondary group flex items-center">
              <Play className="w-4 h-4 mr-1.5" />
              Watch Demo
            </Link>
          </div>

                     {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-2xl animate-slide-up animation-delay-600">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-500 mb-2">10x</div>
              <div className="text-neutral-600">Faster Development</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-500 mb-2">99.9%</div>
              <div className="text-neutral-600">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-500 mb-2">50k+</div>
              <div className="text-neutral-600">Active Developers</div>
            </div>
          </div>

          {/* Moved Cards Below Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mt-12 animate-slide-up animation-delay-800">
              <div className="card p-4 w-full">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-accent-500" />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900">Enterprise Security</div>
                    <div className="text-sm text-neutral-600">SOC 2 Type II Certified</div>
                  </div>
                </div>
              </div>

              <div className="card p-4 w-full">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent-500" />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900">Team Collaboration</div>
                    <div className="text-sm text-neutral-600">Real-time sync across devices</div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
