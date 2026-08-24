import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'AI-Based Insider Threat Detection',
      category: 'Cybersecurity',
      icon: '🛡️',
      description: 'Real-time monitoring system detecting anomalous user behavior using Flask, MongoDB, and machine learning.',
      tech: ['Python', 'Flask', 'MongoDB', 'Machine Learning'],
      features: ['System logging', 'USB monitoring', 'Network traffic analysis', 'Live dashboard']
    },
    {
      id: 2,
      title: 'Cyber Criminal Profiling System',
      category: 'Cybersecurity',
      icon: '🔍',
      description: 'Web-based system analyzing cybercriminal behavior patterns using clustering techniques.',
      tech: ['Python', 'Machine Learning', 'Clustering'],
      features: ['Behavioral analysis', 'Pattern recognition', 'Role-based access control']
    },
    {
      id: 3,
      title: 'Fraud Detection System',
      category: 'Cybersecurity',
      icon: '💳',
      description: 'Anomaly detection model identifying suspicious financial transactions with high accuracy.',
      tech: ['Python', 'Anomaly Detection', 'Data Analysis'],
      features: ['Transaction monitoring', 'Pattern detection', 'Reduced false alerts']
    },
    {
      id: 4,
      title: 'MTRACE - SIM Swap Detection System',
      category: 'Cybersecurity',
      icon: '📱',
      description: 'System designed to detect and flag potential SIM swap fraud activities in telecom networks.',
      tech: ['Python', 'Telecom Analytics', 'Anomaly Detection'],
      features: ['SIM change monitoring', 'Behavioral anomaly detection', 'Fraud alert system']
    },
    {
      id: 5,
      title: 'ICT Technical Support & Systems Maintenance',
      category: 'IT Support',
      icon: '💻',
      description: 'Comprehensive IT support services including hardware/software diagnostics, network configuration, and system reliability improvement.',
      tech: ['TCP/IP', 'Windows', 'Linux', 'Networking'],
      features: [
        'Hardware & software diagnostics',
        'Network troubleshooting (TCP/IP)',
        'OS installation & configuration',
        'Enterprise application support'
      ]
    }
  ]

  return (
    <main>
      <Navbar />

      <section className="min-h-screen px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              My <span className="text-cyber-green glow-text">Projects</span>
            </h1>
            <p className="text-cyber-gray text-lg max-w-2xl mx-auto">
              Cybersecurity solutions, forensic tools, and ICT support systems I've built and deployed.
            </p>
          </div>

          {/* Filter / Category Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <span className="px-4 py-2 bg-cyber-green/20 text-cyber-green rounded-full text-sm font-semibold border border-cyber-green/30">
              All Projects
            </span>
            <span className="px-4 py-2 bg-cyber-card text-cyber-gray rounded-full text-sm border border-cyber-border hover:border-cyber-green/50 transition-colors cursor-pointer">
              Cybersecurity
            </span>
            <span className="px-4 py-2 bg-cyber-card text-cyber-gray rounded-full text-sm border border-cyber-border hover:border-cyber-green/50 transition-colors cursor-pointer">
              IT Support
            </span>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-cyber-card p-6 rounded-lg border border-cyber-border hover:border-cyber-green transition-all duration-300 glow-border"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-3xl">{project.icon}</span>
                    <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                  </div>
                  <span className="text-xs bg-cyber-green/10 text-cyber-green px-3 py-1 rounded-full border border-cyber-green/20">
                    {project.category}
                  </span>
                </div>

                <p className="text-cyber-gray text-sm mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-cyber-dark px-2 py-1 rounded border border-cyber-border text-cyber-gray"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-1 text-sm text-cyber-gray">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-cyber-green">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Need a <span className="text-cyber-green">Security Solution</span> or <span className="text-cyber-green">IT Support</span>?
            </h3>
            <Link
              href="/contact"
              className="px-8 py-3 bg-cyber-green text-cyber-dark font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] transition-all duration-300 inline-block"
            >
              Let's Work Together
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}