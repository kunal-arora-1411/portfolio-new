import styles from './Experience.module.css'

const experiences = [
  {
    company: 'Foton Labs',
    location: 'Los Angeles (remote)',
    role: 'AI & ML Engineer (contract based)',
    period: 'Oct 2025 – Present',
    highlights: [
      'Worked on project GRACE, a lifelike, interactive AI companion with real-time 3D visuals',
      'Optimized prompt architecture to enhance response relevance and contextual coherence',
      'Automated backend server workflows with deployment scripts and health checks',
      'Reduced cold-start time by optimizing model initialization across edge nodes',
      'Minimized latency using edge functions and distributed execution for near real-time performance',
    ],
  },
  {
    company: 'Binary Keeda',
    location: 'Dehradun',
    role: 'AI & ML Intern',
    period: 'Aug 2025 – Present',
    highlights: [
      'Built LLM-powered interview system with auto-generated personalized questions',
      'Developed rubric-based grading engine with JSON scores and feedback',
      'Integrated integrity checks: eye-tracking (OpenCV) and AI-plagiarism detection',
      'Optimized prompt design and model selection (GPT-4, Claude, Llama-3) for quality and cost',
    ],
  },
  {
    company: 'SNet Labs',
    location: 'Noida',
    role: 'AI & ML Intern',
    period: 'Jun 2025 – Jul 2025',
    highlights: [
      'Researched and benchmarked foundation models (RTMDetr, DINOv2, SoundStorm)',
      'Delivered 7 vision plug-ins: Drowsiness, Sign-Language, Pothole, ANPR, Queue, Flame/Smoke, Smart-Fence',
      'Optimized training and inference via quantization and ONNX/OpenVINO',
      'Streamlined dataset QA with CVAT for higher model reliability',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.title}>
        <span className={styles.label}>// Experience</span>
        Where I've Worked
      </h2>

      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <h3 className={styles.company}>{exp.company}</h3>
                <p className={styles.location}>{exp.location}</p>
              </div>
              <div className={styles.period}>{exp.period}</div>
            </div>

            <h4 className={styles.role}>{exp.role}</h4>

            <ul className={styles.highlights}>
              {exp.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>

            <div className={styles.cardGlow}></div>
          </div>
        ))}
      </div>
    </section>
  )
}
