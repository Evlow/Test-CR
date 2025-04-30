var ge=Object.defineProperty;var $e=(r,e,t)=>e in r?ge(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var u=(r,e,t)=>$e(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,K=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),Q=new WeakMap;let ce=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(K&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=Q.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Q.set(t,e))}return e}toString(){return this.cssText}};const be=r=>new ce(typeof r=="string"?r:r+"",void 0,J),O=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,i,a)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[a+1],r[0]);return new ce(t,r,J)},ve=(r,e)=>{if(K)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=H.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},X=K?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return be(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ye,defineProperty:xe,getOwnPropertyDescriptor:_e,getOwnPropertyNames:Ae,getOwnPropertySymbols:we,getPrototypeOf:Ee}=Object,v=globalThis,Y=v.trustedTypes,Ce=Y?Y.emptyScript:"",j=v.reactiveElementPolyfillSupport,N=(r,e)=>r,B={toAttribute(r,e){switch(e){case Boolean:r=r?Ce:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},le=(r,e)=>!ye(r,e),ee={attribute:!0,type:String,converter:B,reflect:!1,useDefault:!1,hasChanged:le};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),v.litPropertyMetadata??(v.litPropertyMetadata=new WeakMap);let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ee){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&xe(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:a}=_e(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:i,set(n){const c=i==null?void 0:i.call(this);a==null||a.call(this,n),this.requestUpdate(e,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ee}static _$Ei(){if(this.hasOwnProperty(N("elementProperties")))return;const e=Ee(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(N("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(N("properties"))){const t=this.properties,s=[...Ae(t),...we(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(X(i))}else e!==void 0&&t.push(X(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ve(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var a;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const n=(((a=s.converter)==null?void 0:a.toAttribute)!==void 0?s.converter:B).toAttribute(t,s.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){var a,n;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const c=s.getPropertyOptions(i),o=typeof c.converter=="function"?{fromAttribute:c.converter}:((a=c.converter)==null?void 0:a.fromAttribute)!==void 0?c.converter:B;this._$Em=i,this[i]=o.fromAttribute(t,c.type)??((n=this._$Ej)==null?void 0:n.get(i))??null,this._$Em=null}}requestUpdate(e,t,s){var i;if(e!==void 0){const a=this.constructor,n=this[e];if(s??(s=a.getPropertyOptions(e)),!((s.hasChanged??le)(n,t)||s.useDefault&&s.reflect&&n===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(a._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:a},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),a!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,n]of this._$Ep)this[a]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[a,n]of i){const{wrapped:c}=n,o=this[a];c!==!0||this._$AL.has(a)||o===void 0||this.C(a,void 0,n,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var a;return(a=i.hostUpdate)==null?void 0:a.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[N("elementProperties")]=new Map,w[N("finalized")]=new Map,j==null||j({ReactiveElement:w}),(v.reactiveElementVersions??(v.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,z=P.trustedTypes,te=z?z.createPolicy("lit-html",{createHTML:r=>r}):void 0,de="$lit$",b=`lit$${Math.random().toFixed(9).slice(2)}$`,he="?"+b,Se=`<${he}>`,A=document,U=()=>A.createComment(""),T=r=>r===null||typeof r!="object"&&typeof r!="function",G=Array.isArray,Ne=r=>G(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",I=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,se=/-->/g,ie=/>/g,y=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),re=/'/g,ae=/"/g,pe=/^(?:script|style|textarea|title)$/i,Pe=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),m=Pe(1),E=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),ne=new WeakMap,x=A.createTreeWalker(A,129);function ue(r,e){if(!G(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return te!==void 0?te.createHTML(e):e}const Ue=(r,e)=>{const t=r.length-1,s=[];let i,a=e===2?"<svg>":e===3?"<math>":"",n=S;for(let c=0;c<t;c++){const o=r[c];let d,p,l=-1,g=0;for(;g<o.length&&(n.lastIndex=g,p=n.exec(o),p!==null);)g=n.lastIndex,n===S?p[1]==="!--"?n=se:p[1]!==void 0?n=ie:p[2]!==void 0?(pe.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=y):p[3]!==void 0&&(n=y):n===y?p[0]===">"?(n=i??S,l=-1):p[1]===void 0?l=-2:(l=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?y:p[3]==='"'?ae:re):n===ae||n===re?n=y:n===se||n===ie?n=S:(n=y,i=void 0);const $=n===y&&r[c+1].startsWith("/>")?" ":"";a+=n===S?o+Se:l>=0?(s.push(d),o.slice(0,l)+de+o.slice(l)+b+$):o+b+(l===-2?c:$)}return[ue(r,a+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class k{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let a=0,n=0;const c=e.length-1,o=this.parts,[d,p]=Ue(e,t);if(this.el=k.createElement(d,s),x.currentNode=this.el.content,t===2||t===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=x.nextNode())!==null&&o.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(de)){const g=p[n++],$=i.getAttribute(l).split(b),R=/([.?@])?(.*)/.exec(g);o.push({type:1,index:a,name:R[2],strings:$,ctor:R[1]==="."?ke:R[1]==="?"?Oe:R[1]==="@"?Me:L}),i.removeAttribute(l)}else l.startsWith(b)&&(o.push({type:6,index:a}),i.removeAttribute(l));if(pe.test(i.tagName)){const l=i.textContent.split(b),g=l.length-1;if(g>0){i.textContent=z?z.emptyScript:"";for(let $=0;$<g;$++)i.append(l[$],U()),x.nextNode(),o.push({type:2,index:++a});i.append(l[g],U())}}}else if(i.nodeType===8)if(i.data===he)o.push({type:2,index:a});else{let l=-1;for(;(l=i.data.indexOf(b,l+1))!==-1;)o.push({type:7,index:a}),l+=b.length-1}a++}}static createElement(e,t){const s=A.createElement("template");return s.innerHTML=e,s}}function C(r,e,t=r,s){var n,c;if(e===E)return e;let i=s!==void 0?(n=t._$Co)==null?void 0:n[s]:t._$Cl;const a=T(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==a&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),a===void 0?i=void 0:(i=new a(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=C(r,i._$AS(r,e.values),i,s)),e}class Te{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??A).importNode(t,!0);x.currentNode=i;let a=x.nextNode(),n=0,c=0,o=s[0];for(;o!==void 0;){if(n===o.index){let d;o.type===2?d=new M(a,a.nextSibling,this,e):o.type===1?d=new o.ctor(a,o.name,o.strings,this,e):o.type===6&&(d=new Re(a,this,e)),this._$AV.push(d),o=s[++c]}n!==(o==null?void 0:o.index)&&(a=x.nextNode(),n++)}return x.currentNode=A,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class M{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=C(this,e,t),T(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==E&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ne(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){var a;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=k.createElement(ue(s.h,s.h[0]),this.options)),s);if(((a=this._$AH)==null?void 0:a._$AD)===i)this._$AH.p(t);else{const n=new Te(i,this),c=n.u(this.options);n.p(t),this.T(c),this._$AH=n}}_$AC(e){let t=ne.get(e.strings);return t===void 0&&ne.set(e.strings,t=new k(e)),t}k(e){G(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const a of e)i===t.length?t.push(s=new M(this.O(U()),this.O(U()),this,this.options)):s=t[i],s._$AI(a),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,a){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(e,t=this,s,i){const a=this.strings;let n=!1;if(a===void 0)e=C(this,e,t,0),n=!T(e)||e!==this._$AH&&e!==E,n&&(this._$AH=e);else{const c=e;let o,d;for(e=a[0],o=0;o<a.length-1;o++)d=C(this,c[s+o],t,o),d===E&&(d=this._$AH[o]),n||(n=!T(d)||d!==this._$AH[o]),d===h?e=h:e!==h&&(e+=(d??"")+a[o+1]),this._$AH[o]=d}n&&!i&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ke extends L{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}}class Oe extends L{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}}class Me extends L{constructor(e,t,s,i,a){super(e,t,s,i,a),this.type=5}_$AI(e,t=this){if((e=C(this,e,t,0)??h)===E)return;const s=this._$AH,i=e===h&&s!==h||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,a=e!==h&&(s===h||i);i&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Re{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){C(this,e)}}const D=P.litHtmlPolyfillSupport;D==null||D(k,M),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.3.0");const He=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const a=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new M(e.insertBefore(U(),a),a,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=globalThis;class f extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=He(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return E}}var oe;f._$litElement$=!0,f.finalized=!0,(oe=_.litElementHydrateSupport)==null||oe.call(_,{LitElement:f});const q=_.litElementPolyfillSupport;q==null||q({LitElement:f});(_.litElementVersions??(_.litElementVersions=[])).push("4.2.0");const ze=O`@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap\";header{display:flex;justify-content:space-between;height:40px;width:100vw;position:relative}.top-bar{height:32px}.top-left{position:relative}.top-content-tool{display:flex;align-items:center;gap:16px;height:78px;padding-left:24px;border-bottom:1px solid #c3d1e1}nav{display:flex;flex-direction:row;gap:8px}.icon,.icon-home,.icon-profile,.create-icon-img{width:24px;height:24px}.icon-profile{width:40px;height:40px}.icon-home{padding:8px 12px}.create-icon-img{width:30px;height:30px}.icon-button,.create-button{display:flex;align-items:center;justify-content:center;background:transparent;border:none;cursor:pointer;position:relative}.icon-button.active{background-color:#fff}.create-button{display:flex;background-color:transparent}.create-content{display:flex;flex-direction:column;align-items:center;gap:4px}.create-text{font-size:14px}.home-container{display:none;position:absolute;top:100%;width:100vw;background-color:#fff;border-bottom:1px solid #c3d1e1;z-index:100}.home-container.show{display:block}.notification-badge{position:absolute;top:3px;right:-2px;background-color:#eb6200;color:#fff;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:12px;z-index:10}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0;white-space:nowrap}`,Le=O`@import\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap\";.search-bar{display:flex;flex-direction:column}.search-bar>div{display:flex;margin-top:5px}.search-bar input{width:190px;padding:6px 8px;border:1px solid #c3d1e1;border-right:none;border-radius:6px 0 0 6px;font-style:italic;font-size:13px;color:#12171b;background-color:#fff}.search-bar label{font-size:14px;font-weight:500}.search-bar .search-button{height:30px;padding:6px 10px;display:flex;align-items:center;justify-content:center;background-color:#1565c0;border:none;border-radius:0 6px 6px 0;cursor:pointer}.search-bar .search-button .search-icon{width:16px;height:16px}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}`;class V extends f{constructor(){super(),this.query=""}preventSubmit(e){e.preventDefault()}handleSearchInput(e){this.query=e.target.value,this.dispatchEvent(new CustomEvent("search-input",{detail:{query:this.query},bubbles:!0,composed:!0}))}handleSearchClick(){this.dispatchEvent(new CustomEvent("search-click",{detail:{query:this.query},bubbles:!0,composed:!0}))}render(){return m`
      <form class="search-bar"  @submit="${this.preventSubmit}">
        <label for="search-input">Rechercher</label>
        <div>
          <input
            id="search-input"
            type="text"
            placeholder="Nom d'une ressource"
            .value="${this.query}"
            @input="${this.handleSearchInput}"
            aria-label="Rechercher une ressource"
            aria-describedby="search-description"
          />

          <span id="search-description" class="sr-only">
            Entrez le nom d'une ressource pour la rechercher
          </span>

          <button
            type="button"
            class="search-button"
            @click="${this.handleSearchClick}"
            aria-label="Lancer la recherche"
          >
            <img
              src="/assets/search.svg"
              alt=""
              role="presentation"
              class="search-icon"
            />
          </button>
        </div>
      </form>
    `}}u(V,"styles",Le),u(V,"properties",{query:{type:String}});customElements.define("search-bar",V);class me extends f{constructor(){super(...arguments);u(this,"icons",[{name:"home",path:"/assets/home.svg",alt:"Aller à la page d'accueil",position:"left",className:"icon-home"},{name:"star",path:"/assets/star.svg",alt:"Accéder aux favoris",position:"right",className:"icon"},{name:"settings",path:"/assets/settings.svg",alt:"Accéder aux paramètres",position:"right",className:"icon"},{name:"support",path:"/assets/support.svg",alt:"Obtenir de l'aide",position:"right",className:"icon"},{name:"mail",path:"/assets/mail.svg",alt:"Accéder à vos messages",position:"right",className:"icon",mailNumber:4},{name:"notifications",path:"/assets/notifications.svg",alt:"Voir les notifications",position:"right",className:"icon"},{name:"profil",path:"/assets/avatar.svg",alt:"Accéder à votre profil",position:"right",className:"icon-profile"}]);u(this,"activeIcon","home")}handleIconClick(t){t!==this.activeIcon&&(this.activeIcon=t),this.requestUpdate()}handleCreateClick(){const t=new CustomEvent("create-card",{detail:{message:"Créer une nouvelle carte"},bubbles:!0,composed:!0});this.dispatchEvent(t)}handleSearch(t){const s=t.detail.query,i=new CustomEvent("search-input",{detail:{query:s},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){return m`
      <header>
        <div class="left">
          <div class="top-left">
            <nav aria-label="Navigation gauche">
              ${this.icons.filter(t=>t.position==="left").map(t=>m`
                    <button
                      class="icon-button ${this.activeIcon===t.name?"active":""}"
                      @click="${()=>this.handleIconClick(t.name)}"
                      aria-label="${t.alt}"
                    >
                      <img
                        src="${t.path}"
                        class="${t.className}"
                        aria-hidden="true"
                      />
                    </button>
                  `)}
            </nav>
          </div>
        </div>

        <!-- Menu sous l'icône home -->
        <div class="home-container ${this.activeIcon==="home"?"show":""}">
          <div class="top-content-tool">
            <div class="create-content">
              <span class="create-text">Créer</span>
              <button class="create-button" @click="${this.handleCreateClick}">
                <img
                  src="/assets/button.svg"
                  alt="Créer une ressource"
                  class="create-icon-img"
                />
              </button>
            </div>

            <img
              src="/assets/spacers.svg"
              aria-hidden="true"
              class="spacer-icon-top-bar"
            />
            <search-bar @search-input="${this.handleSearch}"></search-bar>
          </div>
          <div class="top-bar"></div>
        </div>

        <div class="right">
          <nav aria-label="Navigation droite">
            ${this.icons.filter(t=>t.position==="right").map((t,s,i)=>m`
                  <button
                    class="icon-button ${this.activeIcon===t.name?"active":""}"
                    aria-label="${t.alt}"
                  >
                    <img
                      src="${t.path}"
                      alt="${t.alt}"
                      class="${t.className}"
                      aria-hidden="true"
                    />
                    ${t.name==="mail"&&t.mailNumber?m`
                          <div class="notification-badge">
                            ${t.mailNumber}
                          </div>
                        `:""}
                  </button>
                  ${s<i.length-2?m`
                        <img
                          src="/assets/spacers.svg"
                          aria-hidden="true"
                          class="spacer-icon"
                        />
                      `:""}
                `)}
          </nav>
        </div>
      </header>
    `}}u(me,"styles",ze);customElements.define("header-component",me);const je=O`@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap\";.card-container{display:flex;justify-content:center;gap:16px}.card{width:280px;height:407px;border-radius:8px;background-color:#fff;display:flex;flex-direction:column}.card-header{display:flex;align-items:center;gap:12px;height:44px;padding:4px}.card-header .checkbox{align-self:center}.card-header .icon{font-size:24px;align-self:center}.avatar{display:flex;align-items:center;gap:8px;padding-left:12px}.avatar img{width:24px;height:24px;border-radius:50%}.card-media img{width:100%;height:120px;object-fit:cover}.card-content{display:flex;flex-direction:column;gap:16px;height:183px;padding:8px 16px 0}.name,.description{margin:0;width:248px;height:43.5px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.name{font-size:14px;font-weight:500}.description{font-size:13px;color:#627184}.meta{display:flex;flex-direction:column;width:248px;height:32px}.meta-labels,.meta-values{display:flex;justify-content:space-between;font-size:12px;font-weight:500}.meta-labels{color:#12171b}.meta-values{color:#627184}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0;white-space:nowrap}`,Ie=O`.icons-container{display:flex;gap:16px;margin:0 auto;align-items:center;justify-content:center}button{display:flex;align-items:center;justify-content:center;background:transparent;border:none;cursor:pointer;position:relative}`;class Z extends f{constructor(){super(),this.icons=[],this.iconSize="24px"}render(){return m`
      <div class="icons-container">
        ${this.icons.map(e=>m`
            <button
              type="button"
              class="icon-button"
              @click="${()=>this.handleIconClick(e)}"
              aria-label="${e.label}"
            >
              <img
                src="${e.path}"
                alt=""
                style="width: ${this.iconSize}; height: ${this.iconSize};"
              />
            </button>
          `)}
      </div>
    `}}u(Z,"styles",Ie),u(Z,"properties",{icons:{type:Array},iconSize:{type:String}});customElements.define("icons-component",Z);class W extends f{constructor(){super(),this.card={},this.icons=[{name:"eye",path:"/assets/eye.svg",label:"Aperçu"},{name:"brush",path:"/assets/brush.svg",label:"Modifier"},{name:"copy",path:"/assets/copy.svg",label:"Copier"},{name:"delete",path:"/assets/delete.svg",label:"Supprimer"},{name:"more",path:"/assets/more.svg",label:"Plus d’options"}]}formatDate(e){if(!e)return"";const t={year:"numeric",month:"2-digit",day:"2-digit"};return new Intl.DateTimeFormat("fr-FR",t).format(new Date(e))}render(){const{name:e,userName:t,description:s,photoUrl:i,edit:a,application:n,avatar:c}=this.card;return m`
      <article class="card-container">
        <section class="card">
          <div class="card-header">
            <label class="checkbox-label">
              <input type="checkbox" class="checkbox" />
              <span class="sr-only">Sélectionner cette carte</span>
            </label>
            <div class="avatar">
              <img src="${c}" alt="Avatar de ${t}" />
              <h1 class="username">${t}</h1>
            </div>
          </div>

          <div class="card-media">
            <img src="${i}" alt="${e}" loading="lazy" />
          </div>

          <div class="card-content">
            <h2 class="name">${e}</h2>
            <p class="description">${s}</p>
            <div class="meta">
              <div class="meta-labels">
                <span>Modifié le</span>
                <span>Application</span>
              </div>
              <div class="meta-values">
                <span>${this.formatDate(a)}</span>
                <span>${n}</span>
              </div>
            </div>
          </div>
          <icons-component .icons="${this.icons}"></icons-component>
        </section>
      </article>
    `}}u(W,"styles",je),u(W,"properties",{card:{type:Object}});customElements.define("item-card",W);const De=O`.cards-container{margin-top:120px;padding:24px;display:flex;flex-wrap:wrap;gap:20px}.cards-container p{font-size:20px;text-align:center;margin:20px 0}@media (max-width: 768px){.cards-container{flex-direction:column;align-items:center}}@media (min-width: 769px){.cards-container{flex-direction:row}}`;class F extends f{constructor(){super(),this.cards=[]}render(){return m`
      <div
        class="cards-container"
        aria-label="Liste des cartes"
        aria-live="polite"
        aria-relevant="additions removals"
      >
        ${this.cards.length===0?m`<p>Aucune carte trouvée.</p>`:this.cards.map(e=>m`
                <item-card
                  .card="${e}"
                  role="listitem"
                  aria-label="${e.name}: ${e.description}"
                ></item-card>
              `)}
      </div>
    `}}u(F,"styles",De),u(F,"properties",{cards:{type:Array}});customElements.define("cards-container",F);class fe extends f{constructor(){super(),this.cards=[],this.allCards=[],this.displayedCards=[],this.initializeCards(),this.addCard()}initializeCards(){this.allCards=[{id:"056a3b1b-0ce7-11ed-81fc-71bc641d1d18",name:"Paris",userName:"Morgane",description:"Capitale de la France, Paris est célèbre pour son histoire, sa culture et sa mode.",photoUrl:"/public/assets/paris.webp",avatar:"/public/assets/morgane.jpg",edit:"2024-12-10T14:30:00Z",application:"Application de Paris"},{id:"1f6b7c9a-0ce7-11ed-81fc-71bc641d1d18",name:"Marseille",userName:"Karim",description:"Ville portuaire méditerranéenne, Marseille est un mélange de cultures et d'histoire.",photoUrl:"/public/assets/marseille.webp",avatar:"/public/assets/karim.jpg",application:"Application de Marseille",edit:"2024-12-10T14:30:00Z"},{id:"2a9c8d5e-0ce7-11ed-81fc-71bc641d1d18",name:"Lyon",userName:"June",description:"Célèbre pour sa cuisine et son patrimoine historique, Lyon est un centre gastronomique.",photoUrl:"/public/assets/lyon.webp",avatar:"/public/assets/june.jpg",application:"Application de Lyon",edit:"2024-12-10T14:30:00Z"},{id:"3b3d9e7f-0ce7-11ed-81fc-71bc641d1d18",name:"Nice",userName:"Bernard",description:"Nice, sur la Côte d'Azur, est connue pour ses plages, son climat et sa promenade des Anglais.",photoUrl:"/public/assets/nice.webp",avatar:"/public/assets/bernard.jpg",application:"Application de Nice",edit:"2024-12-10T14:30:00Z"},{id:"4c4e0f0a-0ce7-11ed-81fc-71bc641d1d18",name:"Toulouse",userName:"Camille",description:"Ville rose, Toulouse est reconnue pour son architecture et son aérospatial.",photoUrl:"/public/assets/toulouse.webp",avatar:"/public/assets/camille.jpg",application:"Application de Toulouse",edit:"2024-12-10T14:30:00Z"},{id:"5d5f1a1b-0ce7-11ed-81fc-71bc641d1d18",name:"Bordeaux",userName:"Kévin",description:"Bordeaux est célèbre pour son vin et son architecture classée au patrimoine mondial.",photoUrl:"/public/assets/bordeaux.webp",avatar:"/public/assets/kevin.jpg",application:"Application de Bordeaux",edit:"2024-12-10T14:30:00Z"},{id:"6e6f2b2c-0ce7-11ed-81fc-71bc641d1d18",name:"Lille",userName:"Sylvie",description:"Lille est une ville dynamique, alliant culture flamande et architecture typique du nord.",photoUrl:"/public/assets/lille.webp",avatar:"/public/assets/sylvie.png",application:"Application de Lille",edit:"2024-12-10T14:30:00Z"},{id:"d3m9i9j3-0ce7-11ed-81fc-71bc641d1d18",name:"Cannes",userName:"Justine",description:"Cannes est une ville mondialement connue pour son festival du film et ses plages.",photoUrl:"/public/assets/cannes.webp",avatar:"/public/assets/justine.png",iconClass:"my-icon-class",application:"Application de Cannes",edit:"2024-12-10T14:30:00Z"}]}getRandomCard(){return Math.floor(Math.random()*this.allCards.length)}addCard(){const e=this.getRandomCard(),t=this.allCards[e];this.displayedCards=[...this.displayedCards,t],this.cards=[...this.displayedCards]}handleCreateCard(){this.addCard()}connectedCallback(){super.connectedCallback(),this.addEventListener("create-card",this.handleCreateCard),this.debounceSearch=this.debounce(this.searchCards,300),this.addEventListener("search-input",e=>this.debounceSearch(e.detail.query))}debounce(e,t=300){let s;return(...i)=>{clearTimeout(s),s=setTimeout(()=>{e.apply(this,i)},t)}}searchCards(e){e=e.toLowerCase().trim(),this.cards=e?this.displayedCards.filter(t=>t.name.toLowerCase().includes(e)):[...this.displayedCards]}render(){return m`
      <header-component></header-component>
      <cards-container .cards="${this.cards}"> </cards-container>
    `}}u(fe,"properties",{cards:{type:Array},allCards:{type:Array},displayedCards:{type:Array}});customElements.define("main-application",fe);
