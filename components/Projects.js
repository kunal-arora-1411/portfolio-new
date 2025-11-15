'use client'

import { useState } from 'react'
import styles from './Projects.module.css'

const projects = [
  {
    title: 'LLM-based Interactive Interview System',
    period: 'Aug 2025 - Sep 2025',
    tech: ['Python', 'LangChain', 'OpenAI API', 'OpenCV'],
    description: 'Automated pipeline to parse JD/Resumes, generate rubrics, and ask competency-based interview questions.',
    features: [
      'Automated pipeline to parse job descriptions and resumes',
      'Generate competency-based interview questions with adaptive follow-ups',
      'Strict JSON grading with score, band, justification, and follow-up question storage',
      'Modular methodology: evidence extraction → rubric design → question generation → grading',
      'Integrity checks with eye-tracking (OpenCV) and AI-plagiarism detection',
    ],
    impact: 'Reduced interview preparation time by 70% and improved candidate evaluation consistency',
  },
  {
    title: 'DINOv3 MRI Brain Tumor Diagnosis',
    period: 'Jul 2025 - Aug 2025',
    tech: ['PyTorch', 'Hugging Face Transformers', 'OpenCV', 'DINOv3'],
    description: 'Domain-adaptive Vision Transformer for brain tumor classification and segmentation.',
    features: [
      'Achieved 98% test accuracy for 4-class tumor diagnosis',
      'Dice Score of 0.87 and IoU of 0.78 for tumor segmentation masks',
      'Built end-to-end pipeline: data prep → training → evaluation',
      'Optimized for GPU training and quick CPU debugging',
      'Automated slice/mask quality control to reduce wasted compute',
    ],
    impact: 'Research paper under review at IEEE. Cross-dataset validation on BRISC-2025 and BraTS',
  },
  {
    title: 'Multimodal Cloud-Native RAG Chatbot',
    period: 'Jun 2025 – Jul 2025',
    tech: ['LangChain', 'GROQ Llama-3.3-70B', 'Streamlit', 'BLIP', 'Whisper'],
    description: 'Retrieval-augmented assistant with multi-modal support for text, images, and voice.',
    features: [
      'Built with GROQ Llama-3.3-70B for fast inference',
      'StreamLit chat UI for seamless user interaction',
      'Accepts text, images (BLIP), and voice (Whisper STT + TTS)',
      'Response time under 1 second for all modalities',
      'Cloud-native architecture for scalability',
    ],
    impact: 'Deployed for internal team use with 95% user satisfaction rating',
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>
        <span className={styles.label}>// Projects</span>
        Things I've Built
      </h2>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => setSelectedProject(project)}
          >
            <div className={styles.cardContent}>
              <h3>{project.title}</h3>
              <p className={styles.period}>{project.period}</p>
              <p className={styles.description}>{project.description}</p>

              <div className={styles.tech}>
                {project.tech.map((item, i) => (
                  <span key={i} className={styles.techTag}>{item}</span>
                ))}
              </div>

              <button className={styles.viewMore}>View Details →</button>
            </div>

            <div className={styles.cardGlow}></div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className={styles.modal} onClick={() => setSelectedProject(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <h2>{selectedProject.title}</h2>
            <p className={styles.modalPeriod}>{selectedProject.period}</p>

            <div className={styles.tech}>
              {selectedProject.tech.map((item, i) => (
                <span key={i} className={styles.techTag}>{item}</span>
              ))}
            </div>

            <p className={styles.modalDescription}>{selectedProject.description}</p>

            <h3>Key Features</h3>
            <ul className={styles.featuresList}>
              {selectedProject.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <div className={styles.impact}>
              <h3>Impact</h3>
              <p>{selectedProject.impact}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
