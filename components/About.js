import Image from 'next/image'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/profile.jpg"
              alt="Kunal Arora"
              width={400}
              height={400}
              className={styles.profileImage}
            />
            <div className={styles.imageBorder}></div>
          </div>
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>
            <span className={styles.label}>// About Me</span>
            Turning Ideas Into Intelligent Systems
          </h2>

          <p>
            I'm an <strong>AI & ML Engineer</strong> passionate about building cutting-edge intelligent systems
            that solve real-world problems. Currently pursuing my B.Tech in Computer Science with specialization
            in AI & ML at <strong>UPES Dehradun</strong> (CGPA: 8.0).
          </p>

          <p>
            At <strong>Foton Labs</strong>, I work on <strong>Project GRACE</strong>, a lifelike interactive AI companion
            with real-time 3D visuals. I've optimized prompt architecture, automated backend workflows, and reduced
            cold-start times through edge deployment strategies.
          </p>

          <p>
            Previously, I built an <strong>LLM-powered interview system</strong> at Binary Keeda that auto-generates
            personalized questions with eye-tracking and AI-plagiarism detection. At SNet Labs, I delivered 7 vision
            plug-ins for edge deployment with optimization through quantization and ONNX/OpenVINO.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className={styles.stat}>
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
            <div className={styles.stat}>
              <h3>4</h3>
              <p>Certifications</p>
            </div>
          </div>

          <div className={styles.contact}>
            <a href="mailto:kunalar2003@gmail.com" className={styles.contactItem}>
              <span className={styles.icon}>✉</span> kunalar2003@gmail.com
            </a>
            <a href="tel:+918368273225" className={styles.contactItem}>
              <span className={styles.icon}>☎</span> +91 8368273225
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
