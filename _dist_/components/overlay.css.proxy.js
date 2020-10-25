
const code = ".overlay.svelte-7w1wqw{background-color:#000000da;position:fixed;top:0;left:0;bottom:0;right:0;visibility:hidden;cursor:pointer;display:flex;justify-content:center;z-index:1}.visible.svelte-7w1wqw{visibility:visible}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);