// assets/js/certs.js
const certs = [
  {
    img: "/assets/images/certs/ml_fund_nano.png",
    title: "AWS Machine Learning Fundamentals Nanodegree",
    issuer: "Udacity",
    date: "Aug 2024",
    desc: "Program focusing on the end‑to‑end ML workflow using AWS SageMaker—covering data prep, feature engineering, model training (XGBoost, AutoGluon), tuning, deployment, and deep learning (CV & NLP).",
    url: "https://www.udacity.com/certificate/e/c0f46e66-f6c0-11ee-a07c-97c7d1a9b5bb"
  },
  {
    img: "/assets/images/certs/ai_py_nano.png",
    title: "AI Programming with Python Nanodegree",
    issuer: "Udacity",
    date: "Feb 2024",
    desc: "Comprehensive intro to Python for AI—with NumPy, Pandas, Matplotlib, and foundational neural network implementation using PyTorch.",
    url: "https://www.udacity.com/certificate/e/60f986e2-0dc2-11ed-bd5e-8bcb422a4640"
  },
  {
    img: "/assets/images/certs/hp_life.png",
    title: "Data Science & Analytics",
    issuer: "HP LIFE",
    date: "Oct 2023",
    desc: "Covers fundamental data analysis, visualization, and analytics tools—designed to make data‑driven business decisions.",
    url: "https://www.life-global.org/certificate/9cc4f92f-43ac-494e-bf9a-cce4b3f96ff5"
  },
  {
    img: "/assets/images/certs/nvidia_ai_anomaly.png",
    title: "Applications of AI for Anomaly Detection",
    issuer: "NVIDIA DLI",
    date: "Feb 2023",
    desc: "Hands‑on anomaly detection workshop using GPU‑accelerated XGBoost, deep autoencoders, and GANs to detect patterns in real‑world datasets.",
    url: "https://learn.nvidia.com/certificates?id=aZPPzCrXSWuIp2zeoaQv_Q"
  },
  {
    img: "/assets/images/certs/anaconda_ml.png",
    title: "Introduction to Machine Learning",
    issuer: "Anaconda",
    date: "Feb 2023",
    desc: "Introductory ML course exploring supervised learning, model evaluation, and practical implementation using Python and scikit‑learn.",
    url: "https://learning.anaconda.com/certificates/zxssxhpcqr"
  },
  {
    img: "/assets/images/certs/anaconda_py.png",
    title: "Introduction to Python Programming",
    issuer: "Anaconda",
    date: "Feb 2023",
    desc: "Fundamental course covering Python basics—variables, loops, functions, data types, and file I/O geared for data analysis.",
    url: "https://verify.skilljar.com/c/vvgdtdzbxxsi"
  },
  {
    img: "/assets/images/certs/anaconda_sql.png",
    title: "Introduction to SQL",
    issuer: "Anaconda",
    date: "Feb 2023",
    desc: "Learn essential SQL querying—SELECT, JOINs, aggregation, and filtering—to extract and analyze data from relational databases.",
    url: "https://learning.anaconda.com/certificates/3ijhcvzt5i"
  },
  {
    img: "/assets/images/certs/bg_cloud.png",
    title: "Google Cloud Academy",
    issuer: "BambooGeeks",
    date: "Jan -- Feb 2023",
    desc: "Hands‑on exposure to core Google Cloud services—compute, storage, networking, and ML APIs—through practical labs.",
    url: "https://drive.google.com/file/d/1za4ZZhjk9cZtJbCvDe7GDG0aPj2vxAon/view?usp=drive_link"
  },
  {
    img: "/assets/images/certs/ai_med.png",
    title: "AI for Medical Diagnosis",
    issuer: "DeepLearning.AI",
    date: "May 2022",
    desc: "Explores deep learning models for medical imaging applications—classification and segmentation using convolutional neural networks.",
    url: "https://www.coursera.org/account/accomplishments/verify/LHQ2XBWRECVW"
  },
  {
    img: "/assets/images/certs/gcp_leader.png",
    title: "Google Cloud Digital Leader Training Professional Certificate",
    issuer: "Google Cloud}",
    date: "May 2022",
    desc: "Professional certificate covering cloud concepts and GCP services to support digital transformation and business use‑cases.",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/YVQHSQKDP6VJ"
  },
  {
    img: "/assets/images/certs/tf.png",
    title: "TensorFlow Developer Certificate",
    issuer: "TensorFlow",
    date: "Apr 2022",
    desc: "Validated skills in building and training TensorFlow models for vision, NLP, and time series tasks.",
    url: "https://www.credential.net/384b5307-6f62-4873-88ca-04aa6d838901"
  },
  {
    img: "/assets/images/certs/intro_tf.png",
    title: "Introduction to TensorFlow for AI, ML, and DL",
    issuer: "DeepLearning.AI",
    date: "Apr 2022",
    desc: "Begins with TensorFlow basics and progresses through model training for computer vision using Keras and TF pipelines.",
    url: "https://www.coursera.org/account/accomplishments/verify/X9K9AA3KTTWF"
  },
  {
    img: "/assets/images/certs/it_support.png",
    title: "Google IT Support Professional Certificate",
    issuer: "Google",
    date: "Apr 2022",
    desc: "Covers essential IT support skills including troubleshooting, networking, OS management, system administration, and security.",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/92MJFJPJE47Y"
  },
  {
    img: "/assets/images/certs/nvidia_fund_dl.png",
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA DLI",
    date: "Feb 2022",
    desc: "Fundamental deep learning course introducing neural networks, CNNs, and hands‑on model implementation using PyTorch/TensorFlow.",
    url: "https://learn.nvidia.com/certificates?id=MlcE0Co3RrKSonVRL97WJQ"
  },
  {
    img: "/assets/images/certs/bg_ml.png",
    title: "Machine Learning Academy",
    issuer: "BambooGeeks",
    date: "Jan -- Feb 2022",
    desc: "Project‑based bootcamp covering supervised learning techniques, classification, and model evaluation fundamentals.",
    url: ""
  },
  {
    img: "/assets/images/certs/kick.png",
    title: "Kickstart your Career in Tech",
    issuer: "BambooGeeks",
    date: "Nov 2021",
    desc: "Introduction to key tech career skills—cloud computing, software development basics, and digital tools.",
    url: "https://drive.google.com/file/d/1QKvsCvYaMcqtflv9lVDA1G-0737qncrZ/view?usp=drive_link"
  },
  {
    img: "/assets/images/certs/gcp.png",
    title: "MENA 60 Days on Tech Challenge",
    issuer: "Google Cloud}",
    date: "Nov -- Dec 2021",
    desc: "Intensive GCP challenge focused on deploying cloud solutions and APIs over a two‑month period.",
    url: "https://www.cloudskillsboost.google/public_profiles/39db8c5a-3476-4bf2-85a8-34afeddeb35d"
  },
  {
    img: "/assets/images/certs/ibm_ml.png",
    title: "IBM Machine Learning Essentials",
    issuer: "IBM}",
    date: "Nov 2021",
    desc: "Introduces ML workflows and model development using IBM Watson Studio—including supervised and unsupervised learning.",
    url: "https://www.credly.com/badges/ef26ebbf-cb41-451a-8b7c-dd31ed162ab4"
  }
];

