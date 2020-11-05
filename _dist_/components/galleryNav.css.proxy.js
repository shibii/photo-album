
const code = "h5.svelte-1wqbhv4{margin-bottom:0.1em;margin-top:1em}.tag.svelte-1wqbhv4{margin-right:2px}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);