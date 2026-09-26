import type { ExpertiseItem } from '../types';

export const EXPERTISE_PILLARS: ExpertiseItem[] = [
  {
    number: '01',
    title: 'Cross-Platform Flutter & Dart',
    tagline: 'Pixel-perfect mobile UI, 60fps animations, and clean modular codebases.',
    description: 'Expertise in building responsive, production-ready cross-platform mobile apps using Flutter and Dart. Proficient in layered clean architecture, predictable state management, and custom widget canvas rendering.',
    skills: [
      'Flutter & Dart SDK',
      'Clean Architecture (Data, Domain, Presentation)',
      'State Management (Riverpod, BLoC, Provider)',
      'CustomPainter & 2D/3D Canvas Rendering',
      'Responsive Mobile & Tablet Layouts',
      'Deep Linking & Declarative Navigation'
    ]
  },
  {
    number: '02',
    title: 'Hardware & Native Integrations',
    tagline: 'Bridging Flutter with device sensors, camera streams, audio hardware, and system services.',
    description: 'Proven experience directly interfacing with mobile device sensors and hardware APIs—from real-time microphone stream sampling to camera computer-vision facet recognition and battery-safe background execution.',
    skills: [
      'Camera Streams & Image Processing',
      'Microphone Audio Buffers & SPL Decibel Metering',
      'Local Biometric Authentication & Key Masking',
      'Background Isolates & Long-Running Services',
      'Push Notifications (FCM) & Scheduled Local Alarms',
      'QR Code Scanning & Peripheral Hardware'
    ]
  },
  {
    number: '03',
    title: 'Offline-First & Local Data Architecture',
    tagline: 'Fast, resilient mobile data engines that function smoothly without active internet connectivity.',
    description: 'Building offline-first mobile applications with indexed SQLite schemas, secure encrypted local vaults, and reactive synchronization pipelines so apps never freeze waiting on network calls.',
    skills: [
      'SQLite Relational Modeling & Indexing',
      'Encrypted Storage & Masked Vaults',
      'Query Optimization & High-Speed CRUD',
      'Cache-First Network Interceptors',
      'Safe State Serialization & Hydration',
      'Data Integrity & Migration Scripts'
    ]
  },
  {
    number: '04',
    title: 'Backend, AI & Production Delivery',
    tagline: 'End-to-end full product delivery from REST APIs and RAG pipelines to the Google Play Store.',
    description: 'Supporting mobile applications with robust backend infrastructure, secure tokenized APIs, LLM/RAG integrations for automated summarization, and end-to-end Google Play Console deployment workflows.',
    skills: [
      'RESTful API Engineering & Rate Limiting',
      'LLM Integration & RAG Retrieval Pipelines',
      'Role-Based Access Control (RBAC)',
      'Structured Telemetry, Logging & Monitoring',
      'Google Play Console Release Management',
      'App Bundle Optimization & Proguard Rules'
    ]
  }
];

export const TECH_STACK = {
  primary: [
    { name: 'Flutter', category: 'Mobile Framework', highlight: true },
    { name: 'Dart', category: 'Core Language', highlight: true },
    { name: 'Android SDK', category: 'Mobile OS', highlight: true },
    { name: 'Cross-Platform Architecture', category: 'Engineering Pattern', highlight: true },
    { name: 'State Management (Riverpod / BLoC)', category: 'Architecture', highlight: true },
    { name: 'Camera & Vision APIs', category: 'Hardware Sensor', highlight: true },
    { name: 'Audio Hardware Sampling', category: 'Hardware Sensor', highlight: true },
    { name: 'Local SQLite & Storage', category: 'Persistence', highlight: true },
  ],
  supporting: [
    { name: 'RESTful APIs', category: 'Backend Integration' },
    { name: 'LLM & External AI APIs', category: 'AI Integration' },
    { name: 'Retrieval-Augmented Gen (RAG)', category: 'AI Pipelines' },
    { name: 'SQL & Database Indexing', category: 'Data Engineering' },
    { name: 'RBAC & Auth Systems', category: 'Security' },
    { name: 'Rate Limiting & Threat Mitigation', category: 'Security & Ops' },
    { name: 'Structured Logging & Telemetry', category: 'Monitoring' },
    { name: 'Google Play Release Management', category: 'DevOps & Store' },
    { name: 'Git & Version Control', category: 'Tooling' },
    { name: 'Python (ML Pipeline / Data)', category: 'Data & ML' },
  ]
};
