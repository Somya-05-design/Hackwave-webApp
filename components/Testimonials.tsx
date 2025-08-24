'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO at TechFlow',
      company: 'TechFlow Inc.',
      avatar: '/api/placeholder/64/64',
      rating: 5,
      content: 'Zeda has completely transformed our development workflow. We went from 2-week deployment cycles to deploying multiple times per day. The AI-powered suggestions are incredibly accurate and save us hours of development time.',
      logo: 'TechFlow'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Lead Developer',
      company: 'InnovateCorp',
      avatar: '/api/placeholder/64/64',
      rating: 5,
      content: 'The auto-scaling and monitoring features are game-changers. We can now focus on building features instead of managing infrastructure. The team collaboration tools are also top-notch.',
      logo: 'InnovateCorp'
    },
    {
      name: 'Emily Watson',
      role: 'Engineering Manager',
      company: 'StartupXYZ',
      avatar: '/api/placeholder/64/64',
      rating: 5,
      content: 'As a fast-growing startup, we needed a platform that could scale with us. Zeda not only handles our current needs but anticipates our future requirements. The customer support is exceptional.',
      logo: 'StartupXYZ'
    },
    {
      name: 'David Kim',
      role: 'DevOps Engineer',
      company: 'Enterprise Solutions',
      avatar: '/api/placeholder/64/64',
      rating: 5,
      content: 'The security features and compliance certifications give us confidence to deploy enterprise applications. The Git integration is seamless and the deployment pipeline is incredibly reliable.',
      logo: 'Enterprise'
    },
    {
      name: 'Lisa Thompson',
      role: 'Product Manager',
      company: 'Digital Dynamics',
      avatar: '/api/placeholder/64/64',
      rating: 5,
      content: 'Zeda\'s analytics dashboard provides insights we never had before. We can now make data-driven decisions about our development process and optimize our team\'s productivity effectively.',
      logo: 'Digital'
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Loved by{' '}
            <span className="gradient-text">thousands of developers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers have to say about their experience with Zeda.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          {/* Main Testimonial */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100">
            <div className="text-center">
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Quote className="w-8 h-8 text-primary-600" />
              </div>

              {/* Rating */}
              <div className="flex justify-center items-center space-x-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 transition-colors duration-200 hover:shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 transition-colors duration-200 hover:shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center space-x-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-primary-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">50k+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="mt-16 text-center overflow-hidden">
          <p className="text-sm text-gray-500 mb-8">Trusted by leading companies worldwide</p>
          <div className="relative w-full overflow-hidden">
            <div className="flex items-center py-4 animate-logo-scroll">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex-shrink-0 flex space-x-12 px-4">
                  {['Microsoft', 'Google', 'Amazon', 'Meta', 'Netflix', 'Spotify', 'Uber', 'Airbnb'].map((company, index) => (
                    <div key={`${i}-${index}`} className="text-gray-400 font-semibold text-lg whitespace-nowrap">
                      {company}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <style jsx global>{`
            @keyframes logoScroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-100% / 3));
              }
            }
            .animate-logo-scroll {
              animation: logoScroll 30s linear infinite;
              width: 300%;
            }
            .animate-logo-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to join thousands of happy developers?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Start building with Zeda today and experience the future of development.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn-primary">
                Start Building Free
              </button>
              <button className="btn-secondary">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
