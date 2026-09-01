import type { Project, ExperienceItem, EducationItem, ServiceItem, SkillCategory } from '../types/portfolio';

export const personalInfo = {
  name: "Tanmoy Chattopadhyay",
  title: "Business Analyst | Data Analyst | Power BI Developer",
  shortIntro: "Business Analyst with experience in requirement gathering, stakeholder management, Power BI dashboard development, business documentation, and data-driven decision making. Passionate about transforming business challenges into practical and scalable solutions.",
  aboutDetailed: `Tanmoy Chattopadhyay is a Business Analyst with experience in business requirement analysis, stakeholder communication, documentation, reporting, and analytics. With a strong academic foundation in Computer Science and hands-on exposure to software development, cloud technologies, and data analytics, he brings a unique blend of business understanding and technical expertise.

He has worked on enterprise solutions, monitoring systems, Power BI dashboards, process optimization initiatives, and Smart City projects while collaborating with business users, technical teams, and management stakeholders.`,
  email: "chatterjee.kgp.99@gmail.com",
  phone: "+91 7001191709",
  location: "Gurugram, Haryana, India",
  linkedin: "https://www.linkedin.com/in/tanmoychattopadhyay",
  github: "https://github.com/TanmoyChattopadhyay9563",
  status: "Available for High-Impact Opportunities",
  yearsExperience: "2.5+",
  projectsDelivered: "3+",
  resumeFileName: "Tanmoy_Chattopadhyay_Resume.pdf",
  resumeUrl: "https://drive.google.com/file/d/1Uj69xPHHgTZraIReP0izhQqkN3y-vypa/view?usp=sharing"
};

export const personalInterests = [
  { name: "Traveling", icon: "Compass" },
  { name: "Singing", icon: "Mic" },
  { name: "Football", icon: "Trophy" },
  { name: "Cricket", icon: "Activity" },
  { name: "Badminton", icon: "Zap" },
  { name: "Continuous Learning", icon: "BookOpen" }
];

export const professionalValues = [
  { title: "Problem Solving", desc: "Deconstructing complex enterprise bottlenecks into systematic, actionable resolutions.", icon: "CheckCircle2" },
  { title: "Team Collaboration", desc: "Fostering synergy between engineering teams, product managers, and executive stakeholders.", icon: "Users" },
  { title: "Analytical Thinking", desc: "Rooting business decisions in rigorous data evidence, metrics, and quantitative models.", icon: "BarChart3" },
  { title: "Business Excellence", desc: "Aligning software deliverables precisely with organizational ROI and strategic goals.", icon: "Award" },
  { title: "Continuous Improvement", desc: "Relentlessly refining workflows through Agile feedback loops and automation.", icon: "TrendingUp" }
];

