
import { useState } from 'react';
import Logo from '../../components/ui/Logo';

export default function Home() {
  const [showPilotForm, setShowPilotForm] = useState(false);

  // Simple form submit handler – can be expanded with real API call / validation
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could add validation, send data to a server, etc.
    // For now we just close the modal and log a message.
    console.log('Pilot application submitted');
    setShowPilotForm(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Logo size="md" />
            <nav className="hidden md:flex items-center gap-8">
              <a href="#solution" className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer">
                Solution
              </a>
              <a href="#pilot" className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer">
                Pilot Program
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer">
                Contact
              </a>
            </nav>
            <button
              onClick={() => setShowPilotForm(true)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
            >
              Apply for Pilot
            </button>
          </div>
        </div>
      </header>

      {/* Header/Hero Section */}
      <section
        className="relative min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 flex items-center pt-20"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20hospital%20radiology%20department%20with%20doctor%20analyzing%20medical%20scans%20on%20computer%20screen%2C%20AI%20interface%20overlay%2C%20clean%20professional%20healthcare%20environment%2C%20soft%20lighting%2C%20NHS%20hospital%20setting%2C%20medical%20technology%2C%20realistic%20medical%20workspace&width=1920&height=1080&seq=hero-radassist&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/85"></div>
        <div className="relative w-full max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                  <span style={{ fontFamily: '"Pacifico", serif' }} className="text-4xl lg:text-5xl block mb-2">
                    RadAssist AI
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed">
                  Cutting NHS radiology backlogs with safe, smart assistance
                </p>
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  Empowering NHS radiologists and GPs with intelligent report summarization, automated
                  follow-up tracking, and priority case identification.
                </p>
              </div>
              <button
                onClick={() => setShowPilotForm(true)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer inline-flex items-center gap-2"
              >
                <i className="ri-hospital-line"></i>
                Partner With Us
              </button>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                <img
                  src="https://readdy.ai/api/search-image?query=AI%20medical%20dashboard%20interface%20showing%20radiology%20report%20analysis%2C%20clean%20modern%20healthcare%20software%20interface%2C%20medical%20data%20visualization%2C%20NHS-style%20design%2C%20professional%20medical%20technology%20screen&width=600&height=400&seq=dashboard-mockup&orientation=landscape"
                  alt="RadAssist AI Dashboard"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Current Challenge</h2>
            <p className="text-xl text-gray-600">NHS radiology departments face unprecedented pressure</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-red-50 rounded-2xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-alarm-warning-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Delayed Results</h3>
              <p className="text-gray-600">
                Patients wait weeks for results, causing anxiety and delayed treatment decisions.
              </p>
            </div>
            <div className="text-center p-8 bg-orange-50 rounded-2xl">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-time-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Missed Follow-ups</h3>
              <p className="text-gray-600">
                Follow-up actions often missed due to complex reporting systems and high workloads.
              </p>
            </div>
            <div className="text-center p-8 bg-red-50 rounded-2xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-arrow-down-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Staff Overwhelmed</h3>
              <p className="text-gray-600">
                Staff overloaded with administrative tasks, costs rising, burnout increasing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section id="solution" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our AI Solution</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-emerald-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Smart Report Summarization</h3>
                    <p className="text-gray-600">
                      Converts complex radiology reports into clear, GP-friendly summaries with key findings highlighted.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-emerald-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Automated Follow-up Tracking</h3>
                    <p className="text-gray-600">
                      Tracks follow-up requirements automatically, ensuring no patient care steps are missed.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-emerald-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Priority Case Identification</h3>
                    <p className="text-gray-600">
                      Highlights urgent cases for immediate attention, improving patient safety and care prioritization.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-emerald-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Instant Impact Reports</h3>
                    <p className="text-gray-600">
                      Generates comprehensive analytics on workflow improvements and efficiency gains.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://readdy.ai/api/search-image?query=AI%20medical%20software%20interface%20showing%20radiology%20report%20summarization%2C%20automated%20follow-up%20tracking%20system%2C%20priority%20case%20highlighting%2C%20clean%20healthcare%20dashboard%20design%2C%20NHS-approved%20medical%20technology%20interface&width=600&height=500&seq=solution-demo&orientation=landscape"
                alt="RadAssist AI Solution Demo"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-20" style={{ backgroundColor: '#005EB8' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why RadAssist AI, Why Now?</h2>
            <p className="text-xl text-blue-100">The perfect moment for NHS AI transformation</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-hospital-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">NHS Priority</h3>
              <p className="text-blue-100">
                NHS backlogs are an urgent national priority requiring immediate innovative solutions.
              </p>
            </div>
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-money-pound-circle-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Government Backing</h3>
              <p className="text-blue-100">
                UK government actively funding AI initiatives in healthcare with dedicated investment programs.
              </p>
            </div>
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-flashlight-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Fast Implementation</h3>
              <p className="text-blue-100">
                Low-risk, non-diagnostic solution that can be piloted quickly with immediate benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Partnership Section */}
      <section id="pilot" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pilot Partnership Opportunity</h2>
            <p className="text-xl text-gray-600 mb-2">
              We are seeking NHS Trusts & radiology teams for pilot projects
            </p>
            <p className="text-lg text-gray-500">6–8 week pilot using anonymized data with measurable outcomes</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-xl text-emerald-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">15-30min</h3>
              <p className="text-gray-600">Time saved per report</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-bar-chart-line text-xl text-emerald-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">95%+</h3>
              <p className="text-gray-600">Follow-ups tracked</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-trending-down-line text-xl text-emerald-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">25-40%</h3>
              <p className="text-gray-600">Backlog reduction</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-emotion-happy-line text-xl text-emerald-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">90%+</h3>
              <p className="text-gray-600">Staff satisfaction</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowPilotForm(true)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-lg text-xl font-semibold transition-colors whitespace-nowrap cursor-pointer inline-flex items-center gap-3"
            >
              <i className="ri-hand-heart-line"></i>
              Apply for a Pilot
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20healthcare%20technology%20expert%20portrait%2C%20UK-based%20technologist%20in%20modern%20office%20setting%2C%20confident%20and%20approachable%20healthcare%20innovation%20leader%2C%20clean%20professional%20headshot%2C%20NHS%20healthcare%20technology%20background&width=500&height=600&seq=founder-portrait&orientation=portrait"
                alt="Founder"
                className="w-full h-96 object-cover object-top rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">About the Founder</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  My name is Fabian, I'm a UK-based technologist with deep expertise in AI, cloud systems, and
                  digital innovation. My career has been dedicated to building technology solutions that enhance
                  human capability rather than replace it.
                </p>
                <p>
                  Having worked closely with healthcare professionals, I understand the unique challenges facing the
                  NHS. RadAssist AI represents my commitment to developing practical, safe, and effective tools that
                  empower NHS staff to deliver better patient care.
                </p>
                <p className="font-semibold text-gray-900">
                  My mission is to build tools that empower NHS staff, not replace them.
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href="mailto:contact@radassistai.com"
                  className="text-blue-600 hover:text-blue-700 flex items-center gap-2 cursor-pointer"
                >
                  <i className="ri-mail-line"></i>
                  contact@radassistai.com
                </a>
                <a
                  href="https://linkedin.com/in/ubong-ekeruke-9bb238269"
                  className="text-blue-600 hover:text-blue-700 flex items-center gap-2 cursor-pointer"
                >
                  <i className="ri-linkedin-line"></i>
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <section id="contact" className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Transform Your Radiology Workflow?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join leading NHS Trusts in pioneering the future of radiology reporting
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="mailto:contact@radassistai.com"
              className="flex items-center gap-3 text-lg text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              <i className="ri-mail-line text-xl"></i>
              contact@radassistai.com
            </a>
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <a
              href="https://linkedin.com/in/ubong-ekeruke-9bb238269"
              className="flex items-center gap-3 text-lg text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              <i className="ri-linkedin-line text-xl"></i>
              Connect on LinkedIn
            </a>
          </div>

          <button
            onClick={() => setShowPilotForm(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-lg text-xl font-semibold transition-colors whitespace-nowrap cursor-pointer inline-flex items-center gap-3 mb-16"
          >
            <i className="ri-handshake-line"></i>
            Partner With Us Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">RadAssist AI © 2025 | Empowering the NHS with safe, effective AI</p>
            <div className="flex items-center gap-6">
              <a
                href="https://readdy.ai/?origin=logo"
                className="text-gray-500 hover:text-gray-700 text-sm cursor-pointer"
              >
                Made with Readdy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Pilot Application Modal */}
      {showPilotForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Apply for NHS Pilot Program</h3>
                <button
                  onClick={() => setShowPilotForm(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer"
                >
                  <i className="ri-close-line text-xl text-gray-500"></i>
                </button>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Trust Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="NHS Trust Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Radiology Department"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Position"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@nhs.net"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+44 20 1234 5678"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Challenges</label>
                  <textarea
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Describe your current radiology workflow challenges (max 500 characters)"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Weekly Report Volume
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8">
                    <option value="">Select volume range</option>
                    <option value="0-100">0-100 reports/week</option>
                    <option value="100-500">100-500 reports/week</option>
                    <option value="500-1000">500-1000 reports/week</option>
                    <option value="1000+">1000+ reports/week</option>
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <input type="checkbox" id="consent" className="w-4 h-4 text-blue-600" />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I consent to RadAssist AI contacting me about the pilot program and agree to the use of
                    anonymized data for evaluation purposes.
                  </label>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowPilotForm(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
