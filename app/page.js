"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Smartphone,
  MapPin,
  Clock,
  Users,
  Brain,
  Camera,
  Wifi,
  Mail,
  Menu,
  X,
  ChevronRight,
  CheckCircle,
  Database,
  Activity,
  Globe,
  Download,
} from "lucide-react";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showBugModal, setShowBugModal] = useState(false);
  const [expandedBugId, setExpandedBugId] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    globalThis.addEventListener("mousemove", handleMouseMove);
    return () => globalThis.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
  ];

  const stats = [
    {
      number: "200km+",
      label: "Average distance to specialist care in rural Alberta",
    },
    { number: "45min+", label: "Average ambulance response time" },
    { number: "23%", label: "Of rural Alberta lacks reliable internet" },
    { number: "24/7", label: "AI-powered health guidance availability" },
  ];

  const sprintBugs = {
    "Critical Issues": [
      { id: 9, title: "Vision Test crash", severity: "Critical", status: "pending", description: "The app crashes immediately or within seconds after clicking 'Start Detection' or 'Vision Test' (Pixel 7 - all 5 personas). Debug camera initialization, memory allocation, and ML model loading. Check for permission handling issues and device compatibility." },
      { id: 17, title: "Password visible by default", severity: "Critical", status: "pending", description: "Password input shows plain text without clicking the eye icon, which is a privacy concern (Samsung S23, Persona 1). Fix the password field's default state to masked. Ensure consistent behavior across all password input fields." },
      { id: 21, title: "Vision Detection camera crash", severity: "Critical", status: "pending", description: "The app crashes after tapping 'Take Photo' and the camera gets stuck on continuous loading (Samsung S23, Persona 1). Priority fix. Debug camera initialization and permissions. Test on multiple Samsung devices for compatibility." },
      { id: 25, title: "Registration crash on name field", severity: "Critical", status: "pending", description: "The app crashes when entering the last name during registration (Samsung S23, Persona 2). Debug input validation and state management for the registration form. Check for character encoding or length issues." },
      { id: 27, title: "AI assessment fails to generate analysis", severity: "Critical", status: "pending", description: "AI fails to produce a detailed analysis even after multiple attempts (Samsung S23, Personas 2-3). Debug AI service connectivity, timeout settings, and error handling. Implement retry logic with user feedback." },
      { id: 38, title: "Post-registration crash", severity: "Critical", status: "pending", description: "The app crashes immediately after registration and fails to load the landing page/dashboard (Samsung S23, Persona 5). Priority fix. Debug post-registration navigation and initial data loading. Implement proper error handling." },
      { id: 39, title: "AI assessment failure", severity: "Critical", status: "pending", description: "The AI assessment is not functioning (Samsung S23, Persona 5). Related to Bugs #27 and #38. Requires a comprehensive investigation of AI service integration and error states." },
    ],
    "Authentication & Registration": [
      { id: 1, title: "Password visibility on login", severity: "High", status: "pending", description: "Password field does not show typed characters during login (appears on Infinix 5G Android 13 across all 5 personas). Implement proper password masking with a toggle visibility option. Ensure the default state is masked with an eye icon to reveal/hide." },
      { id: 2, title: "Sign-up navigation issue", severity: "Medium", status: "pending", description: "Sign-up button not working on the first attempt; users must click 'Sign In' then 'Create Account' to proceed (Pixel 9 XL Pro). Fix routing logic for the sign-up flow. Ensure the direct sign-up button works without requiring a navigation workaround." },
      { id: 13, title: "Password validation message timing", severity: "Low", status: "pending", description: "The password length warning flashes too quickly during sign-up, causing user confusion (Pixel 7, Persona 4). Increase the message display duration or keep the validation message visible until corrected. Consider inline validation." },
      { id: 19, title: "Auto-navigation crash", severity: "High", status: "pending", description: "The app crashes 10 seconds after auto-navigating from registration to the dashboard if no user action is taken (Samsung S23, Persona 1). Debug auto-navigation timeout logic. Remove or fix the automatic redirect, or ensure proper state initialization." },
      { id: 37, title: "Slow invalid password response", severity: "Low", status: "pending", description: "It takes 5+ seconds to show an invalid password alert (Samsung S23, Persona 4). Optimize authentication validation. Reduce unnecessary processing before showing the error message." },
    ],
    "AI & Assessment": [
      { id: 10, title: "AI ignores uploaded images", severity: "High", status: "pending", description: "AI analysis relies only on text input, ignoring uploaded photos (Pixel 7, Persona 2). Fix the image processing pipeline. Verify image upload completion, encoding, and integration with the AI analysis endpoint." },
      { id: 30, title: "Extended AI loading time", severity: "High", status: "pending", description: "AI assessment exceeds 5 seconds and times out (Samsung S23, Persona 3). Optimize AI service calls. Implement timeout handling with a retry option and user notification." },
    ],
    "Performance & Loading": [
      { id: 3, title: "Entry details loading delay", severity: "Medium", status: "pending", description: "Opening entry details takes over 5 seconds to load (multiple devices). Optimize data retrieval and rendering. Implement a loading skeleton or progress indicator. Consider caching recently viewed entries." },
      { id: 8, title: "App freeze on History tab", severity: "Medium", status: "pending", description: "The app freezes for 4-5 seconds when opening the History tab (Pixel 7, multiple personas). Optimize History page data loading. Implement pagination or lazy loading for large datasets." },
      { id: 11, title: "Delayed data load in History/Daily Log", severity: "Medium", status: "pending", description: "Pages show no data for 4-5 seconds before loading entries (Pixel 7, multiple personas). Optimize database queries. Implement progressive loading with placeholder content or loading indicators." },
      { id: 14, title: "Dashboard loading delay", severity: "Medium", status: "pending", description: "The dashboard takes 7-8 seconds to load after sign-up (Pixel 7, Persona 5). Optimize initial dashboard load. Review async operations, reduce initial data fetching, and implement a splash screen if needed." },
      { id: 16, title: "Photo upload lag", severity: "Medium", status: "pending", description: "Uploading photos causes a 4-5 second freeze before the page updates (Pixel 7, multiple personas). Implement asynchronous image upload with a progress indicator. Compress images before upload if needed." },
      { id: 26, title: "Performance degradation over time", severity: "Medium", status: "pending", description: "App performance slows significantly with stacked navigation; a History entry takes 5+ seconds to load (Samsung S23, Persona 2). Investigate memory leaks or resource accumulation. Implement proper cleanup after AI operations." },
      { id: 28, title: "Performance degradation with navigation", severity: "High", status: "pending", description: "App slows significantly with stacked navigation; History entry takes 5+ seconds (Samsung S23, Persona 2). Implement proper navigation stack management. Clear unused screens and optimize memory usage." },
      { id: 31, title: "Slow Daily Log with multiple photos", severity: "Medium", status: "pending", description: "The Daily Log takes 7+ seconds to load entries with multiple photos (5 per entry) (Samsung S23, Persona 3). Implement image thumbnails and lazy loading. Consider limiting photos per entry or paginating results." },
      { id: 33, title: "Vision model loading delay", severity: "High", status: "pending", description: "Loading the vision model takes 30+ seconds (Samsung S23, Persona 3). Optimize ML model initialization. Consider model compression or a progressive loading strategy." },
    ],
    "Data & Profile Management": [
      { id: 4, title: "Black screen during manual log entry", severity: "High", status: "pending", description: "The screen randomly turns black when adding a manual log entry, though the entry still saves (Pixel 9 XL Pro, Persona 2). Debug the rendering issue during log entry creation. Check for UI thread blocking or state management problems." },
      { id: 5, title: "Profile information not saving", severity: "High", status: "pending", description: "Edited profile information (medical info, allergies) does not persist after the page is reloaded (Pixel 9 XL Pro, Personas 3-5). Fix the data persistence layer for profile updates. Ensure proper save/commit operations and verify database writes." },
      { id: 12, title: "Profile data truncation", severity: "High", status: "pending", description: "The allergies field shows truncated data (e.g., 'Pe' instead of 'Peanuts') or is missing entirely (Pixel 7, Personas 3-4). Fix the character limit or field rendering issue. Verify data storage and retrieval for all profile fields." },
      { id: 29, title: "Photo retrieval failure", severity: "High", status: "pending", description: "Saved photos are not retrieved properly from History (Samsung S23, Persona 2). Fix the image storage and retrieval pipeline. Verify file paths, permissions, and cache management." },
      { id: 32, title: "History page fails to display", severity: "High", status: "pending", description: "History shows no entries until the app is force-closed and reopened (Samsung S23, Persona 3). Fix data synchronization between log creation and history display. Ensure proper state updates." },
    ],
    "UI & Navigation": [
      { id: 7, title: "Date/time picker incorrect values", severity: "High", status: "pending", description: "Selected date and time display wrong values (e.g., selecting Oct 7 shows Oct 2) - affects all Pixel 7 personas. Debug the date picker component. Check for timezone issues, index offset errors, or state management problems." },
      { id: 20, title: "Visual lag/ghosting during tab transitions", severity: "Low", status: "pending", description: "Noticeable 'ghosting' effects when switching between Daily Log and History tabs (Samsung S23, Persona 1). Optimize tab transition animations. Consider reducing animation complexity or implementing smoother transitions." },
      { id: 34, title: "Camera UI overlap", severity: "Medium", status: "pending", description: "The bottom tab bar shifts upward, overlapping the camera view (Samsung S23, Persona 3). Fix layout constraints for the camera screen. Ensure proper z-index and view hierarchy management." },
      { id: 35, title: "Poor navigation flow", severity: "Medium", status: "pending", description: "Swiping back from AI results returns to the severity questionnaire instead of the dashboard (Samsung S23, Persona 4). Redesign the navigation stack. Implement proper back button behavior for improved UX flow." },
      { id: 36, title: "Submit button disappears", severity: "High", status: "pending", description: "The submit button vanishes after keyboard interaction, requiring an app restart (Samsung S23, Persona 4). Fix keyboard event handling and button visibility logic. Ensure UI elements persist through keyboard show/hide actions." },
    ],
    "Validation & Input": [
      { id: 6, title: "Emergency contact validation", severity: "Medium", status: "pending", description: "The app allows letters in the emergency phone number field (Pixel 9 XL Pro, Persona 2). Implement input validation to accept only numeric characters for phone number fields. Add proper formatting (e.g., xxx-xxx-xxxx)." },
      { id: 18, title: "Phone number formatting", severity: "Low", status: "pending", description: "The emergency contact phone number is not properly formatted (Samsung S23, Persona 1). Implement auto-formatting for phone numbers (e.g., (xxx) xxx-xxxx format)." },
    ],
    "Location & Emergency Services": [
      { id: 15, title: "Missing location permission prompt", severity: "Low", status: "pending", description: "No permission popup when re-enabling location services (Pixel 7, most personas). Ensure a proper permission request flow. While functionality works, an explicit permission dialog improves UX clarity." },
      { id: 22, title: "Inaccurate clinic distance", severity: "Medium", status: "pending", description: "Displayed distance is incorrect (shows 0.5 km when the actual is ~13 km) (Samsung S23, Persona 1). Fix the distance calculation algorithm. Verify geolocation API integration and distance formula implementation." },
      { id: 23, title: "Limited clinic results", severity: "Medium", status: "pending", description: "Only one clinic is shown in emergency results (Samsung S23, Personas 1-2). Expand the search radius or adjust API query parameters. Ensure proper handling of multiple results." },
      { id: 24, title: "Incorrect clinic type", severity: "High", status: "pending", description: "A non-medical facility (homeless shelter) is shown as a clinic option (Samsung S23, Persona 2). Implement proper filtering for medical facility types. Validate the data source and improve search query specificity." },
    ],
  };

  const teamMembers = [
    {
      name: "Rhailyn Jane Cona",
      role: "Project Manager & Frontend Developer",
      description:
        "Leading the development of user-centered healthcare solutions with expertise in UX/UI design, React development, and rural user research. Focused on creating accessible interfaces that work for diverse rural populations.",
      image: "/images/rhai_linkedin.jpg",
    },
    {
      name: "Yue Zhou",
      role: "Backend Developer & AI/ML Specialist",
      description:
        "Developing the AI-powered backend systems and machine learning models that power our symptom analysis platform. Specializes in computer vision, natural language processing, and healthcare AI compliance.",
      image: "/images/amir_linkedin.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden font-barlow">
      {/* Enhanced Animated Background with More Gradients */}
      <div
        className="fixed inset-0 z-0 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.03}px, ${
            mousePosition.y * 0.03
          }px)`,
        }}
      >
        {/* Base Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white to-cyan-50/90"></div>

        {/* Animated Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 via-purple-200/20 to-cyan-200/30 animate-gradient-flow"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/40 via-transparent to-cyan-100/40"></div>

        {/* Enhanced Geometric Shapes with More Colors */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-300/25 to-cyan-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-r from-cyan-300/20 to-blue-400/15 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-300/15 to-blue-300/10 rounded-full blur-3xl animate-pulse-slowest"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-cyan-400/15 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Enhanced Moving Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        ></div>

        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 25 }).map((_, i) => {
            const key = `particle-${Math.random()
              .toString(36)
              .substring(2, 11)}-${i}`;
            return (
              <div
                key={key}
                className="absolute w-3 h-3 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full animate-float"
                style={{
                  left: `${10 + i * 3.6}%`,
                  top: `${10 + i * 3.2}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${15 + i * 0.5}s`,
                  width: `${3 + (i % 2)}px`,
                  height: `${3 + (i % 3)}px`,
                }}
              />
            );
          })}
        </div>

        {/* Additional Wave-like Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-100/20 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-gray-200/40 font-barlow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/logo.png"
                  alt="Rural Alberta Health Connect"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <span className="text-xl font-bold text-gray-900 font-barlow-condensed">
                  Rural Alberta Health Connect
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8 font-barlow">
                {["services", "about", "team", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() =>
                      document
                        .getElementById(section)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 font-semibold tracking-wide"
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
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden py-4 space-y-4 border-t border-gray-200/40 font-barlow">
                {["services", "about", "team", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      document
                        .getElementById(section)
                        ?.scrollIntoView({ behavior: "smooth" });
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900 font-semibold tracking-wide"
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
            <Badge className="mb-6 bg-blue-500/10 text-blue-600 border-blue-200 backdrop-blur-sm font-barlow font-semibold tracking-wide">
              AI-Enhanced Telemedicine Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-gray-900 font-barlow-condensed">
              Healthcare Access for{" "}
              <span className="text-blue-600">Rural Alberta</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty backdrop-blur-sm bg-white/50 rounded-lg p-6 font-barlow">
              Bridging the healthcare gap with AI-powered symptom analysis,
              emergency triage, and 24/7 health guidance designed specifically
              for rural communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-barlow font-semibold tracking-wide"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 font-barlow font-semibold tracking-wide"
                onClick={() => (globalThis.location.href = "../download")}
              >
                <Download className="mr-2 h-5 w-5" />
                Download APK
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-blue-50/60 via-cyan-50/50 to-blue-50/60 backdrop-blur-sm relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center backdrop-blur-sm bg-white/70 rounded-2xl p-6 hover:scale-105 transition-transform duration-300 shadow-sm"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 font-barlow-condensed">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-pretty font-barlow">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-20 bg-gradient-to-br from-white/70 via-blue-50/40 to-cyan-50/40 backdrop-blur-sm relative"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-gray-900 font-barlow-condensed">
                Revolutionary Healthcare Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty font-barlow">
                Our AI-powered platform combines cutting-edge technology with
                deep understanding of rural healthcare challenges to deliver
                accessible, reliable health guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white/95 transition-all duration-300 hover:scale-105 hover:shadow-xl font-barlow"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-600 rounded-lg text-white">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl text-balance text-gray-900 font-barlow-condensed">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-6 text-pretty">
                      {service.description}
                    </CardDescription>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={feature}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700 font-barlow">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-200/50 pt-4">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-blue-600 font-barlow-condensed">
                        Key Capabilities
                      </h4>
                      <ul className="space-y-2">
                        {service.details.map((detail, detailIndex) => (
                          <li
                            key={detail}
                            className="text-sm text-gray-600 flex items-start space-x-2 font-barlow"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
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
        <section
          id="about"
          className="py-20 bg-gradient-to-r from-cyan-50/50 via-blue-50/40 to-cyan-50/50 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-gray-900 font-barlow-condensed">
                  Bridging the Rural Healthcare Gap
                </h2>
                <p className="text-lg text-gray-600 mb-6 text-pretty font-barlow">
                  Rural Alberta residents face significant healthcare access
                  challenges, including geographic isolation, provider
                  shortages, and limited emergency response capabilities. Our
                  platform addresses these critical gaps with innovative AI
                  technology.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: MapPin,
                      title: "Location-Aware Services",
                      desc: "GPS-integrated emergency triage and local healthcare facility finder",
                    },
                    {
                      icon: Wifi,
                      title: "Offline-First Design",
                      desc: "Essential features work without internet, syncing when connection returns",
                    },
                    {
                      icon: Camera,
                      title: "Multi-Modal AI Analysis",
                      desc: "Combines text descriptions with image analysis for comprehensive assessments",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className="flex items-start space-x-3 backdrop-blur-sm bg-white/70 rounded-lg p-4 hover:scale-105 transition-transform duration-300"
                    >
                      <item.icon className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1 text-gray-800 font-barlow-condensed">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-pretty font-barlow">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 backdrop-blur-sm border border-gray-200/30">
                  <div className="space-y-6">
                    {[
                      {
                        icon: Clock,
                        bg: "bg-blue-500",
                        title: "24/7 Availability",
                        desc: "Always-on health guidance",
                      },
                      {
                        icon: Shield,
                        bg: "bg-cyan-500",
                        title: "Privacy Compliant",
                        desc: "HIA and PIPEDA compliant",
                      },
                      {
                        icon: Users,
                        bg: "bg-gradient-to-r from-blue-500 to-cyan-500",
                        title: "Community Focused",
                        desc: "Built for rural communities",
                      },
                    ].map((item, index) => (
                      <div
                        key={item.title}
                        className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300"
                      >
                        <div className={`p-3 ${item.bg} rounded-lg`}>
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 font-barlow-condensed">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-600 font-barlow">
                            {item.desc}
                          </p>
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
        <section
          id="team"
          className="py-20 bg-gradient-to-br from-white/70 via-blue-50/40 to-cyan-50/40 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-gray-900 font-barlow-condensed">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty font-barlow">
                Dedicated professionals committed to revolutionizing rural
                healthcare access through innovative technology and
                compassionate design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card
                  key={member.name}
                  className="bg-white/80 backdrop-blur-sm border-gray-200/50 text-center hover:scale-105 transition-transform duration-300 font-barlow"
                >
                  <CardHeader>
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        width={96}
                        height={96}
                      />
                    </div>
                    <CardTitle className="text-xl text-balance text-gray-900 font-barlow-condensed">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-blue-600 font-medium font-barlow">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-pretty font-barlow">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 bg-gradient-to-r from-blue-500/15 via-white to-cyan-500/15 backdrop-blur-sm"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-gray-900 font-barlow-condensed">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-pretty font-barlow">
              Ready to revolutionize rural healthcare? Contact us to learn more
              about our platform and partnership opportunities.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold tracking-wide font-barlow"
              onClick={() =>
                (globalThis.location.href =
                  "mailto:ruralalbertahealthconnect@gmail.com")
              }
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-200/40 bg-white/80 backdrop-blur-sm font-barlow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src="/images/logo.png"
                    alt="Rural Alberta Health Connect"
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                  <span className="text-xl font-bold text-balance text-gray-900 font-barlow-condensed">
                    Rural Alberta Health Connect
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-pretty">
                  AI-Enhanced Telemedicine Platform for Rural Communities.
                  Bridging the healthcare gap with innovative technology and
                  compassionate care.
                </p>
              </div>

              {["Services", "Company"].map((category, index) => (
                <div key={category}>
                  <h3 className="font-semibold mb-4 text-gray-800 font-barlow-condensed">
                    {category}
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    {category === "Services" ? (
                      <>
                        <li>
                          <button className="hover:text-blue-600 transition-colors font-barlow">
                            AI Symptom Analysis
                          </button>
                        </li>
                        <li>
                          <button className="hover:text-blue-600 transition-colors font-barlow">
                            Emergency Triage
                          </button>
                        </li>
                        <li>
                          <button className="hover:text-blue-600 transition-colors font-barlow">
                            Health Tracking
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <button className="hover:text-blue-600 transition-colors font-barlow">
                            About Us
                          </button>
                        </li>
                        <li>
                          <button className="hover:text-blue-600 transition-colors font-barlow">
                            Our Team
                          </button>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              ))}
            </div>

            {/* Sprint Progress Section - Collapsible */}
            <div className="border-t border-gray-200/40 mt-8 pt-8">
              <details className="max-w-4xl mx-auto mb-6">
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700 transition-colors text-center font-barlow font-medium tracking-wide">
                  Development Progress: Sprint 2 (In Progress)
                </summary>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="text-center p-3 bg-gray-50/50 rounded-lg border border-gray-200/50">
                    <div className="text-2xl font-bold text-gray-600 font-barlow-condensed">0</div>
                    <div className="text-xs text-gray-600 font-barlow">Bugs Fixed</div>
                  </div>
                  <div className="text-center p-3 bg-cyan-50/50 rounded-lg border border-cyan-100/50">
                    <div className="text-2xl font-bold text-cyan-600 font-barlow-condensed">39</div>
                    <div className="text-xs text-gray-600 font-barlow">Issues Found (Sprint 1)</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50/50 rounded-lg border border-blue-100/50">
                    <div className="text-2xl font-bold text-blue-600 font-barlow-condensed">2</div>
                    <div className="text-xs text-gray-600 font-barlow">Team Size</div>
                  </div>
                  <div className="text-center p-3 bg-cyan-50/50 rounded-lg border border-cyan-100/50">
                    <div className="text-2xl font-bold text-cyan-600 font-barlow-condensed">3w</div>
                    <div className="text-xs text-gray-600 font-barlow">Sprint Duration</div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <button
                    onClick={() => setShowBugModal(true)}
                    className="text-sm text-blue-600 hover:text-blue-700 underline font-barlow transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    View detailed bug tracker →
                  </button>
                </div>
              </details>
            </div>

            <div className="border-t border-gray-200/40 pt-8 text-center text-gray-600">
              <p>
                &copy; 2025 Rural Alberta Health Connect. All rights reserved.
              </p>
              <p className="mt-2 text-sm">
                Committed to improving healthcare access for rural Alberta
                communities.
              </p>
            </div>
          </div>
        </footer>

        {/* Bug Tracker Modal */}
        {showBugModal && (
          <button
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setShowBugModal(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShowBugModal(false);
              }
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              className="bg-gradient-to-br from-white/95 via-blue-50/90 to-cyan-50/90 backdrop-blur-md rounded-2xl shadow-xl max-w-5xl w-full max-h-[85vh] overflow-hidden border border-gray-200/50 animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setShowBugModal(false);
                }
              }}
            >
              {/* Modal Header */}
              <div className="relative bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-blue-600/10 px-6 py-5 border-b border-gray-200/50 flex justify-between items-center backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 animate-pulse"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 font-barlow-condensed tracking-wide">
                    Sprint 2 Bug Tracker
                  </h3>
                  <p className="text-sm text-gray-600 font-barlow mt-1">
                    Team of 2 • 3 weeks • 39 issues from Sprint 1 • Just started
                  </p>
                </div>
                <div className="relative z-10 flex items-center gap-3">
                  <a
                    href="/UserTestingSummary.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 hover:bg-white/80 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer"
                    title="View User Testing Summary PDF"
                  >
                    <svg className="h-5 w-5 text-red-600 group-hover:text-red-700 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                      <path d="M14 2v6h6"/>
                      <path d="M10 12h4v1h-4v-1zm0 2h4v1h-4v-1zm0 2h4v1h-4v-1z" fill="white"/>
                    </svg>
                    <span className="text-sm font-barlow text-gray-700 group-hover:text-gray-900 transition-colors">
                      Testing Report
                    </span>
                  </a>
                  <button
                    onClick={() => setShowBugModal(false)}
                    className="p-2.5 hover:bg-white/80 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                  >
                    <X className="h-5 w-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="overflow-y-auto max-h-[calc(85vh-100px)] p-6 scroll-smooth">
                {/* Bug List - Categorized */}
                <div className="space-y-6">
                  {Object.entries(sprintBugs).map(([category, bugs]) => (
                    <div key={category}>
                      <h4 className="text-base font-semibold text-gray-800 mb-3 pb-2 border-l-4 border-blue-500 pl-3 font-barlow-condensed tracking-wide">
                        {category} ({bugs.length})
                      </h4>
                      <div className="space-y-2.5">
                        {bugs.map((bug) => (
                          <div
                            key={bug.id}
                            onClick={() => setExpandedBugId(expandedBugId === bug.id ? null : bug.id)}
                            className={`group relative p-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out ${
                              expandedBugId === bug.id
                                ? "bg-gradient-to-br from-blue-50/95 to-cyan-50/90 border-l-4 border-blue-500 shadow-lg"
                                : "bg-white/80 backdrop-blur-sm border-l-2 border-transparent hover:bg-white/95 hover:border-l-blue-300 hover:shadow-md"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex items-center gap-3 flex-1 min-w-0">
                                <span className="text-xs font-mono text-gray-500 flex-shrink-0 font-barlow bg-gray-100/80 px-2 py-1 rounded-md">
                                  #{bug.id.toString().padStart(2, "0")}
                                </span>
                                <span className="text-sm font-barlow text-gray-900 font-medium">
                                  {bug.title}
                                </span>
                              </div>
                              <div className="flex items-center gap-2.5 flex-shrink-0">
                                <Badge
                                  className={`text-xs font-barlow font-medium px-3 py-1 ${
                                    bug.severity === "Critical"
                                      ? "bg-red-50 text-red-700 border-red-200"
                                      : bug.severity === "High"
                                      ? "bg-orange-50 text-orange-700 border-orange-200"
                                      : bug.severity === "Medium"
                                      ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                                      : "bg-green-50 text-green-700 border-green-200"
                                  }`}
                                >
                                  {bug.severity}
                                </Badge>
                                <ChevronRight
                                  className={`h-4 w-4 transition-all duration-300 ease-out ${
                                    expandedBugId === bug.id
                                      ? "rotate-90 text-blue-600"
                                      : "text-gray-400 group-hover:text-blue-500"
                                  }`}
                                />
                              </div>
                            </div>
                            {expandedBugId === bug.id && (
                              <div className="mt-4 pt-4 border-t border-blue-200/50">
                                <p className="text-sm text-gray-700 leading-relaxed font-barlow">
                                  {bug.description}
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Note */}
                <div className="mt-8 p-5 bg-gradient-to-r from-blue-50/90 via-cyan-50/80 to-blue-50/90 backdrop-blur-sm rounded-xl border border-blue-200/50 shadow-sm flex items-center gap-4 animate-pulse">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700 font-barlow leading-relaxed">
                    <span className="font-semibold text-blue-600">Sprint 2 in progress:</span> These 39 bugs were identified during Sprint 1 user testing. Over the next 3 weeks, were systematically addressing critical issues, performance bottlenecks, and UX improvements.
                  </p>
                </div>
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
