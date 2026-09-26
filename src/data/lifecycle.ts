import type { LifecyclePhase } from '../types';

export const LIFECYCLE_PHASES: LifecyclePhase[] = [
  {
    step: '01',
    title: 'Product Scope & Clean Architecture',
    description: 'Translating problem statements into intuitive mobile user journeys, layered data/domain/UI architecture, and responsive design tokens.',
    capabilities: [
      'Problem definition & screen navigation flows',
      'Clean Architecture (Data, Domain, Presentation)',
      'Responsive design tokens & dynamic dark theme',
      'Edge-case & offline state mapping'
    ]
  },
  {
    step: '02',
    title: 'Flutter UI & Hardware Sensor Streams',
    description: 'Building 60fps widget trees and low-latency bridges to device sensors, camera frames, microphone buffers, and background isolates.',
    capabilities: [
      'Declarative Flutter widget trees & animations',
      'Direct camera stream & computer-vision hooks',
      'Real-time microphone audio buffer processing',
      'Local authentication & masked secure storage'
    ]
  },
  {
    step: '03',
    title: 'Offline SQLite & Profiling',
    description: 'Engineering local SQLite relational databases with sub-second queries, eliminating memory leaks, and optimizing frame rendering in DevTools.',
    capabilities: [
      'Indexed SQLite schemas & high-speed CRUD',
      'Encrypted health/financial data vaults',
      'Flutter DevTools memory & frame profiling',
      'Cross-device responsive layout validation'
    ]
  },
  {
    step: '04',
    title: 'Google Play Release & Store Deployment',
    description: 'Packaging production Android App Bundles (AAB), signing keystores, navigating Play Console policies, and monitoring live telemetry.',
    capabilities: [
      'AAB bundle optimization & Proguard rules',
      'Play Console internal & production tracks',
      'Keystore signing & store compliance policies',
      'Structured crash telemetry & live iteration'
    ]
  }
];
