import{a as J}from"./_commonjsHelpers.js";function j(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{fallback:function(){}},t=e.fallback;return typeof window>"u"?t():i({window})}var ee=String.prototype.replace,re=/%20/g,$={RFC1738:"RFC1738",RFC3986:"RFC3986"},B={default:$.RFC3986,formatters:{RFC1738:function(i){return ee.call(i,re,"+")},RFC3986:function(i){return String(i)}},RFC1738:$.RFC1738,RFC3986:$.RFC3986},te=B,k=Object.prototype.hasOwnProperty,L=Array.isArray,g=function(){for(var i=[],e=0;e<256;++e)i.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return i}(),ie=function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(L(r)){for(var a=[],o=0;o<r.length;++o)typeof r[o]<"u"&&a.push(r[o]);t.obj[t.prop]=a}}},V=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},a=0;a<e.length;++a)typeof e[a]<"u"&&(r[a]=e[a]);return r},ne=function i(e,t,r){if(!t)return e;if(typeof t!="object"){if(L(e))e.push(t);else if(e&&typeof e=="object")(r&&(r.plainObjects||r.allowPrototypes)||!k.call(Object.prototype,t))&&(e[t]=!0);else return[e,t];return e}if(!e||typeof e!="object")return[e].concat(t);var a=e;return L(e)&&!L(t)&&(a=V(e,r)),L(e)&&L(t)?(t.forEach(function(o,n){if(k.call(e,n)){var f=e[n];f&&typeof f=="object"&&o&&typeof o=="object"?e[n]=i(f,o,r):e.push(o)}else e[n]=o}),e):Object.keys(t).reduce(function(o,n){var f=t[n];return k.call(o,n)?o[n]=i(o[n],f,r):o[n]=f,o},a)},ae=function(e,t){return Object.keys(t).reduce(function(r,a){return r[a]=t[a],r},e)},oe=function(i,e,t){var r=i.replace(/\+/g," ");if(t==="iso-8859-1")return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch{return r}},le=function(e,t,r,a,o){if(e.length===0)return e;var n=e;if(typeof e=="symbol"?n=Symbol.prototype.toString.call(e):typeof e!="string"&&(n=String(e)),r==="iso-8859-1")return escape(n).replace(/%u[0-9a-f]{4}/gi,function(c){return"%26%23"+parseInt(c.slice(2),16)+"%3B"});for(var f="",s=0;s<n.length;++s){var l=n.charCodeAt(s);if(l===45||l===46||l===95||l===126||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122||o===te.RFC1738&&(l===40||l===41)){f+=n.charAt(s);continue}if(l<128){f=f+g[l];continue}if(l<2048){f=f+(g[192|l>>6]+g[128|l&63]);continue}if(l<55296||l>=57344){f=f+(g[224|l>>12]+g[128|l>>6&63]+g[128|l&63]);continue}s+=1,l=65536+((l&1023)<<10|n.charCodeAt(s)&1023),f+=g[240|l>>18]+g[128|l>>12&63]+g[128|l>>6&63]+g[128|l&63]}return f},fe=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],a=0;a<t.length;++a)for(var o=t[a],n=o.obj[o.prop],f=Object.keys(n),s=0;s<f.length;++s){var l=f[s],c=n[l];typeof c=="object"&&c!==null&&r.indexOf(c)===-1&&(t.push({obj:n,prop:l}),r.push(c))}return ie(t),e},se=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},ue=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},ce=function(e,t){return[].concat(e,t)},de=function(e,t){if(L(e)){for(var r=[],a=0;a<e.length;a+=1)r.push(t(e[a]));return r}return t(e)},K={arrayToObject:V,assign:ae,combine:ce,compact:fe,decode:oe,encode:le,isBuffer:ue,isRegExp:se,maybeMap:de,merge:ne},H=K,F=B,he=Object.prototype.hasOwnProperty,M={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},D=Array.isArray,ye=String.prototype.split,pe=Array.prototype.push,G=function(i,e){pe.apply(i,D(e)?e:[e])},ve=Date.prototype.toISOString,z=F.default,v={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:H.encode,encodeValuesOnly:!1,format:z,formatter:F.formatters[z],indices:!1,serializeDate:function(e){return ve.call(e)},skipNulls:!1,strictNullHandling:!1},me=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},we=function i(e,t,r,a,o,n,f,s,l,c,y,h,m,d){var u=e;if(typeof f=="function"?u=f(t,u):u instanceof Date?u=c(u):r==="comma"&&D(u)&&(u=H.maybeMap(u,function(C){return C instanceof Date?c(C):C})),u===null){if(a)return n&&!m?n(t,v.encoder,d,"key",y):t;u=""}if(me(u)||H.isBuffer(u)){if(n){var T=m?t:n(t,v.encoder,d,"key",y);if(r==="comma"&&m){for(var O=ye.call(String(u),","),E="",x=0;x<O.length;++x)E+=(x===0?"":",")+h(n(O[x],v.encoder,d,"value",y));return[h(T)+"="+E]}return[h(T)+"="+h(n(u,v.encoder,d,"value",y))]}return[h(t)+"="+h(String(u))]}var P=[];if(typeof u>"u")return P;var S;if(r==="comma"&&D(u))S=[{value:u.length>0?u.join(",")||null:void 0}];else if(D(f))S=f;else{var N=Object.keys(u);S=s?N.sort(s):N}for(var _=0;_<S.length;++_){var b=S[_],U=typeof b=="object"&&typeof b.value<"u"?b.value:u[b];if(!(o&&U===null)){var Z=D(u)?typeof r=="function"?r(t,b):t:t+(l?"."+b:"["+b+"]");G(P,i(U,Z,r,a,o,n,f,s,l,c,y,h,m,d))}}return P},be=function(e){if(!e)return v;if(e.encoder!==null&&typeof e.encoder<"u"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var t=e.charset||v.charset;if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=F.default;if(typeof e.format<"u"){if(!he.call(F.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var a=F.formatters[r],o=v.filter;return(typeof e.filter=="function"||D(e.filter))&&(o=e.filter),{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:v.addQueryPrefix,allowDots:typeof e.allowDots>"u"?v.allowDots:!!e.allowDots,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:v.charsetSentinel,delimiter:typeof e.delimiter>"u"?v.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:v.encode,encoder:typeof e.encoder=="function"?e.encoder:v.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:v.encodeValuesOnly,filter:o,format:r,formatter:a,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:v.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:v.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:v.strictNullHandling}},ge=function(i,e){var t=i,r=be(e),a,o;typeof r.filter=="function"?(o=r.filter,t=o("",t)):D(r.filter)&&(o=r.filter,a=o);var n=[];if(typeof t!="object"||t===null)return"";var f;e&&e.arrayFormat in M?f=e.arrayFormat:e&&"indices"in e?f=e.indices?"indices":"repeat":f="indices";var s=M[f];a||(a=Object.keys(t)),r.sort&&a.sort(r.sort);for(var l=0;l<a.length;++l){var c=a[l];r.skipNulls&&t[c]===null||G(n,we(t[c],c,s,r.strictNullHandling,r.skipNulls,r.encode?r.encoder:null,r.filter,r.sort,r.allowDots,r.serializeDate,r.format,r.formatter,r.encodeValuesOnly,r.charset))}var y=n.join(r.delimiter),h=r.addQueryPrefix===!0?"?":"";return r.charsetSentinel&&(r.charset==="iso-8859-1"?h+="utf8=%26%2310003%3B&":h+="utf8=%E2%9C%93&"),y.length>0?h+y:""},R=K,Q=Object.prototype.hasOwnProperty,Oe=Array.isArray,p={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:R.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},Se=function(i){return i.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},Y=function(i,e){return i&&typeof i=="string"&&e.comma&&i.indexOf(",")>-1?i.split(","):i},xe="utf8=%26%2310003%3B",Le="utf8=%E2%9C%93",De=function(e,t){var r={},a=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,o=t.parameterLimit===1/0?void 0:t.parameterLimit,n=a.split(t.delimiter,o),f=-1,s,l=t.charset;if(t.charsetSentinel)for(s=0;s<n.length;++s)n[s].indexOf("utf8=")===0&&(n[s]===Le?l="utf-8":n[s]===xe&&(l="iso-8859-1"),f=s,s=n.length);for(s=0;s<n.length;++s)if(s!==f){var c=n[s],y=c.indexOf("]="),h=y===-1?c.indexOf("="):y+1,m,d;h===-1?(m=t.decoder(c,p.decoder,l,"key"),d=t.strictNullHandling?null:""):(m=t.decoder(c.slice(0,h),p.decoder,l,"key"),d=R.maybeMap(Y(c.slice(h+1),t),function(u){return t.decoder(u,p.decoder,l,"value")})),d&&t.interpretNumericEntities&&l==="iso-8859-1"&&(d=Se(d)),c.indexOf("[]=")>-1&&(d=Oe(d)?[d]:d),Q.call(r,m)?r[m]=R.combine(r[m],d):r[m]=d}return r},Te=function(i,e,t,r){for(var a=r?e:Y(e,t),o=i.length-1;o>=0;--o){var n,f=i[o];if(f==="[]"&&t.parseArrays)n=[].concat(a);else{n=t.plainObjects?Object.create(null):{};var s=f.charAt(0)==="["&&f.charAt(f.length-1)==="]"?f.slice(1,-1):f,l=parseInt(s,10);!t.parseArrays&&s===""?n={0:a}:!isNaN(l)&&f!==s&&String(l)===s&&l>=0&&t.parseArrays&&l<=t.arrayLimit?(n=[],n[l]=a):s!=="__proto__"&&(n[s]=a)}a=n}return a},Pe=function(e,t,r,a){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,n=/(\[[^[\]]*])/,f=/(\[[^[\]]*])/g,s=r.depth>0&&n.exec(o),l=s?o.slice(0,s.index):o,c=[];if(l){if(!r.plainObjects&&Q.call(Object.prototype,l)&&!r.allowPrototypes)return;c.push(l)}for(var y=0;r.depth>0&&(s=f.exec(o))!==null&&y<r.depth;){if(y+=1,!r.plainObjects&&Q.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(s[1])}return s&&c.push("["+o.slice(s.index)+"]"),Te(c,t,r,a)}},_e=function(e){if(!e)return p;if(e.decoder!==null&&e.decoder!==void 0&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=typeof e.charset>"u"?p.charset:e.charset;return{allowDots:typeof e.allowDots>"u"?p.allowDots:!!e.allowDots,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:p.allowPrototypes,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:p.arrayLimit,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:p.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:p.comma,decoder:typeof e.decoder=="function"?e.decoder:p.decoder,delimiter:typeof e.delimiter=="string"||R.isRegExp(e.delimiter)?e.delimiter:p.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:p.depth,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:p.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:p.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:p.plainObjects,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:p.strictNullHandling}},je=function(i,e){var t=_e(e);if(i===""||i===null||typeof i>"u")return t.plainObjects?Object.create(null):{};for(var r=typeof i=="string"?De(i,t):i,a=t.plainObjects?Object.create(null):{},o=Object.keys(r),n=0;n<o.length;++n){var f=o[n],s=Pe(f,r[f],t,typeof i=="string");a=R.merge(a,s,t)}return R.compact(a)},Re=ge,Ee=je,Ne=B,Ue={formats:Ne,parse:Ee,stringify:Re};const W=J(Ue);function A(i){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(i)}function Fe(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function q(i,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,X(r.key),r)}}function Ae(i,e,t){return e&&q(i.prototype,e),t&&q(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}function w(i,e,t){return e=X(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function X(i){var e=Ce(i,"string");return A(e)==="symbol"?e:String(e)}function Ce(i,e){if(A(i)!=="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var r=t.call(i,e||"default");if(A(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}var I=function(e){e&&(window.document.title=e)},$e=function(){function i(e){var t=this,r=e.windowTitle,a=e.writeDelay,o=a===void 0?400:a,n=e.createURL,f=e.parseURL,s=e.getLocation,l=e.start,c=e.dispose,y=e.push,h=e.cleanUrlOnDispose;Fe(this,i),w(this,"$$type","ais.browser"),w(this,"windowTitle",void 0),w(this,"writeDelay",void 0),w(this,"_createURL",void 0),w(this,"parseURL",void 0),w(this,"getLocation",void 0),w(this,"writeTimer",void 0),w(this,"_onPopState",void 0),w(this,"inPopState",!1),w(this,"isDisposed",!1),w(this,"latestAcknowledgedHistory",0),w(this,"_start",void 0),w(this,"_dispose",void 0),w(this,"_push",void 0),w(this,"_cleanUrlOnDispose",void 0),this.windowTitle=r,this.writeTimer=void 0,this.writeDelay=o,this._createURL=n,this.parseURL=f,this.getLocation=s,this._start=l,this._dispose=c,this._push=y,this._cleanUrlOnDispose=typeof h>"u"?!0:h,j(function(m){var d=m.window,u=t.windowTitle&&t.windowTitle(t.read());I(u),t.latestAcknowledgedHistory=d.history.length})}return Ae(i,[{key:"read",value:function(){return this.parseURL({qsModule:W,location:this.getLocation()})}},{key:"write",value:function(t){var r=this;j(function(a){var o=a.window,n=r.createURL(t),f=r.windowTitle&&r.windowTitle(t);r.writeTimer&&clearTimeout(r.writeTimer),r.writeTimer=setTimeout(function(){I(f),r.shouldWrite(n)&&(r._push?r._push(n):o.history.pushState(t,f||"",n),r.latestAcknowledgedHistory=o.history.length),r.inPopState=!1,r.writeTimer=void 0},r.writeDelay)})}},{key:"onUpdate",value:function(t){var r=this;this._start&&this._start(function(){t(r.read())}),this._onPopState=function(){r.writeTimer&&(clearTimeout(r.writeTimer),r.writeTimer=void 0),r.inPopState=!0,t(r.read())},j(function(a){var o=a.window;o.addEventListener("popstate",r._onPopState)})}},{key:"createURL",value:function(t){var r=this._createURL({qsModule:W,routeState:t,location:this.getLocation()});return r}},{key:"dispose",value:function(){var t=this;this._dispose&&this._dispose(),this.isDisposed=!0,j(function(r){var a=r.window;t._onPopState&&a.removeEventListener("popstate",t._onPopState)}),this.writeTimer&&clearTimeout(this.writeTimer),this._cleanUrlOnDispose&&this.write({})}},{key:"start",value:function(){this.isDisposed=!1}},{key:"shouldWrite",value:function(t){var r=this;return j(function(a){var o=a.window,n=!(r.isDisposed&&r.latestAcknowledgedHistory!==o.history.length);return!r.inPopState&&n&&t!==o.location.href})}}]),i}();function He(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=i.createURL,t=e===void 0?function(d){var u=d.qsModule,T=d.routeState,O=d.location,E=O.protocol,x=O.hostname,P=O.port,S=P===void 0?"":P,N=O.pathname,_=O.hash,b=u.stringify(T),U=S===""?"":":".concat(S);return b?"".concat(E,"//").concat(x).concat(U).concat(N,"?").concat(b).concat(_):"".concat(E,"//").concat(x).concat(U).concat(N).concat(_)}:e,r=i.parseURL,a=r===void 0?function(d){var u=d.qsModule,T=d.location;return u.parse(T.search.slice(1),{arrayLimit:99})}:r,o=i.writeDelay,n=o===void 0?400:o,f=i.windowTitle,s=i.getLocation,l=s===void 0?function(){return j(function(d){var u=d.window;return u.location},{fallback:function(){throw new Error("You need to provide `getLocation` to the `history` router in environments where `window` does not exist.")}})}:s,c=i.start,y=i.dispose,h=i.push,m=i.cleanUrlOnDispose;return new $e({createURL:t,parseURL:a,writeDelay:n,windowTitle:f,getLocation:l,start:c,dispose:y,push:h,cleanUrlOnDispose:m})}export{He as h,j as s};