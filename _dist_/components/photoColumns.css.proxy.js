
const code = ".group.svelte-1j2bc9p.svelte-1j2bc9p{column-width:320px;column-gap:1.5em;column-fill:balance;line-height:0}.photo.svelte-1j2bc9p.svelte-1j2bc9p{cursor:pointer}.photo.svelte-1j2bc9p+.photo.svelte-1j2bc9p{margin-top:1.5em}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);