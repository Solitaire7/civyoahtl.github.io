if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>n(e,l),a={module:{uri:l},exports:t,require:o};s[l]=Promise.all(i.map((e=>a[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-b3e22772"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"aa15e83629baf509c9e02a93f399a038"},{url:"assets/app.02c63fc1.js",revision:null},{url:"assets/constitution_charter.md.babcb172.js",revision:null},{url:"assets/constitution_charter.md.babcb172.lean.js",revision:null},{url:"assets/constitution_first-charter-revised.md.e224136f.js",revision:null},{url:"assets/constitution_first-charter-revised.md.e224136f.lean.js",revision:null},{url:"assets/constitution_first-charter.md.a1d7850c.js",revision:null},{url:"assets/constitution_first-charter.md.a1d7850c.lean.js",revision:null},{url:"assets/constitution_secound-charter.md.05707a31.js",revision:null},{url:"assets/constitution_secound-charter.md.05707a31.lean.js",revision:null},{url:"assets/constitution_treaties.md.adc46ac1.js",revision:null},{url:"assets/constitution_treaties.md.adc46ac1.lean.js",revision:null},{url:"assets/culture_index.md.67a9a52e.js",revision:null},{url:"assets/culture_index.md.67a9a52e.lean.js",revision:null},{url:"assets/deadLetters.md.020a51da.js",revision:null},{url:"assets/deadLetters.md.020a51da.lean.js",revision:null},{url:"assets/government_conventions.md.dddf9b3f.js",revision:null},{url:"assets/government_conventions.md.dddf9b3f.lean.js",revision:null},{url:"assets/government_council-acts.md.511f78db.js",revision:null},{url:"assets/government_council-acts.md.511f78db.lean.js",revision:null},{url:"assets/government_court-cases-precedents_index.md.8ff19b2f.js",revision:null},{url:"assets/government_court-cases-precedents_index.md.8ff19b2f.lean.js",revision:null},{url:"assets/government_court-cases-precedents_orange_v_14uu_aug_2017.md.3879d931.js",revision:null},{url:"assets/government_court-cases-precedents_orange_v_14uu_aug_2017.md.3879d931.lean.js",revision:null},{url:"assets/government_documents_introduction.md.72a29e04.js",revision:null},{url:"assets/government_documents_introduction.md.72a29e04.lean.js",revision:null},{url:"assets/government_documents_siccufrigus.md.ee6c0671.js",revision:null},{url:"assets/government_documents_siccufrigus.md.ee6c0671.lean.js",revision:null},{url:"assets/government_documents_yoahtl-crimes-act.md.e68a5eb0.js",revision:null},{url:"assets/government_documents_yoahtl-crimes-act.md.e68a5eb0.lean.js",revision:null},{url:"assets/government_government-composition-history.md.8b8d7673.js",revision:null},{url:"assets/government_government-composition-history.md.8b8d7673.lean.js",revision:null},{url:"assets/government_introduction.md.6fcbe453.js",revision:null},{url:"assets/government_introduction.md.6fcbe453.lean.js",revision:null},{url:"assets/government_olotic-preposals.md.9f0943e7.js",revision:null},{url:"assets/government_olotic-preposals.md.9f0943e7.lean.js",revision:null},{url:"assets/government_procedures.md.bb2ebd94.js",revision:null},{url:"assets/government_procedures.md.bb2ebd94.lean.js",revision:null},{url:"assets/index.md.70480b7d.js",revision:null},{url:"assets/index.md.70480b7d.lean.js",revision:null},{url:"assets/inter-cyrillic-ext.0877b0d9.woff2",revision:null},{url:"assets/inter-cyrillic.f8750142.woff2",revision:null},{url:"assets/inter-greek-ext.3e6f6728.woff2",revision:null},{url:"assets/inter-greek.117e1956.woff2",revision:null},{url:"assets/inter-italic-cyrillic-ext.33bd5a8e.woff2",revision:null},{url:"assets/inter-italic-cyrillic.ea42a392.woff2",revision:null},{url:"assets/inter-italic-greek-ext.4fbe9427.woff2",revision:null},{url:"assets/inter-italic-greek.8f4463c4.woff2",revision:null},{url:"assets/inter-italic-latin-ext.bd8920cc.woff2",revision:null},{url:"assets/inter-italic-latin.bd3b6f56.woff2",revision:null},{url:"assets/inter-italic-vietnamese.6ce511fb.woff2",revision:null},{url:"assets/inter-latin-ext.7cc429bc.woff2",revision:null},{url:"assets/inter-latin.4fe6132f.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.e75737ce.woff2",revision:null},{url:"assets/inter-roman-cyrillic.5f2c6c8c.woff2",revision:null},{url:"assets/inter-roman-greek-ext.ab0619bc.woff2",revision:null},{url:"assets/inter-roman-greek.d5a6d92a.woff2",revision:null},{url:"assets/inter-roman-latin-ext.0030eebd.woff2",revision:null},{url:"assets/inter-roman-latin.2ed14f66.woff2",revision:null},{url:"assets/inter-roman-vietnamese.14ce25a6.woff2",revision:null},{url:"assets/inter-vietnamese.2c644a25.woff2",revision:null},{url:"assets/style.f9ffe3f5.css",revision:null},{url:"favicon-16x16.png",revision:"3ab9315a3e1331c94264269c3f1aa0e7"},{url:"favicon-32x32.png",revision:"5eb601f2284af119e0386ca57fc0a9c4"},{url:"favicon.ico",revision:"b8a1e5591c13487aa18986dd4123d615"},{url:"mask-icon.png",revision:"4d80366d765fdd300bb4f323f7880805"},{url:"pwa-192x192.png",revision:"947e4469dc4368fc8ec340008adaa94e"},{url:"pwa-512x512.png",revision:"d4157b60af9f35029d52408ccbf6321c"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"safari-pinned-tab.svg",revision:"2c289a060c35cd6ca99a7bd9b8a77f43"},{url:"storage/treaty-of-siccufrigus.png",revision:"d89ebe9b05ab163369cd26241d94461d"},{url:"yoahtl-flag.png",revision:"4d80366d765fdd300bb4f323f7880805"},{url:"favicon.ico",revision:"b8a1e5591c13487aa18986dd4123d615"},{url:"apple-touch-icon.png",revision:"aa15e83629baf509c9e02a93f399a038"},{url:"pwa-192x192.png",revision:"947e4469dc4368fc8ec340008adaa94e"},{url:"pwa-512x512.png",revision:"d4157b60af9f35029d52408ccbf6321c"},{url:"manifest.webmanifest",revision:"211adb84b4774aa3f7a3cdfb0185633c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
