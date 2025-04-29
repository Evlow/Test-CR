var $t=Object.defineProperty;var ft=(r,t,e)=>t in r?$t(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var f=(r,t,e)=>ft(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=globalThis,W=k.ShadowRoot&&(k.ShadyCSS===void 0||k.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),Z=new WeakMap;let ot=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(W&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Z.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Z.set(e,t))}return t}toString(){return this.cssText}};const mt=r=>new ot(typeof r=="string"?r:r+"",void 0,J),F=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new ot(e,r,J)},gt=(r,t)=>{if(W)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=k.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},G=W?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return mt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:_t,defineProperty:yt,getOwnPropertyDescriptor:vt,getOwnPropertyNames:At,getOwnPropertySymbols:bt,getPrototypeOf:xt}=Object,_=globalThis,Q=_.trustedTypes,Et=Q?Q.emptyScript:"",L=_.reactiveElementPolyfillSupport,P=(r,t)=>r,B={toAttribute(r,t){switch(t){case Boolean:r=r?Et:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},at=(r,t)=>!_t(r,t),X={attribute:!0,type:String,converter:B,reflect:!1,useDefault:!1,hasChanged:at};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);let E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=X){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&yt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=vt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:s,set(o){const c=s==null?void 0:s.call(this);n==null||n.call(this,o),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??X}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const t=xt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const e=this.properties,i=[...At(e),...bt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(G(s))}else t!==void 0&&e.push(G(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return gt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){var n;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:B).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){var n,o;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const c=i.getPropertyOptions(s),a=typeof c.converter=="function"?{fromAttribute:c.converter}:((n=c.converter)==null?void 0:n.fromAttribute)!==void 0?c.converter:B;this._$Em=s,this[s]=a.fromAttribute(e,c.type)??((o=this._$Ej)==null?void 0:o.get(s))??null,this._$Em=null}}requestUpdate(t,e,i){var s;if(t!==void 0){const n=this.constructor,o=this[t];if(i??(i=n.getPropertyOptions(t)),!((i.hasChanged??at)(o,e)||i.useDefault&&i.reflect&&o===((s=this._$Ej)==null?void 0:s.get(t))&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s){const{wrapped:c}=o,a=this[n];c!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,o,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[P("elementProperties")]=new Map,E[P("finalized")]=new Map,L==null||L({ReactiveElement:E}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,R=U.trustedTypes,Y=R?R.createPolicy("lit-html",{createHTML:r=>r}):void 0,ct="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,ht="?"+g,St=`<${ht}>`,x=document,N=()=>x.createComment(""),O=r=>r===null||typeof r!="object"&&typeof r!="function",K=Array.isArray,wt=r=>K(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",z=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,et=/>/g,v=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),st=/'/g,it=/"/g,lt=/^(?:script|style|textarea|title)$/i,Ct=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),u=Ct(1),S=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),rt=new WeakMap,A=x.createTreeWalker(x,129);function dt(r,t){if(!K(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Y!==void 0?Y.createHTML(t):t}const Pt=(r,t)=>{const e=r.length-1,i=[];let s,n=t===2?"<svg>":t===3?"<math>":"",o=C;for(let c=0;c<e;c++){const a=r[c];let l,p,h=-1,$=0;for(;$<a.length&&(o.lastIndex=$,p=o.exec(a),p!==null);)$=o.lastIndex,o===C?p[1]==="!--"?o=tt:p[1]!==void 0?o=et:p[2]!==void 0?(lt.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=v):p[3]!==void 0&&(o=v):o===v?p[0]===">"?(o=s??C,h=-1):p[1]===void 0?h=-2:(h=o.lastIndex-p[2].length,l=p[1],o=p[3]===void 0?v:p[3]==='"'?it:st):o===it||o===st?o=v:o===tt||o===et?o=C:(o=v,s=void 0);const m=o===v&&r[c+1].startsWith("/>")?" ":"";n+=o===C?a+St:h>=0?(i.push(l),a.slice(0,h)+ct+a.slice(h)+g+m):a+g+(h===-2?c:m)}return[dt(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class M{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const c=t.length-1,a=this.parts,[l,p]=Pt(t,e);if(this.el=M.createElement(l,i),A.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=A.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(ct)){const $=p[o++],m=s.getAttribute(h).split(g),T=/([.?@])?(.*)/.exec($);a.push({type:1,index:n,name:T[2],strings:m,ctor:T[1]==="."?Nt:T[1]==="?"?Ot:T[1]==="@"?Mt:I}),s.removeAttribute(h)}else h.startsWith(g)&&(a.push({type:6,index:n}),s.removeAttribute(h));if(lt.test(s.tagName)){const h=s.textContent.split(g),$=h.length-1;if($>0){s.textContent=R?R.emptyScript:"";for(let m=0;m<$;m++)s.append(h[m],N()),A.nextNode(),a.push({type:2,index:++n});s.append(h[$],N())}}}else if(s.nodeType===8)if(s.data===ht)a.push({type:2,index:n});else{let h=-1;for(;(h=s.data.indexOf(g,h+1))!==-1;)a.push({type:7,index:n}),h+=g.length-1}n++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function w(r,t,e=r,i){var o,c;if(t===S)return t;let s=i!==void 0?(o=e._$Co)==null?void 0:o[i]:e._$Cl;const n=O(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((c=s==null?void 0:s._$AO)==null||c.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=w(r,s._$AS(r,t.values),s,i)),t}class Ut{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??x).importNode(e,!0);A.currentNode=s;let n=A.nextNode(),o=0,c=0,a=i[0];for(;a!==void 0;){if(o===a.index){let l;a.type===2?l=new H(n,n.nextSibling,this,t):a.type===1?l=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(l=new Ht(n,this,t)),this._$AV.push(l),a=i[++c]}o!==(a==null?void 0:a.index)&&(n=A.nextNode(),o++)}return A.currentNode=x,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class H{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),O(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):wt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=M.createElement(dt(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(e);else{const o=new Ut(s,this),c=o.u(this.options);o.p(e),this.T(c),this._$AH=o}}_$AC(t){let e=rt.get(t.strings);return e===void 0&&rt.set(t.strings,e=new M(t)),e}k(t){K(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new H(this.O(N()),this.O(N()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class I{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(n===void 0)t=w(this,t,e,0),o=!O(t)||t!==this._$AH&&t!==S,o&&(this._$AH=t);else{const c=t;let a,l;for(t=n[0],a=0;a<n.length-1;a++)l=w(this,c[i+a],e,a),l===S&&(l=this._$AH[a]),o||(o=!O(l)||l!==this._$AH[a]),l===d?t=d:t!==d&&(t+=(l??"")+n[a+1]),this._$AH[a]=l}o&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Nt extends I{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Ot extends I{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Mt extends I{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=w(this,t,e,0)??d)===S)return;const i=this._$AH,s=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ht{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const D=U.litHtmlPolyfillSupport;D==null||D(M,H),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.3.0");const Tt=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const n=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new H(t.insertBefore(N(),n),n,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=globalThis;class y extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Tt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return S}}var nt;y._$litElement$=!0,y.finalized=!0,(nt=b.litElementHydrateSupport)==null||nt.call(b,{LitElement:y});const j=b.litElementPolyfillSupport;j==null||j({LitElement:y});(b.litElementVersions??(b.litElementVersions=[])).push("4.2.0");const kt=F`@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap\";header{display:flex;justify-content:space-between;align-items:center;height:40px;width:100vw;position:relative}.left,.right{display:flex;align-items:center}.top-left{position:relative}.home-container{display:none;position:absolute;top:100%;left:0;width:100vw;background-color:#fff;border-bottom:1px solid #c3d1e1;padding:12px;z-index:100}.home-container.show{display:block}.create-search-container{display:flex;gap:16px;height:78px;align-items:center}.icon-button{display:flex;align-items:center;justify-content:center;background:transparent;border:none;cursor:pointer}.icon-button.active{background-color:#fff;border-radius:4px}.icon{width:24px;height:24px;padding:8px 12px}.icon-profile{width:40px;height:40px}.spacer-icon,.spacer-icon-top-bar{width:1px;height:40px}.spacer-icon-top-bar{height:78px}.create-button{border:none;cursor:pointer;display:flex;background-color:transparent;padding:4px 0}.create-content{display:flex;flex-direction:column;align-items:center;gap:4px}.create-text{font-size:14px;margin-bottom:4px}.create-icon-img{width:30px;height:30px}.search-bar{display:flex;flex-direction:column}.search-bar>div{display:flex;align-items:center;margin-top:5px}.search-bar input{padding:6px 8px;border-radius:6px 0 0 6px;border:1px solid #a3b1c2;border-right:none;font-style:italic;width:190px}.search-button{height:30px;display:flex;align-items:center;justify-content:center;background:#1565c0;border:none;border-radius:0 6px 6px 0;padding:6px 10px;cursor:pointer}.search-icon{width:16px;height:16px}.top-bar{width:100%;border-top:1px solid #c3d1e1;padding-bottom:20px}`;class pt extends y{constructor(){super(...arguments);f(this,"icons",[{name:"home",path:"/assets/home.svg",alt:"icone d'accueil",position:"left",className:"icon"},{name:"star",path:"/assets/star.svg",alt:"icone favoris",position:"right",className:"icon"},{name:"settings",path:"/assets/settings.svg",alt:"icone réglages",position:"right",className:"icon"},{name:"support",path:"/assets/support.svg",alt:"icone aide",position:"right",className:"icon"},{name:"mail",path:"/assets/mail.svg",alt:"icone mail",position:"right",className:"icon"},{name:"notifications",path:"/assets/notifications.svg",alt:"icone notifications",position:"right",className:"icon"},{name:"profil",path:"/assets/avatar.svg",alt:"icone profil",position:"right",className:"icon-profile"}]);f(this,"activeIcon","home")}handleIconClick(e){e!==this.activeIcon&&(this.activeIcon=e),this.requestUpdate()}handleCreateClick(){const e=new CustomEvent("create-card",{detail:{message:"Créer une nouvelle carte"},bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){return u`
      <header>
        <div class="left">
          <div class="top-left">
            ${this.icons.filter(e=>e.position==="left").map(e=>u`
                  <button
                    class="icon-button ${this.activeIcon===e.name?"active":""}"
                    @click="${()=>this.handleIconClick(e.name)}"
                  >
                    <img
                      src="${e.path}"
                      alt="${e.alt}"
                      class="${e.className}"
                    />
                  </button>
                `)}
          </div>
        </div>

        <!-- Menu sous l'icône home -->
        <div class="home-container ${this.activeIcon==="home"?"show":""}">
          <div class="create-search-container">
            <div class="create-content">
              <span class="create-text">Créer</span>
              <button class="create-button" @click="${this.handleCreateClick}">
                <img
                  src="/assets/button.svg"
                  alt="icone créer"
                  class="create-icon-img"
                />
              </button>
            </div>

            <img
              src="/assets/spacers.svg"
              alt="spacer"
              class="spacer-icon-top-bar"
            />

            <div class="search-bar">
              <span class="create-text">Rechercher</span>
              <div>
                <input
                  type="text"
                  placeholder="Nom d'une ressource"
                  @input="${this.handleSearchInput}"
                />
                <button
                  class="search-button"
                  @click="${this.handleSearchClick}"
                >
                  <img
                    src="/assets/search.svg"
                    alt="icone recherche"
                    class="search-icon"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Partie droite du header -->
        <div class="right">
          ${this.icons.filter(e=>e.position==="right").map((e,i,s)=>u`
                <img
                  src="${e.path}"
                  alt="${e.alt}"
                  class="${e.className}"
                  @click="${()=>this.handleIconClick(e.name)}"
                />
                ${i<s.length-2?u`
                      <img
                        src="/assets/spacers.svg"
                        alt="spacer"
                        class="spacer-icon"
                      />
                    `:""}
              `)}
        </div>
      </header>
    `}}f(pt,"styles",kt);customElements.define("header-component",pt);const Rt=F`@import\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap\";.card{border:1px solid red;padding:10px;width:200px;border-radius:8px;box-shadow:0 2px 6px #0000001a}.content img{width:100%;border-radius:4px}.title{font-weight:700;margin-top:10px}.description{font-size:.9rem;color:#666}`;class q extends y{constructor(){super(),this.title="Titre de la carte",this.description="Description de la carte",this.photoUrl=" /assets/picture.webp"}render(){return u`
      <div class="card-container">
        <div class="card">
          <div class="content">
            <img src="${this.photoUrl}" alt="${this.title}" />
            <div class="title">${this.title}</div>
            <div class="description">${this.description}</div>
          </div>
        </div>
      </div>
    `}}f(q,"styles",Rt),f(q,"properties",{title:{type:String},description:{type:String},photoUrl:{type:String}});customElements.define("item-card",q);const It=F`.cards-container{margin-top:100px;padding:24px;background-color:#f9f9f9;min-height:300px}.cards-container__title{font-size:1.5rem;margin-bottom:16px;color:#333}.cards-container__list{display:flex;flex-wrap:wrap;gap:16px}.cards-container__empty-message{font-style:italic;color:#888;margin-top:32px;text-align:center}`;class V extends y{constructor(){super(),this.cards=[]}render(){return u`
      <div class="cards-container">
        <h2 class="cards-container__title">Mes ressources</h2>

        ${this.cards.length>0?u`
              <div class="cards-container__list">
                ${this.cards.map(t=>u`
                    <item-card
                      .title="${t.title}"
                      .description="${t.description}"
                      .photoUrl="${t.photoUrl}"
                    ></item-card>
                  `)}
              </div>
            `:u`
              <p class="cards-container__empty-message">
                Aucune carte disponible.
              </p>
            `}
      </div>
    `}}f(V,"styles",It),f(V,"properties",{cards:{type:Array}});customElements.define("cards-container",V);class ut extends y{constructor(){super();const t=localStorage.getItem("cards");this.cards=t?JSON.parse(t):[]}addCard(){const t={title:`Carte ${this.cards.length+1}`,description:"Description générée dynamiquement.",photoUrl:"/assets/picture.webp"};this.cards=[...this.cards,t],localStorage.setItem("cards",JSON.stringify(this.cards))}handleCreateCard(){this.addCard()}connectedCallback(){super.connectedCallback(),this.addEventListener("create-card",this.handleCreateCard)}render(){return u`
      <header-component></header-component>
      <cards-container .cards="${this.cards}"></cards-container>
    `}}f(ut,"properties",{cards:{type:Array}});customElements.define("main-application",ut);
