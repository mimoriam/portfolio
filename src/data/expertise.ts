import type { ExpertiseItem } from '../types';

export const EXPERTISE_PILLARS: ExpertiseItem[] = [
  {
    number: '01',
    title: 'Cross-Platform Flutter & Dart',
    tagline: 'Clean architecture, 60fps fluid animations, and predictable reactive state.',
    description: 'Specialized in building robust cross-platform mobile apps using Flutter and Dart. Strong adherence to layered Clean Architecture (Data, Domain, Presentation) and scalable state management.',
    skills: [
      'Clean Layered Architecture (Data, Domain, UI)',
      'Reactive State Management (Riverpod & BLoC)',
      'CustomPainter & 2D/3D Canvas Rendering',
      'Dynamic Dark/Light Themes & Fluid Scaling'
    ]
  },
  {
    number: '02',
    title: 'Hardware & Native Integrations',
    tagline: 'Bridging Flutter with camera streams, audio hardware, and background system services.',
    description: 'Direct experience interfacing with native mobile hardware APIs—from real-time audio microphone buffers to camera computer-vision state detection and battery-safe background isolates.',
    skills: [
      'Microphone Audio Buffers & Real-Time SPL Metering',
      'Camera Streams & Vision Frame Processing',
      'Biometric Authentication & Hardware Key Masking',
      'FCM Push Notifications & Background Isolates'
    ]
  },
  {
    number: '03',
    title: 'Offline-First & Local Persistence',
    tagline: 'High-speed, resilient SQLite data engines that work seamlessly without active internet.',
    description: 'Engineered offline-first mobile applications with indexed SQLite schemas, secure encrypted local vaults, and reactive synchronization pipelines so apps never lag or freeze.',
    skills: [
      'Indexed SQLite Schemas & Query Optimization',
      'Encrypted Storage & Masked Security Vaults',
      'Sub-Second Local CRUD & Data Serialization',
      'Cache-First Network Interceptors & Offline Sync'
    ]
  },
  {
    number: '04',
    title: 'Play Store Release & Full Lifecycle',
    tagline: 'From blank workspace to 8 verified applications published on Google Play.',
    description: 'Hands-on experience shipping complete mobile products: packaging Android App Bundles (AAB), managing Play Console internal/production tracks, keystore signing, and policy compliance.',
    skills: [
      'Google Play Console Release Management',
      'AAB Optimization, Proguard & Keystore Signing',
      'RESTful APIs with Tokenized Auth & Rate Limits',
      'Structured Telemetry, Logging & Crash Monitoring'
    ]
  }
];

export const TECH_STACK = {
  core: [
    { name: 'Flutter SDK', category: 'Mobile Framework' },
    { name: 'Dart', category: 'Core Language' },
    { name: 'Android SDK', category: 'Mobile Platform' },
    { name: 'Riverpod / BLoC', category: 'State Management' },
    { name: 'Clean Architecture', category: 'Engineering Pattern' },
  ],
  hardware: [
    { name: 'SQLite', category: 'Offline Engine' },
    { name: 'Camera & Vision APIs', category: 'Device Sensor' },
    { name: 'Audio Hardware Sampling', category: 'Device Sensor' },
    { name: 'Encrypted Storage', category: 'Security' },
    { name: 'FCM Push & Alarms', category: 'System Services' },
  ],
  delivery: [
    { name: 'Google Play Console', category: 'Store Deployment' },
    { name: 'AAB & Proguard', category: 'Build Optimization' },
    { name: 'RESTful APIs', category: 'Backend Integration' },
    { name: 'LLM & RAG Pipelines', category: 'AI Integration' },
    { name: 'Git & Version Control', category: 'Tooling' },
  ]
};
