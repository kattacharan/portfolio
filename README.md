# Katta Sai Charan — Engineering Portfolio V2

> **Data Science & AI Engineer** &bull; Specializing in Cloud-Native Systems, Agentic AI, Automation Workflows, and Distributed Data Pipelines.

[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg?style=flat-square)](LICENSE)
[![Portfolio Status](https://img.shields.io/badge/Status-Active-4ade80.svg?style=flat-square)](https://github.com/kattacharan/portfolio)
[![GitHub](https://img.shields.io/badge/GitHub-kattacharan-181818.svg?style=flat-square&logo=github)](https://github.com/kattacharan)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-katta--sai--charan-0077b5.svg?style=flat-square&logo=linkedin)](https://linkedin.com/in/katta-sai-charan)

---

## ⚡ Overview

A bespoke, high-performance personal portfolio website built from first principles using vanilla **HTML5**, **CSS3**, and **JavaScript (ES6+)**. Designed around a **monochrome editorial aesthetic** (deep black tones, subtle borders, high-contrast typography, and restrained emerald accent cues) to deliver an immersive, desktop-grade user experience.

The site is architected as a cohesive single-page journey with interactive modal overlays for deep-dive case studies, dynamic skill tabs, interactive education accordions, and custom canvas-based particle simulations.

---

## 🏛️ Sections & Architecture

### 01 &mdash; Home / Hero
* **Constellation Canvas:** Lightweight, real-time particle network simulation with proximity-based line rendering and responsive resize observers.
* **Executive Headline:** Clear positioning at the intersection of Computer Science, Data Science, and Cloud Systems.
* **Navigation:** Persistent floating navigation bar with scrollspy section tracking, progress indicators, and accessible mobile drawer.

### 02 &mdash; Identity & Focus
* **Core Disciplines:** Data Science, Artificial Intelligence, Cloud Infrastructure, and Test Automation.
* **Engineering Philosophy:** Designing resilient data systems, building autonomous AI workflows, and automating complex cloud-native architectures.

### 03 &mdash; Experience &mdash; Nokia
* **Role:** Test Engineer Intern &mdash; Cloud Platform Integration *(Bengaluru, India)*
* **Interactive Deep-Dive Modal:**
  * **5G Cloud RAN & Orchestration:** vCU, vDU, Control Plane, and CNF deployment across Single Node OpenShift (SNO), SNO+1, and Multi-Node OpenShift (MNO) topologies using Kuafu and MantaRay.
  * **Bare-Metal Telemetry & Upgrades:** Hardware discovery, BMC/BIOS/ESW firmware upgrades, and OCP deployment on Dell PowerEdge, HPE ProLiant, and OE platforms via Nokia NEAT and NADCM.
  * **Capacity & Performance (C&P) Benchmarking:** Dynamic telemetry profiling (wattage, temperature, fan speed) comparing Dell vs. HPE load efficiency; network throughput benchmarking with `iperf`.
  * **NFR Test Automation:** Modular Robot Framework and Python test suites validating cluster provisioning duration, node downtime, and CNF failover stability.
  * **AI-Assisted DevOps:** Accelerating code navigation, refactoring, and test authoring using GitHub Copilot, Cursor, and LLM engineering assistants.

### 04 &mdash; Selected Work & Projects
Interactive case study modal system showcasing 5 major engineering projects in exact order:

1. **[Multi-Agent Enterprise Knowledge Assistant](https://github.com/kattacharan)** *(Featured)*
   * Autonomous RAG application utilizing LangChain, LangGraph, FastAPI, FAISS, and OpenAI.
   * Multi-agent supervisor pattern routing queries across retrieval, validation, and citation workflows.
2. **Website Evaluation Using Opinion Mining**
   * Sentiment analysis system evaluating web platforms based on TrustPilot user reviews scraped with BeautifulSoup.
   * NLTK preprocessing, hybrid lexicon scoring (TextBlob + VADER), and a stacked ensemble classifier (Naive Bayes, Logistic Regression, Random Forest) with SMOTE balancing (~70% accuracy).
3. **[Task Automation Bot](https://github.com/kattacharan/Task-Automation-Bot)**
   * Multi-modal desktop productivity assistant combining voice recognition and interactive Streamlit UI.
   * Smart voice/text scheduling, automated file organization, and system-wide PDF indexing.
4. **[Content-Based Movie Recommender System](https://github.com/kattacharan/movies-reccomendation-sys)**
   * Machine learning recommendation engine computing vector cosine similarity over movie metadata.
   * TMDb REST API integration for real-time poster hydration and responsive Streamlit UI.
5. **Stocks Market Analytics Dashboard**
   * Enterprise-grade financial intelligence solution powered by Power BI, SQL, Python, and DAX.
   * 3 specialized dashboards: **Overview** (market snapshot, KPIs, dynamic slicers), **Company Profile** (fundamental deep dive), and **Financial Performance** (revenue, EPS, ROE, RSI, MACD), with NLP news sentiment.

### 05 &mdash; Engineering Stack
* Interactive tabbed technical matrix categorized into:
  * **Programming:** Python, Java, C++
  * **Data Engineering:** ETL/ELT pipelines, Data Modeling, Warehousing, Processing
  * **AI / ML:** Scikit-learn, TensorFlow, Supervised & Unsupervised Learning, Classification, Regression
  * **GenAI & LLMs:** LangChain, LangGraph, RAG Architectures, Vector Databases (FAISS), Multi-Agent Systems
  * **Cloud & Orchestration:** Kubernetes, Red Hat OpenShift (OCP), Docker, Helm
  * **Automation:** Robot Framework, Test Automation, Bash / Shell Scripting
  * **Telecom:** 5G Cloud RAN, CNF, vCU/vDU, L3 Call Testing, RU Configuration
  * **Databases:** PostgreSQL, MySQL, SQLite, MongoDB, Cassandra
  * **Tools:** Git, GitHub, Jenkins, Postman, Linux, Power BI, DAX

### 06 &mdash; Education & Credentials
* **B.Tech in Computer Science & Engineering (Data Science):** CMR Technical Campus *(CGPA: 8.02 / 10)*
* **Intermediate (MPC):** Narayana Junior College *(Score: 92.5%)*
* **Schooling (SSC):** St. Anthony’s High School *(CGPA: 9.3 / 10)*
* **Certifications:**
  * Oracle Cloud Infrastructure 2024 Generative AI Certified Professional
  * Microsoft Certified: Azure Fundamentals (AZ-900)
  * NPTEL: Python for Data Science
  * Cisco: Introduction to Data Science

### 07 &mdash; Contact & Footer
* Quick-connect channels via Email, LinkedIn, and GitHub.
* Custom magnetic interactions and back-to-top navigation.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Markup & Semantics** | Semantic HTML5, accessible ARIA attributes, meta SEO tags |
| **Styling & System** | Modern Vanilla CSS, CSS Custom Properties (Variables), Flexbox, CSS Grid |
| **Visual Design** | Space Grotesk, Inter, and Space Mono typefaces; deep black palette with `#4ade80` accent |
| **Interactivity** | Vanilla JavaScript (ES6+), HTML5 Canvas 2D Context, Intersection Observer API |
| **Icons & Media** | Font Awesome 6, custom SVG architecture diagrams |
| **Tooling & Hosting** | Git, GitHub Pages |

---

## 🚀 Getting Started

### Local Setup
1. Clone this repository:
   ```bash
   git clone https://github.com/kattacharan/portfolio.git
   cd portfolio
   ```

2. Open `index.html` in any modern web browser, or serve it using a lightweight development server:
   ```bash
   # Using Python
   python -m http.server 3000

   # Using Node.js
   npx serve .
   ```

3. Open your browser and navigate to `http://localhost:3000`.

---

## 📄 License

This project is licensed under the **MIT License** &mdash; see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact & Connect

* **Author:** Katta Sai Charan
* **GitHub:** [@kattacharan](https://github.com/kattacharan)
* **LinkedIn:** [katta-sai-charan](https://linkedin.com/in/katta-sai-charan)
* **Location:** Bengaluru / Hyderabad, India
