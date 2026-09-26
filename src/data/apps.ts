import type { AppProject } from '../types';

export const APPS_DATA: AppProject[] = [
  {
    id: 'tapokay',
    name: 'TapOkay',
    publicTitle: 'TapOkay - Daily Check In App',
    packageId: 'com.app.tapokay',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.app.tapokay',
    category: 'Lifestyle & Wellness',
    tagline: 'Daily wellness check-ins, cognitive brain games, and emergency safety net for independent seniors.',
    oneLiner: 'Peace of mind for families through guided check-ins, encrypted health vaults, and automated caregiver alerts.',
    icon: './images/apps/tapokay/icon.webp',
    screenshots: [
      './images/apps/tapokay/screenshot-1.webp',
      './images/apps/tapokay/screenshot-2.webp',
      './images/apps/tapokay/screenshot-3.webp',
      './images/apps/tapokay/screenshot-4.webp',
      './images/apps/tapokay/screenshot-5.webp',
      './images/apps/tapokay/screenshot-6.webp',
    ],
    featured: true,
    accentColor: '#10b981', // emerald
    badgeText: 'Featured Flagship',
    platform: 'Cross-Platform (Flutter)',
    tags: ['Flutter', 'Dart', 'State Management', 'Encrypted Vault', 'Local SQLite', 'Push Notifications', 'QR Auth', 'In-App Purchases'],
    metrics: [
      { label: 'Cognitive Games', value: '10' },
      { label: 'Daily Check-in', value: '< 60s' },
      { label: 'Security', value: 'Masked Vault' },
      { label: 'Platform', value: 'Flutter' },
    ],
    caseStudy: {
      overview: 'TapOkay is a dedicated mobile wellness and safety application designed for older adults who live independently, as well as the family members and caregivers who support them. Users complete a 60-second guided check-in covering sleep, mood, energy, and medication status. If a scheduled check-in is missed, TapOkay triggers automated alerts to the caregiver circle with geolocation data.',
      problem: 'Aging adults value independence and resist intrusive tracking or complex medical hardware. Meanwhile, adult children experience daily anxiety about whether their elderly parents are safe. Existing solutions are either invasive 24/7 GPS trackers or expensive hardware hubs with monthly subscriptions.',
      solution: 'Engineered an accessible mobile app that runs entirely on standard smartphones. Built with high-contrast UI, enlarged touch targets, simplified flows, encrypted health data vault, 10 cognitive training mini-games, and a seamless QR-code caregiver pairing workflow.',
      technicalArchitecture: 'Architected with Flutter and Dart using a modular reactive state management pattern. Check-in schedules and emergency metadata are persisted locally using encrypted storage. Caregiver circle synchronization uses secure REST APIs with tokenized authentication and event-driven FCM push notifications.',
      engineeringHighlights: [
        'Accessible Senior-First UX: Calibrated color contrast, oversized interactive targets, and clear font scales designed for motor and visual accessibility.',
        '10 Custom Cognitive Brain Games: Built 10 distinct 60-second games (Speed Tap, Memory Match, Sequence Follow, Pattern Complete, Word Jumble) exercising working memory, executive function, and visual attention.',
        'Encrypted Safety Vault: Implemented masked on-screen sensitive data persistence for door entry codes, medical conditions, medication regimens, and emergency contacts.',
        'Caregiver Connection System: Designed quick QR-code pairing and email invitation workflows allowing remote family members to monitor check-in calendars without invasive continuous tracking.',
        'Vacation & Grace Periods: Implemented flexible schedules and Vacation Mode so users can pause daily alerts during hospital visits or trips without false alarms.'
      ],
      keyFeatures: [
        'One-tap daily check-in covering sleep, energy, mood, and medication logs',
        'Customizable health questions (e.g. blood pressure checks, hydration reminders)',
        'Instant caregiver alerts when scheduled check-in windows are missed',
        'Emergency location coordinate attachment during critical alert dispatches',
        '10 interactive cognitive training mini-games with level progression',
        'Offline-capable local storage with automatic cloud synchronization'
      ],
      role: 'Mobile Product Designer & Flutter Engineer',
      techStack: ['Flutter', 'Dart', 'SQLite', 'Encrypted Storage', 'FCM Notifications', 'QR Scanner APIs', 'REST APIs', 'In-App Billing']
    }
  },
  {
    id: 'buck',
    name: 'Buck',
    publicTitle: 'Spending Tracker & Budget・Buck',
    packageId: 'xtra.budget.manager',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=xtra.budget.manager',
    category: 'Finance',
    tagline: 'Personal money manager, multi-currency budget planner, and automated subscription tracker.',
    oneLiner: 'Empowers users to master daily cashflow, monitor recurring bills, and hit savings goals with visual analytics.',
    icon: './images/apps/buck/icon.webp',
    screenshots: [
      './images/apps/buck/screenshot-1.webp',
      './images/apps/buck/screenshot-2.webp',
      './images/apps/buck/screenshot-3.webp',
      './images/apps/buck/screenshot-4.webp',
      './images/apps/buck/screenshot-5.webp',
      './images/apps/buck/screenshot-6.webp',
    ],
    featured: true,
    accentColor: '#3b82f6', // electric blue
    badgeText: 'Featured Flagship',
    platform: 'Cross-Platform (Flutter)',
    tags: ['Flutter', 'Dart', 'Clean Architecture', 'Data Persistence', 'Custom Canvas Charts', 'Multi-Currency', 'Local SQLite'],
    metrics: [
      { label: 'Transactions', value: 'Instant' },
      { label: 'Accounts', value: 'Multi-Wallet' },
      { label: 'Currencies', value: 'Global' },
      { label: 'Architecture', value: 'Clean Layered' },
    ],
    caseStudy: {
      overview: 'Buck is a full-featured personal finance and budget manager engineered for clarity, speed, and privacy. Users can log daily transactions in seconds, configure categorical spending caps, track recurring subscriptions before renewal dates, and visualize income-to-expense ratios.',
      problem: 'Most mobile finance apps are bloated with third-party bank linking requirements, privacy-invasive data sharing, confusing interfaces, and slow transaction logging that causes users to abandon tracking after a few days.',
      solution: 'Created an offline-first, privacy-focused financial management tool with sub-second expense logging, visual category progress meters, recurring bill calendar reminders, and isolated Vacation Mode budgeting.',
      technicalArchitecture: 'Built with a clean layered architecture separating Data (SQLite data access objects and repositories), Domain (financial transaction math, budget limit algorithms, recurrence calculators), and UI (reactive Flutter widget trees with custom painter charts).',
      engineeringHighlights: [
        'High-Performance Transaction Engine: Indexed SQLite relational schema capable of computing category aggregates and running date-range queries with zero UI jank.',
        'Custom Visual Analytics: Built lightweight interactive breakdown charts and spending velocity graphs using Flutter CustomPainter without heavy external charting libraries.',
        'Multi-Currency & Multi-Wallet Support: Seamless conversion calculations and distinct wallet balances (Cash, Bank, Savings, Credit).',
        'Subscription & Bill Due Date Forecaster: Automated recurring payment calculation with smart notifications prior to payment deducts.',
        'Vacation Mode Partitioning: An isolated budgeting partition allowing travelers to track holiday spending without skewing monthly baseline statistics.'
      ],
      keyFeatures: [
        'Sub-second expense and income recording with custom categorizations',
        'Interactive spending velocity charts and monthly comparison breakdown',
        'Recurring subscription and utility bill manager with reminders',
        'Visual savings targets with progress bars and projected completion dates',
        'Multi-account tracking across multiple currencies and cash wallets',
        'Isolated holiday and travel expense tracker'
      ],
      role: 'Mobile Architecture & Flutter Engineer',
      techStack: ['Flutter', 'Dart', 'SQLite', 'CustomPainter', 'Local Notifications', 'State Management', 'JSON Serialization']
    }
  },
  {
    id: 'cube',
    name: 'Cube Solver',
    publicTitle: 'Cube Solver',
    packageId: 'xtra.cube.solver.cube_solver',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=xtra.cube.solver.cube_solver',
    category: 'Entertainment & Vision',
    rating: 4.5,
    tagline: 'Camera-based cube state scanner, two-phase algorithmic solver, and interactive 3D move visualizer.',
    oneLiner: 'Solves Rubik’s cubes in minimal moves using device camera scanning and real-time step-by-step 3D animations.',
    icon: './images/apps/cube/icon.webp',
    screenshots: [
      './images/apps/cube/screenshot-1.webp',
      './images/apps/cube/screenshot-2.webp',
      './images/apps/cube/screenshot-3.webp',
      './images/apps/cube/screenshot-4.webp',
      './images/apps/cube/screenshot-5.webp',
    ],
    featured: true,
    accentColor: '#06b6d4', // cyan
    badgeText: 'Camera & 3D Solver',
    platform: 'Cross-Platform (Flutter)',
    tags: ['Flutter', 'Dart', 'Camera APIs', 'Computer Vision', '3D Matrix Animation', 'Algorithm Optimization', 'Math Engine'],
    metrics: [
      { label: 'Rating', value: '4.5 ★' },
      { label: 'Puzzles', value: '3x3, 4x4, 5x5' },
      { label: 'Scanner', value: 'Real-Time' },
      { label: 'Visualization', value: '3D Interactive' },
    ],
    caseStudy: {
      overview: 'Cube Solver is an algorithmic puzzle solver and interactive speedcubing tutor. Users scan the six faces of their scrambled cube via the device camera or manual palette input; the app verifies solvability and generates an optimal step-by-step solution rendered on an interactive 3D cube.',
      problem: 'Beginners find learning Rubik’s cube notation (U, R, F\', D2) intimidating when reading text guides. Existing digital solvers often fail under variable room lighting, provide confusing solution sequences, or lack intuitive move animation controls.',
      solution: 'Engineered a camera-guided scanner with adaptive color thresholding, paired with an optimized solving engine and a 360-degree interactive 3D visualizer that lets users pause, step backward, or replay each move at their own pace.',
      technicalArchitecture: 'Utilizes Flutter CameraController for real-time camera preview frames, color clustering algorithms for facet classification, mathematical permutation validation, and a 3D matrix rendering engine for fluid facet rotations.',
      engineeringHighlights: [
        'Real-Time Camera Scan & Color Classification: Implemented color extraction in HSV space with dynamic normalization to account for ambient lighting variations and glare.',
        'Permutation Solvability Validator: Built algorithmic parity and color-count validation to detect physically impossible cube states prior to running the solver.',
        'Optimal Move Generation: Implemented a two-phase solving algorithm capable of finding solutions in minimal moves in milliseconds.',
        'Interactive 3D Manipulation: Built a 3D cube model supporting touch gestures (pan, pinch zoom, perspective rotation) and smooth animated 90/180-degree layer turns.',
        'Comprehensive Speedcubing Tutorials: Embedded move notation glossaries, CFOP method breakdowns, and practice timers.'
      ],
      keyFeatures: [
        'Device camera scanner with automatic face recognition and edge alignment',
        'Manual color input with real-time configuration validity checks',
        'Move-by-move animated 3D visual guidance with pause, step, and replay controls',
        'Support for 3x3 Rubik’s Cube, 4x4 Revenge, and 5x5 Professor Cube',
        'Offline solving capability without requiring server-side compute',
        'Speedcubing knowledge base with notation explanations and timer'
      ],
      role: 'Computer Vision & Flutter Developer',
      techStack: ['Flutter', 'Dart', 'Camera API', 'Image Processing', '3D Transformation Matrices', 'Algorithmic Search', 'Custom Canvas']
    }
  },
  {
    id: 'plant',
    name: 'Pot',
    publicTitle: 'Pot・AI Plant Identifier・Garden',
    packageId: 'ai.plant.detector',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=ai.plant.detector',
    category: 'Tools & AI Vision',
    rating: 4.5,
    tagline: 'AI-powered plant identification across 500k+ species, disease diagnostics, and weather-adaptive care.',
    oneLiner: 'Combines camera computer vision, leaf pathology diagnostics, and live weather data for smarter plant parenting.',
    icon: './images/apps/plant/icon.webp',
    screenshots: [
      './images/apps/plant/screenshot-1.webp',
      './images/apps/plant/screenshot-2.webp',
      './images/apps/plant/screenshot-3.webp',
      './images/apps/plant/screenshot-4.webp',
      './images/apps/plant/screenshot-5.webp',
    ],
    featured: true,
    accentColor: '#84cc16', // lime / foliage
    badgeText: 'AI Vision & Care',
    platform: 'Cross-Platform (Flutter)',
    tags: ['Flutter', 'Dart', 'AI Vision APIs', 'Weather APIs', 'Camera Controller', 'Offline Cache', 'Push Reminders'],
    metrics: [
      { label: 'Rating', value: '4.5 ★' },
      { label: 'Species', value: '500,000+' },
      { label: 'Accuracy', value: 'High Precision' },
      { label: 'Diagnostics', value: 'Pests & Fungi' },
    ],
    caseStudy: {
      overview: 'Pot is an AI-powered botanical companion that instantly recognizes plants, trees, and succulents from photos, diagnoses leaf pathology and nutrient deficiencies, and computes dynamic watering intervals calibrated to local meteorological conditions.',
      problem: 'Most houseplant enthusiasts struggle with identifying unknown species, miss early symptoms of fungal diseases or spider mites, and inadvertently kill plants through overwatering during humid or rainy weather.',
      solution: 'Developed an end-to-end mobile plant care assistant integrating neural image recognition, tailored treatment protocols (organic and conventional), and a weather-reactive watering engine that synchronizes with local precipitation forecasts.',
      technicalArchitecture: 'Built on Flutter with asynchronous image preprocessing (compression, EXIF orientation correction) before dispatching to computer vision APIs. Local garden inventories and care logs are persisted in SQLite, with background synchronization to meteorological endpoints.',
      engineeringHighlights: [
        'Camera Vision Pipeline: Built client-side image optimization pipeline reducing upload payload by 70% while preserving leaf detail for classification.',
        'Pathology Diagnostic Module: Engineered diagnostic symptom trees matching leaf spots, mildew, and wilting with actionable organic and conventional remedies.',
        'Meteorological Dynamic Watering Engine: Connected to live weather forecast APIs to calculate evapotranspiration adjustments—automatically suppressing watering reminders on rainy days.',
        'Digital Plant Collection & Growth Timelines: Allows users to maintain a visual diary of their garden with dated photos, fertilizing schedules, and repotting reminders.',
        'Offline Botanical Library: Cached encyclopedic data for thousands of houseplant species accessible without internet connectivity.'
      ],
      keyFeatures: [
        'Instant camera identification of plants, succulents, trees, and flowers',
        'Leaf disease, pest, and fungal diagnosis with step-by-step treatment guides',
        'Soil composition, pH levels, and regional hardiness zone recommendations',
        'Weather-connected watering schedules that adjust based on rain and heat',
        'Customizable scheduled alarms for fertilizing, misting, and pruning',
        'Growth timeline journals and offline plant database'
      ],
      role: 'Mobile AI Integration & Flutter Engineer',
      techStack: ['Flutter', 'Dart', 'Camera APIs', 'External AI APIs', 'Weather REST APIs', 'SQLite', 'Background Scheduling']
    }
  },
  {
    id: 'decibel',
    name: 'Nox Decibel Meter',
    publicTitle: 'Nox・Noise Level Meter・DB Meter',
    packageId: 'com.appxtrastudio.decimalmeter',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.appxtrastudio.decimalmeter',
    category: 'Tools & Hardware Sensors',
    rating: 4.5,
    tagline: 'Hardware microphone acoustic measurement tool with real-time sound pressure level tracking and audiometric dials.',
    oneLiner: 'Turns smartphones into a precision sound level meter for monitoring environmental, workplace, and domestic acoustics.',
    icon: './images/apps/decibel/icon.webp',
    screenshots: [
      './images/apps/decibel/screenshot-1.webp',
      './images/apps/decibel/screenshot-2.webp',
      './images/apps/decibel/screenshot-3.webp',
      './images/apps/decibel/screenshot-4.webp',
    ],
    featured: false,
    accentColor: '#8b5cf6', // purple
    badgeText: 'Hardware Sensor',
    platform: 'Cross-Platform (Flutter)',
    tags: ['Flutter', 'Dart', 'Microphone Hardware', 'Audio Stream Buffering', 'CustomPainter', 'Acoustic Calibration'],
    metrics: [
      { label: 'Rating', value: '4.5 ★' },
      { label: 'Telemetry', value: 'Live dB' },
      { label: 'Latency', value: '< 50ms' },
      { label: 'Calibration', value: 'Hardware Offset' },
    ],
    caseStudy: {
      overview: 'Nox transforms any Android smartphone into an acoustic sound meter. By tapping into raw hardware microphone input, the app continuously calculates sound pressure levels in decibels (dB), displaying real-time gauges, minimum/average/maximum values, and historical measurement logs.',
      problem: 'Commercial decibel meters are expensive, single-purpose hardware tools. Meanwhile, standard consumer noise apps suffer from high audio latency, uncalibrated mic levels, and clunky interfaces.',
      solution: 'Built a lightweight, responsive sound meter with smooth 60fps gauge animations, hardware microphone calibration offsets, noise reference benchmark categories (e.g., whisper vs. heavy traffic), and session logging.',
      technicalArchitecture: 'Direct integration with native audio stream buffers. Samples audio amplitudes via high-frequency stream subscriptions, processes sound pressure conversion equations on an isolated worker isolate, and renders custom canvas needles without UI stutter.',
      engineeringHighlights: [
        'Low-Latency Audio Processing: Streamed hardware microphone byte buffers through Dart math routines to calculate RMS and dB SPL in real time.',
        'Custom Analog & Digital Gauges: Designed high-contrast audiometric dials with smooth needle damping using Flutter CustomPainter.',
        'Device Microphone Calibration: Built user-adjustable calibration sliders allowing offset alignment with reference sound level meters.',
        'Session History & Statistical Aggregation: Automatic computation of Min, Max, and time-weighted Average decibel metrics.'
      ],
      keyFeatures: [
        'Real-time sound level measurement using device microphone',
        'Instant digital readouts with Min, Max, and Average sound metrics',
        'Hardware microphone calibration options for enhanced accuracy',
        'Environmental noise reference benchmarks (office, street, machinery)',
        'Historical recording logs with timestamps and session review',
        'Battery-optimized low overhead background audio handling'
      ],
      role: 'Mobile Audio & Flutter Developer',
      techStack: ['Flutter', 'Dart', 'Audio Hardware APIs', 'Isolates', 'CustomPainter', 'Local Persistence']
    }
  },
  {
    id: 'car',
    name: 'CarO',
    publicTitle: 'CarO・Car Expense Tracker・Fuel',
    packageId: 'xtra.car.maintenance',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=xtra.car.maintenance',
    category: 'Auto & Vehicles',
    rating: 4.6,
    tagline: 'Multi-vehicle service history manager, mileage logbook, and fuel economy efficiency tracker.',
    oneLiner: 'Streamlines vehicle maintenance schedules, fuel fill-ups, and operational costs across personal and fleet vehicles.',
    icon: './images/apps/car/icon.webp',
    screenshots: [
      './images/apps/car/screenshot-1.webp',
      './images/apps/car/screenshot-2.webp',
      './images/apps/car/screenshot-3.webp',
      './images/apps/car/screenshot-4.webp',
    ],
    featured: false,
    accentColor: '#f97316', // orange
    badgeText: 'Vehicle Manager',
    platform: 'Cross-Platform (Flutter)',
    tags: ['Flutter', 'Dart', 'Multi-Vehicle Data', 'Mileage Tracking', 'Maintenance Reminders', 'Fuel Analytics'],
    metrics: [
      { label: 'Rating', value: '4.6 ★' },
      { label: 'Fleet', value: 'Multi-Vehicle' },
      { label: 'Service Logs', value: 'Full History' },
      { label: 'Analytics', value: 'Fuel & Cost' },
    ],
    caseStudy: {
      overview: 'CarO is an automotive maintenance logbook and fuel economy tracker. Designed for car owners and motorcycle riders to track oil change intervals, tire rotations, brake replacements, mileage records, and fuel efficiency trends across multiple vehicles.',
      problem: 'Vehicle owners regularly forget routine service deadlines (e.g. oil changes or brake checks) or lose maintenance paper receipts, leading to costly mechanical failures and decreased vehicle resale value.',
      solution: 'Engineered an intuitive vehicle care app with dual trigger reminders (mileage-based and time-based), detailed service records, fuel refill expense logging, and multi-vehicle garage management.',
      technicalArchitecture: 'Built with relational SQLite storage modeling vehicles, service categories, parts costs, and odometer readings. Includes asynchronous notification scheduling and consumption analytics engines.',
      engineeringHighlights: [
        'Dual-Trigger Reminder Algorithms: Calculates remaining distance and calendar days until upcoming scheduled maintenance tasks.',
        'Fuel Consumption & Economy Modeling: Automatically computes MPG or L/100km and cost-per-kilometer across sequential fuel fill-up logs.',
        'Multi-Vehicle Garage Architecture: Cleanly partitions records, mileage counters, and expense categories across multiple distinct cars or bikes.',
        'Data Exporting for Resale: Formats maintenance logs and expense summaries for easy export during vehicle servicing or sale.'
      ],
      keyFeatures: [
        'Complete maintenance logbook for oil, brakes, tires, filters, and inspections',
        'Smart service reminder alerts triggered by odometer or date intervals',
        'Fuel consumption tracker with economy trends and cost calculation',
        'Multi-vehicle support for personal, family, and work fleets',
        'Comprehensive expense analytics and categorical cost breakdown',
        'Offline-first reliability with fast transaction input'
      ],
      role: 'Mobile Product & Flutter Developer',
      techStack: ['Flutter', 'Dart', 'SQLite', 'Scheduled Notifications', 'Data Modeling', 'Analytical Charts']
    }
  },
  {
    id: 'pomodoro',
    name: 'Aim Pomodoro',
    publicTitle: 'Aim・Pomodoro Timer・Study Timer',
    packageId: 'xtra.pomodoro.timer',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=xtra.pomodoro.timer',
    category: 'Productivity',
    rating: 4.5,
    tagline: 'Minimalist distraction-free focus timer, interval work cycles, and study streak tracker.',
    oneLiner: 'Helps students, developers, and remote professionals maximize deep work using the proven Pomodoro technique.',
    icon: './images/apps/pomodoro/icon.webp',
    screenshots: [
      './images/apps/pomodoro/screenshot-1.webp',
      './images/apps/pomodoro/screenshot-2.webp',
      './images/apps/pomodoro/screenshot-3.webp',
      './images/apps/pomodoro/screenshot-4.webp',
    ],
    featured: false,
    accentColor: '#ef4444', // coral red
    badgeText: 'Productivity Timer',
    platform: 'Cross-Platform (Flutter)',
    tags: ['Flutter', 'Dart', 'Background Services', 'Custom Timers', 'Focus Mode', 'Local Notifications'],
    metrics: [
      { label: 'Rating', value: '4.5 ★' },
      { label: 'Interface', value: 'Zero-Distraction' },
      { label: 'Execution', value: 'Background Safe' },
      { label: 'Technique', value: 'Pomodoro' },
    ],
    caseStudy: {
      overview: 'Aim is a sleek, distraction-free productivity timer created for developers, writers, students, and remote professionals. Based on the time-tested Pomodoro Technique, it structures work into focused intervals separated by short restorative breaks.',
      problem: 'Modern work environments are plagued by continuous digital interruptions. Many existing timer apps are cluttered with intrusive ads, complex setups, or fail when the smartphone screen locks.',
      solution: 'Created an ultra-minimalist focus interface with customizable cycle intervals, persistent background timer accuracy, audio/haptic cues, and daily completion streaks.',
      technicalArchitecture: 'Leverages background service isolation and native system notifications to ensure tick accuracy even when the device enters deep sleep (Doze mode) or the screen is powered down.',
      engineeringHighlights: [
        'Resilient Background Timer Engine: Handles Android battery optimization without losing timer state or missing transition alarms.',
        'Distraction-Free Zen Interface: Clean typography, subtle dark gradients, and gesture-driven session controls to preserve cognitive focus.',
        'Customizable Workflow Cycles: Allows tailoring work durations, short break spans, and long break intervals to fit individual focus styles.',
        'Daily Focus Metrics: Tracks completed focus blocks, total study hours, and daily streaks.'
      ],
      keyFeatures: [
        'Customizable focus, short break, and long break timer sessions',
        'Fullscreen focus mode designed to eliminate visual distractions',
        'Accurate background execution with audio and vibration alert notifications',
        'Daily session counter and productivity streak tracker',
        'Fast and lightweight with zero unnecessary permissions'
      ],
      role: 'Mobile UI/UX & Flutter Engineer',
      techStack: ['Flutter', 'Dart', 'Background Services', 'Haptics & Audio', 'Local Notifications', 'State Management']
    }
  },
  {
    id: 'nofap',
    name: 'Raze',
    publicTitle: 'Raze - Quit Porn Addiction',
    packageId: 'xtra.no.fap',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=xtra.no.fap',
    category: 'Lifestyle & Self-Improvement',
    tagline: 'Structured habit transformation system with precision streak counters, trigger logs, and community accountability.',
    oneLiner: 'Equips individuals with the psychological tools and community support needed to build discipline and overcome addictions.',
    icon: './images/apps/nofap/icon.webp',
    screenshots: [
      './images/apps/nofap/screenshot-1.webp',
      './images/apps/nofap/screenshot-2.webp',
      './images/apps/nofap/screenshot-3.webp',
      './images/apps/nofap/screenshot-4.webp',
    ],
    featured: false,
    accentColor: '#a855f7', // violet
    badgeText: 'Habit & Recovery',
    platform: 'Cross-Platform (Flutter)',
    tags: ['Flutter', 'Dart', 'Habit Algorithms', 'Data Privacy', 'Daily Challenges', 'Community Feeds'],
    metrics: [
      { label: 'Counters', value: 'Live Precision' },
      { label: 'Privacy', value: 'Local-First' },
      { label: 'Challenges', value: 'Daily Discipline' },
      { label: 'Community', value: 'Supportive' },
    ],
    caseStudy: {
      overview: 'Raze is a disciplined self-improvement and recovery companion designed to assist individuals in breaking harmful digital habits, overcoming compulsive behaviors, and establishing lasting mental resilience through structured milestone tracking.',
      problem: 'Breaking behavioral addictions requires constant self-awareness, trigger recognition, and consistent daily accountability. Most habit apps lack nuanced relapse analysis or compromise user privacy.',
      solution: 'Developed a private, judgment-free platform featuring precision clean streak timers, relapse pattern logging, daily discipline challenges, motivational milestone badges, and an uplifting peer community.',
      technicalArchitecture: 'Built with a privacy-first mindset using encrypted local storage for personal reflection logs. The community feed utilizes authenticated REST endpoints with anonymized user identifiers.',
      engineeringHighlights: [
        'Precision Streak & Milestone Computation: Live second/minute/day timer with animated milestone unlocking cards celebrating clean recovery phases.',
        'Relapse Trigger Logging & Analytics: Captures context (time of day, mood, stress triggers) to help users identify vulnerability patterns.',
        'Positive Community Accountability: Anonymous shared challenges and progress stories to sustain long-term commitment.',
        'Privacy-Conscious Architecture: Local data encryption and biometric screen locks ensuring complete user privacy.'
      ],
      keyFeatures: [
        'Precision streak counter with milestone progress tracking',
        'Relapse pattern logging to identify emotional and environmental triggers',
        'Daily mindfulness and mental resilience habit challenges',
        'Supportive anonymous community feed and shared success stories',
        'Clean, private, and distraction-free dark interface'
      ],
      role: 'Mobile Frontend & Flutter Engineer',
      techStack: ['Flutter', 'Dart', 'Data Encryption', 'REST APIs', 'Local Notifications', 'State Management']
    }
  }
];

