'use client'

import { ArrowRight, Zap, Users, Shield } from 'lucide-react'

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center text-white">
          {/* Main CTA */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Ready to transform your{' '}
              <span className="text-yellow-300">development workflow?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-primary-100 mb-8 leading-relaxed">
              Join thousands of developers who are already building faster, 
              deploying smarter, and scaling effortlessly with Zeda.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl group">
                Start Building Free
                <ArrowRight className="w-6 h-6 ml-2 inline group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105">
                Schedule Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-primary-100">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Setup in minutes</span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Deploy in seconds with our optimized infrastructure'
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'SOC 2 compliant with bank-level security'
              },
              {
                icon: Users,
                title: 'Team Ready',
                description: 'Collaborate seamlessly with your entire team'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-primary-100">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">
              Trusted by developers worldwide
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '50k+', label: 'Active Developers' },
                { number: '99.9%', label: 'Uptime' },
                { number: '98%', label: 'Satisfaction' },
                { number: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-yellow-300 mb-2">{stat.number}</div>
                  <div className="text-primary-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16">
            <p className="text-lg text-primary-100 mb-6">
              What are you waiting for? Start building the future today.
            </p>
            <button className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
