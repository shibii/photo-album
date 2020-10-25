
const code = "img.svelte-7ih2e{width:100%;height:auto;object-fit:contain;filter:blur(4px)}img.loaded{filter:none;transition:filter 100ms linear}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);