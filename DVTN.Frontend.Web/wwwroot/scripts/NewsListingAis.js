import{x as Y,o as Q,y as ie,z as B,A as z,a as o,c as R,j as oe,t as V,F as ce,b as ue,w as le,B as de,n as ee,h as te}from"./chunks/ReCaptchaVuePlugin.js";import{E as he}from"./chunks/EventBus.js";import{a as fe,s as pe}from"./chunks/singleIndex.js";import{c as ge,a as _e}from"./chunks/_commonjsHelpers.js";import{_ as me}from"./chunks/_plugin-vue_export-helper.js";import{h as ve}from"./chunks/history.js";var re={exports:{}};(function(b,C){(function(E,A){b.exports=A()})(ge,function(){var E=1e3,A=6e4,O=36e5,x="millisecond",M="second",S="minute",D="hour",w="day",I="week",v="month",J="quarter",l="year",g="date",_="Invalid Date",N=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,P={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var s=["th","st","nd","rd"],e=r%100;return"["+r+(s[(e-20)%10]||s[e]||s[0])+"]"}},T=function(r,s,e){var n=String(r);return!n||n.length>=s?r:""+Array(s+1-n.length).join(e)+r},ae={s:T,z:function(r){var s=-r.utcOffset(),e=Math.abs(s),n=Math.floor(e/60),t=e%60;return(s<=0?"+":"-")+T(n,2,"0")+":"+T(t,2,"0")},m:function r(s,e){if(s.date()<e.date())return-r(e,s);var n=12*(e.year()-s.year())+(e.month()-s.month()),t=s.clone().add(n,v),a=e-t<0,i=s.clone().add(n+(a?-1:1),v);return+(-(n+(e-t)/(a?t-i:i-t))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:v,y:l,w:I,d:w,D:g,h:D,m:S,s:M,ms:x,Q:J}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},W="en",L={};L[W]=P;var se="$isDayjsObject",X=function(r){return r instanceof K||!(!r||!r[se])},Z=function r(s,e,n){var t;if(!s)return W;if(typeof s=="string"){var a=s.toLowerCase();L[a]&&(t=a),e&&(L[a]=e,t=a);var i=s.split("-");if(!t&&i.length>1)return r(i[0])}else{var u=s.name;L[u]=s,t=u}return!n&&t&&(W=t),t||!n&&W},h=function(r,s){if(X(r))return r.clone();var e=typeof s=="object"?s:{};return e.date=r,e.args=arguments,new K(e)},c=ae;c.l=Z,c.i=X,c.w=function(r,s){return h(r,{locale:s.$L,utc:s.$u,x:s.$x,$offset:s.$offset})};var K=function(){function r(e){this.$L=Z(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[se]=!0}var s=r.prototype;return s.parse=function(e){this.$d=function(n){var t=n.date,a=n.utc;if(t===null)return new Date(NaN);if(c.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){var i=t.match(N);if(i){var u=i[2]-1||0,d=(i[7]||"0").substring(0,3);return a?new Date(Date.UTC(i[1],u,i[3]||1,i[4]||0,i[5]||0,i[6]||0,d)):new Date(i[1],u,i[3]||1,i[4]||0,i[5]||0,i[6]||0,d)}}return new Date(t)}(e),this.init()},s.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},s.$utils=function(){return c},s.isValid=function(){return this.$d.toString()!==_},s.isSame=function(e,n){var t=h(e);return this.startOf(n)<=t&&t<=this.endOf(n)},s.isAfter=function(e,n){return h(e)<this.startOf(n)},s.isBefore=function(e,n){return this.endOf(n)<h(e)},s.$g=function(e,n,t){return c.u(e)?this[n]:this.set(t,e)},s.unix=function(){return Math.floor(this.valueOf()/1e3)},s.valueOf=function(){return this.$d.getTime()},s.startOf=function(e,n){var t=this,a=!!c.u(n)||n,i=c.p(e),u=function(j,m){var k=c.w(t.$u?Date.UTC(t.$y,m,j):new Date(t.$y,m,j),t);return a?k:k.endOf(w)},d=function(j,m){return c.w(t.toDate()[j].apply(t.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(m)),t)},f=this.$W,p=this.$M,$=this.$D,q="set"+(this.$u?"UTC":"");switch(i){case l:return a?u(1,0):u(31,11);case v:return a?u(1,p):u(0,p+1);case I:var H=this.$locale().weekStart||0,F=(f<H?f+7:f)-H;return u(a?$-F:$+(6-F),p);case w:case g:return d(q+"Hours",0);case D:return d(q+"Minutes",1);case S:return d(q+"Seconds",2);case M:return d(q+"Milliseconds",3);default:return this.clone()}},s.endOf=function(e){return this.startOf(e,!1)},s.$set=function(e,n){var t,a=c.p(e),i="set"+(this.$u?"UTC":""),u=(t={},t[w]=i+"Date",t[g]=i+"Date",t[v]=i+"Month",t[l]=i+"FullYear",t[D]=i+"Hours",t[S]=i+"Minutes",t[M]=i+"Seconds",t[x]=i+"Milliseconds",t)[a],d=a===w?this.$D+(n-this.$W):n;if(a===v||a===l){var f=this.clone().set(g,1);f.$d[u](d),f.init(),this.$d=f.set(g,Math.min(this.$D,f.daysInMonth())).$d}else u&&this.$d[u](d);return this.init(),this},s.set=function(e,n){return this.clone().$set(e,n)},s.get=function(e){return this[c.p(e)]()},s.add=function(e,n){var t,a=this;e=Number(e);var i=c.p(n),u=function(p){var $=h(a);return c.w($.date($.date()+Math.round(p*e)),a)};if(i===v)return this.set(v,this.$M+e);if(i===l)return this.set(l,this.$y+e);if(i===w)return u(1);if(i===I)return u(7);var d=(t={},t[S]=A,t[D]=O,t[M]=E,t)[i]||1,f=this.$d.getTime()+e*d;return c.w(f,this)},s.subtract=function(e,n){return this.add(-1*e,n)},s.format=function(e){var n=this,t=this.$locale();if(!this.isValid())return t.invalidDate||_;var a=e||"YYYY-MM-DDTHH:mm:ssZ",i=c.z(this),u=this.$H,d=this.$m,f=this.$M,p=t.weekdays,$=t.months,q=t.meridiem,H=function(m,k,U,G){return m&&(m[k]||m(n,a))||U[k].slice(0,G)},F=function(m){return c.s(u%12||12,m,"0")},j=q||function(m,k,U){var G=m<12?"AM":"PM";return U?G.toLowerCase():G};return a.replace(y,function(m,k){return k||function(U){switch(U){case"YY":return String(n.$y).slice(-2);case"YYYY":return c.s(n.$y,4,"0");case"M":return f+1;case"MM":return c.s(f+1,2,"0");case"MMM":return H(t.monthsShort,f,$,3);case"MMMM":return H($,f);case"D":return n.$D;case"DD":return c.s(n.$D,2,"0");case"d":return String(n.$W);case"dd":return H(t.weekdaysMin,n.$W,p,2);case"ddd":return H(t.weekdaysShort,n.$W,p,3);case"dddd":return p[n.$W];case"H":return String(u);case"HH":return c.s(u,2,"0");case"h":return F(1);case"hh":return F(2);case"a":return j(u,d,!0);case"A":return j(u,d,!1);case"m":return String(d);case"mm":return c.s(d,2,"0");case"s":return String(n.$s);case"ss":return c.s(n.$s,2,"0");case"SSS":return c.s(n.$ms,3,"0");case"Z":return i}return null}(m)||i.replace(":","")})},s.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},s.diff=function(e,n,t){var a,i=this,u=c.p(n),d=h(e),f=(d.utcOffset()-this.utcOffset())*A,p=this-d,$=function(){return c.m(i,d)};switch(u){case l:a=$()/12;break;case v:a=$();break;case J:a=$()/3;break;case I:a=(p-f)/6048e5;break;case w:a=(p-f)/864e5;break;case D:a=p/O;break;case S:a=p/A;break;case M:a=p/E;break;default:a=p}return t?a:c.a(a)},s.daysInMonth=function(){return this.endOf(v).$D},s.$locale=function(){return L[this.$L]},s.locale=function(e,n){if(!e)return this.$L;var t=this.clone(),a=Z(e,n,!0);return a&&(t.$L=a),t},s.clone=function(){return c.w(this.$d,this)},s.toDate=function(){return new Date(this.valueOf())},s.toJSON=function(){return this.isValid()?this.toISOString():null},s.toISOString=function(){return this.$d.toISOString()},s.toString=function(){return this.$d.toUTCString()},r}(),ne=K.prototype;return h.prototype=ne,[["$ms",x],["$s",M],["$m",S],["$H",D],["$W",w],["$M",v],["$y",l],["$D",g]].forEach(function(r){ne[r[1]]=function(s){return this.$g(s,r[0],r[1])}}),h.extend=function(r,s){return r.$i||(r(s,K,h),r.$i=!0),h},h.locale=Z,h.isDayjs=X,h.unix=function(r){return h(1e3*r)},h.en=L[W],h.Ls=L,h.p={},h})})(re);var ye=re.exports;const $e=_e(ye);function we(){}const xe={props:{appId:{type:String,required:!0},apiKey:{type:String,required:!0},indexName:{type:String,required:!0}},data(){return{query:"",isAisLoading:!0,searchClient:fe(this.appId,this.apiKey),routing:{router:ve(),stateMapping:pe(this.indexName)},middlewares:[we],siteHeaderEl:document.querySelector("#site-header")}},mounted(){he.addEventListener("proxy-stores-search-query",b=>{this.query=b.data.query})},methods:{transformItems(b){return this.isAisLoading&&(this.isAisLoading=!1),b.map(C=>(C.Date=$e(C.Date*1e3).format("MMM D, YYYY"),C)),b},scrollToTop(){window.scrollTo({top:this.$el.offsetTop-(this.siteHeaderEl?.offsetHeight||0),behavior:"smooth"})}}},be={class:"search-controls-wrapper mb-14 flex flex-col gap-x-5 gap-y-3 md:flex-row md:items-end"},Me=o("label",{for:"news-listing-ais-search",class:"mb-3 inline-block"},"Search by keyword",-1),Se={class:"relative"},De=["value","onInput"],ke=["hidden"],Ce=o("label",{for:"news-listing-ais-category",class:"mb-3 inline-block"},"Search by category",-1),Oe=["disabled","onChange"],Te=o("option",{value:""},"All",-1),Le=["value","selected"],He={class:"search-results-wrapper flex flex-col gap-x-12 md:flex-row"},je={class:"flex-1"},Ye={class:"relative"},Ae={key:0,class:"hits-placeholder"},Ie=o("span",{class:"spinner"},null,-1),Ne=[Ie],qe={class:"image aspect-video overflow-hidden bg-abergeldie-gray"},Be=["data-src"],ze={class:"content mt-6"},Ee={class:"meta flex justify-between gap-x-5 text-xs font-semibold uppercase tracking-wide"},We={class:"date whitespace-nowrap"},Fe={class:"topics text-right"},Ue={class:"h4 mb-3 mt-4"},Ve=["href"],Je={class:"mt-16"},Pe={class:"flex items-center justify-center gap-x-6 text-center"},Ze=["href","onClick"],Ke=o("svg",{viewBox:"0 0 256 512",class:"svg-icon-chevron-right h-4 w-4 -translate-x-0.5 rotate-180 fill-current",xmlns:"http://www.w3.org/2000/svg",role:"presentation"},[o("path",{d:"M24.707 38.101 4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"})],-1),Ge=[Ke],Qe={class:"space-x-2"},Xe=["value","onChange"],Re=o("span",null,"of",-1),et=["href","onClick"],tt=o("svg",{viewBox:"0 0 256 512",class:"svg-icon-chevron-right translate-0.5 h-4 w-4 fill-current",xmlns:"http://www.w3.org/2000/svg",role:"presentation"},[o("path",{d:"M24.707 38.101 4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"})],-1),st=[tt];function nt(b,C,E,A,O,x){const M=Y("ais-configure"),S=Y("ais-search-box"),D=Y("ais-menu-select"),w=Y("ais-hits"),I=Y("ais-state-results"),v=Y("ais-pagination"),J=Y("ais-instant-search");return Q(),ie(J,{id:"news-listing-ais",class:"mb-20 pt-14","search-client":O.searchClient,"index-name":E.indexName,routing:O.routing,middlewares:O.middlewares,"on-state-change":b.onStateChange,future:{preserveSharedStateOnUnmount:!0}},{default:B(()=>[z(M,{hitsPerPage:12}),o("div",be,[z(S,{"class-names":{"ais-SearchBox":"flex-1 md:max-w-72"}},{default:B(({currentRefinement:l,isSearchStalled:g,refine:_})=>[Me,o("div",Se,[o("input",{id:"news-listing-ais-search",type:"search",class:"ais-SearchBox-input w-full rounded pr-10",placeholder:"Optional",value:l,autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",onInput:N=>_(N.currentTarget.value)},null,40,De),o("span",{class:"spinner",hidden:!g},null,8,ke)])]),_:1}),z(D,{attribute:"Categories","class-names":{"ais-MenuSelect":"md:max-w-72"}},{default:B(({items:l,canRefine:g,refine:_,sendEvent:N})=>[Ce,o("select",{id:"news-listing-ais-category",class:"w-full rounded",disabled:!g,onChange:y=>_(y.currentTarget.value)},[Te,(Q(!0),R(ce,null,oe(l,y=>(Q(),R("option",{key:y.value,value:y.value,selected:y.isRefined},V(y.label),9,Le))),128))],40,Oe)]),_:1}),o("button",{type:"button",class:"btn btn-primary",onClick:C[0]||(C[0]=l=>x.scrollToTop())},"Search")]),o("div",He,[o("div",je,[o("div",Ye,[O.isAisLoading?(Q(),R("div",Ae,Ne)):ue("",!0),z(I,null,{default:B(({status:l,results:{hits:g}})=>[le(o("div",null,"No results found.",512),[[de,!g.length]]),o("div",{class:ee(["transition-opacity duration-500",{"opacity-20":l==="stalled","opacity-100":l!=="stalled"}])},[z(w,{"transform-items":x.transformItems,"class-names":{"ais-Hits":"","ais-Hits-list":"grid grid-cols-12 gap-8","ais-Hits-item":"col-span-12 md:col-span-6 lg:col-span-4 relative group"}},{item:B(({item:_})=>[o("div",qe,[o("img",{src:"","data-src":_.Image,alt:"",class:"lazyload lazyfade h-full w-full object-cover transition-all group-hover:scale-105"},null,8,Be)]),o("div",ze,[o("div",Ee,[o("div",We,V(_.Date),1),o("div",Fe,V(_.Categories.join(", ")),1)]),o("h3",Ue,[o("a",{class:"stretched-link text-abergeldie-green hover:underline",href:_.Url},V(_.Name),9,Ve)])])]),_:1},8,["transform-items"])],2)]),_:1})]),o("div",Je,[z(v,{"class-names":{"ais-Pagination":"border-t pt-10"}},{default:B(({currentRefinement:l,pages:g,isFirstPage:_,isLastPage:N,refine:y,createURL:P})=>[o("nav",Pe,[o("a",{class:ee(["flex aspect-square h-[50px] items-center justify-center rounded-full bg-abergeldie-green text-white transition-colors hover:bg-abergeldie-blue",{"pointer-events-none opacity-30":_}]),href:P(l-1),onClick:te(T=>{y(l-1),x.scrollToTop()},["prevent"])},Ge,10,Ze),o("div",null,[o("div",Qe,[o("input",{type:"text",class:"w-12 rounded text-center",value:l+1,onChange:te(T=>{y(T.target.value-1),x.scrollToTop()},["prevent"])},null,40,Xe),Re,o("span",null,V(g.length),1)])]),o("a",{class:ee(["flex aspect-square h-[50px] items-center justify-center rounded-full bg-abergeldie-green text-white transition-colors hover:bg-abergeldie-blue",{"pointer-events-none opacity-30":N}]),href:P(l+1),onClick:te(T=>{y(l+1),x.scrollToTop()},["prevent"])},st,10,et)])]),_:1})])])])]),_:1},8,["search-client","index-name","routing","middlewares","on-state-change"])}const lt=me(xe,[["render",nt]]);export{lt as default};