'use client'

import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')

    const formData = new FormData(event.currentTarget)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setStatus('success')
        event.currentTarget.reset()
        window.location.href = '/success'
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="text-cyber-green glow-text">Touch</span>
          </h1>
          <p className="text-cyber-gray text-lg max-w-2xl mx-auto">
            Have a project in mind? Need security solutions or IT support? Let's talk.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left - Contact Form */}
          <div className="bg-cyber-card p-8 rounded-lg border border-cyber-border">
            <h2 className="text-2xl font-bold mb-6">
              Send Me a <span className="text-cyber-green">Message</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-cyber-gray mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-cyber-dark border border-cyber-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-green transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cyber-gray mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-cyber-dark border border-cyber-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-green transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-cyber-gray mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full bg-cyber-dark border border-cyber-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-green transition-colors"
                  placeholder="+254 7XX XXX XXX"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-cyber-gray mb-1">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-cyber-dark border border-cyber-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-green transition-colors"
                >
                  <option value="">Select a service...</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="cctv">CCTV Installation</option>
                  <option value="it-support">ICT Technical Support</option>
                  <option value="freelance">Freelance/Contract Work</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cyber-gray mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-cyber-dark border border-cyber-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-green transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold py-3 rounded-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-cyber-gray text-cyber-dark cursor-not-allowed'
                    : 'bg-cyber-green text-cyber-dark hover:shadow-[0_0_30px_rgba(0,255,136,0.3)]'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message 🚀'}
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg text-sm">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm">
                  ❌ Failed to send message. Please try again or contact me directly via email.
                </div>
              )}
            </form>
          </div>

          {/* Right - Contact Info - Same as before */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Contact <span className="text-cyber-green">Information</span>
            </h2>
            <p className="text-cyber-gray mb-8">
              Prefer to reach out directly? Here's how you can get in touch.
            </p>

            <div className="space-y-4">
              <div className="bg-cyber-card p-4 rounded-lg border border-cyber-border">
                <div className="flex items-center gap-4">
                  <div className="text-2xl">👤</div>
                  <div>
                    <p className="text-sm text-cyber-gray">Name</p>
                    <p className="font-semibold">Benjamin Mwania Mwendwa</p>
                  </div>
                </div>
              </div>

              <div className="bg-cyber-card p-4 rounded-lg border border-cyber-border hover:border-cyber-green transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <p className="text-sm text-cyber-gray">Phone</p>
                    <a href="tel:+254791182260" className="font-semibold hover:text-cyber-green transition-colors">
                      +254 791 182 260
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-cyber-card p-4 rounded-lg border border-cyber-border hover:border-cyber-green transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="text-2xl">✉️</div>
                  <div>
                    <p className="text-sm text-cyber-gray">Email</p>
                    <a href="mailto:mwaniabenjamin210@gmail.com" className="font-semibold hover:text-cyber-green transition-colors break-all">
                      mwaniabenjamin210@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-cyber-card p-4 rounded-lg border border-cyber-border hover:border-cyber-green transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="text-2xl">🐙</div>
                  <div>
                    <p className="text-sm text-cyber-gray">GitHub</p>
                    <a href="https://github.com/Benmwania" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-cyber-green transition-colors">
                      github.com/Benmwania
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-cyber-card p-4 rounded-lg border border-cyber-border">
                <div className="flex items-center gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <p className="text-sm text-cyber-gray">Location</p>
                    <p className="font-semibold">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/projects" className="text-sm bg-cyber-card px-4 py-2 rounded-lg border border-cyber-border hover:border-cyber-green transition-colors">
                  View Projects
                </Link>
                <Link href="/cctv" className="text-sm bg-cyber-card px-4 py-2 rounded-lg border border-cyber-border hover:border-cyber-green transition-colors">
                  CCTV Services
                </Link>
                <a href="/Benjamin_Mwania_Resume.pdf" className="text-sm bg-cyber-card px-4 py-2 rounded-lg border border-cyber-border hover:border-cyber-green transition-colors">
                  📄 Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 text-center bg-cyber-card/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            Let's Build Something <span className="text-cyber-green">Secure</span> Together
          </h2>
          <p className="text-cyber-gray mb-6">
            Whether it's cybersecurity, CCTV installation, or IT support — I'm here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+254791182260" className="px-6 py-2 bg-cyber-green text-cyber-dark font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] transition-all duration-300">
              📞 Call Now
            </a>
            <a href="mailto:mwaniabenjamin210@gmail.com" className="px-6 py-2 border border-cyber-gray text-cyber-gray rounded-lg hover:border-cyber-green hover:text-cyber-green transition-all duration-300">
              ✉️ Email Me
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}