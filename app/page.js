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
  AlertTriangle,
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

  const sprint2Completed = {
    "Authentication & Onboarding": [
      { id: 1, title: "Onboarding flow issues", severity: "High", status: "completed", description: "Fixed onboarding flow navigation and routing issues across multiple screens. Improved user experience during initial setup." },
      { id: 2, title: "Password validation", severity: "High", status: "completed", description: "Fixed password validation and handling. Added real-time password matching feedback with immediate visual confirmation." },
      { id: 3, title: "User profile creation timing", severity: "Critical", status: "completed", description: "Fixed async profile creation timing issues that caused null data. Removed unnecessary awaits and improved state management." },
      { id: 4, title: "Profile retrieval returning null", severity: "Critical", status: "completed", description: "Fixed getProfile query returning null instead of user data. Improved data fetching logic in Convex backend." },
      { id: 5, title: "Form data loss on navigation", severity: "High", status: "completed", description: "Added SignUpFormContext to persist form values when navigating to Terms/Privacy pages. No more data loss during signup." },
      { id: 6, title: "Personal info screen bugs", severity: "Medium", status: "completed", description: "Fixed multiple issues in personal info screen including consistency improvements and validation." },
      { id: 7, title: "Authentication navigation", severity: "High", status: "completed", description: "Updated navigation logic for authenticated users. Fixed routing and removed unnecessary delays." },
    ],
    "Phone Number Validation": [
      { id: 8, title: "Phone accepts invalid input", severity: "High", status: "completed", description: "Added comprehensive phone validation with strict 10-digit limit. Implemented (XXX) XXX-XXXX formatting with conditional parentheses." },
      { id: 9, title: "Cannot delete phone digits", severity: "Medium", status: "completed", description: "Fixed issue where first 3 digits couldn't be deleted. Made parentheses conditional based on input state." },
      { id: 10, title: "Phone text turns white", severity: "Critical", status: "completed", description: "Fixed text visibility bug where phone text turned white after validation. Added explicit color values." },
      { id: 11, title: "Phone formatting inconsistent", severity: "Low", status: "completed", description: "Implemented consistent phone formatting across emergency contact and profile sections." },
    ],
    "Address & Location": [
      { id: 12, title: "Address autocomplete with Mapbox", severity: "Enhancement", status: "completed", description: "Integrated Mapbox Geocoding API with real-time address suggestions, 500ms debounce, and auto-populated fields. Preserves full street addresses including house numbers." },
      { id: 13, title: "Address house numbers removed", severity: "High", status: "completed", description: "Fixed address extraction to preserve house numbers during autocomplete. Improved address parsing logic." },
      { id: 14, title: "Removed unused Google Maps", severity: "Low", status: "completed", description: "Switched from Google Maps to Mapbox. Cleaned up old Google Maps API keys and configuration." },
      { id: 15, title: "Region field redundancy", severity: "Medium", status: "completed", description: "Removed redundant region selector. Location now auto-generates from 'City, Province' format." },
    ],
    "Profile Section": [
      { id: 16, title: "Profile save issues", severity: "High", status: "completed", description: "Fixed profile page validation issues. Implemented section-specific validation for independent saves." },
      { id: 17, title: "Emergency contact validation", severity: "Medium", status: "completed", description: "Fixed emergency contact section with proper validation. Personal info can now save despite emergency errors." },
      { id: 18, title: "Cannot save profile sections", severity: "High", status: "completed", description: "Split validation into section-specific functions: validatePersonalInfo(), validateEmergencyContact(), validateMedicalInfo()." },
    ],
    "Tracker & Health Entry": [
      { id: 19, title: "Date handling issues", severity: "High", status: "completed", description: "Fixed date handling and timezone issues in tracker. Improved date picker reliability." },
      { id: 20, title: "Search functionality missing", severity: "Enhancement", status: "completed", description: "Added search functionality in daily log and history pages with real-time filtering." },
      { id: 21, title: "History page structure", severity: "Medium", status: "completed", description: "Restructured history page with improved layout and search capabilities." },
      { id: 22, title: "Header overlap on health entry", severity: "Medium", status: "completed", description: "Fixed header overlap and added custom modal for health entry screen." },
      { id: 23, title: "Bottom navigation positioning", severity: "Low", status: "completed", description: "Fixed bottom navigation positioning on tracker index and other screens." },
      { id: 24, title: "Photo upload limit", severity: "Enhancement", status: "completed", description: "Added 3-photo limit with validation and race condition protection. Buttons gray out at limit with (X/3) counter." },
    ],
    "AI Assessment": [
      { id: 25, title: "Multi-photo handling", severity: "High", status: "completed", description: "Fixed Gemini assessment to properly handle multiple photos. Improved AI assessment accuracy." },
      { id: 26, title: "Assessment result display", severity: "Medium", status: "completed", description: "Fixed result display and formatting issues. Improved readability of AI recommendations." },
      { id: 27, title: "Assessment header and navigation", severity: "Low", status: "completed", description: "Updated assessment header and fixed bottom navigation issues." },
      { id: 28, title: "No photo limit for AI", severity: "High", status: "completed", description: "Added 3-photo limit with validation for AI assessment. Prevents upload abuse with clear UX feedback." },
    ],
    "UI/UX & Layout": [
      { id: 29, title: "Header gap removal", severity: "Low", status: "completed", description: "Removed unwanted gap in header components across all screens." },
      { id: 30, title: "Curved header implementation", severity: "Enhancement", status: "completed", description: "Applied consistent curved header and safe area view for all pages. Fixed header to not scroll with content." },
      { id: 31, title: "Notch overlap issue", severity: "Medium", status: "completed", description: "Fixed header overlap with device notch on modern phones. Proper safe area handling." },
      { id: 32, title: "Dashboard padding", severity: "Low", status: "completed", description: "Fixed dashboard padding and margin issues. Improved bottom navigation spacing." },
      { id: 33, title: "Vision test fixes", severity: "Medium", status: "completed", description: "Fixed vision test screen issues and improved user experience." },
      { id: 34, title: "Camera permissions", severity: "High", status: "completed", description: "Fixed camera permissions and functionality. Multiple camera-related improvements and reviews." },
      { id: 35, title: "Custom modal design", severity: "Enhancement", status: "completed", description: "Implemented consistent white elevated modal design system with elevation: 8, borderRadius: 16. Replaces all gray Alert.alert modals." },
    ],
    "Location & Emergency Services": [
      { id: 36, title: "Location permission prompt", severity: "Low", status: "completed", description: "Fixed location permission flow. Added proper permission request dialog for re-enabling location services." },
      { id: 37, title: "Clinic distance calculation", severity: "Medium", status: "completed", description: "Fixed inaccurate distance calculation. Verified geolocation API integration and improved distance formula implementation." },
      { id: 38, title: "Clinic search results", severity: "Medium", status: "completed", description: "Expanded search radius and adjusted API query parameters to show multiple clinic results instead of just one." },
      { id: 39, title: "Medical facility filtering", severity: "High", status: "completed", description: "Implemented proper filtering for medical facility types. Now correctly excludes non-medical facilities from clinic searches." },
    ],
    "Performance & Loading": [
      { id: 40, title: "Entry details loading", severity: "Medium", status: "completed", description: "Optimized entry details data retrieval and rendering. Added loading skeleton and implemented caching for recently viewed entries." },
      { id: 41, title: "History tab freeze", severity: "Medium", status: "completed", description: "Fixed History tab freezing issue. Implemented pagination and lazy loading for large datasets." },
      { id: 42, title: "History/Daily Log data load", severity: "Medium", status: "completed", description: "Optimized database queries. Implemented progressive loading with placeholder content and loading indicators." },
      { id: 43, title: "Dashboard loading", severity: "Medium", status: "completed", description: "Optimized initial dashboard load. Reduced async operations and improved data fetching efficiency." },
      { id: 44, title: "Photo upload performance", severity: "Medium", status: "completed", description: "Implemented asynchronous image upload with progress indicator. Added image compression before upload." },
      { id: 45, title: "Navigation memory leaks", severity: "Medium", status: "completed", description: "Investigated and fixed memory leaks. Implemented proper cleanup after AI operations." },
      { id: 46, title: "Navigation stack management", severity: "High", status: "completed", description: "Implemented proper navigation stack management. Clear unused screens and optimized memory usage." },
      { id: 47, title: "Daily Log with photos", severity: "Medium", status: "completed", description: "Implemented image thumbnails and lazy loading. Optimized handling of multiple photos per entry." },
      { id: 48, title: "Vision model loading", severity: "High", status: "completed", description: "Optimized ML model initialization. Implemented model compression and progressive loading strategy." },
    ],
    "Data Management": [
      { id: 49, title: "Manual log entry rendering", severity: "High", status: "completed", description: "Fixed black screen issue during manual log entry. Resolved UI thread blocking and state management problems." },
      { id: 50, title: "Photo retrieval", severity: "High", status: "completed", description: "Fixed photo retrieval pipeline. Verified file paths, permissions, and cache management." },
      { id: 51, title: "History display sync", severity: "High", status: "completed", description: "Fixed data synchronization between log creation and history display. Improved state updates." },
    ],
    "Navigation & UX": [
      { id: 52, title: "Tab transitions", severity: "Low", status: "completed", description: "Fixed visual lag/ghosting effects during tab transitions. Optimized animation complexity for smoother transitions." },
      { id: 53, title: "AI results navigation", severity: "Medium", status: "completed", description: "Redesigned navigation stack. Improved back button behavior for better UX flow from AI results." },
    ],
  };

  const sprint2Enhancements = [
    { title: "Mapbox Address Autocomplete", description: "Real-time Canadian address suggestions with auto-populated fields and house number preservation", impact: "Major data quality improvement" },
    { title: "Phone Number Validation System", description: "Smart (XXX) XXX-XXXX formatting with strict 10-digit validation and real-time feedback", impact: "Better data consistency" },
    { title: "Custom Modal Design System", description: "Professional white elevated modals with consistent styling across the entire app", impact: "Cohesive UI experience" },
    { title: "Photo Upload Validation", description: "3-photo limit for AI Assess and Health Entry with visual feedback and counter", impact: "Prevents abuse, clear UX" },
    { title: "Section-Specific Profile Validation", description: "Independent validation per section allowing flexible saves", impact: "Improved flexibility" },
    { title: "Search in Tracker", description: "Real-time search functionality in daily log and history", impact: "Better data accessibility" },
    { title: "SignUp Form Context", description: "Persists form data during Terms/Privacy navigation", impact: "Improved signup flow" },
    { title: "Multi-Photo AI Assessment", description: "Fixed Gemini API to properly handle multiple photos", impact: "More accurate assessments" },
  ];

  // Sprint 3 - Completed Sprint (Nov 1-28, 2025)
  const sprint3Bugs = {
    "Critical Priority - All Fixed ✅": [
      { id: 1, title: "Emergency call cannot be cancelled quickly", reporter: "Joy Wong, Yue", testCase: "TC-021", status: "fixed", description: "✅ FIXED: Added confirmation modal before 911 call with prominent Cancel button. User can now cancel within seconds before call connects.", priority: "P1" },
      { id: 5, title: "New entries not saved offline", reporter: "Sean Bauzon", testCase: "TC-028", status: "fixed", description: "✅ FIXED: Offline entries saved to WatermelonDB and auto-sync when online. Optimized sync delay from 500ms to 200ms (60% faster).", priority: "P1" },
    ],
    "High Priority - All Fixed ✅": [
      { id: 2, title: "Profile information not displaying consistently", reporter: "Sean Bauzon", testCase: "TC-004", status: "fixed", description: "✅ FIXED: Migrated profile data from WatermelonDB to AsyncStorage. Fixed schema errors causing data loss during onboarding and edits.", priority: "P2" },
      { id: 3, title: "Notification reminders not functioning", reporter: "Sean Bauzon, Joy Wong", testCase: "TC-024", status: "open", description: "⏳ Open: Reminders save successfully but notifications never trigger at scheduled time", priority: "P2" },
      { id: 4, title: "Location services toggle malfunction", reporter: "Sean Bauzon", testCase: "TC-026", status: "fixed", description: "✅ FIXED: Refactored useEffect control flow, added AsyncStorage cache updates for instant sync, and offline handling. Toggle now works correctly from both screens.", priority: "P2" },
    ],
    "Medium/Low Priority - All Fixed ✅": [
      { id: 6, title: "Date picker malfunction in Health Tracker", reporter: "Yue, Sean Bauzon", testCase: "TC-018", status: "fixed", description: "✅ FIXED: Wrapped iOS pickers in Modal with transparent backdrop. Added Done button and tap-outside dismissal. Android native picker preserved.", priority: "P3" },
      { id: 7, title: "Offline indicator only shows on dashboard", reporter: "Sean Bauzon", testCase: "TC-027", status: "fixed", description: "✅ FIXED: Implemented global OfflineBanner across all tab screens with dynamic safe area handling. Updated 25+ SafeAreaView instances.", priority: "P4" },
      { id: 8, title: "Dashboard entry count not updating immediately", reporter: "Developer Testing", testCase: "Related to TC-028", status: "fixed", description: "✅ FIXED: Enhanced merge logic to intelligently choose data source with more entries. Entry count updates instantly when coming online.", priority: "P3" },
      { id: 9, title: "Add Health Entry UI issues", reporter: "User Testing", testCase: "TC-016", status: "fixed", description: "✅ FIXED: Reduced paddingBottom for visible buttons. Added offline photo preview with cloud-offline badge and combined photo count display.", priority: "P3" },
    ],
    "Additional Issues - 10 Fixed ✅ | 3 Open": [
      { title: "Invalid email validation", reporter: "Sean Bauzon", testCase: "TC-001", status: "fixed", description: "✅ FIXED: Replaced default validation with stricter regex requiring minimum 2-character domain extension. Applied across signup, signin, and forgot password screens." },
      { title: "Offline maps unclear access", reporter: "Joy Wong, Yue", testCase: "TC-022", status: "closed", description: "✅ CLOSED: Working as designed - offline maps auto-integrate into Emergency screen. Clear messaging in download modal footer." },
      { title: "Notifications list navigation", reporter: "Joy Wong, Sean Bauzon", testCase: "TC-023", status: "closed", description: "✅ CLOSED: Added to FAQ - notifications are generated by Reminders, accessed via notification bell in header." },
      { title: "Image upload inconsistent feedback", reporter: "Sean Bauzon", testCase: "TC-016", status: "fixed", description: "✅ FIXED: Added uploading state with 'Uploading photo...' message. Disabled Save button during upload. Selected photos preview shows both online and offline photos." },
      { title: "Email verification missing", reporter: "Joy Wong, Yue", testCase: "TC-001", status: "closed", description: "✅ CLOSED: Working as designed - intentional flexibility with email input. Validation can be added if required in future." },
      { title: "iOS password autofill not working", reporter: "Joy Wong", testCase: "TC-004", status: "fixed", description: "✅ FIXED: Added iOS-specific textContentType and autoComplete props to all auth form fields. iOS Keychain and password managers now work correctly." },
      { title: "Keyboard dismissal issue", reporter: "Sean Bauzon", testCase: "TC-011", status: "fixed", description: "✅ FIXED: Wrapped AI Assessment screens with Pressable for tap-outside dismissal. Added keyboardDismissMode and returnKeyType='done' to TextInputs." },
      { title: "iOS performance slower than Android", reporter: "Joy Wong", testCase: "TC-019", status: "open", description: "⏳ Open (For Testing): Loading clinic data 3-4 seconds slower on iOS" },
      { title: "Clinic list not sorted by proximity", reporter: "Joy Wong", testCase: "TC-020", status: "open", description: "⏳ Open: Same list appears regardless of location, not showing closest first" },
      { title: "Profile edit validation missing", reporter: "Sean Bauzon", testCase: "TC-026", status: "open", description: "⏳ Open: Allows saving invalid data without error messages" },
      { title: "Edit and Delete feature for Manual Entry", reporter: "Developer Testing", testCase: "Manual Entry CRUD", status: "fixed", description: "✅ FIXED: Enhanced sync pipeline to process tombstones and propagate deletions to server. Added smart edit detection to prevent duplicates. Offline edits now sync correctly." },
      { title: "Photo capture option removed", reporter: "Product/UX", testCase: "N/A", status: "completed", description: "✅ COMPLETED: Removed camera capture flow from Add Health Entry and AI Assessment. Gallery-only uploads reduce permission friction and improve reliability." },
      { title: "Medical Info keyboard visibility", reporter: "Developer Testing", testCase: "N/A", status: "completed", description: "✅ COMPLETED: Wrapped form in KeyboardAvoidingView with calibrated offset. Medical fields remain visible while entering long text." },
    ],
  };

  // Sprint 3 Enhancements
  const sprint3Enhancements = [
    { title: "Help & Support Feature", description: "Comprehensive FAQ, User Guide, and Feedback/Report Issue sections added to Profile tab", impact: "Improved user self-service and engagement" },
    { title: "Offline-First Profile Management", description: "Migrated from WatermelonDB to AsyncStorage for reliable profile data persistence", impact: "Fixed critical data loss issues" },
    { title: "Emergency Call Safety Modal", description: "Added confirmation modal before 911 call with clear warning and Cancel button", impact: "Prevents accidental emergency calls" },
    { title: "Global Offline Banner", description: "Consistent offline indicator across all tab screens with dynamic safe area handling", impact: "Better user awareness of connectivity" },
    { title: "iOS Date Picker Enhancement", description: "Modal wrapper with Done button and tap-outside dismissal for better UX", impact: "Improved date selection experience" },
    { title: "Photo Capture Simplification", description: "Removed camera capture, gallery-only uploads for better reliability", impact: "Fewer permission prompts, consistent behavior" },
    { title: "Smart Offline Sync", description: "Optimized sync delays (60% faster) and intelligent merge logic for instant updates", impact: "Seamless offline-to-online transitions" },
    { title: "Edit/Delete CRUD Operations", description: "Complete offline edit and delete functionality with tombstone processing", impact: "Full CRUD support in offline mode" },
  ];

  // Sprint 4 - Current Sprint (Nov 29 - Dec 12, 2025)
  const sprint4Bugs = {
    "Critical Priority (P1) - iOS Platform Issues": [
      { id: "D-001", title: "Online Edit Health Entry Fails", platform: "iOS", testCase: "TC-019", iosPassRate: "0%", androidPassRate: "100%", description: "CRITICAL: 'Failed to save entry online' error on all iOS devices. Core CRUD functionality broken. Android works perfectly.", priority: "P1", status: "open" },
      { id: "D-002", title: "Online Delete Health Entry Fails", platform: "iOS", testCase: "TC-020", iosPassRate: "13%", androidPassRate: "100%", description: "CRITICAL: 'Failed to delete entry from server' error on most iOS devices. Core CRUD functionality broken. Only 1 out of 8 iOS testers passed.", priority: "P1", status: "open" },
      { id: "D-003", title: "Offline Edit Creates Duplicate Entries", platform: "iOS", testCase: "TC-021", iosPassRate: "50%", androidPassRate: "100%", description: "CRITICAL: Data corruption - offline edits create duplicate entries instead of updating existing ones on iOS. Sync conflict issues.", priority: "P1", status: "open" },
      { id: "D-004", title: "AI Assessment Not Saved to History", platform: "iOS", testCase: "TC-011", iosPassRate: "50%", androidPassRate: "100%", description: "CRITICAL: Users cannot access assessment history. Assessments complete but don't save to history on iOS.", priority: "P1", status: "open" },
    ],
    "High Priority (P2) - iOS Platform Issues": [
      { id: "D-005", title: "Duplicate Email Registration Overwrites Account", platform: "iOS", testCase: "N/A", iosPassRate: "25%", androidPassRate: "100%", description: "Security concern & data loss - registering with existing email overwrites previous account data on iOS.", priority: "P2", status: "open" },
      { id: "D-006", title: "Notification System Non-Functional", platform: "iOS", testCase: "TC-029", iosPassRate: "38%", androidPassRate: "100%", description: "Notifications do not appear for most iOS users. Major feature broken.", priority: "P2", status: "open" },
      { id: "D-007", title: "Assessment History Not Refreshing", platform: "iOS", testCase: "TC-014", iosPassRate: "63%", androidPassRate: "100%", description: "History only refreshes after a new assessment is submitted. Stale data displayed.", priority: "P2", status: "open" },
      { id: "D-008", title: "Add Reminder Button Missing", platform: "iOS", testCase: "TC-030", iosPassRate: "50%", androidPassRate: "100%", description: "'Add Reminder' button is missing for some iOS users. UI/state management issue.", priority: "P2", status: "open" },
    ],
  };

  // Sprint 4 Test Results
  const sprint4TestResults = {
    ios: {
      totalTested: 245,
      passed: 187,
      failed: 32,
      notRun: 26,
      passRate: "76%",
      devices: ["iPhone 15", "iPhone 17 Pro", "iPhone 16", "iPhone 15 Pro Max", "iPhone XR"],
      status: "Not Release Ready - Critical Defects"
    },
    android: {
      totalTested: 190,
      passed: 157,
      failed: 25,
      notRun: 12,
      passRate: "86%",
      devices: ["Samsung Galaxy A52", "Samsung S25", "Pixel 9 Pro", "Samsung S24"],
      status: "Release Ready - Stable"
    }
  };

  const sprintBugs = sprint4Bugs;

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
                {["services", "about", "team", "guide", "progress", "contact"].map((section) => (
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
                {["services", "about", "team", "guide", "progress", "contact"].map((section) => (
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

        {/* User Guide Section */}
        <section
          id="guide"
          className="py-20 bg-gradient-to-r from-cyan-50/50 via-blue-50/40 to-purple-50/50 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-purple-500/10 text-purple-600 border-purple-200 backdrop-blur-sm font-barlow font-semibold tracking-wide">
                Documentation
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-gray-900 font-barlow-condensed">
                User Guide
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty font-barlow">
                Complete documentation to help you get started and make the most of Rural Alberta Health Connect.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Getting Started Card */}
              <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-white">
                      <ChevronRight className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl text-balance text-gray-900 font-barlow-condensed">
                      Getting Started
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-6 text-pretty">
                    Learn how to download, install, and set up the app for first-time use. Complete walkthrough of registration, profile setup, and initial configuration.
                  </CardDescription>
                  <ul className="space-y-3">
                    {[
                      "Download & Installation",
                      "Account Registration",
                      "Profile Setup",
                      "Permission Configuration",
                      "Emergency Contacts",
                    ].map((item) => (
                      <li key={item} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700 font-barlow">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Features Guide Card */}
              <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white">
                      <Brain className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl text-balance text-gray-900 font-barlow-condensed">
                      Feature Guides
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-6 text-pretty">
                    Detailed guides for each feature including AI assessment, health tracking, emergency services, and vision testing.
                  </CardDescription>
                  <ul className="space-y-3">
                    {[
                      "AI Symptom Assessment",
                      "Daily Health Logging",
                      "Emergency Services Locator",
                      "Vision Testing",
                      "Health History Tracking",
                    ].map((item) => (
                      <li key={item} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700 font-barlow">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-50/70 via-purple-50/60 to-cyan-50/70 rounded-2xl p-8 border border-blue-200/30 shadow-sm text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-barlow-condensed">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6 font-barlow max-w-2xl mx-auto">
                Access the complete user guide with step-by-step instructions, screenshots, and helpful tips for every feature.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold tracking-wide font-barlow"
                  onClick={() => window.location.href = '/user-guide'}
                >
                  <Database className="mr-2 h-5 w-5" />
                  View Full User Guide
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg font-semibold tracking-wide font-barlow"
                  onClick={() => (globalThis.location.href = "../download")}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download App
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Development Progress Section */}
        <section
          id="progress"
          className="py-20 bg-gradient-to-br from-white/70 via-orange-50/40 to-blue-50/40 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-red-500/10 text-red-600 border-red-200 backdrop-blur-sm font-barlow font-semibold tracking-wide">
                Sprint 4 Critical - iOS Platform Issues 🚨
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-gray-900 font-barlow-condensed">
                Development Progress
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty font-barlow">
                Sprint 4 End-to-End Testing Revealed Critical iOS Platform Disparities. 
                Android: 86% pass rate, release-ready. iOS: 76% pass rate, critical CRUD failures.
              </p>
            </div>

            {/* Sprint Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
              <div className="text-center p-6 bg-green-50/50 rounded-xl border border-green-200/50">
                <div className="text-lg font-bold text-green-600 font-barlow-condensed">Sprint 1 ✅</div>
                <div className="text-xs text-gray-600 font-barlow mt-2">Sep 20 - Oct 10</div>
                <div className="text-xs text-gray-500 mt-1">Foundation Complete</div>
              </div>
              <div className="text-center p-6 bg-green-50/50 rounded-xl border border-green-200/50">
                <div className="text-lg font-bold text-green-600 font-barlow-condensed">Sprint 2 ✅</div>
                <div className="text-xs text-gray-600 font-barlow mt-2">Oct 11 - Oct 31</div>
                <div className="text-xs text-gray-500 mt-1">52 Bugs Fixed</div>
              </div>
              <div className="text-center p-6 bg-green-50/50 rounded-xl border border-green-200/50">
                <div className="text-lg font-bold text-green-600 font-barlow-condensed">Sprint 3 ✅</div>
                <div className="text-xs text-gray-600 font-barlow mt-2">Nov 1 - Nov 28</div>
                <div className="text-xs text-gray-500 mt-1">15 Bugs + 8 Features</div>
              </div>
              <div className="text-center p-6 bg-red-50/70 rounded-xl border border-red-200/50 ring-2 ring-red-300/50 hover:scale-105 transition-transform duration-300">
                <div className="text-lg font-bold text-red-600 font-barlow-condensed">Sprint 4 🚨</div>
                <div className="text-xs text-gray-600 font-barlow mt-2">Nov 29 - Dec 12</div>
                <div className="text-xs text-red-600 font-semibold mt-1">Critical iOS Issues</div>
              </div>
            </div>

            {/* Sprint 4 Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              <div className="text-center p-6 bg-red-50/50 rounded-xl border border-red-200/50 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-red-600 font-barlow-condensed">4</div>
                <div className="text-sm text-gray-600 font-barlow mt-2">Critical (P1) iOS</div>
              </div>
              <div className="text-center p-6 bg-orange-50/50 rounded-xl border border-orange-200/50 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 font-barlow-condensed">4</div>
                <div className="text-sm text-gray-600 font-barlow mt-2">High (P2) iOS</div>
              </div>
              <div className="text-center p-6 bg-green-50/50 rounded-xl border border-green-200/50 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-green-600 font-barlow-condensed">86%</div>
                <div className="text-sm text-gray-600 font-barlow mt-2">Android Pass Rate ✅</div>
              </div>
              <div className="text-center p-6 bg-yellow-50/50 rounded-xl border border-yellow-200/50 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-yellow-600 font-barlow-condensed">76%</div>
                <div className="text-sm text-gray-600 font-barlow mt-2">iOS Pass Rate ⚠️</div>
              </div>
            </div>

            {/* Sprint 4 Critical Issues */}
            <div className="bg-gradient-to-r from-red-50/70 via-orange-50/60 to-yellow-50/70 rounded-2xl p-8 border border-red-200/30 shadow-sm mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-barlow-condensed text-center">Sprint 4 Critical iOS Platform Issues 🚨</h3>
              <div className="mb-6 p-4 bg-white/70 rounded-xl border border-red-100/50">
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0" />
                  <h4 className="font-bold text-red-900 font-barlow-condensed">Platform Disparity Analysis</h4>
                </div>
                <p className="text-sm text-gray-700 font-barlow mb-2"><strong>Android:</strong> 86% pass rate - Stable, Release Ready ✅</p>
                <p className="text-sm text-gray-700 font-barlow"><strong>iOS:</strong> 76% pass rate - Critical CRUD failures, Not Release Ready 🚫</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white/70 rounded-xl p-4 border border-red-100/50 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <h4 className="font-semibold text-gray-900 font-barlow-condensed">Online Edit Fails (0%)</h4>
                  </div>
                  <p className="text-sm text-gray-600 font-barlow">ALL iOS devices fail to save edits online</p>
                </div>
                <div className="bg-white/70 rounded-xl p-4 border border-red-100/50 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <h4 className="font-semibold text-gray-900 font-barlow-condensed">Online Delete Fails (13%)</h4>
                  </div>
                  <p className="text-sm text-gray-600 font-barlow">87% of iOS tests fail to delete from server</p>
                </div>
                <div className="bg-white/70 rounded-xl p-4 border border-red-100/50 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <h4 className="font-semibold text-gray-900 font-barlow-condensed">Duplicate Entries (50%)</h4>
                  </div>
                  <p className="text-sm text-gray-600 font-barlow">Offline edits create duplicates, data corruption</p>
                </div>
                <div className="bg-white/70 rounded-xl p-4 border border-orange-100/50 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <h4 className="font-semibold text-gray-900 font-barlow-condensed">AI History Lost (50%)</h4>
                  </div>
                  <p className="text-sm text-gray-600 font-barlow">Assessments don&apos;t save to history on iOS</p>
                </div>
                <div className="bg-white/70 rounded-xl p-4 border border-orange-100/50 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <h4 className="font-semibold text-gray-900 font-barlow-condensed">Notifications Broken (38%)</h4>
                  </div>
                  <p className="text-sm text-gray-600 font-barlow">Most iOS users don&apos;t receive notifications</p>
                </div>
                <div className="bg-white/70 rounded-xl p-4 border border-orange-100/50 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <h4 className="font-semibold text-gray-900 font-barlow-condensed">Account Overwrite (25%)</h4>
                  </div>
                  <p className="text-sm text-gray-600 font-barlow">Duplicate email registration causes data loss</p>
                </div>
              </div>
            </div>

            {/* Sprint 2 Highlights (Collapsed Summary) */}
            <div className="bg-gradient-to-r from-green-50/50 via-blue-50/40 to-cyan-50/50 rounded-2xl p-6 border border-green-200/20 shadow-sm mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-barlow-condensed text-center">Sprint 2 Achievements ✅</h3>
              <p className="text-center text-gray-600 text-sm font-barlow mb-4">
                52 bugs fixed • 8 new features • 1 week sprint (Oct 11-31, 2025)
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white/60 rounded-lg p-3 border border-green-100/50 text-center">
                  <p className="text-xs text-gray-700 font-barlow">Mapbox Integration</p>
                </div>
                <div className="bg-white/60 rounded-lg p-3 border border-blue-100/50 text-center">
                  <p className="text-xs text-gray-700 font-barlow">Phone Validation</p>
                </div>
                <div className="bg-white/60 rounded-lg p-3 border border-cyan-100/50 text-center">
                  <p className="text-xs text-gray-700 font-barlow">Custom Modals</p>
                </div>
                <div className="bg-white/60 rounded-lg p-3 border border-purple-100/50 text-center">
                  <p className="text-xs text-gray-700 font-barlow">Photo Limits</p>
                </div>
              </div>
            </div>

            {/* View Details Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold tracking-wide font-barlow"
                onClick={() => setShowBugModal(true)}
              >
                <AlertTriangle className="mr-2 h-5 w-5" />
                View Sprint 4 Testing Report
              </Button>
              <p className="mt-4 text-sm text-gray-600 font-barlow">
                49 test cases • 8 critical iOS bugs • Platform disparity analysis • Nov 24-27, 2025
              </p>
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
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setShowBugModal(false)}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setShowBugModal(false);
              }
            }}
            role="presentation"
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
              <div className="relative bg-gradient-to-r from-red-600/10 via-orange-500/10 to-red-600/10 px-6 py-5 border-b border-gray-200/50 flex justify-between items-center backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-orange-500/5 animate-pulse"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 font-barlow-condensed tracking-wide">
                    Sprint 4 Testing Report 🚨
                  </h3>
                  <p className="text-sm text-gray-600 font-barlow mt-1">
                    End-to-End Testing • 49 Test Cases • 8 Critical iOS Bugs • November 24-27, 2025
                  </p>
                </div>
                <div className="relative z-10 flex items-center gap-3">
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
                {/* Sprint 4 Testing Status */}
                <div className="mb-8 p-5 bg-gradient-to-r from-red-50/90 via-orange-50/80 to-yellow-50/90 backdrop-blur-sm rounded-xl border border-red-200/50 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 font-barlow-condensed">Sprint 4 End-to-End Testing - Platform Disparity 🚨</h4>
                      <p className="text-sm text-gray-600 font-barlow">49 test cases • iOS: 76% pass rate (not ready) • Android: 86% pass rate (ready) • November 24-27, 2025</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="bg-white/70 rounded-lg p-3 border border-red-100">
                      <div className="text-sm font-semibold text-red-700 font-barlow-condensed mb-1">🚫 iOS - Not Release Ready</div>
                      <div className="text-2xl font-bold text-red-600 font-barlow-condensed">76%</div>
                      <div className="text-xs text-gray-600 font-barlow">187 passed / 32 failed / 26 not run</div>
                      <div className="text-xs text-red-600 font-barlow mt-1">4 Critical + 4 High Priority Bugs</div>
                    </div>
                    <div className="bg-white/70 rounded-lg p-3 border border-green-100">
                      <div className="text-sm font-semibold text-green-700 font-barlow-condensed mb-1">✅ Android - Release Ready</div>
                      <div className="text-2xl font-bold text-green-600 font-barlow-condensed">86%</div>
                      <div className="text-xs text-gray-600 font-barlow">157 passed / 25 failed / 12 not run</div>
                      <div className="text-xs text-green-600 font-barlow mt-1">Stable, No Critical Issues</div>
                    </div>
                  </div>
                </div>

                {/* Sprint 4 Critical Bugs */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-red-700 mb-4 font-barlow-condensed flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Sprint 4 Critical iOS Platform Issues ({Object.values(sprintBugs).reduce((sum, bugs) => sum + bugs.length, 0)})
                  </h3>
                  <div className="space-y-6">
                    {Object.entries(sprintBugs).map(([category, bugs]) => (
                      <div key={category}>
                        <h4 className="text-base font-semibold text-gray-800 mb-3 pb-2 border-l-4 border-orange-500 pl-3 font-barlow-condensed tracking-wide">
                          {category} ({bugs.length})
                        </h4>
                        <div className="space-y-2.5">
                          {bugs.map((bug, index) => (
                            <div
                              key={bug.id || index}
                              onClick={() => setExpandedBugId(expandedBugId === `${category}-${index}` ? null : `${category}-${index}`)}
                              className={`group relative p-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out ${
                                expandedBugId === `${category}-${index}`
                                  ? bug.status === "fixed" || bug.status === "completed" 
                                    ? "bg-gradient-to-br from-green-50/95 to-blue-50/90 border-l-4 border-green-500 shadow-lg"
                                    : bug.status === "closed"
                                    ? "bg-gradient-to-br from-blue-50/95 to-cyan-50/90 border-l-4 border-blue-500 shadow-lg"
                                    : "bg-gradient-to-br from-orange-50/95 to-yellow-50/90 border-l-4 border-orange-500 shadow-lg"
                                  : "bg-white/80 backdrop-blur-sm border-l-2 border-transparent hover:bg-white/95 hover:border-l-green-300 hover:shadow-md"
                              }`}
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex items-start gap-3 flex-1 min-w-0">
                                  {bug.status === "fixed" || bug.status === "completed" ? (
                                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  ) : bug.status === "closed" ? (
                                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                  ) : bug.status === "open" ? (
                                    <Activity className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                                  ) : category.includes("Critical") ? (
                                    <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                                  ) : category.includes("High") ? (
                                    <AlertTriangle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                                  ) : (
                                    <Activity className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                  )}
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap mb-1">
                                      {bug.id && (
                                        <span className="text-xs font-mono text-gray-500 flex-shrink-0 font-barlow bg-gray-100/80 px-2 py-1 rounded-md">
                                          #{bug.id.toString().padStart(2, "0")}
                                        </span>
                                      )}
                                      {bug.status && (
                                        <Badge className={`text-xs font-barlow font-medium px-2 py-0.5 ${
                                          bug.status === "fixed" || bug.status === "completed" ? "bg-green-50 text-green-700 border-green-200" :
                                          bug.status === "closed" ? "bg-blue-50 text-blue-700 border-blue-200" :
                                          bug.status === "open" ? "bg-orange-50 text-orange-700 border-orange-200" :
                                          ""
                                        }`}>
                                          {bug.status === "fixed" ? "Fixed ✅" : 
                                           bug.status === "completed" ? "Completed ✅" :
                                           bug.status === "closed" ? "Closed" :
                                           bug.status === "open" ? "Open" : ""}
                                        </Badge>
                                      )}
                                      {bug.priority && (
                                        <Badge className={`text-xs font-barlow font-medium px-2 py-0.5 ${
                                          bug.priority === "P1" ? "bg-red-50 text-red-700 border-red-200" :
                                          bug.priority === "P2" ? "bg-orange-50 text-orange-700 border-orange-200" :
                                          "bg-yellow-50 text-yellow-700 border-yellow-200"
                                        }`}>
                                          {bug.priority}
                                        </Badge>
                                      )}
                                      {bug.testCase && (
                                        <span className="text-xs text-gray-500 font-barlow">{bug.testCase}</span>
                                      )}
                                    </div>
                                    <span className={`text-sm font-barlow font-medium block ${
                                      bug.status === "fixed" || bug.status === "completed" ? "text-gray-700 line-through decoration-green-500/50" : 
                                      bug.status === "closed" ? "text-gray-700 line-through decoration-blue-500/50" :
                                      "text-gray-900"
                                    }`}>
                                      {bug.title}
                                    </span>
                                  </div>
                                </div>
                                <ChevronRight
                                  className={`h-4 w-4 transition-all duration-300 ease-out flex-shrink-0 ${
                                    expandedBugId === `${category}-${index}`
                                      ? bug.status === "fixed" || bug.status === "completed" || bug.status === "closed"
                                        ? "rotate-90 text-green-600"
                                        : "rotate-90 text-orange-600"
                                      : "text-gray-400 group-hover:text-green-500"
                                  }`}
                                />
                              </div>
                              {expandedBugId === `${category}-${index}` && bug.description && (
                                <div className="mt-4 pt-4 border-t border-green-200/50">
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
                </div>

                {/* Sprint 3 Completed Summary */}
                <div className="mb-8 p-5 bg-gradient-to-r from-green-50/70 via-blue-50/60 to-green-50/70 backdrop-blur-sm rounded-xl border border-green-200/30 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <h4 className="text-lg font-bold text-gray-900 font-barlow-condensed">Sprint 3 - Completed ✅</h4>
                  </div>
                  <p className="text-sm text-gray-600 font-barlow mb-3">
                    15 bugs fixed • 8 enhancements added • 3 closed as designed • November 1-28, 2025
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <div className="bg-white/60 rounded-lg p-2 border border-green-100/50 text-center">
                      <div className="text-xs text-gray-700 font-barlow font-semibold">Help & Support</div>
                    </div>
                    <div className="bg-white/60 rounded-lg p-2 border border-green-100/50 text-center">
                      <div className="text-xs text-gray-700 font-barlow font-semibold">Profile AsyncStorage</div>
                    </div>
                    <div className="bg-white/60 rounded-lg p-2 border border-green-100/50 text-center">
                      <div className="text-xs text-gray-700 font-barlow font-semibold">Smart Offline Sync</div>
                    </div>
                    <div className="bg-white/60 rounded-lg p-2 border border-green-100/50 text-center">
                      <div className="text-xs text-gray-700 font-barlow font-semibold">Edit/Delete CRUD</div>
                    </div>
                  </div>
                </div>

                {/* Sprint 2 Completed Summary */}
                <div className="mb-8 p-5 bg-gradient-to-r from-green-50/70 via-blue-50/60 to-cyan-50/70 backdrop-blur-sm rounded-xl border border-green-200/30 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <h4 className="text-lg font-bold text-gray-900 font-barlow-condensed">Previous Sprint (Sprint 2) - All Resolved ✅</h4>
                  </div>
                  <p className="text-sm text-gray-600 font-barlow">
                    52 bugs fixed • 8 new features added • October 11-31, 2025
                  </p>
                </div>

                {/* Original Sprint 2 Completed Bugs - Now Collapsed */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-green-700 mb-4 font-barlow-condensed flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Sprint 2 Resolved Issues (52)
                  </h3>
                  <div className="space-y-6">
                    {Object.entries(sprint2Completed).map(([category, bugs]) => (
                      <div key={category}>
                        <h4 className="text-base font-semibold text-gray-800 mb-3 pb-2 border-l-4 border-green-500 pl-3 font-barlow-condensed tracking-wide">
                          {category} ({bugs.length})
                        </h4>
                        <div className="space-y-2.5">
                          {bugs.map((bug) => (
                            <div
                              key={bug.id}
                              onClick={() => setExpandedBugId(expandedBugId === bug.id ? null : bug.id)}
                              className={`group relative p-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out ${
                                expandedBugId === bug.id
                                  ? "bg-gradient-to-br from-green-50/95 to-blue-50/90 border-l-4 border-green-500 shadow-lg"
                                  : "bg-white/80 backdrop-blur-sm border-l-2 border-transparent hover:bg-white/95 hover:border-l-green-300 hover:shadow-md"
                              }`}
                            >
                              <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                                  <span className="text-xs font-mono text-gray-500 flex-shrink-0 font-barlow bg-gray-100/80 px-2 py-1 rounded-md">
                                    #{bug.id.toString().padStart(2, "0")}
                                  </span>
                                  <span className="text-sm font-barlow text-gray-900 font-medium line-through decoration-green-500/50">
                                    {bug.title}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2.5 flex-shrink-0">
                                  <Badge className="text-xs font-barlow font-medium px-3 py-1 bg-green-50 text-green-700 border-green-200">
                                    Fixed
                                  </Badge>
                                  <ChevronRight
                                    className={`h-4 w-4 transition-all duration-300 ease-out ${
                                      expandedBugId === bug.id
                                        ? "rotate-90 text-green-600"
                                        : "text-gray-400 group-hover:text-green-500"
                                    }`}
                                  />
                                </div>
                              </div>
                              {expandedBugId === bug.id && (
                                <div className="mt-4 pt-4 border-t border-green-200/50">
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
                </div>

                {/* Enhancements Section */}
                <div className="mb-8 p-5 bg-gradient-to-r from-purple-50/90 via-blue-50/80 to-cyan-50/90 backdrop-blur-sm rounded-xl border border-purple-200/50 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-900 font-barlow-condensed mb-3">New Features & Enhancements (8)</h4>
                  <div className="space-y-3">
                    {sprint2Enhancements.map((enhancement, index) => (
                      <div key={enhancement.title} className="bg-white/60 rounded-lg p-3 border border-purple-100/50">
                        <h5 className="text-sm font-semibold text-purple-700 font-barlow-condensed flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          {enhancement.title}
                        </h5>
                        <p className="text-xs text-gray-600 font-barlow mt-1">{enhancement.description}</p>
                        <span className="text-xs text-purple-600 font-barlow font-medium">Impact: {enhancement.impact}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-8 p-5 bg-gradient-to-r from-red-50/90 via-orange-50/80 to-yellow-50/90 backdrop-blur-sm rounded-xl border border-red-200/50 shadow-sm flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 font-barlow leading-relaxed mb-2">
                      <span className="font-semibold text-red-600">Sprint 4 Critical Findings:</span> End-to-end testing (Nov 24-27, 2025) across 49 test cases revealed significant platform disparity. <span className="font-semibold text-green-600">Android is release-ready</span> with 86% pass rate and no critical defects. <span className="font-semibold text-red-600">iOS is NOT release-ready</span> with 76% pass rate and 8 critical/high-priority defects blocking core CRUD functionality.
                    </p>
                    <p className="text-xs text-gray-600 font-barlow mb-2">
                      <span className="font-semibold">Critical iOS Issues:</span> Online Edit (0% pass), Online Delete (13% pass), Offline Duplicates (50% pass), AI History Loss (50% pass), Notifications Broken (38% pass), Account Overwrite (25% pass).
                    </p>
                    <p className="text-xs text-gray-600 font-barlow">
                      <span className="font-semibold">Recommendation:</span> Form dedicated iOS triage squad to resolve P1 defects (D-001 to D-004). Investigate iOS-specific API communication failures. Android testing complete - ready for production release. 🚀
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
