---
layout: default
title: "Certifications"
permalink: /certs/
---

<style>
.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1100px;
  margin: 2rem auto;
  padding: 0 1rem;
}
.cert-card {
  position: relative;
  background: var(--global-bg-color, #fff);
  padding: 1.2rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.15s ease-out, transform 0.15s ease-out;
  cursor: pointer;
  overflow: visible;
}
.cert-card:hover {
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.18);
  transform: translateY(-2px);
}
.cert-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: var(--hover-bg);
  background-size: cover;
  background-position: center;
  opacity: 0;
  filter: blur(1.5px);
  z-index: 0;
  border-radius: 10px;
  transition: opacity 0.15s ease-in-out;
}
.cert-card:hover::before {
  opacity: 0.2;
}
.cert-card > * {
  position: relative;
  z-index: 1;
}
.cert-logo {
  height: 24px !important;
  max-height: 24px !important;
  width: auto;
  max-width: 100px; /* Prevents logos from being too wide */
  margin-bottom: 0.4rem;
  object-fit: contain;
  vertical-align: middle;
  display: inline-block;
}
.cert-title {
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0.2rem 0;
}
.cert-issuer {
  font-size: 0.9rem;
  color: var(--meta-color);
  margin-bottom: 0.6rem;
}
.cert-desc {
  font-size: 0.9rem;
  color: var(--global-text-color, #333);
  flex-grow: 1;
}

/* Lightbox Styles */
#certLightbox {
  display: none;
  position: fixed;
  z-index: 10000;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
#lightboxInner {
  background: rgba(244, 244, 244, 0.92);
  padding: 1.5rem;
  border-radius: 10px;
  max-width: 95%;
  max-height: 95vh;
  width: 850px;
  text-align: center;
  position: relative;
}
.lightbox-img {
  max-width: 100%;
  max-height: 75vh;
  border-radius: 6px;
  margin-bottom: 1rem;
}
.lightbox-caption {
  font-size: 0.95rem;
  color: #333;
}
.lightbox-close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  color: #666;
}
.lightbox-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.75);
  border-radius: 50%;
  padding: 0.6rem;
  cursor: pointer;
  z-index: 10001;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
}

#lightbox-prev { left: 20px; }
#lightbox-next { right: 20px; }
.verify-link {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.4rem 0.9rem;
  background: rgba(35, 34, 78, 1);
  color: white;
  font-weight: 500;
  font-size: 0.85rem;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.2s;
}
.verify-link:hover {
  background: rgba(77, 93, 170, 1);
}

.cert-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  opacity: 0.8;
  pointer-events: none;
  border-radius: 50%;
  padding: 2px;
  transition: opacity 0.2s ease;
}

.cert-card:hover .cert-icon {
  opacity: 1;
}

.cert-icon svg {
  width: 16px;
  height: 16px;
  display: block;
  color: var(--meta-color);
}
.cert-date {
  color: #888;
  font-size: 0.95em;
  display: block;
  margin: 0.2em 0;
}

</style>


