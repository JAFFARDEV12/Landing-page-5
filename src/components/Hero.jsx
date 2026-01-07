import React from 'react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-gradient-to-br from-gamma-blue via-gamma-dust to-aqua-marine">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Next-Generation
            <span className="block text-aqua-marine">Payment Platform</span>
          </h1>
          <p className="text-xl text-white/90 mb-12 leading-relaxed font-normal">
            Built for the future of commerce. Experience unparalleled speed, security, 
            and reliability with Paiment's cutting-edge payment infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-white text-gamma-blue border-none px-10 py-5 rounded-xl font-bold text-lg cursor-pointer transition-all duration-300 hover:bg-gray-light hover:scale-105 hover:shadow-2xl font-roboto">
              Start Free Trial
            </button>
            <button className="bg-transparent text-white border-2 border-white px-10 py-5 rounded-xl font-bold text-lg cursor-pointer transition-all duration-300 hover:bg-white hover:text-gamma-blue hover:scale-105 font-roboto">
              Explore Features
            </button>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-sm text-white/80 font-normal">Uptime</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30">
              <div className="text-3xl font-bold text-white mb-2">10M+</div>
              <div className="text-sm text-white/80 font-normal">Transactions</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-sm text-white/80 font-normal">Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

