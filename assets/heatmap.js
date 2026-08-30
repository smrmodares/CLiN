const cols = ["Originality","Fluency","Elaboration","Creativity","Attractiveness","Emotion"];
const humanRows = [
  ["GPT-4.1",["0.42","0.32","0.37","0.37","0.06*","0.26"]],
  ["DeepSeek-V3",["0.55","0.13*","0.24","0.19","-0.07*","0.19*"]],
  ["Gemini-2.5-Pro",["0.38","0.33","0.35","0.26","0.14*","0.25"]],
  ["Gemma-3",["0.26","0.31","0.31","0.40","0.20","0.18*"]],
  ["LLaMA-4",["0.33","0.30","0.32","0.48","0.02*","0.04*"]],
  ["GPT-5",["0.40","0.26","0.41","0.24","0.13*","0.27"]],
  ["Claude-3.7-Sonnet",["0.43","0.42","0.43","0.43","0.03*","0.18*"]]
];
const modelRows = [
  ["GPT-4.1",["0.39","0.29","0.38","-0.14*","0.05*","0.11*"]],
  ["DeepSeek-V3",["0.44","0.36","0.34","0.35","0.01*","0.02*"]],
  ["Gemini-2.5-Pro",["0.43","0.22","0.26","0.19","0.12*","0.00*"]],
  ["Gemma-3",["0.24","0.41","0.19*","0.21","0.12*","0.15*"]],
  ["LLaMA-4",["0.44","0.46","0.33","0.29","0.14*","0.00*"]],
  ["GPT-5",["0.47","0.35","0.37","0.19*","0.08*","0.13*"]],
  ["Claude-3.7-Sonnet",["0.40","0.46","0.46","0.28","-0.01*","0.21*"]]
];

function cellColor(v) {
  const x = parseFloat(v);
  if (x < 0) return "#d9d2cf";
  if (x < 0.08) return "#fbf6f3";
  if (x < 0.16) return "#f6e3df";
  if (x < 0.24) return "#efccc5";
  if (x < 0.32) return "#e6aaa0";
  if (x < 0.40) return "#d97f72";
  if (x < 0.48) return "#c95445";
  return "#aa3228";
}

function renderHeatmap(rows) {
  const root = document.getElementById("heatmap-grid");
  if (!root) return;
  root.innerHTML = "";

  const corner = document.createElement("div");
  corner.className = "hm-col hm-corner";
  corner.textContent = "Model";
  root.appendChild(corner);

  cols.forEach((c) => {
    const d = document.createElement("div");
    d.className = "hm-col";
    d.textContent = c;
    root.appendChild(d);
  });

  rows.forEach(([name, vals]) => {
    const label = document.createElement("div");
    label.className = "hm-label";
    label.textContent = name;
    root.appendChild(label);

    vals.forEach((v) => {
      const d = document.createElement("div");
      d.className = "hm-cell";
      d.style.background = cellColor(v);
      d.style.color = parseFloat(v) >= 0.37 ? "#fffdf9" : "#342d28";
      d.textContent = v;
      root.appendChild(d);
    });
  });
}

const humanBtn = document.getElementById("hm-human");
const modelBtn = document.getElementById("hm-model");
if (humanBtn && modelBtn) {
  humanBtn.addEventListener("click", () => {
    humanBtn.classList.add("active");
    modelBtn.classList.remove("active");
    renderHeatmap(humanRows);
  });
  modelBtn.addEventListener("click", () => {
    modelBtn.classList.add("active");
    humanBtn.classList.remove("active");
    renderHeatmap(modelRows);
  });
}
renderHeatmap(humanRows);
