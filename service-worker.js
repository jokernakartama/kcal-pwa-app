if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const l=e=>n(e,o),t={module:{uri:o},exports:c,require:l};s[o]=Promise.all(i.map((e=>t[e]||l(e)))).then((e=>(r(...e),c)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/main.9580ca19e8beae7830c5.css",revision:null},{url:"assets/js/170.d6e593ebbd2aab43055a.js",revision:null},{url:"assets/js/main.203139c59a59d3ccd7f9.js",revision:null},{url:"assets/js/vendors.b68b0124633b5f4abf6d.js",revision:null},{url:"index.html",revision:"04d631b98184c453f73e281e1ee47ec2"},{url:"locales/en.json",revision:"20bc74fbc4b747203c9838da133521cd"},{url:"locales/ru.json",revision:"a871c9d9a03c9e9f01365cb1d5ec6183"}],{})}));
