if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const t=s=>l(s,n),o={module:{uri:n},exports:u,require:t};e[n]=Promise.all(r.map((s=>o[s]||t(s)))).then((s=>(i(...s),u)))}}define(["./workbox-f3e6b16a"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_plugin-vue_export-helper-CX8Wm6Ty.js",revision:null},{url:"assets/404-DslkejJN.js",revision:null},{url:"assets/app-B9Clm7tw.js",revision:null},{url:"assets/app-Cm26NLna.css",revision:null},{url:"assets/ar-HvujSz0t.js",revision:null},{url:"assets/de-tIfILiOM.js",revision:null},{url:"assets/default-BrLFidlc.js",revision:null},{url:"assets/en-uqoOIB2y.js",revision:null},{url:"assets/es-DCBmW4A7.js",revision:null},{url:"assets/fr-C-cySWgT.js",revision:null},{url:"assets/home-DSqGLLhr.js",revision:null},{url:"assets/id-Cdl9masJ.js",revision:null},{url:"assets/index-CuHvlG46.js",revision:null},{url:"assets/it-CZF_x55d.js",revision:null},{url:"assets/ja-bk9vkbha.js",revision:null},{url:"assets/ka-DrXH8DM7.js",revision:null},{url:"assets/ko-D1Wq3H7u.js",revision:null},{url:"assets/pl-x_vaV0QH.js",revision:null},{url:"assets/pt-BR-CJ3Aq30r.js",revision:null},{url:"assets/ru-BQt2BLfU.js",revision:null},{url:"assets/tr-CMH1HB1g.js",revision:null},{url:"assets/uk-PdFIL57p.js",revision:null},{url:"assets/uz-D9sR80nb.js",revision:null},{url:"assets/vi-BsN4yQMQ.js",revision:null},{url:"assets/virtual_pwa-register-L0tntsrU.js",revision:null},{url:"assets/workbox-window.prod.es5-B_6ZJHoI.js",revision:null},{url:"assets/zh-CN-CME5MBO5.js",revision:null},{url:"index.html",revision:"ad2cee5560f9f35de46d16709ca7ac4a"},{url:"favicon.svg",revision:"a795ab195c26601ea433babed25a7d0d"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"3b59667a352cdfd59d6bd12346d9f27e"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
