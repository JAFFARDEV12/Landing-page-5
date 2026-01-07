import React from 'react'

const Features = () => {
  const features = [
    {
      title: 'Smart Payment Routing',
      description: 'Automatically route payments through the most reliable channels'
    },
    {
      title: 'Real-Time Monitoring',
      description: 'Monitor all transactions in real-time with comprehensive dashboards'
    },
    {
      title: 'Fraud Prevention',
      description: 'AI-powered fraud detection that learns and adapts continuously'
    },
    {
      title: 'Multi-Currency',
      description: 'Accept and process payments in 150+ currencies seamlessly'
    },
    {
      title: 'Recurring Billing',
      description: 'Handle subscriptions and recurring payments effortlessly'
    },
    {
      title: 'White-Label Solutions',
      description: 'Fully customizable payment experiences for your brand'
    }
  ]

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-light">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gamma-dark mb-4">Comprehensive Features</h2>
          <p className="text-xl text-slate-600 font-normal">
            Everything you need to manage payments effectively
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-gamma-dark mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed font-normal">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

