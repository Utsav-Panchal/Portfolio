import{n as b,s as p}from"./index.8e3cc5cc.js";const t=[];function g(o,l=b){let i;const n=new Set;function r(e){if(p(o,e)&&(o=e,i)){const c=!t.length;for(const s of n)s[1](),t.push(s,o);if(c){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function a(e){r(e(o))}function _(e,c=b){const s=[e,c];return n.add(s),n.size===1&&(i=l(r)||b),e(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:a,subscribe:_}}var u;const d=((u=globalThis.__sveltekit_1d1e3cu)==null?void 0:u.base)??"/slick-portfolio-svelte";var f;const k=((f=globalThis.__sveltekit_1d1e3cu)==null?void 0:f.assets)??d;export{k as a,d as b,g as w};
