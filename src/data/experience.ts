import type { ExperienceItem } from '../types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'Xtra App Studios',
    role: 'Full Stack Software Engineer',
    period: 'Aug 2025 – Jul 2026',
    location: 'Multan, Pakistan',
    responsibilities: [
      'Built LLM-powered mobile features, including a retrieval-augmented generation (RAG) pipeline, text processing, and automated data summarization via external AI APIs.',
      'Designed backend systems and databases (CRUD, indexing, query optimization), improving data retrieval efficiency by ~25%.',
      'Built RESTful APIs with authentication and rate limiting, reducing unauthorized access risk.',
      'Implemented structured logging, monitoring, and secure coding practices to improve system resilience and anomaly detection.'
    ],
    technologies: ['Flutter', 'Dart', 'LLM Integration', 'RAG Pipelines', 'External AI APIs', 'RESTful APIs', 'SQL / Database Indexing', 'Rate Limiting', 'Logging & Monitoring'],
    impactHighlights: [
      'Engineered RAG-powered feature workflows supporting intelligent client-side summarization',
      'Boosted database query response times by ~25% through schema indexing and query tuning',
      'Strengthened mobile API endpoints with tokenized authentication and rate limiting guards'
    ]
  },
  {
    company: 'Shujabad Weaving Mills',
    role: 'Software Engineer',
    period: 'Sept 2023 – Aug 2025',
    location: 'Multan, Pakistan',
    responsibilities: [
      'Built database-driven applications to digitize factory operations, cutting manual processing time by 40–60%.',
      'Optimized SQL queries and database structures, improving performance and reducing system latency.',
      'Implemented role-based access control (RBAC) and automated reporting for operational data monitoring.',
      'Mapped manual workflows into digital systems and resolved production issues to maintain high system availability.'
    ],
    technologies: ['Database-Driven Systems', 'SQL Optimization', 'RBAC Security', 'System Architecture', 'Automated Reporting', 'Distributed Workflows'],
    impactHighlights: [
      'Digitized legacy manufacturing floor operations, reducing manual processing time by 40–60%',
      'Designed robust role-based access control (RBAC) policies across cross-functional departments',
      'Maintained high production availability through active telemetry and rapid anomaly resolution'
    ]
  },
  {
    company: 'MNS-UET Multan',
    role: 'Engineering Internship',
    period: 'Jan 2020 – Dec 2020',
    location: 'Multan, Pakistan',
    responsibilities: [
      'Led a 5-member team to upgrade a legacy e-challan system, cutting manual workload by ~50%.',
      'Managed IT infrastructure operations, including network administration, server maintenance, and system security for university systems.'
    ],
    technologies: ['Network Administration', 'Server Maintenance', 'System Security', 'Legacy Migration', 'Team Leadership'],
    impactHighlights: [
      'Led a 5-engineer team to modernize institutional e-challan systems, halving manual workload',
      'Oversaw mission-critical university network infrastructure and server uptime'
    ]
  }
];
