"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  Download,
  Shield,
  Smartphone,
  MapPin,
  Bell,
  User,
  Activity,
  Brain,
  Heart,
  AlertTriangle,
  Home,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function UserGuidePage() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: <Smartphone className="h-6 w-6" />,
      items: [
        {
          title: "What You'll Need",
          content: [
            "Device: iPhone (iOS 13.0+) or Android phone (5.0+)",
            "Permissions: Location and notifications",
            "Internet: For initial setup (offline features available after)",
          ],
        },
        {
          title: "Download & Install",
          content: [
            "Open App Store (iPhone) or Google Play (Android)",
            'Search for "Rural Alberta Health Connect"',
            "Tap Install/Get",
            "Open the app when installation completes",
          ],
        },
        {
          title: "Create Your Account",
          content: [
            "Step 1: Enter personal information (name, email, password)",
            "Step 2: Review and accept Terms & Privacy",
            "Step 3: Add additional details (phone, age, location)",
            "Step 4: Complete medical history",
            "Step 5: Add emergency contact",
          ],
        },
      ],
    },
    {
      id: "dashboard",
      title: "Your Dashboard",
      icon: <Home className="h-6 w-6" />,
      items: [
        {
          title: "Dashboard Overview",
          content: [
            "Health Status Overview - Current health status indicator",
            "Quick Actions - Tap to start AI Assessment or Daily Log",
            "Notifications - Health symptom reminders",
          ],
        },
        {
          title: "Navigation Bar",
          content: [
            "Dashboard - Your home screen",
            "AI Assessment - Start symptom check",
            "Tracker - View health history",
            "Emergency - Quick access to emergency features",
            "Profile - Settings & account",
          ],
        },
      ],
    },
    {
      id: "ai-assessment",
      title: "AI Health Assessment",
      icon: <Brain className="h-6 w-6" />,
      items: [
        {
          title: "How It Works",
          content: [
            "Step 1: Tap AI Assessment and Start New Assessment",
            "Step 2: Describe your symptoms in detail",
            "Step 3: Select duration and rate severity (1-10)",
            "Step 4: Review AI-generated insights and recommendations",
          ],
        },
        {
          title: "What You'll Receive",
          content: [
            "AI-generated health insights",
            "Severity classification",
            "Recommended actions",
            "When to seek medical attention",
            "Self-care suggestions",
          ],
        },
        {
          title: "Important Notes",
          content: [
            "⚠️ This is NOT a medical diagnosis",
            "Always consult healthcare professionals for serious concerns",
            "For emergencies, call 911 immediately",
            "Use this tool as guidance only",
          ],
        },
      ],
    },
    {
      id: "health-tracker",
      title: "Health Tracker",
      icon: <Activity className="h-6 w-6" />,
      items: [
        {
          title: "Adding a Health Entry",
          content: [
            "Go to Tracker in bottom navigation",
            "Tap Add Health Entry or + button",
            "Fill in date, time, description, severity, notes",
            "Add attachments (optional)",
            "Tap Save Entry",
          ],
        },
        {
          title: "Daily Log & History",
          content: [
            "Daily Log: View today's health activities",
            "History: View complete health history by date",
            "Search by date range",
            "Tap an entry to see full details",
          ],
        },
      ],
    },
    {
      id: "emergency",
      title: "Emergency Services",
      icon: <AlertTriangle className="h-6 w-6" />,
      items: [
        {
          title: "Emergency Features",
          content: [
            "📍 See your current location on map",
            "📞 Call emergency services (911)",
            "🏥 View nearby clinics and hospitals",
            "📲 Share location with emergency contacts",
            "📄 Access saved emergency information",
          ],
        },
        {
          title: "Offline Emergency Maps",
          content: [
            "Download maps for areas with poor cell service",
            "Profile → App Settings → Offline Maps",
            "Select your region and tap Download",
            "Requires WiFi for initial download",
            "Access maps even without internet",
          ],
        },
      ],
    },
    {
      id: "notifications",
      title: "Notifications & Reminders",
      icon: <Bell className="h-6 w-6" />,
      items: [
        {
          title: "Managing Notifications",
          content: [
            "Tap bell icon in bottom navigation",
            "View all notifications (unread and read)",
            "Mark as read or dismiss",
            "Profile → App Settings → Notifications to customize",
          ],
        },
        {
          title: "Setting Reminders",
          content: [
            "Profile → App Settings → Reminders",
            "Add new reminder with time and frequency",
            "Select days of week",
            "Save reminder",
          ],
        },
      ],
    },
    {
      id: "profile",
      title: "Profile & Settings",
      icon: <User className="h-6 w-6" />,
      items: [
        {
          title: "Profile Information",
          content: [
            "View/edit personal details (name, email, phone)",
            "Update medical history",
            "Manage emergency contacts",
            "Profile → Profile Information → Edit → Save Changes",
          ],
        },
        {
          title: "App Settings",
          content: [
            "Notifications preferences",
            "Location services",
            "Offline maps management",
            "Access via Profile → App Settings",
          ],
        },
      ],
    },
    {
      id: "offline",
      title: "Using RAHC Offline",
      icon: <MapPin className="h-6 w-6" />,
      items: [
        {
          title: "What Works Offline ✅",
          content: [
            "View existing health entries",
            "Add new health logs (syncs later)",
            "Access downloaded offline maps",
            "View emergency contact information",
            "See previous assessment results",
          ],
        },
        {
          title: "What Needs Internet ❌",
          content: [
            "New AI assessments",
            "Downloading offline maps",
            "Syncing data to cloud",
            "Sharing location or information",
            "Creating an account or resetting password",
          ],
        },
      ],
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting",
      icon: <Shield className="h-6 w-6" />,
      items: [
        {
          title: "Common Issues",
          content: [
            "Can't sign in? Check email/password, internet connection, try Forgot Password",
            "Not receiving notifications? Check device settings and app permissions",
            "Location not accurate? Enable location services, ensure GPS is on",
            "Data not syncing? Check internet, pull down on Dashboard to force sync",
            "App crashing? Update app, clear cache, restart device",
          ],
        },
        {
          title: "Forgot Password",
          content: [
            "Tap Forgot Password on sign-in screen",
            "Enter registered email address",
            "Check email for OTP (One-Time Password)",
            "Enter OTP in the app",
            "Create and confirm new password",
            "Tap Reset Password",
          ],
        },
      ],
    },
  ];

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const scrollToSection = (id) => {
    setExpandedSection(id);
    setIsMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/40 shadow-sm">
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
              <div>
                <h1 className="text-xl font-bold text-gray-900 font-barlow-condensed">
                  User Guide
                </h1>
                <p className="text-xs text-gray-500">Version 2.0</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:flex"
                onClick={() => (window.location.href = "/")}
              >
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
              <Button
                size="sm"
                className="hidden sm:flex bg-blue-600 hover:bg-blue-700"
                onClick={() => (window.location.href = "/download")}
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="sm:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="sm:hidden py-4 border-t border-gray-200/40">
              <Button
                variant="outline"
                size="sm"
                className="w-full mb-2"
                onClick={() => (window.location.href = "/")}
              >
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
              <Button
                size="sm"
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => (window.location.href = "/download")}
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          )}
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-500/10 text-blue-600 border-blue-200">
            Complete Documentation
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 font-barlow-condensed">
            Rural Alberta Health Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your comprehensive guide to monitoring health, getting AI-powered
            insights, and accessing emergency services—all from your phone.
          </p>
        </div>

        {/* Quick Features */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {[
            { icon: <Brain className="h-5 w-5" />, text: "AI Assessments" },
            { icon: <Activity className="h-5 w-5" />, text: "Health Tracking" },
            { icon: <AlertTriangle className="h-5 w-5" />, text: "Emergency Services" },
            { icon: <MapPin className="h-5 w-5" />, text: "Offline Maps" },
            { icon: <Bell className="h-5 w-5" />, text: "Reminders" },
            { icon: <Shield className="h-5 w-5" />, text: "Secure Storage" },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 hover:scale-105 transition-transform duration-300 text-center"
            >
              <div className="flex justify-center mb-2 text-blue-600">
                {feature.icon}
              </div>
              <p className="text-xs text-gray-700 font-semibold">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        {/* Table of Contents */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 border-blue-200/50">
          <CardHeader>
            <CardTitle className="text-2xl font-barlow-condensed">
              Table of Contents
            </CardTitle>
            <CardDescription>
              Click any section to jump directly to it
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-left border border-gray-200/50"
                >
                  <div className="text-blue-600">{section.icon}</div>
                  <span className="font-semibold text-gray-900 text-sm">
                    {section.title}
                  </span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Guide Sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <Card
              key={section.id}
              id={section.id}
              className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader
                className="cursor-pointer"
                onClick={() => toggleSection(section.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      {section.icon}
                    </div>
                    <CardTitle className="text-2xl font-barlow-condensed">
                      {section.title}
                    </CardTitle>
                  </div>
                  {expandedSection === section.id ? (
                    <ChevronUp className="h-6 w-6 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-500" />
                  )}
                </div>
              </CardHeader>
              {expandedSection === section.id && (
                <CardContent className="space-y-6">
                  {section.items.map((item, index) => (
                    <div key={index}>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 font-barlow-condensed">
                        {item.title}
                      </h4>
                      <ul className="space-y-2">
                        {item.content.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Important Disclaimer */}
        <Card className="mt-12 bg-gradient-to-r from-red-50/50 to-orange-50/50 border-red-200/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <CardTitle className="text-2xl text-red-900 font-barlow-condensed">
                Important Limitations
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-red-900 mb-2">
                  Medical Limitations ⚕️
                </h4>
                <ul className="space-y-1 ml-4">
                  <li>• Not a replacement for doctors</li>
                  <li>• AI provides guidance, not diagnosis</li>
                  <li>• Not for emergencies - call 911</li>
                  <li>• Always consult healthcare professionals</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-900 mb-2">
                  Geographic Coverage 🗺️
                </h4>
                <ul className="space-y-1 ml-4">
                  <li>• Designed for rural Alberta residents</li>
                  <li>• Clinic/hospital database covers Alberta only</li>
                  <li>• Offline maps available for Alberta regions only</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Reference */}
        <Card className="mt-8 bg-gradient-to-r from-green-50/50 to-blue-50/50 border-green-200/50">
          <CardHeader>
            <CardTitle className="text-2xl font-barlow-condensed">
              Quick Reference
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-gray-900">
                  Add Health Entry:
                </span>
                <span className="text-gray-600">Tracker → &quot;+&quot; button</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-gray-900">
                  Start AI Assessment:
                </span>
                <span className="text-gray-600">
                  AI Assessment → &quot;Start New Assessment&quot;
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-gray-900">
                  View Notifications:
                </span>
                <span className="text-gray-600">Bell icon in navigation</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-gray-900">
                  Change Settings:
                </span>
                <span className="text-gray-600">Profile → App Settings</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-gray-900">
                  Forgot Password:
                </span>
                <span className="text-gray-600">
                  Sign In → &quot;Forgot Password?&quot;
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-gray-900">
                  Offline Maps:
                </span>
                <span className="text-gray-600">Emergency → Offline Maps</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-barlow-condensed">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Download Rural Alberta Health Connect today and take control of your
            health journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              onClick={() => (window.location.href = "/download")}
            >
              <Download className="mr-2 h-5 w-5" />
              Download App
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3"
              onClick={() => (window.location.href = "/")}
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
