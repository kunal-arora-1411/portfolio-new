# Kunal Arora - Portfolio Website

A modern, creative portfolio website built with Next.js and Spline 3D, showcasing my work as an AI & ML Engineer.

## Features

- **3D Interactive Hero Section** - Powered by Spline for immersive visuals
- **Custom Cursor** - Dual-element cursor with hover effects
- **Typing Animation** - Dynamic job title cycling
- **Glassmorphism Design** - Modern, translucent UI elements
- **Smooth Animations** - Scroll-reveal and hover effects throughout
- **Responsive Design** - Optimized for all devices
- **Dark Theme** - Eye-friendly with cyan accent colors

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **3D Graphics**: Spline (@splinetool/react-spline)
- **Styling**: CSS Modules
- **Font**: Inter (Google Fonts)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio/
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Main page
│   └── globals.css        # Global styles
├── components/
│   ├── Navigation.js      # Navigation bar
│   ├── Hero.js            # Hero section with 3D Spline
│   ├── About.js           # About section
│   ├── Experience.js      # Work experience
│   ├── Projects.js        # Projects showcase
│   ├── Skills.js          # Technical skills
│   ├── Education.js       # Education & research
│   ├── Certifications.js  # Certifications
│   └── Contact.js         # Contact section
├── public/
│   └── assets/
│       └── profile.jpg    # Profile image
└── package.json
```

## Build for Production

```bash
npm run build
npm start
```

## License

© 2025 Kunal Arora. All rights reserved.
