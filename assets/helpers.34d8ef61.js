import{u as r}from"./index.5e35a7b7.js";const n=r();function u(){return new Promise((e,t)=>{let i=setTimeout(t,2e4);(function o(){if(Object.keys(n.profiles).length>0)return clearTimeout(i),e();setTimeout(o,500)})()})}function a(e){navigator.clipboard.writeText(e.trim())}export{a as c,u as e};
