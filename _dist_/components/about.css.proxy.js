
const code = ".hoverable.svelte-s0p7u1.svelte-s0p7u1{background-color:#000000e5;box-shadow:0 0 5px black;position:fixed;top:0.5em;right:0.5em;width:auto;max-width:19em;height:auto;padding:0.4em;border:1px solid var(--theme2);border-radius:0.5em;color:var(--theme3);z-index:1}p.svelte-s0p7u1+p.svelte-s0p7u1{margin-top:1em}a.svelte-s0p7u1.svelte-s0p7u1:link,a.svelte-s0p7u1.svelte-s0p7u1:visited{color:whitesmoke}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);