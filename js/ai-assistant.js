/**
 * Interactive Recruiter AI Assistant (Floating Chat Drawer & Bubble)
 * Gobikrishna P - Portfolio
 */

(function () {
  const KNOWLEDGE_BASE = {
    overview: `**Gobikrishna P** is an **AI / ML Engineer** with **1+ year of production experience** at **Avasoft Pvt Ltd** (Aug 2025 – Present, Chennai, India). He specializes in **Generative AI** (LLMs, RAG Pipelines, LangChain, LangGraph), **AWS MLOps** (ECS, Canary Deployments, Docker), and **Machine Learning & Data Analytics**. He holds a **B.Tech in Computer Science and Business Systems (CSBS)** with a CGPA of 8.02 from Knowledge Institute of Technology, Salem, and is a **1st Place Coding Contest Champion** at Sona College. He is actively open to AI/ML Engineer, Generative AI Specialist, and MLOps roles — Remote, Hybrid, or Onsite.`,

    skills: `### 🛠️ Technical Skill Stack:
- **Generative AI & LLMs:** Large Language Models (LLMs), RAG Pipelines, LangChain, LangGraph, Prompt Engineering, Embeddings, Vector Databases, Semantic Search, Document Intelligence, LLM-as-a-Judge evaluation.
- **Cloud & MLOps:** AWS ECS, ECR, ALB (Application Load Balancer), API Gateway, Docker, Multi-AZ Deployments, Blue-Green & Canary Traffic Routing (70/20/10/0), CI/CD Automation, Container Health Monitoring.
- **Machine Learning:** Scikit-learn, Supervised Learning, Unsupervised Learning, Feature Engineering, Hyperparameter Tuning, Cross-Validation, NumPy, Pandas, Model Evaluation (R², RMSE, MSE).
- **Backend & APIs:** Python, FastAPI, Flask, Java (NPTEL Elite), SQL, RESTful APIs, MySQL, PostgreSQL, MongoDB, Git/GitHub.
- **BI & Analytics:** Power BI, DAX KPI Calculations, Power Query ETL, Tableau, Relational Data Modeling.
- **Other Tools:** Postman, Matplotlib, Seaborn, Statistics, JSON, GitHub Actions.`,

    mlops: `### ☁️ AWS MLOps Control Plane & Multi-Tenant Architecture
- **What it is:** An enterprise-grade MLOps control plane enabling automated vendor onboarding, model lifecycle management, and isolated multi-tenant cloud hosting of proprietary ML models on AWS.
- **Multi-AZ Architecture:** Orchestrated containerized model deployments on **AWS ECS** across multiple Availability Zones with 4 dedicated tasks per vendor for high availability.
- **Zero-Downtime Blue-Green & Canary Releases:** Configured **Application Load Balancer (ALB)** weighted target groups for phased canary traffic distribution (100/0 → 70/20/10 → 0/100) with zero downtime.
- **Tenant Isolation & Security:** Implemented tenant-specific access control using **AWS API Gateway** with custom middleware and expiring API keys per vendor.
- **Container Lifecycle Management:** Built background health workers monitoring ECS container states (PENDING, SUCCESS, FAILED) with automated service discovery.
- **Tech Stack:** AWS ECS, ECR, ALB, API Gateway, Docker, Python, FastAPI, CI/CD.
- **Key Result:** 0 seconds deployment downtime, 100% strict tenant separation.`,

    rag: `### 🧠 Enterprise Document Intelligence & RAG Pipeline
- **What it is:** A high-throughput Retrieval-Augmented Generation system for extracting actionable insights from unstructured enterprise documents.
- **Document Processing:** Developed parsing and semantic chunking pipelines tailored for structured tables, PDFs, and legal/enterprise text.
- **Embeddings & Vector Search:** Implemented dense vector embeddings with metadata filtering for semantic search and knowledge retrieval.
- **Prompt Engineering:** Applied structured prompt templates with few-shot guidance to minimize LLM hallucinations and improve answer accuracy.
- **Low Latency APIs:** Asynchronous **FastAPI** microservices achieving under **250ms vector retrieval** latency.
- **Tech Stack:** Python, RAG Pipelines, LangChain, Vector Databases, Embeddings, Semantic Search, FastAPI.
- **Key Result:** Substantial hallucination reduction, supports PDF, DOCX, Tables, and plain text formats.`,

    projects: `### 🚀 All Featured Projects:
1. **AWS MLOps Control Plane** — Multi-tenant isolated cloud hosting on AWS ECS with zero-downtime Blue-Green & Canary (70/20/10/0) routing. Zero seconds downtime.
2. **NewsGenie: GenAI Story Generation & Debias Pipeline** — Automated article rewriting, tone calibration, debias engine, and LLM-as-a-Judge quality evaluation. 6 independent microservices.
3. **Enterprise Document Intelligence & RAG System** — High-throughput RAG pipeline with semantic chunking, vector embeddings, FastAPI microservices. Under 250ms retrieval.
4. **Logistics Freight Cost Prediction Engine** — Scikit-learn regression model replacing manual lookup tables. R² = 0.77, RMSE = 0.0412, 25,000x faster.
5. **Sensor Contamination Analytics & BI Dashboard** — Power Query ETL + interactive Power BI dashboards with DAX KPIs. Saves 15+ hours/week.
6. **Enterprise Multi-Category Sales Intelligence** — EDA across 50,000+ sales records, 8 product categories, Python & SQL.`,

    newsgenie: `### 📰 NewsGenie – GenAI Story Generation & Debias Pipeline
- **What it is:** An end-to-end GenAI content pipeline that automates article rewriting, eliminates AI slop, calibrates tone, removes stylistic biases, and evaluates quality using LLM-as-a-Judge.
- **Modular Microservices Architecture:** 6 independent services — Analysis, Generation, Transformation, Debias, Calibration, and Judging & Metrics Evaluation.
- **Debias Engine:** Detects and removes political, cultural, and stylistic biases from AI-generated narratives.
- **LLM-as-a-Judge:** Automated evaluation service calculating bias score, semantic fidelity, and readability index for each generated article.
- **Session & State Management:** MongoDB-backed session schemas for narrative versioning and intermediate artifact persistence.
- **Tech Stack:** Python, Large Language Models, LangChain, MongoDB, Docker, FastAPI, GitHub Actions CI/CD.
- **Key Result:** High tone calibration accuracy, 6 independently deployable microservices.`,

    freight: `### 🚚 Logistics Freight Cost Prediction Engine
- **What it is:** A machine learning regression engine that replaced a legacy manual lookup-table freight rate estimation workflow with instant ML-based pricing.
- **Data Engineering:** Built Python data cleaning routines handling missing logistics values, multi-carrier encodings, and weight-distance feature interactions.
- **Model Training:** Evaluated multiple Scikit-learn regressors with cross-validation and hyperparameter tuning to find the best-performing model.
- **Accuracy Metrics:** Achieved **R² = 0.77** and **RMSE = 0.0412** on held-out test data.
- **Inference Speed:** Model serves predictions in **~1.8ms** vs 45 seconds manually — a **25,000x speedup**.
- **Tech Stack:** Python, Scikit-learn, Pandas, NumPy, FastAPI, Matplotlib, Statistics.
- **Features Used:** Cargo weight, shipping distance, carrier priority tier, fuel index.`,

    contamination: `### 🏭 Sensor Contamination Analytics & Power BI Dashboard
- **What it is:** An end-to-end ETL and Business Intelligence reporting system for industrial quality assurance teams to track physical contaminants across manufacturing batches.
- **ETL Pipeline:** Extracted and cleaned raw sensor and inspection logs using **Power Query** and SQL stored procedures.
- **Contaminant Classification:** Segmented anomalies into 4 categories — metals, stones, plastics, and paper — across production lines.
- **Relational Data Modeling:** Built relational schema with custom **DAX KPI metrics** for defect rates, trend tracking, and batch-level drill-downs.
- **Interactive Power BI Dashboards:** Dynamic drill-downs enabling real-time root cause investigation at batch level.
- **Tech Stack:** Power BI, DAX, Power Query, SQL, Data Modeling, ETL.
- **Key Result:** 100% batch-level traceability, eliminated 15+ hours/week of manual reporting.`,

    sales: `### 📊 Enterprise Multi-Category Sales Intelligence (Vihara Tech Internship)
- **What it is:** Exploratory data analysis and predictive pattern discovery across 50,000+ sales transactions to drive data-backed growth strategies.
- **Dataset:** 50,000+ raw sales records across 8 diverse product categories.
- **Techniques:** Data cleaning, outlier detection, EDA, seasonality analysis, and regional demand pattern discovery using Python & SQL.
- **Tools:** Pandas, NumPy, SQL queries, data visualization.
- **Outcome:** Delivered strategic recommendations that directly informed inventory allocation and market positioning decisions.
- **Company:** Vihara Tech, Hyderabad/Pune (Feb 2024 – Mar 2024).`,

    experience: `### 💼 Professional Experience:
**1. Avasoft Pvt Ltd — AI/ML Engineer** (Aug 2025 – Present | Chennai, India)
- Design and develop Python-based AI/ML solutions covering requirement analysis, model development, integration, and testing.
- Build Generative AI & LLM applications including RAG pipelines for document intelligence and knowledge retrieval.
- Develop data-processing workflows: document parsing, text chunking, embeddings generation, semantic search, and vector retrieval.
- Apply prompt engineering techniques to optimize LLM outputs for accuracy, relevance, and business use cases.
- Prepare, clean, and transform structured data using Pandas, NumPy, and SQL for ML model development.
- Train and evaluate ML models using Scikit-learn with appropriate evaluation metrics.
- Integrate AI/ML services with application backends through REST APIs.
- Follow Git/GitHub-based version control and collaborative development practices.

**2. Vihara Tech — Data Analyst Intern** (Feb 2024 – Mar 2024 | Hyderabad/Pune)
- Analyzed 50,000+ sales records across 8 product categories using Python & SQL.
- Performed data preprocessing, outlier detection, and EDA to support business decision-making.
- Delivered strategic recommendations for inventory planning and market positioning.

**3. Bolt IoT Inventrom Pvt Ltd — Web Development Intern** (Jun 2023 – Jul 2023 | Bengaluru)
- Built responsive web application image galleries and UIs using HTML5, CSS3, and JavaScript.
- Implemented client-side interactivity and DOM manipulations to enhance UX.`,

    education: `### 🎓 Education & Honors:
**B.Tech — Computer Science and Business Systems (CSBS)**
Knowledge Institute of Technology, Salem, Tamil Nadu (2021 – 2025) | **CGPA: 8.02 / 10**
Interdisciplinary program combining CS algorithms, machine learning, systems design, and enterprise business management.

**Higher Secondary (HSSC) — Mathematics & Computer Science**
Notre Dame of Holy Cross School (CBSE), Salem | Score: 83% (2020–2021)

**🏆 Competitive Coding Honors:**
- **1st Place Winner:** Sona College Technical Coding Contest (2023) — competed against top collegiate engineering talent.
- **2nd Place (Runner-Up):** Algorithmic Problem-Solving Contest, Sona College (2024).

**📜 Certifications:**
- **NPTEL Elite:** Programming in Java — IIT Proctored Assessment (Elite grade)
- **IBM:** Data Analytics Professional Certification — data pipelines & EDA
- **Udemy:** SQL & Database Bootcamp — complex queries & optimization
- **TCS iON:** Professional Presentation Skills — communication & stakeholder alignment`,

    contact: `### 📬 Contact Gobikrishna:
- 📧 **Email:** [gobikrishnap.official@gmail.com](mailto:gobikrishnap.official@gmail.com)
- 📱 **Phone / WhatsApp:** [+91 76397 98140](tel:+917639798140)
- 🔗 **LinkedIn:** [linkedin.com/in/gobikrishna-p](https://linkedin.com/in/gobikrishna-p/)
- 💻 **GitHub:** [github.com/Gobi200](https://github.com/Gobi200)
- 📍 **Location:** Chennai, Tamil Nadu, India
- ✅ **Open to:** Remote, Hybrid, or Onsite AI/ML Engineer roles

Best way to reach him quickly: Email or LinkedIn message.`,

    availability: `### ✅ Hiring & Availability:
Gobikrishna is **actively open to new opportunities** in:
- **AI/ML Engineer** — building production ML and Generative AI systems
- **Generative AI / LLM Specialist** — RAG pipelines, LangChain, prompt engineering
- **MLOps / Cloud AI Engineer** — AWS ECS, Docker, Canary deployments
- **Data Scientist / ML Engineer** — Scikit-learn, feature engineering, model evaluation
- **Work Mode:** Remote, Hybrid, or Onsite (Chennai-based, open to relocation)

To schedule an interview or discuss a role:
- 📧 [gobikrishnap.official@gmail.com](mailto:gobikrishnap.official@gmail.com)
- 🔗 [LinkedIn](https://linkedin.com/in/gobikrishna-p/)`,

    python: `### 🐍 Python & Backend Skills:
- **Core Language:** Python is Gobikrishna's primary language for all AI/ML development.
- **Frameworks:** FastAPI (async REST APIs), Flask (lightweight services).
- **Data Libraries:** Pandas, NumPy for data cleaning, transformation, and feature engineering.
- **ML Libraries:** Scikit-learn for model training, evaluation, and hyperparameter tuning.
- **Other:** SQL (MySQL, PostgreSQL), MongoDB, Git/GitHub, Java (NPTEL Elite certified).`,

    langchain: `### 🔗 LangChain & LangGraph:
- Gobikrishna uses **LangChain** to build LLM-powered pipelines including RAG workflows, document loaders, text splitters, and retrieval chains.
- **LangGraph** is used for stateful multi-step agent orchestration and complex reasoning flows.
- Combined with **prompt engineering** and **vector databases** for production-grade Generative AI applications.`
  };

  const PROMPT_CHIPS = [
    { label: '🚀 Top Skills', query: 'skills' },
    { label: '☁️ AWS MLOps', query: 'mlops' },
    { label: '🧠 GenAI & RAG', query: 'rag' },
    { label: '📁 All Projects', query: 'projects' },
    { label: '🚚 Freight ML', query: 'freight' },
    { label: '🏆 Education & Honors', query: 'education' },
    { label: '✅ Hiring?', query: 'availability' },
    { label: '📞 Contact', query: 'contact' }
  ];

  function getBotResponse(userText) {
    const text = userText.toLowerCase();

    if (text.includes('hi') || text.includes('hello') || text.includes('hey') || text.includes('who are you') || text.includes('who is') || text.includes('tell me about') || text.includes('summary') || text.includes('overview') || text.includes('introduce') || text.includes('about gobi')) {
      return KNOWLEDGE_BASE.overview;
    }
    if (text.includes('hire') || text.includes('available') || text.includes('availability') || text.includes('open to') || text.includes('looking for') || text.includes('opportunity') || text.includes('recruit') || text.includes('position') || text.includes('role') || text.includes('job')) {
      return KNOWLEDGE_BASE.availability;
    }
    if (text.includes('langchain') || text.includes('langgraph') || text.includes('lang chain') || text.includes('lang graph')) {
      return KNOWLEDGE_BASE.langchain;
    }
    if (text.includes('python') || text.includes('fastapi') || text.includes('flask') || text.includes('backend') || text.includes('api') || text.includes('rest')) {
      return KNOWLEDGE_BASE.python;
    }
    if (text.includes('mlop') || text.includes('aws') || text.includes('ecs') || text.includes('ecr') || text.includes('alb') || text.includes('canary') || text.includes('docker') || text.includes('cloud') || text.includes('multi-az') || text.includes('blue') || text.includes('green') || text.includes('tenant') || text.includes('deployment')) {
      return KNOWLEDGE_BASE.mlops;
    }
    if (text.includes('rag') || text.includes('retrieval') || text.includes('llm') || text.includes('genai') || text.includes('generative') || text.includes('vector') || text.includes('embedding') || text.includes('semantic') || text.includes('document') || text.includes('chunk') || text.includes('prompt') || text.includes('hallucin')) {
      return KNOWLEDGE_BASE.rag;
    }
    if (text.includes('freight') || text.includes('logistic') || text.includes('shipping') || text.includes('cost predict') || text.includes('regression') || text.includes('r2') || text.includes('r²') || text.includes('rmse')) {
      return KNOWLEDGE_BASE.freight;
    }
    if (text.includes('contamin') || text.includes('sensor') || text.includes('power bi') || text.includes('powerbi') || text.includes('dashboard') || text.includes('dax') || text.includes('etl') || text.includes('power query') || text.includes('batch') || text.includes('industrial')) {
      return KNOWLEDGE_BASE.contamination;
    }
    if (text.includes('sales') || text.includes('vihara') || text.includes('50000') || text.includes('50,000') || text.includes('eda') || text.includes('exploratory')) {
      return KNOWLEDGE_BASE.sales;
    }
    if (text.includes('project') || text.includes('portfolio') || text.includes('built') || text.includes('work on') || text.includes('what have')) {
      return KNOWLEDGE_BASE.projects;
    }
    if (text.includes('skill') || text.includes('stack') || text.includes('tech') || text.includes('tool') || text.includes('language') || text.includes('framework') || text.includes('know') || text.includes('proficien') || text.includes('expertise')) {
      return KNOWLEDGE_BASE.skills;
    }
    if (text.includes('experience') || text.includes('company') || text.includes('avasoft') || text.includes('work') || text.includes('intern') || text.includes('bolt') || text.includes('career') || text.includes('history')) {
      return KNOWLEDGE_BASE.experience;
    }
    if (text.includes('education') || text.includes('college') || text.includes('university') || text.includes('degree') || text.includes('btech') || text.includes('b.tech') || text.includes('award') || text.includes('honor') || text.includes('cgpa') || text.includes('gpa') || text.includes('contest') || text.includes('certif') || text.includes('nptel') || text.includes('ibm') || text.includes('trophy') || text.includes('winner') || text.includes('coding')) {
      return KNOWLEDGE_BASE.education;
    }
    if (text.includes('contact') || text.includes('email') || text.includes('phone') || text.includes('reach') || text.includes('call') || text.includes('linkedin') || text.includes('github') || text.includes('location') || text.includes('chennai')) {
      return KNOWLEDGE_BASE.contact;
    }

    return `I can answer questions about Gobikrishna's **skills**, **projects**, **AWS MLOps**, **Generative AI & RAG**, **work experience**, **education**, and **hiring availability**.\n\nTry asking something like:\n- *"What are his skills?"*\n- *"Tell me about the RAG project"*\n- *"Is he available for hire?"*\n- *"How to contact him?"*`;
  }

  function formatMarkdown(text) {
    let formatted = text
      .replace(/^### (.*$)/gim, '<h4 class="text-indigo-300 font-semibold text-base mt-2 mb-1">$1</h4>')
      .replace(/^## (.*$)/gim, '<h3 class="text-cyan-300 font-bold text-lg mt-2 mb-1">$1</h3>')
      .replace(/\*\*(.*?)\*\*/gim, '<strong class="text-slate-100 font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em class="text-slate-300">$1</em>')
      .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank" class="text-cyan-400 hover:underline inline-flex items-center gap-1 font-medium">$1 <i class="fa-solid fa-arrow-up-right-from-square text-[10px] ml-0.5"></i></a>')
      .replace(/^-\s(.*$)/gim, '<li class="text-slate-300 text-xs sm:text-sm ml-4 list-disc">$1</li>')
      .replace(/\n/g, '<br/>');

    formatted = formatted.replace(/(<br\/>\s*)+<li/g, '<li').replace(/<\/li>\s*(<br\/>)+/g, '</li>');
    return formatted;
  }

  let isChatOpen = false;

  window.toggleChatDrawer = function (forceState) {
    const drawer = document.getElementById('ai-chat-drawer');
    const bubbleIcon = document.getElementById('chat-bubble-icon');
    const chatInput = document.getElementById('chat-input');
    const tooltip = document.getElementById('chat-bubble-tooltip');

    if (!drawer) return;

    if (typeof forceState === 'boolean') {
      isChatOpen = forceState;
    } else {
      isChatOpen = !isChatOpen;
    }

    if (isChatOpen) {
      drawer.classList.remove('drawer-closed');
      drawer.classList.add('drawer-open');
      if (bubbleIcon) {
        bubbleIcon.className = 'fa-solid fa-xmark text-xl text-white transition-transform rotate-90';
      }
      if (tooltip) tooltip.classList.add('opacity-0', 'pointer-events-none');
      if (chatInput) setTimeout(() => chatInput.focus(), 250);
    } else {
      drawer.classList.remove('drawer-open');
      drawer.classList.add('drawer-closed');
      if (bubbleIcon) {
        bubbleIcon.className = 'fa-solid fa-robot text-xl text-white transition-transform';
      }
      if (tooltip) tooltip.classList.remove('opacity-0', 'pointer-events-none');
    }
  };

  window.initAIAssistant = function () {
    const chatContainer = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('chat-send-btn');
    const chipsContainer = document.getElementById('chat-chips');

    if (!chatContainer || !chatInput || !sendBtn) return;

    if (chipsContainer) {
      chipsContainer.innerHTML = '';
      PROMPT_CHIPS.forEach(chip => {
        const btn = document.createElement('button');
        btn.className = 'px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-900/90 hover:bg-indigo-600/40 border border-slate-700/80 hover:border-indigo-500/50 text-slate-300 hover:text-white transition-all whitespace-nowrap shadow-sm cursor-pointer';
        btn.textContent = chip.label;
        btn.onclick = () => {
          handleSend(chip.query);
        };
        chipsContainer.appendChild(btn);
      });
    }

    function appendMessage(sender, htmlContent, isRaw = false) {
      const msgDiv = document.createElement('div');
      msgDiv.className = `flex ${sender === 'user' ? 'justify-end' : 'justify-start'}`;

      const bubble = document.createElement('div');
      bubble.className = sender === 'user' 
        ? 'chat-bubble-user max-w-[85%] text-white text-xs sm:text-sm px-3.5 py-2 shadow-md' 
        : 'chat-bubble-ai max-w-[90%] text-slate-200 text-xs sm:text-sm px-3.5 py-2.5 shadow-lg';

      if (isRaw) {
        bubble.textContent = htmlContent;
      } else {
        bubble.innerHTML = formatMarkdown(htmlContent);
      }

      msgDiv.appendChild(bubble);
      chatContainer.appendChild(msgDiv);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    function showTypingIndicator() {
      const indicator = document.createElement('div');
      indicator.id = 'typing-indicator';
      indicator.className = 'flex justify-start';
      indicator.innerHTML = `
        <div class="chat-bubble-ai px-3.5 py-2 flex items-center space-x-1.5">
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        </div>
      `;
      chatContainer.appendChild(indicator);
      chatContainer.scrollTop = chatContainer.scrollHeight;
      return indicator;
    }

    function removeTypingIndicator() {
      const indicator = document.getElementById('typing-indicator');
      if (indicator) indicator.remove();
    }

    function handleSend(overrideText) {
      const text = (overrideText || chatInput.value).trim();
      if (!text) return;

      appendMessage('user', text, true);
      if (!overrideText) chatInput.value = '';

      showTypingIndicator();
      sendBtn.disabled = true;

      setTimeout(() => {
        removeTypingIndicator();
        const reply = getBotResponse(text);
        appendMessage('bot', reply);
        sendBtn.disabled = false;
      }, 350);
    }

    sendBtn.addEventListener('click', () => handleSend());
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSend();
      }
    });

    if (chatContainer.children.length === 0) {
      appendMessage('bot', `👋 **Hello! I'm Gobikrishna's Interactive Portfolio Assistant.**\n\nAsk me about his **Generative AI experience**, **AWS MLOps architecture**, **Production Projects**, or **Hiring Availability**!`);
    }
  };

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isChatOpen) {
      window.toggleChatDrawer(false);
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    window.initAIAssistant();
  });
})();
