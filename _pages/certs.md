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
  position: fixed; /* 🔧 this is what was missing */
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
  
  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/ml_fund_nano.png');" onclick="openLightbox(0)">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/udacity.svg" alt="Udaicty Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/udacity-dark.svg" alt="Udaicty Dark Logo">
    <div class="cert-title">AWS Machine Learning Fundamentals Nanodegree</div>
    <div class="cert-issuer">Udacity</div>
    <div class="cert-date">Oct 2024</div>
    <div class="cert-desc">Refine your machine learning skills with this AWS Machine Learning Engineer Nanodegree. Learn to deploy models on SageMaker and design automated workflows with AWS Lambda and Step Functions.</div>
  </div>
  
  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/ai_py_nano.png');" onclick="openLightbox(1)">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/udacity.svg" alt="Udaicty Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/udacity-dark.svg" alt="Udaicty Dark Logo">
    <div class="cert-title">AI Programming with Python Nanodegree</div>
    <div class="cert-issuer">Udacity</div>
    <div class="cert-date">Feb 2024</div>
    <div class="cert-desc">...</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/hp_life.png');" onclick="openLightbox(2)">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/hp_life.svg" alt="HP-Life Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/hp_life-dark.svg" alt="HP-Life Dark eLogo">
    <div class="cert-title">Data Science & Analytics</div>
    <div class="cert-issuer">HP LIFE</div>
    <div class="cert-date">Oct 2023</div>
    <div class="cert-desc">...</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/nvidia_ai_anomaly.png');" onclick="openLightbox(3)">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/nvidia.svg" alt="NVIDIA Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/nvidia-dark.svg" alt="NVIDIA Dark Logo">
    <div class="cert-title">Applications of AI for Anomaly Detection</div>
    <div class="cert-issuer">NVIDIA DLI</div>
    <div class="cert-date">Feb 2023</div>
    <div class="cert-desc">...</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/anaconda_ml.png');" onclick="openLightbox(4)">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img src="/assets/images/logos/anaconda.svg" class="cert-logo">
    <div class="cert-title">Introduction to Machine Learning</div>
    <div class="cert-issuer">Anaconda</div>
    <div class="cert-date">Feb 2023</div>
    <div class="cert-desc">...</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/anaconda_py.png');" onclick="openLightbox(5)">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img src="/assets/images/logos/anaconda.svg" class="cert-logo">
    <div class="cert-title">Introduction to Python Programming</div>
    <div class="cert-issuer">Anaconda</div>
    <div class="cert-date">Feb 2023</div>
    <div class="cert-desc">...</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/anaconda_sql.png');" onclick="openLightbox(6)">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img src="/assets/images/logos/anaconda.svg" class="cert-logo">
    <div class="cert-title">Introduction to SQL</div>
    <div class="cert-issuer">Anaconda</div>
    <div class="cert-date">Feb 2023</div>
    <div class="cert-desc">...</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/bg_cloud.png');" onclick="openLightbox(7)">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/bg.png" alt="Bamboogeeks Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/bg-dark.png" alt="Bamboogeeks Dark Logo">
    <div class="cert-title">Google Cloud Academy</div>
    <div class="cert-issuer">BambooGeeks</div>
    <div class="cert-date">Jan -- Feb 2023</div>
    <div class="cert-desc">...</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/ai_med.png');" onclick="openLightbox(8)">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/dlai.svg" alt="DeepLearning.AI Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/dlai-dark.svg" alt="DeepLearning.AI Dark Logo">
    <div class="cert-title">AI for Medical Diagnosis</div>
    <div class="cert-issuer">DeepLearning.AI</div>
    <div class="cert-date">May 2022</div>
    <div class="cert-desc">...</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/gcp_leader.png');" onclick="openLightbox(9)">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/gcp.svg" alt="Google Cloud Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/gcp-dark.svg" alt="Google Cloud Dark Logo">
    <div class="cert-title">Google Cloud Digital Leader Training Professional Certificate</div>
    <div class="cert-issuer">Google Cloud</div>
    <div class="cert-date">May 2022</div>
    <div class="cert-desc">...</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/tf.png');" onclick="openLightbox(10)">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/tf.png" alt="TensorFlow Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/tf-dark.png" alt="TensorFlow White Logo">
    <div class="cert-title">TensorFlow Developer Certificate</div>
    <div class="cert-issuer">TensorFlow</div>
    <div class="cert-date">Apr 2022</div>
    <div class="cert-desc">...</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/intro_tf.png');" onclick="openLightbox(11)">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/dlai.svg" alt="DeepLearning.AI Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/dlai-dark.svg" alt="DeepLearning.AI Dark Logo">
    <div class="cert-title">Introduction to TensorFlow for AI, ML, and DL</div>
    <div class="cert-issuer">DeepLearning.AI</div>
    <div class="cert-date">Apr 2022</div>
    <div class="cert-desc">...</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/it_support.png');" onclick="openLightbox(12)">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/google.svg" alt="Google Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/google-dark.svg" alt="Google Dark Logo">
    <div class="cert-title">Google IT Support Professional Certificate</div>
    <div class="cert-issuer">Google</div>
    <div class="cert-date">Apr 2022</div>
    <div class="cert-desc">...</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/nvidia_fund_dl.png');" onclick="openLightbox(13)">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/nvidia.svg" alt="NVIDIA Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/nvidia-dark.svg" alt="NVIDIA Dark Logo">
    <div class="cert-title">Fundamentals of Deep Learning</div>
    <div class="cert-issuer">NVIDIA DLI</div>
    <div class="cert-date">Feb 2022</div>
    <div class="cert-desc">...</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/bg_ml.png');" onclick="openLightbox(14)">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/bg.png" alt="Bamboogeeks Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/bg-dark.png" alt="Bamboogeeks Dark Logo">
    <div class="cert-title">Machine Learning Academy</div>
    <div class="cert-issuer">BambooGeeks</div>
    <div class="cert-date">Jan -- Feb 2022</div>
    <div class="cert-desc">...</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/kick.png');" onclick="openLightbox(15)">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/bg.png" alt="Bamboogeeks Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/bg-dark.png" alt="Bamboogeeks Dark Logo">
    <div class="cert-title">Kickstart your Career in Tech</div>
    <div class="cert-issuer">BambooGeeks</div>
    <div class="cert-date">Nov 2021</div>
    <div class="cert-desc">...</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/gcp.png');" onclick="openLightbox(16)">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/gcp.svg" alt="Google Cloud Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/gcp-dark.svg" alt="Google Cloud Dark Logo">
    <div class="cert-title">MENA 60 Days on Tech Challenge</div>
    <div class="cert-issuer">Google Cloud</div>
    <div class="cert-date">Nov -- Dec 2021</div>
    <div class="cert-desc">...</div>
  </div>

  <div class="cert-card" title="Click to view certificate" style="--hover-bg: url('/assets/images/certs/ibm_ml.png');" onclick="openLightbox(17)">
    <span class="cert-icon" title="Click to view certificate">
      {% include icons/eye.svg %}
    </span>
    <img class="cert-logo logo-light" src="/assets/images/logos/ibm.svg" alt="IBM Logo">
    <img class="cert-logo logo-dark" src="/assets/images/logos/ibm-dark.svg" alt="IBM Dark Logo">
    <div class="cert-title">IBM Machine Learning Essentials</div>
    <div class="cert-issuer">IBM</div>
    <div class="cert-date">Nov 2021</div>
    <div class="cert-desc">...</div>
  </div>

