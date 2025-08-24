'use client'

import { useState } from 'react'
import { Check, X, Star, Zap, Shield, Users, ArrowRight } from 'lucide-react'

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true)
  const [selectedPlan, setSelectedPlan] = useState('pro')

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for individual developers and small projects',
      price: { monthly: 29, annual: 290 },
      features: [
        'Up to 3 projects',
        '10GB storage',
        'Basic AI suggestions',
        'Community support',
        'Standard deployment',
        'Basic analytics'
      ],
      limitations: [
        'No team collaboration',
        'Limited integrations',
        'Basic monitoring'
      ],
      color: 'gray',
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'Ideal for growing teams and professional developers',
      price: { monthly: 99, annual: 990 },
      features: [
        'Up to 25 projects',
        '100GB storage',
        'Advanced AI suggestions',
        'Priority support',
        'Advanced deployment',
        'Full analytics dashboard',
        'Team collaboration (up to 10)',
        'Advanced integrations',
        'Custom domains',
        'SSL certificates'
      ],
      limitations: [],
      color: 'primary',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations with advanced requirements',
      price: { monthly: 299, annual: 2990 },
      features: [
        'Unlimited projects',
        'Unlimited storage',
        'Custom AI models',
        '24/7 dedicated support',
        'Enterprise deployment',
        'Advanced analytics & reporting',
        'Unlimited team members',
        'All integrations',
        'Custom branding',
        'Advanced security features',
        'SLA guarantees',
        'Custom training'
      ],
      limitations: [],
      color: 'accent',
      popular: false
    }
  ]

  const getColorClasses = (color: string, type: 'bg' | 'text' | 'border') => {
    switch (color) {
      case 'primary':
        return type === 'bg' ? 'bg-primary-50' : type === 'text' ? 'text-primary-600' : 'border-primary-200'
      case 'accent':
        return type === 'bg' ? 'bg-accent-50' : type === 'text' ? 'text-accent-600' : 'border-accent-200'
      default:
        return type === 'bg' ? 'bg-gray-50' : type === 'text' ? 'text-gray-600' : 'border-gray-200'
    }
  }

  const currentPlan = plans.find(plan => plan.id === selectedPlan)

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple,{' '}
            <span className="text-gray-900">transparent pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include our core features 
            with no hidden fees or surprises.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <span className={`text-lg ${!isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative w-16 h-8 rounded-full transition-colors duration-200 ${
              isAnnual ? 'bg-primary-600' : 'bg-gray-300'
            }`}
          >
            <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-200 ${
              isAnnual ? 'translate-x-8' : 'translate-x-1'
            }`} />
          </button>
          <span className={`text-lg ${isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
            Annual
            <span className="ml-2 text-sm text-primary-600 font-medium">
              (Save 20%)
            </span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative card p-8 h-full transition-all duration-300 ${
                selectedPlan === plan.id
                  ? `ring-2 ring-${plan.color}-500 shadow-xl scale-105`
                  : 'hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-gray-500 ml-2">
                    /{isAnnual ? 'year' : 'month'}
                  </span>
                </div>
                {isAnnual && (
                  <div className="text-sm text-primary-600 font-medium">
                    Save ${(plan.price.monthly * 12) - plan.price.annual} annually
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
                {plan.limitations.map((limitation, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-500">{limitation}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setSelectedPlan(plan.id)}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                  selectedPlan === plan.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : plan.popular
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                {selectedPlan === plan.id ? 'Current Plan' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>

        {/* Plan Comparison */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Compare Plans
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                  {plans.map((plan) => (
                    <th key={plan.id} className="text-center py-4 px-4 font-semibold text-gray-900">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  'Projects',
                  'Storage',
                  'AI Suggestions',
                  'Team Members',
                  'Support',
                  'Custom Domains',
                  'Advanced Analytics',
                  'SLA Guarantee'
                ].map((feature) => (
                  <tr key={feature} className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-700">{feature}</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="text-center py-4 px-4">
                        {feature === 'Projects' && (
                          <span className="text-gray-900 font-medium">
                            {plan.id === 'starter' ? '3' : plan.id === 'pro' ? '25' : 'Unlimited'}
                          </span>
                        )}
                        {feature === 'Storage' && (
                          <span className="text-gray-900 font-medium">
                            {plan.id === 'starter' ? '10GB' : plan.id === 'pro' ? '100GB' : 'Unlimited'}
                          </span>
                        )}
                        {feature === 'AI Suggestions' && (
                          <span className={`text-sm px-2 py-1 rounded-full ${
                            plan.id === 'starter' ? 'bg-gray-100 text-gray-600' : 'bg-primary-100 text-primary-600'
                          }`}>
                            {plan.id === 'starter' ? 'Basic' : plan.id === 'pro' ? 'Advanced' : 'Custom'}
                          </span>
                        )}
                        {feature === 'Team Members' && (
                          <span className="text-gray-900 font-medium">
                            {plan.id === 'starter' ? '1' : plan.id === 'pro' ? '10' : 'Unlimited'}
                          </span>
                        )}
                        {feature === 'Support' && (
                          <span className={`text-sm px-2 py-1 rounded-full ${
                            plan.id === 'starter' ? 'bg-gray-100 text-gray-600' : 
                            plan.id === 'pro' ? 'bg-primary-100 text-primary-600' : 'bg-accent-100 text-accent-600'
                          }`}>
                            {plan.id === 'starter' ? 'Community' : plan.id === 'pro' ? 'Priority' : '24/7 Dedicated'}
                          </span>
                        )}
                        {feature === 'Custom Domains' && (
                          <span className="text-center">
                            {plan.id === 'starter' ? (
                              <X className="w-5 h-5 text-red-500 mx-auto" />
                            ) : (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            )}
                          </span>
                        )}
                        {feature === 'Advanced Analytics' && (
                          <span className="text-center">
                            {plan.id === 'starter' ? (
                              <X className="w-5 h-5 text-red-500 mx-auto" />
                            ) : (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            )}
                          </span>
                        )}
                        {feature === 'SLA Guarantee' && (
                          <span className="text-center">
                            {plan.id === 'enterprise' ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-red-500 mx-auto" />
                            )}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'Can I change plans anytime?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
              },
              {
                question: 'Is there a free trial?',
                answer: 'Yes, we offer a 14-day free trial on all plans with full access to features.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.'
              },
              {
                question: 'Do you offer refunds?',
                answer: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied.'
              }
            ].map((faq, index) => (
              <div key={index} className="text-left">
                <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="bg-[#7B4B2E]/70 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Need a custom solution?
          </h3>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Our enterprise team can create a custom plan tailored to your specific needs 
            with dedicated support and custom features.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-200">
              Contact Sales
            </button>
            <button className="border border-white/30 text-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg transition-colors duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
