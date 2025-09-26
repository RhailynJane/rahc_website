"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Smartphone,
  MapPin,
  Clock,
  Users,
  Brain,
  Camera,
  Wifi,
  Phone,
  Mail,
  Menu,
  X,
  ChevronRight,
  CheckCircle,
  Database,
  Activity,
  Globe,
} from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const services = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Multi-Modal AI Symptom Analysis",
      description:
        "Revolutionary AI system that combines natural language processing with YOLO computer vision technology for comprehensive health assessments. Analyzes both text descriptions and visual symptoms for accurate health guidance.",
      features: [
        "Text & Image Analysis Combined",
        "YOLO Computer Vision Technology",
        "Natural Language Processing",
        "24/7 AI-Powered Assessment",
        "Offline Capability for Rural Areas",
        "Bias Detection & Mitigation",
        "Multi-Language Support",
        "Cultural Sensitivity Validation",
      ],
      details: [
        "Advanced machine learning models trained specifically for rural health symptoms",
        "Real-time image analysis for skin conditions, wounds, and visible symptoms",
        "Contextual understanding of symptom descriptions in plain language",
        "Continuous learning from anonymized rural health data",
      ],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Location-Aware Emergency Triage System",
      description:
        "GPS-integrated emergency response system that helps rural residents make informed decisions about when and where to seek care. Combines AI assessment with local healthcare facility availability and emergency protocols.",
      features: [
        "GPS-Based Location Services",
        "Local Healthcare Facility Finder",
        "Real-Time Facility Availability",
        "Emergency Protocol Guidance",
        "Ambulance Response Optimization",
        "Distance & Travel Time Calculation",
        "Weather-Aware Routing",
        "Emergency Contact Integration",
      ],
      details: [
        "Reduces average emergency response decision time by 60%",
        "Integrates with local EMS systems for optimal resource allocation",
        "Provides offline emergency protocols for critical situations",
        "Accounts for rural Alberta's unique geographic challenges",
      ],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Offline-First Rural Platform",
      description:
        "Designed specifically for rural connectivity challenges, providing essential healthcare guidance even without internet. Synchronizes data when connection returns while maintaining full functionality offline.",
      features: [
        "Complete Offline Functionality",
        "Local Data Storage & Processing",
        "Smart Sync When Connected",
        "Low-Bandwidth Optimization",
        "Reliable Access in Remote Areas",
        "Progressive Web App Technology",
        "Minimal Data Usage",
        "Connection Status Awareness",
      ],
      details: [
        "Works with 23% of rural Alberta that lacks reliable internet",
        "Stores critical health algorithms locally on device",
        "Optimized for slow connections and intermittent connectivity",
        "Prioritizes essential data for limited bandwidth scenarios",
      ],
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Comprehensive Health Tracking & Analytics",
      description:
        "Advanced health monitoring system with trend analysis, predictive modeling, and personalized insights. Tracks daily symptoms, medication adherence, and health patterns for better long-term care management.",
      features: [
        "Daily Health Logging",
        "Symptom Severity Tracking",
        "Historical Data Visualization",
        "Predictive Health Modeling",
        "Medication Reminders",
        "Trend Analysis & Insights",
        "Personal Health Reports",
        "Healthcare Provider Integration",
      ],
      details: [
        "Identifies health patterns and potential issues before they become critical",
        "Generates comprehensive reports for healthcare provider visits",
        "Tracks medication adherence and effectiveness",
        "Provides personalized health recommendations based on rural lifestyle factors",
      ],
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Privacy-Compliant Data Management",
      description:
        "End-to-end encrypted health data management system fully compliant with Canadian privacy laws (HIA and PIPEDA). User-controlled data sharing with comprehensive audit trails and security measures.",
      features: [
        "End-to-End Encryption",
        "HIA & PIPEDA Compliance",
        "User-Controlled Data Sharing",
        "Comprehensive Audit Trails",
        "Secure Cloud Backup",
        "Data Anonymization Options",
        "Privacy-First Design",
        "Regular Security Audits",
      ],
      details: [
        "Sets new standards for healthcare AI privacy compliance",
        "Allows users complete control over their health data",
        "Enables anonymous data contribution for rural health research",
        "Maintains highest security standards for sensitive medical information",
      ],
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Rural Community Integration",
      description:
        "Designed specifically for rural Alberta communities with cultural sensitivity, local healthcare system integration, and support for Indigenous languages. Connects users with local resources and community health initiatives.",
      features: [
        "Cultural Sensitivity Validation",
        "Indigenous Language Support",
        "Local Healthcare Integration",
        "Community Health Resources",
        "Rural Lifestyle Considerations",
        "Local Pharmacy Connections",
        "Community Feedback Integration",
        "Regional Health Authority Links",
      ],
      details: [
        "Built with input from rural Alberta communities",
        "Respects cultural differences in healthcare approaches",
        "Integrates with existing local healthcare infrastructure",
        "Supports community-based health initiatives and programs",
      ],
    },
  ]

  const stats = [
    { number: "200km+", label: "Average distance to specialist care in rural Alberta" },
    { number: "45min+", label: "Average ambulance response time" },
    { number: "23%", label: "Of rural Alberta lacks reliable internet" },
    { number: "24/7", label: "AI-powered health guidance availability" },
  ]

  const teamMembers = [
    {
      name: "Rhailyn Jane Cona",
      role: "Project Manager & Frontend Developer",
      description:
        "Leading the development of user-centered healthcare solutions with expertise in UX/UI design, React development, and rural user research. Focused on creating accessible interfaces that work for diverse rural populations.",
    },
    {
      name: "Yue Zhou",
      role: "Backend Developer & AI/ML Specialist",
      description:
        "Developing the AI-powered backend systems and machine learning models that power our symptom analysis platform. Specializes in computer vision, natural language processing, and healthcare AI compliance.",
    },
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background with Gradient */}
      <div 
        className="fixed inset-0 z-0 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-green-50/80"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-transparent to-green-200/20"></div>
        
        {/* Animated Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-blue-100/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-green-200/25 to-green-100/15 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-blue-200/10 rounded-full blur-3xl animate-pulse-slowest"></div>
        
        {/* Moving Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        ></div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-300/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <img src="/images/logo.png" alt="Rural Alberta Health Connect" className="h-10 w-10" />
                <span className="text-xl font-bold text-gray-900">Rural Alberta Health Connect</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {['services', 'about', 'team', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 font-medium"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>

              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden py-4 space-y-4 border-t border-gray-200/40">
                {['services', 'about', 'team', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
                      setIsMenuOpen(false)
                    }}
                    className="block w-full text-left py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900 font-medium"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-16">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-6 bg-gradient-to-r from-blue-500/10 to-green-500/10 text-blue-600 border-blue-200 backdrop-blur-sm">
              AI-Enhanced Telemedicine Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-gray-900">
              Healthcare Access for <span className="text-blue-600">Rural Alberta</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty backdrop-blur-sm bg-white/50 rounded-lg p-6">
              Bridging the healthcare gap with AI-powered symptom analysis, emergency triage, and 24/7 health guidance
              designed specifically for rural communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-blue-50/50 to-green-50/50 backdrop-blur-sm relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center backdrop-blur-sm bg-white/60 rounded-2xl p-6 hover:scale-105 transition-transform duration-300 shadow-sm">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-pretty">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gradient-to-br from-white/60 to-blue-50/40 backdrop-blur-sm relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-gray-900">
                Revolutionary Healthcare Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
                Our AI-powered platform combines cutting-edge technology with deep understanding of rural healthcare
                challenges to deliver accessible, reliable health guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="bg-white/70 backdrop-blur-sm border-gray-200/50 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg text-white">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl text-balance text-gray-900">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-6 text-pretty">
                      {service.description}
                    </CardDescription>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-200/50 pt-4">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-blue-600">
                        Key Capabilities
                      </h4>
                      <ul className="space-y-2">
                        {service.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-sm text-gray-600 flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mt-2 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-r from-green-50/40 to-blue-50/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-gray-900">
                  Bridging the Rural Healthcare Gap
                </h2>
                <p className="text-lg text-gray-600 mb-6 text-pretty">
                  Rural Alberta residents face significant healthcare access challenges, including geographic isolation,
                  provider shortages, and limited emergency response capabilities. Our platform addresses these critical
                  gaps with innovative AI technology.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, title: "Location-Aware Services", desc: "GPS-integrated emergency triage and local healthcare facility finder" },
                    { icon: Wifi, title: "Offline-First Design", desc: "Essential features work without internet, syncing when connection returns" },
                    { icon: Camera, title: "Multi-Modal AI Analysis", desc: "Combines text descriptions with image analysis for comprehensive assessments" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 backdrop-blur-sm bg-white/60 rounded-lg p-4 hover:scale-105 transition-transform duration-300">
                      <item.icon className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1 text-gray-800">{item.title}</h3>
                        <p className="text-gray-600 text-pretty">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-2xl p-8 backdrop-blur-sm border border-gray-200/30">
                  <div className="space-y-6">
                    {[
                      { icon: Clock, bg: "bg-blue-500", title: "24/7 Availability", desc: "Always-on health guidance" },
                      { icon: Shield, bg: "bg-green-500", title: "Privacy Compliant", desc: "HIA and PIPEDA compliant" },
                      { icon: Users, bg: "bg-gradient-to-r from-blue-400 to-green-400", title: "Community Focused", desc: "Built for rural communities" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
                        <div className={`p-3 ${item.bg} rounded-lg`}>
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-gradient-to-br from-white/60 to-green-50/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-gray-900">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
                Dedicated professionals committed to revolutionizing rural healthcare access through innovative
                technology and compassionate design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-white/70 backdrop-blur-sm border-gray-200/50 text-center hover:scale-105 transition-transform duration-300">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-xl text-balance text-gray-900">{member.name}</CardTitle>
                    <CardDescription className="text-blue-600 font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-pretty">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-r from-blue-500/10 via-white to-green-500/10 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-gray-900">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
              Ready to revolutionize rural healthcare? Contact us to learn more about our platform and partnership opportunities.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-3 text-lg font-semibold"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-200/40 bg-white/70 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <img src="/images/logo.png" alt="Rural Alberta Health Connect" className="h-8 w-8" />
                  <span className="text-xl font-bold text-balance text-gray-900">Rural Alberta Health Connect</span>
                </div>
                <p className="text-gray-600 mb-4 text-pretty">
                  AI-Enhanced Telemedicine Platform for Rural Communities. Bridging the healthcare gap with innovative
                  technology and compassionate care.
                </p>
              </div>

              {['Services', 'Company'].map((category, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-4 text-gray-800">{category}</h3>
                  <ul className="space-y-2 text-gray-600">
                    {category === 'Services' ? (
                      <>
                        <li><button className="hover:text-blue-600 transition-colors">AI Symptom Analysis</button></li>
                        <li><button className="hover:text-blue-600 transition-colors">Emergency Triage</button></li>
                        <li><button className="hover:text-blue-600 transition-colors">Health Tracking</button></li>
                      </>
                    ) : (
                      <>
                        <li><button className="hover:text-blue-600 transition-colors">About Us</button></li>
                        <li><button className="hover:text-blue-600 transition-colors">Our Team</button></li>
                      </>
                    )}
                  </ul>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200/40 mt-8 pt-8 text-center text-gray-600">
              <p>&copy; 2025 Rural Alberta Health Connect. All rights reserved.</p>
              <p className="mt-2 text-sm">Committed to improving healthcare access for rural Alberta communities.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}