<!-- Lightbox -->
<div id="certLightbox" onclick="closeLightbox()">
  <div class="lightbox-arrow" id="lightbox-prev" onclick="event.stopPropagation(); prevLightbox()">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M15 6l-6 6 6 6" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>

  <div class="lightbox-arrow" id="lightbox-next" onclick="event.stopPropagation(); nextLightbox()">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M9 6l6 6-6 6" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>

  <div id="lightboxInner" onclick="event.stopPropagation()">
    <span class="lightbox-close" onclick="closeLightbox()">&times;</span>
    <img id="lightboxImg" class="lightbox-img" src="" alt="Certificate">
    <div class="lightbox-caption" id="lightboxCaption"></div>
  </div>
</div>

<script>
const certs = [
  {
    img: "/assets/images/certs/ml_fund_nano.png",
    title: "AWS Machine Learning Fundamentals Nanodegree",
    issuer: "Udacity",
    date: "Aug 2024",
    desc: "...",
    url: "https://www.udacity.com/certificate/e/c0f46e66-f6c0-11ee-a07c-97c7d1a9b5bb"
  },
  {
    img: "/assets/images/certs/ai_py_nano.png",
    title: "AI Programming with Python Nanodegree",
    issuer: "Udacity",
    date: "Feb 2024",
    desc: "...",
    url: "https://www.udacity.com/certificate/e/60f986e2-0dc2-11ed-bd5e-8bcb422a4640"
  },
  {
    img: "/assets/images/certs/hp_life.png",
    title: "Data Science & Analytics",
    issuer: "HP LIFE",
    date: "Oct 2023",
    desc: "...",
    url: "https://www.life-global.org/certificate/9cc4f92f-43ac-494e-bf9a-cce4b3f96ff5"
  },
  {
    img: "/assets/images/certs/nvidia_ai_anomaly.png",
    title: "Applications of AI for Anomaly Detection",
    issuer: "NVIDIA DLI",
    date: "Feb 2023",
    desc: "...",
    url: "https://learn.nvidia.com/certificates?id=aZPPzCrXSWuIp2zeoaQv_Q"
  },
  {
    img: "/assets/images/certs/anaconda_ml.png",
    title: "Introduction to Machine Learning",
    issuer: "Anaconda",
    date: "Feb 2023",
    desc: "...",
    url: "https://learning.anaconda.com/certificates/zxssxhpcqr"
  },
  {
    img: "/assets/images/certs/anaconda_py.png",
    title: "Introduction to Python Programming",
    issuer: "Anaconda",
    date: "Feb 2023",
    desc: "...",
    url: "https://verify.skilljar.com/c/vvgdtdzbxxsi"
  },
  {
    img: "/assets/images/certs/anaconda_sql.png",
    title: "Introduction to SQL",
    issuer: "Anaconda",
    date: "Feb 2023",
    desc: "...",
    url: "https://learning.anaconda.com/certificates/3ijhcvzt5i"
  },
  {
    img: "/assets/images/certs/bg_cloud.png",
    title: "Google Cloud Academy",
    issuer: "BambooGeeks",
    date: "Jan -- Feb 2023",
    desc: "...",
    url: "https://drive.google.com/file/d/1za4ZZhjk9cZtJbCvDe7GDG0aPj2vxAon/view?usp=drive_link"
  },
  {
    img: "/assets/images/certs/ai_med.png",
    title: "AI for Medical Diagnosis",
    issuer: "DeepLearning.AI",
    date: "May 2022",
    desc: "...",
    url: "https://www.coursera.org/account/accomplishments/verify/LHQ2XBWRECVW"
  },
  {
    img: "/assets/images/certs/gcp_leader.png",
    title: "Google Cloud Digital Leader Training Professional Certificate",
    issuer: "Google Cloud}",
    date: "May 2022",
    desc: "...",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/YVQHSQKDP6VJ"
  },
  {
    img: "/assets/images/certs/tf.png",
    title: "TensorFlow Developer Certificate",
    issuer: "TensorFlow",
    date: "Apr 2022",
    desc: "...",
    url: "https://www.credential.net/384b5307-6f62-4873-88ca-04aa6d838901"
  },
  {
    img: "/assets/images/certs/intro_tf.png",
    title: "Introduction to TensorFlow for AI, ML, and DL",
    issuer: "DeepLearning.AI",
    date: "Apr 2022",
    desc: "...",
    url: "https://www.coursera.org/account/accomplishments/verify/X9K9AA3KTTWF"
  },
  {
    img: "/assets/images/certs/it_support.png",
    title: "Google IT Support Professional Certificate",
    issuer: "Google",
    date: "Apr 2022",
    desc: "...",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/92MJFJPJE47Y"
  },
  {
    img: "/assets/images/certs/nvidia_fund_dl.png",
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA DLI",
    date: "Feb 2022",
    desc: "...",
    url: "https://learn.nvidia.com/certificates?id=MlcE0Co3RrKSonVRL97WJQ"
  },
  {
    img: "/assets/images/certs/bg_ml.png",
    title: "Machine Learning Academy",
    issuer: "BambooGeeks",
    date: "Jan -- Feb 2022",
    desc: "...",
    url: ""
  },
  {
    img: "/assets/images/certs/kick.png",
    title: "Kickstart your Career in Tech",
    issuer: "BambooGeeks",
    date: "Nov 2021",
    desc: "...",
    url: "https://drive.google.com/file/d/1QKvsCvYaMcqtflv9lVDA1G-0737qncrZ/view?usp=drive_link"
  },
  {
    img: "/assets/images/certs/gcp.png",
    title: "MENA 60 Days on Tech Challenge",
    issuer: "Google Cloud}",
    date: "Nov -- Dec 2021",
    desc: "...",
    url: "https://www.cloudskillsboost.google/public_profiles/39db8c5a-3476-4bf2-85a8-34afeddeb35d"
  },
  {
    img: "/assets/images/certs/ibm_ml.png",
    title: "IBM Machine Learning Essentials",
    issuer: "IBM}",
    date: "Nov 2021",
    desc: "...",
    url: "https://www.credly.com/badges/ef26ebbf-cb41-451a-8b7c-dd31ed162ab4"
  }
]

