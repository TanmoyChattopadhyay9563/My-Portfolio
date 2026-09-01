<div align="center">

# 💼 Tanmoy Chattopadhyay — Executive Portfolio & Showcase

### **Business Analyst | Data Analyst | Power BI Developer | AI Strategist**

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![AWS Certified](https://img.shields.io/badge/AWS-Certified_Cloud_Practitioner-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/)

[**Explore Live Demo**](https://github.com/TanmoyChattopadhyay9563) • [**📄 Download Resume (PDF)**](https://drive.google.com/file/d/1Uj69xPHHgTZraIReP0izhQqkN3y-vypa/view?usp=sharing) • [**View LinkedIn**](https://www.linkedin.com/in/tanmoychattopadhyay) • [**Contact via Email**](mailto:chatterjee.kgp.99@gmail.com)

</div>

---

## 🌟 Overview

Welcome to the repository of **Tanmoy Chattopadhyay's Personal Portfolio & Technical Showcase**. This web application is a high-performance, modern, and interactive executive portfolio designed to demonstrate end-to-end expertise in **Business Analysis**, **Enterprise Data Analytics**, **Power BI Dashboard Development**, and **Machine Learning & AI Platform Engineering**.

Built with **React 19**, **TypeScript**, and **Tailwind CSS**, the portfolio blends sleek glassmorphism aesthetics with dynamic interactivity, in-browser analytics simulators, and direct recruiter communication channels.

---

## 🚀 Key Features & Architectural Highlights

### 1. 🎯 Executive Case Studies & Projects
- **RetainAI — Enterprise Customer Churn Intelligence & Retention Platform**:
  - Full-stack AI churn platform using **FastAPI, React 19, Tailwind CSS, and Streamlit**.
  - Optimized **Random Forest Classifier (0.9254 ROC-AUC, 83.2% Recall, 84.2% Accuracy)** on 5,000+ accounts.
  - **Explainable AI (SHAP)** feature importance, interactive What-If simulation, $1.46M+ revenue-at-risk monitoring, and 5 automated retention playbooks.
- **IPL Cricket Tournament Analytics Dashboard**:
  - Multi-page interactive Power BI dashboard analyzing 17 IPL seasons and 1,000+ matches across 200,000+ ball-by-ball records.
  - 35+ custom DAX measures, player strike rate distributions, and predictive win analytics.
- **Ghaziabad Smart City Integrated Operations & tbXMS Telemetry Platform**:
  - Elicited BRD/FRD frameworks and architected ITSM auto-ticketing workflows.
  - Integrated **tbXMS AI Predictive Analysis** for time-series memory (RAM), storage, and compute forecasting across 15,200+ municipal smart city assets.
  - Improved SLA resolution turnaround by **78%** (<3.5h response time) and maintained **99.98%** network uptime.

### 2. 📊 Interactive In-Browser Analytics Widget
- Real-time interactive simulation module allowing recruiters to test KPI calculations, slice-and-dice telemetry, and witness data modeling logic live.

### 3. 🔄 Business Analysis Lifecycle & Process Flow
- Structured 4-stage BA lifecycle visualization:
  1. *Discover & Elicit* (Stakeholder workshops, audits, interviews)
  2. *Analyze & Document* (BRD, FRD, SRS, Agile User Stories, JIRA)
  3. *Design & Visualize* (Power BI data models, wireframes, prototypes)
  4. *Deliver & Optimize* (UAT coordination, sprint execution, adoption metrics)

### 4. 📄 Executive CV & Printable Resume Modal
- In-app interactive CV preview with printable formatting and instant PDF export.

### 5. 📬 100% Responsive Direct Recruiter Contact Form
- Fluid layout optimized across all screen sizes (mobile, tablet, desktop).
- Automated AJAX form submission dispatching inquiries directly to `chatterjee.kgp.99@gmail.com` with real-time feedback, loading states, and confetti celebration.

---

## 🛠️ Tech Stack & Libraries

| Domain | Technologies Used |
| :--- | :--- |
| **Core Framework** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite 5](https://vitejs.dev/) |
| **Styling & Design** | [Tailwind CSS 3.4](https://tailwindcss.com/) + PostCSS + Autoprefixer |
| **Icons & UI Assets** | [Lucide React](https://lucide.dev/) + Custom SVG Vector graphics |
| **Micro-Interactions** | [Canvas-Confetti](https://www.npmjs.com/package/canvas-confetti) |
| **Form Backend** | Direct AJAX API dispatch via FormSubmit |
| **Deployment** | Vercel / Netlify / GitHub Pages ready |

---

## 📂 Project Directory Structure

```plaintext
Tanmoy_Portfolio/
├── public/
│   ├── favicon.svg                  # Brand favicon
│   ├── icons.svg                    # Vector icon sprites
│   └── images/                      # High-resolution project & profile media
│       ├── profile.jpg              # Primary profile photo
│       ├── about-profile.jpg        # Detailed bio portrait
│       ├── aws-badge.jpg            # AWS Certified Cloud Practitioner badge
│       ├── project-retainai.png     # RetainAI Churn Intelligence screenshot
│       ├── project-ipl.png          # IPL Analytics dashboard screenshot
│       ├── project-ipl-scatter.png  # IPL Scatter Matrix screenshot
│       ├── project-smartcity-dashboard.png   # tbXMS NOC Telemetry screenshot
│       └── project-smartcity-predictive.png  # tbXMS Predictive Analysis screenshot
├── src/
│   ├── assets/                      # Static bundled assets
│   ├── components/                  # Modular React UI components
│   │   ├── About.tsx                # Bio, experience timeline & values
│   │   ├── Contact.tsx              # Responsive contact form & direct info
│   │   ├── Education.tsx            # Academic degrees & certifications
│   │   ├── Experience.tsx           # Corporate roles & career trajectory
│   │   ├── Footer.tsx               # Footer with links & quick navigations
│   │   ├── Hero.tsx                 # High-impact introduction banner
│   │   ├── InteractiveAnalyticsWidget.tsx  # In-browser analytics simulator
│   │   ├── Navbar.tsx               # Responsive glassmorphism header & nav
│   │   ├── ProcessFlow.tsx          # BA methodology & lifecycle flow
│   │   ├── ProjectModal.tsx         # Detailed Case Study modal dialog
│   │   ├── Projects.tsx             # Filterable project portfolio grid
│   │   ├── ResumeModal.tsx          # Printable Executive CV preview
│   │   ├── Services.tsx             # Core competencies & service offerings
│   │   ├── Skills.tsx               # Technical & Business skills matrix
│   │   └── SocialIcons.tsx          # Reusable brand social icon SVGs
│   ├── data/
│   │   └── portfolioData.ts         # Centralized single source of truth data
│   ├── types/
│   │   └── portfolio.ts             # TypeScript interfaces & data contracts
│   ├── App.tsx                      # Root application layout
│   ├── index.css                    # Tailwind CSS directives & custom styles
│   ├── main.tsx                     # React DOM entry point
│   └── vite-env.d.ts                # Vite environment typings
├── index.html                       # HTML5 entry template & SEO meta tags
├── package.json                     # Project manifest & dependencies
├── postcss.config.js                # PostCSS configuration
├── tailwind.config.js               # Tailwind custom color tokens & animations
├── tsconfig.json                    # TypeScript compiler options
└── vite.config.ts                   # Vite bundler configuration
```

---

## ⚡ Getting Started Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18.0.0 or higher) and `npm` installed on your machine.

### 1. Clone the Repository
```bash
git clone https://github.com/TanmoyChattopadhyay9563/My-Portfolio.git
cd My-Portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to:
👉 **`http://localhost:5173`**

### 4. Build for Production
To create an optimized, minified production build:
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📝 Configuration & Customization

All personal information, experience history, skills, education, and project case studies are cleanly separated in:
👉 [`src/data/portfolioData.ts`](file:///d:/Tanmoy_Portfolio/src/data/portfolioData.ts)

To modify your data, simply update the corresponding arrays in `portfolioData.ts`:
- `personalInfo`: Name, titles, contact info, bio, resume link.
- `projects`: Add/edit case studies, images, metrics, and URLs.
- `experiences`: Work history, roles, key accomplishments.
- `skillCategories`: Categorized skill proficiency percentages and tags.
- `certifications`: AWS and technical certificates.

---

## 📬 Contact & Connect

**Tanmoy Chattopadhyay**  
*Business Analyst | Data Analyst | Power BI Developer*  
- 📍 **Location:** Gurugram, Haryana, India  
- 📧 **Email:** [chatterjee.kgp.99@gmail.com](mailto:chatterjee.kgp.99@gmail.com)  
- 📱 **Phone:** +91 7001191709  
- 💼 **LinkedIn:** [linkedin.com/in/tanmoychattopadhyay](https://www.linkedin.com/in/tanmoychattopadhyay)  
- 🐙 **GitHub:** [github.com/TanmoyChattopadhyay9563](https://github.com/TanmoyChattopadhyay9563)  

---

<div align="center">
  <sub>Designed & Developed with ❤️ by <strong>Tanmoy Chattopadhyay</strong>. All rights reserved.</sub>
</div>
