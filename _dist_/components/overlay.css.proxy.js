
const code = ".overlay.svelte-1djj8h1{background-color:#000000da;position:fixed;top:0;right:0;bottom:0;left:0;width:100%;height:100%;visibility:hidden;cursor:pointer;display:flex;flex-direction:column;justify-content:center;z-index:1}.visible.svelte-1djj8h1{visibility:visible}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);