
const code = ".container.svelte-1xyxoap{position:relative;width:100%;height:100%}img.svelte-1xyxoap{width:100%;height:100%;object-fit:contain;margin:auto;filter:blur(4px)}img.loaded{filter:none;transition:filter 100ms linear}.overlay.svelte-1xyxoap{position:absolute;top:0.5em;left:0.5em;font-size:0.75rem;color:#ffffff;font-weight:lighter;text-shadow:1px 0 8px #000000, 0 1px 8px #222222, 1px 0 10px #000000,\r\n      0 1px 10px #222222, 1px 0 12px #222222, 0 1px 12px #222222;padding:0.3em;line-height:1.5em;visibility:hidden}.overlay.visible.svelte-1xyxoap{visibility:visible}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);