export const baLifecycle = [
  {
    step: "01",
    title: "Discover & Elicit",
    description: "Conducting stakeholder workshops, user interviews, and existing process audits to uncover latent requirements.",
    tools: ["Stakeholder Interviews", "Brainstorming", "Process Mapping"]
  },
  {
    step: "02",
    title: "Analyze & Document",
    description: "Translating ambiguous business needs into clear, unambiguous BRD, FRD, SRS, user stories, and acceptance criteria.",
    tools: ["BRD / FRD / SRS", "JIRA", "UML / Workflow Diagrams"]
  },
  {
    step: "03",
    title: "Design & Visualize",
    description: "Prototyping data models, architecting Power BI reports, drafting wireframes, and validating with business users.",
    tools: ["Power BI", "SQL Analytics", "Figma / Wireframes"]
  },
  {
    step: "04",
    title: "Deliver & Optimize",
    description: "Guiding sprint execution, facilitating UAT testing, monitoring system adoption, and driving continuous enhancements.",
    tools: ["Agile / Scrum", "UAT Coordination", "KPI Monitoring"]
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: "techbridge",
    role: "Business Analyst",
    company: "Techbridge Consultancy Pvt. Ltd.",
    location: "Gurugram, Haryana",
    period: "September 2026 – Present",
    type: "Full-Time",
    badge: "Current Role",
    responsibilities: [
      "Requirement gathering and comprehensive business impact analysis for enterprise clients.",
      "Authoring industry-standard BRD (Business Requirement Document) and FRD (Functional Requirement Document) artifacts.",
      "Active stakeholder management, aligning cross-functional teams and executive sponsors.",
      "Business process optimization through workflow redesign and automated tracking.",
      "Reporting and advanced data analytics to support strategic decision making.",
      "End-to-end solution delivery coordination, UAT management, and sprint planning."
    ],
    technologies: ["BRD/FRD", "Power BI", "SQL", "Stakeholder Management", "JIRA", "Process Mapping"]
  },
  {
    id: "mobilefirst",
    role: "Business Analyst",
    company: "MobileFirst Applications Fintegration",
    location: "Ahmedabad, Gujarat",
    period: "August 2025 – September 2026",
    type: "Full-Time",
    responsibilities: [
      "End-to-end business requirement analysis across financial integration and software products.",
      "Proactive stakeholder communication across business units and engineering teams.",
      "Designing and deploying interactive Power BI dashboards for operational transparency.",
      "Excel reporting, data cleanup, and automated KPI generation.",
      "Authoring standard operating procedures and process documentation.",
      "Hands-on business solution implementation and defect triage."
    ],
    technologies: ["Power BI", "Excel Analytics", "Process Documentation", "Stakeholder Communication", "Fintech Solutions"]
  },
  {
    id: "intern",
    role: "Technical Intern",
    company: "Frontend & CMS Solutions",
    location: "Remote / Hybrid",
    period: "January 2024 – July 2024",
    type: "Internship",
    responsibilities: [
      "BigCommerce CMS development and store customization for ecommerce clients.",
      "HTML5, CSS3, and modern JavaScript implementation for responsive web interfaces.",
      "Custom UI styling, responsive layout debugging, and storefront optimization.",
      "Frontend development support and bug resolution in active sprint cycles.",
      "Real-time project execution under senior engineering mentorship."
    ],
    technologies: ["BigCommerce CMS", "HTML5", "CSS3", "JavaScript", "Frontend Dev"]
  }
];

export const educationList: EducationItem[] = [
  {
    id: "gl-bajaj",
    degree: "Bachelor of Technology (B.Tech) – Computer Science",
    institution: "GL Bajaj Institute of Technology and Management",
    location: "Greater Noida, India",
    year: "Graduated: 2024",
    description: "Solid theoretical & practical foundation in Computer Science, Data Structures, Algorithms, Database Management Systems, Software Engineering, and Machine Learning.",
    badge: "B.Tech CSE"
  },
  {
    id: "kingston",
    degree: "Diploma in Computer Science",
    institution: "Kingston Polytechnic College",
    year: "Completed",
    description: "Core technical curriculum covering programming fundamentals, computer hardware, operating systems, and web technologies.",
    badge: "Diploma CS"
  },
  {
    id: "atulmoni",
    degree: "School Education (Higher Secondary)",
    institution: "Atulmoni High HS School",
    year: "Completed",
    description: "Higher Secondary education with focused coursework in Science, Mathematics, and Computer Science fundamentals.",
    badge: "Higher Secondary"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Business Analysis",
    description: "Elicitation, documentation, and agile governance to align business objectives with IT delivery.",
    icon: "FileSpreadsheet",
    skills: [
      { name: "Requirement Gathering", level: 95, tag: "Core" },
      { name: "BRD Documentation", level: 92, tag: "Enterprise" },
      { name: "FRD Documentation", level: 90, tag: "Enterprise" },
      { name: "SRS Documentation", level: 88, tag: "Technical" },
      { name: "Stakeholder Management", level: 92, tag: "Leadership" },
      { name: "Gap Analysis", level: 86, tag: "Strategy" },
      { name: "Agile & Scrum Methodology", level: 90, tag: "Agile" },
      { name: "User Stories & Acceptance Criteria", level: 94, tag: "Agile" },
      { name: "Sprint Planning & Backlog Grooming", level: 88, tag: "Agile" }
    ]
  },
  {
    category: "Data Analytics & BI",
    description: "Transforming raw multi-source enterprise data into actionable visual dashboards and strategic insights.",
    icon: "PieChart",
    skills: [
      { name: "Power BI (DAX, Power Query)", level: 92, tag: "Advanced" },
      { name: "SQL (Complex Joins, Aggregations)", level: 90, tag: "Advanced" },
      { name: "Python (Data Analysis, Pandas)", level: 85, tag: "Analytics" },
      { name: "Advanced Excel (Pivot, VLOOKUP, Macros)", level: 94, tag: "Core" },
      { name: "KPI Reporting & Executive Scorecards", level: 92, tag: "Reporting" },
      { name: "Data Visualization & Storytelling", level: 90, tag: "BI" },
      { name: "Exploratory Data Analysis (EDA)", level: 88, tag: "Analytics" },
      { name: "Business Insights Generation", level: 90, tag: "Decision" }
    ]
  },
  {
    category: "Technical & Cloud",
    description: "Technical foundations enabling seamless developer collaboration, web implementation, and cloud fluency.",
    icon: "Cpu",
    skills: [
      { name: "AWS Cloud Practitioner (Certified)", level: 85, tag: "Cloud" },
      { name: "BigCommerce CMS", level: 88, tag: "E-Commerce" },
      { name: "JavaScript (ES6+)", level: 82, tag: "Frontend" },
      { name: "HTML5 & Modern CSS3", level: 90, tag: "Web" },
      { name: "JIRA & Confluence Workflows", level: 90, tag: "Productivity" },
      { name: "Git & Version Control", level: 80, tag: "DevOps" }
    ]
  },
  {
    category: "Soft Skills & Leadership",
    description: "Interpersonal mastery to navigate complex stakeholder dynamics and drive organizational adoption.",
    icon: "Sparkles",
    skills: [
      { name: "Stakeholder Communication", level: 95, tag: "Crucial" },
      { name: "Analytical Problem Solving", level: 94, tag: "Mindset" },
      { name: "Cross-Functional Team Collaboration", level: 92, tag: "Teamwork" },
      { name: "Executive Presentation Skills", level: 88, tag: "Communication" },
      { name: "Negotiation & Consensus Building", level: 86, tag: "Leadership" }
    ]
  }
];

