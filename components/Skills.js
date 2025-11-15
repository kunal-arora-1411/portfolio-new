import styles from './Skills.module.css'

const skills = {
  'Programming Languages': ['Python', 'SQL', 'Bash'],
  'Data & EDA': ['NumPy', 'pandas', 'Matplotlib', 'Seaborn', 'Parquet/CSV'],
  'ML Frameworks': ['PyTorch', 'TensorFlow', 'Keras', 'scikit-learn'],
  'Computer Vision': ['OpenCV', 'DINOv2', 'RTMDetr', 'Image Segmentation'],
  'NLP & LLMs': ['LangChain', 'GPT-4', 'Claude', 'Llama-3', 'RAG', 'Embeddings'],
  'MLOps & Deployment': ['ONNX', 'OpenVINO', 'Quantization', 'Edge Deployment'],
  'Tools & Versioning': ['Git', 'GitHub Actions', 'Conda', 'Ubuntu/Linux', 'CVAT'],
}

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>
        <span className={styles.label}>// Skills</span>
        My Toolkit
      </h2>

      <div className={styles.container}>
        {Object.entries(skills).map(([category, items], index) => (
          <div key={index} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category}</h3>

            <div className={styles.badges}>
              {items.map((skill, i) => (
                <div
                  key={i}
                  className={styles.badge}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
