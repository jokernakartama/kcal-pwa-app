if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let l={};const c=e=>s(e,o),t={module:{uri:o},exports:l,require:c};n[o]=Promise.all(i.map((e=>t[e]||c(e)))).then((e=>(r(...e),l)))}}define(["./workbox-ad8011fb"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"170.eddd93f0a7378c32e4c8.js",revision:null},{url:"css/main.a0ab567a4244059d81ae.css",revision:null},{url:"index.html",revision:"9adc48c5b619cedd066794cf2194b0ff"},{url:"locales/en.json",revision:"1a66543b949d96c588fb0eff78f5cd8f"},{url:"locales/ru.json",revision:"1855fcf05eae68164c5973d79fc69473"},{url:"main.e9096191d21a7819e3f4.js",revision:null},{url:"vendors.a985b048ca09605c0021.js",revision:null}],{})}));
