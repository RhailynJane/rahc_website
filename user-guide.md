# Rural Alberta Health Connect (RAHC) - User Guide
**Version 2.0** | Last Updated: October 28, 2025
# Rural Alberta Health Connect (RAHC) - User Guide

**Version 2.0** | Last Updated: October 28, 2025


## Sprint 4 Testing Summary (E2E)

**Complete End-to-End User Testing Guide**
- Version: 1.0
- Last Updated: December 12, 2025
- Purpose: Comprehensive testing guide for validating all RAHC features

### Overview
- All 51 test cases across 9 suites passed in Sprint 4.
- iOS issues previously reported were due to the wrong branch being built and deployed to production. The branch mismatch has been corrected; no iOS-specific functional issues remain after retesting.

### Test Suites Covered
- Account Management, Dashboard & Navigation, AI Health Assessment, Health Tracker, Emergency Services, Notifications & Reminders, Profile & Settings, Help & Support, Offline Functionality.

### Notable Fixes Verified
- Router behavior: prevented navigation back to sign-up after authentication by applying conditional rendering in layout.
- Error handling: standardized user-friendly errors and modals for registration/sign-in flows.
- AI Assessment: improved scrolling responsiveness when images are attached by removing pressable and dismissing keyboard on scroll begin.
- Health Tracker: corrected date handling on edit to reflect updated timestamps.
- Offline flows: verified local save and background sync on reconnect for edits and deletions.

### Test Execution Summary
- Total Tests: 51
- Passed: 51
- Failed: 0
- Not Run: 0
- Pass Rate: 100%

### Known Limitations & Disclaimers
- AI assessments require internet; offline queued operations sync on reconnect.
- Emergency features depend on device location permissions and GPS availability.
- Offline maps must be pre-downloaded; coverage limited to Alberta regions.
- Medical guidance is informational and not a diagnosis; call 911 for emergencies.

---

## Welcome to RAHC! 👋

RAHC is your personal health companion, designed specifically for rural Alberta residents. Monitor your health, get AI-powered insights, and access emergency services—all from your phone.

### What You Can Do

- 🤖 Get AI-powered symptom assessments
- 📊 Track your daily health metrics
- 🚨 Access emergency services quickly
- 📍 Use offline maps when internet isn't available
- 🔔 Set health check-in reminders
- 💾 Secure health data storage

---

## Getting Started

### What You'll Need

- **Device**: iPhone (iOS 13.0+) or Android phone (5.0+)
- **Permissions**: Location and notifications
- **Internet**: For initial setup (offline features available after)

### Download & Install

1. Open **App Store** (iPhone) or **Google Play** (Android)
2. Search for **"Rural Alberta Health Connect"**
3. Tap **Install/Get**
4. Open the app when installation completes

### Create Your Account

When you first open the app, you'll see the welcome screen with app features overview.

**Step 1: Personal Information**
- Full name
- Email address
- Create a secure password (8+ characters)
- Confirm password

**Step 2: Terms & Privacy**
- Review and accept Terms of Service
- Review and accept Privacy Policy

**Step 3: Additional Details**
- Phone number
- Age
- Location

**Step 4: Medical History**
- Pre-existing conditions
- Current medications
- Known allergies

**Step 5: Emergency Contact**
- Emergency contact name
- Phone number

> **Tip**: Use a password manager to create and store a strong password.

---

## Your Dashboard

Your home screen after signing in—everything important at a glance.

### What You'll See

**Health Status Overview**
- Current health status indicator

**Quick Actions** (Tap to start)
- AI Assessment
- Daily Log

**Notifications**
- Health symptom reminders

### Navigation Bar (Bottom of Screen)

- **Dashboard** - Your home screen
- **AI Assessment** - Start symptom check
- **Tracker** - View health history
- **Emergency** - Quick access to emergency features
- **Profile** - Settings & account

---

## AI Health Assessment

Get personalized health insights based on your symptoms.

### How It Works

**1. Start Assessment**
- Tap **AI Assessment** from Dashboard or bottom navigation
- Tap **Start New Assessment**

**2. Describe Your Symptoms**
- Select your symptom category OR describe your symptoms
- Be as detailed as possible
- Include when it started
- Example: "I have a headache and fever that started yesterday"

**3. Duration & Severity**
- Select how long you've had symptoms (Hours, Days, Weeks, Months)
- Specify the exact duration
- Rate severity: 1-3 (mild), 4-6 (moderate), 7-10 (severe)

**4. Review Results**
You'll receive:
- AI-generated health insights
- Severity classification
- Recommended actions
- When to seek medical attention
- Self-care suggestions

### Important Notes

⚠️ **This is NOT a medical diagnosis**
- Always consult a healthcare professional for serious concerns
- For emergencies, call 911 immediately
- Use this tool as guidance only

> **Tip**: All assessments are automatically saved. Find them in AI Assessment → History. You can share results with healthcare providers if needed.

---

## Health Tracker

Your personal health journal—track everything in one place.

### Adding a Health Entry

1. Go to **Tracker** in bottom navigation
2. Tap **Add Health Entry** or **+** button
3. Fill in the details:
   - Date and time
   - Description
   - Severity (if applicable)
   - Notes
   - Attachments (optional)
4. Tap **Save Entry**

### Daily Log

View today's health activities:
- All entries for the current day

**Access**: Tracker → Daily Log

### History

View your complete health history:
- Search by date range
- Select a date to view entries
- Tap an entry to see full details

**Access**: Tracker → History

---

## Emergency Services

Quick access when you need help fast.

### Emergency Location Features

**Tap Emergency** from Dashboard or bottom navigation to:
- 📍 See your current location on map
- 📞 Call emergency services (911)
- 🏥 View nearby clinics and hospitals
- 📲 Share location with emergency contacts
- 📄 Access your saved emergency information

