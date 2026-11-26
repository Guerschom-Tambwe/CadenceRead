// CadenceRead — Milestone 1 Starter
const draftInput = document.getElementById("draft-input");
const wpmSelect = document.getElementById("wpm-select");
const wordCountEl = document.getElementById("word-count");
const readTimeEl = document.getElementById("read-time");

// TODO (M1): Return 0 for empty/whitespace strings, otherwise word count
function countWords(text) {
  const clean = (text || "").trim();
  if (!clean) return 0;
  return clean.split(/\s+/).length;
  return 0;
}

function formatReadTime(words, wpm) {
  if (!words) return "0s";
  const sec = Math.ceil((words / wpm) * 60);
  if (sec < 60) return sec + "s";
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return s > 0 ? m + "m " + s + "s" : m + "m";
}

function render() {
  const words = countWords(draftInput ? draftInput.value : "");
  const wpm = wpmSelect ? Number(wpmSelect.value) : 230;
  if (wordCountEl) wordCountEl.textContent = String(words);
  if (readTimeEl) readTimeEl.textContent = formatReadTime(words, wpm);
}

if (draftInput) draftInput.addEventListener("input", render);
if (wpmSelect) wpmSelect.addEventListener("change", render);

window.countWords = countWords;
window.formatReadTime = formatReadTime;
render();