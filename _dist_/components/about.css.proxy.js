
const code = ".hoverable.svelte-128fgrc.svelte-128fgrc{background-color:#000000e5;box-shadow:0 0 5px black;position:fixed;top:0.5em;right:0.5em;width:auto;max-width:19em;height:auto;padding:0.5em;border:2px solid var(--theme2);border-radius:0.5em;color:var(--theme3)}p.svelte-128fgrc+p.svelte-128fgrc{margin-top:1em}a.svelte-128fgrc.svelte-128fgrc:link,a.svelte-128fgrc.svelte-128fgrc:visited{color:whitesmoke}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);