/**
 * Main Application Logic & Project Modals
 * Gobikrishna P - Portfolio
 */

(function () {
  // --------------------------------------------------------------------------
  // Hero Typewriter Effect
  // --------------------------------------------------------------------------
  const ROLES = [
    'AI / ML Engineer',
    'Generative AI & RAG Specialist',
    'AWS MLOps & Cloud Architect',
    'Competitive Coding Champion'
  ];

  let currentRoleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 75;
  const deleteSpeed = 35;
  const holdDelay = 1800;

  function runTypewriter() {
    const targetEl = document.getElementById('hero-typewriter');
    if (!targetEl) return;

    const currentRole = ROLES[currentRoleIdx];
    
    if (isDeleting) {
      targetEl.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
    } else {
      targetEl.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIdx === currentRole.length) {
      delay = holdDelay;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      currentRoleIdx = (currentRoleIdx + 1) % ROLES.length;
      delay = 400;
    }

    setTimeout(runTypewriter, delay);
  }

  // --------------------------------------------------------------------------
  // Project Data Store for Deep-Dive Modals
  // --------------------------------------------------------------------------
  const PROJECTS = {
    'mlops-control-plane': {
      title: 'AWS MLOps Control Plane & Multi-Tenant Isolated Cloud Architecture',
      category: 'MLOps & Cloud Architecture',
      company: 'Client Engagement',
      timeline: '2025 – Present',
      summary: 'Engineered an enterprise-grade MLOps control plane enabling automated vendor onboarding, model lifecycle management, and isolated multi-tenant cloud hosting of proprietary ML models on AWS.',
      highlights: [
        '**Multi-AZ High Availability:** Orchestrated containerized model deployments on AWS ECS across multiple Availability Zones with 4 dedicated tasks per vendor.',
        '**Zero-Downtime Blue-Green & Canary Releases:** Configured Application Load Balancer (ALB) weighted target groups for phased canary traffic distribution (70/20/10/0).',
        '**Tenant Isolation & Security:** Implemented tenant-specific access control using AWS API Gateway and custom middleware with expiring API keys.',
        '**Container Lifecycle & Service Discovery:** Built background health workers monitoring ECS container states (PENDING, SUCCESS, FAILED) with automated service discovery.'
      ],
      stack: ['AWS ECS', 'AWS ECR', 'AWS ALB', 'API Gateway', 'Docker', 'Python', 'FastAPI', 'CI/CD'],
      metrics: [
        { label: 'Deployment Downtime', value: '0 sec (Zero-Downtime)' },
        { label: 'Traffic Splitting', value: '70/20/10/0 Canary' },
        { label: 'Vendor Isolation', value: '100% Strict Tenant Separation' }
      ]
    },
    'newsgenie-genai': {
      title: 'NewsGenie - GenAI Story Generation & Debias Pipeline',
      category: 'Generative AI & LLMs',
      company: 'Client Engagement',
      timeline: '2025 – 2026',
      summary: 'Developed an end-to-end GenAI story generation and calibration engine designed to eliminate AI slop, debias rewritten narratives, and perform automated judging against journalistic criteria.',
      highlights: [
        '**Modular Multi-Stage Architecture:** Built microservice pipelines for Analysis, Generation, Transformation, Debias, and Calibration.',
        '**Automated LLM Judging & Metrics:** Integrated evaluation service calculating bias score, semantic fidelity, and readability index.',
        '**Session & State Persistence:** Managed narrative versioning and intermediate artifacts using MongoDB and robust session schemas.',
        '**Containerized Cloud Deployment:** Dockerized microservices configured with GitHub Actions workflow automation.'
      ],
      stack: ['Python', 'Large Language Models', 'LangChain', 'MongoDB', 'Docker', 'FastAPI', 'GitHub Actions'],
      metrics: [
        { label: 'AI Slop Reduction', value: 'High Tone Calibration' },
        { label: 'Pipeline Modularity', value: '6 Independent Microservices' },
        { label: 'Evaluation Method', value: 'Automated LLM-as-a-Judge' }
      ]
    },
    'enterprise-rag': {
      title: 'Enterprise Document Intelligence & Semantic RAG System',
      category: 'Generative AI & LLMs',
      company: 'Client Engagement',
      timeline: '2025 – Present',
      summary: 'Engineered high-throughput Retrieval-Augmented Generation workflows for extracting actionable insights and structured knowledge from unstructured enterprise documentation.',
      highlights: [
        '**Document Processing Workflows:** Developed parsing and semantic chunking pipelines tailored for structured tables, PDFs, and legal text.',
        '**Vector Database & Embeddings:** Implemented semantic search index using dense vector embeddings with metadata filtering.',
        '**Prompt Optimization:** Applied structured prompt templates with few-shot guidance to minimize LLM hallucinations.',
        '**High-Performance APIs:** Integrated with enterprise backend systems via asynchronous FastAPI REST endpoints.'
      ],
      stack: ['Python', 'RAG Pipelines', 'Vector Databases', 'Embeddings', 'Semantic Search', 'FastAPI', 'Scikit-learn'],
      metrics: [
        { label: 'Search Latency', value: '< 250ms Vector Retrieval' },
        { label: 'Hallucination Reduction', value: 'Substantial Precision Gain' },
        { label: 'Doc Formats Supported', value: 'PDF, DOCX, Tables, Text' }
      ]
    },
    'logistics-freight-ml': {
      title: 'Industrial Logistics Freight Cost Prediction Engine',
      category: 'Machine Learning',
      company: 'Client Engagement',
      timeline: '2025',
      summary: 'Replaced a manual lookup-table freight rate estimation workflow with a machine-learning regression engine, achieving accurate instant pricing based on historical shipping data.',
      highlights: [
        '**Data Engineering Pipeline:** Built Python data cleaning routines handling missing logistics values, multi-carrier encodings, and weight-distance interactions.',
        '**Regression Model Suite:** Evaluated Scikit-learn regressors, tuning hyperparameters with cross-validation.',
        '**Performance Verification:** Validated model accuracy using MSE, RMSE, and R² metrics on held-out test datasets.',
        '**Inference Service:** Wrapped model into a high-speed prediction endpoint returning cost estimates in milliseconds.'
      ],
      stack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'FastAPI', 'Statistics', 'Matplotlib'],
      metrics: [
        { label: 'R² Accuracy Score', value: '0.77' },
        { label: 'Test RMSE', value: '0.0412' },
        { label: 'Estimation Speed', value: '1.8ms (vs 45s manual)' }
      ]
    },
    'contamination-analytics': {
      title: 'Industrial Sensor Contamination Analytics & BI System',
      category: 'Data & Business Intelligence',
      company: 'Client Engagement',
      timeline: '2025',
      summary: 'Constructed an end-to-end ETL and Business Intelligence reporting system for industrial quality assurance teams, identifying physical contaminants across manufacturing batches.',
      highlights: [
        '**ETL Pipeline:** Extracted and cleaned raw sensor and inspection logs using Power Query and SQL.',
        '**Contaminant Classification:** Segmented anomalies into metals, stones, plastics, and paper categories.',
        '**Relational Modeling & DAX:** Built relational schema with custom DAX KPI metrics for defect rates and trend tracking.',
        '**Interactive Power BI Dashboards:** Developed dynamic drill-downs enabling real-time batch-level root cause investigation.'
      ],
      stack: ['Power BI', 'DAX', 'Power Query', 'SQL', 'Data Modeling', 'ETL'],
      metrics: [
        { label: 'Contaminant Classes', value: '4 Core Categories' },
        { label: 'Traceability', value: '100% Batch-Level Drilldown' },
        { label: 'Manual Reporting Saved', value: '15+ Hours / Week' }
      ]
    },
    'vihara-sales-analytics': {
      title: 'Enterprise Multi-Category Sales Intelligence Engine',
      category: 'Data Analytics',
      company: 'Vihara Tech',
      timeline: 'Feb 2024 – Mar 2024',
      summary: 'Conducted exploratory data analysis and predictive pattern discovery across 50,000+ sales transactions across 8 product categories to drive data-backed growth strategies.',
      highlights: [
        '**Data Cleaning & Preprocessing:** Sanitized 50,000+ raw records using Pandas and SQL queries.',
        '**Exploratory Data Analysis (EDA):** Discovered sales velocity, seasonality, and regional demand drivers.',
        '**Actionable Business Strategy:** Formulated strategic recommendations that directly informed inventory allocation.'
      ],
      stack: ['Python', 'SQL', 'Pandas', 'NumPy', 'EDA', 'Data Visualization'],
      metrics: [
        { label: 'Dataset Size', value: '50,000+ Transactions' },
        { label: 'Product Categories', value: '8 Diverse Domains' },
        { label: 'Outcome', value: 'Strategic Growth Insights' }
      ]
    }
  };

  // --------------------------------------------------------------------------
  // Project Filter Tabs
  // --------------------------------------------------------------------------
  window.filterProjects = function (category, buttonEl) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.project-filter-btn');

    buttons.forEach(btn => {
      btn.className = 'project-filter-btn px-4 py-2 rounded-lg text-xs md:text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-all cursor-pointer';
    });

    if (buttonEl) {
      buttonEl.className = 'project-filter-btn px-4 py-2 rounded-lg text-xs md:text-sm font-semibold bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 transition-all cursor-pointer';
    }

    cards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (category === 'all' || cardCategory.includes(category)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  };

  // --------------------------------------------------------------------------
  // Project Deep-Dive Modal Controller
  // --------------------------------------------------------------------------
  window.openProjectModal = function (projectId) {
    const project = PROJECTS[projectId];
    if (!project) return;

    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalCompany = document.getElementById('modal-company');
    const modalSummary = document.getElementById('modal-summary');
    const modalHighlights = document.getElementById('modal-highlights');
    const modalStack = document.getElementById('modal-stack');
    const modalMetrics = document.getElementById('modal-metrics');

    if (!modal) return;

    modalTitle.textContent = project.title;
    modalCategory.textContent = project.category;
    modalCompany.textContent = project.company;
    modalSummary.textContent = project.summary;

    modalHighlights.innerHTML = '';
    project.highlights.forEach(hl => {
      const li = document.createElement('li');
      li.className = 'text-slate-300 text-sm leading-relaxed mb-2';
      li.innerHTML = hl.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-100">$1</strong>');
      modalHighlights.appendChild(li);
    });

    modalStack.innerHTML = '';
    project.stack.forEach(tech => {
      const span = document.createElement('span');
      span.className = 'px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-800 text-indigo-300 border border-slate-700/80';
      span.textContent = tech;
      modalStack.appendChild(span);
    });

    modalMetrics.innerHTML = '';
    project.metrics.forEach(m => {
      const div = document.createElement('div');
      div.className = 'p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-center';
      div.innerHTML = `
        <div class="text-xs text-slate-400 mb-1">${m.label}</div>
        <div class="text-sm md:text-base font-bold text-cyan-300 font-mono">${m.value}</div>
      `;
      modalMetrics.appendChild(div);
    });

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };

  window.closeProjectModal = function () {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  };

  window.addEventListener('click', (e) => {
    const modal = document.getElementById('project-modal');
    if (e.target === modal) {
      window.closeProjectModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeProjectModal();
    }
  });

  // --------------------------------------------------------------------------
  // Copy to Clipboard & Toast
  // --------------------------------------------------------------------------
  window.copyToClipboard = function (text, label) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`Copied ${label} to clipboard!`);
    }).catch(() => {
      showToast(`Failed to copy to clipboard`);
    });
  };

  function showToast(msg) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = msg;
    toast.classList.remove('hidden');
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.classList.add('hidden'), 300);
    }, 2800);
  }

  // --------------------------------------------------------------------------
  // Contact Form Submission Handler (Formspree)
  // --------------------------------------------------------------------------
  window.handleContactSubmit = async function (e) {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim() || 'Portfolio Inquiry / Opportunity';
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill in all required fields.');
      return;
    }

    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin text-xs"></i><span>Sending...</span>';

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: '52169a9e-6ba5-4f59-b019-1a59e7a10268',
          name, email, subject, message
        })
      });

      if (res.ok) {
        showToast('Message sent! Gobikrishna will reply soon.');
        e.target.reset();
      } else {
        showToast('Failed to send. Please email directly.');
      }
    } catch {
      showToast('Network error. Please email directly.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane text-xs"></i><span>Send Direct Inquiry</span>';
    }
  };

  // --------------------------------------------------------------------------
  // ScrollSpy for Active Navbar Links
  // --------------------------------------------------------------------------
  function setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      let currentSection = '';
      const scrollPos = window.scrollY + 200;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSection = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('text-indigo-400', 'font-semibold');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('text-indigo-400', 'font-semibold');
        }
      });
    });
  }

  // Mobile Menu Toggle
  window.toggleMobileMenu = function () {
    const menu = document.getElementById('mobile-menu');
    if (!menu) return;
    menu.classList.toggle('hidden');
  };

  document.addEventListener('DOMContentLoaded', () => {
    runTypewriter();
    setupScrollSpy();
  });
})();
