import{S as V,i as q,s as z,x as A,Z as B,M as N,z as v,a as T,k as C,A as k,c as y,l as E,m as M,h as c,p as w,B as D,b as g,E as I,_ as O,N as Z,O as j,P as F,g as d,d as $,C as P,r as G,u as H,v as J}from"./index.8e3cc5cc.js";import{M as K}from"./app.00df3ad0.js";import{T as L}from"./TabTitle.430811bc.js";function Q(l){let e;return{c(){e=G(l[0])},l(s){e=H(s,l[0])},m(s,r){g(s,e,r)},p(s,r){r&1&&J(e,s[0])},d(s){s&&c(e)}}}function R(l){let e,s,r,f,i,m,n,_;function S(t){l[2](t)}let b={};l[0]!==void 0&&(b.title=l[0]),e=new L({props:b}),A.push(()=>B(e,"title",S)),i=new K({props:{$$slots:{default:[Q]},$$scope:{ctx:l}}});const p=l[1].default,o=N(p,l,l[3],null);return{c(){v(e.$$.fragment),r=T(),f=C("div"),v(i.$$.fragment),m=T(),n=C("div"),o&&o.c(),this.h()},l(t){k(e.$$.fragment,t),r=y(t),f=E(t,"DIV",{class:!0});var a=M(f);k(i.$$.fragment,a),m=y(a),n=E(a,"DIV",{class:!0});var u=M(n);o&&o.l(u),u.forEach(c),a.forEach(c),this.h()},h(){w(n,"class","col gap-5 flex-1"),w(f,"class","flex-1 col gap-5 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12")},m(t,a){D(e,t,a),g(t,r,a),g(t,f,a),D(i,f,null),I(f,m),I(f,n),o&&o.m(n,null),_=!0},p(t,[a]){const u={};!s&&a&1&&(s=!0,u.title=t[0],O(()=>s=!1)),e.$set(u);const h={};a&9&&(h.$$scope={dirty:a,ctx:t}),i.$set(h),o&&o.p&&(!_||a&8)&&Z(o,p,t,t[3],_?F(p,t[3],a,null):j(t[3]),null)},i(t){_||(d(e.$$.fragment,t),d(i.$$.fragment,t),d(o,t),_=!0)},o(t){$(e.$$.fragment,t),$(i.$$.fragment,t),$(o,t),_=!1},d(t){P(e,t),t&&c(r),t&&c(f),P(i),o&&o.d(t)}}}function U(l,e,s){let{$$slots:r={},$$scope:f}=e,{title:i="Title"}=e;function m(n){i=n,s(0,i)}return l.$$set=n=>{"title"in n&&s(0,i=n.title),"$$scope"in n&&s(3,f=n.$$scope)},[i,r,m,f]}class x extends V{constructor(e){super(),q(this,e,U,R,z,{title:0})}}export{x as C};
