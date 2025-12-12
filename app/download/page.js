"use client";

import { useState } from "react";
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
  Smartphone,
  Download,
  Shield,
  CheckCircle,
  AlertTriangle,
  ArrowLeft,
  Apple,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function DownloadPage() {
  const [selectedPlatform, setSelectedPlatform] = useState("android");
  const appFeatures = [
    "AI Symptom Analysis",
    "Emergency Triage System",
    "Offline Functionality",
    "Health Tracking",
    "Local Facility Finder",
    "24/7 Health Guidance",
  ];
  const handleDownload = () => {
    const apkUrl =
      "https://drive.google.com/file/d/1zJ0CgN7swSO3dpYZ9kPFr4uTbONAWATi/view?usp=sharing";
    window.open(apkUrl, "_blank", "noopener,noreferrer");
  };

  const appInfo = {
    version: "3.0.0",
    size: "495 MB",
    requirements: "Android 8.0+",
    lastUpdated: "November 2025",
  };

  const iosInfo = {
    version: "2.0.0",
    platform: "TestFlight",
    requirements: "iOS 13.0+",
    lastUpdated: "November 2025",
  };

  const securityFeatures = [
    "End-to-end encrypted data transmission",
    "No personal data collection",
    "Local processing for privacy",
    "HIA & PIPEDA compliant",
  ];

  const installationSteps = [
    "Tap the download button below",
    "Open the downloaded APK file",
    "Allow installation from unknown sources if prompted",
    "Follow the installation instructions",
    "Launch the app and get started",
  ];

  const iosInstallationSteps = [
    {
      title: "Prerequisite: Accept Your Apple Team Invitation",
      description:
        'Look for an email from Apple with the subject line: "You have been invited..." This is a critical first step. Apple will not send the app invitation until this is done.',
      important: true,
    },
    {
      title: "Install TestFlight App",
      description:
        'Make sure you have the "TestFlight" app installed from the Apple App Store.',
    },
    {
      title: "Open the Invitation Email",
      description:
        'You will receive an official email from "TestFlight" with the subject line: "Yue Zhou has invited you to test Rural Alberta Health Connect." Open it and tap "View in TestFlight".',
    },
    {
      title: "Accept the Invitation",
      description:
        'TestFlight will open and show the app details. Tap "Accept".',
    },
    {
      title: "Install the App",
      description:
        'You will see "Rural Alberta Health Connect" in your list of apps. Tap "Install" or "Update".',
    },
    {
      title: "You're Ready to Test!",
      description: "The app is now installed on your phone and ready to use.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 font-barlow">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 font-semibold"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 font-barlow-condensed">
            Download App
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Get the Rural Alberta Health Connect app on your device
          </p>

          {/* Platform Selector */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={() => setSelectedPlatform("android")}
              variant={selectedPlatform === "android" ? "default" : "outline"}
              className={`px-8 py-6 text-lg ${
                selectedPlatform === "android"
                  ? "bg-blue-600 hover:bg-blue-700"
                  : ""
              }`}
            >
              <Smartphone className="mr-2 h-5 w-5" />
              Android
            </Button>
            <Button
              onClick={() => setSelectedPlatform("ios")}
              variant={selectedPlatform === "ios" ? "default" : "outline"}
              className={`px-8 py-6 text-lg ${
                selectedPlatform === "ios"
                  ? "bg-blue-600 hover:bg-blue-700"
                  : ""
              }`}
            >
              <Apple className="mr-2 h-5 w-5" />
              iOS (TestFlight)
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Download Card - Android */}
          {selectedPlatform === "android" && (
            <div className="lg:col-span-2">
              <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-600 rounded-lg text-white">
                      <Smartphone className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900 font-barlow-condensed">
                        Rural Alberta Health Connect
                      </CardTitle>
                      <CardDescription className="text-lg text-gray-600">
                        Android APK - AI-Enhanced Telemedicine Platform
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* App Info */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-blue-50 rounded-lg">
                    <div className="text-center">
                      <div className="font-semibold text-blue-600">
                        Version
                      </div>
                      <div className="text-sm text-gray-600">
                        {appInfo.version}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-blue-600">Size</div>
                      <div className="text-sm text-gray-600">
                        {appInfo.size}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-blue-600">Android</div>
                      <div className="text-sm text-gray-600">
                        {appInfo.requirements}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-blue-600">Updated</div>
                      <div className="text-sm text-gray-600">
                        {appInfo.lastUpdated}
                      </div>
                    </div>
                  </div>

                  {/* Security Warning */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">
                          Enable Unknown Sources
                        </h4>
                        <p className="text-yellow-700 text-sm">
                          To install this APK, you&apos;ll need to enable
                          &quot;Install from Unknown Sources&quot; in your
                          Android settings. This is safe for our verified
                          application.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Download Button */}
                  <Button
                    onClick={handleDownload}
                    className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    size="lg"
                  >
                    <Download className="mr-3 h-6 w-6" />
                    Download APK for Android ({appInfo.size})
                  </Button>

                  {/* Installation Steps */}
                  <div>
                    <h3 className="font-semibold mb-4 text-gray-800 text-lg">
                      Installation Steps:
                    </h3>
                    <ol className="space-y-3">
                      {installationSteps.map((step, index) => (
                        <li key={step} className="flex items-start space-x-3">
                          <Badge className="bg-blue-100 text-blue-700 flex-shrink-0 mt-0.5">
                            {index + 1}
                          </Badge>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Main Download Card - iOS */}
          {selectedPlatform === "ios" && (
            <div className="lg:col-span-2">
              <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-600 rounded-lg text-white">
                      <Apple className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900 font-barlow-condensed">
                        Rural Alberta Health Connect
                      </CardTitle>
                      <CardDescription className="text-lg text-gray-600">
                        iOS TestFlight - AI-Enhanced Telemedicine Platform
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* iOS Info */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-blue-50 rounded-lg">
                    <div className="text-center">
                      <div className="font-semibold text-blue-600">
                        Version
                      </div>
                      <div className="text-sm text-gray-600">
                        {iosInfo.version}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-blue-600">
                        Platform
                      </div>
                      <div className="text-sm text-gray-600">
                        {iosInfo.platform}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-blue-600">iOS</div>
                      <div className="text-sm text-gray-600">
                        {iosInfo.requirements}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-blue-600">Updated</div>
                      <div className="text-sm text-gray-600">
                        {iosInfo.lastUpdated}
                      </div>
                    </div>
                  </div>

                  {/* TestFlight Info */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">
                          Invitation Required
                        </h4>
                        <p className="text-blue-700 text-sm">
                          This is a TestFlight beta. You&apos;ll need to accept
                          your Apple Team invitation first, then wait for the
                          TestFlight invitation email from Yue Zhou.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Installation Steps */}
                  <div>
                    <h3 className="font-semibold mb-4 text-gray-800 text-lg">
                      How to Install via TestFlight:
                    </h3>
                    <ol className="space-y-4">
                      {iosInstallationSteps.map((step, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Badge
                            className={`${
                              step.important
                                ? "bg-red-100 text-red-700"
                                : "bg-blue-100 text-blue-700"
                            } flex-shrink-0 mt-0.5`}
                          >
                            {index + 1}
                          </Badge>
                          <div>
                            <div className="font-semibold text-gray-900 mb-1">
                              {step.title}
                            </div>
                            <p className="text-gray-600 text-sm">
                              {step.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Security Features */}
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-gray-900">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span>Security & Privacy</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {securityFeatures.map((feature) => (
                    <div key={feature} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* App Features */}
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50">
              <CardHeader>
                <CardTitle className="text-gray-900">App Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {appFeatures.map((feature) => {
                    return (
                      <div
                        key={feature}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50">
              <CardHeader>
                <CardTitle className="text-gray-900">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Having trouble with installation or have questions about the
                  app?
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    (window.location.href =
                      "mailto:ruralalbertahealthconnect@gmail.com")
                  }
                >
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