let current = 0;
const lightbox = document.getElementById("certLightbox");
const img = document.getElementById("lightboxImg");
const caption = document.getElementById("lightboxCaption");

function updateLightbox() {
  try {
  const cert = certs[current];
  img.src = cert.img;
  img.alt = cert.title;
  caption.innerHTML = `
    <a href="${cert.url}" target="_blank" class="verify-link">Verify</a>
  `;
  } catch (e) {
    console.error("Lightbox error:", e);
    caption.innerHTML = `<p>Error loading certificate</p>`;
  }
}

function openLightbox(index) {
  current = index;
  updateLightbox();
  lightbox.style.display = "flex";
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function closeLightbox() {
  lightbox.style.display = "none";
  document.body.style.overflow = "auto"; // Restore scrolling
}

function prevLightbox(e) {
  e.stopPropagation();
  current = (current - 1 + certs.length) % certs.length;
  updateLightbox();
}

function nextLightbox(e) {
  e.stopPropagation();
  current = (current + 1) % certs.length;
  updateLightbox();
}

// Initialize event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Card click handlers
  document.querySelectorAll('.cert-card').forEach((card, index) => {
    card.addEventListener('click', () => openLightbox(index));
  });

  // Lightbox controls
  document.getElementById('lightbox-prev').addEventListener('click', prevLightbox);
  document.getElementById('lightbox-next').addEventListener('click', nextLightbox);
  document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', closeLightbox);
  
  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display !== "flex") return;
    if (e.key === "ArrowLeft") prevLightbox(e);
    else if (e.key === "ArrowRight") nextLightbox(e);
    else if (e.key === "Escape") closeLightbox();
  });

  // Touch events for mobile
  let touchStartX = 0;
  lightbox.addEventListener("touchstart", e => {
    touchStartX = e.changedTouches[0].screenX;
  }, {passive: true});
  
  lightbox.addEventListener("touchend", e => {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 60) {
      if (diff > 0) prevLightbox(e);
      else nextLightbox(e);
    }
  }, {passive: true});
});