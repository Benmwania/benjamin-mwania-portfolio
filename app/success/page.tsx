import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Success() {
  return (
    <main>
      <Navbar />
      <section className="min-h-screen flex items-center justify-center px-4 pt-24">
        <div className="text-center max-w-2xl">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-4xl font-bold mb-4">
            Message <span className="text-cyber-green">Sent!</span>
          </h1>
          <p className="text-cyber-gray text-lg mb-4">
            Thanks for reaching out, Benjamin! I'll get back to you within 24 hours.
          </p>
          <p className="text-cyber-gray text-sm mb-8">
            📧 You'll receive a confirmation email shortly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 bg-cyber-green text-cyber-dark font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}