let current = 0;
const lightbox = document.getElementById("certLightbox");
const img = document.getElementById("lightboxImg");
const caption = document.getElementById("lightboxCaption");

function updateLightbox() {
  const cert = certs[current];
  img.src = cert.img;
  img.alt = cert.title;
  caption.innerHTML = `
    <a href="${cert.url}" target="_blank" class="verify-link">Verify</a>
  `;
}
// <strong>${cert.title}</strong><br>
    // ${cert.issuer}<br>
    // <span class="cert-date">${cert.date}</span><br>
    // <em>${cert.desc}</em><br>
function openLightbox(index) {
  current = index;
  updateLightbox();
  lightbox.style.display = "flex";
}
function closeLightbox() {
  lightbox.style.display = "none";
}
function prevLightbox() {
  current = (current - 1 + certs.length) % certs.length;
  updateLightbox();
}
function nextLightbox() {
  current = (current + 1) % certs.length;
  updateLightbox();
}

// Swipe for mobile
let touchStartX = 0;
lightbox.addEventListener("touchstart", e => {
  touchStartX = e.changedTouches[0].screenX;
});
lightbox.addEventListener("touchend", e => {
  const touchEndX = e.changedTouches[0].screenX;
  if (touchEndX - touchStartX > 60) prevLightbox();
  else if (touchStartX - touchEndX > 60) nextLightbox();
});

document.addEventListener("keydown", function (e) {
  if (lightbox.style.display !== "flex") return;
  if (e.key === "ArrowLeft") prevLightbox();
  else if (e.key === "ArrowRight") nextLightbox();
  else if (e.key === "Escape") closeLightbox();
});

</script>
