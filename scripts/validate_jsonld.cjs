const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (!match) throw new Error("No JSON-LD script found");
const data = JSON.parse(match[1]);
console.log("JSON-LD successfully validated!");
console.log("Context:", data['@context']);
console.log("Graph items:", data['@graph'].map(item => item['@type']));