export const services: ServiceItem[] = [
  {
    id: "ba-services",
    title: "Business Analysis & Strategy",
    description: "Bridge the communication gap between business visionaries and technical engineers with rock-solid documentation and process clarity.",
    iconName: "Briefcase",
    badge: "Core Expertise",
    capabilities: [
      "Requirement Gathering & Stakeholder Interviews",
      "BRD / FRD / SRS Comprehensive Documentation",
      "Gap Analysis & As-Is vs. To-Be Process Mapping",
      "Agile User Story Authoring & Acceptance Criteria",
      "Business Process Optimization & Waste Elimination",
      "UAT Planning, Defect Triage & Sprint Support"
    ]
  },
  {
    id: "analytics-bi",
    title: "Data Analytics & Power BI",
    description: "Turn disparate relational databases and operational spreadsheets into high-impact interactive dashboards with real-time KPI visibility.",
    iconName: "BarChart4",
    badge: "Data Mastery",
    capabilities: [
      "Interactive Power BI Dashboard Engineering",
      "Advanced DAX Measures & Power Query ETL",
      "Complex SQL Analytical Query Optimization",
      "Executive KPI Monitoring & Scorecards",
      "Automated Scheduled Reporting Pipelines",
      "Exploratory Data Analysis & Strategic Insights"
    ]
  },
  {
    id: "web-cms",
    title: "Web Development & CMS Solutions",
    description: "Leverage hands-on computer science background to build, customize, and optimize enterprise e-commerce and web platforms.",
    iconName: "Globe",
    badge: "Technical",
    capabilities: [
      "BigCommerce CMS Storefront Customization",
      "Responsive HTML5, CSS3 & JavaScript Implementation",
      "UI/UX Layout Polishing & Interactive Components",
      "Website Performance & Core Web Vitals Optimization",
      "Cross-Browser Compatibility & Frontend Debugging"
    ]
  },
  {
    id: "cloud-support",
    title: "Cloud & Technical Support",
    description: "Ensure enterprise infrastructure reliability with AWS cloud fundamentals and robust ITSM ticket management.",
    iconName: "Cloud",
    badge: "AWS Certified",
    capabilities: [
      "AWS Cloud Fundamentals & Resource Knowledge",
      "Enterprise Ticket Management & SLA Tracking",
      "JIRA Workflow Automation & Customization",
      "Network Monitoring System (NMS) Research",
      "System Health Telemetry & Production Support"
    ]
  },
  {
    id: "product-support",
    title: "Product & Project Lifecycle",
    description: "Support digital product lifecycle from initial conceptual wireframes in Figma to release management and post-launch monitoring.",
    iconName: "Layers",
    badge: "Lifecycle",
    capabilities: [
      "Low/High-Fidelity Wireframing & Prototyping",
      "Figma Collaboration with UI/UX Teams",
      "Comprehensive Product Documentation & Handbooks",
      "Feature Prioritization using MoSCoW & RICE",
      "Post-Launch Adoption Metrics Tracking"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "retainai-churn-intelligence",
    title: "RetainAI — Enterprise Customer Churn Intelligence & Retention Platform",
    category: "AI & Machine Learning",
    role: "Lead Machine Learning & AI Developer",
    shortDescription: "End-to-end customer churn prediction platform built with FastAPI, React 19, and Random Forest (0.9254 ROC-AUC), analyzing 5,000+ accounts with SHAP explainability and interactive what-if simulation.",
    fullDescription: "Architected and deployed an end-to-end enterprise AI churn intelligence platform analyzing 5,000+ customer accounts. Built and optimized a high-performance Random Forest Classifier achieving 84.2% accuracy, 83.2% recall, and 0.9254 ROC-AUC. Integrated Explainable AI (SHAP), interactive what-if ROI simulation, executive revenue-at-risk monitoring dashboards, five targeted retention playbooks, and automated multi-format data export pipelines.",
    image: "/images/project-retainai.png",
    liveDemoUrl: "https://github.com/TanmoyChattopadhyay9563/AI-Customer-Churn-Prediction-System",
    githubUrl: "https://github.com/TanmoyChattopadhyay9563/AI-Customer-Churn-Prediction-System",
    technologies: ["FastAPI", "React 19", "Python", "Scikit-Learn", "Random Forest", "SHAP / XAI", "Tailwind CSS", "Streamlit", "OpenPyXL"],
    highlights: [
      "Built and Deployed an End-to-End AI Churn Intelligence Platform: Developed a full-stack customer churn prediction platform using FastAPI, React 19, Tailwind CSS, and Streamlit, capable of analyzing 5,000+ customer records with fast prediction response times.",
      "Developed a High-Performing Machine Learning Model: Built and optimized a Random Forest Classifier that achieved 84.2% accuracy, 83.2% recall, and 0.9254 ROC-AUC, helping identify high-risk customers and improve retention strategies.",
      "Implemented Explainable AI for Better Decision-Making: Added feature importance analysis, SHAP-based explanations, and automated business-friendly insights to help stakeholders understand why customers are likely to churn.",
      "Created a Real-Time What-If Analysis Engine: Designed an interactive simulator that allows teams to adjust factors such as discounts, contract plans, and service levels to evaluate their impact on churn probability and campaign ROI.",
      "Built Executive-Level Business Dashboards: Developed interactive dashboards to track Revenue at Risk ($1.15M+), Customer Lifetime Value (CLV), retention trends, and customer risk segments for data-driven decision-making.",
      "Designed Data-Driven Retention Recommendations: Created five targeted retention playbooks with automated ROI and payback calculations to support effective customer engagement strategies.",
      "Automated Reporting and Data Exports: Enabled export of Excel, PDF, and CSV reports using OpenPyXL, making it easier to share insights and integrate data with CRM platforms such as Salesforce."
    ],
    problemStatement: "Enterprises face substantial recurring revenue losses due to late churn detection, opaque 'black-box' machine learning predictions, and lack of prescriptive, actionable customer retention workflows.",
    solutionArchitecture: "Engineered a modular full-stack AI platform with FastAPI microservices serving an optimized Random Forest model (0.9254 ROC-AUC). Integrated SHAP feature attribution algorithms, a client-side what-if parameter simulator in React 19, executive analytics scorecards, and automated OpenPyXL reporting.",
    businessImpact: [
      "Proactively flags 1,437 high-risk accounts safeguarding $1.46M+ in annualized recurring revenue",
      "Empowered customer success teams with transparent SHAP explanations reducing customer diagnosis time by 65%",
      "Engineered 5 prescriptive retention playbooks with automated ROI and payback calculators"
    ],
    metrics: [
      { label: "ROC-AUC Score", value: "0.9254" },
      { label: "Model Recall", value: "83.2%" },
      { label: "Monitored Accounts", value: "5,000" },
      { label: "Revenue Protected", value: "$1.46M+" }
    ]
  },
  {
    id: "ipl-analytics",
    title: "IPL Cricket Tournament Analytics Dashboard",
    category: "Power BI & SQL Analytics",
    role: "Lead Data Analyst & BI Developer",
    shortDescription: "Interactive multi-page Power BI dashboard analyzing 17 seasons and 1000+ matches with custom DAX measures, player strike rate distributions, and predictive win analytics.",
    fullDescription: "A comprehensive sports analytics solution built by aggregating over 17 Indian Premier League (IPL) seasons comprising 1,000+ matches and over 200,000 ball-by-ball records. Designed complex MySQL extraction queries and transformed unstructured sports telemetry into star-schema data models. Created dynamic DAX calculations for batsman consistency ratings, bowler economy pressure indexes, and team head-to-head win gauges.",
    image: "/images/project-ipl.png",
    secondaryImage: "/images/project-ipl-scatter.png",
    imageCaption: "Batting Intelligence & Team Analytics UI",
    secondaryImageCaption: "Strike Rate vs Average Scatter Matrix",
    liveDemoUrl: "https://ipl-analysis-dashboard-tanmoy.streamlit.app/",
    githubUrl: "https://github.com/TanmoyChattopadhyay9563",
    technologies: ["Power BI", "DAX", "Power Query", "MySQL", "Python", "Pandas", "Streamlit"],
    highlights: [
      "Analyzed 17 complete IPL seasons and 1,000+ professional matches",
      "Engineered 35+ custom DAX measures for dynamic slice-and-dice metrics",
      "Developed high-performance SQL analytical queries for match aggregation",
      "Built multi-view interactive Power BI dashboards with real-time slicers",
      "Created KPI-driven visualizations for strike rate curves and bowler efficiency",
      "Conducted extensive Exploratory Data Analysis (EDA) uncovering key venue trends"
    ],
    problemStatement: "Cricket franchises and analytics enthusiasts required a unified visual platform to dissect multi-season performance patterns, player match-ups, and stadium-specific scoring trends without manual spreadsheet manipulation.",
    solutionArchitecture: "ETL pipeline implemented in Python and MySQL, loading clean relational tables into Power BI. Built optimized star-schema model with date, venue, team, and player dimensions supporting instant cross-filtering across 200k+ data points.",
    businessImpact: [
      "Reduced match performance evaluation turnaround from 4 hours to under 30 seconds",
      "Enabled granular player head-to-head comparisons across powerplay, middle, and death overs",
      "Featured interactive visual gauges adopted for match preview reports"
    ],
    metrics: [
      { label: "Seasons Analyzed", value: "17" },
      { label: "Matches Processed", value: "1,000+" },
      { label: "Ball-by-Ball Records", value: "200K+" },
      { label: "Custom DAX Measures", value: "35+" }
    ]
  },
  {
    id: "smart-city",
    title: "Ghaziabad Smart City Integrated Operations & tbXMS Telemetry Platform",
    category: "Business Analysis & tbXMS",
    role: "Business Analyst",
    shortDescription: "Architected BRD/FRD frameworks, automated ITSM incident pipelines, and AI-driven tbXMS predictive telemetry to forecast hardware bottlenecks (RAM/CPU/Disk) across 15,200+ municipal smart city assets.",
    fullDescription: "Spearheaded business requirement analysis, workflow architecture, and technical documentation for the Ghaziabad Municipal Corporation Integrated Command & Control Center (ICCC). Designed enterprise Network Management Systems (NMS) telemetry workflows using tbXMS and tbITSM. Championed the tbXMS Predictive Analysis module—leveraging time-series forecasting across 1d/7d/15d/30d cycles to predict memory (RAM), storage, and compute saturation before hardware failures occur, auto-triggering preventive maintenance tickets and eliminating unplanned downtime.",
    image: "/images/project-smartcity-dashboard.png",
    secondaryImage: "/images/project-smartcity-predictive.png",
    imageCaption: "tbXMS NOC Telemetry & Critical Nodes Dashboard",
    secondaryImageCaption: "tbXMS AI Predictive Analysis & Resource Forecasting Engine",
    liveDemoUrl: "https://github.com/TanmoyChattopadhyay9563",
    githubUrl: "https://github.com/TanmoyChattopadhyay9563",
    technologies: ["BRD/FRD Authoring", "tbXMS Telemetry", "tbITSM Auto-Ticketing", "Predictive Analysis", "NMS Architecture", "SLA Modeling", "JIRA", "Process Mapping"],
    highlights: [
      "Authored Comprehensive BRD & FRD Artifacts: Formulated 80+ pages of detailed functional and business requirements for municipal IoT devices, CCTV networks, and server nodes.",
      "Integrated tbXMS AI Predictive Analysis: Configured time-series resource forecasting (1d, 7d, 15d, 30d) for critical servers and Windows/Linux nodes, predicting RAM and disk saturation days before threshold breach.",
      "Automated Preventive ITSM Incident Pipeline: Engineered automated ticket dispatching linking tbXMS predictive anomaly alerts directly to tbITSM, reducing manual intervention by 70%.",
      "Designed Business Critical Nodes NOC Dashboard: Conceptualized real-time operational views monitoring CPU load, RAM usage, hard disk consumption, network jitter, latency, and packet loss.",
      "Conducted NMS Enterprise Market Research: Evaluated 6 industry-leading Network Management Systems against municipal SLAs, geo-fencing, and cost benchmarks.",
      "Maintained High Network Reliability & SLA Governance: Established automated SLA escalation matrix ensuring 99.98% core network uptime across 15,200+ municipal connected assets."
    ],
    problemStatement: "The Ghaziabad Municipal Corporation faced reactive incident handling, frequent server overload crashes, and delayed technician dispatch due to unmonitored hardware degradation across critical surveillance and traffic servers.",
    solutionArchitecture: "Designed a two-tier architecture: (1) tbXMS Telemetry & Predictive Analysis engine continuously forecasting compute/storage exhaustion, and (2) tbITSM auto-ticketing workflow that converts predictive threshold breaches into severity-tagged maintenance tickets with geo-assigned field SLAs.",
    businessImpact: [
      "Transitioned municipal operations from reactive fire-fighting to proactive predictive maintenance",
      "Reduced average incident response time from 18 hours down to under 3.5 hours (78% SLA improvement)",
      "Maintained 99.98% core network and server uptime visibility across 15,200+ connected municipal endpoints",
      "Received commendation for clarity of functional specifications and zero-defect UAT delivery"
    ],
    metrics: [
      { label: "Connected Devices", value: "15,200+" },
      { label: "SLA Improvement", value: "78%" },
      { label: "Resolution Time", value: "<3.5 Hrs" },
      { label: "Uptime Monitored", value: "99.98%" }
    ]
  }
];

export const certifications = [
  {
    id: "aws-ccp",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    badgeImage: "/images/aws-badge.jpg",
    issueDate: "Verified",
    description: "Validates overall understanding of AWS Cloud platform, core services (EC2, S3, RDS, Lambda, VPC), security best practices, compliance, and cloud economics.",
    skills: ["Cloud Architecture", "AWS Core Services", "Security & IAM", "Cloud Billing & Economics"]
  }
];

export const achievements = [
  { value: "2.5+", label: "Years Experience", description: "In Business Analysis & Data Analytics" },
  { value: "3+", label: "Enterprise Projects", description: "Delivered across municipal & fintech domains" },
  { value: "100%", label: "AWS Certified", description: "Cloud Practitioner Certified" },
  { value: "35+", label: "Custom DAX & KPIs", description: "Power BI dashboards engineered" },
  { value: "Dual", label: "Domain Expertise", description: "Bridging CS Tech & Business Strategy" }
];
