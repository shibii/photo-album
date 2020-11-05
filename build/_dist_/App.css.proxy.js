
const code = ".header.svelte-10zvbi9{margin:2em 0}.layout.svelte-10zvbi9{margin:2em 10%}.gallery-nav.svelte-10zvbi9{margin:1em 0}.photo-columns.svelte-10zvbi9{margin-top:2em}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);