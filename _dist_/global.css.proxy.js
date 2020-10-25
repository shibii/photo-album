
const code = ":root {\r\n  --theme0: #19201f;\r\n  --theme1: #333b3a;\r\n  --theme2: #454b57;\r\n  --theme3: #676f7e;\r\n}\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n  height: 100%;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  font-family: \"Commissioner\", sans-serif;\r\n  height: 100%;\r\n  background-color: var(--theme0);\r\n}\r\n\r\nimg {\r\n  display: block;\r\n}\r\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);