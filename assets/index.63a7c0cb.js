import{j as d,r as l,u as g,a as y,b as S,c as b,R as v,d as x,B as L,e as P,f as h}from"./vendor.f05df4c5.js";const R=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};R();const o=d.exports.jsx,i=d.exports.jsxs;function I(){const[r,n]=l.exports.useState(""),s=g();function a(t){n(t.target.value.trim())}function e(t){t.preventDefault(),s(`/search?q=${r.trim()}`)}return i("div",{children:[o("h1",{children:"Home Page"}),i("h2",{children:["State: ",r]}),i("form",{onSubmit:e,children:[o("input",{value:r,onInput:a}),o("button",{type:"submit",children:"Submit"})]})]})}function j({data:r}){return o("ul",{children:r&&r.map(n=>o("li",{children:n.join(" => ")},n[0]))})}const A="https://linggle.com",N="/api",q=`https://corsanywhere.herokuapp.com/${A}${N}`,M=`${q}/ngram`,O=r=>S.get(r).then(n=>n.data);function _(r){const{data:n,error:s}=y(r?`${M}/${r}`:null,O);return{results:n,error:s,isLoading:!s&&!n}}function $(){const[r,n]=l.exports.useState(""),[s,a]=b(),e=l.exports.useMemo(()=>s.get("q"),[s]),{results:t,isLoading:c,error:m}=_(e);function f(u){n(u.target.value)}function p(u){u.preventDefault(),a({q:r.trim()})}return i("div",{children:[o("h1",{children:"Search Page"}),i("h2",{children:["Query: ",e]}),i("form",{onSubmit:p,children:[o("input",{value:r,onInput:f}),o("button",{type:"submit",children:"Submit"})]}),!c&&!m&&o(j,{data:t==null?void 0:t.ngrams})]})}v.render(o(x.StrictMode,{children:o(L,{children:i(P,{children:[o(h,{path:"/",element:o(I,{})}),o(h,{path:"/search",element:o($,{})})]})})}),document.getElementById("root"));
