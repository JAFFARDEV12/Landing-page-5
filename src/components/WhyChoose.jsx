import React from 'react'

const WhyChoose = () => {
  const reasons = [
    {
      title: 'Industry Leading Speed',
      description: 'Process transactions in milliseconds with our optimized infrastructure'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and compliance with all major security standards'
    },
    {
      title: 'Global Scale',
      description: 'Built to handle millions of transactions across 190+ countries'
    },
    {
      title: 'Developer First',
      description: 'Comprehensive APIs and documentation designed for developers'
    }
  ]

  return (
    <section id="why" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gamma-dark mb-4">Why Choose Paiment?</h2>
          <p className="text-xl text-slate-600 font-normal">
            The payment platform trusted by leading businesses worldwide
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-light to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-medium"
            >
              <h3 className="text-2xl font-bold text-gamma-dark mb-3">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed font-normal">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose

