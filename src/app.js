function greet(name) {
    return `Hello, ${name}!`;
}

function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }

module.exports = { greet, add, multiply };

// Ensure function is exportable
// If run directly, print output (useful for debugging)

if (require.main === module) {
    console.log(greet("World"));
}