<div class="cert-grid">
  
  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/ml_fund_nano.png');">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/udacity.svg" alt="Udaicty Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/udacity-dark.svg" alt="Udaicty Dark Logo">
    <div class="cert-title">AWS Machine Learning Fundamentals Nanodegree</div>
    <div class="cert-issuer">Udacity</div>
    <div class="cert-date">Oct 2024</div>
    <div class="cert-desc">Program focusing on the end‑to‑end ML workflow using AWS SageMaker—covering data prep, feature engineering, model training (XGBoost, AutoGluon), tuning, deployment, and deep learning (CV & NLP).</div>
  </div>
  
  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/ai_py_nano.png');">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/udacity.svg" alt="Udaicty Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/udacity-dark.svg" alt="Udaicty Dark Logo">
    <div class="cert-title">AI Programming with Python Nanodegree</div>
    <div class="cert-issuer">Udacity</div>
    <div class="cert-date">Feb 2024</div>
    <div class="cert-desc">Comprehensive intro to Python for AI—with NumPy, Pandas, Matplotlib, and foundational neural network implementation using PyTorch.</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/hp_life.png');">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/hp_life.svg" alt="HP-Life Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/hp_life-dark.svg" alt="HP-Life Dark eLogo">
    <div class="cert-title">Data Science & Analytics</div>
    <div class="cert-issuer">HP LIFE</div>
    <div class="cert-date">Oct 2023</div>
    <div class="cert-desc">Covers fundamental data analysis, visualization, and analytics tools—designed to make data‑driven business decisions.</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/nvidia_ai_anomaly.png');">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/nvidia.svg" alt="NVIDIA Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/nvidia-dark.svg" alt="NVIDIA Dark Logo">
    <div class="cert-title">Applications of AI for Anomaly Detection</div>
    <div class="cert-issuer">NVIDIA DLI</div>
    <div class="cert-date">Feb 2023</div>
    <div class="cert-desc">Hands‑on anomaly detection workshop using GPU‑accelerated XGBoost, deep autoencoders, and GANs to detect patterns in real‑world datasets.</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/anaconda_ml.png');">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img src="/assets/images/logos/anaconda.svg" class="cert-logo">
    <div class="cert-title">Introduction to Machine Learning</div>
    <div class="cert-issuer">Anaconda</div>
    <div class="cert-date">Feb 2023</div>
    <div class="cert-desc">Introductory ML course exploring supervised learning, model evaluation, and practical implementation using Python and scikit‑learn.</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/anaconda_py.png');">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img src="/assets/images/logos/anaconda.svg" class="cert-logo">
    <div class="cert-title">Introduction to Python Programming</div>
    <div class="cert-issuer">Anaconda</div>
    <div class="cert-date">Feb 2023</div>
    <div class="cert-desc">Fundamental course covering Python basics—variables, loops, functions, data types, and file I/O geared for data analysis.</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/anaconda_sql.png');">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img src="/assets/images/logos/anaconda.svg" class="cert-logo">
    <div class="cert-title">Introduction to SQL</div>
    <div class="cert-issuer">Anaconda</div>
    <div class="cert-date">Feb 2023</div>
    <div class="cert-desc">Learn essential SQL querying—SELECT, JOINs, aggregation, and filtering—to extract and analyze data from relational databases.</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/bg_cloud.png');">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/bg.png" alt="Bamboogeeks Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/bg-dark.png" alt="Bamboogeeks Dark Logo">
    <div class="cert-title">Google Cloud Academy</div>
    <div class="cert-issuer">BambooGeeks</div>
    <div class="cert-date">Jan -- Feb 2023</div>
    <div class="cert-desc">Hands‑on exposure to core Google Cloud services—compute, storage, networking, and ML APIs—through practical labs.</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/ai_med.png');">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/dlai.svg" alt="DeepLearning.AI Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/dlai-dark.svg" alt="DeepLearning.AI Dark Logo">
    <div class="cert-title">AI for Medical Diagnosis</div>
    <div class="cert-issuer">DeepLearning.AI</div>
    <div class="cert-date">May 2022</div>
    <div class="cert-desc">Explores deep learning models for medical imaging applications—classification and segmentation using convolutional neural networks.</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/gcp_leader.png');">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/gcp.svg" alt="Google Cloud Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/gcp-dark.svg" alt="Google Cloud Dark Logo">
    <div class="cert-title">Google Cloud Digital Leader Training Professional Certificate</div>
    <div class="cert-issuer">Google Cloud</div>
    <div class="cert-date">May 2022</div>
    <div class="cert-desc">Professional certificate covering cloud concepts and GCP services to support digital transformation and business use‑cases.</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/tf.png');">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/tf.png" alt="TensorFlow Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/tf-dark.png" alt="TensorFlow White Logo">
    <div class="cert-title">TensorFlow Developer Certificate</div>
    <div class="cert-issuer">TensorFlow</div>
    <div class="cert-date">Apr 2022</div>
    <div class="cert-desc">Validated skills in building and training TensorFlow models for vision, NLP, and time series tasks.</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/intro_tf.png');">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/dlai.svg" alt="DeepLearning.AI Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/dlai-dark.svg" alt="DeepLearning.AI Dark Logo">
    <div class="cert-title">Introduction to TensorFlow for AI, ML, and DL</div>
    <div class="cert-issuer">DeepLearning.AI</div>
    <div class="cert-date">Apr 2022</div>
    <div class="cert-desc">Begins with TensorFlow basics and progresses through model training for computer vision using Keras and TF pipelines.</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/it_support.png');">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/google.svg" alt="Google Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/google-dark.svg" alt="Google Dark Logo">
    <div class="cert-title">Google IT Support Professional Certificate</div>
    <div class="cert-issuer">Google</div>
    <div class="cert-date">Apr 2022</div>
    <div class="cert-desc">Covers essential IT support skills including troubleshooting, networking, OS management, system administration, and security.</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/nvidia_fund_dl.png');">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/nvidia.svg" alt="NVIDIA Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/nvidia-dark.svg" alt="NVIDIA Dark Logo">
    <div class="cert-title">Fundamentals of Deep Learning</div>
    <div class="cert-issuer">NVIDIA DLI</div>
    <div class="cert-date">Feb 2022</div>
    <div class="cert-desc">Fundamental deep learning course introducing neural networks, CNNs, and hands‑on model implementation using PyTorch/TensorFlow.</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/bg_ml.png');">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/bg.png" alt="Bamboogeeks Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/bg-dark.png" alt="Bamboogeeks Dark Logo">
    <div class="cert-title">Machine Learning Academy</div>
    <div class="cert-issuer">BambooGeeks</div>
    <div class="cert-date">Jan -- Feb 2022</div>
    <div class="cert-desc">Project‑based bootcamp covering supervised learning techniques, classification, and model evaluation fundamentals.</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/kick.png');">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/bg.png" alt="Bamboogeeks Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/bg-dark.png" alt="Bamboogeeks Dark Logo">
    <div class="cert-title">Kickstart your Career in Tech</div>
    <div class="cert-issuer">BambooGeeks</div>
    <div class="cert-date">Nov 2021</div>
    <div class="cert-desc">Introduction to key tech career skills—cloud computing, software development basics, and digital tools.</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/gcp.png');">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/gcp.svg" alt="Google Cloud Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/gcp-dark.svg" alt="Google Cloud Dark Logo">
    <div class="cert-title">MENA 60 Days on Tech Challenge</div>
    <div class="cert-issuer">Google Cloud</div>
    <div class="cert-date">Nov -- Dec 2021</div>
    <div class="cert-desc">Intensive GCP challenge focused on deploying cloud solutions and APIs over a two‑month period.</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/ibm_ml.png');">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/ibm.svg" alt="IBM Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/ibm-dark.svg" alt="IBM Dark Logo">
    <div class="cert-title">IBM Machine Learning Essentials</div>
    <div class="cert-issuer">IBM</div>
    <div class="cert-date">Nov 2021</div>
    <div class="cert-desc">Introduces ML workflows and model development using IBM Watson Studio—including supervised and unsupervised learning.</div>
  </div>

<!-- Lightbox -->
<div id="certLightbox" onclick="closeLightbox()">
  <div class="lightbox-arrow" id="lightbox-prev">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M15 6l-6 6 6 6" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>

  <div class="lightbox-arrow" id="lightbox-next">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M9 6l6 6-6 6" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>

  <div id="lightboxInner" onclick="event.stopPropagation()">
    <span class="lightbox-close">&times;</span>
    <img id="lightboxImg" class="lightbox-img" src="" alt="Certificate">
    <div class="lightbox-caption" id="lightboxCaption"></div>
  </div>
</div>


<!-- JavaScript include -->
<script src="/assets/js/ds_certs.js" defer></script>
