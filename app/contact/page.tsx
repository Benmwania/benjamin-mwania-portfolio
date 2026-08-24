import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Contact() {
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

            <form
              netlify
              name="contact"
              method="POST"
              action="/success"
              className="space-y-5"
            >
              {/* Netlify form fields */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="redirect" value="/success" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

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
                className="w-full bg-cyber-green text-cyber-dark font-semibold py-3 rounded-lg hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] transition-all duration-300"
              >
                Send Message 🚀
              </button>
            </form>
          </div>

          {/* Right - Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Contact <span className="text-cyber-green">Information</span>
            </h2>
            <p className="text-cyber-gray mb-8">
              Prefer to reach out directly? Here's how you can get in touch.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Name */}
              <div className="bg-cyber-card p-4 rounded-lg border border-cyber-border">
                <div className="flex items-center gap-4">
                  <div className="text-2xl">👤</div>
                  <div>
                    <p className="text-sm text-cyber-gray">Name</p>
                    <p className="font-semibold">Benjamin Mwania Mwendwa</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-cyber-card p-4 rounded-lg border border-cyber-border hover:border-cyber-green transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <p className="text-sm text-cyber-gray">Phone</p>
                    <a
                      href="tel:+254791182260"
                      className="font-semibold hover:text-cyber-green transition-colors"
                    >
                      +254 791 182 260
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-cyber-card p-4 rounded-lg border border-cyber-border hover:border-cyber-green transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="text-2xl">✉️</div>
                  <div>
                    <p className="text-sm text-cyber-gray">Email</p>
                    <a
                      href="mailto:mwaniabenjamin210@gmail.com"
                      className="font-semibold hover:text-cyber-green transition-colors break-all"
                    >
                      mwaniabenjamin210@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* GitHub */}
              <div className="bg-cyber-card p-4 rounded-lg border border-cyber-border hover:border-cyber-green transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="text-2xl">🐙</div>
                  <div>
                    <p className="text-sm text-cyber-gray">GitHub</p>
                    <a
                      href="https://github.com/Benmwania"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:text-cyber-green transition-colors"
                    >
                      github.com/Benmwania
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
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

            {/* Quick Links */}
            <div className="mt-8">
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="text-sm bg-cyber-card px-4 py-2 rounded-lg border border-cyber-border hover:border-cyber-green transition-colors"
                >
                  View Projects
                </Link>
                <Link
                  href="/cctv"
                  className="text-sm bg-cyber-card px-4 py-2 rounded-lg border border-cyber-border hover:border-cyber-green transition-colors"
                >
                  CCTV Services
                </Link>
                <a
                  href="/Benjamin_Mwania_Resume.pdf"
                  className="text-sm bg-cyber-card px-4 py-2 rounded-lg border border-cyber-border hover:border-cyber-green transition-colors"
                >
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
            <a
              href="tel:+254791182260"
              className="px-6 py-2 bg-cyber-green text-cyber-dark font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] transition-all duration-300"
            >
              📞 Call Now
            </a>
            <a
              href="mailto:mwaniabenjamin210@gmail.com"
              className="px-6 py-2 border border-cyber-gray text-cyber-gray rounded-lg hover:border-cyber-green hover:text-cyber-green transition-all duration-300"
            >
              ✉️ Email Me
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}