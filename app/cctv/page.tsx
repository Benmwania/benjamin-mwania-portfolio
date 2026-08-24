import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function CCTV() {
  const packages = [
    {
      id: 1,
      name: 'Basic',
      price: 'KES 35,000',
      icon: '🏠',
      features: [
        '4 HD cameras (indoor/outdoor)',
        '4-channel DVR with 1TB storage',
        'Full installation & cabling',
        'Basic remote viewing setup',
        '1-month warranty'
      ],
      recommended: false
    },
    {
      id: 2,
      name: 'Standard',
      price: 'KES 65,000',
      icon: '🏢',
      features: [
        '8 HD cameras (night vision)',
        '8-channel NVR with 2TB storage',
        'Full installation & cabling',
        'Remote access via mobile app',
        'Motion detection alerts',
        '3-month warranty'
      ],
      recommended: true
    },
    {
      id: 3,
      name: 'Premium',
      price: 'KES 120,000',
      icon: '🏭',
      features: [
        '16 HD cameras (night vision + AI)',
        '16-channel NVR with 4TB storage',
        'Full installation & cabling',
        'AI-powered motion detection',
        'Remote access + cloud backup',
        '1-year maintenance & support'
      ],
      recommended: false
    }
  ]

  const services = [
    {
      title: 'System Design & Consultation',
      description: 'On-site assessment to identify blind spots and design optimal camera placement.',
      icon: '📐'
    },
    {
      title: 'Camera Installation',
      description: 'Professional installation of indoor, outdoor, dome, and bullet cameras with proper cabling.',
      icon: '🔧'
    },
    {
      title: 'Remote Monitoring Setup',
      description: 'Configure remote access so you can view your cameras from anywhere via mobile or web.',
      icon: '📱'
    },
    {
      title: 'Network Configuration',
      description: 'IP camera setup, network optimization, and secure configuration for surveillance systems.',
      icon: '🌐'
    },
    {
      title: 'Security Audit',
      description: 'Comprehensive review of existing security infrastructure and recommendations for improvements.',
      icon: '🔍'
    },
    {
      title: 'Maintenance & Repairs',
      description: 'Ongoing system maintenance, repairs, and upgrades to keep your surveillance running smoothly.',
      icon: '🛠️'
    }
  ]

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Professional <span className="text-cyber-green glow-text">CCTV Installation</span>
          </h1>
          <p className="text-cyber-gray text-lg max-w-2xl mx-auto">
            Protect your property with expert surveillance solutions — from design to installation and maintenance.
          </p>
          <p className="text-cyber-green text-sm font-mono mt-2">
            🔒 Serving Nairobi & surrounding areas
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">
            What I <span className="text-cyber-green">Offer</span>
          </h2>
          <p className="text-cyber-gray text-center mb-12 max-w-2xl mx-auto">
            End-to-end CCTV services tailored to your security needs
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-cyber-card p-6 rounded-lg border border-cyber-border hover:border-cyber-green transition-all duration-300 glow-border"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-cyber-gray text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-cyber-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">
            Pricing <span className="text-cyber-green">Packages</span>
          </h2>
          <p className="text-cyber-gray text-center mb-12 max-w-2xl mx-auto">
            Flexible options for homes, offices, and commercial properties
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-cyber-dark p-6 rounded-lg border transition-all duration-300 ${
                  pkg.recommended
                    ? 'border-cyber-green shadow-[0_0_30px_rgba(0,255,136,0.15)]'
                    : 'border-cyber-border hover:border-cyber-green'
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-cyber-green text-cyber-dark text-xs font-bold px-4 py-1 rounded-full">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">{pkg.icon}</div>
                  <h3 className="text-xl font-bold">{pkg.name}</h3>
                  <p className="text-2xl font-bold text-cyber-green mt-2">{pkg.price}</p>
                </div>

                <ul className="space-y-3 text-sm">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-cyber-gray">
                      <span className="text-cyber-green mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-6 w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 block ${
                    pkg.recommended
                      ? 'bg-cyber-green text-cyber-dark hover:shadow-[0_0_30px_rgba(0,255,136,0.3)]'
                      : 'border border-cyber-green text-cyber-green hover:bg-cyber-green/10'
                  }`}
                >
                  Get This Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">
            Why Choose <span className="text-cyber-green">Me?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="font-semibold mb-2">Cybersecurity Background</h3>
              <p className="text-cyber-gray text-sm">
                I don't just install cameras — I secure your entire network ecosystem.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-semibold mb-2">Fast & Reliable</h3>
              <p className="text-cyber-gray text-sm">
                Quick installation with minimal disruption and lifetime support.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="font-semibold mb-2">Quality Equipment</h3>
              <p className="text-cyber-gray text-sm">
                I use high-quality cameras and DVR/NVR systems that last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 text-center bg-cyber-card/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Secure Your <span className="text-cyber-green">Property</span>?
          </h2>
          <p className="text-cyber-gray mb-8">
            Get a free consultation and quote today. I'll design a surveillance system that fits your budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-cyber-green text-cyber-dark font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] transition-all duration-300"
            >
              Book a Consultation
            </Link>
            <a
              href="tel:+254791182260"
              className="px-8 py-3 border border-cyber-gray text-cyber-gray rounded-lg hover:border-cyber-green hover:text-cyber-green transition-all duration-300"
            >
              📞 Call: +254 791 182 260
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}