import styles from './Certifications.module.css'

const certifications = [
  {
    title: 'Google Cloud Skills Boost',
    subtitle: '29 skill badges – Diamond League',
    points: '19,835 pts',
    icon: '☁️',
    color: '#4285F4',
    url: 'https://www.skills.google/public_profiles/351530b0-1c62-4743-91d7-ad31ff90ddf1',
  },
  {
    title: 'NASSCOM Internship',
    subtitle: 'AI/ML & Generative AI',
    points: 'Project-Based',
    icon: '🚀',
    color: '#FF6B6B',
    url: 'https://skillwallet.smartinternz.com/certificate/virtual-internship/2e09811007f834b96935dc13e91fabbc',
  },
  {
    title: 'Kaggle - Intro to Deep Learning',
    subtitle: 'Deep Learning Fundamentals',
    points: 'Certificate',
    icon: '🧠',
    color: '#20BEFF',
    url: 'https://www.kaggle.com/learn/certification/kunalar1411/intro-to-deep-learning',
  },
  {
    title: 'Kaggle - Computer Vision',
    subtitle: 'Computer Vision Expert',
    points: 'Certificate',
    icon: '👁️',
    color: '#20BEFF',
    url: 'https://www.kaggle.com/learn/certification/kunalar1411/computer-vision',
  },
  {
    title: 'Oracle Cloud Infrastructure 2025',
    subtitle: 'Certified Generative AI Professional',
    points: 'Professional',
    icon: '🎯',
    color: '#F80000',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=A7B502B34DDCA77668470C53826B3B190F2E20F73147805AE41B1B6FA81BEE2E',
  },
  {
    title: 'Oracle Cloud Infrastructure 2025',
    subtitle: 'Certified AI Foundations Associate',
    points: 'Associate',
    icon: '⚡',
    color: '#FF9500',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=0230AD7BC3651286C57CE9CDC616F803BF14D2E6859EFDFCABF4742D8347EC42',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className={styles.certifications}>
      <h2 className={styles.title}>
        <span className={styles.label}>// Certifications</span>
        Credentials & Achievements
      </h2>

      <div className={styles.grid}>
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className={styles.iconWrapper}
              style={{ background: `${cert.color}20`, borderColor: cert.color }}
            >
              <span className={styles.icon}>{cert.icon}</span>
            </div>

            <h3>{cert.title}</h3>
            <p className={styles.subtitle}>{cert.subtitle}</p>

            <div
              className={styles.badge}
              style={{ background: `${cert.color}20`, borderColor: cert.color, color: cert.color }}
            >
              {cert.points}
            </div>

            <div className={styles.cardGlow} style={{ background: `radial-gradient(circle, ${cert.color}20 0%, transparent 70%)` }}></div>
          </a>
        ))}
      </div>
    </section>
  )
}
