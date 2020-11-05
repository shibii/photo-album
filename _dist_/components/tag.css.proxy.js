
const code = "button.svelte-mlynuv{border-radius:3px;border:1px solid;padding:0.1rem 0.5em;font-weight:bold;font-size:0.75rem;background-color:var(--theme1);color:var(--contrast0)}button.svelte-mlynuv:hover{background-color:var(--contrast0);color:var(--theme1)}span.svelte-mlynuv{margin-left:0.5em}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);