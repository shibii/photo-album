
const code = ".gallery.svelte-wpmwyj.svelte-wpmwyj{width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;line-height:0;overflow-y:auto;padding:0 0.5em}.photo.svelte-wpmwyj.svelte-wpmwyj{cursor:pointer;width:100%}.photo.svelte-wpmwyj+.photo.svelte-wpmwyj{padding-top:0.5em}.observer.svelte-wpmwyj.svelte-wpmwyj{width:100%;flex-grow:1;height:auto;display:block}.observer.allLoaded.svelte-wpmwyj.svelte-wpmwyj{display:none}#scrollbar.svelte-wpmwyj.svelte-wpmwyj::-webkit-scrollbar-track{background-color:var(--theme0)}#scrollbar.svelte-wpmwyj.svelte-wpmwyj::-webkit-scrollbar{width:10px;background-color:var(--theme1)}#scrollbar.svelte-wpmwyj.svelte-wpmwyj::-webkit-scrollbar-thumb{background-color:var(--theme2)}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);