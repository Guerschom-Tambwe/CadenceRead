// CadenceRead — Milestone 1 Starter
const draftInput = document.getElementById("draft-input");
const wpmSelect = document.getElementById("wpm-select");
const wordEl = document.getElementById("rsvp-word");
const counterEl = document.getElementById("word-counter");
const playBtn = document.getElementById("play-btn");

// TODO (M1): Return [] for empty/whitespace, otherwise array of words
function tokenizeText(text) {
const clean = (text || "").trim();
  if (!clean) return [];
  return clean.split(/\s+/);
  return [];
}

// TODO (M1): Convert WPM to milliseconds per word (min 50ms)
function wpmToMs(wpm) {
  const rate = Number(wpm) || 300;
  return Math.max(50, Math.round(60000 / rate));
}

let timerId = null;
let words = [];
let index = 0;

function syncWords() {
  words = tokenizeText(draftInput ? draftInput.value : "");
  if (counterEl) counterEl.textContent = words.length + " words";
  if (wordEl && !timerId) wordEl.textContent = words[0] || "Ready";
}

function togglePlay() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    if (playBtn) playBtn.textContent = "Play";
    return;
  }
  syncWords();
  if (!words.length) return;
  index = 0;
  if (playBtn) playBtn.textContent = "Pause";
  timerId = setInterval(function() {
    if (wordEl) wordEl.textContent = words[index];
    index++;
    if (index >= words.length) {
      clearInterval(timerId);
      timerId = null;
      if (playBtn) playBtn.textContent = "Play";
    }
  }, wpmToMs(wpmSelect ? wpmSelect.value : 300));
}

if (draftInput) draftInput.addEventListener("input", syncWords);
if (playBtn) playBtn.addEventListener("click", togglePlay);

window.tokenizeText = tokenizeText;
window.wpmToMs = wpmToMs;
syncWords();