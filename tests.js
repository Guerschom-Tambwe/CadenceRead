// Milestone 1 Assertions
console.assert(window.tokenizeText("").length === 0, "Empty string returns 0 words");
console.assert(window.tokenizeText("   ").length === 0, "Whitespace returns 0 words");
console.assert(window.tokenizeText("Fast   calm  focus").length === 3, "Collapses extra spaces");
console.assert(window.wpmToMs(300) === 200, "300 WPM equals 200ms per word");