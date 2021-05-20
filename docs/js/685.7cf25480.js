(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[685],{5773:(e,t,n)=>{"use strict";n.d(t,{z:()=>r});var a=n(52),o=n.n(a);class s{constructor(e){this._initializeRequestInterceptor=()=>{this.instance.interceptors.request.use(this._handleRequest,this._handleError)},this._initializeResponseInterceptor=()=>{this.instance.interceptors.response.use(this._handleResponse,this._handleError)},this._handleRequest=e=>{e.headers["Access-Control-Allow-Origin"]="*",e.headers["accept"]="application/json";const t=localStorage.getItem("jwt");return t&&(e.headers["Authorization"]=`Bearer ${t}`),e},this._handleResponse=({data:e})=>e,this._handleError=e=>Promise.reject(e),this.instance=o().create({baseURL:e}),this._initializeRequestInterceptor(),this._initializeResponseInterceptor()}}var l=function(e,t,n,a){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function l(e){try{c(a.next(e))}catch(t){s(t)}}function r(e){try{c(a["throw"](e))}catch(t){s(t)}}function c(e){e.done?n(e.value):o(e.value).then(l,r)}c((a=a.apply(e,t||[])).next())}))};class r extends s{constructor(){super("https://backend.drdevelopment.cloud/api/v1")}login(e,t){return l(this,void 0,void 0,(function*(){const n=new URLSearchParams;n.append("username",e),n.append("password",t);const a={headers:{"Content-Type":"application/x-www-form-urlencoded","Access-Control-Allow-Origin":"*",accept:"application/json"}};return yield this.instance.post("/token",n,a)}))}getStatus(){return l(this,void 0,void 0,(function*(){return yield this.instance.get("/binance")}))}getServerTime(){return l(this,void 0,void 0,(function*(){return yield this.instance.get("/binance/servertime")}))}getAccountBalance(){return l(this,void 0,void 0,(function*(){return yield this.instance.get("/binance/account/balance")}))}getTickers(){return l(this,void 0,void 0,(function*(){return yield this.instance.get("/binance/tickers")}))}}},4685:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>V});var a=n(3673);function o(e,t,n,o,s,l){const r=(0,a.up)("AccountComponent"),c=(0,a.up)("CurrentPortfolioComponent"),i=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(i,{class:"cols items-left justify-start"},{default:(0,a.w5)((()=>[(0,a.Wm)(r),(0,a.Wm)(c)])),_:1})}var s=n(2323);const l={class:"q-pa-md col-xs-12 col-sm-6 col-md-4"},r=(0,a.Wm)("img",{src:"https://cdn.quasar.dev/img/boy-avatar.png"},null,-1),c=(0,a.Uk)(" Binance account "),i=(0,a.Wm)("div",{class:"text-h6"},"Total",-1),u=(0,a.Wm)("div",{class:"text-subtitle2"},"Euros in your account",-1),d=(0,a.Wm)("img",{src:"cryptocurrency-icons/eur.svg"},null,-1),m={class:"text-h6"};function p(e,t,n,o,p,f){const h=(0,a.up)("q-avatar"),w=(0,a.up)("q-item-section"),g=(0,a.up)("q-item-label"),v=(0,a.up)("q-item"),b=(0,a.up)("q-separator"),W=(0,a.up)("q-card-section"),_=(0,a.up)("q-btn"),q=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)("div",l,[(0,a.Wm)(q,{class:"my-card",flat:"",bordered:""},{default:(0,a.w5)((()=>[(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[r])),_:1})])),_:1}),(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(p.fullname),1)])),_:1}),(0,a.Wm)(g,{caption:""},{default:(0,a.w5)((()=>[c])),_:1})])),_:1})])),_:1}),(0,a.Wm)(b),(0,a.Wm)(W,{horizontal:""},{default:(0,a.w5)((()=>[(0,a.Wm)(W,null,{default:(0,a.w5)((()=>[i,u,d])),_:1}),(0,a.Wm)(b,{vertical:""}),(0,a.Wm)(W,{class:"col-4"},{default:(0,a.w5)((()=>[(0,a.Wm)("div",m,(0,s.zw)(e.$n(p.totalEuros,"currency","nl-NL")),1)])),_:1})])),_:1}),(0,a.Wm)(b),(0,a.Wm)(W,{horizontal:""},{default:(0,a.w5)((()=>[(0,a.Wm)(W,null,{default:(0,a.w5)((()=>[(0,a.Wm)(_,{flat:"",color:"primary",icon:"list",label:"Tickers",to:"tickers"})])),_:1})])),_:1})])),_:1})])}const f={name:"AccountComponent",data(){return{fullname:"",totalEuros:0}},mounted(){this.fullname=localStorage.getItem("fullname"),this.totalEuros=Number(localStorage.getItem("totalEuros"))}};var h=n(151),w=n(6332),g=n(2035),v=n(5096),b=n(2350),W=n(5869),_=n(5589),q=n(8240),y=n(7518),C=n.n(y);f.render=p;const x=f;C()(f,"components",{QCard:h.Z,QItem:w.Z,QItemSection:g.Z,QAvatar:v.Z,QItemLabel:b.Z,QSeparator:W.Z,QCardSection:_.Z,QBtn:q.Z});const Z={class:"q-pa-md"},Q=(0,a.Wm)("div",{class:"col-2 q-table__title"},"Balance",-1),k={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},z=(0,a.Uk)(" Name of asset "),I={class:"text-grey-6"};function S(e,t,n,o,l,r){const c=(0,a.up)("q-space"),i=(0,a.up)("q-toggle"),u=(0,a.up)("q-btn"),d=(0,a.up)("q-avatar"),m=(0,a.up)("q-item-section"),p=(0,a.up)("q-item-label"),f=(0,a.up)("q-item"),h=(0,a.up)("q-card-section"),w=(0,a.up)("q-separator"),g=(0,a.up)("q-card"),v=(0,a.up)("q-table"),b=(0,a.Q2)("ripple");return(0,a.wg)(),(0,a.j4)("div",Z,[(0,a.Wm)(v,{grid:"","card-container-class":e.cardContainerClass,rows:l.balanceRows,columns:l.columns,pagination:l.pagination,"row-key":"asset"},{top:(0,a.w5)((e=>[Q,(0,a.Wm)(c),(0,a.Wm)(i,{label:"Dust/favorites",modelValue:l.hasData,"onUpdate:modelValue":t[1]||(t[1]=e=>l.hasData=e)},null,8,["modelValue"]),(0,a.Wm)(u,{flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"])])),item:(0,a.w5)((t=>[(0,a.Wm)("div",k,[(0,a.wy)((0,a.Wm)(g,{clickable:""},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{class:"flex flex-left"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)("img",{src:"cryptocurrency-icons/"+t.row.asset.toLowerCase()+".svg"},null,8,["src"])])),_:2},1024)])),_:2},1024),(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(t.row.asset),1)])),_:2},1024),(0,a.Wm)(p,{caption:""},{default:(0,a.w5)((()=>[z])),_:1})])),_:2},1024),(0,a.Wm)(m,{side:"",top:""},{default:(0,a.w5)((()=>[(0,a.Wm)("div",null,(0,s.zw)(e.$n(t.row.euros,"currency","nl-NL")),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,a.Wm)(w),(0,a.Wm)(h,{class:"flex flex-left"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)("# "+(0,s.zw)(Number(t.row.amount).toFixed(8)),1)])),_:2},1024)])),_:2},1024)])),_:2},1536),[[b]])])])),_:1},8,["card-container-class","rows","columns","pagination"]),(0,a.Wm)("p",I,"* Prices calculated on USDT/EUR price "+(0,s.zw)(Number(l.usdteur).toFixed(4))+" and BTC/USDT price "+(0,s.zw)(Number(l.btcusdt).toFixed(2))+".",1)])}var A=n(5773),R=n(1959);const P=new A.z,T={name:"CurrentPortfolioComponent",components:{},methods:{getAccountBalance(){P.getAccountBalance().then((e=>{localStorage.setItem("totalEuros",e.total_euros),this.balanceRows=e.balances,this.usdteur=e.usdteur,this.btcusdt=e.btcusdt})).catch((e=>console.log(e)))}},mounted:function(){console.log("mounting CurrentPortfolioComponent"),this.getAccountBalance()},data(){return{info:null,balanceRows:[],usdteur:0,btcusdt:0,hasData:(0,R.iH)(!1),columns:[{name:"asset",required:!0,label:"Asset",align:"left",sortable:!0,field:"asset",classes:"bg-grey-2 ellipsis"},{name:"euros",align:"right",label:"Total (euro)",field:"euros",sortable:!0,style:"max-width: 50px"},{name:"amount",align:"right",label:"Number of assets",field:"amount",sortable:!0,style:"max-width: 50px"}],pagination:{rowsPerPage:30}}}};var U=n(352),B=n(2025),E=n(8886),j=n(4554),N=n(6489);T.render=S;const L=T;C()(T,"components",{QTable:U.Z,QSpace:B.Z,QToggle:E.Z,QBtn:q.Z,QCard:h.Z,QCardSection:_.Z,QItem:w.Z,QItemSection:g.Z,QAvatar:v.Z,QItemLabel:b.Z,QSeparator:W.Z,QIcon:j.Z}),C()(T,"directives",{Ripple:N.Z});const D=(0,a.aZ)({name:"HomeIndex",components:{AccountComponent:x,CurrentPortfolioComponent:L},data:()=>({})});var F=n(4379);D.render=o;const V=D;C()(D,"components",{QPage:F.Z})}}]);