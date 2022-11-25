(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function P5(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Ki="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xi=P5(Ki);function W9(e){return!!e||e===""}function Yt(e){if(t1(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=Y1(r)?es(r):Yt(r);if(i)for(const s in i)t[s]=i[s]}return t}else{if(Y1(e))return e;if(B1(e))return e}}const Ji=/;(?![^(]*\))/g,Qi=/:(.+)/;function es(e){const t={};return e.split(Ji).forEach(n=>{if(n){const r=n.split(Qi);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function l1(e){let t="";if(Y1(e))t=e;else if(t1(e))for(let n=0;n<e.length;n++){const r=l1(e[n]);r&&(t+=r+" ")}else if(B1(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function ts(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=e0(e[r],t[r]);return n}function e0(e,t){if(e===t)return!0;let n=B7(e),r=B7(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=c2(e),r=c2(t),n||r)return e===t;if(n=t1(e),r=t1(t),n||r)return n&&r?ts(e,t):!1;if(n=B1(e),r=B1(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const a in e){const o=e.hasOwnProperty(a),l=t.hasOwnProperty(a);if(o&&!l||!o&&l||!e0(e[a],t[a]))return!1}}return String(e)===String(t)}function N5(e,t){return e.findIndex(n=>e0(n,t))}const Le=e=>Y1(e)?e:e==null?"":t1(e)||B1(e)&&(e.toString===U9||!f1(e.toString))?JSON.stringify(e,$9,2):String(e),$9=(e,t)=>t&&t.__v_isRef?$9(e,t.value):v0(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:P0(t)?{[`Set(${t.size})`]:[...t.values()]}:B1(t)&&!t1(t)&&!Z9(t)?String(t):t,M1={},k0=[],Be=()=>{},ns=()=>!1,rs=/^on[^a-z]/,S3=e=>rs.test(e),I5=e=>e.startsWith("onUpdate:"),ne=Object.assign,D5=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},is=Object.prototype.hasOwnProperty,b1=(e,t)=>is.call(e,t),t1=Array.isArray,v0=e=>v2(e)==="[object Map]",P0=e=>v2(e)==="[object Set]",B7=e=>v2(e)==="[object Date]",f1=e=>typeof e=="function",Y1=e=>typeof e=="string",c2=e=>typeof e=="symbol",B1=e=>e!==null&&typeof e=="object",j9=e=>B1(e)&&f1(e.then)&&f1(e.catch),U9=Object.prototype.toString,v2=e=>U9.call(e),ss=e=>v2(e).slice(8,-1),Z9=e=>v2(e)==="[object Object]",B5=e=>Y1(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,z2=P5(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),w3=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},as=/-(\w)/g,Je=w3(e=>e.replace(as,(t,n)=>n?n.toUpperCase():"")),os=/\B([A-Z])/g,N0=w3(e=>e.replace(os,"-$1").toLowerCase()),E3=w3(e=>e.charAt(0).toUpperCase()+e.slice(1)),i6=w3(e=>e?`on${E3(e)}`:""),u2=(e,t)=>!Object.is(e,t),G2=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},a3=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},f2=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let V7;const ls=()=>V7||(V7=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ze;class z9{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&ze&&(this.parent=ze,this.index=(ze.scopes||(ze.scopes=[])).push(this)-1)}run(t){if(this.active){const n=ze;try{return ze=this,t()}finally{ze=n}}}on(){ze=this}off(){ze=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function V5(e){return new z9(e)}function cs(e,t=ze){t&&t.active&&t.effects.push(e)}const W5=e=>{const t=new Set(e);return t.w=0,t.n=0,t},G9=e=>(e.w&Tt)>0,q9=e=>(e.n&Tt)>0,us=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Tt},fs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];G9(i)&&!q9(i)?i.delete(e):t[n++]=i,i.w&=~Tt,i.n&=~Tt}t.length=n}},W6=new WeakMap;let Y0=0,Tt=1;const $6=30;let Ne;const Jt=Symbol(""),j6=Symbol("");class $5{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,cs(this,r)}run(){if(!this.active)return this.fn();let t=Ne,n=wt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ne,Ne=this,wt=!0,Tt=1<<++Y0,Y0<=$6?us(this):W7(this),this.fn()}finally{Y0<=$6&&fs(this),Tt=1<<--Y0,Ne=this.parent,wt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ne===this?this.deferStop=!0:this.active&&(W7(this),this.onStop&&this.onStop(),this.active=!1)}}function W7(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let wt=!0;const Y9=[];function I0(){Y9.push(wt),wt=!1}function D0(){const e=Y9.pop();wt=e===void 0?!0:e}function ve(e,t,n){if(wt&&Ne){let r=W6.get(e);r||W6.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=W5()),K9(i)}}function K9(e,t){let n=!1;Y0<=$6?q9(e)||(e.n|=Tt,n=!G9(e)):n=!e.has(Ne),n&&(e.add(Ne),Ne.deps.push(e))}function ut(e,t,n,r,i,s){const a=W6.get(e);if(!a)return;let o=[];if(t==="clear")o=[...a.values()];else if(n==="length"&&t1(e))a.forEach((l,c)=>{(c==="length"||c>=r)&&o.push(l)});else switch(n!==void 0&&o.push(a.get(n)),t){case"add":t1(e)?B5(n)&&o.push(a.get("length")):(o.push(a.get(Jt)),v0(e)&&o.push(a.get(j6)));break;case"delete":t1(e)||(o.push(a.get(Jt)),v0(e)&&o.push(a.get(j6)));break;case"set":v0(e)&&o.push(a.get(Jt));break}if(o.length===1)o[0]&&U6(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);U6(W5(l))}}function U6(e,t){const n=t1(e)?e:[...e];for(const r of n)r.computed&&$7(r);for(const r of n)r.computed||$7(r)}function $7(e,t){(e!==Ne||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ds=P5("__proto__,__v_isRef,__isVue"),X9=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(c2)),hs=j5(),Cs=j5(!1,!0),gs=j5(!0),j7=ms();function ms(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=m1(this);for(let s=0,a=this.length;s<a;s++)ve(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(m1)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){I0();const r=m1(this)[t].apply(this,n);return D0(),r}}),e}function j5(e=!1,t=!1){return function(r,i,s){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&s===(e?t?As:nn:t?tn:en).get(r))return r;const a=t1(r);if(!e&&a&&b1(j7,i))return Reflect.get(j7,i,s);const o=Reflect.get(r,i,s);return(c2(i)?X9.has(i):ds(i))||(e||ve(r,"get",i),t)?o:F1(o)?a&&B5(i)?o:o.value:B1(o)?e?rn(o):B0(o):o}}const ps=J9(),bs=J9(!0);function J9(e=!1){return function(n,r,i,s){let a=n[r];if(d2(a)&&F1(a)&&!F1(i))return!1;if(!e&&!d2(i)&&(Z6(i)||(i=m1(i),a=m1(a)),!t1(n)&&F1(a)&&!F1(i)))return a.value=i,!0;const o=t1(n)&&B5(r)?Number(r)<n.length:b1(n,r),l=Reflect.set(n,r,i,s);return n===m1(s)&&(o?u2(i,a)&&ut(n,"set",r,i):ut(n,"add",r,i)),l}}function ys(e,t){const n=b1(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ut(e,"delete",t,void 0),r}function _s(e,t){const n=Reflect.has(e,t);return(!c2(t)||!X9.has(t))&&ve(e,"has",t),n}function Ls(e){return ve(e,"iterate",t1(e)?"length":Jt),Reflect.ownKeys(e)}const Q9={get:hs,set:ps,deleteProperty:ys,has:_s,ownKeys:Ls},ks={get:gs,set(e,t){return!0},deleteProperty(e,t){return!0}},vs=ne({},Q9,{get:Cs,set:bs}),U5=e=>e,F3=e=>Reflect.getPrototypeOf(e);function E2(e,t,n=!1,r=!1){e=e.__v_raw;const i=m1(e),s=m1(t);n||(t!==s&&ve(i,"get",t),ve(i,"get",s));const{has:a}=F3(i),o=r?U5:n?G5:h2;if(a.call(i,t))return o(e.get(t));if(a.call(i,s))return o(e.get(s));e!==i&&e.get(t)}function F2(e,t=!1){const n=this.__v_raw,r=m1(n),i=m1(e);return t||(e!==i&&ve(r,"has",e),ve(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function T2(e,t=!1){return e=e.__v_raw,!t&&ve(m1(e),"iterate",Jt),Reflect.get(e,"size",e)}function U7(e){e=m1(e);const t=m1(this);return F3(t).has.call(t,e)||(t.add(e),ut(t,"add",e,e)),this}function Z7(e,t){t=m1(t);const n=m1(this),{has:r,get:i}=F3(n);let s=r.call(n,e);s||(e=m1(e),s=r.call(n,e));const a=i.call(n,e);return n.set(e,t),s?u2(t,a)&&ut(n,"set",e,t):ut(n,"add",e,t),this}function z7(e){const t=m1(this),{has:n,get:r}=F3(t);let i=n.call(t,e);i||(e=m1(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&ut(t,"delete",e,void 0),s}function G7(){const e=m1(this),t=e.size!==0,n=e.clear();return t&&ut(e,"clear",void 0,void 0),n}function O2(e,t){return function(r,i){const s=this,a=s.__v_raw,o=m1(a),l=t?U5:e?G5:h2;return!e&&ve(o,"iterate",Jt),a.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function A2(e,t,n){return function(...r){const i=this.__v_raw,s=m1(i),a=v0(s),o=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,c=i[e](...r),u=n?U5:t?G5:h2;return!t&&ve(s,"iterate",l?j6:Jt),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:o?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function gt(e){return function(...t){return e==="delete"?!1:this}}function Ms(){const e={get(s){return E2(this,s)},get size(){return T2(this)},has:F2,add:U7,set:Z7,delete:z7,clear:G7,forEach:O2(!1,!1)},t={get(s){return E2(this,s,!1,!0)},get size(){return T2(this)},has:F2,add:U7,set:Z7,delete:z7,clear:G7,forEach:O2(!1,!0)},n={get(s){return E2(this,s,!0)},get size(){return T2(this,!0)},has(s){return F2.call(this,s,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:O2(!0,!1)},r={get(s){return E2(this,s,!0,!0)},get size(){return T2(this,!0)},has(s){return F2.call(this,s,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:O2(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=A2(s,!1,!1),n[s]=A2(s,!0,!1),t[s]=A2(s,!1,!0),r[s]=A2(s,!0,!0)}),[e,n,t,r]}const[xs,Ss,ws,Es]=Ms();function Z5(e,t){const n=t?e?Es:ws:e?Ss:xs;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(b1(n,i)&&i in r?n:r,i,s)}const Fs={get:Z5(!1,!1)},Ts={get:Z5(!1,!0)},Os={get:Z5(!0,!1)},en=new WeakMap,tn=new WeakMap,nn=new WeakMap,As=new WeakMap;function Rs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hs(e){return e.__v_skip||!Object.isExtensible(e)?0:Rs(ss(e))}function B0(e){return d2(e)?e:z5(e,!1,Q9,Fs,en)}function Ps(e){return z5(e,!1,vs,Ts,tn)}function rn(e){return z5(e,!0,ks,Os,nn)}function z5(e,t,n,r,i){if(!B1(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const a=Hs(e);if(a===0)return e;const o=new Proxy(e,a===2?r:n);return i.set(e,o),o}function lt(e){return d2(e)?lt(e.__v_raw):!!(e&&e.__v_isReactive)}function d2(e){return!!(e&&e.__v_isReadonly)}function Z6(e){return!!(e&&e.__v_isShallow)}function sn(e){return lt(e)||d2(e)}function m1(e){const t=e&&e.__v_raw;return t?m1(t):e}function Pe(e){return a3(e,"__v_skip",!0),e}const h2=e=>B1(e)?B0(e):e,G5=e=>B1(e)?rn(e):e;function an(e){wt&&Ne&&(e=m1(e),K9(e.dep||(e.dep=W5())))}function on(e,t){e=m1(e),e.dep&&U6(e.dep)}function F1(e){return!!(e&&e.__v_isRef===!0)}function H1(e){return cn(e,!1)}function ln(e){return cn(e,!0)}function cn(e,t){return F1(e)?e:new Ns(e,t)}class Ns{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:m1(t),this._value=n?t:h2(t)}get value(){return an(this),this._value}set value(t){t=this.__v_isShallow?t:m1(t),u2(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:h2(t),on(this))}}function W(e){return F1(e)?e.value:e}const Is={get:(e,t,n)=>W(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return F1(i)&&!F1(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function un(e){return lt(e)?e:new Proxy(e,Is)}function q7(e){const t=t1(e)?new Array(e.length):{};for(const n in e)t[n]=q2(e,n);return t}class Ds{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function q2(e,t,n){const r=e[t];return F1(r)?r:new Ds(e,t,n)}class Bs{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new $5(t,()=>{this._dirty||(this._dirty=!0,on(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=m1(this);return an(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Vs(e,t,n=!1){let r,i;const s=f1(e);return s?(r=e,i=Be):(r=e.get,i=e.set),new Bs(r,i,s||!i,n)}function Et(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){T3(s,t,n)}return i}function Ee(e,t,n,r){if(f1(e)){const s=Et(e,t,n,r);return s&&j9(s)&&s.catch(a=>{T3(a,t,n)}),s}const i=[];for(let s=0;s<e.length;s++)i.push(Ee(e[s],t,n,r));return i}function T3(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const a=t.proxy,o=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,a,o)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){Et(l,null,10,[e,a,o]);return}}Ws(e,n,i,r)}function Ws(e,t,n,r=!0){console.error(e)}let o3=!1,z6=!1;const _e=[];let at=0;const J0=[];let K0=null,g0=0;const Q0=[];let _t=null,m0=0;const fn=Promise.resolve();let q5=null,G6=null;function l3(e){const t=q5||fn;return e?t.then(this?e.bind(this):e):t}function $s(e){let t=at+1,n=_e.length;for(;t<n;){const r=t+n>>>1;C2(_e[r])<e?t=r+1:n=r}return t}function dn(e){(!_e.length||!_e.includes(e,o3&&e.allowRecurse?at+1:at))&&e!==G6&&(e.id==null?_e.push(e):_e.splice($s(e.id),0,e),hn())}function hn(){!o3&&!z6&&(z6=!0,q5=fn.then(mn))}function js(e){const t=_e.indexOf(e);t>at&&_e.splice(t,1)}function Cn(e,t,n,r){t1(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),hn()}function Us(e){Cn(e,K0,J0,g0)}function Zs(e){Cn(e,_t,Q0,m0)}function O3(e,t=null){if(J0.length){for(G6=t,K0=[...new Set(J0)],J0.length=0,g0=0;g0<K0.length;g0++)K0[g0]();K0=null,g0=0,G6=null,O3(e,t)}}function gn(e){if(O3(),Q0.length){const t=[...new Set(Q0)];if(Q0.length=0,_t){_t.push(...t);return}for(_t=t,_t.sort((n,r)=>C2(n)-C2(r)),m0=0;m0<_t.length;m0++)_t[m0]();_t=null,m0=0}}const C2=e=>e.id==null?1/0:e.id;function mn(e){z6=!1,o3=!0,O3(e),_e.sort((n,r)=>C2(n)-C2(r));const t=Be;try{for(at=0;at<_e.length;at++){const n=_e[at];n&&n.active!==!1&&Et(n,null,14)}}finally{at=0,_e.length=0,gn(),o3=!1,q5=null,(_e.length||J0.length||Q0.length)&&mn(e)}}function zs(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||M1;let i=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in r){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:d,trim:f}=r[u]||M1;f&&(i=n.map(h=>h.trim())),d&&(i=n.map(f2))}let o,l=r[o=i6(t)]||r[o=i6(Je(t))];!l&&s&&(l=r[o=i6(N0(t))]),l&&Ee(l,e,6,i);const c=r[o+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ee(c,e,6,i)}}function pn(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let a={},o=!1;if(!f1(e)){const l=c=>{const u=pn(c,t,!0);u&&(o=!0,ne(a,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!o?(r.set(e,null),null):(t1(s)?s.forEach(l=>a[l]=null):ne(a,s),r.set(e,a),a)}function A3(e,t){return!e||!S3(t)?!1:(t=t.slice(2).replace(/Once$/,""),b1(e,t[0].toLowerCase()+t.slice(1))||b1(e,N0(t))||b1(e,t))}let oe=null,bn=null;function c3(e){const t=oe;return oe=e,bn=e&&e.type.__scopeId||null,t}function T1(e,t=oe,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&s4(-1);const s=c3(t),a=e(...i);return c3(s),r._d&&s4(1),a};return r._n=!0,r._c=!0,r._d=!0,r}function s6(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:h,ctx:m,inheritAttrs:b}=e;let y,p;const L=c3(e);try{if(n.shapeFlag&4){const v=i||r;y=qe(u.call(v,v,d,s,h,f,m)),p=l}else{const v=t;y=qe(v.length>1?v(s,{attrs:l,slots:o,emit:c}):v(s,null)),p=t.props?l:Gs(l)}}catch(v){t2.length=0,T3(v,e,1),y=n1(Fe)}let M=y;if(p&&b!==!1){const v=Object.keys(p),{shapeFlag:_}=M;v.length&&_&7&&(a&&v.some(I5)&&(p=qs(p,a)),M=Ot(M,p))}return n.dirs&&(M=Ot(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),y=M,c3(L),y}const Gs=e=>{let t;for(const n in e)(n==="class"||n==="style"||S3(n))&&((t||(t={}))[n]=e[n]);return t},qs=(e,t)=>{const n={};for(const r in e)(!I5(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ys(e,t,n){const{props:r,children:i,component:s}=e,{props:a,children:o,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Y7(r,a,c):!!a;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(a[f]!==r[f]&&!A3(c,f))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:r===a?!1:r?a?Y7(r,a,c):!0:!!a;return!1}function Y7(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!A3(n,s))return!0}return!1}function Ks({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Xs=e=>e.__isSuspense;function Js(e,t){t&&t.pendingBranch?t1(e)?t.effects.push(...e):t.effects.push(e):Zs(e)}function Y2(e,t){if(J1){let n=J1.provides;const r=J1.parent&&J1.parent.provides;r===n&&(n=J1.provides=Object.create(r)),n[e]=t}}function Ve(e,t,n=!1){const r=J1||oe;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&f1(t)?t.call(r.proxy):t}}const K7={};function ct(e,t,n){return yn(e,t,n)}function yn(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:a}=M1){const o=J1;let l,c=!1,u=!1;if(F1(e)?(l=()=>e.value,c=Z6(e)):lt(e)?(l=()=>e,r=!0):t1(e)?(u=!0,c=e.some(p=>lt(p)||Z6(p)),l=()=>e.map(p=>{if(F1(p))return p.value;if(lt(p))return Kt(p);if(f1(p))return Et(p,o,2)})):f1(e)?t?l=()=>Et(e,o,2):l=()=>{if(!(o&&o.isUnmounted))return d&&d(),Ee(e,o,3,[f])}:l=Be,t&&r){const p=l;l=()=>Kt(p())}let d,f=p=>{d=y.onStop=()=>{Et(p,o,4)}};if(p2)return f=Be,t?n&&Ee(t,o,3,[l(),u?[]:void 0,f]):l(),Be;let h=u?[]:K7;const m=()=>{if(!!y.active)if(t){const p=y.run();(r||c||(u?p.some((L,M)=>u2(L,h[M])):u2(p,h)))&&(d&&d(),Ee(t,o,3,[p,h===K7?void 0:h,f]),h=p)}else y.run()};m.allowRecurse=!!t;let b;i==="sync"?b=m:i==="post"?b=()=>Ce(m,o&&o.suspense):b=()=>Us(m);const y=new $5(l,b);return t?n?m():h=y.run():i==="post"?Ce(y.run.bind(y),o&&o.suspense):y.run(),()=>{y.stop(),o&&o.scope&&D5(o.scope.effects,y)}}function Qs(e,t,n){const r=this.proxy,i=Y1(e)?e.includes(".")?_n(r,e):()=>r[e]:e.bind(r,r);let s;f1(t)?s=t:(s=t.handler,n=t);const a=J1;x0(this);const o=yn(i,s.bind(r),n);return a?x0(a):Qt(),o}function _n(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Kt(e,t){if(!B1(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),F1(e))Kt(e.value,t);else if(t1(e))for(let n=0;n<e.length;n++)Kt(e[n],t);else if(P0(e)||v0(e))e.forEach(n=>{Kt(n,t)});else if(Z9(e))for(const n in e)Kt(e[n],t);return e}function ea(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return t0(()=>{e.isMounted=!0}),P3(()=>{e.isUnmounting=!0}),e}const Me=[Function,Array],ta={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Me,onEnter:Me,onAfterEnter:Me,onEnterCancelled:Me,onBeforeLeave:Me,onLeave:Me,onAfterLeave:Me,onLeaveCancelled:Me,onBeforeAppear:Me,onAppear:Me,onAfterAppear:Me,onAppearCancelled:Me},setup(e,{slots:t}){const n=ft(),r=ea();let i;return()=>{const s=t.default&&vn(t.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const b of s)if(b.type!==Fe){a=b;break}}const o=m1(e),{mode:l}=o;if(r.isLeaving)return a6(a);const c=X7(a);if(!c)return a6(a);const u=q6(c,o,r,n);Y6(c,u);const d=n.subTree,f=d&&X7(d);let h=!1;const{getTransitionKey:m}=c.type;if(m){const b=m();i===void 0?i=b:b!==i&&(i=b,h=!0)}if(f&&f.type!==Fe&&(!zt(c,f)||h)){const b=q6(f,o,r,n);if(Y6(f,b),l==="out-in")return r.isLeaving=!0,b.afterLeave=()=>{r.isLeaving=!1,n.update()},a6(a);l==="in-out"&&c.type!==Fe&&(b.delayLeave=(y,p,L)=>{const M=kn(r,f);M[String(f.key)]=f,y._leaveCb=()=>{p(),y._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=L})}return a}}},Ln=ta;function kn(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function q6(e,t,n,r){const{appear:i,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:h,onLeaveCancelled:m,onBeforeAppear:b,onAppear:y,onAfterAppear:p,onAppearCancelled:L}=t,M=String(e.key),v=kn(n,e),_=(H,F)=>{H&&Ee(H,r,9,F)},E=(H,F)=>{const A=F[1];_(H,F),t1(H)?H.every(I=>I.length<=1)&&A():H.length<=1&&A()},S={mode:s,persisted:a,beforeEnter(H){let F=o;if(!n.isMounted)if(i)F=b||o;else return;H._leaveCb&&H._leaveCb(!0);const A=v[M];A&&zt(e,A)&&A.el._leaveCb&&A.el._leaveCb(),_(F,[H])},enter(H){let F=l,A=c,I=u;if(!n.isMounted)if(i)F=y||l,A=p||c,I=L||u;else return;let R=!1;const j=H._enterCb=r1=>{R||(R=!0,r1?_(I,[H]):_(A,[H]),S.delayedLeave&&S.delayedLeave(),H._enterCb=void 0)};F?E(F,[H,j]):j()},leave(H,F){const A=String(e.key);if(H._enterCb&&H._enterCb(!0),n.isUnmounting)return F();_(d,[H]);let I=!1;const R=H._leaveCb=j=>{I||(I=!0,F(),j?_(m,[H]):_(h,[H]),H._leaveCb=void 0,v[A]===e&&delete v[A])};v[A]=e,f?E(f,[H,R]):R()},clone(H){return q6(H,t,n,r)}};return S}function a6(e){if(R3(e))return e=Ot(e),e.children=null,e}function X7(e){return R3(e)?e.children?e.children[0]:void 0:e}function Y6(e,t){e.shapeFlag&6&&e.component?Y6(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function vn(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let a=e[s];const o=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===W1?(a.patchFlag&128&&i++,r=r.concat(vn(a.children,t,o))):(t||a.type!==Fe)&&r.push(o!=null?Ot(a,{key:o}):a)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Y5(e){return f1(e)?{setup:e,name:e.name}:e}const e2=e=>!!e.type.__asyncLoader,R3=e=>e.type.__isKeepAlive;function na(e,t){Mn(e,"a",t)}function ra(e,t){Mn(e,"da",t)}function Mn(e,t,n=J1){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(H3(t,r,n),n){let i=n.parent;for(;i&&i.parent;)R3(i.parent.vnode)&&ia(r,t,n,i),i=i.parent}}function ia(e,t,n,r){const i=H3(t,e,r,!0);N3(()=>{D5(r[t],i)},n)}function H3(e,t,n=J1,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;I0(),x0(n);const o=Ee(t,n,e,a);return Qt(),D0(),o});return r?i.unshift(s):i.push(s),s}}const dt=e=>(t,n=J1)=>(!p2||e==="sp")&&H3(e,t,n),xn=dt("bm"),t0=dt("m"),sa=dt("bu"),aa=dt("u"),P3=dt("bum"),N3=dt("um"),oa=dt("sp"),la=dt("rtg"),ca=dt("rtc");function ua(e,t=J1){H3("ec",e,t)}function K2(e,t){const n=oe;if(n===null)return e;const r=V3(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[a,o,l,c=M1]=t[s];f1(a)&&(a={mounted:a,updated:a}),a.deep&&Kt(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:l,modifiers:c})}return e}function It(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let l=o.dir[r];l&&(I0(),Ee(l,n,8,[e.el,o,e,t]),D0())}}const Sn="components",wn=Symbol();function I3(e){return Y1(e)?fa(Sn,e,!1)||e:e||wn}function fa(e,t,n=!0,r=!1){const i=oe||J1;if(i){const s=i.type;if(e===Sn){const o=Ba(s,!1);if(o&&(o===t||o===Je(t)||o===E3(Je(t))))return s}const a=J7(i[e]||s[e],t)||J7(i.appContext[e],t);return!a&&r?s:a}}function J7(e,t){return e&&(e[t]||e[Je(t)]||e[E3(Je(t))])}function g2(e,t,n,r){let i;const s=n&&n[r];if(t1(e)||Y1(e)){i=new Array(e.length);for(let a=0,o=e.length;a<o;a++)i[a]=t(e[a],a,void 0,s&&s[a])}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,s&&s[a])}else if(B1(e))if(e[Symbol.iterator])i=Array.from(e,(a,o)=>t(a,o,void 0,s&&s[o]));else{const a=Object.keys(e);i=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];i[o]=t(e[c],c,o,s&&s[o])}}else i=[];return n&&(n[r]=i),i}function ce(e,t,n={},r,i){if(oe.isCE||oe.parent&&e2(oe.parent)&&oe.parent.isCE)return n1("slot",t==="default"?null:{name:t},r&&r());let s=e[t];s&&s._c&&(s._d=!1),U();const a=s&&En(s(n)),o=y1(W1,{key:n.key||`_${t}`},a||(r?r():[]),a&&e._===1?64:-2);return!i&&o.scopeId&&(o.slotScopeIds=[o.scopeId+"-s"]),s&&s._c&&(s._d=!0),o}function En(e){return e.some(t=>d3(t)?!(t.type===Fe||t.type===W1&&!En(t.children)):!0)?e:null}const K6=e=>e?Vn(e)?V3(e)||e.proxy:K6(e.parent):null,u3=ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>K6(e.parent),$root:e=>K6(e.root),$emit:e=>e.emit,$options:e=>Tn(e),$forceUpdate:e=>e.f||(e.f=()=>dn(e.update)),$nextTick:e=>e.n||(e.n=l3.bind(e.proxy)),$watch:e=>Qs.bind(e)}),da={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:a,type:o,appContext:l}=e;let c;if(t[0]!=="$"){const h=a[t];if(h!==void 0)switch(h){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(r!==M1&&b1(r,t))return a[t]=1,r[t];if(i!==M1&&b1(i,t))return a[t]=2,i[t];if((c=e.propsOptions[0])&&b1(c,t))return a[t]=3,s[t];if(n!==M1&&b1(n,t))return a[t]=4,n[t];X6&&(a[t]=0)}}const u=u3[t];let d,f;if(u)return t==="$attrs"&&ve(e,"get",t),u(e);if((d=o.__cssModules)&&(d=d[t]))return d;if(n!==M1&&b1(n,t))return a[t]=4,n[t];if(f=l.config.globalProperties,b1(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return i!==M1&&b1(i,t)?(i[t]=n,!0):r!==M1&&b1(r,t)?(r[t]=n,!0):b1(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let o;return!!n[a]||e!==M1&&b1(e,a)||t!==M1&&b1(t,a)||(o=s[0])&&b1(o,a)||b1(r,a)||b1(u3,a)||b1(i.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:b1(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let X6=!0;function ha(e){const t=Tn(e),n=e.proxy,r=e.ctx;X6=!1,t.beforeCreate&&Q7(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:m,activated:b,deactivated:y,beforeDestroy:p,beforeUnmount:L,destroyed:M,unmounted:v,render:_,renderTracked:E,renderTriggered:S,errorCaptured:H,serverPrefetch:F,expose:A,inheritAttrs:I,components:R,directives:j,filters:r1}=t;if(c&&Ca(c,r,null,e.appContext.config.unwrapInjectedRef),a)for(const Z in a){const c1=a[Z];f1(c1)&&(r[Z]=c1.bind(n))}if(i){const Z=i.call(n,n);B1(Z)&&(e.data=B0(Z))}if(X6=!0,s)for(const Z in s){const c1=s[Z],P1=f1(c1)?c1.bind(n,n):f1(c1.get)?c1.get.bind(n,n):Be,z1=!f1(c1)&&f1(c1.set)?c1.set.bind(n):Be,U1=e1({get:P1,set:z1});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>U1.value,set:N1=>U1.value=N1})}if(o)for(const Z in o)Fn(o[Z],r,n,Z);if(l){const Z=f1(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(c1=>{Y2(c1,Z[c1])})}u&&Q7(u,e,"c");function X(Z,c1){t1(c1)?c1.forEach(P1=>Z(P1.bind(n))):c1&&Z(c1.bind(n))}if(X(xn,d),X(t0,f),X(sa,h),X(aa,m),X(na,b),X(ra,y),X(ua,H),X(ca,E),X(la,S),X(P3,L),X(N3,v),X(oa,F),t1(A))if(A.length){const Z=e.exposed||(e.exposed={});A.forEach(c1=>{Object.defineProperty(Z,c1,{get:()=>n[c1],set:P1=>n[c1]=P1})})}else e.exposed||(e.exposed={});_&&e.render===Be&&(e.render=_),I!=null&&(e.inheritAttrs=I),R&&(e.components=R),j&&(e.directives=j)}function Ca(e,t,n=Be,r=!1){t1(e)&&(e=J6(e));for(const i in e){const s=e[i];let a;B1(s)?"default"in s?a=Ve(s.from||i,s.default,!0):a=Ve(s.from||i):a=Ve(s),F1(a)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):t[i]=a}}function Q7(e,t,n){Ee(t1(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Fn(e,t,n,r){const i=r.includes(".")?_n(n,r):()=>n[r];if(Y1(e)){const s=t[e];f1(s)&&ct(i,s)}else if(f1(e))ct(i,e.bind(n));else if(B1(e))if(t1(e))e.forEach(s=>Fn(s,t,n,r));else{const s=f1(e.handler)?e.handler.bind(n):t[e.handler];f1(s)&&ct(i,s,e)}}function Tn(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let l;return o?l=o:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(c=>f3(l,c,a,!0)),f3(l,t,a)),s.set(t,l),l}function f3(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&f3(e,s,n,!0),i&&i.forEach(a=>f3(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const o=ga[a]||n&&n[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const ga={data:e4,props:jt,emits:jt,methods:jt,computed:jt,beforeCreate:ue,created:ue,beforeMount:ue,mounted:ue,beforeUpdate:ue,updated:ue,beforeDestroy:ue,beforeUnmount:ue,destroyed:ue,unmounted:ue,activated:ue,deactivated:ue,errorCaptured:ue,serverPrefetch:ue,components:jt,directives:jt,watch:pa,provide:e4,inject:ma};function e4(e,t){return t?e?function(){return ne(f1(e)?e.call(this,this):e,f1(t)?t.call(this,this):t)}:t:e}function ma(e,t){return jt(J6(e),J6(t))}function J6(e){if(t1(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ue(e,t){return e?[...new Set([].concat(e,t))]:t}function jt(e,t){return e?ne(ne(Object.create(null),e),t):t}function pa(e,t){if(!e)return t;if(!t)return e;const n=ne(Object.create(null),e);for(const r in t)n[r]=ue(e[r],t[r]);return n}function ba(e,t,n,r=!1){const i={},s={};a3(s,B3,1),e.propsDefaults=Object.create(null),On(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);n?e.props=r?i:Ps(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function ya(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,o=m1(i),[l]=e.propsOptions;let c=!1;if((r||a>0)&&!(a&16)){if(a&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(A3(e.emitsOptions,f))continue;const h=t[f];if(l)if(b1(s,f))h!==s[f]&&(s[f]=h,c=!0);else{const m=Je(f);i[m]=Q6(l,o,m,h,e,!1)}else h!==s[f]&&(s[f]=h,c=!0)}}}else{On(e,t,i,s)&&(c=!0);let u;for(const d in o)(!t||!b1(t,d)&&((u=N0(d))===d||!b1(t,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Q6(l,o,d,void 0,e,!0)):delete i[d]);if(s!==o)for(const d in s)(!t||!b1(t,d)&&!0)&&(delete s[d],c=!0)}c&&ut(e,"set","$attrs")}function On(e,t,n,r){const[i,s]=e.propsOptions;let a=!1,o;if(t)for(let l in t){if(z2(l))continue;const c=t[l];let u;i&&b1(i,u=Je(l))?!s||!s.includes(u)?n[u]=c:(o||(o={}))[u]=c:A3(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,a=!0)}if(s){const l=m1(n),c=o||M1;for(let u=0;u<s.length;u++){const d=s[u];n[d]=Q6(i,l,d,c[d],e,!b1(c,d))}}return a}function Q6(e,t,n,r,i,s){const a=e[n];if(a!=null){const o=b1(a,"default");if(o&&r===void 0){const l=a.default;if(a.type!==Function&&f1(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(x0(i),r=c[n]=l.call(null,t),Qt())}else r=l}a[0]&&(s&&!o?r=!1:a[1]&&(r===""||r===N0(n))&&(r=!0))}return r}function An(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,a={},o=[];let l=!1;if(!f1(e)){const u=d=>{l=!0;const[f,h]=An(d,t,!0);ne(a,f),h&&o.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!l)return r.set(e,k0),k0;if(t1(s))for(let u=0;u<s.length;u++){const d=Je(s[u]);t4(d)&&(a[d]=M1)}else if(s)for(const u in s){const d=Je(u);if(t4(d)){const f=s[u],h=a[d]=t1(f)||f1(f)?{type:f}:f;if(h){const m=i4(Boolean,h.type),b=i4(String,h.type);h[0]=m>-1,h[1]=b<0||m<b,(m>-1||b1(h,"default"))&&o.push(d)}}}const c=[a,o];return r.set(e,c),c}function t4(e){return e[0]!=="$"}function n4(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function r4(e,t){return n4(e)===n4(t)}function i4(e,t){return t1(t)?t.findIndex(n=>r4(n,e)):f1(t)&&r4(t,e)?0:-1}const Rn=e=>e[0]==="_"||e==="$stable",K5=e=>t1(e)?e.map(qe):[qe(e)],_a=(e,t,n)=>{if(t._n)return t;const r=T1((...i)=>K5(t(...i)),n);return r._c=!1,r},Hn=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Rn(i))continue;const s=e[i];if(f1(s))t[i]=_a(i,s,r);else if(s!=null){const a=K5(s);t[i]=()=>a}}},Pn=(e,t)=>{const n=K5(t);e.slots.default=()=>n},La=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=m1(t),a3(t,"_",n)):Hn(t,e.slots={})}else e.slots={},t&&Pn(e,t);a3(e.slots,B3,1)},ka=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,a=M1;if(r.shapeFlag&32){const o=t._;o?n&&o===1?s=!1:(ne(i,t),!n&&o===1&&delete i._):(s=!t.$stable,Hn(t,i)),a=t}else t&&(Pn(e,t),a={default:1});if(s)for(const o in i)!Rn(o)&&!(o in a)&&delete i[o]};function Nn(){return{app:null,config:{isNativeTag:ns,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let va=0;function Ma(e,t){return function(r,i=null){f1(r)||(r=Object.assign({},r)),i!=null&&!B1(i)&&(i=null);const s=Nn(),a=new Set;let o=!1;const l=s.app={_uid:va++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:$a,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&f1(c.install)?(a.add(c),c.install(l,...u)):f1(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,d){if(!o){const f=n1(r,i);return f.appContext=s,u&&t?t(f,c):e(f,c,d),o=!0,l._container=c,c.__vue_app__=l,V3(f.component)||f.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function e5(e,t,n,r,i=!1){if(t1(e)){e.forEach((f,h)=>e5(f,t&&(t1(t)?t[h]:t),n,r,i));return}if(e2(r)&&!i)return;const s=r.shapeFlag&4?V3(r.component)||r.component.proxy:r.el,a=i?null:s,{i:o,r:l}=e,c=t&&t.r,u=o.refs===M1?o.refs={}:o.refs,d=o.setupState;if(c!=null&&c!==l&&(Y1(c)?(u[c]=null,b1(d,c)&&(d[c]=null)):F1(c)&&(c.value=null)),f1(l))Et(l,o,12,[a,u]);else{const f=Y1(l),h=F1(l);if(f||h){const m=()=>{if(e.f){const b=f?u[l]:l.value;i?t1(b)&&D5(b,s):t1(b)?b.includes(s)||b.push(s):f?(u[l]=[s],b1(d,l)&&(d[l]=u[l])):(l.value=[s],e.k&&(u[e.k]=l.value))}else f?(u[l]=a,b1(d,l)&&(d[l]=a)):h&&(l.value=a,e.k&&(u[e.k]=a))};a?(m.id=-1,Ce(m,n)):m()}}}const Ce=Js;function xa(e){return Sa(e)}function Sa(e,t){const n=ls();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Be,cloneNode:m,insertStaticContent:b}=e,y=(C,g,k,w=null,T=null,N=null,$=!1,B=null,D=!!g.dynamicChildren)=>{if(C===g)return;C&&!zt(C,g)&&(w=J(C),I1(C,T,N,!0),C=null),g.patchFlag===-2&&(D=!1,g.dynamicChildren=null);const{type:x,ref:O,shapeFlag:G}=g;switch(x){case D3:p(C,g,k,w);break;case Fe:L(C,g,k,w);break;case o6:C==null&&M(g,k,w,$);break;case W1:j(C,g,k,w,T,N,$,B,D);break;default:G&1?E(C,g,k,w,T,N,$,B,D):G&6?r1(C,g,k,w,T,N,$,B,D):(G&64||G&128)&&x.process(C,g,k,w,T,N,$,B,D,C1)}O!=null&&T&&e5(O,C&&C.ref,N,g||C,!g)},p=(C,g,k,w)=>{if(C==null)r(g.el=o(g.children),k,w);else{const T=g.el=C.el;g.children!==C.children&&c(T,g.children)}},L=(C,g,k,w)=>{C==null?r(g.el=l(g.children||""),k,w):g.el=C.el},M=(C,g,k,w)=>{[C.el,C.anchor]=b(C.children,g,k,w,C.el,C.anchor)},v=({el:C,anchor:g},k,w)=>{let T;for(;C&&C!==g;)T=f(C),r(C,k,w),C=T;r(g,k,w)},_=({el:C,anchor:g})=>{let k;for(;C&&C!==g;)k=f(C),i(C),C=k;i(g)},E=(C,g,k,w,T,N,$,B,D)=>{$=$||g.type==="svg",C==null?S(g,k,w,T,N,$,B,D):A(C,g,T,N,$,B,D)},S=(C,g,k,w,T,N,$,B)=>{let D,x;const{type:O,props:G,shapeFlag:Y,transition:i1,patchFlag:d1,dirs:p1}=C;if(C.el&&m!==void 0&&d1===-1)D=C.el=m(C.el);else{if(D=C.el=a(C.type,N,G&&G.is,G),Y&8?u(D,C.children):Y&16&&F(C.children,D,null,w,T,N&&O!=="foreignObject",$,B),p1&&It(C,null,w,"created"),G){for(const S1 in G)S1!=="value"&&!z2(S1)&&s(D,S1,null,G[S1],N,C.children,w,T,V);"value"in G&&s(D,"value",null,G.value),(x=G.onVnodeBeforeMount)&&Ue(x,w,C)}H(D,C,C.scopeId,$,w)}p1&&It(C,null,w,"beforeMount");const k1=(!T||T&&!T.pendingBranch)&&i1&&!i1.persisted;k1&&i1.beforeEnter(D),r(D,g,k),((x=G&&G.onVnodeMounted)||k1||p1)&&Ce(()=>{x&&Ue(x,w,C),k1&&i1.enter(D),p1&&It(C,null,w,"mounted")},T)},H=(C,g,k,w,T)=>{if(k&&h(C,k),w)for(let N=0;N<w.length;N++)h(C,w[N]);if(T){let N=T.subTree;if(g===N){const $=T.vnode;H(C,$,$.scopeId,$.slotScopeIds,T.parent)}}},F=(C,g,k,w,T,N,$,B,D=0)=>{for(let x=D;x<C.length;x++){const O=C[x]=B?kt(C[x]):qe(C[x]);y(null,O,g,k,w,T,N,$,B)}},A=(C,g,k,w,T,N,$)=>{const B=g.el=C.el;let{patchFlag:D,dynamicChildren:x,dirs:O}=g;D|=C.patchFlag&16;const G=C.props||M1,Y=g.props||M1;let i1;k&&Dt(k,!1),(i1=Y.onVnodeBeforeUpdate)&&Ue(i1,k,g,C),O&&It(g,C,k,"beforeUpdate"),k&&Dt(k,!0);const d1=T&&g.type!=="foreignObject";if(x?I(C.dynamicChildren,x,B,k,w,d1,N):$||P1(C,g,B,null,k,w,d1,N,!1),D>0){if(D&16)R(B,g,G,Y,k,w,T);else if(D&2&&G.class!==Y.class&&s(B,"class",null,Y.class,T),D&4&&s(B,"style",G.style,Y.style,T),D&8){const p1=g.dynamicProps;for(let k1=0;k1<p1.length;k1++){const S1=p1[k1],Te=G[S1],o0=Y[S1];(o0!==Te||S1==="value")&&s(B,S1,Te,o0,T,C.children,k,w,V)}}D&1&&C.children!==g.children&&u(B,g.children)}else!$&&x==null&&R(B,g,G,Y,k,w,T);((i1=Y.onVnodeUpdated)||O)&&Ce(()=>{i1&&Ue(i1,k,g,C),O&&It(g,C,k,"updated")},w)},I=(C,g,k,w,T,N,$)=>{for(let B=0;B<g.length;B++){const D=C[B],x=g[B],O=D.el&&(D.type===W1||!zt(D,x)||D.shapeFlag&70)?d(D.el):k;y(D,x,O,null,w,T,N,$,!0)}},R=(C,g,k,w,T,N,$)=>{if(k!==w){for(const B in w){if(z2(B))continue;const D=w[B],x=k[B];D!==x&&B!=="value"&&s(C,B,x,D,$,g.children,T,N,V)}if(k!==M1)for(const B in k)!z2(B)&&!(B in w)&&s(C,B,k[B],null,$,g.children,T,N,V);"value"in w&&s(C,"value",k.value,w.value)}},j=(C,g,k,w,T,N,$,B,D)=>{const x=g.el=C?C.el:o(""),O=g.anchor=C?C.anchor:o("");let{patchFlag:G,dynamicChildren:Y,slotScopeIds:i1}=g;i1&&(B=B?B.concat(i1):i1),C==null?(r(x,k,w),r(O,k,w),F(g.children,k,O,T,N,$,B,D)):G>0&&G&64&&Y&&C.dynamicChildren?(I(C.dynamicChildren,Y,k,T,N,$,B),(g.key!=null||T&&g===T.subTree)&&In(C,g,!0)):P1(C,g,k,O,T,N,$,B,D)},r1=(C,g,k,w,T,N,$,B,D)=>{g.slotScopeIds=B,C==null?g.shapeFlag&512?T.ctx.activate(g,k,w,$,D):Q(g,k,w,T,N,$,D):X(C,g,D)},Q=(C,g,k,w,T,N,$)=>{const B=C.component=Pa(C,w,T);if(R3(C)&&(B.ctx.renderer=C1),Na(B),B.asyncDep){if(T&&T.registerDep(B,Z),!C.el){const D=B.subTree=n1(Fe);L(null,D,g,k)}return}Z(B,C,g,k,T,N,$)},X=(C,g,k)=>{const w=g.component=C.component;if(Ys(C,g,k))if(w.asyncDep&&!w.asyncResolved){c1(w,g,k);return}else w.next=g,js(w.update),w.update();else g.el=C.el,w.vnode=g},Z=(C,g,k,w,T,N,$)=>{const B=()=>{if(C.isMounted){let{next:O,bu:G,u:Y,parent:i1,vnode:d1}=C,p1=O,k1;Dt(C,!1),O?(O.el=d1.el,c1(C,O,$)):O=d1,G&&G2(G),(k1=O.props&&O.props.onVnodeBeforeUpdate)&&Ue(k1,i1,O,d1),Dt(C,!0);const S1=s6(C),Te=C.subTree;C.subTree=S1,y(Te,S1,d(Te.el),J(Te),C,T,N),O.el=S1.el,p1===null&&Ks(C,S1.el),Y&&Ce(Y,T),(k1=O.props&&O.props.onVnodeUpdated)&&Ce(()=>Ue(k1,i1,O,d1),T)}else{let O;const{el:G,props:Y}=g,{bm:i1,m:d1,parent:p1}=C,k1=e2(g);if(Dt(C,!1),i1&&G2(i1),!k1&&(O=Y&&Y.onVnodeBeforeMount)&&Ue(O,p1,g),Dt(C,!0),G&&s1){const S1=()=>{C.subTree=s6(C),s1(G,C.subTree,C,T,null)};k1?g.type.__asyncLoader().then(()=>!C.isUnmounted&&S1()):S1()}else{const S1=C.subTree=s6(C);y(null,S1,k,w,C,T,N),g.el=S1.el}if(d1&&Ce(d1,T),!k1&&(O=Y&&Y.onVnodeMounted)){const S1=g;Ce(()=>Ue(O,p1,S1),T)}(g.shapeFlag&256||p1&&e2(p1.vnode)&&p1.vnode.shapeFlag&256)&&C.a&&Ce(C.a,T),C.isMounted=!0,g=k=w=null}},D=C.effect=new $5(B,()=>dn(x),C.scope),x=C.update=()=>D.run();x.id=C.uid,Dt(C,!0),x()},c1=(C,g,k)=>{g.component=C;const w=C.vnode.props;C.vnode=g,C.next=null,ya(C,g.props,w,k),ka(C,g.children,k),I0(),O3(void 0,C.update),D0()},P1=(C,g,k,w,T,N,$,B,D=!1)=>{const x=C&&C.children,O=C?C.shapeFlag:0,G=g.children,{patchFlag:Y,shapeFlag:i1}=g;if(Y>0){if(Y&128){U1(x,G,k,w,T,N,$,B,D);return}else if(Y&256){z1(x,G,k,w,T,N,$,B,D);return}}i1&8?(O&16&&V(x,T,N),G!==x&&u(k,G)):O&16?i1&16?U1(x,G,k,w,T,N,$,B,D):V(x,T,N,!0):(O&8&&u(k,""),i1&16&&F(G,k,w,T,N,$,B,D))},z1=(C,g,k,w,T,N,$,B,D)=>{C=C||k0,g=g||k0;const x=C.length,O=g.length,G=Math.min(x,O);let Y;for(Y=0;Y<G;Y++){const i1=g[Y]=D?kt(g[Y]):qe(g[Y]);y(C[Y],i1,k,null,T,N,$,B,D)}x>O?V(C,T,N,!0,!1,G):F(g,k,w,T,N,$,B,D,G)},U1=(C,g,k,w,T,N,$,B,D)=>{let x=0;const O=g.length;let G=C.length-1,Y=O-1;for(;x<=G&&x<=Y;){const i1=C[x],d1=g[x]=D?kt(g[x]):qe(g[x]);if(zt(i1,d1))y(i1,d1,k,null,T,N,$,B,D);else break;x++}for(;x<=G&&x<=Y;){const i1=C[G],d1=g[Y]=D?kt(g[Y]):qe(g[Y]);if(zt(i1,d1))y(i1,d1,k,null,T,N,$,B,D);else break;G--,Y--}if(x>G){if(x<=Y){const i1=Y+1,d1=i1<O?g[i1].el:w;for(;x<=Y;)y(null,g[x]=D?kt(g[x]):qe(g[x]),k,d1,T,N,$,B,D),x++}}else if(x>Y)for(;x<=G;)I1(C[x],T,N,!0),x++;else{const i1=x,d1=x,p1=new Map;for(x=d1;x<=Y;x++){const be=g[x]=D?kt(g[x]):qe(g[x]);be.key!=null&&p1.set(be.key,x)}let k1,S1=0;const Te=Y-d1+1;let o0=!1,N7=0;const W0=new Array(Te);for(x=0;x<Te;x++)W0[x]=0;for(x=i1;x<=G;x++){const be=C[x];if(S1>=Te){I1(be,T,N,!0);continue}let je;if(be.key!=null)je=p1.get(be.key);else for(k1=d1;k1<=Y;k1++)if(W0[k1-d1]===0&&zt(be,g[k1])){je=k1;break}je===void 0?I1(be,T,N,!0):(W0[je-d1]=x+1,je>=N7?N7=je:o0=!0,y(be,g[je],k,null,T,N,$,B,D),S1++)}const I7=o0?wa(W0):k0;for(k1=I7.length-1,x=Te-1;x>=0;x--){const be=d1+x,je=g[be],D7=be+1<O?g[be+1].el:w;W0[x]===0?y(null,je,k,D7,T,N,$,B,D):o0&&(k1<0||x!==I7[k1]?N1(je,k,D7,2):k1--)}}},N1=(C,g,k,w,T=null)=>{const{el:N,type:$,transition:B,children:D,shapeFlag:x}=C;if(x&6){N1(C.component.subTree,g,k,w);return}if(x&128){C.suspense.move(g,k,w);return}if(x&64){$.move(C,g,k,C1);return}if($===W1){r(N,g,k);for(let G=0;G<D.length;G++)N1(D[G],g,k,w);r(C.anchor,g,k);return}if($===o6){v(C,g,k);return}if(w!==2&&x&1&&B)if(w===0)B.beforeEnter(N),r(N,g,k),Ce(()=>B.enter(N),T);else{const{leave:G,delayLeave:Y,afterLeave:i1}=B,d1=()=>r(N,g,k),p1=()=>{G(N,()=>{d1(),i1&&i1()})};Y?Y(N,d1,p1):p1()}else r(N,g,k)},I1=(C,g,k,w=!1,T=!1)=>{const{type:N,props:$,ref:B,children:D,dynamicChildren:x,shapeFlag:O,patchFlag:G,dirs:Y}=C;if(B!=null&&e5(B,null,k,C,!0),O&256){g.ctx.deactivate(C);return}const i1=O&1&&Y,d1=!e2(C);let p1;if(d1&&(p1=$&&$.onVnodeBeforeUnmount)&&Ue(p1,g,C),O&6)q(C.component,k,w);else{if(O&128){C.suspense.unmount(k,w);return}i1&&It(C,null,g,"beforeUnmount"),O&64?C.type.remove(C,g,k,T,C1,w):x&&(N!==W1||G>0&&G&64)?V(x,g,k,!1,!0):(N===W1&&G&384||!T&&O&16)&&V(D,g,k),w&&ie(C)}(d1&&(p1=$&&$.onVnodeUnmounted)||i1)&&Ce(()=>{p1&&Ue(p1,g,C),i1&&It(C,null,g,"unmounted")},k)},ie=C=>{const{type:g,el:k,anchor:w,transition:T}=C;if(g===W1){P(k,w);return}if(g===o6){_(C);return}const N=()=>{i(k),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(C.shapeFlag&1&&T&&!T.persisted){const{leave:$,delayLeave:B}=T,D=()=>$(k,N);B?B(C.el,N,D):D()}else N()},P=(C,g)=>{let k;for(;C!==g;)k=f(C),i(C),C=k;i(g)},q=(C,g,k)=>{const{bum:w,scope:T,update:N,subTree:$,um:B}=C;w&&G2(w),T.stop(),N&&(N.active=!1,I1($,C,g,k)),B&&Ce(B,g),Ce(()=>{C.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},V=(C,g,k,w=!1,T=!1,N=0)=>{for(let $=N;$<C.length;$++)I1(C[$],g,k,w,T)},J=C=>C.shapeFlag&6?J(C.component.subTree):C.shapeFlag&128?C.suspense.next():f(C.anchor||C.el),h1=(C,g,k)=>{C==null?g._vnode&&I1(g._vnode,null,null,!0):y(g._vnode||null,C,g,null,null,null,k),gn(),g._vnode=C},C1={p:y,um:I1,m:N1,r:ie,mt:Q,mc:F,pc:P1,pbc:I,n:J,o:e};let a1,s1;return t&&([a1,s1]=t(C1)),{render:h1,hydrate:a1,createApp:Ma(h1,a1)}}function Dt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function In(e,t,n=!1){const r=e.children,i=t.children;if(t1(r)&&t1(i))for(let s=0;s<r.length;s++){const a=r[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=kt(i[s]),o.el=a.el),n||In(a,o))}}function wa(e){const t=e.slice(),n=[0];let r,i,s,a,o;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,e[n[o]]<c?s=o+1:a=o;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}const Ea=e=>e.__isTeleport,W1=Symbol(void 0),D3=Symbol(void 0),Fe=Symbol(void 0),o6=Symbol(void 0),t2=[];let Ie=null;function U(e=!1){t2.push(Ie=e?null:[])}function Fa(){t2.pop(),Ie=t2[t2.length-1]||null}let m2=1;function s4(e){m2+=e}function Dn(e){return e.dynamicChildren=m2>0?Ie||k0:null,Fa(),m2>0&&Ie&&Ie.push(e),e}function u1(e,t,n,r,i,s){return Dn(K(e,t,n,r,i,s,!0))}function y1(e,t,n,r,i){return Dn(n1(e,t,n,r,i,!0))}function d3(e){return e?e.__v_isVNode===!0:!1}function zt(e,t){return e.type===t.type&&e.key===t.key}const B3="__vInternal",Bn=({key:e})=>e!=null?e:null,X2=({ref:e,ref_key:t,ref_for:n})=>e!=null?Y1(e)||F1(e)||f1(e)?{i:oe,r:e,k:t,f:!!n}:e:null;function K(e,t=null,n=null,r=0,i=null,s=e===W1?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Bn(t),ref:t&&X2(t),scopeId:bn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return o?(J5(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=Y1(n)?8:16),m2>0&&!a&&Ie&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ie.push(l),l}const n1=Ta;function Ta(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===wn)&&(e=Fe),d3(e)){const o=Ot(e,t,!0);return n&&J5(o,n),m2>0&&!s&&Ie&&(o.shapeFlag&6?Ie[Ie.indexOf(e)]=o:Ie.push(o)),o.patchFlag|=-2,o}if(Va(e)&&(e=e.__vccOpts),t){t=Oa(t);let{class:o,style:l}=t;o&&!Y1(o)&&(t.class=l1(o)),B1(l)&&(sn(l)&&!t1(l)&&(l=ne({},l)),t.style=Yt(l))}const a=Y1(e)?1:Xs(e)?128:Ea(e)?64:B1(e)?4:f1(e)?2:0;return K(e,t,n,r,i,a,s,!0)}function Oa(e){return e?sn(e)||B3 in e?ne({},e):e:null}function Ot(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:a}=e,o=t?Aa(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&Bn(o),ref:t&&t.ref?n&&i?t1(i)?i.concat(X2(t)):[i,X2(t)]:X2(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==W1?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ot(e.ssContent),ssFallback:e.ssFallback&&Ot(e.ssFallback),el:e.el,anchor:e.anchor}}function X5(e=" ",t=0){return n1(D3,null,e,t)}function Q1(e="",t=!1){return t?(U(),y1(Fe,null,e)):n1(Fe,null,e)}function qe(e){return e==null||typeof e=="boolean"?n1(Fe):t1(e)?n1(W1,null,e.slice()):typeof e=="object"?kt(e):n1(D3,null,String(e))}function kt(e){return e.el===null||e.memo?e:Ot(e)}function J5(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(t1(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),J5(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(B3 in t)?t._ctx=oe:i===3&&oe&&(oe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else f1(t)?(t={default:t,_ctx:oe},n=32):(t=String(t),r&64?(n=16,t=[X5(t)]):n=8);e.children=t,e.shapeFlag|=n}function Aa(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=l1([t.class,r.class]));else if(i==="style")t.style=Yt([t.style,r.style]);else if(S3(i)){const s=t[i],a=r[i];a&&s!==a&&!(t1(s)&&s.includes(a))&&(t[i]=s?[].concat(s,a):a)}else i!==""&&(t[i]=r[i])}return t}function Ue(e,t,n,r=null){Ee(e,t,7,[n,r])}const Ra=Nn();let Ha=0;function Pa(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Ra,s={uid:Ha++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new z9(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:An(r,i),emitsOptions:pn(r,i),emit:null,emitted:null,propsDefaults:M1,inheritAttrs:r.inheritAttrs,ctx:M1,data:M1,props:M1,attrs:M1,slots:M1,refs:M1,setupState:M1,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=zs.bind(null,s),e.ce&&e.ce(s),s}let J1=null;const ft=()=>J1||oe,x0=e=>{J1=e,e.scope.on()},Qt=()=>{J1&&J1.scope.off(),J1=null};function Vn(e){return e.vnode.shapeFlag&4}let p2=!1;function Na(e,t=!1){p2=t;const{props:n,children:r}=e.vnode,i=Vn(e);ba(e,n,i,t),La(e,r);const s=i?Ia(e,t):void 0;return p2=!1,s}function Ia(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Pe(new Proxy(e.ctx,da));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?$n(e):null;x0(e),I0();const s=Et(r,e,0,[e.props,i]);if(D0(),Qt(),j9(s)){if(s.then(Qt,Qt),t)return s.then(a=>{a4(e,a,t)}).catch(a=>{T3(a,e,0)});e.asyncDep=s}else a4(e,s,t)}else Wn(e,t)}function a4(e,t,n){f1(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:B1(t)&&(e.setupState=un(t)),Wn(e,n)}let o4;function Wn(e,t,n){const r=e.type;if(!e.render){if(!t&&o4&&!r.render){const i=r.template;if(i){const{isCustomElement:s,compilerOptions:a}=e.appContext.config,{delimiters:o,compilerOptions:l}=r,c=ne(ne({isCustomElement:s,delimiters:o},a),l);r.render=o4(i,c)}}e.render=r.render||Be}x0(e),I0(),ha(e),D0(),Qt()}function Da(e){return new Proxy(e.attrs,{get(t,n){return ve(e,"get","$attrs"),t[n]}})}function $n(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Da(e))},slots:e.slots,emit:e.emit,expose:t}}function V3(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(un(Pe(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in u3)return u3[n](e)}}))}function Ba(e,t=!0){return f1(e)?e.displayName||e.name:e.name||t&&e.__name}function Va(e){return f1(e)&&"__vccOpts"in e}const e1=(e,t)=>Vs(e,t,p2);function Q5(){return Wa().slots}function Wa(){const e=ft();return e.setupContext||(e.setupContext=$n(e))}function n0(e,t,n){const r=arguments.length;return r===2?B1(t)&&!t1(t)?d3(t)?n1(e,null,[t]):n1(e,t):n1(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&d3(n)&&(n=[n]),n1(e,t,n))}const $a="3.2.37",ja="http://www.w3.org/2000/svg",Gt=typeof document<"u"?document:null,l4=Gt&&Gt.createElement("template"),Ua={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?Gt.createElementNS(ja,e):Gt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>Gt.createTextNode(e),createComment:e=>Gt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Gt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,s){const a=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{l4.innerHTML=r?`<svg>${e}</svg>`:e;const o=l4.content;if(r){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Za(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function za(e,t,n){const r=e.style,i=Y1(n);if(n&&!i){for(const s in n)t5(r,s,n[s]);if(t&&!Y1(t))for(const s in t)n[s]==null&&t5(r,s,"")}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const c4=/\s*!important$/;function t5(e,t,n){if(t1(n))n.forEach(r=>t5(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Ga(e,t);c4.test(n)?e.setProperty(N0(r),n.replace(c4,""),"important"):e[r]=n}}const u4=["Webkit","Moz","ms"],l6={};function Ga(e,t){const n=l6[t];if(n)return n;let r=Je(t);if(r!=="filter"&&r in e)return l6[t]=r;r=E3(r);for(let i=0;i<u4.length;i++){const s=u4[i]+r;if(s in e)return l6[t]=s}return t}const f4="http://www.w3.org/1999/xlink";function qa(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(f4,t.slice(6,t.length)):e.setAttributeNS(f4,t,n);else{const s=Xi(t);n==null||s&&!W9(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function Ya(e,t,n,r,i,s,a){if(t==="innerHTML"||t==="textContent"){r&&a(r,i,s),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=W9(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(t)}const[jn,Ka]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let n5=0;const Xa=Promise.resolve(),Ja=()=>{n5=0},Qa=()=>n5||(Xa.then(Ja),n5=jn());function ot(e,t,n,r){e.addEventListener(t,n,r)}function eo(e,t,n,r){e.removeEventListener(t,n,r)}function to(e,t,n,r,i=null){const s=e._vei||(e._vei={}),a=s[t];if(r&&a)a.value=r;else{const[o,l]=no(t);if(r){const c=s[t]=ro(r,i);ot(e,o,c,l)}else a&&(eo(e,o,a,l),s[t]=void 0)}}const d4=/(?:Once|Passive|Capture)$/;function no(e){let t;if(d4.test(e)){t={};let n;for(;n=e.match(d4);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[N0(e.slice(2)),t]}function ro(e,t){const n=r=>{const i=r.timeStamp||jn();(Ka||i>=n.attached-1)&&Ee(io(r,n.value),t,5,[r])};return n.value=e,n.attached=Qa(),n}function io(e,t){if(t1(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const h4=/^on[a-z]/,so=(e,t,n,r,i=!1,s,a,o,l)=>{t==="class"?Za(e,r,i):t==="style"?za(e,n,r):S3(t)?I5(t)||to(e,t,n,r,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ao(e,t,r,i))?Ya(e,t,r,s,a,o,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),qa(e,t,r,i))};function ao(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&h4.test(t)&&f1(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||h4.test(t)&&Y1(n)?!1:t in e}const mt="transition",$0="animation",h3=(e,{slots:t})=>n0(Ln,oo(e),t);h3.displayName="Transition";const Un={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};h3.props=ne({},Ln.props,Un);const Bt=(e,t=[])=>{t1(e)?e.forEach(n=>n(...t)):e&&e(...t)},C4=e=>e?t1(e)?e.some(t=>t.length>1):e.length>1:!1;function oo(e){const t={};for(const R in e)R in Un||(t[R]=e[R]);if(e.css===!1)return t;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,m=lo(i),b=m&&m[0],y=m&&m[1],{onBeforeEnter:p,onEnter:L,onEnterCancelled:M,onLeave:v,onLeaveCancelled:_,onBeforeAppear:E=p,onAppear:S=L,onAppearCancelled:H=M}=t,F=(R,j,r1)=>{Vt(R,j?u:o),Vt(R,j?c:a),r1&&r1()},A=(R,j)=>{R._isLeaving=!1,Vt(R,d),Vt(R,h),Vt(R,f),j&&j()},I=R=>(j,r1)=>{const Q=R?S:L,X=()=>F(j,R,r1);Bt(Q,[j,X]),g4(()=>{Vt(j,R?l:s),pt(j,R?u:o),C4(Q)||m4(j,r,b,X)})};return ne(t,{onBeforeEnter(R){Bt(p,[R]),pt(R,s),pt(R,a)},onBeforeAppear(R){Bt(E,[R]),pt(R,l),pt(R,c)},onEnter:I(!1),onAppear:I(!0),onLeave(R,j){R._isLeaving=!0;const r1=()=>A(R,j);pt(R,d),fo(),pt(R,f),g4(()=>{!R._isLeaving||(Vt(R,d),pt(R,h),C4(v)||m4(R,r,y,r1))}),Bt(v,[R,r1])},onEnterCancelled(R){F(R,!1),Bt(M,[R])},onAppearCancelled(R){F(R,!0),Bt(H,[R])},onLeaveCancelled(R){A(R),Bt(_,[R])}})}function lo(e){if(e==null)return null;if(B1(e))return[c6(e.enter),c6(e.leave)];{const t=c6(e);return[t,t]}}function c6(e){return f2(e)}function pt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Vt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function g4(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let co=0;function m4(e,t,n,r){const i=e._endId=++co,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:a,timeout:o,propCount:l}=uo(e,t);if(!a)return r();const c=a+"end";let u=0;const d=()=>{e.removeEventListener(c,f),s()},f=h=>{h.target===e&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},o+1),e.addEventListener(c,f)}function uo(e,t){const n=window.getComputedStyle(e),r=m=>(n[m]||"").split(", "),i=r(mt+"Delay"),s=r(mt+"Duration"),a=p4(i,s),o=r($0+"Delay"),l=r($0+"Duration"),c=p4(o,l);let u=null,d=0,f=0;t===mt?a>0&&(u=mt,d=a,f=s.length):t===$0?c>0&&(u=$0,d=c,f=l.length):(d=Math.max(a,c),u=d>0?a>c?mt:$0:null,f=u?u===mt?s.length:l.length:0);const h=u===mt&&/\b(transform|all)(,|$)/.test(n[mt+"Property"]);return{type:u,timeout:d,propCount:f,hasTransform:h}}function p4(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>b4(n)+b4(e[r])))}function b4(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function fo(){return document.body.offsetHeight}const At=e=>{const t=e.props["onUpdate:modelValue"]||!1;return t1(t)?n=>G2(t,n):t};function ho(e){e.target.composing=!0}function y4(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const r5={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=At(i);const s=r||i.props&&i.props.type==="number";ot(e,t?"change":"input",a=>{if(a.target.composing)return;let o=e.value;n&&(o=o.trim()),s&&(o=f2(o)),e._assign(o)}),n&&ot(e,"change",()=>{e.value=e.value.trim()}),t||(ot(e,"compositionstart",ho),ot(e,"compositionend",y4),ot(e,"change",y4))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},s){if(e._assign=At(s),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(i||e.type==="number")&&f2(e.value)===t))return;const a=t==null?"":t;e.value!==a&&(e.value=a)}},Co={deep:!0,created(e,t,n){e._assign=At(n),ot(e,"change",()=>{const r=e._modelValue,i=S0(e),s=e.checked,a=e._assign;if(t1(r)){const o=N5(r,i),l=o!==-1;if(s&&!l)a(r.concat(i));else if(!s&&l){const c=[...r];c.splice(o,1),a(c)}}else if(P0(r)){const o=new Set(r);s?o.add(i):o.delete(i),a(o)}else a(zn(e,s))})},mounted:_4,beforeUpdate(e,t,n){e._assign=At(n),_4(e,t,n)}};function _4(e,{value:t,oldValue:n},r){e._modelValue=t,t1(t)?e.checked=N5(t,r.props.value)>-1:P0(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=e0(t,zn(e,!0)))}const go={created(e,{value:t},n){e.checked=e0(t,n.props.value),e._assign=At(n),ot(e,"change",()=>{e._assign(S0(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e._assign=At(r),t!==n&&(e.checked=e0(t,r.props.value))}},Zn={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const i=P0(t);ot(e,"change",()=>{const s=Array.prototype.filter.call(e.options,a=>a.selected).map(a=>n?f2(S0(a)):S0(a));e._assign(e.multiple?i?new Set(s):s:s[0])}),e._assign=At(r)},mounted(e,{value:t}){L4(e,t)},beforeUpdate(e,t,n){e._assign=At(n)},updated(e,{value:t}){L4(e,t)}};function L4(e,t){const n=e.multiple;if(!(n&&!t1(t)&&!P0(t))){for(let r=0,i=e.options.length;r<i;r++){const s=e.options[r],a=S0(s);if(n)t1(t)?s.selected=N5(t,a)>-1:s.selected=t.has(a);else if(e0(S0(s),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function S0(e){return"_value"in e?e._value:e.value}function zn(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const mo={created(e,t,n){R2(e,t,n,null,"created")},mounted(e,t,n){R2(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){R2(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){R2(e,t,n,r,"updated")}};function po(e,t){switch(e){case"SELECT":return Zn;case"TEXTAREA":return r5;default:switch(t){case"checkbox":return Co;case"radio":return go;default:return r5}}}function R2(e,t,n,r,i){const a=po(e.tagName,n.props&&n.props.type)[i];a&&a(e,t,n,r)}const bo=["ctrl","shift","alt","meta"],yo={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>bo.some(n=>e[`${n}Key`]&&!t.includes(n))},C3=(e,t)=>(n,...r)=>{for(let i=0;i<t.length;i++){const s=yo[t[i]];if(s&&s(n,t))return}return e(n,...r)},_o={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):j0(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),j0(e,!0),r.enter(e)):r.leave(e,()=>{j0(e,!1)}):j0(e,t))},beforeUnmount(e,{value:t}){j0(e,t)}};function j0(e,t){e.style.display=t?e._vod:"none"}const Lo=ne({patchProp:so},Ua);let k4;function ko(){return k4||(k4=xa(Lo))}const vo=(...e)=>{const t=ko().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Mo(r);if(!i)return;const s=t._component;!f1(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const a=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function Mo(e){return Y1(e)?document.querySelector(e):e}var xo=!1;function H2(e,t,n){return Array.isArray(e)?(e.length=Math.max(e.length,t),e.splice(t,1,n),n):(e[t]=n,n)}function u6(e,t){if(Array.isArray(e)){e.splice(t,1);return}delete e[t]}function So(){return Gn().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Gn(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const wo=typeof Proxy=="function",Eo="devtools-plugin:setup",Fo="plugin:settings:set";let l0,i5;function To(){var e;return l0!==void 0||(typeof window<"u"&&window.performance?(l0=!0,i5=window.performance):typeof global<"u"&&((e=global.perf_hooks)===null||e===void 0?void 0:e.performance)?(l0=!0,i5=global.perf_hooks.performance):l0=!1),l0}function Oo(){return To()?i5.now():Date.now()}class Ao{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const r={};if(t.settings)for(const a in t.settings){const o=t.settings[a];r[a]=o.defaultValue}const i=`__vue-devtools-plugin-settings__${t.id}`;let s=Object.assign({},r);try{const a=localStorage.getItem(i),o=JSON.parse(a);Object.assign(s,o)}catch{}this.fallbacks={getSettings(){return s},setSettings(a){try{localStorage.setItem(i,JSON.stringify(a))}catch{}s=a},now(){return Oo()}},n&&n.on(Fo,(a,o)=>{a===this.plugin.id&&this.fallbacks.setSettings(o)}),this.proxiedOn=new Proxy({},{get:(a,o)=>this.target?this.target.on[o]:(...l)=>{this.onQueue.push({method:o,args:l})}}),this.proxiedTarget=new Proxy({},{get:(a,o)=>this.target?this.target[o]:o==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(o)?(...l)=>(this.targetQueue.push({method:o,args:l,resolve:()=>{}}),this.fallbacks[o](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:o,args:l,resolve:c})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function qn(e,t){const n=e,r=Gn(),i=So(),s=wo&&n.enableEarlyProxy;if(i&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!s))i.emit(Eo,e,t);else{const a=s?new Ao(n,i):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:a}),a&&t(a.proxiedTarget)}}/*!
  * pinia v2.0.20
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let s5;const b2=e=>s5=e,Yn=Symbol("pinia");function r0(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Ke;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Ke||(Ke={}));const Xt=typeof window<"u",v4=Xt,M4=(()=>typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:typeof globalThis=="object"?globalThis:{HTMLElement:null})();function Ro(e,{autoBom:t=!1}={}){return t&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e}function e7(e,t,n){const r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){Jn(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function Kn(e){const t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function J2(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}const Q2=typeof navigator=="object"?navigator:{userAgent:""},Xn=(()=>/Macintosh/.test(Q2.userAgent)&&/AppleWebKit/.test(Q2.userAgent)&&!/Safari/.test(Q2.userAgent))(),Jn=Xt?typeof HTMLAnchorElement<"u"&&"download"in HTMLAnchorElement.prototype&&!Xn?Ho:"msSaveOrOpenBlob"in Q2?Po:No:()=>{};function Ho(e,t="download",n){const r=document.createElement("a");r.download=t,r.rel="noopener",typeof e=="string"?(r.href=e,r.origin!==location.origin?Kn(r.href)?e7(e,t,n):(r.target="_blank",J2(r)):J2(r)):(r.href=URL.createObjectURL(e),setTimeout(function(){URL.revokeObjectURL(r.href)},4e4),setTimeout(function(){J2(r)},0))}function Po(e,t="download",n){if(typeof e=="string")if(Kn(e))e7(e,t,n);else{const r=document.createElement("a");r.href=e,r.target="_blank",setTimeout(function(){J2(r)})}else navigator.msSaveOrOpenBlob(Ro(e,n),t)}function No(e,t,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),typeof e=="string")return e7(e,t,n);const i=e.type==="application/octet-stream",s=/constructor/i.test(String(M4.HTMLElement))||"safari"in M4,a=/CriOS\/[\d]+/.test(navigator.userAgent);if((a||i&&s||Xn)&&typeof FileReader<"u"){const o=new FileReader;o.onloadend=function(){let l=o.result;if(typeof l!="string")throw r=null,new Error("Wrong reader.result type");l=a?l:l.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=l:location.assign(l),r=null},o.readAsDataURL(e)}else{const o=URL.createObjectURL(e);r?r.location.assign(o):location.href=o,r=null,setTimeout(function(){URL.revokeObjectURL(o)},4e4)}}function X1(e,t){const n="\u{1F34D} "+e;typeof __VUE_DEVTOOLS_TOAST__=="function"?__VUE_DEVTOOLS_TOAST__(n,t):t==="error"?console.error(n):t==="warn"?console.warn(n):console.log(n)}function t7(e){return"_a"in e&&"install"in e}function Qn(){if(!("clipboard"in navigator))return X1("Your browser doesn't support the Clipboard API","error"),!0}function er(e){return e instanceof Error&&e.message.toLowerCase().includes("document is not focused")?(X1('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0):!1}async function Io(e){if(!Qn())try{await navigator.clipboard.writeText(JSON.stringify(e.state.value)),X1("Global state copied to clipboard.")}catch(t){if(er(t))return;X1("Failed to serialize the state. Check the console for more details.","error"),console.error(t)}}async function Do(e){if(!Qn())try{e.state.value=JSON.parse(await navigator.clipboard.readText()),X1("Global state pasted from clipboard.")}catch(t){if(er(t))return;X1("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(t)}}async function Bo(e){try{Jn(new Blob([JSON.stringify(e.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(t){X1("Failed to export the state as JSON. Check the console for more details.","error"),console.error(t)}}let et;function Vo(){et||(et=document.createElement("input"),et.type="file",et.accept=".json");function e(){return new Promise((t,n)=>{et.onchange=async()=>{const r=et.files;if(!r)return t(null);const i=r.item(0);return t(i?{text:await i.text(),file:i}:null)},et.oncancel=()=>t(null),et.onerror=n,et.click()})}return e}async function Wo(e){try{const n=await(await Vo())();if(!n)return;const{text:r,file:i}=n;e.state.value=JSON.parse(r),X1(`Global state imported from "${i.name}".`)}catch(t){X1("Failed to export the state as JSON. Check the console for more details.","error"),console.error(t)}}function Ae(e){return{_custom:{display:e}}}const tr="\u{1F34D} Pinia (root)",a5="_root";function $o(e){return t7(e)?{id:a5,label:tr}:{id:e.$id,label:e.$id}}function jo(e){if(t7(e)){const n=Array.from(e._s.keys()),r=e._s;return{state:n.map(s=>({editable:!0,key:s,value:e.state.value[s]})),getters:n.filter(s=>r.get(s)._getters).map(s=>{const a=r.get(s);return{editable:!1,key:s,value:a._getters.reduce((o,l)=>(o[l]=a[l],o),{})}})}}const t={state:Object.keys(e.$state).map(n=>({editable:!0,key:n,value:e.$state[n]}))};return e._getters&&e._getters.length&&(t.getters=e._getters.map(n=>({editable:!1,key:n,value:e[n]}))),e._customProperties.size&&(t.customProperties=Array.from(e._customProperties).map(n=>({editable:!0,key:n,value:e[n]}))),t}function Uo(e){return e?Array.isArray(e)?e.reduce((t,n)=>(t.keys.push(n.key),t.operations.push(n.type),t.oldValue[n.key]=n.oldValue,t.newValue[n.key]=n.newValue,t),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:Ae(e.type),key:Ae(e.key),oldValue:e.oldValue,newValue:e.newValue}:{}}function Zo(e){switch(e){case Ke.direct:return"mutation";case Ke.patchFunction:return"$patch";case Ke.patchObject:return"$patch";default:return"unknown"}}let b0=!0;const e3=[],Ut="pinia:mutations",ae="pinia",g3=e=>"\u{1F34D} "+e;function zo(e,t){qn({id:"dev.esm.pinia",label:"Pinia \u{1F34D}",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:e3,app:e},n=>{typeof n.now!="function"&&X1("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),n.addTimelineLayer({id:Ut,label:"Pinia \u{1F34D}",color:15064968}),n.addInspector({id:ae,label:"Pinia \u{1F34D}",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{Io(t)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await Do(t),n.sendInspectorTree(ae),n.sendInspectorState(ae)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{Bo(t)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await Wo(t),n.sendInspectorTree(ae),n.sendInspectorState(ae)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:"Reset the state (option store only)",action:r=>{const i=t._s.get(r);i?i._isOptionsAPI?(i.$reset(),X1(`Store "${r}" reset.`)):X1(`Cannot reset "${r}" store because it's a setup store.`,"warn"):X1(`Cannot reset "${r}" store because it wasn't found.`,"warn")}}]}),n.on.inspectComponent((r,i)=>{const s=r.componentInstance&&r.componentInstance.proxy;if(s&&s._pStores){const a=r.componentInstance.proxy._pStores;Object.values(a).forEach(o=>{r.instanceData.state.push({type:g3(o.$id),key:"state",editable:!0,value:o._isOptionsAPI?{_custom:{value:m1(o.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>o.$reset()}]}}:Object.keys(o.$state).reduce((l,c)=>(l[c]=o.$state[c],l),{})}),o._getters&&o._getters.length&&r.instanceData.state.push({type:g3(o.$id),key:"getters",editable:!1,value:o._getters.reduce((l,c)=>{try{l[c]=o[c]}catch(u){l[c]=u}return l},{})})})}}),n.on.getInspectorTree(r=>{if(r.app===e&&r.inspectorId===ae){let i=[t];i=i.concat(Array.from(t._s.values())),r.rootNodes=(r.filter?i.filter(s=>"$id"in s?s.$id.toLowerCase().includes(r.filter.toLowerCase()):tr.toLowerCase().includes(r.filter.toLowerCase())):i).map($o)}}),n.on.getInspectorState(r=>{if(r.app===e&&r.inspectorId===ae){const i=r.nodeId===a5?t:t._s.get(r.nodeId);if(!i)return;i&&(r.state=jo(i))}}),n.on.editInspectorState((r,i)=>{if(r.app===e&&r.inspectorId===ae){const s=r.nodeId===a5?t:t._s.get(r.nodeId);if(!s)return X1(`store "${r.nodeId}" not found`,"error");const{path:a}=r;t7(s)?a.unshift("state"):(a.length!==1||!s._customProperties.has(a[0])||a[0]in s.$state)&&a.unshift("$state"),b0=!1,r.set(s,a,r.state.value),b0=!0}}),n.on.editComponentState(r=>{if(r.type.startsWith("\u{1F34D}")){const i=r.type.replace(/^🍍\s*/,""),s=t._s.get(i);if(!s)return X1(`store "${i}" not found`,"error");const{path:a}=r;if(a[0]!=="state")return X1(`Invalid path for store "${i}":
${a}
Only state can be modified.`);a[0]="$state",b0=!1,r.set(s,a,r.state.value),b0=!0}})})}function Go(e,t){e3.includes(g3(t.$id))||e3.push(g3(t.$id)),qn({id:"dev.esm.pinia",label:"Pinia \u{1F34D}",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:e3,app:e,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},n=>{const r=typeof n.now=="function"?n.now.bind(n):Date.now;t.$onAction(({after:a,onError:o,name:l,args:c})=>{const u=nr++;n.addTimelineEvent({layerId:Ut,event:{time:r(),title:"\u{1F6EB} "+l,subtitle:"start",data:{store:Ae(t.$id),action:Ae(l),args:c},groupId:u}}),a(d=>{qt=void 0,n.addTimelineEvent({layerId:Ut,event:{time:r(),title:"\u{1F6EC} "+l,subtitle:"end",data:{store:Ae(t.$id),action:Ae(l),args:c,result:d},groupId:u}})}),o(d=>{qt=void 0,n.addTimelineEvent({layerId:Ut,event:{time:r(),logType:"error",title:"\u{1F4A5} "+l,subtitle:"end",data:{store:Ae(t.$id),action:Ae(l),args:c,error:d},groupId:u}})})},!0),t._customProperties.forEach(a=>{ct(()=>W(t[a]),(o,l)=>{n.notifyComponentUpdate(),n.sendInspectorState(ae),b0&&n.addTimelineEvent({layerId:Ut,event:{time:r(),title:"Change",subtitle:a,data:{newValue:o,oldValue:l},groupId:qt}})},{deep:!0})}),t.$subscribe(({events:a,type:o},l)=>{if(n.notifyComponentUpdate(),n.sendInspectorState(ae),!b0)return;const c={time:r(),title:Zo(o),data:{store:Ae(t.$id),...Uo(a)},groupId:qt};qt=void 0,o===Ke.patchFunction?c.subtitle="\u2935\uFE0F":o===Ke.patchObject?c.subtitle="\u{1F9E9}":a&&!Array.isArray(a)&&(c.subtitle=a.type),a&&(c.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:a}}),n.addTimelineEvent({layerId:Ut,event:c})},{detached:!0,flush:"sync"});const i=t._hotUpdate;t._hotUpdate=Pe(a=>{i(a),n.addTimelineEvent({layerId:Ut,event:{time:r(),title:"\u{1F525} "+t.$id,subtitle:"HMR update",data:{store:Ae(t.$id),info:Ae("HMR update")}}}),n.notifyComponentUpdate(),n.sendInspectorTree(ae),n.sendInspectorState(ae)});const{$dispose:s}=t;t.$dispose=()=>{s(),n.notifyComponentUpdate(),n.sendInspectorTree(ae),n.sendInspectorState(ae),n.getSettings().logStoreChanges&&X1(`Disposed "${t.$id}" store \u{1F5D1}`)},n.notifyComponentUpdate(),n.sendInspectorTree(ae),n.sendInspectorState(ae),n.getSettings().logStoreChanges&&X1(`"${t.$id}" store installed \u{1F195}`)})}let nr=0,qt;function x4(e,t){const n=t.reduce((r,i)=>(r[i]=m1(e)[i],r),{});for(const r in n)e[r]=function(){const i=nr,s=new Proxy(e,{get(...a){return qt=i,Reflect.get(...a)},set(...a){return qt=i,Reflect.set(...a)}});return n[r].apply(s,arguments)}}function qo({app:e,store:t,options:n}){if(!t.$id.startsWith("__hot:")){if(n.state&&(t._isOptionsAPI=!0),typeof n.state=="function"){x4(t,Object.keys(n.actions));const r=t._hotUpdate;m1(t)._hotUpdate=function(i){r.apply(this,arguments),x4(t,Object.keys(i._hmrPayload.actions))}}Go(e,t)}}function Yo(){const e=V5(!0),t=e.run(()=>H1({}));let n=[],r=[];const i=Pe({install(s){b2(i),i._a=s,s.provide(Yn,i),s.config.globalProperties.$pinia=i,v4&&zo(s,i),r.forEach(a=>n.push(a)),r=[]},use(s){return!this._a&&!xo?r.push(s):n.push(s),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return v4&&typeof Proxy<"u"&&i.use(qo),i}function rr(e,t){for(const n in t){const r=t[n];if(!(n in e))continue;const i=e[n];r0(i)&&r0(r)&&!F1(r)&&!lt(r)?e[n]=rr(i,r):e[n]=r}return e}const Ko=()=>{};function S4(e,t,n,r=Ko){e.push(t);const i=()=>{const s=e.indexOf(t);s>-1&&(e.splice(s,1),r())};return!n&&ft()&&N3(i),i}function c0(e,...t){e.slice().forEach(n=>{n(...t)})}function o5(e,t){for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],i=e[n];r0(i)&&r0(r)&&e.hasOwnProperty(n)&&!F1(r)&&!lt(r)?e[n]=o5(i,r):e[n]=r}return e}const Xo=Symbol("pinia:skipHydration");function Jo(e){return!r0(e)||!e.hasOwnProperty(Xo)}const{assign:Re}=Object;function w4(e){return!!(F1(e)&&e.effect)}function E4(e,t,n,r){const{state:i,actions:s,getters:a}=t,o=n.state.value[e];let l;function c(){!o&&!r&&(n.state.value[e]=i?i():{});const u=q7(r?H1(i?i():{}).value:n.state.value[e]);return Re(u,s,Object.keys(a||{}).reduce((d,f)=>(f in u&&console.warn(`[\u{1F34D}]: A getter cannot have the same name as another state property. Rename one of them. Found with "${f}" in store "${e}".`),d[f]=Pe(e1(()=>{b2(n);const h=n._s.get(e);return a[f].call(h,h)})),d),{}))}return l=l5(e,c,t,n,r,!0),l.$reset=function(){const d=i?i():{};this.$patch(f=>{Re(f,d)})},l}function l5(e,t,n={},r,i,s){let a;const o=Re({actions:{}},n);if(!r._e.active)throw new Error("Pinia destroyed");const l={deep:!0};l.onTrigger=F=>{c?h=F:c==!1&&!S._hotUpdating&&(Array.isArray(h)?h.push(F):console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug."))};let c,u,d=Pe([]),f=Pe([]),h;const m=r.state.value[e];!s&&!m&&!i&&(r.state.value[e]={});const b=H1({});let y;function p(F){let A;c=u=!1,h=[],typeof F=="function"?(F(r.state.value[e]),A={type:Ke.patchFunction,storeId:e,events:h}):(o5(r.state.value[e],F),A={type:Ke.patchObject,payload:F,storeId:e,events:h});const I=y=Symbol();l3().then(()=>{y===I&&(c=!0)}),u=!0,c0(d,A,r.state.value[e])}const L=()=>{throw new Error(`\u{1F34D}: Store "${e}" is built using the setup syntax and does not implement $reset().`)};function M(){a.stop(),d=[],f=[],r._s.delete(e)}function v(F,A){return function(){b2(r);const I=Array.from(arguments),R=[],j=[];function r1(Z){R.push(Z)}function Q(Z){j.push(Z)}c0(f,{args:I,name:F,store:S,after:r1,onError:Q});let X;try{X=A.apply(this&&this.$id===e?this:S,I)}catch(Z){throw c0(j,Z),Z}return X instanceof Promise?X.then(Z=>(c0(R,Z),Z)).catch(Z=>(c0(j,Z),Promise.reject(Z))):(c0(R,X),X)}}const _=Pe({actions:{},getters:{},state:[],hotState:b}),E={_p:r,$id:e,$onAction:S4.bind(null,f),$patch:p,$reset:L,$subscribe(F,A={}){const I=S4(d,F,A.detached,()=>R()),R=a.run(()=>ct(()=>r.state.value[e],j=>{(A.flush==="sync"?u:c)&&F({storeId:e,type:Ke.direct,events:h},j)},Re({},l,A)));return I},$dispose:M},S=B0(Re(Xt?{_customProperties:Pe(new Set),_hmrPayload:_}:{},E));r._s.set(e,S);const H=r._e.run(()=>(a=V5(),a.run(()=>t())));for(const F in H){const A=H[F];if(F1(A)&&!w4(A)||lt(A))i?H2(b.value,F,q2(H,F)):s||(m&&Jo(A)&&(F1(A)?A.value=m[F]:o5(A,m[F])),r.state.value[e][F]=A),_.state.push(F);else if(typeof A=="function"){const I=i?A:v(F,A);H[F]=I,_.actions[F]=A,o.actions[F]=A}else w4(A)&&(_.getters[F]=s?n.getters[F]:A,Xt&&(H._getters||(H._getters=Pe([]))).push(F))}Re(S,H),Re(m1(S),H),Object.defineProperty(S,"$state",{get:()=>i?b.value:r.state.value[e],set:F=>{if(i)throw new Error("cannot set hotState");p(A=>{Re(A,F)})}});{S._hotUpdate=Pe(A=>{S._hotUpdating=!0,A._hmrPayload.state.forEach(I=>{if(I in S.$state){const R=A.$state[I],j=S.$state[I];typeof R=="object"&&r0(R)&&r0(j)?rr(R,j):A.$state[I]=j}H2(S,I,q2(A.$state,I))}),Object.keys(S.$state).forEach(I=>{I in A.$state||u6(S,I)}),c=!1,u=!1,r.state.value[e]=q2(A._hmrPayload,"hotState"),u=!0,l3().then(()=>{c=!0});for(const I in A._hmrPayload.actions){const R=A[I];H2(S,I,v(I,R))}for(const I in A._hmrPayload.getters){const R=A._hmrPayload.getters[I],j=s?e1(()=>(b2(r),R.call(S,S))):R;H2(S,I,j)}Object.keys(S._hmrPayload.getters).forEach(I=>{I in A._hmrPayload.getters||u6(S,I)}),Object.keys(S._hmrPayload.actions).forEach(I=>{I in A._hmrPayload.actions||u6(S,I)}),S._hmrPayload=A._hmrPayload,S._getters=A._getters,S._hotUpdating=!1});const F={writable:!0,configurable:!0,enumerable:!1};Xt&&["_p","_hmrPayload","_getters","_customProperties"].forEach(A=>{Object.defineProperty(S,A,{value:S[A],...F})})}return r._p.forEach(F=>{if(Xt){const A=a.run(()=>F({store:S,app:r._a,pinia:r,options:o}));Object.keys(A||{}).forEach(I=>S._customProperties.add(I)),Re(S,A)}else Re(S,a.run(()=>F({store:S,app:r._a,pinia:r,options:o})))}),S.$state&&typeof S.$state=="object"&&typeof S.$state.constructor=="function"&&!S.$state.constructor.toString().includes("[native code]")&&console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${S.$id}".`),m&&s&&n.hydrate&&n.hydrate(S.$state,m),c=!0,u=!0,S}function ir(e,t,n){let r,i;const s=typeof t=="function";typeof e=="string"?(r=e,i=s?n:t):(i=e,r=e.id);function a(o,l){const c=ft();if(o=o||c&&Ve(Yn),o&&b2(o),!s5)throw new Error(`[\u{1F34D}]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);o=s5,o._s.has(r)||(s?l5(r,t,i,o):E4(r,i,o),a._pinia=o);const u=o._s.get(r);if(l){const d="__hot:"+r,f=s?l5(d,t,i,o,!0):E4(d,Re({},i),o,!0);l._hotUpdate(f),delete o.state.value[d],o._s.delete(d)}if(Xt&&c&&c.proxy&&!l){const d=c.proxy,f="_pStores"in d?d._pStores:d._pStores={};f[r]=u}return u}return a.$id=r,a}function Qo(e){return typeof e=="object"&&e!==null}function F4(e,t){return e=Qo(e)?e:Object.create(null),new Proxy(e,{get(n,r,i){return Reflect.get(n,r,i)||Reflect.get(t,r,i)}})}function T4(e){return e!==null&&typeof e=="object"}function c5(e,t){const n=Array.isArray(e)&&Array.isArray(t),r=T4(e)&&T4(t);if(!n&&!r)throw new Error("Can only merge object with object or array with array");const i=n?[]:{};return[...Object.keys(e),...Object.keys(t)].forEach(a=>{Array.isArray(e[a])&&Array.isArray(t[a])?i[a]=[...Object.values(c5(e[a],t[a]))]:t[a]!==null&&typeof t[a]=="object"&&typeof e[a]=="object"?i[a]=c5(e[a],t[a]):e[a]!==void 0&&t[a]===void 0?i[a]=e[a]:e[a]===void 0&&t[a]!==void 0&&(i[a]=t[a])}),i}function O4(e,t){return t.reduce((n,r)=>r==="[]"&&Array.isArray(n)?n:n==null?void 0:n[r],e)}function A4(e,t,n){const r=t.slice(0,-1).reduce((i,s)=>/^(__proto__)$/.test(s)?{}:i[s]=i[s]||{},e);if(Array.isArray(r[t[t.length-1]])&&Array.isArray(n)){const i=r[t[t.length-1]].map((s,a)=>Array.isArray(s)&&typeof s!="object"?[...s,...n[a]]:typeof s=="object"&&s!==null&&Object.keys(s).some(o=>Array.isArray(s[o]))?c5(s,n[a]):{...s,...n[a]});r[t[t.length-1]]=i}else t[t.length-1]===void 0&&Array.isArray(r)&&Array.isArray(n)?r.push(...n):r[t[t.length-1]]=n;return e}function sr(e,t){return t.reduce((n,r)=>{const i=r.split(".");if(!i.includes("[]"))return A4(n,i,O4(e,i));const s=i.indexOf("[]"),a=i.slice(0,s),o=i.slice(0,s+1),l=i.slice(s+1),c=O4(e,o),u=[];for(const d of c)l.length!==0&&(Array.isArray(d)||typeof d=="object")?u.push(sr(d,[l.join(".")])):u.push(d);return A4(n,a,u)},Array.isArray(e)?[]:{})}function R4(e,t,n,r,i){try{const s=t==null?void 0:t.getItem(r);s&&e.$patch(n==null?void 0:n.deserialize(s))}catch(s){i&&console.error(s)}}function el(e={}){return t=>{const{options:{persist:n},store:r}=t;if(!n)return;const i=(Array.isArray(n)?n.map(s=>F4(s,e)):[F4(n,e)]).map(({storage:s=localStorage,beforeRestore:a=null,afterRestore:o=null,serializer:l={serialize:JSON.stringify,deserialize:JSON.parse},key:c=r.$id,paths:u=null,debug:d=!1})=>({storage:s,beforeRestore:a,afterRestore:o,serializer:l,key:c,paths:u,debug:d}));i.forEach(s=>{const{storage:a,serializer:o,key:l,paths:c,beforeRestore:u,afterRestore:d,debug:f}=s;u==null||u(t),R4(r,a,o,l,f),d==null||d(t),r.$subscribe((h,m)=>{try{const b=Array.isArray(c)?sr(m,c):m;a.setItem(l,o.serialize(b))}catch(b){f&&console.error(b)}},{detached:!0})}),r.$hydrate=({runHooks:s=!0}={})=>{i.forEach(a=>{const{beforeRestore:o,afterRestore:l,storage:c,serializer:u,key:d,debug:f}=a;s&&(o==null||o(t)),R4(r,c,u,d,f),s&&(l==null||l(t))})}}}var tl=el();/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const p0=typeof window<"u";function nl(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const v1=Object.assign;function f6(e,t){const n={};for(const r in t){const i=t[r];n[r]=We(i)?i.map(e):e(i)}return n}const n2=()=>{},We=Array.isArray,rl=/\/$/,il=e=>e.replace(rl,"");function d6(e,t,n="/"){let r,i={},s="",a="";const o=t.indexOf("#");let l=t.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(r=t.slice(0,l),s=t.slice(l+1,o>-1?o:t.length),i=e(s)),o>-1&&(r=r||t.slice(0,o),a=t.slice(o,t.length)),r=ll(r!=null?r:t,n),{fullPath:r+(s&&"?")+s+a,path:r,query:i,hash:a}}function sl(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function H4(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function al(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&w0(t.matched[r],n.matched[i])&&ar(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function w0(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ar(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ol(e[n],t[n]))return!1;return!0}function ol(e,t){return We(e)?P4(e,t):We(t)?P4(t,e):e===t}function P4(e,t){return We(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function ll(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i=n.length-1,s,a;for(s=0;s<r.length;s++)if(a=r[s],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var y2;(function(e){e.pop="pop",e.push="push"})(y2||(y2={}));var r2;(function(e){e.back="back",e.forward="forward",e.unknown=""})(r2||(r2={}));function cl(e){if(!e)if(p0){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),il(e)}const ul=/^[^#]+#/;function fl(e,t){return e.replace(ul,"#")+t}function dl(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const W3=()=>({left:window.pageXOffset,top:window.pageYOffset});function hl(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=dl(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function N4(e,t){return(history.state?history.state.position-t:-1)+e}const u5=new Map;function Cl(e,t){u5.set(e,t)}function gl(e){const t=u5.get(e);return u5.delete(e),t}let ml=()=>location.protocol+"//"+location.host;function or(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let o=i.includes(e.slice(s))?e.slice(s).length:1,l=i.slice(o);return l[0]!=="/"&&(l="/"+l),H4(l,"")}return H4(n,e)+r+i}function pl(e,t,n,r){let i=[],s=[],a=null;const o=({state:f})=>{const h=or(e,location),m=n.value,b=t.value;let y=0;if(f){if(n.value=h,t.value=f,a&&a===m){a=null;return}y=b?f.position-b.position:0}else r(h);i.forEach(p=>{p(n.value,m,{delta:y,type:y2.pop,direction:y?y>0?r2.forward:r2.back:r2.unknown})})};function l(){a=n.value}function c(f){i.push(f);const h=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return s.push(h),h}function u(){const{history:f}=window;!f.state||f.replaceState(v1({},f.state,{scroll:W3()}),"")}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function I4(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?W3():null}}function bl(e){const{history:t,location:n}=window,r={value:or(e,n)},i={value:t.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:ml()+e+l;try{t[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(h){console.error(h),n[u?"replace":"assign"](f)}}function a(l,c){const u=v1({},t.state,I4(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),r.value=l}function o(l,c){const u=v1({},i.value,t.state,{forward:l,scroll:W3()});s(u.current,u,!0);const d=v1({},I4(r.value,l,null),{position:u.position+1},c);s(l,d,!1),r.value=l}return{location:r,state:i,push:o,replace:a}}function yl(e){e=cl(e);const t=bl(e),n=pl(e,t.state,t.location,t.replace);function r(s,a=!0){a||n.pauseListeners(),history.go(s)}const i=v1({location:"",base:e,go:r,createHref:fl.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function _l(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),yl(e)}function Ll(e){return typeof e=="string"||e&&typeof e=="object"}function lr(e){return typeof e=="string"||typeof e=="symbol"}const bt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},cr=Symbol("");var D4;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(D4||(D4={}));function E0(e,t){return v1(new Error,{type:e,[cr]:!0},t)}function tt(e,t){return e instanceof Error&&cr in e&&(t==null||!!(e.type&t))}const B4="[^/]+?",kl={sensitive:!1,strict:!1,start:!0,end:!0},vl=/[.+*?^${}()[\]/\\]/g;function Ml(e,t){const n=v1({},kl,t),r=[];let i=n.start?"^":"";const s=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=40+(n.sensitive?.25:0);if(f.type===0)d||(i+="/"),i+=f.value.replace(vl,"\\$&"),h+=40;else if(f.type===1){const{value:m,repeatable:b,optional:y,regexp:p}=f;s.push({name:m,repeatable:b,optional:y});const L=p||B4;if(L!==B4){h+=10;try{new RegExp(`(${L})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${m}" (${L}): `+v.message)}}let M=b?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;d||(M=y&&c.length<2?`(?:/${M})`:"/"+M),y&&(M+="?"),i+=M,h+=20,y&&(h+=-8),b&&(h+=-20),L===".*"&&(h+=-50)}u.push(h)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function o(c){const u=c.match(a),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",m=s[f-1];d[m.name]=h&&m.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===0)u+=h.value;else if(h.type===1){const{value:m,repeatable:b,optional:y}=h,p=m in c?c[m]:"";if(We(p)&&!b)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const L=We(p)?p.join("/"):p;if(!L)if(y)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);u+=L}}return u||"/"}return{re:a,score:r,keys:s,parse:o,stringify:l}}function xl(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Sl(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const s=xl(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(V4(r))return 1;if(V4(i))return-1}return i.length-r.length}function V4(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const wl={type:0,value:""},El=/[a-zA-Z0-9_]/;function Fl(e){if(!e)return[[]];if(e==="/")return[[wl]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,r=n;const i=[];let s;function a(){s&&i.push(s),s=[]}let o=0,l,c="",u="";function d(){!c||(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;o<e.length;){if(l=e[o++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),a()):l===":"?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:El.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),a(),i}function Tl(e,t,n){const r=Ml(Fl(e.path),n),i=v1(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Ol(e,t){const n=[],r=new Map;t=$4({strict:!1,end:!0,sensitive:!1},t);function i(u){return r.get(u)}function s(u,d,f){const h=!f,m=Rl(u);m.aliasOf=f&&f.record;const b=$4(t,u),y=[m];if("alias"in u){const M=typeof u.alias=="string"?[u.alias]:u.alias;for(const v of M)y.push(v1({},m,{components:f?f.record.components:m.components,path:v,aliasOf:f?f.record:m}))}let p,L;for(const M of y){const{path:v}=M;if(d&&v[0]!=="/"){const _=d.record.path,E=_[_.length-1]==="/"?"":"/";M.path=d.record.path+(v&&E+v)}if(p=Tl(M,d,b),f?f.alias.push(p):(L=L||p,L!==p&&L.alias.push(p),h&&u.name&&!W4(p)&&a(u.name)),m.children){const _=m.children;for(let E=0;E<_.length;E++)s(_[E],p,f&&f.children[E])}f=f||p,l(p)}return L?()=>{a(L)}:n2}function a(u){if(lr(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return n}function l(u){let d=0;for(;d<n.length&&Sl(u,n[d])>=0&&(u.record.path!==n[d].record.path||!ur(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!W4(u)&&r.set(u.record.name,u)}function c(u,d){let f,h={},m,b;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw E0(1,{location:u});b=f.record.name,h=v1(Al(d.params,f.keys.filter(L=>!L.optional).map(L=>L.name)),u.params),m=f.stringify(h)}else if("path"in u)m=u.path,f=n.find(L=>L.re.test(m)),f&&(h=f.parse(m),b=f.record.name);else{if(f=d.name?r.get(d.name):n.find(L=>L.re.test(d.path)),!f)throw E0(1,{location:u,currentLocation:d});b=f.record.name,h=v1({},d.params,u.params),m=f.stringify(h)}const y=[];let p=f;for(;p;)y.unshift(p.record),p=p.parent;return{name:b,path:m,params:h,matched:y,meta:Pl(y)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:a,getRoutes:o,getRecordMatcher:i}}function Al(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Rl(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Hl(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Hl(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function W4(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Pl(e){return e.reduce((t,n)=>v1(t,n.meta),{})}function $4(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ur(e,t){return t.children.some(n=>n===e||ur(e,n))}const fr=/#/g,Nl=/&/g,Il=/\//g,Dl=/=/g,Bl=/\?/g,dr=/\+/g,Vl=/%5B/g,Wl=/%5D/g,hr=/%5E/g,$l=/%60/g,Cr=/%7B/g,jl=/%7C/g,gr=/%7D/g,Ul=/%20/g;function n7(e){return encodeURI(""+e).replace(jl,"|").replace(Vl,"[").replace(Wl,"]")}function Zl(e){return n7(e).replace(Cr,"{").replace(gr,"}").replace(hr,"^")}function f5(e){return n7(e).replace(dr,"%2B").replace(Ul,"+").replace(fr,"%23").replace(Nl,"%26").replace($l,"`").replace(Cr,"{").replace(gr,"}").replace(hr,"^")}function zl(e){return f5(e).replace(Dl,"%3D")}function Gl(e){return n7(e).replace(fr,"%23").replace(Bl,"%3F")}function ql(e){return e==null?"":Gl(e).replace(Il,"%2F")}function m3(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Yl(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(dr," "),a=s.indexOf("="),o=m3(a<0?s:s.slice(0,a)),l=a<0?null:m3(s.slice(a+1));if(o in t){let c=t[o];We(c)||(c=t[o]=[c]),c.push(l)}else t[o]=l}return t}function j4(e){let t="";for(let n in e){const r=e[n];if(n=zl(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(We(r)?r.map(s=>s&&f5(s)):[r&&f5(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Kl(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=We(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const Xl=Symbol(""),U4=Symbol(""),$3=Symbol(""),mr=Symbol(""),d5=Symbol("");function U0(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function vt(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,o)=>{const l=d=>{d===!1?o(E0(4,{from:n,to:t})):d instanceof Error?o(d):Ll(d)?o(E0(2,{from:t,to:d})):(s&&r.enterCallbacks[i]===s&&typeof d=="function"&&s.push(d),a())},c=e.call(r&&r.instances[i],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(d=>o(d))})}function h6(e,t,n,r){const i=[];for(const s of e)for(const a in s.components){let o=s.components[a];if(!(t!=="beforeRouteEnter"&&!s.instances[a]))if(Jl(o)){const c=(o.__vccOpts||o)[t];c&&i.push(vt(c,n,r,s,a))}else{let l=o();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=nl(c)?c.default:c;s.components[a]=u;const f=(u.__vccOpts||u)[t];return f&&vt(f,n,r,s,a)()}))}}return i}function Jl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Z4(e){const t=Ve($3),n=Ve(mr),r=e1(()=>t.resolve(W(e.to))),i=e1(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(w0.bind(null,u));if(f>-1)return f;const h=z4(l[c-2]);return c>1&&z4(u)===h&&d[d.length-1].path!==h?d.findIndex(w0.bind(null,l[c-2])):f}),s=e1(()=>i.value>-1&&tc(n.params,r.value.params)),a=e1(()=>i.value>-1&&i.value===n.matched.length-1&&ar(n.params,r.value.params));function o(l={}){return ec(l)?t[W(e.replace)?"replace":"push"](W(e.to)).catch(n2):Promise.resolve()}return{route:r,href:e1(()=>r.value.href),isActive:s,isExactActive:a,navigate:o}}const Ql=Y5({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Z4,setup(e,{slots:t}){const n=B0(Z4(e)),{options:r}=Ve($3),i=e1(()=>({[G4(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[G4(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:n0("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),j3=Ql;function ec(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function tc(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!We(i)||i.length!==r.length||r.some((s,a)=>s!==i[a]))return!1}return!0}function z4(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const G4=(e,t,n)=>e!=null?e:t!=null?t:n,nc=Y5({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ve(d5),i=e1(()=>e.route||r.value),s=Ve(U4,0),a=e1(()=>{let c=W(s);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),o=e1(()=>i.value.matched[a.value]);Y2(U4,e1(()=>a.value+1)),Y2(Xl,o),Y2(d5,i);const l=H1();return ct(()=>[l.value,o.value,e.name],([c,u,d],[f,h,m])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!w0(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=i.value,u=e.name,d=o.value,f=d&&d.components[u];if(!f)return q4(n.default,{Component:f,route:c});const h=d.props[u],m=h?h===!0?c.params:typeof h=="function"?h(c):h:null,y=n0(f,v1({},m,t,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return q4(n.default,{Component:y,route:c})||y}}});function q4(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const pr=nc;function rc(e){const t=Ol(e.routes,e),n=e.parseQuery||Yl,r=e.stringifyQuery||j4,i=e.history,s=U0(),a=U0(),o=U0(),l=ln(bt);let c=bt;p0&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=f6.bind(null,P=>""+P),d=f6.bind(null,ql),f=f6.bind(null,m3);function h(P,q){let V,J;return lr(P)?(V=t.getRecordMatcher(P),J=q):J=P,t.addRoute(J,V)}function m(P){const q=t.getRecordMatcher(P);q&&t.removeRoute(q)}function b(){return t.getRoutes().map(P=>P.record)}function y(P){return!!t.getRecordMatcher(P)}function p(P,q){if(q=v1({},q||l.value),typeof P=="string"){const s1=d6(n,P,q.path),C=t.resolve({path:s1.path},q),g=i.createHref(s1.fullPath);return v1(s1,C,{params:f(C.params),hash:m3(s1.hash),redirectedFrom:void 0,href:g})}let V;if("path"in P)V=v1({},P,{path:d6(n,P.path,q.path).path});else{const s1=v1({},P.params);for(const C in s1)s1[C]==null&&delete s1[C];V=v1({},P,{params:d(P.params)}),q.params=d(q.params)}const J=t.resolve(V,q),h1=P.hash||"";J.params=u(f(J.params));const C1=sl(r,v1({},P,{hash:Zl(h1),path:J.path})),a1=i.createHref(C1);return v1({fullPath:C1,hash:h1,query:r===j4?Kl(P.query):P.query||{}},J,{redirectedFrom:void 0,href:a1})}function L(P){return typeof P=="string"?d6(n,P,l.value.path):v1({},P)}function M(P,q){if(c!==P)return E0(8,{from:q,to:P})}function v(P){return S(P)}function _(P){return v(v1(L(P),{replace:!0}))}function E(P){const q=P.matched[P.matched.length-1];if(q&&q.redirect){const{redirect:V}=q;let J=typeof V=="function"?V(P):V;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=L(J):{path:J},J.params={}),v1({query:P.query,hash:P.hash,params:"path"in J?{}:P.params},J)}}function S(P,q){const V=c=p(P),J=l.value,h1=P.state,C1=P.force,a1=P.replace===!0,s1=E(V);if(s1)return S(v1(L(s1),{state:h1,force:C1,replace:a1}),q||V);const C=V;C.redirectedFrom=q;let g;return!C1&&al(r,J,V)&&(g=E0(16,{to:C,from:J}),z1(J,J,!0,!1)),(g?Promise.resolve(g):F(C,J)).catch(k=>tt(k)?tt(k,2)?k:P1(k):Z(k,C,J)).then(k=>{if(k){if(tt(k,2))return S(v1({replace:a1},L(k.to),{state:h1,force:C1}),q||C)}else k=I(C,J,!0,a1,h1);return A(C,J,k),k})}function H(P,q){const V=M(P,q);return V?Promise.reject(V):Promise.resolve()}function F(P,q){let V;const[J,h1,C1]=ic(P,q);V=h6(J.reverse(),"beforeRouteLeave",P,q);for(const s1 of J)s1.leaveGuards.forEach(C=>{V.push(vt(C,P,q))});const a1=H.bind(null,P,q);return V.push(a1),u0(V).then(()=>{V=[];for(const s1 of s.list())V.push(vt(s1,P,q));return V.push(a1),u0(V)}).then(()=>{V=h6(h1,"beforeRouteUpdate",P,q);for(const s1 of h1)s1.updateGuards.forEach(C=>{V.push(vt(C,P,q))});return V.push(a1),u0(V)}).then(()=>{V=[];for(const s1 of P.matched)if(s1.beforeEnter&&!q.matched.includes(s1))if(We(s1.beforeEnter))for(const C of s1.beforeEnter)V.push(vt(C,P,q));else V.push(vt(s1.beforeEnter,P,q));return V.push(a1),u0(V)}).then(()=>(P.matched.forEach(s1=>s1.enterCallbacks={}),V=h6(C1,"beforeRouteEnter",P,q),V.push(a1),u0(V))).then(()=>{V=[];for(const s1 of a.list())V.push(vt(s1,P,q));return V.push(a1),u0(V)}).catch(s1=>tt(s1,8)?s1:Promise.reject(s1))}function A(P,q,V){for(const J of o.list())J(P,q,V)}function I(P,q,V,J,h1){const C1=M(P,q);if(C1)return C1;const a1=q===bt,s1=p0?history.state:{};V&&(J||a1?i.replace(P.fullPath,v1({scroll:a1&&s1&&s1.scroll},h1)):i.push(P.fullPath,h1)),l.value=P,z1(P,q,V,a1),P1()}let R;function j(){R||(R=i.listen((P,q,V)=>{if(!ie.listening)return;const J=p(P),h1=E(J);if(h1){S(v1(h1,{replace:!0}),J).catch(n2);return}c=J;const C1=l.value;p0&&Cl(N4(C1.fullPath,V.delta),W3()),F(J,C1).catch(a1=>tt(a1,12)?a1:tt(a1,2)?(S(a1.to,J).then(s1=>{tt(s1,20)&&!V.delta&&V.type===y2.pop&&i.go(-1,!1)}).catch(n2),Promise.reject()):(V.delta&&i.go(-V.delta,!1),Z(a1,J,C1))).then(a1=>{a1=a1||I(J,C1,!1),a1&&(V.delta&&!tt(a1,8)?i.go(-V.delta,!1):V.type===y2.pop&&tt(a1,20)&&i.go(-1,!1)),A(J,C1,a1)}).catch(n2)}))}let r1=U0(),Q=U0(),X;function Z(P,q,V){P1(P);const J=Q.list();return J.length?J.forEach(h1=>h1(P,q,V)):console.error(P),Promise.reject(P)}function c1(){return X&&l.value!==bt?Promise.resolve():new Promise((P,q)=>{r1.add([P,q])})}function P1(P){return X||(X=!P,j(),r1.list().forEach(([q,V])=>P?V(P):q()),r1.reset()),P}function z1(P,q,V,J){const{scrollBehavior:h1}=e;if(!p0||!h1)return Promise.resolve();const C1=!V&&gl(N4(P.fullPath,0))||(J||!V)&&history.state&&history.state.scroll||null;return l3().then(()=>h1(P,q,C1)).then(a1=>a1&&hl(a1)).catch(a1=>Z(a1,P,q))}const U1=P=>i.go(P);let N1;const I1=new Set,ie={currentRoute:l,listening:!0,addRoute:h,removeRoute:m,hasRoute:y,getRoutes:b,resolve:p,options:e,push:v,replace:_,go:U1,back:()=>U1(-1),forward:()=>U1(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:Q.add,isReady:c1,install(P){const q=this;P.component("RouterLink",j3),P.component("RouterView",pr),P.config.globalProperties.$router=q,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>W(l)}),p0&&!N1&&l.value===bt&&(N1=!0,v(i.location).catch(h1=>{}));const V={};for(const h1 in bt)V[h1]=e1(()=>l.value[h1]);P.provide($3,q),P.provide(mr,B0(V)),P.provide(d5,l);const J=P.unmount;I1.add(P),P.unmount=function(){I1.delete(P),I1.size<1&&(c=bt,R&&R(),R=null,l.value=bt,N1=!1,X=!1),J()}}};return ie}function u0(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function ic(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let a=0;a<s;a++){const o=t.matched[a];o&&(e.matched.find(c=>w0(c,o))?r.push(o):n.push(o));const l=e.matched[a];l&&(t.matched.find(c=>w0(c,l))||i.push(l))}return[n,r,i]}function br(){return Ve($3)}const sc={__name:"App",setup(e){return(t,n)=>(U(),y1(W(pr)))}},ac="modulepreload",oc=function(e){return"/"+e},Y4={},nt=function(t,n,r){return!n||n.length===0?t():Promise.all(n.map(i=>{if(i=oc(i),i in Y4)return;Y4[i]=!0;const s=i.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${a}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":ac,s||(o.as="script",o.crossOrigin=""),o.href=i,document.head.appendChild(o),s)return new Promise((l,c)=>{o.addEventListener("load",l),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},lc={aside:"bg-gray-800",asideScrollbars:"aside-scrollbars-gray",asideBrand:"bg-gray-900 text-white",asideMenuItem:"text-gray-300 hover:text-white",asideMenuItemActive:"font-bold text-white",asideMenuDropdown:"bg-gray-700/50",navBarItemLabel:"text-black",navBarItemLabelHover:"hover:text-blue-500",navBarItemLabelActiveColor:"text-blue-600",overlay:"from-gray-700 via-gray-900 to-gray-700"},cc={aside:"bg-white",asideScrollbars:"aside-scrollbars-light",asideBrand:"",asideMenuItem:"text-blue-600 hover:text-black dark:text-white",asideMenuItemActive:"font-bold text-black dark:text-white",asideMenuDropdown:"bg-gray-100/75",navBarItemLabel:"text-blue-600",navBarItemLabelHover:"hover:text-black",navBarItemLabelActiveColor:"text-black",overlay:"from-white via-gray-100 to-white"},K4=Object.freeze(Object.defineProperty({__proto__:null,basic:lc,white:cc},Symbol.toStringTag,{value:"Module"})),h5="darkMode",yr="style",_r="xl:max-w-6xl xl:mx-auto",ht=ir("style",{state:()=>({asideStyle:"",asideScrollbarsStyle:"",asideBrandStyle:"",asideMenuItemStyle:"",asideMenuItemActiveStyle:"",asideMenuDropdownStyle:"",navBarItemLabelStyle:"",navBarItemLabelHoverStyle:"",navBarItemLabelActiveColorStyle:"",overlayStyle:"",darkMode:!1}),actions:{setStyle(e){if(!K4[e])return;typeof localStorage<"u"&&localStorage.setItem(yr,e);const t=K4[e];for(const n in t)this[`${n}Style`]=t[n]},setDarkMode(e=null){this.darkMode=e!==null?e:!this.darkMode,typeof localStorage<"u"&&localStorage.setItem(h5,this.darkMode?"1":"0"),typeof document<"u"&&(document.body.classList[this.darkMode?"add":"remove"]("dark-scrollbars"),document.documentElement.classList[this.darkMode?"add":"remove"]("dark-scrollbars-compat"))}}});var uc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Lr={exports:{}},r7={exports:{}},kr=function(t,n){return function(){for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];return t.apply(n,i)}},dc=kr,i7=Object.prototype.toString,s7=function(e){return function(t){var n=i7.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())}}(Object.create(null));function i0(e){return e=e.toLowerCase(),function(n){return s7(n)===e}}function a7(e){return Array.isArray(e)}function p3(e){return typeof e>"u"}function hc(e){return e!==null&&!p3(e)&&e.constructor!==null&&!p3(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var vr=i0("ArrayBuffer");function Cc(e){var t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&vr(e.buffer),t}function gc(e){return typeof e=="string"}function mc(e){return typeof e=="number"}function Mr(e){return e!==null&&typeof e=="object"}function t3(e){if(s7(e)!=="object")return!1;var t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}var pc=i0("Date"),bc=i0("File"),yc=i0("Blob"),_c=i0("FileList");function o7(e){return i7.call(e)==="[object Function]"}function Lc(e){return Mr(e)&&o7(e.pipe)}function kc(e){var t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||i7.call(e)===t||o7(e.toString)&&e.toString()===t)}var vc=i0("URLSearchParams");function Mc(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function xc(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function l7(e,t){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),a7(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function C5(){var e={};function t(i,s){t3(e[s])&&t3(i)?e[s]=C5(e[s],i):t3(i)?e[s]=C5({},i):a7(i)?e[s]=i.slice():e[s]=i}for(var n=0,r=arguments.length;n<r;n++)l7(arguments[n],t);return e}function Sc(e,t,n){return l7(t,function(i,s){n&&typeof i=="function"?e[s]=dc(i,n):e[s]=i}),e}function wc(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function Ec(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)}function Fc(e,t,n){var r,i,s,a={};t=t||{};do{for(r=Object.getOwnPropertyNames(e),i=r.length;i-- >0;)s=r[i],a[s]||(t[s]=e[s],a[s]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t}function Tc(e,t,n){e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return r!==-1&&r===n}function Oc(e){if(!e)return null;var t=e.length;if(p3(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n}var Ac=function(e){return function(t){return e&&t instanceof e}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),re={isArray:a7,isArrayBuffer:vr,isBuffer:hc,isFormData:kc,isArrayBufferView:Cc,isString:gc,isNumber:mc,isObject:Mr,isPlainObject:t3,isUndefined:p3,isDate:pc,isFile:bc,isBlob:yc,isFunction:o7,isStream:Lc,isURLSearchParams:vc,isStandardBrowserEnv:xc,forEach:l7,merge:C5,extend:Sc,trim:Mc,stripBOM:wc,inherits:Ec,toFlatObject:Fc,kindOf:s7,kindOfTest:i0,endsWith:Tc,toArray:Oc,isTypedArray:Ac,isFileList:_c},f0=re;function X4(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var xr=function(t,n,r){if(!n)return t;var i;if(r)i=r(n);else if(f0.isURLSearchParams(n))i=n.toString();else{var s=[];f0.forEach(n,function(l,c){l===null||typeof l>"u"||(f0.isArray(l)?c=c+"[]":l=[l],f0.forEach(l,function(d){f0.isDate(d)?d=d.toISOString():f0.isObject(d)&&(d=JSON.stringify(d)),s.push(X4(c)+"="+X4(d))}))}),i=s.join("&")}if(i){var a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t},Rc=re;function U3(){this.handlers=[]}U3.prototype.use=function(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1};U3.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)};U3.prototype.forEach=function(t){Rc.forEach(this.handlers,function(r){r!==null&&t(r)})};var Hc=U3,Pc=re,Nc=function(t,n){Pc.forEach(t,function(i,s){s!==n&&s.toUpperCase()===n.toUpperCase()&&(t[n]=i,delete t[s])})},Sr=re;function F0(e,t,n,r,i){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}Sr.inherits(F0,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var wr=F0.prototype,Er={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){Er[e]={value:e}});Object.defineProperties(F0,Er);Object.defineProperty(wr,"isAxiosError",{value:!0});F0.from=function(e,t,n,r,i,s){var a=Object.create(wr);return Sr.toFlatObject(e,a,function(l){return l!==Error.prototype}),F0.call(a,e.message,t,n,r,i),a.name=e.name,s&&Object.assign(a,s),a};var V0=F0,Fr={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Oe=re;function Ic(e,t){t=t||new FormData;var n=[];function r(s){return s===null?"":Oe.isDate(s)?s.toISOString():Oe.isArrayBuffer(s)||Oe.isTypedArray(s)?typeof Blob=="function"?new Blob([s]):Buffer.from(s):s}function i(s,a){if(Oe.isPlainObject(s)||Oe.isArray(s)){if(n.indexOf(s)!==-1)throw Error("Circular reference detected in "+a);n.push(s),Oe.forEach(s,function(l,c){if(!Oe.isUndefined(l)){var u=a?a+"."+c:c,d;if(l&&!a&&typeof l=="object"){if(Oe.endsWith(c,"{}"))l=JSON.stringify(l);else if(Oe.endsWith(c,"[]")&&(d=Oe.toArray(l))){d.forEach(function(f){!Oe.isUndefined(f)&&t.append(u,r(f))});return}}i(l,u)}}),n.pop()}else t.append(a,r(s))}return i(e),t}var Tr=Ic,C6,J4;function Dc(){if(J4)return C6;J4=1;var e=V0;return C6=function(n,r,i){var s=i.config.validateStatus;!i.status||!s||s(i.status)?n(i):r(new e("Request failed with status code "+i.status,[e.ERR_BAD_REQUEST,e.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))},C6}var g6,Q4;function Bc(){if(Q4)return g6;Q4=1;var e=re;return g6=e.isStandardBrowserEnv()?function(){return{write:function(r,i,s,a,o,l){var c=[];c.push(r+"="+encodeURIComponent(i)),e.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),e.isString(a)&&c.push("path="+a),e.isString(o)&&c.push("domain="+o),l===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(r){var i=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),g6}var Vc=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)},Wc=function(t,n){return n?t.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):t},$c=Vc,jc=Wc,Or=function(t,n){return t&&!$c(n)?jc(t,n):n},m6,e8;function Uc(){if(e8)return m6;e8=1;var e=re,t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return m6=function(r){var i={},s,a,o;return r&&e.forEach(r.split(`
`),function(c){if(o=c.indexOf(":"),s=e.trim(c.substr(0,o)).toLowerCase(),a=e.trim(c.substr(o+1)),s){if(i[s]&&t.indexOf(s)>=0)return;s==="set-cookie"?i[s]=(i[s]?i[s]:[]).concat([a]):i[s]=i[s]?i[s]+", "+a:a}}),i},m6}var p6,t8;function Zc(){if(t8)return p6;t8=1;var e=re;return p6=e.isStandardBrowserEnv()?function(){var n=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),i;function s(a){var o=a;return n&&(r.setAttribute("href",o),o=r.href),r.setAttribute("href",o),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return i=s(window.location.href),function(o){var l=e.isString(o)?s(o):o;return l.protocol===i.protocol&&l.host===i.host}}():function(){return function(){return!0}}(),p6}var b6,n8;function Z3(){if(n8)return b6;n8=1;var e=V0,t=re;function n(r){e.call(this,r==null?"canceled":r,e.ERR_CANCELED),this.name="CanceledError"}return t.inherits(n,e,{__CANCEL__:!0}),b6=n,b6}var y6,r8;function zc(){return r8||(r8=1,y6=function(t){var n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return n&&n[1]||""}),y6}var _6,i8;function s8(){if(i8)return _6;i8=1;var e=re,t=Dc(),n=Bc(),r=xr,i=Or,s=Uc(),a=Zc(),o=Fr,l=V0,c=Z3(),u=zc();return _6=function(f){return new Promise(function(m,b){var y=f.data,p=f.headers,L=f.responseType,M;function v(){f.cancelToken&&f.cancelToken.unsubscribe(M),f.signal&&f.signal.removeEventListener("abort",M)}e.isFormData(y)&&e.isStandardBrowserEnv()&&delete p["Content-Type"];var _=new XMLHttpRequest;if(f.auth){var E=f.auth.username||"",S=f.auth.password?unescape(encodeURIComponent(f.auth.password)):"";p.Authorization="Basic "+btoa(E+":"+S)}var H=i(f.baseURL,f.url);_.open(f.method.toUpperCase(),r(H,f.params,f.paramsSerializer),!0),_.timeout=f.timeout;function F(){if(!!_){var R="getAllResponseHeaders"in _?s(_.getAllResponseHeaders()):null,j=!L||L==="text"||L==="json"?_.responseText:_.response,r1={data:j,status:_.status,statusText:_.statusText,headers:R,config:f,request:_};t(function(X){m(X),v()},function(X){b(X),v()},r1),_=null}}if("onloadend"in _?_.onloadend=F:_.onreadystatechange=function(){!_||_.readyState!==4||_.status===0&&!(_.responseURL&&_.responseURL.indexOf("file:")===0)||setTimeout(F)},_.onabort=function(){!_||(b(new l("Request aborted",l.ECONNABORTED,f,_)),_=null)},_.onerror=function(){b(new l("Network Error",l.ERR_NETWORK,f,_,_)),_=null},_.ontimeout=function(){var j=f.timeout?"timeout of "+f.timeout+"ms exceeded":"timeout exceeded",r1=f.transitional||o;f.timeoutErrorMessage&&(j=f.timeoutErrorMessage),b(new l(j,r1.clarifyTimeoutError?l.ETIMEDOUT:l.ECONNABORTED,f,_)),_=null},e.isStandardBrowserEnv()){var A=(f.withCredentials||a(H))&&f.xsrfCookieName?n.read(f.xsrfCookieName):void 0;A&&(p[f.xsrfHeaderName]=A)}"setRequestHeader"in _&&e.forEach(p,function(j,r1){typeof y>"u"&&r1.toLowerCase()==="content-type"?delete p[r1]:_.setRequestHeader(r1,j)}),e.isUndefined(f.withCredentials)||(_.withCredentials=!!f.withCredentials),L&&L!=="json"&&(_.responseType=f.responseType),typeof f.onDownloadProgress=="function"&&_.addEventListener("progress",f.onDownloadProgress),typeof f.onUploadProgress=="function"&&_.upload&&_.upload.addEventListener("progress",f.onUploadProgress),(f.cancelToken||f.signal)&&(M=function(R){!_||(b(!R||R&&R.type?new c:R),_.abort(),_=null)},f.cancelToken&&f.cancelToken.subscribe(M),f.signal&&(f.signal.aborted?M():f.signal.addEventListener("abort",M))),y||(y=null);var I=u(H);if(I&&["http","https","file"].indexOf(I)===-1){b(new l("Unsupported protocol "+I+":",l.ERR_BAD_REQUEST,f));return}_.send(y)})},_6}var L6,a8;function Gc(){return a8||(a8=1,L6=null),L6}var K1=re,o8=Nc,l8=V0,qc=Fr,Yc=Tr,Kc={"Content-Type":"application/x-www-form-urlencoded"};function c8(e,t){!K1.isUndefined(e)&&K1.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function Xc(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=s8()),e}function Jc(e,t,n){if(K1.isString(e))try{return(t||JSON.parse)(e),K1.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}var z3={transitional:qc,adapter:Xc(),transformRequest:[function(t,n){if(o8(n,"Accept"),o8(n,"Content-Type"),K1.isFormData(t)||K1.isArrayBuffer(t)||K1.isBuffer(t)||K1.isStream(t)||K1.isFile(t)||K1.isBlob(t))return t;if(K1.isArrayBufferView(t))return t.buffer;if(K1.isURLSearchParams(t))return c8(n,"application/x-www-form-urlencoded;charset=utf-8"),t.toString();var r=K1.isObject(t),i=n&&n["Content-Type"],s;if((s=K1.isFileList(t))||r&&i==="multipart/form-data"){var a=this.env&&this.env.FormData;return Yc(s?{"files[]":t}:t,a&&new a)}else if(r||i==="application/json")return c8(n,"application/json"),Jc(t);return t}],transformResponse:[function(t){var n=this.transitional||z3.transitional,r=n&&n.silentJSONParsing,i=n&&n.forcedJSONParsing,s=!r&&this.responseType==="json";if(s||i&&K1.isString(t)&&t.length)try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?l8.from(a,l8.ERR_BAD_RESPONSE,this,null,this.response):a}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Gc()},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};K1.forEach(["delete","get","head"],function(t){z3.headers[t]={}});K1.forEach(["post","put","patch"],function(t){z3.headers[t]=K1.merge(Kc)});var c7=z3,Qc=re,eu=c7,tu=function(t,n,r){var i=this||eu;return Qc.forEach(r,function(a){t=a.call(i,t,n)}),t},k6,u8;function Ar(){return u8||(u8=1,k6=function(t){return!!(t&&t.__CANCEL__)}),k6}var f8=re,v6=tu,nu=Ar(),ru=c7,iu=Z3();function M6(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new iu}var su=function(t){M6(t),t.headers=t.headers||{},t.data=v6.call(t,t.data,t.headers,t.transformRequest),t.headers=f8.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),f8.forEach(["delete","get","head","post","put","patch","common"],function(i){delete t.headers[i]});var n=t.adapter||ru.adapter;return n(t).then(function(i){return M6(t),i.data=v6.call(t,i.data,i.headers,t.transformResponse),i},function(i){return nu(i)||(M6(t),i&&i.response&&(i.response.data=v6.call(t,i.response.data,i.response.headers,t.transformResponse))),Promise.reject(i)})},ye=re,Rr=function(t,n){n=n||{};var r={};function i(u,d){return ye.isPlainObject(u)&&ye.isPlainObject(d)?ye.merge(u,d):ye.isPlainObject(d)?ye.merge({},d):ye.isArray(d)?d.slice():d}function s(u){if(ye.isUndefined(n[u])){if(!ye.isUndefined(t[u]))return i(void 0,t[u])}else return i(t[u],n[u])}function a(u){if(!ye.isUndefined(n[u]))return i(void 0,n[u])}function o(u){if(ye.isUndefined(n[u])){if(!ye.isUndefined(t[u]))return i(void 0,t[u])}else return i(void 0,n[u])}function l(u){if(u in n)return i(t[u],n[u]);if(u in t)return i(void 0,t[u])}var c={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l};return ye.forEach(Object.keys(t).concat(Object.keys(n)),function(d){var f=c[d]||s,h=f(d);ye.isUndefined(h)&&f!==l||(r[d]=h)}),r},x6,d8;function Hr(){return d8||(d8=1,x6={version:"0.27.2"}),x6}var au=Hr().version,Mt=V0,u7={};["object","boolean","number","function","string","symbol"].forEach(function(e,t){u7[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});var h8={};u7.transitional=function(t,n,r){function i(s,a){return"[Axios v"+au+"] Transitional option '"+s+"'"+a+(r?". "+r:"")}return function(s,a,o){if(t===!1)throw new Mt(i(a," has been removed"+(n?" in "+n:"")),Mt.ERR_DEPRECATED);return n&&!h8[a]&&(h8[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,a,o):!0}};function ou(e,t,n){if(typeof e!="object")throw new Mt("options must be an object",Mt.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),i=r.length;i-- >0;){var s=r[i],a=t[s];if(a){var o=e[s],l=o===void 0||a(o,s,e);if(l!==!0)throw new Mt("option "+s+" must be "+l,Mt.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Mt("Unknown option "+s,Mt.ERR_BAD_OPTION)}}var lu={assertOptions:ou,validators:u7},Pr=re,cu=xr,C8=Hc,g8=su,G3=Rr,uu=Or,Nr=lu,d0=Nr.validators;function T0(e){this.defaults=e,this.interceptors={request:new C8,response:new C8}}T0.prototype.request=function(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=G3(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var r=n.transitional;r!==void 0&&Nr.assertOptions(r,{silentJSONParsing:d0.transitional(d0.boolean),forcedJSONParsing:d0.transitional(d0.boolean),clarifyTimeoutError:d0.transitional(d0.boolean)},!1);var i=[],s=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(s=s&&h.synchronous,i.unshift(h.fulfilled,h.rejected))});var a=[];this.interceptors.response.forEach(function(h){a.push(h.fulfilled,h.rejected)});var o;if(!s){var l=[g8,void 0];for(Array.prototype.unshift.apply(l,i),l=l.concat(a),o=Promise.resolve(n);l.length;)o=o.then(l.shift(),l.shift());return o}for(var c=n;i.length;){var u=i.shift(),d=i.shift();try{c=u(c)}catch(f){d(f);break}}try{o=g8(c)}catch(f){return Promise.reject(f)}for(;a.length;)o=o.then(a.shift(),a.shift());return o};T0.prototype.getUri=function(t){t=G3(this.defaults,t);var n=uu(t.baseURL,t.url);return cu(n,t.params,t.paramsSerializer)};Pr.forEach(["delete","get","head","options"],function(t){T0.prototype[t]=function(n,r){return this.request(G3(r||{},{method:t,url:n,data:(r||{}).data}))}});Pr.forEach(["post","put","patch"],function(t){function n(r){return function(s,a,o){return this.request(G3(o||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}T0.prototype[t]=n(),T0.prototype[t+"Form"]=n(!0)});var fu=T0,S6,m8;function du(){if(m8)return S6;m8=1;var e=Z3();function t(n){if(typeof n!="function")throw new TypeError("executor must be a function.");var r;this.promise=new Promise(function(a){r=a});var i=this;this.promise.then(function(s){if(!!i._listeners){var a,o=i._listeners.length;for(a=0;a<o;a++)i._listeners[a](s);i._listeners=null}}),this.promise.then=function(s){var a,o=new Promise(function(l){i.subscribe(l),a=l}).then(s);return o.cancel=function(){i.unsubscribe(a)},o},n(function(a){i.reason||(i.reason=new e(a),r(i.reason))})}return t.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},t.prototype.subscribe=function(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]},t.prototype.unsubscribe=function(r){if(!!this._listeners){var i=this._listeners.indexOf(r);i!==-1&&this._listeners.splice(i,1)}},t.source=function(){var r,i=new t(function(a){r=a});return{token:i,cancel:r}},S6=t,S6}var w6,p8;function hu(){return p8||(p8=1,w6=function(t){return function(r){return t.apply(null,r)}}),w6}var E6,b8;function Cu(){if(b8)return E6;b8=1;var e=re;return E6=function(n){return e.isObject(n)&&n.isAxiosError===!0},E6}var y8=re,gu=kr,n3=fu,mu=Rr,pu=c7;function Ir(e){var t=new n3(e),n=gu(n3.prototype.request,t);return y8.extend(n,n3.prototype,t),y8.extend(n,t),n.create=function(i){return Ir(mu(e,i))},n}var me=Ir(pu);me.Axios=n3;me.CanceledError=Z3();me.CancelToken=du();me.isCancel=Ar();me.VERSION=Hr().version;me.toFormData=Tr;me.AxiosError=V0;me.Cancel=me.CanceledError;me.all=function(t){return Promise.all(t)};me.spread=hu();me.isAxiosError=Cu();r7.exports=me;r7.exports.default=me;(function(e){e.exports=r7.exports})(Lr);const r3=fc(Lr.exports),Ht=ir("main",{state:()=>({api:"http://127.0.0.1:8000",access_token:null,user:{firstname:"Loading",avatar:{}},isFieldFocusRegistered:!1,clients:[],history:[]}),actions:{setUser(e){e&&(this.user=e)},setAccessToken(e){e&&(this.access_token=e)},fetch(e){r3.get(`data-sources/${e}.json`).then(t=>{t.data&&t.data.data&&(this[e]=t.data.data)}).catch(t=>{alert(t.message)})}},persist:!0}),f7="bg-gradient-to-tr",Ty=`${f7} from-purple-400 via-pink-500 to-red-500`,Oy=`${f7} from-slate-700 via-slate-900 to-slate-800`,Ay=`${f7} from-pink-400 via-red-500 to-yellow-500`,d7={white:"bg-white text-black",light:"bg-white text-black dark:bg-slate-900/70 dark:text-white",contrast:"bg-gray-800 text-white dark:bg-white dark:text-black",success:"bg-emerald-500 border-emerald-500 text-white",danger:"bg-red-500 border-red-500 text-white",warning:"bg-yellow-500 border-yellow-500 text-white",info:"bg-blue-500 border-blue-500 text-white"},Lt={white:"text-black dark:text-slate-100",light:"text-gray-700 dark:text-slate-400",contrast:"dark:text-white",success:"text-emerald-500",danger:"text-red-500",warning:"text-yellow-500",info:"text-blue-500"},Dr={white:[Lt.white,"border-gray-100"],light:[Lt.light,"border-gray-100"],contrast:[Lt.contrast,"border-gray-900 dark:border-slate-100"],success:[Lt.success,"border-emerald-500"],danger:[Lt.danger,"border-red-500"],warning:[Lt.warning,"border-yellow-500"],info:[Lt.info,"border-blue-500"]},Br=(e,t,n,r=!1)=>{const i={ring:{white:"ring-gray-200 dark:ring-gray-500",whiteDark:"ring-gray-200 dark:ring-gray-500",lightDark:"ring-gray-200 dark:ring-gray-500",contrast:"ring-gray-300 dark:ring-gray-400",success:"ring-emerald-300 dark:ring-emerald-700",danger:"ring-red-300 dark:ring-red-700",warning:"ring-yellow-300 dark:ring-yellow-700",info:"ring-blue-300 dark:ring-blue-700"},active:{white:"bg-gray-100",whiteDark:"bg-gray-100 dark:bg-slate-800",lightDark:"bg-gray-200 dark:bg-slate-700",contrast:"bg-gray-700 dark:bg-slate-100",success:"bg-emerald-700 dark:bg-emerald-600",danger:"bg-red-700 dark:bg-red-600",warning:"bg-yellow-700 dark:bg-yellow-600",info:"bg-blue-700 dark:bg-blue-600"},bg:{white:"bg-white text-black",whiteDark:"bg-white text-black dark:bg-slate-900 dark:text-white",lightDark:"bg-gray-100 text-black dark:bg-slate-800 dark:text-white",contrast:"bg-gray-800 text-white dark:bg-white dark:text-black",success:"bg-emerald-600 dark:bg-emerald-500 text-white",danger:"bg-red-600 dark:bg-red-500 text-white",warning:"bg-yellow-600 dark:bg-yellow-500 text-white",info:"bg-blue-600 dark:bg-blue-500 text-white"},bgHover:{white:"hover:bg-gray-100",whiteDark:"hover:bg-gray-100 hover:dark:bg-slate-800",lightDark:"hover:bg-gray-200 hover:dark:bg-slate-700",contrast:"hover:bg-gray-700 hover:dark:bg-slate-100",success:"hover:bg-emerald-700 hover:border-emerald-700 hover:dark:bg-emerald-600 hover:dark:border-emerald-600",danger:"hover:bg-red-700 hover:border-red-700 hover:dark:bg-red-600 hover:dark:border-red-600",warning:"hover:bg-yellow-700 hover:border-yellow-700 hover:dark:bg-yellow-600 hover:dark:border-yellow-600",info:"hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600"},borders:{white:"border-white",whiteDark:"border-white dark:border-slate-900",lightDark:"border-gray-100 dark:border-slate-800",contrast:"border-gray-800 dark:border-white",success:"border-emerald-600 dark:border-emerald-500",danger:"border-red-600 dark:border-red-500",warning:"border-yellow-600 dark:border-yellow-500",info:"border-blue-600 dark:border-blue-500"},text:{contrast:"dark:text-slate-100",success:"text-emerald-600 dark:text-emerald-500",danger:"text-red-600 dark:text-red-500",warning:"text-yellow-600 dark:text-yellow-500",info:"text-blue-600 dark:text-blue-500"},outlineHover:{contrast:"hover:bg-gray-800 hover:text-gray-100 hover:dark:bg-slate-100 hover:dark:text-black",success:"hover:bg-emerald-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-emerald-600",danger:"hover:bg-red-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-red-600",warning:"hover:bg-yellow-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-yellow-600",info:"hover:bg-blue-600 hover:text-white hover:dark:text-white hover:dark:border-blue-600"}};if(!i.bg[e])return e;const s=t&&["white","whiteDark","lightDark"].indexOf(e)<0,a=[i.borders[e],i.ring[e]];return r?a.push(i.active[e]):a.push(s?i.text[e]:i.bg[e]),n&&a.push(s?i.outlineHover[e]:i.bgHover[e]),a},bu={__name:"SectionMain",setup(e){return(t,n)=>(U(),u1("section",{class:l1(["p-6",W(_r)])},[ce(t.$slots,"default")],2))}},yu={__name:"CardBoxComponentBody",props:{noPadding:Boolean},setup(e){return(t,n)=>(U(),u1("div",{class:l1(["flex-1",{"p-6":!e.noPadding}])},[ce(t.$slots,"default")],2))}},Vr=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},_u={},Lu={class:"p-6"};function ku(e,t){return U(),u1("footer",Lu,[ce(e.$slots,"default")])}const vu=Vr(_u,[["render",ku]]),h7={__name:"CardBox",props:{rounded:{type:String,default:"rounded-2xl"},flex:{type:String,default:"flex-col"},hasComponentLayout:Boolean,hasTable:Boolean,isForm:Boolean,isHoverable:Boolean,isModal:Boolean},emits:["submit"],setup(e,{emit:t}){const n=e,r=Q5(),i=e1(()=>r.footer&&!!r.footer()),s=e1(()=>{const o=[n.rounded,n.flex,n.isModal?"dark:bg-slate-900":"dark:bg-slate-900/70"];return n.isHoverable&&o.push("hover:shadow-lg transition-shadow duration-500"),o}),a=o=>{t("submit",o)};return(o,l)=>(U(),y1(I3(e.isForm?"form":"div"),{class:l1([W(s),"bg-white flex"]),onSubmit:a},{default:T1(()=>[e.hasComponentLayout?ce(o.$slots,"default",{key:0}):(U(),u1(W1,{key:1},[n1(yu,{"no-padding":e.hasTable},{default:T1(()=>[ce(o.$slots,"default")]),_:3},8,["no-padding"]),W(i)?(U(),y1(vu,{key:0},{default:T1(()=>[ce(o.$slots,"footer")]),_:3})):Q1("",!0)],64))]),_:3},40,["class"]))}},Mu={class:"bg-gray-50 dark:bg-slate-800 dark:text-slate-100"},xu={__name:"LayoutGuest",setup(e){const t=ht();return(n,r)=>(U(),u1("div",{class:l1({dark:W(t).darkMode})},[K("div",Mu,[ce(n.$slots,"default")])],2))}},Su=K("div",null,null,-1),wu={__name:"StartView",setup(e){ht();const t=Ht(),n=br();return r3.defaults.baseURL=t.api,r3.defaults.headers.common.Authorization="Bearer "+t.access_token,t.access_token!=null?r3.get("/users/me").then(r=>{n.push("/dashboard")}).catch(r=>{console.log(r.response.status),t.access_token=null,t.user=null,n.push("/login")}):n.push("/login"),(r,i)=>(U(),y1(xu,null,{default:T1(()=>[Su]),_:1}))}};var Eu="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",Fu="M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z",Ry="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z",Hy="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",Py="M21 13H14.4L19.1 17.7L17.7 19.1L13 14.4V21H11V14.3L6.3 19L4.9 17.6L9.4 13H3V11H9.6L4.9 6.3L6.3 4.9L11 9.6V3H13V9.4L17.6 4.8L19 6.3L14.3 11H21V13Z",Tu="M5,13L9,17L7.6,18.42L1.18,12L7.6,5.58L9,7L5,11H21V13H5M21,6V8H11V6H21M21,16V18H11V16H21Z",Ny="M13,7.5H18V9.5H13V7.5M13,14.5H18V16.5H13V14.5M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M19,19V5H5V19H19M11,6V11H6V6H11M10,10V7H7V10H10M11,13V18H6V13H11M10,17V14H7V17H10Z",Ou="M15 15V17H23V15M14.97 11.61C14.85 10.28 13.59 8.97 12 9C10.3 9.03 9 10.3 9 12C9 13.7 10.3 14.94 12 15C12.38 15 12.77 14.92 13.14 14.77C13.41 13.67 13.86 12.63 14.97 11.61M13 16H7C7 14.9 6.11 14 5 14V10C6.11 10 7 9.11 7 8H17C17 9.11 17.9 10 19 10V10.06C19.67 10.06 20.34 10.18 21 10.4V6H3V18H13.32C13.1 17.33 13 16.66 13 16Z",Au="M15 15V17H18V20H20V17H23V15H20V12H18V15M14.97 11.61C14.85 10.28 13.59 8.97 12 9C10.3 9.03 9 10.3 9 12C9 13.7 10.3 14.94 12 15C12.38 15 12.77 14.92 13.14 14.77C13.41 13.67 13.86 12.63 14.97 11.61M13 16H7C7 14.9 6.11 14 5 14V10C6.11 10 7 9.11 7 8H17C17 9.11 17.9 10 19 10V10.06C19.67 10.06 20.34 10.18 21 10.4V6H3V18H13.32C13.1 17.33 13 16.66 13 16Z",Iy="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",Dy="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z",Ru="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",Hu="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",C7="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",Pu="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z",By="M12,20C9.79,20 7.79,19.1 6.34,17.66L17.66,6.34C19.1,7.79 20,9.79 20,12A8,8 0 0,1 12,20M6,8H8V6H9.5V8H11.5V9.5H9.5V11.5H8V9.5H6M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,16H17V14.5H12V16Z",Nu="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z",Iu="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",Du="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z",Vy="M17,7H22V17H17V19A1,1 0 0,0 18,20H20V22H17.5C16.95,22 16,21.55 16,21C16,21.55 15.05,22 14.5,22H12V20H14A1,1 0 0,0 15,19V5A1,1 0 0,0 14,4H12V2H14.5C15.05,2 16,2.45 16,3C16,2.45 16.95,2 17.5,2H20V4H18A1,1 0 0,0 17,5V7M2,7H13V9H4V15H13V17H2V7M20,15V9H17V15H20M8.5,12A1.5,1.5 0 0,0 7,10.5A1.5,1.5 0 0,0 5.5,12A1.5,1.5 0 0,0 7,13.5A1.5,1.5 0 0,0 8.5,12M13,10.89C12.39,10.33 11.44,10.38 10.88,11C10.32,11.6 10.37,12.55 11,13.11C11.55,13.63 12.43,13.63 13,13.11V10.89Z",Bu="M19,13H3V11H19L15,7L16.4,5.6L22.8,12L16.4,18.4L15,17L19,13M3,6H13V8H3V6M13,16V18H3V16H13Z",Wy="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z",$y="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",g5="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z",jy="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M17,17H7V15H17M17,13H7V11H17M20,9H17V6H20",Vu="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",Wu="M19,13H5V11H19V13Z",$u="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z",ju="M23,11H18A1,1 0 0,0 17,12V21A1,1 0 0,0 18,22H23A1,1 0 0,0 24,21V12A1,1 0 0,0 23,11M23,20H18V13H23V20M20,2H2C0.89,2 0,2.89 0,4V16A2,2 0 0,0 2,18H9V20H7V22H15V20H13V18H15V16H2V4H20V9H22V4C22,2.89 21.1,2 20,2Z",Uy="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z",Uu="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",Zy="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",Zu="M3 22L4.5 20.5L6 22L7.5 20.5L9 22L10.5 20.5L12 22L13.5 20.5L15 22L16.5 20.5L18 22L19.5 20.5L21 22V2L19.5 3.5L18 2L16.5 3.5L15 2L13.5 3.5L12 2L10.5 3.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2",zy="M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z",Gy="M2,11L4.05,11.1C4.3,8.83 5.5,6.85 7.25,5.56L6.13,3.84C5.86,3.36 6,2.75 6.5,2.47C7,2.2 7.59,2.36 7.87,2.84L8.8,4.66C9.78,4.24 10.86,4 12,4C13.14,4 14.22,4.24 15.2,4.66L16.13,2.84C16.41,2.36 17,2.2 17.5,2.47C18,2.75 18.14,3.36 17.87,3.84L16.75,5.56C18.5,6.85 19.7,8.83 19.95,11.1L22,11A1,1 0 0,1 23,12A1,1 0 0,1 22,13L19.95,12.9C19.7,15.17 18.5,17.15 16.75,18.44L17.87,20.16C18.14,20.64 18,21.25 17.5,21.53C17,21.8 16.41,21.64 16.13,21.16L15.2,19.34C14.22,19.76 13.14,20 12,20C10.86,20 9.78,19.76 8.8,19.34L7.87,21.16C7.59,21.64 7,21.8 6.5,21.53C6,21.25 5.86,20.64 6.13,20.16L7.25,18.44C5.5,17.15 4.3,15.17 4.05,12.9L2,13A1,1 0 0,1 1,12A1,1 0 0,1 2,11M9.07,11.35C9.2,10.74 9.53,10.2 10,9.79L8.34,7.25C7.11,8.19 6.27,9.6 6.05,11.2L9.07,11.35M12,9C12.32,9 12.62,9.05 12.9,9.14L14.28,6.45C13.58,6.16 12.81,6 12,6C11.19,6 10.42,6.16 9.72,6.45L11.1,9.14C11.38,9.05 11.68,9 12,9M14.93,11.35L17.95,11.2C17.73,9.6 16.89,8.19 15.66,7.25L14,9.79C14.47,10.2 14.8,10.74 14.93,11.35M14.93,12.65C14.8,13.26 14.47,13.8 14,14.21L15.66,16.75C16.89,15.81 17.73,14.4 17.95,12.8L14.93,12.65M12,15C11.68,15 11.38,14.95 11.09,14.86L9.72,17.55C10.42,17.84 11.19,18 12,18C12.81,18 13.58,17.84 14.28,17.55L12.91,14.86C12.62,14.95 12.32,15 12,15M9.07,12.65L6.05,12.8C6.27,14.4 7.11,15.81 8.34,16.75L10,14.21C9.53,13.8 9.2,13.26 9.07,12.65Z",zu="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z",Gu="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z",qy="M21,19A1,1 0 0,1 20,20H19V18H21V19M15,20V18H17V20H15M11,20V18H13V20H11M7,20V18H9V20H7M4,20A1,1 0 0,1 3,19V18H5V20H4M19,4H5A2,2 0 0,0 3,6V8H5L11,8H13L19,8H21V6C21,4.89 20.11,4 19,4M5,14H3V16H5V14M5,10H3V12H5V10M21,10H19V12H21V10M21,14H19V16H21V14M11,16V14H13V16H11M11,12V10H13V12H11",Yy="M22.11 21.46L2.39 1.73L1.11 3L3.22 5.11C3.08 5.38 3 5.68 3 6V18C3 19.11 3.9 20 5 20H18.11L20.84 22.73L22.11 21.46M10.11 12H5V8H6.11L10.11 12M11 18H5V14H11V18M13 18V14.89L16.11 18H13M13 9.8L7.2 4H19C20.11 4 21 4.89 21 6V17.8L19 15.8V14H17.2L15.2 12H19V8H13V9.8Z",Ky="M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z",qu="M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z",Xy="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z",Yu="M16,18L18.29,15.71L13.41,10.83L9.41,14.83L2,7.41L3.41,6L9.41,12L13.41,8L19.71,14.29L22,12V18H16Z",Ku="M22,12L18,8V11H3V13H18V16L22,12Z",Xu="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z",Jy="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z";const F6={default:{primary:"#00D1B2",info:"#209CEE",danger:"#FF3860"}},Ju=e=>{const t=[];for(let n=0;n<e;n++)t.push(Math.round(Math.random()*200));return t},T6=(e,t)=>({fill:!1,borderColor:F6.default[e],borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:F6.default[e],pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:F6.default[e],pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:Ju(t),tension:.5,cubicInterpolationMode:"default"}),Qu=(e=9)=>{const t=[];for(let n=1;n<=e;n++)t.push(`0${n}`);return{labels:t,datasets:[T6("primary",e),T6("info",e),T6("danger",e)]}};/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */function w1(e){return e===null||typeof e>"u"}function j1(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function E1(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}const te=e=>(typeof e=="number"||e instanceof Number)&&isFinite(+e);function Se(e,t){return te(e)?e:t}function L1(e,t){return typeof e>"u"?t:e}const ef=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100:e/t,Wr=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function se(e,t,n){if(e&&typeof e.call=="function")return e.apply(n,t)}function de(e,t,n,r){let i,s,a;if(j1(e))if(s=e.length,r)for(i=s-1;i>=0;i--)t.call(n,e[i],i);else for(i=0;i<s;i++)t.call(n,e[i],i);else if(E1(e))for(a=Object.keys(e),s=a.length,i=0;i<s;i++)t.call(n,e[a[i]],a[i])}function _8(e,t){let n,r,i,s;if(!e||!t||e.length!==t.length)return!1;for(n=0,r=e.length;n<r;++n)if(i=e[n],s=t[n],i.datasetIndex!==s.datasetIndex||i.index!==s.index)return!1;return!0}function b3(e){if(j1(e))return e.map(b3);if(E1(e)){const t=Object.create(null),n=Object.keys(e),r=n.length;let i=0;for(;i<r;++i)t[n[i]]=b3(e[n[i]]);return t}return e}function $r(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function tf(e,t,n,r){if(!$r(e))return;const i=t[e],s=n[e];E1(i)&&E1(s)?_2(i,s,r):t[e]=b3(s)}function _2(e,t,n){const r=j1(t)?t:[t],i=r.length;if(!E1(e))return e;n=n||{};const s=n.merger||tf;for(let a=0;a<i;++a){if(t=r[a],!E1(t))continue;const o=Object.keys(t);for(let l=0,c=o.length;l<c;++l)s(o[l],e,t,n)}return e}function jr(e,t){return _2(e,t,{merger:nf})}function nf(e,t,n){if(!$r(e))return;const r=t[e],i=n[e];E1(r)&&E1(i)?jr(r,i):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=b3(i))}const L8={"":e=>e,x:e=>e.x,y:e=>e.y};function O0(e,t){return(L8[t]||(L8[t]=rf(t)))(e)}function rf(e){const t=sf(e);return n=>{for(const r of t){if(r==="")break;n=n&&n[r]}return n}}function sf(e){const t=e.split("."),n=[];let r="";for(const i of t)r+=i,r.endsWith("\\")?r=r.slice(0,-1)+".":(n.push(r),r="");return n}function Ur(e){return e.charAt(0).toUpperCase()+e.slice(1)}const Zr=e=>typeof e<"u",V1=Math.PI,x1=2*V1,af=x1+V1,of=V1/180,D1=V1/2,Z0=V1/4,k8=V1*2/3,we=Math.log10,Xe=Math.sign;function v8(e){const t=Math.round(e);e=i2(e,t,e/1e3)?t:e;const n=Math.pow(10,Math.floor(we(e))),r=e/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function lf(e){const t=[],n=Math.sqrt(e);let r;for(r=1;r<n;r++)e%r===0&&(t.push(r),t.push(e/r));return n===(n|0)&&t.push(n),t.sort((i,s)=>i-s).pop(),t}function A0(e){return!isNaN(parseFloat(e))&&isFinite(e)}function i2(e,t,n){return Math.abs(e-t)<n}function cf(e,t){const n=Math.round(e);return n-t<=e&&n+t>=e}function zr(e,t,n){let r,i,s;for(r=0,i=e.length;r<i;r++)s=e[r][n],isNaN(s)||(t.min=Math.min(t.min,s),t.max=Math.max(t.max,s))}function De(e){return e*(V1/180)}function g7(e){return e*(180/V1)}function M8(e){if(!te(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function uf(e,t){const n=t.x-e.x,r=t.y-e.y,i=Math.sqrt(n*n+r*r);let s=Math.atan2(r,n);return s<-.5*V1&&(s+=x1),{angle:s,distance:i}}function m5(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function ff(e,t){return(e-t+af)%x1-V1}function He(e){return(e%x1+x1)%x1}function y3(e,t,n,r){const i=He(e),s=He(t),a=He(n),o=He(s-i),l=He(a-i),c=He(i-s),u=He(i-a);return i===s||i===a||r&&s===a||o>l&&c<u}function le(e,t,n){return Math.max(t,Math.min(n,e))}function df(e){return le(e,-32768,32767)}function _3(e,t,n,r=1e-6){return e>=Math.min(t,n)-r&&e<=Math.max(t,n)+r}function Gr(e,t,n){n=n||(a=>e[a]<t);let r=e.length-1,i=0,s;for(;r-i>1;)s=i+r>>1,n(s)?i=s:r=s;return{lo:i,hi:r}}const y0=(e,t,n,r)=>Gr(e,n,r?i=>e[i][t]<=n:i=>e[i][t]<n);function hf(e,t,n){let r=0,i=e.length;for(;r<i&&e[r]<t;)r++;for(;i>r&&e[i-1]>n;)i--;return r>0||i<e.length?e.slice(r,i):e}const qr=["push","pop","shift","splice","unshift"];function Cf(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),qr.forEach(n=>{const r="_onData"+Ur(n),i=e[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value(...s){const a=i.apply(this,s);return e._chartjs.listeners.forEach(o=>{typeof o[r]=="function"&&o[r](...s)}),a}})})}function x8(e,t){const n=e._chartjs;if(!n)return;const r=n.listeners,i=r.indexOf(t);i!==-1&&r.splice(i,1),!(r.length>0)&&(qr.forEach(s=>{delete e[s]}),delete e._chartjs)}function Yr(e){const t=new Set;let n,r;for(n=0,r=e.length;n<r;++n)t.add(e[n]);return t.size===r?e:Array.from(t)}const gf=function(){return typeof window>"u"?function(e){return e()}:window.requestAnimationFrame}(),mf=e=>e==="start"?"left":e==="end"?"right":"center",S8=(e,t,n)=>e==="start"?t:e==="end"?n:(t+n)/2;function Kr(e,t,n){const r=t.length;let i=0,s=r;if(e._sorted){const{iScale:a,_parsed:o}=e,l=a.axis,{min:c,max:u,minDefined:d,maxDefined:f}=a.getUserBounds();d&&(i=le(Math.min(y0(o,a.axis,c).lo,n?r:y0(t,l,a.getPixelForValue(c)).lo),0,r-1)),f?s=le(Math.max(y0(o,a.axis,u,!0).hi+1,n?0:y0(t,l,a.getPixelForValue(u),!0).hi+1),i,r)-i:s=r-i}return{start:i,count:s}}function Xr(e){const{xScale:t,yScale:n,_scaleRanges:r}=e,i={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!r)return e._scaleRanges=i,!0;const s=r.xmin!==t.min||r.xmax!==t.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,i),s}const P2=e=>e===0||e===1,w8=(e,t,n)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*x1/n)),E8=(e,t,n)=>Math.pow(2,-10*e)*Math.sin((e-t)*x1/n)+1,s2={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*D1)+1,easeOutSine:e=>Math.sin(e*D1),easeInOutSine:e=>-.5*(Math.cos(V1*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>P2(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>P2(e)?e:w8(e,.075,.3),easeOutElastic:e=>P2(e)?e:E8(e,.075,.3),easeInOutElastic(e){return P2(e)?e:e<.5?.5*w8(e*2,.1125,.45):.5+.5*E8(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-s2.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?s2.easeInBounce(e*2)*.5:s2.easeOutBounce(e*2-1)*.5+.5};/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */function M2(e){return e+.5|0}const xt=(e,t,n)=>Math.max(Math.min(e,n),t);function X0(e){return xt(M2(e*2.55),0,255)}function Ft(e){return xt(M2(e*255),0,255)}function st(e){return xt(M2(e/2.55)/100,0,1)}function F8(e){return xt(M2(e*100),0,100)}const xe={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},p5=[..."0123456789ABCDEF"],pf=e=>p5[e&15],bf=e=>p5[(e&240)>>4]+p5[e&15],N2=e=>(e&240)>>4===(e&15),yf=e=>N2(e.r)&&N2(e.g)&&N2(e.b)&&N2(e.a);function _f(e){var t=e.length,n;return e[0]==="#"&&(t===4||t===5?n={r:255&xe[e[1]]*17,g:255&xe[e[2]]*17,b:255&xe[e[3]]*17,a:t===5?xe[e[4]]*17:255}:(t===7||t===9)&&(n={r:xe[e[1]]<<4|xe[e[2]],g:xe[e[3]]<<4|xe[e[4]],b:xe[e[5]]<<4|xe[e[6]],a:t===9?xe[e[7]]<<4|xe[e[8]]:255})),n}const Lf=(e,t)=>e<255?t(e):"";function kf(e){var t=yf(e)?pf:bf;return e?"#"+t(e.r)+t(e.g)+t(e.b)+Lf(e.a,t):void 0}const vf=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Jr(e,t,n){const r=t*Math.min(n,1-n),i=(s,a=(s+e/30)%12)=>n-r*Math.max(Math.min(a-3,9-a,1),-1);return[i(0),i(8),i(4)]}function Mf(e,t,n){const r=(i,s=(i+e/60)%6)=>n-n*t*Math.max(Math.min(s,4-s,1),0);return[r(5),r(3),r(1)]}function xf(e,t,n){const r=Jr(e,1,.5);let i;for(t+n>1&&(i=1/(t+n),t*=i,n*=i),i=0;i<3;i++)r[i]*=1-t-n,r[i]+=t;return r}function Sf(e,t,n,r,i){return e===i?(t-n)/r+(t<n?6:0):t===i?(n-e)/r+2:(e-t)/r+4}function m7(e){const n=e.r/255,r=e.g/255,i=e.b/255,s=Math.max(n,r,i),a=Math.min(n,r,i),o=(s+a)/2;let l,c,u;return s!==a&&(u=s-a,c=o>.5?u/(2-s-a):u/(s+a),l=Sf(n,r,i,u,s),l=l*60+.5),[l|0,c||0,o]}function p7(e,t,n,r){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,r)).map(Ft)}function b7(e,t,n){return p7(Jr,e,t,n)}function wf(e,t,n){return p7(xf,e,t,n)}function Ef(e,t,n){return p7(Mf,e,t,n)}function Qr(e){return(e%360+360)%360}function Ff(e){const t=vf.exec(e);let n=255,r;if(!t)return;t[5]!==r&&(n=t[6]?X0(+t[5]):Ft(+t[5]));const i=Qr(+t[2]),s=+t[3]/100,a=+t[4]/100;return t[1]==="hwb"?r=wf(i,s,a):t[1]==="hsv"?r=Ef(i,s,a):r=b7(i,s,a),{r:r[0],g:r[1],b:r[2],a:n}}function Tf(e,t){var n=m7(e);n[0]=Qr(n[0]+t),n=b7(n),e.r=n[0],e.g=n[1],e.b=n[2]}function Of(e){if(!e)return;const t=m7(e),n=t[0],r=F8(t[1]),i=F8(t[2]);return e.a<255?`hsla(${n}, ${r}%, ${i}%, ${st(e.a)})`:`hsl(${n}, ${r}%, ${i}%)`}const T8={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},O8={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Af(){const e={},t=Object.keys(O8),n=Object.keys(T8);let r,i,s,a,o;for(r=0;r<t.length;r++){for(a=o=t[r],i=0;i<n.length;i++)s=n[i],o=o.replace(s,T8[s]);s=parseInt(O8[a],16),e[o]=[s>>16&255,s>>8&255,s&255]}return e}let I2;function Rf(e){I2||(I2=Af(),I2.transparent=[0,0,0,0]);const t=I2[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const Hf=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Pf(e){const t=Hf.exec(e);let n=255,r,i,s;if(!!t){if(t[7]!==r){const a=+t[7];n=t[8]?X0(a):xt(a*255,0,255)}return r=+t[1],i=+t[3],s=+t[5],r=255&(t[2]?X0(r):xt(r,0,255)),i=255&(t[4]?X0(i):xt(i,0,255)),s=255&(t[6]?X0(s):xt(s,0,255)),{r,g:i,b:s,a:n}}}function Nf(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${st(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const O6=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,h0=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function If(e,t,n){const r=h0(st(e.r)),i=h0(st(e.g)),s=h0(st(e.b));return{r:Ft(O6(r+n*(h0(st(t.r))-r))),g:Ft(O6(i+n*(h0(st(t.g))-i))),b:Ft(O6(s+n*(h0(st(t.b))-s))),a:e.a+n*(t.a-e.a)}}function D2(e,t,n){if(e){let r=m7(e);r[t]=Math.max(0,Math.min(r[t]+r[t]*n,t===0?360:1)),r=b7(r),e.r=r[0],e.g=r[1],e.b=r[2]}}function ei(e,t){return e&&Object.assign(t||{},e)}function A8(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=Ft(e[3]))):(t=ei(e,{r:0,g:0,b:0,a:1}),t.a=Ft(t.a)),t}function Df(e){return e.charAt(0)==="r"?Pf(e):Ff(e)}class L3{constructor(t){if(t instanceof L3)return t;const n=typeof t;let r;n==="object"?r=A8(t):n==="string"&&(r=_f(t)||Rf(t)||Df(t)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var t=ei(this._rgb);return t&&(t.a=st(t.a)),t}set rgb(t){this._rgb=A8(t)}rgbString(){return this._valid?Nf(this._rgb):void 0}hexString(){return this._valid?kf(this._rgb):void 0}hslString(){return this._valid?Of(this._rgb):void 0}mix(t,n){if(t){const r=this.rgb,i=t.rgb;let s;const a=n===s?.5:n,o=2*a-1,l=r.a-i.a,c=((o*l===-1?o:(o+l)/(1+o*l))+1)/2;s=1-c,r.r=255&c*r.r+s*i.r+.5,r.g=255&c*r.g+s*i.g+.5,r.b=255&c*r.b+s*i.b+.5,r.a=a*r.a+(1-a)*i.a,this.rgb=r}return this}interpolate(t,n){return t&&(this._rgb=If(this._rgb,t._rgb,n)),this}clone(){return new L3(this.rgb)}alpha(t){return this._rgb.a=Ft(t),this}clearer(t){const n=this._rgb;return n.a*=1-t,this}greyscale(){const t=this._rgb,n=M2(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=n,this}opaquer(t){const n=this._rgb;return n.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return D2(this._rgb,2,t),this}darken(t){return D2(this._rgb,2,-t),this}saturate(t){return D2(this._rgb,1,t),this}desaturate(t){return D2(this._rgb,1,-t),this}rotate(t){return Tf(this._rgb,t),this}}function ti(e){return new L3(e)}function ni(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function R8(e){return ni(e)?e:ti(e)}function A6(e){return ni(e)?e:ti(e).saturate(.5).darken(.1).hexString()}const ri=Object.create(null),Bf=Object.create(null);function a2(e,t){if(!t)return e;const n=t.split(".");for(let r=0,i=n.length;r<i;++r){const s=n[r];e=e[s]||(e[s]=Object.create(null))}return e}function R6(e,t,n){return typeof t=="string"?_2(a2(e,t),n):_2(a2(e,""),t)}class Vf{constructor(t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=n=>n.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(n,r)=>A6(r.backgroundColor),this.hoverBorderColor=(n,r)=>A6(r.borderColor),this.hoverColor=(n,r)=>A6(r.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t)}set(t,n){return R6(this,t,n)}get(t){return a2(this,t)}describe(t,n){return R6(Bf,t,n)}override(t,n){return R6(ri,t,n)}route(t,n,r,i){const s=a2(this,t),a=a2(this,r),o="_"+n;Object.defineProperties(s,{[o]:{value:s[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[o],c=a[i];return E1(l)?Object.assign({},c,l):L1(l,c)},set(l){this[o]=l}}})}}var O1=new Vf({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}});function Wf(e){return!e||w1(e.size)||w1(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function k3(e,t,n,r,i){let s=t[i];return s||(s=t[i]=e.measureText(i).width,n.push(i)),s>r&&(r=s),r}function $f(e,t,n,r){r=r||{};let i=r.data=r.data||{},s=r.garbageCollect=r.garbageCollect||[];r.font!==t&&(i=r.data={},s=r.garbageCollect=[],r.font=t),e.save(),e.font=t;let a=0;const o=n.length;let l,c,u,d,f;for(l=0;l<o;l++)if(d=n[l],d!=null&&j1(d)!==!0)a=k3(e,i,s,a,d);else if(j1(d))for(c=0,u=d.length;c<u;c++)f=d[c],f!=null&&!j1(f)&&(a=k3(e,i,s,a,f));e.restore();const h=s.length/2;if(h>n.length){for(l=0;l<h;l++)delete i[s[l]];s.splice(0,h)}return a}function Wt(e,t,n){const r=e.currentDevicePixelRatio,i=n!==0?Math.max(n/2,.5):0;return Math.round((t-i)*r)/r+i}function b5(e,t,n,r){jf(e,t,n,r,null)}function jf(e,t,n,r,i){let s,a,o,l,c,u;const d=t.pointStyle,f=t.rotation,h=t.radius;let m=(f||0)*of;if(d&&typeof d=="object"&&(s=d.toString(),s==="[object HTMLImageElement]"||s==="[object HTMLCanvasElement]")){e.save(),e.translate(n,r),e.rotate(m),e.drawImage(d,-d.width/2,-d.height/2,d.width,d.height),e.restore();return}if(!(isNaN(h)||h<=0)){switch(e.beginPath(),d){default:i?e.ellipse(n,r,i/2,h,0,0,x1):e.arc(n,r,h,0,x1),e.closePath();break;case"triangle":e.moveTo(n+Math.sin(m)*h,r-Math.cos(m)*h),m+=k8,e.lineTo(n+Math.sin(m)*h,r-Math.cos(m)*h),m+=k8,e.lineTo(n+Math.sin(m)*h,r-Math.cos(m)*h),e.closePath();break;case"rectRounded":c=h*.516,l=h-c,a=Math.cos(m+Z0)*l,o=Math.sin(m+Z0)*l,e.arc(n-a,r-o,c,m-V1,m-D1),e.arc(n+o,r-a,c,m-D1,m),e.arc(n+a,r+o,c,m,m+D1),e.arc(n-o,r+a,c,m+D1,m+V1),e.closePath();break;case"rect":if(!f){l=Math.SQRT1_2*h,u=i?i/2:l,e.rect(n-u,r-l,2*u,2*l);break}m+=Z0;case"rectRot":a=Math.cos(m)*h,o=Math.sin(m)*h,e.moveTo(n-a,r-o),e.lineTo(n+o,r-a),e.lineTo(n+a,r+o),e.lineTo(n-o,r+a),e.closePath();break;case"crossRot":m+=Z0;case"cross":a=Math.cos(m)*h,o=Math.sin(m)*h,e.moveTo(n-a,r-o),e.lineTo(n+a,r+o),e.moveTo(n+o,r-a),e.lineTo(n-o,r+a);break;case"star":a=Math.cos(m)*h,o=Math.sin(m)*h,e.moveTo(n-a,r-o),e.lineTo(n+a,r+o),e.moveTo(n+o,r-a),e.lineTo(n-o,r+a),m+=Z0,a=Math.cos(m)*h,o=Math.sin(m)*h,e.moveTo(n-a,r-o),e.lineTo(n+a,r+o),e.moveTo(n+o,r-a),e.lineTo(n-o,r+a);break;case"line":a=i?i/2:Math.cos(m)*h,o=Math.sin(m)*h,e.moveTo(n-a,r-o),e.lineTo(n+a,r+o);break;case"dash":e.moveTo(n,r),e.lineTo(n+Math.cos(m)*h,r+Math.sin(m)*h);break}e.fill(),t.borderWidth>0&&e.stroke()}}function y5(e,t,n){return n=n||.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function Uf(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function Zf(e){e.restore()}function zf(e,t,n,r,i){if(!t)return e.lineTo(n.x,n.y);if(i==="middle"){const s=(t.x+n.x)/2;e.lineTo(s,t.y),e.lineTo(s,n.y)}else i==="after"!=!!r?e.lineTo(t.x,n.y):e.lineTo(n.x,t.y);e.lineTo(n.x,n.y)}function Gf(e,t,n,r){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(r?t.cp1x:t.cp2x,r?t.cp1y:t.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function v3(e,t,n,r,i,s={}){const a=j1(t)?t:[t],o=s.strokeWidth>0&&s.strokeColor!=="";let l,c;for(e.save(),e.font=i.string,qf(e,s),l=0;l<a.length;++l)c=a[l],o&&(s.strokeColor&&(e.strokeStyle=s.strokeColor),w1(s.strokeWidth)||(e.lineWidth=s.strokeWidth),e.strokeText(c,n,r,s.maxWidth)),e.fillText(c,n,r,s.maxWidth),Yf(e,n,r,c,s),r+=i.lineHeight;e.restore()}function qf(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),w1(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function Yf(e,t,n,r,i){if(i.strikethrough||i.underline){const s=e.measureText(r),a=t-s.actualBoundingBoxLeft,o=t+s.actualBoundingBoxRight,l=n-s.actualBoundingBoxAscent,c=n+s.actualBoundingBoxDescent,u=i.strikethrough?(l+c)/2:c;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=i.decorationWidth||2,e.moveTo(a,u),e.lineTo(o,u),e.stroke()}}function M3(e,t){const{x:n,y:r,w:i,h:s,radius:a}=t;e.arc(n+a.topLeft,r+a.topLeft,a.topLeft,-D1,V1,!0),e.lineTo(n,r+s-a.bottomLeft),e.arc(n+a.bottomLeft,r+s-a.bottomLeft,a.bottomLeft,V1,D1,!0),e.lineTo(n+i-a.bottomRight,r+s),e.arc(n+i-a.bottomRight,r+s-a.bottomRight,a.bottomRight,D1,0,!0),e.lineTo(n+i,r+a.topRight),e.arc(n+i-a.topRight,r+a.topRight,a.topRight,0,-D1,!0),e.lineTo(n+a.topLeft,r)}const Kf=new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),Xf=new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);function Jf(e,t){const n=(""+e).match(Kf);if(!n||n[1]==="normal")return t*1.2;switch(e=+n[2],n[3]){case"px":return e;case"%":e/=100;break}return t*e}const Qf=e=>+e||0;function y7(e,t){const n={},r=E1(t),i=r?Object.keys(t):t,s=E1(e)?r?a=>L1(e[a],e[t[a]]):a=>e[a]:()=>e;for(const a of i)n[a]=Qf(s(a));return n}function ii(e){return y7(e,{top:"y",right:"x",bottom:"y",left:"x"})}function M0(e){return y7(e,["topLeft","topRight","bottomLeft","bottomRight"])}function Qe(e){const t=ii(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function ke(e,t){e=e||{},t=t||O1.font;let n=L1(e.size,t.size);typeof n=="string"&&(n=parseInt(n,10));let r=L1(e.style,t.style);r&&!(""+r).match(Xf)&&(console.warn('Invalid font style specified: "'+r+'"'),r="");const i={family:L1(e.family,t.family),lineHeight:Jf(L1(e.lineHeight,t.lineHeight),n),size:n,style:r,weight:L1(e.weight,t.weight),string:""};return i.string=Wf(i),i}function B2(e,t,n,r){let i=!0,s,a,o;for(s=0,a=e.length;s<a;++s)if(o=e[s],o!==void 0&&(t!==void 0&&typeof o=="function"&&(o=o(t),i=!1),n!==void 0&&j1(o)&&(o=o[n%o.length],i=!1),o!==void 0))return r&&!i&&(r.cacheable=!1),o}function ed(e,t,n){const{min:r,max:i}=e,s=Wr(t,(i-r)/2),a=(o,l)=>n&&o===0?0:o+l;return{min:a(r,-Math.abs(s)),max:a(i,s)}}function s0(e,t){return Object.assign(Object.create(e),t)}function si(e,t,n,r){const{iScale:i}=e,{key:s="r"}=this._parsing,a=new Array(r);let o,l,c,u;for(o=0,l=r;o<l;++o)c=o+n,u=t[c],a[o]={r:i.parse(O0(u,s),c)};return a}const td=Number.EPSILON||1e-14,R0=(e,t)=>t<e.length&&!e[t].skip&&e[t],ai=e=>e==="x"?"y":"x";function nd(e,t,n,r){const i=e.skip?t:e,s=t,a=n.skip?t:n,o=m5(s,i),l=m5(a,s);let c=o/(o+l),u=l/(o+l);c=isNaN(c)?0:c,u=isNaN(u)?0:u;const d=r*c,f=r*u;return{previous:{x:s.x-d*(a.x-i.x),y:s.y-d*(a.y-i.y)},next:{x:s.x+f*(a.x-i.x),y:s.y+f*(a.y-i.y)}}}function rd(e,t,n){const r=e.length;let i,s,a,o,l,c=R0(e,0);for(let u=0;u<r-1;++u)if(l=c,c=R0(e,u+1),!(!l||!c)){if(i2(t[u],0,td)){n[u]=n[u+1]=0;continue}i=n[u]/t[u],s=n[u+1]/t[u],o=Math.pow(i,2)+Math.pow(s,2),!(o<=9)&&(a=3/Math.sqrt(o),n[u]=i*a*t[u],n[u+1]=s*a*t[u])}}function id(e,t,n="x"){const r=ai(n),i=e.length;let s,a,o,l=R0(e,0);for(let c=0;c<i;++c){if(a=o,o=l,l=R0(e,c+1),!o)continue;const u=o[n],d=o[r];a&&(s=(u-a[n])/3,o[`cp1${n}`]=u-s,o[`cp1${r}`]=d-s*t[c]),l&&(s=(l[n]-u)/3,o[`cp2${n}`]=u+s,o[`cp2${r}`]=d+s*t[c])}}function sd(e,t="x"){const n=ai(t),r=e.length,i=Array(r).fill(0),s=Array(r);let a,o,l,c=R0(e,0);for(a=0;a<r;++a)if(o=l,l=c,c=R0(e,a+1),!!l){if(c){const u=c[t]-l[t];i[a]=u!==0?(c[n]-l[n])/u:0}s[a]=o?c?Xe(i[a-1])!==Xe(i[a])?0:(i[a-1]+i[a])/2:i[a-1]:i[a]}rd(e,i,s),id(e,s,t)}function V2(e,t,n){return Math.max(Math.min(e,n),t)}function ad(e,t){let n,r,i,s,a,o=y5(e[0],t);for(n=0,r=e.length;n<r;++n)a=s,s=o,o=n<r-1&&y5(e[n+1],t),s&&(i=e[n],a&&(i.cp1x=V2(i.cp1x,t.left,t.right),i.cp1y=V2(i.cp1y,t.top,t.bottom)),o&&(i.cp2x=V2(i.cp2x,t.left,t.right),i.cp2y=V2(i.cp2y,t.top,t.bottom)))}function od(e,t,n,r,i){let s,a,o,l;if(t.spanGaps&&(e=e.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")sd(e,i);else{let c=r?e[e.length-1]:e[0];for(s=0,a=e.length;s<a;++s)o=e[s],l=nd(c,o,e[Math.min(s+1,a-(r?0:1))%a],t.tension),o.cp1x=l.previous.x,o.cp1y=l.previous.y,o.cp2x=l.next.x,o.cp2y=l.next.y,c=o}t.capBezierPoints&&ad(e,n)}(function(){let e=!1;try{const t={get passive(){return e=!0,!1}};window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}return e})();function Zt(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function ld(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:r==="middle"?n<.5?e.y:t.y:r==="after"?n<1?e.y:t.y:n>0?t.y:e.y}}function cd(e,t,n,r){const i={x:e.cp2x,y:e.cp2y},s={x:t.cp1x,y:t.cp1y},a=Zt(e,i,n),o=Zt(i,s,n),l=Zt(s,t,n),c=Zt(a,o,n),u=Zt(o,l,n);return Zt(c,u,n)}const H8=new Map;function ud(e,t){t=t||{};const n=e+JSON.stringify(t);let r=H8.get(n);return r||(r=new Intl.NumberFormat(e,t),H8.set(n,r)),r}function x2(e,t,n){return ud(t,n).format(e)}const fd=function(e,t){return{x(n){return e+e+t-n},setWidth(n){t=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,r){return n-r},leftForLtr(n,r){return n-r}}},dd=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function H6(e,t,n){return e?fd(t,n):dd()}function hd(e,t){let n,r;(t==="ltr"||t==="rtl")&&(n=e.canvas.style,r=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",t,"important"),e.prevTextDirection=r)}function Cd(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function oi(e){return e==="angle"?{between:y3,compare:ff,normalize:He}:{between:_3,compare:(t,n)=>t-n,normalize:t=>t}}function P8({start:e,end:t,count:n,loop:r,style:i}){return{start:e%n,end:t%n,loop:r&&(t-e+1)%n===0,style:i}}function gd(e,t,n){const{property:r,start:i,end:s}=n,{between:a,normalize:o}=oi(r),l=t.length;let{start:c,end:u,loop:d}=e,f,h;if(d){for(c+=l,u+=l,f=0,h=l;f<h&&a(o(t[c%l][r]),i,s);++f)c--,u--;c%=l,u%=l}return u<c&&(u+=l),{start:c,end:u,loop:d,style:e.style}}function md(e,t,n){if(!n)return[e];const{property:r,start:i,end:s}=n,a=t.length,{compare:o,between:l,normalize:c}=oi(r),{start:u,end:d,loop:f,style:h}=gd(e,t,n),m=[];let b=!1,y=null,p,L,M;const v=()=>l(i,M,p)&&o(i,M)!==0,_=()=>o(s,p)===0||l(s,M,p),E=()=>b||v(),S=()=>!b||_();for(let H=u,F=u;H<=d;++H)L=t[H%a],!L.skip&&(p=c(L[r]),p!==M&&(b=l(p,i,s),y===null&&E()&&(y=o(p,i)===0?H:F),y!==null&&S()&&(m.push(P8({start:y,end:H,loop:f,count:a,style:h})),y=null),F=H,M=p));return y!==null&&m.push(P8({start:y,end:d,loop:f,count:a,style:h})),m}function pd(e,t){const n=[],r=e.segments;for(let i=0;i<r.length;i++){const s=md(r[i],e.points,t);s.length&&n.push(...s)}return n}function bd(e,t,n,r){let i=0,s=t-1;if(n&&!r)for(;i<t&&!e[i].skip;)i++;for(;i<t&&e[i].skip;)i++;for(i%=t,n&&(s+=i);s>i&&e[s%t].skip;)s--;return s%=t,{start:i,end:s}}function yd(e,t,n,r){const i=e.length,s=[];let a=t,o=e[t],l;for(l=t+1;l<=n;++l){const c=e[l%i];c.skip||c.stop?o.skip||(r=!1,s.push({start:t%i,end:(l-1)%i,loop:r}),t=a=c.stop?l:null):(a=l,o.skip&&(t=l)),o=c}return a!==null&&s.push({start:t%i,end:a%i,loop:r}),s}function _d(e,t){const n=e.points,r=e.options.spanGaps,i=n.length;if(!i)return[];const s=!!e._loop,{start:a,end:o}=bd(n,i,s,r);if(r===!0)return N8(e,[{start:a,end:o,loop:s}],n,t);const l=o<a?o+i:o,c=!!e._fullLoop&&a===0&&o===i-1;return N8(e,yd(n,a,l,c),n,t)}function N8(e,t,n,r){return!r||!r.setContext||!n?t:Ld(e,t,n,r)}function Ld(e,t,n,r){const i=e._chart.getContext(),s=I8(e.options),{_datasetIndex:a,options:{spanGaps:o}}=e,l=n.length,c=[];let u=s,d=t[0].start,f=d;function h(m,b,y,p){const L=o?-1:1;if(m!==b){for(m+=l;n[m%l].skip;)m-=L;for(;n[b%l].skip;)b+=L;m%l!==b%l&&(c.push({start:m%l,end:b%l,loop:y,style:p}),u=p,d=b%l)}}for(const m of t){d=o?d:m.start;let b=n[d%l],y;for(f=d+1;f<=m.end;f++){const p=n[f%l];y=I8(r.setContext(s0(i,{type:"segment",p0:b,p1:p,p0DataIndex:(f-1)%l,p1DataIndex:f%l,datasetIndex:a}))),kd(y,u)&&h(d,f-1,m.loop,u),b=p,u=y}d<f-1&&h(d,f-1,m.loop,u)}return c}function I8(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function kd(e,t){return t&&JSON.stringify(e)!==JSON.stringify(t)}/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */class vd{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,n,r,i){const s=n.listeners[i],a=n.duration;s.forEach(o=>o({chart:t,initial:n.initial,numSteps:a,currentStep:Math.min(r-n.start,a)}))}_refresh(){this._request||(this._running=!0,this._request=gf.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let n=0;this._charts.forEach((r,i)=>{if(!r.running||!r.items.length)return;const s=r.items;let a=s.length-1,o=!1,l;for(;a>=0;--a)l=s[a],l._active?(l._total>r.duration&&(r.duration=l._total),l.tick(t),o=!0):(s[a]=s[s.length-1],s.pop());o&&(i.draw(),this._notify(i,r,t,"progress")),s.length||(r.running=!1,this._notify(i,r,t,"complete"),r.initial=!1),n+=s.length}),this._lastDate=t,n===0&&(this._running=!1)}_getAnims(t){const n=this._charts;let r=n.get(t);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(t,r)),r}listen(t,n,r){this._getAnims(t).listeners[n].push(r)}add(t,n){!n||!n.length||this._getAnims(t).items.push(...n)}has(t){return this._getAnims(t).items.length>0}start(t){const n=this._charts.get(t);!n||(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((r,i)=>Math.max(r,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const n=this._charts.get(t);return!(!n||!n.running||!n.items.length)}stop(t){const n=this._charts.get(t);if(!n||!n.items.length)return;const r=n.items;let i=r.length-1;for(;i>=0;--i)r[i].cancel();n.items=[],this._notify(t,n,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Md=new vd;const D8="transparent",xd={boolean(e,t,n){return n>.5?t:e},color(e,t,n){const r=R8(e||D8),i=r.valid&&R8(t||D8);return i&&i.valid?i.mix(r,n).hexString():t},number(e,t,n){return e+(t-e)*n}};class Sd{constructor(t,n,r,i){const s=n[r];i=B2([t.to,i,s,t.from]);const a=B2([t.from,s,i]);this._active=!0,this._fn=t.fn||xd[t.type||typeof a],this._easing=s2[t.easing]||s2.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=n,this._prop=r,this._from=a,this._to=i,this._promises=void 0}active(){return this._active}update(t,n,r){if(this._active){this._notify(!1);const i=this._target[this._prop],s=r-this._start,a=this._duration-s;this._start=r,this._duration=Math.floor(Math.max(a,t.duration)),this._total+=s,this._loop=!!t.loop,this._to=B2([t.to,n,i,t.from]),this._from=B2([t.from,i,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const n=t-this._start,r=this._duration,i=this._prop,s=this._from,a=this._loop,o=this._to;let l;if(this._active=s!==o&&(a||n<r),!this._active){this._target[i]=o,this._notify(!0);return}if(n<0){this._target[i]=s;return}l=n/r%2,l=a&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[i]=this._fn(s,o,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((n,r)=>{t.push({res:n,rej:r})})}_notify(t){const n=t?"res":"rej",r=this._promises||[];for(let i=0;i<r.length;i++)r[i][n]()}}const wd=["x","y","borderWidth","radius","tension"],Ed=["color","borderColor","backgroundColor"];O1.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0});const Fd=Object.keys(O1.animation);O1.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"});O1.set("animations",{colors:{type:"color",properties:Ed},numbers:{type:"number",properties:wd}});O1.describe("animations",{_fallback:"animation"});O1.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}});class li{constructor(t,n){this._chart=t,this._properties=new Map,this.configure(n)}configure(t){if(!E1(t))return;const n=this._properties;Object.getOwnPropertyNames(t).forEach(r=>{const i=t[r];if(!E1(i))return;const s={};for(const a of Fd)s[a]=i[a];(j1(i.properties)&&i.properties||[r]).forEach(a=>{(a===r||!n.has(a))&&n.set(a,s)})})}_animateOptions(t,n){const r=n.options,i=Od(t,r);if(!i)return[];const s=this._createAnimations(i,r);return r.$shared&&Td(t.options.$animations,r).then(()=>{t.options=r},()=>{}),s}_createAnimations(t,n){const r=this._properties,i=[],s=t.$animations||(t.$animations={}),a=Object.keys(n),o=Date.now();let l;for(l=a.length-1;l>=0;--l){const c=a[l];if(c.charAt(0)==="$")continue;if(c==="options"){i.push(...this._animateOptions(t,n));continue}const u=n[c];let d=s[c];const f=r.get(c);if(d)if(f&&d.active()){d.update(f,u,o);continue}else d.cancel();if(!f||!f.duration){t[c]=u;continue}s[c]=d=new Sd(f,t,c,u),i.push(d)}return i}update(t,n){if(this._properties.size===0){Object.assign(t,n);return}const r=this._createAnimations(t,n);if(r.length)return Md.add(this._chart,r),!0}}function Td(e,t){const n=[],r=Object.keys(t);for(let i=0;i<r.length;i++){const s=e[r[i]];s&&s.active()&&n.push(s.wait())}return Promise.all(n)}function Od(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function B8(e,t){const n=e&&e.options||{},r=n.reverse,i=n.min===void 0?t:0,s=n.max===void 0?t:0;return{start:r?s:i,end:r?i:s}}function Ad(e,t,n){if(n===!1)return!1;const r=B8(e,n),i=B8(t,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}}function Rd(e){let t,n,r,i;return E1(e)?(t=e.top,n=e.right,r=e.bottom,i=e.left):t=n=r=i=e,{top:t,right:n,bottom:r,left:i,disabled:e===!1}}function ci(e,t){const n=[],r=e._getSortedDatasetMetas(t);let i,s;for(i=0,s=r.length;i<s;++i)n.push(r[i].index);return n}function V8(e,t,n,r={}){const i=e.keys,s=r.mode==="single";let a,o,l,c;if(t!==null){for(a=0,o=i.length;a<o;++a){if(l=+i[a],l===n){if(r.all)continue;break}c=e.values[l],te(c)&&(s||t===0||Xe(t)===Xe(c))&&(t+=c)}return t}}function Hd(e){const t=Object.keys(e),n=new Array(t.length);let r,i,s;for(r=0,i=t.length;r<i;++r)s=t[r],n[r]={x:s,y:e[s]};return n}function W8(e,t){const n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function Pd(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function Nd(e){const{min:t,max:n,minDefined:r,maxDefined:i}=e.getUserBounds();return{min:r?t:Number.NEGATIVE_INFINITY,max:i?n:Number.POSITIVE_INFINITY}}function Id(e,t,n){const r=e[t]||(e[t]={});return r[n]||(r[n]={})}function $8(e,t,n,r){for(const i of t.getMatchingVisibleMetas(r).reverse()){const s=e[i.index];if(n&&s>0||!n&&s<0)return i.index}return null}function j8(e,t){const{chart:n,_cachedMeta:r}=e,i=n._stacks||(n._stacks={}),{iScale:s,vScale:a,index:o}=r,l=s.axis,c=a.axis,u=Pd(s,a,r),d=t.length;let f;for(let h=0;h<d;++h){const m=t[h],{[l]:b,[c]:y}=m,p=m._stacks||(m._stacks={});f=p[c]=Id(i,u,b),f[o]=y,f._top=$8(f,a,!0,r.type),f._bottom=$8(f,a,!1,r.type)}}function P6(e,t){const n=e.scales;return Object.keys(n).filter(r=>n[r].axis===t).shift()}function Dd(e,t){return s0(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function Bd(e,t,n){return s0(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:"default",type:"data"})}function z0(e,t){const n=e.controller.index,r=e.vScale&&e.vScale.axis;if(!!r){t=t||e._parsed;for(const i of t){const s=i._stacks;if(!s||s[r]===void 0||s[r][n]===void 0)return;delete s[r][n]}}}const N6=e=>e==="reset"||e==="none",U8=(e,t)=>t?e:Object.assign({},e),Vd=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:ci(n,!0),values:null};class $e{constructor(t,n){this.chart=t,this._ctx=t.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=W8(t.vScale,t),this.addElements()}updateIndex(t){this.index!==t&&z0(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,n=this._cachedMeta,r=this.getDataset(),i=(d,f,h,m)=>d==="x"?f:d==="r"?m:h,s=n.xAxisID=L1(r.xAxisID,P6(t,"x")),a=n.yAxisID=L1(r.yAxisID,P6(t,"y")),o=n.rAxisID=L1(r.rAxisID,P6(t,"r")),l=n.indexAxis,c=n.iAxisID=i(l,s,a,o),u=n.vAxisID=i(l,a,s,o);n.xScale=this.getScaleForId(s),n.yScale=this.getScaleForId(a),n.rScale=this.getScaleForId(o),n.iScale=this.getScaleForId(c),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const n=this._cachedMeta;return t===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&x8(this._data,this),t._stacked&&z0(t)}_dataCheck(){const t=this.getDataset(),n=t.data||(t.data=[]),r=this._data;if(E1(n))this._data=Hd(n);else if(r!==n){if(r){x8(r,this);const i=this._cachedMeta;z0(i),i._parsed=[]}n&&Object.isExtensible(n)&&Cf(n,this),this._syncList=[],this._data=n}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const n=this._cachedMeta,r=this.getDataset();let i=!1;this._dataCheck();const s=n._stacked;n._stacked=W8(n.vScale,n),n.stack!==r.stack&&(i=!0,z0(n),n.stack=r.stack),this._resyncElements(t),(i||s!==n._stacked)&&j8(this,n._parsed)}configure(){const t=this.chart.config,n=t.datasetScopeKeys(this._type),r=t.getOptionScopes(this.getDataset(),n,!0);this.options=t.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,n){const{_cachedMeta:r,_data:i}=this,{iScale:s,_stacked:a}=r,o=s.axis;let l=t===0&&n===i.length?!0:r._sorted,c=t>0&&r._parsed[t-1],u,d,f;if(this._parsing===!1)r._parsed=i,r._sorted=!0,f=i;else{j1(i[t])?f=this.parseArrayData(r,i,t,n):E1(i[t])?f=this.parseObjectData(r,i,t,n):f=this.parsePrimitiveData(r,i,t,n);const h=()=>d[o]===null||c&&d[o]<c[o];for(u=0;u<n;++u)r._parsed[u+t]=d=f[u],l&&(h()&&(l=!1),c=d);r._sorted=l}a&&j8(this,f)}parsePrimitiveData(t,n,r,i){const{iScale:s,vScale:a}=t,o=s.axis,l=a.axis,c=s.getLabels(),u=s===a,d=new Array(i);let f,h,m;for(f=0,h=i;f<h;++f)m=f+r,d[f]={[o]:u||s.parse(c[m],m),[l]:a.parse(n[m],m)};return d}parseArrayData(t,n,r,i){const{xScale:s,yScale:a}=t,o=new Array(i);let l,c,u,d;for(l=0,c=i;l<c;++l)u=l+r,d=n[u],o[l]={x:s.parse(d[0],u),y:a.parse(d[1],u)};return o}parseObjectData(t,n,r,i){const{xScale:s,yScale:a}=t,{xAxisKey:o="x",yAxisKey:l="y"}=this._parsing,c=new Array(i);let u,d,f,h;for(u=0,d=i;u<d;++u)f=u+r,h=n[f],c[u]={x:s.parse(O0(h,o),f),y:a.parse(O0(h,l),f)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,n,r){const i=this.chart,s=this._cachedMeta,a=n[t.axis],o={keys:ci(i,!0),values:n._stacks[t.axis]};return V8(o,a,s.index,{mode:r})}updateRangeFromParsed(t,n,r,i){const s=r[n.axis];let a=s===null?NaN:s;const o=i&&r._stacks[n.axis];i&&o&&(i.values=o,a=V8(i,s,this._cachedMeta.index)),t.min=Math.min(t.min,a),t.max=Math.max(t.max,a)}getMinMax(t,n){const r=this._cachedMeta,i=r._parsed,s=r._sorted&&t===r.iScale,a=i.length,o=this._getOtherScale(t),l=Vd(n,r,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:d}=Nd(o);let f,h;function m(){h=i[f];const b=h[o.axis];return!te(h[t.axis])||u>b||d<b}for(f=0;f<a&&!(!m()&&(this.updateRangeFromParsed(c,t,h,l),s));++f);if(s){for(f=a-1;f>=0;--f)if(!m()){this.updateRangeFromParsed(c,t,h,l);break}}return c}getAllParsedValues(t){const n=this._cachedMeta._parsed,r=[];let i,s,a;for(i=0,s=n.length;i<s;++i)a=n[i][t.axis],te(a)&&r.push(a);return r}getMaxOverflow(){return!1}getLabelAndValue(t){const n=this._cachedMeta,r=n.iScale,i=n.vScale,s=this.getParsed(t);return{label:r?""+r.getLabelForValue(s[r.axis]):"",value:i?""+i.getLabelForValue(s[i.axis]):""}}_update(t){const n=this._cachedMeta;this.update(t||"default"),n._clip=Rd(L1(this.options.clip,Ad(n.xScale,n.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,n=this.chart,r=this._cachedMeta,i=r.data||[],s=n.chartArea,a=[],o=this._drawStart||0,l=this._drawCount||i.length-o,c=this.options.drawActiveElementsOnTop;let u;for(r.dataset&&r.dataset.draw(t,s,o,l),u=o;u<o+l;++u){const d=i[u];d.hidden||(d.active&&c?a.push(d):d.draw(t,s))}for(u=0;u<a.length;++u)a[u].draw(t,s)}getStyle(t,n){const r=n?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(t||0,r)}getContext(t,n,r){const i=this.getDataset();let s;if(t>=0&&t<this._cachedMeta.data.length){const a=this._cachedMeta.data[t];s=a.$context||(a.$context=Bd(this.getContext(),t,a)),s.parsed=this.getParsed(t),s.raw=i.data[t],s.index=s.dataIndex=t}else s=this.$context||(this.$context=Dd(this.chart.getContext(),this.index)),s.dataset=i,s.index=s.datasetIndex=this.index;return s.active=!!n,s.mode=r,s}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,n){return this._resolveElementOptions(this.dataElementType.id,n,t)}_resolveElementOptions(t,n="default",r){const i=n==="active",s=this._cachedDataOpts,a=t+"-"+n,o=s[a],l=this.enableOptionSharing&&Zr(r);if(o)return U8(o,l);const c=this.chart.config,u=c.datasetElementScopeKeys(this._type,t),d=i?[`${t}Hover`,"hover",t,""]:[t,""],f=c.getOptionScopes(this.getDataset(),u),h=Object.keys(O1.elements[t]),m=()=>this.getContext(r,i),b=c.resolveNamedOptions(f,h,m,d);return b.$shared&&(b.$shared=l,s[a]=Object.freeze(U8(b,l))),b}_resolveAnimations(t,n,r){const i=this.chart,s=this._cachedDataOpts,a=`animation-${n}`,o=s[a];if(o)return o;let l;if(i.options.animation!==!1){const u=this.chart.config,d=u.datasetAnimationScopeKeys(this._type,n),f=u.getOptionScopes(this.getDataset(),d);l=u.createResolver(f,this.getContext(t,r,n))}const c=new li(i,l&&l.animations);return l&&l._cacheable&&(s[a]=Object.freeze(c)),c}getSharedOptions(t){if(!!t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,n){return!n||N6(t)||this.chart._animationsDisabled}_getSharedOptions(t,n){const r=this.resolveDataElementOptions(t,n),i=this._sharedOptions,s=this.getSharedOptions(r),a=this.includeOptions(n,s)||s!==i;return this.updateSharedOptions(s,n,r),{sharedOptions:s,includeOptions:a}}updateElement(t,n,r,i){N6(i)?Object.assign(t,r):this._resolveAnimations(n,i).update(t,r)}updateSharedOptions(t,n,r){t&&!N6(n)&&this._resolveAnimations(void 0,n).update(t,r)}_setStyle(t,n,r,i){t.active=i;const s=this.getStyle(n,i);this._resolveAnimations(n,r,i).update(t,{options:!i&&this.getSharedOptions(s)||s})}removeHoverStyle(t,n,r){this._setStyle(t,r,"active",!1)}setHoverStyle(t,n,r){this._setStyle(t,r,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const n=this._data,r=this._cachedMeta.data;for(const[o,l,c]of this._syncList)this[o](l,c);this._syncList=[];const i=r.length,s=n.length,a=Math.min(s,i);a&&this.parse(0,a),s>i?this._insertElements(i,s-i,t):s<i&&this._removeElements(s,i-s)}_insertElements(t,n,r=!0){const i=this._cachedMeta,s=i.data,a=t+n;let o;const l=c=>{for(c.length+=n,o=c.length-1;o>=a;o--)c[o]=c[o-n]};for(l(s),o=t;o<a;++o)s[o]=new this.dataElementType;this._parsing&&l(i._parsed),this.parse(t,n),r&&this.updateElements(s,t,n,"reset")}updateElements(t,n,r,i){}_removeElements(t,n){const r=this._cachedMeta;if(this._parsing){const i=r._parsed.splice(t,n);r._stacked&&z0(r,i)}r.data.splice(t,n)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[n,r,i]=t;this[n](r,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,n){n&&this._sync(["_removeElements",t,n]);const r=arguments.length-2;r&&this._sync(["_insertElements",t,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}$e.defaults={};$e.prototype.datasetElementType=null;$e.prototype.dataElementType=null;function Wd(e,t){if(!e._cache.$bar){const n=e.getMatchingVisibleMetas(t);let r=[];for(let i=0,s=n.length;i<s;i++)r=r.concat(n[i].controller.getAllParsedValues(e));e._cache.$bar=Yr(r.sort((i,s)=>i-s))}return e._cache.$bar}function $d(e){const t=e.iScale,n=Wd(t,e.type);let r=t._length,i,s,a,o;const l=()=>{a===32767||a===-32768||(Zr(o)&&(r=Math.min(r,Math.abs(a-o)||r)),o=a)};for(i=0,s=n.length;i<s;++i)a=t.getPixelForValue(n[i]),l();for(o=void 0,i=0,s=t.ticks.length;i<s;++i)a=t.getPixelForTick(i),l();return r}function jd(e,t,n,r){const i=n.barThickness;let s,a;return w1(i)?(s=t.min*n.categoryPercentage,a=n.barPercentage):(s=i*r,a=1),{chunk:s/r,ratio:a,start:t.pixels[e]-s/2}}function Ud(e,t,n,r){const i=t.pixels,s=i[e];let a=e>0?i[e-1]:null,o=e<i.length-1?i[e+1]:null;const l=n.categoryPercentage;a===null&&(a=s-(o===null?t.end-t.start:o-s)),o===null&&(o=s+s-a);const c=s-(s-Math.min(a,o))/2*l;return{chunk:Math.abs(o-a)/2*l/r,ratio:n.barPercentage,start:c}}function Zd(e,t,n,r){const i=n.parse(e[0],r),s=n.parse(e[1],r),a=Math.min(i,s),o=Math.max(i,s);let l=a,c=o;Math.abs(a)>Math.abs(o)&&(l=o,c=a),t[n.axis]=c,t._custom={barStart:l,barEnd:c,start:i,end:s,min:a,max:o}}function ui(e,t,n,r){return j1(e)?Zd(e,t,n,r):t[n.axis]=n.parse(e,r),t}function Z8(e,t,n,r){const i=e.iScale,s=e.vScale,a=i.getLabels(),o=i===s,l=[];let c,u,d,f;for(c=n,u=n+r;c<u;++c)f=t[c],d={},d[i.axis]=o||i.parse(a[c],c),l.push(ui(f,d,s,c));return l}function I6(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function zd(e,t,n){return e!==0?Xe(e):(t.isHorizontal()?1:-1)*(t.min>=n?1:-1)}function Gd(e){let t,n,r,i,s;return e.horizontal?(t=e.base>e.x,n="left",r="right"):(t=e.base<e.y,n="bottom",r="top"),t?(i="end",s="start"):(i="start",s="end"),{start:n,end:r,reverse:t,top:i,bottom:s}}function qd(e,t,n,r){let i=t.borderSkipped;const s={};if(!i){e.borderSkipped=s;return}if(i===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:a,end:o,reverse:l,top:c,bottom:u}=Gd(e);i==="middle"&&n&&(e.enableBorderRadius=!0,(n._top||0)===r?i=c:(n._bottom||0)===r?i=u:(s[z8(u,a,o,l)]=!0,i=c)),s[z8(i,a,o,l)]=!0,e.borderSkipped=s}function z8(e,t,n,r){return r?(e=Yd(e,t,n),e=G8(e,n,t)):e=G8(e,t,n),e}function Yd(e,t,n){return e===t?n:e===n?t:e}function G8(e,t,n){return e==="start"?t:e==="end"?n:e}function Kd(e,{inflateAmount:t},n){e.inflateAmount=t==="auto"?n===1?.33:0:t}class _7 extends $e{parsePrimitiveData(t,n,r,i){return Z8(t,n,r,i)}parseArrayData(t,n,r,i){return Z8(t,n,r,i)}parseObjectData(t,n,r,i){const{iScale:s,vScale:a}=t,{xAxisKey:o="x",yAxisKey:l="y"}=this._parsing,c=s.axis==="x"?o:l,u=a.axis==="x"?o:l,d=[];let f,h,m,b;for(f=r,h=r+i;f<h;++f)b=n[f],m={},m[s.axis]=s.parse(O0(b,c),f),d.push(ui(O0(b,u),m,a,f));return d}updateRangeFromParsed(t,n,r,i){super.updateRangeFromParsed(t,n,r,i);const s=r._custom;s&&n===this._cachedMeta.vScale&&(t.min=Math.min(t.min,s.min),t.max=Math.max(t.max,s.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const n=this._cachedMeta,{iScale:r,vScale:i}=n,s=this.getParsed(t),a=s._custom,o=I6(a)?"["+a.start+", "+a.end+"]":""+i.getLabelForValue(s[i.axis]);return{label:""+r.getLabelForValue(s[r.axis]),value:o}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const n=this._cachedMeta;this.updateElements(n.data,0,n.data.length,t)}updateElements(t,n,r,i){const s=i==="reset",{index:a,_cachedMeta:{vScale:o}}=this,l=o.getBasePixel(),c=o.isHorizontal(),u=this._getRuler(),{sharedOptions:d,includeOptions:f}=this._getSharedOptions(n,i);for(let h=n;h<n+r;h++){const m=this.getParsed(h),b=s||w1(m[o.axis])?{base:l,head:l}:this._calculateBarValuePixels(h),y=this._calculateBarIndexPixels(h,u),p=(m._stacks||{})[o.axis],L={horizontal:c,base:b.base,enableBorderRadius:!p||I6(m._custom)||a===p._top||a===p._bottom,x:c?b.head:y.center,y:c?y.center:b.head,height:c?y.size:Math.abs(b.size),width:c?Math.abs(b.size):y.size};f&&(L.options=d||this.resolveDataElementOptions(h,t[h].active?"active":i));const M=L.options||t[h].options;qd(L,M,p,a),Kd(L,M,u.ratio),this.updateElement(t[h],h,L,i)}}_getStacks(t,n){const{iScale:r}=this._cachedMeta,i=r.getMatchingVisibleMetas(this._type).filter(l=>l.controller.options.grouped),s=r.options.stacked,a=[],o=l=>{const c=l.controller.getParsed(n),u=c&&c[l.vScale.axis];if(w1(u)||isNaN(u))return!0};for(const l of i)if(!(n!==void 0&&o(l))&&((s===!1||a.indexOf(l.stack)===-1||s===void 0&&l.stack===void 0)&&a.push(l.stack),l.index===t))break;return a.length||a.push(void 0),a}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,n,r){const i=this._getStacks(t,r),s=n!==void 0?i.indexOf(n):-1;return s===-1?i.length-1:s}_getRuler(){const t=this.options,n=this._cachedMeta,r=n.iScale,i=[];let s,a;for(s=0,a=n.data.length;s<a;++s)i.push(r.getPixelForValue(this.getParsed(s)[r.axis],s));const o=t.barThickness;return{min:o||$d(n),pixels:i,start:r._startPixel,end:r._endPixel,stackCount:this._getStackCount(),scale:r,grouped:t.grouped,ratio:o?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:n,_stacked:r},options:{base:i,minBarLength:s}}=this,a=i||0,o=this.getParsed(t),l=o._custom,c=I6(l);let u=o[n.axis],d=0,f=r?this.applyStack(n,o,r):u,h,m;f!==u&&(d=f-u,f=u),c&&(u=l.barStart,f=l.barEnd-l.barStart,u!==0&&Xe(u)!==Xe(l.barEnd)&&(d=0),d+=u);const b=!w1(i)&&!c?i:d;let y=n.getPixelForValue(b);if(this.chart.getDataVisibility(t)?h=n.getPixelForValue(d+f):h=y,m=h-y,Math.abs(m)<s){m=zd(m,n,a)*s,u===a&&(y-=m/2);const p=n.getPixelForDecimal(0),L=n.getPixelForDecimal(1),M=Math.min(p,L),v=Math.max(p,L);y=Math.max(Math.min(y,v),M),h=y+m}if(y===n.getPixelForValue(a)){const p=Xe(m)*n.getLineWidthForValue(a)/2;y+=p,m-=p}return{size:m,base:y,head:h,center:h+m/2}}_calculateBarIndexPixels(t,n){const r=n.scale,i=this.options,s=i.skipNull,a=L1(i.maxBarThickness,1/0);let o,l;if(n.grouped){const c=s?this._getStackCount(t):n.stackCount,u=i.barThickness==="flex"?Ud(t,n,i,c):jd(t,n,i,c),d=this._getStackIndex(this.index,this._cachedMeta.stack,s?t:void 0);o=u.start+u.chunk*d+u.chunk/2,l=Math.min(a,u.chunk*u.ratio)}else o=r.getPixelForValue(this.getParsed(t)[r.axis],t),l=Math.min(a,n.min*n.ratio);return{base:o-l/2,head:o+l/2,center:o,size:l}}draw(){const t=this._cachedMeta,n=t.vScale,r=t.data,i=r.length;let s=0;for(;s<i;++s)this.getParsed(s)[n.axis]!==null&&r[s].draw(this._ctx)}}_7.id="bar";_7.defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};_7.overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};class L7 extends $e{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,n,r,i){const s=super.parsePrimitiveData(t,n,r,i);for(let a=0;a<s.length;a++)s[a]._custom=this.resolveDataElementOptions(a+r).radius;return s}parseArrayData(t,n,r,i){const s=super.parseArrayData(t,n,r,i);for(let a=0;a<s.length;a++){const o=n[r+a];s[a]._custom=L1(o[2],this.resolveDataElementOptions(a+r).radius)}return s}parseObjectData(t,n,r,i){const s=super.parseObjectData(t,n,r,i);for(let a=0;a<s.length;a++){const o=n[r+a];s[a]._custom=L1(o&&o.r&&+o.r,this.resolveDataElementOptions(a+r).radius)}return s}getMaxOverflow(){const t=this._cachedMeta.data;let n=0;for(let r=t.length-1;r>=0;--r)n=Math.max(n,t[r].size(this.resolveDataElementOptions(r))/2);return n>0&&n}getLabelAndValue(t){const n=this._cachedMeta,{xScale:r,yScale:i}=n,s=this.getParsed(t),a=r.getLabelForValue(s.x),o=i.getLabelForValue(s.y),l=s._custom;return{label:n.label,value:"("+a+", "+o+(l?", "+l:"")+")"}}update(t){const n=this._cachedMeta.data;this.updateElements(n,0,n.length,t)}updateElements(t,n,r,i){const s=i==="reset",{iScale:a,vScale:o}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(n,i),u=a.axis,d=o.axis;for(let f=n;f<n+r;f++){const h=t[f],m=!s&&this.getParsed(f),b={},y=b[u]=s?a.getPixelForDecimal(.5):a.getPixelForValue(m[u]),p=b[d]=s?o.getBasePixel():o.getPixelForValue(m[d]);b.skip=isNaN(y)||isNaN(p),c&&(b.options=l||this.resolveDataElementOptions(f,h.active?"active":i),s&&(b.options.radius=0)),this.updateElement(h,f,b,i)}}resolveDataElementOptions(t,n){const r=this.getParsed(t);let i=super.resolveDataElementOptions(t,n);i.$shared&&(i=Object.assign({},i,{$shared:!1}));const s=i.radius;return n!=="active"&&(i.radius=0),i.radius+=L1(r&&r._custom,s),i}}L7.id="bubble";L7.defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}};L7.overrides={scales:{x:{type:"linear"},y:{type:"linear"}},plugins:{tooltip:{callbacks:{title(){return""}}}}};function Xd(e,t,n){let r=1,i=1,s=0,a=0;if(t<x1){const o=e,l=o+t,c=Math.cos(o),u=Math.sin(o),d=Math.cos(l),f=Math.sin(l),h=(M,v,_)=>y3(M,o,l,!0)?1:Math.max(v,v*n,_,_*n),m=(M,v,_)=>y3(M,o,l,!0)?-1:Math.min(v,v*n,_,_*n),b=h(0,c,d),y=h(D1,u,f),p=m(V1,c,d),L=m(V1+D1,u,f);r=(b-p)/2,i=(y-L)/2,s=-(b+p)/2,a=-(y+L)/2}return{ratioX:r,ratioY:i,offsetX:s,offsetY:a}}class S2 extends $e{constructor(t,n){super(t,n),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,n){const r=this.getDataset().data,i=this._cachedMeta;if(this._parsing===!1)i._parsed=r;else{let s=l=>+r[l];if(E1(r[t])){const{key:l="value"}=this._parsing;s=c=>+O0(r[c],l)}let a,o;for(a=t,o=t+n;a<o;++a)i._parsed[a]=s(a)}}_getRotation(){return De(this.options.rotation-90)}_getCircumference(){return De(this.options.circumference)}_getRotationExtents(){let t=x1,n=-x1;for(let r=0;r<this.chart.data.datasets.length;++r)if(this.chart.isDatasetVisible(r)){const i=this.chart.getDatasetMeta(r).controller,s=i._getRotation(),a=i._getCircumference();t=Math.min(t,s),n=Math.max(n,s+a)}return{rotation:t,circumference:n-t}}update(t){const n=this.chart,{chartArea:r}=n,i=this._cachedMeta,s=i.data,a=this.getMaxBorderWidth()+this.getMaxOffset(s)+this.options.spacing,o=Math.max((Math.min(r.width,r.height)-a)/2,0),l=Math.min(ef(this.options.cutout,o),1),c=this._getRingWeight(this.index),{circumference:u,rotation:d}=this._getRotationExtents(),{ratioX:f,ratioY:h,offsetX:m,offsetY:b}=Xd(d,u,l),y=(r.width-a)/f,p=(r.height-a)/h,L=Math.max(Math.min(y,p)/2,0),M=Wr(this.options.radius,L),v=Math.max(M*l,0),_=(M-v)/this._getVisibleDatasetWeightTotal();this.offsetX=m*M,this.offsetY=b*M,i.total=this.calculateTotal(),this.outerRadius=M-_*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-_*c,0),this.updateElements(s,0,s.length,t)}_circumference(t,n){const r=this.options,i=this._cachedMeta,s=this._getCircumference();return n&&r.animation.animateRotate||!this.chart.getDataVisibility(t)||i._parsed[t]===null||i.data[t].hidden?0:this.calculateCircumference(i._parsed[t]*s/x1)}updateElements(t,n,r,i){const s=i==="reset",a=this.chart,o=a.chartArea,c=a.options.animation,u=(o.left+o.right)/2,d=(o.top+o.bottom)/2,f=s&&c.animateScale,h=f?0:this.innerRadius,m=f?0:this.outerRadius,{sharedOptions:b,includeOptions:y}=this._getSharedOptions(n,i);let p=this._getRotation(),L;for(L=0;L<n;++L)p+=this._circumference(L,s);for(L=n;L<n+r;++L){const M=this._circumference(L,s),v=t[L],_={x:u+this.offsetX,y:d+this.offsetY,startAngle:p,endAngle:p+M,circumference:M,outerRadius:m,innerRadius:h};y&&(_.options=b||this.resolveDataElementOptions(L,v.active?"active":i)),p+=M,this.updateElement(v,L,_,i)}}calculateTotal(){const t=this._cachedMeta,n=t.data;let r=0,i;for(i=0;i<n.length;i++){const s=t._parsed[i];s!==null&&!isNaN(s)&&this.chart.getDataVisibility(i)&&!n[i].hidden&&(r+=Math.abs(s))}return r}calculateCircumference(t){const n=this._cachedMeta.total;return n>0&&!isNaN(t)?x1*(Math.abs(t)/n):0}getLabelAndValue(t){const n=this._cachedMeta,r=this.chart,i=r.data.labels||[],s=x2(n._parsed[t],r.options.locale);return{label:i[t]||"",value:s}}getMaxBorderWidth(t){let n=0;const r=this.chart;let i,s,a,o,l;if(!t){for(i=0,s=r.data.datasets.length;i<s;++i)if(r.isDatasetVisible(i)){a=r.getDatasetMeta(i),t=a.data,o=a.controller;break}}if(!t)return 0;for(i=0,s=t.length;i<s;++i)l=o.resolveDataElementOptions(i),l.borderAlign!=="inner"&&(n=Math.max(n,l.borderWidth||0,l.hoverBorderWidth||0));return n}getMaxOffset(t){let n=0;for(let r=0,i=t.length;r<i;++r){const s=this.resolveDataElementOptions(r);n=Math.max(n,s.offset||0,s.hoverOffset||0)}return n}_getRingWeightOffset(t){let n=0;for(let r=0;r<t;++r)this.chart.isDatasetVisible(r)&&(n+=this._getRingWeight(r));return n}_getRingWeight(t){return Math.max(L1(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}S2.id="doughnut";S2.defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"};S2.descriptors={_scriptable:e=>e!=="spacing",_indexable:e=>e!=="spacing"};S2.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const t=e.data;if(t.labels.length&&t.datasets.length){const{labels:{pointStyle:n}}=e.legend.options;return t.labels.map((r,i)=>{const a=e.getDatasetMeta(0).controller.getStyle(i);return{text:r,fillStyle:a.backgroundColor,strokeStyle:a.borderColor,lineWidth:a.borderWidth,pointStyle:n,hidden:!e.getDataVisibility(i),index:i}})}return[]}},onClick(e,t,n){n.chart.toggleDataVisibility(t.index),n.chart.update()}},tooltip:{callbacks:{title(){return""},label(e){let t=e.label;const n=": "+e.formattedValue;return j1(t)?(t=t.slice(),t[0]+=n):t+=n,t}}}}};class k7 extends $e{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const n=this._cachedMeta,{dataset:r,data:i=[],_dataset:s}=n,a=this.chart._animationsDisabled;let{start:o,count:l}=Kr(n,i,a);this._drawStart=o,this._drawCount=l,Xr(n)&&(o=0,l=i.length),r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!s._decimated,r.points=i;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(r,void 0,{animated:!a,options:c},t),this.updateElements(i,o,l,t)}updateElements(t,n,r,i){const s=i==="reset",{iScale:a,vScale:o,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:u,includeOptions:d}=this._getSharedOptions(n,i),f=a.axis,h=o.axis,{spanGaps:m,segment:b}=this.options,y=A0(m)?m:Number.POSITIVE_INFINITY,p=this.chart._animationsDisabled||s||i==="none";let L=n>0&&this.getParsed(n-1);for(let M=n;M<n+r;++M){const v=t[M],_=this.getParsed(M),E=p?v:{},S=w1(_[h]),H=E[f]=a.getPixelForValue(_[f],M),F=E[h]=s||S?o.getBasePixel():o.getPixelForValue(l?this.applyStack(o,_,l):_[h],M);E.skip=isNaN(H)||isNaN(F)||S,E.stop=M>0&&Math.abs(_[f]-L[f])>y,b&&(E.parsed=_,E.raw=c.data[M]),d&&(E.options=u||this.resolveDataElementOptions(M,v.active?"active":i)),p||this.updateElement(v,M,E,i),L=_}}getMaxOverflow(){const t=this._cachedMeta,n=t.dataset,r=n.options&&n.options.borderWidth||0,i=t.data||[];if(!i.length)return r;const s=i[0].size(this.resolveDataElementOptions(0)),a=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(r,s,a)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}k7.id="line";k7.defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};k7.overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};class v7 extends $e{constructor(t,n){super(t,n),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const n=this._cachedMeta,r=this.chart,i=r.data.labels||[],s=x2(n._parsed[t].r,r.options.locale);return{label:i[t]||"",value:s}}parseObjectData(t,n,r,i){return si.bind(this)(t,n,r,i)}update(t){const n=this._cachedMeta.data;this._updateRadius(),this.updateElements(n,0,n.length,t)}getMinMax(){const t=this._cachedMeta,n={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((r,i)=>{const s=this.getParsed(i).r;!isNaN(s)&&this.chart.getDataVisibility(i)&&(s<n.min&&(n.min=s),s>n.max&&(n.max=s))}),n}_updateRadius(){const t=this.chart,n=t.chartArea,r=t.options,i=Math.min(n.right-n.left,n.bottom-n.top),s=Math.max(i/2,0),a=Math.max(r.cutoutPercentage?s/100*r.cutoutPercentage:1,0),o=(s-a)/t.getVisibleDatasetCount();this.outerRadius=s-o*this.index,this.innerRadius=this.outerRadius-o}updateElements(t,n,r,i){const s=i==="reset",a=this.chart,l=a.options.animation,c=this._cachedMeta.rScale,u=c.xCenter,d=c.yCenter,f=c.getIndexAngle(0)-.5*V1;let h=f,m;const b=360/this.countVisibleElements();for(m=0;m<n;++m)h+=this._computeAngle(m,i,b);for(m=n;m<n+r;m++){const y=t[m];let p=h,L=h+this._computeAngle(m,i,b),M=a.getDataVisibility(m)?c.getDistanceFromCenterForValue(this.getParsed(m).r):0;h=L,s&&(l.animateScale&&(M=0),l.animateRotate&&(p=L=f));const v={x:u,y:d,innerRadius:0,outerRadius:M,startAngle:p,endAngle:L,options:this.resolveDataElementOptions(m,y.active?"active":i)};this.updateElement(y,m,v,i)}}countVisibleElements(){const t=this._cachedMeta;let n=0;return t.data.forEach((r,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&n++}),n}_computeAngle(t,n,r){return this.chart.getDataVisibility(t)?De(this.resolveDataElementOptions(t,n).angle||r):0}}v7.id="polarArea";v7.defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0};v7.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const t=e.data;if(t.labels.length&&t.datasets.length){const{labels:{pointStyle:n}}=e.legend.options;return t.labels.map((r,i)=>{const a=e.getDatasetMeta(0).controller.getStyle(i);return{text:r,fillStyle:a.backgroundColor,strokeStyle:a.borderColor,lineWidth:a.borderWidth,pointStyle:n,hidden:!e.getDataVisibility(i),index:i}})}return[]}},onClick(e,t,n){n.chart.toggleDataVisibility(t.index),n.chart.update()}},tooltip:{callbacks:{title(){return""},label(e){return e.chart.data.labels[e.dataIndex]+": "+e.formattedValue}}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};class fi extends S2{}fi.id="pie";fi.defaults={cutout:0,rotation:0,circumference:360,radius:"100%"};class M7 extends $e{getLabelAndValue(t){const n=this._cachedMeta.vScale,r=this.getParsed(t);return{label:n.getLabels()[t],value:""+n.getLabelForValue(r[n.axis])}}parseObjectData(t,n,r,i){return si.bind(this)(t,n,r,i)}update(t){const n=this._cachedMeta,r=n.dataset,i=n.data||[],s=n.iScale.getLabels();if(r.points=i,t!=="resize"){const a=this.resolveDatasetElementOptions(t);this.options.showLine||(a.borderWidth=0);const o={_loop:!0,_fullLoop:s.length===i.length,options:a};this.updateElement(r,void 0,o,t)}this.updateElements(i,0,i.length,t)}updateElements(t,n,r,i){const s=this._cachedMeta.rScale,a=i==="reset";for(let o=n;o<n+r;o++){const l=t[o],c=this.resolveDataElementOptions(o,l.active?"active":i),u=s.getPointPositionForValue(o,this.getParsed(o).r),d=a?s.xCenter:u.x,f=a?s.yCenter:u.y,h={x:d,y:f,angle:u.angle,skip:isNaN(d)||isNaN(f),options:c};this.updateElement(l,o,h,i)}}}M7.id="radar";M7.defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}};M7.overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};class Ct{constructor(){this.x=void 0,this.y=void 0,this.active=!1,this.options=void 0,this.$animations=void 0}tooltipPosition(t){const{x:n,y:r}=this.getProps(["x","y"],t);return{x:n,y:r}}hasValue(){return A0(this.x)&&A0(this.y)}getProps(t,n){const r=this.$animations;if(!n||!r)return this;const i={};return t.forEach(s=>{i[s]=r[s]&&r[s].active()?r[s]._to:this[s]}),i}}Ct.defaults={};Ct.defaultRoutes=void 0;const di={values(e){return j1(e)?e:""+e},numeric(e,t,n){if(e===0)return"0";const r=this.chart.options.locale;let i,s=e;if(n.length>1){const c=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(c<1e-4||c>1e15)&&(i="scientific"),s=Jd(e,n)}const a=we(Math.abs(s)),o=Math.max(Math.min(-1*Math.floor(a),20),0),l={notation:i,minimumFractionDigits:o,maximumFractionDigits:o};return Object.assign(l,this.options.ticks.format),x2(e,r,l)},logarithmic(e,t,n){if(e===0)return"0";const r=e/Math.pow(10,Math.floor(we(e)));return r===1||r===2||r===5?di.numeric.call(this,e,t,n):""}};function Jd(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var q3={formatters:di};O1.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,t)=>t.lineWidth,tickColor:(e,t)=>t.color,offset:!1,borderDash:[],borderDashOffset:0,borderWidth:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:q3.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}});O1.route("scale.ticks","color","","color");O1.route("scale.grid","color","","borderColor");O1.route("scale.grid","borderColor","","borderColor");O1.route("scale.title","color","","color");O1.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"});O1.describe("scales",{_fallback:"scale"});O1.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"});function Qd(e,t){const n=e.options.ticks,r=n.maxTicksLimit||eh(e),i=n.major.enabled?nh(t):[],s=i.length,a=i[0],o=i[s-1],l=[];if(s>r)return rh(t,l,i,s/r),l;const c=th(i,t,r);if(s>0){let u,d;const f=s>1?Math.round((o-a)/(s-1)):null;for(W2(t,l,c,w1(f)?0:a-f,a),u=0,d=s-1;u<d;u++)W2(t,l,c,i[u],i[u+1]);return W2(t,l,c,o,w1(f)?t.length:o+f),l}return W2(t,l,c),l}function eh(e){const t=e.options.offset,n=e._tickSize(),r=e._length/n+(t?0:1),i=e._maxLength/n;return Math.floor(Math.min(r,i))}function th(e,t,n){const r=ih(e),i=t.length/n;if(!r)return Math.max(i,1);const s=lf(r);for(let a=0,o=s.length-1;a<o;a++){const l=s[a];if(l>i)return l}return Math.max(i,1)}function nh(e){const t=[];let n,r;for(n=0,r=e.length;n<r;n++)e[n].major&&t.push(n);return t}function rh(e,t,n,r){let i=0,s=n[0],a;for(r=Math.ceil(r),a=0;a<e.length;a++)a===s&&(t.push(e[a]),i++,s=n[i*r])}function W2(e,t,n,r,i){const s=L1(r,0),a=Math.min(L1(i,e.length),e.length);let o=0,l,c,u;for(n=Math.ceil(n),i&&(l=i-r,n=l/Math.floor(l/n)),u=s;u<0;)o++,u=Math.round(s+o*n);for(c=Math.max(s,0);c<a;c++)c===u&&(t.push(e[c]),o++,u=Math.round(s+o*n))}function ih(e){const t=e.length;let n,r;if(t<2)return!1;for(r=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==r)return!1;return r}const sh=e=>e==="left"?"right":e==="right"?"left":e,q8=(e,t,n)=>t==="top"||t==="left"?e[t]+n:e[t]-n;function Y8(e,t){const n=[],r=e.length/t,i=e.length;let s=0;for(;s<i;s+=r)n.push(e[Math.floor(s)]);return n}function ah(e,t,n){const r=e.ticks.length,i=Math.min(t,r-1),s=e._startPixel,a=e._endPixel,o=1e-6;let l=e.getPixelForTick(i),c;if(!(n&&(r===1?c=Math.max(l-s,a-l):t===0?c=(e.getPixelForTick(1)-l)/2:c=(l-e.getPixelForTick(i-1))/2,l+=i<t?c:-c,l<s-o||l>a+o)))return l}function oh(e,t){de(e,n=>{const r=n.gc,i=r.length/2;let s;if(i>t){for(s=0;s<i;++s)delete n.data[r[s]];r.splice(0,i)}})}function G0(e){return e.drawTicks?e.tickLength:0}function K8(e,t){if(!e.display)return 0;const n=ke(e.font,t),r=Qe(e.padding);return(j1(e.text)?e.text.length:1)*n.lineHeight+r.height}function lh(e,t){return s0(e,{scale:t,type:"scale"})}function ch(e,t,n){return s0(e,{tick:n,index:t,type:"tick"})}function uh(e,t,n){let r=mf(e);return(n&&t!=="right"||!n&&t==="right")&&(r=sh(r)),r}function fh(e,t,n,r){const{top:i,left:s,bottom:a,right:o,chart:l}=e,{chartArea:c,scales:u}=l;let d=0,f,h,m;const b=a-i,y=o-s;if(e.isHorizontal()){if(h=S8(r,s,o),E1(n)){const p=Object.keys(n)[0],L=n[p];m=u[p].getPixelForValue(L)+b-t}else n==="center"?m=(c.bottom+c.top)/2+b-t:m=q8(e,n,t);f=o-s}else{if(E1(n)){const p=Object.keys(n)[0],L=n[p];h=u[p].getPixelForValue(L)-y+t}else n==="center"?h=(c.left+c.right)/2-y+t:h=q8(e,n,t);m=S8(r,a,i),d=n==="left"?-D1:D1}return{titleX:h,titleY:m,maxWidth:f,rotation:d}}class a0 extends Ct{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,n){return t}getUserBounds(){let{_userMin:t,_userMax:n,_suggestedMin:r,_suggestedMax:i}=this;return t=Se(t,Number.POSITIVE_INFINITY),n=Se(n,Number.NEGATIVE_INFINITY),r=Se(r,Number.POSITIVE_INFINITY),i=Se(i,Number.NEGATIVE_INFINITY),{min:Se(t,r),max:Se(n,i),minDefined:te(t),maxDefined:te(n)}}getMinMax(t){let{min:n,max:r,minDefined:i,maxDefined:s}=this.getUserBounds(),a;if(i&&s)return{min:n,max:r};const o=this.getMatchingVisibleMetas();for(let l=0,c=o.length;l<c;++l)a=o[l].controller.getMinMax(this,t),i||(n=Math.min(n,a.min)),s||(r=Math.max(r,a.max));return n=s&&n>r?r:n,r=i&&n>r?n:r,{min:Se(n,Se(r,n)),max:Se(r,Se(n,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){se(this.options.beforeUpdate,[this])}update(t,n,r){const{beginAtZero:i,grace:s,ticks:a}=this.options,o=a.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=n,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=ed(this,s,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=o<this.ticks.length;this._convertTicksToLabels(l?Y8(this.ticks,o):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),a.display&&(a.autoSkip||a.source==="auto")&&(this.ticks=Qd(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,n,r;this.isHorizontal()?(n=this.left,r=this.right):(n=this.top,r=this.bottom,t=!t),this._startPixel=n,this._endPixel=r,this._reversePixels=t,this._length=r-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){se(this.options.afterUpdate,[this])}beforeSetDimensions(){se(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){se(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),se(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){se(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const n=this.options.ticks;let r,i,s;for(r=0,i=t.length;r<i;r++)s=t[r],s.label=se(n.callback,[s.value,r,t],this)}afterTickToLabelConversion(){se(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){se(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,n=t.ticks,r=this.ticks.length,i=n.minRotation||0,s=n.maxRotation;let a=i,o,l,c;if(!this._isVisible()||!n.display||i>=s||r<=1||!this.isHorizontal()){this.labelRotation=i;return}const u=this._getLabelSizes(),d=u.widest.width,f=u.highest.height,h=le(this.chart.width-d,0,this.maxWidth);o=t.offset?this.maxWidth/r:h/(r-1),d+6>o&&(o=h/(r-(t.offset?.5:1)),l=this.maxHeight-G0(t.grid)-n.padding-K8(t.title,this.chart.options.font),c=Math.sqrt(d*d+f*f),a=g7(Math.min(Math.asin(le((u.highest.height+6)/o,-1,1)),Math.asin(le(l/c,-1,1))-Math.asin(le(f/c,-1,1)))),a=Math.max(i,Math.min(s,a))),this.labelRotation=a}afterCalculateLabelRotation(){se(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){se(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:n,options:{ticks:r,title:i,grid:s}}=this,a=this._isVisible(),o=this.isHorizontal();if(a){const l=K8(i,n.options.font);if(o?(t.width=this.maxWidth,t.height=G0(s)+l):(t.height=this.maxHeight,t.width=G0(s)+l),r.display&&this.ticks.length){const{first:c,last:u,widest:d,highest:f}=this._getLabelSizes(),h=r.padding*2,m=De(this.labelRotation),b=Math.cos(m),y=Math.sin(m);if(o){const p=r.mirror?0:y*d.width+b*f.height;t.height=Math.min(this.maxHeight,t.height+p+h)}else{const p=r.mirror?0:b*d.width+y*f.height;t.width=Math.min(this.maxWidth,t.width+p+h)}this._calculatePadding(c,u,y,b)}}this._handleMargins(),o?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,n,r,i){const{ticks:{align:s,padding:a},position:o}=this.options,l=this.labelRotation!==0,c=o!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,d=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,h=0;l?c?(f=i*t.width,h=r*n.height):(f=r*t.height,h=i*n.width):s==="start"?h=n.width:s==="end"?f=t.width:s!=="inner"&&(f=t.width/2,h=n.width/2),this.paddingLeft=Math.max((f-u+a)*this.width/(this.width-u),0),this.paddingRight=Math.max((h-d+a)*this.width/(this.width-d),0)}else{let u=n.height/2,d=t.height/2;s==="start"?(u=0,d=t.height):s==="end"&&(u=n.height,d=0),this.paddingTop=u+a,this.paddingBottom=d+a}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){se(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:n}=this.options;return n==="top"||n==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let n,r;for(n=0,r=t.length;n<r;n++)w1(t[n].label)&&(t.splice(n,1),r--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const n=this.options.ticks.sampleSize;let r=this.ticks;n<r.length&&(r=Y8(r,n)),this._labelSizes=t=this._computeLabelSizes(r,r.length)}return t}_computeLabelSizes(t,n){const{ctx:r,_longestTextCache:i}=this,s=[],a=[];let o=0,l=0,c,u,d,f,h,m,b,y,p,L,M;for(c=0;c<n;++c){if(f=t[c].label,h=this._resolveTickFontOptions(c),r.font=m=h.string,b=i[m]=i[m]||{data:{},gc:[]},y=h.lineHeight,p=L=0,!w1(f)&&!j1(f))p=k3(r,b.data,b.gc,p,f),L=y;else if(j1(f))for(u=0,d=f.length;u<d;++u)M=f[u],!w1(M)&&!j1(M)&&(p=k3(r,b.data,b.gc,p,M),L+=y);s.push(p),a.push(L),o=Math.max(p,o),l=Math.max(L,l)}oh(i,n);const v=s.indexOf(o),_=a.indexOf(l),E=S=>({width:s[S]||0,height:a[S]||0});return{first:E(0),last:E(n-1),widest:E(v),highest:E(_),widths:s,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,n){return NaN}getValueForPixel(t){}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const n=this._startPixel+t*this._length;return df(this._alignToPixels?Wt(this.chart,n,0):n)}getDecimalForPixel(t){const n=(t-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:n}=this;return t<0&&n<0?n:t>0&&n>0?t:0}getContext(t){const n=this.ticks||[];if(t>=0&&t<n.length){const r=n[t];return r.$context||(r.$context=ch(this.getContext(),t,r))}return this.$context||(this.$context=lh(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,n=De(this.labelRotation),r=Math.abs(Math.cos(n)),i=Math.abs(Math.sin(n)),s=this._getLabelSizes(),a=t.autoSkipPadding||0,o=s?s.widest.width+a:0,l=s?s.highest.height+a:0;return this.isHorizontal()?l*r>o*i?o/r:l/i:l*i<o*r?l/r:o/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const n=this.axis,r=this.chart,i=this.options,{grid:s,position:a}=i,o=s.offset,l=this.isHorizontal(),u=this.ticks.length+(o?1:0),d=G0(s),f=[],h=s.setContext(this.getContext()),m=h.drawBorder?h.borderWidth:0,b=m/2,y=function(Q){return Wt(r,Q,m)};let p,L,M,v,_,E,S,H,F,A,I,R;if(a==="top")p=y(this.bottom),E=this.bottom-d,H=p-b,A=y(t.top)+b,R=t.bottom;else if(a==="bottom")p=y(this.top),A=t.top,R=y(t.bottom)-b,E=p+b,H=this.top+d;else if(a==="left")p=y(this.right),_=this.right-d,S=p-b,F=y(t.left)+b,I=t.right;else if(a==="right")p=y(this.left),F=t.left,I=y(t.right)-b,_=p+b,S=this.left+d;else if(n==="x"){if(a==="center")p=y((t.top+t.bottom)/2+.5);else if(E1(a)){const Q=Object.keys(a)[0],X=a[Q];p=y(this.chart.scales[Q].getPixelForValue(X))}A=t.top,R=t.bottom,E=p+b,H=E+d}else if(n==="y"){if(a==="center")p=y((t.left+t.right)/2);else if(E1(a)){const Q=Object.keys(a)[0],X=a[Q];p=y(this.chart.scales[Q].getPixelForValue(X))}_=p-b,S=_-d,F=t.left,I=t.right}const j=L1(i.ticks.maxTicksLimit,u),r1=Math.max(1,Math.ceil(u/j));for(L=0;L<u;L+=r1){const Q=s.setContext(this.getContext(L)),X=Q.lineWidth,Z=Q.color,c1=Q.borderDash||[],P1=Q.borderDashOffset,z1=Q.tickWidth,U1=Q.tickColor,N1=Q.tickBorderDash||[],I1=Q.tickBorderDashOffset;M=ah(this,L,o),M!==void 0&&(v=Wt(r,M,X),l?_=S=F=I=v:E=H=A=R=v,f.push({tx1:_,ty1:E,tx2:S,ty2:H,x1:F,y1:A,x2:I,y2:R,width:X,color:Z,borderDash:c1,borderDashOffset:P1,tickWidth:z1,tickColor:U1,tickBorderDash:N1,tickBorderDashOffset:I1}))}return this._ticksLength=u,this._borderValue=p,f}_computeLabelItems(t){const n=this.axis,r=this.options,{position:i,ticks:s}=r,a=this.isHorizontal(),o=this.ticks,{align:l,crossAlign:c,padding:u,mirror:d}=s,f=G0(r.grid),h=f+u,m=d?-u:h,b=-De(this.labelRotation),y=[];let p,L,M,v,_,E,S,H,F,A,I,R,j="middle";if(i==="top")E=this.bottom-m,S=this._getXAxisLabelAlignment();else if(i==="bottom")E=this.top+m,S=this._getXAxisLabelAlignment();else if(i==="left"){const Q=this._getYAxisLabelAlignment(f);S=Q.textAlign,_=Q.x}else if(i==="right"){const Q=this._getYAxisLabelAlignment(f);S=Q.textAlign,_=Q.x}else if(n==="x"){if(i==="center")E=(t.top+t.bottom)/2+h;else if(E1(i)){const Q=Object.keys(i)[0],X=i[Q];E=this.chart.scales[Q].getPixelForValue(X)+h}S=this._getXAxisLabelAlignment()}else if(n==="y"){if(i==="center")_=(t.left+t.right)/2-h;else if(E1(i)){const Q=Object.keys(i)[0],X=i[Q];_=this.chart.scales[Q].getPixelForValue(X)}S=this._getYAxisLabelAlignment(f).textAlign}n==="y"&&(l==="start"?j="top":l==="end"&&(j="bottom"));const r1=this._getLabelSizes();for(p=0,L=o.length;p<L;++p){M=o[p],v=M.label;const Q=s.setContext(this.getContext(p));H=this.getPixelForTick(p)+s.labelOffset,F=this._resolveTickFontOptions(p),A=F.lineHeight,I=j1(v)?v.length:1;const X=I/2,Z=Q.color,c1=Q.textStrokeColor,P1=Q.textStrokeWidth;let z1=S;a?(_=H,S==="inner"&&(p===L-1?z1=this.options.reverse?"left":"right":p===0?z1=this.options.reverse?"right":"left":z1="center"),i==="top"?c==="near"||b!==0?R=-I*A+A/2:c==="center"?R=-r1.highest.height/2-X*A+A:R=-r1.highest.height+A/2:c==="near"||b!==0?R=A/2:c==="center"?R=r1.highest.height/2-X*A:R=r1.highest.height-I*A,d&&(R*=-1)):(E=H,R=(1-I)*A/2);let U1;if(Q.showLabelBackdrop){const N1=Qe(Q.backdropPadding),I1=r1.heights[p],ie=r1.widths[p];let P=E+R-N1.top,q=_-N1.left;switch(j){case"middle":P-=I1/2;break;case"bottom":P-=I1;break}switch(S){case"center":q-=ie/2;break;case"right":q-=ie;break}U1={left:q,top:P,width:ie+N1.width,height:I1+N1.height,color:Q.backdropColor}}y.push({rotation:b,label:v,font:F,color:Z,strokeColor:c1,strokeWidth:P1,textOffset:R,textAlign:z1,textBaseline:j,translation:[_,E],backdrop:U1})}return y}_getXAxisLabelAlignment(){const{position:t,ticks:n}=this.options;if(-De(this.labelRotation))return t==="top"?"left":"right";let i="center";return n.align==="start"?i="left":n.align==="end"?i="right":n.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:n,ticks:{crossAlign:r,mirror:i,padding:s}}=this.options,a=this._getLabelSizes(),o=t+s,l=a.widest.width;let c,u;return n==="left"?i?(u=this.right+s,r==="near"?c="left":r==="center"?(c="center",u+=l/2):(c="right",u+=l)):(u=this.right-o,r==="near"?c="right":r==="center"?(c="center",u-=l/2):(c="left",u=this.left)):n==="right"?i?(u=this.left+s,r==="near"?c="right":r==="center"?(c="center",u-=l/2):(c="left",u-=l)):(u=this.left+o,r==="near"?c="left":r==="center"?(c="center",u+=l/2):(c="right",u=this.right)):c="right",{textAlign:c,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:n},left:r,top:i,width:s,height:a}=this;n&&(t.save(),t.fillStyle=n,t.fillRect(r,i,s,a),t.restore())}getLineWidthForValue(t){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const i=this.ticks.findIndex(s=>s.value===t);return i>=0?n.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const n=this.options.grid,r=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let s,a;const o=(l,c,u)=>{!u.width||!u.color||(r.save(),r.lineWidth=u.width,r.strokeStyle=u.color,r.setLineDash(u.borderDash||[]),r.lineDashOffset=u.borderDashOffset,r.beginPath(),r.moveTo(l.x,l.y),r.lineTo(c.x,c.y),r.stroke(),r.restore())};if(n.display)for(s=0,a=i.length;s<a;++s){const l=i[s];n.drawOnChartArea&&o({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&o({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:n,options:{grid:r}}=this,i=r.setContext(this.getContext()),s=r.drawBorder?i.borderWidth:0;if(!s)return;const a=r.setContext(this.getContext(0)).lineWidth,o=this._borderValue;let l,c,u,d;this.isHorizontal()?(l=Wt(t,this.left,s)-s/2,c=Wt(t,this.right,a)+a/2,u=d=o):(u=Wt(t,this.top,s)-s/2,d=Wt(t,this.bottom,a)+a/2,l=c=o),n.save(),n.lineWidth=i.borderWidth,n.strokeStyle=i.borderColor,n.beginPath(),n.moveTo(l,u),n.lineTo(c,d),n.stroke(),n.restore()}drawLabels(t){if(!this.options.ticks.display)return;const r=this.ctx,i=this._computeLabelArea();i&&Uf(r,i);const s=this._labelItems||(this._labelItems=this._computeLabelItems(t));let a,o;for(a=0,o=s.length;a<o;++a){const l=s[a],c=l.font,u=l.label;l.backdrop&&(r.fillStyle=l.backdrop.color,r.fillRect(l.backdrop.left,l.backdrop.top,l.backdrop.width,l.backdrop.height));let d=l.textOffset;v3(r,u,0,d,c,l)}i&&Zf(r)}drawTitle(){const{ctx:t,options:{position:n,title:r,reverse:i}}=this;if(!r.display)return;const s=ke(r.font),a=Qe(r.padding),o=r.align;let l=s.lineHeight/2;n==="bottom"||n==="center"||E1(n)?(l+=a.bottom,j1(r.text)&&(l+=s.lineHeight*(r.text.length-1))):l+=a.top;const{titleX:c,titleY:u,maxWidth:d,rotation:f}=fh(this,l,n,o);v3(t,r.text,0,0,s,{color:r.color,maxWidth:d,rotation:f,textAlign:uh(o,n,i),textBaseline:"middle",translation:[c,u]})}draw(t){!this._isVisible()||(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,n=t.ticks&&t.ticks.z||0,r=L1(t.grid&&t.grid.z,-1);return!this._isVisible()||this.draw!==a0.prototype.draw?[{z:n,draw:i=>{this.draw(i)}}]:[{z:r,draw:i=>{this.drawBackground(),this.drawGrid(i),this.drawTitle()}},{z:r+1,draw:()=>{this.drawBorder()}},{z:n,draw:i=>{this.drawLabels(i)}}]}getMatchingVisibleMetas(t){const n=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",i=[];let s,a;for(s=0,a=n.length;s<a;++s){const o=n[s];o[r]===this.id&&(!t||o.type===t)&&i.push(o)}return i}_resolveTickFontOptions(t){const n=this.options.ticks.setContext(this.getContext(t));return ke(n.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class $2{constructor(t,n,r){this.type=t,this.scope=n,this.override=r,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const n=Object.getPrototypeOf(t);let r;Ch(n)&&(r=this.register(n));const i=this.items,s=t.id,a=this.scope+"."+s;if(!s)throw new Error("class does not have id: "+t);return s in i||(i[s]=t,dh(t,a,r),this.override&&O1.override(t.id,t.overrides)),a}get(t){return this.items[t]}unregister(t){const n=this.items,r=t.id,i=this.scope;r in n&&delete n[r],i&&r in O1[i]&&(delete O1[i][r],this.override&&delete ri[r])}}function dh(e,t,n){const r=_2(Object.create(null),[n?O1.get(n):{},O1.get(t),e.defaults]);O1.set(t,r),e.defaultRoutes&&hh(t,e.defaultRoutes),e.descriptors&&O1.describe(t,e.descriptors)}function hh(e,t){Object.keys(t).forEach(n=>{const r=n.split("."),i=r.pop(),s=[e].concat(r).join("."),a=t[n].split("."),o=a.pop(),l=a.join(".");O1.route(s,i,l,o)})}function Ch(e){return"id"in e&&"defaults"in e}class gh{constructor(){this.controllers=new $2($e,"datasets",!0),this.elements=new $2(Ct,"elements"),this.plugins=new $2(Object,"plugins"),this.scales=new $2(a0,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,n,r){[...n].forEach(i=>{const s=r||this._getRegistryForType(i);r||s.isForType(i)||s===this.plugins&&i.id?this._exec(t,s,i):de(i,a=>{const o=r||this._getRegistryForType(a);this._exec(t,o,a)})})}_exec(t,n,r){const i=Ur(t);se(r["before"+i],[],r),n[t](r),se(r["after"+i],[],r)}_getRegistryForType(t){for(let n=0;n<this._typedRegistries.length;n++){const r=this._typedRegistries[n];if(r.isForType(t))return r}return this.plugins}_get(t,n,r){const i=n.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+r+".");return i}}var mh=new gh;class x7 extends $e{update(t){const n=this._cachedMeta,{data:r=[]}=n,i=this.chart._animationsDisabled;let{start:s,count:a}=Kr(n,r,i);if(this._drawStart=s,this._drawCount=a,Xr(n)&&(s=0,a=r.length),this.options.showLine){const{dataset:o,_dataset:l}=n;o._chart=this.chart,o._datasetIndex=this.index,o._decimated=!!l._decimated,o.points=r;const c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(o,void 0,{animated:!i,options:c},t)}this.updateElements(r,s,a,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=mh.getElement("line")),super.addElements()}updateElements(t,n,r,i){const s=i==="reset",{iScale:a,vScale:o,_stacked:l,_dataset:c}=this._cachedMeta,u=this.resolveDataElementOptions(n,i),d=this.getSharedOptions(u),f=this.includeOptions(i,d),h=a.axis,m=o.axis,{spanGaps:b,segment:y}=this.options,p=A0(b)?b:Number.POSITIVE_INFINITY,L=this.chart._animationsDisabled||s||i==="none";let M=n>0&&this.getParsed(n-1);for(let v=n;v<n+r;++v){const _=t[v],E=this.getParsed(v),S=L?_:{},H=w1(E[m]),F=S[h]=a.getPixelForValue(E[h],v),A=S[m]=s||H?o.getBasePixel():o.getPixelForValue(l?this.applyStack(o,E,l):E[m],v);S.skip=isNaN(F)||isNaN(A)||H,S.stop=v>0&&Math.abs(E[h]-M[h])>p,y&&(S.parsed=E,S.raw=c.data[v]),f&&(S.options=d||this.resolveDataElementOptions(v,_.active?"active":i)),L||this.updateElement(_,v,S,i),M=E}this.updateSharedOptions(d,i,u)}getMaxOverflow(){const t=this._cachedMeta,n=t.data||[];if(!this.options.showLine){let o=0;for(let l=n.length-1;l>=0;--l)o=Math.max(o,n[l].size(this.resolveDataElementOptions(l))/2);return o>0&&o}const r=t.dataset,i=r.options&&r.options.borderWidth||0;if(!n.length)return i;const s=n[0].size(this.resolveDataElementOptions(0)),a=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(i,s,a)/2}}x7.id="scatter";x7.defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1};x7.overrides={interaction:{mode:"point"},plugins:{tooltip:{callbacks:{title(){return""},label(e){return"("+e.label+", "+e.formattedValue+")"}}}},scales:{x:{type:"linear"},y:{type:"linear"}}};function $t(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class _5{constructor(t){this.options=t||{}}init(t){}formats(){return $t()}parse(t,n){return $t()}format(t,n){return $t()}add(t,n,r){return $t()}diff(t,n,r){return $t()}startOf(t,n,r){return $t()}endOf(t,n){return $t()}}_5.override=function(e){Object.assign(_5.prototype,e)};var ph={_date:_5};O1.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}});function hi(e,t,n){const{startAngle:r,pixelMargin:i,x:s,y:a,outerRadius:o,innerRadius:l}=t;let c=i/o;e.beginPath(),e.arc(s,a,o,r-c,n+c),l>i?(c=i/l,e.arc(s,a,l,n+c,r-c,!0)):e.arc(s,a,i,n+D1,r-D1),e.closePath(),e.clip()}function bh(e){return y7(e,["outerStart","outerEnd","innerStart","innerEnd"])}function yh(e,t,n,r){const i=bh(e.options.borderRadius),s=(n-t)/2,a=Math.min(s,r*t/2),o=l=>{const c=(n-Math.min(s,l))*r/2;return le(l,0,Math.min(s,c))};return{outerStart:o(i.outerStart),outerEnd:o(i.outerEnd),innerStart:le(i.innerStart,0,a),innerEnd:le(i.innerEnd,0,a)}}function C0(e,t,n,r){return{x:n+e*Math.cos(t),y:r+e*Math.sin(t)}}function L5(e,t,n,r,i,s){const{x:a,y:o,startAngle:l,pixelMargin:c,innerRadius:u}=t,d=Math.max(t.outerRadius+r+n-c,0),f=u>0?u+r+n+c:0;let h=0;const m=i-l;if(r){const Q=u>0?u-r:0,X=d>0?d-r:0,Z=(Q+X)/2,c1=Z!==0?m*Z/(Z+r):m;h=(m-c1)/2}const b=Math.max(.001,m*d-n/V1)/d,y=(m-b)/2,p=l+y+h,L=i-y-h,{outerStart:M,outerEnd:v,innerStart:_,innerEnd:E}=yh(t,f,d,L-p),S=d-M,H=d-v,F=p+M/S,A=L-v/H,I=f+_,R=f+E,j=p+_/I,r1=L-E/R;if(e.beginPath(),s){if(e.arc(a,o,d,F,A),v>0){const Z=C0(H,A,a,o);e.arc(Z.x,Z.y,v,A,L+D1)}const Q=C0(R,L,a,o);if(e.lineTo(Q.x,Q.y),E>0){const Z=C0(R,r1,a,o);e.arc(Z.x,Z.y,E,L+D1,r1+Math.PI)}if(e.arc(a,o,f,L-E/f,p+_/f,!0),_>0){const Z=C0(I,j,a,o);e.arc(Z.x,Z.y,_,j+Math.PI,p-D1)}const X=C0(S,p,a,o);if(e.lineTo(X.x,X.y),M>0){const Z=C0(S,F,a,o);e.arc(Z.x,Z.y,M,p-D1,F)}}else{e.moveTo(a,o);const Q=Math.cos(F)*d+a,X=Math.sin(F)*d+o;e.lineTo(Q,X);const Z=Math.cos(A)*d+a,c1=Math.sin(A)*d+o;e.lineTo(Z,c1)}e.closePath()}function _h(e,t,n,r,i){const{fullCircles:s,startAngle:a,circumference:o}=t;let l=t.endAngle;if(s){L5(e,t,n,r,a+x1,i);for(let c=0;c<s;++c)e.fill();isNaN(o)||(l=a+o%x1,o%x1===0&&(l+=x1))}return L5(e,t,n,r,l,i),e.fill(),l}function Lh(e,t,n){const{x:r,y:i,startAngle:s,pixelMargin:a,fullCircles:o}=t,l=Math.max(t.outerRadius-a,0),c=t.innerRadius+a;let u;for(n&&hi(e,t,s+x1),e.beginPath(),e.arc(r,i,c,s+x1,s,!0),u=0;u<o;++u)e.stroke();for(e.beginPath(),e.arc(r,i,l,s,s+x1),u=0;u<o;++u)e.stroke()}function kh(e,t,n,r,i,s){const{options:a}=t,{borderWidth:o,borderJoinStyle:l}=a,c=a.borderAlign==="inner";!o||(c?(e.lineWidth=o*2,e.lineJoin=l||"round"):(e.lineWidth=o,e.lineJoin=l||"bevel"),t.fullCircles&&Lh(e,t,c),c&&hi(e,t,i),L5(e,t,n,r,i,s),e.stroke())}class S7 extends Ct{constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,n,r){const i=this.getProps(["x","y"],r),{angle:s,distance:a}=uf(i,{x:t,y:n}),{startAngle:o,endAngle:l,innerRadius:c,outerRadius:u,circumference:d}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],r),f=this.options.spacing/2,m=L1(d,l-o)>=x1||y3(s,o,l),b=_3(a,c+f,u+f);return m&&b}getCenterPoint(t){const{x:n,y:r,startAngle:i,endAngle:s,innerRadius:a,outerRadius:o}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius","circumference"],t),{offset:l,spacing:c}=this.options,u=(i+s)/2,d=(a+o+c+l)/2;return{x:n+Math.cos(u)*d,y:r+Math.sin(u)*d}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const{options:n,circumference:r}=this,i=(n.offset||0)/2,s=(n.spacing||0)/2,a=n.circular;if(this.pixelMargin=n.borderAlign==="inner"?.33:0,this.fullCircles=r>x1?Math.floor(r/x1):0,r===0||this.innerRadius<0||this.outerRadius<0)return;t.save();let o=0;if(i){o=i/2;const c=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(c)*o,Math.sin(c)*o),this.circumference>=V1&&(o=i)}t.fillStyle=n.backgroundColor,t.strokeStyle=n.borderColor;const l=_h(t,this,o,s,a);kh(t,this,o,s,l,a),t.restore()}}S7.id="arc";S7.defaults={borderAlign:"center",borderColor:"#fff",borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0};S7.defaultRoutes={backgroundColor:"backgroundColor"};function Ci(e,t,n=t){e.lineCap=L1(n.borderCapStyle,t.borderCapStyle),e.setLineDash(L1(n.borderDash,t.borderDash)),e.lineDashOffset=L1(n.borderDashOffset,t.borderDashOffset),e.lineJoin=L1(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=L1(n.borderWidth,t.borderWidth),e.strokeStyle=L1(n.borderColor,t.borderColor)}function vh(e,t,n){e.lineTo(n.x,n.y)}function Mh(e){return e.stepped?zf:e.tension||e.cubicInterpolationMode==="monotone"?Gf:vh}function gi(e,t,n={}){const r=e.length,{start:i=0,end:s=r-1}=n,{start:a,end:o}=t,l=Math.max(i,a),c=Math.min(s,o),u=i<a&&s<a||i>o&&s>o;return{count:r,start:l,loop:t.loop,ilen:c<l&&!u?r+c-l:c-l}}function xh(e,t,n,r){const{points:i,options:s}=t,{count:a,start:o,loop:l,ilen:c}=gi(i,n,r),u=Mh(s);let{move:d=!0,reverse:f}=r||{},h,m,b;for(h=0;h<=c;++h)m=i[(o+(f?c-h:h))%a],!m.skip&&(d?(e.moveTo(m.x,m.y),d=!1):u(e,b,m,f,s.stepped),b=m);return l&&(m=i[(o+(f?c:0))%a],u(e,b,m,f,s.stepped)),!!l}function Sh(e,t,n,r){const i=t.points,{count:s,start:a,ilen:o}=gi(i,n,r),{move:l=!0,reverse:c}=r||{};let u=0,d=0,f,h,m,b,y,p;const L=v=>(a+(c?o-v:v))%s,M=()=>{b!==y&&(e.lineTo(u,y),e.lineTo(u,b),e.lineTo(u,p))};for(l&&(h=i[L(0)],e.moveTo(h.x,h.y)),f=0;f<=o;++f){if(h=i[L(f)],h.skip)continue;const v=h.x,_=h.y,E=v|0;E===m?(_<b?b=_:_>y&&(y=_),u=(d*u+v)/++d):(M(),e.lineTo(v,_),m=E,d=0,b=y=_),p=_}M()}function k5(e){const t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!n?Sh:xh}function wh(e){return e.stepped?ld:e.tension||e.cubicInterpolationMode==="monotone"?cd:Zt}function Eh(e,t,n,r){let i=t._path;i||(i=t._path=new Path2D,t.path(i,n,r)&&i.closePath()),Ci(e,t.options),e.stroke(i)}function Fh(e,t,n,r){const{segments:i,options:s}=t,a=k5(t);for(const o of i)Ci(e,s,o.style),e.beginPath(),a(e,t,o,{start:n,end:n+r-1})&&e.closePath(),e.stroke()}const Th=typeof Path2D=="function";function Oh(e,t,n,r){Th&&!t.options.segment?Eh(e,t,n,r):Fh(e,t,n,r)}class Y3 extends Ct{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,n){const r=this.options;if((r.tension||r.cubicInterpolationMode==="monotone")&&!r.stepped&&!this._pointsUpdated){const i=r.spanGaps?this._loop:this._fullLoop;od(this._points,r,t,i,n),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=_d(this,this.options.segment))}first(){const t=this.segments,n=this.points;return t.length&&n[t[0].start]}last(){const t=this.segments,n=this.points,r=t.length;return r&&n[t[r-1].end]}interpolate(t,n){const r=this.options,i=t[n],s=this.points,a=pd(this,{property:n,start:i,end:i});if(!a.length)return;const o=[],l=wh(r);let c,u;for(c=0,u=a.length;c<u;++c){const{start:d,end:f}=a[c],h=s[d],m=s[f];if(h===m){o.push(h);continue}const b=Math.abs((i-h[n])/(m[n]-h[n])),y=l(h,m,b,r.stepped);y[n]=t[n],o.push(y)}return o.length===1?o[0]:o}pathSegment(t,n,r){return k5(this)(t,this,n,r)}path(t,n,r){const i=this.segments,s=k5(this);let a=this._loop;n=n||0,r=r||this.points.length-n;for(const o of i)a&=s(t,this,o,{start:n,end:n+r-1});return!!a}draw(t,n,r,i){const s=this.options||{};(this.points||[]).length&&s.borderWidth&&(t.save(),Oh(t,this,r,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}Y3.id="line";Y3.defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};Y3.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};Y3.descriptors={_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"};function X8(e,t,n,r){const i=e.options,{[n]:s}=e.getProps([n],r);return Math.abs(t-s)<i.radius+i.hitRadius}class w7 extends Ct{constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,n,r){const i=this.options,{x:s,y:a}=this.getProps(["x","y"],r);return Math.pow(t-s,2)+Math.pow(n-a,2)<Math.pow(i.hitRadius+i.radius,2)}inXRange(t,n){return X8(this,t,"x",n)}inYRange(t,n){return X8(this,t,"y",n)}getCenterPoint(t){const{x:n,y:r}=this.getProps(["x","y"],t);return{x:n,y:r}}size(t){t=t||this.options||{};let n=t.radius||0;n=Math.max(n,n&&t.hoverRadius||0);const r=n&&t.borderWidth||0;return(n+r)*2}draw(t,n){const r=this.options;this.skip||r.radius<.1||!y5(this,n,this.size(r)/2)||(t.strokeStyle=r.borderColor,t.lineWidth=r.borderWidth,t.fillStyle=r.backgroundColor,b5(t,r,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}w7.id="point";w7.defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};w7.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};function mi(e,t){const{x:n,y:r,base:i,width:s,height:a}=e.getProps(["x","y","base","width","height"],t);let o,l,c,u,d;return e.horizontal?(d=a/2,o=Math.min(n,i),l=Math.max(n,i),c=r-d,u=r+d):(d=s/2,o=n-d,l=n+d,c=Math.min(r,i),u=Math.max(r,i)),{left:o,top:c,right:l,bottom:u}}function St(e,t,n,r){return e?0:le(t,n,r)}function Ah(e,t,n){const r=e.options.borderWidth,i=e.borderSkipped,s=ii(r);return{t:St(i.top,s.top,0,n),r:St(i.right,s.right,0,t),b:St(i.bottom,s.bottom,0,n),l:St(i.left,s.left,0,t)}}function Rh(e,t,n){const{enableBorderRadius:r}=e.getProps(["enableBorderRadius"]),i=e.options.borderRadius,s=M0(i),a=Math.min(t,n),o=e.borderSkipped,l=r||E1(i);return{topLeft:St(!l||o.top||o.left,s.topLeft,0,a),topRight:St(!l||o.top||o.right,s.topRight,0,a),bottomLeft:St(!l||o.bottom||o.left,s.bottomLeft,0,a),bottomRight:St(!l||o.bottom||o.right,s.bottomRight,0,a)}}function Hh(e){const t=mi(e),n=t.right-t.left,r=t.bottom-t.top,i=Ah(e,n/2,r/2),s=Rh(e,n/2,r/2);return{outer:{x:t.left,y:t.top,w:n,h:r,radius:s},inner:{x:t.left+i.l,y:t.top+i.t,w:n-i.l-i.r,h:r-i.t-i.b,radius:{topLeft:Math.max(0,s.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,s.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,s.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,s.bottomRight-Math.max(i.b,i.r))}}}}function D6(e,t,n,r){const i=t===null,s=n===null,o=e&&!(i&&s)&&mi(e,r);return o&&(i||_3(t,o.left,o.right))&&(s||_3(n,o.top,o.bottom))}function Ph(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function Nh(e,t){e.rect(t.x,t.y,t.w,t.h)}function B6(e,t,n={}){const r=e.x!==n.x?-t:0,i=e.y!==n.y?-t:0,s=(e.x+e.w!==n.x+n.w?t:0)-r,a=(e.y+e.h!==n.y+n.h?t:0)-i;return{x:e.x+r,y:e.y+i,w:e.w+s,h:e.h+a,radius:e.radius}}class E7 extends Ct{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:n,options:{borderColor:r,backgroundColor:i}}=this,{inner:s,outer:a}=Hh(this),o=Ph(a.radius)?M3:Nh;t.save(),(a.w!==s.w||a.h!==s.h)&&(t.beginPath(),o(t,B6(a,n,s)),t.clip(),o(t,B6(s,-n,a)),t.fillStyle=r,t.fill("evenodd")),t.beginPath(),o(t,B6(s,n)),t.fillStyle=i,t.fill(),t.restore()}inRange(t,n,r){return D6(this,t,n,r)}inXRange(t,n){return D6(this,t,null,n)}inYRange(t,n){return D6(this,null,t,n)}getCenterPoint(t){const{x:n,y:r,base:i,horizontal:s}=this.getProps(["x","y","base","horizontal"],t);return{x:s?(n+i)/2:n,y:s?r:(r+i)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}E7.id="bar";E7.defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};E7.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};const i3={average(e){if(!e.length)return!1;let t,n,r=0,i=0,s=0;for(t=0,n=e.length;t<n;++t){const a=e[t].element;if(a&&a.hasValue()){const o=a.tooltipPosition();r+=o.x,i+=o.y,++s}}return{x:r/s,y:i/s}},nearest(e,t){if(!e.length)return!1;let n=t.x,r=t.y,i=Number.POSITIVE_INFINITY,s,a,o;for(s=0,a=e.length;s<a;++s){const l=e[s].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),u=m5(t,c);u<i&&(i=u,o=l)}}if(o){const l=o.tooltipPosition();n=l.x,r=l.y}return{x:n,y:r}}};function Ge(e,t){return t&&(j1(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function it(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function Ih(e,t){const{element:n,datasetIndex:r,index:i}=t,s=e.getDatasetMeta(r).controller,{label:a,value:o}=s.getLabelAndValue(i);return{chart:e,label:a,parsed:s.getParsed(i),raw:e.data.datasets[r].data[i],formattedValue:o,dataset:s.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function J8(e,t){const n=e.chart.ctx,{body:r,footer:i,title:s}=e,{boxWidth:a,boxHeight:o}=t,l=ke(t.bodyFont),c=ke(t.titleFont),u=ke(t.footerFont),d=s.length,f=i.length,h=r.length,m=Qe(t.padding);let b=m.height,y=0,p=r.reduce((v,_)=>v+_.before.length+_.lines.length+_.after.length,0);if(p+=e.beforeBody.length+e.afterBody.length,d&&(b+=d*c.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),p){const v=t.displayColors?Math.max(o,l.lineHeight):l.lineHeight;b+=h*v+(p-h)*l.lineHeight+(p-1)*t.bodySpacing}f&&(b+=t.footerMarginTop+f*u.lineHeight+(f-1)*t.footerSpacing);let L=0;const M=function(v){y=Math.max(y,n.measureText(v).width+L)};return n.save(),n.font=c.string,de(e.title,M),n.font=l.string,de(e.beforeBody.concat(e.afterBody),M),L=t.displayColors?a+2+t.boxPadding:0,de(r,v=>{de(v.before,M),de(v.lines,M),de(v.after,M)}),L=0,n.font=u.string,de(e.footer,M),n.restore(),y+=m.width,{width:y,height:b}}function Dh(e,t){const{y:n,height:r}=t;return n<r/2?"top":n>e.height-r/2?"bottom":"center"}function Bh(e,t,n,r){const{x:i,width:s}=r,a=n.caretSize+n.caretPadding;if(e==="left"&&i+s+a>t.width||e==="right"&&i-s-a<0)return!0}function Vh(e,t,n,r){const{x:i,width:s}=n,{width:a,chartArea:{left:o,right:l}}=e;let c="center";return r==="center"?c=i<=(o+l)/2?"left":"right":i<=s/2?c="left":i>=a-s/2&&(c="right"),Bh(c,e,t,n)&&(c="center"),c}function Q8(e,t,n){const r=n.yAlign||t.yAlign||Dh(e,n);return{xAlign:n.xAlign||t.xAlign||Vh(e,t,n,r),yAlign:r}}function Wh(e,t){let{x:n,width:r}=e;return t==="right"?n-=r:t==="center"&&(n-=r/2),n}function $h(e,t,n){let{y:r,height:i}=e;return t==="top"?r+=n:t==="bottom"?r-=i+n:r-=i/2,r}function e9(e,t,n,r){const{caretSize:i,caretPadding:s,cornerRadius:a}=e,{xAlign:o,yAlign:l}=n,c=i+s,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:h}=M0(a);let m=Wh(t,o);const b=$h(t,l,c);return l==="center"?o==="left"?m+=c:o==="right"&&(m-=c):o==="left"?m-=Math.max(u,f)+i:o==="right"&&(m+=Math.max(d,h)+i),{x:le(m,0,r.width-t.width),y:le(b,0,r.height-t.height)}}function j2(e,t,n){const r=Qe(n.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-r.right:e.x+r.left}function t9(e){return Ge([],it(e))}function jh(e,t,n){return s0(e,{tooltip:t,tooltipItems:n,type:"tooltip"})}function n9(e,t){const n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}class Uh extends Ct{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart||t._chart,this._chart=this.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const n=this.chart,r=this.options.setContext(this.getContext()),i=r.enabled&&n.options.animation&&r.animations,s=new li(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(s)),s}getContext(){return this.$context||(this.$context=jh(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,n){const{callbacks:r}=n,i=r.beforeTitle.apply(this,[t]),s=r.title.apply(this,[t]),a=r.afterTitle.apply(this,[t]);let o=[];return o=Ge(o,it(i)),o=Ge(o,it(s)),o=Ge(o,it(a)),o}getBeforeBody(t,n){return t9(n.callbacks.beforeBody.apply(this,[t]))}getBody(t,n){const{callbacks:r}=n,i=[];return de(t,s=>{const a={before:[],lines:[],after:[]},o=n9(r,s);Ge(a.before,it(o.beforeLabel.call(this,s))),Ge(a.lines,o.label.call(this,s)),Ge(a.after,it(o.afterLabel.call(this,s))),i.push(a)}),i}getAfterBody(t,n){return t9(n.callbacks.afterBody.apply(this,[t]))}getFooter(t,n){const{callbacks:r}=n,i=r.beforeFooter.apply(this,[t]),s=r.footer.apply(this,[t]),a=r.afterFooter.apply(this,[t]);let o=[];return o=Ge(o,it(i)),o=Ge(o,it(s)),o=Ge(o,it(a)),o}_createItems(t){const n=this._active,r=this.chart.data,i=[],s=[],a=[];let o=[],l,c;for(l=0,c=n.length;l<c;++l)o.push(Ih(this.chart,n[l]));return t.filter&&(o=o.filter((u,d,f)=>t.filter(u,d,f,r))),t.itemSort&&(o=o.sort((u,d)=>t.itemSort(u,d,r))),de(o,u=>{const d=n9(t.callbacks,u);i.push(d.labelColor.call(this,u)),s.push(d.labelPointStyle.call(this,u)),a.push(d.labelTextColor.call(this,u))}),this.labelColors=i,this.labelPointStyles=s,this.labelTextColors=a,this.dataPoints=o,o}update(t,n){const r=this.options.setContext(this.getContext()),i=this._active;let s,a=[];if(!i.length)this.opacity!==0&&(s={opacity:0});else{const o=i3[r.position].call(this,i,this._eventPosition);a=this._createItems(r),this.title=this.getTitle(a,r),this.beforeBody=this.getBeforeBody(a,r),this.body=this.getBody(a,r),this.afterBody=this.getAfterBody(a,r),this.footer=this.getFooter(a,r);const l=this._size=J8(this,r),c=Object.assign({},o,l),u=Q8(this.chart,r,c),d=e9(r,c,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,s={opacity:1,x:d.x,y:d.y,width:l.width,height:l.height,caretX:o.x,caretY:o.y}}this._tooltipItems=a,this.$context=void 0,s&&this._resolveAnimations().update(this,s),t&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(t,n,r,i){const s=this.getCaretPosition(t,r,i);n.lineTo(s.x1,s.y1),n.lineTo(s.x2,s.y2),n.lineTo(s.x3,s.y3)}getCaretPosition(t,n,r){const{xAlign:i,yAlign:s}=this,{caretSize:a,cornerRadius:o}=r,{topLeft:l,topRight:c,bottomLeft:u,bottomRight:d}=M0(o),{x:f,y:h}=t,{width:m,height:b}=n;let y,p,L,M,v,_;return s==="center"?(v=h+b/2,i==="left"?(y=f,p=y-a,M=v+a,_=v-a):(y=f+m,p=y+a,M=v-a,_=v+a),L=y):(i==="left"?p=f+Math.max(l,u)+a:i==="right"?p=f+m-Math.max(c,d)-a:p=this.caretX,s==="top"?(M=h,v=M-a,y=p-a,L=p+a):(M=h+b,v=M+a,y=p+a,L=p-a),_=M),{x1:y,x2:p,x3:L,y1:M,y2:v,y3:_}}drawTitle(t,n,r){const i=this.title,s=i.length;let a,o,l;if(s){const c=H6(r.rtl,this.x,this.width);for(t.x=j2(this,r.titleAlign,r),n.textAlign=c.textAlign(r.titleAlign),n.textBaseline="middle",a=ke(r.titleFont),o=r.titleSpacing,n.fillStyle=r.titleColor,n.font=a.string,l=0;l<s;++l)n.fillText(i[l],c.x(t.x),t.y+a.lineHeight/2),t.y+=a.lineHeight+o,l+1===s&&(t.y+=r.titleMarginBottom-o)}}_drawColorBox(t,n,r,i,s){const a=this.labelColors[r],o=this.labelPointStyles[r],{boxHeight:l,boxWidth:c,boxPadding:u}=s,d=ke(s.bodyFont),f=j2(this,"left",s),h=i.x(f),m=l<d.lineHeight?(d.lineHeight-l)/2:0,b=n.y+m;if(s.usePointStyle){const y={radius:Math.min(c,l)/2,pointStyle:o.pointStyle,rotation:o.rotation,borderWidth:1},p=i.leftForLtr(h,c)+c/2,L=b+l/2;t.strokeStyle=s.multiKeyBackground,t.fillStyle=s.multiKeyBackground,b5(t,y,p,L),t.strokeStyle=a.borderColor,t.fillStyle=a.backgroundColor,b5(t,y,p,L)}else{t.lineWidth=E1(a.borderWidth)?Math.max(...Object.values(a.borderWidth)):a.borderWidth||1,t.strokeStyle=a.borderColor,t.setLineDash(a.borderDash||[]),t.lineDashOffset=a.borderDashOffset||0;const y=i.leftForLtr(h,c-u),p=i.leftForLtr(i.xPlus(h,1),c-u-2),L=M0(a.borderRadius);Object.values(L).some(M=>M!==0)?(t.beginPath(),t.fillStyle=s.multiKeyBackground,M3(t,{x:y,y:b,w:c,h:l,radius:L}),t.fill(),t.stroke(),t.fillStyle=a.backgroundColor,t.beginPath(),M3(t,{x:p,y:b+1,w:c-2,h:l-2,radius:L}),t.fill()):(t.fillStyle=s.multiKeyBackground,t.fillRect(y,b,c,l),t.strokeRect(y,b,c,l),t.fillStyle=a.backgroundColor,t.fillRect(p,b+1,c-2,l-2))}t.fillStyle=this.labelTextColors[r]}drawBody(t,n,r){const{body:i}=this,{bodySpacing:s,bodyAlign:a,displayColors:o,boxHeight:l,boxWidth:c,boxPadding:u}=r,d=ke(r.bodyFont);let f=d.lineHeight,h=0;const m=H6(r.rtl,this.x,this.width),b=function(H){n.fillText(H,m.x(t.x+h),t.y+f/2),t.y+=f+s},y=m.textAlign(a);let p,L,M,v,_,E,S;for(n.textAlign=a,n.textBaseline="middle",n.font=d.string,t.x=j2(this,y,r),n.fillStyle=r.bodyColor,de(this.beforeBody,b),h=o&&y!=="right"?a==="center"?c/2+u:c+2+u:0,v=0,E=i.length;v<E;++v){for(p=i[v],L=this.labelTextColors[v],n.fillStyle=L,de(p.before,b),M=p.lines,o&&M.length&&(this._drawColorBox(n,t,v,m,r),f=Math.max(d.lineHeight,l)),_=0,S=M.length;_<S;++_)b(M[_]),f=d.lineHeight;de(p.after,b)}h=0,f=d.lineHeight,de(this.afterBody,b),t.y-=s}drawFooter(t,n,r){const i=this.footer,s=i.length;let a,o;if(s){const l=H6(r.rtl,this.x,this.width);for(t.x=j2(this,r.footerAlign,r),t.y+=r.footerMarginTop,n.textAlign=l.textAlign(r.footerAlign),n.textBaseline="middle",a=ke(r.footerFont),n.fillStyle=r.footerColor,n.font=a.string,o=0;o<s;++o)n.fillText(i[o],l.x(t.x),t.y+a.lineHeight/2),t.y+=a.lineHeight+r.footerSpacing}}drawBackground(t,n,r,i){const{xAlign:s,yAlign:a}=this,{x:o,y:l}=t,{width:c,height:u}=r,{topLeft:d,topRight:f,bottomLeft:h,bottomRight:m}=M0(i.cornerRadius);n.fillStyle=i.backgroundColor,n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.beginPath(),n.moveTo(o+d,l),a==="top"&&this.drawCaret(t,n,r,i),n.lineTo(o+c-f,l),n.quadraticCurveTo(o+c,l,o+c,l+f),a==="center"&&s==="right"&&this.drawCaret(t,n,r,i),n.lineTo(o+c,l+u-m),n.quadraticCurveTo(o+c,l+u,o+c-m,l+u),a==="bottom"&&this.drawCaret(t,n,r,i),n.lineTo(o+h,l+u),n.quadraticCurveTo(o,l+u,o,l+u-h),a==="center"&&s==="left"&&this.drawCaret(t,n,r,i),n.lineTo(o,l+d),n.quadraticCurveTo(o,l,o+d,l),n.closePath(),n.fill(),i.borderWidth>0&&n.stroke()}_updateAnimationTarget(t){const n=this.chart,r=this.$animations,i=r&&r.x,s=r&&r.y;if(i||s){const a=i3[t.position].call(this,this._active,this._eventPosition);if(!a)return;const o=this._size=J8(this,t),l=Object.assign({},a,this._size),c=Q8(n,t,l),u=e9(t,l,c,n);(i._to!==u.x||s._to!==u.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=o.width,this.height=o.height,this.caretX=a.x,this.caretY=a.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(t){const n=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(n);const i={width:this.width,height:this.height},s={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const a=Qe(n.padding),o=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&o&&(t.save(),t.globalAlpha=r,this.drawBackground(s,t,i,n),hd(t,n.textDirection),s.y+=a.top,this.drawTitle(s,t,n),this.drawBody(s,t,n),this.drawFooter(s,t,n),Cd(t,n.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,n){const r=this._active,i=t.map(({datasetIndex:o,index:l})=>{const c=this.chart.getDatasetMeta(o);if(!c)throw new Error("Cannot find a dataset at index "+o);return{datasetIndex:o,element:c.data[l],index:l}}),s=!_8(r,i),a=this._positionChanged(i,n);(s||a)&&(this._active=i,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,n,r=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,s=this._active||[],a=this._getActiveElements(t,s,n,r),o=this._positionChanged(a,t),l=n||!_8(a,s)||o;return l&&(this._active=a,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,n))),l}_getActiveElements(t,n,r,i){const s=this.options;if(t.type==="mouseout")return[];if(!i)return n;const a=this.chart.getElementsAtEventForMode(t,s.mode,s,r);return s.reverse&&a.reverse(),a}_positionChanged(t,n){const{caretX:r,caretY:i,options:s}=this,a=i3[s.position].call(this,t,n);return a!==!1&&(r!==a.x||i!==a.y)}}Uh.positioners=i3;const Zh=(e,t,n,r)=>(typeof t=="string"?(n=e.push(t)-1,r.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function zh(e,t,n,r){const i=e.indexOf(t);if(i===-1)return Zh(e,t,n,r);const s=e.lastIndexOf(t);return i!==s?n:i}const Gh=(e,t)=>e===null?null:le(Math.round(e),0,t);class v5 extends a0{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const n=this._addedLabels;if(n.length){const r=this.getLabels();for(const{index:i,label:s}of n)r[i]===s&&r.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,n){if(w1(t))return null;const r=this.getLabels();return n=isFinite(n)&&r[n]===t?n:zh(r,t,L1(n,t),this._addedLabels),Gh(n,r.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let{min:r,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(r=0),n||(i=this.getLabels().length-1)),this.min=r,this.max=i}buildTicks(){const t=this.min,n=this.max,r=this.options.offset,i=[];let s=this.getLabels();s=t===0&&n===s.length-1?s:s.slice(t,n+1),this._valueRange=Math.max(s.length-(r?0:1),1),this._startValue=this.min-(r?.5:0);for(let a=t;a<=n;a++)i.push({value:a});return i}getLabelForValue(t){const n=this.getLabels();return t>=0&&t<n.length?n[t]:t}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}v5.id="category";v5.defaults={ticks:{callback:v5.prototype.getLabelForValue}};function qh(e,t){const n=[],{bounds:i,step:s,min:a,max:o,precision:l,count:c,maxTicks:u,maxDigits:d,includeBounds:f}=e,h=s||1,m=u-1,{min:b,max:y}=t,p=!w1(a),L=!w1(o),M=!w1(c),v=(y-b)/(d+1);let _=v8((y-b)/m/h)*h,E,S,H,F;if(_<1e-14&&!p&&!L)return[{value:b},{value:y}];F=Math.ceil(y/_)-Math.floor(b/_),F>m&&(_=v8(F*_/m/h)*h),w1(l)||(E=Math.pow(10,l),_=Math.ceil(_*E)/E),i==="ticks"?(S=Math.floor(b/_)*_,H=Math.ceil(y/_)*_):(S=b,H=y),p&&L&&s&&cf((o-a)/s,_/1e3)?(F=Math.round(Math.min((o-a)/_,u)),_=(o-a)/F,S=a,H=o):M?(S=p?a:S,H=L?o:H,F=c-1,_=(H-S)/F):(F=(H-S)/_,i2(F,Math.round(F),_/1e3)?F=Math.round(F):F=Math.ceil(F));const A=Math.max(M8(_),M8(S));E=Math.pow(10,w1(l)?A:l),S=Math.round(S*E)/E,H=Math.round(H*E)/E;let I=0;for(p&&(f&&S!==a?(n.push({value:a}),S<a&&I++,i2(Math.round((S+I*_)*E)/E,a,r9(a,v,e))&&I++):S<a&&I++);I<F;++I)n.push({value:Math.round((S+I*_)*E)/E});return L&&f&&H!==o?n.length&&i2(n[n.length-1].value,o,r9(o,v,e))?n[n.length-1].value=o:n.push({value:o}):(!L||H===o)&&n.push({value:H}),n}function r9(e,t,{horizontal:n,minRotation:r}){const i=De(r),s=(n?Math.sin(i):Math.cos(i))||.001,a=.75*t*(""+e).length;return Math.min(t/s,a)}class x3 extends a0{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,n){return w1(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:n,maxDefined:r}=this.getUserBounds();let{min:i,max:s}=this;const a=l=>i=n?i:l,o=l=>s=r?s:l;if(t){const l=Xe(i),c=Xe(s);l<0&&c<0?o(0):l>0&&c>0&&a(0)}if(i===s){let l=1;(s>=Number.MAX_SAFE_INTEGER||i<=Number.MIN_SAFE_INTEGER)&&(l=Math.abs(s*.05)),o(s+l),t||a(i-l)}this.min=i,this.max=s}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:n,stepSize:r}=t,i;return r?(i=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),n=n||11),n&&(i=Math.min(n,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,n=t.ticks;let r=this.getTickLimit();r=Math.max(2,r);const i={maxTicks:r,bounds:t.bounds,min:t.min,max:t.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},s=this._range||this,a=qh(i,s);return t.bounds==="ticks"&&zr(a,this,"value"),t.reverse?(a.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),a}configure(){const t=this.ticks;let n=this.min,r=this.max;if(super.configure(),this.options.offset&&t.length){const i=(r-n)/Math.max(t.length-1,1)/2;n-=i,r+=i}this._startValue=n,this._endValue=r,this._valueRange=r-n}getLabelForValue(t){return x2(t,this.chart.options.locale,this.options.ticks.format)}}class pi extends x3{determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=te(t)?t:0,this.max=te(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),n=t?this.width:this.height,r=De(this.options.ticks.minRotation),i=(t?Math.sin(r):Math.cos(r))||.001,s=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,s.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}pi.id="linear";pi.defaults={ticks:{callback:q3.formatters.numeric}};function i9(e){return e/Math.pow(10,Math.floor(we(e)))===1}function Yh(e,t){const n=Math.floor(we(t.max)),r=Math.ceil(t.max/Math.pow(10,n)),i=[];let s=Se(e.min,Math.pow(10,Math.floor(we(t.min)))),a=Math.floor(we(s)),o=Math.floor(s/Math.pow(10,a)),l=a<0?Math.pow(10,Math.abs(a)):1;do i.push({value:s,major:i9(s)}),++o,o===10&&(o=1,++a,l=a>=0?1:l),s=Math.round(o*Math.pow(10,a)*l)/l;while(a<n||a===n&&o<r);const c=Se(e.max,s);return i.push({value:c,major:i9(s)}),i}class bi extends a0{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,n){const r=x3.prototype.parse.apply(this,[t,n]);if(r===0){this._zero=!0;return}return te(r)&&r>0?r:null}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=te(t)?Math.max(0,t):null,this.max=te(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let r=this.min,i=this.max;const s=l=>r=t?r:l,a=l=>i=n?i:l,o=(l,c)=>Math.pow(10,Math.floor(we(l))+c);r===i&&(r<=0?(s(1),a(10)):(s(o(r,-1)),a(o(i,1)))),r<=0&&s(o(i,-1)),i<=0&&a(o(r,1)),this._zero&&this.min!==this._suggestedMin&&r===o(this.min,0)&&s(o(r,-1)),this.min=r,this.max=i}buildTicks(){const t=this.options,n={min:this._userMin,max:this._userMax},r=Yh(n,this);return t.bounds==="ticks"&&zr(r,this,"value"),t.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}getLabelForValue(t){return t===void 0?"0":x2(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=we(t),this._valueRange=we(this.max)-we(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(we(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const n=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+n*this._valueRange)}}bi.id="logarithmic";bi.defaults={ticks:{callback:q3.formatters.logarithmic,major:{enabled:!0}}};function M5(e){const t=e.ticks;if(t.display&&e.display){const n=Qe(t.backdropPadding);return L1(t.font&&t.font.size,O1.font.size)+n.height}return 0}function Kh(e,t,n){return n=j1(n)?n:[n],{w:$f(e,t.string,n),h:n.length*t.lineHeight}}function s9(e,t,n,r,i){return e===r||e===i?{start:t-n/2,end:t+n/2}:e<r||e>i?{start:t-n,end:t}:{start:t,end:t+n}}function Xh(e){const t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},n=Object.assign({},t),r=[],i=[],s=e._pointLabels.length,a=e.options.pointLabels,o=a.centerPointLabels?V1/s:0;for(let l=0;l<s;l++){const c=a.setContext(e.getPointLabelContext(l));i[l]=c.padding;const u=e.getPointPosition(l,e.drawingArea+i[l],o),d=ke(c.font),f=Kh(e.ctx,d,e._pointLabels[l]);r[l]=f;const h=He(e.getIndexAngle(l)+o),m=Math.round(g7(h)),b=s9(m,u.x,f.w,0,180),y=s9(m,u.y,f.h,90,270);Jh(n,t,h,b,y)}e.setCenterPoint(t.l-n.l,n.r-t.r,t.t-n.t,n.b-t.b),e._pointLabelItems=Qh(e,r,i)}function Jh(e,t,n,r,i){const s=Math.abs(Math.sin(n)),a=Math.abs(Math.cos(n));let o=0,l=0;r.start<t.l?(o=(t.l-r.start)/s,e.l=Math.min(e.l,t.l-o)):r.end>t.r&&(o=(r.end-t.r)/s,e.r=Math.max(e.r,t.r+o)),i.start<t.t?(l=(t.t-i.start)/a,e.t=Math.min(e.t,t.t-l)):i.end>t.b&&(l=(i.end-t.b)/a,e.b=Math.max(e.b,t.b+l))}function Qh(e,t,n){const r=[],i=e._pointLabels.length,s=e.options,a=M5(s)/2,o=e.drawingArea,l=s.pointLabels.centerPointLabels?V1/i:0;for(let c=0;c<i;c++){const u=e.getPointPosition(c,o+a+n[c],l),d=Math.round(g7(He(u.angle+D1))),f=t[c],h=nC(u.y,f.h,d),m=eC(d),b=tC(u.x,f.w,m);r.push({x:u.x,y:h,textAlign:m,left:b,top:h,right:b+f.w,bottom:h+f.h})}return r}function eC(e){return e===0||e===180?"center":e<180?"left":"right"}function tC(e,t,n){return n==="right"?e-=t:n==="center"&&(e-=t/2),e}function nC(e,t,n){return n===90||n===270?e-=t/2:(n>270||n<90)&&(e-=t),e}function rC(e,t){const{ctx:n,options:{pointLabels:r}}=e;for(let i=t-1;i>=0;i--){const s=r.setContext(e.getPointLabelContext(i)),a=ke(s.font),{x:o,y:l,textAlign:c,left:u,top:d,right:f,bottom:h}=e._pointLabelItems[i],{backdropColor:m}=s;if(!w1(m)){const b=M0(s.borderRadius),y=Qe(s.backdropPadding);n.fillStyle=m;const p=u-y.left,L=d-y.top,M=f-u+y.width,v=h-d+y.height;Object.values(b).some(_=>_!==0)?(n.beginPath(),M3(n,{x:p,y:L,w:M,h:v,radius:b}),n.fill()):n.fillRect(p,L,M,v)}v3(n,e._pointLabels[i],o,l+a.lineHeight/2,a,{color:s.color,textAlign:c,textBaseline:"middle"})}}function yi(e,t,n,r){const{ctx:i}=e;if(n)i.arc(e.xCenter,e.yCenter,t,0,x1);else{let s=e.getPointPosition(0,t);i.moveTo(s.x,s.y);for(let a=1;a<r;a++)s=e.getPointPosition(a,t),i.lineTo(s.x,s.y)}}function iC(e,t,n,r){const i=e.ctx,s=t.circular,{color:a,lineWidth:o}=t;!s&&!r||!a||!o||n<0||(i.save(),i.strokeStyle=a,i.lineWidth=o,i.setLineDash(t.borderDash),i.lineDashOffset=t.borderDashOffset,i.beginPath(),yi(e,n,s,r),i.closePath(),i.stroke(),i.restore())}function sC(e,t,n){return s0(e,{label:n,index:t,type:"pointLabel"})}class K3 extends x3{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=Qe(M5(this.options)/2),n=this.width=this.maxWidth-t.width,r=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+n/2+t.left),this.yCenter=Math.floor(this.top+r/2+t.top),this.drawingArea=Math.floor(Math.min(n,r)/2)}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!1);this.min=te(t)&&!isNaN(t)?t:0,this.max=te(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/M5(this.options))}generateTickLabels(t){x3.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((n,r)=>{const i=se(this.options.pointLabels.callback,[n,r],this);return i||i===0?i:""}).filter((n,r)=>this.chart.getDataVisibility(r))}fit(){const t=this.options;t.display&&t.pointLabels.display?Xh(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,n,r,i){this.xCenter+=Math.floor((t-n)/2),this.yCenter+=Math.floor((r-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,n,r,i))}getIndexAngle(t){const n=x1/(this._pointLabels.length||1),r=this.options.startAngle||0;return He(t*n+De(r))}getDistanceFromCenterForValue(t){if(w1(t))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*n:(t-this.min)*n}getValueForDistanceFromCenter(t){if(w1(t))return NaN;const n=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(t){const n=this._pointLabels||[];if(t>=0&&t<n.length){const r=n[t];return sC(this.getContext(),t,r)}}getPointPosition(t,n,r=0){const i=this.getIndexAngle(t)-D1+r;return{x:Math.cos(i)*n+this.xCenter,y:Math.sin(i)*n+this.yCenter,angle:i}}getPointPositionForValue(t,n){return this.getPointPosition(t,this.getDistanceFromCenterForValue(n))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:n,top:r,right:i,bottom:s}=this._pointLabelItems[t];return{left:n,top:r,right:i,bottom:s}}drawBackground(){const{backgroundColor:t,grid:{circular:n}}=this.options;if(t){const r=this.ctx;r.save(),r.beginPath(),yi(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),r.closePath(),r.fillStyle=t,r.fill(),r.restore()}}drawGrid(){const t=this.ctx,n=this.options,{angleLines:r,grid:i}=n,s=this._pointLabels.length;let a,o,l;if(n.pointLabels.display&&rC(this,s),i.display&&this.ticks.forEach((c,u)=>{if(u!==0){o=this.getDistanceFromCenterForValue(c.value);const d=i.setContext(this.getContext(u-1));iC(this,d,o,s)}}),r.display){for(t.save(),a=s-1;a>=0;a--){const c=r.setContext(this.getPointLabelContext(a)),{color:u,lineWidth:d}=c;!d||!u||(t.lineWidth=d,t.strokeStyle=u,t.setLineDash(c.borderDash),t.lineDashOffset=c.borderDashOffset,o=this.getDistanceFromCenterForValue(n.ticks.reverse?this.min:this.max),l=this.getPointPosition(a,o),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(l.x,l.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,n=this.options,r=n.ticks;if(!r.display)return;const i=this.getIndexAngle(0);let s,a;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(i),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((o,l)=>{if(l===0&&!n.reverse)return;const c=r.setContext(this.getContext(l)),u=ke(c.font);if(s=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=u.string,a=t.measureText(o.label).width,t.fillStyle=c.backdropColor;const d=Qe(c.backdropPadding);t.fillRect(-a/2-d.left,-s-u.size/2-d.top,a+d.width,u.size+d.height)}v3(t,o.label,0,-s,u,{color:c.color})}),t.restore()}drawTitle(){}}K3.id="radialLinear";K3.defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:q3.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}};K3.defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"};K3.descriptors={angleLines:{_fallback:"grid"}};const X3={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},ge=Object.keys(X3);function aC(e,t){return e-t}function a9(e,t){if(w1(t))return null;const n=e._adapter,{parser:r,round:i,isoWeekday:s}=e._parseOpts;let a=t;return typeof r=="function"&&(a=r(a)),te(a)||(a=typeof r=="string"?n.parse(a,r):n.parse(a)),a===null?null:(i&&(a=i==="week"&&(A0(s)||s===!0)?n.startOf(a,"isoWeek",s):n.startOf(a,i)),+a)}function o9(e,t,n,r){const i=ge.length;for(let s=ge.indexOf(e);s<i-1;++s){const a=X3[ge[s]],o=a.steps?a.steps:Number.MAX_SAFE_INTEGER;if(a.common&&Math.ceil((n-t)/(o*a.size))<=r)return ge[s]}return ge[i-1]}function oC(e,t,n,r,i){for(let s=ge.length-1;s>=ge.indexOf(n);s--){const a=ge[s];if(X3[a].common&&e._adapter.diff(i,r,a)>=t-1)return a}return ge[n?ge.indexOf(n):0]}function lC(e){for(let t=ge.indexOf(e)+1,n=ge.length;t<n;++t)if(X3[ge[t]].common)return ge[t]}function l9(e,t,n){if(!n)e[t]=!0;else if(n.length){const{lo:r,hi:i}=Gr(n,t),s=n[r]>=t?n[r]:n[i];e[s]=!0}}function cC(e,t,n,r){const i=e._adapter,s=+i.startOf(t[0].value,r),a=t[t.length-1].value;let o,l;for(o=s;o<=a;o=+i.add(o,1,r))l=n[o],l>=0&&(t[l].major=!0);return t}function c9(e,t,n){const r=[],i={},s=t.length;let a,o;for(a=0;a<s;++a)o=t[a],i[o]=a,r.push({value:o,major:!1});return s===0||!n?r:cC(e,r,i,n)}class J3 extends a0{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,n){const r=t.time||(t.time={}),i=this._adapter=new ph._date(t.adapters.date);i.init(n),jr(r.displayFormats,i.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(t),this._normalized=n.normalized}parse(t,n){return t===void 0?null:a9(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,n=this._adapter,r=t.time.unit||"day";let{min:i,max:s,minDefined:a,maxDefined:o}=this.getUserBounds();function l(c){!a&&!isNaN(c.min)&&(i=Math.min(i,c.min)),!o&&!isNaN(c.max)&&(s=Math.max(s,c.max))}(!a||!o)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),i=te(i)&&!isNaN(i)?i:+n.startOf(Date.now(),r),s=te(s)&&!isNaN(s)?s:+n.endOf(Date.now(),r)+1,this.min=Math.min(i,s-1),this.max=Math.max(i+1,s)}_getLabelBounds(){const t=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return t.length&&(n=t[0],r=t[t.length-1]),{min:n,max:r}}buildTicks(){const t=this.options,n=t.time,r=t.ticks,i=r.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const s=this.min,a=this.max,o=hf(i,s,a);return this._unit=n.unit||(r.autoSkip?o9(n.minUnit,this.min,this.max,this._getLabelCapacity(s)):oC(this,o.length,n.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:lC(this._unit),this.initOffsets(i),t.reverse&&o.reverse(),c9(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t){let n=0,r=0,i,s;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?n=1-i:n=(this.getDecimalForValue(t[1])-i)/2,s=this.getDecimalForValue(t[t.length-1]),t.length===1?r=s:r=(s-this.getDecimalForValue(t[t.length-2]))/2);const a=t.length<3?.5:.25;n=le(n,0,a),r=le(r,0,a),this._offsets={start:n,end:r,factor:1/(n+1+r)}}_generate(){const t=this._adapter,n=this.min,r=this.max,i=this.options,s=i.time,a=s.unit||o9(s.minUnit,n,r,this._getLabelCapacity(n)),o=L1(s.stepSize,1),l=a==="week"?s.isoWeekday:!1,c=A0(l)||l===!0,u={};let d=n,f,h;if(c&&(d=+t.startOf(d,"isoWeek",l)),d=+t.startOf(d,c?"day":a),t.diff(r,n,a)>1e5*o)throw new Error(n+" and "+r+" are too far apart with stepSize of "+o+" "+a);const m=i.ticks.source==="data"&&this.getDataTimestamps();for(f=d,h=0;f<r;f=+t.add(f,o,a),h++)l9(u,f,m);return(f===r||i.bounds==="ticks"||h===1)&&l9(u,f,m),Object.keys(u).sort((b,y)=>b-y).map(b=>+b)}getLabelForValue(t){const n=this._adapter,r=this.options.time;return r.tooltipFormat?n.format(t,r.tooltipFormat):n.format(t,r.displayFormats.datetime)}_tickFormatFunction(t,n,r,i){const s=this.options,a=s.time.displayFormats,o=this._unit,l=this._majorUnit,c=o&&a[o],u=l&&a[l],d=r[n],f=l&&u&&d&&d.major,h=this._adapter.format(t,i||(f?u:c)),m=s.ticks.callback;return m?se(m,[h,n,r],this):h}generateTickLabels(t){let n,r,i;for(n=0,r=t.length;n<r;++n)i=t[n],i.label=this._tickFormatFunction(i.value,n,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const n=this._offsets,r=this.getDecimalForValue(t);return this.getPixelForDecimal((n.start+r)*n.factor)}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return this.min+r*(this.max-this.min)}_getLabelSize(t){const n=this.options.ticks,r=this.ctx.measureText(t).width,i=De(this.isHorizontal()?n.maxRotation:n.minRotation),s=Math.cos(i),a=Math.sin(i),o=this._resolveTickFontOptions(0).size;return{w:r*s+o*a,h:r*a+o*s}}_getLabelCapacity(t){const n=this.options.time,r=n.displayFormats,i=r[n.unit]||r.millisecond,s=this._tickFormatFunction(t,0,c9(this,[t],this._majorUnit),i),a=this._getLabelSize(s),o=Math.floor(this.isHorizontal()?this.width/a.w:this.height/a.h)-1;return o>0?o:1}getDataTimestamps(){let t=this._cache.data||[],n,r;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(n=0,r=i.length;n<r;++n)t=t.concat(i[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let n,r;if(t.length)return t;const i=this.getLabels();for(n=0,r=i.length;n<r;++n)t.push(a9(this,i[n]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Yr(t.sort(aC))}}J3.id="time";J3.defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",major:{enabled:!1}}};function U2(e,t,n){let r=0,i=e.length-1,s,a,o,l;n?(t>=e[r].pos&&t<=e[i].pos&&({lo:r,hi:i}=y0(e,"pos",t)),{pos:s,time:o}=e[r],{pos:a,time:l}=e[i]):(t>=e[r].time&&t<=e[i].time&&({lo:r,hi:i}=y0(e,"time",t)),{time:s,pos:o}=e[r],{time:a,pos:l}=e[i]);const c=a-s;return c?o+(l-o)*(t-s)/c:o}class _i extends J3{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(t);this._minPos=U2(n,this.min),this._tableRange=U2(n,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:n,max:r}=this,i=[],s=[];let a,o,l,c,u;for(a=0,o=t.length;a<o;++a)c=t[a],c>=n&&c<=r&&i.push(c);if(i.length<2)return[{time:n,pos:0},{time:r,pos:1}];for(a=0,o=i.length;a<o;++a)u=i[a+1],l=i[a-1],c=i[a],Math.round((u+l)/2)!==c&&s.push({time:c,pos:a/(o-1)});return s}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const n=this.getDataTimestamps(),r=this.getLabelTimestamps();return n.length&&r.length?t=this.normalize(n.concat(r)):t=n.length?n:r,t=this._cache.all=t,t}getDecimalForValue(t){return(U2(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return U2(this._table,r*this._tableRange+this._minPos,!0)}}_i.id="timeseries";_i.defaults=J3.defaults;var uC={exports:{}};/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */(function(e){(function(t,n){e.exports?e.exports=n():t.numeral=n()})(uc,function(){var t,n,r="2.0.6",i={},s={},a={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},o={currentLocale:a.currentLocale,zeroFormat:a.zeroFormat,nullFormat:a.nullFormat,defaultFormat:a.defaultFormat,scalePercentBy100:a.scalePercentBy100};function l(c,u){this._input=c,this._value=u}return t=function(c){var u,d,f,h;if(t.isNumeral(c))u=c.value();else if(c===0||typeof c>"u")u=0;else if(c===null||n.isNaN(c))u=null;else if(typeof c=="string")if(o.zeroFormat&&c===o.zeroFormat)u=0;else if(o.nullFormat&&c===o.nullFormat||!c.replace(/[^0-9]+/g,"").length)u=null;else{for(d in i)if(h=typeof i[d].regexps.unformat=="function"?i[d].regexps.unformat():i[d].regexps.unformat,h&&c.match(h)){f=i[d].unformat;break}f=f||t._.stringToNumber,u=f(c)}else u=Number(c)||null;return new l(c,u)},t.version=r,t.isNumeral=function(c){return c instanceof l},t._=n={numberToFormat:function(c,u,d){var f=s[t.options.currentLocale],h=!1,m=!1,b=0,y="",p=1e12,L=1e9,M=1e6,v=1e3,_="",E=!1,S,H,F,A,I,R,j;if(c=c||0,H=Math.abs(c),t._.includes(u,"(")?(h=!0,u=u.replace(/[\(|\)]/g,"")):(t._.includes(u,"+")||t._.includes(u,"-"))&&(I=t._.includes(u,"+")?u.indexOf("+"):c<0?u.indexOf("-"):-1,u=u.replace(/[\+|\-]/g,"")),t._.includes(u,"a")&&(S=u.match(/a(k|m|b|t)?/),S=S?S[1]:!1,t._.includes(u," a")&&(y=" "),u=u.replace(new RegExp(y+"a[kmbt]?"),""),H>=p&&!S||S==="t"?(y+=f.abbreviations.trillion,c=c/p):H<p&&H>=L&&!S||S==="b"?(y+=f.abbreviations.billion,c=c/L):H<L&&H>=M&&!S||S==="m"?(y+=f.abbreviations.million,c=c/M):(H<M&&H>=v&&!S||S==="k")&&(y+=f.abbreviations.thousand,c=c/v)),t._.includes(u,"[.]")&&(m=!0,u=u.replace("[.]",".")),F=c.toString().split(".")[0],A=u.split(".")[1],R=u.indexOf(","),b=(u.split(".")[0].split(",")[0].match(/0/g)||[]).length,A?(t._.includes(A,"[")?(A=A.replace("]",""),A=A.split("["),_=t._.toFixed(c,A[0].length+A[1].length,d,A[1].length)):_=t._.toFixed(c,A.length,d),F=_.split(".")[0],t._.includes(_,".")?_=f.delimiters.decimal+_.split(".")[1]:_="",m&&Number(_.slice(1))===0&&(_="")):F=t._.toFixed(c,0,d),y&&!S&&Number(F)>=1e3&&y!==f.abbreviations.trillion)switch(F=String(Number(F)/1e3),y){case f.abbreviations.thousand:y=f.abbreviations.million;break;case f.abbreviations.million:y=f.abbreviations.billion;break;case f.abbreviations.billion:y=f.abbreviations.trillion;break}if(t._.includes(F,"-")&&(F=F.slice(1),E=!0),F.length<b)for(var r1=b-F.length;r1>0;r1--)F="0"+F;return R>-1&&(F=F.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+f.delimiters.thousands)),u.indexOf(".")===0&&(F=""),j=F+_+(y||""),h?j=(h&&E?"(":"")+j+(h&&E?")":""):I>=0?j=I===0?(E?"-":"+")+j:j+(E?"-":"+"):E&&(j="-"+j),j},stringToNumber:function(c){var u=s[o.currentLocale],d=c,f={thousand:3,million:6,billion:9,trillion:12},h,m,b;if(o.zeroFormat&&c===o.zeroFormat)m=0;else if(o.nullFormat&&c===o.nullFormat||!c.replace(/[^0-9]+/g,"").length)m=null;else{m=1,u.delimiters.decimal!=="."&&(c=c.replace(/\./g,"").replace(u.delimiters.decimal,"."));for(h in f)if(b=new RegExp("[^a-zA-Z]"+u.abbreviations[h]+"(?:\\)|(\\"+u.currency.symbol+")?(?:\\))?)?$"),d.match(b)){m*=Math.pow(10,f[h]);break}m*=(c.split("-").length+Math.min(c.split("(").length-1,c.split(")").length-1))%2?1:-1,c=c.replace(/[^0-9\.]+/g,""),m*=Number(c)}return m},isNaN:function(c){return typeof c=="number"&&isNaN(c)},includes:function(c,u){return c.indexOf(u)!==-1},insert:function(c,u,d){return c.slice(0,d)+u+c.slice(d)},reduce:function(c,u){if(this===null)throw new TypeError("Array.prototype.reduce called on null or undefined");if(typeof u!="function")throw new TypeError(u+" is not a function");var d=Object(c),f=d.length>>>0,h=0,m;if(arguments.length===3)m=arguments[2];else{for(;h<f&&!(h in d);)h++;if(h>=f)throw new TypeError("Reduce of empty array with no initial value");m=d[h++]}for(;h<f;h++)h in d&&(m=u(m,d[h],h,d));return m},multiplier:function(c){var u=c.toString().split(".");return u.length<2?1:Math.pow(10,u[1].length)},correctionFactor:function(){var c=Array.prototype.slice.call(arguments);return c.reduce(function(u,d){var f=n.multiplier(d);return u>f?u:f},1)},toFixed:function(c,u,d,f){var h=c.toString().split("."),m=u-(f||0),b,y,p,L;return h.length===2?b=Math.min(Math.max(h[1].length,m),u):b=m,p=Math.pow(10,b),L=(d(c+"e+"+b)/p).toFixed(b),f>u-b&&(y=new RegExp("\\.?0{1,"+(f-(u-b))+"}$"),L=L.replace(y,"")),L}},t.options=o,t.formats=i,t.locales=s,t.locale=function(c){return c&&(o.currentLocale=c.toLowerCase()),o.currentLocale},t.localeData=function(c){if(!c)return s[o.currentLocale];if(c=c.toLowerCase(),!s[c])throw new Error("Unknown locale : "+c);return s[c]},t.reset=function(){for(var c in a)o[c]=a[c]},t.zeroFormat=function(c){o.zeroFormat=typeof c=="string"?c:null},t.nullFormat=function(c){o.nullFormat=typeof c=="string"?c:null},t.defaultFormat=function(c){o.defaultFormat=typeof c=="string"?c:"0.0"},t.register=function(c,u,d){if(u=u.toLowerCase(),this[c+"s"][u])throw new TypeError(u+" "+c+" already registered.");return this[c+"s"][u]=d,d},t.validate=function(c,u){var d,f,h,m,b,y,p,L;if(typeof c!="string"&&(c+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",c)),c=c.trim(),c.match(/^\d+$/))return!0;if(c==="")return!1;try{p=t.localeData(u)}catch{p=t.localeData(t.locale())}return h=p.currency.symbol,b=p.abbreviations,d=p.delimiters.decimal,p.delimiters.thousands==="."?f="\\.":f=p.delimiters.thousands,L=c.match(/^[^\d]+/),L!==null&&(c=c.substr(1),L[0]!==h)||(L=c.match(/[^\d]+$/),L!==null&&(c=c.slice(0,-1),L[0]!==b.thousand&&L[0]!==b.million&&L[0]!==b.billion&&L[0]!==b.trillion))?!1:(y=new RegExp(f+"{2}"),c.match(/[^\d.,]/g)?!1:(m=c.split(d),m.length>2?!1:m.length<2?!!m[0].match(/^\d+.*\d$/)&&!m[0].match(y):m[0].length===1?!!m[0].match(/^\d+$/)&&!m[0].match(y)&&!!m[1].match(/^\d+$/):!!m[0].match(/^\d+.*\d$/)&&!m[0].match(y)&&!!m[1].match(/^\d+$/)))},t.fn=l.prototype={clone:function(){return t(this)},format:function(c,u){var d=this._value,f=c||o.defaultFormat,h,m,b;if(u=u||Math.round,d===0&&o.zeroFormat!==null)m=o.zeroFormat;else if(d===null&&o.nullFormat!==null)m=o.nullFormat;else{for(h in i)if(f.match(i[h].regexps.format)){b=i[h].format;break}b=b||t._.numberToFormat,m=b(d,f,u)}return m},value:function(){return this._value},input:function(){return this._input},set:function(c){return this._value=Number(c),this},add:function(c){var u=n.correctionFactor.call(null,this._value,c);function d(f,h,m,b){return f+Math.round(u*h)}return this._value=n.reduce([this._value,c],d,0)/u,this},subtract:function(c){var u=n.correctionFactor.call(null,this._value,c);function d(f,h,m,b){return f-Math.round(u*h)}return this._value=n.reduce([c],d,Math.round(this._value*u))/u,this},multiply:function(c){function u(d,f,h,m){var b=n.correctionFactor(d,f);return Math.round(d*b)*Math.round(f*b)/Math.round(b*b)}return this._value=n.reduce([this._value,c],u,1),this},divide:function(c){function u(d,f,h,m){var b=n.correctionFactor(d,f);return Math.round(d*b)/Math.round(f*b)}return this._value=n.reduce([this._value,c],u),this},difference:function(c){return Math.abs(t(this._value).subtract(c).value())}},t.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(c){var u=c%10;return~~(c%100/10)===1?"th":u===1?"st":u===2?"nd":u===3?"rd":"th"},currency:{symbol:"$"}}),function(){t.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(c,u,d){var f=t._.includes(u," BPS")?" ":"",h;return c=c*1e4,u=u.replace(/\s?BPS/,""),h=t._.numberToFormat(c,u,d),t._.includes(h,")")?(h=h.split(""),h.splice(-1,0,f+"BPS"),h=h.join("")):h=h+f+"BPS",h},unformat:function(c){return+(t._.stringToNumber(c)*1e-4).toFixed(15)}})}(),function(){var c={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},u={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},d=c.suffixes.concat(u.suffixes.filter(function(h){return c.suffixes.indexOf(h)<0})),f=d.join("|");f="("+f.replace("B","B(?!PS)")+")",t.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(f)},format:function(h,m,b){var y,p=t._.includes(m,"ib")?u:c,L=t._.includes(m," b")||t._.includes(m," ib")?" ":"",M,v,_;for(m=m.replace(/\s?i?b/,""),M=0;M<=p.suffixes.length;M++)if(v=Math.pow(p.base,M),_=Math.pow(p.base,M+1),h===null||h===0||h>=v&&h<_){L+=p.suffixes[M],v>0&&(h=h/v);break}return y=t._.numberToFormat(h,m,b),y+L},unformat:function(h){var m=t._.stringToNumber(h),b,y;if(m){for(b=c.suffixes.length-1;b>=0;b--){if(t._.includes(h,c.suffixes[b])){y=Math.pow(c.base,b);break}if(t._.includes(h,u.suffixes[b])){y=Math.pow(u.base,b);break}}m*=y||1}return m}})}(),function(){t.register("format","currency",{regexps:{format:/(\$)/},format:function(c,u,d){var f=t.locales[t.options.currentLocale],h={before:u.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:u.match(/([\+|\-|\)|\s|\$]*)$/)[0]},m,b,y;for(u=u.replace(/\s?\$\s?/,""),m=t._.numberToFormat(c,u,d),c>=0?(h.before=h.before.replace(/[\-\(]/,""),h.after=h.after.replace(/[\-\)]/,"")):c<0&&!t._.includes(h.before,"-")&&!t._.includes(h.before,"(")&&(h.before="-"+h.before),y=0;y<h.before.length;y++)switch(b=h.before[y],b){case"$":m=t._.insert(m,f.currency.symbol,y);break;case" ":m=t._.insert(m," ",y+f.currency.symbol.length-1);break}for(y=h.after.length-1;y>=0;y--)switch(b=h.after[y],b){case"$":m=y===h.after.length-1?m+f.currency.symbol:t._.insert(m,f.currency.symbol,-(h.after.length-(1+y)));break;case" ":m=y===h.after.length-1?m+" ":t._.insert(m," ",-(h.after.length-(1+y)+f.currency.symbol.length-1));break}return m}})}(),function(){t.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(c,u,d){var f,h=typeof c=="number"&&!t._.isNaN(c)?c.toExponential():"0e+0",m=h.split("e");return u=u.replace(/e[\+|\-]{1}0/,""),f=t._.numberToFormat(Number(m[0]),u,d),f+"e"+m[1]},unformat:function(c){var u=t._.includes(c,"e+")?c.split("e+"):c.split("e-"),d=Number(u[0]),f=Number(u[1]);f=t._.includes(c,"e-")?f*=-1:f;function h(m,b,y,p){var L=t._.correctionFactor(m,b),M=m*L*(b*L)/(L*L);return M}return t._.reduce([d,Math.pow(10,f)],h,1)}})}(),function(){t.register("format","ordinal",{regexps:{format:/(o)/},format:function(c,u,d){var f=t.locales[t.options.currentLocale],h,m=t._.includes(u," o")?" ":"";return u=u.replace(/\s?o/,""),m+=f.ordinal(c),h=t._.numberToFormat(c,u,d),h+m}})}(),function(){t.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(c,u,d){var f=t._.includes(u," %")?" ":"",h;return t.options.scalePercentBy100&&(c=c*100),u=u.replace(/\s?\%/,""),h=t._.numberToFormat(c,u,d),t._.includes(h,")")?(h=h.split(""),h.splice(-1,0,f+"%"),h=h.join("")):h=h+f+"%",h},unformat:function(c){var u=t._.stringToNumber(c);return t.options.scalePercentBy100?u*.01:u}})}(),function(){t.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(c,u,d){var f=Math.floor(c/60/60),h=Math.floor((c-f*60*60)/60),m=Math.round(c-f*60*60-h*60);return f+":"+(h<10?"0"+h:h)+":"+(m<10?"0"+m:m)},unformat:function(c){var u=c.split(":"),d=0;return u.length===3?(d=d+Number(u[0])*60*60,d=d+Number(u[1])*60,d=d+Number(u[2])):u.length===2&&(d=d+Number(u[0])*60,d=d+Number(u[1])),Number(d)}})}(),t})})(uC);const fC=["width","height"],dC=["d"],pe={__name:"BaseIcon",props:{path:{type:String,required:!0},w:{type:String,default:"w-6"},h:{type:String,default:"h-6"},size:{type:[String,Number],default:null}},setup(e){const t=e,n=e1(()=>`inline-flex justify-center items-center ${t.w} ${t.h}`),r=e1(()=>{var i;return(i=t.size)!=null?i:16});return(i,s)=>(U(),u1("span",{class:l1(W(n))},[(U(),u1("svg",{viewBox:"0 0 24 24",width:W(r),height:W(r),class:"inline-block"},[K("path",{fill:"currentColor",d:e.path},null,8,dC)],8,fC)),ce(i.$slots,"default")],2))}},L2=Y5({name:"BaseLevel",props:{mobile:Boolean,type:{type:String,default:"justify-between"}},render(){const e=[this.type,"items-center"],t=["flex"],n=["block","md:flex"],r=["flex","items-center","justify-center"];return n0("div",{class:e.concat(this.mobile?t:n)},this.$slots.default().map((i,s)=>{const a=!this.mobile&&this.$slots.default().length>s+1?r.concat(["mb-6","md:mb-0"]):r;return n0("div",{class:a},[i])}))}}),hC={__name:"PillTagPlain",props:{label:{type:String,required:!0},icon:{type:String,default:null},small:Boolean},setup(e){return(t,n)=>(U(),u1("div",{class:l1(["inline-flex items-center capitalize leading-none",[e.small?"text-xs":"text-sm"]])},[e.icon?(U(),y1(pe,{key:0,path:e.icon,h:"h-4",w:"w-4",class:l1(e.small?"mr-1":"mr-2"),size:e.small?14:null},null,8,["path","class","size"])):Q1("",!0),K("span",null,Le(e.label),1)],2))}},Li={__name:"PillTag",props:{label:{type:String,required:!0},color:{type:String,required:!0},icon:{type:String,default:null},small:Boolean,outline:Boolean},setup(e){const t=e,n=e1(()=>[t.small?"py-1 px-3":"py-1.5 px-4",t.outline?Dr[t.color]:d7[t.color]]);return(r,i)=>(U(),y1(hC,{class:l1(["border rounded-full",W(n)]),icon:e.icon,label:e.label,small:e.small},null,8,["class","icon","label","small"]))}},CC={__name:"BaseButton",props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},iconSize:{type:[String,Number],default:null},href:{type:String,default:null},target:{type:String,default:null},to:{type:[String,Object],default:null},type:{type:String,default:null},color:{type:String,default:"white"},as:{type:String,default:null},small:Boolean,outline:Boolean,active:Boolean,disabled:Boolean,roundedFull:Boolean},setup(e){const t=e,n=e1(()=>t.as?t.as:t.to?j3:t.href?"a":"button"),r=e1(()=>{var a;return n.value==="button"?(a=t.type)!=null?a:"button":null}),i=e1(()=>t.small&&t.icon?"px-1":"px-2"),s=e1(()=>{const a=["inline-flex","justify-center","items-center","whitespace-nowrap","focus:outline-none","transition-colors","focus:ring","duration-150","border",t.disabled?"cursor-not-allowed":"cursor-pointer",t.roundedFull?"rounded-full":"rounded",Br(t.color,t.outline,!t.disabled,t.active)];return!t.label&&t.icon?a.push("p-1"):t.small?a.push("text-sm",t.roundedFull?"px-3 py-1":"p-1"):a.push("py-2",t.roundedFull?"px-6":"px-3"),t.disabled&&a.push(t.outline?"opacity-50":"opacity-70"),a});return(a,o)=>(U(),y1(I3(W(n)),{class:l1(W(s)),href:e.href,type:W(r),to:e.to,target:e.target,disabled:e.disabled},{default:T1(()=>[e.icon?(U(),y1(pe,{key:0,path:e.icon,size:e.iconSize},null,8,["path","size"])):Q1("",!0),e.label?(U(),u1("span",{key:1,class:l1(W(i))},Le(e.label),3)):Q1("",!0)]),_:1},8,["class","href","type","to","target","disabled"]))}},gC={class:"flex flex-col md:flex-row items-center"},mC={class:"text-center md:text-left md:py-2"},pC={__name:"NotificationBar",props:{icon:{type:String,default:null},outline:Boolean,color:{type:String,required:!0}},setup(e){const t=e,n=e1(()=>t.outline?Dr[t.color]:d7[t.color]),r=H1(!1),i=()=>{r.value=!0},s=Q5(),a=e1(()=>s.right);return(o,l)=>r.value?Q1("",!0):(U(),u1("div",{key:0,class:l1([W(n),"px-3 py-6 md:py-3 mb-6 last:mb-0 border rounded-lg transition-colors duration-150"])},[n1(L2,null,{default:T1(()=>[K("div",gC,[e.icon?(U(),y1(pe,{key:0,path:e.icon,w:"w-10 md:w-5",h:"h-10 md:h-5",size:"24",class:"md:mr-2"},null,8,["path"])):Q1("",!0),K("span",mC,[ce(o.$slots,"default")])]),W(a)?ce(o.$slots,"right",{key:0}):(U(),y1(CC,{key:1,icon:W(C7),small:"","rounded-full":"",color:"white",onClick:i},null,8,["icon"]))]),_:3})],2))}},ki={__name:"IconRounded",props:{icon:{type:String,required:!0},color:{type:String,default:null},w:{type:String,default:"w-12"},h:{type:String,default:"h-12"},bg:Boolean},setup(e){return(t,n)=>(U(),y1(pe,{path:e.icon,w:e.w,h:e.h,size:"24",class:l1(["rounded-full",e.bg?W(d7)[e.color]:[W(Lt)[e.color],"bg-gray-50 dark:bg-slate-800"]])},null,8,["path","w","h","class"]))}},bC={class:"text-center space-y-1 md:text-left md:mr-6"},yC={class:"text-xl"},_C={class:"text-gray-500 dark:text-slate-400"},LC={class:"text-center md:text-right space-y-2"},kC={class:"text-sm text-gray-500"},vC={__name:"CardBoxTransaction",props:{amount:{type:Number,required:!0},date:{type:String,required:!0},business:{type:String,required:!0},type:{type:String,required:!0},name:{type:String,required:!0},account:{type:String,required:!0}},setup(e){const t=e,n=e1(()=>t.type==="withdrawal"?{icon:Ou,type:"danger"}:t.type==="deposit"?{icon:Au,type:"success"}:t.type==="invoice"?{icon:Zu,type:"warning"}:{icon:Nu,type:"info"});return(r,i)=>(U(),y1(h7,{class:"mb-6 last:mb-0","is-hoverable":""},{default:T1(()=>[n1(L2,null,{default:T1(()=>[n1(L2,{type:"justify-start"},{default:T1(()=>[n1(ki,{icon:W(n).icon,color:W(n).type,class:"md:mr-6"},null,8,["icon","color"]),K("div",bC,[K("h4",yC,"$"+Le(e.amount),1),K("p",_C,[K("b",null,Le(e.date),1),X5(" via "+Le(e.business),1)])])]),_:1}),K("div",LC,[K("p",kC,Le(e.name),1),K("div",null,[n1(Li,{color:W(n).type,label:e.type,small:""},null,8,["color","label"])])])]),_:1})]),_:1}))}},MC=`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Mouth/Concerned' transform='translate(2.000000, 52.000000)'>
        <defs>
          <path
            d='M35.117844,15.1280772 C36.1757121,24.6198025 44.2259873,32 54,32 C63.8042055,32 71.8740075,24.574136 72.8917593,15.0400546 C72.9736685,14.272746 72.1167429,13 71.042767,13 C56.1487536,13 44.7379213,13 37.0868244,13 C36.0066168,13 35.0120058,14.1784435 35.117844,15.1280772 Z'
            id='Mouth1'
          />
        </defs>
        <mask id='MouthMask1' fill='white'>
          <use
            href='#Mouth1'
            transform='translate(54.003637, 22.500000) scale(1, -1) translate(-54.003637, -22.500000) '
          />
        </mask>
        <use
          id='Mouth'
          opacity='0.699999988'
          fill='#000000'
          fillRule='evenodd'
          transform='translate(54.003637, 22.500000) scale(1, -1) translate(-54.003637, -22.500000) '
          href='#Mouth1'
        />
        <rect
          id='Teeth'
          fill='#FFFFFF'
          fillRule='evenodd'
          mask='url("#MouthMask1")'
          x='39'
          y='2'
          width='31'
          height='16'
          rx='5'
        />
        <g
          id='Tongue'
          strokeWidth='1'
          fillRule='evenodd'
          mask='url("#MouthMask1")'
          fill='#FF4F6D'>
          <g transform='translate(38.000000, 24.000000)'>
            <circle id='friend?' cx='11' cy='11' r='11' />
            <circle id='How-you-doing' cx='21' cy='11' r='11' />
          </g>
        </g>
      </g>
    </g>
`,xC=`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        id='Mouth/Default'
        transform='translate(2.000000, 52.000000)'
        opacity='0.699999988'>
        <path
          d='M40,15 C40,22.7319865 46.2680135,29 54,29 L54,29 C61.7319865,29 68,22.7319865 68,15'
          id='Mouth'
        />
      </g>
    </g>
`,SC=`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        id='Mouth/Disbelief'
        transform='translate(2.000000, 52.000000)'
        opacity='0.699999988'
        fill='#000000'>
        <path
          d='M40,15 C40,22.7319865 46.2680135,29 54,29 L54,29 C61.7319865,29 68,22.7319865 68,15'
          id='Mouth'
          transform='translate(54.000000, 22.000000) scale(1, -1) translate(-54.000000, -22.000000) '
        />
      </g>
    </g>
`,wC=`
  <g transform="translate(76.000000, 82.000000)">
      <g id="Mouth/Eating" transform="translate(2.000000, 52.000000)">
        <g
          id="Om-Nom-Nom"
          opacity="0.599999964"
          strokeWidth="1"
          transform="translate(28.000000, 6.000000)"
          fill="#000000">
          <path
            d="M16.1906378,10.106319 C16.0179484,4.99553347 11.7923466,0.797193688 6.29352385,0 C9.66004124,1.95870633 11.9804619,5.49520667 11.9804619,9.67694348 C11.9804619,15.344608 6.50694731,20.2451296 0.176591694,20.2451296 C0.11761218,20.2451296 0.0587475828,20.2447983 0,20.244138 L8.8963743e-11,20.244138 C1.35764479,20.7317259 2.83995964,21 4.39225962,21 C9.71395931,21 14.2131224,17.8469699 15.6863572,13.5136402 C18.1609431,15.6698775 21.8629994,17.0394229 26,17.0394229 C30.1370006,17.0394229 33.8390569,15.6698775 36.3136428,13.5136402 C37.7868776,17.8469699 42.2860407,21 47.6077404,21 C49.1600404,21 50.6423552,20.7317259 52,20.244138 L52,20.244138 C51.9412524,20.2447983 51.8823878,20.2451296 51.8234083,20.2451296 C45.4930527,20.2451296 40.0195381,15.344608 40.0195381,9.67694348 C40.0195381,5.49520667 42.3399588,1.95870633 45.7064761,0 C40.2076534,0.797193688 35.9820516,4.99553347 35.8093622,10.106319 C33.2452605,11.8422828 29.7948543,12.9056086 26,12.9056086 C22.2051457,12.9056086 18.7547395,11.8422828 16.1906378,10.106319 Z"
            id="Delicious"
          />
        </g>
        <circle
          id="Redish"
          opacity="0.2"
          fill="#FF4646"
          cx="17"
          cy="15"
          r="9"
        />
        <circle
          id="Redish"
          opacity="0.2"
          fill="#FF4646"
          cx="91"
          cy="15"
          r="9"
        />
      </g>
    </g>
`,EC=`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Mouth/Grimace' transform='translate(2.000000, 52.000000)'>
        <defs>
          <rect id='Grimace-path1' x='24' y='9' width='60' height='22' rx='11' />
        </defs>
        <rect
          id='Mouth'
          opacity='0.599999964'
          fill='#000000'
          fillRule='evenodd'
          x='22'
          y='7'
          width='64'
          height='26'
          rx='13'
        />
        <mask id='Grimace-mask1' fill='white'>
          <use href='#Grimace-path1' />
        </mask>
        <use
          id='Mouth'
          fill='#FFFFFF'
          fillRule='evenodd'
          href='#Grimace-path1'
        />
        <path
          d='M71,22 L62,22 L62,34 L58,34 L58,22 L49,22 L49,34 L45,34 L45,22 L36,22 L36,34 L32,34 L32,22 L24,22 L24,18 L32,18 L32,6 L36,6 L36,18 L45,18 L45,6 L49,6 L49,18 L58,18 L58,6 L62,6 L62,18 L71,18 L71,6 L75,6 L75,18 L83.8666667,18 L83.8666667,22 L75,22 L75,34 L71,34 L71,22 Z'
          id='Grimace-Teeth'
          fill='#E6E6E6'
          fillRule='evenodd'
          mask='url("#Grimace-mask1")'
        />
      </g>
    </g>
`,FC=`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        id='Mouth/Sad'
        transform='translate(2.000000, 52.000000)'
        opacity='0.699999988'
        fill='#000000'>
        <path
          d='M40.0582943,16.6539438 C40.7076459,23.6831146 46.7016363,28.3768187 54,28.3768187 C61.3416045,28.3768187 67.3633339,23.627332 67.9526838,16.5287605 C67.9840218,16.1513016 67.0772329,15.8529531 66.6289111,16.077395 C61.0902255,18.8502083 56.8805885,20.2366149 54,20.2366149 C51.1558456,20.2366149 47.0072148,18.8804569 41.5541074,16.168141 C41.0473376,15.9160792 40.0197139,16.2363147 40.0582943,16.6539438 Z'
          id='Mouth'
          transform='translate(54.005357, 22.188409) scale(1, -1) translate(-54.005357, -22.188409) '
        />
      </g>
    </g>
`,TC=`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Mouth/Scream-Open' transform='translate(2.000000, 52.000000)'>
        <defs>
          <path
            d='M34.0082051,15.1361102 C35.1280248,29.123916 38.2345159,40.9925405 53.9961505,40.9999965 C69.757785,41.0074525 72.9169073,29.0566179 73.9942614,15.0063928 C74.0809675,13.8756222 73.1738581,12.9999965 72.0369872,12.9999965 C65.3505138,12.9999965 62.6703194,14.9936002 53.9894323,14.9999965 C45.3085452,15.0063928 40.7567994,12.9999965 36.0924943,12.9999965 C34.9490269,12.9999965 33.8961688,13.7366502 34.0082051,15.1361102 Z'
            id='ScreamOpen-path1'
          />
        </defs>
        <mask id='ScreamOpen-mask1' fill='white'>
          <use
            href='#ScreamOpen-path1'
            transform='translate(54.000000, 26.999998) scale(1, -1) translate(-54.000000, -26.999998) '
          />
        </mask>
        <use
          id='Mouth'
          opacity='0.699999988'
          fill='#000000'
          fillRule='evenodd'
          transform='translate(54.000000, 26.999998) scale(1, -1) translate(-54.000000, -26.999998) '
          href='#ScreamOpen-path1'
        />
        <rect
          id='Teeth'
          fill='#FFFFFF'
          fillRule='evenodd'
          mask='url("#ScreamOpen-mask1")'
          x='39'
          y='2'
          width='31'
          height='16'
          rx='5'
        />
        <g
          id='Tongue'
          strokeWidth='1'
          fillRule='evenodd'
          mask='url("#ScreamOpen-mask1")'
          fill='#FF4F6D'>
          <g transform='translate(38.000000, 32.000000)' id='Say-ahhhh'>
            <circle cx='11' cy='11' r='11' />
            <circle cx='21' cy='11' r='11' />
          </g>
        </g>
      </g>
    </g>
`,OC=`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        id='Mouth/Serious'
        transform='translate(2.000000, 52.000000)'
        fill='#000000'
        opacity='0.699999988'>
        <rect id='Why-so-serious?' x='42' y='18' width='24' height='6' rx='3' />
      </g>
    </g>
`,AC=`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Mouth/Smile' transform='translate(2.000000, 52.000000)'>
        <defs>
          <path
            d='M35.117844,15.1280772 C36.1757121,24.6198025 44.2259873,32 54,32 C63.8042055,32 71.8740075,24.574136 72.8917593,15.0400546 C72.9736685,14.272746 72.1167429,13 71.042767,13 C56.1487536,13 44.7379213,13 37.0868244,13 C36.0066168,13 35.0120058,14.1784435 35.117844,15.1280772 Z'
            id='Smile-path1'
          />
        </defs>
        <mask id='Smile-mask1' fill='white'>
          <use href='#Smile-path1' />
        </mask>
        <use
          id='Mouth'
          opacity='0.699999988'
          fill='#000000'
          fillRule='evenodd'
          href='#Smile-path1'
        />
        <rect
          id='Teeth'
          fill='#FFFFFF'
          fillRule='evenodd'
          mask='url("#Smile-mask1")'
          x='39'
          y='2'
          width='31'
          height='16'
          rx='5'
        />
        <g
          id='Tongue'
          strokeWidth='1'
          fillRule='evenodd'
          mask='url("#Smile-mask1")'
          fill='#FF4F6D'>
          <g transform='translate(38.000000, 24.000000)'>
            <circle cx='11' cy='11' r='11' />
            <circle cx='21' cy='11' r='11' />
          </g>
        </g>
      </g>
    </g>
`,RC=`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Mouth/Tongue' transform='translate(2.000000, 52.000000)'>
        <defs>
          <path
            d='M29,15.6086957 C30.410031,25.2313711 41.062182,33 54,33 C66.9681454,33 77.6461342,25.183301 79,14.7391304 C79.1012093,14.3397326 78.775269,13 76.826087,13 C56.838426,13 41.7395748,13 31.173913,13 C29.3833142,13 28.870211,14.2404669 29,15.6086957 Z'
            id='Tongue-path1'
          />
        </defs>
        <mask id='Tongue-mask1' fill='white'>
          <use href='#Tongue-path1' />
        </mask>
        <use
          id='Mouth'
          opacity='0.699999988'
          fill='#000000'
          fillRule='evenodd'
          href='#Tongue-path1'
        />
        <rect
          id='Teeth'
          fill='#FFFFFF'
          fillRule='evenodd'
          mask='url("#Tongue-mask1")'
          x='39'
          y='2'
          width='31'
          height='16'
          rx='5'
        />
        <path
          d='M65.9841079,23.7466656 C65.9945954,23.8296335 66,23.9141856 66,24 L66,33 C66,39.0751322 61.0751322,44 55,44 L54,44 C47.9248678,44 43,39.0751322 43,33 L43,24 L43,24 C43,23.9141856 43.0054046,23.8296335 43.0158921,23.7466656 C43.0053561,23.6651805 43,23.5829271 43,23.5 C43,21.5670034 45.9101491,20 49.5,20 C51.510438,20 53.3076958,20.4914717 54.5,21.2634601 C55.6923042,20.4914717 57.489562,20 59.5,20 C63.0898509,20 66,21.5670034 66,23.5 C66,23.5829271 65.9946439,23.6651805 65.9841079,23.7466656 Z'
          id='Tongue'
          fill='#FF4F6D'
          fillRule='evenodd'
        />
      </g>
    </g>
`,HC=`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        id='Mouth/Twinkle'
        transform='translate(2.000000, 52.000000)'
        opacity='0.599999964'
        fillRule='nonzero'
        fill='#000000'>
        <path
          d='M40,16 C40,21.371763 46.1581544,25 54,25 C61.8418456,25 68,21.371763 68,16 C68,14.8954305 67.050301,14 66,14 C64.7072748,14 64.1302316,14.9051755 64,16 C62.7575758,18.9378973 59.6832595,20.7163149 54,21 C48.3167405,20.7163149 45.2424242,18.9378973 44,16 C43.8697684,14.9051755 43.2927252,14 42,14 C40.949699,14 40,14.8954305 40,16 Z'
          id='Mouth'
        />
      </g>
    </g>
`,PC=`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Mouth/Vomit' transform='translate(2.000000, 52.000000)'>
        <defs>
          <path
            d='M34.0082051,12.6020819 C35.1280248,23.0929366 38.2345159,31.9944054 53.9961505,31.9999974 C69.757785,32.0055894 72.9169073,23.0424631 73.9942614,12.5047938 C74.0809675,11.6567158 73.1738581,10.9999965 72.0369872,10.9999965 C65.3505138,10.9999965 62.6703194,12.4951994 53.9894323,12.4999966 C45.3085452,12.5047938 40.7567994,10.9999965 36.0924943,10.9999965 C34.9490269,10.9999965 33.8961688,11.5524868 34.0082051,12.6020819 Z'
            id='Vomit-path1'
          />
          <path
            d='M59.9170416,36 L60,36 C60,39.3137085 62.6862915,42 66,42 C69.3137085,42 72,39.3137085 72,36 L72,35 L72,31 C72,27.6862915 69.3137085,25 66,25 L66,25 L42,25 L42,25 C38.6862915,25 36,27.6862915 36,31 L36,31 L36,35 L36,38 C36,41.3137085 38.6862915,44 42,44 C45.3137085,44 48,41.3137085 48,38 L48,36 L48.0829584,36 C48.5590365,33.1622867 51.0270037,31 54,31 C56.9729963,31 59.4409635,33.1622867 59.9170416,36 Z'
            id='Vomit-path2'
          />
          <filter
            x='-1.4%'
            y='-2.6%'
            width='102.8%'
            height='105.3%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='-1'
              in='SourceAlpha'
              result='shadowOffsetInner1'
            />
            <feComposite
              in='shadowOffsetInner1'
              in2='SourceAlpha'
              operator='arithmetic'
              k2='-1'
              k3='1'
              result='shadowInnerInner1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0'
              type='matrix'
              in='shadowInnerInner1'
            />
          </filter>
        </defs>
        <mask id='Vomit-mask1' fill='white'>
          <use
            href='#Vomit-path1'
            transform='translate(54.000000, 21.499998) scale(1, -1) translate(-54.000000, -21.499998) '
          />
        </mask>
        <use
          id='Mouth'
          opacity='0.699999988'
          fill='#000000'
          fillRule='evenodd'
          transform='translate(54.000000, 21.499998) scale(1, -1) translate(-54.000000, -21.499998) '
          href='#Vomit-path1'
        />
        <rect
          id='Teeth'
          fill='#FFFFFF'
          fillRule='evenodd'
          mask='url("#Vomit-mask1")'
          x='39'
          y='0'
          width='31'
          height='16'
          rx='5'
        />
        <g id='Vomit-Stuff'>
          <use fill='#88C553' fillRule='evenodd' href='#Vomit-path2' />
          <use
            fill='black'
            opacity='1'
            filter='url("#filter1")'
            href='#Vomit-path2'
          />
        </g>
      </g>
    </g>
`,NC={Concerned:MC,Default:xC,Disbelief:SC,Eating:wC,Grimace:EC,Sad:FC,ScreamOpen:TC,Serious:OC,Smile:AC,Tongue:RC,Twinkle:HC,Vomit:PC},IC=`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        id='Eyes/Closed-\u{1F60C}'
        transform='translate(0.000000, 8.000000)'
        opacity='0.599999964'>
        <path
          d='M16.1601674,32.4473116 C18.006676,28.648508 22.1644225,26 26.9975803,26 C31.8136766,26 35.9591217,28.629842 37.8153518,32.4071242 C38.3667605,33.5291977 37.5821037,34.4474817 36.790607,33.7670228 C34.3395063,31.6597833 30.8587163,30.3437884 26.9975803,30.3437884 C23.2572061,30.3437884 19.8737584,31.5787519 17.4375392,33.5716412 C16.5467928,34.3002944 15.6201012,33.5583844 16.1601674,32.4473116 Z'
          id='Closed-Eye'
          transform='translate(27.000000, 30.000000) scale(1, -1) translate(-27.000000, -30.000000) '
        />
        <path
          d='M74.1601674,32.4473116 C76.006676,28.648508 80.1644225,26 84.9975803,26 C89.8136766,26 93.9591217,28.629842 95.8153518,32.4071242 C96.3667605,33.5291977 95.5821037,34.4474817 94.790607,33.7670228 C92.3395063,31.6597833 88.8587163,30.3437884 84.9975803,30.3437884 C81.2572061,30.3437884 77.8737584,31.5787519 75.4375392,33.5716412 C74.5467928,34.3002944 73.6201012,33.5583844 74.1601674,32.4473116 Z'
          id='Closed-Eye'
          transform='translate(85.000000, 30.000000) scale(1, -1) translate(-85.000000, -30.000000) '
        />
      </g>
    </g>
`,DC=`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyes/Cry-\u{1F622}' transform='translate(0.000000, 8.000000)'>
        <circle
          class='CustomColor'
          opacity='0.599999964'
          fill='#000000'
          fillRule='evenodd'
          cx='30'
          cy='22'
          r='6'
        />
        <path
          d='M25,27 C25,27 19,34.2706667 19,38.2706667 C19,41.5846667 21.686,44.2706667 25,44.2706667 C28.314,44.2706667 31,41.5846667 31,38.2706667 C31,34.2706667 25,27 25,27 Z'
          id='Drop'
          fill='#92D9FF'
          fillRule='nonzero'
        />
        <circle
          class='CustomColor'
          opacity='0.599999964'
          fill='#000000'
          fillRule='evenodd'
          cx='82'
          cy='22'
          r='6'
        />
      </g>
    </g>
`,BC=`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        class='CustomColor'
        transform='translate(0.000000, 8.000000)'
        opacity='0.599999964'>
        <circle id='Eye' cx='30' cy='22' r='6' />
        <circle id='Eye' cx='82' cy='22' r='6' />
      </g>
    </g>
`,VC=`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        class='CustomColor'
        transform='translate(0.000000, 8.000000)'
        opacity='0.599999964'
        fillRule='nonzero'>
        <path
          d='M29,25.2 L34.5,30.7 C35,31.1 35.7,31.1 36.1,30.7 L37.7,29.1 C38.1,28.6 38.1,27.9 37.7,27.5 L32.2,22 L37.7,16.5 C38.1,16 38.1,15.3 37.7,14.9 L36.1,13.3 C35.6,12.9 34.9,12.9 34.5,13.3 L29,18.8 L23.5,13.3 C23,12.9 22.3,12.9 21.9,13.3 L20.3,14.9 C19.9,15.3 19.9,16 20.3,16.5 L25.8,22 L20.3,27.5 C19.9,28 19.9,28.7 20.3,29.1 L21.9,30.7 C22.4,31.1 23.1,31.1 23.5,30.7 L29,25.2 Z'
          id='Eye'
        />
        <path
          d='M83,25.2 L88.5,30.7 C89,31.1 89.7,31.1 90.1,30.7 L91.7,29.1 C92.1,28.6 92.1,27.9 91.7,27.5 L86.2,22 L91.7,16.5 C92.1,16 92.1,15.3 91.7,14.9 L90.1,13.3 C89.6,12.9 88.9,12.9 88.5,13.3 L83,18.8 L77.5,13.3 C77,12.9 76.3,12.9 75.9,13.3 L74.3,14.9 C73.9,15.3 73.9,16 74.3,16.5 L79.8,22 L74.3,27.5 C73.9,28 73.9,28.7 74.3,29.1 L75.9,30.7 C76.4,31.1 77.1,31.1 77.5,30.7 L83,25.2 Z'
          id='Eye'
        />
      </g>
    </g>
`,WC=`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyes/Eye-Roll-\u{1F644}' transform='translate(0.000000, 8.000000)'>
        <circle id='Eyeball' fill='#FFFFFF' cx='30' cy='22' r='14' />
        <circle id='The-white-stuff' fill='#FFFFFF' cx='82' cy='22' r='14' />
        <circle
          class='CustomColor'
          opacity='0.699999988'
          fill='#000000'
          cx='30'
          cy='14'
          r='6'
        />
        <circle
          class='CustomColor'
          opacity='0.699999988'
          fill='#000000'
          cx='82'
          cy='14'
          r='6'
        />
      </g>
    </g>
`,$C=`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        id='Eyes/Happy-\u{1F601}'
        transform='translate(0.000000, 8.000000)'
        opacity='0.599999964'>
        <path
          d='M16.1601674,22.4473116 C18.006676,18.648508 22.1644225,16 26.9975803,16 C31.8136766,16 35.9591217,18.629842 37.8153518,22.4071242 C38.3667605,23.5291977 37.5821037,24.4474817 36.790607,23.7670228 C34.3395063,21.6597833 30.8587163,20.3437884 26.9975803,20.3437884 C23.2572061,20.3437884 19.8737584,21.5787519 17.4375392,23.5716412 C16.5467928,24.3002944 15.6201012,23.5583844 16.1601674,22.4473116 Z'
          id='Squint'
        />
        <path
          d='M74.1601674,22.4473116 C76.006676,18.648508 80.1644225,16 84.9975803,16 C89.8136766,16 93.9591217,18.629842 95.8153518,22.4071242 C96.3667605,23.5291977 95.5821037,24.4474817 94.790607,23.7670228 C92.3395063,21.6597833 88.8587163,20.3437884 84.9975803,20.3437884 C81.2572061,20.3437884 77.8737584,21.5787519 75.4375392,23.5716412 C74.5467928,24.3002944 73.6201012,23.5583844 74.1601674,22.4473116 Z'
          id='Squint'
        />
      </g>
    </g>
`,jC=`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        class='CustomColor'
        transform='translate(0.000000, 8.000000)'
        opacity='0.8'
        fillRule='nonzero'
        fill='#FF5353'>
        <path
          d='M35.9583333,10 C33.4074091,10 30.8837273,11.9797894 29.5,13.8206358 C28.1106364,11.9797894 25.5925909,10 23.0416667,10 C17.5523182,10 14,13.3341032 14,17.6412715 C14,23.3708668 18.4118636,26.771228 23.0416667,30.376724 C24.695,31.6133636 27.8223436,34.7777086 28.2083333,35.470905 C28.5943231,36.1641015 30.3143077,36.1885229 30.7916667,35.470905 C31.2690257,34.7532872 34.3021818,31.6133636 35.9583333,30.376724 C40.5853182,26.771228 45,23.3708668 45,17.6412715 C45,13.3341032 41.4476818,10 35.9583333,10 Z'
          id='Heart'
        />
        <path
          d='M88.9583333,10 C86.4074091,10 83.8837273,11.9797894 82.5,13.8206358 C81.1106364,11.9797894 78.5925909,10 76.0416667,10 C70.5523182,10 67,13.3341032 67,17.6412715 C67,23.3708668 71.4118636,26.771228 76.0416667,30.376724 C77.695,31.6133636 80.8223436,34.7777086 81.2083333,35.470905 C81.5943231,36.1641015 83.3143077,36.1885229 83.7916667,35.470905 C84.2690257,34.7532872 87.3021818,31.6133636 88.9583333,30.376724 C93.5853182,26.771228 98,23.3708668 98,17.6412715 C98,13.3341032 94.4476818,10 88.9583333,10 Z'
          id='Heart'
        />
      </g>
    </g>
`,UC=`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        id='Eyes/Side-\u{1F612}'
        transform='translate(0.000000, 8.000000)'
        opacity='0.599999964'>
        <path
          d='M27.2409577,20.3455337 C26.462715,21.3574913 26,22.6247092 26,24 C26,27.3137085 28.6862915,30 32,30 C35.3137085,30 38,27.3137085 38,24 C38,23.7097898 37.9793961,23.4243919 37.9395713,23.1451894 C37.9474218,22.9227843 37.9097825,22.6709538 37.8153518,22.4071242 C37.7703692,22.2814477 37.7221152,22.1572512 37.6706873,22.0345685 C37.3370199,21.0717264 36.7650456,20.2202109 36.0253277,19.550585 C33.898886,17.3173253 30.5064735,16 26.9975803,16 C22.1644225,16 18.006676,18.648508 16.1601674,22.4473116 C15.6201012,23.5583844 16.5467928,24.3002944 17.4375392,23.5716412 C19.8737584,21.5787519 23.2572061,20.3437884 26.9975803,20.3437884 C27.0788767,20.3437884 27.1600045,20.3443718 27.2409577,20.3455337 Z'
          id='Eye'
        />
        <path
          d='M85.2409577,20.3455337 C84.462715,21.3574913 84,22.6247092 84,24 C84,27.3137085 86.6862915,30 90,30 C93.3137085,30 96,27.3137085 96,24 C96,23.7097898 95.9793961,23.4243919 95.9395713,23.1451894 C95.9474218,22.9227843 95.9097825,22.6709538 95.8153518,22.4071242 C95.7703692,22.2814477 95.7221152,22.1572512 95.6706873,22.0345685 C95.3370199,21.0717264 94.7650456,20.2202109 94.0253277,19.550585 C91.898886,17.3173253 88.5064735,16 84.9975803,16 C80.1644225,16 76.006676,18.648508 74.1601674,22.4473116 C73.6201012,23.5583844 74.5467928,24.3002944 75.4375392,23.5716412 C77.8737584,21.5787519 81.2572061,20.3437884 84.9975803,20.3437884 C85.0788767,20.3437884 85.1600045,20.3443718 85.2409577,20.3455337 Z'
          id='Eye'
        />
      </g>
    </g>
`,ZC=`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyes/Squint-\u{1F60A}' transform='translate(0.000000, 8.000000)'>
        <defs>
          <path
            d='M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z'
            id='Eye1'
          />
          <path
            d='M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z'
            id='Eye2'
          />
        </defs>
        <g id='Eye' transform='translate(16.000000, 13.000000)'>
          <mask id='EyeMask1' fill='white'>
            <use href='#Eye1' />
          </mask>
          <use id='The-white-stuff' fill='#FFFFFF' href='#Eye1' />
          <circle
            class='CustomColor'
            opacity='0.699999988'
            fill='#000000'
            mask="url('#EyeMask1')"
            cx='14'
            cy='10'
            r='6'
          />
        </g>
        <g id='Eye' transform='translate(68.000000, 13.000000)'>
          <mask id='EyeMask2' fill='white'>
            <use href='#Eye2' />
          </mask>
          <use id='Eyeball-Mask' fill='#FFFFFF' href='#Eye2' />
          <circle
            class='CustomColor'
            opacity='0.699999988'
            fill='#000000'
            mask="url('#EyeMask2')"
            cx='14'
            cy='10'
            r='6'
          />
        </g>
      </g>
    </g>
`,zC=`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyes/Surprised-\u{1F633}' transform='translate(0.000000, 8.000000)'>
        <circle id='The-White-Stuff' fill='#FFFFFF' cx='30' cy='22' r='14' />
        <circle id='Eye-Ball' fill='#FFFFFF' cx='82' cy='22' r='14' />
        <circle
          class='CustomColor'
          opacity='0.699999988'
          fill='#000000'
          cx='30'
          cy='22'
          r='6'
        />
        <circle
          class='CustomColor'
          opacity='0.699999988'
          fill='#000000'
          cx='82'
          cy='22'
          r='6'
        />
      </g>
    </g>
`,GC=`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        id='Eyes/Wink-\u{1F609}'
        transform='translate(0.000000, 8.000000)'
        opacity='0.599999964'>
        <circle id='Eye' cx='30' cy='22' r='6' />
        <path
          d='M70.4123979,24.204889 C72.2589064,20.4060854 76.4166529,17.7575774 81.2498107,17.7575774 C86.065907,17.7575774 90.2113521,20.3874194 92.0675822,24.1647016 C92.618991,25.2867751 91.8343342,26.2050591 91.0428374,25.5246002 C88.5917368,23.4173607 85.1109468,22.1013658 81.2498107,22.1013658 C77.5094365,22.1013658 74.1259889,23.3363293 71.6897696,25.3292186 C70.7990233,26.0578718 69.8723316,25.3159619 70.4123979,24.204889 Z'
          id='Winky-Wink'
          transform='translate(81.252230, 21.757577) rotate(-4.000000) translate(-81.252230, -21.757577) '
        />
      </g>
    </g>
`,qC=`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyes/Wink-Wacky-\u{1F61C}' transform='translate(0.000000, 8.000000)'>
        <circle
          id='Cornea?-I-don&#39;t-know'
          fill='#FFFFFF'
          cx='82'
          cy='22'
          r='12'
        />
        <circle
          class='CustomColor'
          opacity='0.699999988'
          fill='#000000'
          cx='82'
          cy='22'
          r='6'
        />
        <path
          d='M16.1601674,25.4473116 C18.006676,21.648508 22.1644225,19 26.9975803,19 C31.8136766,19 35.9591217,21.629842 37.8153518,25.4071242 C38.3667605,26.5291977 37.5821037,27.4474817 36.790607,26.7670228 C34.3395063,24.6597833 30.8587163,23.3437884 26.9975803,23.3437884 C23.2572061,23.3437884 19.8737584,24.5787519 17.4375392,26.5716412 C16.5467928,27.3002944 15.6201012,26.5583844 16.1601674,25.4473116 Z'
          id='Winky-Doodle'
          opacity='0.599999964'
          fill='#000000'
        />
      </g>
    </g>
`,YC={Close:IC,Cry:DC,Default:BC,Dizzy:VC,EyeRoll:WC,Happy:$C,Hearts:jC,Side:UC,Squint:ZC,Surprised:zC,Wink:GC,WinkWacky:qC},KC=`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        id='Eyebrow/Outline/Angry'
        opacity='0.599999964'
        fillRule='nonzero'>
        <path
          d='M15.6114904,15.1845247 C19.8515017,9.41618792 22.4892046,9.70087612 28.9238518,14.5564693 C29.1057771,14.6937504 29.2212592,14.7812575 29.5936891,15.063789 C34.4216439,18.7263562 36.7081807,20 40,20 C41.1045695,20 42,19.1045695 42,18 C42,16.8954305 41.1045695,16 40,16 C37.9337712,16 36.0986396,14.9777974 32.011227,11.8770179 C31.6358269,11.5922331 31.5189458,11.5036659 31.3332441,11.3635351 C27.5737397,8.52660822 25.3739873,7.28738405 22.6379899,6.99208688 C18.9538127,6.59445233 15.5799484,8.47367246 12.3885096,12.8154753 C11.7343147,13.7054768 11.9254737,14.9572954 12.8154753,15.6114904 C13.7054768,16.2656853 14.9572954,16.0745263 15.6114904,15.1845247 Z'
          class='CustomColor'
        />
        <path
          d='M73.6114904,15.1845247 C77.8515017,9.41618792 80.4892046,9.70087612 86.9238518,14.5564693 C87.1057771,14.6937504 87.2212592,14.7812575 87.5936891,15.063789 C92.4216439,18.7263562 94.7081807,20 98,20 C99.1045695,20 100,19.1045695 100,18 C100,16.8954305 99.1045695,16 98,16 C95.9337712,16 94.0986396,14.9777974 90.011227,11.8770179 C89.6358269,11.5922331 89.5189458,11.5036659 89.3332441,11.3635351 C85.5737397,8.52660822 83.3739873,7.28738405 80.6379899,6.99208688 C76.9538127,6.59445233 73.5799484,8.47367246 70.3885096,12.8154753 C69.7343147,13.7054768 69.9254737,14.9572954 70.8154753,15.6114904 C71.7054768,16.2656853 72.9572954,16.0745263 73.6114904,15.1845247 Z'
          class='CustomColor'
          transform='translate(84.999934, 13.470064) scale(-1, 1) translate(-84.999934, -13.470064) '
        />
      </g>
    </g>
`,XC=`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyebrow/Natural/Angry-Natural' opacity='0.599999964'>
        <path
          d='M44.8565785,12.2282877 C44.8578785,12.2192877 44.8578785,12.2192877 44.8565785,12.2282877 M17.5862288,7.89238094 C15.2441598,8.3302947 13.0866155,9.78806858 12.1523766,12.0987479 C11.8009169,12.967391 11.3917103,14.9243181 11.7083227,15.8073302 C11.8284629,16.14295 12.0332321,16.1008692 12.9555234,16.0430509 C14.643791,15.9369937 16.9330912,13.6622369 18.7484684,13.2557982 C21.2753939,12.6899315 23.9825295,13.1148447 26.4961798,13.6882381 C30.8109365,14.6725177 36.4854008,17.7875215 40.9461842,16.1699775 C41.2783949,16.0495512 45.6210294,12.9225732 44.3685187,12.2769925 C43.9238011,11.9068186 41.1370145,12.0854053 40.6216067,11.9988489 C38.2277647,11.5971998 35.7297127,10.9345131 33.373373,10.3265657 C28.2329017,9.00016592 22.9666484,6.88073171 17.5862288,7.89238094'
          class='CustomColor'
          transform='translate(28.094701, 12.127505) rotate(17.000000) translate(-28.094701, -12.127505) '
        />
        <path
          d='M100.918293,12.2094196 C100.919593,12.2004196 100.919593,12.2004196 100.918293,12.2094196 M73.5862288,7.89238094 C71.2441598,8.3302947 69.0866155,9.78806858 68.1523766,12.0987479 C67.8009169,12.967391 67.3917103,14.9243181 67.7083227,15.8073302 C67.8284629,16.14295 68.0332321,16.1008692 68.9555234,16.0430509 C70.643791,15.9369937 72.9330912,13.6622369 74.7484684,13.2557982 C77.2753939,12.6899315 79.9825295,13.1148447 82.4961798,13.6882381 C86.8109365,14.6725177 92.4854008,17.7875215 96.9461842,16.1699775 C97.2783949,16.0495512 101.621029,12.9225732 100.368519,12.2769925 C99.9238011,11.9068186 97.1370145,12.0854053 96.6216067,11.9988489 C94.2277647,11.5971998 91.7297127,10.9345131 89.373373,10.3265657 C84.2329017,9.00016592 78.9666484,6.88073171 73.5862288,7.89238094'
          class='CustomColor'
          transform='translate(84.094701, 12.127505) scale(-1, 1) rotate(17.000000) translate(-84.094701, -12.127505) '
        />
      </g>
    </g>
`,JC=`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyebrow/Outline/Default' opacity='0.599999964'>
        <g id='I-Browse' transform='translate(12.000000, 6.000000)'>
          <path
            d='M3.63024536,11.1585767 C7.54515501,5.64986673 18.2779197,2.56083721 27.5230268,4.83118046 C28.5957248,5.0946055 29.6788665,4.43856013 29.9422916,3.36586212 C30.2057166,2.2931641 29.5496712,1.21002236 28.4769732,0.94659732 C17.7403633,-1.69001789 5.31209962,1.88699832 0.369754639,8.84142326 C-0.270109626,9.74178291 -0.0589363917,10.9903811 0.84142326,11.6302454 C1.74178291,12.2701096 2.9903811,12.0589364 3.63024536,11.1585767 Z'
            class='CustomColor'
            fillRule='nonzero'
          />
          <path
            d='M61.6302454,11.1585767 C65.545155,5.64986673 76.2779197,2.56083721 85.5230268,4.83118046 C86.5957248,5.0946055 87.6788665,4.43856013 87.9422916,3.36586212 C88.2057166,2.2931641 87.5496712,1.21002236 86.4769732,0.94659732 C75.7403633,-1.69001789 63.3120996,1.88699832 58.3697546,8.84142326 C57.7298904,9.74178291 57.9410636,10.9903811 58.8414233,11.6302454 C59.7417829,12.2701096 60.9903811,12.0589364 61.6302454,11.1585767 Z'
            class='CustomColor'
            fillRule='nonzero'
            transform='translate(73.000154, 6.039198) scale(-1, 1) translate(-73.000154, -6.039198) '
          />
        </g>
      </g>
    </g>
`,QC=`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyebrow/Natural/Default-Natural' opacity='0.599999964'>
        <path
          d='M26.0390934,6.21012364 C20.2775554,6.98346216 11.2929313,12.0052479 12.04426,17.8178111 C12.0689481,18.0080543 12.3567302,18.0673468 12.4809077,17.9084937 C14.9674041,14.7203351 34.1927973,10.0365481 41.1942673,11.0147151 C41.8350523,11.1044465 42.2580662,10.4430343 41.8210501,10.0302067 C38.0765663,6.49485426 31.2003792,5.51224825 26.0390934,6.21012364'
          class='CustomColor'
          transform='translate(27.000000, 12.000000) rotate(5.000000) translate(-27.000000, -12.000000) '
        />
        <path
          d='M85.0390934,6.21012364 C79.2775554,6.98346216 70.2929313,12.0052479 71.04426,17.8178111 C71.0689481,18.0080543 71.3567302,18.0673468 71.4809077,17.9084937 C73.9674041,14.7203351 93.1927973,10.0365481 100.194267,11.0147151 C100.835052,11.1044465 101.258066,10.4430343 100.82105,10.0302067 C97.0765663,6.49485426 90.2003792,5.51224825 85.0390934,6.21012364'
          class='CustomColor'
          transform='translate(86.000000, 12.000000) scale(-1, 1) rotate(5.000000) translate(-86.000000, -12.000000) '
        />
      </g>
    </g>
`,eg=`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyebrow/Natural/Flat-Natural' opacity='0.599999964'>
        <path
          d='M38.5686071,10.7022978 C33.5865557,11.2384494 28.6553385,11.1338998 23.6562444,11.1010606 C19.8231061,11.0762636 15.91974,10.6892291 12.3246118,12.5091287 C11.6361455,12.8572921 7.8767609,14.9449324 8.00311195,16.0108688 C8.10389896,16.8633498 12.0128479,18.0636592 12.7165939,18.2838164 C16.4280826,19.4452548 19.9241869,18.9282036 23.6870976,18.5703225 C28.3024371,18.1316834 32.9139567,18.1745756 37.5322346,17.8739956 C40.6422336,17.6719334 45.4224171,16.9769469 46.8293214,13.1484895 C47.2530382,11.9954284 46.8152171,9.73353891 46.3074622,8.50642195 C46.1050066,8.01751871 45.5634602,7.84963624 45.1688335,8.14921095 C43.7560524,9.22218432 40.9851444,10.4425994 38.5686071,10.7022978'
          class='CustomColor'
          transform='translate(27.500000, 13.500000) rotate(2.000000) translate(-27.500000, -13.500000) '
        />
        <path
          d='M95.5686071,10.7022978 C90.5865557,11.2384494 85.6553385,11.1338998 80.6562444,11.1010606 C76.8231061,11.0762636 72.91974,10.6892291 69.3246118,12.5091287 C68.6361455,12.8572921 64.8767609,14.9449324 65.003112,16.0108688 C65.103899,16.8633498 69.0128479,18.0636592 69.7165939,18.2838164 C73.4280826,19.4452548 76.9241869,18.9282036 80.6870976,18.5703225 C85.3024371,18.1316834 89.9139567,18.1745756 94.5322346,17.8739956 C97.6422336,17.6719334 102.422417,16.9769469 103.829321,13.1484895 C104.253038,11.9954284 103.815217,9.73353891 103.307462,8.50642195 C103.105007,8.01751871 102.56346,7.84963624 102.168833,8.14921095 C100.756052,9.22218432 97.9851444,10.4425994 95.5686071,10.7022978'
          class='CustomColor'
          transform='translate(84.500000, 13.500000) scale(-1, 1) rotate(2.000000) translate(-84.500000, -13.500000) '
        />
      </g>
    </g>
`,tg=`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyebrow/Natural/Frown-Natural' opacity='0.599999964'>
        <path
          d='M36.3692975,6.87618545 C34.3991755,9.78053246 30.8236346,11.5165625 27.6315757,12.5601676 C23.6890255,13.8490851 9.08080143,15.9390364 12.5196198,23.9079177 C12.572332,24.029546 12.7390347,24.0312591 12.7920764,23.9096308 C13.9448284,21.2646433 30.256648,18.7865093 31.7648785,18.2064622 C36.2101722,16.4974987 40.1579937,12.7153722 40.9269343,7.66282939 C41.2794477,5.34640965 40.2901039,1.6143049 39.3791695,0.113308759 C39.2697915,-0.0669067099 39.0052417,-0.02339461 38.9498938,0.181831751 C38.5898029,1.51323348 37.5385221,5.15317482 36.3692975,6.87618545'
          class='CustomColor'
        />
        <path
          d='M95.3692975,6.87618545 C93.3991755,9.78053246 89.8236346,11.5165625 86.6315757,12.5601676 C82.6890255,13.8490851 68.0808014,15.9390364 71.5196198,23.9079177 C71.572332,24.029546 71.7390347,24.0312591 71.7920764,23.9096308 C72.9448284,21.2646433 89.256648,18.7865093 90.7648785,18.2064622 C95.2101722,16.4974987 99.1579937,12.7153722 99.9269343,7.66282939 C100.279448,5.34640965 99.2901039,1.6143049 98.3791695,0.113308759 C98.2697915,-0.0669067099 98.0052417,-0.02339461 97.9498938,0.181831751 C97.5898029,1.51323348 96.5385221,5.15317482 95.3692975,6.87618545'
          class='CustomColor'
          transform='translate(85.500000, 12.000000) scale(-1, 1) translate(-85.500000, -12.000000) '
        />
      </g>
    </g>
`,ng=`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyebrow/Outline/Raised-Excited' opacity='0.599999964'>
        <g id='I-Browse' transform='translate(12.000000, 0.000000)'>
          <path
            d='M3.97579559,17.1279169 C5.47099148,7.60476158 18.0585488,1.10867597 27.1635167,5.30104271 C28.1668367,5.76301969 29.3546946,5.32417444 29.8166716,4.32085442 C30.2786486,3.3175344 29.8398033,2.12967649 28.8364833,1.66769952 C17.3488212,-3.62177466 1.93575948,4.3324746 0.0242044059,16.507492 C-0.147121205,17.5986938 0.598585765,18.6221744 1.68978754,18.7935 C2.78098932,18.9648257 3.80446998,18.2191187 3.97579559,17.1279169 Z'
            class='CustomColor'
            fillRule='nonzero'
          />
          <path
            d='M61.9757956,17.1279169 C63.4709915,7.60476158 76.0585488,1.10867597 85.1635167,5.30104271 C86.1668367,5.76301969 87.3546946,5.32417444 87.8166716,4.32085442 C88.2786486,3.3175344 87.8398033,2.12967649 86.8364833,1.66769952 C75.3488212,-3.62177466 59.9357595,4.3324746 58.0242044,16.507492 C57.8528788,17.5986938 58.5985858,18.6221744 59.6897875,18.7935 C60.7809893,18.9648257 61.80447,18.2191187 61.9757956,17.1279169 Z'
            class='CustomColor'
            fillRule='nonzero'
            transform='translate(73.000097, 9.410436) scale(-1, 1) translate(-73.000097, -9.410436) '
          />
        </g>
      </g>
    </g>
`,rg=`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyebrow/Natural/Raised-Excited-Natural' opacity='0.599999964'>
        <path
          d='M22.7663531,1.57844898 L23.6772984,1.17582144 C28.9190996,-0.905265751 36.8645466,-0.0328729562 41.7227321,2.29911638 C42.2897848,2.57148957 41.9021563,3.4519421 41.3211012,3.40711006 C26.4021788,2.25602197 16.3582869,11.5525942 12.9460869,17.8470939 C12.8449215,18.0337142 12.5391523,18.05489 12.4635344,17.8808353 C10.156283,12.5620676 16.9134476,3.89614725 22.7663531,1.57844898 Z'
          class='CustomColor'
        />
        <path
          d='M80.7663531,1.57844898 L81.6772984,1.17582144 C86.9190996,-0.905265751 94.8645466,-0.0328729562 99.7227321,2.29911638 C100.289785,2.57148957 99.9021563,3.4519421 99.3211012,3.40711006 C84.4021788,2.25602197 74.3582869,11.5525942 70.9460869,17.8470939 C70.8449215,18.0337142 70.5391523,18.05489 70.4635344,17.8808353 C68.156283,12.5620676 74.9134476,3.89614725 80.7663531,1.57844898 Z'
          class='CustomColor'
          transform='translate(85.000000, 9.000000) scale(-1, 1) translate(-85.000000, -9.000000) '
        />
      </g>
    </g>
`,ig=`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        id='Eyebrow/Outline/Sad-Concerned'
        opacity='0.599999964'
        fillRule='nonzero'>
        <path
          d='M15.9726042,19.4088529 C17.452356,11.0203704 30.0622688,5.22829657 39.2106453,8.9774793 C40.2254706,9.39337449 41.4016967,8.94600219 41.8378196,7.97824531 C42.2739426,7.01048842 41.8048116,5.88881678 40.7899862,5.47292159 C29.3457328,0.782843812 13.9550264,7.85221132 12.0280273,18.7760684 C11.84479,19.8148122 12.5792704,20.798534 13.6685352,20.9732726 C14.7578,21.1480113 15.7893668,20.4475967 15.9726042,19.4088529 Z'
          class='CustomColor'
          transform='translate(27.000414, 12.500000) scale(-1, -1) translate(-27.000414, -12.500000) '
        />
        <path
          d='M73.9726042,19.4088529 C75.452356,11.0203704 88.0622688,5.22829657 97.2106453,8.9774793 C98.2254706,9.39337449 99.4016967,8.94600219 99.8378196,7.97824531 C100.273943,7.01048842 99.8048116,5.88881678 98.7899862,5.47292159 C87.3457328,0.782843812 71.9550264,7.85221132 70.0280273,18.7760684 C69.84479,19.8148122 70.5792704,20.798534 71.6685352,20.9732726 C72.7578,21.1480113 73.7893668,20.4475967 73.9726042,19.4088529 Z'
          class='CustomColor'
          transform='translate(85.000414, 12.500000) scale(1, -1) translate(-85.000414, -12.500000) '
        />
      </g>
    </g>
`,sg=`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyebrow/Natural/Sad-Concerned-Natural' opacity='0.599999964'>
        <path
          d='M22.7663531,5.57844898 L23.6772984,5.17582144 C28.9190996,3.09473425 36.8645466,3.96712704 41.7227321,6.29911638 C42.2897848,6.57148957 41.9021563,7.4519421 41.3211012,7.40711006 C26.4021788,6.25602197 16.3582869,15.5525942 12.9460869,21.8470939 C12.8449215,22.0337142 12.5391523,22.05489 12.4635344,21.8808353 C10.156283,16.5620676 16.9134476,7.89614725 22.7663531,5.57844898 Z'
          class='CustomColor'
          transform='translate(27.000000, 13.000000) scale(-1, -1) translate(-27.000000, -13.000000) '
        />
        <path
          d='M80.7663531,5.57844898 L81.6772984,5.17582144 C86.9190996,3.09473425 94.8645466,3.96712704 99.7227321,6.29911638 C100.289785,6.57148957 99.9021563,7.4519421 99.3211012,7.40711006 C84.4021788,6.25602197 74.3582869,15.5525942 70.9460869,21.8470939 C70.8449215,22.0337142 70.5391523,22.05489 70.4635344,21.8808353 C68.156283,16.5620676 74.9134476,7.89614725 80.7663531,5.57844898 Z'
          class='CustomColor'
          transform='translate(85.000000, 13.000000) scale(1, -1) translate(-85.000000, -13.000000) '
        />
      </g>
    </g>
`,ag=`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyebrow/Natural/Unibrow-Natural' opacity='0.599999964'>
        <path
          d='M57.000525,12 C56.999825,11.9961 56.999825,11.9961 57.000525,12 M59.4596631,14.892451 C61.3120123,16.058698 64.1131185,16.7894891 65.7030886,17.0505179 C71.9486685,18.0766191 78.0153663,15.945512 84.1715051,15.0153209 C89.636055,14.1895424 95.8563653,13.4967455 100.86041,16.507708 C100.987756,16.584232 101.997542,17.2147893 102.524546,17.7511372 C102.91024,18.1443003 103.563259,18.0619945 103.822605,17.5722412 C105.241692,14.8939029 97.7243204,8.76008291 96.2812935,8.14993193 C89.7471082,5.39200867 81.0899445,8.32440654 74.4284137,9.38927986 C70.6888462,9.98718701 66.9279989,10.3803501 63.2409655,11.2908151 C61.9188284,11.6171635 60.6278928,12.2066818 59.3382119,12.3724317 C59.1848981,12.1429782 58.9889964,12 58.7633758,12 C57.5922879,12 55.8451696,15.4574504 58.0750241,15.6547468 C58.7728345,15.7164887 59.215997,15.3816732 59.4596631,14.892451 Z'
          class='CustomColor'
          transform='translate(80.500000, 12.500000) rotate(-2.000000) translate(-80.500000, -12.500000) '
        />
        <path
          d='M54.999475,12 C55.000175,11.9961 55.000175,11.9961 54.999475,12 M15.7187065,8.14993193 C22.2528918,5.39200867 30.9100555,8.32440654 37.5715863,9.38927986 C41.3111538,9.98718701 45.0720011,10.3803501 48.7590345,11.2908151 C50.2416282,11.6567696 51.6849876,12.3536477 53.1313394,12.4128263 C53.8325707,12.4413952 54.2674737,13.2763566 53.8149484,13.8242681 C52.3320222,15.6179895 48.3271239,16.7172136 46.2969114,17.0505179 C40.0513315,18.0766191 33.9846337,15.945512 27.8284949,15.0153209 C22.363945,14.1895424 16.1436347,13.4967455 11.1395899,16.507708 C11.0122444,16.584232 10.0024581,17.2147893 9.47545402,17.7511372 C9.0897602,18.1443003 8.43674067,18.0619945 8.17739482,17.5722412 C6.75830756,14.8939029 14.2756796,8.76008291 15.7187065,8.14993193 Z M54.9339874,11 C56.1050753,11 57.8521936,15.4015737 55.6223391,15.6527457 C53.3924847,15.9039176 53.7628995,11 54.9339874,11 Z'
          class='CustomColor'
          transform='translate(32.348682, 12.500000) rotate(2.000000) translate(-32.348682, -12.500000) '
        />
      </g>
    </g>
`,og=`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        id='Eyebrow/Outline/Up-Down'
        opacity='0.599999964'
        fillRule='nonzero'>
        <path
          d='M15.5914402,14.1619718 C20.0874642,7.83556966 29.6031809,4.65350252 39.3473715,7.79575991 C40.3986323,8.13476518 41.5256656,7.55736801 41.8646708,6.50610724 C42.2036761,5.45484647 41.6262789,4.32781316 40.5750182,3.98880789 C29.1665516,0.309863172 17.8358054,4.09887835 12.3309495,11.8448183 C11.6910852,12.7451779 11.9022584,13.9937761 12.8026181,14.6336404 C13.7029777,15.2735046 14.9515759,15.0623314 15.5914402,14.1619718 Z'
          class='CustomColor'
        />
        <path
          d='M73.6376405,21.1577995 C77.5525501,15.6490895 88.2853148,12.56006 97.5304219,14.8304032 C98.6031199,15.0938282 99.6862617,14.4377829 99.9496867,13.3650849 C100.213112,12.2923868 99.5570664,11.2092451 98.4843684,10.9458201 C87.7477584,8.30920485 75.3194947,11.8862211 70.3771498,18.840646 C69.7372855,19.7410057 69.9484587,20.9896038 70.8488184,21.6294681 C71.749178,22.2693324 72.9977762,22.0581591 73.6376405,21.1577995 Z'
          class='CustomColor'
          transform='translate(85.007549, 16.038421) scale(-1, 1) translate(-85.007549, -16.038421) '
        />
      </g>
    </g>
`,lg=`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyebrow/Natural/Up-Down-Natural' opacity='0.599999964'>
        <path
          d='M22.7663531,1.57844898 L23.6772984,1.17582144 C28.9190996,-0.905265751 36.8645466,-0.0328729562 41.7227321,2.29911638 C42.2897848,2.57148957 41.9021563,3.4519421 41.3211012,3.40711006 C26.4021788,2.25602197 16.3582869,11.5525942 12.9460869,17.8470939 C12.8449215,18.0337142 12.5391523,18.05489 12.4635344,17.8808353 C10.156283,12.5620676 16.9134476,3.89614725 22.7663531,1.57844898 Z'
          class='CustomColor'
        />
        <path
          d='M86.535177,12.0246305 C92.3421916,12.2928751 101.730304,16.5124899 101.488432,22.3684172 C101.480419,22.5600881 101.1989,22.6442368 101.06135,22.496811 C98.306449,19.5374968 78.7459953,16.5471364 71.8564209,18.1317995 C71.2258949,18.2770375 70.7468448,17.6550104 71.1462176,17.2056651 C74.5683263,13.3574126 81.3327077,11.7792465 86.535177,12.0246305 Z'
          class='CustomColor'
          transform='translate(86.246508, 17.285912) rotate(5.000000) translate(-86.246508, -17.285912) '
        />
      </g>
    </g>
`,cg={Angry:KC,AngryNatural:XC,Default:JC,DefaultNatural:QC,FlatNatural:eg,FrownNatural:tg,RaisedExcited:ng,RaisedExcitedNatural:rg,SadConcerned:ig,SadConcernedNatural:sg,UnibrowNatural:ag,UpDown:og,UpDownNatural:lg},ug=`
      <g
        id='Clothing/Blazer-+-Shirt'
        transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
            d='M133.960472,0.294916112 C170.936473,3.32499816 200,34.2942856 200,72.0517235 L200,81 L0,81 L0,72.0517235 C1.22536245e-14,33.9525631 29.591985,2.76498122 67.0454063,0.219526408 C67.0152598,0.593114549 67,0.969227185 67,1.34762511 C67,13.2107177 81.9984609,22.8276544 100.5,22.8276544 C119.001539,22.8276544 134,13.2107177 134,1.34762511 C134,0.994669088 133.986723,0.64370138 133.960472,0.294916112 Z'
            id="BlazerShirt-path1"
          />
        </defs>
        <g id='Shirt' transform='translate(32.000000, 29.000000)'>
          <mask id='BlazerShirt-mask1' fill='white'>
            <use href='#BlazerShirt-path1' />
          </mask>
          <use class='CustomColor' fill='#E6E6E6' href='#BlazerShirt-path1' />
          <g id='Color/Palette/Black' mask='url("#BlazerShirt-mask1")' fill='#262E33'>
            <g transform='translate(-32.000000, -29.000000)' id='\u{1F58D}Color'>
              <rect x='0' y='0' width='264' height='110' />
            </g>
          </g>
          <g
            id='Shadowy'
            opacity='0.16'
            mask='url("#BlazerShirt-mask1")'
            fill='#000000'>
            <g transform='translate(60.000000, -25.000000)' id='Hola-\u{1F44B}\u{1F3FC}'>
              <ellipse
                cx='40.5'
                cy='27.8476251'
                rx='39.6351047'
                ry='26.9138272'
              />
            </g>
          </g>
        </g>
        <g id='Blazer' transform='translate(32.000000, 28.000000)'>
          <path
            d='M68.784807,1.12222847 C30.512317,2.80409739 -1.89486556e-14,34.3646437 -1.42108547e-14,73.0517235 L0,73.0517235 L0,82 L69.3616767,82 C65.9607412,69.9199941 64,55.7087296 64,40.5 C64,26.1729736 65.7399891,12.7311115 68.784807,1.12222847 Z M131.638323,82 L200,82 L200,73.0517235 C200,34.7067641 170.024954,3.36285166 132.228719,1.17384225 C135.265163,12.7709464 137,26.1942016 137,40.5 C137,55.7087296 135.039259,69.9199941 131.638323,82 Z'
            id='Saco'
            fill='#3A4C5A'
          />
          <path
            d='M149,58 L158.555853,50.83311 L158.555853,50.83311 C159.998897,49.7508275 161.987779,49.7682725 163.411616,50.8757011 L170,56 L149,58 Z'
            id='Pocket-hanky'
            fill='#E6E6E6'
          />
          <path
            d='M69,1.13686838e-13 C65,19.3333333 66.6666667,46.6666667 74,82 L58,82 L44,46 L50,37 L44,31 L63,1 C65.027659,0.369238637 67.027659,0.0359053037 69,1.13686838e-13 Z'
            id='Wing'
            fill='#2F4351'
          />
          <path
            d='M151,1.13686838e-13 C147,19.3333333 148.666667,46.6666667 156,82 L140,82 L126,46 L132,37 L126,31 L145,1 C147.027659,0.369238637 149.027659,0.0359053037 151,1.13686838e-13 Z'
            id='Wing'
            fill='#2F4351'
            transform='translate(141.000000, 41.000000) scale(-1, 1) translate(-141.000000, -41.000000) '
          />
        </g>
      </g>
`,fg=`
      <g
        id='Clothing/Blazer-+-Sweater'
        transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
            d='M105.192402,29.0517235 L104,29.0517235 L104,29.0517235 C64.235498,29.0517235 32,61.2872215 32,101.051724 L32,110 L232,110 L232,101.051724 C232,61.2872215 199.764502,29.0517235 160,29.0517235 L160,29.0517235 L158.807598,29.0517235 C158.934638,30.0353144 159,31.0364513 159,32.0517235 C159,45.8588423 146.911688,57.0517235 132,57.0517235 C117.088312,57.0517235 105,45.8588423 105,32.0517235 C105,31.0364513 105.065362,30.0353144 105.192402,29.0517235 Z'
            id='BlazerSweater-path1'
          />
        </defs>
        <mask id='BlazerSweater-mask1' fill='white'>
          <use href='#BlazerSweater-path1' />
        </mask>
        <use
          class='CustomColor'
          fill='#E6E6E6'
          fillRule='evenodd'
          href='#BlazerSweater-path1'
        />
        <g
          id='Color/Palette/Black'
          mask='url("#BlazerSweater-mask1")'
          fillRule='evenodd'
          fill='#262E33'>
          <rect id='\u{1F58D}Color' x='0' y='0' width='264' height='110' />
        </g>
        <g
          id='Blazer'
          strokeWidth='1'
          fillRule='evenodd'
          transform='translate(32.000000, 28.000000)'>
          <path
            d='M68.784807,1.12222847 C30.512317,2.80409739 1.24427139e-14,34.3646437 0,73.0517235 L0,82 L69.3616767,82 C65.9607412,69.9199941 64,55.7087296 64,40.5 C64,26.1729736 65.7399891,12.7311115 68.784807,1.12222847 Z M131.638323,82 L200,82 L200,73.0517235 C200,34.7067641 170.024954,3.36285166 132.228719,1.17384225 C135.265163,12.7709464 137,26.1942016 137,40.5 C137,55.7087296 135.039259,69.9199941 131.638323,82 Z'
            id='Saco'
            fill='#3A4C5A'
          />
          <path
            d='M149,58 L158.555853,50.83311 L158.555853,50.83311 C159.998897,49.7508275 161.987779,49.7682725 163.411616,50.8757011 L170,56 L149,58 Z'
            id='Pocket-hanky'
            fill='#E6E6E6'
          />
          <path
            d='M69,1.13686838e-13 C65,19.3333333 66.6666667,46.6666667 74,82 L58,82 L44,46 L50,37 L44,31 L63,1 C65.027659,0.369238637 67.027659,0.0359053037 69,1.13686838e-13 Z'
            id='Wing'
            fill='#2F4351'
          />
          <path
            d='M151,1.13686838e-13 C147,19.3333333 148.666667,46.6666667 156,82 L140,82 L126,46 L132,37 L126,31 L145,1 C147.027659,0.369238637 149.027659,0.0359053037 151,1.13686838e-13 Z'
            id='Wing'
            fill='#2F4351'
            transform='translate(141.000000, 41.000000) scale(-1, 1) translate(-141.000000, -41.000000) '
          />
        </g>
        <path
          d='M156,21.5390062 C162.772319,26.1359565 167,32.6563196 167,39.8878801 C167,47.2887711 162.572015,53.9447688 155.520105,58.5564942 L149.57933,53.8764929 L145,54.207887 L146,51.0567821 L145.922229,50.995516 C152.022491,47.8530505 156,42.7003578 156,36.8768102 L156,21.5390062 Z M108,21.5390062 C101.227681,26.1359565 97,32.6563196 97,39.8878801 C97,47.2887711 101.427985,53.9447688 108.479895,58.5564942 L114.42067,53.8764929 L119,54.207887 L118,51.0567821 L118.077771,50.995516 C111.977509,47.8530505 108,42.7003578 108,36.8768102 L108,21.5390062 Z'
          id='Collar'
          fill='#F2F2F2'
          fillRule='evenodd'
        />
      </g>
`,dg=`
      <g
        id='Clothing/Collar-+-Sweater'
        transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
            d='M105.192402,29.0517235 L104,29.0517235 L104,29.0517235 C64.235498,29.0517235 32,61.2872215 32,101.051724 L32,110 L232,110 L232,101.051724 C232,61.2872215 199.764502,29.0517235 160,29.0517235 L160,29.0517235 L158.807598,29.0517235 C158.934638,30.0353144 159,31.0364513 159,32.0517235 C159,45.8588423 146.911688,57.0517235 132,57.0517235 C117.088312,57.0517235 105,45.8588423 105,32.0517235 C105,31.0364513 105.065362,30.0353144 105.192402,29.0517235 Z'
            id='CollarSweater-path1'
          />
        </defs>
        <mask id='CollarSweater-mask1' fill='white'>
          <use href='#CollarSweater-path1' />
        </mask>
        <use
          class='CustomColor'
          fill="var(--avataaar-shirt-color)"
          href='#CollarSweater-path1'
        />
        <path
          d='M156,22.2794906 C162.181647,26.8351858 166,33.1057265 166,40.027915 C166,47.2334941 161.862605,53.7329769 155.228997,58.3271669 L149.57933,53.8764929 L145,54.207887 L146,51.0567821 L145.922229,50.995516 C152.022491,47.8530505 156,42.7003578 156,36.8768102 L156,22.2794906 Z M108,21.5714994 C101.232748,26.1740081 97,32.7397769 97,40.027915 C97,47.4261549 101.361602,54.080035 108.308428,58.6915723 L114.42067,53.8764929 L119,54.207887 L118,51.0567821 L118.077771,50.995516 C111.977509,47.8530505 108,42.7003578 108,36.8768102 L108,21.5714994 Z'
          id='Collar'
          fill='#F2F2F2'
          fillRule='evenodd'
        />
      </g>
`,hg=`
      <g
        id='Clothing/Graphic-Shirt'
        transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
            d='M165.624032,29.2681342 C202.760022,32.1373245 232,63.1798426 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.8348009 61.7752018,31.5722494 99.3929298,29.1967444 C99.1342224,30.2735458 99,31.3767131 99,32.5 C99,44.3741221 113.998461,54 132.5,54 C151.001539,54 166,44.3741221 166,32.5 C166,31.4015235 165.871641,30.3222877 165.624025,29.2681336 Z'
            id='GraphicShirt-path1'
          />
        </defs>
        <mask id='GraphicShirt-mask1' fill='white'>
          <use href='#GraphicShirt-path1' />
        </mask>
        <use
          class='CustomColor'
          fill='#E6E6E6'
          fillRule='evenodd'
          href='#GraphicShirt-path1'
        />
      </g>
`,Cg=`
      <g id='Clothing/Hoodie' transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
            d='M108,13.0708856 C90.0813006,15.075938 76.2798424,20.5518341 76.004203,34.6449676 C50.1464329,45.5680933 32,71.1646257 32,100.999485 L32,100.999485 L32,110 L232,110 L232,100.999485 C232,71.1646257 213.853567,45.5680933 187.995797,34.6449832 C187.720158,20.5518341 173.918699,15.075938 156,13.0708856 L156,32 L156,32 C156,45.254834 145.254834,56 132,56 L132,56 C118.745166,56 108,45.254834 108,32 L108,13.0708856 Z'
            id='Hoodie-path1'
          />
        </defs>
        <mask id='Hoodie-mask1' fill='white'>
          <use href='#Hoodie-path1' />
        </mask>
        <use
          class='CustomColor'
          fill="var(--avataaar-shirt-color)"
          fillRule='evenodd'
          href='#Hoodie-path1'
        />
        <path
          d='M102,61.7390531 L102,110 L95,110 L95,58.1502625 C97.2037542,59.4600576 99.5467694,60.6607878 102,61.7390531 Z M169,58.1502625 L169,98.5 C169,100.432997 167.432997,102 165.5,102 C163.567003,102 162,100.432997 162,98.5 L162,61.7390531 C164.453231,60.6607878 166.796246,59.4600576 169,58.1502625 Z'
          id='Straps'
          fill='#F4F4F4'
          fillRule='evenodd'
          mask='url("#Hoodie-mask1")'
        />
        <path
          d='M90.9601329,12.7243537 C75.9093095,15.5711782 65.5,21.2428847 65.5,32.3076923 C65.5,52.0200095 98.5376807,68 132,68 C165.462319,68 198.5,52.0200095 198.5,32.3076923 C198.5,21.2428847 188.09069,15.5711782 173.039867,12.7243537 C182.124921,16.0744598 188,21.7060546 188,31.0769231 C188,51.4689754 160.178795,68 132,68 C103.821205,68 76,51.4689754 76,31.0769231 C76,21.7060546 81.8750795,16.0744598 90.9601329,12.7243537 Z'
          id='Shadow'
          opacity='0.16'
          fill='#000000'
          fillRule='evenodd'
          mask='url("#Hoodie-mask1")'
        />
      </g>
`,gg=`
      <g id='Clothing/Overall' transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
            d='M94,29.6883435 L94,74 L170,74 L170,29.6883435 C179.362956,30.9893126 188.149952,34.0907916 196.00002,38.6318143 L196,110 L187,110 L77,110 L68,110 L68,38.6318027 C75.8500482,34.0907916 84.6370437,30.9893126 94,29.6883435 Z'
            id='Overall-path1'
          />
        </defs>
        <mask id='Overall-mask1' fill='white'>
          <use href='#Overall-path1' />
        </mask>
        <use
          class='CustomColor'
          fill="var(--avataaar-shirt-color)"
          href='#Overall-path1'
        />
        <circle
          id='Button'
          fill='#F4F4F4'
          fillRule='evenodd'
          cx='81'
          cy='83'
          r='5'
        />
        <circle
          id='Button'
          fill='#F4F4F4'
          fillRule='evenodd'
          cx='183'
          cy='83'
          r='5'
        />
      </g>
`,mg=`
      <g
        id='Clothing/Shirt-Crew-Neck'
        transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
            d='M165.960472,29.2949161 C202.936473,32.3249982 232,63.2942856 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.9525631 61.591985,31.7649812 99.0454063,29.2195264 C99.0152598,29.5931145 99,29.9692272 99,30.3476251 C99,42.2107177 113.998461,51.8276544 132.5,51.8276544 C151.001539,51.8276544 166,42.2107177 166,30.3476251 C166,29.9946691 165.986723,29.6437014 165.960472,29.2949161 Z'
            id='ShirtCrewNeck-path1'
          />
        </defs>
        <mask id='ShirtCrewNeck-mask1' fill='white'>
          <use href='#ShirtCrewNeck-path1' />
        </mask>
        <use
          class='CustomColor'
          fill="var(--avataaar-shirt-color)"
          href='#ShirtCrewNeck-path1'
        />
        <g
          id='Shadowy'
          opacity='0.16'
          strokeWidth='1'
          fillRule='evenodd'
          mask='url("#ShirtCrewNeck-mask1")'
          fill='#000000'>
          <g transform='translate(92.000000, 4.000000)' id='Hola-\u{1F44B}\u{1F3FC}'>
            <ellipse
              cx='40.5'
              cy='27.8476251'
              rx='39.6351047'
              ry='26.9138272'
            />
          </g>
        </g>
      </g>
`,pg=`
      <g
        id='Clothing/Shirt-Scoop-Neck'
        transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
            d='M181.544255,32.3304167 C210.784209,41.4878872 232,68.7921987 232,101.051724 L232,110 L32,110 L32,101.051724 C32,68.3969699 53.7388273,40.8195914 83.5340368,32.0020332 C83.182234,33.4201865 83,34.8712315 83,36.3476251 C83,52.6289957 105.161905,65.8276544 132.5,65.8276544 C159.838095,65.8276544 182,52.6289957 182,36.3476251 C182,34.9849859 181.844766,33.6439396 181.544255,32.3304167 Z'
            id='ShirtScoopNeck-path1'
          />
        </defs>
        <mask id='ShirtScoopNeck-mask1' fill='white'>
          <use href='#ShirtScoopNeck-path1' />
        </mask>
        <use
          class='CustomColor'
          fill="var(--avataaar-shirt-color)"
          href='#ShirtScoopNeck-path1'
        />
      </g>
`,bg=`
      <g id='Clothing/Shirt-V-Neck' transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
            d='M171.319631,29.9364358 C205.706337,35.3665707 232,65.13854 232,101.051724 L232,110 L32,110 L32,101.051724 C32,65.1380521 58.2943778,35.3657617 92.6817711,29.9362145 C93.5835973,35.0053598 96.116393,39.8238432 100.236125,43.5389794 L100.236125,43.5389794 L129.321203,69.7676333 C130.843316,71.1402598 133.156684,71.1402598 134.678797,69.7676333 L134.678797,69.7676333 L163.763875,43.5389794 C164.189462,43.1551884 164.601167,42.7562772 164.998197,42.3430127 C168.414164,38.7873666 170.517305,34.4520434 171.319628,29.9364354 Z'
            id='ShirtVNeck-path1'
          />
        </defs>
        <mask id='ShirtVNeck-mask1' fill='white'>
          <use href='#ShirtVNeck-path1' />
        </mask>
        <use
          class='CustomColor'
          fill="var(--avataaar-shirt-color)"
          href='#ShirtVNeck-path1'
        />
      </g>
`,yg={BlazerShirt:ug,BlazerSweater:fg,CollarSweater:dg,GraphicShirt:hg,Hoodie:Cg,Overall:gg,ShirtCrewNeck:mg,ShirtScoopNeck:pg,ShirtVNeck:bg},_g=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='Eyepatch-path1' x='0' y='0' width='264' height='280' />
        </defs>
        <mask id='Eyepatch-mask1' fill='white'>
          <use href='#Eyepatch-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Accesories/Eyepatch' mask='url("#Eyepatch-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <path
              d='M160.395307,39.7810237 C157.318088,36.6927979 154.11865,43.6386608 152.623361,45.4281124 C149.013122,49.7486528 145.540256,54.182935 141.868413,58.4518947 C134.616309,66.8823544 127.439316,75.3743141 120.233991,83.8401528 C119.140279,85.1257012 119.27271,85.2649028 117.837048,85.3885641 C116.88598,85.4708947 115.563312,84.9802173 114.5737,84.9256608 C111.823607,84.774556 109.112057,85.2348141 106.435756,85.8227012 C101.091389,86.9961608 95.4264863,88.9291124 90.7890799,91.898306 C89.5718308,92.677306 88.7874545,93.5971608 87.4670933,93.841177 C86.3183659,94.0534512 84.794416,93.6295641 83.622299,93.5194592 C81.5412806,93.3237173 78.5378542,92.4726366 76.4953793,92.9137173 C73.9027538,93.4738302 72.9174244,96.6109915 75.5604528,98.0003624 C77.570314,99.0564431 81.5706,98.4761608 83.8235816,98.6447899 C86.3971,98.8372253 85.6120649,98.704306 85.2473843,101.164306 C84.7239177,104.69758 85.5985582,108.646475 87.0885766,111.878201 C90.5482655,119.383185 100.122861,127.335201 108.8551,126.603153 C116.142123,125.992451 122.526834,119.413274 125.519389,113.099935 C127.050916,109.868871 127.954546,106.192096 128.250376,102.628403 C128.438811,100.36183 128.333722,97.9580399 127.684083,95.7632173 C127.362888,94.6783705 126.853916,93.5554995 126.308378,92.5695157 C125.866281,91.7710076 123.908799,89.9203866 123.788886,89.1165882 C123.556307,87.5602415 127.973324,83.3874995 128.816339,82.3443141 C132.788953,77.4276205 136.780344,72.5320882 140.721662,67.5889431 C144.603353,62.7201931 148.506456,57.8640076 152.489612,53.0785802 C154.294237,50.9098786 163.318023,42.7148382 160.395307,39.7810237'
              class='CustomColor'
              fill='#28354B'
              fillRule='evenodd'
            />
          </g>
        </g>
      </g>
`,Lg=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='Hat-path2' x='0' y='0' width='264' height='280' />
          <path
            d='M156,180.610951 C173.530782,172.282984 186.048193,155.114792 187.791419,134.867187 C193.569129,134.002364 198,129.018625 198,123 L198,110 C198,104.054007 193.675427,99.1180731 188,98.1659169 L188,92 C188,84.0546578 186.345324,76.495786 183.361772,69.6491845 C173.434911,53 89.3126235,53.8033992 80.7098777,69.4854816 C77.6811789,76.3752214 76,83.9912805 76,92 L76,98.1659169 C70.3245733,99.1180731 66,104.054007 66,110 L66,123 C66,129.018625 70.4308707,134.002364 76.2085808,134.867187 C77.9518066,155.114792 90.4692178,172.282984 108,180.610951 L108,199 L104,199 L104,199 C64.235498,199 32,231.235498 32,271 L32,280 L232,280 L232,271 C232,231.235498 199.764502,199 160,199 L156,199 L156,180.610951 Z M0,5.68434189e-14 L264,5.68434189e-14 L264,280 L0,280 L0,5.68434189e-14 Z'
            id='Hat-path1'
          />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <mask id='Hat-mask1' fill='white'>
          <use href='#Hat-path2' />
        </mask>
        <g id='Mask' />
        <g id='Top/Accesories/Hat' mask='url("#Hat-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hat'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(1.000000, 0.000000)'>
              <mask id='Hat-mask2' fill='white'>
                <use href='#Hat-path1' />
              </mask>
              <g id='Mask-Hair' />
              <path
                d='M123.182388,2 L141.817612,2 L141.817612,2 C160.609055,2 176.866947,15.0804442 180.890118,33.4361631 L190,75 L75,75 L84.1098821,33.4361631 L84.1098821,33.4361631 C88.1330533,15.0804442 104.390945,2 123.182388,2 Z'
                fill='var(--avataaar-hat-color)'
                style="fill-opacity:0.6"
                mask='url("#Hat-mask2")'
              />
              <ellipse
                id='Hipster'
                fill='var(--avataaar-hat-color)'
                mask='url("#Hat-mask2")'
                cx='132'
                cy='87.5'
                rx='122'
                ry='57.5'
              >
              </ellipse>
              <ellipse
                id='Hipster'
                style="fill-opacity:0.1"
                fill='#2e2e2e'
                mask='url("#Hat-mask2")'
                cx='132'
                cy='87.5'
                rx='122'
                ry='57.5'
              >
              </ellipse>
              <ellipse
                id='Very'
                fill='var(--avataaar-hat-color)'
                mask='url("#Hat-mask2")'
                cx='132'
                cy='82'
                rx='62'
                ry='25'
              />
              <ellipse
                id='Very'
                style="fill-opacity:0.5"
                fill='#2e2e2e'
                mask='url("#Hat-mask2")'
                cx='132'
                cy='82'
                rx='62'
                ry='25'
              />
            </g>
          </g>
        </g>
      </g>
`,kg=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='Hijab-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M66.0421575,77.0749852 C71.6795257,45.2058307 99.5129755,21 133,21 L133,21 L133,21 C170.555363,21 201,51.444637 201,89 L201,119.751022 C201.875211,129.554379 202.693946,136.422143 203.456205,140.354314 C204.833317,147.458254 209.150269,145.115419 209.150269,155.220201 C209.150269,165.324983 204.822005,168.720206 204.803237,177.705482 C204.784469,186.690758 220.200444,193.836185 220.200444,205.242606 C220.200444,216.649027 213.126079,270.475928 142.577598,270.475928 C127.507235,270.475928 114.670509,266.188589 104.06742,257.613911 C104.750275,264.103957 105.394468,271.565987 106,280 L59,280 C59.9324304,256.228591 51.7156549,242.936205 51.7156549,216.44564 C51.7156549,189.955074 65.3525844,151.427541 65,142 C65.019981,141.417741 65.0406721,140.728417 65.0620734,139.932027 C65.0208303,138.959828 65,137.982347 65,137 L65,89 L65,89 C65,85.0240875 65.3412247,81.1278723 65.9959868,77.3390417 C65.9973236,77.2261704 65.9986613,77.1131564 66,77 C66.0140661,77.0249783 66.0281186,77.0499734 66.0421575,77.0749852 Z M132.5,53 L132.5,53 C102.400481,53 78,77.4004811 78,107.5 L78,107.5 L78,130.5 C78,160.599519 102.400481,185 132.5,185 L133.5,185 C163.599519,185 188,160.599519 188,130.5 L188,107.5 C188,77.4004811 163.599519,53 133.5,53 L133.5,53 L132.5,53 Z'
            id='Hijab-path2'
          />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <mask id='Hijab-mask1' fill='white'>
          <use href='#Hijab-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Accesories/Hijab' mask='url("#Hijab-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <mask id='Hijab-mask2' fill='white'>
              <use href='#Hijab-path2' />
            </mask>
            <use
              class='CustomColor'
              stroke='none'
              fill='var(--avataaar-hat-color)'
              fillRule='evenodd'
              href='#Hijab-path2'
            />
            <path
              d='M72.0744416,104.959767 C71.3690172,101.246903 71,97.4161983 71,93.5 C71,59.5344879 98.7583455,32 133,32 C167.241654,32 195,59.5344879 195,93.5 C195,97.4161983 194.630983,101.246903 193.925558,104.959767 C192.341315,72.6827942 165.669927,47 133,47 C100.330073,47 73.6586845,72.6827942 72.0744428,104.959774 Z'
              id='Band'
              stroke='none'
              opacity='0.5'
              fill='#FFFFFF'
              fillRule='evenodd'
              mask='url("#Hijab-mask2")'
            />
            <path
              d='M187.929085,104.69543 C188.631457,108.187732 189,111.800827 189,115.5 L189,138.5 C189,168.599519 164.599519,193 134.5,193 L131.5,193 C101.400481,193 77,168.599519 77,138.5 L77,115.5 L77,115.5 C77,111.800827 77.3685433,108.187732 78.0709154,104.69543 C78.0238287,105.624341 78,106.559388 78,107.5 L78,107.5 L78,130.5 C78,160.599519 102.400481,185 132.5,185 L133.5,185 C163.599519,185 188,160.599519 188,130.5 L188,130.5 L188,107.5 C188,106.559388 187.976171,105.624341 187.929085,104.69543 Z M114.16682,206.995462 C120.651206,211.981028 135.663493,213.708321 152.404574,210.756416 C169.145655,207.804512 182.661822,201.046883 187.049987,194.144193 C187.118291,194.396526 187.175421,194.652296 187.221114,194.911435 C188.930607,204.606451 173.985409,215.345413 153.84008,218.897578 C133.694752,222.449742 115.977919,217.469978 114.268426,207.774963 C114.222732,207.515823 114.188938,207.255938 114.166824,206.995464 Z M126.034638,235.921439 C134.227056,241.574977 150.421729,241.843835 167.103682,235.772101 C183.785635,229.700366 196.018656,219.084674 198.660388,209.487828 C198.803116,209.80837 198.935124,210.134883 199.056117,210.46731 C203.582768,222.904181 190.979008,238.909268 170.904831,246.215671 C150.830654,253.522074 130.887742,249.363007 126.361091,236.926135 C126.240098,236.593709 126.131343,236.258733 126.034643,235.921442 Z'
              id='Shadows'
              stroke='none'
              fill='#000000'
              fillRule='evenodd'
              opacity='0.16'
              mask='url("#Hijab-mask2")'
            />
          </g>
        </g>
      </g>
`,vg=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairBigHair-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M222.384814,182.806274 C217.011239,188.518122 211.648364,192.127879 211.831204,198 C212.148076,209.888877 255.439069,245.051165 216.999964,267.00001 L16.0053198,267 C-22.4337677,245.051165 20.8572256,209.888877 21.1740982,198 C21.3569373,192.127879 15.9940628,188.518122 10.6204878,182.806274 C5.24691269,177.094426 -0.137362978,169.280486 0.00267373922,155 C0.944497502,125.971596 31.3716806,128.588232 31.2026676,109 C31.3716806,89.9992744 19.8139454,82.1607482 31.2026676,46 C42.8395963,9.53932757 72.9165934,0.768171773 116.002651,0.0159928999 L116.002651,0 C116.16951,0.002426813 116.336177,0.0049705256 116.502651,0.0076322645 C116.669125,0.0049705256 116.835791,0.002426813 117.002651,0 L117.002651,0.0159928999 C160.088708,0.768171773 190.165705,9.53932757 201.802634,46 C213.191356,82.1607482 201.633621,89.9992744 201.802634,109 C201.633621,128.588232 232.060804,125.971596 233.002628,155 C233.142665,169.280486 227.758389,177.094426 222.384814,182.806274 Z M182.884023,95.3249541 C161.364085,83.7373848 142.890027,67.1442914 130.845581,48.302359 C112.763849,73.9237118 76.5299076,78.5347548 51.2240944,94.679971 C51.0770557,95.4306015 51,96.2063021 51,97 L51,110 C51,116.018625 55.4308707,121.002364 61.2085808,121.867187 C62.9518066,142.114792 75.4692178,159.282984 93,167.610951 L93,186 L89,186 L89,186 C49.235498,186 17,218.235498 17,258 L17,267 L217,267 L217,258 C217,218.235498 184.764502,186 145,186 L141,186 L141,167.610951 C158.530782,159.282984 171.048193,142.114792 172.791419,121.867187 C178.569129,121.002364 183,116.018625 183,110 L183,97 C183,96.4315537 182.960475,95.8723389 182.884023,95.3249541 Z'
            id='LongHairBigHair-path2'
          />
          <path
            d='M222.384814,182.806274 C217.011239,188.518122 211.648364,192.127879 211.831204,198 C212.148076,209.888877 255.439069,245.051165 216.999964,267.00001 L16.0053198,267 C-22.4337677,245.051165 20.8572256,209.888877 21.1740982,198 C21.3569373,192.127879 15.9940628,188.518122 10.6204878,182.806274 C5.24691269,177.094426 -0.137362978,169.280486 0.00267373922,155 C0.944497502,125.971596 31.3716806,128.588232 31.2026676,109 C31.3716806,89.9992744 19.8139454,82.1607482 31.2026676,46 C42.8395963,9.53932757 72.9165934,0.768171773 116.002651,0.0159928999 L116.002651,0 C116.16951,0.002426813 116.336177,0.0049705256 116.502651,0.0076322645 C116.669125,0.0049705256 116.835791,0.002426813 117.002651,0 L117.002651,0.0159928999 C160.088708,0.768171773 190.165705,9.53932757 201.802634,46 C213.191356,82.1607482 201.633621,89.9992744 201.802634,109 C201.633621,128.588232 232.060804,125.971596 233.002628,155 C233.142665,169.280486 227.758389,177.094426 222.384814,182.806274 Z M93,186 L89,186 L89,186 C49.235498,186 17,218.235498 17,258 L17,267 L217,267 L217,258 C217,218.235498 184.764502,186 145,186 L141,186 L141,140 L93,140 L93,186 Z'
            id='LongHairBigHair-path3'
          />
        </defs>
        <mask id='LongHairBigHair-mask2' fill='white'>
          <use href='#LongHairBigHair-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Big-Hair' mask='url("#LongHairBigHair-mask2")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hair'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(16.000000, 13.000000)'>
              <mask id='LongHairBigHair-mask3' fill='white'>
                <use href='#LongHairBigHair-path2' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#LongHairBigHair-path2' />
            </g>
            <g
              id='Shadow'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(16.000000, 13.000000)'>
              <mask id='LongHairBigHair-mask1' fill='white'>
                <use href='#LongHairBigHair-path3' />
              </mask>
              <g id='Shape' />
              <path
                d='M30.0988695,115.056827 C27.7250732,118.08281 24.5296181,122.528485 24.3618393,122.19381 C26.2345006,119.810609 27.3747977,117.011661 27.3409475,113.436088 C27.517612,95.334874 15.4366324,87.8674306 27.3409475,53.4185647 C28.0096512,51.5090274 29.1070085,49.7044671 30.585889,48.0048838 C20.2433352,82.4586863 31.3685109,90.3556196 31.2026676,109 C31.2224682,111.294844 30.8223327,113.284923 30.0988695,115.056827 Z M202.419413,48.0048838 C203.898293,49.7044671 204.995651,51.5090274 205.664354,53.4185647 C215.822041,82.8130155 208.516445,92.5627534 206.263744,106.036479 C205.964379,106.841192 206.195125,107.789747 205.880216,108.603009 C175.207016,98.1454461 147.589972,78.5596292 131.494917,55.6119279 C108.710969,85.0357527 58.3544031,85.3732378 33.6737341,110.936101 C34.0607045,110.391798 34.4280855,109.884956 34.7584999,109.446288 C57.2940449,79.527377 108.24688,80.3241416 130.845581,48.302359 C146.243536,72.3904102 172.664446,92.9495135 202.009146,103.926748 C202.310417,103.073073 202.089664,102.077381 202.376063,101.232679 C204.483829,87.4002546 211.215481,77.3069293 202.419413,48.0048838 Z'
                id='Shadow-Mask'
                opacity='0.16'
                fill='#000000'
                mask='url("#LongHairBigHair-mask1")'
              />
            </g>
            <path
              d='M50.7584999,122.446288 C73.2940449,92.527377 124.24688,93.3241416 146.845581,61.302359 C162.243536,85.3904102 188.664446,105.949514 218.009146,116.926748 C218.310417,116.073073 218.089664,115.077381 218.376063,114.232679 C220.531197,100.089398 227.520377,89.8551619 217.802634,59 C206.165705,22.5393276 176.088708,13.7681718 133.002651,13.0159929 C132.336177,13.0049705 132.16951,13.0024268 132.002651,13 C88.9165934,13.7681718 58.8395963,22.5393276 47.2026676,59 C35.8139454,95.1607482 47.3716806,102.999274 47.2026676,122 C47.2350518,125.753256 46.1441426,128.691293 44.3525888,131.192923 C44.5361111,131.59459 48.5061717,125.436551 50.7584999,122.446288 Z'
              id='Light'
              opacity='0.1'
              fill='#FFFFFF'
              fillRule='evenodd'
            />
          </g>
        </g>
      </g>
`,Mg=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairBob-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M38,79.3595521 L38,111 C38,133.339168 51.0804213,152.623239 70,161.610951 L70,174.74565 C50.3625813,177.434228 34.6409914,182.163507 23.3845374,181.000327 C9.16164761,179.530612 1.49623627,150.795665 1,126 C0.382878875,95.1640258 29.3189583,30.7950013 40,18 C47.9231015,8.50878211 69.6952966,0.550643437 94.0001685,1 C118.30504,1.44935656 140.861928,6.81215989 149.000169,17 C161.324059,32.4276364 186.868727,91.0786423 187.000169,126 C187.093514,150.800049 177.46255,175.65995 164.000169,177 C152.920532,178.102871 137.475571,175.511343 118,173.997342 L118,161.610951 C136.919579,152.623239 150,133.339168 150,111 L150,82.9882378 C140.478735,78.1305678 131.863294,72.248172 124.153679,65.3410505 C127.362309,70.6368571 130.848786,75.1475352 134.61311,78.8730846 C107.596314,71.2928169 86.1055278,58.4501118 70.1407506,40.3449693 C62.1597317,56.8095313 51.4461487,69.8143919 38.0000014,79.3595511 Z'
            id='LongHairBob-path2'
          />
        </defs>
        <mask id='LongHairBob-mask1' fill='white'>
          <use href='#LongHairBob-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Bob' mask='url("#LongHairBob-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hair'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(39.000000, 19.000000)'>
              <mask id='LongHairBob-mask2' fill='white'>
                <use href='#LongHairBob-path2' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#LongHairBob-path2' />
            </g>
          </g>
        </g>
      </g>
`,xg=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairBun-path2' x='0' y='0' width='264' height='280' />
          <path
            d='M114.939716,28.3372418 C113.953527,28.5587334 112.985531,28.7906134 112.036894,29.0299707 C96.9448338,32.8379559 88.0168242,43.6513048 80.3566792,59.6480618 C76.5956048,67.5028569 74.3660182,76.7914798 74.0230569,85.4813651 C73.8884429,88.8932666 74.3484305,92.415154 75.267729,95.7003546 C75.6049405,96.9061873 77.4232441,101.086987 77.9224658,97.70885 C78.0885348,96.584253 77.4804043,95.0327505 77.4215529,93.8376154 C77.3444374,92.2693977 77.4273028,90.6807875 77.5341822,89.1149098 C77.7340739,86.1874141 78.2559568,83.3154127 79.1847257,80.524647 C80.5119249,76.5367405 82.2013644,72.212859 84.7874413,68.8480942 C91.1883705,60.5205939 95.7648164,43.2055199 133,41.6707324 C170.235184,40.1359449 181.748751,67.461069 185.182761,73.3006826 C189.2479,80.2147477 187.37751,88.7073939 188.619138,96.2008069 C189.091302,99.05041 190.164155,98.986558 190.751315,96.4378281 C191.748406,92.1082634 192.219217,87.6102098 191.901961,83.1592929 C191.183568,73.1114668 187.496636,46.7057251 167.308863,35.006118 C161.866498,31.8520537 156.438352,29.6874962 151.116597,28.2827668 C154.176091,25.3110645 156,21.5675963 156,17.5 C156,7.83501688 145.702549,0 133,0 C120.297451,0 110,7.83501688 110,17.5 C110,21.5924906 111.846303,25.3568736 114.939716,28.3372418 Z'
            id='LongHairBun-path1'
          />
        </defs>
        <mask id='LongHairBun-mask2' fill='white'>
          <use href='#LongHairBun-path2' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Bun' mask='url("#LongHairBun-mask2")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <mask id='LongHairBun-mask1' fill='white'>
              <use href='#LongHairBun-path1' />
            </mask>
            <use
              class='CustomColor'
              stroke='none'
              fill='var(--avataaar-hair-color)'
              fillRule='evenodd'
              href='#LongHairBun-path1'
            />
          </g>
        </g>
      </g>
`,Sg=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairCurly-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M48.7246602,89.2187346 C44.7420117,91.1711421 42,95.2653555 42,100 L42,113 C42,119.018625 46.4308707,124.002364 52.2085808,124.867187 C53.9518066,145.114792 66.4692178,162.282984 84,170.610951 L84,189 L80,189 L80,189 C78.4137385,189 76.8394581,189.051297 75.2787271,189.152323 C70.3620966,186.639548 65.7724391,183.578174 61.590479,180.048925 C57.2814481,181.318646 52.7202934,182 48,182 C21.490332,182 0,160.509668 0,134 C0,119.590902 6.34904132,106.664702 16.4021743,97.866349 C11.1175746,90.6060809 8,81.6671147 8,72 C8,50.160623 23.9112243,32.0375116 44.7738169,28.5905219 C51.0188047,11.8901624 67.1208542,0 86,0 C94.0143172,0 101.528186,2.14267429 108,5.88641659 C114.471814,2.14267429 121.985683,0 130,0 C148.879146,0 164.981195,11.8901624 171.226183,28.5905219 C192.088776,32.0375116 208,50.160623 208,72 C208,81.6671147 204.882425,90.6060809 199.597826,97.866349 C209.650959,106.664702 216,119.590902 216,134 C216,160.509668 194.509668,182 168,182 C163.279707,182 158.718552,181.318646 154.409521,180.048925 C150.227561,183.578174 145.637903,186.639548 140.721273,189.152323 C139.160542,189.051297 137.586262,189 136,189 L136,189 L132,189 L132,170.610951 C149.530782,162.282984 162.048193,145.114792 163.791419,124.867187 C169.569129,124.002364 174,119.018625 174,113 L174,100 C174,95.778427 171.820067,92.0660046 168.524466,89.9269981 C167.450514,89.5343912 166.370126,89.0424011 165.289302,88.4564081 C164.868503,88.3367332 164.43828,88.2394463 164,88.1659169 L164,87.7130302 C155.319369,82.4100235 146.764694,71.1747746 141.449951,56.7992877 C131.312295,58.8351061 119.547256,60 107,60 C95.038684,60 83.7882341,58.9413637 73.9808476,57.0787685 C68.7546917,71.0641476 60.4637821,82.0431875 52,87.4230168 L52,88.1659169 C50.9777341,88.3374206 49.9992949,88.6381729 49.0820602,89.050796 C48.9628927,89.1079465 48.8437566,89.1639284 48.7246602,89.2187346 Z'
            id='LongHairCurly-path2'
          />
        </defs>
        <mask id='LongHairCurly-mask1' fill='white'>
          <use href='#LongHairCurly-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Curly' mask='url("#LongHairCurly-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <path
              d='M105.984735,27.7643628 C114.013215,26.6267967 122.796163,26 132,26 C142.358003,26 152.182939,26.7938545 160.999342,28.2161842 C183.451688,38.7497687 199,61.559133 199,88 L199,105.044138 C187.461887,104.672508 173.831239,90.7644306 166.449951,70.7992877 C156.312295,72.8351061 144.547256,74 132,74 C120.038684,74 108.788234,72.9413637 98.9808476,71.0787685 C91.6758772,90.6271291 78.3831001,104.301811 67,105.021902 L67,88 L67,88 C67,61.1745453 83.0039076,38.0870034 105.984735,27.7643628 Z'
              id='Shadow'
              opacity='0.16'
              fill='#000000'
              fillRule='evenodd'
            />
            <g
              id='Hair'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(25.000000, 10.000000)'>
              <mask id='LongHairCurly-mask2' fill='white'>
                <use href='#LongHairCurly-path2' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#LongHairCurly-path2' />
            </g>
          </g>
        </g>
      </g>
`,wg=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairCurvy-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M162.831093,71.6181521 C162.943003,73.0640672 163,74.5253775 163,76 L163,114 C163,136.339168 149.919579,155.623239 131,164.610951 L131,183 L135,183 C136.524404,183 137.037743,183.047374 138.538625,183.140731 C123.625568,210.496321 119.823733,233.574048 137.47212,247.543277 C139.169858,248.745686 140.396085,249.328761 140.607243,249.428275 C142.980035,250.546232 145.444343,251.76781 148.074296,252.382591 C152.696796,253.463231 158.007057,252.010459 162.630756,251.429524 C164.742591,251.164137 166.847633,251.000636 168.977452,250.993519 C171.542066,250.985014 174.188404,251.078221 176.119408,252.691023 C178.003455,254.264772 177.763079,259.889444 172.244213,262.523872 C176.3432,264.37915 181.25603,260.071171 182.931671,257.34666 C184.398107,254.962171 185.526058,252.378599 186.146081,249.741914 C186.917963,246.458686 186.967717,243.016815 186.363678,239.728032 C185.106048,232.88022 182.187563,226.295538 180.201011,219.605673 C179.468692,217.139607 178.51478,214.440611 178.099366,211.916746 C177.986471,211.23167 177.851996,208.701383 177.957698,208.171998 C178.036425,207.778517 178.016643,207.37549 179.372782,206.996069 C183.288539,205.899634 187.379733,204.063449 190.225486,201.476579 C193.590156,198.418295 195.343925,194.445304 196.758409,190.497133 C198.998525,184.244662 200.281132,177.550111 200.870584,171.057073 C200.99307,169.708269 201.062205,168.361722 201.086383,167.009968 C201.10077,166.193153 201.000862,165.263344 201.094375,164.445141 C201.247433,163.105189 201.039826,163.457881 202.341615,162.571291 C206.599454,159.671476 209.921164,155.448546 212.051783,151.200622 C215.39827,144.528634 215.834064,137.49302 213.117591,130.733555 C210.864687,125.12728 207.291411,119.498616 201.725588,115.887863 C199.588776,114.501568 197.334273,113.244582 195.115337,111.95809 C193.906862,111.257566 191.067703,110.342511 190.209501,109.441341 C189.609259,108.810939 190.56477,105.649382 190.685858,104.583322 C191.213967,99.9353218 190.606132,95.4261763 189.520542,90.8868298 C187.127368,80.8793698 177.487944,64.7382958 173.617944,55.2249863 C170.293437,47.0528435 165.481911,-0.0750473139 108.58669,0.198941193 C51.691468,0.4729297 41.4185991,50.4377258 33.7159879,59.7736698 C25.3512665,69.9121239 16.9074766,89.1763214 22.602684,107.035643 C17.099033,113.95809 4.54481227,124.04369 1.3853513,134.125611 C-0.596804833,140.450807 -0.511883829,147.495621 2.0289526,153.633016 C3.46621561,157.104393 5.52490056,160.250502 7.94045353,163.272162 C10.0566849,165.919435 12.4084972,168.423513 14.4577909,171.110359 C15.6946403,172.732013 16.0263318,173.129312 15.5599656,175.128304 C14.6406208,179.068318 12.7411877,182.853334 11.0939201,186.603116 C8.54189405,192.412639 6.39748885,197.82226 6.0799842,204.016065 C5.77766543,209.912373 7.40435223,226.688671 24.3409972,236.576369 C26.3249517,237.73442 28.2831301,238.743202 30.3833764,239.685161 C29.2931905,236.290327 30.5294405,224.161856 32.7263968,219.653578 C33.2860762,221.204589 34.2369916,222.697108 35.2618383,224.05216 C36.8611506,226.167444 40.636039,231.460774 45.4085994,231.706547 C43.4722007,228.722725 41.3891385,226.708805 40.7853002,223.10864 C44.7616013,225.068753 50.4191385,226.855644 55.0466338,226.691448 C58.4512667,226.570818 63.4709972,224.871405 66.0000446,222.74779 C57.6284322,224.074724 49.679027,221.3155 46.4820009,215.419366 C45.8146217,214.188415 45.3084926,212.898625 45.0141664,211.558847 C44.5967546,209.659309 43.9381673,206.615432 44.8227444,204.862039 C45.0375932,204.436124 45.3893685,204.001198 45.806628,203.572743 C45.7407358,203.49425 45.6753213,203.415537 45.6103845,203.336606 C51.303506,198.550494 58.4494475,190.932516 62.2752482,185.367908 C62.3459243,185.245492 62.416066,185.122857 62.4856702,185 L62.5253504,185 C62.5536953,184.957813 62.5818364,184.915755 62.6097716,184.873828 C67.874859,183.648086 73.3617452,183 79,183 L83,183 L83,164.610951 C64.0804213,155.623239 51,136.339168 51,114 L51,76 L51,76 C51,73.537425 51.1589523,71.1119753 51.4671565,68.733351 C55.4088487,67.4702772 59.365485,66.2776957 63.3986046,65.2045441 C67.8552588,64.0189378 77.7980098,62.0907786 81.6887904,61.1941723 L84.4252449,58.215348 L85.4876566,60.1702128 C87.6456492,60.0042337 99.5663601,58.212708 99.5663601,58.212708 L100.896323,54.9898699 C102.612526,56.7530625 103.834989,57.668872 103.834989,57.668872 C106.391211,57.460454 117.488488,57.2113208 120.119841,57.2427023 C120.119841,57.2427023 127.460212,57.5012269 129.240756,57.5714137 L130.907605,56.9328981 L131.456495,58.0098503 C132.910143,58.601117 141.699367,61.6008734 143.434153,62.138079 L145.980784,61.2323702 C147.100342,63.9256202 149.920119,63.586016 152.257345,65.7132858 C154.760315,67.9915694 159.482831,69.7372554 162.831093,71.6181521 Z'
            id='LongHairCurvy-path2'
          />
        </defs>
        <mask id='LongHairCurvy-mask1' fill='white'>
          <use href='#LongHairCurvy-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Curvy' mask='url("#LongHairCurvy-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <path
              d='M100.899906,42.4648024 C91.1016204,48.4721303 82.3855283,56.3273858 76.5871222,65.36024 C73.8252914,69.662826 71.5532049,74.1995784 69.4361743,78.7575668 C68.3739624,81.0447336 67.4048638,83.3600237 66.475928,85.6893613 C65.8894735,87.1594817 64.9889112,88.7449062 65.8359233,90.2878445 C66.3526427,89.9857996 66.5492598,90.0943892 66.224362,90.6353417 C68.9162579,91.3693254 72.6583769,89.3003017 74.9906073,88.5362205 C79.7539763,86.9753339 84.5203425,85.5025753 89.3986046,84.2045441 C93.8552588,83.0189378 103.79801,81.0907786 107.68879,80.1941723 L110.425245,77.215348 L111.487657,79.1702128 C113.645649,79.0042337 125.56636,77.212708 125.56636,77.212708 L126.896323,73.9898699 C128.612526,75.7530625 129.834989,76.668872 129.834989,76.668872 C132.391211,76.460454 143.488488,76.2113208 146.119841,76.2427023 C146.119841,76.2427023 153.460212,76.5012269 155.240756,76.5714137 L156.907605,75.9328981 L157.456495,77.0098503 C158.910143,77.601117 167.699367,80.6008734 169.434153,81.138079 L171.980784,80.2323702 C173.100342,82.9256202 175.920119,82.586016 178.257345,84.7132858 C181.34867,87.5271086 187.825645,89.5285179 190.917768,91.9756241 C192.024938,92.8519441 193.059576,93.7675012 194.100208,94.7015404 C195.255933,95.7385867 195.085291,95.890424 195.460742,97.0802141 C195.573237,97.4361731 196.715775,99.2788807 197.202722,99.4296139 C198.935909,99.9660566 187.048767,68.9435732 183.785603,64.9771662 C180.417736,60.8830307 158.574915,33.3231248 129.612057,34.2254634'
              id='Top-Shadow'
              opacity='0.16'
              fill='#000000'
              fillRule='evenodd'
            />
            <g
              id='Hair'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(26.000000, 16.000000)'>
              <mask id='LongHairCurvy-mask2' fill='white'>
                <use href='#LongHairCurvy-path2' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#LongHairCurvy-path2' />
              <path
                d='M62.6794556,184.462132 C69.755442,174.755405 62.148959,147.786913 56.1278159,137.800593 C72.9649824,130.137708 106.213574,131.553467 155.87359,142.047871 C151.079203,150.900348 149.123448,158.803527 150.006324,165.757409 C145.469118,171.332534 141.720304,177.127222 138.759883,183.141474 L103.888915,191.746789 C81.8528509,194.400378 68.1163643,191.97216 62.6794556,184.462132 Z'
                id='Shadow'
                opacity='0.24'
                fill='#000000'
                mask='url("#LongHairCurvy-mask2")'
              />
            </g>
            <path
              d='M79.0404573,170.094305 C78.9812573,169.892618 78.8354573,169.667152 78.6348573,169.428842 C78.7708573,169.650142 78.9074573,169.871269 79.0404573,170.094305 Z M56.409572,120.375261 C57.2661752,126.5406 58.7356083,132.465374 60.8662263,138.377476 C62.9277086,144.09848 65.285915,149.836145 68.678559,155.067858 C71.8402179,159.943234 75.6031176,164.4923 78.6348973,169.428772 C77.8378388,168.48126 76.1633964,167.329804 75.5207941,166.65115 C74.4643769,165.535276 73.4750971,164.385382 72.5369698,163.193485 C70.6143583,160.749982 68.9003527,158.193833 67.243494,155.609567 C63.9913192,150.536843 61.5529875,145.034363 59.4397533,139.530668 C55.2902133,128.722708 51.1268862,115.61687 54.7738936,104.200899 C54.4921557,104.935095 55.2326668,106.688314 55.3491585,107.497319 C55.5525692,108.91069 55.7349995,110.333608 55.8267142,111.757219 C56.0123415,114.639678 56.0109428,117.505994 56.409572,120.375261 Z M68.8553146,165.041212 C67.4967783,163.309515 64.9739252,161.944396 63.4129772,160.279177 C61.9976938,158.769648 60.9019131,157.07822 59.9070386,155.339754 C57.6517365,151.39922 56.1697151,147.374505 55.6897616,142.969154 C55.7992598,143.49177 56.6083072,144.395543 56.8630702,144.824778 C57.4766993,145.858902 58.0839345,146.89424 58.6508072,147.948671 C59.7481863,149.989667 60.6639345,152.099744 61.7731027,154.135533 C63.8106073,157.875421 66.402796,161.495374 68.8553146,165.041212 Z M73.5320242,183.498629 C74.6465874,185.460651 75.5723262,187.464851 76.1569823,189.60079 C76.4654954,190.727599 76.7138643,191.869508 76.9272658,193.013501 C76.9962017,193.382508 77.0093894,194.709963 77.1846264,195.283955 C74.9700864,190.992812 73.2798587,186.448779 70.6421125,182.34214 C68.0381348,178.288092 64.6948448,174.560527 61.1958996,171.061031 C57.5013364,167.36575 53.7855929,163.879099 51.8038364,159.214262 C50.0788411,155.153619 49.4126608,150.996124 49.8138875,146.658464 C49.8160855,148.56911 51.5706533,151.280256 52.1766896,153.126681 C53.0063178,155.654018 53.6655046,158.231689 54.9143429,160.634229 C57.039566,164.722991 60.873,167.876911 64.0792175,171.321558 C67.631513,175.137643 71.0245567,179.084252 73.5320242,183.498629 Z M59.2286696,174.179456 C60.2874847,175.196917 61.2164205,176.28259 62.0352588,177.454354 C62.9328239,178.738937 63.5914112,180.09017 64.1800637,181.504062 C64.6869921,182.721301 64.9105841,184.986375 65.7074428,186.0021 C63.1288415,182.856337 60.4739112,179.884838 58.6955655,176.312444 C58.0893295,175.089825 57.1480051,173.289222 56.4530516,171.817184 C56.6844363,172.409922 58.7059559,173.677148 59.2286696,174.179456 Z M48.9033745,180.528033 C51.7405353,184.777866 55.450684,188.609052 57.877027,193.056233 C60.7067946,198.242644 61.9518364,203.862978 62.202803,209.595957 C62.3216924,212.307277 62.3152983,215.0606 61.9498383,217.764455 C61.7540204,219.211673 61.4399126,220.650211 61.0810465,222.075732 C60.944973,222.616747 60.2406283,224.002173 60.1037556,224.846586 C59.8140251,214.305575 61.5584024,203.763696 56.0767017,193.942823 C53.4811162,189.292219 49.4912277,185.327212 46.398105,180.924811 C43.6164926,176.966226 40.8998197,173.083838 38.6846803,168.851361 C40.0408188,170.567263 42.485145,171.915893 44.0009349,173.619818 C45.8995688,175.753674 47.3488206,178.199606 48.9033745,180.528033 Z M60.1036574,224.846603 C60.0710574,225.050581 60.0700574,225.224111 60.1172574,225.346603 C60.1116574,225.180112 60.1082574,225.01327 60.1036574,224.846603 Z M50.5604331,202.493815 C50.5610325,202.989874 51.376474,204.011501 51.5992667,204.528562 C52.1207816,205.73799 52.5455864,207.007473 52.7573894,208.289626 C53.1752007,210.818004 52.6269108,213.429521 51.6899823,215.850286 C49.7909489,220.757251 46.8161162,225.102895 43.0767946,229.15 C44.4121524,227.402335 44.9438578,224.56136 45.8833838,222.612182 C46.8478866,220.611106 47.8829238,218.6411 48.7335325,216.600624 C50.652947,211.995842 50.4835046,207.289696 50.5604331,202.493815 Z M41.9174331,221.200893 C42.3180604,220.652936 42.1102537,218.018161 42.3222565,217.328919 C42.714092,216.055618 43.3920613,214.827097 44.170737,213.693866 C43.7551236,214.392828 44.3691524,216.160106 44.1663411,217.067177 C43.8338504,218.55553 42.9962296,219.998582 41.9174331,221.200893 Z M99.6077106,42.748374 C99.5269106,42.804974 99.4471106,42.908174 99.3681106,43.044574 C99.4481106,42.945974 99.5267106,42.846574 99.6077106,42.748374 Z M84.8469387,64.3317143 C86.2672175,63.085837 87.0237138,60.1410677 88.0032026,58.5522183 C89.1283559,56.7269681 90.4213532,54.9730547 91.6476125,53.1960567 C94.0795502,49.6719145 96.3744154,46.2123399 99.3680307,43.0054816 C98.7464089,43.9398028 98.1949219,46.7736616 97.8536394,47.5189663 C96.9620688,49.4667561 95.8988578,51.3334892 94.6328355,53.1235049 C91.7722965,57.1680066 88.7029517,60.9266404 84.8469387,64.3317143 Z M84.3117165,54.1218036 C85.0620186,52.7952168 86.2055548,51.6739619 87.4917584,50.7082248 C86.9188913,51.2107066 86.6607314,53.2831189 86.2670976,53.9831221 C85.472237,55.3952784 84.3143141,56.6130375 83.0714703,57.7545999 C83.7352528,57.1726235 83.842553,54.9516363 84.3117165,54.1218036 Z M203.505599,152.127968 C203.498805,152.179518 203.485417,152.282271 203.464637,152.438483 C203.462638,150.913159 202.784469,149.237352 202.704144,147.668984 C202.592048,145.478545 202.906556,143.353715 203.787137,141.277137 C205.526519,137.175704 208.790083,134.069516 212.950612,131.638511 C211.805877,132.313173 210.683921,134.851617 209.949604,135.906916 C208.84663,137.493162 207.668126,139.094161 206.735993,140.757819 C204.793001,144.225725 204.229725,148.375062 203.505599,152.127968 Z M201.998401,130.481881 C201.761221,131.706583 201.448912,132.921738 201.009121,134.107908 C200.534762,135.386937 199.915938,136.630558 199.22578,137.835993 C198.79578,138.586852 197.246621,140.162684 197.24762,140.993211 C197.165296,136.095098 198.975812,131.657983 202.419809,127.7355 C202.04236,128.392806 202.137271,129.766083 201.998401,130.481881 Z M201.196906,165.719988 C204.852905,165.202752 208.302496,166.981313 210.618342,169.271033 C211.855791,170.494694 212.955568,171.900428 213.683091,173.404055 C214.229783,174.534509 214.228783,176.387356 214.9631,177.323587 C213.165772,174.905078 210.886892,172.951214 208.638584,170.859535 C207.075238,169.404855 203.950944,165.678852 201.196906,165.719988 Z M200.41897,176.096698 C200.227148,176.031957 198.485169,175.539368 198.081944,175.776984 C198.679388,175.510035 199.412106,175.184941 200.068895,175.097983 C204.35311,174.529024 209.561066,178.239232 210.13633,181.81909 C209.657576,180.592826 207.111145,179.578489 205.959616,178.968568 C204.136711,178.002484 202.395531,176.832456 200.41897,176.096698 Z M202.227687,183.908269 C202.969797,184.089822 204.54713,185.083504 205.275252,185.072742 C202.345977,185.143906 199.703236,184.81829 196.883858,184.158729 C197.036117,184.200212 198.643022,183.702937 198.694974,183.695647 C199.910043,183.523987 201.052381,183.620492 202.227687,183.908269 Z M190.882541,197.765243 C195.171151,197.522941 200.218656,198.149351 204.314046,199.181739 C206.346955,199.694288 208.253382,200.468058 210.006351,201.476666 C211.420436,202.290531 213.935896,203.408661 214.881616,204.614097 C211.142494,198.162369 203.032039,194.811448 194.722769,196.473197 C193.615199,196.695886 191.914181,197.749796 190.882541,197.765243 Z M189.923153,210.197773 C192.611453,209.233424 195.584487,208.30431 198.505969,208.169273 C201.277391,208.042395 204.351332,208.458613 206.915546,209.342078 C206.033367,209.102206 203.92333,209.674289 202.995793,209.779298 C201.699199,209.926138 200.399608,210.077837 199.099817,210.196558 C197.506299,210.342009 195.898395,210.422718 194.298883,210.41942 C193.159543,210.41699 190.979371,209.87858 189.923153,210.197773 Z M179.458947,227.410508 C179.711912,231.383499 182.010574,234.84533 185.39043,237.491388 C188.973097,240.296087 193.769036,241.572686 196.369816,245.319691 C197.637437,247.145462 198.312809,249.270812 198.20431,251.417686 C198.148362,252.524014 197.870221,253.636069 197.5695,254.712196 C197.371684,255.420184 196.66734,256.580144 196.667939,257.270775 C196.69911,253.384221 196.751661,248.859281 194.031592,245.598095 C191.300932,242.324066 186.539161,241.170701 183.203065,238.482813 C179.924714,235.841442 177.437828,232.389157 176.877749,228.498264 C176.425569,225.354411 176.648562,219.871892 179.90773,217.738557 C179.246345,218.128392 179.377224,220.111764 179.361438,220.669267 C179.298097,222.900321 179.317079,225.185182 179.458947,227.410508 Z M177.005789,242.672904 C177.402221,243.19257 179.575399,243.82436 180.213805,244.182606 C181.67045,245.000116 183.07914,245.92923 184.234665,247.059684 C186.55111,249.326146 188.044121,252.504886 188.151821,255.553623 C188.151821,254.833139 186.505553,253.096583 186.043183,252.481107 C185.275297,251.458613 184.407904,250.511969 183.524526,249.564283 C181.371329,247.253734 179.135209,244.999942 177.005789,242.672904 Z M229.167807,153.791051 C230.371887,154.841663 231.178936,156.147595 231.842519,157.49987 C233.373295,160.619424 233.65823,164.217333 232.431571,167.500388 C232.634582,166.795698 232.030544,165.31585 231.860502,164.601614 C231.488248,163.038626 230.906389,161.56225 230.298355,160.059664 C229.118053,157.144401 228.163741,154.41208 226.113648,151.858014 C226.644354,152.52556 228.442481,153.157872 229.167807,153.791051 Z M171.509602,41.9832998 C171.510002,42.3148163 172.426549,43.2758671 172.633357,43.6374111 C173.149677,44.5392749 173.557297,45.4857459 173.696967,46.4924453 C173.85542,47.6336606 173.6616,48.7505762 173.315522,49.8605491 C173.109914,50.5202844 172.131624,51.7949741 172.132423,52.3894475 C171.972572,48.891167 171.198691,45.5298324 171.509602,41.9832998 Z M179.146978,48.8048339 C179.312224,50.0477605 178.906202,51.4491555 178.183074,52.546805 C178.314952,52.2364639 177.729296,50.1642252 177.710314,49.7849773 C177.650969,48.6118253 177.77925,47.4056953 177.856378,46.2332376 C177.857178,46.8738803 179.039478,47.9958294 179.146978,48.8048339 Z M118.377388,50.3732542 C117.142336,51.8857333 115.738043,53.3032702 114.227248,54.6164922 C113.2036,55.5060327 111.243024,56.5057893 110.46315,57.5267214 C113.964293,51.8147436 118.00913,46.8878178 122.764906,41.8951095 C122.049172,42.8155452 121.862346,44.8121078 121.337434,45.8885819 C120.563354,47.4758692 119.527518,48.9645693 118.377388,50.3732542 Z M124.275361,52.8515919 C124.845431,52.5155626 125.378934,50.859195 125.81333,50.3013446 C126.54465,49.3623371 127.437619,48.4554398 128.390733,47.6728177 C128.186123,47.8927295 127.788693,49.7158968 127.5657,50.0739694 C126.843372,51.2344508 125.56616,52.1809219 124.275361,52.8515919 Z'
              id='Lights'
              opacity='0.6'
              fill='#FFFFFF'
              fillRule='evenodd'
            />
          </g>
        </g>
      </g>
`,Eg=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairDreads-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M85.718098,185.073467 C86.8059563,185.024663 87.900098,185 89,185 L89,185 L93,185 L93,166.610951 C81.2286384,161.018987 71.7176526,151.441235 66.2110974,139.621749 C63.4467803,131.013632 63.6113966,121.686985 63.000708,112.826222 C62.1957105,101.145772 62.8887367,89.7481762 65.5369124,78.2476834 C67.9263583,67.8722634 71.3610508,62.3068417 79.1631677,53.9925443 C83.5224388,49.3467459 90.0678681,49.0779432 96.5828586,47.4293172 C103.17612,45.7598396 109.194306,43.2191332 113.317676,38.4387068 C122.400941,48.8499369 146.671683,45.1030183 155.554378,56.4493915 C166.355804,70.2471725 166.476604,79.1499376 167.747424,95.0917937 C168.700138,107.043152 167.218859,128.656014 166.803718,141.630125 C161.185514,152.525228 152.097197,161.339247 141,166.610951 L141,185 L145,185 C151.635699,185 158.061736,185.89767 164.1633,187.578199 C162.113115,190.752042 159.66929,193.757151 157.112045,196.551224 C153.280561,200.738743 149.430596,205.07041 145.111547,208.917959 C140.170678,213.319433 135.443967,216.514694 132.444114,221.999991 C131.086326,224.482676 128.707208,227.093643 131.224932,229.817026 C133.524148,232.304244 137.149083,231.79157 139.609734,229.99245 C143.247171,227.332528 145.947527,223.133676 149.2996,220.076669 C146.062216,225.891963 141.557817,234.561189 143.870623,241.081807 C144.65714,243.298862 145.455615,243.254893 146.671536,244.732627 C148.591355,244.77569 149.350151,245.644199 148.948467,247.337701 C149.128382,247.821818 149.308297,248.305028 149.488756,248.789145 C150.944383,251.382887 153.73062,253.199684 157.268587,251.977153 C168.828809,247.982737 155.493353,230.015568 168.22112,224.674872 C170.498594,227.504326 167.135107,235.453723 167.044334,238.930932 C166.932906,243.218176 167.166089,252.943574 173.685972,254.109896 C182.182202,255.630241 178.905139,247.513126 179.240509,244.059941 C179.630235,240.043766 182.101213,234.747946 184.111805,231.19141 C182.888817,234.970512 180.603189,243.344644 186.927937,245.060811 C194.245208,247.046687 193.409228,238.475373 194.5197,234.910224 C194.748535,240.185647 201.565196,252.659813 207.724704,242.806586 C210.898493,237.730613 208.733533,229.366 208.385661,223.95323 C212.799287,228.512903 216.32584,222.602417 216.224196,219.322843 C217.902135,224.075166 224.207315,237.325369 229.795009,226.807615 C233.19274,220.412559 229.568892,211.82266 227.311529,205.648358 C233.255792,206.168285 232.061613,200.411919 231.17617,197.553001 C229.869476,193.331485 230.56685,192.711833 230.835907,188.347077 C239.08591,193.151981 238.833159,180.113465 238.377664,176.915484 C237.232404,168.863643 230.969077,161.653567 226.135287,154.862787 C222.669068,149.991702 216.20028,141.510593 218.096726,135.636824 C220.053506,138.105004 224.604107,138.079166 226.413041,135.494944 C227.944765,133.306899 226.321725,129.699141 225.582497,127.51291 C223.561578,121.532617 219.523001,117.668749 215.871976,112.532035 C208.763972,102.531035 209.78639,89.3991407 209.129238,78.2191259 C208.309564,64.2703984 205.315147,50.5387982 192.648801,40.3918378 C185.862036,34.9554966 177.590835,30.4783232 171.278589,24.7101717 C169.557166,23.1372455 168.829352,21.1885396 167.213378,19.672275 C165.399552,17.9706136 164.553244,18.373591 163.055221,15.951194 C160.386934,11.6367527 157.252824,7.59700681 150.804147,7.39438491 C146.585112,7.26247669 141.249081,10.823092 137.446405,10.3027118 C134.324254,9.87616325 132.352254,5.42437419 129.78996,3.93032097 C125.824219,1.61762086 123.056462,2.51559399 118.817859,3.85507435 C112.508874,5.8486563 108.488235,6.54355423 102.06293,4.16059373 C97.6906135,2.53871192 93.5645254,-0.846479064 88.4018873,0.357013447 C84.3524397,1.30167574 82.5435053,4.56991717 80.1584078,7.07481345 C77.6972133,9.66084915 78.8865008,8.80593884 75.2887432,9.38026087 C71.6083661,9.9681817 68.7020041,10.5017074 65.9103313,12.9118655 C61.397779,16.8074642 64.5237352,22.8666297 60.95696,26.3007763 C59.0317058,28.154744 55.0219374,29.0377585 52.7922952,30.954734 C50.3582782,33.0471337 48.3677981,35.5901066 46.5441878,38.0655389 C42.992632,42.8881215 40.5678554,48.1435988 37.9642508,53.3460408 C33.1206766,63.0274694 28.8027153,73.0171372 26.9622549,83.4183949 C26.0170215,88.7645307 24.4238764,93.9946236 23.4503783,99.3303337 C22.6997357,103.444873 23.0198867,107.95151 21.5539323,111.946834 C19.8145722,116.686464 15.6553275,121.042608 13.4023127,125.704271 C10.4144183,131.887186 8.40763163,137.818976 7.77222166,144.475128 C7.14822625,151.019317 8.88486854,156.786109 9.65073052,163.202016 C10.0942673,166.919017 9.32731826,167.341033 6.77100254,170.849066 C4.80389503,173.548878 2.81124068,176.221946 1.54639979,179.227278 C-0.815325022,184.841763 -0.684329469,190.304395 3.42490864,195.240301 C6.24484612,198.627758 15.7238148,202.173415 14.9476254,194.622463 C14.5872518,191.114429 10.1763434,189.527451 11.0188459,185.502664 C11.6020751,182.715366 14.443211,180.786605 17.8920358,179.924895 C20.328227,179.316576 21.5278419,179.343321 22.6269,182.014575 C23.6232272,184.435613 22.3024007,189.72146 21.996382,192.265793 C21.8735397,193.288422 21.691994,194.184582 21.5686081,195.131511 C20.7005588,201.806248 20.5407551,207.947459 16.8870119,214.076432 C14.6426939,217.842389 10.2513533,223.149088 15.258536,226.778604 C19.2177543,229.649308 26.0490909,227.900051 29.1359115,224.896532 C32.3923196,228.923586 31.668311,233.320073 30.4502154,237.765516 C29.6941373,240.525616 27.6264731,244.567629 30.8812505,246.798736 C35.2888976,249.820386 42.4838692,245.061265 45.7886533,242.659719 C47.6992316,246.926565 49.4918595,262.485842 57.0243756,253.211017 C59.2224919,250.505765 62.8816706,247.867147 63.5785017,244.677325 C64.7346326,239.386945 63.9046317,233.818695 64.3834993,228.474826 C66.7870774,235.472308 68.4211208,238.262053 69.8925107,245.444931 C70.7774101,249.766172 71.124195,264.264472 80.0666799,262.354749 C86.9474795,260.885627 82.5468986,251.830921 81.6679782,248.139757 C79.9846038,241.070655 79.1724081,238.077382 77.5455629,230.999667 C80.078506,235.625521 82.2918416,240.371497 84.725315,245.034067 C87.115848,249.613685 97.8039252,259.060923 100.930715,255.083614 C104.057505,251.106306 96.435013,245.438857 94.7010885,240.623528 C91.0924599,230.599863 86.7201436,220.618354 85.6835937,210.116466 C85.1851583,205.067237 86.1200644,200.404213 86.5299011,195.413459 C86.8096981,192.003861 86.3887166,188.510775 85.718098,185.073467 Z'
            id='LongHairDreads-path2'
          />
        </defs>
        <mask id='LongHairDreads-mask2' fill='white'>
          <use href='#LongHairDreads-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Dreads' mask='url("#LongHairDreads-mask2")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='template-for-hairstyles'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(63.000000, 87.000000)'
            />
            <g
              id='Hair'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(16.000000, 14.000000)'>
              <mask id='LongHairDreads-mask1' fill='white'>
                <use href='#LongHairDreads-path2' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#LongHairDreads-path2' />
              <path
                d='M85.718098,185.073467 C86.8059563,185.024663 87.900098,185 89,185 L89,185 L93,185 L93,166.610951 C81.2286384,161.018987 71.7176526,151.441235 66.2110974,139.621749 C66.7437304,141.280375 67.3851037,142.912325 68.1617154,144.509125 C73.916823,156.341882 81.4183567,166.92083 84.4877837,179.589912 C84.9233139,181.387079 85.3569126,183.222183 85.718098,185.073467 Z M164.1633,187.578199 C158.061736,185.89767 151.635699,185 145,185 L145,185 L141,185 L141,166.610951 C151.900717,161.432585 160.863061,152.836228 166.502046,142.206866 C166.424719,145.200638 166.492065,148.178617 166.874747,151.055581 C167.944997,159.099715 170.876362,166.366 169.515856,174.635875 C168.770949,179.167686 166.790265,183.511457 164.1633,187.578199 Z'
                id='Shadows'
                opacity='0.24'
                fill='#000000'
                mask='url("#LongHairDreads-mask1")'
              />
              <path
                d='M49.3607552,108.248307 C49.2357387,105.826133 47.3806025,97.711311 49.6885159,96.3093564 C52.2181977,94.7715832 51.6909542,104.01582 51.7170446,104.962941 C51.7605286,106.500263 52.928074,118.098087 50.7897482,118.046647 C48.6579451,117.995659 49.4428313,109.828495 49.3607552,108.248307 Z M57.7950752,165.998415 C57.7863784,167.012316 56.722651,166.95095 55.9633116,166.68563 C55.0256879,166.358041 55.5996767,164.201639 55.5502136,163.49457 C55.4197616,161.635525 54.5272525,156.156756 55.8904759,154.62169 C58.6158357,151.553363 57.8059462,164.569838 57.7950752,165.998415 Z M32.1210881,179.161492 C34.0501471,179.106894 32.2645853,141.329473 29.29952,141.371437 C27.2171799,141.400766 30.6611128,179.198041 32.1210881,179.161492 Z M34.3531219,198.516092 C31.9555228,198.516092 32.3963419,206.978357 33.8084848,207.654742 C35.9484412,208.679924 37.0349977,198.516092 34.3531219,198.516092 Z M49.5898072,202.054956 C49.6110057,203.112626 48.4113908,203.129321 47.6107416,202.798574 C46.701926,202.423155 47.082411,199.293461 47.0465367,198.598576 C46.9334783,196.41149 45.0299661,187.926664 46.7611729,186.367683 C48.7353466,184.59031 48.7782871,186.540953 49.3093354,187.8662 C50.8731288,191.768841 49.505557,197.898275 49.5898072,202.054956 Z M190.242397,122.33319 C190.352194,123.795609 191.311016,133.35074 189.717871,134.079016 C186.975661,135.332969 188.156795,129.428696 188.167666,128.666127 C188.274745,121.229044 187.19906,113.85423 186.381017,106.456855 C186.225562,105.052193 183.755671,94.2318284 185.564605,93.3352452 C188.272028,91.9937546 187.86817,95.5809897 188.023082,96.7451491 C189.152035,105.213731 189.651014,113.824449 190.242397,122.33319 Z M187.023004,155.587221 C184.490605,155.085459 183.16543,163.680835 184.321017,164.602687 C186.238118,166.132789 189.670093,156.113348 187.023004,155.587221 Z M186.754925,193.385172 C185.616188,193.158658 177.321615,209.117567 178.004314,210.020016 C179.303942,211.738731 190.833725,194.199633 186.754925,193.385172 Z M166.332555,200.758587 C164.551342,199.95631 156.998715,211.509915 158.926686,212.377619 C160.674743,213.163653 168.488275,201.725562 166.332555,200.758587 Z M208.425286,157.447168 C206.274459,157.447168 206.370123,169.269251 208.025233,170.015125 C209.736329,170.785817 210.967469,157.447168 208.425286,157.447168 Z M178.139603,48.8435128 C177.531371,47.9735519 170.964743,40.2233192 175.668081,41.3306242 C177.959145,41.8698375 181.116083,48.6833281 182.149372,50.7413632 C182.743472,51.9235715 186.133593,57.2006425 182.541271,56.8270286 C181.563968,56.7259543 178.951667,50.0063184 178.139603,48.8435128 Z M155.04775,33.3564939 C154.201443,33.7373274 154.215575,34.0946972 155.090147,34.4281522 C155.936998,34.0473186 155.922322,33.6904 155.04775,33.3564939 Z M70.6188876,41.486432 C68.6137316,43.3296843 61.07578,54.0047545 58.4928303,54.1116947 C53.7862308,54.3066237 62.7711125,45.0867526 63.7902688,43.9135688 C64.2452201,43.387441 66.275923,40.8222295 67.5119557,40.1914176 C68.7729918,39.5475202 72.9556091,39.3322861 70.6188876,41.486432 Z M43.2540252,69.9805849 C41.0711283,69.5519216 37.4190158,80.245492 38.693097,81.5359942 C40.6167205,83.4857354 45.7005438,70.4661025 43.2540252,69.9805849 Z M68.1928608,188.992366 C68.6054153,190.333405 72.8244505,200.071733 71.7639844,201.353211 C70.1425747,203.310623 69.6772959,200.536495 69.1467911,199.385872 C67.9689182,196.830588 64.9087316,190.540066 65.4006444,187.850317 C65.8784249,185.241788 67.775958,187.648619 68.1928608,188.992366 Z M59.986234,211.816206 C57.6913658,211.816206 57.9560747,221.618156 59.3225594,222.200687 C61.4391432,223.102685 62.8012795,211.816206 59.986234,211.816206 Z M221.791072,203.446532 C221.927503,204.049819 223.845148,209.009228 221.128485,208.290879 C219.566322,207.878008 219.325529,203.506094 218.926564,202.180847 C217.697597,198.095009 213.646519,193.018282 213.294842,188.98659 C212.955123,185.090266 215.135302,186.575246 216.80998,189.875503 C219.046145,194.283064 220.722996,198.746577 221.791072,203.446532 Z M202.089015,202.950817 C199.957212,202.941341 199.853937,213.724254 201.187265,214.35281 C203.051098,215.231344 204.808395,202.950817 202.089015,202.950817 Z M208.249611,114.654432 C209.831341,114.242012 204.839921,101.328868 203.071753,101.471004 C200.377376,101.688494 205.847663,115.273512 208.249611,114.654432 Z M181.434114,170.746831 C180.587263,171.127665 180.601939,171.485034 181.476511,171.818489 C182.322818,171.437656 182.308686,171.080286 181.434114,170.746831 Z M157.216135,225.987499 C158.009718,225.987499 158.337478,224.763778 157.165041,224.736253 C156.389939,224.742571 155.980645,225.987499 157.216135,225.987499 Z M58.6844317,170.628746 C58.7137834,168.720066 56.215084,170.119764 56.230847,171.730185 C56.26346,174.943806 58.6317074,173.476424 58.6844317,170.628746 Z M52.5187808,122.883143 C51.7148704,122.883143 51.3854791,124.119498 52.5698745,124.148828 C53.3536737,124.142962 53.7673152,122.883143 52.5187808,122.883143 Z M33.3865269,185.392722 C33.3087993,183.451554 31.6863025,185.43604 31.7770753,185.438747 C32.0651568,185.445967 33.4474045,186.856043 33.3865269,185.392722 Z M37.5995831,84.0632577 C35.2318792,84.0632577 35.5754028,89.8168218 37.0864719,90.1859235 C39.6063697,90.801845 39.9509805,84.0632577 37.5995831,84.0632577 Z M50.212933,208.325849 C47.9273051,208.325849 47.7729369,216.139704 49.3503191,216.625673 C51.8011861,217.379669 52.5931385,208.325849 50.212933,208.325849 Z M31.4567613,213.932223 C30.5849071,214.323435 30.5990394,214.691634 31.4991582,215.035467 C32.371556,214.644256 32.3568801,214.276959 31.4567613,213.932223 Z M201.455507,217.282881 C199.135636,217.282881 199.226409,226.836207 200.65051,227.481458 C202.64099,228.383907 204.139014,217.282881 201.455507,217.282881 Z M177.94561,226.161536 C175.534966,225.679629 174.272299,233.567034 175.395817,234.451885 C177.248236,235.910694 180.42148,226.656078 177.94561,226.161536 Z M157.46508,233.451204 C155.467534,233.451204 155.95836,237.025805 157.110686,237.557799 C159.104971,238.478297 159.694179,233.451204 157.46508,233.451204 Z M86.479514,19.5090896 C84.8080977,19.5090896 74.3192131,24.2532644 78.2392958,25.6588288 C80.6358078,26.5179603 90.7371413,19.5090896 86.479514,19.5090896 Z'
                id='Highlights'
                opacity='0.300000012'
                fill='#FFFFFF'
                mask='url("#LongHairDreads-mask1")'
              />
            </g>
            <g
              id='Group-74'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(44.000000, 33.000000)'
            />
          </g>
        </g>
      </g>
`,Fg=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairFrida-path2' x='0' y='0' width='264' height='280' />
          <filter
            x='-3.8%'
            y='-6.7%'
            width='107.7%'
            height='126.7%'
            filterUnits='objectBoundingBox'
            id='filter5'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter
            x='-6.7%'
            y='-3.4%'
            width='113.3%'
            height='113.8%'
            filterUnits='objectBoundingBox'
            id='filter6'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter
            x='-6.7%'
            y='-3.4%'
            width='113.3%'
            height='113.8%'
            filterUnits='objectBoundingBox'
            id='filter7'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter
            x='-3.8%'
            y='-3.8%'
            width='107.7%'
            height='115.4%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter
            x='-2.5%'
            y='-2.5%'
            width='105.0%'
            height='110.0%'
            filterUnits='objectBoundingBox'
            id='filter2'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter
            x='-2.7%'
            y='-2.7%'
            width='105.4%'
            height='110.8%'
            filterUnits='objectBoundingBox'
            id='filter3'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter
            x='-1.8%'
            y='-1.9%'
            width='103.6%'
            height='107.4%'
            filterUnits='objectBoundingBox'
            id='filter4'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <path
            d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'
            id='LongHairFrida-path1'
          />
        </defs>
        <mask id='LongHairFrida-mask1' fill='white'>
          <use href='#LongHairFrida-path2' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Frida' mask='url("#LongHairFrida-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              class='CustomColor'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(57.000000, 12.000000)'>
              <path
                d='M132,85.9365741 L132,86.1659169 C137.155374,87.0308248 141.196116,91.1828748 141.893354,96.3931952 C144.449672,93.4871212 146,89.6746099 146,85.5 C146,83.370043 145.596416,81.3343479 144.861548,79.4652142 C148.026608,76.4588698 150,72.2098901 150,67.5 C150,61.6639649 146.970105,56.5355997 142.397534,53.6021248 C143.424844,51.4510861 144,49.0427105 144,46.5 C144,38.865183 138.814518,32.4415002 131.77335,30.5587463 C131.922635,29.560863 132,28.5394662 132,27.5 C132,16.1781626 122.821837,7 111.5,7 C108.870853,7 106.357304,7.49493913 104.047446,8.3967274 C100.317449,3.30576666 94.2947759,0 87.5,0 C83.2377504,0 79.2793114,1.30076749 76,3.52698535 C72.7206886,1.30076749 68.7622496,0 64.5,0 C57.7052241,0 51.6825514,3.30576666 47.9525545,8.3967274 C45.6426956,7.49493913 43.1291474,7 40.5,7 C29.1781626,7 20,16.1781626 20,27.5 C20,28.5394662 20.0773647,29.560863 20.2266501,30.5587463 C13.1854816,32.4415002 8,38.865183 8,46.5 C8,48.6917361 8.4273349,50.7836628 9.20323008,52.6970055 C3.75045759,55.3899422 0,61.0069879 0,67.5 C0,72.9379417 2.63063706,77.7614652 6.68874609,80.7674054 C6.2406808,82.2665254 6,83.8551557 6,85.5 C6,89.6746099 7.55032816,93.4871212 10.1066457,96.3931952 C10.8038839,91.1828748 14.8446259,87.0308248 20,86.1659169 L20,85.9365741 C20.0276665,85.957925 20.0554443,85.9790669 20.0833333,86 C22.985911,38.8525302 68.5527463,55.7423492 76.000002,29.3361688 C83.4472619,55.7423461 129.014089,38.8525344 131.916667,86 C131.944556,85.9790669 131.972333,85.957925 132,85.9365741 Z M52,168.610951 L52,172.811832 C51.1847358,172.935746 50.3498715,173 49.5,173 C42.6790709,173 36.8248202,168.861157 34.3116389,162.957863 C25.7536314,162.348807 19,155.213101 19,146.5 C19,145.029028 19.1924867,143.603013 19.5536459,142.245771 C12.8575367,140.144362 8,133.88945 8,126.5 C8,122.755519 9.24731211,119.302363 11.3491137,116.533355 C13.0865598,119.870864 16.346706,122.289132 20.2085808,122.867187 C21.9518066,143.114792 34.4692178,160.282984 52,168.610951 Z M100,168.610951 L100,172.811832 C100.815264,172.935746 101.650128,173 102.5,173 C109.320929,173 115.17518,168.861157 117.688361,162.957863 C126.246369,162.348807 133,155.213101 133,146.5 C133,145.029028 132.807513,143.603013 132.446354,142.245771 C139.142463,140.144362 144,133.88945 144,126.5 C144,122.755519 142.752688,119.302363 140.650886,116.533355 C138.91344,119.870864 135.653294,122.289132 131.791419,122.867187 C130.048193,143.114792 117.530782,160.282984 100,168.610951 Z'
                fill='var(--avataaar-hair-color)'
              />
            </g>
            <g
              id='Ornamentos'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(67.000000, 0.000000)'>
              <g
                id='hoja'
                filter='url("#filter5")'
                opacity='0.899999976'
                transform='translate(120.000000, 64.500000) scale(1, -1) rotate(-20.000000) translate(-120.000000, -64.500000) translate(107.000000, 57.000000)'
                fillRule='nonzero'>
                <path
                  d='M3.61111111,10 C3.61111111,10 1.95,0 13,0 C20.2222222,0 25.2777778,5.71428571 25.2777778,5.71428571 C25.2777778,5.71428571 19.8611111,14.2857143 11.5555556,14.2857143 C5.05555556,14.2857143 3.61111111,10 3.61111111,10 Z'
                  id='leaf'
                  fill='#5DD362'
                />
                <path
                  d='M25.2777778,5.71428571 C25.2777778,5.71428571 19.8611111,14.2857143 11.5555556,14.2857143 C7.22222222,14.2857143 5.12777778,12.3571429 4.18888889,11.0714286 C2.09444444,12.8571429 1.37222222,14.5 1.37222222,14.5714286 C1.3,14.8571429 1.01111111,15 0.722222222,15 C0.65,15 0.505555556,15 0.433333333,14.9285714 C0.0722222222,14.7857143 -0.0722222222,14.3571429 0.0722222222,14 C0.144444444,13.7857143 1.95,9.85714286 7.43888889,7.28571429 C15.3833333,3.14285714 25.2777778,5.71428571 25.2777778,5.71428571 Z'
                  id='leaf'
                  fill='#42BC53'
                />
              </g>
              <g
                id='hoja'
                filter='url("#filter6")'
                transform='translate(93.307368, 21.745191) scale(-1, -1) rotate(-120.000000) translate(-93.307368, -21.745191) translate(85.807368, 7.245191)'>
                <path
                  d='M15,12 C15,5.9 9,0 9,0 C9,0 1.7,4.3 1,13 C0.3,21.7 6.8,23.7 6.8,23.7 C6.8,23.7 15,20.8 15,12 Z'
                  id='leaf'
                  fill='#5DD362'
                />
                <path
                  d='M8,29 C8.1,29 8.2,29 8.3,28.9 C8.8,28.7 9.1,28.1 8.9,27.6 C8.4,26.1 8,24.7 7.8,23.2 C10,22.2 15,18.9 15,12 C15,5.9 9,0 9,0 C9,0 8.6,1.1 8,3 C8,3 8,3 8,3 C7.8,3.5 2.8,16.6 7.1,28.3 C7.2,28.7 7.6,29 8,29 Z'
                  id='leaf'
                  fill='#42BC53'
                />
              </g>
              <g
                id='hoja'
                filter='url("#filter7")'
                transform='translate(29.307368, 59.745191) rotate(-120.000000) translate(-29.307368, -59.745191) translate(21.807368, 45.245191)'>
                <path
                  d='M15,12 C15,5.9 9,0 9,0 C9,0 1.7,4.3 1,13 C0.3,21.7 6.8,23.7 6.8,23.7 C6.8,23.7 15,20.8 15,12 Z'
                  id='leaf'
                  fill='#5DD362'
                />
                <path
                  d='M8,29 C8.1,29 8.2,29 8.3,28.9 C8.8,28.7 9.1,28.1 8.9,27.6 C8.4,26.1 8,24.7 7.8,23.2 C10,22.2 15,18.9 15,12 C15,5.9 9,0 9,0 C9,0 8.6,1.1 8,3 C8,3 8,3 8,3 C7.8,3.5 2.8,16.6 7.1,28.3 C7.2,28.7 7.6,29 8,29 Z'
                  id='leaf'
                  fill='#42BC53'
                />
              </g>
              <g
                id='Flor'
                filter='url("#filter1")'
                transform='translate(13.000000, 42.000000) scale(-1, 1) translate(-13.000000, -42.000000) translate(0.000000, 29.000000)'>
                <path
                  d='M24.4244753,20.9561089 C25.2601813,19.8468762 25.6139026,18.4784184 25.4208747,17.1027473 C25.2278468,15.7270762 24.5099609,14.5094298 23.401533,13.6738657 C23.1024018,13.448127 22.7077101,13.2632031 22.2596302,13.1057873 C22.7130645,12.9646232 23.1137179,12.7934099 23.4204085,12.5786628 C25.7688628,10.9342574 26.3421384,7.68540233 24.6974016,5.33647474 C23.0526648,2.98754715 19.8036678,2.41507618 17.4552135,4.05948158 C17.148523,4.2742286 16.8506035,4.59216121 16.5623958,4.97030055 C16.5681989,4.4950724 16.5289465,4.06126726 16.4191304,3.70296871 C16.0132035,2.3748027 15.1137169,1.2836091 13.8873598,0.632188307 C12.6611446,-0.0200371698 11.2540931,-0.154883395 9.92559572,0.250570203 C7.18364131,1.0892266 5.6350141,4.00181908 6.47286581,6.7436316 C6.58216096,7.10017888 6.78669399,7.47891226 7.05541252,7.86771872 C6.6074755,7.71655089 6.18638481,7.62487741 5.81372806,7.61849197 C2.94678437,7.56848119 0.573854142,9.85989025 0.523370073,12.7271653 C0.504358584,13.8654889 0.853022045,14.9255192 1.46080913,15.7935291 C2.38423063,17.1113044 3.90375474,17.9869973 5.63218533,18.0167186 C6.00484208,18.0231041 6.42832327,17.945939 6.88109576,17.8108811 C6.59932552,18.1901555 6.38197496,18.5617056 6.2605192,18.9140724 C5.69762142,20.5489044 5.99965968,22.2756795 6.92293929,23.5942594 C7.53072638,24.4622693 8.40824188,25.1534041 9.48422896,25.5235908 C12.1953795,26.4571485 15.1603315,25.0102268 16.0934159,22.2994077 C16.2148717,21.947041 16.272275,21.5203224 16.2839005,21.0473654 C16.5573519,21.4328579 16.8436218,21.7550638 17.1409542,21.9792407 C18.2505182,22.81542 19.6186447,23.168668 20.9943157,22.9756401 C22.3707915,22.7827541 23.5887693,22.0653415 24.4244753,20.9561089 Z'
                  fill='#4ACAD3'
                  fillRule='nonzero'
                />
                <path
                  d='M11.178297,8.63990176 C10.9452631,7.87696713 11.3743225,7.06939957 12.1372572,6.83636565 C12.9001918,6.60333173 13.7077594,7.03239119 13.9407933,7.79532582 C14.1738272,8.55826044 13.7087793,11.9767907 13.7087793,11.9767907 C13.7087793,11.9767907 11.4113309,9.40283638 11.178297,8.63990176 Z M8.9355486,14.4373723 C8.1377895,14.4232361 7.50243635,13.7656743 7.5165726,12.9679152 C7.53070884,12.1701561 8.18827062,11.534803 8.98602972,11.5489392 C9.78378882,11.5630754 12.8914353,13.0618808 12.8914353,13.0618808 C12.8914353,13.0618808 9.73297629,14.4510353 8.9355486,14.4373723 Z M14.9931854,12.4189898 C14.9931854,12.4189898 16.7313261,9.4385895 17.3849366,8.98092648 C18.0385471,8.52326347 18.9389925,8.68203629 19.3966555,9.33564681 C19.8543185,9.98925733 19.6955457,10.8897027 19.0419352,11.3473657 C18.3883247,11.8050287 14.9931854,12.4189898 14.9931854,12.4189898 Z M11.9202121,19.2569641 C11.1657288,18.9973982 10.7651265,18.1754621 11.0246924,17.4209789 C11.2842584,16.6664957 13.670556,14.1745805 13.670556,14.1745805 C13.670556,14.1745805 14.0160946,17.6074345 13.7565287,18.3619178 C13.4966313,19.1159277 12.6746953,19.5165301 11.9202121,19.2569641 Z M17.2395979,17.2963365 C16.6023761,16.8164172 14.9694239,13.7771777 14.9694239,13.7771777 C14.9694239,13.7771777 18.3408473,14.5093818 18.978069,14.9893011 C19.6152908,15.4692204 19.7426018,16.3753059 19.2623511,17.0120544 C18.7824319,17.6492761 17.8763463,17.7765872 17.2395979,17.2963365 Z'
                  fill='#FFFFFF'
                />
              </g>
              <g
                id='Flor'
                filter='url("#filter2")'
                transform='translate(20.000000, 16.000000)'>
                <path
                  d='M30.5258511,33.0981022 L30.7843694,30.7838831 L33.0980227,30.5247992 C35.9451175,30.2051869 38.2084249,28.4080043 39.1519882,25.7142103 C40.2177395,22.6719541 39.217042,19.3553405 36.6052724,17.4325757 L34.7311566,16.052869 L35.6634061,13.9191036 C36.8915092,11.1127382 36.3082875,8.02353005 34.142278,5.85752056 C31.9762685,3.69151107 28.8870604,3.10828939 26.0801294,4.33582677 L23.9469296,5.26864203 L22.5666572,3.39396053 C20.6438924,0.78558504 17.3267131,-0.217940904 14.2844569,0.847810436 C11.5917943,1.79137373 9.79348029,4.05468111 9.4749994,6.90177585 L9.21591547,9.21542924 L6.90226208,9.47451317 C4.05460165,9.79355975 1.79129427,11.5918737 0.847730981,14.2845363 C-0.0896097682,16.9607941 0.549614762,19.8457897 2.51650298,21.812678 L2.51706867,21.8132437 C2.78576925,22.0819442 3.08049135,22.3348056 3.39388108,22.5656053 L5.26856258,23.9458777 L4.33518163,26.0796431 C3.10877562,28.8865742 3.6919973,31.9757823 5.85800679,34.1417918 C8.02401628,36.3078013 11.1132244,36.891023 13.9201555,35.664617 L16.0539209,34.731236 L17.4341933,36.6059175 C19.3513012,39.2165558 22.6741374,40.217819 25.7169593,39.1526333 C28.4096219,38.2079386 30.2073702,35.9451969 30.5258511,33.0981022 Z'
                  fill='#FDB599'
                  fillRule='nonzero'
                />
                <path
                  d='M22.8816016,25.1907295 C23.087511,25.9589303 22.6315686,26.7486271 21.8633678,26.9545366 C21.095167,27.1604461 20.3049044,26.703938 20.0995606,25.9363028 C19.8942168,25.1686677 20,20 20,20 C20,20 17.50759,24.5288775 16.9452987,25.0911688 C16.3835731,25.6528945 15.4711225,25.6534601 14.9088312,25.0911688 C14.3465399,24.5288775 14.3471055,23.6164269 14.9088312,23.0547013 C15.4711225,22.49241 20,20 20,20 C20,20 14.831898,20.1063489 14.0636972,19.9004394 C13.2954963,19.6945299 12.8395539,18.904833 13.0454634,18.1366322 C13.2513729,17.3684314 14.0410697,16.912489 14.8092705,17.1183984 C15.5774713,17.3243079 20,20 20,20 C20,20 17.3243079,15.5774713 17.1183984,14.8092705 C16.912489,14.0410697 17.3684314,13.2513729 18.1366322,13.0454634 C18.904833,12.8395539 19.6945299,13.2954963 19.9004394,14.0636972 C20.1063489,14.831898 20,20 20,20 C20,20 22.49241,15.4711225 23.0547013,14.9088312 C23.6169926,14.3465399 24.5288775,14.3465399 25.0911688,14.9088312 C25.6534601,15.4711225 25.6534601,16.3830074 25.0911688,16.9452987 C24.5288775,17.50759 20,20 20,20 C20,20 25.1686677,19.8942168 25.9363028,20.0995606 C26.703938,20.3049044 27.1604461,21.095167 26.9545366,21.8633678 C26.7486271,22.6315686 25.9589303,23.087511 25.1907295,22.8816016 C24.4225287,22.6756921 20,20 20,20 C20,20 22.6751264,24.421963 22.8816016,25.1907295 Z'
                  fill='#FFFFFF'
                />
              </g>
              <g
                id='Flor'
                filter='url("#filter3")'
                transform='translate(89.000000, 26.000000)'>
                <path
                  d='M34.7579072,29.8221549 C35.9471811,28.2436316 36.4505537,26.2962107 36.1758602,24.338525 C35.9011667,22.3808393 34.8795597,20.6480348 33.3021815,19.4589627 C32.8764948,19.1377192 32.3148182,18.8745582 31.6771661,18.6505434 C32.322438,18.4496561 32.8925986,18.2060063 33.3290428,17.9004048 C36.6710739,15.5602894 37.4868893,10.9369187 35.1463023,7.59421406 C32.8057153,4.25150941 28.1821427,3.43683918 24.8401115,5.77695456 C24.4036673,6.08255608 23.979705,6.53499864 23.5695632,7.07312001 C23.5778216,6.3968338 23.5219623,5.77949571 23.3656856,5.26960932 C22.7880204,3.37952692 21.5079818,1.82667448 19.7627813,0.899652591 C18.0177827,-0.0285144339 16.0154402,-0.220410986 14.1248862,0.356580673 C10.2228742,1.55005325 8.01905852,5.69489638 9.21138596,9.59670651 C9.36692136,10.1041007 9.6579876,10.6430675 10.0403947,11.196369 C9.40294591,10.9812455 8.80370145,10.8507871 8.27338223,10.8417001 C4.19350083,10.7705309 0.816638586,14.0313823 0.744795872,18.1117353 C0.717741062,19.7316573 1.21391599,21.2401619 2.07884376,22.4754068 C3.39294359,24.3507024 5.55534329,25.5968808 8.01503297,25.6391765 C8.54535219,25.6482635 9.14799849,25.5384516 9.79232859,25.3462538 C9.39134786,25.8859905 9.08204129,26.414735 8.9092004,26.9161799 C8.10815356,29.2426717 8.53797723,31.7000054 9.85187515,33.5764461 C10.7168029,34.811691 11.965575,35.7952289 13.4967874,36.322033 C17.3549631,37.6505575 21.5743179,35.5914767 22.9021688,31.7337725 C23.0750097,31.2323275 23.1566991,30.6250741 23.173243,29.95202 C23.5623854,30.5006054 23.9697696,30.9591293 24.3928963,31.2781502 C25.9718913,32.4680977 27.9188405,32.9707967 29.8765262,32.6961032 C31.8353571,32.4216117 33.5686332,31.4006783 34.7579072,29.8221549 Z'
                  fill='#F7D30C'
                  fillRule='nonzero'
                />
                <path
                  d='M15.9075765,12.2952448 C15.5759513,11.2095302 16.1865359,10.0602994 17.2722506,9.72867419 C18.3579653,9.397049 19.507196,10.0076336 19.8388212,11.0933483 C20.1704464,12.1790629 19.5086475,17.0438945 19.5086475,17.0438945 C19.5086475,17.0438945 16.2392017,13.3809595 15.9075765,12.2952448 Z M12.715973,20.5454914 C11.5807004,20.5253744 10.676544,19.5896134 10.696661,18.4543409 C10.716778,17.3190683 11.652539,16.4149119 12.7878115,16.4350289 C13.9230841,16.4551458 18.3455041,18.5880611 18.3455041,18.5880611 C18.3455041,18.5880611 13.850774,20.5649348 12.715973,20.5454914 Z M21.3364561,17.6731778 C21.3364561,17.6731778 23.8099641,13.4318389 24.7401021,12.7805492 C25.6702401,12.1292596 26.9516432,12.3552055 27.6029329,13.2853435 C28.2542225,14.2154816 28.0282766,15.4968846 27.0981386,16.1481743 C26.1680005,16.799464 21.3364561,17.6731778 21.3364561,17.6731778 Z M16.9633787,27.4041412 C15.889691,27.0347589 15.3196031,25.8650807 15.6889854,24.7913931 C16.0583677,23.7177054 19.4542528,20.1715184 19.4542528,20.1715184 C19.4542528,20.1715184 19.9459808,25.0567338 19.5765985,26.1304214 C19.2067446,27.2034356 18.0370664,27.7735236 16.9633787,27.4041412 Z M24.5332739,24.6140173 C23.6264583,23.9310553 21.3026416,19.6059836 21.3026416,19.6059836 C21.3026416,19.6059836 26.1004365,20.6479665 27.0072521,21.3309285 C27.9140676,22.0138905 28.095241,23.30332 27.4118074,24.209462 C26.7288453,25.1162776 25.4394159,25.297451 24.5332739,24.6140173 Z'
                  fill='#FFFFFF'
                />
              </g>
              <g
                id='Flor'
                filter='url("#filter4")'
                transform='translate(48.000000, 0.000000)'>
                <path
                  d='M54.1379237,31.5464048 C55.9625462,24.5630399 48.1438056,19.13187 45.1845324,17.3616591 C45.6989766,14.4276922 46.8574047,4.80065356 40.7169237,1.24584505 C34.6121663,-2.28828261 26.9236153,3.44959091 24.6013353,5.39402404 C24.4009276,5.26871855 24.1656352,5.12587117 23.8977086,4.97076479 C20.8314374,3.19565841 13.1300975,-0.380512394 7.84990403,4.73636964 C2.20473848,10.2044755 5.53732179,18.7392794 6.80518652,21.4340926 C4.64577053,23.4449497 -1.57937327,30.0260297 0.986877047,37.024011 C1.69277097,38.9530347 2.99822799,40.4795811 4.86875265,41.5624535 C8.89955964,43.8959428 14.4760657,43.5196765 16.591707,43.2691852 C17.5849083,45.1496134 20.4220029,49.9813784 24.4796026,52.3303784 C26.1496784,53.2972082 27.8550402,53.7431811 29.5502657,53.6552686 C36.4552712,53.2971895 39.4664791,43.6601819 40.2201879,40.7426742 C43.0812084,40.3465884 52.3062726,38.5442744 54.1379237,31.5464048 Z'
                  fill='#FF7398'
                  fillRule='nonzero'
                />
                <path
                  d='M27.7643057,25.6030632 C27.7643057,25.6030632 31.4492792,33.7908502 28.1176886,34.3138653 C24.7835165,34.8339614 26.6574825,25.7216143 26.6574825,25.7216143 C26.6574825,25.7216143 19.5457139,31.7290717 18.5074329,28.7503567 C17.4680864,25.7710249 26.208593,24.7024398 26.208593,24.7024398 C26.208593,24.7024398 18.2208741,20.0098596 20.8149072,17.8660564 C23.4089403,15.7222531 27.0309781,23.9576566 27.0309781,23.9576566 C27.0309781,23.9576566 28.975509,15.0385915 31.8514465,16.7035111 C34.727384,18.3684307 27.9942413,24.5153028 27.9942413,24.5153028 C27.9942413,24.5153028 36.8711392,23.5256765 36.3635103,26.8673556 C35.8586276,30.2092 27.7643057,25.6030632 27.7643057,25.6030632 Z'
                  fill='#FFFFFF'
                />
              </g>
            </g>
            <g
              id='Arete'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(182.000000, 129.000000)'>
              <rect
                id='Cadenita'
                fill='#E6E6E6'
                x='9'
                y='0'
                width='2'
                height='39'
                rx='1'
              />
              <polygon
                id='Rayo'
                fill='#9177FF'
                fillRule='nonzero'
                points='20 37 10.57 37 17 20 6 20 0 41 8.636 41 4 60'
              />
            </g>
          </g>
        </g>
      </g>
`,Tg=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairFro-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M180.665797,104.495381 C181.518431,106.144109 182,108.015816 182,110 L182,123 C182,129.018625 177.569129,134.002364 171.791419,134.867187 C170.048193,155.114792 157.530782,172.282984 140,180.610951 L140,190.054182 C143.832093,191.949549 148.058707,193 152.5,193 C160.121477,193 167.110765,189.906604 172.559029,184.758484 C174.020475,184.918263 175.501874,185 177,185 C195.390093,185 211.259672,172.683502 218.621514,154.88375 C224.900145,149.813883 229,141.454126 229,132 C229,130.214987 228.853847,128.468986 228.57447,126.776775 C230.785923,120.339137 232,113.331199 232,106 C232,93.1344627 228.26103,81.2644681 221.954258,71.7251464 C221.984605,71.1545437 222,70.5793265 222,70 C222,59.0433596 216.493437,49.5565783 208.470603,44.9571334 C201.160166,27.369138 185.740722,14.9905991 167.696954,14.0567347 C163.273738,9.07458291 157.201041,6 150.5,6 C149.549121,6 148.610894,6.0619088 147.688236,6.18239195 C137.909703,2.19640473 127.211351,0 116,0 C104.788649,0 94.0902965,2.19640473 84.3117637,6.18239195 C83.3891064,6.0619088 82.4508793,6 81.5,6 C74.7989589,6 68.7262617,9.07458291 64.3030458,14.0567347 C46.2592779,14.9905991 30.8398341,27.369138 23.5293968,44.9571334 C15.5065631,49.5565783 10,59.0433596 10,70 C10,70.5793265 10.0153947,71.1545437 10.0457422,71.7251464 C3.73896962,81.2644681 0,93.1344627 0,106 C0,113.331199 1.21407678,120.339137 3.42552978,126.776775 C3.14615333,128.468986 3,130.214987 3,132 C3,141.454126 7.0998554,149.813883 13.3784857,154.88375 C20.7403278,172.683502 36.6099075,185 55,185 C56.4981261,185 57.9795252,184.918263 59.4409604,184.758485 C64.8892346,189.906604 71.878523,193 79.5,193 C83.9412925,193 88.1679073,191.949549 92,190.054182 L92,180.610951 C74.4692178,172.282984 61.9518066,155.114792 60.2085808,134.867187 C54.4308707,134.002364 50,129.018625 50,123 L50,110 C50,108.017039 50.4809755,106.146415 51.3326281,104.498428 C54.034525,103.696079 57.0103265,101.444735 59.9905531,98.1675057 C59.9937016,98.1669748 59.9968506,98.1664452 60,98.1659169 L60,98.1571139 C66.866448,90.6014009 73.7548744,77.602262 77.3694073,64.3345491 C88.4864044,66.0717584 101.905207,67.0867832 116.353789,67.0867832 C130.513023,67.0867832 143.683308,66.1120054 154.66752,64.4380466 C158.288087,77.6642508 165.154277,90.6101259 172,98.1475774 L172,98.1659169 C172.006563,98.167018 172.013125,98.1681244 172.019685,98.1692362 C174.995621,101.441388 177.967097,103.690532 180.665797,104.495381 Z'
            id='LongHairFro-path2'
          />
          <path
            d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'
            id='LongHairFro-path3'
          />
        </defs>
        <mask id='LongHairFro-mask1' fill='white'>
          <use href='#LongHairFro-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Fro' mask='url("#LongHairFro-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <path
              d='M67,109.777572 C76.0375502,108.717226 88.9217814,89.3309188 94.3694073,69.3345491 C105.486404,71.0717584 118.905207,72.0867832 133.353789,72.0867832 C147.513023,72.0867832 160.683308,71.1120054 171.66752,69.4380466 C177.129582,89.3913728 189.978479,108.706688 199,109.77655 L199,89 C199,66.1159733 187.353465,45.9521405 169.664405,34.1125124 C169.136033,36.5946509 168.784517,39.3353373 168.624132,42.297284 C158.284896,40.892676 146.228147,40.0867832 133.353789,40.0867832 C120.190372,40.0867832 107.88169,40.9292706 97.3896338,42.392803 C97.2315704,39.3922173 96.8778294,36.6175705 96.3431783,34.1074375 C78.6498638,45.9463781 67,66.1127033 67,89 L67,89 L67,109.777572 Z'
              id='Shadow'
              opacity='0.16'
              fill='#000000'
              fillRule='evenodd'
            />
            <g
              id='Hair'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(17.000000, 0.000000)'>
              <mask id='LongHairFro-mask2' fill='white'>
                <use href='#LongHairFro-path2' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#LongHairFro-path2' />
            </g>
          </g>
        </g>
      </g>
`,Og=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairFroBand-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M80.0203173,73.8104172 C78.0626651,79.5136273 77,85.6327143 77,92 L77,92 L77,98.1659169 C71.3245733,99.1180731 67,104.054007 67,110 L67,123 C67,129.018625 71.4308707,134.002364 77.2085808,134.867187 C78.9518066,155.114792 91.4692178,172.282984 109,180.610951 L109,191.55498 C104.295298,193.764912 99.0418843,195 93.5,195 C84.6936661,195 76.615743,191.881303 70.3104439,186.688122 C68.4019201,186.894245 66.4633102,187 64.5,187 C43.405572,187 25.1625605,174.791635 16.4510993,157.055039 C8.9342791,151.923647 4,143.288055 4,133.5 C4,131.385405 4.23029535,129.324599 4.66717333,127.341294 C2.29639351,121.011656 1,114.157223 1,107 C1,94.2436789 5.11811695,82.4491956 12.0974246,72.8734763 C12.0329017,72.0908558 12,71.2992702 12,70.5 C12,59.2025056 18.5734777,49.4403292 28.1042855,44.8296184 C36.5367477,26.7016558 54.5576512,13.9359054 75.6500672,13.049296 C80.7818839,8.06730831 87.7827378,5 95.5,5 C97.8269611,5 100.088787,5.27887473 102.253881,5.80502563 C111.775927,2.05800249 122.147627,0 133,0 C143.346018,0 153.255173,1.87043661 162.407758,5.29160393 C163.744126,5.09944416 165.11045,5 166.5,5 C174.217262,5 181.218116,8.06730831 186.349933,13.049296 C207.442349,13.9359054 225.463252,26.7016558 233.895715,44.8296184 C243.426522,49.4403292 250,59.2025056 250,70.5 C250,71.2992702 249.967098,72.0908558 249.902575,72.8734763 C256.881883,82.4491956 261,94.2436789 261,107 C261,114.157223 259.703606,121.011656 257.332827,127.341294 C257.769705,129.324599 258,131.385405 258,133.5 C258,143.288055 253.065721,151.923647 245.548901,157.055039 C236.837439,174.791635 218.594428,187 197.5,187 C195.53669,187 193.59808,186.894245 191.689556,186.688122 C185.384257,191.881303 177.306334,195 168.5,195 C164.481965,195 160.61557,194.350752 157,193.151442 L157,180.610951 C174.530782,172.282984 187.048193,155.114792 188.791419,134.867187 C194.569129,134.002364 199,129.018625 199,123 L199,110 C199,104.054007 194.675427,99.1180731 189,98.1659169 L189,92 C189,86.5585666 188.223906,81.2983998 186.776371,76.3241528 L188.153157,89.1947292 L176.812614,65.1945789 L131.676809,45.6707349 L101.563146,56.2283606 L80.0648273,76.419385 L80.0203173,73.8104172 Z'
            id='LongHairFroBand-path2'
          />
        </defs>
        <mask id='LongHairFroBand-mask1' fill='white'>
          <use href='#LongHairFroBand-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Fro-+-Band' mask='url("#LongHairFroBand-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <mask id='LongHairFroBand-mask2' fill='white'>
              <use href='#LongHairFroBand-path2' />
            </mask>
            <use
              class='CustomColor'
              stroke='none'
              fill='var(--avataaar-hair-color)'
              fillRule='evenodd'
              href='#LongHairFroBand-path2'
            />
            <path
              d='M76.6313898,98.975 C76.2155465,96.423245 76,93.8109442 76,91.1521739 C76,62.3493236 101.295912,39 132.5,39 C163.704088,39 189,62.3493236 189,91.1521739 C189,93.8109442 188.784453,96.423245 188.36861,98.975 C184.279562,73.883217 160.823662,54.6456522 132.5,54.6456522 C104.176338,54.6456522 80.7204382,73.883217 76.6313898,98.975 Z'
              id='Band'
              stroke='none'
              fill='#92D9FF'
              fillRule='evenodd'
            />
          </g>
        </g>
      </g>
`,Ag=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairMiaWallace-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M148.859344,69 C148.952588,70.3212062 149,71.6550662 149,73 L149,111 C149,133.339168 135.919579,152.623239 117,161.610951 L117,170.317435 C135.145605,171.815797 152.721153,174.335027 163.000169,177 C172.952646,163.439362 185.884594,150.800081 186.000169,126 C186.085192,107.014914 158.324059,30.4276364 146.000169,15 C137.861928,4.81215989 117.30504,1.44935656 93.0001685,1 C68.6952966,0.550643437 48.9231015,6.50878211 41,16 C30.3189583,28.7950013 -0.0850232975,107.014914 4.92293245e-13,126 C0.115574613,150.800081 13.047523,163.439362 23,177 C33.2789946,174.335033 50.8544902,171.815807 69,170.317444 L69,161.610951 C50.0804213,152.623239 37,133.339168 37,111 L37,73 L37,73 C37,71.6550662 37.0474121,70.3212062 37.1406562,69 L65.3735517,69 L69.2529753,47.5561285 L72.058097,69 L148.859344,69 Z'
            id='LongHairMiaWallace-path2'
          />
        </defs>
        <mask id='LongHairMiaWallace-mask1' fill='white'>
          <use href='#LongHairMiaWallace-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Mia-Wallace' mask='url("#LongHairMiaWallace-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <path
              d='M69.0330562,76.212888 C81.9708809,43.1292208 95.6458945,26.5873873 110.058097,26.5873873 C110.596882,26.5873873 139.311316,26.3494141 158.112657,26.226792 C178.767149,35.5853581 193,55.3036503 193,78.114622 L193,93 L110.058097,93 L107.252975,69.820435 L103.373552,93 L69,93 L69,78.114622 C69,77.478246 69.0110772,76.844277 69.0330621,76.2128728 L69.0330562,76.212888 Z'
              id='Shadow'
              opacity='0.16'
              fill='#000000'
              fillRule='evenodd'
            />
            <g
              id='Hair'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(40.000000, 19.000000)'>
              <mask id='LongHairMiaWallace-mask2' fill='white'>
                <use href='#LongHairMiaWallace-path2' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#LongHairMiaWallace-path2' />
            </g>
          </g>
        </g>
      </g>
`,Rg=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairNotTooLong-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M59,102.340285 C59,118.921045 59,145.474283 59,182 C59,186.418278 62.581722,190 67,190 L109,190 L109,180.610951 C91.4692178,172.282984 78.9518066,155.114792 77.2085808,134.867187 C71.4308707,134.002364 67,129.018625 67,123 L67,110 C67,106.509412 68.4903619,103.366917 70.8694649,101.174135 C82.4088376,98.5552525 94.9706808,93.6376395 107.341516,86.4953343 C119.473269,79.4910638 129.843979,71.2579416 137.820938,62.752196 C134.394107,70.6604321 130.244513,77.5880409 125.372156,83.5350224 C138.047336,78.0120855 146.677812,69.1324394 151.263585,56.8960843 C151.64142,57.8180234 152.034942,58.738913 152.444252,59.6582378 C162.699828,82.6926393 180.317578,99.018563 198.205873,104.403108 C198.718861,106.513486 199,108.48395 199,110 L199,123 C199,129.018625 194.569129,134.002364 188.791419,134.867187 C187.048193,155.114792 174.530782,172.282984 157,180.610951 L157,190 L175,190 C192.673112,190 207,175.673112 207,158 C207,133.944314 207,115.902549 207,103.874706 C207,103.807916 206.990567,103.721208 206.971823,103.615272 C206.82774,91.3536714 206.623862,84.2237818 206.360189,82.2256031 C201.576875,45.9764505 170.555563,18 133,18 C96.9151011,18 66.8627142,43.8282542 60,78 C54.4771525,78 50,83.5964406 50,90.5 C50,95.0507583 51.6949619,99.1431718 54.8534901,101.273154 C55.7582038,101.883256 57.323834,102.197638 58.9999994,102.340287 Z'
            id='LongHairNotTooLong-path2'
          />
        </defs>
        <mask id='LongHairNotTooLong-mask1' fill='white'>
          <use href='#LongHairNotTooLong-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Long-but-not-too-long' mask='url("#LongHairNotTooLong-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g id='Behind' strokeWidth='1' fillRule='evenodd'>
              <mask id='LongHairNotTooLong-mask2' fill='white'>
                <use href='#LongHairNotTooLong-path2' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#LongHairNotTooLong-path2' />
            </g>
            <g
              id='Top'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(50.000000, 18.000000)'
              opacity='0.159999996'>
              <path
                d='M11.8989604,84.7749122 C25.7109099,83.0145308 41.6792969,77.5379209 57.3415164,68.4953343 C69.4732686,61.4910638 79.8439791,53.2579416 87.8209384,44.752196 C84.3941075,52.6604321 80.2445133,59.5880409 75.3721558,65.5350224 C88.0473359,60.0120855 96.6778122,51.1324394 101.263585,38.8960843 C101.64142,39.8180234 102.034942,40.738913 102.444252,41.6582378 C114.38223,68.4713761 136.296003,86.1944823 157,88.1510343 L157,88.1510343 L157,74 C157,33.1309285 123.869071,-7.50752664e-15 83,0 C46.9151011,6.62868839e-15 16.8627142,25.8282542 10.3212729,60.0063288 C10.214595,60.0021202 10.1074956,60 10,60 C4.4771525,60 0,65.5964406 0,72.5 C0,78.9816827 3.9466744,84.3111215 8.99999442,84.9382803 L8.99999434,85.0927525 C9.31629342,85.0638362 9.63387297,85.0328725 9.95270131,84.9998631 C9.96845895,84.9999543 9.98422521,85 10,85 C10.6492988,85 11.2841443,84.9226474 11.8989604,84.7749122 Z'
                id='Combined-Shape'
                fill='#FFFFFF'
              />
            </g>
          </g>
        </g>
      </g>
`,Hg=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairShavedSides-path2' x='0' y='0' width='264' height='280' />
          <path
            d='M156,180.610951 C173.530782,172.282984 186.048193,155.114792 187.791419,134.867187 C193.569129,134.002364 198,129.018625 198,123 L198,110 C198,104.054007 193.675427,99.1180731 188,98.1659169 L188,92 C188,61.072054 162.927946,36 132,36 C101.072054,36 76,61.072054 76,92 L76,92 L76,98.1659169 C70.3245733,99.1180731 66,104.054007 66,110 L66,123 C66,129.018625 70.4308707,134.002364 76.2085808,134.867187 C77.9518066,155.114792 90.4692178,172.282984 108,180.610951 L108,199 L104,199 L104,199 C64.235498,199 32,231.235498 32,271 L32,280 L232,280 L232,271 C232,231.235498 199.764502,199 160,199 L156,199 L156,180.610951 Z M0,5.68434189e-14 L264,5.68434189e-14 L264,280 L0,280 L0,5.68434189e-14 Z'
            id='LongHairShavedSides-path3'
          />
          <rect id='LongHairShavedSides-path4' x='0' y='0' width='112' height='150' rx='56' />
          <path
            d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'
            id='LongHairShavedSides-path1'
          />
        </defs>
        <mask id='LongHairShavedSides-mask2' fill='white'>
          <use href='#LongHairShavedSides-path2' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Shaved-Sides' mask='url("#LongHairShavedSides-mask2")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Behind'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(1.000000, 0.000000)'>
              <mask id='LongHairShavedSides-mask3' fill='white'>
                <use href='#LongHairShavedSides-path3' />
              </mask>
              <g id='Mask-Hair' />
              <path
                d='M116.179148,40 L146,40 C171.405098,40 192,60.5949015 192,86 L192,154.108712 C192,180.650314 210.758775,204.349179 222.609956,226.05167 C234.461138,247.754161 215.254522,268.242596 195.770735,276.769484 C190.902336,278.900091 185.645645,280 180.331438,280 L135.26309,280 C78.9108161,280 70.2166412,216.309596 67.6972794,146.504423 L70.2166412,84.1431398 C71.212998,59.4805095 91.4964003,40 116.179148,40 Z'
                class='CustomColor'
                fill='var(--avataaar-hair-color)'
                mask='url("#LongHairShavedSides-mask3")'
              />
            </g>
            <g
              id='Top'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(77.000000, 36.000000)'>
              <mask id='LongHairShavedSides-mask1' fill='white'>
                <use href='#LongHairShavedSides-path4' />
              </mask>
              <g id='Mask' />
              <path
                d='M98.8014742,19.9396383 C107.026909,29.4843994 112,41.9114359 112,55.5 L112,65.5 L112,61.5 C112,45.7605792 105.327989,31.5794902 94.657974,21.6307409 C63.9198041,32.6768506 38.0141969,32.8027026 16.9411526,22.0082968 C6.50516181,31.936614 -1.90326939e-15,45.958626 0,61.5 L0,61.5 L0,65.5 L0,55.5 C-1.66642407e-15,41.8926148 4.98687681,29.4499771 13.2327229,19.8999944 C9.3991564,16.860899 8.25944611,8.18718262 19.4671989,4.87682391 C31.3115751,1.37843003 29.3063159,-13.2020165 47.4575903,-15.9260752 C65.6088648,-18.6501339 63.9714902,-11.3745857 81.028596,-12.3495122 C98.0857017,-13.3244386 103.635746,-29.1131795 106.849606,-25.0739991 C119.588767,-9.06341321 116.420993,9.34036319 98.8014742,19.9396383 Z'
                id='Shadow'
                opacity='0.16'
                fill='#000000'
                mask='url("#LongHairShavedSides-mask1")'
              />
            </g>
            <path
              d='M90.8779151,52.3613196 C113.02785,65.2272934 140.816672,65.2272934 174.244382,52.3613196 C188.77455,44.5891967 199.330608,29.0424257 182.951044,8.96303524 C180.782417,6.30455678 172.244382,15.6755614 155.351199,16.6504878 C138.458015,17.6254143 142.079654,13.3498661 124.102817,16.0739248 C106.12598,18.7979835 108.111968,33.37843 96.3814191,36.8768239 C84.6508698,40.3752178 86.5778198,49.8635735 90.8779151,52.3613196 Z'
              class='CustomColor'
              fill='#E0C863'
              fillRule='evenodd'
            />
          </g>
        </g>
      </g>
`,Pg=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairStraight-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M133.506381,81.3351151 C137.363649,83.3307002 140,87.3574737 140,92 L140,105 C140,111.018625 135.569129,116.002364 129.791419,116.867187 C128.048193,137.114792 115.530782,154.282984 98,162.610951 L98,162.610951 L98,181 L102,181 C119.490913,181 135.525121,187.236892 148,197.608051 L148,74 C148,53.5654643 139.717268,35.0654643 126.325902,21.6740982 C112.934536,8.28273213 94.4345357,-3.55271368e-15 74,0 C33.1309285,7.10542736e-15 -7.10542736e-15,33.1309285 0,74 L0,257.716445 C13.5691766,255.775526 24,244.105888 24,230 L24,184.423101 C30.9346808,182.200199 38.3271796,181 46,181 L50,181 L50,162.610951 C38.7726252,157.277407 29.6015372,148.317951 24,137.245847 L24,75.2659587 C33.1467898,72.2910056 42.777598,68.0170651 52.3415164,62.4953343 C67.7445474,53.6023901 80.4313947,42.9409152 89.0661426,32.3970356 C90.8310687,37.5951441 93.1752556,42.8009742 96.1104311,47.8848473 C104.877881,63.0705152 117.224186,74.2337047 130,79.9170491 L130,80.1659169 C130.400422,80.233095 130.794121,80.3201038 131.18005,80.4258987 C131.954509,80.7493055 132.730185,81.0524853 133.506381,81.3351151 Z'
            id='LongHairStraight-path2'
          />
        </defs>
        <mask id='LongHairStraight-mask1' fill='white'>
          <use href='#LongHairStraight-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Straight' mask='url("#LongHairStraight-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hair'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(59.000000, 18.000000)'>
              <mask id='LongHairStraight-mask2' fill='white'>
                <use href='#LongHairStraight-path2' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#LongHairStraight-path2' />
            </g>
            <path
              d='M192.506381,99.3351151 C197.3745,101.107702 202.263079,102.071957 207,102.148232 L207,102.148232 L207,92 C207,71.5654643 198.717268,53.0654643 185.325902,39.6740982 C198.717268,53.0654643 207,71.5654643 207,92 L207,215.608051 C194.525121,205.236892 178.490913,199 161,199 L157,199 L157,180.610951 L157,180.610951 C174.530782,172.282984 187.048193,155.114792 188.791419,134.867187 C194.569129,134.002364 199,129.018625 199,123 L199,110 C199,105.357474 196.363649,101.3307 192.506381,99.3351151 Z M190.18005,98.4258987 C189.794121,98.3201038 189.400422,98.233095 189,98.1659169 L189,97.9170491 C189.392974,98.0918644 189.786355,98.2614951 190.18005,98.4258987 Z M83,155.245847 C88.6015372,166.317951 97.7726252,175.277407 109,180.610951 L109,199 L105,199 C97.3271796,199 89.9346808,200.200199 83,202.423101 L83,155.245847 Z'
              id='Shadow'
              opacity='0.24'
              fill='#000000'
              fillRule='evenodd'
            />
          </g>
        </g>
      </g>
`,Ng=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairStraight2-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M21,157.540812 L21,69.046252 C21,65.5140485 21.3981158,62.0748299 22.1519234,58.7710202 C25.205041,38.7314193 36.7752683,22.8108863 50,13 C69.9046441,-1.75961713 103.441939,-6.01828252 115.047069,11.5221046 C123.698343,7.68103538 136.519049,11.1821114 146,20 C155.565156,29.4150438 163.19967,50.1973768 158.657409,67.2035172 C158.762104,68.4691962 158.815476,69.7490355 158.815476,71.0408963 L158.815476,92.8921195 C157.934142,87.9183006 153.988995,84.0029116 149,83.1659169 L149,83 C142.963851,61.4642087 125.229516,51.5800472 114.429684,41.777113 C97.5353566,60.6732583 44.8226408,60.7398069 27,98 L27,108 C27,114.018625 31.4308707,119.002364 37.2085808,119.867187 C38.9518066,140.114792 51.4692178,157.282984 69,165.610951 L69,166 C71.9303712,209.855112 62.358462,264.797432 0,248 C13.6057325,240.037752 20.8081123,189.055563 21,157.540812 Z M117,165.610951 C134.530782,157.282984 147.048193,140.114792 148.791419,119.867187 C153.87876,119.105701 157.921895,115.150816 158.815476,110.107881 L158.815476,111.47039 L158.815476,111.47039 C158.815476,127.298552 162.572711,142.900645 169.7782,156.993609 L196.726668,209.701177 C203.689761,223.320048 201.645562,239.173573 192.790715,250.468968 C189.966212,213.288807 158.90349,184 121,184 L121,184 L117,184 L117,165.610951 Z'
            id='LongHairStraight2-path2'
          />
          <path
            d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'
            id='LongHairStraight2-path3'
          />
        </defs>
        <mask id='LongHairStraight2-mask1' fill='white'>
          <use href='#LongHairStraight2-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Straight' mask='url("#LongHairStraight2-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hair'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(40.000000, 15.000000)'>
              <mask id='LongHairStraight2-mask2' fill='white'>
                <use href='#LongHairStraight2-path2' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#LongHairStraight2-path2' />
            </g>
            <path
              d='M67,113 C84.8226408,80.6646674 137.535357,80.6069148 154.429684,64.2083647 C165.207546,72.6982916 182.891727,79.2665518 188.963018,97.8687161 C182.891727,76.423995 165.207546,66.5601054 154.429684,56.777113 C137.535357,75.6732583 84.8226408,75.7398069 67,113 Z'
              id='Shadow'
              opacity='0.16'
              fill='#000000'
              fillRule='evenodd'
            />
          </g>
        </g>
      </g>
`,Ig=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairStraightStrand-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M8.46130289,88.6935361 C8.16088005,89.7438903 8,90.8531574 8,92 L8,105 C8,111.018625 12.4308707,116.002364 18.2085808,116.867187 C19.9518066,137.114792 32.4692178,154.282984 50,162.610951 L50,181 L46,181 L46,181 C30.3810228,181 15.9236322,185.973344 4.12503673,194.422823 C1.45272918,186.776619 1.52589027e-14,178.557961 1.42108547e-14,170 L0,74 L0,74 C-5.00501776e-15,33.1309285 33.1309285,7.50752664e-15 74,0 L74,0 L74,0 C114.869071,-7.50752664e-15 148,33.1309285 148,74 L148,170 C148,178.557961 146.547271,186.776619 143.874963,194.422823 C132.076368,185.973344 117.618977,181 102,181 L102,181 L98,181 L98,162.610951 C115.530782,154.282984 128.048193,137.114792 129.791419,116.867187 C135.569129,116.002364 140,111.018625 140,105 L140,92 C140,90.3107559 139.650957,88.7030352 139.021057,87.2450254 C126.064756,85.0568849 111.478699,79.7686298 97.1489304,71.4953343 C85.0171781,64.4910638 74.6464677,56.2579416 66.6695083,47.752196 C70.0963393,55.6604321 74.2459335,62.5880409 79.118291,68.5350224 C66.4431108,63.0120855 57.8126345,54.1324394 53.2268621,41.8960843 C52.8490267,42.8180234 52.455505,43.738913 52.0461952,44.6582378 C42.206947,66.7575512 25.5911314,82.6819966 8.46130289,88.6935361 Z'
            id='LongHairStraightStrand-path2'
          />
          <path
            d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'
            id='LongHairStraightStrand-path3'
          />
        </defs>
        <mask id='LongHairStraightStrand-mask1' fill='white'>
          <use href='#LongHairStraightStrand-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Straight-+-Strand' mask='url("#LongHairStraightStrand-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hair'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(59.000000, 18.000000)'>
              <mask id='LongHairStraightStrand-mask2' fill='white'>
                <use href='#LongHairStraightStrand-path2' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#LongHairStraightStrand-path2' />
            </g>
            <path
              d='M59,102.418954 L59,108.837908 C78.9453743,105.750496 99.5895621,88.3902571 111.046195,62.6582378 C111.455505,61.738913 111.849027,60.8180234 112.226862,59.8960843 C116.231662,70.5822127 123.321236,78.70828 133.495584,84.2742862 C134.956498,86.4697241 136.497401,88.5566361 138.118291,90.5350224 C125.443111,85.0120855 116.812635,76.1324394 112.226862,63.8960843 C111.849027,64.8180234 111.455505,65.738913 111.046195,66.6582378 C99.5895621,92.3902571 78.9453743,109.750496 59,112.837908 L59,102.418954 Z M207,101.140388 L207,110.280776 C192.046922,109.412723 173.901259,103.744646 156.14893,93.4953343 C145.87623,87.5643877 136.866205,80.7523483 129.502994,73.639773 C128.137922,71.1289501 126.860094,68.4997578 125.669508,65.752196 C133.646468,74.2579416 144.017178,82.4910638 156.14893,89.4953343 C173.901259,99.7446457 192.046922,105.412723 207,106.280776 L207,101.140388 Z'
              id='Shadow'
              opacity='0.16'
              fill='#000000'
              fillRule='evenodd'
            />
          </g>
        </g>
      </g>
`,Dg=`
`,Bg=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='ShortHairDreads01-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'
            id='ShortHairDreads01-path2'
          />
          <path
            d='M185.831676,73.928751 C187.588868,74.9173665 188.980206,84.8279256 189.047535,88.6176558 C189.08965,90.9562115 189.127358,99.8740101 186.654049,99.1031293 C185.901013,98.868423 184.751682,94.1472484 184.58821,91.3840965 C184.424737,88.6209446 182.855069,79.2200034 180.446757,74.8947261 C179.896491,73.9063366 178.320781,72.1708928 179.001547,71.3348066 C179.846064,70.2980597 180.666198,70.8995898 181.697184,71.3146953 C182.8124,71.7641482 185.6344,73.8180261 185.831676,73.928751 Z M186.636742,70.9565876 C185.890663,71.9188016 180.795829,69.217693 178.671174,68.0439722 C160.825581,58.1840558 157.361562,55.0486831 129.245707,55.4578453 C101.129853,55.8670074 81.8674779,69.0400225 80.7839818,70.3874406 C80.0301584,71.3248831 79.0677773,73.8279219 78.2764086,80.8005402 C77.48504,87.7731584 78.4952061,100.277789 75.6304859,100.262618 C73.1915094,100.249702 72.6608912,76.4770353 73.7137309,67.0463924 C73.8753757,65.5984852 74.4983655,63.0083957 74.0474223,61.7058802 C73.6532986,60.5682485 71.7253768,60.5705662 72.0331217,58.6750651 C72.3829065,56.5173393 74.5584694,57.5890837 75.5060085,56.5574014 C77.3005851,54.602966 74.5321945,54.1404306 74.0730403,52.4306721 C73.3905494,49.8892108 75.3628102,49.2336489 77.1396512,48.4310821 C79.1060001,47.5437559 78.8504766,48.3231462 80.4463492,46.5849138 C78.3147968,45.0224912 77.543628,42.8939014 80.4624425,41.7519655 C81.7019616,41.2669159 84.9268789,41.9089031 85.8980654,41.1801698 C86.1512899,40.9901231 86.251463,39.9008308 86.4074703,39.6780059 C87.9583471,37.4593592 87.5757186,35.8532324 87.4183976,33.3624282 C87.2889936,31.3242265 87.3064008,29.4532263 89.7466834,29.2496048 C91.3750712,29.1138571 92.6993269,30.4441843 94.1582415,30.835866 C95.7767762,31.2705896 95.1688403,31.5877757 96.4369334,30.7150174 C98.6630755,29.1817309 97.1479982,26.1942888 98.913344,24.4120212 C101.335891,21.9662454 102.923881,25.5513084 104.868882,25.8218105 C109.09126,26.4101607 107.736132,22.1218586 110.235861,20.5504965 C113.223647,18.6738677 113.512672,22.8012592 115.378847,22.948264 C116.996068,23.0750722 119.907657,19.9545311 121.317306,19.3731338 C125.499944,17.6471518 127.572378,22.5039387 131.554013,21.8844657 C134.443268,21.434843 135.223305,21.067662 137.830761,22.7115333 C140.361692,24.3070651 140.96306,23.1664535 143.828996,23.1436082 C145.853806,23.128378 147.093982,24.8202575 148.787729,24.9967295 C149.632467,25.085131 150.441078,24.2050888 151.347562,24.2603811 C154.58496,24.4567186 154.789576,28.6430444 157.361562,29.7955753 C159.711524,30.8487786 162.474332,29.3691289 164.806559,29.0953159 C170.497048,28.4275036 166.60015,33.7425217 166.760755,36.914713 C168.994451,37.4358517 171.261648,35.3509661 173.485163,35.7347015 C176.986623,36.3392753 175.664995,39.9680424 174.853429,42.4144804 C177.279589,42.3707762 183.612828,39.6776748 185.184725,43.1220237 C185.995306,44.8980006 184.106797,47.2689496 184.13767,49.0743937 C184.181023,51.615855 186.048513,53.7186196 186.709327,56.1240021 C187.601032,59.3710203 188.871834,68.0740038 186.636742,70.9565876 Z'
            id='ShortHairDreads01-path3'
          />
        </defs>
        <mask id='ShortHairDreads01-mask2' fill='white'>
          <use href='#ShortHairDreads01-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Short-Hair/Dreads-01' mask='url("#ShortHairDreads01-mask2")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hair'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(1.000000, 0.000000)'>
              <mask id='ShortHairDreads01-mask1' fill='white'>
                <use href='#ShortHairDreads01-path3' />
              </mask>
              <use
                class='CustomColor'
                fill='var(--avataaar-hair-color)'
                href='#ShortHairDreads01-path3'
              />
            </g>
          </g>
        </g>
      </g>
`,Vg=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='ShortHairDreads02-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'
            id='ShortHairDreads02-path2'
          />
          <path
            d='M153.503392,98.8736491 C157.89934,100.654655 161,104.965228 161,110 L161,123 C161,128.28759 157.580126,132.776426 152.8316,134.375285 C151.985668,145.321578 147.992514,155.385777 141.755762,163.66426 C141.964657,164.471736 142.166135,165.290125 142.311896,166.167999 C142.862922,169.494538 142.191903,172.260864 143.956619,175.261034 C144.414366,176.040649 145.140008,176.50834 145.478876,177.405464 C146.012313,178.819858 145.247,181.999219 147.428222,182 C150.534993,182.00039 148.803043,176.034013 148.024863,174.616105 C146.500469,171.843533 145.563369,171.165421 145.642135,167.571852 C147.387236,168.73171 153.172487,170.947581 155.089787,169.887664 C159.522305,167.44029 148.428013,164.951924 147.651918,164.434653 C149.356221,162.768846 151.308063,161.884996 152.848916,159.689035 C154.108583,157.895569 155.254913,155.292428 157.398137,155.187802 C158.584855,155.129634 162.056295,158.072417 163.10825,156.053694 C164.07308,154.203231 161.993578,153.931908 161.181077,153.276828 C159.678802,152.06661 159.340419,153.270972 159.706723,151.14333 C160.792178,152.307873 162.495834,151.571982 162.95061,150.127527 C163.441226,148.569468 161.823998,148.10412 161.853937,147.113692 C161.842192,147.500572 162.687735,141.999153 162.554381,142.176001 C163.413669,141.041128 166.462257,141.392482 167.966582,141.555666 C170.263178,141.804346 170.13091,141.873446 171.222117,143.992109 C172.103838,145.707106 174.419542,149.169502 174.928748,144.633135 C175.050449,143.548232 174.059985,141.228907 173.478827,140.295477 C172.851533,139.287873 170.962455,138.651922 170.567003,137.868403 C169.622984,135.99803 172.731819,131.833707 172.206,129.014288 C173.298856,129.431618 176.063377,135.941423 177.404406,130.612948 C178.111059,127.812658 170.89879,121.667871 173.890225,120.718825 C176.178665,119.993084 178.501504,122.944066 179.140297,124.762907 C179.612624,126.110544 179.400215,129.001405 180.207508,130.116368 C183.243976,134.318949 183.618438,127.375418 183.364612,125.543693 C182.806036,121.517569 181.381252,118.556438 177.742225,117.034295 C179.037272,115.426656 177.396605,114.146948 176.467109,113.140514 C177.994834,111.484467 187.90383,113.244749 185.67495,108.813788 C185.137049,107.742159 183.193837,107.552037 182.208315,107.158911 C179.717195,106.166532 177.22313,104.1482 175.950562,101.597371 C177.79234,101.136708 183.230278,102.394554 182.515816,98.6011044 C181.952817,95.619282 177.112955,96.5335826 175.237767,96.9915137 C176.930155,95.9749301 180.211017,96.8166176 180.67198,94.0499017 C181.203002,90.8666365 177.383839,90.9736042 175.591269,91.6482034 C175.17003,88.2904324 181.122531,85.8176826 182.804663,83.2477249 C183.373237,82.3806618 184.275583,82.0835727 183.551013,80.6153042 C182.244616,77.9719526 178.870779,81.7013778 177.758771,82.7050785 C178.635221,81.0771393 181.079608,74.3018671 180.708517,72.5829664 C180.162561,70.057123 178.355898,69.967723 176.919931,72.0153348 C175.988608,73.3450137 175.729666,76.7176196 175.238294,78.4419859 C173.199533,76.9046179 173.095791,78.6883239 172.991008,76.2507095 C172.923099,74.6707886 174.992708,71.5499862 175.522623,70.0032488 C175.978715,68.6739603 177.190719,66.2433729 176.465593,64.9570277 C174.690293,61.8139729 172.993447,66.1289878 172.525841,67.608968 C171.737261,64.1977131 174.740084,61.5524095 175.629329,58.1778516 C176.170088,56.1298495 177.605245,50.5995409 175.118415,49.6165311 C171.724815,48.2755308 172.918922,54.5725714 172.440664,56.6162793 C172.07606,58.1758997 171.519076,60.6935447 170.302082,61.4622287 C170.125896,61.5734908 167.481496,61.8046035 167.354151,61.6554733 C165.620359,59.6336275 170.392027,55.207741 170.637754,53.3037939 C170.861461,51.5731813 170.198398,50.4792998 168.576831,50.3754553 C167.767833,50.323533 166.456472,51.5751333 166.081721,51.4935411 C164.602506,51.1718572 166.529338,44.4051737 166.669221,42.5269926 C166.819045,40.5238856 166.575417,35.355081 163.186097,37.7423348 C163.413049,35.0454993 163.549887,32.5063826 163.920134,29.8505384 C164.114962,28.45176 165.31836,27.2060156 163.546466,26.0840259 C161.389659,24.7192116 160.195301,27.5757179 159.703512,29.2516754 C158.858129,32.1374612 160.604934,36.6265913 156.546177,36.7183337 C151.880955,36.8237399 155.102123,31.9875502 155.331481,28.8503513 C155.459059,27.1091981 154.318536,22.4287754 152.06891,25.5866651 C151.173373,26.8456828 151.481865,31.2813291 150.985494,32.7702884 C149.878539,32.2772219 151.717562,28.2546115 150.755804,27.2056252 C148.695236,24.958913 146.966535,28.2315783 145.655991,28.8975889 C145.57044,27.4527441 145.468923,26.0067281 145.407913,24.5603216 C145.315305,22.3600662 146.663012,17.7307849 145.2945,16.2125461 C142.95772,13.6238495 141.471891,16.6443209 140.789049,18.7364375 C140.175628,20.6196938 140.091904,22.4795265 137.555716,22.7360147 C137.763741,20.0192692 135.29832,14.3004008 136.520803,12.0087933 C137.073558,10.9742516 138.200031,11.7078002 138.699701,10.5498943 C139.521287,8.64672801 138.176249,7.83939509 136.714154,7.77771298 C129.921887,7.49233563 135.152043,16.9117402 132.745372,19.2693241 C131.646423,18.2285361 132.817064,17.1557359 131.680174,15.6730229 C130.456777,14.0782671 128.507084,14.2133431 126.762486,14.9351799 C126.706116,13.3220757 129.125524,2.01512054 123.682122,7.11833905 C122.329503,8.38945896 122.708203,10.5112454 121.988704,12.004499 C121.293397,13.448563 119.599928,15.6019713 118.647561,16.7751026 C118.138071,14.7079712 118.919891,12.1450405 119.467423,10.1091405 C119.848493,8.69357518 122.399415,4.30399525 121.855094,2.8653967 C120.275192,-1.30204956 115.532497,5.5840942 114.282756,6.69671451 C112.701004,8.10642397 106.402711,12.7415612 104.381766,11.3369268 C103.680648,10.8501066 104.312204,9.04610014 103.355021,8.20948774 C102.885296,7.799575 100.877713,7.60828238 100.304676,7.66059506 C100.663044,6.16656069 99.9590183,4.23411488 98.2500992,4.75060494 C96.1010516,5.40060944 97.031157,8.58855944 95.6691727,9.75271164 C93.1402627,11.9174413 90.1353523,7.6410754 87.4245062,7.76092608 C87.8388134,6.00571874 90.9097688,-0.301081675 86.0261697,1.61691959 C84.7804466,2.10647253 83.8958015,4.9680539 83.5854252,6.15758165 C82.7941498,9.19327834 83.364323,9.74958849 80.0771587,10.6065013 C80.3338947,8.84621888 79.876509,6.65923677 80.7256589,5.08595261 C81.4218191,3.79726501 85.0314735,0.441445987 81.1879964,0.0233349851 C76.4475113,-0.492764683 76.9137424,7.69455926 76.3331882,10.4628367 C72.1267344,7.91396017 69.3589223,11.5606221 66.8533479,14.7153886 C67.3001674,13.2963097 68.4061862,-0.841776108 63.8882057,3.47753307 C62.5963925,4.71468878 64.0256621,6.54407081 63.9388761,7.95573223 C63.8604755,9.23622158 63.4388415,10.377731 62.9428241,11.5742858 C62.1474037,13.4950198 61.2224184,15.460649 59.9693808,17.0979577 C58.3962141,19.1568908 58.9543722,19.318904 57.1484939,17.9212967 C54.7243438,16.0478003 53.5723002,11.2974971 53.6920659,8.39570525 C53.781581,6.23526987 54.8879763,1.84842269 51.3078111,2.86461591 C47.8009276,3.86128948 49.6590375,10.8387852 50.0116201,13.3177814 C50.3931233,16.0052474 50.6468605,18.7543956 50.1948883,21.4906608 C47.2109167,18.4409099 46.7758614,24.7926055 46.1779169,25.8763368 C45.1988562,27.6534061 43.310101,28.5232019 41.8428337,29.7357629 C41.0431153,26.9417195 44.2482173,24.5790605 43.6123112,22.3561622 C42.4186453,18.1910583 39.0417626,24.0719399 38.2998862,25.2263323 C37.6814572,26.1886512 35.6651905,31.6682087 34.9351609,32.1593232 C33.9115906,32.848367 27.3301947,29.6315279 26.6642795,29.0186108 C25.4417603,27.8938883 25.8867201,24.7465391 24.3487748,24.0297774 C19.6293173,21.8322547 22.4173261,29.7638712 23.3441752,31.4035222 C25.7628153,35.687696 26.8597232,40.8604044 26.2928172,45.9077967 C25.4350389,45.6056325 24.378271,44.5964663 23.8253733,43.8305151 C22.7491426,42.3411654 23.1404237,39.9656235 22.017351,38.8436337 C18.7294809,35.5639414 18.3438318,41.7216116 18.6111593,43.6353185 C19.1118632,47.2226407 20.9020846,48.3856217 22.3890054,51.3693961 C23.7571524,54.1197154 21.943774,57.4376663 21.5613192,60.4944442 C18.1321771,57.1944514 3.36588279,59.9510171 7.16521769,64.996067 C9.14262534,67.628878 11.4834592,62.6185731 13.763287,62.7450604 C17.8464603,62.9714884 19.9981829,68.0411331 19.730271,71.5921487 C19.2330959,69.6940575 17.308498,67.8307112 15.9842104,70.148475 C15.0865685,71.7213688 16.6185854,74.4088349 17.3583008,75.9707976 C16.4523462,75.5265303 11.9860935,73.4504198 11.1123314,73.8095815 C7.67255627,75.2239756 12.4125819,77.9610216 13.6493116,78.5079623 C17.8734551,80.3759933 20.5363542,82.427509 21.8496116,87.4998864 C19.4819334,86.7425238 19.8941915,85.6220957 18.2972545,84.4567723 C16.830792,83.3870952 16.5566308,83.9387206 15.2071591,83.5889284 C12.8451619,82.9775728 9.76564295,82.1620417 7.09694168,83.2707581 C5.12707484,84.0898028 1.809527,86.5809011 1.19123199,88.9213077 C0.433581882,91.7946008 2.03522104,92.5273687 4.0949367,91.063785 C6.54565844,89.3249741 6.99233616,85.9593953 10.6783285,86.1030599 C12.4468385,86.1721595 14.198865,87.0989527 15.3182307,88.4286316 C16.1532654,89.4217916 16.6409799,90.859219 17.4378821,91.9242113 C18.1406712,92.8638875 20.0019971,94.1826354 20.3954288,95.1781378 C21.8129983,98.7732678 19.1191629,101.97332 17.3124291,104.492136 C16.8931801,103.937778 13.8353612,102.734196 13.2017458,102.613565 C10.2619363,102.05257 9.16499332,103.411918 11.003339,106.125931 C11.5823428,106.981673 12.8005957,107.342006 13.4385893,108.120059 C14.1501828,108.989074 14.5506213,110.319534 15.2570206,111.263504 C16.6502186,113.127241 18.3720966,114.086046 20.0353361,115.585546 C19.4216552,115.995069 19.4893606,114.962089 18.9332619,115.176024 C18.5290809,115.331791 17.8260425,115.020647 17.3157029,115.190078 C16.4875948,115.464915 16.5976214,116.907417 16.0678004,117.11862 C12.7691062,118.433464 9.44069672,113.504361 6.48191847,113.343909 C4.86832034,113.256461 3.50714906,114.33785 4.28187338,116.365942 C4.82030298,117.777604 7.1521321,118.543555 8.31806645,119.133048 C11.5636759,120.776994 14.7956022,122.001266 18.2658233,120.739516 C21.0634173,123.177911 24.4247131,124.380712 27.9404633,124.415457 C25.9286815,125.412912 23.9404919,126.650458 23.2377959,129.136091 C22.0492883,127.906352 19.1297602,122.18397 17.6048295,126.674272 C16.5600021,129.760719 21.328009,133.54519 23.5253695,134.93577 C20.9696368,135.690791 18.8477815,135.842653 16.2480678,135.542832 C14.8906605,135.386674 11.9114372,133.569004 13.0097195,137.290621 C14.1918233,141.306595 21.2508358,139.501808 23.4900552,138.806518 C23.573221,137.609182 12.720439,150.91495 20.3316507,148.295803 C22.5082405,147.54781 22.7169752,143.295258 25.7496614,142.923213 C29.2527527,142.493 29.604919,146.000291 31.6318019,148.569078 C32.6420388,149.851129 37.301235,152.734182 37.0806939,153.833919 C36.8900419,154.785698 34.3317238,155.329905 33.7876434,156.661927 C33.1549566,158.211397 33.4406255,159.407952 34.3203529,160.740363 C35.8579788,163.072962 38.6803216,163.431343 40.9122645,164.344472 C44.0760798,165.639406 45.222862,167.210738 46.6413081,170.561482 C44.1404008,170.681333 37.0221866,177.920783 41.3837473,179.20908 C43.008912,179.689263 42.7562908,178.242857 43.4326768,177.443722 C43.7062927,176.928403 43.9803807,176.413865 44.2542196,175.898937 C44.712395,174.701211 45.2188422,174.627817 45.7732734,175.678365 C45.8972683,175.647914 47.3835007,176.067196 47.7210266,176.087887 C49.4285338,176.192512 50.5714284,174.896017 51.9872076,174.195261 C53.0103456,173.688921 54.0114437,173.77676 54.7822568,172.609485 C54.6931475,172.74417 55.3356677,170.098476 55.3468697,170.07271 C55.6226004,169.435623 56.3317095,169.525891 56.6573761,168.839152 C47.908417,159.753669 42.1996805,147.719969 41.1683996,134.375285 C36.4198742,132.776426 33,128.28759 33,123 L33,110 C33,104.965228 36.1006595,100.654655 40.4966083,98.8736491 C41.0282518,99.2483349 41.7670825,98.8748923 42,98.0318338 C41.5372601,96.526107 45.2959449,70.1780326 55,63.1563695 C58.618222,60.7183684 78.0082164,60.5372207 97.3126144,60.5504522 C116.408606,60.5635409 135.42084,60.7446886 139,63.1563695 C148.704055,70.1780326 152.46274,96.526107 152,98.0318338 C152.232917,98.8748923 152.971748,99.2483349 153.503392,98.8736491 Z'
            id='ShortHairDreads02-path3'
          />
        </defs>
        <mask id='ShortHairDreads02-mask2' fill='white'>
          <use href='#ShortHairDreads02-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Short-Hair/Dreads-02' mask='url("#ShortHairDreads02-mask2")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hair'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(36.000000, 0.000000)'>
              <mask id='ShortHairDreads02-mask1' fill='white'>
                <use href='#ShortHairDreads02-path3' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#ShortHairDreads02-path3' />
            </g>
          </g>
        </g>
      </g>
`,Wg=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='ShortHairFrizzle-path2' x='0' y='0' width='264' height='280' />
          <path
            d='M90.9102919,55.3613196 L175.085702,55.3613196 C193.333279,44.8338001 196.759397,26.1510357 183.849606,9.92600089 C180.635746,5.88682054 175.085702,21.6755614 158.028596,22.6504878 C140.97149,23.6254143 142.608865,16.3498661 124.45759,19.0739248 C106.306316,21.7979835 108.311575,36.37843 96.4671989,39.8768239 C88.5709482,42.2090865 86.7186458,47.370585 90.9102919,55.3613196 Z'
            id='ShortHairFrizzle-path1'
          />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <mask id='ShortHairFrizzle-mask2' fill='white'>
          <use href='#ShortHairFrizzle-path2' />
        </mask>
        <g id='Mask' />
        <g id='Top/Short-Hair/Frizzle' mask='url("#ShortHairFrizzle-mask2")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <mask id='ShortHairFrizzle-mask1' fill='white'>
              <use href='#ShortHairFrizzle-path1' />
            </mask>
            <use
              class='CustomColor'
              stroke='none'
              fill='var(--avataaar-hair-color)'
              fillRule='evenodd'
              href='#ShortHairFrizzle-path1'
            />
          </g>
        </g>
      </g>
`,$g=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='ShortHairShaggy-path2' x='0' y='0' width='264' height='280' />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <path
            d='M198.74696,37.856181 C193.606255,34.0244119 187.528383,30.7396605 181.187893,29.4782789 C174.741035,28.1960616 170.829392,27.8846292 164.483286,29.4052984 C162.85043,29.796545 162.299428,30.1854765 160.862131,29.2568033 C159.651446,28.4743102 151.200134,19.7668788 125.441738,24.5998777 C99.4069464,29.4847361 91.6728211,68.675365 82.0154166,70.1662691 C78.5349852,70.703365 74.2336661,69.781637 74.0992189,67.6388757 C70.1355043,73.6726057 69.0913088,81.6460323 70.7717335,88.7129442 C72.2186099,94.7989286 75.2686121,100.517478 80.7607964,103.849523 C85.4865987,106.716901 92.0203357,107.966046 97.4817987,107.437218 C99.9669245,107.196782 102.227091,106.673576 104.513684,105.671152 C107.272659,104.461694 109.470722,102.280238 112.177835,101.127995 C109.351471,103.576015 106.275372,105.735312 103.001731,107.546357 C101.362599,108.452872 99.6980301,109.07761 97.8887739,109.570058 C96.6533133,109.906073 94.127556,111.05104 92.9327267,110.752066 C100.740244,112.148383 108.093217,110.931649 115.252282,107.589351 C118.483309,106.08125 121.59079,104.256976 124.44325,102.112561 C127.276221,99.9826977 130.537639,97.8062025 132.753871,95.0036468 C131.823641,96.2071517 133.450882,94.4169423 133.665931,94.1980029 C134.274082,93.578226 134.869349,92.9458816 135.453055,92.302954 C136.455298,91.1993278 137.450603,90.0751967 138.383805,88.9120401 C140.37772,86.426318 142.234875,83.8298033 143.891185,81.1086057 C145.568637,78.352682 152.249704,67.2357231 154.266412,64.6190342 C152.361358,70.327001 150.286511,76.0372828 147.858864,81.5445 C152.572444,80.0744315 157.142657,76.0002417 160.15401,72.2035294 C163.545911,67.9275978 165.554691,62.9359795 166.262273,57.5379012 C170.087576,67.953725 179.047309,76.1675881 188.294435,81.8328914 C186.29094,78.1026546 183.238626,74.9478777 181.242068,71.1548033 C190.433037,80.4838679 205.809898,85.0481908 209.837367,98.7289227 C210.869671,93.9714569 214.189889,90.1482867 215.184533,85.2955724 C216.28885,79.9070851 217.081329,74.1868816 216.90592,68.6796644 C216.508524,56.4379129 208.273882,44.9574883 198.74696,37.856181 Z'
            id='ShortHairShaggy-path1'
          />
        </defs>
        <mask id='ShortHairShaggy-mask2' fill='white'>
          <use href='#ShortHairShaggy-path2' />
        </mask>
        <g id='Mask' />
        <g id='Top/Short-Hair/Shaggy' mask='url("#ShortHairShaggy-mask2")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <mask id='ShortHairShaggy-mask1' fill='white'>
              <use href='#ShortHairShaggy-path1' transform='scale(-1, 1)' />
            </mask>
            {/*XXX: some how the mask is broken, fix it later.*/}
            <use
              class='CustomColor'
              stroke='none'
              fill='var(--avataaar-hair-color)'
              fillRule='evenodd'
              transform='translate(143.465161, 67.234158) scale(-1, 1) translate(-143.465161, -67.234158) '
              href='#ShortHairShaggy-path1'
            />
            <HairColor maskID='ShortHairShaggy-mask1' />
          </g>
        </g>
      </g>
`,jg=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='ShortHairShaggyMullet-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M175.126419,166.897818 C175.841424,169.13759 176.874789,171.230601 178.55519,172.685954 C180.17619,174.090053 183.068114,173.745469 185.098621,173.802748 C186.770693,173.850632 188.444623,173.856087 190.114529,173.783655 C190.95366,173.747287 191.327571,174.79771 190.648775,175.281705 C190.518773,175.374442 190.388771,175.462634 190.25846,175.543856 C189.20761,176.198779 188.11838,176.802787 187.008721,177.356184 C184.485135,178.614206 181.821334,179.600077 179.02722,180.090436 C177.110792,180.426519 175.211229,180.489668 173.372596,180.266511 C173.858877,180.986862 174.419563,181.642356 175.071506,182.207788 C176.801481,183.708407 179.887821,183.340135 182.054832,183.401352 C183.839313,183.452528 185.625776,183.458358 187.407944,183.380946 C188.303488,183.342078 188.702535,184.464709 187.978106,184.981974 C187.839364,185.081086 187.700623,185.175341 187.561551,185.262145 C186.440057,185.962089 185.2776,186.607617 184.093342,187.199055 C181.400104,188.543555 178.557223,189.597195 175.57527,190.121262 C170.075488,191.087126 164.705859,189.943766 160.380755,186.413279 C159.16361,185.419765 158.027363,184.287616 157,183.053001 L157,180.610951 C163.949635,177.309539 170.111406,172.618864 175.126419,166.897818 Z M81.3150549,151.593977 C80.572738,153.13892 79.8051751,154.672522 79.0058562,156.190972 C74.2106831,165.300379 68.2421528,176.792949 56.4993303,177.596328 C55.4105393,177.670743 54.9804404,178.942941 55.8287461,179.588187 C66.9485528,188.041497 92.2609618,193.18734 101.273548,191.569729 C104.095212,191.063278 106.638877,190.402091 109,189.610443 L109,180.610951 C96.5625107,174.702544 86.6484598,164.344483 81.3150549,151.593977 Z M195.90592,68.6796644 C196.081329,74.1868816 195.28885,79.9070851 194.184533,85.2955724 C193.189889,90.1482867 189.869671,93.9714569 188.837367,98.7289227 C184.809898,85.0481908 169.433037,80.4838679 160.242068,71.1548033 C162.238626,74.9478777 165.29094,78.1026546 167.294435,81.8328914 C158.047309,76.1675881 149.087576,67.953725 145.262273,57.5379012 C144.554691,62.9359795 142.545911,67.9275978 139.15401,72.2035294 C136.142657,76.0002417 131.572444,80.0744315 126.858864,81.5445 C129.286511,76.0372828 131.361358,70.327001 133.266412,64.6190342 C131.249704,67.2357231 124.568637,78.352682 122.891185,81.1086057 C121.234875,83.8298033 119.37772,86.426318 117.383805,88.9120401 C116.450603,90.0751967 115.455298,91.1993278 114.453055,92.302954 C113.869349,92.9458816 113.274082,93.578226 112.665931,94.1980029 C112.450882,94.4169423 110.823641,96.2071517 111.753871,95.0036468 C109.537639,97.8062025 106.276221,99.9826977 103.44325,102.112561 C100.59079,104.256976 97.4833088,106.08125 94.2522818,107.589351 C87.0932166,110.931649 79.7402436,112.148383 71.9327267,110.752066 C73.127556,111.05104 75.6533133,109.906073 76.8887739,109.570058 C78.6980301,109.07761 80.3625987,108.452872 82.0017312,107.546357 C85.2753717,105.735312 88.3514706,103.576015 91.1778346,101.127995 C88.4707222,102.280238 86.2726593,104.461694 83.513684,105.671152 C81.2270908,106.673576 78.9669245,107.196782 76.4817987,107.437218 C71.0203357,107.966046 64.4865987,106.716901 59.7607964,103.849523 C54.2686121,100.517478 51.2186099,94.7989286 49.7717335,88.7129442 C48.0913088,81.6460323 49.1355043,73.6726057 53.0992189,67.6388757 C53.2336661,69.781637 57.5349852,70.703365 61.0154166,70.1662691 C70.6728211,68.675365 76.4180436,32.1184491 101.441738,25.5998777 C121.403017,20.3995724 135.651446,29.4743102 136.862131,30.2568033 C138.299428,31.1854765 138.85043,30.796545 140.483286,30.4052984 C146.829392,28.8846292 153.741035,28.1960616 160.187893,29.4782789 C166.528383,30.7396605 172.606255,34.0244119 177.74696,37.856181 C187.273882,44.9574883 195.508524,56.4379129 195.90592,68.6796644 Z'
            id='ShortHairShaggyMullet-path2'
          />
          <path
            d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'
            id='ShortHairShaggyMullet-path3'
          />
        </defs>
        <mask id='ShortHairShaggyMullet-mask1' fill='white'>
          <use href='#ShortHairShaggyMullet-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Short-Hair/Shaggy-Mullet' mask='url("#ShortHairShaggyMullet-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <mask id='ShortHairShaggyMullet-mask2' fill='white'>
              <use href='#ShortHairShaggyMullet-path2' />
            </mask>
            <use
              class='CustomColor'
              stroke='none'
              fill='var(--avataaar-hair-color)'
              fillRule='evenodd'
              href='#ShortHairShaggyMullet-path2'
            />
            <path
              d='M175.126419,166.897818 C175.841424,169.13759 176.874789,171.230601 178.55519,172.685954 C180.17619,174.090053 183.068114,173.745469 185.098621,173.802748 C186.770693,173.850632 188.444623,173.856087 190.114529,173.783655 C190.95366,173.747287 191.327571,174.79771 190.648775,175.281705 C190.518773,175.374442 190.388771,175.462634 190.25846,175.543856 C189.20761,176.198779 188.11838,176.802787 187.008721,177.356184 C184.485135,178.614206 181.821334,179.600077 179.02722,180.090436 C177.110792,180.426519 175.211229,180.489668 173.372596,180.266511 C173.858877,180.986862 174.419563,181.642356 175.071506,182.207788 C176.801481,183.708407 179.887821,183.340135 182.054832,183.401352 C183.839313,183.452528 185.625776,183.458358 187.407944,183.380946 C188.303488,183.342078 188.702535,184.464709 187.978106,184.981974 C187.839364,185.081086 187.700623,185.175341 187.561551,185.262145 C186.440057,185.962089 185.2776,186.607617 184.093342,187.199055 C181.400104,188.543555 178.557223,189.597195 175.57527,190.121262 C170.075488,191.087126 164.705859,189.943766 160.380755,186.413279 C159.16361,185.419765 158.027363,184.287616 157,183.053001 L157,180.610951 C163.949635,177.309539 170.111406,172.618864 175.126419,166.897818 Z M81.3150549,151.593977 C80.572738,153.13892 79.8051751,154.672522 79.0058562,156.190972 C74.2106831,165.300379 68.2421528,176.792949 56.4993303,177.596328 C55.4105393,177.670743 54.9804404,178.942941 55.8287461,179.588187 C66.9485528,188.041497 92.2609618,193.18734 101.273548,191.569729 C104.095212,191.063278 106.638877,190.402091 109,189.610443 L109,180.610951 C96.5625107,174.702544 86.6484598,164.344483 81.3150549,151.593977 Z'
              id='Shadow'
              stroke='none'
              opacity='0.16'
              fill='#000000'
              fillRule='evenodd'
            />
          </g>
        </g>
      </g>
`,Ug=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='ShortHairShortCurly-path2' x='0' y='0' width='264' height='280' />
          <path
            d='M94.2519269,52.0221149 C94.3749353,51.9677149 94.0696712,51.9468149 93.3361345,51.9595149 C94.2276637,51.9577149 94.5329279,51.9785149 94.2519269,52.0221149 M86.1169775,36.3015924 C86.1148422,36.2819924 86.1337548,36.4526924 86.1169775,36.3015924 M193.765056,70.7656665 C193.500946,67.448734 193.03295,64.1518864 192.246676,60.9110823 C191.622233,58.3353492 190.769007,55.8775343 189.760006,53.4200433 C189.150703,51.9353766 187.727538,49.8961062 187.560324,48.2944933 C187.395466,46.7168527 188.626521,44.969138 188.889285,43.1323368 C189.144311,41.3447761 189.100909,39.4652134 188.734183,37.6938503 C187.901144,33.6710288 185.140271,29.9300447 180.877167,28.8814158 C179.925362,28.6471994 177.913417,28.9358396 177.240862,28.3815597 C176.469729,27.7459682 175.932761,25.5806808 175.234637,24.7121687 C173.244224,22.2362125 170.13984,20.6417265 166.865887,21.1976261 C164.454917,21.606776 165.839391,22.1053363 164.032005,20.6864317 C163.027041,19.8976114 162.276095,18.6931622 161.300066,17.8392279 C159.832826,16.5563826 158.149588,15.4581893 156.408146,14.556958 C151.851325,12.19892 146.654249,10.4848961 141.564162,9.64942693 C132.278934,8.12523827 122.368926,9.45408458 113.368668,11.8688141 C108.890239,13.0703477 104.381531,14.5951842 100.222053,16.6117782 C98.4385542,17.4764029 97.4090304,18.1936301 95.5494951,18.4200717 C92.6207355,18.7767416 90.1404579,18.7589243 87.3661268,20.0009517 C78.8298269,23.8229236 74.9849256,32.6897818 78.3066539,41.1750259 C78.974835,42.8815988 79.8795374,44.3801954 81.1267416,45.7586062 C82.6474761,47.4392631 83.1975648,47.1085093 81.8877817,49.0411999 C79.9289949,51.9311653 78.2777195,55.0129095 76.9332826,58.2128958 C73.4043038,66.6145606 72.8138416,76.0771643 73.043634,85.0373203 C73.1240445,88.1741362 73.2586228,91.3495022 73.753198,94.4561907 C73.966841,95.8009106 74.0267283,98.3293468 75.0353925,99.3271154 C75.5471264,99.8331265 76.2762042,100.115288 77.0035997,99.9137903 C78.7130802,99.4401742 78.1253096,98.1787097 78.1650102,97.0076274 C78.364859,91.1240324 78.0950295,85.9191145 79.4943071,80.1064647 C80.5278683,75.8118486 82.2504702,71.9114806 84.4827873,68.0713675 C87.3213795,63.1871608 90.3857268,58.8977279 94.2895061,54.7155226 C95.2073299,53.7320079 95.4078515,53.3150832 96.6385698,53.243814 C97.5705244,53.1900382 98.9338023,53.8282213 99.8398505,54.0491558 C101.837665,54.5360539 103.83918,55.0174448 105.873331,55.3452831 C109.613261,55.9481556 113.316519,55.9886494 117.090094,55.8704074 C124.516459,55.6381346 131.974787,55.1172217 139.175061,53.2470535 C143.956964,52.00535 148.196516,49.7762443 152.776887,48.1422364 C152.858644,48.1130808 154.006596,47.2951049 154.207791,47.3284719 C154.488723,47.3747968 156.184746,49.1542588 156.471061,49.3784327 C158.696649,51.1238798 161.137899,51.8566566 163.541467,53.2081794 C166.504881,54.8745825 163.634999,52.4899804 165.269452,54.5668292 C165.745859,55.1716454 165.989782,56.2931632 166.371984,56.9783192 C167.587899,59.1610999 169.279548,61.0795367 171.302932,62.6017816 C173.258018,64.0725184 176.196198,64.7829426 177.193087,66.697168 C177.961865,68.1740599 178.220929,70.1812592 178.841334,71.7579279 C180.468722,75.8931602 182.617937,79.7494709 184.767152,83.6443317 C186.498502,86.7830913 188.392354,89.5250111 188.584801,93.1117947 C188.651754,94.3603012 187.463764,101.849397 190.357534,99.5716982 C190.786502,99.2341415 191.711391,95.415733 191.901483,94.7678314 C192.672616,92.135083 192.94682,89.3866841 193.29605,86.6816947 C193.990474,81.3021672 194.218584,76.1837441 193.765056,70.7656665'
            id='ShortHairShortCurly-path1'
          />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <mask id='ShortHairShortCurly-mask2' fill='white'>
          <use href='#ShortHairShortCurly-path2' />
        </mask>
        <g id='Mask' />
        <g id='Top/Short-Hair/Short-Curly' mask='url("#ShortHairShortCurly-mask2")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <mask id='ShortHairShortCurly-mask1' fill='white'>
              <use href='#ShortHairShortCurly-path1' />
            </mask>
            <use
              class='CustomColor'
              stroke='none'
              fill='var(--avataaar-hair-color)'
              fillRule='evenodd'
              href='#ShortHairShortCurly-path1'
            />
          </g>
        </g>
      </g>
`,Zg=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='ShortHairShortFlat-path2' x='0' y='0' width='264' height='280' />

          <path
            d='M180.14998,39.9204083 C177.390206,37.1003988 174.185913,34.7068297 171.069252,32.3065503 C170.381566,31.777442 169.682843,31.2610833 169.010544,30.7118441 C168.857687,30.5870323 167.291999,29.4657388 167.104691,29.0530544 C166.653816,28.0602634 166.915042,28.8332916 166.977255,27.6485857 C167.055857,26.150508 170.11064,21.9193194 167.831176,20.9490079 C166.828413,20.522232 165.039628,21.6579526 164.077671,22.0330592 C162.196235,22.7671676 160.291721,23.3932399 158.346734,23.9330847 C159.278588,22.0763407 161.055333,18.3594977 157.71591,19.3543018 C155.114345,20.1293431 152.690052,22.1219709 150.075777,23.0594018 C150.940735,21.6415124 154.399901,17.2479341 151.274209,17.0023366 C150.301549,16.925839 147.471201,18.7503735 146.423952,19.1395717 C143.287223,20.3054888 140.083264,21.0590571 136.789999,21.6525844 C125.59203,23.6707114 112.497238,23.0953019 102.1368,28.1934632 C94.1494796,32.1236942 86.262502,38.2220278 81.648386,45.987539 C77.2011742,53.472559 75.537818,61.6641751 74.6069673,70.2412987 C73.9239644,76.535909 73.8684412,83.0425652 74.1878671,89.3599905 C74.2922241,91.4297869 74.5250203,100.970847 77.5319724,98.0813859 C79.0300967,96.641688 79.019059,90.8282073 79.3963495,88.8604076 C80.1472513,84.9452748 80.870057,81.0126951 82.122006,77.2227096 C84.3282191,70.5439339 86.9307879,63.4296587 92.4269209,58.8297383 C95.9539853,55.8782066 98.4307906,51.8889248 101.806002,48.9112229 C103.322188,47.5738572 102.165231,47.7130963 104.602902,47.888571 C106.240504,48.006337 107.885464,48.0512961 109.52641,48.0942421 C113.322394,48.1928837 117.124399,48.16772 120.921387,48.1811407 C128.56821,48.208653 136.179243,48.316689 143.818708,47.9164188 C147.213653,47.7385955 150.617965,47.6423024 154.00388,47.3282597 C155.895349,47.152785 159.251496,45.9405668 160.808488,46.8669256 C162.233362,47.7144383 163.71309,50.4817719 164.736257,51.615144 C167.153525,54.2935659 170.035717,56.3392052 172.862385,58.5354911 C178.756547,63.114945 181.732392,68.8666908 183.522515,76.023241 C185.305949,83.1532854 184.805905,89.76815 187.013456,96.78479 C187.401784,98.0184813 188.428965,100.14498 189.695296,98.2389151 C189.930434,97.8849461 189.869559,95.9390277 189.869559,94.819339 C189.869559,90.2995934 191.014141,86.9083772 190.999758,82.3591197 C190.943566,68.5271489 190.49637,50.4908308 180.14998,39.9204083 Z'
            id='ShortHairShortFlat-path1'
          />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <mask id='ShortHairShortFlat-mask2' fill='white'>
          <use href='#ShortHairShortFlat-path2' />
        </mask>
        <g id='Mask' />
        <g id='Top/Short-Hair/Short-Flat' mask='url("#ShortHairShortFlat-mask2")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <mask id='ShortHairShortFlat-mask1' fill='white'>
              <use href='#ShortHairShortFlat-path1' />
            </mask>
            <use
              class='CustomColor'
              stroke='none'
              fill='var(--avataaar-hair-color)'
              fillRule='evenodd'
              href='#ShortHairShortFlat-path1'
            />
          </g>
        </g>
      </g>
`,zg=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='ShortHairShortRound-path2' x='0' y='0' width='264' height='280' />
          <path
            d='M167.308863,35.006118 C147.121091,23.3065109 127.128954,25.2219854 112.036894,29.0299707 C96.9448338,32.8379559 88.0168242,43.6513048 80.3566792,59.6480618 C76.5956048,67.5028569 74.3660182,76.7914798 74.0230569,85.4813651 C73.8884429,88.8932666 74.3484305,92.415154 75.267729,95.7003546 C75.6049405,96.9061873 77.4232441,101.086987 77.9224658,97.70885 C78.0885348,96.584253 77.4804043,95.0327505 77.4215529,93.8376154 C77.3444374,92.2693977 77.4273028,90.6807875 77.5341822,89.1149098 C77.7340739,86.1874141 78.2559568,83.3154127 79.1847257,80.524647 C80.5119249,76.5367405 82.2013644,72.212859 84.7874413,68.8480942 C91.1883705,60.5205939 102.268658,60.045883 111.066257,55.4635848 C110.302881,56.8686624 107.359637,59.1432635 108.379389,60.7268592 C109.083576,61.8207003 111.749474,61.4890712 113.022219,61.4539693 C116.370996,61.3623702 119.734993,60.7796791 123.042844,60.306974 C128.255923,59.5618115 133.140585,58.0517626 138.046555,56.2181078 C142.06299,54.7164165 146.650012,53.3257139 149.66868,50.1404701 C154.539813,55.1881187 160.809849,59.9345599 167.070414,63.1428706 C172.68835,66.0222267 181.748751,67.461069 185.182761,73.3006826 C189.2479,80.2147477 187.37751,88.7073939 188.619138,96.2008069 C189.091302,99.05041 190.164155,98.986558 190.751315,96.4378281 C191.748406,92.1082634 192.219217,87.6102098 191.901961,83.1592929 C191.183568,73.1114668 187.496636,46.7057251 167.308863,35.006118 Z'
            id='ShortHairShortRound-path1'
          />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <mask id='ShortHairShortRound-mask2' fill='white'>
          <use href='#ShortHairShortRound-path2' />
        </mask>
        <g id='Mask' />
        <g id='Top/Short-Hair/Short-Round' mask='url("#ShortHairShortRound-mask2")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <mask id='ShortHairShortRound-mask1' fill='white'>
              <use href='#ShortHairShortRound-path1' />
            </mask>
            <use
              class='CustomColor'
              stroke='none'
              fill='var(--avataaar-hair-color)'
              fillRule='evenodd'
              href='#ShortHairShortRound-path1'
            />
          </g>
        </g>
      </g>
`,Gg=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='ShortHairShortWaved-path2' x='0' y='0' width='264' height='280' />
          <path
            d='M183.679824,38.9488198 C189.086072,33.9985622 190.387393,23.9615454 187.317704,17.4493246 C183.549263,9.45385312 175.901319,8.45217737 168.572342,11.9686703 C161.664469,15.2835661 155.515175,16.3878671 147.950196,14.7817319 C140.691624,13.2406923 133.805566,10.5226172 126.303388,10.0762471 C113.978028,9.34292483 102.003367,13.914565 93.6031232,23.1292512 C92.0003538,24.8871655 90.7089493,26.8971594 89.4882796,28.9343872 C88.5115454,30.5644351 87.4105298,32.3133822 86.9950459,34.1921885 C86.7973853,35.0855929 87.165272,37.2898774 86.7203704,38.0218712 C86.2391099,38.8123183 84.4244668,39.5373375 83.6510124,40.1238625 C82.0842713,41.3125222 80.7267597,42.6539573 79.4713836,44.1710842 C76.8052796,47.3926541 75.3376994,50.7577001 74.1034777,54.7428152 C70.0005333,67.9877849 69.6528094,83.7412616 74.9569218,96.7467724 C75.6639385,98.4811062 77.8550622,102.098564 79.1431613,98.3847912 C79.3976741,97.6508047 78.8086588,95.1907873 78.8099809,94.4501584 C78.8146084,91.7300906 80.3160587,73.7213568 86.857084,63.6330196 C88.9862338,60.3491948 98.8298903,48.0522456 100.840541,47.9536058 C101.9058,49.6464245 112.720532,60.4624529 140.783385,59.1948919 C153.445253,58.6229725 163.18265,52.9341181 165.520833,50.4680909 C166.549375,56.0008881 178.51323,64.2839965 180.33625,67.6921976 C185.602529,77.5376948 186.770677,97.9957204 188.780988,97.9573368 C190.791299,97.9189532 192.234429,92.7197798 192.647929,91.7270713 C195.719601,84.351669 196.242509,75.0948338 195.914948,67.1684434 C195.487565,56.9663626 191.276535,45.9419513 183.679824,38.9488198 Z'
            id='ShortHairShortWaved-path1'
          />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <mask id='ShortHairShortWaved-mask2' fill='white'>
          <use href='#ShortHairShortWaved-path2' />
        </mask>
        <g id='Mask' />
        <g id='Top/Short-Hair/Short-Waved' mask='url("#ShortHairShortWaved-mask2")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <mask id='ShortHairShortWaved-mask1' fill='white'>
              <use href='#ShortHairShortWaved-path1' />
            </mask>
            <use
              class='CustomColor'
              stroke='none'
              fill='var(--avataaar-hair-color)'
              fillRule='evenodd'
              href='#ShortHairShortWaved-path1'
            />
          </g>
        </g>
      </g>
`,qg=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='ShortHairSides-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'
            id='ShortHairSides-path2'
          />
          <path
            d='M6,28 C0.923687084,28.0709555 0,26.9937684 0,23 C1.30010922e-16,17.3439836 4.0408529,6.77808536 8,2 C9.17612094,-0.170695788 11.6189856,-1.43187215 11,3 C8.3404922,11.4766099 11.4173429,27.914487 6,28 Z M120,28 C114.582657,27.914487 117.659508,11.4766099 115,3 C114.381014,-1.43187215 116.823879,-0.170695788 118,2 C121.959147,6.77808536 126,17.3439836 126,23 C126,26.9937684 125.076313,28.0709555 120,28 Z'
            id='ShortHairSides-path3'
          />
        </defs>
        <mask id='ShortHairSides-mask2' fill='white'>
          <use href='#ShortHairSides-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Short-Hair/Sides' mask='url("#ShortHairSides-mask2")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hair'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(70.000000, 74.000000)'>
              <mask id='ShortHairSides-mask1' fill='white'>
                <use href='#ShortHairSides-path3' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#ShortHairSides-path3' />
            </g>
          </g>
        </g>
      </g>
`,Yg=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='ShortHairTheCaesar-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M1,64 C1.34685629,65.488448 2.67275588,65.2226722 3,64 C2.53726005,62.445722 6.29594493,35.2480719 16,28 C19.618222,25.4833872 39.0082164,23.2319099 58.3126144,23.245568 C77.4086061,23.2590787 96.4208396,25.5105561 100,28 C109.704055,35.2480719 113.46274,62.445722 113,64 C113.327244,65.2226722 114.653144,65.488448 115,64 C115.719178,53.7019177 115,0.274362825 58,1 C1,1.72563718 0.280821545,53.7019177 1,64 Z'
            id='ShortHairTheCaesar-path2'
          />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <mask id='ShortHairTheCaesar-mask1' fill='white'>
          <use href='#ShortHairTheCaesar-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Short-Hair/The-Caesar' mask='url("#ShortHairTheCaesar-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hair'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(75.000000, 34.000000)'>
              <mask id='ShortHairTheCaesar-mask2' fill='white'>
                <use href='#ShortHairTheCaesar-path2' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#ShortHairTheCaesar-path2' />
            </g>
          </g>
        </g>
      </g>
`,Kg=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='ShortHairTheCaesarSidePart-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M82.0179468,24.3784638 C74.9860629,23.6847351 66.6573358,23.2514721 58.3126144,23.245568 C39.0082164,23.2319099 19.618222,25.4833872 16,28 C6.29594493,35.2480719 2.53726005,62.445722 3,64 C2.67275588,65.2226722 1.34685629,65.488448 1,64 C0.280821545,53.7019177 1,1.72563718 58,1 C115,0.274362825 115.719178,53.7019177 115,64 C114.653144,65.488448 113.327244,65.2226722 113,64 C113.46274,62.445722 109.704055,35.2480719 100,28 C98.2407122,26.7763475 92.7526689,25.6101897 85.3587425,24.7390449 L89,16 L82.0179468,24.3784638 Z'
            id='ShortHairTheCaesarSidePart-path2'
          />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <mask id='ShortHairTheCaesarSidePart-mask1' fill='white'>
          <use href='#ShortHairTheCaesarSidePart-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Short-Hair/The-Caesar-+-Side-Part' mask='url("#ShortHairTheCaesarSidePart-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hair'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(75.000000, 34.000000)'>
              <mask id='ShortHairTheCaesarSidePart-mask2' fill='white'>
                <use href='#ShortHairTheCaesarSidePart-path2' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#ShortHairTheCaesarSidePart-path2' />
            </g>
          </g>
        </g>
      </g>
`,Xg=`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='Turban-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M156,180.610951 C173.530782,172.282984 186.048193,155.114792 187.791419,134.867187 C193.569129,134.002364 198,129.018625 198,123 L198,110 C198,104.054007 193.675427,99.1180731 188,98.1659169 L188,92 C188,61.072054 162.927946,36 132,36 C101.072054,36 76,61.072054 76,92 L76,92 L76,98.1659169 C70.3245733,99.1180731 66,104.054007 66,110 L66,123 C66,129.018625 70.4308707,134.002364 76.2085808,134.867187 C77.9518066,155.114792 90.4692178,172.282984 108,180.610951 L108,199 L104,199 L104,199 C64.235498,199 32,231.235498 32,271 L32,280 L232,280 L232,271 C232,231.235498 199.764502,199 160,199 L156,199 L156,180.610951 Z M0,5.68434189e-14 L264,5.68434189e-14 L264,280 L0,280 L0,5.68434189e-14 Z'
            id='Turban-path2'
          />
          <path
            d='M83.9715543,55.8170792 C107.404232,69.414362 145.114919,82.1112884 139,138 C158.377483,132.360101 168.044149,116.801277 168,91.3235294 C167.918252,44.1482824 115.850571,6.80154462e-15 86,0 C85.3259486,0 84.6559706,0.0296343787 83.9916946,0.0880669528 C83.3328225,0.0296343217 82.6684563,0 82.0002187,0 C52.0737254,6.80154462e-15 0.0804892181,44.1482783 0.00021866091,91.3235294 C-0.0442202163,117.440393 9.62244645,132.999216 29.0002187,138 C22.8618971,82.1112789 60.5101967,69.4143577 83.9715662,55.8170722 Z'
            id='Turban-path3'
          />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <mask id='Turban-mask1' fill='white'>
          <use href='#Turban-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Accesories/Turban' mask='url("#Turban-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Behind'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(1.000000, 0.000000)'>
              <mask id='Turban-mask2' fill='white'>
                <use href='#Turban-path2' />
              </mask>
              <g id='Mask-Hair' />
            </g>
            <g
              id='Turban'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(1.000000, 0.000000)'>
              <path
                d='M74.5304294,97.5 C73.529284,95.0905557 73,92.5798498 73,90 C73,71.7746033 99.4151998,57 132,57 C164.5848,57 191,71.7746033 191,90 C191,92.5798498 190.470716,95.0905557 189.469571,97.5 C183.398106,82.8878805 159.972341,72 132,72 C104.027659,72 80.6018941,82.8878805 74.5304294,97.5 Z'
                id='Band'
                fill='#EDECE3'
              />
              <g transform='translate(48.000000, 3.000000)'>
                <mask id='Turban-mask3' fill='white'>
                  <use href='#Turban-path3' />
                </mask>
                <use class='CustomColor' fill='var(--avataaar-hat-color)' href='#Turban-path3' />
              </g>
              <path
                d='M48.0110963,96.0123559 C48.3807929,121.112082 58.0438337,136.107963 77.0002187,141 C57.6224465,136.289117 47.9557798,121.632254 48.0002187,97.0294118 C48.0008313,96.6902213 48.0044682,96.351197 48.0110963,96.0123559 Z M152.645822,30.4681115 C153.39011,36.1953086 152.126202,42.8891982 148.000219,50.135763 C136.847465,71.5667661 76.561434,72.0039826 76.3339794,129.679698 C76.1051437,67.7612631 136.805324,67.3799133 148.000219,44.5441176 C150.669864,39.5668152 152.141299,34.8351296 152.645822,30.4681115 Z'
                id='Shadow'
                opacity='0.16'
                fill='#000000'
              />
            </g>
          </g>
        </g>
      </g>
`,Jg=`
      <g id="Top">
        <defs>
          <rect id='WinterHat1-path3' x="0" y="0" width="264" height="280" />
          <path
            d="M120,54 L20,54 L20,155 C20,160.522847 15.5228475,165 10,165 C4.4771525,165 6.76353751e-16,160.522847 0,155 L0,54 L0,44 C-2.9759565e-15,19.699471 19.699471,4.46393476e-15 44,0 L96,0 C120.300529,-4.46393476e-15 140,19.699471 140,44 L140,54 L140,155 C140,160.522847 135.522847,165 130,165 C124.477153,165 120,160.522847 120,155 L120,54 Z"
            id='WinterHat1-path1'
          />
          <filter
            x="-0.8%"
            y="-2.8%"
            width="101.7%"
            height="111.1%"
            filterUnits="objectBoundingBox"
            id='filter1'>
            <feOffset
              dx="0"
              dy="2"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
              type="matrix"
              in="shadowOffsetOuter1"
            />
          </filter>
          <rect id='WinterHat1-path2' x="74" y="50" width="118" height="36" rx="8" />
        </defs>
        <mask id='WinterHat1-mask1' fill="white">
          <use href='#WinterHat1-path3' />
        </mask>
        <g id="Mask" />
        <g
          id="Top/Accessories/Winter-Hat-1"
          transform="translate(-1.000000, 0.000000)">
          <g
            id="hat"
            strokeWidth="1"
            fillRule="evenodd"
            transform="translate(63.000000, 20.000000)">
            <path
              d="M1,48 L23.6714286,48 L23.6714286,153.664286 C23.6714286,159.924828 18.5962564,165 12.3357143,165 C6.07517216,165 1,159.924828 1,153.664286 L1,48 Z M116.328571,48 L139,48 L139,153.664286 C139,159.924828 133.924828,165 127.664286,165 C121.403744,165 116.328571,159.924828 116.328571,153.664286 L116.328571,48 Z"
              id="inside"
              fill="#F4F4F4"
            />
            <mask id='WinterHat1-mask2' fill="white">
              <use href='#WinterHat1-path1' />
            </mask>
            <use class='CustomColor' fill="var(--avataaar-hat-color)" href='#WinterHat1-path1' />
          </g>
          <g id="hat-front">
            <use
              fill="black"
              opacity="1"
              filter='url("#WinterHat1-path2")'
              href='#WinterHat1-path2'
            />
            <use fill="#F4F4F4" fillRule="evenodd" href='#WinterHat1-path2' />
          </g>
        </g>
      </g>
`,Qg=`
      <g id='Top'>
        <defs>
          <rect id='WinterHat2-path3' x='0' y='0' width='264' height='280' />
          <path
            d='M72,21 C126.772655,21 144,68.8032255 144,103.04488 L144,176.910255 C144,196.404852 121.366901,196.446757 121.366901,165.988782 L121.366901,86.5347425 C121.366901,80.4596103 117.635097,77.5347425 111.551408,77.5347425 L72,77.5347425 L32.4485915,77.5347425 C26.3649028,77.5347425 22.6330986,80.4596103 22.6330986,86.5347425 L22.6330986,165.988782 C22.6330986,196.446757 -1.41137102e-14,196.404852 0,176.910255 L0,103.04488 C-7.11930515e-15,68.8032255 17.2273451,21 72,21 Z'
            id='WinterHat2-path1'
          />
          <path
            d='M101.428403,98.1685688 C98.9148372,100.462621 96.23722,101.494309 92.8529444,100.772863 C92.2705777,100.648833 89.8963391,96.2345713 83.9998344,96.2345713 C78.1033297,96.2345713 75.7294253,100.648833 75.1467245,100.772863 C71.7624488,101.494309 69.0848316,100.462621 66.5712661,98.1685688 C61.8461772,93.855604 57.9166219,87.9081858 60.2778299,81.4191814 C61.5083844,78.0369425 63.5097479,74.3237342 67.1506257,73.2459109 C71.0384163,72.0955419 76.4968931,73.2439051 80.4147542,72.4582708 C81.6840664,72.2035248 83.0706538,71.7508657 83.9998344,71 C84.929015,71.7508657 86.3159365,72.2035248 87.5845805,72.4582708 C91.5027758,73.2439051 96.9612525,72.0955419 100.849043,73.2459109 C104.489921,74.3237342 106.491284,78.0369425 107.722173,81.4191814 C110.083381,87.9081858 106.153826,93.855604 101.428403,98.1685688 M140.081033,26 C136.670693,34.4002532 137.987774,44.8580348 137.356666,53.6758724 C136.844038,60.8431942 135.33712,71.5857526 128.972858,76.214531 C125.718361,78.5816138 119.79436,82.5598986 115.54187,81.4501943 C112.614539,80.6863848 112.302182,72.290096 108.455284,69.1469801 C104.09172,65.5823153 98.6429854,64.0160432 93.1491481,64.2578722 C90.7785381,64.3622683 85.9841367,64.3374908 83.9999331,66.1604584 C82.0157295,64.3374908 77.2216647,64.3622683 74.8510547,64.2578722 C69.3568808,64.0160432 63.9081467,65.5823153 59.5445817,69.1469801 C55.6976839,72.290096 55.3856641,80.6863848 52.4583326,81.4501943 C48.2058427,82.5598986 42.2818421,78.5816138 39.0270077,76.214531 C32.6624096,71.5857526 31.1561652,60.8431942 30.642864,53.6758724 C30.0120926,44.8580348 31.3291729,34.4002532 27.9188335,26 C26.2597768,26 27.3540339,42.1288693 27.3540339,42.1288693 L27.3540339,62.4851205 C27.3856735,77.7732046 36.935095,100.655445 58.1080116,109.393004 C63.2861266,111.52982 75.0153111,115 83.9999331,115 C92.9845551,115 104.71374,111.860188 109.891855,109.723371 C131.064771,100.985813 140.614193,77.7732046 140.646169,62.4851205 L140.646169,42.1288693 C140.646169,42.1288693 141.740089,26 140.081033,26'
            id='WinterHat2-path2'
          />
        </defs>
        <mask id='WinterHat2-mask1' fill='white'>
          <use href='#WinterHat2-path3' />
        </mask>
        <g id='Mask' />
        <g
          id='Top/Accessories/Winter-Hat-2'
          transform='translate(-1.000000, 0.000000)'
        >
          <g
            id='hat'
            strokeWidth='1'
            fillRule='evenodd'
            transform='translate(61.000000, 0.000000)'
          >
            <g
              id='string'
              transform='translate(0.000000, 176.000000)'
              fill='#F4F4F4'
            >
              <circle id='puff' cx='9' cy='65' r='9' />
              <rect x='8' y='0' width='2' height='58' />
            </g>
            <g
              id='string'
              transform='translate(126.000000, 168.000000)'
              fill='#F4F4F4'
            >
              <circle id='puff' cx='9' cy='65' r='9' />
              <rect x='8' y='0' width='2' height='58' />
            </g>
            <circle id='puff' fill='#F4F4F4' cx='72' cy='20' r='20' />
            <mask id='WinterHat2-mask2' fill='white'>
              <use href='#WinterHat2-path1' />
            </mask>
            <use class='CustomColor' fill='var(--avataaar-hat-color)' href='#WinterHat2-path1' />
            <HatColor maskID='WinterHat2-mask2' defaultColor='Blue01' />
            <rect
              id='color-dark'
              opacity='0.2'
              fill='#000000'
              x='-1'
              y='21'
              width='146'
              height='46'
              mask='url("#WinterHat2-mask2")'
            />
            <g
              id='light-triangles'
              transform='translate(29.000000, 32.000000)'
              fill='#FFFFFF'
              opacity='0.5'
            >
              <polygon
                id='Triangle'
                transform='translate(12.500000, 9.000000) rotate(180.000000) translate(-12.500000, -9.000000) '
                points='12.5 0 25 18 0 18'
              />
              <polygon
                id='Triangle'
                transform='translate(43.500000, 9.000000) rotate(180.000000) translate(-43.500000, -9.000000) '
                points='43.5 0 56 18 31 18'
              />
              <polygon
                id='Triangle'
                transform='translate(74.500000, 9.000000) rotate(180.000000) translate(-74.500000, -9.000000) '
                points='74.5 0 87 18 62 18'
              />
            </g>
            <g
              id='dark-triangles'
              transform='translate(13.000000, 41.000000)'
              fill='#000000'
              opacity='0.5'
            >
              <polygon id='Triangle' points='12.5 0 25 18 0 18' />
              <polygon id='Triangle' points='43.5 0 56 18 31 18' />
              <polygon id='Triangle' points='74.5 0 87 18 62 18' />
              <polygon id='Triangle' points='105.5 0 118 18 93 18' />
            </g>
          </g>
        </g>
      </g>
`,em=`
      <g id='Top'>
        <defs>
          <rect id='WinterHat3-path3' x='0' y='0' width='264' height='280' />
          <path
            d='M66,0 L66,0 C102.450793,-6.69590214e-15 132,29.5492065 132,66 L132,71 L0,71 L0,66 C-4.46393476e-15,29.5492065 29.5492065,6.69590214e-15 66,0 Z'
            id='WinterHat3-path1'
          />
          <filter
            x='-0.7%'
            y='-1.7%'
            width='101.4%'
            height='106.8%'
            filterUnits='objectBoundingBox'
            id='filter1'
          >
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0'
              type='matrix'
              in='shadowOffsetOuter1'
            />
          </filter>
          <path
            d='M67.2846026,61.4514246 C83.229708,49.8171415 105.159178,44 133.073012,44 C160.985408,44 182.871592,49.8165424 198.731564,61.4496271 L198.731562,61.4496305 C200.786183,62.956669 202.000006,65.3523289 202.000006,67.900394 L202.000004,98.3697692 C202.000004,100.578907 200.209144,102.369768 198.000006,102.369768 C197.244444,102.369768 196.504332,102.155773 195.865355,101.752558 C179.223261,91.2508526 158.536251,86 133.804323,86 C108.883259,86 87.640395,91.3314713 70.0757313,101.994414 L70.0757317,101.994414 C68.1873241,103.140806 65.7271332,102.539283 64.5807417,100.650875 C64.2008775,100.02514 64.0000054,99.3071624 64.0000054,98.5751499 L64,67.914014 C64,65.358892 65.2205159,62.9574773 67.2846026,61.4514246 Z'
            id='WinterHat3-path2'
          />
        </defs>
        <mask id='WinterHat3-mask1' fill='white'>
          <use href='#WinterHat3-path3' />
        </mask>
        <g id='Mask' />
        <g
          id='Top/Accessories/Winter-Hat-3'
          transform='translate(-1.000000, 0.000000)'
        >
          <g
            id='hat'
            strokeWidth='1'
            fillRule='evenodd'
            transform='translate(67.000000, 12.000000)'
          >
            <circle id='puff' fill='#F4F4F4' cx='66' cy='8' r='20' />
            <mask id='WinterHat3-mask2' fill='white'>
              <use href='#WinterHat3-path1' />
            </mask>
            <use class='CustomColor' fill='var(--avataaar-hat-color)' href='#WinterHat3-path1' />
          </g>
          <g id='hat-front'>
            <use
              fill='black'
              opacity='1'
              filter='url("#WinterHat3-path2")'
              href='#WinterHat3-path2'
            />
            <use fill='#F4F4F4' fillRule='evenodd' href='#WinterHat3-path2' />
          </g>
        </g>
      </g>
`,tm=`
      <g id='Top'>
        <defs>
          <rect id='WinterHat4-path5' x='0' y='0' width='264' height='280' />
          <path
            d='M129.659138,38.3566287 C132.459581,45.3577056 134,52.9989608 134,61 L134,69 L2,69 L2,61 C2,52.9748603 3.54971254,45.3116754 6.36620203,38.2933809 C-0.0371821146,24.8304767 -1.28053094,13.7727805 2.63615554,5.12029235 C10.141056,2.84355825 18.8342301,4.64979084 28.7156778,10.5389901 C38.4862647,3.88774159 50.289117,-4.77047603e-15 63,-7.10542736e-15 L73,-7.10542736e-15 C85.7221104,-9.44244112e-15 97.5345852,3.89461262 107.310208,10.5566215 C117.203883,4.65339747 125.906912,2.84128775 133.419297,5.12029235 C137.342115,13.7863263 136.088729,24.8651051 129.659138,38.3566287 Z'
            id='WinterHat4-path1'
          />
          <path
            d='M28.7156857,10.5389848 C18.758718,17.3171083 10.9122881,26.9651756 6.36620203,38.2933809 C-0.0371821146,24.8304767 -1.28053094,13.7727805 2.63615554,5.12029235 C10.1410556,2.84355836 18.8342292,4.64979066 28.7156763,10.5389892 Z M129.659138,38.3566287 C125.120833,27.0109143 117.273404,17.34646 107.310208,10.5566215 C117.203883,4.65339747 125.906912,2.84128775 133.419297,5.12029235 C137.342115,13.7863263 136.088729,24.8651051 129.659138,38.3566287 Z'
            id='WinterHat4-path2'
          />
          <path
            d='M21.8615933,15.9591438 C17.3889306,20.0465694 13.5271638,24.7913314 10.4291788,30.040544 C7.50356643,21.9322189 7.00287124,16.3214118 8.92709323,13.2081228 C11.5782173,12.0615989 15.8897174,12.9786059 21.8615933,15.9591438 Z M125.352616,29.6737564 C122.278044,24.5465519 118.471613,19.9084198 114.077736,15.903773 C119.880509,13.0520429 124.083178,12.1889392 126.68574,13.3144617 C128.572308,16.3668294 128.127934,21.8199276 125.352616,29.6737564 Z'
            id='WinterHat4-path3'
          />
          <filter
            x='-0.7%'
            y='-1.7%'
            width='101.4%'
            height='106.8%'
            filterUnits='objectBoundingBox'
            id='filter1'
          >
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0'
              type='matrix'
              in='shadowOffsetOuter1'
            />
          </filter>
          <path
            d='M67.2846026,61.4514246 C83.229708,49.8171415 105.159178,44 133.073012,44 C160.985408,44 182.871592,49.8165424 198.731564,61.4496271 L198.731562,61.4496305 C200.786183,62.956669 202.000006,65.3523289 202.000006,67.900394 L202.000004,98.3697692 C202.000004,100.578907 200.209144,102.369768 198.000006,102.369768 C197.244444,102.369768 196.504332,102.155773 195.865355,101.752558 C179.223261,91.2508526 158.536251,86 133.804323,86 C108.883259,86 87.640395,91.3314713 70.0757313,101.994414 L70.0757317,101.994414 C68.1873241,103.140806 65.7271332,102.539283 64.5807417,100.650875 C64.2008775,100.02514 64.0000054,99.3071624 64.0000054,98.5751499 L64,67.914014 C64,65.358892 65.2205159,62.9574773 67.2846026,61.4514246 Z'
            id='WinterHat4-path4'
          />
        </defs>
        <mask id='WinterHat4-mask1' fill='white'>
          <use href='#WinterHat4-path5' />
        </mask>
        <g id='Mask' />
        <g
          id='Top/Accessories/Winter-Hat-4'
          transform='translate(-1.000000, 0.000000)'
        >
          <g
            id='hat'
            strokeWidth='1'
            fillRule='evenodd'
            transform='translate(65.000000, 4.000000)'
          >
            <mask id='WinterHat4-mask2' fill='white'>
              <use href='#WinterHat4-path1' />
            </mask>
            <use class='CustomColor' fill='var(--avataaar-hat-color)' href='#WinterHat4-path1' />
            <mask id='WinterHat4-mask3' fill='white'>
              <use href='#WinterHat4-path2' />
            </mask>
            <use
              id='shadow'
              opacity='0.24'
              fill='#000000'
              href='#WinterHat4-path2'
            />
            <mask id='WinterHat4-mask4' fill='white'>
              <use href='#WinterHat4-path3' />
            </mask>
            <use
              id='light'
              opacity='0.300000012'
              fill='#FFFFFF'
              href='#WinterHat4-path3'
            />
          </g>
          <g id='hat-front'>
            <use
              fill='black'
              opacity='1'
              filter='url("#WinterHat4-path4")'
              href='#WinterHat4-path4'
            />
            <use fill='#F4F4F4' fillRule='evenodd' href='#WinterHat4-path4' />
          </g>
        </g>
      </g>
`,nm={NoHair:Dg,Eyepatch:_g,Hat:Lg,Hijab:kg,Turban:Xg,WinterHat1:Jg,WinterHat2:Qg,WinterHat3:em,WinterHat4:tm,LongHairBigHair:vg,LongHairBob:Mg,LongHairBun:xg,LongHairCurly:Sg,LongHairCurvy:wg,LongHairDreads:Eg,LongHairFrida:Fg,LongHairFro:Tg,LongHairFroBand:Og,LongHairNotTooLong:Rg,LongHairShavedSides:Hg,LongHairMiaWallace:Ag,LongHairStraight:Pg,LongHairStraight2:Ng,LongHairStraightStrand:Ig,ShortHairDreads01:Bg,ShortHairDreads02:Vg,ShortHairFrizzle:Wg,ShortHairShaggy:$g,ShortHairShaggyMullet:jg,ShortHairShortCurly:Ug,ShortHairShortFlat:Zg,ShortHairShortRound:zg,ShortHairShortWaved:Gg,ShortHairSides:qg,ShortHairTheCaesar:Yg,ShortHairTheCaesarSidePart:Kg},rm=`
`,im=`
      <g
        id='Top/_Resources/Kurt'
        fill='none'
        transform='translate(62.000000, 85.000000)'
        strokeWidth='1'>
        <defs>
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <g
          id='Kurts'
          filter='url("#filter1")'
          transform='translate(5.000000, 2.000000)'>
          <path
            d='M66,11.1111111 C54.9625586,11.1111111 53.3705645,2.0266011 30.6705882,0.740740741 C7.98552275,-0.283199952 0.815225204,6.4494855 0.776470588,11.1111111 C0.813236892,15.4042795 -0.352293566,26.5612661 14.3647059,39.6296296 C29.1367705,55.1420807 44.2704162,49.8818301 49.6941176,44.8148148 C55.1352081,42.4731118 61.3403442,21.4596351 66,21.4814815 C70.6596558,21.5033279 76.8647919,42.4731118 82.3058824,44.8148148 C87.7295838,49.8818301 102.86323,55.1420807 117.635294,39.6296296 C132.352294,26.5612661 131.186763,15.4042795 131.223529,11.1111111 C131.184775,6.4494855 124.014477,-0.283199952 101.329412,0.740740741 C78.6294355,2.0266011 77.0374414,11.1111111 66,11.1111111 Z'
            id='It!'
            fill='#F4F4F4'
            fillRule='nonzero'
          />
          <path
            d='M55.1294118,21.4814815 C55.5103632,13.8233491 42.2156493,5.64243259 27.9529412,5.92592593 C13.6973442,6.22450879 11.8417942,15.3786982 11.6470588,18.8888889 C11.2982286,27.0220633 20.014463,45.3037598 36.1058824,44.8148148 C52.1972736,44.305848 54.9092435,26.5344305 55.1294118,21.4814815 Z'
            id='Did'
            fill='#2F383B'
            fillRule='nonzero'
          />
          <path
            d='M120.352941,21.4814815 C120.733893,13.8233491 107.439179,5.64243259 93.1764706,5.92592593 C78.9208736,6.22450879 77.0653236,15.3786982 76.8705882,18.8888889 C76.521758,27.0220633 85.2379924,45.3037598 101.329412,44.8148148 C117.420803,44.305848 120.132773,26.5344305 120.352941,21.4814815 Z'
            id='Courtney'
            fill='#2F383B'
            fillRule='nonzero'
            transform='translate(98.611765, 25.370370) scale(-1, 1) translate(-98.611765, -25.370370) '
          />
        </g>
      </g>
`,sm=`
      <g
        id='Top/_Resources/Prescription-01'
        fill='none'
        transform='translate(62.000000, 85.000000)'
        strokeWidth='1'>
        <defs>
          <filter
            x='-0.8%'
            y='-2.4%'
            width='101.5%'
            height='109.8%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <g
          id='Glasses'
          filter='url("#filter1")'
          transform='translate(8.000000, 8.000000)'
          fill='#D6EAF2'>
          <path
            d='M46.2491397,7.27516667 C48.6207695,7.2975 49.7419096,7.69183333 50.1459601,10.1651667 C50.5553446,12.6705 50.1572949,15.4871667 49.6852359,17.9548333 C48.9648125,21.7228333 47.7666627,25.4145 44.9776475,28.1685 C43.5084639,29.6188333 41.7165732,30.7748333 39.8106684,31.5641667 C38.7985419,31.9835 37.7297416,32.2861667 36.6612747,32.5158333 C36.3489024,32.5828333 33.6822357,32.9501667 35.3177735,32.7635 C31.5009631,33.1991667 27.3601122,33.1818333 24.1723805,30.7525 C20.6396056,28.0601667 18.2203032,23.7998333 17.1565036,19.5561667 C16.5340925,17.0731667 15.2262624,11.1345 17.6158944,9.14916667 C20.3532365,6.8745 46.2491397,7.27516667 46.2491397,7.27516667 L46.2491397,7.27516667 Z M22.2178029,0.4905 C16.7774562,0.677833333 13.1466691,1.63383333 10.4633337,7.06916667 C5.54571911,17.0301667 13.9627711,31.9688333 23.352278,36.0395 C34.3293166,40.7991667 46.5921826,35.5318333 52.3955746,26.0058333 C55.4689587,20.9621667 57.0224862,13.3231667 56.9224737,7.50383333 C56.7951245,0.0765 51.6071427,-0.1295 45.5090472,0.0338333333 L22.2178029,0.4905 Z'
            id='Frame-Stuff'
          />
          <path
            d='M79.6805515,7.27256667 C77.3089217,7.29523333 76.1877816,7.68923333 75.7837311,10.1625667 C75.3743466,12.6679 75.7723963,15.4845667 76.244122,17.9522333 C76.9648787,21.7202333 78.1630285,25.4119 80.9520437,28.1659 C82.4212273,29.6162333 84.213118,30.7722333 86.1190228,31.5619 C87.1311493,31.9809 88.1999496,32.2835667 89.2684165,32.5132333 C89.5807888,32.5802333 92.2471221,32.9479 90.6119177,32.7609 C94.4287281,33.1965667 98.569579,33.1792333 101.757311,30.7499 C105.290086,28.0575667 107.709388,23.7975667 108.773188,19.5539 C109.395599,17.0705667 110.703095,11.1322333 108.313797,9.14656667 C105.576455,6.8719 79.6805515,7.27256667 79.6805515,7.27256667 L79.6805515,7.27256667 Z M103.711555,0.4879 C109.152235,0.675233333 112.783022,1.63156667 115.466357,7.06656667 C120.383639,17.0275667 111.96692,31.9662333 102.577413,36.0372333 C91.6003746,40.7965667 79.3375086,35.5292333 73.5337832,26.0035667 C70.4607325,20.9595667 68.907205,13.3205667 69.0068841,7.50123333 C69.1345667,0.0739 74.3225485,-0.1321 80.420644,0.0315666667 L103.711555,0.4879 Z'
            id='Frame-Stuff'
          />
          <path
            d='M13.1969483,4.9267 C9.78501392,5.11836667 5.88606327,5.16436667 2.69005822,6.63936667 C-0.69461078,8.20136667 -1.2176675,11.7387 3.04920921,12.2260333 C4.97094906,12.4457 6.89488267,12.0827 8.78716336,11.7450333 C10.336903,11.4683667 12.4419791,11.5580333 13.9064752,10.9657 C16.6355213,9.86236667 16.4603333,4.74003333 13.1969483,4.9267'
            id='Frame-Stuff'
          />
          <path
            d='M112.73467,4.9267 C116.146606,5.11836667 120.045559,5.16436667 123.241565,6.63936667 C126.626236,8.20136667 127.149293,11.7387 122.882414,12.2260333 C120.960673,12.4457 119.036739,12.0827 117.144457,11.7450333 C115.594717,11.4683667 113.489639,11.5580333 112.025143,10.9657 C109.295782,9.86236667 109.471283,4.74003333 112.73467,4.9267'
            id='Frame-Stuff'
          />
          <path
            d='M73.1094302,7.01263333 C71.1631869,4.71263333 66.0912197,3.38463333 62.8914864,3.38463333 C59.6914198,3.38463333 54.7681378,4.71263333 52.8222279,7.01263333 C51.8407719,8.1723 51.8074344,9.72396667 53.5083137,10.4509667 C55.6262451,11.3566333 57.5174814,9.7143 59.2126933,8.8553 C61.3809643,7.75663333 64.7120473,7.8773 66.7189648,8.8553 C68.4271783,9.68796667 70.3050797,11.3566333 72.4233444,10.4509667 C74.1242237,9.72396667 74.0908862,8.1723 73.1094302,7.01263333'
            id='Frame-Stuff'
          />
        </g>
      </g>
`,am=`
      <g id="Top/_Resources/Prescription-02" fill="none" transform="translate(62.000000, 85.000000)" stroke-width="1">
    <defs>
        <filter x="-0.8%" y="-2.4%" width="101.5%" height="109.8%" filterUnits="objectBoundingBox" id="react-filter-1166">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0" type="matrix" in="shadowOffsetOuter1" result="shadowMatrixOuter1"></feColorMatrix>
            <feMerge>
                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
        </filter>
    </defs>
    <g id="Wayfarers" filter="url(#react-filter-1166)" transform="translate(6.000000, 7.000000)" fill="#252C2F">
        <path d="M34,41 L31.2421498,41 C17.3147125,41 9,33.3359286 9,20.5 C9,10.127 10.8170058,0 32.5299306,0 L35.4700694,0 C57.1829942,0 59,10.127 59,20.5 C59,32.5686429 48.7212748,41 34,41 Z M32.3853606,6 C13,6 13,12.8410159 13,21.5015498 C13,28.5719428 16.116254,37 30.9709365,37 L34,37 C46.3649085,37 55,30.6270373 55,21.5015498 C55,12.8410159 55,6 35.6146394,6 L32.3853606,6 Z" id="Left" fill-rule="nonzero"></path>
        <path d="M96,41 L93.2421498,41 C79.3147125,41 71,33.3359286 71,20.5 C71,10.127 72.8170058,0 94.5299306,0 L97.4700694,0 C119.182994,0 121,10.127 121,20.5 C121,32.5686429 110.721275,41 96,41 Z M94.3853606,6 C75,6 75,12.8410159 75,21.5015498 C75,28.5719428 78.1194833,37 92.9709365,37 L96,37 C108.364909,37 117,30.6270373 117,21.5015498 C117,12.8410159 117,6 97.6146394,6 L94.3853606,6 Z" id="Right" fill-rule="nonzero"></path>
        <path d="M2.95454545,5.77156439 C3.64590909,5.09629136 11.2095455,0 32.5,0 C50.3513636,0 54.1302273,1.85267217 59.8502273,4.6518809 L60.2689233,4.85850899 C60.6666014,4.99901896 62.7002447,5.68982981 65.0790606,5.76579519 C67.2462948,5.67278567 69.1000195,5.08540191 69.641698,4.89719767 C76.1703915,1.7220864 82.5610971,0 97.5,0 C118.790455,0 126.354091,5.09629136 127.045455,5.77156439 C128.679318,5.77156439 130,7.06150904 130,8.65734659 L130,11.5431288 C130,13.1389663 128.679318,14.428911 127.045455,14.428911 C127.045455,14.428911 120.143997,14.428911 120.143997,17.3146932 C120.143997,20.2004754 118.181818,13.1389663 118.181818,11.5431288 L118.181818,8.73240251 C114.578575,7.35340151 108.128411,4.78617535 97.5,4.78617535 C85.6584651,4.78617535 79.7610984,6.88602813 74.7022935,8.97112368 L74.7588636,9.10752861 L74.7563667,11.0937608 L72.5391666,16.4436339 L69.8004908,15.3608351 C69.5558969,15.2641292 69.0281396,15.090392 68.2963505,14.9099044 C66.256272,14.4067419 64.1589087,14.253569 62.3040836,14.6343084 C61.6235903,14.7739931 60.9922286,14.9836085 60.4128127,15.266732 L57.7704824,16.5578701 L55.1266751,11.3962031 L55.2440909,9.10175705 L55.3248203,8.90683855 C50.9620526,6.87386374 46.9392639,4.78617535 32.5,4.78617535 C21.8721459,4.78617535 15.422131,7.3524397 11.8181818,8.7314671 L11.8181818,11.5431288 C11.8181818,13.1389663 8.86363636,20.2004754 8.86363636,17.3146932 C8.86363636,14.428911 2.95454545,14.428911 2.95454545,14.428911 C1.32363636,14.428911 0,13.1389663 0,11.5431288 L0,8.65734659 C0,7.06150904 1.32363636,5.77156439 2.95454545,5.77156439 Z" id="Stuff" fill-rule="nonzero"></path>
    </g>
</g>
`,om=`
      <g
        id='Top/_Resources/Round'
        fill='none'
        transform='translate(62.000000, 85.000000)'>
        <defs>
          <path
            d='M80.4646192,16.3941179 C84.3801509,8.45869677 92.552602,3 102,3 C110.919691,3 118.702887,7.86591082 122.839921,15.0880638 C123.050197,15.0306504 123.271519,15 123.5,15 L131.5,15 C132.880712,15 134,16.1192881 134,17.5 C134,18.8807119 132.880712,20 131.5,20 L124.963126,20 C125.637355,22.2145921 126,24.5649459 126,27 C126,40.254834 115.254834,51 102,51 C88.745166,51 78,40.254834 78,27 C78,25.5781066 78.1236513,24.1850936 78.3607874,22.8311273 C78.2762458,18.4553035 74.9135957,15 70.8624171,15 C67.1256697,15 63.9747186,17.9397535 63.4417635,21.8300629 C63.8073299,23.4951922 64,25.2250958 64,27 C64,40.254834 53.254834,51 40,51 C26.745166,51 16,40.254834 16,27 C16,24.5649459 16.3626451,22.2145921 17.0368738,20 L10.5,20 C9.11928813,20 8,18.8807119 8,17.5 C8,16.1192881 9.11928813,15 10.5,15 L10.5,15 L18.5,15 C18.728481,15 18.9498033,15.0306504 19.1600793,15.0880638 C23.2971127,7.86591082 31.0803092,3 40,3 C49.3521568,3 57.4549431,8.34919095 61.415666,16.15488 C63.4929212,13.0392725 66.9494432,11 70.8624171,11 C74.8746823,11 78.4070368,13.1440781 80.4646192,16.3941179 Z M40,47 C51.045695,47 60,38.045695 60,27 C60,15.954305 51.045695,7 40,7 C28.954305,7 20,15.954305 20,27 C20,38.045695 28.954305,47 40,47 Z M102,47 C113.045695,47 122,38.045695 122,27 C122,15.954305 113.045695,7 102,7 C90.954305,7 82,15.954305 82,27 C82,38.045695 90.954305,47 102,47 Z'
            id='Round-path1'
          />
          <filter
            x='-0.8%'
            y='-2.1%'
            width='101.6%'
            height='108.3%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0'
              type='matrix'
              in='shadowOffsetOuter1'
            />
          </filter>
        </defs>
        <g id='Lennon-Glasses'>
          <use
            fill='black'
            fillOpacity='1'
            filter='url("#filter1")'
            href='#Round-path1'
          />
          <use fill='#252C2F' fillRule='evenodd' href='#Round-path1' />
        </g>
      </g>
`,lm=`
      <g id="Top/_Resources/Sunglasses" fill="none" transform="translate(62.000000, 85.000000)" stroke-width="1">
    <defs>
        <filter x="-0.8%" y="-2.6%" width="101.6%" height="110.5%" filterUnits="objectBoundingBox" id="react-filter-1163">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0" type="matrix" in="shadowOffsetOuter1" result="shadowMatrixOuter1"></feColorMatrix>
            <feMerge>
                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
        </filter>
        <path d="M47.0104611,6.27728008 C49.5212682,6.30134922 50.7082016,6.72633117 51.1359635,9.39189846 C51.5693724,12.0919529 51.1479634,15.1275382 50.648202,17.7869984 C49.8855011,21.8478573 48.6170388,25.8264499 45.6643523,28.794498 C44.1089507,30.3575551 42.2119044,31.6034024 40.1941529,32.4540848 C39.1226305,32.9060098 37.9911085,33.2322006 36.8599395,33.4797175 C36.5292357,33.5519249 33.7060778,33.9478084 35.4375958,33.7466335 C31.3967988,34.2161613 27.0129452,34.1974808 23.6381438,31.5793333 C19.8980507,28.6777448 17.3367734,24.0862872 16.2105455,19.5127916 C15.5516086,16.8368063 14.1670294,10.4365709 16.6968952,8.29693227 C19.5948762,5.84547255 47.0104611,6.27728008 47.0104611,6.27728008 L47.0104611,6.27728008 Z" id="react-path-1161"></path>
        <path d="M78.9192315,6.27468008 C76.4084239,6.29910846 75.2214902,6.72373117 74.7937283,9.38929846 C74.3603192,12.0893529 74.7817283,15.1249382 75.2811369,17.7843984 C76.0441909,21.8452573 77.3126534,25.8238499 80.2653406,28.791898 C81.8207425,30.3549551 83.7177893,31.6008024 85.7355412,32.4518441 C86.8070638,32.9034098 87.938586,33.2296006 89.0697553,33.4771175 C89.4004591,33.5493249 92.2232647,33.9455676 90.4920992,33.7440335 C94.5328971,34.2135613 98.9167517,34.1948808 102.291554,31.5767333 C106.031648,28.6751448 108.592926,24.0840464 109.719154,19.5105508 C110.378091,16.8342063 111.762317,10.4343302 109.232804,8.29433227 C106.334822,5.84287255 78.9192315,6.27468008 78.9192315,6.27468008 L78.9192315,6.27468008 Z" id="react-path-1162"></path>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="70.5058195%" id="react-linear-gradient-1164">
            <stop stop-color="#FFFFFF" stop-opacity="0.5" offset="0%"></stop>
            <stop stop-color="#000000" stop-opacity="0.5" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="react-linear-gradient-1165">
            <stop stop-color="#FFFFFF" stop-opacity="0.5" offset="0%"></stop>
            <stop stop-color="#000000" stop-opacity="0.5" offset="70.5058195%"></stop>
        </linearGradient>
    </defs>
    <g id="Sunglasses" filter="url(#react-filter-1163)" transform="translate(8.000000, 8.000000)">
        <g id="shades">
            <use fill-opacity="0.700000048" fill="#000000" xlink:href="#react-path-1161"></use>
            <use fill="url(#react-linear-gradient-1164)" xlink:href="#react-path-1161" style="mix-blend-mode: screen;"></use>
        </g>
        <g id="shades">
            <use fill-opacity="0.700000048" fill="#000000" xlink:href="#react-path-1162"></use>
            <use fill="url(#react-linear-gradient-1165)" xlink:href="#react-path-1162" style="mix-blend-mode: screen;"></use>
        </g>
        <g id="Glasses" fill="#252C2F">
            <path d="M46.2491397,7.27516667 C48.6207695,7.2975 49.7419096,7.69183333 50.1459601,10.1651667 C50.5553446,12.6705 50.1572949,15.4871667 49.6852359,17.9548333 C48.9648125,21.7228333 47.7666627,25.4145 44.9776475,28.1685 C43.5084639,29.6188333 41.7165732,30.7748333 39.8106684,31.5641667 C38.7985419,31.9835 37.7297416,32.2861667 36.6612747,32.5158333 C36.3489024,32.5828333 33.6822357,32.9501667 35.3177735,32.7635 C31.5009631,33.1991667 27.3601122,33.1818333 24.1723805,30.7525 C20.6396056,28.0601667 18.2203032,23.7998333 17.1565036,19.5561667 C16.5340925,17.0731667 15.2262624,11.1345 17.6158944,9.14916667 C20.3532365,6.8745 46.2491397,7.27516667 46.2491397,7.27516667 L46.2491397,7.27516667 Z M22.2178029,0.4905 C16.7774562,0.677833333 13.1466691,1.63383333 10.4633337,7.06916667 C5.54571911,17.0301667 13.9627711,31.9688333 23.352278,36.0395 C34.3293166,40.7991667 46.5921826,35.5318333 52.3955746,26.0058333 C55.4689587,20.9621667 57.0224862,13.3231667 56.9224737,7.50383333 C56.7951245,0.0765 51.6071427,-0.1295 45.5090472,0.0338333333 L22.2178029,0.4905 Z" id="Frame"></path>
            <path d="M79.6805515,7.27256667 C77.3089217,7.29523333 76.1877816,7.68923333 75.7837311,10.1625667 C75.3743466,12.6679 75.7723963,15.4845667 76.244122,17.9522333 C76.9648787,21.7202333 78.1630285,25.4119 80.9520437,28.1659 C82.4212273,29.6162333 84.213118,30.7722333 86.1190228,31.5619 C87.1311493,31.9809 88.1999496,32.2835667 89.2684165,32.5132333 C89.5807888,32.5802333 92.2471221,32.9479 90.6119177,32.7609 C94.4287281,33.1965667 98.569579,33.1792333 101.757311,30.7499 C105.290086,28.0575667 107.709388,23.7975667 108.773188,19.5539 C109.395599,17.0705667 110.703095,11.1322333 108.313797,9.14656667 C105.576455,6.8719 79.6805515,7.27256667 79.6805515,7.27256667 L79.6805515,7.27256667 Z M103.711555,0.4879 C109.152235,0.675233333 112.783022,1.63156667 115.466357,7.06656667 C120.383639,17.0275667 111.96692,31.9662333 102.577413,36.0372333 C91.6003746,40.7965667 79.3375086,35.5292333 73.5337832,26.0035667 C70.4607325,20.9595667 68.907205,13.3205667 69.0068841,7.50123333 C69.1345667,0.0739 74.3225485,-0.1321 80.420644,0.0315666667 L103.711555,0.4879 Z" id="Frame"></path>
            <path d="M13.1969483,4.9267 C9.78501392,5.11836667 5.88606327,5.16436667 2.69005822,6.63936667 C-0.69461078,8.20136667 -1.2176675,11.7387 3.04920921,12.2260333 C4.97094906,12.4457 6.89488267,12.0827 8.78716336,11.7450333 C10.336903,11.4683667 12.4419791,11.5580333 13.9064752,10.9657 C16.6355213,9.86236667 16.4603333,4.74003333 13.1969483,4.9267" id="Frame"></path>
            <path d="M112.73467,4.9267 C116.146606,5.11836667 120.045559,5.16436667 123.241565,6.63936667 C126.626236,8.20136667 127.149293,11.7387 122.882414,12.2260333 C120.960673,12.4457 119.036739,12.0827 117.144457,11.7450333 C115.594717,11.4683667 113.489639,11.5580333 112.025143,10.9657 C109.295782,9.86236667 109.471283,4.74003333 112.73467,4.9267" id="Frame"></path>
            <path d="M73.1094302,7.01263333 C71.1631869,4.71263333 66.0912197,3.38463333 62.8914864,3.38463333 C59.6914198,3.38463333 54.7681378,4.71263333 52.8222279,7.01263333 C51.8407719,8.1723 51.8074344,9.72396667 53.5083137,10.4509667 C55.6262451,11.3566333 57.5174814,9.7143 59.2126933,8.8553 C61.3809643,7.75663333 64.7120473,7.8773 66.7189648,8.8553 C68.4271783,9.68796667 70.3050797,11.3566333 72.4233444,10.4509667 C74.1242237,9.72396667 74.0908862,8.1723 73.1094302,7.01263333" id="Frame"></path>
        </g>
    </g>
</g>
`,cm=`
      <g id="Top/_Resources/Wayfarers" fill="none" transform="translate(62.000000, 85.000000)" stroke-width="1">
    <defs>
        <filter x="-0.8%" y="-2.4%" width="101.6%" height="109.8%" filterUnits="objectBoundingBox" id="react-filter-1159">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0" type="matrix" in="shadowOffsetOuter1" result="shadowMatrixOuter1"></feColorMatrix>
            <feMerge>
                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
        </filter>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="react-linear-gradient-1160">
            <stop stop-color="#FFFFFF" stop-opacity="0.5" offset="0%"></stop>
            <stop stop-color="#000000" stop-opacity="0.5" offset="70.5058195%"></stop>
        </linearGradient>
        <path d="M44.9178864,17.5714286 C44.9178864,27.2737857 36.66775,35.1428571 22.9204545,35.1428571 L20.1704091,35.1428571 C6.42311364,35.1428571 0.923022727,27.2708571 0.923022727,17.5714286 L0.923022727,17.5714286 C0.923022727,7.86614286 2.20715909,0 21.4545455,0 L24.3863636,0 C43.63375,0 44.9178864,7.86614286 44.9178864,17.5714286 L44.9178864,17.5714286 Z" id="react-path-1157"></path>
        <path d="M106.486068,17.5714286 C106.486068,27.2737857 98.2388636,35.1428571 84.4886364,35.1428571 L81.7385909,35.1428571 C67.9912955,35.1428571 62.4912045,27.2708571 62.4912045,17.5714286 L62.4912045,17.5714286 C62.4912045,7.86614286 63.7753409,0 83.0227273,0 L85.9545455,0 C105.199,0 106.486068,7.86614286 106.486068,17.5714286 L106.486068,17.5714286 Z" id="react-path-1158"></path>
    </defs>
    <g id="Wayfarers" filter="url(#react-filter-1159)" transform="translate(7.000000, 7.000000)">
        <g id="Shades" transform="translate(10.795455, 2.928571)" fill-rule="nonzero">
            <g id="Shade">
                <use fill-opacity="0.700000048" fill="#000000" fill-rule="evenodd" xlink:href="#react-path-1157"></use>
                <use fill="url(#react-linear-gradient-1160)" fill-rule="evenodd" xlink:href="#react-path-1157" style="mix-blend-mode: screen;"></use>
            </g>
            <g id="Shade">
                <use fill-opacity="0.700000048" fill="#000000" fill-rule="evenodd" xlink:href="#react-path-1158"></use>
                <use fill="url(#react-linear-gradient-1160)" fill-rule="evenodd" xlink:href="#react-path-1158" style="mix-blend-mode: screen;"></use>
            </g>
        </g>
        <path d="M33.7159091,41 L30.9658636,41 C17.0778409,41 8.78665909,33.3359286 8.78665909,20.5 C8.78665909,10.127 10.5985227,0 32.25,0 L35.1818182,0 C56.8332955,0 58.6451591,10.127 58.6451591,20.5 C58.6451591,32.5686429 48.3955227,41 33.7159091,41 Z M32.25,5.85421429 C14.6502955,5.85421429 14.6502955,12.3175714 14.6502955,20.5 C14.6502955,27.1800714 17.4795,35.1428571 30.9658636,35.1428571 L33.7159091,35.1428571 C44.9418409,35.1428571 52.7815227,29.1217143 52.7815227,20.5 C52.7815227,12.3175714 52.7815227,5.85421429 35.1818182,5.85421429 L32.25,5.85421429 Z" id="Left" fill="#252C2F" fill-rule="nonzero"></path>
        <path d="M95.2840909,41 L92.5340455,41 C78.6460227,41 70.3548409,33.3359286 70.3548409,20.5 C70.3548409,10.127 72.1667045,0 93.8181818,0 L96.75,0 C118.401477,0 120.213341,10.127 120.213341,20.5 C120.213341,32.5686429 109.963705,41 95.2840909,41 Z M93.8181818,5.85421429 C76.2184773,5.85421429 76.2184773,12.3175714 76.2184773,20.5 C76.2184773,27.1800714 79.0506136,35.1428571 92.5340455,35.1428571 L95.2840909,35.1428571 C106.510023,35.1428571 114.349705,29.1217143 114.349705,20.5 C114.349705,12.3175714 114.349705,5.85421429 96.75,5.85421429 L93.8181818,5.85421429 Z" id="Right" fill="#252C2F" fill-rule="nonzero"></path>
        <path d="M2.93181818,5.85714286 C3.61786364,5.17185714 11.1233182,0 32.25,0 C49.9640455,0 53.7138409,1.88014286 59.3898409,4.72085714 L59.8053162,4.93054903 C60.1999353,5.07314243 62.2179351,5.77419634 64.5784525,5.85128811 C66.7290156,5.75689949 68.5684809,5.16080623 69.1059926,4.96981137 C75.5844654,1.74762081 81.9260118,0 96.75,0 C117.876682,0 125.382136,5.17185714 126.068182,5.85714286 C127.689477,5.85714286 129,7.16621429 129,8.78571429 L129,11.7142857 C129,13.3337857 127.689477,14.6428571 126.068182,14.6428571 C126.068182,14.6428571 120.204545,14.6428571 120.204545,17.5714286 C120.204545,20.5 117.272727,13.3337857 117.272727,11.7142857 L117.272727,8.8618831 C113.697201,7.46243482 107.296654,5.85714286 96.75,5.85714286 C84.9995538,5.85714286 79.1475515,6.98813142 74.1276604,9.10414393 L74.1837955,9.24257143 L71.6878772,10.2500422 L74.1813177,11.2582547 L71.981173,16.6874536 L69.263564,15.5885995 C69.0208516,15.4904597 68.4971539,15.3141463 67.770994,15.1309826 C65.7466083,14.6203594 63.6653786,14.4649153 61.8248214,14.8513001 C61.1495627,14.993056 60.5230576,15.2057795 59.9480988,15.4931011 L57.3260941,16.8033836 L54.7026238,11.5651815 L57.3246285,10.2548989 L57.3310023,10.251716 L54.8191364,9.23671429 L54.8992448,9.03890561 C50.5700368,6.97578666 46.5781927,5.85714286 32.25,5.85714286 C21.7038986,5.85714286 15.3034993,7.46145875 11.7272727,8.86093383 L11.7272727,11.7142857 C11.7272727,13.3337857 8.79545455,20.5 8.79545455,17.5714286 C8.79545455,14.6428571 2.93181818,14.6428571 2.93181818,14.6428571 C1.31345455,14.6428571 0,13.3337857 0,11.7142857 L0,8.78571429 C0,7.16621429 1.31345455,5.85714286 2.93181818,5.85714286 Z" id="Stuff" fill="#252C2F" fill-rule="nonzero"></path>
    </g>
</g>
`,um={Blank:rm,Kurt:im,Prescription01:sm,Prescription02:am,Round:om,Sunglasses:lm,Wayfarers:cm},fm=`
      <g
        id='Facial-Hair/Beard-Light'
        transform='translate(49.000000, 72.000000)'>
        <defs>
          <path
            d='M101.428403,98.1685688 C98.9148372,100.462621 96.23722,101.494309 92.8529444,100.772863 C92.2705777,100.648833 89.8963391,96.2345713 83.9998344,96.2345713 C78.1033297,96.2345713 75.7294253,100.648833 75.1467245,100.772863 C71.7624488,101.494309 69.0848316,100.462621 66.5712661,98.1685688 C61.8461772,93.855604 57.9166219,87.9081858 60.2778299,81.4191814 C61.5083844,78.0369425 63.5097479,74.3237342 67.1506257,73.2459109 C71.0384163,72.0955419 76.4968931,73.2439051 80.4147542,72.4582708 C81.6840664,72.2035248 83.0706538,71.7508657 83.9998344,71 C84.929015,71.7508657 86.3159365,72.2035248 87.5845805,72.4582708 C91.5027758,73.2439051 96.9612525,72.0955419 100.849043,73.2459109 C104.489921,74.3237342 106.491284,78.0369425 107.722173,81.4191814 C110.083381,87.9081858 106.153826,93.855604 101.428403,98.1685688 M140.081033,26 C136.670693,34.4002532 137.987774,44.8580348 137.356666,53.6758724 C136.844038,60.8431942 135.33712,71.5857526 128.972858,76.214531 C125.718361,78.5816138 119.79436,82.5598986 115.54187,81.4501943 C112.614539,80.6863848 112.302182,72.290096 108.455284,69.1469801 C104.09172,65.5823153 98.6429854,64.0160432 93.1491481,64.2578722 C90.7785381,64.3622683 85.9841367,64.3374908 83.9999331,66.1604584 C82.0157295,64.3374908 77.2216647,64.3622683 74.8510547,64.2578722 C69.3568808,64.0160432 63.9081467,65.5823153 59.5445817,69.1469801 C55.6976839,72.290096 55.3856641,80.6863848 52.4583326,81.4501943 C48.2058427,82.5598986 42.2818421,78.5816138 39.0270077,76.214531 C32.6624096,71.5857526 31.1561652,60.8431942 30.642864,53.6758724 C30.0120926,44.8580348 31.3291729,34.4002532 27.9188335,26 C26.2597768,26 27.3540339,42.1288693 27.3540339,42.1288693 L27.3540339,62.4851205 C27.3856735,77.7732046 36.935095,100.655445 58.1080116,109.393004 C63.2861266,111.52982 75.0153111,115 83.9999331,115 C92.9845551,115 104.71374,111.860188 109.891855,109.723371 C131.064771,100.985813 140.614193,77.7732046 140.646169,62.4851205 L140.646169,42.1288693 C140.646169,42.1288693 141.740089,26 140.081033,26'
            id='BeardLight-path1'
          />
        </defs>
        <mask id='BeardLight-mask1' fill='white'>
          <use href='#BeardLight-path1' />
        </mask>
        <use
          class='CustomColor'
          fill='var(--avataaar-facial-hair-color)'
          fillRule='evenodd'
          href='#BeardLight-path1'
        />
      </g>
`,dm=`
      <g
        id='Facial-Hair/Beard-Majestic'
        transform='translate(49.000000, 72.000000)'>
        <defs>
          <path
            d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'
            id='BeardMajestic-path1'
          />
        </defs>
        <mask id='BeardMajestic-mask1' fill='white'>
          <use href='#BeardMajestic-path1' />
        </mask>
        <use
          class='CustomColor'
          fill='var(--avataaar-facial-hair-color)'
          fillRule='evenodd'
          href='#BeardMajestic-path1'
        />
      </g>
`,hm=`
      <g
        id='Facial-Hair/Beard-Medium'
        transform='translate(49.000000, 72.000000)'>
        <defs>
          <path
            d='M105.017591,94.1296214 C101.150441,99.7213834 98.257542,95.9467308 94.1374777,92.8762163 C91.6567227,91.0272796 87.9608129,88.7275108 84.5044337,88.8410391 C81.0477114,88.7275108 77.3518016,91.0272796 74.8710466,92.8762163 C70.7509822,95.9467308 67.8580835,99.7213834 63.9909333,94.1296214 C61.0884259,89.9323547 62.3028943,82.8739117 65.014944,78.9027173 C68.8738581,73.2512381 74.1088724,75.9847769 79.9622738,75.3400279 C81.5538829,75.1648137 83.1526985,74.7228407 84.5044337,74 C85.856169,74.7228407 87.4546414,75.1648137 89.0462504,75.3400279 C94.899995,75.9847769 100.134666,73.2512381 103.993923,78.9027173 C106.70563,82.8739117 107.920098,89.9323547 105.017591,94.1296214 M140.39109,26 C136.966521,40.0748212 135.393023,54.4337754 132.909944,68.6711471 C132.392536,71.6390145 131.826063,74.5963095 131.224594,77.5496398 C131.098329,78.1697764 130.973781,80.4725746 130.362704,80.7643064 C128.511632,81.6484223 124.739149,76.9466834 123.730409,75.8851496 C121.196893,73.219256 118.684993,70.5292442 115.599415,68.437233 C109.364783,64.2102603 102.065485,61.7108818 94.4700836,61.117837 C91.2922091,60.8693859 86.9951134,61.3025234 84.000116,63.1104016 C81.0051185,61.3025234 76.7080229,60.8693859 73.5298053,61.117837 C65.9344039,61.7108818 58.6351055,64.2102603 52.4004739,68.437233 C49.3148957,70.5292442 46.8033387,73.219256 44.2694796,75.8851496 C43.2607395,76.9466834 39.4882573,81.6484223 37.6371849,80.7643064 C37.0261079,80.4725746 36.9015594,78.1697764 36.7752954,77.5496398 C36.1738255,74.5963095 35.6073527,71.6390145 35.0899445,68.6711471 C32.6072086,54.4337754 31.0337113,40.0748212 27.6091415,26 C26.6127533,26 25.7385119,44.7478165 25.6273446,46.4945731 C25.174784,53.5889755 24.6463963,60.5254529 25.3216346,67.6261326 C26.485803,79.8749043 27.6993791,95.2339402 37.032627,104.58753 C45.4659003,113.039493 57.7103052,114.806417 68.2713185,120.141327 C69.631059,120.828202 71.4347824,121.676306 73.3798667,122.37111 C75.4289129,123.934171 79.4926946,125 84.1740722,125 C89.0846465,125 93.3155222,123.827456 95.2540874,122.137856 C96.9548781,121.49261 98.5180822,120.752874 99.7285704,120.141327 C110.288776,114.805245 122.533989,113.039493 130.967262,104.58753 C140.30051,95.2339402 141.514086,79.8749043 142.678597,67.6261326 C143.353493,60.5254529 142.825105,53.5889755 142.372887,46.4945731 C142.261377,44.7478165 141.387136,26 140.39109,26 Z'
            id='BeardMedium-path1'
          />
        </defs>
        <mask id='BeardMedium-mask1' fill='white'>
          <use href='#BeardMedium-path1' />
        </mask>
        <use
          class='CustomColor'
          fill='var(--avataaar-facial-hair-color)'
          fillRule='evenodd'
          href='#BeardMedium-path1'
        />
      </g>
`,Cm=`
`,gm=`
      <g
        id='Facial-Hair/Moustache-Fancy'
        transform='translate(49.000000, 72.000000)'>
        <defs>
          <path
            d='M84.0002865,69.2970648 C77.2083681,65.7112456 67.5782013,65.1489138 62.3885276,67.1316942 C56.6144416,69.3374281 51.5052994,75.5829845 42.6388201,72.8283797 C42.2699314,72.7136458 41.9094725,73.0449523 42.0204089,73.408662 C43.3937943,77.9183313 51.0278347,81.0068878 53.6221945,81.1080652 C64.961124,81.549609 74.0949802,72.8302891 84.0002865,72.1614794 C93.9055921,72.8302891 103.03945,81.549609 114.378714,81.1080652 C116.972736,81.0068878 124.607113,77.9183313 125.980498,73.408662 C126.091098,73.0449523 125.730639,72.7136458 125.36175,72.8283797 C116.495271,75.5829845 111.386129,69.3374281 105.612044,67.1316942 C100.422371,65.1489138 90.7922044,65.7112456 84.0002865,69.2970648 Z'
            id='MoustacheFancy-path1'
          />
        </defs>
        <mask id='MoustacheFancy-mask1' fill='white'>
          <use href='#MoustacheFancy-path1' />
        </mask>
        <use
          class='CustomColor'
          fill='var(--avataaar-facial-hair-color)'
          fillRule='evenodd'
          href='#MoustacheFancy-path1'
        />
      </g>
`,mm=`
      <g
        id='Facial-Hair/Moustache-Magnum'
        transform='translate(49.000000, 72.000000)'>
        <defs>
          <path
            d='M83.9980103,74.839711 C83.4569991,75.6087366 82.761047,76.2496937 81.949688,76.6891498 C73.0477917,81.5102869 63.8767499,77.3322546 58.8763101,77.6298353 C56.459601,77.7739966 53.3405442,79.4153191 52.2155358,77.6791014 C50.9768736,75.7669804 55.0680827,65.2207224 64.7214121,63.4643353 C71.7310704,62.1893309 81.4972391,63.6024033 83.9980103,66.9380109 C86.4987814,63.6024033 96.2649453,62.1893309 103.274279,63.4643353 C112.927938,65.2207224 117.019147,75.7669804 115.780485,77.6791014 C114.655476,79.4153191 111.53642,77.7739966 109.119711,77.6298353 C104.118941,77.3322546 94.948229,81.5102869 86.0463327,76.6891498 C85.2349736,76.2496937 84.5390216,75.6087366 83.9980103,74.839711 Z'
            id='MoustacheMagnum-path1'
          />
        </defs>
        <mask id='MoustacheMagnum-mask1' fill='white'>
          <use href='#MoustacheMagnum-path1' />
        </mask>
        <use
          class='CustomColor'
          fill='var(--avataaar-facial-hair-color)'
          fillRule='evenodd'
          href='#MoustacheMagnum-path1'
        />
      </g>
`,pm={Blank:Cm,BeardMedium:hm,BeardLight:fm,BeardMajestic:dm,MoustacheFancy:gm,MoustacheMagnum:mm},bm=`
  <g id="Clothing/Graphic-Shirt" transform="translate(0.000000, 170.000000)">
    <defs>
        <path d="M165.624032,29.2681342 C202.760022,32.1373245 232,63.1798426 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.8348009 61.7752018,31.5722494 99.3929298,29.1967444 C99.1342224,30.2735458 99,31.3767131 99,32.5 C99,44.3741221 113.998461,54 132.5,54 C151.001539,54 166,44.3741221 166,32.5 C166,31.4015235 165.871641,30.3222877 165.624025,29.2681336 Z" id="react-path-1153">
        </path>
    </defs>
    <mask id="react-mask-1154" fill="white">
        <use xlink:href="#react-path-1153"></use>
    </mask>
    <use id="Clothes" fill="#E6E6E6" fill-rule="evenodd" xlink:href="#react-path-1153"></use>
    <g id="Color/Palette/" mask="url(#react-mask-1154)" fill-rule="evenodd" fill='var(--avataaar-shirt-color)'>
        <rect id="\u{1F58D}Color" x="0" y="0" width="264" height="110"></rect>
    </g>
    <g id="Clothing/Graphic/Skull" mask="url(#react-mask-1154)" fill-rule="evenodd" fill="#FFFFFF">
        <g transform="translate(77.000000, 58.000000)" id="Fill-49">
            <path d="M65.2820354,19.9288113 C64.9841617,22.7059411 59.588846,24.2025715 57.6102394,22.3766824 C56.6984983,21.5350479 56.6825881,19.8029182 56.4815012,18.6751632 C56.1014249,16.5420247 55.8256486,14.4172496 55.7306295,12.2519776 C55.6727342,10.9274596 55.3253621,9.86749314 56.7745135,9.67029008 C57.65797,9.55055964 58.5675014,10.137767 59.2896464,10.6026028 C61.736719,12.1758255 65.6201265,16.7414286 65.2820354,19.9288113 M52.8813831,14.0756657 C53.1659984,16.901216 54.2014853,21.8145656 51.9457767,24.1810024 C49.9296045,26.2960933 45.7863308,24.19905 45.1631825,21.7084809 C44.3897714,18.6188195 47.4383369,14.9274245 49.307782,12.8387447 C49.881874,12.1969544 51.151594,10.4256483 52.1442119,11.018578 C52.526056,11.2461539 52.8367463,13.6301981 52.8813831,14.0756657 M54.3212536,25.1062722 C54.9678252,23.5832306 61.2342228,28.1246236 58.2744891,30.2850536 C57.7918806,30.6376421 54.1148633,31.7513112 53.4099544,31.2274906 C51.9250051,30.1235056 53.8408548,26.2630794 54.3212536,25.1062722 M73.3250687,17.5267194 C72.8817937,2.05112066 53.065234,-2.31331777 42.4756895,6.50447654 C38.426551,9.87585667 36.113389,14.0039155 36.0073212,19.2826191 C35.9171635,23.7544627 36.6256081,27.9718792 40.0409914,31.0465744 C41.5219631,32.379896 42.5004386,33.1955596 43.2862243,35.0170469 C44.1095756,36.9234899 44.4852324,39.3524331 46.0280771,40.8495037 C46.8788292,41.6752915 48.1176128,42.3417322 49.2940816,41.8091079 C51.455655,40.8301355 50.7644465,37.8320326 51.4194152,36.1606486 C53.4559171,41.1294616 58.6302582,42.7141291 59.5694002,36.4097935 C60.6000257,38.2286397 63.2945899,40.610483 65.268335,38.6195243 C66.0806376,37.8003393 66.2030575,36.4705391 66.3409457,35.3929652 C66.5857855,33.4807998 66.1601884,32.7294032 67.6955199,31.4180909 C71.7349355,27.9683578 73.4691441,22.7464381 73.3250687,17.5267194"></path>
        </g>
    </g>
  </g>
`,ym=`
  <g id="Clothing/Graphic-Shirt" transform="translate(0.000000, 170.000000)">
    <defs>
        <path d="M165.624032,29.2681342 C202.760022,32.1373245 232,63.1798426 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.8348009 61.7752018,31.5722494 99.3929298,29.1967444 C99.1342224,30.2735458 99,31.3767131 99,32.5 C99,44.3741221 113.998461,54 132.5,54 C151.001539,54 166,44.3741221 166,32.5 C166,31.4015235 165.871641,30.3222877 165.624025,29.2681336 Z" id="react-path-1153">
        </path>
    </defs>
    <mask id="react-mask-1154" fill="white">
        <use xlink:href="#react-path-1153"></use>
    </mask>
    <use id="Clothes" fill="#E6E6E6" fill-rule="evenodd" xlink:href="#react-path-1153"></use>
    <g id="Color/Palette/" mask="url(#react-mask-1154)" fill-rule="evenodd" fill='var(--avataaar-shirt-color)'>
        <rect id="\u{1F58D}Color" x="0" y="0" width="264" height="110"></rect>
    </g>
      <g
        id='Clothing/Graphic/Skull-Outline'
        stroke-width="1"
        fill-rule="evenodd">
        <g transform='translate(77.000000, 58.000000)' id='Skull'>
          <g transform='translate(36.000000, 1.000000)'>
            <path
              d='M36.3353853,17.0393673 C36.1551375,18.0777567 35.8927571,19.1087846 35.3466862,20.0285256 C34.6274709,21.2401241 33.3213404,21.7355025 32.5643885,22.8466397 C31.3705799,24.5990841 32.9555173,27.1231756 31.7781352,28.6842237 C30.5119611,30.3630542 27.6359878,29.346749 26.5163205,31.5755188 C25.3358307,33.925968 27.0535122,37.0679834 25.5729054,39.4058749 C24.1038415,39.0369393 23.6514462,33.5197923 21.3841422,37.0389708 C19.9319488,39.2928559 20.9126566,40.513981 18.7354764,37.2741024 C17.9789685,36.1486754 17.1247893,35.1384326 15.6392989,35.8810671 C14.5955488,36.4024269 14.3806721,38.7178013 13.4297097,38.9672226 C11.0962556,39.5786511 11.0105713,33.3500473 10.2172146,32.1709255 C9.78124586,31.523123 9.3750224,31.1394645 8.59986813,30.8939404 C7.92815655,30.6808931 6.73124021,31.1087199 6.17495825,30.7934791 C5.13032022,30.2019696 4.98914092,28.23821 4.94962847,27.1963565 C4.8759311,25.2572791 5.52544468,23.2770647 4.98958488,21.3579064 C4.53896541,19.7461945 3.1027546,18.7545717 2.63348882,17.1753366 C0.0993647654,8.64045187 11.6836147,3.89495204 18.2986197,3.63037495 C26.0390634,3.32033043 37.3356273,7.85191686 36.3353853,17.0393673 M38.172936,11.7240091 C36.716747,8.28277481 33.5180147,5.54736808 30.2580159,3.71135026 C28.6748543,2.82018878 26.955841,2.16285976 25.1728973,1.77140691 C23.531577,1.41069869 21.6150014,1.64842836 20.0482663,1.19462018 C18.728373,0.811827785 17.9097107,-0.0477230086 16.3562944,0.00207464445 C14.238161,0.0696262433 12.0370069,1.17426809 10.1879133,2.08751375 C6.5279065,3.89538507 3.41663437,6.23630778 1.4618782,9.83126531 C-0.636277062,13.6895009 -0.437382953,17.1865952 1.81083082,20.7832848 C3.95648981,24.2167247 0.837226393,29.045365 3.97824385,32.3086268 C5.29902504,33.6808769 6.59938407,32.6801606 7.84957562,33.3409538 C8.81163708,33.8493229 8.77123671,36.8034063 9.03805671,37.6694524 C10.2385247,41.5623298 14.5524847,43.0692501 16.5436456,38.8602659 C17.4830651,41.2128802 21.1990108,43.6239527 22.9291232,40.5460247 C24.0106099,41.9455552 25.8832335,42.541395 27.3123409,41.3414881 C28.6557641,40.2130299 28.8040467,37.585879 28.8724166,35.9984164 C28.9261357,34.7604034 28.3747373,33.2339971 29.3261438,32.3402375 C30.3734455,31.3559761 32.5204364,31.7708122 33.6951548,30.5011885 C35.0359141,29.0518603 34.4849597,27.3552759 34.5879584,25.6288129 C34.6922891,23.8828639 35.0035051,24.3280116 36.2980926,23.0670485 C39.1833891,20.2567287 39.6717451,15.2600755 38.172936,11.7240091'
              id='Boo!'
              fill='#FFFFFF'
            />
            <path
              d='M14.4199416,28.1214878 C16.4409104,26.2992475 16.0109503,20.7236412 15.8441352,18.1620823 C15.5281264,13.3012213 12.4886458,14.7535905 10.6384079,17.7811955 C9.23849255,20.072024 5.8716471,23.7758196 7.38120621,26.6576793 C8.58337131,28.9535919 12.5610889,29.793746 14.4199416,28.1214878'
              id='Boo!'
              fill='#FFFFFF'
            />
            <path
              d='M27.7905585,19.2735023 C26.7563456,17.3532744 26.3690889,17.0619469 25.1393718,15.4887787 C24.3486011,14.4775769 23.2406052,12.6869687 21.7361817,13.0471169 C19.1541926,13.6660822 20.2075808,19.6585611 20.238428,21.4487472 C20.2617717,22.8065864 19.9608037,24.2138247 21.0892255,25.1768941 C22.2443259,26.1627631 24.1422588,26.073676 25.5295464,25.8676357 C29.7877025,25.2338929 29.5913646,22.6136348 27.7905585,19.2735023'
              id='Boo!'
              fill='#FFFFFF'
            />
            <path
              d='M19.2396436,31.8300192 C18.9563137,31.7944779 19.3174042,31.4678578 19.3591799,31.2433628 C19.5473771,31.8574625 19.6855263,31.8862554 19.2396436,31.8300192 M20.2848621,27.5191742 C17.6678865,24.7492021 12.711061,33.9166085 16.2049116,34.9450569 C17.0098167,35.1821488 17.604189,34.5815458 18.3598733,34.4767215 C19.4596896,34.3242088 20.3837174,34.9635023 21.3333895,33.9548492 C22.8244907,32.3712368 21.5203459,28.8566969 20.2848621,27.5191742'
              id='Boo!'
              fill='#FFFFFF'
            />
          </g>
        </g>
      </g>
  </g>
`,_m=`
  <g id="Clothing/Graphic-Shirt" transform="translate(0.000000, 170.000000)">
    <defs>
        <path d="M165.624032,29.2681342 C202.760022,32.1373245 232,63.1798426 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.8348009 61.7752018,31.5722494 99.3929298,29.1967444 C99.1342224,30.2735458 99,31.3767131 99,32.5 C99,44.3741221 113.998461,54 132.5,54 C151.001539,54 166,44.3741221 166,32.5 C166,31.4015235 165.871641,30.3222877 165.624025,29.2681336 Z" id="react-path-1153">
        </path>
    </defs>
    <mask id="react-mask-1154" fill="white">
        <use xlink:href="#react-path-1153"></use>
    </mask>
    <use id="Clothes" fill="#E6E6E6" fill-rule="evenodd" xlink:href="#react-path-1153"></use>
    <g id="Color/Palette/" mask="url(#react-mask-1154)" fill-rule="evenodd" fill='var(--avataaar-shirt-color)'>
        <rect id="\u{1F58D}Color" x="0" y="0" width="264" height="110"></rect>
    </g>
      <g
        id='Clothing/Graphic/Bat'
        fill-rule='evenodd'
        fill='#FFFFFF'>
        <g transform='translate(77.000000, 58.000000)' id='Batman!'>
          <path d='M87.6852404,13.4031978 C86.29151,6.97182978 81.4755637,3.2534243 75.1844381,1.81688169 C72.6586144,1.2402574 64.2721154,-0.570361088 65.5784818,4.22465302 C66.1709196,6.39748644 65.8414841,8.18940114 64.0250388,9.99135202 C62.2550056,11.7463153 58.793658,12.1906445 57.0732221,9.97994727 C55.5989529,8.08493361 57.5000322,5.25883596 56.3515582,3.41309083 C55.9056373,2.69596 55.1361961,2.32963935 54.323983,2.68090573 C53.1827893,3.17450341 53.7902429,4.23560158 53.2510425,4.99880761 C52.4024277,6.20178089 52.005649,5.82542406 51.2416681,4.6261003 C50.7616206,3.87247426 51.2334777,3.05133209 49.9949096,2.72926188 C48.5615922,2.35655457 48.0924652,3.5572469 47.9627841,4.65164695 C47.8813352,5.33866923 48.2849392,6.44356164 48.2990449,7.14016392 C48.3263462,8.50417231 48.2084956,10.4630526 47.5741958,11.668763 C46.449383,13.8060136 44.8695487,13.1221847 43.1909749,11.7645629 C41.2107218,10.1633357 40.6296595,8.3800886 41.0127875,5.94768301 C41.4719041,3.03125972 41.3053663,0.239376333 37.7334484,2.06368053 C32.7127425,4.62792506 28.0537786,9.19894983 25.144827,13.9830154 C22.6999971,18.0025063 20.7757117,22.8759851 22.9416134,27.4556775 C25.1521073,32.1307136 28.8036539,36.1460988 33.9080837,37.3394921 C35.2294658,37.6483328 38.9997729,39.1501106 40.2533568,37.8905698 C42.1999383,35.9335142 37.7052371,34.1082977 36.8179454,32.9158167 C35.5598113,31.2256324 34.4805006,28.0012808 35.8614905,26.0944062 C37.6206031,23.6670187 39.4602546,25.0200786 40.9063125,26.7376343 C42.0415909,28.085676 43.6550967,31.5636693 45.4119342,28.759925 C46.621381,26.8288723 46.513086,23.6583511 49.812446,25.0433443 C54.5269225,27.0213845 54.6716193,36.1552226 55.5120438,40.3343801 C55.879246,42.1637024 57.5473544,44.3981215 58.9829469,41.8594236 C59.7719539,40.4634819 59.3460539,37.437573 59.2022672,35.9960123 C58.9055932,33.0111605 58.1225014,30.0760334 59.092607,27.1190092 C59.6536484,25.4082963 61.093336,22.9594679 63.2223811,24.2751201 C64.9469121,25.3407802 64.2284333,30.0910877 66.5745236,30.0824201 C68.6412307,30.075121 68.0774592,26.2910242 69.1777009,25.0433443 C70.8571848,23.1387506 74.0937518,24.0442879 75.0870635,26.2919365 C76.4243714,29.3169331 72.88476,31.4176885 73.0435625,34.0768205 C73.1982698,36.6684365 76.5376717,35.657063 77.9345873,34.9996931 C80.8057722,33.6493704 83.0526678,31.1467116 84.6097509,28.428731 C87.0172691,24.2253954 88.7354298,18.2068795 87.6852404,13.4031978' />
        </g>
      </g>
  </g>
`,Lm=`
  <g id="Clothing/Graphic-Shirt" transform="translate(0.000000, 170.000000)">
    <defs>
        <path d="M165.624032,29.2681342 C202.760022,32.1373245 232,63.1798426 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.8348009 61.7752018,31.5722494 99.3929298,29.1967444 C99.1342224,30.2735458 99,31.3767131 99,32.5 C99,44.3741221 113.998461,54 132.5,54 C151.001539,54 166,44.3741221 166,32.5 C166,31.4015235 165.871641,30.3222877 165.624025,29.2681336 Z" id="react-path-1153">
        </path>
    </defs>
    <mask id="react-mask-1154" fill="white">
        <use xlink:href="#react-path-1153"></use>
    </mask>
    <use id="Clothes" fill="#E6E6E6" fill-rule="evenodd" xlink:href="#react-path-1153"></use>
    <g id="Color/Palette/" mask="url(#react-mask-1154)" fill-rule="evenodd" fill='var(--avataaar-shirt-color)'>
        <rect id="\u{1F58D}Color" x="0" y="0" width="264" height="110"></rect>
    </g>
      <g
        id='Clothing/Graphic/Cumbia'
        stroke-width='1'
        fill-rule='evenodd'>
        <g transform='translate(77.000000, 58.000000)' id='Group'>
          <g transform='translate(0.000000, 6.000000)'>
            <path
              d='M10.271566,24.1315073 C13.5453197,23.5731503 16.0029461,20.5783262 15.4519585,17.3443595 C14.9878717,14.6197774 13.7065483,17.0011951 12.4758861,18.1969085 C11.1405733,19.4948562 10.0263951,20.7706412 7.9400381,20.2508902 C4.33273358,19.3518711 3.08247252,14.8503409 4.09976568,11.7711556 C4.65593031,10.0878629 5.87660814,8.76060323 7.57838317,8.07498941 C9.42992328,7.32896437 10.7818767,8.16542752 12.3264908,9.1691833 C12.6145575,9.35649386 14.0556303,10.5386236 14.3204002,10.4181586 C14.7822683,10.2079704 14.435405,7.98955578 14.3651448,7.69393398 C14.0267867,6.27266155 13.0993526,5.11877135 11.7481388,4.45603516 C8.41484886,2.82099993 4.23436935,4.94468693 2.10881463,7.51091298 C-2.77648522,13.4083357 1.18803674,25.6753895 10.271566,24.1315073'
              id='Fill-1'
              fill='#FFFFFF'
            />
            <path
              d='M20.283037,5.0382162 C20.2819296,5.04100097 20.2826679,5.03926048 20.283037,5.0382162 M18.6886879,17.9031695 C19.1918363,21.3771733 21.6658646,24.4038731 25.6412168,24.2597611 C29.9192703,24.1048581 31.6970859,20.1616201 32.6494871,16.7739442 C33.6055798,13.3751292 34.7008413,9.09110464 33.3132148,5.68149867 C32.8931247,4.64939232 32.6284457,3.30051808 31.5966777,4.15126612 C30.3445285,5.18372056 30.188379,8.18953451 30.0824336,9.59271181 C29.8819863,12.2396382 29.3005786,19.5639383 25.9741881,20.5368682 C21.7954354,21.7593834 21.9264829,14.6895419 21.9733647,12.559887 C22.0147092,10.6641531 22.2203245,8.82550695 21.6322721,6.97572174 C21.3192348,5.99095653 21.0416357,4.53521664 20.1036312,5.34175641 C18.8141981,6.45044401 18.6506656,9.16977447 18.5602244,10.6690264 C18.4155185,13.0736776 18.3464879,15.5110498 18.6886879,17.9031695'
              id='Fill-5'
              fill='#FFFFFF'
            />
            <path
              d='M37.7827156,20.7457507 C37.9712859,21.1583285 38.4071734,22.1476129 38.8028084,22.4248624 C39.7471104,23.085889 38.7480505,23.1327334 39.6027816,22.3662202 C40.4161723,21.6371824 40.7331154,19.6485506 40.8571366,18.6953537 C41.2422552,15.7354812 40.7367418,12.5875371 40.7704668,9.60302793 C41.7938233,11.8206768 42.3544573,14.1868398 43.1555184,16.4766638 C43.7096249,18.0589637 44.5516638,21.2808179 46.809793,21.2301566 C49.2532288,21.1753312 49.3790632,18.0849884 49.7043469,16.4110816 C50.1652562,14.0411017 50.674396,11.6898595 51.3797214,9.37401083 C51.4718308,13.2836103 49.952752,20.3692605 53.4880823,23.2940864 C53.5018625,23.3072722 54.9204913,19.144366 54.954579,18.8882832 C55.1783249,17.1970267 55.0383477,15.4440049 55.0622816,13.7402565 C55.1130505,10.1433001 55.779574,5.73680294 54.762745,2.23422934 C54.4338349,1.10024771 53.7872564,-0.0302639607 52.3530342,0.000618647874 C50.5278914,0.0401761465 50.1202895,1.98612748 49.6550286,3.29915884 C48.3742011,6.91277103 47.2097796,10.5229133 46.2981148,14.2395832 C45.7498104,12.5594305 40.9593998,-2.18198369 37.5092887,3.33767535 C36.9540943,4.22633108 37.1937961,5.55601823 37.1709501,6.53385184 C37.1274339,8.41283302 37.0161049,10.2897322 36.9754898,12.1690604 C36.9138418,15.0116484 36.5653494,18.0756195 37.7827156,20.7457507'
              id='Fill-7'
              fill='#FFFFFF'
            />
            <path
              d='M62.0203329,7.70997634 C62.739914,7.57453437 67.7552707,5.98272311 67.5433251,7.57379827 C67.3203514,9.24915661 62.9098151,10.8829254 61.7267107,11.4497207 C61.7246429,10.2414163 61.4930536,9.00918877 61.0839813,7.88259125 C61.3958688,7.82517563 61.7081008,7.76739196 62.0203329,7.70997634 M67.7366608,7.0706755 C67.7370055,7.06957135 67.7101246,7.03497476 67.7366608,7.0706755 M67.8590034,15.4110304 C70.1314738,16.6318484 69.1461853,18.8279958 67.4326998,20.0186339 C66.7844565,20.4691256 60.9030521,21.8209691 60.9195942,21.6818466 C60.9202835,21.6855271 60.9192496,21.6869993 60.9164926,21.6866312 C61.0960433,19.9925024 60.6587116,16.6686533 61.9159109,15.6664563 C63.2203241,14.6267183 66.4163948,14.8593252 67.8590034,15.4110304 M67.9210363,7.41553727 C67.9299966,7.4383563 67.9220702,7.41811361 67.9210363,7.41553727 M57.9444294,24.2596607 C58.1677477,24.8109979 58.8039291,26.1720425 59.5100698,26.2047988 C60.3706034,26.2449162 60.3040904,25.1617484 60.4388396,24.49558 C63.8802848,26.2162084 68.9369967,24.4481017 71.346284,21.4654339 C74.1325933,18.014976 72.6941202,13.1953763 68.7674402,11.7202366 C70.879659,10.0319965 72.7933728,6.32096 70.0222271,4.23081061 C67.8262639,2.57459081 64.19424,2.48294665 61.8993688,3.92827446 C59.1637197,5.65111111 58.0495406,9.7614806 57.8096802,12.9340616 C57.553967,16.3156944 56.6513889,21.0591079 57.9444294,24.2596607'
              id='Fill-9'
              fill='#FFFFFF'
            />
            <path
              d='M76.0506048,15.8714133 C76.1237655,17.940757 75.9002189,20.1580872 76.3823293,22.1766928 C76.5533503,22.8940747 76.8153532,23.6882686 77.1423879,24.3390566 C77.7529985,25.5536025 77.4525393,25.3897603 78.1744543,24.6980999 C80.3464523,22.6164239 79.3828568,16.1236949 79.3306438,13.4500732 C79.2896863,11.3715683 79.3947376,9.17044617 78.8182061,7.16734396 C78.656252,6.60499548 77.6954704,3.81897451 77.1633356,3.88345432 C76.3469995,3.98140725 75.7873513,7.81319908 75.7401407,8.57603396 C75.592256,10.9723573 75.9658759,13.4712141 76.0506048,15.8714133'
              id='Fill-11'
              fill='#FFFFFF'
            />
            <path
              d='M94.7477626,16.430477 C93.1655372,16.2926323 91.1264105,16.5045376 89.6311966,16.9871715 C90.3280165,15.0708102 91.1056588,12.9329761 91.8694667,11.1973368 C92.343479,10.1066267 92.8411555,9.02761048 93.3628603,7.95745314 C94.6410916,10.6431228 95.3546586,13.7848497 96.19492,16.6232471 C95.7158108,16.535721 95.233425,16.4715824 94.7477626,16.430477 M100.188346,17.1547822 C99.4605809,14.375208 98.6093975,11.6225649 97.7622188,8.8759458 C97.2244951,7.13215631 96.6321618,4.96384744 95.1624324,3.70729846 C90.9986238,0.146013273 88.6354794,9.55701945 87.6142778,11.9390054 C86.6294827,14.2352371 85.3978516,16.5725741 84.764743,18.9878696 C84.4541957,20.1714211 84.3555342,21.4261983 84.5197274,22.6402245 C84.725424,24.1589974 84.5157227,24.3811791 85.8136135,23.5544648 C86.8140635,22.9176858 87.2280051,21.7617741 88.0409617,20.9917569 C88.1847673,20.8556839 88.2586724,20.3241488 88.4301469,20.2373314 C88.6194606,20.1413008 89.9348266,20.4896334 90.2461019,20.5112492 C92.4155638,20.6622052 94.958192,20.2933198 96.9605482,19.4573923 C97.1658807,20.2989895 98.5882817,25.4187356 99.9378698,25.2302178 C100.5353,25.1465897 100.903369,22.1660952 100.929946,21.6933833 C101.017322,20.1398833 100.57826,18.6444979 100.188346,17.1547822'
              id='Fill-13'
              fill='#FFFFFF'
            />
            <path
              d='M109.301672,3.43213272 C109.038492,2.22890734 108.487555,0.14016215 107.459721,1.31990649 C106.069159,2.9162614 106.369359,6.49285063 106.348516,8.49692176 C106.333584,9.94847693 104.797121,20.5594163 106.905363,20.3801066 C106.815459,20.3801066 107.750277,18.7118855 107.885912,18.4578633 C108.700028,16.9340861 109.016405,15.4885791 109.213945,13.735684 C109.578851,10.499214 109.997264,6.62484253 109.301672,3.43213272'
              id='Fill-15'
              fill='#FFFFFF'
            />
            <path
              d='M108.164017,24.3012978 C105.924782,21.573307 101.852706,24.9591601 103.122505,27.675428 C104.85153,31.3753862 110.454236,27.1147969 108.164017,24.3012978'
              id='Fill-17'
              fill='#FFFFFF'
            />
            <path
              d='M94.8984918,28.5446042 C92.0066895,27.8070876 88.6012921,28.3048186 85.6491092,28.3933947 C82.5678984,28.4853064 79.489563,28.6568994 76.4083523,28.7499229 C69.8412367,28.9481999 63.2849033,28.8418345 56.7170689,28.7877252 C44.2631983,28.6854365 31.7816533,29.4770624 19.334252,28.9556122 C16.661689,28.8440582 13.7889353,28.2429265 11.1361398,28.7473286 C10.409056,28.8859372 8.12717022,29.2902742 7.80729649,30.013337 C7.47088995,30.7730903 9.20934979,31.5680517 10.1384213,31.968312 C12.560117,33.0119536 15.4670145,32.8262773 18.0389431,32.9319015 C20.9688428,33.0527208 23.9249793,32.9900875 26.856676,32.9181889 C38.9324486,32.6213292 50.9456841,31.5750933 63.0376301,31.7529868 C70.0126746,31.8560167 76.974421,31.7911597 83.9494655,31.7544692 C87.2686047,31.7366799 90.9489497,32.2799961 94.2217253,31.6922065 C94.773777,31.5928827 97.9847343,30.8375767 98.0293009,29.8561978 C98.0497872,29.4033107 95.2233973,28.6276211 94.8984918,28.5446042'
              id='Fill-19'
              fill='#FFFFFF'
            />
          </g>
        </g>
      </g>
  </g>
`,km=`
  <g id="Clothing/Graphic-Shirt" transform="translate(0.000000, 170.000000)">
    <defs>
        <path d="M165.624032,29.2681342 C202.760022,32.1373245 232,63.1798426 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.8348009 61.7752018,31.5722494 99.3929298,29.1967444 C99.1342224,30.2735458 99,31.3767131 99,32.5 C99,44.3741221 113.998461,54 132.5,54 C151.001539,54 166,44.3741221 166,32.5 C166,31.4015235 165.871641,30.3222877 165.624025,29.2681336 Z" id="react-path-1153">
        </path>
    </defs>
    <mask id="react-mask-1154" fill="white">
        <use xlink:href="#react-path-1153"></use>
    </mask>
    <use id="Clothes" fill="#E6E6E6" fill-rule="evenodd" xlink:href="#react-path-1153"></use>
    <g id="Color/Palette/" mask="url(#react-mask-1154)" fill-rule="evenodd" fill='var(--avataaar-shirt-color)'>
        <rect id="\u{1F58D}Color" x="0" y="0" width="264" height="110"></rect>
    </g>
    <g
        id='Clothing/Graphic/Deer'
        fill-rule='evenodd'
        fill='#FFFFFF'>
        <g transform='translate(77.000000, 58.000000)' id='oh,-deer!'>
          <path d='M76.9598206,16.2351328 C77.3545748,17.6603319 74.7317873,18.9054413 73.8540158,19.6535687 C72.3474717,20.9370645 70.7886986,22.2879408 69.0287021,23.2010483 C68.2808959,23.5889965 67.4755973,23.9042554 66.6674645,24.1357992 C65.420446,24.4927115 65.5625576,24.2427912 65.0864232,25.3008688 C64.2491394,27.1617948 64.0321258,29.6352706 63.2754123,31.6133978 C61.5708838,36.0670427 57.5083567,46.4138243 51.0084754,41.8719723 C48.9403681,40.4271716 47.8107637,37.6249608 46.6471497,35.4361165 C45.312678,32.9242543 44.0348889,29.927661 43.2668389,27.1858884 C42.8923285,25.8501217 43.1299908,25.3952014 42.1376394,24.7708091 C41.514535,24.3787772 40.4582132,24.2775023 39.7537287,23.9908291 C38.2544724,23.3807295 36.9414591,22.5546042 35.6656945,21.5602318 C34.4279881,20.5948534 29.5561137,16.6096049 33.5340216,15.8696448 C35.3592032,15.5298839 37.7512114,15.6560692 39.6006855,15.7495851 C41.6283052,15.8520851 43.6741443,16.3196647 45.4774626,17.2854514 C47.3184343,18.2720648 46.7783296,17.9862083 48.6865108,17.4345052 C45.3653119,16.3090472 42.0384447,14.4370952 39.8031236,11.6536693 C38.5961879,10.1508806 35.8037572,4.00047299 37.9022302,2.58875006 C40.4225841,0.893212425 40.6331197,7.93508406 41.3416529,9.15569148 C42.9344356,11.8995059 45.8495437,12.9351233 48.3844732,14.454655 C46.6435058,12.7868862 45.3446632,10.9496454 44.7106272,8.58683697 C44.4357163,7.56224546 43.6846711,5.0981621 44.1919809,4.10133952 C44.7207491,3.06123008 45.9641237,2.99507471 46.6499838,3.88041325 C47.2678248,4.67754462 47.1123524,6.5115185 47.3241026,7.47240483 C47.6739156,9.06095045 48.2451958,10.282783 49.3059712,11.5127828 C50.8113007,13.2585495 52.7227209,14.6866071 54.9750468,15.2395353 C60.1015883,16.4977125 61.8947847,11.1317769 62.5826693,6.99461605 C62.7510977,5.98186717 62.5033135,4.30184746 63.6329179,3.81589134 C65.0001846,3.22743524 65.5293577,4.56156854 65.5690356,5.59718594 C65.6564888,7.91058207 64.5127138,11.4535697 63.4029483,13.4419061 C66.1929497,11.7100238 68.4064075,8.96375923 69.3015886,5.75399867 C69.6327773,4.56646894 69.3639395,1.9182123 70.4757294,1.25134983 C72.0154733,0.327216479 72.5049686,2.16772422 72.45112,3.27317229 C72.1324825,9.78825116 67.1525061,15.7132405 60.9627599,17.341806 C62.4810453,18.1005509 62.2814414,18.2716565 63.8114683,17.3650829 C64.6961227,16.840332 65.656084,16.4352324 66.6375037,16.1342663 C68.1076089,15.6834297 69.6931038,15.453111 71.2182722,15.3183501 C72.4377591,15.2105413 76.4921887,14.5012087 76.9598206,16.2351328 Z M58.8595294,24.6214062 C59.7193936,22.4825816 56.3639386,22.4048657 56.0375022,24.7163015 C55.622102,27.6609177 58.7932497,27.8924294 58.8595294,24.6214062 Z M56.9297708,33.6367531 C57.5886752,31.4414328 53.4036129,31.5246305 53.0344702,33.4664333 C52.5980925,35.7582944 56.4400387,35.1974948 56.9297708,33.6367531 Z M51.7024587,27 C54.0260737,27 54.9736078,23.9354052 52.6986912,23.1385385 C49.8083182,22.1255453 48.8835101,27 51.7024587,27 Z' />
        </g>
      </g>
  </g>
`,vm=`
  <g id="Clothing/Graphic-Shirt" transform="translate(0.000000, 170.000000)">
    <defs>
        <path d="M165.624032,29.2681342 C202.760022,32.1373245 232,63.1798426 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.8348009 61.7752018,31.5722494 99.3929298,29.1967444 C99.1342224,30.2735458 99,31.3767131 99,32.5 C99,44.3741221 113.998461,54 132.5,54 C151.001539,54 166,44.3741221 166,32.5 C166,31.4015235 165.871641,30.3222877 165.624025,29.2681336 Z" id="react-path-1153">
        </path>
    </defs>
    <mask id="react-mask-1154" fill="white">
        <use xlink:href="#react-path-1153"></use>
    </mask>
    <use id="Clothes" fill="#E6E6E6" fill-rule="evenodd" xlink:href="#react-path-1153"></use>
    <g id="Color/Palette/" mask="url(#react-mask-1154)" fill-rule="evenodd" fill='var(--avataaar-shirt-color)'>
        <rect id="\u{1F58D}Color" x="0" y="0" width="264" height="110"></rect>
    </g>
    <g
        id='Clothing/Graphic/Diamond'
        stroke-width='1'
        fill-rule='evenodd'>
        <g transform='translate(77.000000, 58.000000)' id='Diamond'>
          <g transform='translate(29.000000, 2.000000)'>
            <path
              d='M34.7804613,27.7365051 C32.3910217,30.3933795 29.9226048,32.9801662 27.4446301,35.5565142 C28.4300853,32.0044048 29.1846452,27.9785814 30.6489944,24.5994547 C31.0655115,23.6371144 30.7485963,23.5153306 31.576097,23.1057395 C32.1847753,22.8045111 33.6536519,23.1494823 34.3825567,23.1678741 C35.9404713,23.2066461 37.5335988,23.3597457 39.0789374,23.1186635 C37.6281703,24.6436945 36.1869609,26.1712109 34.7804613,27.7365051 M19.5162179,31.798118 C16.8174087,28.5164183 14.1321816,25.2302449 10.8578947,22.4814113 C12.146683,22.6176103 13.5536857,22.4376686 14.8163159,22.687201 C16.7595591,23.0714412 16.6534177,23.6778747 17.6358547,25.6458009 C19.0866218,28.5522078 20.5248129,31.434755 21.6858291,34.4689106 C20.9750337,33.5692019 20.2446197,32.6844056 19.5162179,31.798118 M10.4182378,19.266817 C11.3810563,17.6920783 11.5616476,16.294796 13.3373785,15.4865494 C15.3988361,14.5480688 18.6379102,14.7454082 20.8256308,14.5709343 C19.4553501,16.093977 17.7887788,17.6736865 17.2223558,19.6928116 C16.3480725,17.9749149 15.2599971,16.5189775 13.5521766,15.5223389 C13.3368755,15.4159645 14.7101745,20.0725781 14.8897597,20.3926954 C13.1743936,20.2967597 11.3684803,19.9850926 9.66518708,20.3012334 C9.916204,19.9562622 10.1672209,19.611291 10.4182378,19.266817 M26.8243819,14.2592673 C28.4154971,14.2945597 29.9940364,14.4183318 31.563521,14.6783029 C30.2968665,16.353451 29.9150592,18.3104416 29.4653415,20.3086895 C28.9869505,18.0509676 27.2564932,15.9473394 25.7312761,14.2607585 C26.095477,14.2602615 26.4596779,14.2597644 26.8243819,14.2592673 M23.3257392,15.3334498 C23.5601558,15.1748824 27.7826729,20.4190405 28.3923573,20.889275 C25.0798394,20.8813217 21.7743641,20.7192748 18.4658705,20.5736313 C20.3728949,19.0868752 21.4886374,16.8863171 23.3257392,15.3334498 M26.0124754,32.4289082 C25.6105465,33.7779741 25.2352788,35.1369815 24.797634,36.4756088 C23.2432407,31.7444337 20.9357965,27.288142 18.7898282,22.8020257 C22.1295103,22.8900083 25.465671,23.0107979 28.8058561,23.0575231 C27.9864041,26.2164449 26.9441054,29.3032906 26.0124754,32.4289082 M33.2416622,14.9656131 C34.5188805,16.093977 36.338879,18.4063774 36.9284418,19.1833081 C36.9867944,19.260355 37.0461531,19.3369048 37.1070209,19.4124604 C37.3177947,19.6744198 38.0733606,20.6680759 38.3701542,21.0567898 C36.1426934,20.8306199 33.8251885,20.9270528 31.5901821,20.9066727 C32.0881916,18.8527521 32.6938517,16.8952645 32.1737084,14.7787123 C32.5308668,14.8363732 32.886516,14.8985078 33.2416622,14.9656131 M40.8898811,20.5830758 C38.7323429,17.9068154 36.5199733,13.3247633 33.025858,12.5055811 C29.5538765,11.6918667 25.478247,12.0517501 21.9519372,12.2754346 C18.8773572,12.4702886 13.8690917,12.0721303 11.1572035,13.8690622 C9.76378291,14.7921334 8.73154499,16.8738902 8.2491297,18.4202955 C7.81450321,19.8131041 8.51523782,20.7048596 7.00259677,20.7048596 C6.90651615,20.7048596 9.50672951,24.3777585 9.81308082,24.66656 C12.0853121,26.8064748 14.2574385,28.8688456 16.2701013,31.2642577 C19.1047312,34.6379166 21.6747622,39.6022206 25.414864,41 C24.7292206,40.6609938 28.2067356,38.0334469 28.6242587,37.5811072 C30.7355173,35.2930636 32.8709217,33.0268914 34.9967685,30.7517718 C36.9349813,28.6779682 39.0472459,26.7209776 40.9271061,24.6004489 C42.361776,22.9824645 42.3658003,22.4262358 40.8898811,20.5830758'
              id='Fill-21'
              fill='#FFFFFF'
            />
            <path
              d='M6.99858316,11.9999257 C7.04159508,12.0142408 6.09038895,9.95483812 6.17394084,10.0812061 C5.69932656,9.36248835 5.12830624,8.8402333 4.43566602,8.35351923 C3.70792411,7.84261755 0.1270582,7.25421678 0,7 C1.49355183,9.65224611 4.16721231,11.1276907 6.99858316,11.9999257'
              id='Fill-23'
              fill='#FFFFFF'
            />
            <path
              d='M22.3553325,7.19614224 C22.5279973,7.84840006 22.7925782,8.44932951 23.1490753,8.99893058 C23.2186566,9.07737584 24.0076748,4.81518326 23.9999436,4.45201075 C23.9866286,3.8317121 23.6120919,0 22.814054,0 C21.4769753,0 22.1397162,6.46931298 22.3553325,7.19614224'
              id='Fill-25'
              fill='#FFFFFF'
            />
            <path
              d='M48.969198,5 C45.977552,5 39.2896081,10.8535875 40.0615528,13.9997703 C40.0673207,14.0103781 40.50905,13.6497123 40.4129174,13.7172166 C40.4321439,13.7032335 40.4508897,13.6887683 40.4691549,13.6738209 C41.7405084,12.649202 43.1873037,11.6544779 44.4605798,10.4683308 C45.3723974,9.61874094 46.4476403,8.85642448 47.2772645,7.92727594 C47.3618612,7.83276992 49.2628831,5 48.969198,5'
              id='Fill-27'
              fill='#FFFFFF'
            />
          </g>
        </g>
      </g>
  </g>
`,Mm=`
  <g id="Clothing/Graphic-Shirt" transform="translate(0.000000, 170.000000)">
    <defs>
        <path d="M165.624032,29.2681342 C202.760022,32.1373245 232,63.1798426 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.8348009 61.7752018,31.5722494 99.3929298,29.1967444 C99.1342224,30.2735458 99,31.3767131 99,32.5 C99,44.3741221 113.998461,54 132.5,54 C151.001539,54 166,44.3741221 166,32.5 C166,31.4015235 165.871641,30.3222877 165.624025,29.2681336 Z" id="react-path-1153">
        </path>
    </defs>
    <mask id="react-mask-1154" fill="white">
        <use xlink:href="#react-path-1153"></use>
    </mask>
    <use id="Clothes" fill="#E6E6E6" fill-rule="evenodd" xlink:href="#react-path-1153"></use>
    <g id="Color/Palette/" mask="url(#react-mask-1154)" fill-rule="evenodd" fill='var(--avataaar-shirt-color)'>
        <rect id="\u{1F58D}Color" x="0" y="0" width="264" height="110"></rect>
    </g>
    <g
        id='Clothing/Graphic/Hola'
        fill-rule='evenodd'
        fill='#FFFFFF'>
        <g transform='translate(77.000000, 58.000000)' id='Hola'>
          <path d='M74.6371722,16.9479681 C75.917206,22.7098952 73.7328313,28.1917851 69.3072818,31.9519351 C67.2267705,33.7200766 64.8728066,35.0262382 62.2514759,35.7865716 C60.7921156,36.2102906 59.2674351,36.5090512 57.7541146,36.6572104 C56.61811,36.7683298 54.9700918,36.2570992 53.9631048,36.5456839 C52.8441403,36.8672382 51.4050658,38.4111058 50.2065809,38.9084974 C49.535121,39.1873134 48.8385068,39.4319389 48.1390525,39.6350472 C46.6326292,40.0734193 45.0742742,40.3689236 43.5256565,40.611514 C41.9242956,40.8622449 35.2433712,41.9140123 36.070626,38.9752504 C36.3550329,37.9641861 39.1816559,36.4707903 39.7950984,35.791049 C40.2486888,35.288773 42.9398027,32.427347 42.8140307,31.4960606 C42.7742705,31.2021844 41.0666121,29.8650885 40.6657648,29.4157265 C39.7573668,28.3973356 38.9041462,27.3581862 38.4205328,26.0646425 C37.5920608,23.8487672 37.6354724,21.0667121 37.9105478,18.7446017 C38.5986421,12.9407505 41.476791,9.08616941 46.5133487,6.19584415 C49.3679661,4.55795247 52.4720988,3.65678642 55.718232,3.26074551 C59.6739625,2.77841409 62.8279982,2.76294692 66.1848919,5.01097768 C70.6051671,7.97090519 73.4601902,11.6785482 74.6371722,16.9479681 Z M69.5056769,23.9358717 C70.5917785,23.6358901 69.1977385,20.8827342 68.427284,22.2161669 C68.1497742,22.6968702 68.8902058,24.1047895 69.5056769,23.9358717 Z M67.6848238,18.6143519 C67.7728641,18.973353 68.1185341,19.0836583 68.4325583,19.0405131 C69.182727,18.9371273 68.7125023,18.059976 68.7340052,17.6684125 C68.7741711,16.9194759 68.8407085,15.0292252 68.5619816,14.3474487 C68.0491567,13.0942011 67.5866405,13.3339422 67.2884393,14.5615469 C67.0210725,15.6617509 67.4109655,17.5092635 67.6848238,18.6143519 Z M66.6372652,22.892652 C67.4795315,22.3952604 65.2570196,16.7171816 64.7685376,15.9051553 C62.8770898,12.7604359 62.2652702,18.3363499 61.9751833,19.714149 C61.8498171,20.310856 60.4574,26.4960951 62.3135504,24.5020515 C63.3047144,23.4376661 61.755691,19.900162 64.5567538,20.7227711 C65.540615,21.0117629 64.8289892,20.9287287 65.4314774,21.8315228 C65.6517812,22.1616248 65.8887193,23.3326522 66.6372652,22.892652 Z M60.2947079,21.5987013 C61.0809854,20.2481733 57.6303713,20.8778498 57.2327696,20.9022717 C57.3268957,19.1027888 57.6782457,17.2792911 57.6733771,15.4798082 C57.67216,15.0052104 57.8380978,13.2887618 56.7146704,14.0987529 C56.2606742,14.4264127 56.4168749,15.9283561 56.3787376,16.3789391 C56.2886686,17.436405 55.4313908,21.0858425 56.2708171,21.9381649 C56.8660024,22.5421985 59.9640494,22.1587756 60.2947079,21.5987013 Z M55.4961584,19.1587406 C55.8337431,17.8148148 55.4118876,14.9057989 53.6512301,14.8794474 C53.0382604,14.8705068 53.3156518,15.7104604 53.164165,15.7984555 C52.0992431,16.4200683 51.6357538,16.3414844 51.0047261,17.4454234 C48.5177346,21.7957715 54.0705776,24.8897184 55.4961584,19.1587406 Z M49.4685836,22.9899323 C50.2301124,22.7799045 50.0146773,13.0115738 49.1375194,13.0062824 C47.6286618,12.9977348 49.0750392,17.8462849 48.5033854,18.49672 C48.3321733,18.6916877 47.4769241,18.5109661 47.2529689,18.5520762 C46.1129071,18.7637322 45.3623326,18.6444722 45.0126054,17.9464145 C44.7014213,17.3265067 45.3736926,13.0661159 43.7552917,15.1562188 C43.7698975,15.8937585 43.7816632,16.6317052 43.7901833,17.3692449 C44.1261161,18.0843979 44.0007498,18.5195137 43.4136789,18.6754065 C43.3844673,19.14512 43.8056005,19.5387187 43.8108748,19.6921693 C43.8360292,20.4630855 43.3268557,23.9232538 44.7111585,23.7563712 C45.5960249,23.6493221 45.0316741,20.2746303 45.0280226,19.7255458 C46.1705187,19.7532239 47.3673807,19.8806245 48.5033854,19.7336864 C48.5086597,20.1610687 48.2149214,23.3367225 49.4685836,22.9899323 Z M63.8368644,17 C64.2706568,17.6069046 64.6557203,18.2184508 65,18.8421816 C64.3342161,18.8990426 63.6679025,18.9518422 63,19 C63.2722458,18.332463 63.5439619,17.664926 63.8368644,17 Z M53.9230169,17 C54.0684325,17.4229772 54.1789882,20.2877939 52.5679624,19.9763934 C51.6476608,19.7985469 52.0614978,18.2121289 52.3219511,17.8848372 C52.8722396,17.1947521 53.1949428,17.4368397 53.9230169,17 Z' />
        </g>
      </g>
  </g>
`,xm=`
  <g id="Clothing/Graphic-Shirt" transform="translate(0.000000, 170.000000)">
    <defs>
        <path d="M165.624032,29.2681342 C202.760022,32.1373245 232,63.1798426 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.8348009 61.7752018,31.5722494 99.3929298,29.1967444 C99.1342224,30.2735458 99,31.3767131 99,32.5 C99,44.3741221 113.998461,54 132.5,54 C151.001539,54 166,44.3741221 166,32.5 C166,31.4015235 165.871641,30.3222877 165.624025,29.2681336 Z" id="react-path-1153">
        </path>
    </defs>
    <mask id="react-mask-1154" fill="white">
        <use xlink:href="#react-path-1153"></use>
    </mask>
    <use id="Clothes" fill="#E6E6E6" fill-rule="evenodd" xlink:href="#react-path-1153"></use>
    <g id="Color/Palette/" mask="url(#react-mask-1154)" fill-rule="evenodd" fill='var(--avataaar-shirt-color)'>
        <rect id="\u{1F58D}Color" x="0" y="0" width="264" height="110"></rect>
    </g>
      <g
        id='Clothing/Graphic/Selena'
        stroke-width='1'
        fill-rule='evenodd'>
        <g transform='translate(77.000000, 58.000000)' id='Selena'>
          <g transform='translate(17.000000, 0.000000)'>
            <path
              d='M65.3033729,7.56759412 C65.1470447,8.49857487 63.3805357,12.656817 62.0741755,10.5184706 C61.5650892,9.68550605 62.4755312,7.05707864 62.7589611,6.30931546 C63.3169849,4.836648 63.7329539,4.67144048 65.0219821,3.97805378 C65.1307322,5.16706304 65.4331933,6.37685313 65.3033729,7.56759412 M62.3188632,10.8866375 C62.3487694,10.8987596 62.4772304,11.018942 62.3188632,10.8866375 M62.3110467,10.8804032 C62.3052694,10.8755544 62.3107069,10.8800569 62.3110467,10.8804032 M55.0298897,6.20471867 C55.040085,6.21337734 55.0829054,6.246973 55.0298897,6.20471867 M42.5545574,11.1605979 C42.3475925,12.3804321 42.0797954,13.5995735 41.6509123,14.760875 C41.48167,13.0294864 41.7542249,11.3046783 42.651413,9.81019097 C42.6412176,10.2618275 42.6089325,10.7120786 42.5545574,11.1605979 M42.544702,8.65858718 C42.5406238,8.64334792 42.3859948,8.41891506 42.544702,8.65858718 M25.9083201,18.8030909 C26.0609101,17.2701591 26.6763675,15.7860622 27.8141651,14.7591433 C27.5371923,16.3838571 26.7416175,17.4294787 25.9083201,18.8030909 M75.8371766,5.29694317 C75.8371766,5.93422166 73.7787416,7.63166832 73.2635382,8.10027581 C72.3850415,8.898952 71.4487714,9.53969396 70.1865909,9.35370562 C66.7252801,8.84422918 68.0968903,5.14766761 67.5456634,2.87251415 C67.1120225,1.08501726 66.6671667,1.75900853 65.4641191,1.64644576 C64.3456926,1.54219531 63.9460361,0.990464532 62.7824103,1.83312679 C60.685573,3.35151205 59.0159196,5.32915344 58.1231495,7.8135005 C57.7992782,6.11813191 56.8776214,3.30960407 54.6706746,3.71967892 C53.0387439,4.02273255 51.6868446,6.64596475 51.0078363,7.96277605 C50.95618,6.76545446 50.3403828,4.88721467 48.8328349,5.74476985 C47.7973303,6.3339061 47.8418499,9.12615564 47.615174,10.1548062 C47.1499276,12.2664839 46.236427,17.7723622 42.9708663,17.056463 C43.999574,15.1377006 46.2510403,9.08632573 44.3207265,7.1194211 C41.6091115,4.35730375 39.5459188,11.2748924 39.4354695,12.9584852 C39.355946,14.1644655 40.2405598,16.9030312 39.7637588,17.6511408 C39.1788873,18.568614 37.3362533,18.9641423 36.4608152,18.2922291 C35.0562401,17.2143972 35.6101858,15.4622277 35.9313383,14.093118 C36.3527448,12.2990405 36.5512137,10.495958 36.6650614,8.65616275 C36.7503623,7.27631629 37.951031,1.10787617 35.6370334,1.02406019 C33.5415555,0.948902892 33.3281335,6.16211798 33.1786022,7.58664321 C32.9944067,9.33812 32.8825981,11.1121094 32.94377,12.8746693 C33.0056216,14.6573173 33.3376491,15.8449412 32.6467463,17.5181435 C31.9065662,19.3108356 28.3834038,24.6889119 26.2743321,21.1180743 C28.5142437,20.1354878 31.1850774,15.5997275 29.9833892,13.0506135 C28.317474,9.51683506 24.5679755,14.9018383 24.024565,16.7073452 C23.1474277,19.6222016 23.5328108,23.4292478 26.8877504,24.3782386 C30.3810066,25.366713 33.0780083,22.0916557 34.309263,19.1975801 C35.3107832,20.7859275 37.1544368,21.1842266 38.8580746,20.7031506 C39.5350438,20.5116207 40.1861848,20.1822447 40.7496461,19.7555452 C41.8198148,18.9457859 41.1934823,19.2471078 42.3292409,19.2142048 C45.6264071,19.1196521 47.4252012,18.0612156 48.660534,14.6690931 C48.6459207,15.6031909 49.0041163,17.0287552 50.2588202,16.5178934 C51.2334927,16.1209797 51.2266958,14.5083881 51.4074928,13.6480621 C51.9774112,10.935126 52.8729,8.10651006 55.0057608,6.22584583 C56.8466956,8.22807786 55.4856205,11.6534497 56.6968244,13.7862546 C58.5635873,17.0737803 59.5035957,11.2537653 59.7962014,10.1319473 C59.8526155,15.0140547 65.6574903,13.2158211 66.9135536,9.97505214 C70.2130987,13.4901279 77.1479547,10.3238236 75.8371766,5.29694317'
              id='Bom-Bom'
              fill='#FFFFFF'
            />
            <path
              d='M69.433817,15.3488372 C65.8038135,15.3488372 61.8287631,16.3747039 58.3068219,17.1662556 C54.7602589,17.9637144 51.2314783,18.9518414 47.8046046,20.1368717 C43.9335128,21.4748303 39.9926593,22.6897243 36.2145831,24.2580599 C32.9385178,25.6183343 28.7066484,26.6107275 26.7027087,29.6738881 C26.6986051,29.6824206 28.8051356,29.5856097 28.9754363,29.5573869 C30.0242559,29.3834556 30.9267127,29.0139335 31.8924339,28.6010927 C33.6392127,27.8548288 35.3740227,27.0823111 37.115672,26.3248894 C41.0202768,24.6265975 45.0951823,23.2295678 49.1044296,21.7708418 C53.1003402,20.3176946 57.1991835,19.0860638 61.3588973,18.1455219 C64.7498643,17.3792395 68.5409353,17.2322183 71.6624305,15.8729284 C71.5444511,15.9172317 71.6210523,15.887368 71.8918919,15.7816965 C71.813239,15.8197645 69.6708017,15.3488372 69.433817,15.3488372'
              id='Bidi'
              fill='#FFFFFF'
            />
            <path
              d='M22.1170349,20.8250383 C19.8478706,19.8267659 16.6395075,20.267131 14.2823358,20.5862701 C12.1385566,20.8762747 8.78577979,21.5209156 7.44867865,21.6937129 C6.34297926,21.8346967 3.04321074,22.7348497 2.4393915,21.4968044 C1.79003946,20.1656628 5.15878677,16.0935417 5.89512684,15.1341152 C9.20984643,10.8135143 13.1946457,6.01370248 17.9749097,3.21110531 C17.5345328,5.16177188 17.1498826,7.12884748 16.7479027,9.08721625 C16.5824216,9.89460802 15.79851,14.2513757 17.2338124,14.5946261 C17.8233602,14.735275 19.0058537,11.8121216 19.104055,11.5505816 C19.9270433,9.36181652 20.1163103,6.84118695 20.4951839,4.54927932 C20.7119744,3.23789558 21.6953468,0.499260193 19.8009787,0.0471743805 C18.1723317,-0.341619419 15.9646707,1.77447706 14.8776601,2.66558843 C11.5962407,5.35767573 8.75146029,8.61302846 6.0905101,11.8864646 C4.78025293,13.4985691 3.4761121,15.1200503 2.37686886,16.8831849 C1.47300888,18.3332083 -0.712565331,21.3735691 0.232070287,23.1651685 C1.92969602,26.3860287 10.0715716,23.5626691 12.663543,23.133355 C14.708781,22.7941232 16.8162019,22.4729748 18.8913421,22.7566168 C21.0534703,23.0519796 20.9484731,24.0274803 20.2298024,25.953031 C18.7520254,29.9126329 15.4539558,33.3136578 12.5058772,36.2726431 C11.2071731,37.5759898 6.1251694,43.6918736 4.84549395,40.3641872 C3.97595347,38.1030884 4.74525384,35.3289559 5.74561617,33.2503658 C6.21419621,32.2765394 6.8346655,31.3887768 7.32329357,30.4256666 C7.45649398,30.163122 8.12453486,28.0011471 8.27030776,27.9529247 C4.4003599,29.303824 2.15328244,34.538308 1.93751135,38.2397187 C1.83591206,39.9810863 2.07376995,42.5640033 3.73741598,43.6084889 C5.40174162,44.6533095 6.96378836,43.3814414 8.28661802,42.4230195 C11.9289019,39.7838429 15.1780407,36.4246779 18.1519439,33.0879497 C19.7778725,31.2635323 26.6054133,22.8014905 22.1170349,20.8250383'
              id='Bidi'
              fill='#FFFFFF'
            />
          </g>
        </g>
      </g>
  </g>
`,Sm=`
  <g id="Clothing/Graphic-Shirt" transform="translate(0.000000, 170.000000)">
    <defs>
        <path d="M165.624032,29.2681342 C202.760022,32.1373245 232,63.1798426 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.8348009 61.7752018,31.5722494 99.3929298,29.1967444 C99.1342224,30.2735458 99,31.3767131 99,32.5 C99,44.3741221 113.998461,54 132.5,54 C151.001539,54 166,44.3741221 166,32.5 C166,31.4015235 165.871641,30.3222877 165.624025,29.2681336 Z" id="react-path-1153">
        </path>
    </defs>
    <mask id="react-mask-1154" fill="white">
        <use xlink:href="#react-path-1153"></use>
    </mask>
    <use id="Clothes" fill="#E6E6E6" fill-rule="evenodd" xlink:href="#react-path-1153"></use>
    <g id="Color/Palette/" mask="url(#react-mask-1154)" fill-rule="evenodd" fill='var(--avataaar-shirt-color)'>
        <rect id="\u{1F58D}Color" x="0" y="0" width="264" height="110"></rect>
    </g>
    <g
        id='Clothing/Graphic/Pizza'
        stroke-width='1'
        fill-rule='evenodd'>
        <g transform='translate(77.000000, 58.000000)' id='Group-2'>
          <g transform='translate(35.000000, 1.000000)'>
            <path
              d='M30.9332298,24.3911229 C26.8510636,25.7713262 22.3826909,27.7147062 20.0279438,31.464875 C18.1805823,34.4072634 18.056518,31.0097105 15.4771364,32.0578917 C12.9702973,33.0766532 13.6557418,37.2811459 12.7452506,39.3594362 C12.0367243,38.1679392 11.7020395,36.8427927 10.8096839,35.755105 C11.5033719,35.309607 12.1459503,34.7115469 12.6240715,34.0306915 C12.7802853,33.7116981 7.83173048,34.3791045 7.54774295,34.4602188 C6.13687312,34.8620076 4.80843799,35.231855 3.46021853,35.8900153 C3.8167486,35.3734898 4.16627171,34.8531817 4.51043656,34.3282505 C4.82039102,33.8562748 5.1253994,33.3800962 5.42463735,32.9009757 C5.63196061,32.2209608 6.00126805,32.2188594 6.53255966,32.8950918 C7.28147888,32.931236 7.71055147,33.2519105 8.49450544,33.0724504 C11.4098085,32.4054642 12.3380232,26.8489271 8.74469474,27.0851251 C10.3237313,24.2158656 11.7251212,21.3024766 12.9975007,18.2831768 C13.4999402,22.5742474 19.0774717,21.0961186 20.7166857,18.8076877 C22.8571026,15.8190684 20.1132637,10.1456931 16.2334747,10.6962614 C16.8142272,9.32068116 17.4036352,7.93375334 17.8825808,6.5182464 C18.9752527,8.1287638 20.8844403,8.90880562 22.421023,9.97463863 C24.031797,11.0917459 25.3940304,12.414791 26.5839752,13.9807586 C28.9704596,17.1210994 30.3767956,20.9881063 32.7987269,24.0334636 C32.1610946,24.0675064 31.539537,24.1868662 30.9332298,24.3911229 M39.9388082,20.0029673 C39.306534,14.2455357 34.7895249,8.40194655 30.4996233,4.82661475 C27.9499181,2.7020935 20.2587609,-2.55814545 17.1930146,1.48706068 C19.664819,2.55835735 22.3921709,2.81640998 24.8425422,3.97596569 C28.1630118,5.5482375 30.7646508,8.13506801 33.0114085,11.0312255 C36.1484608,15.075591 40.9816071,23.3139423 33.485408,25.4170292 C34.0030979,25.0791231 34.3035723,24.7080149 34.7132728,24.1086939 C33.706333,23.8762784 34.1131482,22.231298 33.7590912,21.1570594 C33.3473298,19.9063026 32.549362,18.6904293 31.874634,17.5745828 C30.8042195,15.803518 29.6278764,14.0408588 28.3707472,12.4038637 C26.692789,10.2179814 24.685092,8.49735037 22.3938196,7.00829423 C21.4874501,6.41948033 20.6190006,5.89749114 19.5774382,5.59320758 C18.2279822,5.19898385 18.6698322,5.67936522 18.3005247,4.44668058 C18.0692954,3.67420382 18.277443,2.68402141 18.0548693,1.85480669 C16.0817949,3.51323614 15.4400408,5.90967929 14.5555165,8.23635577 C13.5353871,10.9202712 12.4328231,13.5714048 11.3591111,16.2330453 C8.72367389,22.767997 5.32530354,28.6283975 1.46777192,34.479972 C0.796341323,35.4991538 -0.697375374,37.4299255 0.377573066,38.6537842 C1.33876162,39.7486166 2.7084141,38.9597489 3.76399039,38.5150914 C5.20041497,37.9107271 7.14917119,36.3506434 8.69894348,37.1680903 C10.6971605,38.2221554 9.75287108,42.1522045 12.9130052,41.9954397 C16.0265636,41.8407762 15.4404529,36.7154475 16.4395615,34.6775042 C18.7514425,36.3628316 20.615291,35.3171721 22.0187417,33.0665665 C23.6451783,30.4578814 25.7942508,29.4101204 28.5323192,28.1291035 C29.6521946,27.6050129 31.5663282,26.1899262 32.7327792,26.0138284 C33.6980895,25.8688314 34.6254798,26.8972594 35.915995,26.8506082 C39.0138909,26.7375526 40.3077034,22.5977832 39.9388082,20.0029673'
              id='Fill-29'
              fill='#FFFFFF'
            />
            <path
              d='M18.5372079,22.8336349 C16.1119296,22.3885123 12.7302873,22.7596628 12.5083803,25.9869094 C12.3721811,27.9648021 13.9174686,29.8351772 15.5900451,30.6510203 C20.7121513,33.1501581 24.6988403,23.9625691 18.5372079,22.8336349'
              id='Fill-31'
              fill='#FFFFFF'
            />
            <path
              d='M28.3362306,19.157604 C27.6856351,18.4518413 26.6326311,17.918164 25.6605301,18.1654572 C25.9719227,17.9508815 26.2293799,17.5642204 26.5251817,17.3262751 C23.3686979,15.0403008 21.3853086,20.8049502 23.1786599,23.0743534 C25.8964974,26.5139375 31.2158743,22.3078297 28.3362306,19.157604'
              id='Fill-33'
              fill='#FFFFFF'
            />
          </g>
        </g>
      </g>
  </g>
`,wm=`
  <g id="Clothing/Graphic-Shirt" transform="translate(0.000000, 170.000000)">
    <defs>
        <path d="M165.624032,29.2681342 C202.760022,32.1373245 232,63.1798426 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.8348009 61.7752018,31.5722494 99.3929298,29.1967444 C99.1342224,30.2735458 99,31.3767131 99,32.5 C99,44.3741221 113.998461,54 132.5,54 C151.001539,54 166,44.3741221 166,32.5 C166,31.4015235 165.871641,30.3222877 165.624025,29.2681336 Z" id="react-path-1153">
        </path>
    </defs>
    <mask id="react-mask-1154" fill="white">
        <use xlink:href="#react-path-1153"></use>
    </mask>
    <use id="Clothes" fill="#E6E6E6" fill-rule="evenodd" xlink:href="#react-path-1153"></use>
    <g id="Color/Palette/" mask="url(#react-mask-1154)" fill-rule="evenodd" fill='var(--avataaar-shirt-color)'>
        <rect id="\u{1F58D}Color" x="0" y="0" width="264" height="110"></rect>
    </g>
    <g
        id='Clothing/Graphic/Resist'
        stroke-width='1'
        fill-rule='evenodd'>
        <g transform='translate(77.000000, 58.000000)' id='Resist'>
          <g transform='translate(3.000000, 9.000000)'>
            <path
              d='M102.565245,21.0710109 C99.4833509,20.4054313 97.3728781,24.6059197 100.65303,25.85541 C103.46796,26.9271503 105.497722,21.7103865 102.565245,21.0710109'
              id='!'
              fill='#FFFFFF'
            />
            <path
              d='M101.191001,18 C104.847558,18 103.499462,12.0185653 103.512139,10.034892 C103.52569,7.89835492 105.057378,1.43936922 102.622588,0.300988793 C98.4060734,-1.67043963 99.5622709,6.62567562 99.5876242,8.26886181 C99.6156003,10.0850565 99.7546063,11.9885455 99.3594446,13.7770905 C99.009744,15.3574722 98.2303489,18 101.191001,18'
              id='H'
              fill='#FFFFFF'
            />
            <path
              d='M96.057932,1.97392328 C94.9756601,1.35173361 93.2567577,1.65427333 92.0711316,1.60022061 C90.7220251,1.53916824 89.3807782,1.40539746 88.0356015,1.30662485 C85.8592683,1.14718875 83.080101,0.743543202 80.9175222,1.23857286 C79.6922049,1.51933595 78.5800664,2.46389764 79.1565707,3.84671419 C79.777482,5.33646958 81.4602301,4.95187859 82.7370279,4.87682696 C83.3217848,4.84221766 84.7703158,4.58750876 85.3421043,4.78816493 C86.3390991,5.13853549 85.9154647,4.67967061 86.1430012,5.85522022 C86.491969,7.66229234 86.2825097,9.85512207 86.2675764,11.6929148 C86.2420326,14.8668599 86.2322081,18.0567485 86.1650082,21.2287493 C86.1386784,22.4645735 85.7244756,23.8606116 86.9218911,24.6768466 C87.9196719,25.3569777 89.1379155,24.9023904 89.6550795,23.8835548 C90.1694927,22.8705522 89.6806234,20.8169375 89.6259989,19.6876632 C89.5599779,18.3406226 89.4900272,17.0122476 89.5293254,15.6628738 C89.6330726,12.0775058 89.8110933,8.49563763 89.8971563,4.90910305 C90.8399197,4.95537841 91.8188373,4.92737987 92.7525621,5.05842857 C93.4359574,5.15409023 94.4184119,5.59351169 95.0754775,5.55890239 C96.9743656,5.45818543 97.7689748,2.97175996 96.057932,1.97392328'
              id='C'
              fill='#FFFFFF'
            />
            <path
              d='M67.7216119,8.81264097 C67.7100258,8.75972031 67.6397369,8.1691564 67.7216119,8.81264097 M67.6853088,8.53730013 C67.6887847,8.56222653 67.685695,8.5449698 67.6853088,8.53730013 M69.1169633,5.42725256 C72.533315,1.44593148 73.7004204,9.77441647 76.3625176,9.42199554 C80.623109,8.85827545 75.4217272,2.46944776 73.6942412,1.64649312 C70.1786354,-0.0289443454 67.0886252,1.72587411 65.4167525,4.9126183 C63.3188978,8.91234656 64.6466637,11.6208874 68.6751471,13.3572987 C70.1461943,13.9915796 75.714469,15.8848355 74.2051877,18.3157346 C73.4451402,19.5398125 70.6791544,19.6445033 69.5047111,19.402142 C67.1492591,18.916269 67.5161519,17.3159942 66.3699015,15.8288469 C65.3371947,14.4885737 63.3397528,14.8820273 63.028087,16.6100019 C62.7828481,17.9675319 64.198282,20.0348891 65.1433208,20.9897619 C67.3759602,23.2457927 71.1831493,23.4271802 74.0298516,22.3998291 C78.4155727,20.816811 78.9473743,16.6909168 75.8357368,13.4953526 C74.0870096,11.6995014 71.9026455,11.154572 69.7225296,10.0773681 C67.0781977,8.7712248 67.5725376,7.68673472 69.1169633,5.42725256'
              id='A'
              fill='#FFFFFF'
            />
            <path
              d='M58.749962,20.5676943 C58.1855671,15.7434329 58.0538346,10.8505093 57.9696387,6.00460433 C57.9426476,4.45075032 58.6758373,0.798596322 56.5169562,0.139962235 C53.6023258,-0.749287073 53.9890632,2.83233897 54.0502966,4.30372379 C54.255348,9.21679823 54.8922562,14.0929294 55.1210758,19.0000333 C55.193992,20.5568726 54.6924419,23.5739018 56.9520358,23.9463193 C59.7027058,24.4000865 58.9598476,21.8648117 58.749962,20.5676943'
              id='E'
              fill='#FFFFFF'
            />
            <path
              d='M49.4716454,4.67909741 C47.1120678,1.521124 42.3181606,1.01110068 39.382093,3.92183601 C37.3101733,5.97595969 36.00495,10.8410892 37.9661116,13.3252251 C40.0904751,16.016404 45.3211527,13.6574039 46.6913436,16.7080638 C48.3726748,20.4511421 43.9611374,21.8560762 41.6168232,19.3708027 C40.7738094,18.4774087 40.9581453,16.917382 39.7163241,16.3637507 C37.9539791,15.5788077 36.853443,17.2916519 37.2001979,18.7227508 C38.0479082,22.2235205 41.8524287,24.1130716 45.3011927,23.9947614 C49.0689244,23.8650751 50.7028996,21.0184245 50.4641631,17.5957699 C50.1342371,12.8603265 46.4792204,12.1186123 42.4747091,11.597213 C40.7761576,11.3761397 40.5534673,11.3966165 40.6583549,9.64547322 C40.7855505,7.52650643 42.0277631,5.07763608 44.6491681,5.58159221 C46.7551372,5.98657727 46.942604,9.15327227 49.1037564,9.30040167 C52.5998763,9.53853896 50.3604497,5.86712943 49.4716454,4.67909741'
              id='P'
              fill='#FFFFFF'
            />
            <path
              d='M31.7209696,20.4381695 C30.3835461,20.7580967 28.7579173,20.5355712 27.3944988,20.5112208 C26.3407598,20.4924897 22.8201338,20.9379153 22.1329619,20.2148947 C21.3727026,19.4150766 21.6202201,16.9680453 21.5881973,15.9288437 C21.5422351,14.4753101 21.1839563,14.2599024 22.4595946,13.9298603 C23.2085518,13.7361807 24.3674009,13.8332078 25.1415996,13.7976187 C26.6572206,13.727939 28.606845,14.008531 30.0716062,13.7099572 C31.4414292,13.4304891 32.5739067,11.958599 31.3223797,10.7058628 C30.4355361,9.81763391 28.7797682,10.2949024 27.6909924,10.3200021 C25.6573553,10.3664552 23.6222112,10.3555912 21.5881973,10.3915549 C21.5964855,8.82376157 21.5448723,7.2454788 21.6669357,5.68105705 C24.5143291,5.82154032 27.4788884,6.56329201 30.3255283,6.42655496 C31.766555,6.35724988 33.3654353,5.43530497 32.6368221,3.69630934 C32.0121888,2.20606276 30.1149312,2.40985716 28.792954,2.35066687 C27.1398233,2.27611708 25.4848088,2.23790563 23.8313013,2.18096308 C22.6068996,2.13900541 20.8260543,1.73628668 19.6721027,2.28847961 C17.3095724,3.41833976 18.121445,7.29867513 18.1873743,9.39955568 C18.2706336,12.0657409 18.2721406,14.6678658 18.3644416,17.3561538 C18.4484544,19.7885748 18.3271445,22.9972128 21.2159792,23.6808981 C24.1051906,24.364958 27.4611816,23.7142395 30.4084109,23.8565959 C31.6166129,23.9150369 33.2693669,24.2671816 33.8631075,22.8608504 C34.4319834,21.512211 33.1326106,20.086774 31.7209696,20.4381695'
              id='M'
              fill='#FFFFFF'
            />
            <path
              d='M8.41021607,5.87934286 C10.7314099,6.38056324 11.3520318,8.89406466 11.4306011,11.0286326 C11.4842397,12.4898438 11.613048,12.4018284 10.4273316,12.768689 C9.23708235,13.1371074 7.50704692,12.9377097 6.28808963,12.8851342 C3.74516418,12.7756991 4.0526421,12.6070678 4.00353629,9.93973422 C3.99220418,9.31505862 3.52947636,6.4362544 3.89625898,6.02967003 C4.37220759,5.5015777 7.73482232,5.8267673 8.41021607,5.87934286 M13.4870013,20.7181143 C12.1966517,19.2140637 10.9010138,17.7773878 9.45277018,16.4318428 C11.6107816,16.3722571 13.9557729,15.9594416 14.7229567,13.6130136 C15.3711534,11.6307201 14.8079476,8.6132722 14.05474,6.74080322 C13.0612917,4.27092005 10.9928039,2.62238402 8.42003723,2.26253349 C6.62389782,2.01172858 2.14242611,1.58956627 0.799948834,2.97327723 C-0.664537495,4.48161175 0.351952758,8.62222952 0.4422319,10.4701632 C0.602014649,13.7411422 0.486049391,16.987586 0.285471047,20.2550599 C0.220500284,21.3096868 -0.296621662,23.0423437 0.243919977,23.9918195 C0.843766325,25.0456674 2.30296434,25.3089347 3.21255502,24.5288691 C4.19693763,23.6845445 3.74176455,22.6513373 3.68132663,21.5678912 C3.58802559,19.8917044 3.75574082,18.1644997 3.85546339,16.4937651 C5.46348977,17.806207 7.10551249,19.0851563 8.61683821,20.5163799 C10.1096548,21.9300785 11.1809169,23.7184265 12.6076296,25.143419 C13.618076,26.1528699 15.4266807,26.5676327 15.9381366,24.6947742 C16.377067,23.0871303 14.3667507,21.7435326 13.4870013,20.7181143'
              id='I'
              fill='#FFFFFF'
            />
          </g>
        </g>
      </g>
  </g>
`,Em=`
  <g id="Clothing/Graphic-Shirt" transform="translate(0.000000, 170.000000)">
    <defs>
        <path d="M165.624032,29.2681342 C202.760022,32.1373245 232,63.1798426 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.8348009 61.7752018,31.5722494 99.3929298,29.1967444 C99.1342224,30.2735458 99,31.3767131 99,32.5 C99,44.3741221 113.998461,54 132.5,54 C151.001539,54 166,44.3741221 166,32.5 C166,31.4015235 165.871641,30.3222877 165.624025,29.2681336 Z" id="react-path-1153">
        </path>
    </defs>
    <mask id="react-mask-1154" fill="white">
        <use xlink:href="#react-path-1153"></use>
    </mask>
    <use id="Clothes" fill="#E6E6E6" fill-rule="evenodd" xlink:href="#react-path-1153"></use>
    <g id="Color/Palette/" mask="url(#react-mask-1154)" fill-rule="evenodd" fill='var(--avataaar-shirt-color)'>
        <rect id="\u{1F58D}Color" x="0" y="0" width="264" height="110"></rect>
    </g>
    <g
        id='Clothing/Graphic/Bear'
        stroke-width='1'
        fill-rule='evenodd'>
        <defs>
          <polygon
            id={path1}
            points='47.8916289 0.430054064 47.8916289 41.9204613 0.45345556 41.9204613 0.45345556 0.430054064 47.8916289 0.430054064'
          />
        </defs>
        <g transform='translate(77.000000, 58.000000)' id='Group-76'>
          <g transform='translate(31.000000, 1.000000)'>
            <mask id={mask1} fill='white'>
              <use xlinkHref={'#' + path1} />
            </mask>
            <path
              d='M34.4465814,31.5861741 C33.968066,34.4016565 30.3675711,38.9307388 27.2995299,35.97048 C23.8326433,32.6262918 31.5245196,31.1602447 28.7810969,28.3763859 C27.5974268,27.1761741 24.3685608,27.83928 22.7791175,27.96528 C21.289633,28.0833741 18.9133856,28.4198682 19.4834474,30.5900329 C19.9159423,32.2398918 21.1926433,31.5342918 21.8715711,32.4815153 C22.4069938,33.2301035 22.1798598,35.9887624 21.3826639,36.7492094 C20.3796124,37.7053271 19.193468,37.4123153 17.7975093,36.7996094 C14.6057567,35.39928 13.1212206,31.4868565 15.2228289,28.5829271 C19.3780454,22.8417741 35.2897979,21.5244565 34.4465814,31.5861741 M14.9853031,14.7244094 C15.9695505,14.2811859 17.132932,14.5213271 17.7173443,15.5110447 C18.5189938,16.8669035 17.3595711,18.6842682 15.7424165,18.4668565 C14.0347052,18.2365976 13.1726845,15.5481035 14.9853031,14.7244094 M32.9472,16.3787153 C32.0911175,19.3854212 27.3109113,16.0012094 30.0112825,14.08848 C31.5626227,12.9900565 33.4583753,14.5801271 32.9472,16.3787153 M47.8267052,23.16888 C47.5911588,20.7887153 46.9270763,18.5231859 45.7389526,16.4385035 C45.1164371,15.3460094 44.3464577,14.3276329 43.5492619,13.35768 C43.2483959,12.9930212 42.6432,12.34968 42.5264165,12.1446212 C41.8173031,10.90488 41.888066,11.7834212 42.2789938,10.3598682 C42.8950763,8.11657412 44.2262103,6.28043294 43.1627876,3.87062118 C42.1735918,1.62930353 39.5078598,0.576832941 37.1791175,0.443915294 C36.0914474,0.382150588 35.0017979,0.525938824 33.9720247,0.892574118 C32.9368082,1.26069176 31.9708701,2.53255059 31.0717361,2.79393882 C30.3740041,2.99702118 28.3872,2.33391529 27.6305814,2.28549176 C26.2356124,2.19605647 24.8332206,2.23558588 23.4387464,2.31859765 C21.8087258,2.41544471 18.0632412,3.58205647 16.5257567,3.19565647 C15.5108289,2.94069176 14.3172619,1.41485647 13.1449732,1.03191529 C11.852932,0.610432941 10.4673649,0.467632941 9.17829278,0.954338824 C6.89260206,1.81805647 5.17845773,4.50605647 5.12501443,6.89560941 C5.09680825,8.15066824 5.78018969,9.01092706 5.91528247,10.1469035 C6.11816907,11.8619859 6.35223093,10.5026682 5.42835464,11.8718682 C4.9577567,12.5690682 4.13284948,13.1822682 3.60385979,13.8537741 C0.778787629,17.4405741 -0.278696907,22.73208 0.974746392,27.0733976 C4.13284948,38.0131624 14.6423753,42.4676329 25.4136742,41.86728 C34.6648082,41.3509271 48.9782103,34.1491624 47.8267052,23.16888'
              id='Fill-74'
              fill='#FFFFFF'
            />
          </g>
        </g>
      </g>
  </g>
`,Fm={Skull:bm,SkullOutline:ym,Bat:_m,Cumbia:Lm,Deer:km,Hola:Mm,Selena:xm,Diamond:vm,Pizza:Sm,Resist:wm,Bear:Em},Tm={props:{isCircle:{type:Boolean,default:!0},circleColor:{type:String,default:"#6fb8e0"},topType:{type:String,default:"random"},accessoriesType:{type:String,default:"random"},facialHairType:{type:String,default:"random"},clotheType:{type:String,default:"random"},eyeType:{type:String,default:"random"},eyebrowType:{type:String,default:"random"},mouthType:{type:String,default:"random"},skinColor:{type:String,default:"random"},graphicType:{type:String,default:"random"},hairColor:{type:String,default:"random"},facialHairColor:{type:String,default:"random"},topColor:{type:String,default:"random"},clotheColor:{type:String,default:"random"}},methods:{getRandomChoice(e){const t=Object.entries(e).length;return Object.entries(e)[Math.floor(Math.random()*t)][1]}},data(){return{mouthTypes:NC,eyeTypes:YC,topTypes:nm,clothesType:yg,eyebrowTypes:cg,facialHairTypes:pm,accessoriesTypes:um,GraphicShirtTypes:Fm,hatAndShirtColors:{Black:"#262E33",Blue01:"#65C9FF",Blue02:"#5199E4",Blue03:"#25557C",Gray01:"#E6E6E6",Gray02:"#929598",Heather:"#3C4F5C",PastelBlue:"#B1E2FF",PastelGreen:"#A7FFC4",PastelOrange:"#FFBC69",PastelRed:"#FFAFB9",PastelYellow:"#FFFFB1",Pink:"#FF488E",Red:"#FF5C5C",White:"#FFFFFF"},hairColors:{Auburn:"#A55728",Black:"#2C1B18",Blonde:"#B58143",BlondeGolden:"#D6B370",Brown:"#724133",BrownDark:"#4A312C",PastelPink:"#F59797",Platinum:"#ECDCBF",Red:"#C93305",SilverGray:"#E8E1E1"},skinColors:{Tanned:"#FD9841",Yellow:"#F8D25C",Pale:"#FFDBB4",Light:"#EDB98A",Brown:"#D08B5B",DarkBrown:"#AE5D29",Black:"#614335"}}},computed:{cssVars(){return{"--avataaar-hair-color":this.hairColor==="random"?this.getRandomChoice(this.hairColors):this.hairColors[this.hairColor],"--avataaar-facial-hair-color":this.facialHairColor==="random"?this.getRandomChoice(this.hairColors):this.hairColors[this.facialHairColor],"--avataaar-hat-color":this.topColor==="random"?this.getRandomChoice(this.hatAndShirtColors):this.hatAndShirtColors[this.topColor],"--avataaar-shirt-color":this.clotheColor==="random"?this.getRandomChoice(this.hatAndShirtColors):this.hatAndShirtColors[this.clotheColor]}},topTypeValue(){return this.topType==="random"?this.getRandomChoice(Object.keys(this.topTypes)):this.topType},accessoriesTypeValue(){return this.accessoriesType==="random"?this.getRandomChoice(Object.keys(this.accessoriesTypes)):this.accessoriesType},facialHairTypeValue(){return this.facialHairType==="random"?this.getRandomChoice(Object.keys(this.facialHairTypes)):this.facialHairType},clotheTypeValue(){return this.clotheType==="random"?this.getRandomChoice(Object.keys(this.clothesType)):this.clotheType},eyeTypeValue(){return this.eyeType==="random"?this.getRandomChoice(Object.keys(this.eyeTypes)):this.eyeType},eyebrowTypeValue(){return this.eyebrowType==="random"?this.getRandomChoice(Object.keys(this.eyebrowTypes)):this.eyebrowType},mouthTypeValue(){return this.mouthType==="random"?this.getRandomChoice(Object.keys(this.mouthTypes)):this.mouthType},skinColorValue(){return this.skinColor==="random"?this.getRandomChoice(Object.keys(this.skinColors)):this.skinColor},graphicTypeValue(){return this.graphicType==="random"?this.getRandomChoice(Object.keys(this.GraphicShirtTypes)):this.graphicType}}},Om={viewBox:"0 0 264 280",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},Am=K("desc",null,"Created with getavataaars.com",-1),Rm=K("defs",null,[K("circle",{id:"path-1",cx:"120",cy:"120",r:"120"}),K("path",{d:"M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z",id:"path-2"}),K("path",{d:"M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z",id:"path-silhouette"})],-1),Hm={id:"Avataaar",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},Pm={transform:"translate(-825.000000, -1100.000000)",id:"Avataaar/Circle"},Nm={transform:"translate(825.000000, 1100.000000)"},Im={id:"Circle","stroke-width":"1","fill-rule":"evenodd",transform:"translate(12.000000, 40.000000)"},Dm=K("mask",{id:"mask-1",fill:"white"},[K("use",{"xlink:href":"#path-1"})],-1),Bm=K("use",{id:"Circle-Background",fill:"#E6E6E6","xlink:href":"#path-1"},null,-1),Vm=["fill"],Wm=K("rect",{id:"\u{1F58D}Color",x:"0",y:"0",width:"240",height:"240"},null,-1),$m=[Wm],jm=K("mask",{id:"mask-2",fill:"white"},[K("use",{"xlink:href":"#path-2"})],-1),Um=K("g",{id:"Mask"},null,-1),Zm={id:"Avataaar","stroke-width":"1","fill-rule":"evenodd",fill:"black",mask:"url(#mask-2)"},zm={id:"Body",transform:"translate(32.000000, 36.000000)"},Gm=K("mask",{id:"mask-silhouette",fill:"white"},[K("use",{"xlink:href":"#path-silhouette"})],-1),qm=["fill"],Ym=K("path",{d:"M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z",id:"Neck-Shadow","fill-opacity":"0.100000001",fill:"#000000",mask:"url(#mask-silhouette)"},null,-1),Km=["innerHTML"],Xm=["innerHTML"],Jm=["innerHTML"],Qm=["innerHTML"],ep=["innerHTML"],tp=K("svg",null,[K("g",{fill:"black",transform:"translate(76.000000, 82.000000)"},[K("g",{id:"Nose/Default",transform:"translate(28.000000, 40.000000)",opacity:"0.16"},[K("path",{d:"M16,8 C16,12.418278 21.372583,16 28,16 L28,16 C34.627417,16 40,12.418278 40,8",id:"Nose"})])])],-1),np=["innerHTML"],rp=["innerHTML"],ip=["innerHTML"];function sp(e,t,n,r,i,s){return U(),u1("svg",Om,[Am,Rm,K("g",Hm,[K("g",Pm,[K("g",Nm,[n.isCircle?(U(),u1(W1,{key:0},[K("g",Im,[Dm,Bm,K("g",{id:"Color/Palette/Blue-01",mask:"url(#mask-1)",fill:n.circleColor},$m,8,Vm)]),jm],64)):Q1("",!0),Um,K("g",Zm,[K("g",zm,[Gm,K("use",{fill:i.skinColors[s.skinColorValue],"xlink:href":"#path-silhouette"},null,8,qm),Ym]),(U(),u1("svg",{style:Yt(s.cssVars),innerHTML:i.clothesType[s.clotheTypeValue]},null,12,Km)),s.clotheTypeValue==="GraphicShirt"?(U(),u1("svg",{key:0,style:Yt(s.cssVars),innerHTML:i.GraphicShirtTypes[s.graphicTypeValue]},null,12,Xm)):Q1("",!0),(U(),u1("svg",{innerHTML:i.eyeTypes[s.eyeTypeValue]},null,8,Jm)),(U(),u1("svg",{innerHTML:i.mouthTypes[s.mouthTypeValue]},null,8,Qm)),(U(),u1("svg",{innerHTML:i.eyebrowTypes[s.eyebrowTypeValue]},null,8,ep)),tp,(U(),u1("svg",{style:Yt(s.cssVars),innerHTML:i.topTypes[s.topTypeValue]},null,12,np)),(U(),u1("svg",{style:Yt(s.cssVars),innerHTML:i.facialHairTypes[s.facialHairTypeValue]},null,12,rp)),(U(),u1("svg",{innerHTML:i.accessoriesTypes[s.accessoriesTypeValue]},null,8,ip))])])])])])}const ap=Vr(Tm,[["render",sp]]),vi={__name:"UserAvatar",props:{avatar:{type:Object,default:{avatar:{}}}},setup(e){const t=e;return(n,r)=>(U(),u1("div",null,[n1(ap,{accessoriesType:t.avatar.accessoriesType,circleColor:t.avatar.circleColor,clotheColor:t.avatar.clotheColor,clotheType:t.avatar.clotheType,eyeType:t.avatar.eyeType,eyebrowType:t.avatar.eyebrowType,facialHairColor:t.avatar.facialHairColor,facialHairType:t.avatar.facialHairType,graphicType:t.avatar.graphicType,hairColor:t.avatar.hairColor,isCircle:t.avatar.is_circle,mouthType:t.avatar.mouthType,skinColor:t.avatar.skinColor,topColor:t.avatar.topColor,topType:t.avatar.topType,class:"block h-auto w-full max-w-full"},null,8,["accessoriesType","circleColor","clotheColor","clotheType","eyeType","eyebrowType","facialHairColor","facialHairType","graphicType","hairColor","isCircle","mouthType","skinColor","topColor","topType"]),ce(n.$slots,"default")]))}},op={class:"text-center md:text-left overflow-hidden"},lp={class:"text-xl text-ellipsis"},cp={class:"text-gray-500 dark:text-slate-400"},up={__name:"CardBoxClient",props:{name:{type:String,required:!0},login:{type:String,required:!0},date:{type:String,required:!0},progress:{type:Number,default:0},text:{type:String,default:null},type:{type:String,default:null}},setup(e){const t=e,n=e1(()=>t.type?t.type:t.progress?t.progress>=60?"success":t.progress>=40?"warning":"danger":"info"),r=e1(()=>({success:Xu,warning:Ku,danger:Yu,info:null})[n.value]),i=e1(()=>{var s;return(s=t.text)!=null?s:`${t.progress}%`});return(s,a)=>(U(),y1(h7,{class:"mb-6 last:mb-0","is-hoverable":""},{default:T1(()=>[n1(L2,null,{default:T1(()=>[n1(L2,{type:"justify-start"},{default:T1(()=>[n1(vi,{class:"w-12 h-12 mr-6",username:e.name},null,8,["username"]),K("div",op,[K("h4",lp,Le(e.name),1),K("p",cp,Le(e.date)+" @ "+Le(e.login),1)])]),_:1}),n1(Li,{color:W(n),label:W(i),icon:W(r)},null,8,["color","label","icon"])]),_:1})]),_:1}))}},fp=[{to:"/dashboard",icon:$u,label:"Dashboard",role:"User"},{to:"/boats",label:"Boats",icon:Gu,role:"Admin"},{to:"/forms",label:"Forms",icon:zu,role:"User"}],dp=[{isCurrentUser:!0,menu:[{icon:Eu,label:"My Profile",to:"/profile"},{icon:Pu,label:"Settings"},{icon:Du,label:"Messages"},{isDivider:!0},{icon:g5,label:"Log Out",isLogout:!0}]},{icon:qu,label:"Light/Dark",isDesktopNoLabel:!0,isToggleLightDark:!0},{icon:g5,label:"Log out",isDesktopNoLabel:!0,isLogout:!0}],hp={__name:"FormControlIcon",props:{icon:{type:String,default:null},h:{type:String,default:null}},setup(e){return(t,n)=>(U(),y1(pe,{path:e.icon,w:"w-10",h:e.h,class:"absolute top-0 left-0 z-10 pointer-events-none text-gray-500 dark:text-slate-400"},null,8,["path","h"]))}},Cp=["id","name"],gp=["value"],mp=["id","name","placeholder","required"],pp=["id","name","inputmode","autocomplete","required","placeholder","type","min","max"],bp={__name:"FormControl",props:{name:{type:String,default:null},id:{type:String,default:null},autocomplete:{type:String,default:null},placeholder:{type:String,default:null},inputmode:{type:String,default:null},icon:{type:String,default:null},options:{type:Array,default:null},min:{type:String,default:null},max:{type:String,default:null},type:{type:String,default:"text"},class:{type:String,default:""},modelValue:{type:[String,Number,Boolean,Array,Object],default:""},required:Boolean,borderless:Boolean,transparent:Boolean,ctrlKFocus:Boolean},emits:["update:modelValue","setRef"],setup(e,{emit:t}){const n=e,r=e1({get:()=>n.modelValue,set:d=>{t("update:modelValue",d)}}),i=e1(()=>{const d=["px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full","dark:placeholder-gray-400",s.value==="textarea"?"h-24":"h-12",n.borderless?"border-0":"border",n.transparent?"bg-transparent":"bg-white dark:bg-slate-800"];return n.icon&&d.push("pl-10"),d}),s=e1(()=>n.options?"select":n.type),a=e1(()=>n.type==="textarea"?"h-full":"h-12"),o=Ht(),l=H1(null),c=H1(null),u=H1(null);if(t0(()=>{l.value?t("setRef",l.value):c.value?t("setRef",c.value):t("setRef",u.value)}),n.ctrlKFocus){const d=f=>{f.ctrlKey&&f.key==="k"?(f.preventDefault(),u.value.focus()):f.key==="Escape"&&u.value.blur()};t0(()=>{o.isFieldFocusRegistered||(window.addEventListener("keydown",d),o.isFieldFocusRegistered=!0)}),P3(()=>{window.removeEventListener("keydown",d),o.isFieldFocusRegistered=!1})}return(d,f)=>(U(),u1("div",{class:l1(["relative",e.class])},[W(s)==="select"?K2((U(),u1("select",{key:0,id:e.id,"onUpdate:modelValue":f[0]||(f[0]=h=>F1(r)?r.value=h:null),name:e.name,class:l1(W(i))},[(U(!0),u1(W1,null,g2(e.options,h=>{var m,b;return U(),u1("option",{key:(m=h.id)!=null?m:h,value:h},Le((b=h.label)!=null?b:h),9,gp)}),128))],10,Cp)),[[Zn,W(r)]]):W(s)==="textarea"?K2((U(),u1("textarea",{key:1,id:e.id,"onUpdate:modelValue":f[1]||(f[1]=h=>F1(r)?r.value=h:null),class:l1(W(i)),name:e.name,placeholder:e.placeholder,required:e.required},null,10,mp)),[[r5,W(r)]]):K2((U(),u1("input",{key:2,id:e.id,ref_key:"inputEl",ref:u,"onUpdate:modelValue":f[2]||(f[2]=h=>F1(r)?r.value=h:null),name:e.name,inputmode:e.inputmode,autocomplete:e.autocomplete,required:e.required,placeholder:e.placeholder,type:W(s),class:l1(W(i)),min:e.min,max:e.max},null,10,pp)),[[mo,W(r)]]),e.icon?(U(),y1(hp,{key:3,icon:e.icon,h:W(a)},null,8,["icon","h"])):Q1("",!0)],2))}},yp={__name:"UserAvatarCurrentUser",setup(e){const t=Ht(),n=e1(()=>t.user);return(r,i)=>W(n)?(U(),y1(vi,{key:0,username:W(n).firstname,avatar:W(n).avatar},{default:T1(()=>[ce(r.$slots,"default")]),_:3},8,["username","avatar"])):Q1("",!0)}},_p={__name:"BaseDivider",props:{navBar:Boolean},setup(e){const t=e;return(n,r)=>(U(),u1("hr",{class:l1([t.navBar?"hidden lg:block lg:my-0.5 dark:border-slate-700":"my-6 -mx-6 dark:border-slate-800","border-t border-gray-100"])},null,2))}},Lp={__name:"NavBarItem",props:{item:{type:Object,required:!0}},emits:["menu-click"],setup(e,{emit:t}){const n=e,r=e1(()=>n.item.href?"a":n.item.to?j3:"div"),i=ht(),s=e1(()=>{const f=[o.value?`${i.navBarItemLabelActiveColorStyle} dark:text-slate-400`:`${i.navBarItemLabelStyle} dark:text-white dark:hover:text-slate-400 ${i.navBarItemLabelHoverStyle}`,n.item.menu?"lg:py-2 lg:px-3":"py-2 px-3"];return n.item.isDesktopNoLabel&&f.push("lg:w-16","lg:justify-center"),f}),a=e1(()=>n.item.isCurrentUser?Ht().userName:n.item.label),o=H1(!1),l=f=>{t("menu-click",f,n.item),n.item.menu&&(o.value=!o.value)},c=(f,h)=>{t("menu-click",f,h)},u=H1(null),d=f=>{u.value&&!u.value.contains(f.target)&&(o.value=!1)};return t0(()=>{n.item.menu&&window.addEventListener("click",d)}),P3(()=>{n.item.menu&&window.removeEventListener("click",d)}),(f,h)=>{var m,b,y;return e.item.isDivider?(U(),y1(_p,{key:0,"nav-bar":""})):(U(),y1(I3(W(r)),{key:1,ref_key:"root",ref:u,class:l1(["block lg:flex items-center relative cursor-pointer",W(s)]),to:(m=e.item.to)!=null?m:null,href:(b=e.item.href)!=null?b:null,target:(y=e.item.target)!=null?y:null,onClick:l},{default:T1(()=>[K("div",{class:l1(["flex items-center",{"bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0":e.item.menu}])},[e.item.isCurrentUser?(U(),y1(yp,{key:0,class:"w-6 h-6 mr-3 inline-flex"})):Q1("",!0),e.item.icon?(U(),y1(pe,{key:1,path:e.item.icon,class:"transition-colors"},null,8,["path"])):Q1("",!0),K("span",{class:l1(["px-2 transition-colors",{"lg:hidden":e.item.isDesktopNoLabel&&e.item.icon}])},Le(W(a)),3),e.item.menu?(U(),y1(pe,{key:2,path:o.value?W(Hu):W(Ru),class:"hidden lg:inline-flex transition-colors"},null,8,["path"])):Q1("",!0)],2),e.item.menu?(U(),u1("div",{key:0,class:l1(["text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700",{"lg:hidden":!o.value}])},[n1(Mi,{menu:e.item.menu,onMenuClick:c},null,8,["menu"])],2)):Q1("",!0)]),_:1},8,["class","to","href","target"]))}}},Mi={__name:"NavBarMenuList",props:{menu:{type:Array,default:()=>[]}},emits:["menu-click"],setup(e,{emit:t}){const n=(r,i)=>{t("menu-click",r,i)};return(r,i)=>(U(!0),u1(W1,null,g2(e.menu,(s,a)=>(U(),y1(Lp,{key:a,item:s,onMenuClick:n},null,8,["item"]))),128))}},s3={__name:"NavBarItemPlain",props:{display:{type:String,default:"flex"},useMargin:Boolean},setup(e){const t=ht();return(n,r)=>(U(),u1("div",{class:l1([[e.display,W(t).navBarItemLabelStyle,W(t).navBarItemLabelHoverStyle,e.useMargin?"my-2 mx-3":"py-2 px-3"],"items-center cursor-pointer dark:text-white dark:hover:text-slate-400"])},[ce(n.$slots,"default")],2))}},kp={class:"top-0 inset-x-0 fixed bg-gray-50 h-14 z-30 transition-position w-screen lg:w-auto dark:bg-slate-800"},vp={class:"flex flex-1 items-stretch h-14"},Mp={class:"flex-none items-stretch flex h-14 lg:hidden"},xp={__name:"NavBar",props:{menu:{type:Array,required:!0}},emits:["menu-click"],setup(e,{emit:t}){const n=(i,s)=>{t("menu-click",i,s)},r=H1(!1);return(i,s)=>(U(),u1("nav",kp,[K("div",{class:l1(["flex lg:items-stretch",W(_r)])},[K("div",vp,[ce(i.$slots,"default")]),K("div",Mp,[n1(s3,{onClick:s[0]||(s[0]=C3(a=>r.value=!r.value,["prevent"]))},{default:T1(()=>[n1(pe,{path:r.value?W(C7):W(Iu),size:"24"},null,8,["path"])]),_:1})]),K("div",{class:l1(["max-h-screen-menu overflow-y-auto lg:overflow-visible absolute w-screen top-14 left-0 bg-gray-50 shadow-lg lg:w-auto lg:flex lg:static lg:shadow-none dark:bg-slate-800",[r.value?"block":"hidden"]])},[n1(Mi,{menu:e.menu,onMenuClick:n},null,8,["menu"])],2)],2)]))}},xi={__name:"AsideMenuItem",props:{item:{type:Object,required:!0},isDropdownList:Boolean},emits:["menu-click"],setup(e,{emit:t}){const n=e,r=ht(),i=e1(()=>n.item&&n.item.color),s=e1(()=>i.value?"":r.asideMenuItemActiveStyle),a=H1(!1),o=e1(()=>[n.isDropdownList?"py-3 px-6 text-sm":"py-3",i.value?Br(n.item.color,!1,!0):`${r.asideMenuItemStyle} dark:text-slate-300 dark:hover:text-white`]),l=e1(()=>!!n.item.menu),c=u=>{t("menu-click",u,n.item),l.value&&(a.value=!a.value)};return(u,d)=>{var f,h,m;return U(),u1("li",null,[(U(),y1(I3(e.item.to?W(j3):"a"),{to:(f=e.item.to)!=null?f:null,href:(h=e.item.href)!=null?h:null,target:(m=e.item.target)!=null?m:null,class:l1(["flex cursor-pointer",W(o)]),onClick:c},{default:T1(b=>[e.item.icon?(U(),y1(pe,{key:0,path:e.item.icon,class:l1(["flex-none",[b&&b.isExactActive?W(s):""]]),w:"w-16",size:18},null,8,["path","class"])):Q1("",!0),K("span",{class:l1(["grow text-ellipsis line-clamp-1",[{"pr-12":!W(l)},b&&b.isExactActive?W(s):""]])},Le(e.item.label),3),W(l)?(U(),y1(pe,{key:1,path:a.value?W(Wu):W(Uu),class:l1(["flex-none",[b&&b.isExactActive?W(s):""]]),w:"w-12"},null,8,["path","class"])):Q1("",!0)]),_:1},8,["to","href","target","class"])),W(l)?(U(),y1(Si,{key:0,menu:e.item.menu,class:l1([W(r).asideMenuDropdownStyle,a.value?"block dark:bg-slate-800/50":"hidden"]),"is-dropdown-list":""},null,8,["menu","class"])):Q1("",!0)])}}},Si={__name:"AsideMenuList",props:{isDropdownList:Boolean,menu:{type:Array,required:!0}},emits:["menu-click"],setup(e,{emit:t}){const n=e,r=Ht(),i=(a,o)=>{t("menu-click",a,o)},s=e1(()=>n.menu.filter(a=>r.user.roles.includes(a.role)));return(a,o)=>(U(),u1("ul",null,[(U(!0),u1(W1,null,g2(W(s),(l,c)=>(U(),y1(xi,{key:c,item:l,"is-dropdown-list":e.isDropdownList,onMenuClick:i},null,8,["item","is-dropdown-list"]))),128))]))}},Sp={id:"aside",class:"lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden"},wp=K("div",{class:"text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0"},[K("b",{class:"font-black"},"Rowmate")],-1),Ep=["onClick"],Fp={__name:"AsideMenuLayer",props:{menu:{type:Array,required:!0}},emits:["menu-click","aside-lg-close-click"],setup(e,{emit:t}){const n=ht(),r=e1(()=>({label:"Logout",icon:g5,color:"info",isLogout:!0})),i=(a,o)=>{t("menu-click",a,o)},s=a=>{t("aside-lg-close-click",a)};return(a,o)=>(U(),u1("aside",Sp,[K("div",{class:l1([W(n).asideStyle,"lg:rounded-2xl flex-1 flex flex-col overflow-hidden dark:bg-slate-900"])},[K("div",{class:l1([W(n).asideBrandStyle,"flex flex-row h-14 items-center justify-between dark:bg-slate-900"])},[wp,K("button",{class:"hidden lg:inline-block xl:hidden p-3",onClick:C3(s,["prevent"])},[n1(pe,{path:W(C7)},null,8,["path"])],8,Ep)],2),K("div",{class:l1([W(n).darkMode?"aside-scrollbars-[slate]":W(n).asideScrollbarsStyle,"flex-1 overflow-y-auto overflow-x-hidden"])},[n1(Si,{menu:e.menu,onMenuClick:i},null,8,["menu"])],2),K("ul",null,[n1(xi,{item:W(r),onMenuClick:i},null,8,["item"])])],2)]))}},Tp={__name:"OverlayLayer",props:{zIndex:{type:String,default:"z-50"},type:{type:String,default:"flex"}},emits:["overlay-click"],setup(e,{emit:t}){const n=i=>{t("overlay-click",i)},r=ht();return(i,s)=>(U(),u1("div",{class:l1([[e.type,e.zIndex],"items-center flex-col justify-center overflow-hidden fixed inset-0"])},[n1(h3,{"enter-active-class":"transition duration-150 ease-in","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:T1(()=>[K("div",{class:l1(["absolute inset-0 bg-gradient-to-tr opacity-90 dark:from-gray-700 dark:via-gray-900 dark:to-gray-700",W(r).overlayStyle]),onClick:n},null,2)]),_:1}),n1(h3,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"animate-fade-out"},{default:T1(()=>[ce(i.$slots,"default")]),_:3})],2))}},Op={__name:"AsideMenu",props:{menu:{type:Array,required:!0},isAsideMobileExpanded:Boolean,isAsideLgActive:Boolean},emits:["menu-click","aside-lg-close-click"],setup(e,{emit:t}){const n=(i,s)=>{t("menu-click",i,s)},r=i=>{t("aside-lg-close-click",i)};return(i,s)=>(U(),u1(W1,null,[n1(Fp,{menu:e.menu,class:l1([e.isAsideMobileExpanded?"left-0":"-left-60 lg:left-0",{"lg:hidden xl:flex":!e.isAsideLgActive}]),onMenuClick:n,onAsideLgCloseClick:r},null,8,["menu","class"]),K2(n1(Tp,{"z-index":"z-30",onOverlayClick:r},null,512),[[_o,e.isAsideLgActive]])],64))}},Ap={__name:"LayoutAuthenticated",setup(e){const t=br(),n=Ht();(n.access_token==null||n.user==null)&&t.push("/login");const r="xl:pl-60",i=ht(),s=H1(!1),a=H1(!1);t.beforeEach(()=>{s.value=!1,a.value=!1});const o=(l,c)=>{c.isToggleLightDark&&i.setDarkMode(),c.isLogout&&(n.access_token=null,n.user=null,t.push("/"))};return(l,c)=>(U(),u1("div",{class:l1({dark:W(i).darkMode,"overflow-hidden lg:overflow-visible":s.value})},[K("div",{class:l1([[r,{"ml-60 lg:ml-0":s.value}],"pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100"])},[n1(xp,{menu:W(dp),class:l1([r,{"ml-60 lg:ml-0":s.value}]),onMenuClick:o},{default:T1(()=>[n1(s3,{display:"flex lg:hidden",onClick:c[0]||(c[0]=C3(u=>s.value=!s.value,["prevent"]))},{default:T1(()=>[n1(pe,{path:s.value?W(Tu):W(Bu),size:"24"},null,8,["path"])]),_:1}),n1(s3,{display:"hidden lg:flex xl:hidden",onClick:c[1]||(c[1]=C3(u=>a.value=!0,["prevent"]))},{default:T1(()=>[n1(pe,{path:W(Vu),size:"24"},null,8,["path"])]),_:1}),n1(s3,{"use-margin":""},{default:T1(()=>[n1(bp,{placeholder:"Search (ctrl+k)","ctrl-k-focus":"",transparent:"",borderless:""})]),_:1})]),_:1},8,["menu","class"]),n1(Op,{"is-aside-mobile-expanded":s.value,"is-aside-lg-active":a.value,menu:W(fp),onMenuClick:o,onAsideLgCloseClick:c[2]||(c[2]=u=>a.value=!1)},null,8,["is-aside-mobile-expanded","is-aside-lg-active","menu"]),ce(l.$slots,"default")],2)],2))}},Rp={class:"flex items-center justify-start"},Hp={__name:"SectionTitleLineWithButton",props:{icon:{type:String,default:null},title:{type:String,required:!0},main:Boolean},setup(e){return e1(()=>Q5().default),(t,n)=>(U(),u1("section",{class:l1([{"pt-6":!e.main},"mb-6 flex items-center justify-between"])},[K("div",Rp,[e.icon&&e.main?(U(),y1(ki,{key:0,icon:e.icon,color:"light",class:"mr-3",bg:""},null,8,["icon"])):e.icon?(U(),y1(pe,{key:1,path:e.icon,class:"mr-2",size:"20"},null,8,["path"])):Q1("",!0),K("h1",{class:l1([e.main?"text-3xl":"text-2xl","leading-tight"])},Le(e.title),3)])],2))}},Pp={class:"grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"},Np={class:"flex flex-col justify-between"},Ip={class:"flex flex-col justify-between"},Dp=K("b",null,"Responsive table.",-1),Bp=X5(" Collapses on mobile "),Vp={__name:"HomeView",setup(e){const t=H1(null),n=()=>{t.value=Qu()};t0(()=>{n()});const r=Ht(),i=e1(()=>r.clients.slice(0,4)),s=e1(()=>r.history);return(a,o)=>(U(),y1(Ap,null,{default:T1(()=>[n1(bu,null,{default:T1(()=>[K("div",Pp,[K("div",Np,[(U(!0),u1(W1,null,g2(W(s),(l,c)=>(U(),y1(vC,{key:c,amount:l.amount,date:l.date,business:l.business,type:l.type,name:l.name,account:l.account},null,8,["amount","date","business","type","name","account"]))),128))]),K("div",Ip,[(U(!0),u1(W1,null,g2(W(i),l=>(U(),y1(up,{key:l.id,name:l.name,login:l.login,date:l.created,progress:l.progress},null,8,["name","login","date","progress"]))),128))])]),n1(Hp,{icon:W(Fu),title:"Clients"},null,8,["icon"]),n1(pC,{color:"info",icon:W(ju)},{default:T1(()=>[Dp,Bp]),_:1},8,["icon"]),n1(h7,{"has-table":""})]),_:1})]),_:1}))}},Wp=[{meta:{title:"Recognize login"},path:"/",name:"start",component:wu},{meta:{title:"Dashboard"},path:"/dashboard",name:"dashboard",component:Vp},{meta:{title:"Tables"},path:"/tables",name:"tables",component:()=>nt(()=>import("./TablesView.d9700885.js"),["assets/TablesView.d9700885.js","assets/CardBoxComponentEmpty.b0d4e2a7.js"])},{meta:{title:"Boats"},path:"/boats",name:"boats",component:()=>nt(()=>import("./BoatsView.48a76cd0.js"),["assets/BoatsView.48a76cd0.js","assets/CardBoxModal.236cb3dc.js","assets/BaseButtons.8e00bda5.js","assets/FormCheckRadioGroup.2016cccb.js","assets/FormField.ccb7a2e0.js"])},{meta:{title:"Forms"},path:"/forms",name:"forms",component:()=>nt(()=>import("./FormsView.185575ea.js"),["assets/FormsView.185575ea.js","assets/FormCheckRadioGroup.2016cccb.js","assets/FormField.ccb7a2e0.js","assets/FormFilePicker.a3c9b5ea.js","assets/BaseButtons.8e00bda5.js","assets/SectionTitle.d3bf7048.js"])},{meta:{title:"Profile"},path:"/profile",name:"profile",component:()=>nt(()=>import("./ProfileView.5767e495.js"),["assets/ProfileView.5767e495.js","assets/FormField.ccb7a2e0.js","assets/FormFilePicker.a3c9b5ea.js","assets/BaseButtons.8e00bda5.js"])},{meta:{title:"Ui"},path:"/ui",name:"ui",component:()=>nt(()=>import("./UiView.95b8d75d.js"),["assets/UiView.95b8d75d.js","assets/BaseButtons.8e00bda5.js","assets/CardBoxModal.236cb3dc.js","assets/SectionTitle.d3bf7048.js","assets/FormField.ccb7a2e0.js","assets/FormCheckRadioGroup.2016cccb.js","assets/CardBoxComponentEmpty.b0d4e2a7.js"])},{meta:{title:"Responsive layout"},path:"/responsive",name:"responsive",component:()=>nt(()=>import("./ResponsiveView.b1634556.js"),["assets/ResponsiveView.b1634556.js","assets/SectionTitle.d3bf7048.js"])},{meta:{title:"Login"},path:"/login",name:"login",component:()=>nt(()=>import("./LoginView.a1d5a36b.js"),["assets/LoginView.a1d5a36b.js","assets/SectionFullScreen.b2be774f.js","assets/FormField.ccb7a2e0.js","assets/BaseButtons.8e00bda5.js"])},{meta:{title:"Register"},path:"/register",name:"register",component:()=>nt(()=>import("./RegisterView.7faa7020.js"),["assets/RegisterView.7faa7020.js","assets/SectionFullScreen.b2be774f.js","assets/FormField.ccb7a2e0.js","assets/BaseButtons.8e00bda5.js"])},{meta:{title:"Error"},path:"/error",name:"error",component:()=>nt(()=>import("./ErrorView.b64ba7df.js"),["assets/ErrorView.b64ba7df.js","assets/SectionFullScreen.b2be774f.js","assets/BaseButtons.8e00bda5.js"])}],wi=rc({history:_l(),routes:Wp,scrollBehavior(e,t,n){return n||{top:0}}});/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const x5=typeof window<"u",$p=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Pt=e=>$p?Symbol(e):e,jp=(e,t,n)=>Up({l:e,k:t,s:n}),Up=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),G1=e=>typeof e=="number"&&isFinite(e),Zp=e=>T7(e)==="[object Date]",Rt=e=>T7(e)==="[object RegExp]",Q3=e=>o1(e)&&Object.keys(e).length===0;function zp(e,t){typeof console<"u"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const ee=Object.assign;let u9;const o2=()=>u9||(u9=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function f9(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const Gp=Object.prototype.hasOwnProperty;function F7(e,t){return Gp.call(e,t)}const A1=Array.isArray,$1=e=>typeof e=="function",z=e=>typeof e=="string",g1=e=>typeof e=="boolean",R1=e=>e!==null&&typeof e=="object",Ei=Object.prototype.toString,T7=e=>Ei.call(e),o1=e=>T7(e)==="[object Object]",qp=e=>e==null?"":A1(e)||o1(e)&&e.toString===Ei?JSON.stringify(e,null,2):String(e);/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const _1={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,__EXTEND_POINT__:15};function e6(e,t,n={}){const{domain:r,messages:i,args:s}=n,a=e,o=new SyntaxError(String(a));return o.code=e,t&&(o.location=t),o.domain=r,o}function Yp(e){throw e}function Kp(e,t,n){return{line:e,column:t,offset:n}}function S5(e,t,n){const r={start:e,end:t};return n!=null&&(r.source=n),r}const rt=" ",Xp="\r",fe=`
`,Jp=String.fromCharCode(8232),Qp=String.fromCharCode(8233);function eb(e){const t=e;let n=0,r=1,i=1,s=0;const a=S=>t[S]===Xp&&t[S+1]===fe,o=S=>t[S]===fe,l=S=>t[S]===Qp,c=S=>t[S]===Jp,u=S=>a(S)||o(S)||l(S)||c(S),d=()=>n,f=()=>r,h=()=>i,m=()=>s,b=S=>a(S)||l(S)||c(S)?fe:t[S],y=()=>b(n),p=()=>b(n+s);function L(){return s=0,u(n)&&(r++,i=0),a(n)&&n++,n++,i++,t[n]}function M(){return a(n+s)&&s++,s++,t[n+s]}function v(){n=0,r=1,i=1,s=0}function _(S=0){s=S}function E(){const S=n+s;for(;S!==n;)L();s=0}return{index:d,line:f,column:h,peekOffset:m,charAt:b,currentChar:y,currentPeek:p,next:L,peek:M,reset:v,resetPeek:_,skipToPeek:E}}const yt=void 0,d9="'",tb="tokenizer";function nb(e,t={}){const n=t.location!==!1,r=eb(e),i=()=>r.index(),s=()=>Kp(r.line(),r.column(),r.index()),a=s(),o=i(),l={currentType:14,offset:o,startLoc:a,endLoc:a,lastType:14,lastOffset:o,lastStartLoc:a,lastEndLoc:a,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=t;function d(C,g,k,...w){const T=c();if(g.column+=k,g.offset+=k,u){const N=S5(T.startLoc,g),$=e6(C,N,{domain:tb,args:w});u($)}}function f(C,g,k){C.endLoc=s(),C.currentType=g;const w={type:g};return n&&(w.loc=S5(C.startLoc,C.endLoc)),k!=null&&(w.value=k),w}const h=C=>f(C,14);function m(C,g){return C.currentChar()===g?(C.next(),g):(d(_1.EXPECTED_TOKEN,s(),0,g),"")}function b(C){let g="";for(;C.currentPeek()===rt||C.currentPeek()===fe;)g+=C.currentPeek(),C.peek();return g}function y(C){const g=b(C);return C.skipToPeek(),g}function p(C){if(C===yt)return!1;const g=C.charCodeAt(0);return g>=97&&g<=122||g>=65&&g<=90||g===95}function L(C){if(C===yt)return!1;const g=C.charCodeAt(0);return g>=48&&g<=57}function M(C,g){const{currentType:k}=g;if(k!==2)return!1;b(C);const w=p(C.currentPeek());return C.resetPeek(),w}function v(C,g){const{currentType:k}=g;if(k!==2)return!1;b(C);const w=C.currentPeek()==="-"?C.peek():C.currentPeek(),T=L(w);return C.resetPeek(),T}function _(C,g){const{currentType:k}=g;if(k!==2)return!1;b(C);const w=C.currentPeek()===d9;return C.resetPeek(),w}function E(C,g){const{currentType:k}=g;if(k!==8)return!1;b(C);const w=C.currentPeek()===".";return C.resetPeek(),w}function S(C,g){const{currentType:k}=g;if(k!==9)return!1;b(C);const w=p(C.currentPeek());return C.resetPeek(),w}function H(C,g){const{currentType:k}=g;if(!(k===8||k===12))return!1;b(C);const w=C.currentPeek()===":";return C.resetPeek(),w}function F(C,g){const{currentType:k}=g;if(k!==10)return!1;const w=()=>{const N=C.currentPeek();return N==="{"?p(C.peek()):N==="@"||N==="%"||N==="|"||N===":"||N==="."||N===rt||!N?!1:N===fe?(C.peek(),w()):p(N)},T=w();return C.resetPeek(),T}function A(C){b(C);const g=C.currentPeek()==="|";return C.resetPeek(),g}function I(C){const g=b(C),k=C.currentPeek()==="%"&&C.peek()==="{";return C.resetPeek(),{isModulo:k,hasSpace:g.length>0}}function R(C,g=!0){const k=(T=!1,N="",$=!1)=>{const B=C.currentPeek();return B==="{"?N==="%"?!1:T:B==="@"||!B?N==="%"?!0:T:B==="%"?(C.peek(),k(T,"%",!0)):B==="|"?N==="%"||$?!0:!(N===rt||N===fe):B===rt?(C.peek(),k(!0,rt,$)):B===fe?(C.peek(),k(!0,fe,$)):!0},w=k();return g&&C.resetPeek(),w}function j(C,g){const k=C.currentChar();return k===yt?yt:g(k)?(C.next(),k):null}function r1(C){return j(C,k=>{const w=k.charCodeAt(0);return w>=97&&w<=122||w>=65&&w<=90||w>=48&&w<=57||w===95||w===36})}function Q(C){return j(C,k=>{const w=k.charCodeAt(0);return w>=48&&w<=57})}function X(C){return j(C,k=>{const w=k.charCodeAt(0);return w>=48&&w<=57||w>=65&&w<=70||w>=97&&w<=102})}function Z(C){let g="",k="";for(;g=Q(C);)k+=g;return k}function c1(C){y(C);const g=C.currentChar();return g!=="%"&&d(_1.EXPECTED_TOKEN,s(),0,g),C.next(),"%"}function P1(C){let g="";for(;;){const k=C.currentChar();if(k==="{"||k==="}"||k==="@"||k==="|"||!k)break;if(k==="%")if(R(C))g+=k,C.next();else break;else if(k===rt||k===fe)if(R(C))g+=k,C.next();else{if(A(C))break;g+=k,C.next()}else g+=k,C.next()}return g}function z1(C){y(C);let g="",k="";for(;g=r1(C);)k+=g;return C.currentChar()===yt&&d(_1.UNTERMINATED_CLOSING_BRACE,s(),0),k}function U1(C){y(C);let g="";return C.currentChar()==="-"?(C.next(),g+=`-${Z(C)}`):g+=Z(C),C.currentChar()===yt&&d(_1.UNTERMINATED_CLOSING_BRACE,s(),0),g}function N1(C){y(C),m(C,"'");let g="",k="";const w=N=>N!==d9&&N!==fe;for(;g=j(C,w);)g==="\\"?k+=I1(C):k+=g;const T=C.currentChar();return T===fe||T===yt?(d(_1.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),T===fe&&(C.next(),m(C,"'")),k):(m(C,"'"),k)}function I1(C){const g=C.currentChar();switch(g){case"\\":case"'":return C.next(),`\\${g}`;case"u":return ie(C,g,4);case"U":return ie(C,g,6);default:return d(_1.UNKNOWN_ESCAPE_SEQUENCE,s(),0,g),""}}function ie(C,g,k){m(C,g);let w="";for(let T=0;T<k;T++){const N=X(C);if(!N){d(_1.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${g}${w}${C.currentChar()}`);break}w+=N}return`\\${g}${w}`}function P(C){y(C);let g="",k="";const w=T=>T!=="{"&&T!=="}"&&T!==rt&&T!==fe;for(;g=j(C,w);)k+=g;return k}function q(C){let g="",k="";for(;g=r1(C);)k+=g;return k}function V(C){const g=(k=!1,w)=>{const T=C.currentChar();return T==="{"||T==="%"||T==="@"||T==="|"||!T||T===rt?w:T===fe?(w+=T,C.next(),g(k,w)):(w+=T,C.next(),g(!0,w))};return g(!1,"")}function J(C){y(C);const g=m(C,"|");return y(C),g}function h1(C,g){let k=null;switch(C.currentChar()){case"{":return g.braceNest>=1&&d(_1.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),C.next(),k=f(g,2,"{"),y(C),g.braceNest++,k;case"}":return g.braceNest>0&&g.currentType===2&&d(_1.EMPTY_PLACEHOLDER,s(),0),C.next(),k=f(g,3,"}"),g.braceNest--,g.braceNest>0&&y(C),g.inLinked&&g.braceNest===0&&(g.inLinked=!1),k;case"@":return g.braceNest>0&&d(_1.UNTERMINATED_CLOSING_BRACE,s(),0),k=C1(C,g)||h(g),g.braceNest=0,k;default:let T=!0,N=!0,$=!0;if(A(C))return g.braceNest>0&&d(_1.UNTERMINATED_CLOSING_BRACE,s(),0),k=f(g,1,J(C)),g.braceNest=0,g.inLinked=!1,k;if(g.braceNest>0&&(g.currentType===5||g.currentType===6||g.currentType===7))return d(_1.UNTERMINATED_CLOSING_BRACE,s(),0),g.braceNest=0,a1(C,g);if(T=M(C,g))return k=f(g,5,z1(C)),y(C),k;if(N=v(C,g))return k=f(g,6,U1(C)),y(C),k;if($=_(C,g))return k=f(g,7,N1(C)),y(C),k;if(!T&&!N&&!$)return k=f(g,13,P(C)),d(_1.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,k.value),y(C),k;break}return k}function C1(C,g){const{currentType:k}=g;let w=null;const T=C.currentChar();switch((k===8||k===9||k===12||k===10)&&(T===fe||T===rt)&&d(_1.INVALID_LINKED_FORMAT,s(),0),T){case"@":return C.next(),w=f(g,8,"@"),g.inLinked=!0,w;case".":return y(C),C.next(),f(g,9,".");case":":return y(C),C.next(),f(g,10,":");default:return A(C)?(w=f(g,1,J(C)),g.braceNest=0,g.inLinked=!1,w):E(C,g)||H(C,g)?(y(C),C1(C,g)):S(C,g)?(y(C),f(g,12,q(C))):F(C,g)?(y(C),T==="{"?h1(C,g)||w:f(g,11,V(C))):(k===8&&d(_1.INVALID_LINKED_FORMAT,s(),0),g.braceNest=0,g.inLinked=!1,a1(C,g))}}function a1(C,g){let k={type:14};if(g.braceNest>0)return h1(C,g)||h(g);if(g.inLinked)return C1(C,g)||h(g);switch(C.currentChar()){case"{":return h1(C,g)||h(g);case"}":return d(_1.UNBALANCED_CLOSING_BRACE,s(),0),C.next(),f(g,3,"}");case"@":return C1(C,g)||h(g);default:if(A(C))return k=f(g,1,J(C)),g.braceNest=0,g.inLinked=!1,k;const{isModulo:T,hasSpace:N}=I(C);if(T)return N?f(g,0,P1(C)):f(g,4,c1(C));if(R(C))return f(g,0,P1(C));break}return k}function s1(){const{currentType:C,offset:g,startLoc:k,endLoc:w}=l;return l.lastType=C,l.lastOffset=g,l.lastStartLoc=k,l.lastEndLoc=w,l.offset=i(),l.startLoc=s(),r.currentChar()===yt?f(l,14):a1(r,l)}return{nextToken:s1,currentOffset:i,currentPosition:s,context:c}}const rb="parser",ib=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function sb(e,t,n){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const r=parseInt(t||n,16);return r<=55295||r>=57344?String.fromCodePoint(r):"\uFFFD"}}}function ab(e={}){const t=e.location!==!1,{onError:n}=e;function r(p,L,M,v,..._){const E=p.currentPosition();if(E.offset+=v,E.column+=v,n){const S=S5(M,E),H=e6(L,S,{domain:rb,args:_});n(H)}}function i(p,L,M){const v={type:p,start:L,end:L};return t&&(v.loc={start:M,end:M}),v}function s(p,L,M,v){p.end=L,v&&(p.type=v),t&&p.loc&&(p.loc.end=M)}function a(p,L){const M=p.context(),v=i(3,M.offset,M.startLoc);return v.value=L,s(v,p.currentOffset(),p.currentPosition()),v}function o(p,L){const M=p.context(),{lastOffset:v,lastStartLoc:_}=M,E=i(5,v,_);return E.index=parseInt(L,10),p.nextToken(),s(E,p.currentOffset(),p.currentPosition()),E}function l(p,L){const M=p.context(),{lastOffset:v,lastStartLoc:_}=M,E=i(4,v,_);return E.key=L,p.nextToken(),s(E,p.currentOffset(),p.currentPosition()),E}function c(p,L){const M=p.context(),{lastOffset:v,lastStartLoc:_}=M,E=i(9,v,_);return E.value=L.replace(ib,sb),p.nextToken(),s(E,p.currentOffset(),p.currentPosition()),E}function u(p){const L=p.nextToken(),M=p.context(),{lastOffset:v,lastStartLoc:_}=M,E=i(8,v,_);return L.type!==12?(r(p,_1.UNEXPECTED_EMPTY_LINKED_MODIFIER,M.lastStartLoc,0),E.value="",s(E,v,_),{nextConsumeToken:L,node:E}):(L.value==null&&r(p,_1.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Ze(L)),E.value=L.value||"",s(E,p.currentOffset(),p.currentPosition()),{node:E})}function d(p,L){const M=p.context(),v=i(7,M.offset,M.startLoc);return v.value=L,s(v,p.currentOffset(),p.currentPosition()),v}function f(p){const L=p.context(),M=i(6,L.offset,L.startLoc);let v=p.nextToken();if(v.type===9){const _=u(p);M.modifier=_.node,v=_.nextConsumeToken||p.nextToken()}switch(v.type!==10&&r(p,_1.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Ze(v)),v=p.nextToken(),v.type===2&&(v=p.nextToken()),v.type){case 11:v.value==null&&r(p,_1.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Ze(v)),M.key=d(p,v.value||"");break;case 5:v.value==null&&r(p,_1.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Ze(v)),M.key=l(p,v.value||"");break;case 6:v.value==null&&r(p,_1.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Ze(v)),M.key=o(p,v.value||"");break;case 7:v.value==null&&r(p,_1.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Ze(v)),M.key=c(p,v.value||"");break;default:r(p,_1.UNEXPECTED_EMPTY_LINKED_KEY,L.lastStartLoc,0);const _=p.context(),E=i(7,_.offset,_.startLoc);return E.value="",s(E,_.offset,_.startLoc),M.key=E,s(M,_.offset,_.startLoc),{nextConsumeToken:v,node:M}}return s(M,p.currentOffset(),p.currentPosition()),{node:M}}function h(p){const L=p.context(),M=L.currentType===1?p.currentOffset():L.offset,v=L.currentType===1?L.endLoc:L.startLoc,_=i(2,M,v);_.items=[];let E=null;do{const F=E||p.nextToken();switch(E=null,F.type){case 0:F.value==null&&r(p,_1.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Ze(F)),_.items.push(a(p,F.value||""));break;case 6:F.value==null&&r(p,_1.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Ze(F)),_.items.push(o(p,F.value||""));break;case 5:F.value==null&&r(p,_1.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Ze(F)),_.items.push(l(p,F.value||""));break;case 7:F.value==null&&r(p,_1.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Ze(F)),_.items.push(c(p,F.value||""));break;case 8:const A=f(p);_.items.push(A.node),E=A.nextConsumeToken||null;break}}while(L.currentType!==14&&L.currentType!==1);const S=L.currentType===1?L.lastOffset:p.currentOffset(),H=L.currentType===1?L.lastEndLoc:p.currentPosition();return s(_,S,H),_}function m(p,L,M,v){const _=p.context();let E=v.items.length===0;const S=i(1,L,M);S.cases=[],S.cases.push(v);do{const H=h(p);E||(E=H.items.length===0),S.cases.push(H)}while(_.currentType!==14);return E&&r(p,_1.MUST_HAVE_MESSAGES_IN_PLURAL,M,0),s(S,p.currentOffset(),p.currentPosition()),S}function b(p){const L=p.context(),{offset:M,startLoc:v}=L,_=h(p);return L.currentType===14?_:m(p,M,v,_)}function y(p){const L=nb(p,ee({},e)),M=L.context(),v=i(0,M.offset,M.startLoc);return t&&v.loc&&(v.loc.source=p),v.body=b(L),M.currentType!==14&&r(L,_1.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,p[M.offset]||""),s(v,L.currentOffset(),L.currentPosition()),v}return{parse:y}}function Ze(e){if(e.type===14)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"\u2026":t}function ob(e,t={}){const n={ast:e,helpers:new Set};return{context:()=>n,helper:s=>(n.helpers.add(s),s)}}function h9(e,t){for(let n=0;n<e.length;n++)O7(e[n],t)}function O7(e,t){switch(e.type){case 1:h9(e.cases,t),t.helper("plural");break;case 2:h9(e.items,t);break;case 6:O7(e.key,t),t.helper("linked"),t.helper("type");break;case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named");break}}function lb(e,t={}){const n=ob(e);n.helper("normalize"),e.body&&O7(e.body,n);const r=n.context();e.helpers=Array.from(r.helpers)}function cb(e,t){const{sourceMap:n,filename:r,breakLineCode:i,needIndent:s}=t,a={source:e.loc.source,filename:r,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:s,indentLevel:0},o=()=>a;function l(b,y){a.code+=b}function c(b,y=!0){const p=y?i:"";l(s?p+"  ".repeat(b):p)}function u(b=!0){const y=++a.indentLevel;b&&c(y)}function d(b=!0){const y=--a.indentLevel;b&&c(y)}function f(){c(a.indentLevel)}return{context:o,push:l,indent:u,deindent:d,newline:f,helper:b=>`_${b}`,needIndent:()=>a.needIndent}}function ub(e,t){const{helper:n}=e;e.push(`${n("linked")}(`),H0(e,t.key),t.modifier?(e.push(", "),H0(e,t.modifier),e.push(", _type")):e.push(", undefined, _type"),e.push(")")}function fb(e,t){const{helper:n,needIndent:r}=e;e.push(`${n("normalize")}([`),e.indent(r());const i=t.items.length;for(let s=0;s<i&&(H0(e,t.items[s]),s!==i-1);s++)e.push(", ");e.deindent(r()),e.push("])")}function db(e,t){const{helper:n,needIndent:r}=e;if(t.cases.length>1){e.push(`${n("plural")}([`),e.indent(r());const i=t.cases.length;for(let s=0;s<i&&(H0(e,t.cases[s]),s!==i-1);s++)e.push(", ");e.deindent(r()),e.push("])")}}function hb(e,t){t.body?H0(e,t.body):e.push("null")}function H0(e,t){const{helper:n}=e;switch(t.type){case 0:hb(e,t);break;case 1:db(e,t);break;case 2:fb(e,t);break;case 6:ub(e,t);break;case 8:e.push(JSON.stringify(t.value),t);break;case 7:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${n("interpolate")}(${n("list")}(${t.index}))`,t);break;case 4:e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`,t);break;case 9:e.push(JSON.stringify(t.value),t);break;case 3:e.push(JSON.stringify(t.value),t);break}}const Cb=(e,t={})=>{const n=z(t.mode)?t.mode:"normal",r=z(t.filename)?t.filename:"message.intl",i=!!t.sourceMap,s=t.breakLineCode!=null?t.breakLineCode:n==="arrow"?";":`
`,a=t.needIndent?t.needIndent:n!=="arrow",o=e.helpers||[],l=cb(e,{mode:n,filename:r,sourceMap:i,breakLineCode:s,needIndent:a});l.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(a),o.length>0&&(l.push(`const { ${o.map(d=>`${d}: _${d}`).join(", ")} } = ctx`),l.newline()),l.push("return "),H0(l,e),l.deindent(a),l.push("}");const{code:c,map:u}=l.context();return{ast:e,code:c,map:u?u.toJSON():void 0}};function gb(e,t={}){const n=ee({},t),i=ab(n).parse(e);return lb(i,n),Cb(i,n)}/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Fi={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Nt=[];Nt[0]={w:[0],i:[3,0],["["]:[4],o:[7]};Nt[1]={w:[1],["."]:[2],["["]:[4],o:[7]};Nt[2]={w:[2],i:[3,0],[0]:[3,0]};Nt[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};Nt[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};Nt[5]={["'"]:[4,0],o:8,l:[5,0]};Nt[6]={['"']:[4,0],o:8,l:[6,0]};const mb=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function pb(e){return mb.test(e)}function bb(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t===n&&(t===34||t===39)?e.slice(1,-1):e}function yb(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function _b(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:pb(t)?bb(t):"*"+t}function Lb(e){const t=[];let n=-1,r=0,i=0,s,a,o,l,c,u,d;const f=[];f[0]=()=>{a===void 0?a=o:a+=o},f[1]=()=>{a!==void 0&&(t.push(a),a=void 0)},f[2]=()=>{f[0](),i++},f[3]=()=>{if(i>0)i--,r=4,f[0]();else{if(i=0,a===void 0||(a=_b(a),a===!1))return!1;f[1]()}};function h(){const m=e[n+1];if(r===5&&m==="'"||r===6&&m==='"')return n++,o="\\"+m,f[0](),!0}for(;r!==null;)if(n++,s=e[n],!(s==="\\"&&h())){if(l=yb(s),d=Nt[r],c=d[l]||d.l||8,c===8||(r=c[0],c[1]!==void 0&&(u=f[c[1]],u&&(o=s,u()===!1))))return;if(r===7)return t}}const C9=new Map;function kb(e,t){return R1(e)?e[t]:null}function vb(e,t){if(!R1(e))return null;let n=C9.get(t);if(n||(n=Lb(t),n&&C9.set(t,n)),!n)return null;const r=n.length;let i=e,s=0;for(;s<r;){const a=i[n[s]];if(a===void 0)return null;i=a,s++}return i}const Mb=e=>e,xb=e=>"",Sb="text",wb=e=>e.length===0?"":e.join(""),Eb=qp;function g9(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function Fb(e){const t=G1(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(G1(e.named.count)||G1(e.named.n))?G1(e.named.count)?e.named.count:G1(e.named.n)?e.named.n:t:t}function Tb(e,t){t.count||(t.count=e),t.n||(t.n=e)}function Ob(e={}){const t=e.locale,n=Fb(e),r=R1(e.pluralRules)&&z(t)&&$1(e.pluralRules[t])?e.pluralRules[t]:g9,i=R1(e.pluralRules)&&z(t)&&$1(e.pluralRules[t])?g9:void 0,s=p=>p[r(n,p.length,i)],a=e.list||[],o=p=>a[p],l=e.named||{};G1(e.pluralIndex)&&Tb(n,l);const c=p=>l[p];function u(p){const L=$1(e.messages)?e.messages(p):R1(e.messages)?e.messages[p]:!1;return L||(e.parent?e.parent.message(p):xb)}const d=p=>e.modifiers?e.modifiers[p]:Mb,f=o1(e.processor)&&$1(e.processor.normalize)?e.processor.normalize:wb,h=o1(e.processor)&&$1(e.processor.interpolate)?e.processor.interpolate:Eb,m=o1(e.processor)&&z(e.processor.type)?e.processor.type:Sb,y={list:o,named:c,plural:s,linked:(p,...L)=>{const[M,v]=L;let _="text",E="";L.length===1?R1(M)?(E=M.modifier||E,_=M.type||_):z(M)&&(E=M||E):L.length===2&&(z(M)&&(E=M||E),z(v)&&(_=v||_));let S=u(p)(y);return _==="vnode"&&A1(S)&&E&&(S=S[0]),E?d(E)(S,_):S},message:u,type:m,interpolate:h,normalize:f};return y}let k2=null;function Ab(e){k2=e}function Rb(e,t,n){k2&&k2.emit(Fi.I18nInit,{timestamp:Date.now(),i18n:e,version:t,meta:n})}const Hb=Pb(Fi.FunctionTranslate);function Pb(e){return t=>k2&&k2.emit(e,t)}const Nb={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7};function Ib(e,t,n){return[...new Set([n,...A1(t)?t:R1(t)?Object.keys(t):z(t)?[t]:[n]])]}function Ti(e,t,n){const r=z(n)?n:w2,i=e;i.__localeChainCache||(i.__localeChainCache=new Map);let s=i.__localeChainCache.get(r);if(!s){s=[];let a=[n];for(;A1(a);)a=m9(s,a,t);const o=A1(t)||!o1(t)?t:t.default?t.default:null;a=z(o)?[o]:o,A1(a)&&m9(s,a,!1),i.__localeChainCache.set(r,s)}return s}function m9(e,t,n){let r=!0;for(let i=0;i<t.length&&g1(r);i++){const s=t[i];z(s)&&(r=Db(e,t[i],n))}return r}function Db(e,t,n){let r;const i=t.split("-");do{const s=i.join("-");r=Bb(e,s,n),i.splice(-1,1)}while(i.length&&r===!0);return r}function Bb(e,t,n){let r=!1;if(!e.includes(t)&&(r=!0,t)){r=t[t.length-1]!=="!";const i=t.replace(/!/g,"");e.push(i),(A1(n)||o1(n))&&n[i]&&(r=n[i])}return r}const Vb="9.2.2",t6=-1,w2="en-US",p9="",b9=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function Wb(){return{upper:(e,t)=>t==="text"&&z(e)?e.toUpperCase():t==="vnode"&&R1(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&z(e)?e.toLowerCase():t==="vnode"&&R1(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&z(e)?b9(e):t==="vnode"&&R1(e)&&"__v_isVNode"in e?b9(e.children):e}}let Oi;function $b(e){Oi=e}let Ai;function jb(e){Ai=e}let Ri;function Ub(e){Ri=e}let Hi=null;const y9=e=>{Hi=e},Zb=()=>Hi;let Pi=null;const _9=e=>{Pi=e},zb=()=>Pi;let L9=0;function Gb(e={}){const t=z(e.version)?e.version:Vb,n=z(e.locale)?e.locale:w2,r=A1(e.fallbackLocale)||o1(e.fallbackLocale)||z(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:n,i=o1(e.messages)?e.messages:{[n]:{}},s=o1(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},a=o1(e.numberFormats)?e.numberFormats:{[n]:{}},o=ee({},e.modifiers||{},Wb()),l=e.pluralRules||{},c=$1(e.missing)?e.missing:null,u=g1(e.missingWarn)||Rt(e.missingWarn)?e.missingWarn:!0,d=g1(e.fallbackWarn)||Rt(e.fallbackWarn)?e.fallbackWarn:!0,f=!!e.fallbackFormat,h=!!e.unresolving,m=$1(e.postTranslation)?e.postTranslation:null,b=o1(e.processor)?e.processor:null,y=g1(e.warnHtmlMessage)?e.warnHtmlMessage:!0,p=!!e.escapeParameter,L=$1(e.messageCompiler)?e.messageCompiler:Oi,M=$1(e.messageResolver)?e.messageResolver:Ai||kb,v=$1(e.localeFallbacker)?e.localeFallbacker:Ri||Ib,_=R1(e.fallbackContext)?e.fallbackContext:void 0,E=$1(e.onWarn)?e.onWarn:zp,S=e,H=R1(S.__datetimeFormatters)?S.__datetimeFormatters:new Map,F=R1(S.__numberFormatters)?S.__numberFormatters:new Map,A=R1(S.__meta)?S.__meta:{};L9++;const I={version:t,cid:L9,locale:n,fallbackLocale:r,messages:i,modifiers:o,pluralRules:l,missing:c,missingWarn:u,fallbackWarn:d,fallbackFormat:f,unresolving:h,postTranslation:m,processor:b,warnHtmlMessage:y,escapeParameter:p,messageCompiler:L,messageResolver:M,localeFallbacker:v,fallbackContext:_,onWarn:E,__meta:A};return I.datetimeFormats=s,I.numberFormats=a,I.__datetimeFormatters=H,I.__numberFormatters=F,__INTLIFY_PROD_DEVTOOLS__&&Rb(I,t,A),I}function A7(e,t,n,r,i){const{missing:s,onWarn:a}=e;if(s!==null){const o=s(e,n,t,i);return z(o)?o:t}else return t}function q0(e,t,n){const r=e;r.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}const qb=e=>e;let k9=Object.create(null);function Yb(e,t={}){{const r=(t.onCacheKey||qb)(e),i=k9[r];if(i)return i;let s=!1;const a=t.onError||Yp;t.onError=c=>{s=!0,a(c)};const{code:o}=gb(e,t),l=new Function(`return ${o}`)();return s?l:k9[r]=l}}let Ni=_1.__EXTEND_POINT__;const V6=()=>++Ni,_0={INVALID_ARGUMENT:Ni,INVALID_DATE_ARGUMENT:V6(),INVALID_ISO_DATE_ARGUMENT:V6(),__EXTEND_POINT__:V6()};function L0(e){return e6(e,null,void 0)}const v9=()=>"",Ye=e=>$1(e);function M9(e,...t){const{fallbackFormat:n,postTranslation:r,unresolving:i,messageCompiler:s,fallbackLocale:a,messages:o}=e,[l,c]=w5(...t),u=g1(c.missingWarn)?c.missingWarn:e.missingWarn,d=g1(c.fallbackWarn)?c.fallbackWarn:e.fallbackWarn,f=g1(c.escapeParameter)?c.escapeParameter:e.escapeParameter,h=!!c.resolvedMessage,m=z(c.default)||g1(c.default)?g1(c.default)?s?l:()=>l:c.default:n?s?l:()=>l:"",b=n||m!=="",y=z(c.locale)?c.locale:e.locale;f&&Kb(c);let[p,L,M]=h?[l,y,o[y]||{}]:Ii(e,l,y,a,d,u),v=p,_=l;if(!h&&!(z(v)||Ye(v))&&b&&(v=m,_=v),!h&&(!(z(v)||Ye(v))||!z(L)))return i?t6:l;let E=!1;const S=()=>{E=!0},H=Ye(v)?v:Di(e,l,L,v,_,S);if(E)return v;const F=Qb(e,L,M,c),A=Ob(F),I=Xb(e,H,A),R=r?r(I,l):I;if(__INTLIFY_PROD_DEVTOOLS__){const j={timestamp:Date.now(),key:z(l)?l:Ye(v)?v.key:"",locale:L||(Ye(v)?v.locale:""),format:z(v)?v:Ye(v)?v.source:"",message:R};j.meta=ee({},e.__meta,Zb()||{}),Hb(j)}return R}function Kb(e){A1(e.list)?e.list=e.list.map(t=>z(t)?f9(t):t):R1(e.named)&&Object.keys(e.named).forEach(t=>{z(e.named[t])&&(e.named[t]=f9(e.named[t]))})}function Ii(e,t,n,r,i,s){const{messages:a,onWarn:o,messageResolver:l,localeFallbacker:c}=e,u=c(e,r,n);let d={},f,h=null;const m="translate";for(let b=0;b<u.length&&(f=u[b],d=a[f]||{},(h=l(d,t))===null&&(h=d[t]),!(z(h)||$1(h)));b++){const y=A7(e,t,f,s,m);y!==t&&(h=y)}return[h,f,d]}function Di(e,t,n,r,i,s){const{messageCompiler:a,warnHtmlMessage:o}=e;if(Ye(r)){const c=r;return c.locale=c.locale||n,c.key=c.key||t,c}if(a==null){const c=()=>r;return c.locale=n,c.key=t,c}const l=a(r,Jb(e,n,i,r,o,s));return l.locale=n,l.key=t,l.source=r,l}function Xb(e,t,n){return t(n)}function w5(...e){const[t,n,r]=e,i={};if(!z(t)&&!G1(t)&&!Ye(t))throw L0(_0.INVALID_ARGUMENT);const s=G1(t)?String(t):(Ye(t),t);return G1(n)?i.plural=n:z(n)?i.default=n:o1(n)&&!Q3(n)?i.named=n:A1(n)&&(i.list=n),G1(r)?i.plural=r:z(r)?i.default=r:o1(r)&&ee(i,r),[s,i]}function Jb(e,t,n,r,i,s){return{warnHtmlMessage:i,onError:a=>{throw s&&s(a),a},onCacheKey:a=>jp(t,n,a)}}function Qb(e,t,n,r){const{modifiers:i,pluralRules:s,messageResolver:a,fallbackLocale:o,fallbackWarn:l,missingWarn:c,fallbackContext:u}=e,f={locale:t,modifiers:i,pluralRules:s,messages:h=>{let m=a(n,h);if(m==null&&u){const[,,b]=Ii(u,h,t,o,l,c);m=a(b,h)}if(z(m)){let b=!1;const p=Di(e,h,t,m,h,()=>{b=!0});return b?v9:p}else return Ye(m)?m:v9}};return e.processor&&(f.processor=e.processor),r.list&&(f.list=r.list),r.named&&(f.named=r.named),G1(r.plural)&&(f.pluralIndex=r.plural),f}function x9(e,...t){const{datetimeFormats:n,unresolving:r,fallbackLocale:i,onWarn:s,localeFallbacker:a}=e,{__datetimeFormatters:o}=e,[l,c,u,d]=E5(...t),f=g1(u.missingWarn)?u.missingWarn:e.missingWarn;g1(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn;const h=!!u.part,m=z(u.locale)?u.locale:e.locale,b=a(e,i,m);if(!z(l)||l==="")return new Intl.DateTimeFormat(m,d).format(c);let y={},p,L=null;const M="datetime format";for(let E=0;E<b.length&&(p=b[E],y=n[p]||{},L=y[l],!o1(L));E++)A7(e,l,p,f,M);if(!o1(L)||!z(p))return r?t6:l;let v=`${p}__${l}`;Q3(d)||(v=`${v}__${JSON.stringify(d)}`);let _=o.get(v);return _||(_=new Intl.DateTimeFormat(p,ee({},L,d)),o.set(v,_)),h?_.formatToParts(c):_.format(c)}const Bi=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function E5(...e){const[t,n,r,i]=e,s={};let a={},o;if(z(t)){const l=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw L0(_0.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();o=new Date(c);try{o.toISOString()}catch{throw L0(_0.INVALID_ISO_DATE_ARGUMENT)}}else if(Zp(t)){if(isNaN(t.getTime()))throw L0(_0.INVALID_DATE_ARGUMENT);o=t}else if(G1(t))o=t;else throw L0(_0.INVALID_ARGUMENT);return z(n)?s.key=n:o1(n)&&Object.keys(n).forEach(l=>{Bi.includes(l)?a[l]=n[l]:s[l]=n[l]}),z(r)?s.locale=r:o1(r)&&(a=r),o1(i)&&(a=i),[s.key||"",o,s,a]}function S9(e,t,n){const r=e;for(const i in n){const s=`${t}__${i}`;!r.__datetimeFormatters.has(s)||r.__datetimeFormatters.delete(s)}}function w9(e,...t){const{numberFormats:n,unresolving:r,fallbackLocale:i,onWarn:s,localeFallbacker:a}=e,{__numberFormatters:o}=e,[l,c,u,d]=F5(...t),f=g1(u.missingWarn)?u.missingWarn:e.missingWarn;g1(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn;const h=!!u.part,m=z(u.locale)?u.locale:e.locale,b=a(e,i,m);if(!z(l)||l==="")return new Intl.NumberFormat(m,d).format(c);let y={},p,L=null;const M="number format";for(let E=0;E<b.length&&(p=b[E],y=n[p]||{},L=y[l],!o1(L));E++)A7(e,l,p,f,M);if(!o1(L)||!z(p))return r?t6:l;let v=`${p}__${l}`;Q3(d)||(v=`${v}__${JSON.stringify(d)}`);let _=o.get(v);return _||(_=new Intl.NumberFormat(p,ee({},L,d)),o.set(v,_)),h?_.formatToParts(c):_.format(c)}const Vi=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function F5(...e){const[t,n,r,i]=e,s={};let a={};if(!G1(t))throw L0(_0.INVALID_ARGUMENT);const o=t;return z(n)?s.key=n:o1(n)&&Object.keys(n).forEach(l=>{Vi.includes(l)?a[l]=n[l]:s[l]=n[l]}),z(r)?s.locale=r:o1(r)&&(a=r),o1(i)&&(a=i),[s.key||"",o,s,a]}function E9(e,t,n){const r=e;for(const i in n){const s=`${t}__${i}`;!r.__numberFormatters.has(s)||r.__numberFormatters.delete(s)}}typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(o2().__INTLIFY_PROD_DEVTOOLS__=!1);/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const ey="9.2.2";function ty(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(o2().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(o2().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(o2().__INTLIFY_PROD_DEVTOOLS__=!1)}Nb.__EXTEND_POINT__;let Wi=_1.__EXTEND_POINT__;const he=()=>++Wi,Z1={UNEXPECTED_RETURN_TYPE:Wi,INVALID_ARGUMENT:he(),MUST_BE_CALL_SETUP_TOP:he(),NOT_INSLALLED:he(),NOT_AVAILABLE_IN_LEGACY_MODE:he(),REQUIRED_VALUE:he(),INVALID_VALUE:he(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:he(),NOT_INSLALLED_WITH_PROVIDE:he(),UNEXPECTED_ERROR:he(),NOT_COMPATIBLE_LEGACY_VUE_I18N:he(),BRIDGE_SUPPORT_VUE_2_ONLY:he(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:he(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:he(),__EXTEND_POINT__:he()};function q1(e,...t){return e6(e,null,void 0)}const T5=Pt("__transrateVNode"),O5=Pt("__datetimeParts"),A5=Pt("__numberParts"),$i=Pt("__setPluralRules");Pt("__intlifyMeta");const ji=Pt("__injectWithOption");function R5(e){if(!R1(e))return e;for(const t in e)if(!!F7(e,t))if(!t.includes("."))R1(e[t])&&R5(e[t]);else{const n=t.split("."),r=n.length-1;let i=e;for(let s=0;s<r;s++)n[s]in i||(i[n[s]]={}),i=i[n[s]];i[n[r]]=e[t],delete e[t],R1(i[n[r]])&&R5(i[n[r]])}return e}function n6(e,t){const{messages:n,__i18n:r,messageResolver:i,flatJson:s}=t,a=o1(n)?n:A1(r)?{}:{[e]:{}};if(A1(r)&&r.forEach(o=>{if("locale"in o&&"resource"in o){const{locale:l,resource:c}=o;l?(a[l]=a[l]||{},l2(c,a[l])):l2(c,a)}else z(o)&&l2(JSON.parse(o),a)}),i==null&&s)for(const o in a)F7(a,o)&&R5(a[o]);return a}const Z2=e=>!R1(e)||A1(e);function l2(e,t){if(Z2(e)||Z2(t))throw q1(Z1.INVALID_VALUE);for(const n in e)F7(e,n)&&(Z2(e[n])||Z2(t[n])?t[n]=e[n]:l2(e[n],t[n]))}function Ui(e){return e.type}function Zi(e,t,n){let r=R1(t.messages)?t.messages:{};"__i18nGlobal"in n&&(r=n6(e.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const i=Object.keys(r);i.length&&i.forEach(s=>{e.mergeLocaleMessage(s,r[s])});{if(R1(t.datetimeFormats)){const s=Object.keys(t.datetimeFormats);s.length&&s.forEach(a=>{e.mergeDateTimeFormat(a,t.datetimeFormats[a])})}if(R1(t.numberFormats)){const s=Object.keys(t.numberFormats);s.length&&s.forEach(a=>{e.mergeNumberFormat(a,t.numberFormats[a])})}}}function F9(e){return n1(D3,null,e,0)}const T9="__INTLIFY_META__";let O9=0;function A9(e){return(t,n,r,i)=>e(n,r,ft()||void 0,i)}const ny=()=>{const e=ft();let t=null;return e&&(t=Ui(e)[T9])?{[T9]:t}:null};function R7(e={},t){const{__root:n}=e,r=n===void 0;let i=g1(e.inheritLocale)?e.inheritLocale:!0;const s=H1(n&&i?n.locale.value:z(e.locale)?e.locale:w2),a=H1(n&&i?n.fallbackLocale.value:z(e.fallbackLocale)||A1(e.fallbackLocale)||o1(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:s.value),o=H1(n6(s.value,e)),l=H1(o1(e.datetimeFormats)?e.datetimeFormats:{[s.value]:{}}),c=H1(o1(e.numberFormats)?e.numberFormats:{[s.value]:{}});let u=n?n.missingWarn:g1(e.missingWarn)||Rt(e.missingWarn)?e.missingWarn:!0,d=n?n.fallbackWarn:g1(e.fallbackWarn)||Rt(e.fallbackWarn)?e.fallbackWarn:!0,f=n?n.fallbackRoot:g1(e.fallbackRoot)?e.fallbackRoot:!0,h=!!e.fallbackFormat,m=$1(e.missing)?e.missing:null,b=$1(e.missing)?A9(e.missing):null,y=$1(e.postTranslation)?e.postTranslation:null,p=n?n.warnHtmlMessage:g1(e.warnHtmlMessage)?e.warnHtmlMessage:!0,L=!!e.escapeParameter;const M=n?n.modifiers:o1(e.modifiers)?e.modifiers:{};let v=e.pluralRules||n&&n.pluralRules,_;_=(()=>{r&&_9(null);const x={version:ey,locale:s.value,fallbackLocale:a.value,messages:o.value,modifiers:M,pluralRules:v,missing:b===null?void 0:b,missingWarn:u,fallbackWarn:d,fallbackFormat:h,unresolving:!0,postTranslation:y===null?void 0:y,warnHtmlMessage:p,escapeParameter:L,messageResolver:e.messageResolver,__meta:{framework:"vue"}};x.datetimeFormats=l.value,x.numberFormats=c.value,x.__datetimeFormatters=o1(_)?_.__datetimeFormatters:void 0,x.__numberFormatters=o1(_)?_.__numberFormatters:void 0;const O=Gb(x);return r&&_9(O),O})(),q0(_,s.value,a.value);function S(){return[s.value,a.value,o.value,l.value,c.value]}const H=e1({get:()=>s.value,set:x=>{s.value=x,_.locale=s.value}}),F=e1({get:()=>a.value,set:x=>{a.value=x,_.fallbackLocale=a.value,q0(_,s.value,x)}}),A=e1(()=>o.value),I=e1(()=>l.value),R=e1(()=>c.value);function j(){return $1(y)?y:null}function r1(x){y=x,_.postTranslation=x}function Q(){return m}function X(x){x!==null&&(b=A9(x)),m=x,_.missing=b}const Z=(x,O,G,Y,i1,d1)=>{S();let p1;if(__INTLIFY_PROD_DEVTOOLS__)try{y9(ny()),r||(_.fallbackContext=n?zb():void 0),p1=x(_)}finally{y9(null),r||(_.fallbackContext=void 0)}else p1=x(_);if(G1(p1)&&p1===t6){const[k1,S1]=O();return n&&f?Y(n):i1(k1)}else{if(d1(p1))return p1;throw q1(Z1.UNEXPECTED_RETURN_TYPE)}};function c1(...x){return Z(O=>Reflect.apply(M9,null,[O,...x]),()=>w5(...x),"translate",O=>Reflect.apply(O.t,O,[...x]),O=>O,O=>z(O))}function P1(...x){const[O,G,Y]=x;if(Y&&!R1(Y))throw q1(Z1.INVALID_ARGUMENT);return c1(O,G,ee({resolvedMessage:!0},Y||{}))}function z1(...x){return Z(O=>Reflect.apply(x9,null,[O,...x]),()=>E5(...x),"datetime format",O=>Reflect.apply(O.d,O,[...x]),()=>p9,O=>z(O))}function U1(...x){return Z(O=>Reflect.apply(w9,null,[O,...x]),()=>F5(...x),"number format",O=>Reflect.apply(O.n,O,[...x]),()=>p9,O=>z(O))}function N1(x){return x.map(O=>z(O)||G1(O)||g1(O)?F9(String(O)):O)}const ie={normalize:N1,interpolate:x=>x,type:"vnode"};function P(...x){return Z(O=>{let G;const Y=O;try{Y.processor=ie,G=Reflect.apply(M9,null,[Y,...x])}finally{Y.processor=null}return G},()=>w5(...x),"translate",O=>O[T5](...x),O=>[F9(O)],O=>A1(O))}function q(...x){return Z(O=>Reflect.apply(w9,null,[O,...x]),()=>F5(...x),"number format",O=>O[A5](...x),()=>[],O=>z(O)||A1(O))}function V(...x){return Z(O=>Reflect.apply(x9,null,[O,...x]),()=>E5(...x),"datetime format",O=>O[O5](...x),()=>[],O=>z(O)||A1(O))}function J(x){v=x,_.pluralRules=v}function h1(x,O){const G=z(O)?O:s.value,Y=s1(G);return _.messageResolver(Y,x)!==null}function C1(x){let O=null;const G=Ti(_,a.value,s.value);for(let Y=0;Y<G.length;Y++){const i1=o.value[G[Y]]||{},d1=_.messageResolver(i1,x);if(d1!=null){O=d1;break}}return O}function a1(x){const O=C1(x);return O!=null?O:n?n.tm(x)||{}:{}}function s1(x){return o.value[x]||{}}function C(x,O){o.value[x]=O,_.messages=o.value}function g(x,O){o.value[x]=o.value[x]||{},l2(O,o.value[x]),_.messages=o.value}function k(x){return l.value[x]||{}}function w(x,O){l.value[x]=O,_.datetimeFormats=l.value,S9(_,x,O)}function T(x,O){l.value[x]=ee(l.value[x]||{},O),_.datetimeFormats=l.value,S9(_,x,O)}function N(x){return c.value[x]||{}}function $(x,O){c.value[x]=O,_.numberFormats=c.value,E9(_,x,O)}function B(x,O){c.value[x]=ee(c.value[x]||{},O),_.numberFormats=c.value,E9(_,x,O)}O9++,n&&x5&&(ct(n.locale,x=>{i&&(s.value=x,_.locale=x,q0(_,s.value,a.value))}),ct(n.fallbackLocale,x=>{i&&(a.value=x,_.fallbackLocale=x,q0(_,s.value,a.value))}));const D={id:O9,locale:H,fallbackLocale:F,get inheritLocale(){return i},set inheritLocale(x){i=x,x&&n&&(s.value=n.locale.value,a.value=n.fallbackLocale.value,q0(_,s.value,a.value))},get availableLocales(){return Object.keys(o.value).sort()},messages:A,get modifiers(){return M},get pluralRules(){return v||{}},get isGlobal(){return r},get missingWarn(){return u},set missingWarn(x){u=x,_.missingWarn=u},get fallbackWarn(){return d},set fallbackWarn(x){d=x,_.fallbackWarn=d},get fallbackRoot(){return f},set fallbackRoot(x){f=x},get fallbackFormat(){return h},set fallbackFormat(x){h=x,_.fallbackFormat=h},get warnHtmlMessage(){return p},set warnHtmlMessage(x){p=x,_.warnHtmlMessage=x},get escapeParameter(){return L},set escapeParameter(x){L=x,_.escapeParameter=x},t:c1,getLocaleMessage:s1,setLocaleMessage:C,mergeLocaleMessage:g,getPostTranslationHandler:j,setPostTranslationHandler:r1,getMissingHandler:Q,setMissingHandler:X,[$i]:J};return D.datetimeFormats=I,D.numberFormats=R,D.rt=P1,D.te=h1,D.tm=a1,D.d=z1,D.n=U1,D.getDateTimeFormat=k,D.setDateTimeFormat=w,D.mergeDateTimeFormat=T,D.getNumberFormat=N,D.setNumberFormat=$,D.mergeNumberFormat=B,D[ji]=e.__injectWithOption,D[T5]=P,D[O5]=V,D[A5]=q,D}function ry(e){const t=z(e.locale)?e.locale:w2,n=z(e.fallbackLocale)||A1(e.fallbackLocale)||o1(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:t,r=$1(e.missing)?e.missing:void 0,i=g1(e.silentTranslationWarn)||Rt(e.silentTranslationWarn)?!e.silentTranslationWarn:!0,s=g1(e.silentFallbackWarn)||Rt(e.silentFallbackWarn)?!e.silentFallbackWarn:!0,a=g1(e.fallbackRoot)?e.fallbackRoot:!0,o=!!e.formatFallbackMessages,l=o1(e.modifiers)?e.modifiers:{},c=e.pluralizationRules,u=$1(e.postTranslation)?e.postTranslation:void 0,d=z(e.warnHtmlInMessage)?e.warnHtmlInMessage!=="off":!0,f=!!e.escapeParameterHtml,h=g1(e.sync)?e.sync:!0;let m=e.messages;if(o1(e.sharedMessages)){const _=e.sharedMessages;m=Object.keys(_).reduce((S,H)=>{const F=S[H]||(S[H]={});return ee(F,_[H]),S},m||{})}const{__i18n:b,__root:y,__injectWithOption:p}=e,L=e.datetimeFormats,M=e.numberFormats,v=e.flatJson;return{locale:t,fallbackLocale:n,messages:m,flatJson:v,datetimeFormats:L,numberFormats:M,missing:r,missingWarn:i,fallbackWarn:s,fallbackRoot:a,fallbackFormat:o,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:d,escapeParameter:f,messageResolver:e.messageResolver,inheritLocale:h,__i18n:b,__root:y,__injectWithOption:p}}function H5(e={},t){{const n=R7(ry(e)),r={id:n.id,get locale(){return n.locale.value},set locale(i){n.locale.value=i},get fallbackLocale(){return n.fallbackLocale.value},set fallbackLocale(i){n.fallbackLocale.value=i},get messages(){return n.messages.value},get datetimeFormats(){return n.datetimeFormats.value},get numberFormats(){return n.numberFormats.value},get availableLocales(){return n.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(i){},get missing(){return n.getMissingHandler()},set missing(i){n.setMissingHandler(i)},get silentTranslationWarn(){return g1(n.missingWarn)?!n.missingWarn:n.missingWarn},set silentTranslationWarn(i){n.missingWarn=g1(i)?!i:i},get silentFallbackWarn(){return g1(n.fallbackWarn)?!n.fallbackWarn:n.fallbackWarn},set silentFallbackWarn(i){n.fallbackWarn=g1(i)?!i:i},get modifiers(){return n.modifiers},get formatFallbackMessages(){return n.fallbackFormat},set formatFallbackMessages(i){n.fallbackFormat=i},get postTranslation(){return n.getPostTranslationHandler()},set postTranslation(i){n.setPostTranslationHandler(i)},get sync(){return n.inheritLocale},set sync(i){n.inheritLocale=i},get warnHtmlInMessage(){return n.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(i){n.warnHtmlMessage=i!=="off"},get escapeParameterHtml(){return n.escapeParameter},set escapeParameterHtml(i){n.escapeParameter=i},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(i){},get pluralizationRules(){return n.pluralRules||{}},__composer:n,t(...i){const[s,a,o]=i,l={};let c=null,u=null;if(!z(s))throw q1(Z1.INVALID_ARGUMENT);const d=s;return z(a)?l.locale=a:A1(a)?c=a:o1(a)&&(u=a),A1(o)?c=o:o1(o)&&(u=o),Reflect.apply(n.t,n,[d,c||u||{},l])},rt(...i){return Reflect.apply(n.rt,n,[...i])},tc(...i){const[s,a,o]=i,l={plural:1};let c=null,u=null;if(!z(s))throw q1(Z1.INVALID_ARGUMENT);const d=s;return z(a)?l.locale=a:G1(a)?l.plural=a:A1(a)?c=a:o1(a)&&(u=a),z(o)?l.locale=o:A1(o)?c=o:o1(o)&&(u=o),Reflect.apply(n.t,n,[d,c||u||{},l])},te(i,s){return n.te(i,s)},tm(i){return n.tm(i)},getLocaleMessage(i){return n.getLocaleMessage(i)},setLocaleMessage(i,s){n.setLocaleMessage(i,s)},mergeLocaleMessage(i,s){n.mergeLocaleMessage(i,s)},d(...i){return Reflect.apply(n.d,n,[...i])},getDateTimeFormat(i){return n.getDateTimeFormat(i)},setDateTimeFormat(i,s){n.setDateTimeFormat(i,s)},mergeDateTimeFormat(i,s){n.mergeDateTimeFormat(i,s)},n(...i){return Reflect.apply(n.n,n,[...i])},getNumberFormat(i){return n.getNumberFormat(i)},setNumberFormat(i,s){n.setNumberFormat(i,s)},mergeNumberFormat(i,s){n.mergeNumberFormat(i,s)},getChoiceIndex(i,s){return-1},__onComponentInstanceCreated(i){const{componentInstanceCreatedListener:s}=e;s&&s(i,r)}};return r}}const H7={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function iy({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((r,i)=>r=[...r,...A1(i.children)?i.children:[i]],[]):t.reduce((n,r)=>{const i=e[r];return i&&(n[r]=i()),n},{})}function zi(e){return W1}const R9={name:"i18n-t",props:ee({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>G1(e)||!isNaN(e)}},H7),setup(e,t){const{slots:n,attrs:r}=t,i=e.i18n||P7({useScope:e.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(d=>d!=="_"),a={};e.locale&&(a.locale=e.locale),e.plural!==void 0&&(a.plural=z(e.plural)?+e.plural:e.plural);const o=iy(t,s),l=i[T5](e.keypath,o,a),c=ee({},r),u=z(e.tag)||R1(e.tag)?e.tag:zi();return n0(u,c,l)}}};function sy(e){return A1(e)&&!z(e[0])}function Gi(e,t,n,r){const{slots:i,attrs:s}=t;return()=>{const a={part:!0};let o={};e.locale&&(a.locale=e.locale),z(e.format)?a.key=e.format:R1(e.format)&&(z(e.format.key)&&(a.key=e.format.key),o=Object.keys(e.format).reduce((f,h)=>n.includes(h)?ee({},f,{[h]:e.format[h]}):f,{}));const l=r(e.value,a,o);let c=[a.key];A1(l)?c=l.map((f,h)=>{const m=i[f.type],b=m?m({[f.type]:f.value,index:h,parts:l}):[f.value];return sy(b)&&(b[0].key=`${f.type}-${h}`),b}):z(l)&&(c=[l]);const u=ee({},s),d=z(e.tag)||R1(e.tag)?e.tag:zi();return n0(d,u,c)}}const H9={name:"i18n-n",props:ee({value:{type:Number,required:!0},format:{type:[String,Object]}},H7),setup(e,t){const n=e.i18n||P7({useScope:"parent",__useComponent:!0});return Gi(e,t,Vi,(...r)=>n[A5](...r))}},P9={name:"i18n-d",props:ee({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},H7),setup(e,t){const n=e.i18n||P7({useScope:"parent",__useComponent:!0});return Gi(e,t,Bi,(...r)=>n[O5](...r))}};function ay(e,t){const n=e;if(e.mode==="composition")return n.__getInstance(t)||e.global;{const r=n.__getInstance(t);return r!=null?r.__composer:e.global.__composer}}function oy(e){const t=a=>{const{instance:o,modifiers:l,value:c}=a;if(!o||!o.$)throw q1(Z1.UNEXPECTED_ERROR);const u=ay(e,o.$),d=N9(c);return[Reflect.apply(u.t,u,[...I9(d)]),u]};return{created:(a,o)=>{const[l,c]=t(o);x5&&e.global===c&&(a.__i18nWatcher=ct(c.locale,()=>{o.instance&&o.instance.$forceUpdate()})),a.__composer=c,a.textContent=l},unmounted:a=>{x5&&a.__i18nWatcher&&(a.__i18nWatcher(),a.__i18nWatcher=void 0,delete a.__i18nWatcher),a.__composer&&(a.__composer=void 0,delete a.__composer)},beforeUpdate:(a,{value:o})=>{if(a.__composer){const l=a.__composer,c=N9(o);a.textContent=Reflect.apply(l.t,l,[...I9(c)])}},getSSRProps:a=>{const[o]=t(a);return{textContent:o}}}}function N9(e){if(z(e))return{path:e};if(o1(e)){if(!("path"in e))throw q1(Z1.REQUIRED_VALUE,"path");return e}else throw q1(Z1.INVALID_VALUE)}function I9(e){const{path:t,locale:n,args:r,choice:i,plural:s}=e,a={},o=r||{};return z(n)&&(a.locale=n),G1(i)&&(a.plural=i),G1(s)&&(a.plural=s),[t,o,a]}function ly(e,t,...n){const r=o1(n[0])?n[0]:{},i=!!r.useI18nComponentName;(g1(r.globalInstall)?r.globalInstall:!0)&&(e.component(i?"i18n":R9.name,R9),e.component(H9.name,H9),e.component(P9.name,P9)),e.directive("t",oy(t))}function cy(e,t,n){return{beforeCreate(){const r=ft();if(!r)throw q1(Z1.UNEXPECTED_ERROR);const i=this.$options;if(i.i18n){const s=i.i18n;i.__i18n&&(s.__i18n=i.__i18n),s.__root=t,this===this.$root?this.$i18n=D9(e,s):(s.__injectWithOption=!0,this.$i18n=H5(s))}else i.__i18n?this===this.$root?this.$i18n=D9(e,i):this.$i18n=H5({__i18n:i.__i18n,__injectWithOption:!0,__root:t}):this.$i18n=e;i.__i18nGlobal&&Zi(t,i,i),e.__onComponentInstanceCreated(this.$i18n),n.__setInstance(r,this.$i18n),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$tc=(...s)=>this.$i18n.tc(...s),this.$te=(s,a)=>this.$i18n.te(s,a),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s)},mounted(){},unmounted(){const r=ft();if(!r)throw q1(Z1.UNEXPECTED_ERROR);delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,n.__deleteInstance(r),delete this.$i18n}}}function D9(e,t){e.locale=t.locale||e.locale,e.fallbackLocale=t.fallbackLocale||e.fallbackLocale,e.missing=t.missing||e.missing,e.silentTranslationWarn=t.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=t.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=t.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=t.postTranslation||e.postTranslation,e.warnHtmlInMessage=t.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=t.escapeParameterHtml||e.escapeParameterHtml,e.sync=t.sync||e.sync,e.__composer[$i](t.pluralizationRules||e.pluralizationRules);const n=n6(e.locale,{messages:t.messages,__i18n:t.__i18n});return Object.keys(n).forEach(r=>e.mergeLocaleMessage(r,n[r])),t.datetimeFormats&&Object.keys(t.datetimeFormats).forEach(r=>e.mergeDateTimeFormat(r,t.datetimeFormats[r])),t.numberFormats&&Object.keys(t.numberFormats).forEach(r=>e.mergeNumberFormat(r,t.numberFormats[r])),e}const uy=Pt("global-vue-i18n");function fy(e={},t){const n=__VUE_I18N_LEGACY_API__&&g1(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__,r=g1(e.globalInjection)?e.globalInjection:!0,i=__VUE_I18N_LEGACY_API__&&n?!!e.allowComposition:!0,s=new Map,[a,o]=dy(e,n),l=Pt("");function c(f){return s.get(f)||null}function u(f,h){s.set(f,h)}function d(f){s.delete(f)}{const f={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},get allowComposition(){return i},async install(h,...m){h.__VUE_I18N_SYMBOL__=l,h.provide(h.__VUE_I18N_SYMBOL__,f),!n&&r&&Ly(h,f.global),__VUE_I18N_FULL_INSTALL__&&ly(h,f,...m),__VUE_I18N_LEGACY_API__&&n&&h.mixin(cy(o,o.__composer,f));const b=h.unmount;h.unmount=()=>{f.dispose(),b()}},get global(){return o},dispose(){a.stop()},__instances:s,__getInstance:c,__setInstance:u,__deleteInstance:d};return f}}function P7(e={}){const t=ft();if(t==null)throw q1(Z1.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&t.appContext.app!=null&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw q1(Z1.NOT_INSLALLED);const n=hy(t),r=gy(n),i=Ui(t),s=Cy(e,i);if(__VUE_I18N_LEGACY_API__&&n.mode==="legacy"&&!e.__useComponent){if(!n.allowComposition)throw q1(Z1.NOT_AVAILABLE_IN_LEGACY_MODE);return by(t,s,r,e)}if(s==="global")return Zi(r,e,i),r;if(s==="parent"){let l=my(n,t,e.__useComponent);return l==null&&(l=r),l}const a=n;let o=a.__getInstance(t);if(o==null){const l=ee({},e);"__i18n"in i&&(l.__i18n=i.__i18n),r&&(l.__root=r),o=R7(l),py(a,t),a.__setInstance(t,o)}return o}function dy(e,t,n){const r=V5();{const i=__VUE_I18N_LEGACY_API__&&t?r.run(()=>H5(e)):r.run(()=>R7(e));if(i==null)throw q1(Z1.UNEXPECTED_ERROR);return[r,i]}}function hy(e){{const t=Ve(e.isCE?uy:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw q1(e.isCE?Z1.NOT_INSLALLED_WITH_PROVIDE:Z1.UNEXPECTED_ERROR);return t}}function Cy(e,t){return Q3(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function gy(e){return e.mode==="composition"?e.global:e.global.__composer}function my(e,t,n=!1){let r=null;const i=t.root;let s=t.parent;for(;s!=null;){const a=e;if(e.mode==="composition")r=a.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const o=a.__getInstance(s);o!=null&&(r=o.__composer,n&&r&&!r[ji]&&(r=null))}if(r!=null||i===s)break;s=s.parent}return r}function py(e,t,n){t0(()=>{},t),N3(()=>{e.__deleteInstance(t)},t)}function by(e,t,n,r={}){const i=t==="local",s=ln(null);if(i&&e.proxy&&!(e.proxy.$options.i18n||e.proxy.$options.__i18n))throw q1(Z1.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const a=g1(r.inheritLocale)?r.inheritLocale:!0,o=H1(i&&a?n.locale.value:z(r.locale)?r.locale:w2),l=H1(i&&a?n.fallbackLocale.value:z(r.fallbackLocale)||A1(r.fallbackLocale)||o1(r.fallbackLocale)||r.fallbackLocale===!1?r.fallbackLocale:o.value),c=H1(n6(o.value,r)),u=H1(o1(r.datetimeFormats)?r.datetimeFormats:{[o.value]:{}}),d=H1(o1(r.numberFormats)?r.numberFormats:{[o.value]:{}}),f=i?n.missingWarn:g1(r.missingWarn)||Rt(r.missingWarn)?r.missingWarn:!0,h=i?n.fallbackWarn:g1(r.fallbackWarn)||Rt(r.fallbackWarn)?r.fallbackWarn:!0,m=i?n.fallbackRoot:g1(r.fallbackRoot)?r.fallbackRoot:!0,b=!!r.fallbackFormat,y=$1(r.missing)?r.missing:null,p=$1(r.postTranslation)?r.postTranslation:null,L=i?n.warnHtmlMessage:g1(r.warnHtmlMessage)?r.warnHtmlMessage:!0,M=!!r.escapeParameter,v=i?n.modifiers:o1(r.modifiers)?r.modifiers:{},_=r.pluralRules||i&&n.pluralRules;function E(){return[o.value,l.value,c.value,u.value,d.value]}const S=e1({get:()=>s.value?s.value.locale.value:o.value,set:g=>{s.value&&(s.value.locale.value=g),o.value=g}}),H=e1({get:()=>s.value?s.value.fallbackLocale.value:l.value,set:g=>{s.value&&(s.value.fallbackLocale.value=g),l.value=g}}),F=e1(()=>s.value?s.value.messages.value:c.value),A=e1(()=>u.value),I=e1(()=>d.value);function R(){return s.value?s.value.getPostTranslationHandler():p}function j(g){s.value&&s.value.setPostTranslationHandler(g)}function r1(){return s.value?s.value.getMissingHandler():y}function Q(g){s.value&&s.value.setMissingHandler(g)}function X(g){return E(),g()}function Z(...g){return s.value?X(()=>Reflect.apply(s.value.t,null,[...g])):X(()=>"")}function c1(...g){return s.value?Reflect.apply(s.value.rt,null,[...g]):""}function P1(...g){return s.value?X(()=>Reflect.apply(s.value.d,null,[...g])):X(()=>"")}function z1(...g){return s.value?X(()=>Reflect.apply(s.value.n,null,[...g])):X(()=>"")}function U1(g){return s.value?s.value.tm(g):{}}function N1(g,k){return s.value?s.value.te(g,k):!1}function I1(g){return s.value?s.value.getLocaleMessage(g):{}}function ie(g,k){s.value&&(s.value.setLocaleMessage(g,k),c.value[g]=k)}function P(g,k){s.value&&s.value.mergeLocaleMessage(g,k)}function q(g){return s.value?s.value.getDateTimeFormat(g):{}}function V(g,k){s.value&&(s.value.setDateTimeFormat(g,k),u.value[g]=k)}function J(g,k){s.value&&s.value.mergeDateTimeFormat(g,k)}function h1(g){return s.value?s.value.getNumberFormat(g):{}}function C1(g,k){s.value&&(s.value.setNumberFormat(g,k),d.value[g]=k)}function a1(g,k){s.value&&s.value.mergeNumberFormat(g,k)}const s1={get id(){return s.value?s.value.id:-1},locale:S,fallbackLocale:H,messages:F,datetimeFormats:A,numberFormats:I,get inheritLocale(){return s.value?s.value.inheritLocale:a},set inheritLocale(g){s.value&&(s.value.inheritLocale=g)},get availableLocales(){return s.value?s.value.availableLocales:Object.keys(c.value)},get modifiers(){return s.value?s.value.modifiers:v},get pluralRules(){return s.value?s.value.pluralRules:_},get isGlobal(){return s.value?s.value.isGlobal:!1},get missingWarn(){return s.value?s.value.missingWarn:f},set missingWarn(g){s.value&&(s.value.missingWarn=g)},get fallbackWarn(){return s.value?s.value.fallbackWarn:h},set fallbackWarn(g){s.value&&(s.value.missingWarn=g)},get fallbackRoot(){return s.value?s.value.fallbackRoot:m},set fallbackRoot(g){s.value&&(s.value.fallbackRoot=g)},get fallbackFormat(){return s.value?s.value.fallbackFormat:b},set fallbackFormat(g){s.value&&(s.value.fallbackFormat=g)},get warnHtmlMessage(){return s.value?s.value.warnHtmlMessage:L},set warnHtmlMessage(g){s.value&&(s.value.warnHtmlMessage=g)},get escapeParameter(){return s.value?s.value.escapeParameter:M},set escapeParameter(g){s.value&&(s.value.escapeParameter=g)},t:Z,getPostTranslationHandler:R,setPostTranslationHandler:j,getMissingHandler:r1,setMissingHandler:Q,rt:c1,d:P1,n:z1,tm:U1,te:N1,getLocaleMessage:I1,setLocaleMessage:ie,mergeLocaleMessage:P,getDateTimeFormat:q,setDateTimeFormat:V,mergeDateTimeFormat:J,getNumberFormat:h1,setNumberFormat:C1,mergeNumberFormat:a1};function C(g){g.locale.value=o.value,g.fallbackLocale.value=l.value,Object.keys(c.value).forEach(k=>{g.mergeLocaleMessage(k,c.value[k])}),Object.keys(u.value).forEach(k=>{g.mergeDateTimeFormat(k,u.value[k])}),Object.keys(d.value).forEach(k=>{g.mergeNumberFormat(k,d.value[k])}),g.escapeParameter=M,g.fallbackFormat=b,g.fallbackRoot=m,g.fallbackWarn=h,g.missingWarn=f,g.warnHtmlMessage=L}return xn(()=>{if(e.proxy==null||e.proxy.$i18n==null)throw q1(Z1.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const g=s.value=e.proxy.$i18n.__composer;t==="global"?(o.value=g.locale.value,l.value=g.fallbackLocale.value,c.value=g.messages.value,u.value=g.datetimeFormats.value,d.value=g.numberFormats.value):i&&C(g)}),s1}const yy=["locale","fallbackLocale","availableLocales"],_y=["t","rt","d","n","tm"];function Ly(e,t){const n=Object.create(null);yy.forEach(r=>{const i=Object.getOwnPropertyDescriptor(t,r);if(!i)throw q1(Z1.UNEXPECTED_ERROR);const s=F1(i.value)?{get(){return i.value.value},set(a){i.value.value=a}}:{get(){return i.get&&i.get()}};Object.defineProperty(n,r,s)}),e.config.globalProperties.$i18n=n,_y.forEach(r=>{const i=Object.getOwnPropertyDescriptor(t,r);if(!i||!i.value)throw q1(Z1.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${r}`,i)})}$b(Yb);jb(vb);Ub(Ti);ty();if(__INTLIFY_PROD_DEVTOOLS__){const e=o2();e.__INTLIFY__=!0,Ab(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const ky="Hallo",vy={hello:ky},My="Salut",xy={hello:My},Sy="de-CH",wy={"de-CH":vy,"fr-CH":xy},r6=Yo();r6.use(tl);const Ey=Object.assign(wy),Fy=fy({locale:Sy,messages:Ey});vo(sc).use(wi).use(r6).use(Fy).mount("#app");const qi=Ht(r6),Yi=ht(r6);qi.fetch("clients");qi.fetch("history");var V9;Yi.setStyle((V9=localStorage[yr])!=null?V9:"basic");(!localStorage[h5]&&window.matchMedia("(prefers-color-scheme: dark)").matches||localStorage[h5]==="1")&&Yi.setDarkMode(!0);const B9="Rowmate";wi.afterEach(e=>{var t;document.title=(t=e.meta)!=null&&t.title?`${e.meta.title} \u2014 ${B9}`:B9});export{Ny as $,e1 as A,t0 as B,Le as C,g2 as D,Q1 as E,W1 as F,Xy as G,L2 as H,bp as I,Ky as J,C3 as K,Qu as L,Gy as M,Zy as N,ce as O,_o as P,C7 as Q,Tp as R,Y5 as S,n0 as T,F1 as U,l1 as V,mo as W,Q5 as X,d7 as Y,_p as Z,Ap as _,n1 as a,Eu as a0,jy as a1,Jy as a2,yp as a3,Li as a4,Dy as a5,Py as a6,Vy as a7,ht as a8,Xu as a9,$y as aa,Iy as ab,Ry as ac,Hy as ad,By as ae,Uy as af,zy as ag,xu as ah,br as ai,Oy as aj,Ay as ak,Ty as al,Hp as b,y1 as c,CC as d,pC as e,h7 as f,bu as g,K as h,X5 as i,Wy as j,ju as k,Yy as l,qy as m,Vr as n,U as o,u1 as p,ct as q,H1 as r,K2 as s,I3 as t,W as u,Co as v,T1 as w,Ht as x,B0 as y,r3 as z};
