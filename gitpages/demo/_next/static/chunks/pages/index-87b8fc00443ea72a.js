(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3621)}])},3621:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return em}});var s,a,l,n=r(5893),o=r(9008),i=r.n(o),c=r(8493),d=r(6963),u=r(7294),_=r(1644),p=r.n(_);let m=e=>{let{columns:t}=e,r=t.map(e=>(0,n.jsx)("div",{className:p().headerCell,children:e.title},e.id));return(0,n.jsx)("div",{className:p().header,children:r})};var y=r(6248);let h=(e,t)=>"".concat(e,"_").concat(t),g=(e,t,r)=>e.map((e,s)=>{let a=t[s];return{id:{key:h(r,a.id),sectionId:r,columnId:a.id},value:e.value}});var f=r(4529);let v=e=>Math.round(100*e)/100,x=(e,t)=>{let{transaction:r,from:s,to:a}=t,l=e.sections.findIndex(e=>e.id===s.sectionId),n=e.sections.findIndex(e=>e.id===a.id),o=e.columns.findIndex(e=>e.id===s.columnId);if(-1===l||-1===n||-1===o)return console.log("Unable to move transaction ".concat(r.id)),null;let i=e=>v(e.reduce((e,t)=>e+t.value,0)),c=e=>e.map((e,t)=>{if(t!==o)return e;{let t=[...e.transactions,r];return{...e,transactions:t,value:i(t)||null}}}),d=e=>e.map((e,t)=>{if(t!==o)return e;{let t=e.transactions.filter(e=>e.id!==r.id);return{...e,transactions:t,value:i(t)||null}}}),u={...e,sections:e.sections.map(e=>e.id===s.sectionId?{...e,data:d(e.data)}:e.id===a.id?{...e,data:c(e.data)}:e)};return u},j=(e,t)=>v((null!=e?e:0)-(null!=t?t:0)),C=(e,t,r)=>e.map((e,s)=>{let a=t[s];return r(e,a)}),b=e=>{let{categories:t,sections:r}=e,s={},a=e=>r.filter(t=>t.category===e),l=e=>{if(!e.length)return null;let t=e.map(e=>e.data.map(e=>e.value&&e.value)),r=t.reduce((e,t)=>{var r;return e.map((e,s)=>(null!=e?e:0)+(null!==(r=t[s])&&void 0!==r?r:0))});return r};return t.forEach(e=>{switch(e.type){case"profit":{let e=l(a("income")),t=l(a("cogs"));e&&t&&(s.profit=C(e,t,j));break}case"netincome":{let e=s.profit,t=l(a("expenses"));e&&t&&(s.netincome=C(e,t,j))}}}),s};(s=a||(a={})).Json="application/json",s.FormData="multipart/form-data",s.UrlEncoded="application/x-www-form-urlencoded",s.Text="text/plain";class N{encodeQueryParam(e,t){let r=encodeURIComponent(e);return"".concat(r,"=").concat(encodeURIComponent("number"==typeof t?t:"".concat(t)))}addQueryParam(e,t){return this.encodeQueryParam(t,e[t])}addArrayQueryParam(e,t){let r=e[t];return r.map(e=>this.encodeQueryParam(t,e)).join("&")}toQueryString(e){let t=e||{},r=Object.keys(t).filter(e=>void 0!==t[e]);return r.map(e=>Array.isArray(t[e])?this.addArrayQueryParam(t,e):this.addQueryParam(t,e)).join("&")}addQueryParams(e){let t=this.toQueryString(e);return t?"?".concat(t):""}mergeRequestParams(e,t){return{...this.baseApiParams,...e,...t||{},headers:{...this.baseApiParams.headers||{},...e.headers||{},...t&&t.headers||{}}}}constructor(e={}){this.baseUrl="",this.securityData=null,this.abortControllers=new Map,this.customFetch=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return fetch(...t)},this.baseApiParams={credentials:"same-origin",headers:{},redirect:"follow",referrerPolicy:"no-referrer"},this.setSecurityData=e=>{this.securityData=e},this.contentFormatters={[a.Json]:e=>null!==e&&("object"==typeof e||"string"==typeof e)?JSON.stringify(e):e,[a.Text]:e=>null!==e&&"string"!=typeof e?JSON.stringify(e):e,[a.FormData]:e=>Object.keys(e||{}).reduce((t,r)=>{let s=e[r];return t.append(r,s instanceof Blob?s:"object"==typeof s&&null!==s?JSON.stringify(s):"".concat(s)),t},new FormData),[a.UrlEncoded]:e=>this.toQueryString(e)},this.createAbortSignal=e=>{if(this.abortControllers.has(e)){let t=this.abortControllers.get(e);return t?t.signal:void 0}let t=new AbortController;return this.abortControllers.set(e,t),t.signal},this.abortRequest=e=>{let t=this.abortControllers.get(e);t&&(t.abort(),this.abortControllers.delete(e))},this.request=async e=>{let{body:t,secure:r,path:s,type:l,query:n,format:o,baseUrl:i,cancelToken:c,...d}=e,u=("boolean"==typeof r?r:this.baseApiParams.secure)&&this.securityWorker&&await this.securityWorker(this.securityData)||{},_=this.mergeRequestParams(d,u),p=n&&this.toQueryString(n),m=this.contentFormatters[l||a.Json],y=o||_.format;return this.customFetch("".concat(i||this.baseUrl||"").concat(s).concat(p?"?".concat(p):""),{..._,headers:{..._.headers||{},...l&&l!==a.FormData?{"Content-Type":l}:{}},signal:c?this.createAbortSignal(c):_.signal,body:null==t?null:m(t)}).then(async e=>{let t=e;t.data=null,t.error=null;let r=y?await e[y]().then(e=>(t.ok?t.data=e:t.error=e,t)).catch(e=>(t.error=e,t)):t;if(c&&this.abortControllers.delete(c),!e.ok)throw r;return r})},Object.assign(this,e)}}class w extends N{constructor(...e){var t;super(...e),t=this,this.report={getCurrentReport:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.request({path:"/report/getCurrentReport",method:"GET",format:"json",...e})},moveTransaction:function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.request({path:"/report/moveTransaction",method:"POST",body:e,...r})}}}}var R=r(1892),S=r(7484),T=r.n(S);let I="MMM YYYY",k=e=>{let t=new Response(null,{status:200});return e&&(t.data=e),Promise.resolve(t)},O=(e=>{let{columnsToMake:t=6,sectionsToMake:r=3}=e,s=(e,r)=>{let s=[];for(let a=0;a<t;a++){let t=R.We.number.int(3),l=[],n=0,o=r[a].date;for(let r=0;r<t;++r){let t=R.We.number.float({min:1,max:500,precision:.1}),s=T()(o).startOf("month").add(R.We.number.int(28),"day").format(I);l.push({id:R.We.string.uuid(),name:"".concat(e," transaction ").concat(r),value:t,date:s}),n+=t}s.push({transactions:l,value:n?v(n):null})}return s},a=(e,t,a)=>{let l=e.categories.find(e=>e.id===t);if(!l)throw Error('Missing "'.concat(t,'" category'));let n=Array(r).fill(0).map((r,l)=>{let n=a();return{id:"".concat(t,"_").concat(l),name:n,category:t,data:s(n,e.columns)}});e.sections=[...e.sections,...n]},l={categories:[{id:"banks",name:"Banks",position:0,sign:1,type:"data"},{id:"income",name:"Income",position:1,sign:1,type:"data"},{id:"cogs",name:"Cost of Goods Sold",position:2,sign:-1,type:"data"},{id:"profit",name:"Gross profit",position:3,sign:1,type:"profit"},{id:"expenses",name:"Expenses",position:4,sign:-1,type:"data"},{id:"netincome",name:"Net income",position:5,sign:1,type:"netincome"}],columns:(()=>{let e=[],r=T()().startOf("month");for(let s=0;s<t;s++)e.push({id:R.We.string.uuid(),title:r.format(I),date:r.toISOString()}),r=r.subtract(1,"month");return e})(),sections:[]};return a(l,"banks",()=>R.We.company.name()+" bank"),a(l,"expenses",R.We.commerce.product),a(l,"cogs",R.We.commerce.product),a(l,"income",(()=>{let e=["Sales","Dividents","Interest"],t=0,r=e.length;return()=>{let s="".concat(e[t%r]," ").concat(Math.floor(t/r)+1);return t++,s}})()),l})({}),A=new class extends w{constructor(...e){super(...e),this.report={getCurrentReport:e=>k(O),moveTransaction:(e,t)=>k()}}},D={report:null,selectedCell:null,calculatedSections:{},expandedCategories:[]},P=(0,f.Ue)()((e,t)=>({...D,setReport:r=>{let{recalculateSections:s}=t();e({report:r}),s()},fetchReport:async()=>{let{setReport:r}=t(),s=await A.report.getCurrentReport();if(s.ok){let t=s.data;r(t),e({expandedCategories:t.categories.map(e=>e.id)})}},recalculateSections:()=>{let{report:r}=t();if(r){let t=b(r);e({calculatedSections:t})}},setSelectedCell:t=>{e({selectedCell:t})},moveTransaction:async r=>{let{report:s,recalculateSections:a}=t();if(!s)return;let l={transactionId:r.transaction.id,fromSection:r.from.sectionId,toSection:r.to.id},n=await A.report.moveTransaction(l);if(n.ok){let t=x(s,r);t&&(e({report:t}),a())}},toggleCategory:r=>{let{expandedCategories:s}=t();s.includes(r)?e({expandedCategories:s.filter(e=>e!==r)}):e({expandedCategories:[...s,r]})}}));var W=r(4184),Q=r.n(W);let M={TRANSACTION:"TRANSACTION_TYPE"};var F=r(9272);let B=e=>{let{calculated:t,cells:r,section:s,selectedCell:a,onClick:l,onDrop:o}=e,[{canDrop:i,isOver:c},d]=(0,F.L)(()=>({accept:M.TRANSACTION,drop:e=>{o({...e,to:s})},collect:e=>({isOver:e.isOver(),canDrop:e.canDrop()})})),u=r.map(e=>{let r=Q()(p().cell,{[p().calcRow]:t,[p().dropOver]:c,[p().dropAllow]:i,[p().selectedCell]:(null==a?void 0:a.key)===e.id.key});return(0,n.jsx)("div",{className:r,onClick:()=>l(e.id),children:e.value},e.id.key)});return(0,n.jsx)("div",{ref:d,className:p().row,children:u})},E=e=>{let{columns:t,...r}=e,s=t.map(e=>{let{id:t}=e;return(0,n.jsx)("div",{className:p().cell},t)});return(0,n.jsx)("div",{className:p().row,...r,children:s})},U=(e,t)=>e.map((e,r)=>e?e+(t.data[r].value||0):t.data[r].value),q=e=>e&&Math.round(100*e)/100,L=(e,t)=>e.reduce(U,Array(t).fill(null)).map(q),Z=e=>{let{category:t,sections:r,columns:s}=e,a=(0,u.useMemo)(()=>L(r,s.length),[r,s]),l=a.map((e,r)=>(0,n.jsx)("div",{className:p().cell,children:e},"".concat(t.id,"_total_").concat(r)));return(0,n.jsx)("div",{className:p().totalsRow,children:l})},H=e=>{let{category:t,...r}=e,s=Q()(p().cell,p().calcCell),a=P(e=>e.calculatedSections),l=a[t.id];if(!l)return(0,n.jsx)("div",{className:p().row,children:(0,n.jsx)("div",{className:s,children:"calculated section ".concat(t.name," is missing")})});let o=l.map((e,r)=>(0,n.jsx)("div",{className:s,children:e},"".concat(t.id,"_calc_").concat(r)));return(0,n.jsx)("div",{className:p().calcRow,...r,children:o})},J=e=>{let{category:t,sections:r,columns:s,expanded:a}=e,[l,o]=P(e=>[e.selectedCell,e.setSelectedCell],y.X),i=P(e=>e.moveTransaction),c=e=>{i(e)},d=r.map(e=>(0,n.jsx)(B,{selectedCell:l,section:e,onClick:o,onDrop:c,cells:g(e.data,s,e.id)},e.id)),u="data"===t.type?a?(0,n.jsx)(E,{columns:s}):(0,n.jsx)(Z,{columns:s,sections:r,category:t}):(0,n.jsx)(H,{category:t});return(0,n.jsxs)("div",{className:p().category,children:[u,a&&d]})},X=()=>{let e=P(e=>e.report),t=(0,u.useMemo)(()=>e?e.categories.sort((e,t)=>e.position-t.position).map(t=>({category:t,sections:e.sections.filter(e=>e.category===t.id)})):[],[e]);return t},V=e=>{let{report:t}=e,r=P(e=>e.expandedCategories),s=X(),a=s.map(e=>{let{category:s,sections:a}=e;return(0,n.jsx)(J,{columns:t.columns,category:s,expanded:r.includes(s.id),sections:a},s.id)});return(0,n.jsxs)("div",{className:p().report,children:[(0,n.jsx)(m,{columns:t.columns}),a]})};var z=r(1229),Y=r.n(z);let G=e=>{let{toggle:t,...r}=e,s=Q()(Y().arrow,{[Y().rotateRight]:t});return(0,n.jsx)("div",{className:s,...r})},K=e=>{let{title:t,expanded:r,onClick:s,calculated:a,children:l}=e,o=Q()(p().categoryTitle,{[p().calcCategory]:a});return(0,n.jsxs)("div",{className:p().sideCategory,children:[(0,n.jsxs)("div",{className:o,onClick:s,children:[(0,n.jsx)("div",{className:p().categoryTitleIcon,children:u.Children.count(l)>0&&(0,n.jsx)(G,{toggle:!r})}),t]}),r&&l]})},$=e=>{let{title:t}=e;return(0,n.jsx)("div",{className:p().sideSection,children:t})},ee=()=>{let[e,t]=P(e=>[e.expandedCategories,e.toggleCategory]),r=X(),s=r.map(r=>{let{category:s,sections:a}=r,{id:l,name:o,type:i}=s;return(0,n.jsx)(K,{title:o,calculated:"data"!==i,expanded:e.includes(l),onClick:()=>t(l),children:a.map(e=>(0,n.jsx)($,{title:e.name},e.id))},l)});return(0,n.jsxs)("div",{className:p().sidebar,children:[(0,n.jsx)("div",{className:p().sideHeader,children:"Finacnial Report"}),s]})},et=()=>(0,n.jsx)("div",{className:p().toolbar,children:"toolbar"});var er=r(9294),es=r(9308),ea=r.n(es);let el=e=>{let{transaction:t,cell:r,sign:s}=e,{date:a,name:l,value:o}=t,[{isDragging:i},c]=(0,er.c)(()=>({type:M.TRANSACTION,item:{type:M.TRANSACTION,transaction:t,from:r},collect:e=>({isDragging:e.isDragging()})}),[]),d=Q()(ea().transactionItem,{[ea().drag]:i});return(0,n.jsxs)("div",{ref:c,className:d,children:[(0,n.jsx)("div",{className:ea().transactionDate,children:a}),(0,n.jsxs)("div",{className:ea().spaceBetween,children:[(0,n.jsx)("div",{children:l}),(0,n.jsx)("div",{children:o*s})]})]})};function en(){return(en=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}var eo=function(e){return u.createElement("svg",en({viewBox:"0 0 512 512"},e),l||(l=u.createElement("path",{d:"M443.6 387.1 312.4 255.4l131.5-130c5.4-5.4 5.4-14.2 0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L256 197.8 124.9 68.3c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L68 105.9c-5.4 5.4-5.4 14.2 0 19.6l131.5 130L68.4 387.1c-2.6 2.6-4.1 6.1-4.1 9.8 0 3.7 1.4 7.2 4.1 9.8l37.4 37.6c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1L256 313.1l130.7 131.1c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1l37.4-37.6c2.6-2.6 4.1-6.1 4.1-9.8-.1-3.6-1.6-7.1-4.2-9.7z"})))};let ei=()=>{let[e,t,r]=P(e=>[e.report,e.selectedCell,e.setSelectedCell],y.X),s=(0,u.useMemo)(()=>{if(!e||!t)return null;let r=e.columns.findIndex(e=>e.id===t.columnId),s=e.columns[r],a=e.sections.find(e=>e.id===t.sectionId),l=e.categories.find(e=>e.id===(null==a?void 0:a.category));if(!a||!s||!l)return null;let n=a.data[r].transactions;return{column:s,section:a,category:l,transactions:n}},[e,t]);return{selection:s,selectedCell:t,setSelectedCell:r}},ec=()=>{let{selection:e,selectedCell:t,setSelectedCell:r}=ei(),s=()=>{r(null)};if(!t||!e)return null;let{column:a,category:l,section:o,transactions:i}=e,c=i.map(e=>(0,n.jsx)(el,{transaction:e,sign:l.sign,cell:t},e.id));return(0,n.jsxs)("div",{className:ea().panel,children:[(0,n.jsxs)("header",{className:ea().header,children:[(0,n.jsx)("div",{className:ea().title,children:o.name}),(0,n.jsx)("div",{className:ea().closeBtn,children:(0,n.jsx)(eo,{onClick:s})})]}),(0,n.jsx)("div",{className:ea().date,children:a.title}),(0,n.jsx)("div",{className:ea().transactions,children:c})]})},ed=()=>{let[e,t]=P(e=>[e.report,e.fetchReport],y.X);return((0,u.useEffect)(()=>{t()},[]),e)?(0,n.jsx)(c.W,{backend:d.PD,children:(0,n.jsxs)("div",{className:p().wrapper,children:[(0,n.jsx)(et,{}),(0,n.jsxs)("div",{className:p().container,children:[(0,n.jsx)(ee,{}),(0,n.jsx)(V,{report:e}),(0,n.jsx)(ec,{})]})]})}):(0,n.jsx)("div",{children:"Loading..."})};var eu=r(5625),e_=r.n(eu);let ep=()=>(0,n.jsxs)("div",{className:e_().app,children:[(0,n.jsx)(i(),{children:(0,n.jsx)("title",{children:"Financial report"})}),(0,n.jsx)(ed,{})]});var em=ep},1229:function(e){e.exports={arrow:"styles_arrow__ZXJHv",rotateRight:"styles_rotateRight__avLDU"}},9308:function(e){e.exports={wrapper:"styles_wrapper__BFK1N",flex:"styles_flex__i6iSP",container:"styles_container__1_ZWS",sidebar:"styles_sidebar__ADGqD",report:"styles_report__n_pTj",toolbar:"styles_toolbar___B4bz",categoryTitle:"styles_categoryTitle__iOziN",categoryTitleIcon:"styles_categoryTitleIcon__Mzd9z",sideSection:"styles_sideSection__IJVTy",cell:"styles_cell__USDqR",headerCell:"styles_headerCell__0XJQh",sideHeader:"styles_sideHeader__VBx3a",header:"styles_header__sej23",row:"styles_row__kZuCU",totalsRow:"styles_totalsRow__Bjp0F",calcRow:"styles_calcRow__mdFNq",sideCategory:"styles_sideCategory__mCQjS",calcCategory:"styles_calcCategory__jIg9p",calcCell:"styles_calcCell__MQgeV",selectedCell:"styles_selectedCell__pK8fZ",dropOver:"styles_dropOver__R4ug7",panel:"styles_panel__11w77",title:"styles_title__rAK4Z",closeBtn:"styles_closeBtn__NFFWM",date:"styles_date__pjW44",transactions:"styles_transactions__sW9Zn",transactionItem:"styles_transactionItem__BSOR4",transactionDate:"styles_transactionDate__CCUbx",spaceBetween:"styles_spaceBetween__cgcV7",drag:"styles_drag__bCSZH"}},1644:function(e){e.exports={wrapper:"styles_wrapper__DZqkr",flex:"styles_flex__Qnjkm",container:"styles_container__p_Z4X",sidebar:"styles_sidebar__7mmD_",report:"styles_report__L33Sh",toolbar:"styles_toolbar__8bmfn",categoryTitle:"styles_categoryTitle__0xWsj",categoryTitleIcon:"styles_categoryTitleIcon__Tcn1l",sideSection:"styles_sideSection__sff92",cell:"styles_cell__cVN8q",headerCell:"styles_headerCell__phRQ_",sideHeader:"styles_sideHeader__dgpud",header:"styles_header__SXZRR",row:"styles_row__M31Fh",totalsRow:"styles_totalsRow__VhKT_",calcRow:"styles_calcRow__0RaD9",sideCategory:"styles_sideCategory__Ub4dz",calcCategory:"styles_calcCategory__2Verp",calcCell:"styles_calcCell__MRRWL",selectedCell:"styles_selectedCell__LBIp_",dropOver:"styles_dropOver__gtb_W"}},5625:function(e){e.exports={app:"Home_app__QrHW1"}}},function(e){e.O(0,[330,317,201,595,307,11,738,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);