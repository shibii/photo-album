
const code = "h4.svelte-jcdadb{margin-bottom:0.2em;margin-top:1em}div.tag.svelte-jcdadb{display:inline-block;margin-right:2px;margin-bottom:1px}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);