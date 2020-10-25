
const code = ".lds-dual-ring.svelte-i57uo6{display:block;width:30px;height:30px;margin:auto}.lds-dual-ring.svelte-i57uo6:after{content:\" \";display:block;width:30px;height:30px;margin:8px;border-radius:50%;border:4px solid #fff;border-color:#fff transparent #fff transparent;animation:svelte-i57uo6-lds-dual-ring 1.5s linear infinite}@keyframes svelte-i57uo6-lds-dual-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);