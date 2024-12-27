import{i as le,t as K}from"../chunks/skills.3fe621b4.js";import{S as se,i as re,s as ne,z as I,a as M,k,A as V,c as S,l as b,m as w,h as $,p as y,B as T,b as D,d as v,f as q,g as _,C as j,w as H,E as h,H as ae,r as L,u as O,n as Y,v as Z}from"../chunks/index.8e3cc5cc.js";import{i as oe}from"../chunks/projects.e6e8e27d.js";import{i as ie}from"../chunks/experience.98ab2aba.js";import{b as Q}from"../chunks/paths.37ec1431.js";import{g as U,U as ee}from"../chunks/UIcon.5d434ca4.js";import{M as ce}from"../chunks/app.00df3ad0.js";import{C as fe}from"../chunks/CardDivider.8a877109.js";import{C as ue}from"../chunks/CardLogo.83bcd380.js";import{B as me,M as pe}from"../chunks/Banner.813eaa48.js";import{T as $e}from"../chunks/TabTitle.430811bc.js";import{C as de}from"../chunks/Chip.105411b9.js";function _e({params:c}){if(c.slug)return{skill:le.find(l=>l.slug===c.slug)}}const Ne=Object.freeze(Object.defineProperty({__proto__:null,load:_e},Symbol.toStringTag,{value:"Module"}));function W(c,e,l){const t=c.slice();return t[4]=e[l],t}function ge(c){let e,l,t,s,n,u,a,r,o,i,g,C,E,N;l=new me({props:{img:U(c[0].skill.logo),$$slots:{default:[ke]},$$scope:{ctx:c}}});const F=[we,be],P=[];function G(f,m){return f[0].skill.description?0:1}u=G(c),a=P[u]=F[u](c),i=new fe({});let B=c[1],p=[];for(let f=0;f<B.length;f+=1)p[f]=X(W(c,B,f));const te=f=>v(p[f],1,1,()=>{p[f]=null});return{c(){e=k("div"),I(l.$$.fragment),t=M(),s=k("div"),n=k("div"),a.c(),r=M(),o=k("div"),I(i.$$.fragment),g=M(),C=k("div"),E=k("div");for(let f=0;f<p.length;f+=1)p[f].c();this.h()},l(f){e=b(f,"DIV",{class:!0});var m=w(e);V(l.$$.fragment,m),t=S(m),s=b(m,"DIV",{class:!0});var x=w(s);n=b(x,"DIV",{class:!0});var z=w(n);a.l(z),z.forEach($),x.forEach($),r=S(m),o=b(m,"DIV",{class:!0});var d=w(o);V(i.$$.fragment,d),d.forEach($),g=S(m),C=b(m,"DIV",{class:!0});var A=w(C);E=b(A,"DIV",{class:!0});var J=w(E);for(let R=0;R<p.length;R+=1)p[R].l(J);J.forEach($),A.forEach($),m.forEach($),this.h()},h(){y(n,"class","px-10px m-y-5"),y(s,"class","pt-3 pb-1 overflow-x-hidden w-full"),y(o,"class","self-stretch mb-2"),y(E,"class","px-10px"),y(C,"class","flex flex-row gap-1 self-stretch flex-wrap "),y(e,"class","flex flex-col items-center overflow-x-hidden")},m(f,m){D(f,e,m),T(l,e,null),h(e,t),h(e,s),h(s,n),P[u].m(n,null),h(e,r),h(e,o),T(i,o,null),h(e,g),h(e,C),h(C,E);for(let x=0;x<p.length;x+=1)p[x]&&p[x].m(E,null);N=!0},p(f,m){const x={};m&1&&(x.img=U(f[0].skill.logo)),m&129&&(x.$$scope={dirty:m,ctx:f}),l.$set(x);let z=u;if(u=G(f),u===z?P[u].p(f,m):(H(),v(P[z],1,1,()=>{P[z]=null}),q(),a=P[u],a?a.p(f,m):(a=P[u]=F[u](f),a.c()),_(a,1),a.m(n,null)),m&2){B=f[1];let d;for(d=0;d<B.length;d+=1){const A=W(f,B,d);p[d]?(p[d].p(A,m),_(p[d],1)):(p[d]=X(A),p[d].c(),_(p[d],1),p[d].m(E,null))}for(H(),d=B.length;d<p.length;d+=1)te(d);q()}},i(f){if(!N){_(l.$$.fragment,f),_(a),_(i.$$.fragment,f);for(let m=0;m<B.length;m+=1)_(p[m]);N=!0}},o(f){v(l.$$.fragment,f),v(a),v(i.$$.fragment,f),p=p.filter(Boolean);for(let m=0;m<p.length;m+=1)v(p[m]);N=!1},d(f){f&&$(e),j(l),P[u].d(),j(i),ae(p,f)}}}function he(c){let e,l,t,s,n,u;return l=new ee({props:{icon:"i-carbon-software-resource-cluster",classes:"text-3.5em"}}),{c(){e=k("div"),I(l.$$.fragment),t=M(),s=k("p"),n=L("Could not load skill data."),this.h()},l(a){e=b(a,"DIV",{class:!0});var r=w(e);V(l.$$.fragment,r),t=S(r),s=b(r,"P",{class:!0});var o=w(s);n=O(o,"Could not load skill data."),o.forEach($),r.forEach($),this.h()},h(){y(s,"class","font-300"),y(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(a,r){D(a,e,r),T(l,e,null),h(e,t),h(e,s),h(s,n),u=!0},p:Y,i(a){u||(_(l.$$.fragment,a),u=!0)},o(a){v(l.$$.fragment,a),u=!1},d(a){a&&$(e),j(l)}}}function ve(c){let e=c[0].skill.name+"",l;return{c(){l=L(e)},l(t){l=O(t,e)},m(t,s){D(t,l,s)},p(t,s){s&1&&e!==(e=t[0].skill.name+"")&&Z(l,e)},d(t){t&&$(l)}}}function ke(c){let e,l;return e=new ce({props:{$$slots:{default:[ve]},$$scope:{ctx:c}}}),{c(){I(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,s){T(e,t,s),l=!0},p(t,s){const n={};s&129&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){j(e,t)}}}function be(c){let e,l,t,s,n,u;return l=new ee({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=k("div"),I(l.$$.fragment),t=M(),s=k("p"),n=L("No description"),this.h()},l(a){e=b(a,"DIV",{class:!0});var r=w(e);V(l.$$.fragment,r),t=S(r),s=b(r,"P",{class:!0});var o=w(s);n=O(o,"No description"),o.forEach($),r.forEach($),this.h()},h(){y(s,"class","font-300"),y(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(a,r){D(a,e,r),T(l,e,null),h(e,t),h(e,s),h(s,n),u=!0},p:Y,i(a){u||(_(l.$$.fragment,a),u=!0)},o(a){v(l.$$.fragment,a),u=!1},d(a){a&&$(e),j(l)}}}function we(c){let e,l;return e=new pe({props:{content:c[0].skill.description??"This place is yet to be filled..."}}),{c(){I(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,s){T(e,t,s),l=!0},p(t,s){const n={};s&1&&(n.content=t[0].skill.description??"This place is yet to be filled..."),e.$set(n)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){j(e,t)}}}function ye(c){let e,l,t,s=c[4].display+"",n,u,a;return e=new ue({props:{src:c[4].img,alt:c[4].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){I(e.$$.fragment),l=M(),t=k("span"),n=L(s),u=M(),this.h()},l(r){V(e.$$.fragment,r),l=S(r),t=b(r,"SPAN",{class:!0});var o=w(t);n=O(o,s),o.forEach($),u=S(r),this.h()},h(){y(t,"class","text-[0.9em]")},m(r,o){T(e,r,o),D(r,l,o),D(r,t,o),h(t,n),D(r,u,o),a=!0},p(r,o){const i={};o&2&&(i.src=r[4].img),o&2&&(i.alt=r[4].name),e.$set(i),(!a||o&2)&&s!==(s=r[4].display+"")&&Z(n,s)},i(r){a||(_(e.$$.fragment,r),a=!0)},o(r){v(e.$$.fragment,r),a=!1},d(r){j(e,r),r&&$(l),r&&$(t),r&&$(u)}}}function X(c){let e,l;return e=new de({props:{classes:"inline-flex flex-row items-center justify-center",href:`${Q}${c[4].url}`,$$slots:{default:[ye]},$$scope:{ctx:c}}}),{c(){I(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,s){T(e,t,s),l=!0},p(t,s){const n={};s&2&&(n.href=`${Q}${t[4].url}`),s&130&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){j(e,t)}}}function Ee(c){let e,l,t,s,n,u;e=new $e({props:{title:c[2]}});const a=[he,ge],r=[];function o(i,g){return i[0].skill===void 0?0:1}return s=o(c),n=r[s]=a[s](c),{c(){I(e.$$.fragment),l=M(),t=k("div"),n.c(),this.h()},l(i){V(e.$$.fragment,i),l=S(i),t=b(i,"DIV",{class:!0});var g=w(t);n.l(g),g.forEach($),this.h()},h(){y(t,"class","pb-10 overflow-x-hidden col flex-1")},m(i,g){T(e,i,g),D(i,l,g),D(i,t,g),r[s].m(t,null),u=!0},p(i,[g]){const C={};g&4&&(C.title=i[2]),e.$set(C);let E=s;s=o(i),s===E?r[s].p(i,g):(H(),v(r[E],1,1,()=>{r[E]=null}),q(),n=r[s],n?n.p(i,g):(n=r[s]=a[s](i),n.c()),_(n,1),n.m(t,null))},i(i){u||(_(e.$$.fragment,i),_(n),u=!0)},o(i){v(e.$$.fragment,i),v(n),u=!1},d(i){j(e,i),i&&$(l),i&&$(t),r[s].d()}}}function xe(c,e,l){let t,s,{data:n}=e;const u=()=>{const a=[],r=n.skill;return r?(oe.forEach(o=>{o.skills.some(i=>i.slug===r.slug)&&a.push({img:U(o.logo),display:`${o.name} (${o.type})`,name:o.name,type:"projects",url:`/projects/${o.slug}`})}),ie.forEach(o=>{o.skills.some(i=>i.slug===r.slug)&&a.push({img:U(o.logo),display:`${o.name} @ ${o.company}`,name:o.name,type:"experience",url:`/experience/${o.slug}`})}),a):[]};return c.$$set=a=>{"data"in a&&l(0,n=a.data)},c.$$.update=()=>{c.$$.dirty&1&&l(2,t=n.skill?`${n.skill.name} - ${K}`:K),c.$$.dirty&1&&l(1,s=n.skill?u():[])},[n,s,t]}class Ue extends se{constructor(e){super(),re(this,e,xe,Ee,ne,{data:0})}}export{Ue as component,Ne as universal};
