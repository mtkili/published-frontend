(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[613],{5773:(e,t,n)=>{"use strict";n.d(t,{z:()=>c});var r=n(52),s=n.n(r);class i{constructor(e){this._initializeRequestInterceptor=()=>{this.instance.interceptors.request.use(this._handleRequest,this._handleError)},this._initializeResponseInterceptor=()=>{this.instance.interceptors.response.use(this._handleResponse,this._handleError)},this._handleRequest=e=>{e.headers["Access-Control-Allow-Origin"]="*",e.headers["accept"]="application/json";const t=localStorage.getItem("jwt");return t&&(e.headers["Authorization"]=`Bearer ${t}`),e},this._handleResponse=({data:e})=>e,this._handleError=e=>Promise.reject(e),this.instance=s().create({baseURL:e}),this._initializeRequestInterceptor(),this._initializeResponseInterceptor()}}var o=function(e,t,n,r){function s(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function o(e){try{a(r.next(e))}catch(t){i(t)}}function c(e){try{a(r["throw"](e))}catch(t){i(t)}}function a(e){e.done?n(e.value):s(e.value).then(o,c)}a((r=r.apply(e,t||[])).next())}))};class c extends i{constructor(){super("https://backend.drdevelopment.cloud/api/v1")}login(e,t){return o(this,void 0,void 0,(function*(){const n=new URLSearchParams;n.append("username",e),n.append("password",t);const r={headers:{"Content-Type":"application/x-www-form-urlencoded","Access-Control-Allow-Origin":"*",accept:"application/json"}};return yield this.instance.post("/token",n,r)}))}getStatus(){return o(this,void 0,void 0,(function*(){return yield this.instance.get("/binance")}))}getServerTime(){return o(this,void 0,void 0,(function*(){return yield this.instance.get("/binance/servertime")}))}getAccountBalance(){return o(this,void 0,void 0,(function*(){return yield this.instance.get("/binance/account/balance")}))}getTickers(){return o(this,void 0,void 0,(function*(){return yield this.instance.get("/binance/tickers")}))}}},8613:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>C});var r=n(3673);function s(e,t,n,s,i,o){const c=(0,r.up)("TickerListComponent"),a=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(a,{class:"row items-center justify-evenly"},{default:(0,r.w5)((()=>[(0,r.Wm)(c)])),_:1})}var i=n(2323);const o={class:"q-pa-md"},c=(0,r.Wm)("div",{class:"col-2 q-table__title"},"Tickers",-1),a={class:"col-5"};function l(e,t,n,s,l,u){const p=(0,r.up)("q-space"),d=(0,r.up)("q-icon"),h=(0,r.up)("q-input"),m=(0,r.up)("q-btn"),f=(0,r.up)("q-td"),g=(0,r.up)("q-tr"),w=(0,r.up)("q-table");return(0,r.wg)(),(0,r.j4)("div",o,[(0,r.Wm)(w,{rows:l.tickers,columns:l.columns,"row-key":"symbol",pagination:l.pagination,filter:u.filter,"filter-method":u.customFilter},{top:(0,r.w5)((e=>[c,(0,r.Wm)(p),(0,r.Wm)("div",a,[(0,r.Wm)(h,{dense:"",debounce:"400",color:"primary",modelValue:l.search,"onUpdate:modelValue":t[1]||(t[1]=e=>l.search=e)},{append:(0,r.w5)((()=>[(0,r.Wm)(d,{name:"search"})])),_:1},8,["modelValue"])]),(0,r.Wm)(m,{flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"])])),body:(0,r.w5)((e=>[(0,r.Wm)(g,{props:e},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{key:"symbol",props:e},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(e.row.symbol),1)])),_:2},1032,["props"]),(0,r.Wm)(f,{key:"price",props:e},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(e.row.price),1)])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["rows","columns","pagination","filter","filter-method"])])}var u=n(5773);const p=new u.z,d={name:"TickerListComponent",components:{},methods:{getTickers(){p.getTickers().then((e=>{this.tickers=e})).catch((e=>console.log(e)))},customFilter(e,t){const n=t.search?t.search.toLowerCase():"",r=e.filter(((e,t)=>{if(""!=n){let t=Object.values(e),r=t.map((e=>e.toString().toLowerCase()));for(let e=0;e<r.length;e++)if(r[e].includes(n))return!0;return!1}return!0}));return r}},computed:{filter(){return{search:this.search}}},mounted:function(){console.log("mounting TickerListComponent"),this.getTickers()},data(){return{info:null,search:"",tickers:[],columns:[{name:"symbol",required:!0,label:"Symbol",align:"left",sortable:!0,field:"symbol",classes:"bg-grey-2 ellipsis"},{name:"price",align:"right",label:"Price",field:"price",sortable:!0}],pagination:{sortBy:"symbol",rowsPerPage:30}}}};var h=n(8004),m=n(2025),f=n(4842),g=n(4554),w=n(8240),v=n(8186),b=n(3884),k=n(7518),y=n.n(k);d.render=l;const _=d;y()(d,"components",{QTable:h.Z,QSpace:m.Z,QInput:f.Z,QIcon:g.Z,QBtn:w.Z,QTr:v.Z,QTd:b.Z});const q=(0,r.aZ)({name:"TickerOverviewIndex",components:{TickerListComponent:_},mounted(){console.log("TickerOverviewIndex mounted")}});var T=n(4379);q.render=s;const C=q;y()(q,"components",{QPage:T.Z})}}]);