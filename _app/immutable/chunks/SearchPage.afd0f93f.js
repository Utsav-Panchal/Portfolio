import{S as d,i as w,s as g,z as S,A as P,B as b,g as f,d as u,C as y,J as C,Y as $,o as q,M as v,k as L,l as D,m as E,h as m,p as I,b as M,N as R,O as U,P as k}from"./index.8e3cc5cc.js";import{C as z}from"./CommonPage.b2719d9c.js";import{p as A}from"./stores.de7364be.js";import{b as B}from"./paths.37ec1431.js";function J(n){let t,o;const s=n[4].default,a=v(s,n,n[5],null);return{c(){t=L("div"),a&&a.c(),this.h()},l(e){t=D(e,"DIV",{class:!0});var i=E(t);a&&a.l(i),i.forEach(m),this.h()},h(){I(t,"class","w-100% col flex-1")},m(e,i){M(e,t,i),a&&a.m(t,null),o=!0},p(e,i){a&&a.p&&(!o||i&32)&&R(a,s,e,e[5],o?k(s,e[5],i,null):U(e[5]),null)},i(e){o||(f(a,e),o=!0)},o(e){u(a,e),o=!1},d(e){e&&m(t),a&&a.d(e)}}}function N(n){let t,o;return t=new z({props:{title:n[0],$$slots:{default:[J]},$$scope:{ctx:n}}}),{c(){S(t.$$.fragment)},l(s){P(t.$$.fragment,s)},m(s,a){b(t,s,a),o=!0},p(s,[a]){const e={};a&1&&(e.title=s[0]),a&32&&(e.$$scope={dirty:a,ctx:s}),t.$set(e)},i(s){o||(f(t.$$.fragment,s),o=!0)},o(s){u(t.$$.fragment,s),o=!1},d(s){y(t,s)}}}function O(n,t,o){let s;C(n,A,r=>o(3,s=r));let{$$slots:a={},$$scope:e}=t,{title:i="Title"}=t,{search:l=""}=t;const h=$();let c=!1;return q(()=>{let r=new URLSearchParams(window.location.search);o(1,l=r.get("q")??""),o(2,c=!0)}),n.$$set=r=>{"title"in r&&o(0,i=r.title),"search"in r&&o(1,l=r.search),"$$scope"in r&&o(5,e=r.$$scope)},n.$$.update=()=>{if(n.$$.dirty&2&&h("search",{search:l.trim().toLowerCase()}),n.$$.dirty&14&&c){let r=new URLSearchParams(window.location.search);r.set("q",l);const _=`${window.location.protocol}//${window.location.host}${window.location.pathname}?${r.toString()}`,p=window.history.state;window.history.replaceState(p,"",_),s.url.pathname.startsWith(`${B}/search`)}},[i,l,c,s,a,e]}class j extends d{constructor(t){super(),w(this,t,O,N,g,{title:0,search:1})}}export{j as S};
