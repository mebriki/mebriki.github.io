---
layout: default
title: "Certifications"
permalink: /certs/
---

<style>
/* Grid Cards */
.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1100px;
  margin: 2rem auto;
  padding: 0 1rem;
}
.cert-card {
  background: var(--global-bg-color, #fff);
  padding: 1.2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.cert-logo {
  height: 32px;
  margin-bottom: 0.5rem;
}
.cert-title {
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0.2rem 0;
}
.cert-issuer {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.6rem;
}
.cert-desc {
  font-size: 0.9rem;
  color: var(--global-text-color, #333);
  flex-grow: 1;
}
.cert-link-btn {
  margin-top: 0.8rem;
  font-size: 0.85rem;
  color: white;
  background: var(--global-link-color, #0056b3);
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  cursor: pointer;
}

/* Modal */

#certModal {
  display: none;
  position: fixed;
  z-index: 1000;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
}

#modalContent {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-img {
  max-width: 90%;
  max-height: 80vh;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(255,255,255,0.1);
}

.modal-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3rem;
  color: white;
  background: rgba(0,0,0,0.3);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
}
.modal-arrow:hover {
  background: rgba(255,255,255,0.15);
}
#modal-prev { left: 2%; }
#modal-next { right: 2%; }

.modal-close {
  position: absolute;
  top: 20px;
  right: 30px;
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  cursor: pointer;
}
</style>

<!-- Certificate Cards -->
<div class="cert-grid">
  <div class="cert-card">
    <img src="/assets/certs/tf.png" alt="Google" class="cert-logo">
    <div class="cert-title">TensorFlow Developer Certificate</div>
    <div class="cert-issuer">Google • 2023</div>
    <div class="cert-desc">Built and deployed deep learning models using TensorFlow for computer vision and NLP.</div>
    <button class="cert-link-btn" onclick="openModal(0)">View Certificate</button>
  </div>

  <div class="cert-card">
    <img src="/assets/certs/hult.png" alt="Hult Prize" class="cert-logo">
    <div class="cert-title">Hult OnCampus Finalist Certificate</div>
    <div class="cert-issuer">Hult Prize Foundation • 2022</div>
    <div class="cert-desc">Recognized as finalist for a tech-based healthcare startup idea in the OnCampus round.</div>
    <button class="cert-link-btn" onclick="openModal(1)">View Certificate</button>
  </div>

  <div class="cert-card">
    <img src="/assets/certs/ml_fund_nano.png" alt="Google Cloud" class="cert-logo">
    <div class="cert-title">Google Cloud ML Engineering Track</div>
    <div class="cert-issuer">Google Cloud • 2023</div>
    <div class="cert-desc">Completed projects in Vertex AI, BigQuery ML, and model deployment on GCP.</div>
    <button class="cert-link-btn" onclick="openModal(2)">View Certificate</button>
  </div>
</div>

<!-- Modal -->
<div id="certModal">
  <span class="modal-close" onclick="closeModal()">&times;</span>
  <div id="modalContent">
    <button class="modal-arrow" id="modal-prev" onclick="prevCert()">&#10094;</button>
    <img id="modalImage" class="modal-img" src="" alt="Certificate">
    <button class="modal-arrow" id="modal-next" onclick="nextCert()">&#10095;</button>
  </div>
</div>

<script>
const certImages = [
  "/assets/certs/tf.png",
  "/assets/certs/hult.png",
  "/assets/certs/kick.png"
];
let currentCert = 0;

function openModal(index) {
  currentCert = index;
  document.getElementById("certModal").style.display = "block";
  document.getElementById("modalImage").src = certImages[currentCert];
}

function closeModal() {
  document.getElementById("certModal").style.display = "none";
}

function prevCert() {
  currentCert = (currentCert - 1 + certImages.length) % certImages.length;
  document.getElementById("modalImage").src = certImages[currentCert];
}

function nextCert() {
  currentCert = (currentCert + 1) % certImages.length;
  document.getElementById("modalImage").src = certImages[currentCert];
}

// Add keyboard controls
document.addEventListener("keydown", function (e) {
  const modal = document.getElementById("certModal");
  if (modal.style.display !== "block") return;

  switch (e.key) {
    case "ArrowLeft":
      prevCert();
      break;
    case "ArrowRight":
      nextCert();
      break;
    case "Escape":
      closeModal();
      break;
  }
});
</script>
