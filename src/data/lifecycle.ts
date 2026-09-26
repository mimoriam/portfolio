import type { LifecyclePhase } from '../types';

export const LIFECYCLE_PHASES: LifecyclePhase[] = [
  {
    step: '01',
    title: 'Product Scope & UX Wireframing',
    description: 'Transforming problem statements into clear user journey maps, screen hierarchies, and ergonomic mobile UX flows tailored for natural thumb interaction.',
    capabilities: [
      'Problem definition & feature matrix',
      'User journey & navigation architecture',
      'Ergonomic mobile interaction patterns',
      'Edge-case & offline state mapping'
    ]
  },
  {
    step: '02',
    title: 'Flutter UI & Design System',
    description: 'Implementing custom widget hierarchies, responsive typography, coherent dark palettes, and smooth 60fps micro-animations without relying on heavy third-party UI packs.',
    capabilities: [
      'Declarative Flutter widget trees',
      'Custom theme design tokens (Dark & Light)',
      'Subtle motion & physics-based transitions',
      'Accessible contrast & dynamic font scaling'
    ]
  },
  {
    step: '03',
    title: 'State Management & Offline Persistence',
    description: 'Structuring clean data and domain layers. Binding reactive state managers with indexed local SQLite tables and encrypted secure key storage for lightning-fast responsiveness.',
    capabilities: [
      'Clean Architecture (Data, Domain, Presentation)',
      'Predictable reactive state (Riverpod / BLoC)',
      'Indexed SQLite schemas & migration strategies',
      'Encrypted local key-value and safety vaults'
    ]
  },
  {
    step: '04',
    title: 'Hardware Sensors & API Integration',
    description: 'Interfacing directly with mobile device capabilities—audio microphone buffers, camera stream frames, biometrics, and background isolates—connected to secure RESTful endpoints.',
    capabilities: [
      'Low-latency camera & audio hardware access',
      'External AI & LLM pipeline connectivity',
      'Tokenized API authentication & rate handling',
      'Background tasks & battery-friendly isolates'
    ]
  },
  {
    step: '05',
    title: 'Profiling, Performance & Hardening',
    description: 'Diagnosing frame drops with Flutter DevTools, optimizing memory allocation, mitigating security vulnerabilities, and ensuring zero crashes across varied device screen densities.',
    capabilities: [
      'Flutter DevTools frame & memory profiling',
      'Re-render optimization & widget tree pruning',
      'Secure data masking & threat mitigation',
      'Cross-device form factor validation'
    ]
  },
  {
    step: '06',
    title: 'Google Play Release & Continuous Delivery',
    description: 'Packaging production Android App Bundles (AAB), signing keystores, configuring Play Console internal/production tracks, crafting store metadata, and monitoring crash telemetry.',
    capabilities: [
      'AAB bundle optimization & Proguard shrinking',
      'Keystore signing & Play Console compliance',
      'Store listing assets & privacy policy compliance',
      'Structured logging & post-launch iteration'
    ]
  }
];
