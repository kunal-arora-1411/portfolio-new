import styles from './Education.module.css'

export default function Education() {
  return (
    <section id="education" className={styles.education}>
      <h2 className={styles.title}>
        <span className={styles.label}>// Education & Research</span>
        Academic Background
      </h2>

      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <span className={styles.icon}>🎓</span>
          </div>

          <div className={styles.content}>
            <h3>B.Tech. in Computer Science</h3>
            <p className={styles.specialization}>Specialization - AI & ML</p>
            <p className={styles.institution}>UPES Dehradun, India</p>

            <div className={styles.details}>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Duration</span>
                <span className={styles.detailValue}>Jul 2022 - Present</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>CGPA</span>
                <span className={styles.detailValue}>8.0 / 10.0</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <span className={styles.icon}>🔬</span>
          </div>

          <div className={styles.content}>
            <h3>Research Experience</h3>
            <p className={styles.specialization}>DINOv3-based Brain Tumor Analysis</p>
            <p className={styles.institution}>Under Review — IEEE</p>

            <div className={styles.researchDetails}>
              <p>
                Domain-adaptive Vision Transformer (LoRA) with classification and segmentation head
                that outputs pixel-level masks highlighting tumor regions.
              </p>

              <ul className={styles.researchPoints}>
                <li>Cross-dataset validation on BRISC-2025 and BraTS</li>
                <li>Dice/HD95 benchmarking for segmentation quality</li>
                <li>Novel approach to medical image analysis using foundation models</li>
              </ul>
            </div>

            <div className={styles.badge}>
              <span>📄</span> Paper Under Review
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
