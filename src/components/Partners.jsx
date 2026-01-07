import React from 'react'

const Partners = () => {
  const partnerLogos = [
    'aws.png',
    'logo-paysafe.svg',
    'Worldpay_logo_c_rgb.svg',
    'Finix.png',
    'geocomply.png',
    'sumsub.png',
    'pragmatic play.png',
    'optimove.png',
    'customerio.svg',
    'intercom.jpg',
    'chargebacks911.svg',
    'seon-full-1.svg'
  ]

  return (
    <section id="partners" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gamma-dark mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-slate-600 font-normal">
            Join hundreds of companies revolutionizing their payment infrastructure
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {partnerLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 bg-gray-light rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <img 
                src={`/Partners/${logo}`}
                alt={`Partner ${index + 1}`}
                className="max-w-full max-h-12 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners

