import type { PublicationItem } from '../types';

export const RESEARCH_PUBLICATION: PublicationItem = {
  title: 'Systematic Approach to Analyze IoT-23 for Malware Detection',
  venue: 'IEEE International Conference on Emerging Technologies (ICET)',
  date: 'November 2023',
  doi: '10.1109/ICET59753.2023.10374768',
  doiUrl: 'https://doi.org/10.1109/ICET59753.2023.10374768',
  description: 'Final Year Research Project presenting an empirical machine learning pipeline to classify and detect adversarial cyberattacks and malware variants in IoT network traffic using the benchmark IoT-23 dataset.',
  highlights: [
    'Designed feature extraction and pre-processing pipeline for high-throughput network telemetry flows',
    'Evaluated multiple supervised ML classification models for anomalous packet pattern recognition',
    'Presented research findings before international peer reviewers at the IEEE ICET 2023 conference'
  ]
};
