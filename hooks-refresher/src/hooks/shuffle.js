// utils.js

// Simple array shuffle using Fisher–Yates algorithm
export function Shuffle(array) {
  const result = [...array];      // make a copy so we don't mutate the original
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}