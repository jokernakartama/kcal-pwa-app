if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let l={};const c=e=>s(e,o),t={module:{uri:o},exports:l,require:c};n[o]=Promise.all(i.map((e=>t[e]||c(e)))).then((e=>(r(...e),l)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"170.797bf9b27da37a870669.js",revision:null},{url:"css/main.abc67e8d906941d62e02.css",revision:null},{url:"index.html",revision:"487ae89f948e0cde55382e88099308af"},{url:"locales/en.json",revision:"fa940961f90dda38637db332344c0c67"},{url:"locales/ru.json",revision:"0e09ee8055157c08ebc52dc07e36b841"},{url:"main.f3d5d3c2fdcaf92641a2.js",revision:null},{url:"vendors.1923eef59840967a3f90.js",revision:null}],{})}));