### Offline Emergency Maps

**Why Download?**
Rural areas often have poor cell service. Offline maps work without internet.

**How to Download:**
1. Go to **Profile** → **App Settings** → **Offline Maps**
   OR go to **Emergency** → **Offline Maps**
2. Select your region
3. Tap **Download** (requires WiFi, large file size)

**What's Included:**
- Road maps for navigation
- See directions to nearest medical facilities
- Access maps even without internet
- Battery-efficient navigation

---

## Notifications & Reminders

Stay informed with health reminders.

### Notification Types

- Health check-in reminders

### Viewing Notifications

1. Tap the **bell icon** in bottom navigation
2. See all notifications (unread and read)
3. Tap a notification to see details
4. Mark as read or dismiss

### Managing Notifications

**Adjust Settings:**
- **Profile** → **App Settings** → **Notifications**
- Enable/disable notification types
- Enable/disable location

### Setting Reminders

1. Go to **Profile** → **App Settings** → **Reminders**
2. Add new reminder:
   - Time and frequency
   - Days of week
3. Save reminder

---

## Your Profile & Settings

Manage your account and customize your experience.

### Profile Information

**View/Edit:**
- Personal details (name, email, phone)
- Medical history
- Emergency contacts

**To Update:**
1. **Profile** → **Profile Information**
2. Tap **Edit**
3. Make changes
4. Tap **Save Changes**

### App Settings

**Profile** → **App Settings**

Available settings:
- Notifications preferences
- Location services
- Offline maps management

---

## Using RAHC Offline

Stay connected to your health data even without internet.

### What Works Offline ✅

- View existing health entries
- Add new health logs (syncs automatically later)
- Access downloaded offline maps
- View emergency contact information
- See previous assessment results
- Basic app navigation

### What Needs Internet ❌

- New AI assessments
- Downloading offline maps
- Syncing data to cloud
- Sharing location or information
- Creating an account
- Resetting password

### Offline Indicator

When you're offline:
- Banner appears at top: **"You are currently offline"**
- Data will sync when connection is restored

### Force Sync

If data isn't syncing:
1. Ensure you're connected to internet
2. Pull down on Dashboard to refresh
3. Check storage space on device
4. Update app to latest version

---

## Important Limitations

Please read these carefully before relying on RAHC.

### Medical Limitations ⚕️

- **Not a Replacement for Doctors**: RAHC provides guidance, not medical diagnosis
- **AI is Limited**: Assessments are guidance only, not diagnosis
- **Not for Emergencies**: Call 911 for serious medical emergencies
- **Consult Healthcare Providers**: Always consult healthcare professionals for serious concerns

### Technical Limitations 📱

- Requires initial internet connection for setup
- AI assessments require active internet connection
- GPS accuracy depends on device and environment
- Battery usage increased with GPS and offline maps

### Data Limitations 💾

- Offline data stored locally on device
- Data sync requires internet connection

### Feature Limitations ⚙️

- AI assessment limited to common conditions
- Offline maps must be pre-downloaded
- Map coverage limited to supported regions

### Geographic Limitations 🗺️

- Designed specifically for **rural Alberta residents**
- Clinic/hospital database covers **Alberta only**
- Offline maps available for **Alberta regions only**

### Legal Limitations ⚖️

- Subject to Terms of Service and Privacy Policy
- Data retention governed by Canadian privacy laws
- Not approved as a medical device
- Use at your own risk for health decisions

---

## Troubleshooting

### Sign-In Issues

**Can't sign in?**
- ✅ Check email and password are correct (case-sensitive)
- ✅ Ensure internet connection is working
- ✅ Try **Forgot Password** to reset
- ✅ Clear app cache and try again

**Forgot password?**
1. Tap **Forgot Password?** on sign-in screen
2. Enter your registered email address
3. Check your email for OTP (One-Time Password)
4. Enter the OTP in the app
5. Create a new password
6. Confirm your new password
7. Tap **Reset Password**

### Notification Problems

**Not receiving notifications?**
- ✅ Check device notification settings (outside app)
- ✅ Verify notifications enabled: **Profile** → **App Settings** → **Notifications**
- ✅ Disable "Do Not Disturb" mode
- ✅ Restart the app

### Location & GPS Issues

**Location not accurate?**
- ✅ Enable location services in device settings
- ✅ Grant "Always" permission for emergency features
- ✅ Ensure GPS is enabled
- ✅ Go outside or near windows for better GPS signal
- ✅ Restart your device

### Syncing Problems

**Data not syncing?**
- ✅ Check internet connection
- ✅ Force sync: Pull down on Dashboard
- ✅ Check storage space on device
- ✅ Update app to latest version
- ✅ Sign out and sign back in

### App Crashes

**App freezing or crashing?**
1. Update to latest version (App Store/Google Play)
2. Clear app cache
3. Restart your device
4. Uninstall and reinstall (your synced data is safe)
5. Contact support if problem continues

---

## Quick Reference Guide

**Add Health Entry**: Tracker → "+" button

**Start AI Assessment**: AI Assessment tab → "Start New Assessment"

**View Notifications**: Bell icon in bottom navigation

**Change Settings**: Profile → App Settings

**Forgot Password**: Sign In screen → "Forgot Password?"

**Enable Offline Maps**: Emergency → Offline Maps

---

## Glossary

**AI Assessment**: Artificial intelligence-powered symptom evaluation tool

**Daily Log**: Record of all health entries for a single day

**Health Entry**: Any logged health-related information (symptom, medication, etc.)

**Offline Mode**: App functionality without internet connection

**OTP**: One-Time Password for verification

**Sync**: Process of updating data between device and cloud

---

## Thank you for using Rural Alberta Health Connect!


