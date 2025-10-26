// results.js
document.addEventListener("DOMContentLoaded", () => {
  const body = document.getElementById("resultsBody");
  const clearBtn = document.getElementById("clearBtn");
  const seedBtn = document.getElementById("seedBtn");

  function render() {
    const results = JSON.parse(localStorage.getItem("examResults")) || [];
    body.innerHTML = "";

    if (results.length === 0) {
      body.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:14px;">No results yet.</td></tr>`;
      return;
    }

    // newest first:
    results.slice().reverse().forEach(r => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${escapeHtml(r.exam)}</td>
        <td>${escapeHtml(r.date)}</td>
        <td>${escapeHtml(r.score)}</td>
        <td>${escapeHtml(r.percentage)}</td>
        <td class="${r.status === "Passed" ? "passed" : "failed"}">${escapeHtml(r.status)}</td>
        <td>${escapeHtml(r.remarks)}</td>
      `;
      body.appendChild(tr);
    });
  }

  clearBtn.addEventListener("click", () => {
    if (!confirm("Clear all saved results?")) return;
    localStorage.removeItem("examResults");
    render();
  });

  seedBtn.addEventListener("click", () => {
    const sample = [
      { exam:"Computer Networks", date: new Date().toLocaleString(), score:"4/4", percentage:"100.00%", status:"Passed", remarks:"Perfect" },
      { exam:"Data Structures", date: new Date().toLocaleString(), score:"3/4", percentage:"75.00%", status:"Passed", remarks:"Good" }
    ];
    localStorage.setItem("examResults", JSON.stringify(sample));
    render();
  });

  // small helper to avoid XSS in case of odd inputs
  function escapeHtml(s) {
    if (!s && s !== 0) return "";
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  render();
});

