import{e}from"../../../../preact.jsx-runtime.v10.5.14-7921408a.js";import"../../../../preact.v10.5.14-48b2ca28.js";let t="_Newsletter_1qws8_1";if("undefined"!=typeof document){const e=document.createElement("style"),t=document.createTextNode("._Newsletter_1qws8_1 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1rem;\n}\n\n._Newsletter_1qws8_1 * {\n  width: 400px;\n}\n");e.type="text/css",e.appendChild(t),document.head.appendChild(e)}const n=()=>e("div",{className:t,children:[e("h4",{children:"Subscribe to my newsletter:"}),e("form",{onSubmit:e=>{e.preventDefault();const t=document.getElementById("subscribe");t.disabled=!0;const n=e.target,s=new FormData(n);let l;for(const[e,t]of s)l=t;l?(fetch("https://newsletter.sadh.life/subscribe",{method:"post",body:JSON.stringify({email:l,name:"User",status:"enabled"})}),t.style.backgroundColor="#007766",t.textContent="Success!"):t.disabled=!1},children:[e("label",{children:e("input",{type:"text",name:"email",placeholder:"Your email..."})}),e("button",{id:"subscribe",children:"Subscribe"})]})]});export{n as default};
