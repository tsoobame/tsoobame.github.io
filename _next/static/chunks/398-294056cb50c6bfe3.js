(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[398],{9361:function(a,b){"use strict";b.Z=function(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}},3454:function(a,b,c){"use strict";var d,e;a.exports=(null==(d=c.g.process)?void 0:d.env)&&"object"==typeof(null==(e=c.g.process)?void 0:e.env)?c.g.process:c(7663)},8045:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(9361).Z,e=c(4941).Z,f=c(3929).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){var b,c,h=a.src,i=a.sizes,p=a.unoptimized,q=void 0!==p&&p,v=a.priority,B=void 0!==v&&v,D=a.loading,E=a.lazyRoot,F=void 0===E?null:E,G=a.lazyBoundary,H=a.className,I=a.quality,J=a.width,K=a.height,L=a.style,M=a.objectFit,N=a.objectPosition,O=a.onLoadingComplete,P=a.placeholder,Q=void 0===P?"empty":P,R=a.blurDataURL,S=j(a,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),T=k.useContext(o.ImageConfigContext),U=k.useMemo(function(){var a=s||T||m.imageConfigDefault,b=f(a.deviceSizes).concat(f(a.imageSizes)).sort(function(a,b){return a-b}),c=a.deviceSizes.sort(function(a,b){return a-b});return g({},a,{allSizes:b,deviceSizes:c})},[T]),V=S,W=i?"responsive":"intrinsic";"layout"in V&&(V.layout&&(W=V.layout),delete V.layout);var X=A;if("loader"in V){if(V.loader){var Y,Z=V.loader;X=function(a){a.config;var b=j(a,["config"]);return Z(b)}}delete V.loader}var $="";if(x(h)){var _=w(h)?h.default:h;if(!_.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(_)));if(R=R||_.blurDataURL,$=_.src,(!W||"fill"!==W)&&(K=K||_.height,J=J||_.width,!_.height||!_.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(_)))}h="string"==typeof h?h:$;var aa=!B&&("lazy"===D|| void 0===D);(h.startsWith("data:")||h.startsWith("blob:"))&&(q=!0,aa=!1),t.has(h)&&(aa=!1),r&&(q=!0);var ab=e(k.useState(!1),2),ac=ab[0],ad=ab[1],ae=e(n.useIntersection({rootRef:F,rootMargin:G||"200px",disabled:!aa}),3),af=ae[0],ag=ae[1],ah=ae[2],ai=!aa||ag,aj={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ak={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},al=!1,am=z(J),an=z(K),ao=z(I),ap=Object.assign({},L,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:N}),aq="blur"!==Q||ac?{}:{backgroundSize:M||"cover",backgroundPosition:N||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(R,'")')};if("fill"===W)aj.display="block",aj.position="absolute",aj.top=0,aj.left=0,aj.bottom=0,aj.right=0;else if(void 0!==am&& void 0!==an){var ar=an/am,as=isNaN(ar)?"100%":"".concat(100*ar,"%");"responsive"===W?(aj.display="block",aj.position="relative",al=!0,ak.paddingTop=as):"intrinsic"===W?(aj.display="inline-block",aj.position="relative",aj.maxWidth="100%",al=!0,ak.maxWidth="100%",b="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(am,"%27%20height=%27").concat(an,"%27/%3e")):"fixed"===W&&(aj.display="inline-block",aj.position="relative",aj.width=am,aj.height=an)}var at={src:u,srcSet:void 0,sizes:void 0};ai&&(at=y({config:U,src:h,unoptimized:q,layout:W,width:am,quality:ao,sizes:i,loader:X}));var au=h,av="imagesrcset",aw="imagesizes";aw="imageSizes";var ax=(d(c={},"imageSrcSet",at.srcSet),d(c,aw,at.sizes),c),ay=k.default.useLayoutEffect,az=k.useRef(O),aA=k.useRef(h);k.useEffect(function(){az.current=O},[O]),ay(function(){aA.current!==h&&(ah(),aA.current=h)},[ah,h]);var aB=g({isLazy:aa,imgAttributes:at,heightInt:an,widthInt:am,qualityInt:ao,layout:W,className:H,imgStyle:ap,blurStyle:aq,loading:D,config:U,unoptimized:q,placeholder:Q,loader:X,srcString:au,onLoadingCompleteRef:az,setBlurComplete:ad,setIntersection:af,isVisible:ai,noscriptSizes:i},V);return k.default.createElement(k.default.Fragment,null,k.default.createElement("span",{style:aj},al?k.default.createElement("span",{style:ak},b?k.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:b}):null):null,k.default.createElement(C,Object.assign({},aB))),B?k.default.createElement(l.default,null,k.default.createElement("link",Object.assign({key:"__nimg-"+at.src+at.srcSet+at.sizes,rel:"preload",as:"image",href:at.srcSet?void 0:at.src},ax))):null)};var g=c(6495).Z,h=c(2648).Z,i=c(1598).Z,j=c(7273).Z,k=i(c(7294)),l=h(c(5443)),m=c(9309),n=c(7190),o=c(9977);c(3794);var p=c(2392),q={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,experimentalUnoptimized:!0},r=(q.experimentalRemotePatterns,q.experimentalUnoptimized),s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,experimentalUnoptimized:!0},t=new Set,u="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",v=new Map([["default",function(a){var b=a.config,c=a.src,d=a.width,e=a.quality;return c.endsWith(".svg")&&!b.dangerouslyAllowSVG?c:"".concat(p.normalizePathTrailingSlash(b.path),"?url=").concat(encodeURIComponent(c),"&w=").concat(d,"&q=").concat(e||75)}],["imgix",function(a){var b=a.config,c=a.src,d=a.width,e=a.quality,f=new URL("".concat(b.path).concat(D(c))),g=f.searchParams;return g.set("auto",g.getAll("auto").join(",")||"format"),g.set("fit",g.get("fit")||"max"),g.set("w",g.get("w")||d.toString()),e&&g.set("q",e.toString()),f.href}],["cloudinary",function(a){var b=a.config,c=a.src,d=a.width,e=a.quality,f=["f_auto","c_limit","w_"+d,"q_"+(e||"auto")].join(",")+"/";return"".concat(b.path).concat(f).concat(D(c))}],["akamai",function(a){var b=a.config,c=a.src,d=a.width;return"".concat(b.path).concat(D(c),"?imwidth=").concat(d)}],["custom",function(a){var b=a.src;throw Error('Image with src "'.concat(b,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function w(a){return void 0!==a.default}function x(a){var b;return"object"==typeof a&&(w(a)|| void 0!==(b=a).src)}function y(a){var b=a.config,c=a.src,d=a.unoptimized,e=a.layout,g=a.width,h=a.quality,i=a.sizes,j=a.loader;if(d)return{src:c,srcSet:void 0,sizes:void 0};var k=function(a,b,c,d){var e=a.deviceSizes,g=a.allSizes;if(d&&("fill"===c||"responsive"===c)){for(var h=/(^|\s)(1?\d?\d)vw/g,i=[];j=h.exec(d);j)i.push(parseInt(j[2]));if(i.length){var j,k,l=.01*(k=Math).min.apply(k,f(i));return{widths:g.filter(function(a){return a>=e[0]*l}),kind:"w"}}return{widths:g,kind:"w"}}return"number"!=typeof b||"fill"===c||"responsive"===c?{widths:e,kind:"w"}:{widths:f(new Set([b,2*b].map(function(a){return g.find(function(b){return b>=a})||g[g.length-1]}))),kind:"x"}}(b,g,e,i),l=k.widths,m=k.kind,n=l.length-1;return{sizes:i||"w"!==m?i:"100vw",srcSet:l.map(function(a,d){return"".concat(j({config:b,src:c,quality:h,width:a})," ").concat("w"===m?a:d+1).concat(m)}).join(", "),src:j({config:b,src:c,quality:h,width:l[n]})}}function z(a){return"number"==typeof a?a:"string"==typeof a?parseInt(a,10):void 0}function A(a){var b,c=(null==(b=a.config)?void 0:b.loader)||"default",d=v.get(c);if(d)return d(a);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(m.VALID_LOADERS.join(", "),". Received: ").concat(c))}function B(a,b,c,d,e,f){a&&a.src!==u&&a["data-loaded-src"]!==b&&(a["data-loaded-src"]=b,("decode"in a?a.decode():Promise.resolve()).catch(function(){}).then(function(){if(a.parentNode&&(t.add(b),"blur"===d&&f(!0),null==e?void 0:e.current)){var c=a.naturalWidth,g=a.naturalHeight;e.current({naturalWidth:c,naturalHeight:g})}}))}var C=function(a){var b=a.imgAttributes,c=(a.heightInt,a.widthInt),d=a.qualityInt,e=a.layout,f=a.className,h=a.imgStyle,i=a.blurStyle,l=a.isLazy,m=a.placeholder,n=a.loading,o=a.srcString,p=a.config,q=a.unoptimized,r=a.loader,s=a.onLoadingCompleteRef,t=a.setBlurComplete,u=a.setIntersection,v=a.onLoad,w=a.onError,x=(a.isVisible,a.noscriptSizes),z=j(a,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return n=l?"lazy":n,k.default.createElement(k.default.Fragment,null,k.default.createElement("img",Object.assign({},z,b,{decoding:"async","data-nimg":e,className:f,style:g({},h,i),ref:k.useCallback(function(a){u(a),(null==a?void 0:a.complete)&&B(a,o,e,m,s,t)},[u,o,e,m,s,t,]),onLoad:function(a){B(a.currentTarget,o,e,m,s,t),v&&v(a)},onError:function(a){"blur"===m&&t(!0),w&&w(a)}})),(l||"blur"===m)&&k.default.createElement("noscript",null,k.default.createElement("img",Object.assign({},z,y({config:p,src:o,unoptimized:q,layout:e,width:c,quality:d,sizes:x,loader:r}),{decoding:"async","data-nimg":e,style:h,className:f,loading:n}))))};function D(a){return"/"===a[0]?a.slice(1):a}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},7663:function(a){!function(){var b={308:function(a){var b,c,d,e=a.exports={};function f(){throw Error("setTimeout has not been defined")}function g(){throw Error("clearTimeout has not been defined")}function h(a){if(b===setTimeout)return setTimeout(a,0);if((b===f||!b)&&setTimeout)return b=setTimeout,setTimeout(a,0);try{return b(a,0)}catch(c){try{return b.call(null,a,0)}catch(d){return b.call(this,a,0)}}}!function(){try{b="function"==typeof setTimeout?setTimeout:f}catch(a){b=f}try{c="function"==typeof clearTimeout?clearTimeout:g}catch(d){c=g}}();var i=[],j=!1,k=-1;function l(){j&&d&&(j=!1,d.length?i=d.concat(i):k=-1,i.length&&m())}function m(){if(!j){var a=h(l);j=!0;for(var b=i.length;b;){for(d=i,i=[];++k<b;)d&&d[k].run();k=-1,b=i.length}d=null,j=!1,function(a){if(c===clearTimeout)return clearTimeout(a);if((c===g||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(a);try{c(a)}catch(b){try{return c.call(null,a)}catch(d){return c.call(this,a)}}}(a)}}function n(a,b){this.fun=a,this.array=b}function o(){}e.nextTick=function(a){var b=Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];i.push(new n(a,b)),1!==i.length||j||h(m)},n.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={},e.on=o,e.addListener=o,e.once=o,e.off=o,e.removeListener=o,e.removeAllListeners=o,e.emit=o,e.prependListener=o,e.prependOnceListener=o,e.listeners=function(a){return[]},e.binding=function(a){throw Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(a){throw Error("process.chdir is not supported")},e.umask=function(){return 0}}},c={};function d(a){var e=c[a];if(void 0!==e)return e.exports;var f=c[a]={exports:{}},g=!0;try{b[a](f,f.exports,d),g=!1}finally{g&&delete c[a]}return f.exports}d.ab="//";var e=d(308);a.exports=e}()},9008:function(a,b,c){a.exports=c(5443)},5675:function(a,b,c){a.exports=c(8045)},930:function(a,b,c){"use strict";function d(a){var b,c,d;let e=function(a){let b=RegExp("<\\w+(\\s+(\"[^\"]*\"|\\'[^\\']*'|[^>])+)?>|<\\/\\w+>","gi");return a.replace(b,"")}((b=a).replace(/^\s+/,"").replace(/\s+$/,"")),{time:f,words:g}=function(a,b=275){let{count:c,time:d,formattedText:e}=function(a){let b=RegExp("[぀-ヿ㐀-䶿一-鿿豈-﫿ｦ-ﾟ]","g"),c=(a.match(b)||[]).length;return{count:c,time:c/500,formattedText:a.replace(b,"")}}(a),f=function(a){let b=RegExp("\\w+","g");return(a.match(b)||[]).length}(e);return{characters:c,otherLanguageTime:d,words:f,time:f/b}}(e);return{text:(c=f)<.5?"less than a min":c>=.5&&c<1.5?"1 min read":Math.ceil(c)+" min read",minutes:(d=f)<.5?.5:d>=.5&&d<1.5?1:Math.ceil(d),words:g,time:f}}c.d(b,{S:function(){return d}})},2746:function(a,b,c){let d=c(5893);a.exports.c=d},7568:function(a,b,c){"use strict";function d(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}function e(a){return function(){var b=this,c=arguments;return new Promise(function(e,f){var g=a.apply(b,c);function h(a){d(g,e,f,h,i,"next",a)}function i(a){d(g,e,f,h,i,"throw",a)}h(void 0)})}}c.d(b,{Z:function(){return e}})},9396:function(a,b,c){"use strict";function d(a,b){return b=null!=b?b:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))}),a}c.d(b,{Z:function(){return d}})},8209:function(a,b,c){"use strict";c.d(b,{G:function(){return g}});var d=c(7294),e=c(9495);let f="light",g=({chart:a,config:b})=>{if("undefined"==typeof window)return d.createElement("div",{className:"mermaid","data-mermaid-src":a},a);let c=(0,d.useMemo)(()=>"string"==typeof b?JSON.parse(b):b,[b]),g=document.querySelector("html"),[h,i]=(0,d.useState)(!1),j=(0,d.useMemo)(()=>(function(a,b){let c=a.getAttribute("data-theme")??f;c===f||"dark"===c||(c=f);let d=c===f?"default":"dark";return(b?.theme?.[c]??b?.mermaid?.theme)??d})(g,c),[c,h]);return(0,d.useEffect)(()=>{let a=new MutationObserver(a=>{for(let b of a)if("attributes"===b.type&&"data-theme"===b.attributeName){i(a=>!a);break}});return a.observe(g,{attributes:!0}),()=>{try{a.disconnect()}catch{}}},[]),(0,d.useEffect)(()=>{c&&(c.mermaid?e.Z.initialize({startOnLoad:!0,...c.mermaid,theme:j}):e.Z.initialize({startOnLoad:!0,theme:j}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach(a=>{a.removeAttribute("data-processed"),a.innerHTML=a.getAttribute("data-mermaid-src")}),e.Z.contentLoaded())},[c,j]),(0,d.useEffect)(()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach(a=>{a.removeAttribute("data-processed"),a.innerHTML=a.getAttribute("data-mermaid-src")}),setTimeout(e.Z.contentLoaded,0)},[a]),d.createElement("div",{className:"mermaid","data-mermaid-src":a},a)}},3659:function(a,b,c){"use strict";c.d(b,{R:function(){return l}});var d={};c.r(d),c.d(d,{MDXContext:function(){return g},MDXProvider:function(){return k},useMDXComponents:function(){return i},withMDXComponents:function(){return h}});var e=c(7294),f=c(2746);let g=e.createContext({});function h(a){return function(b){let c=i(b.components);return e.createElement(a,{...b,allComponents:c})}}function i(a){let b=e.useContext(g);return e.useMemo(()=>"function"==typeof a?a(b):{...b,...a},[b,a])}let j={};function k({components:a,children:b,disableParentContext:c}){let d=i(a);return c&&(d=a||j),e.createElement(g.Provider,{value:d},b)}function l({compiledSource:a,frontmatter:b,scope:c,components:g={},lazy:h}){let[i,j]=(0,e.useState)(!h||"undefined"==typeof window);(0,e.useEffect)(()=>{if(h){let a=window.requestIdleCallback(()=>{j(!0)});return()=>window.cancelIdleCallback(a)}},[]);let l=(0,e.useMemo)(()=>{let e=Object.assign({opts:{...d,...f.c}},{frontmatter:b},c),g=Object.keys(e),h=Object.values(e),i=Reflect.construct(Function,g.concat(`${a}`));return i.apply(i,h).default},[c,a]);if(!i)return e.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let m=e.createElement(k,{components:g},e.createElement(l,null));return h?e.createElement("div",null,m):m}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(a){var b=Date.now();return setTimeout(function(){a({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-b))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(a){clearTimeout(a)})}}])