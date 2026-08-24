import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <p className="text-cyber-green font-mono text-sm mb-4">👋 Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Benjamin <span className="text-cyber-green glow-text">Mwania</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-cyber-gray mb-6">
              Cybersecurity &amp; Surveillance Specialist
            </h2>
            <p className="text-cyber-gray text-lg mb-8 max-w-lg">
              Protecting digital assets and physical spaces with AI-driven threat detection,
              forensic analysis, and professional CCTV installation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="px-8 py-3 bg-cyber-green text-cyber-dark font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] transition-all duration-300"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border border-cyber-green text-cyber-green rounded-lg hover:bg-cyber-green/10 transition-all duration-300"
              >
                Hire Me
              </Link>
            </div>
          </div>

          {/* Right - Stats / Badges */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-cyber-card p-6 rounded-lg border border-cyber-border glow-border">
              <p className="text-3xl font-bold text-cyber-green">4+</p>
              <p className="text-cyber-gray text-sm">Security Projects</p>
            </div>
            <div className="bg-cyber-card p-6 rounded-lg border border-cyber-border glow-border">
              <p className="text-3xl font-bold text-cyber-green">2+</p>
              <p className="text-cyber-gray text-sm">Years Experience</p>
            </div>
            <div className="bg-cyber-card p-6 rounded-lg border border-cyber-border glow-border">
              <p className="text-3xl font-bold text-cyber-green">AI</p>
              <p className="text-cyber-gray text-sm">Threat Detection</p>
            </div>
            <div className="bg-cyber-card p-6 rounded-lg border border-cyber-border glow-border">
              <p className="text-3xl font-bold text-cyber-green">CCTV</p>
              <p className="text-cyber-gray text-sm">Installation Pro</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cyber-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            What I <span className="text-cyber-green">Offer</span>
          </h2>
          <p className="text-cyber-gray text-center mb-12 max-w-2xl mx-auto">
            From catching hackers to installing cameras — I secure your entire world.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-cyber-dark p-6 rounded-lg border border-cyber-border hover:border-cyber-green transition-all duration-300">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold mb-2">Cyber Security</h3>
              <p className="text-cyber-gray text-sm">Threat detection, incident response, vulnerability assessment</p>
            </div>
            <div className="bg-cyber-dark p-6 rounded-lg border border-cyber-border hover:border-cyber-green transition-all duration-300">
              <div className="text-4xl mb-4">📹</div>
              <h3 className="text-xl font-semibold mb-2">CCTV Installation</h3>
              <p className="text-cyber-gray text-sm">Professional surveillance setup, remote monitoring, IP cameras</p>
            </div>
            <div className="bg-cyber-dark p-6 rounded-lg border border-cyber-border hover:border-cyber-green transition-all duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">AI Security</h3>
              <p className="text-cyber-gray text-sm">AI-powered anomaly detection, fraud detection, behavioral profiling</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to secure your <span className="text-cyber-green">digital &amp; physical</span> world?</h2>
          <p className="text-cyber-gray mb-8">Let's talk. I'm just a message away.</p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-cyber-green text-cyber-dark font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}