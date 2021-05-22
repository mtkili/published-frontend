(()=>{"use strict";var e={7468:(e,r,t)=>{t(71),t(5363);var n=t(8880),o=t(1659),a=t(6246);const i={config:{},plugins:{AddressbarColor:a.Z}};var l=t(3673);function s(e,r,t,n,o,a){const i=(0,l.up)("router-view");return(0,l.wg)(),(0,l.j4)(i)}const c=(0,l.aZ)({name:"App"});c.render=s;const u=c;var d=t(7083),p=t(9582);const f=[{path:"/",component:()=>Promise.all([t.e(736),t.e(84)]).then(t.bind(t,2108)),props:!0,children:[{name:"home",path:"",component:()=>Promise.all([t.e(736),t.e(265)]).then(t.bind(t,1265)),meta:{requiresAuth:!0}},{name:"login",path:"login",component:()=>Promise.all([t.e(736),t.e(32)]).then(t.bind(t,1032)),meta:{guest:!0}},{name:"orders",path:"orders",component:()=>Promise.all([t.e(736),t.e(707)]).then(t.bind(t,9707)),meta:{requiresAuth:!0}},{name:"tickers",path:"tickers",component:()=>Promise.all([t.e(736),t.e(613)]).then(t.bind(t,8613)),meta:{requiresAuth:!0}}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(555)]).then(t.bind(t,6555))}],h=f,m=(0,d.BC)((function(){const e=p.r5,r=(0,p.p7)({scrollBehavior:()=>({left:0,top:0}),routes:h,history:e("")});return r.beforeEach(((e,r,t)=>{const n=localStorage.getItem("jwt"),o=null!=n&&""!=n;"login"===e.name||o?t():t({name:"login"})})),r}));async function v(e){const r="function"===typeof m?await m({}):m,t=e(u);return t.use(o.Z,i),{app:t,router:r}}var b=t(1413);(0,b.z)("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&t.e(736).then(t.t.bind(t,9501,23));const g="";async function y({app:e,router:r},t){let n=!1;const o=e=>{n=!0;const t=Object(e)===e?r.resolve(e).fullPath:e;window.location.href=t},a=window.location.href.replace(window.location.origin,"");for(let l=0;!1===n&&l<t.length;l++)try{await t[l]({app:e,router:r,ssrContext:null,redirect:o,urlPath:a,publicPath:g})}catch(i){return i&&i.url?void(window.location.href=i.url):void console.error("[Quasar] boot error:",i)}!0!==n&&(e.use(r),e.mount("#q-app"))}v(n.ri).then((e=>Promise.all([Promise.resolve().then(t.bind(t,6451)),Promise.resolve().then(t.bind(t,1768)),Promise.resolve().then(t.bind(t,5682))]).then((r=>{const t=r.map((e=>e.default)).filter((e=>"function"===typeof e));y(e,t)}))))},5682:(e,r,t)=>{t.r(r),t.d(r,{default:()=>o});var n=t(6246);const o=()=>{n.Z.set("#ff9400")}},1768:(e,r,t)=>{t.r(r),t.d(r,{default:()=>l,api:()=>i});var n=t(7083),o=t(52),a=t.n(o);const i=a().create({baseURL:"https://api.example.com"}),l=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},6451:(e,r,t)=>{t.r(r),t.d(r,{default:()=>c,i18n:()=>s});var n=t(7083),o=t(3414);const a={failed:"Action failed",success:"Action was successful"},i={"en-US":a},l={"en-US":{currency:{style:"currency",currency:"USD",currencyDisplay:"symbol"}},"nl-NL":{currency:{style:"currency",currency:"EUR",currencyDisplay:"symbol"}}},s=(0,o.o)({locale:"en-US",fallbackLocale:"en-US",messages:i,numberFormats:l}),c=(0,n.xr)((({app:e})=>{e.use(s)}))}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,(()=>{var e=[];t.O=(r,n,o,a)=>{if(!n){var i=1/0;for(c=0;c<e.length;c++){for(var[n,o,a]=e[c],l=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](n[s])))?n.splice(s--,1):(l=!1,a<i&&(i=a));l&&(e.splice(c--,1),r=o())}return r}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,o,a]}})(),(()=>{t.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(r,{a:r}),r}})(),(()=>{var e,r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;t.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var a=Object.create(null);t.r(a);var i={};e=e||[null,r({}),r([]),r(r)];for(var l=2&o&&n;"object"==typeof l&&!~e.indexOf(l);l=r(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>n[e]));return i["default"]=()=>n,t.d(a,i),a}})(),(()=>{t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,n)=>(t.f[n](e,r),r)),[]))})(),(()=>{t.u=e=>"js/"+e+"."+{32:"0f9c2db8",84:"90ff0f5c",265:"de476766",555:"160bd545",613:"b0d93d22",707:"6199662c"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{32:"e095f672",736:"369ead13"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{var e={},r="app:";t.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==r+a){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",r+a),l.src=n),e[n]=[o];var p=(r,t)=>{l.onerror=l.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(t))),r)return r(t)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{t.p=""})(),(()=>{var e=(e,r,t,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,o.parentNode.removeChild(o),n(s)}};return o.onerror=o.onload=a,o.href=r,document.head.appendChild(o),o},r=(e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=t[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===r))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===r)return o}},n=n=>new Promise(((o,a)=>{var i=t.miniCssF(n),l=t.p+i;if(r(i,l))return o();e(n,l,o,a)})),o={143:0};t.f.miniCss=(e,r)=>{var t={32:1};o[e]?r.push(o[e]):0!==o[e]&&t[e]&&r.push(o[e]=n(e).then((()=>{o[e]=0}),(r=>{throw delete o[e],r})))}})(),(()=>{var e={143:0};t.f.j=(r,n)=>{var o=t.o(e,r)?e[r]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((t,n)=>o=e[r]=[t,n]));n.push(o[2]=a);var i=t.p+t.u(r),l=new Error,s=n=>{if(t.o(e,r)&&(o=e[r],0!==o&&(e[r]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}};t.l(i,s,"chunk-"+r,r)}},t.O.j=r=>0===e[r];var r=(r,n)=>{var o,a,[i,l,s]=n,c=0;for(o in l)t.o(l,o)&&(t.m[o]=l[o]);if(s)var u=s(t);for(r&&r(n);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[i[c]]=0;return t.O(u)},n=self["webpackChunkapp"]=self["webpackChunkapp"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var n=t.O(void 0,[736],(()=>t(7468)));n=t.O(n)})();