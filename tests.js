// Milestone 1 Assertions
console.assert(window.countWords("") === 0, "Empty string returns 0 words");
console.assert(window.countWords("   ") === 0, "Whitespace returns 0 words");
console.assert(window.countWords("Hello   world  from here") === 4, "Collapses multiple spaces");
console.assert(window.formatReadTime(0, 230) === "0s", "0 words formats as 0s");