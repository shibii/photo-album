
const code = ".layout.svelte-182imul{height:100%;display:grid;grid-template-areas:\"gallery photo\";grid-template-columns:1fr 3fr;grid-template-rows:100%}.gallery.svelte-182imul{grid-area:gallery;height:100%}.photo.svelte-182imul{grid-area:photo;height:100%;width:100%;display:flex;cursor:pointer;padding:0 0.5em}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);