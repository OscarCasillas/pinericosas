const quotes = [
  "linea 1",
  "linea 2",
  "linea 3",
  "linea 4",
  "linea 5",
  "linea 6",
  "linea 7",
  "linea 8"
];

/**
 * Gets a random Piñera Quote
 * @returns {string}
 */
function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

module.exports = {
  randomQuote
};