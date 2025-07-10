import {Activity, Calendar, FileText, Shield, Users, UserPlus, Settings, Heart, Stethoscope, Clock} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image src="/assets/icons/logo-full.svg" height={32} width={162} alt="CarePluse" className="h-8 w-fit" />
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/register">
                <button className="text-gray-600 hover:text-emerald-600 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Patient Registration
                </button>
              </Link>
              <Link href="/admin">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors shadow-lg">
                  Admin Access
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Heart className="w-10 h-10 text-emerald-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">+</span>
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              Healthcare Made
              <span className="text-emerald-600 block">Simple & Secure</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Connect with healthcare providers, manage appointments, and access your medical records all in one secure
              platform designed for your wellbeing.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/register">
                <button className="group bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-3">
                  <UserPlus className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  Start Your Health Journey
                </button>
              </Link>

              <Link href="/admin">
                <button className="group border-2 border-gray-300 hover:border-emerald-600 text-gray-700 hover:text-emerald-600 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-3">
                  <Settings className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                  Healthcare Provider Portal
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-rose-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose CarePluse?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re revolutionizing healthcare management with cutting-edge technology and patient-centered care.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Scheduling</h3>
              <p className="text-gray-600 leading-relaxed">
                Book appointments instantly with real-time availability. Get automated reminders and never miss an
                important visit.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-rose-200">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Health Records</h3>
              <p className="text-gray-600 leading-relaxed">
                Access your complete medical history anytime, anywhere. Share records securely with healthcare
                providers.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bank-Level Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Your health data is protected with military-grade encryption and HIPAA-compliant security protocols.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Network</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with certified healthcare professionals and specialists in your area with verified credentials.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Health Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Get personalized health insights and recommendations based on your medical history and lifestyle.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Round-the-clock patient support and emergency assistance whenever you need medical guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Healthcare Communities</h2>
            <p className="text-xl text-emerald-100">Join thousands who have transformed their healthcare experience</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-emerald-100">Active Patients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl font-bold text-white mb-2">1,200+</div>
              <div className="text-emerald-100">Healthcare Providers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl font-bold text-white mb-2">500K+</div>
              <div className="text-emerald-100">Appointments Booked</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-emerald-100">Uptime Reliability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Experience Better Healthcare?</h2>
            <p className="text-xl text-gray-600 mb-10">
              Take the first step towards simplified, secure, and personalized healthcare management.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/register">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-3">
                  <Heart className="w-6 h-6" />
                  Register Now - It&apos;s Free
                </button>
              </Link>

              <Link href="/admin">
                <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3">
                  <Users className="w-6 h-6" />
                  Healthcare Provider Access
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/assets/icons/logo-full.svg"
                height={32}
                width={162}
                alt="CarePluse"
                className="h-6 w-fit filter brightness-0 invert"
              />
            </div>
            <div className="text-gray-400">© 2024 CarePluse. Transforming healthcare, one patient at a time.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
