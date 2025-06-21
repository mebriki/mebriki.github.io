---
layout: archive
title: "CV / Resume"
permalink: /cv-resume/
---

<style>
details {
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 1.2em;
  background: var(--global-bg-color); /* Use site background */
  color: var(--global-text-color);    /* Use site text color */
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  padding: 0.5em 1em;
  transition: box-shadow 0.2s;
}
details[open] {
  box-shadow: 0 4px 16px rgba(0,0,0,0.07);
}
summary {
  cursor: pointer;
  font-size: 1.1em;
  font-weight: bold;
  outline: none;
  display: flex;
  align-items: center;
}
summary::-webkit-details-marker {
  display: none;
}
.summary-arrow {
  display: inline-block;
  margin-right: 0.5em;
  transition: transform 0.2s;
}
details[open] .summary-arrow {
  transform: rotate(90deg);
}
</style>


<details>
  <summary><span class="summary-arrow">&#9654;</span> Academic CV</summary>
  <!-- <a href="/files/academic_cv.pdf" target="_blank">View Academic CV (PDF)</a> -->
  <iframe src="/files/academic_cv.pdf" width="100%" height="700"></iframe>
</details>

<details>
  <summary><span class="summary-arrow">&#9654;</span> ML Resume</summary>
  <!-- <a href="/files/ml_resume.pdf" target="_blank">View ML Resume (PDF)</a> -->
  <iframe src="/files/ml_resume.pdf" width="100%" height="700"></iframe>
</details>