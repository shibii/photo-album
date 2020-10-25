
const code = ".gallery.svelte-93pf5.svelte-93pf5{width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;line-height:0;overflow-y:auto;padding:0 0.5em}.photo.svelte-93pf5.svelte-93pf5{cursor:pointer;width:100%}.photo.svelte-93pf5+.photo.svelte-93pf5{padding-top:0.5em}.observer.svelte-93pf5.svelte-93pf5{width:100%;flex-grow:1;height:auto;display:block}.observer.allLoaded.svelte-93pf5.svelte-93pf5{display:none}#scrollbar.svelte-93pf5.svelte-93pf5::-webkit-scrollbar-track{background-color:var(--theme1)}#scrollbar.svelte-93pf5.svelte-93pf5::-webkit-scrollbar{width:8px;background-color:var(--theme2)}#scrollbar.svelte-93pf5.svelte-93pf5::-webkit-scrollbar-thumb{background-color:var(--theme3)}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);