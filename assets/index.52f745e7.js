import{j as d,r as l,u as g,a as y,b as S,c as b,R as v,d as x,B as L,e as P,f as h}from"./vendor.f05df4c5.js";const R=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};R();const r=d.exports.jsx,i=d.exports.jsxs;function I(){const[n,o]=l.exports.useState(""),s=g();function a(t){o(t.target.value.trim())}function e(t){t.preventDefault(),s(`/search?q=${n.trim()}`)}return i("div",{children:[r("h1",{children:"Home Page"}),i("h2",{children:["State: ",n]}),i("form",{onSubmit:e,children:[r("input",{value:n,onInput:a}),r("button",{type:"submit",children:"Submit"})]})]})}function j({data:n}){return r("ul",{children:n&&n.map(o=>r("li",{children:o.join(" => ")},o[0]))})}const A="https://linggle.com",N="/api",O=`https://corsanywhere.herokuapp.com/${A}${N}`,q=`${O}/ngram`,E=n=>S.get(n).then(o=>o.data);function M(n){const{data:o,error:s}=y(n?`${q}/${n}`:null,E);return{results:o,error:s,isLoading:!s&&!o}}function _(){const[n,o]=l.exports.useState(""),[s,a]=b(),e=l.exports.useMemo(()=>s.get("q"),[s]),{results:t,isLoading:c,error:m}=M(e);function f(u){o(u.target.value)}function p(u){u.preventDefault(),a({q:n.trim()})}return i("div",{children:[r("h1",{children:"Search Page"}),i("h2",{children:["Query: ",e]}),i("form",{onSubmit:p,children:[r("input",{value:n,onInput:f}),r("button",{type:"submit",children:"Submit"})]}),c?r("h2",{children:"Loading ..."}):m?r("h2",{children:"Error Occured"}):r(j,{data:t==null?void 0:t.ngrams})]})}v.render(r(x.StrictMode,{children:r(L,{basename:"/linggle/",children:i(P,{children:[r(h,{path:"/",element:r(I,{})}),r(h,{path:"/search",element:r(_,{})})]})})}),document.getElementById("root"));
