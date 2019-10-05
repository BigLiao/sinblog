const katex = require('katex');
const fs = require('fs');
const path = require('path');

const latex = fs.readFileSync(path.resolve(__dirname, './latex.md'), { encoding: 'utf8' });

const str = katex.renderToString(latex);
fs.writeFileSync(path.resolve(__dirname, './latex-result.html'), str);