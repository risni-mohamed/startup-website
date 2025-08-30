Startup Website
A modern single-page startup website built with React and Tailwind CSS.
Fully responsive, accessible, and modular.

Live Demo: https://startup-website-risni.vercel.app/
GitHub Repository: https://github.com/risni-mohamed/startup-website

Features
- Header with logo and smooth-scroll navigation
- Hero section with headline and CTA
- About section with 3 core values
- Services section (cards loaded dynamically from JSON)
- Portfolio grid showcasing projects
- Contact form with validation
- Footer with copyright, socials, and Back-to-Top button
- Mobile-first responsive design with accessibility basics

Tech Stack
 - React
 - Tailwind CSS
 - Lucide-react icons
 - JSON files for services and portfolio


Project Structure
src/
  ├─ components/  UI sections (Header.jsx, Hero.jsx, About.jsx, Services.jsx, Portfolio.jsx, Contact.jsx, Footer.jsx)
  ├─ data/  JSON files (services.json and portfolio.json)
  ├─ images/
  ├─ App.js
  ├─ App.css
  ├─ index.css
  └─ index.js
public/
  └─ index.html


Design Decisions
 - Mobile-first responsive layout
 - Clean modular components
 - Accessibility basics (semantic HTML, alt text)
 - Smooth scrolling & active navigation
 - Minimal hooks-based state
 - Dynamic content for services and portfolio via JSON