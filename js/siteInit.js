import{A as pe,B as y,C as P,D as ge,E as N,F as Z,G as ve,H as we,I as be,J as ye,K as Ce,L as Le,M as Ee,N as Ae,O as Te,P as xe,Q as ke,R as Se,S as _e,T as He,U as Ie,V as Oe,W as Re,X as Pe,Y as p,Z as C,_ as M,a as le,aa as j,b as d,ba as Ne,ca as Me,d as D,da as Be,ea as De,f as k,fa as Ue,g as de,ga as qe,ha as V,i as I,j as v,k as he,l as u,m as Y,n as O,o as R,p as me,q as ue,r as W,s as U,t as fe,u as A,v as w,w as q,x as T,y as X,z as m}from"./chunk-LZJJTTUD.js";import"./chunk-QAWHJ5B3.js";import"./chunk-TXY6KU56.js";he();var S=(e,t)=>{m.hasClass("on")?(m.removeClass("on"),T.removeClass("close"),t?m.style="":p(m,"slideRightOut")):t?m.style="":p(m,"slideRightIn",()=>{m.addClass("on"),T.addClass("close")})},je=()=>{let e=v(m,".inner");m.child(".tab")&&e.removeChild(m.child(".tab"));let t=document.createElement("ul"),o="active";t.className="tab",["contents","related","overview"].forEach(s=>{let i=m.child(".panel."+s);if(i.innerHTML.trim().length<1){s==="contents"&&I(N,"none");return}s==="contents"&&I(N,"");let r=document.createElement("li"),c=document.createElement("span"),n=document.createTextNode(i.getAttribute("data-title"));c.appendChild(n),r.appendChild(c),r.addClass(s+" item"),o?(i.addClass(o),r.addClass(o)):i.removeClass("active"),r.addEventListener("click",a=>{let l=a.currentTarget;l.hasClass("active")||(m.find(".tab .item").forEach(h=>{h.removeClass("active")}),m.find(".panel").forEach(h=>{h.removeClass("active")}),m.child(".panel."+l.className.replace(" item","")).addClass("active"),l.addClass("active"))}),t.appendChild(r),o=""}),t.childNodes.length>1?(e.insertBefore(t,e.childNodes[0]),m.child(".panels").style.paddingTop=""):m.child(".panels").style.paddingTop=".625rem"},ze=()=>{let e=n=>{let a=t[n];if(!a||a.hasClass("current"))return;d.each(".toc .active",h=>{h&&h.removeClass("active current")}),o.forEach(h=>{h&&h.removeClass("active")}),a.addClass("active current"),o[n]&&o[n].addClass("active");let l=a.parentNode;for(;!l.matches(".contents");){if(l.matches("li")){l.addClass("active");let h=d(l.child("a.toc-link").getAttribute("href"));h&&h.addClass("active")}l=l.parentNode}getComputedStyle(m).display!=="none"&&i.hasClass("active")&&C(i,a.offsetTop-i.offsetHeight/4)},t=d.all(".contents li");if(t.length<1)return;let o=[...t],s=null;o=o.map((n,a)=>{let l=n.child("a.toc-link"),h=d(decodeURI(l.getAttribute("href")));if(!h)return null;let B=h.child("a.anchor"),H=E=>{E.preventDefault();let ht=d(decodeURI(E.currentTarget.getAttribute("href")));s=a,C(ht,null,()=>{e(a),s=null})};return l.addEventListener("click",H),B&&B.addEventListener("click",E=>{H(E),Me(u.hostname+"/"+LOCAL.path+E.currentTarget.getAttribute("href"))}),h});let i=m.child(".contents.panel"),r=n=>{let a=0,l=n[a];if(l.boundingClientRect.top>0)return a=o.indexOf(l.target),a===0?0:a-1;for(;a<n.length;a++)if(n[a].boundingClientRect.top<=0)l=n[a];else return o.indexOf(l.target);return o.indexOf(l.target)};(()=>{let n=new IntersectionObserver(a=>{let l=r(a)+(R<0?1:0);s===null&&e(l)},{rootMargin:"0px 0px -100% 0px",threshold:0});o.forEach(a=>{a&&n.observe(a)})})()},J=()=>{C(0)},Ge=()=>{C(parseInt(String(k(fe))))},$e=()=>{C(d("#comments"))},Fe=()=>{d.each(".menu .item:not(.title)",e=>{let t=e.child("a[href]"),o=e.parentNode.parentNode;if(!t)return;let s=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),i=!u.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname),r=!t.onclick&&t.hostname===location.hostname&&(s||i);e.toggleClass("active",r),e.parentNode.child(".active")&&o.hasClass("dropdown")?o.removeClass("active").addClass("expand"):o.removeClass("expand")})};var g={timer:void 0,lock:!1,show(){clearTimeout(this.timer),document.body.removeClass("loaded"),A.setAttribute("style","display:block"),g.lock=!1},hide(e){u.loader.start||(e=-1),this.timer=setTimeout(this.vanish,e||3e3)},vanish(){g.lock||(u.loader.start&&p(A,0),document.body.addClass("loaded"),g.lock=!0)}};function K(){d.each(".overview .menu > .item",t=>{v(w,".menu").appendChild(t.cloneNode(!0))}),A.addEventListener("click",g.vanish),T.addEventListener("click",S),d(".dimmer").addEventListener("click",S),v(X,".down").addEventListener("click",Ge),v(X,".up").addEventListener("click",J),y||Pe(D(q,"div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})),He(y.child(".player")),Ie(y.child(".back-to-top")),Oe(y.child(".chat")),Re(y.child(".contents")),P.addEventListener("click",J),ge.addEventListener("click",$e),N.addEventListener("click",S),(()=>{new IntersectionObserver(([t])=>{t.isIntersecting?(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.remove("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.remove("stop-animation")})):(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.add("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.add("stop-animation")}))},{root:null,threshold:.2}).observe(document.getElementById("waves")),new IntersectionObserver(([t])=>{t.isIntersecting?document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.remove("stop-animation")}):document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.add("stop-animation")})},{root:null,threshold:.2}).observe(document.querySelector(".with-love"))})()}var Ye=()=>{if(!d(".index.wrap"))return;let e=new IntersectionObserver(t=>{t.forEach(o=>{o.target.hasClass("show")?e.unobserve(o.target):(o.isIntersecting||o.intersectionRatio>0)&&(o.target.addClass("show"),e.unobserve(o.target))})},{root:null,threshold:[.3]});d.each(".index.wrap article.item, .index.wrap section.item",t=>{e.observe(t)}),d(".index.wrap .item:first-child").addClass("show"),d.each(".cards .item",t=>{["mouseenter","touchstart"].forEach(o=>{t.addEventListener(o,()=>{d(".cards .item.active")&&d(".cards .item.active").removeClass("active"),t.addClass("active")},{passive:!0})}),["mouseleave"].forEach(o=>{t.addEventListener(o,()=>{t.removeClass("active")},{passive:!0})})})};var b=e=>{let t=d(".theme .ic");e==="dark"?(U.setAttribute("data-theme",e),t.removeClass("i-sun"),t.addClass("i-moon")):(U.removeAttribute("data-theme"),t.removeClass("i-moon"),t.addClass("i-sun"))},We=()=>{u.auto_dark.enable&&(new Date().getHours()>=u.auto_dark.start||new Date().getHours()<=u.auto_dark.end?b("dark"):b())},Q=e=>{U.getAttribute("data-theme")==="dark"&&(e="#222"),d('meta[name="theme-color"]').setAttribute("content",e)},Xe=()=>{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?b("dark"):b()});let e=M.get("theme");e?b(e):u.darkmode&&b("dark")};var z=()=>{be(k(w)),ye(k(q)),Ce(Z+k(d("#waves"))),we!==window.innerWidth&&S(null,1),Le(window.innerHeight),Ee(window.innerWidth)},Ze=()=>{let e=window.innerHeight,t=le(),o=t>e?t-e:document.body.scrollHeight-e,s=window.scrollY>Z,i=window.scrollY>0;s?Q("#FFF"):Q("#222"),w.toggleClass("show",s),y.toggleClass("affix",i),pe.toggleClass("affix",i),m.toggleClass("affix",window.scrollY>ve&&document.body.offsetWidth>991),typeof O.y>"u"&&(O.y=window.scrollY),Ae(O.y-window.scrollY),R<0?(w.removeClass("up"),w.toggleClass("down",s)):R>0&&(w.removeClass("down"),w.toggleClass("up",s)),O.y=window.scrollY;let r=Math.round(Math.min(100*window.scrollY/o,100))+"%";P.child("span").innerText!==r&&(P.child("span").innerText=r),(d("#sidebar").hasClass("affix")||d("#sidebar").hasClass("on"))&&de(d(".percent"),r)},Ve=()=>{let e=d('[rel="icon"]');document.addEventListener("visibilitychange",()=>{switch(document.visibilityState){case"hidden":e.setAttribute("href",Y+u.favicon.hidden),document.title=LOCAL.favicon.hide,u.loader.switch&&g.show(),clearTimeout(ue);break;case"visible":e.setAttribute("href",Y+u.favicon.normal),document.title=LOCAL.favicon.show,u.loader.switch&&g.hide(1e3),Te(setTimeout(()=>{document.title=me},2e3));break}},{passive:!0})};var Je=typeof window>"u",ee=!Je&&"loading"in HTMLImageElement.prototype,te=!Je&&(!("onscroll"in window)||/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent));function Ke(e,t=document){return typeof e=="string"?[...t.querySelectorAll(e)]:e instanceof Element?[e]:[...e]}function Qe(e,t){let o;return function(...s){o&&clearTimeout(o),o=setTimeout(()=>{o=void 0,e(...s)},t)}}var et=32,tt="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";var mt=Math.PI,mo=mt*2;function ie(e='img[loading="lazy"]',{hash:t=!0,hashType:o="blurhash",placeholderSize:s=et,updateSizesOnResize:i=!1,onImageLoad:r}={}){let c=new Set;for(let n of Ke(e)){let a=se(n,{updateOnResize:i});if(i&&a&&c.add(a),!n.dataset.src&&!n.dataset.srcset)continue;if(te||!ee){ot(n),re(n),ne(n);continue}if(n.src||(n.src=tt),n.complete&&n.naturalWidth>0){oe(n,r);continue}let l=()=>oe(n,r);n.addEventListener("load",l,{once:!0}),c.add(()=>n.removeEventListener("load",l))}return()=>{for(let n of c)n();c.clear()}}function oe(e,t){let o=new Image,{srcset:s,src:i,sizes:r}=e.dataset;if(r==="auto"){let c=st(e);c&&(o.sizes=`${c}px`)}else e.sizes&&(o.sizes=e.sizes);s&&(o.srcset=s),i&&(o.src=i),o.addEventListener("load",()=>{ot(e),re(e),ne(e),t?.(e)})}var G=new WeakMap;function se(e,t){if(e.dataset.sizes!=="auto")return;let o=st(e);if(o&&(e.sizes=`${o}px`),e.parentElement?.tagName.toLowerCase()==="picture"&&!t?.skipChildren&&[...e.parentElement.getElementsByTagName("source")].forEach(s=>se(s,{skipChildren:!0})),t?.updateOnResize){if(!G.has(e)){let s=Qe(()=>se(e),500),i=new ResizeObserver(s);G.set(e,i),i.observe(e)}return()=>{let s=G.get(e);s&&(s.disconnect(),G.delete(e))}}}function ne(e){e.dataset.src&&(e.src=e.dataset.src,e.removeAttribute("data-src"))}function re(e){e.dataset.srcset&&(e.srcset=e.dataset.srcset,e.removeAttribute("data-srcset"))}function ot(e){let t=e.parentElement;t?.tagName.toLowerCase()==="picture"&&([...t.querySelectorAll("source[data-srcset]")].forEach(re),[...t.querySelectorAll("source[data-src]")].forEach(ne))}function st(e){return e instanceof HTMLSourceElement?e.parentElement?.getElementsByTagName("img")[0]?.offsetWidth:e.offsetWidth}var it=()=>{j(),m.hasClass("on")&&p(m,0,()=>{m.removeClass("on"),T.removeClass("close")});let e=d("#main");e.innerHTML="",e.appendChild(A.lastChild.cloneNode(!0)),C(0)},ae=e=>{xe(0),ke(window.location.href),V("katex"),qe("copy_tex"),V("mermaid");let t=new IntersectionObserver(function(o,s){o.forEach(i=>{if(i.isIntersecting){let r=i.target;r.style.backgroundImage=`url("${r.getAttribute("data-background-image")}")`,r.removeAttribute("data-background-image"),s.unobserve(r)}})},{root:null,threshold:.2});if(document.querySelectorAll("[data-background-image]").forEach(o=>{t.observe(o)}),e!==1&&d.each("script[data-pjax]",Ue),_e(document.title),z(),Fe(),je(),ze(),LOCAL.ispost){import("./post-43S2YZTZ.js").then(({postBeauty:s})=>{s()});let o=new IntersectionObserver(s=>{s.forEach(i=>{i.isIntersecting&&o.disconnect()})},{root:null,threshold:.2});o.observe(d("#copyright"))}ie(),Be(),g.hide(500),setTimeout(()=>{Ne()},500),Ye()};function x(e,t,o){return e instanceof HTMLCollection||e instanceof NodeList||e instanceof Array?Array.prototype.forEach.call(e,t,o):t.call(o,e,0,[e])}var ct=(e,t)=>{e=typeof e=="string"?e.split(" "):e,e.forEach(t)};function ce(e,t,o,s){ct(t,i=>{x(e,r=>{r.addEventListener(i,o,s)})})}function _(e,t,o={}){ct(t,s=>{let i=new CustomEvent(s,{bubbles:!0,cancelable:!0,...o});x(e,r=>{r.dispatchEvent(i)})})}function nt(e){let t=e.text||e.textContent||e.innerHTML||"",o=e.src||"",s=e.parentNode||document.querySelector("head")||document.documentElement,i=document.createElement("script");return t.match("document.write")?!1:(i.type="text/javascript",i.id=e.id,o!==""&&(i.src=o,i.async=!1),t!==""&&i.appendChild(document.createTextNode(t)),s.appendChild(i),(s instanceof HTMLHeadElement||s instanceof HTMLBodyElement)&&s.contains(i)&&s.removeChild(i),!0)}function ut(e){e.tagName.toLowerCase()==="script"&&nt(e),x(e.querySelectorAll("script"),t=>{let o=t;(!o.type||o.type.toLowerCase()==="text/javascript")&&(o.parentNode&&o.parentNode.removeChild(o),nt(o))})}function ft(e,t,o,s=document){e.forEach(i=>{x(s.querySelectorAll(i),t,o)})}var $=(()=>{let e=0;return()=>`pjax${new Date().getTime()}_${e++}`})();function lt(e,t){e.outerHTML=t.outerHTML,this.onSwitch()}function pt(e,t){e.innerHTML=t.innerHTML,t.className===""?e.removeAttribute("class"):e.className=t.className,this.onSwitch()}function rt(e,t){if(e.innerHTML=t.innerHTML,t.hasAttributes()){let o=t.attributes;for(let s=0;s<o.length;s++)e.attributes.setNamedItem(o[s].cloneNode())}this.onSwitch()}function gt({elements:e="a[href]",selectors:t=["title",".js-Pjax"],switches:o={},switchesOptions:s={},history:i=!0,scrollTo:r=0,scrollRestoration:c=!0,cacheBust:n=!0,timeout:a=0,currentUrlFullReload:l=!1}={}){let h={elements:e,selectors:t,switches:o,switchesOptions:s,history:i,scrollTo:r,scrollRestoration:c,cacheBust:n,timeout:a,currentUrlFullReload:l};return h.switches.head||(h.switches.head=rt),h.switches.body||(h.switches.body=rt),h}var F="data-pjax-state";function at(e,t){if(t.defaultPrevented||t.returnValue===!1)return;let o={...this.options},s=vt(e,t);if(s){e.setAttribute(F,s);return}if(t.preventDefault(),this.options.currentUrlFullReload&&e.href===window.location.href.split("#")[0]){e.setAttribute(F,"reload"),this.reload();return}e.setAttribute(F,"load"),o.triggerElement=e,this.loadUrl(e.href,o)}function vt(e,t){return t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey?"modifier":e.protocol!==window.location.protocol||e.host!==window.location.host?"external":e.hash&&e.href.replace(e.hash,"")===window.location.href.replace(location.hash,"")?"anchor":e.href===window.location.href.split("#")[0]+"#"?"anchor-empty":null}function wt(e){e.setAttribute(F,""),ce(e,"click",t=>at.call(this,e,t)),ce(e,"keyup",t=>{let o=t;o.keyCode===13&&at.call(this,e,o)})}function bt(e,t,o,s){if(s={...s||this.options},s.request=t,e===!1){_(document,"pjax:complete pjax:error",s);return}let i=window.history.state||{};window.history.replaceState({url:i.url||window.location.href,title:i.title||document.title,uid:i.uid||$(),scrollPos:[document.documentElement.scrollLeft||document.body.scrollLeft,document.documentElement.scrollTop||document.body.scrollTop]},document.title,window.location.href);let r=o;t.responseURL?o!==t.responseURL&&(o=t.responseURL):t.getResponseHeader("X-PJAX-URL")?o=t.getResponseHeader("X-PJAX-URL"):t.getResponseHeader("X-XHR-Redirected-To")&&(o=t.getResponseHeader("X-XHR-Redirected-To"));let c=document.createElement("a");c.href=r;let n=c.hash;c.href=o,n&&!c.hash&&(c.hash=n,o=c.href),this.state.href=o,this.state.options=s;try{this.loadContent(e,s)}catch(a){return _(document,"pjax:error",s),console.error("Pjax switch fail: ",a),this.latestChance(o)}}function yt(e){switch(e.tagName.toLowerCase()){case"a":e.hasAttribute("data-pjax-state")||this.attachLink(e);break;default:throw new Error("theme-shokax-pjax can only be applied on <a>")}}function Ct(e,t,o){let s=new RegExp("([?&])"+t+"=.*?(&|$)","i"),i=e.indexOf("?")!==-1?"&":"?";return e.match(s)?e.replace(s,"$1"+t+"="+o+"$2"):e+i+t+"="+o}function Lt(e,t={},o){let s=t.requestOptions||{},i=(s.requestMethod||"GET").toUpperCase(),r=s.requestParams||null,c=null,n=new XMLHttpRequest,a=t.timeout;if(n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?o(n.responseText,n,e,t):n.status!==0&&o(null,n,e,t))},n.onerror=l=>{console.error(l),o(null,n,e,t)},n.ontimeout=()=>{o(null,n,e,t)},r&&r.length){let l=r.map(h=>h.name+"="+h.value).join("&");switch(i){case"GET":e=e.split("?")[0],e+="?"+l;break;case"POST":c=l;break}}return t.cacheBust&&(e=Ct(e,"t",Date.now())),n.open(i,e,!0),n.timeout=a,n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.setRequestHeader("X-PJAX","true"),n.setRequestHeader("X-PJAX-Selectors",JSON.stringify(t.selectors)),n.send(c),n}function Et(e,t,o,s,i,r){let c=[];o.forEach(n=>{let a=s.querySelectorAll(n),l=i.querySelectorAll(n);if(a.length!==l.length)throw new Error(`DOM doesn't look the same on new loaded page: '${n}' - new ${a.length}, old ${l.length}`);x(a,(h,B)=>{let H=l[B],E=e[n]?e[n].bind(this,H,h,r,t[n]):lt.bind(this,H,h,r);c.push(E)},this)},this),this.state.numPendingSwitches=c.length,c.forEach(n=>{n()})}function At(e,t,o){for(let s of t){let i=e.querySelectorAll(s);for(let r=0;r<i.length;r++)if(i[r].contains(o))return!0}return!1}var L=class{constructor(t){this.state={numPendingSwitches:0,href:null,options:null},this.options=gt(t),this.options.scrollRestoration&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),this.maxUid=this.lastUid=$(),this.parseDOM(document),ce(window,"popstate",o=>{let s=o;if(s.state){let i={...this.options};i.url=s.state.url,i.title=s.state.title,i.history=!1,i.scrollPos=s.state.scrollPos,s.state.uid<this.lastUid?i.backward=!0:i.forward=!0,this.lastUid=s.state.uid,this.loadUrl(s.state.url,i)}})}getElements(t){return t.querySelectorAll(this.options.elements)}parseDOM(t){x(this.getElements(t),yt,this)}refresh(t){this.parseDOM(t||document)}reload(){window.location.reload()}forEachSelectors(t,o,s){return ft.bind(this)(this.options.selectors,t,o,s)}switchSelectors(t,o,s,i){return Et.bind(this)(this.options.switches,this.options.switchesOptions,t,o,s,i)}latestChance(t){window.location=t}onSwitch(){_(window,"resize scroll"),this.state.numPendingSwitches--,this.state.numPendingSwitches===0&&this.afterAllSwitches()}loadContent(t,o){if(typeof t!="string"){_(document,"pjax:complete pjax:error",o);return}let s=document.implementation.createHTMLDocument("pjax"),i=/<html[^>]+>/gi,r=/\s?[a-z:]+(?:=['"][^'">]+['"])*/gi,c=t.match(i);if(c&&c.length&&(c=c[0].match(r),c.length&&(c.shift(),c.forEach(n=>{let a=n.trim().split("=");a.length===1?s.documentElement.setAttribute(a[0],"true"):s.documentElement.setAttribute(a[0],a[1].slice(1,-1))}))),s.documentElement.innerHTML=t,document.activeElement&&At(document,this.options.selectors,document.activeElement))try{document.activeElement.blur()}catch{}this.switchSelectors(this.options.selectors,s,document,o)}loadUrl(t,o){o=typeof o=="object"?{...this.options,...o}:{...this.options},this.abortRequest(this.request),_(document,"pjax:send",o),this.request=this.doRequest(t,o,this.handleResponse.bind(this))}afterAllSwitches(){var t,o,s;this.options.selectors.forEach(r=>{x(document.querySelectorAll(r),c=>{ut(c)})});let i=this.state;if(!((t=i.options)===null||t===void 0)&&t.history&&(window.history.state||(this.lastUid=this.maxUid=$(),window.history.replaceState({url:window.location.href,title:document.title,uid:this.maxUid,scrollPos:[0,0]},document.title)),this.lastUid=this.maxUid=$(),window.history.pushState({url:i.href,title:i.options.title,uid:this.maxUid,scrollPos:[0,0]},i.options.title,i.href)),this.forEachSelectors(r=>{this.parseDOM(r)},this),_(document,"pjax:complete pjax:success",i.options),!((o=i.options)===null||o===void 0)&&o.history){let r=document.createElement("a");if(r.href=this.state.href,r.hash){let c=r.hash.slice(1);c=decodeURIComponent(c);let n=0,a=document.getElementById(c)||document.getElementsByName(c)[0];if(a&&a.offsetParent)do n+=a.offsetTop,a=a.offsetParent;while(a);window.scrollTo(0,n)}else i.options.scrollTo!==!1&&(Array.isArray(i.options.scrollTo)?window.scrollTo(i.options.scrollTo[0],i.options.scrollTo[1]):window.scrollTo(0,i.options.scrollTo))}else!((s=i.options)===null||s===void 0)&&s.scrollRestoration&&i.options.scrollPos&&window.scrollTo(i.options.scrollPos[0],i.options.scrollPos[1]);this.state={numPendingSwitches:0,href:null,options:null}}abortRequest(t){t&&t.readyState<4&&(t.onreadystatechange=()=>{},t.abort())}};L.prototype.attachLink=wt;L.prototype.doRequest=Lt;L.prototype.handleResponse=bt;L.switches={innerHTML:pt,outerHTML:lt};function dt(){function e(){let t,o=v(d(".theme"),".ic"),s=D(W,"div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'}),i=()=>{p(s,{delay:2500,opacity:0},()=>{W.removeChild(s)})};o.hasClass("i-sun")?t=()=>{s.addClass("dark"),b("dark"),M.set("theme","dark"),i()}:(s.addClass("dark"),t=()=>{s.removeClass("dark"),b(),M.set("theme","light"),i()}),p(s,1,()=>{setTimeout(t,210)},()=>{I(s,"block")})}v(d("#rightNav"),".theme .ic").addEventListener("click",e)}var Tt=()=>{dt(),K(),Se(new L({selectors:["head title",".languages",".twikoo",".pjax",".leancloud-recent-comment","script[data-config]"],cacheBust:!1})),u.quicklink.ignores=LOCAL.ignores,import("./quicklink-PBP5LYJX.js").then(({listen:e})=>{e(u.quicklink)}),We(),Ve(),Xe(),import("./index.esm-65FGYPP7.js").then(e=>{e.default(u.fireworks)}),window.addEventListener("scroll",Ze,{passive:!0}),window.addEventListener("resize",z,{passive:!0}),window.addEventListener("pjax:send",it,{passive:!0}),window.addEventListener("pjax:success",ae,{passive:!0}),window.addEventListener("beforeunload",()=>{j()}),ae(1)};De();window.addEventListener("DOMContentLoaded",Tt,{passive:!0});console.log("%c Theme.ShokaX v"+u.version+" %c https://github.com/theme-shoka-x/hexo-theme-shokaX ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");
/*! For license information please see siteInit.js.LEGAL.txt */
