(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();function q5(e,t){const r=Object.create(null),a=e.split(",");for(let n=0;n<a.length;n++)r[a[n]]=!0;return t?n=>!!r[n.toLowerCase()]:n=>!!r[n]}const kt="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bt=q5(kt);function Y8(e){return!!e||e===""}function y0(e){if(J(e)){const t={};for(let r=0;r<e.length;r++){const a=e[r],n=P1(a)?wt(a):y0(a);if(n)for(const s in n)t[s]=n[s]}return t}else{if(P1(e))return e;if(x1(e))return e}}const Mt=/;(?![^(]*\))/g,St=/:(.+)/;function wt(e){const t={};return e.split(Mt).forEach(r=>{if(r){const a=r.split(St);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function i1(e){let t="";if(P1(e))t=e;else if(J(e))for(let r=0;r<e.length;r++){const a=i1(e[r]);a&&(t+=a+" ")}else if(x1(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}function Et(e,t){if(e.length!==t.length)return!1;let r=!0;for(let a=0;r&&a<e.length;a++)r=b0(e[a],t[a]);return r}function b0(e,t){if(e===t)return!0;let r=D7(e),a=D7(t);if(r||a)return r&&a?e.getTime()===t.getTime():!1;if(r=g3(e),a=g3(t),r||a)return e===t;if(r=J(e),a=J(t),r||a)return r&&a?Et(e,t):!1;if(r=x1(e),a=x1(t),r||a){if(!r||!a)return!1;const n=Object.keys(e).length,s=Object.keys(t).length;if(n!==s)return!1;for(const i in e){const l=e.hasOwnProperty(i),o=t.hasOwnProperty(i);if(l&&!o||!l&&o||!b0(e[i],t[i]))return!1}}return String(e)===String(t)}function z5(e,t){return e.findIndex(r=>b0(r,t))}const x2=e=>P1(e)?e:e==null?"":J(e)||x1(e)&&(e.toString===Q8||!o1(e.toString))?JSON.stringify(e,X8,2):String(e),X8=(e,t)=>t&&t.__v_isRef?X8(e,t.value):W0(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[a,n])=>(r[`${a} =>`]=n,r),{})}:Y0(t)?{[`Set(${t.size})`]:[...t.values()]}:x1(t)&&!J(t)&&!ee(t)?String(t):t,k1={},$0=[],_2=()=>{},Ft=()=>!1,xt=/^on[^a-z]/,l6=e=>xt.test(e),K5=e=>e.startsWith("onUpdate:"),U1=Object.assign,Y5=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},Ht=Object.prototype.hasOwnProperty,g1=(e,t)=>Ht.call(e,t),J=Array.isArray,W0=e=>E3(e)==="[object Map]",Y0=e=>E3(e)==="[object Set]",D7=e=>E3(e)==="[object Date]",o1=e=>typeof e=="function",P1=e=>typeof e=="string",g3=e=>typeof e=="symbol",x1=e=>e!==null&&typeof e=="object",J8=e=>x1(e)&&o1(e.then)&&o1(e.catch),Q8=Object.prototype.toString,E3=e=>Q8.call(e),Tt=e=>E3(e).slice(8,-1),ee=e=>E3(e)==="[object Object]",X5=e=>P1(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,P3=q5(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),o6=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},Ot=/-(\w)/g,T2=o6(e=>e.replace(Ot,(t,r)=>r?r.toUpperCase():"")),At=/\B([A-Z])/g,X0=o6(e=>e.replace(At,"-$1").toLowerCase()),c6=o6(e=>e.charAt(0).toUpperCase()+e.slice(1)),N6=o6(e=>e?`on${c6(e)}`:""),p3=(e,t)=>!Object.is(e,t),D3=(e,t)=>{for(let r=0;r<e.length;r++)e[r](t)},K3=(e,t,r)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:r})},y3=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let V7;const Rt=()=>V7||(V7=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let w2;class te{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&w2&&(this.parent=w2,this.index=(w2.scopes||(w2.scopes=[])).push(this)-1)}run(t){if(this.active){const r=w2;try{return w2=this,t()}finally{w2=r}}}on(){w2=this}off(){w2=this.parent}stop(t){if(this.active){let r,a;for(r=0,a=this.effects.length;r<a;r++)this.effects[r].stop();for(r=0,a=this.cleanups.length;r<a;r++)this.cleanups[r]();if(this.scopes)for(r=0,a=this.scopes.length;r<a;r++)this.scopes[r].stop(!0);if(this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function J5(e){return new te(e)}function Nt(e,t=w2){t&&t.active&&t.effects.push(e)}const Q5=e=>{const t=new Set(e);return t.w=0,t.n=0,t},re=e=>(e.w&r0)>0,ae=e=>(e.n&r0)>0,It=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=r0},Pt=e=>{const{deps:t}=e;if(t.length){let r=0;for(let a=0;a<t.length;a++){const n=t[a];re(n)&&!ae(n)?n.delete(e):t[r++]=n,n.w&=~r0,n.n&=~r0}t.length=r}},l5=new WeakMap;let i3=0,r0=1;const o5=30;let L2;const _0=Symbol(""),c5=Symbol("");class e7{constructor(t,r=null,a){this.fn=t,this.scheduler=r,this.active=!0,this.deps=[],this.parent=void 0,Nt(this,a)}run(){if(!this.active)return this.fn();let t=L2,r=Q2;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=L2,L2=this,Q2=!0,r0=1<<++i3,i3<=o5?It(this):B7(this),this.fn()}finally{i3<=o5&&Pt(this),r0=1<<--i3,L2=this.parent,Q2=r,this.parent=void 0,this.deferStop&&this.stop()}}stop(){L2===this?this.deferStop=!0:this.active&&(B7(this),this.onStop&&this.onStop(),this.active=!1)}}function B7(e){const{deps:t}=e;if(t.length){for(let r=0;r<t.length;r++)t[r].delete(e);t.length=0}}let Q2=!0;const ne=[];function J0(){ne.push(Q2),Q2=!1}function Q0(){const e=ne.pop();Q2=e===void 0?!0:e}function i2(e,t,r){if(Q2&&L2){let a=l5.get(e);a||l5.set(e,a=new Map);let n=a.get(r);n||a.set(r,n=Q5()),se(n)}}function se(e,t){let r=!1;i3<=o5?ae(e)||(e.n|=r0,r=!re(e)):r=!e.has(L2),r&&(e.add(L2),L2.deps.push(e))}function V2(e,t,r,a,n,s){const i=l5.get(e);if(!i)return;let l=[];if(t==="clear")l=[...i.values()];else if(r==="length"&&J(e))i.forEach((o,f)=>{(f==="length"||f>=a)&&l.push(o)});else switch(r!==void 0&&l.push(i.get(r)),t){case"add":J(e)?X5(r)&&l.push(i.get("length")):(l.push(i.get(_0)),W0(e)&&l.push(i.get(c5)));break;case"delete":J(e)||(l.push(i.get(_0)),W0(e)&&l.push(i.get(c5)));break;case"set":W0(e)&&l.push(i.get(_0));break}if(l.length===1)l[0]&&u5(l[0]);else{const o=[];for(const f of l)f&&o.push(...f);u5(Q5(o))}}function u5(e,t){const r=J(e)?e:[...e];for(const a of r)a.computed&&$7(a);for(const a of r)a.computed||$7(a)}function $7(e,t){(e!==L2||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Dt=q5("__proto__,__v_isRef,__isVue"),ie=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(g3)),Vt=t7(),Bt=t7(!1,!0),$t=t7(!0),W7=Wt();function Wt(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...r){const a=C1(this);for(let s=0,i=this.length;s<i;s++)i2(a,"get",s+"");const n=a[t](...r);return n===-1||n===!1?a[t](...r.map(C1)):n}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...r){J0();const a=C1(this)[t].apply(this,r);return Q0(),a}}),e}function t7(e=!1,t=!1){return function(a,n,s){if(n==="__v_isReactive")return!e;if(n==="__v_isReadonly")return e;if(n==="__v_isShallow")return t;if(n==="__v_raw"&&s===(e?t?nr:fe:t?ue:ce).get(a))return a;const i=J(a);if(!e&&i&&g1(W7,n))return Reflect.get(W7,n,s);const l=Reflect.get(a,n,s);return(g3(n)?ie.has(n):Dt(n))||(e||i2(a,"get",n),t)?l:M1(l)?i&&X5(n)?l:l.value:x1(l)?e?de(l):E0(l):l}}const Zt=le(),Ut=le(!0);function le(e=!1){return function(r,a,n,s){let i=r[a];if(L3(i)&&M1(i)&&!M1(n))return!1;if(!e&&!L3(n)&&(f5(n)||(n=C1(n),i=C1(i)),!J(r)&&M1(i)&&!M1(n)))return i.value=n,!0;const l=J(r)&&X5(a)?Number(a)<r.length:g1(r,a),o=Reflect.set(r,a,n,s);return r===C1(s)&&(l?p3(n,i)&&V2(r,"set",a,n):V2(r,"add",a,n)),o}}function jt(e,t){const r=g1(e,t);e[t];const a=Reflect.deleteProperty(e,t);return a&&r&&V2(e,"delete",t,void 0),a}function Gt(e,t){const r=Reflect.has(e,t);return(!g3(t)||!ie.has(t))&&i2(e,"has",t),r}function qt(e){return i2(e,"iterate",J(e)?"length":_0),Reflect.ownKeys(e)}const oe={get:Vt,set:Zt,deleteProperty:jt,has:Gt,ownKeys:qt},zt={get:$t,set(e,t){return!0},deleteProperty(e,t){return!0}},Kt=U1({},oe,{get:Bt,set:Ut}),r7=e=>e,u6=e=>Reflect.getPrototypeOf(e);function x3(e,t,r=!1,a=!1){e=e.__v_raw;const n=C1(e),s=C1(t);r||(t!==s&&i2(n,"get",t),i2(n,"get",s));const{has:i}=u6(n),l=a?r7:r?s7:v3;if(i.call(n,t))return l(e.get(t));if(i.call(n,s))return l(e.get(s));e!==n&&e.get(t)}function H3(e,t=!1){const r=this.__v_raw,a=C1(r),n=C1(e);return t||(e!==n&&i2(a,"has",e),i2(a,"has",n)),e===n?r.has(e):r.has(e)||r.has(n)}function T3(e,t=!1){return e=e.__v_raw,!t&&i2(C1(e),"iterate",_0),Reflect.get(e,"size",e)}function Z7(e){e=C1(e);const t=C1(this);return u6(t).has.call(t,e)||(t.add(e),V2(t,"add",e,e)),this}function U7(e,t){t=C1(t);const r=C1(this),{has:a,get:n}=u6(r);let s=a.call(r,e);s||(e=C1(e),s=a.call(r,e));const i=n.call(r,e);return r.set(e,t),s?p3(t,i)&&V2(r,"set",e,t):V2(r,"add",e,t),this}function j7(e){const t=C1(this),{has:r,get:a}=u6(t);let n=r.call(t,e);n||(e=C1(e),n=r.call(t,e)),a&&a.call(t,e);const s=t.delete(e);return n&&V2(t,"delete",e,void 0),s}function G7(){const e=C1(this),t=e.size!==0,r=e.clear();return t&&V2(e,"clear",void 0,void 0),r}function O3(e,t){return function(a,n){const s=this,i=s.__v_raw,l=C1(i),o=t?r7:e?s7:v3;return!e&&i2(l,"iterate",_0),i.forEach((f,d)=>a.call(n,o(f),o(d),s))}}function A3(e,t,r){return function(...a){const n=this.__v_raw,s=C1(n),i=W0(s),l=e==="entries"||e===Symbol.iterator&&i,o=e==="keys"&&i,f=n[e](...a),d=r?r7:t?s7:v3;return!t&&i2(s,"iterate",o?c5:_0),{next(){const{value:h,done:C}=f.next();return C?{value:h,done:C}:{value:l?[d(h[0]),d(h[1])]:d(h),done:C}},[Symbol.iterator](){return this}}}}function Z2(e){return function(...t){return e==="delete"?!1:this}}function Yt(){const e={get(s){return x3(this,s)},get size(){return T3(this)},has:H3,add:Z7,set:U7,delete:j7,clear:G7,forEach:O3(!1,!1)},t={get(s){return x3(this,s,!1,!0)},get size(){return T3(this)},has:H3,add:Z7,set:U7,delete:j7,clear:G7,forEach:O3(!1,!0)},r={get(s){return x3(this,s,!0)},get size(){return T3(this,!0)},has(s){return H3.call(this,s,!0)},add:Z2("add"),set:Z2("set"),delete:Z2("delete"),clear:Z2("clear"),forEach:O3(!0,!1)},a={get(s){return x3(this,s,!0,!0)},get size(){return T3(this,!0)},has(s){return H3.call(this,s,!0)},add:Z2("add"),set:Z2("set"),delete:Z2("delete"),clear:Z2("clear"),forEach:O3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=A3(s,!1,!1),r[s]=A3(s,!0,!1),t[s]=A3(s,!1,!0),a[s]=A3(s,!0,!0)}),[e,r,t,a]}const[Xt,Jt,Qt,er]=Yt();function a7(e,t){const r=t?e?er:Qt:e?Jt:Xt;return(a,n,s)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_raw"?a:Reflect.get(g1(r,n)&&n in a?r:a,n,s)}const tr={get:a7(!1,!1)},rr={get:a7(!1,!0)},ar={get:a7(!0,!1)},ce=new WeakMap,ue=new WeakMap,fe=new WeakMap,nr=new WeakMap;function sr(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ir(e){return e.__v_skip||!Object.isExtensible(e)?0:sr(Tt(e))}function E0(e){return L3(e)?e:n7(e,!1,oe,tr,ce)}function lr(e){return n7(e,!1,Kt,rr,ue)}function de(e){return n7(e,!0,zt,ar,fe)}function n7(e,t,r,a,n){if(!x1(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=n.get(e);if(s)return s;const i=ir(e);if(i===0)return e;const l=new Proxy(e,i===2?a:r);return n.set(e,l),l}function P2(e){return L3(e)?P2(e.__v_raw):!!(e&&e.__v_isReactive)}function L3(e){return!!(e&&e.__v_isReadonly)}function f5(e){return!!(e&&e.__v_isShallow)}function Ce(e){return P2(e)||L3(e)}function C1(e){const t=e&&e.__v_raw;return t?C1(t):e}function y2(e){return K3(e,"__v_skip",!0),e}const v3=e=>x1(e)?E0(e):e,s7=e=>x1(e)?de(e):e;function he(e){Q2&&L2&&(e=C1(e),se(e.dep||(e.dep=Q5())))}function me(e,t){e=C1(e),e.dep&&u5(e.dep)}function M1(e){return!!(e&&e.__v_isRef===!0)}function E1(e){return pe(e,!1)}function ge(e){return pe(e,!0)}function pe(e,t){return M1(e)?e:new or(e,t)}class or{constructor(t,r){this.__v_isShallow=r,this.dep=void 0,this.__v_isRef=!0,this._rawValue=r?t:C1(t),this._value=r?t:v3(t)}get value(){return he(this),this._value}set value(t){t=this.__v_isShallow?t:C1(t),p3(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:v3(t),me(this))}}function B(e){return M1(e)?e.value:e}const cr={get:(e,t,r)=>B(Reflect.get(e,t,r)),set:(e,t,r,a)=>{const n=e[t];return M1(n)&&!M1(r)?(n.value=r,!0):Reflect.set(e,t,r,a)}};function ye(e){return P2(e)?e:new Proxy(e,cr)}function q7(e){const t=J(e)?new Array(e.length):{};for(const r in e)t[r]=V3(e,r);return t}class ur{constructor(t,r,a){this._object=t,this._key=r,this._defaultValue=a,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function V3(e,t,r){const a=e[t];return M1(a)?a:new ur(e,t,r)}class fr{constructor(t,r,a,n){this._setter=r,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new e7(t,()=>{this._dirty||(this._dirty=!0,me(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=a}get value(){const t=C1(this);return he(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function dr(e,t,r=!1){let a,n;const s=o1(e);return s?(a=e,n=_2):(a=e.get,n=e.set),new fr(a,n,s||!n,r)}function e0(e,t,r,a){let n;try{n=a?e(...a):e()}catch(s){f6(s,t,r)}return n}function u2(e,t,r,a){if(o1(e)){const s=e0(e,t,r,a);return s&&J8(s)&&s.catch(i=>{f6(i,t,r)}),s}const n=[];for(let s=0;s<e.length;s++)n.push(u2(e[s],t,r,a));return n}function f6(e,t,r,a=!0){const n=t?t.vnode:null;if(t){let s=t.parent;const i=t.proxy,l=r;for(;s;){const f=s.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,i,l)===!1)return}s=s.parent}const o=t.appContext.config.errorHandler;if(o){e0(o,null,10,[e,i,l]);return}}Cr(e,r,n,a)}function Cr(e,t,r,a=!0){console.error(e)}let Y3=!1,d5=!1;const s2=[];let N2=0;const o3=[];let l3=null,N0=0;const c3=[];let z2=null,I0=0;const Le=Promise.resolve();let i7=null,C5=null;function X3(e){const t=i7||Le;return e?t.then(this?e.bind(this):e):t}function hr(e){let t=N2+1,r=s2.length;for(;t<r;){const a=t+r>>>1;_3(s2[a])<e?t=a+1:r=a}return t}function ve(e){(!s2.length||!s2.includes(e,Y3&&e.allowRecurse?N2+1:N2))&&e!==C5&&(e.id==null?s2.push(e):s2.splice(hr(e.id),0,e),_e())}function _e(){!Y3&&!d5&&(d5=!0,i7=Le.then(Me))}function mr(e){const t=s2.indexOf(e);t>N2&&s2.splice(t,1)}function ke(e,t,r,a){J(e)?r.push(...e):(!t||!t.includes(e,e.allowRecurse?a+1:a))&&r.push(e),_e()}function gr(e){ke(e,l3,o3,N0)}function pr(e){ke(e,z2,c3,I0)}function d6(e,t=null){if(o3.length){for(C5=t,l3=[...new Set(o3)],o3.length=0,N0=0;N0<l3.length;N0++)l3[N0]();l3=null,N0=0,C5=null,d6(e,t)}}function be(e){if(d6(),c3.length){const t=[...new Set(c3)];if(c3.length=0,z2){z2.push(...t);return}for(z2=t,z2.sort((r,a)=>_3(r)-_3(a)),I0=0;I0<z2.length;I0++)z2[I0]();z2=null,I0=0}}const _3=e=>e.id==null?1/0:e.id;function Me(e){d5=!1,Y3=!0,d6(e),s2.sort((r,a)=>_3(r)-_3(a));const t=_2;try{for(N2=0;N2<s2.length;N2++){const r=s2[N2];r&&r.active!==!1&&e0(r,null,14)}}finally{N2=0,s2.length=0,be(),Y3=!1,i7=null,(s2.length||o3.length||c3.length)&&Me(e)}}function yr(e,t,...r){if(e.isUnmounted)return;const a=e.vnode.props||k1;let n=r;const s=t.startsWith("update:"),i=s&&t.slice(7);if(i&&i in a){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:h,trim:C}=a[d]||k1;C&&(n=r.map(p=>p.trim())),h&&(n=r.map(y3))}let l,o=a[l=N6(t)]||a[l=N6(T2(t))];!o&&s&&(o=a[l=N6(X0(t))]),o&&u2(o,e,6,n);const f=a[l+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,u2(f,e,6,n)}}function Se(e,t,r=!1){const a=t.emitsCache,n=a.get(e);if(n!==void 0)return n;const s=e.emits;let i={},l=!1;if(!o1(e)){const o=f=>{const d=Se(f,t,!0);d&&(l=!0,U1(i,d))};!r&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return!s&&!l?(a.set(e,null),null):(J(s)?s.forEach(o=>i[o]=null):U1(i,s),a.set(e,i),i)}function C6(e,t){return!e||!l6(t)?!1:(t=t.slice(2).replace(/Once$/,""),g1(e,t[0].toLowerCase()+t.slice(1))||g1(e,X0(t))||g1(e,t))}let z1=null,we=null;function J3(e){const t=z1;return z1=e,we=e&&e.type.__scopeId||null,t}function F1(e,t=z1,r){if(!t||e._n)return e;const a=(...n)=>{a._d&&n4(-1);const s=J3(t),i=e(...n);return J3(s),a._d&&n4(1),i};return a._n=!0,a._c=!0,a._d=!0,a}function I6(e){const{type:t,vnode:r,proxy:a,withProxy:n,props:s,propsOptions:[i],slots:l,attrs:o,emit:f,render:d,renderCache:h,data:C,setupState:p,ctx:b,inheritAttrs:M}=e;let E,g;const _=J3(e);try{if(r.shapeFlag&4){const k=n||a;E=E2(d.call(k,k,h,s,p,C,b)),g=o}else{const k=t;E=E2(k.length>1?k(s,{attrs:o,slots:l,emit:f}):k(s,null)),g=t.props?o:Lr(o)}}catch(k){f3.length=0,f6(k,e,1),E=a1(d2)}let F=E;if(g&&M!==!1){const k=Object.keys(g),{shapeFlag:L}=F;k.length&&L&7&&(i&&k.some(K5)&&(g=vr(g,i)),F=a0(F,g))}return r.dirs&&(F=a0(F),F.dirs=F.dirs?F.dirs.concat(r.dirs):r.dirs),r.transition&&(F.transition=r.transition),E=F,J3(_),E}const Lr=e=>{let t;for(const r in e)(r==="class"||r==="style"||l6(r))&&((t||(t={}))[r]=e[r]);return t},vr=(e,t)=>{const r={};for(const a in e)(!K5(a)||!(a.slice(9)in t))&&(r[a]=e[a]);return r};function _r(e,t,r){const{props:a,children:n,component:s}=e,{props:i,children:l,patchFlag:o}=t,f=s.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&o>=0){if(o&1024)return!0;if(o&16)return a?z7(a,i,f):!!i;if(o&8){const d=t.dynamicProps;for(let h=0;h<d.length;h++){const C=d[h];if(i[C]!==a[C]&&!C6(f,C))return!0}}}else return(n||l)&&(!l||!l.$stable)?!0:a===i?!1:a?i?z7(a,i,f):!0:!!i;return!1}function z7(e,t,r){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let n=0;n<a.length;n++){const s=a[n];if(t[s]!==e[s]&&!C6(r,s))return!0}return!1}function kr({vnode:e,parent:t},r){for(;t&&t.subTree===e;)(e=t.vnode).el=r,t=t.parent}const br=e=>e.__isSuspense;function Mr(e,t){t&&t.pendingBranch?J(e)?t.effects.push(...e):t.effects.push(e):pr(e)}function B3(e,t){if(B1){let r=B1.provides;const a=B1.parent&&B1.parent.provides;a===r&&(r=B1.provides=Object.create(a)),r[e]=t}}function f2(e,t,r=!1){const a=B1||z1;if(a){const n=a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides;if(n&&e in n)return n[e];if(arguments.length>1)return r&&o1(t)?t.call(a.proxy):t}}function Bd(e,t){return l7(e,null,t)}const K7={};function D2(e,t,r){return l7(e,t,r)}function l7(e,t,{immediate:r,deep:a,flush:n,onTrack:s,onTrigger:i}=k1){const l=B1;let o,f=!1,d=!1;if(M1(e)?(o=()=>e.value,f=f5(e)):P2(e)?(o=()=>e,a=!0):J(e)?(d=!0,f=e.some(g=>P2(g)||f5(g)),o=()=>e.map(g=>{if(M1(g))return g.value;if(P2(g))return L0(g);if(o1(g))return e0(g,l,2)})):o1(e)?t?o=()=>e0(e,l,2):o=()=>{if(!(l&&l.isUnmounted))return h&&h(),u2(e,l,3,[C])}:o=_2,t&&a){const g=o;o=()=>L0(g())}let h,C=g=>{h=E.onStop=()=>{e0(g,l,4)}};if(b3)return C=_2,t?r&&u2(t,l,3,[o(),d?[]:void 0,C]):o(),_2;let p=d?[]:K7;const b=()=>{if(!!E.active)if(t){const g=E.run();(a||f||(d?g.some((_,F)=>p3(_,p[F])):p3(g,p)))&&(h&&h(),u2(t,l,3,[g,p===K7?void 0:p,C]),p=g)}else E.run()};b.allowRecurse=!!t;let M;n==="sync"?M=b:n==="post"?M=()=>e2(b,l&&l.suspense):M=()=>gr(b);const E=new e7(o,M);return t?r?b():p=E.run():n==="post"?e2(E.run.bind(E),l&&l.suspense):E.run(),()=>{E.stop(),l&&l.scope&&Y5(l.scope.effects,E)}}function Sr(e,t,r){const a=this.proxy,n=P1(e)?e.includes(".")?Ee(a,e):()=>a[e]:e.bind(a,a);let s;o1(t)?s=t:(s=t.handler,r=t);const i=B1;Z0(this);const l=l7(n,s.bind(a),r);return i?Z0(i):k0(),l}function Ee(e,t){const r=t.split(".");return()=>{let a=e;for(let n=0;n<r.length&&a;n++)a=a[r[n]];return a}}function L0(e,t){if(!x1(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),M1(e))L0(e.value,t);else if(J(e))for(let r=0;r<e.length;r++)L0(e[r],t);else if(Y0(e)||W0(e))e.forEach(r=>{L0(r,t)});else if(ee(e))for(const r in e)L0(e[r],t);return e}function wr(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return M0(()=>{e.isMounted=!0}),g6(()=>{e.isUnmounting=!0}),e}const c2=[Function,Array],Er={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:c2,onEnter:c2,onAfterEnter:c2,onEnterCancelled:c2,onBeforeLeave:c2,onLeave:c2,onAfterLeave:c2,onLeaveCancelled:c2,onBeforeAppear:c2,onAppear:c2,onAfterAppear:c2,onAppearCancelled:c2},setup(e,{slots:t}){const r=B2(),a=wr();let n;return()=>{const s=t.default&&He(t.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const M of s)if(M.type!==d2){i=M;break}}const l=C1(e),{mode:o}=l;if(a.isLeaving)return P6(i);const f=Y7(i);if(!f)return P6(i);const d=h5(f,l,a,r);m5(f,d);const h=r.subTree,C=h&&Y7(h);let p=!1;const{getTransitionKey:b}=f.type;if(b){const M=b();n===void 0?n=M:M!==n&&(n=M,p=!0)}if(C&&C.type!==d2&&(!m0(f,C)||p)){const M=h5(C,l,a,r);if(m5(C,M),o==="out-in")return a.isLeaving=!0,M.afterLeave=()=>{a.isLeaving=!1,r.update()},P6(i);o==="in-out"&&f.type!==d2&&(M.delayLeave=(E,g,_)=>{const F=xe(a,C);F[String(C.key)]=C,E._leaveCb=()=>{g(),E._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=_})}return i}}},Fe=Er;function xe(e,t){const{leavingVNodes:r}=e;let a=r.get(t.type);return a||(a=Object.create(null),r.set(t.type,a)),a}function h5(e,t,r,a){const{appear:n,mode:s,persisted:i=!1,onBeforeEnter:l,onEnter:o,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:h,onLeave:C,onAfterLeave:p,onLeaveCancelled:b,onBeforeAppear:M,onAppear:E,onAfterAppear:g,onAppearCancelled:_}=t,F=String(e.key),k=xe(r,e),L=(U,I)=>{U&&u2(U,a,9,I)},P=(U,I)=>{const R=I[1];L(U,I),J(U)?U.every($=>$.length<=1)&&R():U.length<=1&&R()},x={mode:s,persisted:i,beforeEnter(U){let I=l;if(!r.isMounted)if(n)I=M||l;else return;U._leaveCb&&U._leaveCb(!0);const R=k[F];R&&m0(e,R)&&R.el._leaveCb&&R.el._leaveCb(),L(I,[U])},enter(U){let I=o,R=f,$=d;if(!r.isMounted)if(n)I=E||o,R=g||f,$=_||d;else return;let O=!1;const Y=U._enterCb=p1=>{O||(O=!0,p1?L($,[U]):L(R,[U]),x.delayedLeave&&x.delayedLeave(),U._enterCb=void 0)};I?P(I,[U,Y]):Y()},leave(U,I){const R=String(e.key);if(U._enterCb&&U._enterCb(!0),r.isUnmounting)return I();L(h,[U]);let $=!1;const O=U._leaveCb=Y=>{$||($=!0,I(),Y?L(b,[U]):L(p,[U]),U._leaveCb=void 0,k[R]===e&&delete k[R])};k[R]=e,C?P(C,[U,O]):O()},clone(U){return h5(U,t,r,a)}};return x}function P6(e){if(h6(e))return e=a0(e),e.children=null,e}function Y7(e){return h6(e)?e.children?e.children[0]:void 0:e}function m5(e,t){e.shapeFlag&6&&e.component?m5(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function He(e,t=!1,r){let a=[],n=0;for(let s=0;s<e.length;s++){let i=e[s];const l=r==null?i.key:String(r)+String(i.key!=null?i.key:s);i.type===O1?(i.patchFlag&128&&n++,a=a.concat(He(i.children,t,l))):(t||i.type!==d2)&&a.push(l!=null?a0(i,{key:l}):i)}if(n>1)for(let s=0;s<a.length;s++)a[s].patchFlag=-2;return a}function o7(e){return o1(e)?{setup:e,name:e.name}:e}const u3=e=>!!e.type.__asyncLoader,h6=e=>e.type.__isKeepAlive;function Fr(e,t){Te(e,"a",t)}function xr(e,t){Te(e,"da",t)}function Te(e,t,r=B1){const a=e.__wdc||(e.__wdc=()=>{let n=r;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if(m6(t,a,r),r){let n=r.parent;for(;n&&n.parent;)h6(n.parent.vnode)&&Hr(a,t,r,n),n=n.parent}}function Hr(e,t,r,a){const n=m6(t,e,a,!0);p6(()=>{Y5(a[t],n)},r)}function m6(e,t,r=B1,a=!1){if(r){const n=r[e]||(r[e]=[]),s=t.__weh||(t.__weh=(...i)=>{if(r.isUnmounted)return;J0(),Z0(r);const l=u2(t,r,e,i);return k0(),Q0(),l});return a?n.unshift(s):n.push(s),s}}const $2=e=>(t,r=B1)=>(!b3||e==="sp")&&m6(e,t,r),Oe=$2("bm"),M0=$2("m"),Tr=$2("bu"),Or=$2("u"),g6=$2("bum"),p6=$2("um"),Ar=$2("sp"),Rr=$2("rtg"),Nr=$2("rtc");function Ir(e,t=B1){m6("ec",e,t)}function $3(e,t){const r=z1;if(r===null)return e;const a=k6(r)||r.proxy,n=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,l,o,f=k1]=t[s];o1(i)&&(i={mounted:i,updated:i}),i.deep&&L0(l),n.push({dir:i,instance:a,value:l,oldValue:void 0,arg:o,modifiers:f})}return e}function c0(e,t,r,a){const n=e.dirs,s=t&&t.dirs;for(let i=0;i<n.length;i++){const l=n[i];s&&(l.oldValue=s[i].value);let o=l.dir[a];o&&(J0(),u2(o,r,8,[e.el,l,e,t]),Q0())}}const c7="components";function $d(e,t){return Re(c7,e,!0,t)||e}const Ae=Symbol();function y6(e){return P1(e)?Re(c7,e,!1)||e:e||Ae}function Re(e,t,r=!0,a=!1){const n=z1||B1;if(n){const s=n.type;if(e===c7){const l=ua(s,!1);if(l&&(l===t||l===T2(t)||l===c6(T2(t))))return s}const i=X7(n[e]||s[e],t)||X7(n.appContext[e],t);return!i&&a?s:i}}function X7(e,t){return e&&(e[t]||e[T2(t)]||e[c6(T2(t))])}function L6(e,t,r,a){let n;const s=r&&r[a];if(J(e)||P1(e)){n=new Array(e.length);for(let i=0,l=e.length;i<l;i++)n[i]=t(e[i],i,void 0,s&&s[i])}else if(typeof e=="number"){n=new Array(e);for(let i=0;i<e;i++)n[i]=t(i+1,i,void 0,s&&s[i])}else if(x1(e))if(e[Symbol.iterator])n=Array.from(e,(i,l)=>t(i,l,void 0,s&&s[l]));else{const i=Object.keys(e);n=new Array(i.length);for(let l=0,o=i.length;l<o;l++){const f=i[l];n[l]=t(e[f],f,l,s&&s[l])}}else n=[];return r&&(r[a]=n),n}function K1(e,t,r={},a,n){if(z1.isCE||z1.parent&&u3(z1.parent)&&z1.parent.isCE)return a1("slot",t==="default"?null:{name:t},a&&a());let s=e[t];s&&s._c&&(s._d=!1),W();const i=s&&Ne(s(r)),l=L1(O1,{key:r.key||`_${t}`},i||(a?a():[]),i&&e._===1?64:-2);return!n&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function Ne(e){return e.some(t=>t6(t)?!(t.type===d2||t.type===O1&&!Ne(t.children)):!0)?e:null}const g5=e=>e?ze(e)?k6(e)||e.proxy:g5(e.parent):null,Q3=U1(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>g5(e.parent),$root:e=>g5(e.root),$emit:e=>e.emit,$options:e=>Pe(e),$forceUpdate:e=>e.f||(e.f=()=>ve(e.update)),$nextTick:e=>e.n||(e.n=X3.bind(e.proxy)),$watch:e=>Sr.bind(e)}),Pr={get({_:e},t){const{ctx:r,setupState:a,data:n,props:s,accessCache:i,type:l,appContext:o}=e;let f;if(t[0]!=="$"){const p=i[t];if(p!==void 0)switch(p){case 1:return a[t];case 2:return n[t];case 4:return r[t];case 3:return s[t]}else{if(a!==k1&&g1(a,t))return i[t]=1,a[t];if(n!==k1&&g1(n,t))return i[t]=2,n[t];if((f=e.propsOptions[0])&&g1(f,t))return i[t]=3,s[t];if(r!==k1&&g1(r,t))return i[t]=4,r[t];p5&&(i[t]=0)}}const d=Q3[t];let h,C;if(d)return t==="$attrs"&&i2(e,"get",t),d(e);if((h=l.__cssModules)&&(h=h[t]))return h;if(r!==k1&&g1(r,t))return i[t]=4,r[t];if(C=o.config.globalProperties,g1(C,t))return C[t]},set({_:e},t,r){const{data:a,setupState:n,ctx:s}=e;return n!==k1&&g1(n,t)?(n[t]=r,!0):a!==k1&&g1(a,t)?(a[t]=r,!0):g1(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:a,appContext:n,propsOptions:s}},i){let l;return!!r[i]||e!==k1&&g1(e,i)||t!==k1&&g1(t,i)||(l=s[0])&&g1(l,i)||g1(a,i)||g1(Q3,i)||g1(n.config.globalProperties,i)},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:g1(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};let p5=!0;function Dr(e){const t=Pe(e),r=e.proxy,a=e.ctx;p5=!1,t.beforeCreate&&J7(t.beforeCreate,e,"bc");const{data:n,computed:s,methods:i,watch:l,provide:o,inject:f,created:d,beforeMount:h,mounted:C,beforeUpdate:p,updated:b,activated:M,deactivated:E,beforeDestroy:g,beforeUnmount:_,destroyed:F,unmounted:k,render:L,renderTracked:P,renderTriggered:x,errorCaptured:U,serverPrefetch:I,expose:R,inheritAttrs:$,components:O,directives:Y,filters:p1}=t;if(f&&Vr(f,a,null,e.appContext.config.unwrapInjectedRef),i)for(const Q in i){const h1=i[Q];o1(h1)&&(a[Q]=h1.bind(r))}if(n){const Q=n.call(r,r);x1(Q)&&(e.data=E0(Q))}if(p5=!0,s)for(const Q in s){const h1=s[Q],T1=o1(h1)?h1.bind(r,r):o1(h1.get)?h1.get.bind(r,r):_2,l2=!o1(h1)&&o1(h1.set)?h1.set.bind(r):_2,Y1=X({get:T1,set:l2});Object.defineProperty(a,Q,{enumerable:!0,configurable:!0,get:()=>Y1.value,set:G1=>Y1.value=G1})}if(l)for(const Q in l)Ie(l[Q],a,r,Q);if(o){const Q=o1(o)?o.call(r):o;Reflect.ownKeys(Q).forEach(h1=>{B3(h1,Q[h1])})}d&&J7(d,e,"c");function s1(Q,h1){J(h1)?h1.forEach(T1=>Q(T1.bind(r))):h1&&Q(h1.bind(r))}if(s1(Oe,h),s1(M0,C),s1(Tr,p),s1(Or,b),s1(Fr,M),s1(xr,E),s1(Ir,U),s1(Nr,P),s1(Rr,x),s1(g6,_),s1(p6,k),s1(Ar,I),J(R))if(R.length){const Q=e.exposed||(e.exposed={});R.forEach(h1=>{Object.defineProperty(Q,h1,{get:()=>r[h1],set:T1=>r[h1]=T1})})}else e.exposed||(e.exposed={});L&&e.render===_2&&(e.render=L),$!=null&&(e.inheritAttrs=$),O&&(e.components=O),Y&&(e.directives=Y)}function Vr(e,t,r=_2,a=!1){J(e)&&(e=y5(e));for(const n in e){const s=e[n];let i;x1(s)?"default"in s?i=f2(s.from||n,s.default,!0):i=f2(s.from||n):i=f2(s),M1(i)&&a?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):t[n]=i}}function J7(e,t,r){u2(J(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,r)}function Ie(e,t,r,a){const n=a.includes(".")?Ee(r,a):()=>r[a];if(P1(e)){const s=t[e];o1(s)&&D2(n,s)}else if(o1(e))D2(n,e.bind(r));else if(x1(e))if(J(e))e.forEach(s=>Ie(s,t,r,a));else{const s=o1(e.handler)?e.handler.bind(r):t[e.handler];o1(s)&&D2(n,s,e)}}function Pe(e){const t=e.type,{mixins:r,extends:a}=t,{mixins:n,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,l=s.get(t);let o;return l?o=l:!n.length&&!r&&!a?o=t:(o={},n.length&&n.forEach(f=>e6(o,f,i,!0)),e6(o,t,i)),s.set(t,o),o}function e6(e,t,r,a=!1){const{mixins:n,extends:s}=t;s&&e6(e,s,r,!0),n&&n.forEach(i=>e6(e,i,r,!0));for(const i in t)if(!(a&&i==="expose")){const l=Br[i]||r&&r[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const Br={data:Q7,props:C0,emits:C0,methods:C0,computed:C0,beforeCreate:X1,created:X1,beforeMount:X1,mounted:X1,beforeUpdate:X1,updated:X1,beforeDestroy:X1,beforeUnmount:X1,destroyed:X1,unmounted:X1,activated:X1,deactivated:X1,errorCaptured:X1,serverPrefetch:X1,components:C0,directives:C0,watch:Wr,provide:Q7,inject:$r};function Q7(e,t){return t?e?function(){return U1(o1(e)?e.call(this,this):e,o1(t)?t.call(this,this):t)}:t:e}function $r(e,t){return C0(y5(e),y5(t))}function y5(e){if(J(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function X1(e,t){return e?[...new Set([].concat(e,t))]:t}function C0(e,t){return e?U1(U1(Object.create(null),e),t):t}function Wr(e,t){if(!e)return t;if(!t)return e;const r=U1(Object.create(null),e);for(const a in t)r[a]=X1(e[a],t[a]);return r}function Zr(e,t,r,a=!1){const n={},s={};K3(s,_6,1),e.propsDefaults=Object.create(null),De(e,t,n,s);for(const i in e.propsOptions[0])i in n||(n[i]=void 0);r?e.props=a?n:lr(n):e.type.props?e.props=n:e.props=s,e.attrs=s}function Ur(e,t,r,a){const{props:n,attrs:s,vnode:{patchFlag:i}}=e,l=C1(n),[o]=e.propsOptions;let f=!1;if((a||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let h=0;h<d.length;h++){let C=d[h];if(C6(e.emitsOptions,C))continue;const p=t[C];if(o)if(g1(s,C))p!==s[C]&&(s[C]=p,f=!0);else{const b=T2(C);n[b]=L5(o,l,b,p,e,!1)}else p!==s[C]&&(s[C]=p,f=!0)}}}else{De(e,t,n,s)&&(f=!0);let d;for(const h in l)(!t||!g1(t,h)&&((d=X0(h))===h||!g1(t,d)))&&(o?r&&(r[h]!==void 0||r[d]!==void 0)&&(n[h]=L5(o,l,h,void 0,e,!0)):delete n[h]);if(s!==l)for(const h in s)(!t||!g1(t,h)&&!0)&&(delete s[h],f=!0)}f&&V2(e,"set","$attrs")}function De(e,t,r,a){const[n,s]=e.propsOptions;let i=!1,l;if(t)for(let o in t){if(P3(o))continue;const f=t[o];let d;n&&g1(n,d=T2(o))?!s||!s.includes(d)?r[d]=f:(l||(l={}))[d]=f:C6(e.emitsOptions,o)||(!(o in a)||f!==a[o])&&(a[o]=f,i=!0)}if(s){const o=C1(r),f=l||k1;for(let d=0;d<s.length;d++){const h=s[d];r[h]=L5(n,o,h,f[h],e,!g1(f,h))}}return i}function L5(e,t,r,a,n,s){const i=e[r];if(i!=null){const l=g1(i,"default");if(l&&a===void 0){const o=i.default;if(i.type!==Function&&o1(o)){const{propsDefaults:f}=n;r in f?a=f[r]:(Z0(n),a=f[r]=o.call(null,t),k0())}else a=o}i[0]&&(s&&!l?a=!1:i[1]&&(a===""||a===X0(r))&&(a=!0))}return a}function Ve(e,t,r=!1){const a=t.propsCache,n=a.get(e);if(n)return n;const s=e.props,i={},l=[];let o=!1;if(!o1(e)){const d=h=>{o=!0;const[C,p]=Ve(h,t,!0);U1(i,C),p&&l.push(...p)};!r&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!s&&!o)return a.set(e,$0),$0;if(J(s))for(let d=0;d<s.length;d++){const h=T2(s[d]);e4(h)&&(i[h]=k1)}else if(s)for(const d in s){const h=T2(d);if(e4(h)){const C=s[d],p=i[h]=J(C)||o1(C)?{type:C}:C;if(p){const b=a4(Boolean,p.type),M=a4(String,p.type);p[0]=b>-1,p[1]=M<0||b<M,(b>-1||g1(p,"default"))&&l.push(h)}}}const f=[i,l];return a.set(e,f),f}function e4(e){return e[0]!=="$"}function t4(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function r4(e,t){return t4(e)===t4(t)}function a4(e,t){return J(t)?t.findIndex(r=>r4(r,e)):o1(t)&&r4(t,e)?0:-1}const Be=e=>e[0]==="_"||e==="$stable",u7=e=>J(e)?e.map(E2):[E2(e)],jr=(e,t,r)=>{if(t._n)return t;const a=F1((...n)=>u7(t(...n)),r);return a._c=!1,a},$e=(e,t,r)=>{const a=e._ctx;for(const n in e){if(Be(n))continue;const s=e[n];if(o1(s))t[n]=jr(n,s,a);else if(s!=null){const i=u7(s);t[n]=()=>i}}},We=(e,t)=>{const r=u7(t);e.slots.default=()=>r},Gr=(e,t)=>{if(e.vnode.shapeFlag&32){const r=t._;r?(e.slots=C1(t),K3(t,"_",r)):$e(t,e.slots={})}else e.slots={},t&&We(e,t);K3(e.slots,_6,1)},qr=(e,t,r)=>{const{vnode:a,slots:n}=e;let s=!0,i=k1;if(a.shapeFlag&32){const l=t._;l?r&&l===1?s=!1:(U1(n,t),!r&&l===1&&delete n._):(s=!t.$stable,$e(t,n)),i=t}else t&&(We(e,t),i={default:1});if(s)for(const l in n)!Be(l)&&!(l in i)&&delete n[l]};function Ze(){return{app:null,config:{isNativeTag:Ft,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zr=0;function Kr(e,t){return function(a,n=null){o1(a)||(a=Object.assign({},a)),n!=null&&!x1(n)&&(n=null);const s=Ze(),i=new Set;let l=!1;const o=s.app={_uid:zr++,_component:a,_props:n,_container:null,_context:s,_instance:null,version:Ca,get config(){return s.config},set config(f){},use(f,...d){return i.has(f)||(f&&o1(f.install)?(i.add(f),f.install(o,...d)):o1(f)&&(i.add(f),f(o,...d))),o},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),o},component(f,d){return d?(s.components[f]=d,o):s.components[f]},directive(f,d){return d?(s.directives[f]=d,o):s.directives[f]},mount(f,d,h){if(!l){const C=a1(a,n);return C.appContext=s,d&&t?t(C,f):e(C,f,h),l=!0,o._container=f,f.__vue_app__=o,k6(C.component)||C.component.proxy}},unmount(){l&&(e(null,o._container),delete o._container.__vue_app__)},provide(f,d){return s.provides[f]=d,o}};return o}}function v5(e,t,r,a,n=!1){if(J(e)){e.forEach((C,p)=>v5(C,t&&(J(t)?t[p]:t),r,a,n));return}if(u3(a)&&!n)return;const s=a.shapeFlag&4?k6(a.component)||a.component.proxy:a.el,i=n?null:s,{i:l,r:o}=e,f=t&&t.r,d=l.refs===k1?l.refs={}:l.refs,h=l.setupState;if(f!=null&&f!==o&&(P1(f)?(d[f]=null,g1(h,f)&&(h[f]=null)):M1(f)&&(f.value=null)),o1(o))e0(o,l,12,[i,d]);else{const C=P1(o),p=M1(o);if(C||p){const b=()=>{if(e.f){const M=C?d[o]:o.value;n?J(M)&&Y5(M,s):J(M)?M.includes(s)||M.push(s):C?(d[o]=[s],g1(h,o)&&(h[o]=d[o])):(o.value=[s],e.k&&(d[e.k]=o.value))}else C?(d[o]=i,g1(h,o)&&(h[o]=i)):p&&(o.value=i,e.k&&(d[e.k]=i))};i?(b.id=-1,e2(b,r)):b()}}}const e2=Mr;function Yr(e){return Xr(e)}function Xr(e,t){const r=Rt();r.__VUE__=!0;const{insert:a,remove:n,patchProp:s,createElement:i,createText:l,createComment:o,setText:f,setElementText:d,parentNode:h,nextSibling:C,setScopeId:p=_2,cloneNode:b,insertStaticContent:M}=e,E=(c,u,m,v=null,S=null,H=null,V=!1,N=null,A=!!u.dynamicChildren)=>{if(c===u)return;c&&!m0(c,u)&&(v=z(c),Z1(c,S,H,!0),c=null),u.patchFlag===-2&&(A=!1,u.dynamicChildren=null);const{type:y,ref:w,shapeFlag:j}=u;switch(y){case v6:g(c,u,m,v);break;case d2:_(c,u,m,v);break;case D6:c==null&&F(u,m,v,V);break;case O1:Y(c,u,m,v,S,H,V,N,A);break;default:j&1?P(c,u,m,v,S,H,V,N,A):j&6?p1(c,u,m,v,S,H,V,N,A):(j&64||j&128)&&y.process(c,u,m,v,S,H,V,N,A,f1)}w!=null&&S&&v5(w,c&&c.ref,H,u||c,!u)},g=(c,u,m,v)=>{if(c==null)a(u.el=l(u.children),m,v);else{const S=u.el=c.el;u.children!==c.children&&f(S,u.children)}},_=(c,u,m,v)=>{c==null?a(u.el=o(u.children||""),m,v):u.el=c.el},F=(c,u,m,v)=>{[c.el,c.anchor]=M(c.children,u,m,v,c.el,c.anchor)},k=({el:c,anchor:u},m,v)=>{let S;for(;c&&c!==u;)S=C(c),a(c,m,v),c=S;a(u,m,v)},L=({el:c,anchor:u})=>{let m;for(;c&&c!==u;)m=C(c),n(c),c=m;n(u)},P=(c,u,m,v,S,H,V,N,A)=>{V=V||u.type==="svg",c==null?x(u,m,v,S,H,V,N,A):R(c,u,S,H,V,N,A)},x=(c,u,m,v,S,H,V,N)=>{let A,y;const{type:w,props:j,shapeFlag:G,transition:e1,patchFlag:c1,dirs:m1}=c;if(c.el&&b!==void 0&&c1===-1)A=c.el=b(c.el);else{if(A=c.el=i(c.type,H,j&&j.is,j),G&8?d(A,c.children):G&16&&I(c.children,A,null,v,S,H&&w!=="foreignObject",V,N),m1&&c0(c,null,v,"created"),j){for(const b1 in j)b1!=="value"&&!P3(b1)&&s(A,b1,null,j[b1],H,c.children,v,S,D);"value"in j&&s(A,"value",null,j.value),(y=j.onVnodeBeforeMount)&&M2(y,v,c)}U(A,c,c.scopeId,V,v)}m1&&c0(c,null,v,"beforeMount");const v1=(!S||S&&!S.pendingBranch)&&e1&&!e1.persisted;v1&&e1.beforeEnter(A),a(A,u,m),((y=j&&j.onVnodeMounted)||v1||m1)&&e2(()=>{y&&M2(y,v,c),v1&&e1.enter(A),m1&&c0(c,null,v,"mounted")},S)},U=(c,u,m,v,S)=>{if(m&&p(c,m),v)for(let H=0;H<v.length;H++)p(c,v[H]);if(S){let H=S.subTree;if(u===H){const V=S.vnode;U(c,V,V.scopeId,V.slotScopeIds,S.parent)}}},I=(c,u,m,v,S,H,V,N,A=0)=>{for(let y=A;y<c.length;y++){const w=c[y]=N?Y2(c[y]):E2(c[y]);E(null,w,u,m,v,S,H,V,N)}},R=(c,u,m,v,S,H,V)=>{const N=u.el=c.el;let{patchFlag:A,dynamicChildren:y,dirs:w}=u;A|=c.patchFlag&16;const j=c.props||k1,G=u.props||k1;let e1;m&&u0(m,!1),(e1=G.onVnodeBeforeUpdate)&&M2(e1,m,u,c),w&&c0(u,c,m,"beforeUpdate"),m&&u0(m,!0);const c1=S&&u.type!=="foreignObject";if(y?$(c.dynamicChildren,y,N,m,v,c1,H):V||T1(c,u,N,null,m,v,c1,H,!1),A>0){if(A&16)O(N,u,j,G,m,v,S);else if(A&2&&j.class!==G.class&&s(N,"class",null,G.class,S),A&4&&s(N,"style",j.style,G.style,S),A&8){const m1=u.dynamicProps;for(let v1=0;v1<m1.length;v1++){const b1=m1[v1],C2=j[b1],x0=G[b1];(x0!==C2||b1==="value")&&s(N,b1,C2,x0,S,c.children,m,v,D)}}A&1&&c.children!==u.children&&d(N,u.children)}else!V&&y==null&&O(N,u,j,G,m,v,S);((e1=G.onVnodeUpdated)||w)&&e2(()=>{e1&&M2(e1,m,u,c),w&&c0(u,c,m,"updated")},v)},$=(c,u,m,v,S,H,V)=>{for(let N=0;N<u.length;N++){const A=c[N],y=u[N],w=A.el&&(A.type===O1||!m0(A,y)||A.shapeFlag&70)?h(A.el):m;E(A,y,w,null,v,S,H,V,!0)}},O=(c,u,m,v,S,H,V)=>{if(m!==v){for(const N in v){if(P3(N))continue;const A=v[N],y=m[N];A!==y&&N!=="value"&&s(c,N,y,A,V,u.children,S,H,D)}if(m!==k1)for(const N in m)!P3(N)&&!(N in v)&&s(c,N,m[N],null,V,u.children,S,H,D);"value"in v&&s(c,"value",m.value,v.value)}},Y=(c,u,m,v,S,H,V,N,A)=>{const y=u.el=c?c.el:l(""),w=u.anchor=c?c.anchor:l("");let{patchFlag:j,dynamicChildren:G,slotScopeIds:e1}=u;e1&&(N=N?N.concat(e1):e1),c==null?(a(y,m,v),a(w,m,v),I(u.children,m,w,S,H,V,N,A)):j>0&&j&64&&G&&c.dynamicChildren?($(c.dynamicChildren,G,m,S,H,V,N),(u.key!=null||S&&u===S.subTree)&&Ue(c,u,!0)):T1(c,u,m,w,S,H,V,N,A)},p1=(c,u,m,v,S,H,V,N,A)=>{u.slotScopeIds=N,c==null?u.shapeFlag&512?S.ctx.activate(u,m,v,V,A):R1(u,m,v,S,H,V,A):s1(c,u,A)},R1=(c,u,m,v,S,H,V)=>{const N=c.component=ia(c,v,S);if(h6(c)&&(N.ctx.renderer=f1),la(N),N.asyncDep){if(S&&S.registerDep(N,Q),!c.el){const A=N.subTree=a1(d2);_(null,A,u,m)}return}Q(N,c,u,m,S,H,V)},s1=(c,u,m)=>{const v=u.component=c.component;if(_r(c,u,m))if(v.asyncDep&&!v.asyncResolved){h1(v,u,m);return}else v.next=u,mr(v.update),v.update();else u.el=c.el,v.vnode=u},Q=(c,u,m,v,S,H,V)=>{const N=()=>{if(c.isMounted){let{next:w,bu:j,u:G,parent:e1,vnode:c1}=c,m1=w,v1;u0(c,!1),w?(w.el=c1.el,h1(c,w,V)):w=c1,j&&D3(j),(v1=w.props&&w.props.onVnodeBeforeUpdate)&&M2(v1,e1,w,c1),u0(c,!0);const b1=I6(c),C2=c.subTree;c.subTree=b1,E(C2,b1,h(C2.el),z(C2),c,S,H),w.el=b1.el,m1===null&&kr(c,b1.el),G&&e2(G,S),(v1=w.props&&w.props.onVnodeUpdated)&&e2(()=>M2(v1,e1,w,c1),S)}else{let w;const{el:j,props:G}=u,{bm:e1,m:c1,parent:m1}=c,v1=u3(u);if(u0(c,!1),e1&&D3(e1),!v1&&(w=G&&G.onVnodeBeforeMount)&&M2(w,m1,u),u0(c,!0),j&&t1){const b1=()=>{c.subTree=I6(c),t1(j,c.subTree,c,S,null)};v1?u.type.__asyncLoader().then(()=>!c.isUnmounted&&b1()):b1()}else{const b1=c.subTree=I6(c);E(null,b1,m,v,c,S,H),u.el=b1.el}if(c1&&e2(c1,S),!v1&&(w=G&&G.onVnodeMounted)){const b1=u;e2(()=>M2(w,m1,b1),S)}(u.shapeFlag&256||m1&&u3(m1.vnode)&&m1.vnode.shapeFlag&256)&&c.a&&e2(c.a,S),c.isMounted=!0,u=m=v=null}},A=c.effect=new e7(N,()=>ve(y),c.scope),y=c.update=()=>A.run();y.id=c.uid,u0(c,!0),y()},h1=(c,u,m)=>{u.component=c;const v=c.vnode.props;c.vnode=u,c.next=null,Ur(c,u.props,v,m),qr(c,u.children,m),J0(),d6(void 0,c.update),Q0()},T1=(c,u,m,v,S,H,V,N,A=!1)=>{const y=c&&c.children,w=c?c.shapeFlag:0,j=u.children,{patchFlag:G,shapeFlag:e1}=u;if(G>0){if(G&128){Y1(y,j,m,v,S,H,V,N,A);return}else if(G&256){l2(y,j,m,v,S,H,V,N,A);return}}e1&8?(w&16&&D(y,S,H),j!==y&&d(m,j)):w&16?e1&16?Y1(y,j,m,v,S,H,V,N,A):D(y,S,H,!0):(w&8&&d(m,""),e1&16&&I(j,m,v,S,H,V,N,A))},l2=(c,u,m,v,S,H,V,N,A)=>{c=c||$0,u=u||$0;const y=c.length,w=u.length,j=Math.min(y,w);let G;for(G=0;G<j;G++){const e1=u[G]=A?Y2(u[G]):E2(u[G]);E(c[G],e1,m,null,S,H,V,N,A)}y>w?D(c,S,H,!0,!1,j):I(u,m,v,S,H,V,N,A,j)},Y1=(c,u,m,v,S,H,V,N,A)=>{let y=0;const w=u.length;let j=c.length-1,G=w-1;for(;y<=j&&y<=G;){const e1=c[y],c1=u[y]=A?Y2(u[y]):E2(u[y]);if(m0(e1,c1))E(e1,c1,m,null,S,H,V,N,A);else break;y++}for(;y<=j&&y<=G;){const e1=c[j],c1=u[G]=A?Y2(u[G]):E2(u[G]);if(m0(e1,c1))E(e1,c1,m,null,S,H,V,N,A);else break;j--,G--}if(y>j){if(y<=G){const e1=G+1,c1=e1<w?u[e1].el:v;for(;y<=G;)E(null,u[y]=A?Y2(u[y]):E2(u[y]),m,c1,S,H,V,N,A),y++}}else if(y>G)for(;y<=j;)Z1(c[y],S,H,!0),y++;else{const e1=y,c1=y,m1=new Map;for(y=c1;y<=G;y++){const a2=u[y]=A?Y2(u[y]):E2(u[y]);a2.key!=null&&m1.set(a2.key,y)}let v1,b1=0;const C2=G-c1+1;let x0=!1,N7=0;const t3=new Array(C2);for(y=0;y<C2;y++)t3[y]=0;for(y=e1;y<=j;y++){const a2=c[y];if(b1>=C2){Z1(a2,S,H,!0);continue}let b2;if(a2.key!=null)b2=m1.get(a2.key);else for(v1=c1;v1<=G;v1++)if(t3[v1-c1]===0&&m0(a2,u[v1])){b2=v1;break}b2===void 0?Z1(a2,S,H,!0):(t3[b2-c1]=y+1,b2>=N7?N7=b2:x0=!0,E(a2,u[b2],m,null,S,H,V,N,A),b1++)}const I7=x0?Jr(t3):$0;for(v1=I7.length-1,y=C2-1;y>=0;y--){const a2=c1+y,b2=u[a2],P7=a2+1<w?u[a2+1].el:v;t3[y]===0?E(null,b2,m,P7,S,H,V,N,A):x0&&(v1<0||y!==I7[v1]?G1(b2,m,P7,2):v1--)}}},G1=(c,u,m,v,S=null)=>{const{el:H,type:V,transition:N,children:A,shapeFlag:y}=c;if(y&6){G1(c.component.subTree,u,m,v);return}if(y&128){c.suspense.move(u,m,v);return}if(y&64){V.move(c,u,m,f1);return}if(V===O1){a(H,u,m);for(let j=0;j<A.length;j++)G1(A[j],u,m,v);a(c.anchor,u,m);return}if(V===D6){k(c,u,m);return}if(v!==2&&y&1&&N)if(v===0)N.beforeEnter(H),a(H,u,m),e2(()=>N.enter(H),S);else{const{leave:j,delayLeave:G,afterLeave:e1}=N,c1=()=>a(H,u,m),m1=()=>{j(H,()=>{c1(),e1&&e1()})};G?G(H,c1,m1):m1()}else a(H,u,m)},Z1=(c,u,m,v=!1,S=!1)=>{const{type:H,props:V,ref:N,children:A,dynamicChildren:y,shapeFlag:w,patchFlag:j,dirs:G}=c;if(N!=null&&v5(N,null,m,c,!0),w&256){u.ctx.deactivate(c);return}const e1=w&1&&G,c1=!u3(c);let m1;if(c1&&(m1=V&&V.onVnodeBeforeUnmount)&&M2(m1,u,c),w&6)q(c.component,m,v);else{if(w&128){c.suspense.unmount(m,v);return}e1&&c0(c,null,u,"beforeUnmount"),w&64?c.type.remove(c,u,m,S,f1,v):y&&(H!==O1||j>0&&j&64)?D(y,u,m,!1,!0):(H===O1&&j&384||!S&&w&16)&&D(A,u,m),v&&o2(c)}(c1&&(m1=V&&V.onVnodeUnmounted)||e1)&&e2(()=>{m1&&M2(m1,u,c),e1&&c0(c,null,u,"unmounted")},m)},o2=c=>{const{type:u,el:m,anchor:v,transition:S}=c;if(u===O1){T(m,v);return}if(u===D6){L(c);return}const H=()=>{n(m),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(c.shapeFlag&1&&S&&!S.persisted){const{leave:V,delayLeave:N}=S,A=()=>V(m,H);N?N(c.el,H,A):A()}else H()},T=(c,u)=>{let m;for(;c!==u;)m=C(c),n(c),c=m;n(u)},q=(c,u,m)=>{const{bum:v,scope:S,update:H,subTree:V,um:N}=c;v&&D3(v),S.stop(),H&&(H.active=!1,Z1(V,c,u,m)),N&&e2(N,u),e2(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},D=(c,u,m,v=!1,S=!1,H=0)=>{for(let V=H;V<c.length;V++)Z1(c[V],u,m,v,S)},z=c=>c.shapeFlag&6?z(c.component.subTree):c.shapeFlag&128?c.suspense.next():C(c.anchor||c.el),u1=(c,u,m)=>{c==null?u._vnode&&Z1(u._vnode,null,null,!0):E(u._vnode||null,c,u,null,null,null,m),be(),u._vnode=c},f1={p:E,um:Z1,m:G1,r:o2,mt:R1,mc:I,pc:T1,pbc:$,n:z,o:e};let r1,t1;return t&&([r1,t1]=t(f1)),{render:u1,hydrate:r1,createApp:Kr(u1,r1)}}function u0({effect:e,update:t},r){e.allowRecurse=t.allowRecurse=r}function Ue(e,t,r=!1){const a=e.children,n=t.children;if(J(a)&&J(n))for(let s=0;s<a.length;s++){const i=a[s];let l=n[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=n[s]=Y2(n[s]),l.el=i.el),r||Ue(i,l))}}function Jr(e){const t=e.slice(),r=[0];let a,n,s,i,l;const o=e.length;for(a=0;a<o;a++){const f=e[a];if(f!==0){if(n=r[r.length-1],e[n]<f){t[a]=n,r.push(a);continue}for(s=0,i=r.length-1;s<i;)l=s+i>>1,e[r[l]]<f?s=l+1:i=l;f<e[r[s]]&&(s>0&&(t[a]=r[s-1]),r[s]=a)}}for(s=r.length,i=r[s-1];s-- >0;)r[s]=i,i=t[i];return r}const Qr=e=>e.__isTeleport,O1=Symbol(void 0),v6=Symbol(void 0),d2=Symbol(void 0),D6=Symbol(void 0),f3=[];let v2=null;function W(e=!1){f3.push(v2=e?null:[])}function ea(){f3.pop(),v2=f3[f3.length-1]||null}let k3=1;function n4(e){k3+=e}function je(e){return e.dynamicChildren=k3>0?v2||$0:null,ea(),k3>0&&v2&&v2.push(e),e}function l1(e,t,r,a,n,s){return je(K(e,t,r,a,n,s,!0))}function L1(e,t,r,a,n){return je(a1(e,t,r,a,n,!0))}function t6(e){return e?e.__v_isVNode===!0:!1}function m0(e,t){return e.type===t.type&&e.key===t.key}const _6="__vInternal",Ge=({key:e})=>e!=null?e:null,W3=({ref:e,ref_key:t,ref_for:r})=>e!=null?P1(e)||M1(e)||o1(e)?{i:z1,r:e,k:t,f:!!r}:e:null;function K(e,t=null,r=null,a=0,n=null,s=e===O1?0:1,i=!1,l=!1){const o={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ge(t),ref:t&&W3(t),scopeId:we,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:a,dynamicProps:n,dynamicChildren:null,appContext:null};return l?(f7(o,r),s&128&&e.normalize(o)):r&&(o.shapeFlag|=P1(r)?8:16),k3>0&&!i&&v2&&(o.patchFlag>0||s&6)&&o.patchFlag!==32&&v2.push(o),o}const a1=ta;function ta(e,t=null,r=null,a=0,n=null,s=!1){if((!e||e===Ae)&&(e=d2),t6(e)){const l=a0(e,t,!0);return r&&f7(l,r),k3>0&&!s&&v2&&(l.shapeFlag&6?v2[v2.indexOf(e)]=l:v2.push(l)),l.patchFlag|=-2,l}if(fa(e)&&(e=e.__vccOpts),t){t=ra(t);let{class:l,style:o}=t;l&&!P1(l)&&(t.class=i1(l)),x1(o)&&(Ce(o)&&!J(o)&&(o=U1({},o)),t.style=y0(o))}const i=P1(e)?1:br(e)?128:Qr(e)?64:x1(e)?4:o1(e)?2:0;return K(e,t,r,a,n,i,s,!0)}function ra(e){return e?Ce(e)||_6 in e?U1({},e):e:null}function a0(e,t,r=!1){const{props:a,ref:n,patchFlag:s,children:i}=e,l=t?aa(a||{},t):a;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Ge(l),ref:t&&t.ref?r&&n?J(n)?n.concat(W3(t)):[n,W3(t)]:W3(t):n,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==O1?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&a0(e.ssContent),ssFallback:e.ssFallback&&a0(e.ssFallback),el:e.el,anchor:e.anchor}}function qe(e=" ",t=0){return a1(v6,null,e,t)}function $1(e="",t=!1){return t?(W(),L1(d2,null,e)):a1(d2,null,e)}function E2(e){return e==null||typeof e=="boolean"?a1(d2):J(e)?a1(O1,null,e.slice()):typeof e=="object"?Y2(e):a1(v6,null,String(e))}function Y2(e){return e.el===null||e.memo?e:a0(e)}function f7(e,t){let r=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(J(t))r=16;else if(typeof t=="object")if(a&65){const n=t.default;n&&(n._c&&(n._d=!1),f7(e,n()),n._c&&(n._d=!0));return}else{r=32;const n=t._;!n&&!(_6 in t)?t._ctx=z1:n===3&&z1&&(z1.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else o1(t)?(t={default:t,_ctx:z1},r=32):(t=String(t),a&64?(r=16,t=[qe(t)]):r=8);e.children=t,e.shapeFlag|=r}function aa(...e){const t={};for(let r=0;r<e.length;r++){const a=e[r];for(const n in a)if(n==="class")t.class!==a.class&&(t.class=i1([t.class,a.class]));else if(n==="style")t.style=y0([t.style,a.style]);else if(l6(n)){const s=t[n],i=a[n];i&&s!==i&&!(J(s)&&s.includes(i))&&(t[n]=s?[].concat(s,i):i)}else n!==""&&(t[n]=a[n])}return t}function M2(e,t,r,a=null){u2(e,t,7,[r,a])}const na=Ze();let sa=0;function ia(e,t,r){const a=e.type,n=(t?t.appContext:e.appContext)||na,s={uid:sa++,vnode:e,type:a,parent:t,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,scope:new te(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(n.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ve(a,n),emitsOptions:Se(a,n),emit:null,emitted:null,propsDefaults:k1,inheritAttrs:a.inheritAttrs,ctx:k1,data:k1,props:k1,attrs:k1,slots:k1,refs:k1,setupState:k1,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=yr.bind(null,s),e.ce&&e.ce(s),s}let B1=null;const B2=()=>B1||z1,Z0=e=>{B1=e,e.scope.on()},k0=()=>{B1&&B1.scope.off(),B1=null};function ze(e){return e.vnode.shapeFlag&4}let b3=!1;function la(e,t=!1){b3=t;const{props:r,children:a}=e.vnode,n=ze(e);Zr(e,r,n,t),Gr(e,a);const s=n?oa(e,t):void 0;return b3=!1,s}function oa(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=y2(new Proxy(e.ctx,Pr));const{setup:a}=r;if(a){const n=e.setupContext=a.length>1?Ye(e):null;Z0(e),J0();const s=e0(a,e,0,[e.props,n]);if(Q0(),k0(),J8(s)){if(s.then(k0,k0),t)return s.then(i=>{s4(e,i,t)}).catch(i=>{f6(i,e,0)});e.asyncDep=s}else s4(e,s,t)}else Ke(e,t)}function s4(e,t,r){o1(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:x1(t)&&(e.setupState=ye(t)),Ke(e,r)}let i4;function Ke(e,t,r){const a=e.type;if(!e.render){if(!t&&i4&&!a.render){const n=a.template;if(n){const{isCustomElement:s,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:o}=a,f=U1(U1({isCustomElement:s,delimiters:l},i),o);a.render=i4(n,f)}}e.render=a.render||_2}Z0(e),J0(),Dr(e),Q0(),k0()}function ca(e){return new Proxy(e.attrs,{get(t,r){return i2(e,"get","$attrs"),t[r]}})}function Ye(e){const t=a=>{e.exposed=a||{}};let r;return{get attrs(){return r||(r=ca(e))},slots:e.slots,emit:e.emit,expose:t}}function k6(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ye(y2(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in Q3)return Q3[r](e)}}))}function ua(e,t=!0){return o1(e)?e.displayName||e.name:e.name||t&&e.__name}function fa(e){return o1(e)&&"__vccOpts"in e}const X=(e,t)=>dr(e,t,b3);function d7(){return da().slots}function da(){const e=B2();return e.setupContext||(e.setupContext=Ye(e))}function S0(e,t,r){const a=arguments.length;return a===2?x1(t)&&!J(t)?t6(t)?a1(e,null,[t]):a1(e,t):a1(e,null,t):(a>3?r=Array.prototype.slice.call(arguments,2):a===3&&t6(r)&&(r=[r]),a1(e,t,r))}const Ca="3.2.37",ha="http://www.w3.org/2000/svg",g0=typeof document<"u"?document:null,l4=g0&&g0.createElement("template"),ma={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,a)=>{const n=t?g0.createElementNS(ha,e):g0.createElement(e,r?{is:r}:void 0);return e==="select"&&a&&a.multiple!=null&&n.setAttribute("multiple",a.multiple),n},createText:e=>g0.createTextNode(e),createComment:e=>g0.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>g0.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,r,a,n,s){const i=r?r.previousSibling:t.lastChild;if(n&&(n===s||n.nextSibling))for(;t.insertBefore(n.cloneNode(!0),r),!(n===s||!(n=n.nextSibling)););else{l4.innerHTML=a?`<svg>${e}</svg>`:e;const l=l4.content;if(a){const o=l.firstChild;for(;o.firstChild;)l.appendChild(o.firstChild);l.removeChild(o)}t.insertBefore(l,r)}return[i?i.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}};function ga(e,t,r){const a=e._vtc;a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}function pa(e,t,r){const a=e.style,n=P1(r);if(r&&!n){for(const s in r)_5(a,s,r[s]);if(t&&!P1(t))for(const s in t)r[s]==null&&_5(a,s,"")}else{const s=a.display;n?t!==r&&(a.cssText=r):t&&e.removeAttribute("style"),"_vod"in e&&(a.display=s)}}const o4=/\s*!important$/;function _5(e,t,r){if(J(r))r.forEach(a=>_5(e,t,a));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const a=ya(e,t);o4.test(r)?e.setProperty(X0(a),r.replace(o4,""),"important"):e[a]=r}}const c4=["Webkit","Moz","ms"],V6={};function ya(e,t){const r=V6[t];if(r)return r;let a=T2(t);if(a!=="filter"&&a in e)return V6[t]=a;a=c6(a);for(let n=0;n<c4.length;n++){const s=c4[n]+a;if(s in e)return V6[t]=s}return t}const u4="http://www.w3.org/1999/xlink";function La(e,t,r,a,n){if(a&&t.startsWith("xlink:"))r==null?e.removeAttributeNS(u4,t.slice(6,t.length)):e.setAttributeNS(u4,t,r);else{const s=bt(t);r==null||s&&!Y8(r)?e.removeAttribute(t):e.setAttribute(t,s?"":r)}}function va(e,t,r,a,n,s,i){if(t==="innerHTML"||t==="textContent"){a&&i(a,n,s),e[t]=r==null?"":r;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=r;const o=r==null?"":r;(e.value!==o||e.tagName==="OPTION")&&(e.value=o),r==null&&e.removeAttribute(t);return}let l=!1;if(r===""||r==null){const o=typeof e[t];o==="boolean"?r=Y8(r):r==null&&o==="string"?(r="",l=!0):o==="number"&&(r=0,l=!0)}try{e[t]=r}catch{}l&&e.removeAttribute(t)}const[Xe,_a]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const r=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(r&&Number(r[1])<=53)}return[e,t]})();let k5=0;const ka=Promise.resolve(),ba=()=>{k5=0},Ma=()=>k5||(ka.then(ba),k5=Xe());function I2(e,t,r,a){e.addEventListener(t,r,a)}function Sa(e,t,r,a){e.removeEventListener(t,r,a)}function wa(e,t,r,a,n=null){const s=e._vei||(e._vei={}),i=s[t];if(a&&i)i.value=a;else{const[l,o]=Ea(t);if(a){const f=s[t]=Fa(a,n);I2(e,l,f,o)}else i&&(Sa(e,l,i,o),s[t]=void 0)}}const f4=/(?:Once|Passive|Capture)$/;function Ea(e){let t;if(f4.test(e)){t={};let r;for(;r=e.match(f4);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[X0(e.slice(2)),t]}function Fa(e,t){const r=a=>{const n=a.timeStamp||Xe();(_a||n>=r.attached-1)&&u2(xa(a,r.value),t,5,[a])};return r.value=e,r.attached=Ma(),r}function xa(e,t){if(J(t)){const r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},t.map(a=>n=>!n._stopped&&a&&a(n))}else return t}const d4=/^on[a-z]/,Ha=(e,t,r,a,n=!1,s,i,l,o)=>{t==="class"?ga(e,a,n):t==="style"?pa(e,r,a):l6(t)?K5(t)||wa(e,t,r,a,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ta(e,t,a,n))?va(e,t,a,s,i,l,o):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),La(e,t,a,n))};function Ta(e,t,r,a){return a?!!(t==="innerHTML"||t==="textContent"||t in e&&d4.test(t)&&o1(r)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||d4.test(t)&&P1(r)?!1:t in e}const U2="transition",r3="animation",r6=(e,{slots:t})=>S0(Fe,Oa(e),t);r6.displayName="Transition";const Je={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};r6.props=U1({},Fe.props,Je);const f0=(e,t=[])=>{J(e)?e.forEach(r=>r(...t)):e&&e(...t)},C4=e=>e?J(e)?e.some(t=>t.length>1):e.length>1:!1;function Oa(e){const t={};for(const O in e)O in Je||(t[O]=e[O]);if(e.css===!1)return t;const{name:r="v",type:a,duration:n,enterFromClass:s=`${r}-enter-from`,enterActiveClass:i=`${r}-enter-active`,enterToClass:l=`${r}-enter-to`,appearFromClass:o=s,appearActiveClass:f=i,appearToClass:d=l,leaveFromClass:h=`${r}-leave-from`,leaveActiveClass:C=`${r}-leave-active`,leaveToClass:p=`${r}-leave-to`}=e,b=Aa(n),M=b&&b[0],E=b&&b[1],{onBeforeEnter:g,onEnter:_,onEnterCancelled:F,onLeave:k,onLeaveCancelled:L,onBeforeAppear:P=g,onAppear:x=_,onAppearCancelled:U=F}=t,I=(O,Y,p1)=>{d0(O,Y?d:l),d0(O,Y?f:i),p1&&p1()},R=(O,Y)=>{O._isLeaving=!1,d0(O,h),d0(O,p),d0(O,C),Y&&Y()},$=O=>(Y,p1)=>{const R1=O?x:_,s1=()=>I(Y,O,p1);f0(R1,[Y,s1]),h4(()=>{d0(Y,O?o:s),j2(Y,O?d:l),C4(R1)||m4(Y,a,M,s1)})};return U1(t,{onBeforeEnter(O){f0(g,[O]),j2(O,s),j2(O,i)},onBeforeAppear(O){f0(P,[O]),j2(O,o),j2(O,f)},onEnter:$(!1),onAppear:$(!0),onLeave(O,Y){O._isLeaving=!0;const p1=()=>R(O,Y);j2(O,h),Ia(),j2(O,C),h4(()=>{!O._isLeaving||(d0(O,h),j2(O,p),C4(k)||m4(O,a,E,p1))}),f0(k,[O,p1])},onEnterCancelled(O){I(O,!1),f0(F,[O])},onAppearCancelled(O){I(O,!0),f0(U,[O])},onLeaveCancelled(O){R(O),f0(L,[O])}})}function Aa(e){if(e==null)return null;if(x1(e))return[B6(e.enter),B6(e.leave)];{const t=B6(e);return[t,t]}}function B6(e){return y3(e)}function j2(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.add(r)),(e._vtc||(e._vtc=new Set)).add(t)}function d0(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const{_vtc:r}=e;r&&(r.delete(t),r.size||(e._vtc=void 0))}function h4(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Ra=0;function m4(e,t,r,a){const n=e._endId=++Ra,s=()=>{n===e._endId&&a()};if(r)return setTimeout(s,r);const{type:i,timeout:l,propCount:o}=Na(e,t);if(!i)return a();const f=i+"end";let d=0;const h=()=>{e.removeEventListener(f,C),s()},C=p=>{p.target===e&&++d>=o&&h()};setTimeout(()=>{d<o&&h()},l+1),e.addEventListener(f,C)}function Na(e,t){const r=window.getComputedStyle(e),a=b=>(r[b]||"").split(", "),n=a(U2+"Delay"),s=a(U2+"Duration"),i=g4(n,s),l=a(r3+"Delay"),o=a(r3+"Duration"),f=g4(l,o);let d=null,h=0,C=0;t===U2?i>0&&(d=U2,h=i,C=s.length):t===r3?f>0&&(d=r3,h=f,C=o.length):(h=Math.max(i,f),d=h>0?i>f?U2:r3:null,C=d?d===U2?s.length:o.length:0);const p=d===U2&&/\b(transform|all)(,|$)/.test(r[U2+"Property"]);return{type:d,timeout:h,propCount:C,hasTransform:p}}function g4(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((r,a)=>p4(r)+p4(e[a])))}function p4(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Ia(){return document.body.offsetHeight}const n0=e=>{const t=e.props["onUpdate:modelValue"]||!1;return J(t)?r=>D3(t,r):t};function Pa(e){e.target.composing=!0}function y4(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const b5={created(e,{modifiers:{lazy:t,trim:r,number:a}},n){e._assign=n0(n);const s=a||n.props&&n.props.type==="number";I2(e,t?"change":"input",i=>{if(i.target.composing)return;let l=e.value;r&&(l=l.trim()),s&&(l=y3(l)),e._assign(l)}),r&&I2(e,"change",()=>{e.value=e.value.trim()}),t||(I2(e,"compositionstart",Pa),I2(e,"compositionend",y4),I2(e,"change",y4))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:r,trim:a,number:n}},s){if(e._assign=n0(s),e.composing||document.activeElement===e&&e.type!=="range"&&(r||a&&e.value.trim()===t||(n||e.type==="number")&&y3(e.value)===t))return;const i=t==null?"":t;e.value!==i&&(e.value=i)}},Da={deep:!0,created(e,t,r){e._assign=n0(r),I2(e,"change",()=>{const a=e._modelValue,n=U0(e),s=e.checked,i=e._assign;if(J(a)){const l=z5(a,n),o=l!==-1;if(s&&!o)i(a.concat(n));else if(!s&&o){const f=[...a];f.splice(l,1),i(f)}}else if(Y0(a)){const l=new Set(a);s?l.add(n):l.delete(n),i(l)}else i(e9(e,s))})},mounted:L4,beforeUpdate(e,t,r){e._assign=n0(r),L4(e,t,r)}};function L4(e,{value:t,oldValue:r},a){e._modelValue=t,J(t)?e.checked=z5(t,a.props.value)>-1:Y0(t)?e.checked=t.has(a.props.value):t!==r&&(e.checked=b0(t,e9(e,!0)))}const Va={created(e,{value:t},r){e.checked=b0(t,r.props.value),e._assign=n0(r),I2(e,"change",()=>{e._assign(U0(e))})},beforeUpdate(e,{value:t,oldValue:r},a){e._assign=n0(a),t!==r&&(e.checked=b0(t,a.props.value))}},Qe={deep:!0,created(e,{value:t,modifiers:{number:r}},a){const n=Y0(t);I2(e,"change",()=>{const s=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>r?y3(U0(i)):U0(i));e._assign(e.multiple?n?new Set(s):s:s[0])}),e._assign=n0(a)},mounted(e,{value:t}){v4(e,t)},beforeUpdate(e,t,r){e._assign=n0(r)},updated(e,{value:t}){v4(e,t)}};function v4(e,t){const r=e.multiple;if(!(r&&!J(t)&&!Y0(t))){for(let a=0,n=e.options.length;a<n;a++){const s=e.options[a],i=U0(s);if(r)J(t)?s.selected=z5(t,i)>-1:s.selected=t.has(i);else if(b0(U0(s),t)){e.selectedIndex!==a&&(e.selectedIndex=a);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function U0(e){return"_value"in e?e._value:e.value}function e9(e,t){const r=t?"_trueValue":"_falseValue";return r in e?e[r]:t}const Ba={created(e,t,r){R3(e,t,r,null,"created")},mounted(e,t,r){R3(e,t,r,null,"mounted")},beforeUpdate(e,t,r,a){R3(e,t,r,a,"beforeUpdate")},updated(e,t,r,a){R3(e,t,r,a,"updated")}};function $a(e,t){switch(e){case"SELECT":return Qe;case"TEXTAREA":return b5;default:switch(t){case"checkbox":return Da;case"radio":return Va;default:return b5}}}function R3(e,t,r,a,n){const i=$a(e.tagName,r.props&&r.props.type)[n];i&&i(e,t,r,a)}const Wa=["ctrl","shift","alt","meta"],Za={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Wa.some(r=>e[`${r}Key`]&&!t.includes(r))},a6=(e,t)=>(r,...a)=>{for(let n=0;n<t.length;n++){const s=Za[t[n]];if(s&&s(r,t))return}return e(r,...a)},Ua={beforeMount(e,{value:t},{transition:r}){e._vod=e.style.display==="none"?"":e.style.display,r&&t?r.beforeEnter(e):a3(e,t)},mounted(e,{value:t},{transition:r}){r&&t&&r.enter(e)},updated(e,{value:t,oldValue:r},{transition:a}){!t!=!r&&(a?t?(a.beforeEnter(e),a3(e,!0),a.enter(e)):a.leave(e,()=>{a3(e,!1)}):a3(e,t))},beforeUnmount(e,{value:t}){a3(e,t)}};function a3(e,t){e.style.display=t?e._vod:"none"}const ja=U1({patchProp:Ha},ma);let _4;function Ga(){return _4||(_4=Yr(ja))}const qa=(...e)=>{const t=Ga().createApp(...e),{mount:r}=t;return t.mount=a=>{const n=za(a);if(!n)return;const s=t._component;!o1(s)&&!s.render&&!s.template&&(s.template=n.innerHTML),n.innerHTML="";const i=r(n,!1,n instanceof SVGElement);return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),i},t};function za(e){return P1(e)?document.querySelector(e):e}var Ka=!1;function N3(e,t,r){return Array.isArray(e)?(e.length=Math.max(e.length,t),e.splice(t,1,r),r):(e[t]=r,r)}function $6(e,t){if(Array.isArray(e)){e.splice(t,1);return}delete e[t]}function Ya(){return t9().__VUE_DEVTOOLS_GLOBAL_HOOK__}function t9(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Xa=typeof Proxy=="function",Ja="devtools-plugin:setup",Qa="plugin:settings:set";let H0,M5;function en(){var e;return H0!==void 0||(typeof window<"u"&&window.performance?(H0=!0,M5=window.performance):typeof global<"u"&&((e=global.perf_hooks)===null||e===void 0?void 0:e.performance)?(H0=!0,M5=global.perf_hooks.performance):H0=!1),H0}function tn(){return en()?M5.now():Date.now()}class rn{constructor(t,r){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=r;const a={};if(t.settings)for(const i in t.settings){const l=t.settings[i];a[i]=l.defaultValue}const n=`__vue-devtools-plugin-settings__${t.id}`;let s=Object.assign({},a);try{const i=localStorage.getItem(n),l=JSON.parse(i);Object.assign(s,l)}catch{}this.fallbacks={getSettings(){return s},setSettings(i){try{localStorage.setItem(n,JSON.stringify(i))}catch{}s=i},now(){return tn()}},r&&r.on(Qa,(i,l)=>{i===this.plugin.id&&this.fallbacks.setSettings(l)}),this.proxiedOn=new Proxy({},{get:(i,l)=>this.target?this.target.on[l]:(...o)=>{this.onQueue.push({method:l,args:o})}}),this.proxiedTarget=new Proxy({},{get:(i,l)=>this.target?this.target[l]:l==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(l)?(...o)=>(this.targetQueue.push({method:l,args:o,resolve:()=>{}}),this.fallbacks[l](...o)):(...o)=>new Promise(f=>{this.targetQueue.push({method:l,args:o,resolve:f})})})}async setRealTarget(t){this.target=t;for(const r of this.onQueue)this.target.on[r.method](...r.args);for(const r of this.targetQueue)r.resolve(await this.target[r.method](...r.args))}}function r9(e,t){const r=e,a=t9(),n=Ya(),s=Xa&&r.enableEarlyProxy;if(n&&(a.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!s))n.emit(Ja,e,t);else{const i=s?new rn(r,n):null;(a.__VUE_DEVTOOLS_PLUGINS__=a.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:r,setupFn:t,proxy:i}),i&&t(i.proxiedTarget)}}/*!
  * pinia v2.0.20
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let S5;const M3=e=>S5=e,a9=Symbol("pinia");function w0(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var H2;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(H2||(H2={}));const v0=typeof window<"u",k4=v0,b4=(()=>typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:typeof globalThis=="object"?globalThis:{HTMLElement:null})();function an(e,{autoBom:t=!1}={}){return t&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e}function C7(e,t,r){const a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){i9(a.response,t,r)},a.onerror=function(){console.error("could not download file")},a.send()}function n9(e){const t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function Z3(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{const r=document.createEvent("MouseEvents");r.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(r)}}const U3=typeof navigator=="object"?navigator:{userAgent:""},s9=(()=>/Macintosh/.test(U3.userAgent)&&/AppleWebKit/.test(U3.userAgent)&&!/Safari/.test(U3.userAgent))(),i9=v0?typeof HTMLAnchorElement<"u"&&"download"in HTMLAnchorElement.prototype&&!s9?nn:"msSaveOrOpenBlob"in U3?sn:ln:()=>{};function nn(e,t="download",r){const a=document.createElement("a");a.download=t,a.rel="noopener",typeof e=="string"?(a.href=e,a.origin!==location.origin?n9(a.href)?C7(e,t,r):(a.target="_blank",Z3(a)):Z3(a)):(a.href=URL.createObjectURL(e),setTimeout(function(){URL.revokeObjectURL(a.href)},4e4),setTimeout(function(){Z3(a)},0))}function sn(e,t="download",r){if(typeof e=="string")if(n9(e))C7(e,t,r);else{const a=document.createElement("a");a.href=e,a.target="_blank",setTimeout(function(){Z3(a)})}else navigator.msSaveOrOpenBlob(an(e,r),t)}function ln(e,t,r,a){if(a=a||open("","_blank"),a&&(a.document.title=a.document.body.innerText="downloading..."),typeof e=="string")return C7(e,t,r);const n=e.type==="application/octet-stream",s=/constructor/i.test(String(b4.HTMLElement))||"safari"in b4,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||n&&s||s9)&&typeof FileReader<"u"){const l=new FileReader;l.onloadend=function(){let o=l.result;if(typeof o!="string")throw a=null,new Error("Wrong reader.result type");o=i?o:o.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=o:location.assign(o),a=null},l.readAsDataURL(e)}else{const l=URL.createObjectURL(e);a?a.location.assign(l):location.href=l,a=null,setTimeout(function(){URL.revokeObjectURL(l)},4e4)}}function V1(e,t){const r="\u{1F34D} "+e;typeof __VUE_DEVTOOLS_TOAST__=="function"?__VUE_DEVTOOLS_TOAST__(r,t):t==="error"?console.error(r):t==="warn"?console.warn(r):console.log(r)}function h7(e){return"_a"in e&&"install"in e}function l9(){if(!("clipboard"in navigator))return V1("Your browser doesn't support the Clipboard API","error"),!0}function o9(e){return e instanceof Error&&e.message.toLowerCase().includes("document is not focused")?(V1('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0):!1}async function on(e){if(!l9())try{await navigator.clipboard.writeText(JSON.stringify(e.state.value)),V1("Global state copied to clipboard.")}catch(t){if(o9(t))return;V1("Failed to serialize the state. Check the console for more details.","error"),console.error(t)}}async function cn(e){if(!l9())try{e.state.value=JSON.parse(await navigator.clipboard.readText()),V1("Global state pasted from clipboard.")}catch(t){if(o9(t))return;V1("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(t)}}async function un(e){try{i9(new Blob([JSON.stringify(e.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(t){V1("Failed to export the state as JSON. Check the console for more details.","error"),console.error(t)}}let O2;function fn(){O2||(O2=document.createElement("input"),O2.type="file",O2.accept=".json");function e(){return new Promise((t,r)=>{O2.onchange=async()=>{const a=O2.files;if(!a)return t(null);const n=a.item(0);return t(n?{text:await n.text(),file:n}:null)},O2.oncancel=()=>t(null),O2.onerror=r,O2.click()})}return e}async function dn(e){try{const r=await(await fn())();if(!r)return;const{text:a,file:n}=r;e.state.value=JSON.parse(a),V1(`Global state imported from "${n.name}".`)}catch(t){V1("Failed to export the state as JSON. Check the console for more details.","error"),console.error(t)}}function g2(e){return{_custom:{display:e}}}const c9="\u{1F34D} Pinia (root)",w5="_root";function Cn(e){return h7(e)?{id:w5,label:c9}:{id:e.$id,label:e.$id}}function hn(e){if(h7(e)){const r=Array.from(e._s.keys()),a=e._s;return{state:r.map(s=>({editable:!0,key:s,value:e.state.value[s]})),getters:r.filter(s=>a.get(s)._getters).map(s=>{const i=a.get(s);return{editable:!1,key:s,value:i._getters.reduce((l,o)=>(l[o]=i[o],l),{})}})}}const t={state:Object.keys(e.$state).map(r=>({editable:!0,key:r,value:e.$state[r]}))};return e._getters&&e._getters.length&&(t.getters=e._getters.map(r=>({editable:!1,key:r,value:e[r]}))),e._customProperties.size&&(t.customProperties=Array.from(e._customProperties).map(r=>({editable:!0,key:r,value:e[r]}))),t}function mn(e){return e?Array.isArray(e)?e.reduce((t,r)=>(t.keys.push(r.key),t.operations.push(r.type),t.oldValue[r.key]=r.oldValue,t.newValue[r.key]=r.newValue,t),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:g2(e.type),key:g2(e.key),oldValue:e.oldValue,newValue:e.newValue}:{}}function gn(e){switch(e){case H2.direct:return"mutation";case H2.patchFunction:return"$patch";case H2.patchObject:return"$patch";default:return"unknown"}}let D0=!0;const j3=[],h0="pinia:mutations",q1="pinia",n6=e=>"\u{1F34D} "+e;function pn(e,t){r9({id:"dev.esm.pinia",label:"Pinia \u{1F34D}",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:j3,app:e},r=>{typeof r.now!="function"&&V1("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),r.addTimelineLayer({id:h0,label:"Pinia \u{1F34D}",color:15064968}),r.addInspector({id:q1,label:"Pinia \u{1F34D}",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{on(t)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await cn(t),r.sendInspectorTree(q1),r.sendInspectorState(q1)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{un(t)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await dn(t),r.sendInspectorTree(q1),r.sendInspectorState(q1)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:"Reset the state (option store only)",action:a=>{const n=t._s.get(a);n?n._isOptionsAPI?(n.$reset(),V1(`Store "${a}" reset.`)):V1(`Cannot reset "${a}" store because it's a setup store.`,"warn"):V1(`Cannot reset "${a}" store because it wasn't found.`,"warn")}}]}),r.on.inspectComponent((a,n)=>{const s=a.componentInstance&&a.componentInstance.proxy;if(s&&s._pStores){const i=a.componentInstance.proxy._pStores;Object.values(i).forEach(l=>{a.instanceData.state.push({type:n6(l.$id),key:"state",editable:!0,value:l._isOptionsAPI?{_custom:{value:C1(l.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>l.$reset()}]}}:Object.keys(l.$state).reduce((o,f)=>(o[f]=l.$state[f],o),{})}),l._getters&&l._getters.length&&a.instanceData.state.push({type:n6(l.$id),key:"getters",editable:!1,value:l._getters.reduce((o,f)=>{try{o[f]=l[f]}catch(d){o[f]=d}return o},{})})})}}),r.on.getInspectorTree(a=>{if(a.app===e&&a.inspectorId===q1){let n=[t];n=n.concat(Array.from(t._s.values())),a.rootNodes=(a.filter?n.filter(s=>"$id"in s?s.$id.toLowerCase().includes(a.filter.toLowerCase()):c9.toLowerCase().includes(a.filter.toLowerCase())):n).map(Cn)}}),r.on.getInspectorState(a=>{if(a.app===e&&a.inspectorId===q1){const n=a.nodeId===w5?t:t._s.get(a.nodeId);if(!n)return;n&&(a.state=hn(n))}}),r.on.editInspectorState((a,n)=>{if(a.app===e&&a.inspectorId===q1){const s=a.nodeId===w5?t:t._s.get(a.nodeId);if(!s)return V1(`store "${a.nodeId}" not found`,"error");const{path:i}=a;h7(s)?i.unshift("state"):(i.length!==1||!s._customProperties.has(i[0])||i[0]in s.$state)&&i.unshift("$state"),D0=!1,a.set(s,i,a.state.value),D0=!0}}),r.on.editComponentState(a=>{if(a.type.startsWith("\u{1F34D}")){const n=a.type.replace(/^🍍\s*/,""),s=t._s.get(n);if(!s)return V1(`store "${n}" not found`,"error");const{path:i}=a;if(i[0]!=="state")return V1(`Invalid path for store "${n}":
${i}
Only state can be modified.`);i[0]="$state",D0=!1,a.set(s,i,a.state.value),D0=!0}})})}function yn(e,t){j3.includes(n6(t.$id))||j3.push(n6(t.$id)),r9({id:"dev.esm.pinia",label:"Pinia \u{1F34D}",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:j3,app:e,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},r=>{const a=typeof r.now=="function"?r.now.bind(r):Date.now;t.$onAction(({after:i,onError:l,name:o,args:f})=>{const d=u9++;r.addTimelineEvent({layerId:h0,event:{time:a(),title:"\u{1F6EB} "+o,subtitle:"start",data:{store:g2(t.$id),action:g2(o),args:f},groupId:d}}),i(h=>{p0=void 0,r.addTimelineEvent({layerId:h0,event:{time:a(),title:"\u{1F6EC} "+o,subtitle:"end",data:{store:g2(t.$id),action:g2(o),args:f,result:h},groupId:d}})}),l(h=>{p0=void 0,r.addTimelineEvent({layerId:h0,event:{time:a(),logType:"error",title:"\u{1F4A5} "+o,subtitle:"end",data:{store:g2(t.$id),action:g2(o),args:f,error:h},groupId:d}})})},!0),t._customProperties.forEach(i=>{D2(()=>B(t[i]),(l,o)=>{r.notifyComponentUpdate(),r.sendInspectorState(q1),D0&&r.addTimelineEvent({layerId:h0,event:{time:a(),title:"Change",subtitle:i,data:{newValue:l,oldValue:o},groupId:p0}})},{deep:!0})}),t.$subscribe(({events:i,type:l},o)=>{if(r.notifyComponentUpdate(),r.sendInspectorState(q1),!D0)return;const f={time:a(),title:gn(l),data:{store:g2(t.$id),...mn(i)},groupId:p0};p0=void 0,l===H2.patchFunction?f.subtitle="\u2935\uFE0F":l===H2.patchObject?f.subtitle="\u{1F9E9}":i&&!Array.isArray(i)&&(f.subtitle=i.type),i&&(f.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:i}}),r.addTimelineEvent({layerId:h0,event:f})},{detached:!0,flush:"sync"});const n=t._hotUpdate;t._hotUpdate=y2(i=>{n(i),r.addTimelineEvent({layerId:h0,event:{time:a(),title:"\u{1F525} "+t.$id,subtitle:"HMR update",data:{store:g2(t.$id),info:g2("HMR update")}}}),r.notifyComponentUpdate(),r.sendInspectorTree(q1),r.sendInspectorState(q1)});const{$dispose:s}=t;t.$dispose=()=>{s(),r.notifyComponentUpdate(),r.sendInspectorTree(q1),r.sendInspectorState(q1),r.getSettings().logStoreChanges&&V1(`Disposed "${t.$id}" store \u{1F5D1}`)},r.notifyComponentUpdate(),r.sendInspectorTree(q1),r.sendInspectorState(q1),r.getSettings().logStoreChanges&&V1(`"${t.$id}" store installed \u{1F195}`)})}let u9=0,p0;function M4(e,t){const r=t.reduce((a,n)=>(a[n]=C1(e)[n],a),{});for(const a in r)e[a]=function(){const n=u9,s=new Proxy(e,{get(...i){return p0=n,Reflect.get(...i)},set(...i){return p0=n,Reflect.set(...i)}});return r[a].apply(s,arguments)}}function Ln({app:e,store:t,options:r}){if(!t.$id.startsWith("__hot:")){if(r.state&&(t._isOptionsAPI=!0),typeof r.state=="function"){M4(t,Object.keys(r.actions));const a=t._hotUpdate;C1(t)._hotUpdate=function(n){a.apply(this,arguments),M4(t,Object.keys(n._hmrPayload.actions))}}yn(e,t)}}function vn(){const e=J5(!0),t=e.run(()=>E1({}));let r=[],a=[];const n=y2({install(s){M3(n),n._a=s,s.provide(a9,n),s.config.globalProperties.$pinia=n,k4&&pn(s,n),a.forEach(i=>r.push(i)),a=[]},use(s){return!this._a&&!Ka?a.push(s):r.push(s),this},_p:r,_a:null,_e:e,_s:new Map,state:t});return k4&&typeof Proxy<"u"&&n.use(Ln),n}function f9(e,t){for(const r in t){const a=t[r];if(!(r in e))continue;const n=e[r];w0(n)&&w0(a)&&!M1(a)&&!P2(a)?e[r]=f9(n,a):e[r]=a}return e}const _n=()=>{};function S4(e,t,r,a=_n){e.push(t);const n=()=>{const s=e.indexOf(t);s>-1&&(e.splice(s,1),a())};return!r&&B2()&&p6(n),n}function T0(e,...t){e.slice().forEach(r=>{r(...t)})}function E5(e,t){for(const r in t){if(!t.hasOwnProperty(r))continue;const a=t[r],n=e[r];w0(n)&&w0(a)&&e.hasOwnProperty(r)&&!M1(a)&&!P2(a)?e[r]=E5(n,a):e[r]=a}return e}const kn=Symbol("pinia:skipHydration");function bn(e){return!w0(e)||!e.hasOwnProperty(kn)}const{assign:p2}=Object;function w4(e){return!!(M1(e)&&e.effect)}function E4(e,t,r,a){const{state:n,actions:s,getters:i}=t,l=r.state.value[e];let o;function f(){!l&&!a&&(r.state.value[e]=n?n():{});const d=q7(a?E1(n?n():{}).value:r.state.value[e]);return p2(d,s,Object.keys(i||{}).reduce((h,C)=>(C in d&&console.warn(`[\u{1F34D}]: A getter cannot have the same name as another state property. Rename one of them. Found with "${C}" in store "${e}".`),h[C]=y2(X(()=>{M3(r);const p=r._s.get(e);return i[C].call(p,p)})),h),{}))}return o=F5(e,f,t,r,a,!0),o.$reset=function(){const h=n?n():{};this.$patch(C=>{p2(C,h)})},o}function F5(e,t,r={},a,n,s){let i;const l=p2({actions:{}},r);if(!a._e.active)throw new Error("Pinia destroyed");const o={deep:!0};o.onTrigger=I=>{f?p=I:f==!1&&!x._hotUpdating&&(Array.isArray(p)?p.push(I):console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug."))};let f,d,h=y2([]),C=y2([]),p;const b=a.state.value[e];!s&&!b&&!n&&(a.state.value[e]={});const M=E1({});let E;function g(I){let R;f=d=!1,p=[],typeof I=="function"?(I(a.state.value[e]),R={type:H2.patchFunction,storeId:e,events:p}):(E5(a.state.value[e],I),R={type:H2.patchObject,payload:I,storeId:e,events:p});const $=E=Symbol();X3().then(()=>{E===$&&(f=!0)}),d=!0,T0(h,R,a.state.value[e])}const _=()=>{throw new Error(`\u{1F34D}: Store "${e}" is built using the setup syntax and does not implement $reset().`)};function F(){i.stop(),h=[],C=[],a._s.delete(e)}function k(I,R){return function(){M3(a);const $=Array.from(arguments),O=[],Y=[];function p1(Q){O.push(Q)}function R1(Q){Y.push(Q)}T0(C,{args:$,name:I,store:x,after:p1,onError:R1});let s1;try{s1=R.apply(this&&this.$id===e?this:x,$)}catch(Q){throw T0(Y,Q),Q}return s1 instanceof Promise?s1.then(Q=>(T0(O,Q),Q)).catch(Q=>(T0(Y,Q),Promise.reject(Q))):(T0(O,s1),s1)}}const L=y2({actions:{},getters:{},state:[],hotState:M}),P={_p:a,$id:e,$onAction:S4.bind(null,C),$patch:g,$reset:_,$subscribe(I,R={}){const $=S4(h,I,R.detached,()=>O()),O=i.run(()=>D2(()=>a.state.value[e],Y=>{(R.flush==="sync"?d:f)&&I({storeId:e,type:H2.direct,events:p},Y)},p2({},o,R)));return $},$dispose:F},x=E0(p2(v0?{_customProperties:y2(new Set),_hmrPayload:L}:{},P));a._s.set(e,x);const U=a._e.run(()=>(i=J5(),i.run(()=>t())));for(const I in U){const R=U[I];if(M1(R)&&!w4(R)||P2(R))n?N3(M.value,I,V3(U,I)):s||(b&&bn(R)&&(M1(R)?R.value=b[I]:E5(R,b[I])),a.state.value[e][I]=R),L.state.push(I);else if(typeof R=="function"){const $=n?R:k(I,R);U[I]=$,L.actions[I]=R,l.actions[I]=R}else w4(R)&&(L.getters[I]=s?r.getters[I]:R,v0&&(U._getters||(U._getters=y2([]))).push(I))}p2(x,U),p2(C1(x),U),Object.defineProperty(x,"$state",{get:()=>n?M.value:a.state.value[e],set:I=>{if(n)throw new Error("cannot set hotState");g(R=>{p2(R,I)})}});{x._hotUpdate=y2(R=>{x._hotUpdating=!0,R._hmrPayload.state.forEach($=>{if($ in x.$state){const O=R.$state[$],Y=x.$state[$];typeof O=="object"&&w0(O)&&w0(Y)?f9(O,Y):R.$state[$]=Y}N3(x,$,V3(R.$state,$))}),Object.keys(x.$state).forEach($=>{$ in R.$state||$6(x,$)}),f=!1,d=!1,a.state.value[e]=V3(R._hmrPayload,"hotState"),d=!0,X3().then(()=>{f=!0});for(const $ in R._hmrPayload.actions){const O=R[$];N3(x,$,k($,O))}for(const $ in R._hmrPayload.getters){const O=R._hmrPayload.getters[$],Y=s?X(()=>(M3(a),O.call(x,x))):O;N3(x,$,Y)}Object.keys(x._hmrPayload.getters).forEach($=>{$ in R._hmrPayload.getters||$6(x,$)}),Object.keys(x._hmrPayload.actions).forEach($=>{$ in R._hmrPayload.actions||$6(x,$)}),x._hmrPayload=R._hmrPayload,x._getters=R._getters,x._hotUpdating=!1});const I={writable:!0,configurable:!0,enumerable:!1};v0&&["_p","_hmrPayload","_getters","_customProperties"].forEach(R=>{Object.defineProperty(x,R,{value:x[R],...I})})}return a._p.forEach(I=>{if(v0){const R=i.run(()=>I({store:x,app:a._a,pinia:a,options:l}));Object.keys(R||{}).forEach($=>x._customProperties.add($)),p2(x,R)}else p2(x,i.run(()=>I({store:x,app:a._a,pinia:a,options:l})))}),x.$state&&typeof x.$state=="object"&&typeof x.$state.constructor=="function"&&!x.$state.constructor.toString().includes("[native code]")&&console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${x.$id}".`),b&&s&&r.hydrate&&r.hydrate(x.$state,b),f=!0,d=!0,x}function d9(e,t,r){let a,n;const s=typeof t=="function";typeof e=="string"?(a=e,n=s?r:t):(n=e,a=e.id);function i(l,o){const f=B2();if(l=l||f&&f2(a9),l&&M3(l),!S5)throw new Error(`[\u{1F34D}]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);l=S5,l._s.has(a)||(s?F5(a,t,n,l):E4(a,n,l),i._pinia=l);const d=l._s.get(a);if(o){const h="__hot:"+a,C=s?F5(h,t,n,l,!0):E4(h,p2({},n),l,!0);o._hotUpdate(C),delete l.state.value[h],l._s.delete(h)}if(v0&&f&&f.proxy&&!o){const h=f.proxy,C="_pStores"in h?h._pStores:h._pStores={};C[a]=d}return d}return i.$id=a,i}function Mn(e){return typeof e=="object"&&e!==null}function F4(e,t){return e=Mn(e)?e:Object.create(null),new Proxy(e,{get(r,a,n){return Reflect.get(r,a,n)||Reflect.get(t,a,n)}})}function x4(e){return e!==null&&typeof e=="object"}function x5(e,t){const r=Array.isArray(e)&&Array.isArray(t),a=x4(e)&&x4(t);if(!r&&!a)throw new Error("Can only merge object with object or array with array");const n=r?[]:{};return[...Object.keys(e),...Object.keys(t)].forEach(i=>{Array.isArray(e[i])&&Array.isArray(t[i])?n[i]=[...Object.values(x5(e[i],t[i]))]:t[i]!==null&&typeof t[i]=="object"&&typeof e[i]=="object"?n[i]=x5(e[i],t[i]):e[i]!==void 0&&t[i]===void 0?n[i]=e[i]:e[i]===void 0&&t[i]!==void 0&&(n[i]=t[i])}),n}function H4(e,t){return t.reduce((r,a)=>a==="[]"&&Array.isArray(r)?r:r==null?void 0:r[a],e)}function T4(e,t,r){const a=t.slice(0,-1).reduce((n,s)=>/^(__proto__)$/.test(s)?{}:n[s]=n[s]||{},e);if(Array.isArray(a[t[t.length-1]])&&Array.isArray(r)){const n=a[t[t.length-1]].map((s,i)=>Array.isArray(s)&&typeof s!="object"?[...s,...r[i]]:typeof s=="object"&&s!==null&&Object.keys(s).some(l=>Array.isArray(s[l]))?x5(s,r[i]):{...s,...r[i]});a[t[t.length-1]]=n}else t[t.length-1]===void 0&&Array.isArray(a)&&Array.isArray(r)?a.push(...r):a[t[t.length-1]]=r;return e}function C9(e,t){return t.reduce((r,a)=>{const n=a.split(".");if(!n.includes("[]"))return T4(r,n,H4(e,n));const s=n.indexOf("[]"),i=n.slice(0,s),l=n.slice(0,s+1),o=n.slice(s+1),f=H4(e,l),d=[];for(const h of f)o.length!==0&&(Array.isArray(h)||typeof h=="object")?d.push(C9(h,[o.join(".")])):d.push(h);return T4(r,i,d)},Array.isArray(e)?[]:{})}function O4(e,t,r,a,n){try{const s=t==null?void 0:t.getItem(a);s&&e.$patch(r==null?void 0:r.deserialize(s))}catch(s){n&&console.error(s)}}function Sn(e={}){return t=>{const{options:{persist:r},store:a}=t;if(!r)return;const n=(Array.isArray(r)?r.map(s=>F4(s,e)):[F4(r,e)]).map(({storage:s=localStorage,beforeRestore:i=null,afterRestore:l=null,serializer:o={serialize:JSON.stringify,deserialize:JSON.parse},key:f=a.$id,paths:d=null,debug:h=!1})=>({storage:s,beforeRestore:i,afterRestore:l,serializer:o,key:f,paths:d,debug:h}));n.forEach(s=>{const{storage:i,serializer:l,key:o,paths:f,beforeRestore:d,afterRestore:h,debug:C}=s;d==null||d(t),O4(a,i,l,o,C),h==null||h(t),a.$subscribe((p,b)=>{try{const M=Array.isArray(f)?C9(b,f):b;i.setItem(o,l.serialize(M))}catch(M){C&&console.error(M)}},{detached:!0})}),a.$hydrate=({runHooks:s=!0}={})=>{n.forEach(i=>{const{beforeRestore:l,afterRestore:o,storage:f,serializer:d,key:h,debug:C}=i;s&&(l==null||l(t)),O4(a,f,d,h,C),s&&(o==null||o(t))})}}}var wn=Sn();/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const P0=typeof window<"u";function En(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const _1=Object.assign;function W6(e,t){const r={};for(const a in t){const n=t[a];r[a]=k2(n)?n.map(e):e(n)}return r}const d3=()=>{},k2=Array.isArray,Fn=/\/$/,xn=e=>e.replace(Fn,"");function Z6(e,t,r="/"){let a,n={},s="",i="";const l=t.indexOf("#");let o=t.indexOf("?");return l<o&&l>=0&&(o=-1),o>-1&&(a=t.slice(0,o),s=t.slice(o+1,l>-1?l:t.length),n=e(s)),l>-1&&(a=a||t.slice(0,l),i=t.slice(l,t.length)),a=An(a!=null?a:t,r),{fullPath:a+(s&&"?")+s+i,path:a,query:n,hash:i}}function Hn(e,t){const r=t.query?e(t.query):"";return t.path+(r&&"?")+r+(t.hash||"")}function A4(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Tn(e,t,r){const a=t.matched.length-1,n=r.matched.length-1;return a>-1&&a===n&&j0(t.matched[a],r.matched[n])&&h9(t.params,r.params)&&e(t.query)===e(r.query)&&t.hash===r.hash}function j0(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function h9(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(!On(e[r],t[r]))return!1;return!0}function On(e,t){return k2(e)?R4(e,t):k2(t)?R4(t,e):e===t}function R4(e,t){return k2(t)?e.length===t.length&&e.every((r,a)=>r===t[a]):e.length===1&&e[0]===t}function An(e,t){if(e.startsWith("/"))return e;if(!e)return t;const r=t.split("/"),a=e.split("/");let n=r.length-1,s,i;for(s=0;s<a.length;s++)if(i=a[s],i!==".")if(i==="..")n>1&&n--;else break;return r.slice(0,n).join("/")+"/"+a.slice(s-(s===a.length?1:0)).join("/")}var S3;(function(e){e.pop="pop",e.push="push"})(S3||(S3={}));var C3;(function(e){e.back="back",e.forward="forward",e.unknown=""})(C3||(C3={}));function Rn(e){if(!e)if(P0){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),xn(e)}const Nn=/^[^#]+#/;function In(e,t){return e.replace(Nn,"#")+t}function Pn(e,t){const r=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-r.left-(t.left||0),top:a.top-r.top-(t.top||0)}}const b6=()=>({left:window.pageXOffset,top:window.pageYOffset});function Dn(e){let t;if("el"in e){const r=e.el,a=typeof r=="string"&&r.startsWith("#"),n=typeof r=="string"?a?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!n)return;t=Pn(n,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function N4(e,t){return(history.state?history.state.position-t:-1)+e}const H5=new Map;function Vn(e,t){H5.set(e,t)}function Bn(e){const t=H5.get(e);return H5.delete(e),t}let $n=()=>location.protocol+"//"+location.host;function m9(e,t){const{pathname:r,search:a,hash:n}=t,s=e.indexOf("#");if(s>-1){let l=n.includes(e.slice(s))?e.slice(s).length:1,o=n.slice(l);return o[0]!=="/"&&(o="/"+o),A4(o,"")}return A4(r,e)+a+n}function Wn(e,t,r,a){let n=[],s=[],i=null;const l=({state:C})=>{const p=m9(e,location),b=r.value,M=t.value;let E=0;if(C){if(r.value=p,t.value=C,i&&i===b){i=null;return}E=M?C.position-M.position:0}else a(p);n.forEach(g=>{g(r.value,b,{delta:E,type:S3.pop,direction:E?E>0?C3.forward:C3.back:C3.unknown})})};function o(){i=r.value}function f(C){n.push(C);const p=()=>{const b=n.indexOf(C);b>-1&&n.splice(b,1)};return s.push(p),p}function d(){const{history:C}=window;!C.state||C.replaceState(_1({},C.state,{scroll:b6()}),"")}function h(){for(const C of s)C();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d),{pauseListeners:o,listen:f,destroy:h}}function I4(e,t,r,a=!1,n=!1){return{back:e,current:t,forward:r,replaced:a,position:window.history.length,scroll:n?b6():null}}function Zn(e){const{history:t,location:r}=window,a={value:m9(e,r)},n={value:t.state};n.value||s(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(o,f,d){const h=e.indexOf("#"),C=h>-1?(r.host&&document.querySelector("base")?e:e.slice(h))+o:$n()+e+o;try{t[d?"replaceState":"pushState"](f,"",C),n.value=f}catch(p){console.error(p),r[d?"replace":"assign"](C)}}function i(o,f){const d=_1({},t.state,I4(n.value.back,o,n.value.forward,!0),f,{position:n.value.position});s(o,d,!0),a.value=o}function l(o,f){const d=_1({},n.value,t.state,{forward:o,scroll:b6()});s(d.current,d,!0);const h=_1({},I4(a.value,o,null),{position:d.position+1},f);s(o,h,!1),a.value=o}return{location:a,state:n,push:l,replace:i}}function Un(e){e=Rn(e);const t=Zn(e),r=Wn(e,t.state,t.location,t.replace);function a(s,i=!0){i||r.pauseListeners(),history.go(s)}const n=_1({location:"",base:e,go:a,createHref:In.bind(null,e)},t,r);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>t.state.value}),n}function jn(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Un(e)}function Gn(e){return typeof e=="string"||e&&typeof e=="object"}function g9(e){return typeof e=="string"||typeof e=="symbol"}const G2={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},p9=Symbol("");var P4;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(P4||(P4={}));function G0(e,t){return _1(new Error,{type:e,[p9]:!0},t)}function A2(e,t){return e instanceof Error&&p9 in e&&(t==null||!!(e.type&t))}const D4="[^/]+?",qn={sensitive:!1,strict:!1,start:!0,end:!0},zn=/[.+*?^${}()[\]/\\]/g;function Kn(e,t){const r=_1({},qn,t),a=[];let n=r.start?"^":"";const s=[];for(const f of e){const d=f.length?[]:[90];r.strict&&!f.length&&(n+="/");for(let h=0;h<f.length;h++){const C=f[h];let p=40+(r.sensitive?.25:0);if(C.type===0)h||(n+="/"),n+=C.value.replace(zn,"\\$&"),p+=40;else if(C.type===1){const{value:b,repeatable:M,optional:E,regexp:g}=C;s.push({name:b,repeatable:M,optional:E});const _=g||D4;if(_!==D4){p+=10;try{new RegExp(`(${_})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${b}" (${_}): `+k.message)}}let F=M?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;h||(F=E&&f.length<2?`(?:/${F})`:"/"+F),E&&(F+="?"),n+=F,p+=20,E&&(p+=-8),M&&(p+=-20),_===".*"&&(p+=-50)}d.push(p)}a.push(d)}if(r.strict&&r.end){const f=a.length-1;a[f][a[f].length-1]+=.7000000000000001}r.strict||(n+="/?"),r.end?n+="$":r.strict&&(n+="(?:/|$)");const i=new RegExp(n,r.sensitive?"":"i");function l(f){const d=f.match(i),h={};if(!d)return null;for(let C=1;C<d.length;C++){const p=d[C]||"",b=s[C-1];h[b.name]=p&&b.repeatable?p.split("/"):p}return h}function o(f){let d="",h=!1;for(const C of e){(!h||!d.endsWith("/"))&&(d+="/"),h=!1;for(const p of C)if(p.type===0)d+=p.value;else if(p.type===1){const{value:b,repeatable:M,optional:E}=p,g=b in f?f[b]:"";if(k2(g)&&!M)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const _=k2(g)?g.join("/"):g;if(!_)if(E)C.length<2&&(d.endsWith("/")?d=d.slice(0,-1):h=!0);else throw new Error(`Missing required param "${b}"`);d+=_}}return d||"/"}return{re:i,score:a,keys:s,parse:l,stringify:o}}function Yn(e,t){let r=0;for(;r<e.length&&r<t.length;){const a=t[r]-e[r];if(a)return a;r++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Xn(e,t){let r=0;const a=e.score,n=t.score;for(;r<a.length&&r<n.length;){const s=Yn(a[r],n[r]);if(s)return s;r++}if(Math.abs(n.length-a.length)===1){if(V4(a))return 1;if(V4(n))return-1}return n.length-a.length}function V4(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Jn={type:0,value:""},Qn=/[a-zA-Z0-9_]/;function es(e){if(!e)return[[]];if(e==="/")return[[Jn]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${r})/"${f}": ${p}`)}let r=0,a=r;const n=[];let s;function i(){s&&n.push(s),s=[]}let l=0,o,f="",d="";function h(){!f||(r===0?s.push({type:0,value:f}):r===1||r===2||r===3?(s.length>1&&(o==="*"||o==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:f,regexp:d,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):t("Invalid state to consume buffer"),f="")}function C(){f+=o}for(;l<e.length;){if(o=e[l++],o==="\\"&&r!==2){a=r,r=4;continue}switch(r){case 0:o==="/"?(f&&h(),i()):o===":"?(h(),r=1):C();break;case 4:C(),r=a;break;case 1:o==="("?r=2:Qn.test(o)?C():(h(),r=0,o!=="*"&&o!=="?"&&o!=="+"&&l--);break;case 2:o===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+o:r=3:d+=o;break;case 3:h(),r=0,o!=="*"&&o!=="?"&&o!=="+"&&l--,d="";break;default:t("Unknown state");break}}return r===2&&t(`Unfinished custom RegExp for param "${f}"`),h(),i(),n}function ts(e,t,r){const a=Kn(es(e.path),r),n=_1(a,{record:e,parent:t,children:[],alias:[]});return t&&!n.record.aliasOf==!t.record.aliasOf&&t.children.push(n),n}function rs(e,t){const r=[],a=new Map;t=$4({strict:!1,end:!0,sensitive:!1},t);function n(d){return a.get(d)}function s(d,h,C){const p=!C,b=ns(d);b.aliasOf=C&&C.record;const M=$4(t,d),E=[b];if("alias"in d){const F=typeof d.alias=="string"?[d.alias]:d.alias;for(const k of F)E.push(_1({},b,{components:C?C.record.components:b.components,path:k,aliasOf:C?C.record:b}))}let g,_;for(const F of E){const{path:k}=F;if(h&&k[0]!=="/"){const L=h.record.path,P=L[L.length-1]==="/"?"":"/";F.path=h.record.path+(k&&P+k)}if(g=ts(F,h,M),C?C.alias.push(g):(_=_||g,_!==g&&_.alias.push(g),p&&d.name&&!B4(g)&&i(d.name)),b.children){const L=b.children;for(let P=0;P<L.length;P++)s(L[P],g,C&&C.children[P])}C=C||g,o(g)}return _?()=>{i(_)}:d3}function i(d){if(g9(d)){const h=a.get(d);h&&(a.delete(d),r.splice(r.indexOf(h),1),h.children.forEach(i),h.alias.forEach(i))}else{const h=r.indexOf(d);h>-1&&(r.splice(h,1),d.record.name&&a.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function l(){return r}function o(d){let h=0;for(;h<r.length&&Xn(d,r[h])>=0&&(d.record.path!==r[h].record.path||!y9(d,r[h]));)h++;r.splice(h,0,d),d.record.name&&!B4(d)&&a.set(d.record.name,d)}function f(d,h){let C,p={},b,M;if("name"in d&&d.name){if(C=a.get(d.name),!C)throw G0(1,{location:d});M=C.record.name,p=_1(as(h.params,C.keys.filter(_=>!_.optional).map(_=>_.name)),d.params),b=C.stringify(p)}else if("path"in d)b=d.path,C=r.find(_=>_.re.test(b)),C&&(p=C.parse(b),M=C.record.name);else{if(C=h.name?a.get(h.name):r.find(_=>_.re.test(h.path)),!C)throw G0(1,{location:d,currentLocation:h});M=C.record.name,p=_1({},h.params,d.params),b=C.stringify(p)}const E=[];let g=C;for(;g;)E.unshift(g.record),g=g.parent;return{name:M,path:b,params:p,matched:E,meta:is(E)}}return e.forEach(d=>s(d)),{addRoute:s,resolve:f,removeRoute:i,getRoutes:l,getRecordMatcher:n}}function as(e,t){const r={};for(const a of t)a in e&&(r[a]=e[a]);return r}function ns(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ss(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ss(e){const t={},r=e.props||!1;if("component"in e)t.default=r;else for(const a in e.components)t[a]=typeof r=="boolean"?r:r[a];return t}function B4(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function is(e){return e.reduce((t,r)=>_1(t,r.meta),{})}function $4(e,t){const r={};for(const a in e)r[a]=a in t?t[a]:e[a];return r}function y9(e,t){return t.children.some(r=>r===e||y9(e,r))}const L9=/#/g,ls=/&/g,os=/\//g,cs=/=/g,us=/\?/g,v9=/\+/g,fs=/%5B/g,ds=/%5D/g,_9=/%5E/g,Cs=/%60/g,k9=/%7B/g,hs=/%7C/g,b9=/%7D/g,ms=/%20/g;function m7(e){return encodeURI(""+e).replace(hs,"|").replace(fs,"[").replace(ds,"]")}function gs(e){return m7(e).replace(k9,"{").replace(b9,"}").replace(_9,"^")}function T5(e){return m7(e).replace(v9,"%2B").replace(ms,"+").replace(L9,"%23").replace(ls,"%26").replace(Cs,"`").replace(k9,"{").replace(b9,"}").replace(_9,"^")}function ps(e){return T5(e).replace(cs,"%3D")}function ys(e){return m7(e).replace(L9,"%23").replace(us,"%3F")}function Ls(e){return e==null?"":ys(e).replace(os,"%2F")}function s6(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function vs(e){const t={};if(e===""||e==="?")return t;const a=(e[0]==="?"?e.slice(1):e).split("&");for(let n=0;n<a.length;++n){const s=a[n].replace(v9," "),i=s.indexOf("="),l=s6(i<0?s:s.slice(0,i)),o=i<0?null:s6(s.slice(i+1));if(l in t){let f=t[l];k2(f)||(f=t[l]=[f]),f.push(o)}else t[l]=o}return t}function W4(e){let t="";for(let r in e){const a=e[r];if(r=ps(r),a==null){a!==void 0&&(t+=(t.length?"&":"")+r);continue}(k2(a)?a.map(s=>s&&T5(s)):[a&&T5(a)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+r,s!=null&&(t+="="+s))})}return t}function _s(e){const t={};for(const r in e){const a=e[r];a!==void 0&&(t[r]=k2(a)?a.map(n=>n==null?null:""+n):a==null?a:""+a)}return t}const ks=Symbol(""),Z4=Symbol(""),M6=Symbol(""),g7=Symbol(""),O5=Symbol("");function n3(){let e=[];function t(a){return e.push(a),()=>{const n=e.indexOf(a);n>-1&&e.splice(n,1)}}function r(){e=[]}return{add:t,list:()=>e,reset:r}}function X2(e,t,r,a,n){const s=a&&(a.enterCallbacks[n]=a.enterCallbacks[n]||[]);return()=>new Promise((i,l)=>{const o=h=>{h===!1?l(G0(4,{from:r,to:t})):h instanceof Error?l(h):Gn(h)?l(G0(2,{from:t,to:h})):(s&&a.enterCallbacks[n]===s&&typeof h=="function"&&s.push(h),i())},f=e.call(a&&a.instances[n],t,r,o);let d=Promise.resolve(f);e.length<3&&(d=d.then(o)),d.catch(h=>l(h))})}function U6(e,t,r,a){const n=[];for(const s of e)for(const i in s.components){let l=s.components[i];if(!(t!=="beforeRouteEnter"&&!s.instances[i]))if(bs(l)){const f=(l.__vccOpts||l)[t];f&&n.push(X2(f,r,a,s,i))}else{let o=l();n.push(()=>o.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${s.path}"`));const d=En(f)?f.default:f;s.components[i]=d;const C=(d.__vccOpts||d)[t];return C&&X2(C,r,a,s,i)()}))}}return n}function bs(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function U4(e){const t=f2(M6),r=f2(g7),a=X(()=>t.resolve(B(e.to))),n=X(()=>{const{matched:o}=a.value,{length:f}=o,d=o[f-1],h=r.matched;if(!d||!h.length)return-1;const C=h.findIndex(j0.bind(null,d));if(C>-1)return C;const p=j4(o[f-2]);return f>1&&j4(d)===p&&h[h.length-1].path!==p?h.findIndex(j0.bind(null,o[f-2])):C}),s=X(()=>n.value>-1&&ws(r.params,a.value.params)),i=X(()=>n.value>-1&&n.value===r.matched.length-1&&h9(r.params,a.value.params));function l(o={}){return Ss(o)?t[B(e.replace)?"replace":"push"](B(e.to)).catch(d3):Promise.resolve()}return{route:a,href:X(()=>a.value.href),isActive:s,isExactActive:i,navigate:l}}const Ms=o7({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:U4,setup(e,{slots:t}){const r=E0(U4(e)),{options:a}=f2(M6),n=X(()=>({[G4(e.activeClass,a.linkActiveClass,"router-link-active")]:r.isActive,[G4(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive}));return()=>{const s=t.default&&t.default(r);return e.custom?s:S0("a",{"aria-current":r.isExactActive?e.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:n.value},s)}}}),S6=Ms;function Ss(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ws(e,t){for(const r in t){const a=t[r],n=e[r];if(typeof a=="string"){if(a!==n)return!1}else if(!k2(n)||n.length!==a.length||a.some((s,i)=>s!==n[i]))return!1}return!0}function j4(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const G4=(e,t,r)=>e!=null?e:t!=null?t:r,Es=o7({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:r}){const a=f2(O5),n=X(()=>e.route||a.value),s=f2(Z4,0),i=X(()=>{let f=B(s);const{matched:d}=n.value;let h;for(;(h=d[f])&&!h.components;)f++;return f}),l=X(()=>n.value.matched[i.value]);B3(Z4,X(()=>i.value+1)),B3(ks,l),B3(O5,n);const o=E1();return D2(()=>[o.value,l.value,e.name],([f,d,h],[C,p,b])=>{d&&(d.instances[h]=f,p&&p!==d&&f&&f===C&&(d.leaveGuards.size||(d.leaveGuards=p.leaveGuards),d.updateGuards.size||(d.updateGuards=p.updateGuards))),f&&d&&(!p||!j0(d,p)||!C)&&(d.enterCallbacks[h]||[]).forEach(M=>M(f))},{flush:"post"}),()=>{const f=n.value,d=e.name,h=l.value,C=h&&h.components[d];if(!C)return q4(r.default,{Component:C,route:f});const p=h.props[d],b=p?p===!0?f.params:typeof p=="function"?p(f):p:null,E=S0(C,_1({},b,t,{onVnodeUnmounted:g=>{g.component.isUnmounted&&(h.instances[d]=null)},ref:o}));return q4(r.default,{Component:E,route:f})||E}}});function q4(e,t){if(!e)return null;const r=e(t);return r.length===1?r[0]:r}const M9=Es;function Fs(e){const t=rs(e.routes,e),r=e.parseQuery||vs,a=e.stringifyQuery||W4,n=e.history,s=n3(),i=n3(),l=n3(),o=ge(G2);let f=G2;P0&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=W6.bind(null,T=>""+T),h=W6.bind(null,Ls),C=W6.bind(null,s6);function p(T,q){let D,z;return g9(T)?(D=t.getRecordMatcher(T),z=q):z=T,t.addRoute(z,D)}function b(T){const q=t.getRecordMatcher(T);q&&t.removeRoute(q)}function M(){return t.getRoutes().map(T=>T.record)}function E(T){return!!t.getRecordMatcher(T)}function g(T,q){if(q=_1({},q||o.value),typeof T=="string"){const t1=Z6(r,T,q.path),c=t.resolve({path:t1.path},q),u=n.createHref(t1.fullPath);return _1(t1,c,{params:C(c.params),hash:s6(t1.hash),redirectedFrom:void 0,href:u})}let D;if("path"in T)D=_1({},T,{path:Z6(r,T.path,q.path).path});else{const t1=_1({},T.params);for(const c in t1)t1[c]==null&&delete t1[c];D=_1({},T,{params:h(T.params)}),q.params=h(q.params)}const z=t.resolve(D,q),u1=T.hash||"";z.params=d(C(z.params));const f1=Hn(a,_1({},T,{hash:gs(u1),path:z.path})),r1=n.createHref(f1);return _1({fullPath:f1,hash:u1,query:a===W4?_s(T.query):T.query||{}},z,{redirectedFrom:void 0,href:r1})}function _(T){return typeof T=="string"?Z6(r,T,o.value.path):_1({},T)}function F(T,q){if(f!==T)return G0(8,{from:q,to:T})}function k(T){return x(T)}function L(T){return k(_1(_(T),{replace:!0}))}function P(T){const q=T.matched[T.matched.length-1];if(q&&q.redirect){const{redirect:D}=q;let z=typeof D=="function"?D(T):D;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=_(z):{path:z},z.params={}),_1({query:T.query,hash:T.hash,params:"path"in z?{}:T.params},z)}}function x(T,q){const D=f=g(T),z=o.value,u1=T.state,f1=T.force,r1=T.replace===!0,t1=P(D);if(t1)return x(_1(_(t1),{state:u1,force:f1,replace:r1}),q||D);const c=D;c.redirectedFrom=q;let u;return!f1&&Tn(a,z,D)&&(u=G0(16,{to:c,from:z}),l2(z,z,!0,!1)),(u?Promise.resolve(u):I(c,z)).catch(m=>A2(m)?A2(m,2)?m:T1(m):Q(m,c,z)).then(m=>{if(m){if(A2(m,2))return x(_1({replace:r1},_(m.to),{state:u1,force:f1}),q||c)}else m=$(c,z,!0,r1,u1);return R(c,z,m),m})}function U(T,q){const D=F(T,q);return D?Promise.reject(D):Promise.resolve()}function I(T,q){let D;const[z,u1,f1]=xs(T,q);D=U6(z.reverse(),"beforeRouteLeave",T,q);for(const t1 of z)t1.leaveGuards.forEach(c=>{D.push(X2(c,T,q))});const r1=U.bind(null,T,q);return D.push(r1),O0(D).then(()=>{D=[];for(const t1 of s.list())D.push(X2(t1,T,q));return D.push(r1),O0(D)}).then(()=>{D=U6(u1,"beforeRouteUpdate",T,q);for(const t1 of u1)t1.updateGuards.forEach(c=>{D.push(X2(c,T,q))});return D.push(r1),O0(D)}).then(()=>{D=[];for(const t1 of T.matched)if(t1.beforeEnter&&!q.matched.includes(t1))if(k2(t1.beforeEnter))for(const c of t1.beforeEnter)D.push(X2(c,T,q));else D.push(X2(t1.beforeEnter,T,q));return D.push(r1),O0(D)}).then(()=>(T.matched.forEach(t1=>t1.enterCallbacks={}),D=U6(f1,"beforeRouteEnter",T,q),D.push(r1),O0(D))).then(()=>{D=[];for(const t1 of i.list())D.push(X2(t1,T,q));return D.push(r1),O0(D)}).catch(t1=>A2(t1,8)?t1:Promise.reject(t1))}function R(T,q,D){for(const z of l.list())z(T,q,D)}function $(T,q,D,z,u1){const f1=F(T,q);if(f1)return f1;const r1=q===G2,t1=P0?history.state:{};D&&(z||r1?n.replace(T.fullPath,_1({scroll:r1&&t1&&t1.scroll},u1)):n.push(T.fullPath,u1)),o.value=T,l2(T,q,D,r1),T1()}let O;function Y(){O||(O=n.listen((T,q,D)=>{if(!o2.listening)return;const z=g(T),u1=P(z);if(u1){x(_1(u1,{replace:!0}),z).catch(d3);return}f=z;const f1=o.value;P0&&Vn(N4(f1.fullPath,D.delta),b6()),I(z,f1).catch(r1=>A2(r1,12)?r1:A2(r1,2)?(x(r1.to,z).then(t1=>{A2(t1,20)&&!D.delta&&D.type===S3.pop&&n.go(-1,!1)}).catch(d3),Promise.reject()):(D.delta&&n.go(-D.delta,!1),Q(r1,z,f1))).then(r1=>{r1=r1||$(z,f1,!1),r1&&(D.delta&&!A2(r1,8)?n.go(-D.delta,!1):D.type===S3.pop&&A2(r1,20)&&n.go(-1,!1)),R(z,f1,r1)}).catch(d3)}))}let p1=n3(),R1=n3(),s1;function Q(T,q,D){T1(T);const z=R1.list();return z.length?z.forEach(u1=>u1(T,q,D)):console.error(T),Promise.reject(T)}function h1(){return s1&&o.value!==G2?Promise.resolve():new Promise((T,q)=>{p1.add([T,q])})}function T1(T){return s1||(s1=!T,Y(),p1.list().forEach(([q,D])=>T?D(T):q()),p1.reset()),T}function l2(T,q,D,z){const{scrollBehavior:u1}=e;if(!P0||!u1)return Promise.resolve();const f1=!D&&Bn(N4(T.fullPath,0))||(z||!D)&&history.state&&history.state.scroll||null;return X3().then(()=>u1(T,q,f1)).then(r1=>r1&&Dn(r1)).catch(r1=>Q(r1,T,q))}const Y1=T=>n.go(T);let G1;const Z1=new Set,o2={currentRoute:o,listening:!0,addRoute:p,removeRoute:b,hasRoute:E,getRoutes:M,resolve:g,options:e,push:k,replace:L,go:Y1,back:()=>Y1(-1),forward:()=>Y1(1),beforeEach:s.add,beforeResolve:i.add,afterEach:l.add,onError:R1.add,isReady:h1,install(T){const q=this;T.component("RouterLink",S6),T.component("RouterView",M9),T.config.globalProperties.$router=q,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>B(o)}),P0&&!G1&&o.value===G2&&(G1=!0,k(n.location).catch(u1=>{}));const D={};for(const u1 in G2)D[u1]=X(()=>o.value[u1]);T.provide(M6,q),T.provide(g7,E0(D)),T.provide(O5,o);const z=T.unmount;Z1.add(T),T.unmount=function(){Z1.delete(T),Z1.size<1&&(f=G2,O&&O(),O=null,o.value=G2,G1=!1,s1=!1),z()}}};return o2}function O0(e){return e.reduce((t,r)=>t.then(()=>r()),Promise.resolve())}function xs(e,t){const r=[],a=[],n=[],s=Math.max(t.matched.length,e.matched.length);for(let i=0;i<s;i++){const l=t.matched[i];l&&(e.matched.find(f=>j0(f,l))?a.push(l):r.push(l));const o=e.matched[i];o&&(t.matched.find(f=>j0(f,o))||n.push(o))}return[r,a,n]}function S9(){return f2(M6)}function Wd(){return f2(g7)}const Hs={__name:"App",setup(e){return(t,r)=>(W(),L1(B(M9)))}},Ts="modulepreload",Os=function(e){return"/"+e},z4={},h2=function(t,r,a){return!r||r.length===0?t():Promise.all(r.map(n=>{if(n=Os(n),n in z4)return;z4[n]=!0;const s=n.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":Ts,s||(l.as="script",l.crossOrigin=""),l.href=n,document.head.appendChild(l),s)return new Promise((o,f)=>{l.addEventListener("load",o),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())},As={aside:"bg-gray-800",asideScrollbars:"aside-scrollbars-gray",asideBrand:"bg-gray-900 text-white",asideMenuItem:"text-gray-300 hover:text-white",asideMenuItemActive:"font-bold text-white",asideMenuDropdown:"bg-gray-700/50",navBarItemLabel:"text-black",navBarItemLabelHover:"hover:text-blue-500",navBarItemLabelActiveColor:"text-blue-600",overlay:"from-gray-700 via-gray-900 to-gray-700"},Rs={aside:"bg-white",asideScrollbars:"aside-scrollbars-light",asideBrand:"",asideMenuItem:"text-blue-600 hover:text-black dark:text-white",asideMenuItemActive:"font-bold text-black dark:text-white",asideMenuDropdown:"bg-gray-100/75",navBarItemLabel:"text-blue-600",navBarItemLabelHover:"hover:text-black",navBarItemLabelActiveColor:"text-black",overlay:"from-white via-gray-100 to-white"},K4=Object.freeze(Object.defineProperty({__proto__:null,basic:As,white:Rs},Symbol.toStringTag,{value:"Module"})),A5="darkMode",w9="style",E9="xl:max-w-6xl xl:mx-auto",W2=d9("style",{state:()=>({asideStyle:"",asideScrollbarsStyle:"",asideBrandStyle:"",asideMenuItemStyle:"",asideMenuItemActiveStyle:"",asideMenuDropdownStyle:"",navBarItemLabelStyle:"",navBarItemLabelHoverStyle:"",navBarItemLabelActiveColorStyle:"",overlayStyle:"",darkMode:!1}),actions:{setStyle(e){if(!K4[e])return;typeof localStorage<"u"&&localStorage.setItem(w9,e);const t=K4[e];for(const r in t)this[`${r}Style`]=t[r]},setDarkMode(e=null){this.darkMode=e!==null?e:!this.darkMode,typeof localStorage<"u"&&localStorage.setItem(A5,this.darkMode?"1":"0"),typeof document<"u"&&(document.body.classList[this.darkMode?"add":"remove"]("dark-scrollbars"),document.documentElement.classList[this.darkMode?"add":"remove"]("dark-scrollbars-compat"))}}});var Zd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ns(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var F9={exports:{}},p7={exports:{}},x9=function(t,r){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return t.apply(r,n)}},Is=x9,y7=Object.prototype.toString,L7=function(e){return function(t){var r=y7.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())}}(Object.create(null));function F0(e){return e=e.toLowerCase(),function(r){return L7(r)===e}}function v7(e){return Array.isArray(e)}function i6(e){return typeof e>"u"}function Ps(e){return e!==null&&!i6(e)&&e.constructor!==null&&!i6(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var H9=F0("ArrayBuffer");function Ds(e){var t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&H9(e.buffer),t}function Vs(e){return typeof e=="string"}function Bs(e){return typeof e=="number"}function T9(e){return e!==null&&typeof e=="object"}function G3(e){if(L7(e)!=="object")return!1;var t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}var $s=F0("Date"),Ws=F0("File"),Zs=F0("Blob"),Us=F0("FileList");function _7(e){return y7.call(e)==="[object Function]"}function js(e){return T9(e)&&_7(e.pipe)}function Gs(e){var t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||y7.call(e)===t||_7(e.toString)&&e.toString()===t)}var qs=F0("URLSearchParams");function zs(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Ks(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function k7(e,t){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),v7(e))for(var r=0,a=e.length;r<a;r++)t.call(null,e[r],r,e);else for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.call(null,e[n],n,e)}function R5(){var e={};function t(n,s){G3(e[s])&&G3(n)?e[s]=R5(e[s],n):G3(n)?e[s]=R5({},n):v7(n)?e[s]=n.slice():e[s]=n}for(var r=0,a=arguments.length;r<a;r++)k7(arguments[r],t);return e}function Ys(e,t,r){return k7(t,function(n,s){r&&typeof n=="function"?e[s]=Is(n,r):e[s]=n}),e}function Xs(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function Js(e,t,r,a){e.prototype=Object.create(t.prototype,a),e.prototype.constructor=e,r&&Object.assign(e.prototype,r)}function Qs(e,t,r){var a,n,s,i={};t=t||{};do{for(a=Object.getOwnPropertyNames(e),n=a.length;n-- >0;)s=a[n],i[s]||(t[s]=e[s],i[s]=!0);e=Object.getPrototypeOf(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t}function ei(e,t,r){e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;var a=e.indexOf(t,r);return a!==-1&&a===r}function ti(e){if(!e)return null;var t=e.length;if(i6(t))return null;for(var r=new Array(t);t-- >0;)r[t]=e[t];return r}var ri=function(e){return function(t){return e&&t instanceof e}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),j1={isArray:v7,isArrayBuffer:H9,isBuffer:Ps,isFormData:Gs,isArrayBufferView:Ds,isString:Vs,isNumber:Bs,isObject:T9,isPlainObject:G3,isUndefined:i6,isDate:$s,isFile:Ws,isBlob:Zs,isFunction:_7,isStream:js,isURLSearchParams:qs,isStandardBrowserEnv:Ks,forEach:k7,merge:R5,extend:Ys,trim:zs,stripBOM:Xs,inherits:Js,toFlatObject:Qs,kindOf:L7,kindOfTest:F0,endsWith:ei,toArray:ti,isTypedArray:ri,isFileList:Us},A0=j1;function Y4(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var O9=function(t,r,a){if(!r)return t;var n;if(a)n=a(r);else if(A0.isURLSearchParams(r))n=r.toString();else{var s=[];A0.forEach(r,function(o,f){o===null||typeof o>"u"||(A0.isArray(o)?f=f+"[]":o=[o],A0.forEach(o,function(h){A0.isDate(h)?h=h.toISOString():A0.isObject(h)&&(h=JSON.stringify(h)),s.push(Y4(f)+"="+Y4(h))}))}),n=s.join("&")}if(n){var i=t.indexOf("#");i!==-1&&(t=t.slice(0,i)),t+=(t.indexOf("?")===-1?"?":"&")+n}return t},ai=j1;function w6(){this.handlers=[]}w6.prototype.use=function(t,r,a){return this.handlers.push({fulfilled:t,rejected:r,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};w6.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)};w6.prototype.forEach=function(t){ai.forEach(this.handlers,function(a){a!==null&&t(a)})};var ni=w6,si=j1,ii=function(t,r){si.forEach(t,function(n,s){s!==r&&s.toUpperCase()===r.toUpperCase()&&(t[r]=n,delete t[s])})},A9=j1;function q0(e,t,r,a,n){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),a&&(this.request=a),n&&(this.response=n)}A9.inherits(q0,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var R9=q0.prototype,N9={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){N9[e]={value:e}});Object.defineProperties(q0,N9);Object.defineProperty(R9,"isAxiosError",{value:!0});q0.from=function(e,t,r,a,n,s){var i=Object.create(R9);return A9.toFlatObject(e,i,function(o){return o!==Error.prototype}),q0.call(i,e.message,t,r,a,n),i.name=e.name,s&&Object.assign(i,s),i};var e3=q0,I9={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},m2=j1;function li(e,t){t=t||new FormData;var r=[];function a(s){return s===null?"":m2.isDate(s)?s.toISOString():m2.isArrayBuffer(s)||m2.isTypedArray(s)?typeof Blob=="function"?new Blob([s]):Buffer.from(s):s}function n(s,i){if(m2.isPlainObject(s)||m2.isArray(s)){if(r.indexOf(s)!==-1)throw Error("Circular reference detected in "+i);r.push(s),m2.forEach(s,function(o,f){if(!m2.isUndefined(o)){var d=i?i+"."+f:f,h;if(o&&!i&&typeof o=="object"){if(m2.endsWith(f,"{}"))o=JSON.stringify(o);else if(m2.endsWith(f,"[]")&&(h=m2.toArray(o))){h.forEach(function(C){!m2.isUndefined(C)&&t.append(d,a(C))});return}}n(o,d)}}),r.pop()}else t.append(i,a(s))}return n(e),t}var P9=li,j6,X4;function oi(){if(X4)return j6;X4=1;var e=e3;return j6=function(r,a,n){var s=n.config.validateStatus;!n.status||!s||s(n.status)?r(n):a(new e("Request failed with status code "+n.status,[e.ERR_BAD_REQUEST,e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},j6}var G6,J4;function ci(){if(J4)return G6;J4=1;var e=j1;return G6=e.isStandardBrowserEnv()?function(){return{write:function(a,n,s,i,l,o){var f=[];f.push(a+"="+encodeURIComponent(n)),e.isNumber(s)&&f.push("expires="+new Date(s).toGMTString()),e.isString(i)&&f.push("path="+i),e.isString(l)&&f.push("domain="+l),o===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(a){var n=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(a){this.write(a,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),G6}var ui=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)},fi=function(t,r){return r?t.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):t},di=ui,Ci=fi,D9=function(t,r){return t&&!di(r)?Ci(t,r):r},q6,Q4;function hi(){if(Q4)return q6;Q4=1;var e=j1,t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return q6=function(a){var n={},s,i,l;return a&&e.forEach(a.split(`
`),function(f){if(l=f.indexOf(":"),s=e.trim(f.substr(0,l)).toLowerCase(),i=e.trim(f.substr(l+1)),s){if(n[s]&&t.indexOf(s)>=0)return;s==="set-cookie"?n[s]=(n[s]?n[s]:[]).concat([i]):n[s]=n[s]?n[s]+", "+i:i}}),n},q6}var z6,e8;function mi(){if(e8)return z6;e8=1;var e=j1;return z6=e.isStandardBrowserEnv()?function(){var r=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a"),n;function s(i){var l=i;return r&&(a.setAttribute("href",l),l=a.href),a.setAttribute("href",l),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:a.pathname.charAt(0)==="/"?a.pathname:"/"+a.pathname}}return n=s(window.location.href),function(l){var o=e.isString(l)?s(l):l;return o.protocol===n.protocol&&o.host===n.host}}():function(){return function(){return!0}}(),z6}var K6,t8;function E6(){if(t8)return K6;t8=1;var e=e3,t=j1;function r(a){e.call(this,a==null?"canceled":a,e.ERR_CANCELED),this.name="CanceledError"}return t.inherits(r,e,{__CANCEL__:!0}),K6=r,K6}var Y6,r8;function gi(){return r8||(r8=1,Y6=function(t){var r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return r&&r[1]||""}),Y6}var X6,a8;function n8(){if(a8)return X6;a8=1;var e=j1,t=oi(),r=ci(),a=O9,n=D9,s=hi(),i=mi(),l=I9,o=e3,f=E6(),d=gi();return X6=function(C){return new Promise(function(b,M){var E=C.data,g=C.headers,_=C.responseType,F;function k(){C.cancelToken&&C.cancelToken.unsubscribe(F),C.signal&&C.signal.removeEventListener("abort",F)}e.isFormData(E)&&e.isStandardBrowserEnv()&&delete g["Content-Type"];var L=new XMLHttpRequest;if(C.auth){var P=C.auth.username||"",x=C.auth.password?unescape(encodeURIComponent(C.auth.password)):"";g.Authorization="Basic "+btoa(P+":"+x)}var U=n(C.baseURL,C.url);L.open(C.method.toUpperCase(),a(U,C.params,C.paramsSerializer),!0),L.timeout=C.timeout;function I(){if(!!L){var O="getAllResponseHeaders"in L?s(L.getAllResponseHeaders()):null,Y=!_||_==="text"||_==="json"?L.responseText:L.response,p1={data:Y,status:L.status,statusText:L.statusText,headers:O,config:C,request:L};t(function(s1){b(s1),k()},function(s1){M(s1),k()},p1),L=null}}if("onloadend"in L?L.onloadend=I:L.onreadystatechange=function(){!L||L.readyState!==4||L.status===0&&!(L.responseURL&&L.responseURL.indexOf("file:")===0)||setTimeout(I)},L.onabort=function(){!L||(M(new o("Request aborted",o.ECONNABORTED,C,L)),L=null)},L.onerror=function(){M(new o("Network Error",o.ERR_NETWORK,C,L,L)),L=null},L.ontimeout=function(){var Y=C.timeout?"timeout of "+C.timeout+"ms exceeded":"timeout exceeded",p1=C.transitional||l;C.timeoutErrorMessage&&(Y=C.timeoutErrorMessage),M(new o(Y,p1.clarifyTimeoutError?o.ETIMEDOUT:o.ECONNABORTED,C,L)),L=null},e.isStandardBrowserEnv()){var R=(C.withCredentials||i(U))&&C.xsrfCookieName?r.read(C.xsrfCookieName):void 0;R&&(g[C.xsrfHeaderName]=R)}"setRequestHeader"in L&&e.forEach(g,function(Y,p1){typeof E>"u"&&p1.toLowerCase()==="content-type"?delete g[p1]:L.setRequestHeader(p1,Y)}),e.isUndefined(C.withCredentials)||(L.withCredentials=!!C.withCredentials),_&&_!=="json"&&(L.responseType=C.responseType),typeof C.onDownloadProgress=="function"&&L.addEventListener("progress",C.onDownloadProgress),typeof C.onUploadProgress=="function"&&L.upload&&L.upload.addEventListener("progress",C.onUploadProgress),(C.cancelToken||C.signal)&&(F=function(O){!L||(M(!O||O&&O.type?new f:O),L.abort(),L=null)},C.cancelToken&&C.cancelToken.subscribe(F),C.signal&&(C.signal.aborted?F():C.signal.addEventListener("abort",F))),E||(E=null);var $=d(U);if($&&["http","https","file"].indexOf($)===-1){M(new o("Unsupported protocol "+$+":",o.ERR_BAD_REQUEST,C));return}L.send(E)})},X6}var J6,s8;function pi(){return s8||(s8=1,J6=null),J6}var D1=j1,i8=ii,l8=e3,yi=I9,Li=P9,vi={"Content-Type":"application/x-www-form-urlencoded"};function o8(e,t){!D1.isUndefined(e)&&D1.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function _i(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=n8()),e}function ki(e,t,r){if(D1.isString(e))try{return(t||JSON.parse)(e),D1.trim(e)}catch(a){if(a.name!=="SyntaxError")throw a}return(r||JSON.stringify)(e)}var F6={transitional:yi,adapter:_i(),transformRequest:[function(t,r){if(i8(r,"Accept"),i8(r,"Content-Type"),D1.isFormData(t)||D1.isArrayBuffer(t)||D1.isBuffer(t)||D1.isStream(t)||D1.isFile(t)||D1.isBlob(t))return t;if(D1.isArrayBufferView(t))return t.buffer;if(D1.isURLSearchParams(t))return o8(r,"application/x-www-form-urlencoded;charset=utf-8"),t.toString();var a=D1.isObject(t),n=r&&r["Content-Type"],s;if((s=D1.isFileList(t))||a&&n==="multipart/form-data"){var i=this.env&&this.env.FormData;return Li(s?{"files[]":t}:t,i&&new i)}else if(a||n==="application/json")return o8(r,"application/json"),ki(t);return t}],transformResponse:[function(t){var r=this.transitional||F6.transitional,a=r&&r.silentJSONParsing,n=r&&r.forcedJSONParsing,s=!a&&this.responseType==="json";if(s||n&&D1.isString(t)&&t.length)try{return JSON.parse(t)}catch(i){if(s)throw i.name==="SyntaxError"?l8.from(i,l8.ERR_BAD_RESPONSE,this,null,this.response):i}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:pi()},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};D1.forEach(["delete","get","head"],function(t){F6.headers[t]={}});D1.forEach(["post","put","patch"],function(t){F6.headers[t]=D1.merge(vi)});var b7=F6,bi=j1,Mi=b7,Si=function(t,r,a){var n=this||Mi;return bi.forEach(a,function(i){t=i.call(n,t,r)}),t},Q6,c8;function V9(){return c8||(c8=1,Q6=function(t){return!!(t&&t.__CANCEL__)}),Q6}var u8=j1,e5=Si,wi=V9(),Ei=b7,Fi=E6();function t5(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Fi}var xi=function(t){t5(t),t.headers=t.headers||{},t.data=e5.call(t,t.data,t.headers,t.transformRequest),t.headers=u8.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),u8.forEach(["delete","get","head","post","put","patch","common"],function(n){delete t.headers[n]});var r=t.adapter||Ei.adapter;return r(t).then(function(n){return t5(t),n.data=e5.call(t,n.data,n.headers,t.transformResponse),n},function(n){return wi(n)||(t5(t),n&&n.response&&(n.response.data=e5.call(t,n.response.data,n.response.headers,t.transformResponse))),Promise.reject(n)})},n2=j1,B9=function(t,r){r=r||{};var a={};function n(d,h){return n2.isPlainObject(d)&&n2.isPlainObject(h)?n2.merge(d,h):n2.isPlainObject(h)?n2.merge({},h):n2.isArray(h)?h.slice():h}function s(d){if(n2.isUndefined(r[d])){if(!n2.isUndefined(t[d]))return n(void 0,t[d])}else return n(t[d],r[d])}function i(d){if(!n2.isUndefined(r[d]))return n(void 0,r[d])}function l(d){if(n2.isUndefined(r[d])){if(!n2.isUndefined(t[d]))return n(void 0,t[d])}else return n(void 0,r[d])}function o(d){if(d in r)return n(t[d],r[d]);if(d in t)return n(void 0,t[d])}var f={url:i,method:i,data:i,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:o};return n2.forEach(Object.keys(t).concat(Object.keys(r)),function(h){var C=f[h]||s,p=C(h);n2.isUndefined(p)&&C!==o||(a[h]=p)}),a},r5,f8;function $9(){return f8||(f8=1,r5={version:"0.27.2"}),r5}var Hi=$9().version,J2=e3,M7={};["object","boolean","number","function","string","symbol"].forEach(function(e,t){M7[e]=function(a){return typeof a===e||"a"+(t<1?"n ":" ")+e}});var d8={};M7.transitional=function(t,r,a){function n(s,i){return"[Axios v"+Hi+"] Transitional option '"+s+"'"+i+(a?". "+a:"")}return function(s,i,l){if(t===!1)throw new J2(n(i," has been removed"+(r?" in "+r:"")),J2.ERR_DEPRECATED);return r&&!d8[i]&&(d8[i]=!0,console.warn(n(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(s,i,l):!0}};function Ti(e,t,r){if(typeof e!="object")throw new J2("options must be an object",J2.ERR_BAD_OPTION_VALUE);for(var a=Object.keys(e),n=a.length;n-- >0;){var s=a[n],i=t[s];if(i){var l=e[s],o=l===void 0||i(l,s,e);if(o!==!0)throw new J2("option "+s+" must be "+o,J2.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new J2("Unknown option "+s,J2.ERR_BAD_OPTION)}}var Oi={assertOptions:Ti,validators:M7},W9=j1,Ai=O9,C8=ni,h8=xi,x6=B9,Ri=D9,Z9=Oi,R0=Z9.validators;function z0(e){this.defaults=e,this.interceptors={request:new C8,response:new C8}}z0.prototype.request=function(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=x6(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var a=r.transitional;a!==void 0&&Z9.assertOptions(a,{silentJSONParsing:R0.transitional(R0.boolean),forcedJSONParsing:R0.transitional(R0.boolean),clarifyTimeoutError:R0.transitional(R0.boolean)},!1);var n=[],s=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(r)===!1||(s=s&&p.synchronous,n.unshift(p.fulfilled,p.rejected))});var i=[];this.interceptors.response.forEach(function(p){i.push(p.fulfilled,p.rejected)});var l;if(!s){var o=[h8,void 0];for(Array.prototype.unshift.apply(o,n),o=o.concat(i),l=Promise.resolve(r);o.length;)l=l.then(o.shift(),o.shift());return l}for(var f=r;n.length;){var d=n.shift(),h=n.shift();try{f=d(f)}catch(C){h(C);break}}try{l=h8(f)}catch(C){return Promise.reject(C)}for(;i.length;)l=l.then(i.shift(),i.shift());return l};z0.prototype.getUri=function(t){t=x6(this.defaults,t);var r=Ri(t.baseURL,t.url);return Ai(r,t.params,t.paramsSerializer)};W9.forEach(["delete","get","head","options"],function(t){z0.prototype[t]=function(r,a){return this.request(x6(a||{},{method:t,url:r,data:(a||{}).data}))}});W9.forEach(["post","put","patch"],function(t){function r(a){return function(s,i,l){return this.request(x6(l||{},{method:t,headers:a?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}z0.prototype[t]=r(),z0.prototype[t+"Form"]=r(!0)});var Ni=z0,a5,m8;function Ii(){if(m8)return a5;m8=1;var e=E6();function t(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var a;this.promise=new Promise(function(i){a=i});var n=this;this.promise.then(function(s){if(!!n._listeners){var i,l=n._listeners.length;for(i=0;i<l;i++)n._listeners[i](s);n._listeners=null}}),this.promise.then=function(s){var i,l=new Promise(function(o){n.subscribe(o),i=o}).then(s);return l.cancel=function(){n.unsubscribe(i)},l},r(function(i){n.reason||(n.reason=new e(i),a(n.reason))})}return t.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},t.prototype.subscribe=function(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]},t.prototype.unsubscribe=function(a){if(!!this._listeners){var n=this._listeners.indexOf(a);n!==-1&&this._listeners.splice(n,1)}},t.source=function(){var a,n=new t(function(i){a=i});return{token:n,cancel:a}},a5=t,a5}var n5,g8;function Pi(){return g8||(g8=1,n5=function(t){return function(a){return t.apply(null,a)}}),n5}var s5,p8;function Di(){if(p8)return s5;p8=1;var e=j1;return s5=function(r){return e.isObject(r)&&r.isAxiosError===!0},s5}var y8=j1,Vi=x9,q3=Ni,Bi=B9,$i=b7;function U9(e){var t=new q3(e),r=Vi(q3.prototype.request,t);return y8.extend(r,q3.prototype,t),y8.extend(r,t),r.create=function(n){return U9(Bi(e,n))},r}var t2=U9($i);t2.Axios=q3;t2.CanceledError=E6();t2.CancelToken=Ii();t2.isCancel=V9();t2.VERSION=$9().version;t2.toFormData=P9;t2.AxiosError=e3;t2.Cancel=t2.CanceledError;t2.all=function(t){return Promise.all(t)};t2.spread=Pi();t2.isAxiosError=Di();p7.exports=t2;p7.exports.default=t2;(function(e){e.exports=p7.exports})(F9);const t0=Ns(F9.exports),i0=d9("main",{state:()=>({api:"http://127.0.0.1:8000",access_token:null,lang:"de-CH",user:{firstname:"Loading",avatar:{}},isFieldFocusRegistered:!1,config:{},clients:[],history:[]}),actions:{setUser(e){e&&(this.user=e)},fetchConfig(){t0.get(`${this.api}/config/`).then(e=>{e.data&&(this.config=e.data)}).catch(e=>{alert(e.message)})},setAccessToken(e){e&&(this.access_token=e)},fetch(e){t0.get(`data-sources/${e}.json`).then(t=>{t.data&&t.data.data&&(this[e]=t.data.data)}).catch(t=>{alert(t.message)})}},persist:!0}),S7="bg-gradient-to-tr",Ud=`${S7} from-purple-400 via-pink-500 to-red-500`,jd=`${S7} from-slate-700 via-slate-900 to-slate-800`,Gd=`${S7} from-pink-400 via-red-500 to-yellow-500`,w7={white:"bg-white text-black",light:"bg-white text-black dark:bg-slate-900/70 dark:text-white",contrast:"bg-gray-800 text-white dark:bg-white dark:text-black",success:"bg-emerald-500 border-emerald-500 text-white",danger:"bg-red-500 border-red-500 text-white",warning:"bg-yellow-500 border-yellow-500 text-white",info:"bg-blue-500 border-blue-500 text-white"},K2={white:"text-black dark:text-slate-100",light:"text-gray-700 dark:text-slate-400",contrast:"dark:text-white",success:"text-emerald-500",danger:"text-red-500",warning:"text-yellow-500",info:"text-blue-500"},j9={white:[K2.white,"border-gray-100"],light:[K2.light,"border-gray-100"],contrast:[K2.contrast,"border-gray-900 dark:border-slate-100"],success:[K2.success,"border-emerald-500"],danger:[K2.danger,"border-red-500"],warning:[K2.warning,"border-yellow-500"],info:[K2.info,"border-blue-500"]},G9=(e,t,r,a=!1)=>{const n={ring:{white:"ring-gray-200 dark:ring-gray-500",whiteDark:"ring-gray-200 dark:ring-gray-500",lightDark:"ring-gray-200 dark:ring-gray-500",contrast:"ring-gray-300 dark:ring-gray-400",success:"ring-emerald-300 dark:ring-emerald-700",danger:"ring-red-300 dark:ring-red-700",warning:"ring-yellow-300 dark:ring-yellow-700",info:"ring-blue-300 dark:ring-blue-700"},active:{white:"bg-gray-100",whiteDark:"bg-gray-100 dark:bg-slate-800",lightDark:"bg-gray-200 dark:bg-slate-700",contrast:"bg-gray-700 dark:bg-slate-100",success:"bg-emerald-700 dark:bg-emerald-600",danger:"bg-red-700 dark:bg-red-600",warning:"bg-yellow-700 dark:bg-yellow-600",info:"bg-blue-700 dark:bg-blue-600"},bg:{white:"bg-white text-black",whiteDark:"bg-white text-black dark:bg-slate-900 dark:text-white",lightDark:"bg-gray-100 text-black dark:bg-slate-800 dark:text-white",contrast:"bg-gray-800 text-white dark:bg-white dark:text-black",success:"bg-emerald-600 dark:bg-emerald-500 text-white",danger:"bg-red-600 dark:bg-red-500 text-white",warning:"bg-yellow-600 dark:bg-yellow-500 text-white",info:"bg-blue-600 dark:bg-blue-500 text-white"},bgHover:{white:"hover:bg-gray-100",whiteDark:"hover:bg-gray-100 hover:dark:bg-slate-800",lightDark:"hover:bg-gray-200 hover:dark:bg-slate-700",contrast:"hover:bg-gray-700 hover:dark:bg-slate-100",success:"hover:bg-emerald-700 hover:border-emerald-700 hover:dark:bg-emerald-600 hover:dark:border-emerald-600",danger:"hover:bg-red-700 hover:border-red-700 hover:dark:bg-red-600 hover:dark:border-red-600",warning:"hover:bg-yellow-700 hover:border-yellow-700 hover:dark:bg-yellow-600 hover:dark:border-yellow-600",info:"hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600"},borders:{white:"border-white",whiteDark:"border-white dark:border-slate-900",lightDark:"border-gray-100 dark:border-slate-800",contrast:"border-gray-800 dark:border-white",success:"border-emerald-600 dark:border-emerald-500",danger:"border-red-600 dark:border-red-500",warning:"border-yellow-600 dark:border-yellow-500",info:"border-blue-600 dark:border-blue-500"},text:{contrast:"dark:text-slate-100",success:"text-emerald-600 dark:text-emerald-500",danger:"text-red-600 dark:text-red-500",warning:"text-yellow-600 dark:text-yellow-500",info:"text-blue-600 dark:text-blue-500"},outlineHover:{contrast:"hover:bg-gray-800 hover:text-gray-100 hover:dark:bg-slate-100 hover:dark:text-black",success:"hover:bg-emerald-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-emerald-600",danger:"hover:bg-red-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-red-600",warning:"hover:bg-yellow-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-yellow-600",info:"hover:bg-blue-600 hover:text-white hover:dark:text-white hover:dark:border-blue-600"}};if(!n.bg[e])return e;const s=t&&["white","whiteDark","lightDark"].indexOf(e)<0,i=[n.borders[e],n.ring[e]];return a?i.push(n.active[e]):i.push(s?n.text[e]:n.bg[e]),r&&i.push(s?n.outlineHover[e]:n.bgHover[e]),i},Wi={__name:"SectionMain",setup(e){return(t,r)=>(W(),l1("section",{class:i1(["p-6",B(E9)])},[K1(t.$slots,"default")],2))}},Zi={__name:"CardBoxComponentBody",props:{noPadding:Boolean},setup(e){return(t,r)=>(W(),l1("div",{class:i1(["flex-1",{"p-6":!e.noPadding}])},[K1(t.$slots,"default")],2))}},q9=(e,t)=>{const r=e.__vccOpts||e;for(const[a,n]of t)r[a]=n;return r},Ui={},ji={class:"p-6"};function Gi(e,t){return W(),l1("footer",ji,[K1(e.$slots,"default")])}const qi=q9(Ui,[["render",Gi]]),z9={__name:"CardBox",props:{rounded:{type:String,default:"rounded-2xl"},flex:{type:String,default:"flex-col"},hasComponentLayout:Boolean,hasTable:Boolean,isForm:Boolean,isHoverable:Boolean,isModal:Boolean},emits:["submit"],setup(e,{emit:t}){const r=e,a=d7(),n=X(()=>a.footer&&!!a.footer()),s=X(()=>{const l=[r.rounded,r.flex,r.isModal?"dark:bg-slate-900":"dark:bg-slate-900/70"];return r.isHoverable&&l.push("hover:shadow-lg transition-shadow duration-500"),l}),i=l=>{t("submit",l)};return(l,o)=>(W(),L1(y6(e.isForm?"form":"div"),{class:i1([B(s),"bg-white flex"]),onSubmit:i},{default:F1(()=>[e.hasComponentLayout?K1(l.$slots,"default",{key:0}):(W(),l1(O1,{key:1},[a1(Zi,{"no-padding":e.hasTable},{default:F1(()=>[K1(l.$slots,"default")]),_:3},8,["no-padding"]),B(n)?(W(),L1(qi,{key:0},{default:F1(()=>[K1(l.$slots,"footer")]),_:3})):$1("",!0)],64))]),_:3},40,["class"]))}},zi={class:"bg-gray-50 dark:bg-slate-800 dark:text-slate-100"},Ki={__name:"LayoutGuest",setup(e){const t=W2();return(r,a)=>(W(),l1("div",{class:i1({dark:B(t).darkMode})},[K("div",zi,[K1(r.$slots,"default")])],2))}},Yi=K("div",null,null,-1),Xi={__name:"StartView",setup(e){W2();const t=i0(),r=S9();return t0.defaults.baseURL=t.api,t0.defaults.headers.common.Authorization="Bearer "+t.access_token,t.access_token!=null?t0.get("/users/me").then(a=>{r.push("/dashboard")}).catch(a=>{console.log(a.response.status),t.access_token=null,t.user=null,r.push("/login")}):r.push("/login"),(a,n)=>(W(),L1(Ki,null,{default:F1(()=>[Yi]),_:1}))}};var Ji="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",Qi="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z",el="M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z",qd="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z",zd="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",Kd="M21 13H14.4L19.1 17.7L17.7 19.1L13 14.4V21H11V14.3L6.3 19L4.9 17.6L9.4 13H3V11H9.6L4.9 6.3L6.3 4.9L11 9.6V3H13V9.4L17.6 4.8L19 6.3L14.3 11H21V13Z",tl="M5,13L9,17L7.6,18.42L1.18,12L7.6,5.58L9,7L5,11H21V13H5M21,6V8H11V6H21M21,16V18H11V16H21Z",Yd="M13,7.5H18V9.5H13V7.5M13,14.5H18V16.5H13V14.5M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M19,19V5H5V19H19M11,6V11H6V6H11M10,10V7H7V10H10M11,13V18H6V13H11M10,17V14H7V17H10Z",rl="M15 15V17H23V15M14.97 11.61C14.85 10.28 13.59 8.97 12 9C10.3 9.03 9 10.3 9 12C9 13.7 10.3 14.94 12 15C12.38 15 12.77 14.92 13.14 14.77C13.41 13.67 13.86 12.63 14.97 11.61M13 16H7C7 14.9 6.11 14 5 14V10C6.11 10 7 9.11 7 8H17C17 9.11 17.9 10 19 10V10.06C19.67 10.06 20.34 10.18 21 10.4V6H3V18H13.32C13.1 17.33 13 16.66 13 16Z",al="M15 15V17H18V20H20V17H23V15H20V12H18V15M14.97 11.61C14.85 10.28 13.59 8.97 12 9C10.3 9.03 9 10.3 9 12C9 13.7 10.3 14.94 12 15C12.38 15 12.77 14.92 13.14 14.77C13.41 13.67 13.86 12.63 14.97 11.61M13 16H7C7 14.9 6.11 14 5 14V10C6.11 10 7 9.11 7 8H17C17 9.11 17.9 10 19 10V10.06C19.67 10.06 20.34 10.18 21 10.4V6H3V18H13.32C13.1 17.33 13 16.66 13 16Z",Xd="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",Jd="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z",nl="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",sl="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",E7="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",il="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z",Qd="M12,20C9.79,20 7.79,19.1 6.34,17.66L17.66,6.34C19.1,7.79 20,9.79 20,12A8,8 0 0,1 12,20M6,8H8V6H9.5V8H11.5V9.5H9.5V11.5H8V9.5H6M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,16H17V14.5H12V16Z",ll="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z",ol="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",cl="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z",eC="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z",ul="M6,6H18V9.96L12,8L6,9.96M3.94,19H4C5.6,19 7,18.12 8,17C9,18.12 10.4,19 12,19C13.6,19 15,18.12 16,17C17,18.12 18.4,19 20,19H20.05L21.95,12.31C22.03,12.06 22,11.78 21.89,11.54C21.76,11.3 21.55,11.12 21.29,11.04L20,10.62V6C20,4.89 19.1,4 18,4H15V1H9V4H6A2,2 0 0,0 4,6V10.62L2.71,11.04C2.45,11.12 2.24,11.3 2.11,11.54C2,11.78 1.97,12.06 2.05,12.31M20,21C18.61,21 17.22,20.53 16,19.67C13.56,21.38 10.44,21.38 8,19.67C6.78,20.53 5.39,21 4,21H2V23H4C5.37,23 6.74,22.65 8,22C10.5,23.3 13.5,23.3 16,22C17.26,22.65 18.62,23 20,23H22V21H20Z",tC="M17,7H22V17H17V19A1,1 0 0,0 18,20H20V22H17.5C16.95,22 16,21.55 16,21C16,21.55 15.05,22 14.5,22H12V20H14A1,1 0 0,0 15,19V5A1,1 0 0,0 14,4H12V2H14.5C15.05,2 16,2.45 16,3C16,2.45 16.95,2 17.5,2H20V4H18A1,1 0 0,0 17,5V7M2,7H13V9H4V15H13V17H2V7M20,15V9H17V15H20M8.5,12A1.5,1.5 0 0,0 7,10.5A1.5,1.5 0 0,0 5.5,12A1.5,1.5 0 0,0 7,13.5A1.5,1.5 0 0,0 8.5,12M13,10.89C12.39,10.33 11.44,10.38 10.88,11C10.32,11.6 10.37,12.55 11,13.11C11.55,13.63 12.43,13.63 13,13.11V10.89Z",fl="M19,13H3V11H19L15,7L16.4,5.6L22.8,12L16.4,18.4L15,17L19,13M3,6H13V8H3V6M13,16V18H3V16H13Z",rC="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z",aC="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",N5="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z",nC="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M17,17H7V15H17M17,13H7V11H17M20,9H17V6H20",dl="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",Cl="M19,13H5V11H19V13Z",hl="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z",ml="M23,11H18A1,1 0 0,0 17,12V21A1,1 0 0,0 18,22H23A1,1 0 0,0 24,21V12A1,1 0 0,0 23,11M23,20H18V13H23V20M20,2H2C0.89,2 0,2.89 0,4V16A2,2 0 0,0 2,18H9V20H7V22H15V20H13V18H15V16H2V4H20V9H22V4C22,2.89 21.1,2 20,2Z",sC="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z",gl="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",iC="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",pl="M3 22L4.5 20.5L6 22L7.5 20.5L9 22L10.5 20.5L12 22L13.5 20.5L15 22L16.5 20.5L18 22L19.5 20.5L21 22V2L19.5 3.5L18 2L16.5 3.5L15 2L13.5 3.5L12 2L10.5 3.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2",lC="M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z",oC="M2,11L4.05,11.1C4.3,8.83 5.5,6.85 7.25,5.56L6.13,3.84C5.86,3.36 6,2.75 6.5,2.47C7,2.2 7.59,2.36 7.87,2.84L8.8,4.66C9.78,4.24 10.86,4 12,4C13.14,4 14.22,4.24 15.2,4.66L16.13,2.84C16.41,2.36 17,2.2 17.5,2.47C18,2.75 18.14,3.36 17.87,3.84L16.75,5.56C18.5,6.85 19.7,8.83 19.95,11.1L22,11A1,1 0 0,1 23,12A1,1 0 0,1 22,13L19.95,12.9C19.7,15.17 18.5,17.15 16.75,18.44L17.87,20.16C18.14,20.64 18,21.25 17.5,21.53C17,21.8 16.41,21.64 16.13,21.16L15.2,19.34C14.22,19.76 13.14,20 12,20C10.86,20 9.78,19.76 8.8,19.34L7.87,21.16C7.59,21.64 7,21.8 6.5,21.53C6,21.25 5.86,20.64 6.13,20.16L7.25,18.44C5.5,17.15 4.3,15.17 4.05,12.9L2,13A1,1 0 0,1 1,12A1,1 0 0,1 2,11M9.07,11.35C9.2,10.74 9.53,10.2 10,9.79L8.34,7.25C7.11,8.19 6.27,9.6 6.05,11.2L9.07,11.35M12,9C12.32,9 12.62,9.05 12.9,9.14L14.28,6.45C13.58,6.16 12.81,6 12,6C11.19,6 10.42,6.16 9.72,6.45L11.1,9.14C11.38,9.05 11.68,9 12,9M14.93,11.35L17.95,11.2C17.73,9.6 16.89,8.19 15.66,7.25L14,9.79C14.47,10.2 14.8,10.74 14.93,11.35M14.93,12.65C14.8,13.26 14.47,13.8 14,14.21L15.66,16.75C16.89,15.81 17.73,14.4 17.95,12.8L14.93,12.65M12,15C11.68,15 11.38,14.95 11.09,14.86L9.72,17.55C10.42,17.84 11.19,18 12,18C12.81,18 13.58,17.84 14.28,17.55L12.91,14.86C12.62,14.95 12.32,15 12,15M9.07,12.65L6.05,12.8C6.27,14.4 7.11,15.81 8.34,16.75L10,14.21C9.53,13.8 9.2,13.26 9.07,12.65Z",yl="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z",cC="M21,19A1,1 0 0,1 20,20H19V18H21V19M15,20V18H17V20H15M11,20V18H13V20H11M7,20V18H9V20H7M4,20A1,1 0 0,1 3,19V18H5V20H4M19,4H5A2,2 0 0,0 3,6V8H5L11,8H13L19,8H21V6C21,4.89 20.11,4 19,4M5,14H3V16H5V14M5,10H3V12H5V10M21,10H19V12H21V10M21,14H19V16H21V14M11,16V14H13V16H11M11,12V10H13V12H11",uC="M22.11 21.46L2.39 1.73L1.11 3L3.22 5.11C3.08 5.38 3 5.68 3 6V18C3 19.11 3.9 20 5 20H18.11L20.84 22.73L22.11 21.46M10.11 12H5V8H6.11L10.11 12M11 18H5V14H11V18M13 18V14.89L16.11 18H13M13 9.8L7.2 4H19C20.11 4 21 4.89 21 6V17.8L19 15.8V14H17.2L15.2 12H19V8H13V9.8Z",fC="M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z",Ll="M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z",dC="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z",CC="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z",hC="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z";const I5=o7({name:"BaseLevel",props:{mobile:Boolean,type:{type:String,default:"justify-between"}},render(){const e=[this.type,"items-center"],t=["flex"],r=["block","md:flex"],a=["flex","items-center","justify-center"];return S0("div",{class:e.concat(this.mobile?t:r)},this.$slots.default().map((n,s)=>{const i=!this.mobile&&this.$slots.default().length>s+1?a.concat(["mb-6","md:mb-0"]):a;return S0("div",{class:i},[n])}))}}),vl=["width","height"],_l=["d"],r2={__name:"BaseIcon",props:{path:{type:String,required:!0},w:{type:String,default:"w-6"},h:{type:String,default:"h-6"},size:{type:[String,Number],default:null}},setup(e){const t=e,r=X(()=>`inline-flex justify-center items-center ${t.w} ${t.h}`),a=X(()=>{var n;return(n=t.size)!=null?n:16});return(n,s)=>(W(),l1("span",{class:i1(B(r))},[(W(),l1("svg",{viewBox:"0 0 24 24",width:B(a),height:B(a),class:"inline-block"},[K("path",{fill:"currentColor",d:e.path},null,8,_l)],8,vl)),K1(n.$slots,"default")],2))}},kl={__name:"BaseButton",props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},iconSize:{type:[String,Number],default:null},href:{type:String,default:null},target:{type:String,default:null},to:{type:[String,Object],default:null},type:{type:String,default:null},color:{type:String,default:"white"},as:{type:String,default:null},small:Boolean,outline:Boolean,active:Boolean,disabled:Boolean,roundedFull:Boolean},setup(e){const t=e,r=X(()=>t.as?t.as:t.to?S6:t.href?"a":"button"),a=X(()=>{var i;return r.value==="button"?(i=t.type)!=null?i:"button":null}),n=X(()=>t.small&&t.icon?"px-1":"px-2"),s=X(()=>{const i=["inline-flex","justify-center","items-center","whitespace-nowrap","focus:outline-none","transition-colors","focus:ring","duration-150","border",t.disabled?"cursor-not-allowed":"cursor-pointer",t.roundedFull?"rounded-full":"rounded",G9(t.color,t.outline,!t.disabled,t.active)];return!t.label&&t.icon?i.push("p-1"):t.small?i.push("text-sm",t.roundedFull?"px-3 py-1":"p-1"):i.push("py-2",t.roundedFull?"px-6":"px-3"),t.disabled&&i.push(t.outline?"opacity-50":"opacity-70"),i});return(i,l)=>(W(),L1(y6(B(r)),{class:i1(B(s)),href:e.href,type:B(a),to:e.to,target:e.target,disabled:e.disabled},{default:F1(()=>[e.icon?(W(),L1(r2,{key:0,path:e.icon,size:e.iconSize},null,8,["path","size"])):$1("",!0),e.label?(W(),l1("span",{key:1,class:i1(B(n))},x2(e.label),3)):$1("",!0)]),_:1},8,["class","href","type","to","target","disabled"]))}},bl={class:"flex flex-col md:flex-row items-center"},Ml={class:"text-center md:text-left md:py-2"},Sl={__name:"NotificationBar",props:{icon:{type:String,default:null},outline:Boolean,color:{type:String,required:!0}},emits:["deleted"],setup(e,{emit:t}){const r=e,a=X(()=>r.outline?j9[r.color]:w7[r.color]),n=E1(!1),s=()=>{n.value=!0,t("deleted")},i=d7(),l=X(()=>i.right);return(o,f)=>n.value?$1("",!0):(W(),l1("div",{key:0,class:i1([B(a),"px-3 py-6 md:py-3 mb-6 last:mb-0 border rounded-lg transition-colors duration-150"])},[a1(I5,null,{default:F1(()=>[K("div",bl,[e.icon?(W(),L1(r2,{key:0,path:e.icon,w:"w-10 md:w-5",h:"h-10 md:h-5",size:"24",class:"md:mr-2"},null,8,["path"])):$1("",!0),K("span",Ml,[K1(o.$slots,"default")])]),B(l)?K1(o.$slots,"right",{key:0}):(W(),L1(kl,{key:1,icon:B(E7),small:"","rounded-full":"",color:"white",onClick:s},null,8,["icon"]))]),_:3})],2))}},wl={__name:"PillTagPlain",props:{label:{type:String,required:!0},icon:{type:String,default:null},small:Boolean},setup(e){return(t,r)=>(W(),l1("div",{class:i1(["inline-flex items-center capitalize leading-none",[e.small?"text-xs":"text-sm"]])},[e.icon?(W(),L1(r2,{key:0,path:e.icon,h:"h-4",w:"w-4",class:i1(e.small?"mr-1":"mr-2"),size:e.small?14:null},null,8,["path","class","size"])):$1("",!0),K("span",null,x2(e.label),1)],2))}},El={__name:"PillTag",props:{label:{type:String,required:!0},color:{type:String,required:!0},icon:{type:String,default:null},small:Boolean,outline:Boolean},setup(e){const t=e,r=X(()=>[t.small?"py-1 px-3":"py-1.5 px-4",t.outline?j9[t.color]:w7[t.color]]);return(a,n)=>(W(),L1(wl,{class:i1(["border rounded-full",B(r)]),icon:e.icon,label:e.label,small:e.small},null,8,["class","icon","label","small"]))}},Fl=`
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
`,xl=`
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
`,Hl=`
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
`,Tl=`
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
`,Ol=`
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
`,Al=`
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
`,Rl=`
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
`,Nl=`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        id='Mouth/Serious'
        transform='translate(2.000000, 52.000000)'
        fill='#000000'
        opacity='0.699999988'>
        <rect id='Why-so-serious?' x='42' y='18' width='24' height='6' rx='3' />
      </g>
    </g>
`,Il=`
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
`,Pl=`
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
`,Dl=`
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
`,Vl=`
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
`,Bl={Concerned:Fl,Default:xl,Disbelief:Hl,Eating:Tl,Grimace:Ol,Sad:Al,ScreamOpen:Rl,Serious:Nl,Smile:Il,Tongue:Pl,Twinkle:Dl,Vomit:Vl},$l=`
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
`,Wl=`
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
`,Zl=`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        class='CustomColor'
        transform='translate(0.000000, 8.000000)'
        opacity='0.599999964'>
        <circle id='Eye' cx='30' cy='22' r='6' />
        <circle id='Eye' cx='82' cy='22' r='6' />
      </g>
    </g>
`,Ul=`
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
`,jl=`
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
`,Gl=`
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
`,ql=`
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
`,zl=`
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
`,Kl=`
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
`,Yl=`
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
`,Xl=`
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
`,Jl=`
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
`,Ql={Close:$l,Cry:Wl,Default:Zl,Dizzy:Ul,EyeRoll:jl,Happy:Gl,Hearts:ql,Side:zl,Squint:Kl,Surprised:Yl,Wink:Xl,WinkWacky:Jl},eo=`
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
`,to=`
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
`,ro=`
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
`,ao=`
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
`,no=`
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
`,so=`
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
`,io=`
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
`,lo=`
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
`,oo=`
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
`,co=`
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
`,uo=`
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
`,fo=`
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
`,Co=`
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
`,ho={Angry:eo,AngryNatural:to,Default:ro,DefaultNatural:ao,FlatNatural:no,FrownNatural:so,RaisedExcited:io,RaisedExcitedNatural:lo,SadConcerned:oo,SadConcernedNatural:co,UnibrowNatural:uo,UpDown:fo,UpDownNatural:Co},mo=`
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
`,go=`
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
`,po=`
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
`,yo=`
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
`,Lo=`
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
`,vo=`
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
`,_o=`
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
`,ko=`
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
`,bo=`
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
`,Mo={BlazerShirt:mo,BlazerSweater:go,CollarSweater:po,GraphicShirt:yo,Hoodie:Lo,Overall:vo,ShirtCrewNeck:_o,ShirtScoopNeck:ko,ShirtVNeck:bo},So=`
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
`,wo=`
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
`,Eo=`
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
`,Fo=`
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
`,xo=`
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
`,Ho=`
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
`,To=`
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
`,Oo=`
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
`,Ao=`
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
`,Ro=`
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
`,No=`
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
`,Io=`
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
`,Po=`
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
`,Do=`
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
`,Vo=`
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
`,Bo=`
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
`,$o=`
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
`,Wo=`
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
`,Zo=`
`,Uo=`
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
`,jo=`
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
`,Go=`
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
`,qo=`
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
`,zo=`
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
`,Ko=`
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
`,Yo=`
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
`,Xo=`
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
`,Jo=`
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
`,Qo=`
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
`,ec=`
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
`,tc=`
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
`,rc=`
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
`,ac=`
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
`,nc=`
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
`,sc=`
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
`,ic=`
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
`,lc={NoHair:Zo,Eyepatch:So,Hat:wo,Hijab:Eo,Turban:rc,WinterHat1:ac,WinterHat2:nc,WinterHat3:sc,WinterHat4:ic,LongHairBigHair:Fo,LongHairBob:xo,LongHairBun:Ho,LongHairCurly:To,LongHairCurvy:Oo,LongHairDreads:Ao,LongHairFrida:Ro,LongHairFro:No,LongHairFroBand:Io,LongHairNotTooLong:Do,LongHairShavedSides:Vo,LongHairMiaWallace:Po,LongHairStraight:Bo,LongHairStraight2:$o,LongHairStraightStrand:Wo,ShortHairDreads01:Uo,ShortHairDreads02:jo,ShortHairFrizzle:Go,ShortHairShaggy:qo,ShortHairShaggyMullet:zo,ShortHairShortCurly:Ko,ShortHairShortFlat:Yo,ShortHairShortRound:Xo,ShortHairShortWaved:Jo,ShortHairSides:Qo,ShortHairTheCaesar:ec,ShortHairTheCaesarSidePart:tc},oc=`
`,cc=`
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
`,uc=`
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
`,fc=`
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
`,dc=`
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
`,Cc=`
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
`,hc=`
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
`,mc={Blank:oc,Kurt:cc,Prescription01:uc,Prescription02:fc,Round:dc,Sunglasses:Cc,Wayfarers:hc},gc=`
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
`,pc=`
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
`,yc=`
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
`,Lc=`
`,vc=`
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
`,_c=`
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
`,kc={Blank:Lc,BeardMedium:yc,BeardLight:gc,BeardMajestic:pc,MoustacheFancy:vc,MoustacheMagnum:_c},bc=`
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
`,Mc=`
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
`,Sc=`
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
`,wc=`
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
`,Ec=`
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
`,Fc=`
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
`,xc=`
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
`,Hc=`
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
`,Tc=`
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
`,Oc=`
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
`,Ac=`
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
`,Rc={Skull:bc,SkullOutline:Mc,Bat:Sc,Cumbia:wc,Deer:Ec,Hola:xc,Selena:Hc,Diamond:Fc,Pizza:Tc,Resist:Oc,Bear:Ac},Nc={props:{isCircle:{type:Boolean,default:!0},circleColor:{type:String,default:"#6fb8e0"},topType:{type:String,default:"random"},accessoriesType:{type:String,default:"random"},facialHairType:{type:String,default:"random"},clotheType:{type:String,default:"random"},eyeType:{type:String,default:"random"},eyebrowType:{type:String,default:"random"},mouthType:{type:String,default:"random"},skinColor:{type:String,default:"random"},graphicType:{type:String,default:"random"},hairColor:{type:String,default:"random"},facialHairColor:{type:String,default:"random"},topColor:{type:String,default:"random"},clotheColor:{type:String,default:"random"}},methods:{getRandomChoice(e){const t=Object.entries(e).length;return Object.entries(e)[Math.floor(Math.random()*t)][1]}},data(){return{mouthTypes:Bl,eyeTypes:Ql,topTypes:lc,clothesType:Mo,eyebrowTypes:ho,facialHairTypes:kc,accessoriesTypes:mc,GraphicShirtTypes:Rc,hatAndShirtColors:{Black:"#262E33",Blue01:"#65C9FF",Blue02:"#5199E4",Blue03:"#25557C",Gray01:"#E6E6E6",Gray02:"#929598",Heather:"#3C4F5C",PastelBlue:"#B1E2FF",PastelGreen:"#A7FFC4",PastelOrange:"#FFBC69",PastelRed:"#FFAFB9",PastelYellow:"#FFFFB1",Pink:"#FF488E",Red:"#FF5C5C",White:"#FFFFFF"},hairColors:{Auburn:"#A55728",Black:"#2C1B18",Blonde:"#B58143",BlondeGolden:"#D6B370",Brown:"#724133",BrownDark:"#4A312C",PastelPink:"#F59797",Platinum:"#ECDCBF",Red:"#C93305",SilverGray:"#E8E1E1"},skinColors:{Tanned:"#FD9841",Yellow:"#F8D25C",Pale:"#FFDBB4",Light:"#EDB98A",Brown:"#D08B5B",DarkBrown:"#AE5D29",Black:"#614335"}}},computed:{cssVars(){return{"--avataaar-hair-color":this.hairColor==="random"?this.getRandomChoice(this.hairColors):this.hairColors[this.hairColor],"--avataaar-facial-hair-color":this.facialHairColor==="random"?this.getRandomChoice(this.hairColors):this.hairColors[this.facialHairColor],"--avataaar-hat-color":this.topColor==="random"?this.getRandomChoice(this.hatAndShirtColors):this.hatAndShirtColors[this.topColor],"--avataaar-shirt-color":this.clotheColor==="random"?this.getRandomChoice(this.hatAndShirtColors):this.hatAndShirtColors[this.clotheColor]}},topTypeValue(){return this.topType==="random"?this.getRandomChoice(Object.keys(this.topTypes)):this.topType},accessoriesTypeValue(){return this.accessoriesType==="random"?this.getRandomChoice(Object.keys(this.accessoriesTypes)):this.accessoriesType},facialHairTypeValue(){return this.facialHairType==="random"?this.getRandomChoice(Object.keys(this.facialHairTypes)):this.facialHairType},clotheTypeValue(){return this.clotheType==="random"?this.getRandomChoice(Object.keys(this.clothesType)):this.clotheType},eyeTypeValue(){return this.eyeType==="random"?this.getRandomChoice(Object.keys(this.eyeTypes)):this.eyeType},eyebrowTypeValue(){return this.eyebrowType==="random"?this.getRandomChoice(Object.keys(this.eyebrowTypes)):this.eyebrowType},mouthTypeValue(){return this.mouthType==="random"?this.getRandomChoice(Object.keys(this.mouthTypes)):this.mouthType},skinColorValue(){return this.skinColor==="random"?this.getRandomChoice(Object.keys(this.skinColors)):this.skinColor},graphicTypeValue(){return this.graphicType==="random"?this.getRandomChoice(Object.keys(this.GraphicShirtTypes)):this.graphicType}}},Ic={viewBox:"0 0 264 280",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},Pc=K("desc",null,"Created with getavataaars.com",-1),Dc=K("defs",null,[K("circle",{id:"path-1",cx:"120",cy:"120",r:"120"}),K("path",{d:"M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z",id:"path-2"}),K("path",{d:"M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z",id:"path-silhouette"})],-1),Vc={id:"Avataaar",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},Bc={transform:"translate(-825.000000, -1100.000000)",id:"Avataaar/Circle"},$c={transform:"translate(825.000000, 1100.000000)"},Wc={id:"Circle","stroke-width":"1","fill-rule":"evenodd",transform:"translate(12.000000, 40.000000)"},Zc=K("mask",{id:"mask-1",fill:"white"},[K("use",{"xlink:href":"#path-1"})],-1),Uc=K("use",{id:"Circle-Background",fill:"#E6E6E6","xlink:href":"#path-1"},null,-1),jc=["fill"],Gc=K("rect",{id:"\u{1F58D}Color",x:"0",y:"0",width:"240",height:"240"},null,-1),qc=[Gc],zc=K("mask",{id:"mask-2",fill:"white"},[K("use",{"xlink:href":"#path-2"})],-1),Kc=K("g",{id:"Mask"},null,-1),Yc={id:"Avataaar","stroke-width":"1","fill-rule":"evenodd",fill:"black",mask:"url(#mask-2)"},Xc={id:"Body",transform:"translate(32.000000, 36.000000)"},Jc=K("mask",{id:"mask-silhouette",fill:"white"},[K("use",{"xlink:href":"#path-silhouette"})],-1),Qc=["fill"],eu=K("path",{d:"M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z",id:"Neck-Shadow","fill-opacity":"0.100000001",fill:"#000000",mask:"url(#mask-silhouette)"},null,-1),tu=["innerHTML"],ru=["innerHTML"],au=["innerHTML"],nu=["innerHTML"],su=["innerHTML"],iu=K("svg",null,[K("g",{fill:"black",transform:"translate(76.000000, 82.000000)"},[K("g",{id:"Nose/Default",transform:"translate(28.000000, 40.000000)",opacity:"0.16"},[K("path",{d:"M16,8 C16,12.418278 21.372583,16 28,16 L28,16 C34.627417,16 40,12.418278 40,8",id:"Nose"})])])],-1),lu=["innerHTML"],ou=["innerHTML"],cu=["innerHTML"];function uu(e,t,r,a,n,s){return W(),l1("svg",Ic,[Pc,Dc,K("g",Vc,[K("g",Bc,[K("g",$c,[r.isCircle?(W(),l1(O1,{key:0},[K("g",Wc,[Zc,Uc,K("g",{id:"Color/Palette/Blue-01",mask:"url(#mask-1)",fill:r.circleColor},qc,8,jc)]),zc],64)):$1("",!0),Kc,K("g",Yc,[K("g",Xc,[Jc,K("use",{fill:n.skinColors[s.skinColorValue],"xlink:href":"#path-silhouette"},null,8,Qc),eu]),(W(),l1("svg",{style:y0(s.cssVars),innerHTML:n.clothesType[s.clotheTypeValue]},null,12,tu)),s.clotheTypeValue==="GraphicShirt"?(W(),l1("svg",{key:0,style:y0(s.cssVars),innerHTML:n.GraphicShirtTypes[s.graphicTypeValue]},null,12,ru)):$1("",!0),(W(),l1("svg",{innerHTML:n.eyeTypes[s.eyeTypeValue]},null,8,au)),(W(),l1("svg",{innerHTML:n.mouthTypes[s.mouthTypeValue]},null,8,nu)),(W(),l1("svg",{innerHTML:n.eyebrowTypes[s.eyebrowTypeValue]},null,8,su)),iu,(W(),l1("svg",{style:y0(s.cssVars),innerHTML:n.topTypes[s.topTypeValue]},null,12,lu)),(W(),l1("svg",{style:y0(s.cssVars),innerHTML:n.facialHairTypes[s.facialHairTypeValue]},null,12,ou)),(W(),l1("svg",{innerHTML:n.accessoriesTypes[s.accessoriesTypeValue]},null,8,cu))])])])])])}const fu=q9(Nc,[["render",uu]]),K9={__name:"UserAvatar",props:{avatar:{type:Object,default:{avatar:{}}}},setup(e){const t=e;return(r,a)=>(W(),l1("div",null,[a1(fu,{accessoriesType:t.avatar.accessoriesType,circleColor:t.avatar.circleColor,clotheColor:t.avatar.clotheColor,clotheType:t.avatar.clotheType,eyeType:t.avatar.eyeType,eyebrowType:t.avatar.eyebrowType,facialHairColor:t.avatar.facialHairColor,facialHairType:t.avatar.facialHairType,graphicType:t.avatar.graphicType,hairColor:t.avatar.hairColor,isCircle:t.avatar.is_circle,mouthType:t.avatar.mouthType,skinColor:t.avatar.skinColor,topColor:t.avatar.topColor,topType:t.avatar.topType,class:"block h-auto w-full max-w-full"},null,8,["accessoriesType","circleColor","clotheColor","clotheType","eyeType","eyebrowType","facialHairColor","facialHairType","graphicType","hairColor","isCircle","mouthType","skinColor","topColor","topType"]),K1(r.$slots,"default")]))}},du={class:"text-center space-y-1 md:text-left md:mr-0"},Cu={class:"text-xl"},hu={class:"text-gray-500 dark:text-slate-400"},mu={class:"text-center md:text-right space-y-2"},gu={class:"text-sm text-gray-500"},pu={__name:"CardBoxAdvert",props:{advert:{type:Object,required:!0}},setup(e){const t=e,r=X(()=>t.type==="withdrawal"?{icon:rl,type:"danger"}:t.type==="deposit"?{icon:al,type:"success"}:t.type==="invoice"?{icon:pl,type:"warning"}:{icon:ll,type:"info"});return(a,n)=>(W(),L1(z9,{class:"mb-6 last:mb-0","is-hoverable":""},{default:F1(()=>[a1(I5,null,{default:F1(()=>[a1(I5,{type:"justify-start"},{default:F1(()=>[a1(K9,{avatar:e.advert.owner.avatar,class:"w-1/3"},null,8,["avatar"]),K("div",du,[K("h4",Cu,x2(e.advert.time),1),K("p",hu,[K("b",null,x2(e.advert.owner.firstname)+" "+x2(e.advert.owner.lastname),1)])])]),_:1}),K("div",mu,[K("p",gu,x2(a.name),1),K("div",null,[a1(El,{color:B(r).type,label:a.type,small:""},null,8,["color","label"])])])]),_:1})]),_:1}))}},yu=[{to:"/dashboard",icon:hl,label:"Dashboard",role:"User"},{to:"/boats",label:"Boats",icon:ul,role:"Admin"},{to:"/users",label:"Users",icon:Qi,role:"Admin"},{to:"/forms",label:"Forms",icon:yl,role:"User"}],Lu=[{isCurrentUser:!0,menu:[{icon:Ji,label:"My Profile",to:"/profile"},{icon:il,label:"Settings"},{icon:cl,label:"Messages"},{isDivider:!0},{icon:N5,label:"Log Out",isLogout:!0}]},{icon:Ll,label:"Light/Dark",isDesktopNoLabel:!0,isToggleLightDark:!0},{icon:N5,label:"Log out",isDesktopNoLabel:!0,isLogout:!0}],vu={__name:"FormControlIcon",props:{icon:{type:String,default:null},h:{type:String,default:null}},setup(e){return(t,r)=>(W(),L1(r2,{path:e.icon,w:"w-10",h:e.h,class:"absolute top-0 left-0 z-10 pointer-events-none text-gray-500 dark:text-slate-400"},null,8,["path","h"]))}},_u=["id","name"],ku=["value"],bu=["id","name","placeholder","required"],Mu=["id","name","inputmode","autocomplete","required","placeholder","type","min","max"],Su={__name:"FormControl",props:{name:{type:String,default:null},id:{type:String,default:null},autocomplete:{type:String,default:null},placeholder:{type:String,default:null},inputmode:{type:String,default:null},icon:{type:String,default:null},options:{type:Array,default:null},min:{type:String,default:null},max:{type:String,default:null},type:{type:String,default:"text"},class:{type:String,default:""},selected:{type:String,default:""},modelValue:{type:[String,Number,Boolean,Array,Object],default:""},required:Boolean,borderless:Boolean,transparent:Boolean,ctrlKFocus:Boolean},emits:["update:modelValue","setRef"],setup(e,{emit:t}){const r=e,a=X({get:()=>r.modelValue,set:h=>{t("update:modelValue",h)}}),n=X(()=>{const h=["px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full","dark:placeholder-gray-400",s.value==="textarea"?"h-24":"h-12",r.borderless?"border-0":"border",r.transparent?"bg-transparent":"bg-white dark:bg-slate-800"];return r.icon&&h.push("pl-10"),h}),s=X(()=>r.options?"select":r.type),i=X(()=>r.type==="textarea"?"h-full":"h-12"),l=i0(),o=E1(null),f=E1(null),d=E1(null);if(M0(()=>{o.value?t("setRef",o.value):f.value?t("setRef",f.value):t("setRef",d.value)}),r.ctrlKFocus){const h=C=>{C.ctrlKey&&C.key==="k"?(C.preventDefault(),d.value.focus()):C.key==="Escape"&&d.value.blur()};M0(()=>{l.isFieldFocusRegistered||(window.addEventListener("keydown",h),l.isFieldFocusRegistered=!0)}),g6(()=>{window.removeEventListener("keydown",h),l.isFieldFocusRegistered=!1})}return(h,C)=>(W(),l1("div",{class:i1(["relative",e.class])},[B(s)==="select"?$3((W(),l1("select",{key:0,id:e.id,"onUpdate:modelValue":C[0]||(C[0]=p=>M1(a)?a.value=p:null),name:e.name,class:i1(B(n))},[(W(!0),l1(O1,null,L6(e.options,p=>{var b,M;return W(),l1("option",{key:(b=p.id)!=null?b:p,value:p},x2((M=p.label)!=null?M:p),9,ku)}),128))],10,_u)),[[Qe,B(a)]]):B(s)==="textarea"?$3((W(),l1("textarea",{key:1,id:e.id,"onUpdate:modelValue":C[1]||(C[1]=p=>M1(a)?a.value=p:null),class:i1(B(n)),name:e.name,placeholder:e.placeholder,required:e.required},null,10,bu)),[[b5,B(a)]]):$3((W(),l1("input",{key:2,id:e.id,ref_key:"inputEl",ref:d,"onUpdate:modelValue":C[2]||(C[2]=p=>M1(a)?a.value=p:null),name:e.name,inputmode:e.inputmode,autocomplete:e.autocomplete,required:e.required,placeholder:e.placeholder,type:B(s),class:i1(B(n)),min:e.min,max:e.max},null,10,Mu)),[[Ba,B(a)]]),e.icon?(W(),L1(vu,{key:3,icon:e.icon,h:B(i)},null,8,["icon","h"])):$1("",!0)],2))}},wu={__name:"UserAvatarCurrentUser",setup(e){const t=i0(),r=X(()=>t.user);return(a,n)=>B(r)?(W(),L1(K9,{key:0,username:B(r).firstname,avatar:B(r).avatar},{default:F1(()=>[K1(a.$slots,"default")]),_:3},8,["username","avatar"])):$1("",!0)}},Eu={__name:"BaseDivider",props:{navBar:Boolean},setup(e){const t=e;return(r,a)=>(W(),l1("hr",{class:i1([t.navBar?"hidden lg:block lg:my-0.5 dark:border-slate-700":"my-6 -mx-6 dark:border-slate-800","border-t border-gray-100"])},null,2))}},Fu={__name:"NavBarItem",props:{item:{type:Object,required:!0}},emits:["menu-click"],setup(e,{emit:t}){const r=e,a=X(()=>r.item.href?"a":r.item.to?S6:"div"),n=W2(),s=X(()=>{const C=[l.value?`${n.navBarItemLabelActiveColorStyle} dark:text-slate-400`:`${n.navBarItemLabelStyle} dark:text-white dark:hover:text-slate-400 ${n.navBarItemLabelHoverStyle}`,r.item.menu?"lg:py-2 lg:px-3":"py-2 px-3"];return r.item.isDesktopNoLabel&&C.push("lg:w-16","lg:justify-center"),C}),i=X(()=>r.item.isCurrentUser?i0().userName:r.item.label),l=E1(!1),o=C=>{t("menu-click",C,r.item),r.item.menu&&(l.value=!l.value)},f=(C,p)=>{t("menu-click",C,p)},d=E1(null),h=C=>{d.value&&!d.value.contains(C.target)&&(l.value=!1)};return M0(()=>{r.item.menu&&window.addEventListener("click",h)}),g6(()=>{r.item.menu&&window.removeEventListener("click",h)}),(C,p)=>{var b,M,E;return e.item.isDivider?(W(),L1(Eu,{key:0,"nav-bar":""})):(W(),L1(y6(B(a)),{key:1,ref_key:"root",ref:d,class:i1(["block lg:flex items-center relative cursor-pointer",B(s)]),to:(b=e.item.to)!=null?b:null,href:(M=e.item.href)!=null?M:null,target:(E=e.item.target)!=null?E:null,onClick:o},{default:F1(()=>[K("div",{class:i1(["flex items-center",{"bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0":e.item.menu}])},[e.item.isCurrentUser?(W(),L1(wu,{key:0,class:"w-6 h-6 mr-3 inline-flex"})):$1("",!0),e.item.icon?(W(),L1(r2,{key:1,path:e.item.icon,class:"transition-colors"},null,8,["path"])):$1("",!0),K("span",{class:i1(["px-2 transition-colors",{"lg:hidden":e.item.isDesktopNoLabel&&e.item.icon}])},x2(B(i)),3),e.item.menu?(W(),L1(r2,{key:2,path:l.value?B(sl):B(nl),class:"hidden lg:inline-flex transition-colors"},null,8,["path"])):$1("",!0)],2),e.item.menu?(W(),l1("div",{key:0,class:i1(["text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700",{"lg:hidden":!l.value}])},[a1(Y9,{menu:e.item.menu,onMenuClick:f},null,8,["menu"])],2)):$1("",!0)]),_:1},8,["class","to","href","target"]))}}},Y9={__name:"NavBarMenuList",props:{menu:{type:Array,default:()=>[]}},emits:["menu-click"],setup(e,{emit:t}){const r=(a,n)=>{t("menu-click",a,n)};return(a,n)=>(W(!0),l1(O1,null,L6(e.menu,(s,i)=>(W(),L1(Fu,{key:i,item:s,onMenuClick:r},null,8,["item"]))),128))}},z3={__name:"NavBarItemPlain",props:{display:{type:String,default:"flex"},useMargin:Boolean},setup(e){const t=W2();return(r,a)=>(W(),l1("div",{class:i1([[e.display,B(t).navBarItemLabelStyle,B(t).navBarItemLabelHoverStyle,e.useMargin?"my-2 mx-3":"py-2 px-3"],"items-center cursor-pointer dark:text-white dark:hover:text-slate-400"])},[K1(r.$slots,"default")],2))}},xu={class:"top-0 inset-x-0 fixed bg-gray-50 h-14 z-30 transition-position w-screen lg:w-auto dark:bg-slate-800"},Hu={class:"flex flex-1 items-stretch h-14"},Tu={class:"flex-none items-stretch flex h-14 lg:hidden"},Ou={__name:"NavBar",props:{menu:{type:Array,required:!0}},emits:["menu-click"],setup(e,{emit:t}){const r=(n,s)=>{t("menu-click",n,s)},a=E1(!1);return(n,s)=>(W(),l1("nav",xu,[K("div",{class:i1(["flex lg:items-stretch",B(E9)])},[K("div",Hu,[K1(n.$slots,"default")]),K("div",Tu,[a1(z3,{onClick:s[0]||(s[0]=a6(i=>a.value=!a.value,["prevent"]))},{default:F1(()=>[a1(r2,{path:a.value?B(E7):B(ol),size:"24"},null,8,["path"])]),_:1})]),K("div",{class:i1(["max-h-screen-menu overflow-y-auto lg:overflow-visible absolute w-screen top-14 left-0 bg-gray-50 shadow-lg lg:w-auto lg:flex lg:static lg:shadow-none dark:bg-slate-800",[a.value?"block":"hidden"]])},[a1(Y9,{menu:e.menu,onMenuClick:r},null,8,["menu"])],2)],2)]))}},X9={__name:"AsideMenuItem",props:{item:{type:Object,required:!0},isDropdownList:Boolean},emits:["menu-click"],setup(e,{emit:t}){const r=e,a=W2(),n=X(()=>r.item&&r.item.color),s=X(()=>n.value?"":a.asideMenuItemActiveStyle),i=E1(!1),l=X(()=>[r.isDropdownList?"py-3 px-6 text-sm":"py-3",n.value?G9(r.item.color,!1,!0):`${a.asideMenuItemStyle} dark:text-slate-300 dark:hover:text-white`]),o=X(()=>!!r.item.menu),f=d=>{t("menu-click",d,r.item),o.value&&(i.value=!i.value)};return(d,h)=>{var C,p,b;return W(),l1("li",null,[(W(),L1(y6(e.item.to?B(S6):"a"),{to:(C=e.item.to)!=null?C:null,href:(p=e.item.href)!=null?p:null,target:(b=e.item.target)!=null?b:null,class:i1(["flex cursor-pointer",B(l)]),onClick:f},{default:F1(M=>[e.item.icon?(W(),L1(r2,{key:0,path:e.item.icon,class:i1(["flex-none",[M&&M.isExactActive?B(s):""]]),w:"w-16",size:18},null,8,["path","class"])):$1("",!0),K("span",{class:i1(["grow text-ellipsis line-clamp-1",[{"pr-12":!B(o)},M&&M.isExactActive?B(s):""]])},x2(e.item.label),3),B(o)?(W(),L1(r2,{key:1,path:i.value?B(Cl):B(gl),class:i1(["flex-none",[M&&M.isExactActive?B(s):""]]),w:"w-12"},null,8,["path","class"])):$1("",!0)]),_:1},8,["to","href","target","class"])),B(o)?(W(),L1(J9,{key:0,menu:e.item.menu,class:i1([B(a).asideMenuDropdownStyle,i.value?"block dark:bg-slate-800/50":"hidden"]),"is-dropdown-list":""},null,8,["menu","class"])):$1("",!0)])}}},J9={__name:"AsideMenuList",props:{isDropdownList:Boolean,menu:{type:Array,required:!0}},emits:["menu-click"],setup(e,{emit:t}){const r=e,a=i0(),n=(i,l)=>{t("menu-click",i,l)},s=X(()=>r.menu.filter(i=>a.user.roles.includes(i.role)));return(i,l)=>(W(),l1("ul",null,[(W(!0),l1(O1,null,L6(B(s),(o,f)=>(W(),L1(X9,{key:f,item:o,"is-dropdown-list":e.isDropdownList,onMenuClick:n},null,8,["item","is-dropdown-list"]))),128))]))}},Au={id:"aside",class:"lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden"},Ru=K("div",{class:"text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0"},[K("b",{class:"font-black"},"Rowmate")],-1),Nu=["onClick"],Iu={__name:"AsideMenuLayer",props:{menu:{type:Array,required:!0}},emits:["menu-click","aside-lg-close-click"],setup(e,{emit:t}){const r=W2(),a=X(()=>({label:"Logout",icon:N5,color:"info",isLogout:!0})),n=(i,l)=>{t("menu-click",i,l)},s=i=>{t("aside-lg-close-click",i)};return(i,l)=>(W(),l1("aside",Au,[K("div",{class:i1([B(r).asideStyle,"lg:rounded-2xl flex-1 flex flex-col overflow-hidden dark:bg-slate-900"])},[K("div",{class:i1([B(r).asideBrandStyle,"flex flex-row h-14 items-center justify-between dark:bg-slate-900"])},[Ru,K("button",{class:"hidden lg:inline-block xl:hidden p-3",onClick:a6(s,["prevent"])},[a1(r2,{path:B(E7)},null,8,["path"])],8,Nu)],2),K("div",{class:i1([B(r).darkMode?"aside-scrollbars-[slate]":B(r).asideScrollbarsStyle,"flex-1 overflow-y-auto overflow-x-hidden"])},[a1(J9,{menu:e.menu,onMenuClick:n},null,8,["menu"])],2),K("ul",null,[a1(X9,{item:B(a),onMenuClick:n},null,8,["item"])])],2)]))}},Pu={__name:"OverlayLayer",props:{zIndex:{type:String,default:"z-50"},type:{type:String,default:"flex"}},emits:["overlay-click"],setup(e,{emit:t}){const r=n=>{t("overlay-click",n)},a=W2();return(n,s)=>(W(),l1("div",{class:i1([[e.type,e.zIndex],"items-center flex-col justify-center overflow-hidden fixed inset-0"])},[a1(r6,{"enter-active-class":"transition duration-150 ease-in","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:F1(()=>[K("div",{class:i1(["absolute inset-0 bg-gradient-to-tr opacity-90 dark:from-gray-700 dark:via-gray-900 dark:to-gray-700",B(a).overlayStyle]),onClick:r},null,2)]),_:1}),a1(r6,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"animate-fade-out"},{default:F1(()=>[K1(n.$slots,"default")]),_:3})],2))}},Du={__name:"AsideMenu",props:{menu:{type:Array,required:!0},isAsideMobileExpanded:Boolean,isAsideLgActive:Boolean},emits:["menu-click","aside-lg-close-click"],setup(e,{emit:t}){const r=(n,s)=>{t("menu-click",n,s)},a=n=>{t("aside-lg-close-click",n)};return(n,s)=>(W(),l1(O1,null,[a1(Iu,{menu:e.menu,class:i1([e.isAsideMobileExpanded?"left-0":"-left-60 lg:left-0",{"lg:hidden xl:flex":!e.isAsideLgActive}]),onMenuClick:r,onAsideLgCloseClick:a},null,8,["menu","class"]),$3(a1(Pu,{"z-index":"z-30",onOverlayClick:a},null,512),[[Ua,e.isAsideLgActive]])],64))}},Vu={__name:"LayoutAuthenticated",setup(e){const t=S9(),r=i0();(r.access_token==null||r.user==null)&&t.push("/login");const a="xl:pl-60",n=W2(),s=E1(!1),i=E1(!1);t.beforeEach(()=>{s.value=!1,i.value=!1});const l=(o,f)=>{f.isToggleLightDark&&n.setDarkMode(),f.isLogout&&(r.access_token=null,r.user=null,t.push("/"))};return(o,f)=>(W(),l1("div",{class:i1({dark:B(n).darkMode,"overflow-hidden lg:overflow-visible":s.value})},[K("div",{class:i1([[a,{"ml-60 lg:ml-0":s.value}],"pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100"])},[a1(Ou,{menu:B(Lu),class:i1([a,{"ml-60 lg:ml-0":s.value}]),onMenuClick:l},{default:F1(()=>[a1(z3,{display:"flex lg:hidden",onClick:f[0]||(f[0]=a6(d=>s.value=!s.value,["prevent"]))},{default:F1(()=>[a1(r2,{path:s.value?B(tl):B(fl),size:"24"},null,8,["path"])]),_:1}),a1(z3,{display:"hidden lg:flex xl:hidden",onClick:f[1]||(f[1]=a6(d=>i.value=!0,["prevent"]))},{default:F1(()=>[a1(r2,{path:B(dl),size:"24"},null,8,["path"])]),_:1}),a1(z3,{"use-margin":""},{default:F1(()=>[a1(Su,{placeholder:"Search (ctrl+k)","ctrl-k-focus":"",transparent:"",borderless:""})]),_:1})]),_:1},8,["menu","class"]),a1(Du,{"is-aside-mobile-expanded":s.value,"is-aside-lg-active":i.value,menu:B(yu),onMenuClick:l,onAsideLgCloseClick:f[2]||(f[2]=d=>i.value=!1)},null,8,["is-aside-mobile-expanded","is-aside-lg-active","menu"]),K1(o.$slots,"default")],2)],2))}},Bu={__name:"IconRounded",props:{icon:{type:String,required:!0},color:{type:String,default:null},w:{type:String,default:"w-12"},h:{type:String,default:"h-12"},bg:Boolean},setup(e){return(t,r)=>(W(),L1(r2,{path:e.icon,w:e.w,h:e.h,size:"24",class:i1(["rounded-full",e.bg?B(w7)[e.color]:[B(K2)[e.color],"bg-gray-50 dark:bg-slate-800"]])},null,8,["path","w","h","class"]))}},$u={class:"flex items-center justify-start"},Wu={__name:"SectionTitleLineWithButton",props:{icon:{type:String,default:null},title:{type:String,required:!0},main:Boolean},setup(e){return X(()=>d7().default),(t,r)=>(W(),l1("section",{class:i1([{"pt-6":!e.main},"mb-6 flex items-center justify-between"])},[K("div",$u,[e.icon&&e.main?(W(),L1(Bu,{key:0,icon:e.icon,color:"light",class:"mr-3",bg:""},null,8,["icon"])):e.icon?(W(),L1(r2,{key:1,path:e.icon,class:"mr-2",size:"20"},null,8,["path"])):$1("",!0),K("h1",{class:i1([e.main?"text-3xl":"text-2xl","leading-tight"])},x2(e.title),3)])],2))}},Zu={class:"grid grid-cols-1 gap-6 mb-6"},Uu={class:"flex flex-col justify-between"},ju=K("b",null,"Responsive table.",-1),Gu=qe(" Collapses on mobile "),qu={__name:"HomeView",setup(e){const t=i0(),r=E0({adverts:[]});t0.defaults.baseURL=t.api,t0.defaults.headers.common.Authorization=t.access_token;const a=async()=>{r.adverts=await t0.get("/adverts/").then(n=>n.data)};return M0(()=>{a()}),X(()=>t.clients.slice(0,4)),X(()=>t.history),(n,s)=>(W(),L1(Vu,null,{default:F1(()=>[a1(Wi,null,{default:F1(()=>[K("div",Zu,[K("div",Uu,[(W(!0),l1(O1,null,L6(r.adverts,(i,l)=>(W(),L1(pu,{key:l,advert:i},null,8,["advert"]))),128))])]),a1(Wu,{icon:B(el),title:"Clients"},null,8,["icon"]),a1(Sl,{color:"info",icon:B(ml)},{default:F1(()=>[ju,Gu]),_:1},8,["icon"]),a1(z9,{"has-table":""})]),_:1})]),_:1}))}},zu=[{meta:{title:"Recognize login"},path:"/",name:"start",component:Xi},{meta:{title:"Dashboard"},path:"/dashboard",name:"dashboard",component:qu},{meta:{title:"Tables"},path:"/tables",name:"tables",component:()=>h2(()=>import("./TablesView.7071ffa7.js"),["assets/TablesView.7071ffa7.js","assets/CardBoxComponentEmpty.1c46bb75.js"])},{meta:{title:"Boats"},path:"/boats",name:"boats",component:()=>h2(()=>import("./BoatsView.9d010119.js"),["assets/BoatsView.9d010119.js","assets/CardBoxModal.dc7eee89.js","assets/BaseButtons.cd78754e.js","assets/CardBoxComponentTitle.c9a2dfa5.js","assets/FormCheckRadioGroup.b64a156e.js","assets/FormCheckRadio.f77d6b48.js","assets/FormField.dcff6fad.js"])},{meta:{title:"Users"},path:"/users",name:"users",component:()=>h2(()=>import("./UsersView.ea7ad544.js"),["assets/UsersView.ea7ad544.js","assets/CardBoxModal.dc7eee89.js","assets/BaseButtons.cd78754e.js","assets/CardBoxComponentTitle.c9a2dfa5.js"])},{meta:{title:"Forms"},path:"/forms",name:"forms",component:()=>h2(()=>import("./FormsView.71ed13ae.js"),["assets/FormsView.71ed13ae.js","assets/FormCheckRadioGroup.b64a156e.js","assets/FormCheckRadio.f77d6b48.js","assets/FormFilePicker.e77cf171.js","assets/FormField.dcff6fad.js","assets/BaseButtons.cd78754e.js","assets/SectionTitle.35d67da4.js"])},{meta:{title:"Profile"},path:"/profile",name:"profile",component:()=>h2(()=>import("./ProfileView.95f65a2e.js"),["assets/ProfileView.95f65a2e.js","assets/FormField.dcff6fad.js","assets/FormFilePicker.e77cf171.js","assets/BaseButtons.cd78754e.js","assets/FormCheckRadio.f77d6b48.js"])},{meta:{title:"Ui"},path:"/ui",name:"ui",component:()=>h2(()=>import("./UiView.7cee0ba4.js"),["assets/UiView.7cee0ba4.js","assets/BaseButtons.cd78754e.js","assets/CardBoxModal.dc7eee89.js","assets/CardBoxComponentTitle.c9a2dfa5.js","assets/SectionTitle.35d67da4.js","assets/FormField.dcff6fad.js","assets/FormCheckRadioGroup.b64a156e.js","assets/FormCheckRadio.f77d6b48.js","assets/CardBoxComponentEmpty.1c46bb75.js"])},{meta:{title:"Responsive layout"},path:"/responsive",name:"responsive",component:()=>h2(()=>import("./ResponsiveView.da0348ab.js"),["assets/ResponsiveView.da0348ab.js","assets/SectionTitle.35d67da4.js"])},{meta:{title:"Login"},path:"/login",name:"login",component:()=>h2(()=>import("./LoginView.c1ada889.js"),["assets/LoginView.c1ada889.js","assets/SectionFullScreen.61973be9.js","assets/FormCheckRadio.f77d6b48.js","assets/FormField.dcff6fad.js","assets/BaseButtons.cd78754e.js"])},{meta:{title:"Register"},path:"/register",name:"register",component:()=>h2(()=>import("./RegisterView.431d0555.js"),["assets/RegisterView.431d0555.js","assets/SectionFullScreen.61973be9.js","assets/FormField.dcff6fad.js","assets/BaseButtons.cd78754e.js","assets/CardBoxComponentTitle.c9a2dfa5.js"])},{meta:{title:"Verify"},path:"/verify",name:"verify",component:()=>h2(()=>import("./VerifyView.357d688b.js"),["assets/VerifyView.357d688b.js","assets/SectionFullScreen.61973be9.js","assets/BaseButtons.cd78754e.js"])},{meta:{title:"Error"},path:"/error",name:"error",component:()=>h2(()=>import("./ErrorView.109a0c68.js"),["assets/ErrorView.109a0c68.js","assets/SectionFullScreen.61973be9.js","assets/BaseButtons.cd78754e.js"])}],Q9=Fs({history:jn(),routes:zu,scrollBehavior(e,t,r){return r||{top:0}}});/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const P5=typeof window<"u",Ku=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",l0=e=>Ku?Symbol(e):e,Yu=(e,t,r)=>Xu({l:e,k:t,s:r}),Xu=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),N1=e=>typeof e=="number"&&isFinite(e),Ju=e=>x7(e)==="[object Date]",s0=e=>x7(e)==="[object RegExp]",H6=e=>n1(e)&&Object.keys(e).length===0;function Qu(e,t){typeof console<"u"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const W1=Object.assign;let L8;const h3=()=>L8||(L8=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function v8(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const ef=Object.prototype.hasOwnProperty;function F7(e,t){return ef.call(e,t)}const S1=Array.isArray,H1=e=>typeof e=="function",Z=e=>typeof e=="string",d1=e=>typeof e=="boolean",w1=e=>e!==null&&typeof e=="object",et=Object.prototype.toString,x7=e=>et.call(e),n1=e=>x7(e)==="[object Object]",tf=e=>e==null?"":S1(e)||n1(e)&&e.toString===et?JSON.stringify(e,null,2):String(e);/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const y1={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,__EXTEND_POINT__:15};function T6(e,t,r={}){const{domain:a,messages:n,args:s}=r,i=e,l=new SyntaxError(String(i));return l.code=e,t&&(l.location=t),l.domain=a,l}function rf(e){throw e}function af(e,t,r){return{line:e,column:t,offset:r}}function D5(e,t,r){const a={start:e,end:t};return r!=null&&(a.source=r),a}const R2=" ",nf="\r",J1=`
`,sf=String.fromCharCode(8232),lf=String.fromCharCode(8233);function of(e){const t=e;let r=0,a=1,n=1,s=0;const i=x=>t[x]===nf&&t[x+1]===J1,l=x=>t[x]===J1,o=x=>t[x]===lf,f=x=>t[x]===sf,d=x=>i(x)||l(x)||o(x)||f(x),h=()=>r,C=()=>a,p=()=>n,b=()=>s,M=x=>i(x)||o(x)||f(x)?J1:t[x],E=()=>M(r),g=()=>M(r+s);function _(){return s=0,d(r)&&(a++,n=0),i(r)&&r++,r++,n++,t[r]}function F(){return i(r+s)&&s++,s++,t[r+s]}function k(){r=0,a=1,n=1,s=0}function L(x=0){s=x}function P(){const x=r+s;for(;x!==r;)_();s=0}return{index:h,line:C,column:p,peekOffset:b,charAt:M,currentChar:E,currentPeek:g,next:_,peek:F,reset:k,resetPeek:L,skipToPeek:P}}const q2=void 0,_8="'",cf="tokenizer";function uf(e,t={}){const r=t.location!==!1,a=of(e),n=()=>a.index(),s=()=>af(a.line(),a.column(),a.index()),i=s(),l=n(),o={currentType:14,offset:l,startLoc:i,endLoc:i,lastType:14,lastOffset:l,lastStartLoc:i,lastEndLoc:i,braceNest:0,inLinked:!1,text:""},f=()=>o,{onError:d}=t;function h(c,u,m,...v){const S=f();if(u.column+=m,u.offset+=m,d){const H=D5(S.startLoc,u),V=T6(c,H,{domain:cf,args:v});d(V)}}function C(c,u,m){c.endLoc=s(),c.currentType=u;const v={type:u};return r&&(v.loc=D5(c.startLoc,c.endLoc)),m!=null&&(v.value=m),v}const p=c=>C(c,14);function b(c,u){return c.currentChar()===u?(c.next(),u):(h(y1.EXPECTED_TOKEN,s(),0,u),"")}function M(c){let u="";for(;c.currentPeek()===R2||c.currentPeek()===J1;)u+=c.currentPeek(),c.peek();return u}function E(c){const u=M(c);return c.skipToPeek(),u}function g(c){if(c===q2)return!1;const u=c.charCodeAt(0);return u>=97&&u<=122||u>=65&&u<=90||u===95}function _(c){if(c===q2)return!1;const u=c.charCodeAt(0);return u>=48&&u<=57}function F(c,u){const{currentType:m}=u;if(m!==2)return!1;M(c);const v=g(c.currentPeek());return c.resetPeek(),v}function k(c,u){const{currentType:m}=u;if(m!==2)return!1;M(c);const v=c.currentPeek()==="-"?c.peek():c.currentPeek(),S=_(v);return c.resetPeek(),S}function L(c,u){const{currentType:m}=u;if(m!==2)return!1;M(c);const v=c.currentPeek()===_8;return c.resetPeek(),v}function P(c,u){const{currentType:m}=u;if(m!==8)return!1;M(c);const v=c.currentPeek()===".";return c.resetPeek(),v}function x(c,u){const{currentType:m}=u;if(m!==9)return!1;M(c);const v=g(c.currentPeek());return c.resetPeek(),v}function U(c,u){const{currentType:m}=u;if(!(m===8||m===12))return!1;M(c);const v=c.currentPeek()===":";return c.resetPeek(),v}function I(c,u){const{currentType:m}=u;if(m!==10)return!1;const v=()=>{const H=c.currentPeek();return H==="{"?g(c.peek()):H==="@"||H==="%"||H==="|"||H===":"||H==="."||H===R2||!H?!1:H===J1?(c.peek(),v()):g(H)},S=v();return c.resetPeek(),S}function R(c){M(c);const u=c.currentPeek()==="|";return c.resetPeek(),u}function $(c){const u=M(c),m=c.currentPeek()==="%"&&c.peek()==="{";return c.resetPeek(),{isModulo:m,hasSpace:u.length>0}}function O(c,u=!0){const m=(S=!1,H="",V=!1)=>{const N=c.currentPeek();return N==="{"?H==="%"?!1:S:N==="@"||!N?H==="%"?!0:S:N==="%"?(c.peek(),m(S,"%",!0)):N==="|"?H==="%"||V?!0:!(H===R2||H===J1):N===R2?(c.peek(),m(!0,R2,V)):N===J1?(c.peek(),m(!0,J1,V)):!0},v=m();return u&&c.resetPeek(),v}function Y(c,u){const m=c.currentChar();return m===q2?q2:u(m)?(c.next(),m):null}function p1(c){return Y(c,m=>{const v=m.charCodeAt(0);return v>=97&&v<=122||v>=65&&v<=90||v>=48&&v<=57||v===95||v===36})}function R1(c){return Y(c,m=>{const v=m.charCodeAt(0);return v>=48&&v<=57})}function s1(c){return Y(c,m=>{const v=m.charCodeAt(0);return v>=48&&v<=57||v>=65&&v<=70||v>=97&&v<=102})}function Q(c){let u="",m="";for(;u=R1(c);)m+=u;return m}function h1(c){E(c);const u=c.currentChar();return u!=="%"&&h(y1.EXPECTED_TOKEN,s(),0,u),c.next(),"%"}function T1(c){let u="";for(;;){const m=c.currentChar();if(m==="{"||m==="}"||m==="@"||m==="|"||!m)break;if(m==="%")if(O(c))u+=m,c.next();else break;else if(m===R2||m===J1)if(O(c))u+=m,c.next();else{if(R(c))break;u+=m,c.next()}else u+=m,c.next()}return u}function l2(c){E(c);let u="",m="";for(;u=p1(c);)m+=u;return c.currentChar()===q2&&h(y1.UNTERMINATED_CLOSING_BRACE,s(),0),m}function Y1(c){E(c);let u="";return c.currentChar()==="-"?(c.next(),u+=`-${Q(c)}`):u+=Q(c),c.currentChar()===q2&&h(y1.UNTERMINATED_CLOSING_BRACE,s(),0),u}function G1(c){E(c),b(c,"'");let u="",m="";const v=H=>H!==_8&&H!==J1;for(;u=Y(c,v);)u==="\\"?m+=Z1(c):m+=u;const S=c.currentChar();return S===J1||S===q2?(h(y1.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),S===J1&&(c.next(),b(c,"'")),m):(b(c,"'"),m)}function Z1(c){const u=c.currentChar();switch(u){case"\\":case"'":return c.next(),`\\${u}`;case"u":return o2(c,u,4);case"U":return o2(c,u,6);default:return h(y1.UNKNOWN_ESCAPE_SEQUENCE,s(),0,u),""}}function o2(c,u,m){b(c,u);let v="";for(let S=0;S<m;S++){const H=s1(c);if(!H){h(y1.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${u}${v}${c.currentChar()}`);break}v+=H}return`\\${u}${v}`}function T(c){E(c);let u="",m="";const v=S=>S!=="{"&&S!=="}"&&S!==R2&&S!==J1;for(;u=Y(c,v);)m+=u;return m}function q(c){let u="",m="";for(;u=p1(c);)m+=u;return m}function D(c){const u=(m=!1,v)=>{const S=c.currentChar();return S==="{"||S==="%"||S==="@"||S==="|"||!S||S===R2?v:S===J1?(v+=S,c.next(),u(m,v)):(v+=S,c.next(),u(!0,v))};return u(!1,"")}function z(c){E(c);const u=b(c,"|");return E(c),u}function u1(c,u){let m=null;switch(c.currentChar()){case"{":return u.braceNest>=1&&h(y1.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),c.next(),m=C(u,2,"{"),E(c),u.braceNest++,m;case"}":return u.braceNest>0&&u.currentType===2&&h(y1.EMPTY_PLACEHOLDER,s(),0),c.next(),m=C(u,3,"}"),u.braceNest--,u.braceNest>0&&E(c),u.inLinked&&u.braceNest===0&&(u.inLinked=!1),m;case"@":return u.braceNest>0&&h(y1.UNTERMINATED_CLOSING_BRACE,s(),0),m=f1(c,u)||p(u),u.braceNest=0,m;default:let S=!0,H=!0,V=!0;if(R(c))return u.braceNest>0&&h(y1.UNTERMINATED_CLOSING_BRACE,s(),0),m=C(u,1,z(c)),u.braceNest=0,u.inLinked=!1,m;if(u.braceNest>0&&(u.currentType===5||u.currentType===6||u.currentType===7))return h(y1.UNTERMINATED_CLOSING_BRACE,s(),0),u.braceNest=0,r1(c,u);if(S=F(c,u))return m=C(u,5,l2(c)),E(c),m;if(H=k(c,u))return m=C(u,6,Y1(c)),E(c),m;if(V=L(c,u))return m=C(u,7,G1(c)),E(c),m;if(!S&&!H&&!V)return m=C(u,13,T(c)),h(y1.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,m.value),E(c),m;break}return m}function f1(c,u){const{currentType:m}=u;let v=null;const S=c.currentChar();switch((m===8||m===9||m===12||m===10)&&(S===J1||S===R2)&&h(y1.INVALID_LINKED_FORMAT,s(),0),S){case"@":return c.next(),v=C(u,8,"@"),u.inLinked=!0,v;case".":return E(c),c.next(),C(u,9,".");case":":return E(c),c.next(),C(u,10,":");default:return R(c)?(v=C(u,1,z(c)),u.braceNest=0,u.inLinked=!1,v):P(c,u)||U(c,u)?(E(c),f1(c,u)):x(c,u)?(E(c),C(u,12,q(c))):I(c,u)?(E(c),S==="{"?u1(c,u)||v:C(u,11,D(c))):(m===8&&h(y1.INVALID_LINKED_FORMAT,s(),0),u.braceNest=0,u.inLinked=!1,r1(c,u))}}function r1(c,u){let m={type:14};if(u.braceNest>0)return u1(c,u)||p(u);if(u.inLinked)return f1(c,u)||p(u);switch(c.currentChar()){case"{":return u1(c,u)||p(u);case"}":return h(y1.UNBALANCED_CLOSING_BRACE,s(),0),c.next(),C(u,3,"}");case"@":return f1(c,u)||p(u);default:if(R(c))return m=C(u,1,z(c)),u.braceNest=0,u.inLinked=!1,m;const{isModulo:S,hasSpace:H}=$(c);if(S)return H?C(u,0,T1(c)):C(u,4,h1(c));if(O(c))return C(u,0,T1(c));break}return m}function t1(){const{currentType:c,offset:u,startLoc:m,endLoc:v}=o;return o.lastType=c,o.lastOffset=u,o.lastStartLoc=m,o.lastEndLoc=v,o.offset=n(),o.startLoc=s(),a.currentChar()===q2?C(o,14):r1(a,o)}return{nextToken:t1,currentOffset:n,currentPosition:s,context:f}}const ff="parser",df=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function Cf(e,t,r){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const a=parseInt(t||r,16);return a<=55295||a>=57344?String.fromCodePoint(a):"\uFFFD"}}}function hf(e={}){const t=e.location!==!1,{onError:r}=e;function a(g,_,F,k,...L){const P=g.currentPosition();if(P.offset+=k,P.column+=k,r){const x=D5(F,P),U=T6(_,x,{domain:ff,args:L});r(U)}}function n(g,_,F){const k={type:g,start:_,end:_};return t&&(k.loc={start:F,end:F}),k}function s(g,_,F,k){g.end=_,k&&(g.type=k),t&&g.loc&&(g.loc.end=F)}function i(g,_){const F=g.context(),k=n(3,F.offset,F.startLoc);return k.value=_,s(k,g.currentOffset(),g.currentPosition()),k}function l(g,_){const F=g.context(),{lastOffset:k,lastStartLoc:L}=F,P=n(5,k,L);return P.index=parseInt(_,10),g.nextToken(),s(P,g.currentOffset(),g.currentPosition()),P}function o(g,_){const F=g.context(),{lastOffset:k,lastStartLoc:L}=F,P=n(4,k,L);return P.key=_,g.nextToken(),s(P,g.currentOffset(),g.currentPosition()),P}function f(g,_){const F=g.context(),{lastOffset:k,lastStartLoc:L}=F,P=n(9,k,L);return P.value=_.replace(df,Cf),g.nextToken(),s(P,g.currentOffset(),g.currentPosition()),P}function d(g){const _=g.nextToken(),F=g.context(),{lastOffset:k,lastStartLoc:L}=F,P=n(8,k,L);return _.type!==12?(a(g,y1.UNEXPECTED_EMPTY_LINKED_MODIFIER,F.lastStartLoc,0),P.value="",s(P,k,L),{nextConsumeToken:_,node:P}):(_.value==null&&a(g,y1.UNEXPECTED_LEXICAL_ANALYSIS,F.lastStartLoc,0,S2(_)),P.value=_.value||"",s(P,g.currentOffset(),g.currentPosition()),{node:P})}function h(g,_){const F=g.context(),k=n(7,F.offset,F.startLoc);return k.value=_,s(k,g.currentOffset(),g.currentPosition()),k}function C(g){const _=g.context(),F=n(6,_.offset,_.startLoc);let k=g.nextToken();if(k.type===9){const L=d(g);F.modifier=L.node,k=L.nextConsumeToken||g.nextToken()}switch(k.type!==10&&a(g,y1.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,S2(k)),k=g.nextToken(),k.type===2&&(k=g.nextToken()),k.type){case 11:k.value==null&&a(g,y1.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,S2(k)),F.key=h(g,k.value||"");break;case 5:k.value==null&&a(g,y1.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,S2(k)),F.key=o(g,k.value||"");break;case 6:k.value==null&&a(g,y1.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,S2(k)),F.key=l(g,k.value||"");break;case 7:k.value==null&&a(g,y1.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,S2(k)),F.key=f(g,k.value||"");break;default:a(g,y1.UNEXPECTED_EMPTY_LINKED_KEY,_.lastStartLoc,0);const L=g.context(),P=n(7,L.offset,L.startLoc);return P.value="",s(P,L.offset,L.startLoc),F.key=P,s(F,L.offset,L.startLoc),{nextConsumeToken:k,node:F}}return s(F,g.currentOffset(),g.currentPosition()),{node:F}}function p(g){const _=g.context(),F=_.currentType===1?g.currentOffset():_.offset,k=_.currentType===1?_.endLoc:_.startLoc,L=n(2,F,k);L.items=[];let P=null;do{const I=P||g.nextToken();switch(P=null,I.type){case 0:I.value==null&&a(g,y1.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,S2(I)),L.items.push(i(g,I.value||""));break;case 6:I.value==null&&a(g,y1.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,S2(I)),L.items.push(l(g,I.value||""));break;case 5:I.value==null&&a(g,y1.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,S2(I)),L.items.push(o(g,I.value||""));break;case 7:I.value==null&&a(g,y1.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,S2(I)),L.items.push(f(g,I.value||""));break;case 8:const R=C(g);L.items.push(R.node),P=R.nextConsumeToken||null;break}}while(_.currentType!==14&&_.currentType!==1);const x=_.currentType===1?_.lastOffset:g.currentOffset(),U=_.currentType===1?_.lastEndLoc:g.currentPosition();return s(L,x,U),L}function b(g,_,F,k){const L=g.context();let P=k.items.length===0;const x=n(1,_,F);x.cases=[],x.cases.push(k);do{const U=p(g);P||(P=U.items.length===0),x.cases.push(U)}while(L.currentType!==14);return P&&a(g,y1.MUST_HAVE_MESSAGES_IN_PLURAL,F,0),s(x,g.currentOffset(),g.currentPosition()),x}function M(g){const _=g.context(),{offset:F,startLoc:k}=_,L=p(g);return _.currentType===14?L:b(g,F,k,L)}function E(g){const _=uf(g,W1({},e)),F=_.context(),k=n(0,F.offset,F.startLoc);return t&&k.loc&&(k.loc.source=g),k.body=M(_),F.currentType!==14&&a(_,y1.UNEXPECTED_LEXICAL_ANALYSIS,F.lastStartLoc,0,g[F.offset]||""),s(k,_.currentOffset(),_.currentPosition()),k}return{parse:E}}function S2(e){if(e.type===14)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"\u2026":t}function mf(e,t={}){const r={ast:e,helpers:new Set};return{context:()=>r,helper:s=>(r.helpers.add(s),s)}}function k8(e,t){for(let r=0;r<e.length;r++)H7(e[r],t)}function H7(e,t){switch(e.type){case 1:k8(e.cases,t),t.helper("plural");break;case 2:k8(e.items,t);break;case 6:H7(e.key,t),t.helper("linked"),t.helper("type");break;case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named");break}}function gf(e,t={}){const r=mf(e);r.helper("normalize"),e.body&&H7(e.body,r);const a=r.context();e.helpers=Array.from(a.helpers)}function pf(e,t){const{sourceMap:r,filename:a,breakLineCode:n,needIndent:s}=t,i={source:e.loc.source,filename:a,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:n,needIndent:s,indentLevel:0},l=()=>i;function o(M,E){i.code+=M}function f(M,E=!0){const g=E?n:"";o(s?g+"  ".repeat(M):g)}function d(M=!0){const E=++i.indentLevel;M&&f(E)}function h(M=!0){const E=--i.indentLevel;M&&f(E)}function C(){f(i.indentLevel)}return{context:l,push:o,indent:d,deindent:h,newline:C,helper:M=>`_${M}`,needIndent:()=>i.needIndent}}function yf(e,t){const{helper:r}=e;e.push(`${r("linked")}(`),K0(e,t.key),t.modifier?(e.push(", "),K0(e,t.modifier),e.push(", _type")):e.push(", undefined, _type"),e.push(")")}function Lf(e,t){const{helper:r,needIndent:a}=e;e.push(`${r("normalize")}([`),e.indent(a());const n=t.items.length;for(let s=0;s<n&&(K0(e,t.items[s]),s!==n-1);s++)e.push(", ");e.deindent(a()),e.push("])")}function vf(e,t){const{helper:r,needIndent:a}=e;if(t.cases.length>1){e.push(`${r("plural")}([`),e.indent(a());const n=t.cases.length;for(let s=0;s<n&&(K0(e,t.cases[s]),s!==n-1);s++)e.push(", ");e.deindent(a()),e.push("])")}}function _f(e,t){t.body?K0(e,t.body):e.push("null")}function K0(e,t){const{helper:r}=e;switch(t.type){case 0:_f(e,t);break;case 1:vf(e,t);break;case 2:Lf(e,t);break;case 6:yf(e,t);break;case 8:e.push(JSON.stringify(t.value),t);break;case 7:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${r("interpolate")}(${r("list")}(${t.index}))`,t);break;case 4:e.push(`${r("interpolate")}(${r("named")}(${JSON.stringify(t.key)}))`,t);break;case 9:e.push(JSON.stringify(t.value),t);break;case 3:e.push(JSON.stringify(t.value),t);break}}const kf=(e,t={})=>{const r=Z(t.mode)?t.mode:"normal",a=Z(t.filename)?t.filename:"message.intl",n=!!t.sourceMap,s=t.breakLineCode!=null?t.breakLineCode:r==="arrow"?";":`
`,i=t.needIndent?t.needIndent:r!=="arrow",l=e.helpers||[],o=pf(e,{mode:r,filename:a,sourceMap:n,breakLineCode:s,needIndent:i});o.push(r==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),o.indent(i),l.length>0&&(o.push(`const { ${l.map(h=>`${h}: _${h}`).join(", ")} } = ctx`),o.newline()),o.push("return "),K0(o,e),o.deindent(i),o.push("}");const{code:f,map:d}=o.context();return{ast:e,code:f,map:d?d.toJSON():void 0}};function bf(e,t={}){const r=W1({},t),n=hf(r).parse(e);return gf(n,r),kf(n,r)}/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const tt={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const o0=[];o0[0]={w:[0],i:[3,0],["["]:[4],o:[7]};o0[1]={w:[1],["."]:[2],["["]:[4],o:[7]};o0[2]={w:[2],i:[3,0],[0]:[3,0]};o0[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};o0[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};o0[5]={["'"]:[4,0],o:8,l:[5,0]};o0[6]={['"']:[4,0],o:8,l:[6,0]};const Mf=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Sf(e){return Mf.test(e)}function wf(e){const t=e.charCodeAt(0),r=e.charCodeAt(e.length-1);return t===r&&(t===34||t===39)?e.slice(1,-1):e}function Ef(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Ff(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:Sf(t)?wf(t):"*"+t}function xf(e){const t=[];let r=-1,a=0,n=0,s,i,l,o,f,d,h;const C=[];C[0]=()=>{i===void 0?i=l:i+=l},C[1]=()=>{i!==void 0&&(t.push(i),i=void 0)},C[2]=()=>{C[0](),n++},C[3]=()=>{if(n>0)n--,a=4,C[0]();else{if(n=0,i===void 0||(i=Ff(i),i===!1))return!1;C[1]()}};function p(){const b=e[r+1];if(a===5&&b==="'"||a===6&&b==='"')return r++,l="\\"+b,C[0](),!0}for(;a!==null;)if(r++,s=e[r],!(s==="\\"&&p())){if(o=Ef(s),h=o0[a],f=h[o]||h.l||8,f===8||(a=f[0],f[1]!==void 0&&(d=C[f[1]],d&&(l=s,d()===!1))))return;if(a===7)return t}}const b8=new Map;function Hf(e,t){return w1(e)?e[t]:null}function Tf(e,t){if(!w1(e))return null;let r=b8.get(t);if(r||(r=xf(t),r&&b8.set(t,r)),!r)return null;const a=r.length;let n=e,s=0;for(;s<a;){const i=n[r[s]];if(i===void 0)return null;n=i,s++}return n}const Of=e=>e,Af=e=>"",Rf="text",Nf=e=>e.length===0?"":e.join(""),If=tf;function M8(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function Pf(e){const t=N1(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(N1(e.named.count)||N1(e.named.n))?N1(e.named.count)?e.named.count:N1(e.named.n)?e.named.n:t:t}function Df(e,t){t.count||(t.count=e),t.n||(t.n=e)}function Vf(e={}){const t=e.locale,r=Pf(e),a=w1(e.pluralRules)&&Z(t)&&H1(e.pluralRules[t])?e.pluralRules[t]:M8,n=w1(e.pluralRules)&&Z(t)&&H1(e.pluralRules[t])?M8:void 0,s=g=>g[a(r,g.length,n)],i=e.list||[],l=g=>i[g],o=e.named||{};N1(e.pluralIndex)&&Df(r,o);const f=g=>o[g];function d(g){const _=H1(e.messages)?e.messages(g):w1(e.messages)?e.messages[g]:!1;return _||(e.parent?e.parent.message(g):Af)}const h=g=>e.modifiers?e.modifiers[g]:Of,C=n1(e.processor)&&H1(e.processor.normalize)?e.processor.normalize:Nf,p=n1(e.processor)&&H1(e.processor.interpolate)?e.processor.interpolate:If,b=n1(e.processor)&&Z(e.processor.type)?e.processor.type:Rf,E={list:l,named:f,plural:s,linked:(g,..._)=>{const[F,k]=_;let L="text",P="";_.length===1?w1(F)?(P=F.modifier||P,L=F.type||L):Z(F)&&(P=F||P):_.length===2&&(Z(F)&&(P=F||P),Z(k)&&(L=k||L));let x=d(g)(E);return L==="vnode"&&S1(x)&&P&&(x=x[0]),P?h(P)(x,L):x},message:d,type:b,interpolate:p,normalize:C};return E}let w3=null;function Bf(e){w3=e}function $f(e,t,r){w3&&w3.emit(tt.I18nInit,{timestamp:Date.now(),i18n:e,version:t,meta:r})}const Wf=Zf(tt.FunctionTranslate);function Zf(e){return t=>w3&&w3.emit(e,t)}const Uf={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7};function jf(e,t,r){return[...new Set([r,...S1(t)?t:w1(t)?Object.keys(t):Z(t)?[t]:[r]])]}function rt(e,t,r){const a=Z(r)?r:F3,n=e;n.__localeChainCache||(n.__localeChainCache=new Map);let s=n.__localeChainCache.get(a);if(!s){s=[];let i=[r];for(;S1(i);)i=S8(s,i,t);const l=S1(t)||!n1(t)?t:t.default?t.default:null;i=Z(l)?[l]:l,S1(i)&&S8(s,i,!1),n.__localeChainCache.set(a,s)}return s}function S8(e,t,r){let a=!0;for(let n=0;n<t.length&&d1(a);n++){const s=t[n];Z(s)&&(a=Gf(e,t[n],r))}return a}function Gf(e,t,r){let a;const n=t.split("-");do{const s=n.join("-");a=qf(e,s,r),n.splice(-1,1)}while(n.length&&a===!0);return a}function qf(e,t,r){let a=!1;if(!e.includes(t)&&(a=!0,t)){a=t[t.length-1]!=="!";const n=t.replace(/!/g,"");e.push(n),(S1(r)||n1(r))&&r[n]&&(a=r[n])}return a}const zf="9.2.2",O6=-1,F3="en-US",w8="",E8=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function Kf(){return{upper:(e,t)=>t==="text"&&Z(e)?e.toUpperCase():t==="vnode"&&w1(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&Z(e)?e.toLowerCase():t==="vnode"&&w1(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&Z(e)?E8(e):t==="vnode"&&w1(e)&&"__v_isVNode"in e?E8(e.children):e}}let at;function Yf(e){at=e}let nt;function Xf(e){nt=e}let st;function Jf(e){st=e}let it=null;const F8=e=>{it=e},Qf=()=>it;let lt=null;const x8=e=>{lt=e},ed=()=>lt;let H8=0;function td(e={}){const t=Z(e.version)?e.version:zf,r=Z(e.locale)?e.locale:F3,a=S1(e.fallbackLocale)||n1(e.fallbackLocale)||Z(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:r,n=n1(e.messages)?e.messages:{[r]:{}},s=n1(e.datetimeFormats)?e.datetimeFormats:{[r]:{}},i=n1(e.numberFormats)?e.numberFormats:{[r]:{}},l=W1({},e.modifiers||{},Kf()),o=e.pluralRules||{},f=H1(e.missing)?e.missing:null,d=d1(e.missingWarn)||s0(e.missingWarn)?e.missingWarn:!0,h=d1(e.fallbackWarn)||s0(e.fallbackWarn)?e.fallbackWarn:!0,C=!!e.fallbackFormat,p=!!e.unresolving,b=H1(e.postTranslation)?e.postTranslation:null,M=n1(e.processor)?e.processor:null,E=d1(e.warnHtmlMessage)?e.warnHtmlMessage:!0,g=!!e.escapeParameter,_=H1(e.messageCompiler)?e.messageCompiler:at,F=H1(e.messageResolver)?e.messageResolver:nt||Hf,k=H1(e.localeFallbacker)?e.localeFallbacker:st||jf,L=w1(e.fallbackContext)?e.fallbackContext:void 0,P=H1(e.onWarn)?e.onWarn:Qu,x=e,U=w1(x.__datetimeFormatters)?x.__datetimeFormatters:new Map,I=w1(x.__numberFormatters)?x.__numberFormatters:new Map,R=w1(x.__meta)?x.__meta:{};H8++;const $={version:t,cid:H8,locale:r,fallbackLocale:a,messages:n,modifiers:l,pluralRules:o,missing:f,missingWarn:d,fallbackWarn:h,fallbackFormat:C,unresolving:p,postTranslation:b,processor:M,warnHtmlMessage:E,escapeParameter:g,messageCompiler:_,messageResolver:F,localeFallbacker:k,fallbackContext:L,onWarn:P,__meta:R};return $.datetimeFormats=s,$.numberFormats=i,$.__datetimeFormatters=U,$.__numberFormatters=I,__INTLIFY_PROD_DEVTOOLS__&&$f($,t,R),$}function T7(e,t,r,a,n){const{missing:s,onWarn:i}=e;if(s!==null){const l=s(e,r,t,n);return Z(l)?l:t}else return t}function s3(e,t,r){const a=e;a.__localeChainCache=new Map,e.localeFallbacker(e,r,t)}const rd=e=>e;let T8=Object.create(null);function ad(e,t={}){{const a=(t.onCacheKey||rd)(e),n=T8[a];if(n)return n;let s=!1;const i=t.onError||rf;t.onError=f=>{s=!0,i(f)};const{code:l}=bf(e,t),o=new Function(`return ${l}`)();return s?o:T8[a]=o}}let ot=y1.__EXTEND_POINT__;const i5=()=>++ot,V0={INVALID_ARGUMENT:ot,INVALID_DATE_ARGUMENT:i5(),INVALID_ISO_DATE_ARGUMENT:i5(),__EXTEND_POINT__:i5()};function B0(e){return T6(e,null,void 0)}const O8=()=>"",F2=e=>H1(e);function A8(e,...t){const{fallbackFormat:r,postTranslation:a,unresolving:n,messageCompiler:s,fallbackLocale:i,messages:l}=e,[o,f]=V5(...t),d=d1(f.missingWarn)?f.missingWarn:e.missingWarn,h=d1(f.fallbackWarn)?f.fallbackWarn:e.fallbackWarn,C=d1(f.escapeParameter)?f.escapeParameter:e.escapeParameter,p=!!f.resolvedMessage,b=Z(f.default)||d1(f.default)?d1(f.default)?s?o:()=>o:f.default:r?s?o:()=>o:"",M=r||b!=="",E=Z(f.locale)?f.locale:e.locale;C&&nd(f);let[g,_,F]=p?[o,E,l[E]||{}]:ct(e,o,E,i,h,d),k=g,L=o;if(!p&&!(Z(k)||F2(k))&&M&&(k=b,L=k),!p&&(!(Z(k)||F2(k))||!Z(_)))return n?O6:o;let P=!1;const x=()=>{P=!0},U=F2(k)?k:ut(e,o,_,k,L,x);if(P)return k;const I=ld(e,_,F,f),R=Vf(I),$=sd(e,U,R),O=a?a($,o):$;if(__INTLIFY_PROD_DEVTOOLS__){const Y={timestamp:Date.now(),key:Z(o)?o:F2(k)?k.key:"",locale:_||(F2(k)?k.locale:""),format:Z(k)?k:F2(k)?k.source:"",message:O};Y.meta=W1({},e.__meta,Qf()||{}),Wf(Y)}return O}function nd(e){S1(e.list)?e.list=e.list.map(t=>Z(t)?v8(t):t):w1(e.named)&&Object.keys(e.named).forEach(t=>{Z(e.named[t])&&(e.named[t]=v8(e.named[t]))})}function ct(e,t,r,a,n,s){const{messages:i,onWarn:l,messageResolver:o,localeFallbacker:f}=e,d=f(e,a,r);let h={},C,p=null;const b="translate";for(let M=0;M<d.length&&(C=d[M],h=i[C]||{},(p=o(h,t))===null&&(p=h[t]),!(Z(p)||H1(p)));M++){const E=T7(e,t,C,s,b);E!==t&&(p=E)}return[p,C,h]}function ut(e,t,r,a,n,s){const{messageCompiler:i,warnHtmlMessage:l}=e;if(F2(a)){const f=a;return f.locale=f.locale||r,f.key=f.key||t,f}if(i==null){const f=()=>a;return f.locale=r,f.key=t,f}const o=i(a,id(e,r,n,a,l,s));return o.locale=r,o.key=t,o.source=a,o}function sd(e,t,r){return t(r)}function V5(...e){const[t,r,a]=e,n={};if(!Z(t)&&!N1(t)&&!F2(t))throw B0(V0.INVALID_ARGUMENT);const s=N1(t)?String(t):(F2(t),t);return N1(r)?n.plural=r:Z(r)?n.default=r:n1(r)&&!H6(r)?n.named=r:S1(r)&&(n.list=r),N1(a)?n.plural=a:Z(a)?n.default=a:n1(a)&&W1(n,a),[s,n]}function id(e,t,r,a,n,s){return{warnHtmlMessage:n,onError:i=>{throw s&&s(i),i},onCacheKey:i=>Yu(t,r,i)}}function ld(e,t,r,a){const{modifiers:n,pluralRules:s,messageResolver:i,fallbackLocale:l,fallbackWarn:o,missingWarn:f,fallbackContext:d}=e,C={locale:t,modifiers:n,pluralRules:s,messages:p=>{let b=i(r,p);if(b==null&&d){const[,,M]=ct(d,p,t,l,o,f);b=i(M,p)}if(Z(b)){let M=!1;const g=ut(e,p,t,b,p,()=>{M=!0});return M?O8:g}else return F2(b)?b:O8}};return e.processor&&(C.processor=e.processor),a.list&&(C.list=a.list),a.named&&(C.named=a.named),N1(a.plural)&&(C.pluralIndex=a.plural),C}function R8(e,...t){const{datetimeFormats:r,unresolving:a,fallbackLocale:n,onWarn:s,localeFallbacker:i}=e,{__datetimeFormatters:l}=e,[o,f,d,h]=B5(...t),C=d1(d.missingWarn)?d.missingWarn:e.missingWarn;d1(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn;const p=!!d.part,b=Z(d.locale)?d.locale:e.locale,M=i(e,n,b);if(!Z(o)||o==="")return new Intl.DateTimeFormat(b,h).format(f);let E={},g,_=null;const F="datetime format";for(let P=0;P<M.length&&(g=M[P],E=r[g]||{},_=E[o],!n1(_));P++)T7(e,o,g,C,F);if(!n1(_)||!Z(g))return a?O6:o;let k=`${g}__${o}`;H6(h)||(k=`${k}__${JSON.stringify(h)}`);let L=l.get(k);return L||(L=new Intl.DateTimeFormat(g,W1({},_,h)),l.set(k,L)),p?L.formatToParts(f):L.format(f)}const ft=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function B5(...e){const[t,r,a,n]=e,s={};let i={},l;if(Z(t)){const o=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!o)throw B0(V0.INVALID_ISO_DATE_ARGUMENT);const f=o[3]?o[3].trim().startsWith("T")?`${o[1].trim()}${o[3].trim()}`:`${o[1].trim()}T${o[3].trim()}`:o[1].trim();l=new Date(f);try{l.toISOString()}catch{throw B0(V0.INVALID_ISO_DATE_ARGUMENT)}}else if(Ju(t)){if(isNaN(t.getTime()))throw B0(V0.INVALID_DATE_ARGUMENT);l=t}else if(N1(t))l=t;else throw B0(V0.INVALID_ARGUMENT);return Z(r)?s.key=r:n1(r)&&Object.keys(r).forEach(o=>{ft.includes(o)?i[o]=r[o]:s[o]=r[o]}),Z(a)?s.locale=a:n1(a)&&(i=a),n1(n)&&(i=n),[s.key||"",l,s,i]}function N8(e,t,r){const a=e;for(const n in r){const s=`${t}__${n}`;!a.__datetimeFormatters.has(s)||a.__datetimeFormatters.delete(s)}}function I8(e,...t){const{numberFormats:r,unresolving:a,fallbackLocale:n,onWarn:s,localeFallbacker:i}=e,{__numberFormatters:l}=e,[o,f,d,h]=$5(...t),C=d1(d.missingWarn)?d.missingWarn:e.missingWarn;d1(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn;const p=!!d.part,b=Z(d.locale)?d.locale:e.locale,M=i(e,n,b);if(!Z(o)||o==="")return new Intl.NumberFormat(b,h).format(f);let E={},g,_=null;const F="number format";for(let P=0;P<M.length&&(g=M[P],E=r[g]||{},_=E[o],!n1(_));P++)T7(e,o,g,C,F);if(!n1(_)||!Z(g))return a?O6:o;let k=`${g}__${o}`;H6(h)||(k=`${k}__${JSON.stringify(h)}`);let L=l.get(k);return L||(L=new Intl.NumberFormat(g,W1({},_,h)),l.set(k,L)),p?L.formatToParts(f):L.format(f)}const dt=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function $5(...e){const[t,r,a,n]=e,s={};let i={};if(!N1(t))throw B0(V0.INVALID_ARGUMENT);const l=t;return Z(r)?s.key=r:n1(r)&&Object.keys(r).forEach(o=>{dt.includes(o)?i[o]=r[o]:s[o]=r[o]}),Z(a)?s.locale=a:n1(a)&&(i=a),n1(n)&&(i=n),[s.key||"",l,s,i]}function P8(e,t,r){const a=e;for(const n in r){const s=`${t}__${n}`;!a.__numberFormatters.has(s)||a.__numberFormatters.delete(s)}}typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(h3().__INTLIFY_PROD_DEVTOOLS__=!1);/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const od="9.2.2";function cd(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(h3().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(h3().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(h3().__INTLIFY_PROD_DEVTOOLS__=!1)}Uf.__EXTEND_POINT__;let Ct=y1.__EXTEND_POINT__;const Q1=()=>++Ct,A1={UNEXPECTED_RETURN_TYPE:Ct,INVALID_ARGUMENT:Q1(),MUST_BE_CALL_SETUP_TOP:Q1(),NOT_INSLALLED:Q1(),NOT_AVAILABLE_IN_LEGACY_MODE:Q1(),REQUIRED_VALUE:Q1(),INVALID_VALUE:Q1(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:Q1(),NOT_INSLALLED_WITH_PROVIDE:Q1(),UNEXPECTED_ERROR:Q1(),NOT_COMPATIBLE_LEGACY_VUE_I18N:Q1(),BRIDGE_SUPPORT_VUE_2_ONLY:Q1(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:Q1(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:Q1(),__EXTEND_POINT__:Q1()};function I1(e,...t){return T6(e,null,void 0)}const W5=l0("__transrateVNode"),Z5=l0("__datetimeParts"),U5=l0("__numberParts"),ht=l0("__setPluralRules");l0("__intlifyMeta");const mt=l0("__injectWithOption");function j5(e){if(!w1(e))return e;for(const t in e)if(!!F7(e,t))if(!t.includes("."))w1(e[t])&&j5(e[t]);else{const r=t.split("."),a=r.length-1;let n=e;for(let s=0;s<a;s++)r[s]in n||(n[r[s]]={}),n=n[r[s]];n[r[a]]=e[t],delete e[t],w1(n[r[a]])&&j5(n[r[a]])}return e}function A6(e,t){const{messages:r,__i18n:a,messageResolver:n,flatJson:s}=t,i=n1(r)?r:S1(a)?{}:{[e]:{}};if(S1(a)&&a.forEach(l=>{if("locale"in l&&"resource"in l){const{locale:o,resource:f}=l;o?(i[o]=i[o]||{},m3(f,i[o])):m3(f,i)}else Z(l)&&m3(JSON.parse(l),i)}),n==null&&s)for(const l in i)F7(i,l)&&j5(i[l]);return i}const I3=e=>!w1(e)||S1(e);function m3(e,t){if(I3(e)||I3(t))throw I1(A1.INVALID_VALUE);for(const r in e)F7(e,r)&&(I3(e[r])||I3(t[r])?t[r]=e[r]:m3(e[r],t[r]))}function gt(e){return e.type}function pt(e,t,r){let a=w1(t.messages)?t.messages:{};"__i18nGlobal"in r&&(a=A6(e.locale.value,{messages:a,__i18n:r.__i18nGlobal}));const n=Object.keys(a);n.length&&n.forEach(s=>{e.mergeLocaleMessage(s,a[s])});{if(w1(t.datetimeFormats)){const s=Object.keys(t.datetimeFormats);s.length&&s.forEach(i=>{e.mergeDateTimeFormat(i,t.datetimeFormats[i])})}if(w1(t.numberFormats)){const s=Object.keys(t.numberFormats);s.length&&s.forEach(i=>{e.mergeNumberFormat(i,t.numberFormats[i])})}}}function D8(e){return a1(v6,null,e,0)}const V8="__INTLIFY_META__";let B8=0;function $8(e){return(t,r,a,n)=>e(r,a,B2()||void 0,n)}const ud=()=>{const e=B2();let t=null;return e&&(t=gt(e)[V8])?{[V8]:t}:null};function O7(e={},t){const{__root:r}=e,a=r===void 0;let n=d1(e.inheritLocale)?e.inheritLocale:!0;const s=E1(r&&n?r.locale.value:Z(e.locale)?e.locale:F3),i=E1(r&&n?r.fallbackLocale.value:Z(e.fallbackLocale)||S1(e.fallbackLocale)||n1(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:s.value),l=E1(A6(s.value,e)),o=E1(n1(e.datetimeFormats)?e.datetimeFormats:{[s.value]:{}}),f=E1(n1(e.numberFormats)?e.numberFormats:{[s.value]:{}});let d=r?r.missingWarn:d1(e.missingWarn)||s0(e.missingWarn)?e.missingWarn:!0,h=r?r.fallbackWarn:d1(e.fallbackWarn)||s0(e.fallbackWarn)?e.fallbackWarn:!0,C=r?r.fallbackRoot:d1(e.fallbackRoot)?e.fallbackRoot:!0,p=!!e.fallbackFormat,b=H1(e.missing)?e.missing:null,M=H1(e.missing)?$8(e.missing):null,E=H1(e.postTranslation)?e.postTranslation:null,g=r?r.warnHtmlMessage:d1(e.warnHtmlMessage)?e.warnHtmlMessage:!0,_=!!e.escapeParameter;const F=r?r.modifiers:n1(e.modifiers)?e.modifiers:{};let k=e.pluralRules||r&&r.pluralRules,L;L=(()=>{a&&x8(null);const y={version:od,locale:s.value,fallbackLocale:i.value,messages:l.value,modifiers:F,pluralRules:k,missing:M===null?void 0:M,missingWarn:d,fallbackWarn:h,fallbackFormat:p,unresolving:!0,postTranslation:E===null?void 0:E,warnHtmlMessage:g,escapeParameter:_,messageResolver:e.messageResolver,__meta:{framework:"vue"}};y.datetimeFormats=o.value,y.numberFormats=f.value,y.__datetimeFormatters=n1(L)?L.__datetimeFormatters:void 0,y.__numberFormatters=n1(L)?L.__numberFormatters:void 0;const w=td(y);return a&&x8(w),w})(),s3(L,s.value,i.value);function x(){return[s.value,i.value,l.value,o.value,f.value]}const U=X({get:()=>s.value,set:y=>{s.value=y,L.locale=s.value}}),I=X({get:()=>i.value,set:y=>{i.value=y,L.fallbackLocale=i.value,s3(L,s.value,y)}}),R=X(()=>l.value),$=X(()=>o.value),O=X(()=>f.value);function Y(){return H1(E)?E:null}function p1(y){E=y,L.postTranslation=y}function R1(){return b}function s1(y){y!==null&&(M=$8(y)),b=y,L.missing=M}const Q=(y,w,j,G,e1,c1)=>{x();let m1;if(__INTLIFY_PROD_DEVTOOLS__)try{F8(ud()),a||(L.fallbackContext=r?ed():void 0),m1=y(L)}finally{F8(null),a||(L.fallbackContext=void 0)}else m1=y(L);if(N1(m1)&&m1===O6){const[v1,b1]=w();return r&&C?G(r):e1(v1)}else{if(c1(m1))return m1;throw I1(A1.UNEXPECTED_RETURN_TYPE)}};function h1(...y){return Q(w=>Reflect.apply(A8,null,[w,...y]),()=>V5(...y),"translate",w=>Reflect.apply(w.t,w,[...y]),w=>w,w=>Z(w))}function T1(...y){const[w,j,G]=y;if(G&&!w1(G))throw I1(A1.INVALID_ARGUMENT);return h1(w,j,W1({resolvedMessage:!0},G||{}))}function l2(...y){return Q(w=>Reflect.apply(R8,null,[w,...y]),()=>B5(...y),"datetime format",w=>Reflect.apply(w.d,w,[...y]),()=>w8,w=>Z(w))}function Y1(...y){return Q(w=>Reflect.apply(I8,null,[w,...y]),()=>$5(...y),"number format",w=>Reflect.apply(w.n,w,[...y]),()=>w8,w=>Z(w))}function G1(y){return y.map(w=>Z(w)||N1(w)||d1(w)?D8(String(w)):w)}const o2={normalize:G1,interpolate:y=>y,type:"vnode"};function T(...y){return Q(w=>{let j;const G=w;try{G.processor=o2,j=Reflect.apply(A8,null,[G,...y])}finally{G.processor=null}return j},()=>V5(...y),"translate",w=>w[W5](...y),w=>[D8(w)],w=>S1(w))}function q(...y){return Q(w=>Reflect.apply(I8,null,[w,...y]),()=>$5(...y),"number format",w=>w[U5](...y),()=>[],w=>Z(w)||S1(w))}function D(...y){return Q(w=>Reflect.apply(R8,null,[w,...y]),()=>B5(...y),"datetime format",w=>w[Z5](...y),()=>[],w=>Z(w)||S1(w))}function z(y){k=y,L.pluralRules=k}function u1(y,w){const j=Z(w)?w:s.value,G=t1(j);return L.messageResolver(G,y)!==null}function f1(y){let w=null;const j=rt(L,i.value,s.value);for(let G=0;G<j.length;G++){const e1=l.value[j[G]]||{},c1=L.messageResolver(e1,y);if(c1!=null){w=c1;break}}return w}function r1(y){const w=f1(y);return w!=null?w:r?r.tm(y)||{}:{}}function t1(y){return l.value[y]||{}}function c(y,w){l.value[y]=w,L.messages=l.value}function u(y,w){l.value[y]=l.value[y]||{},m3(w,l.value[y]),L.messages=l.value}function m(y){return o.value[y]||{}}function v(y,w){o.value[y]=w,L.datetimeFormats=o.value,N8(L,y,w)}function S(y,w){o.value[y]=W1(o.value[y]||{},w),L.datetimeFormats=o.value,N8(L,y,w)}function H(y){return f.value[y]||{}}function V(y,w){f.value[y]=w,L.numberFormats=f.value,P8(L,y,w)}function N(y,w){f.value[y]=W1(f.value[y]||{},w),L.numberFormats=f.value,P8(L,y,w)}B8++,r&&P5&&(D2(r.locale,y=>{n&&(s.value=y,L.locale=y,s3(L,s.value,i.value))}),D2(r.fallbackLocale,y=>{n&&(i.value=y,L.fallbackLocale=y,s3(L,s.value,i.value))}));const A={id:B8,locale:U,fallbackLocale:I,get inheritLocale(){return n},set inheritLocale(y){n=y,y&&r&&(s.value=r.locale.value,i.value=r.fallbackLocale.value,s3(L,s.value,i.value))},get availableLocales(){return Object.keys(l.value).sort()},messages:R,get modifiers(){return F},get pluralRules(){return k||{}},get isGlobal(){return a},get missingWarn(){return d},set missingWarn(y){d=y,L.missingWarn=d},get fallbackWarn(){return h},set fallbackWarn(y){h=y,L.fallbackWarn=h},get fallbackRoot(){return C},set fallbackRoot(y){C=y},get fallbackFormat(){return p},set fallbackFormat(y){p=y,L.fallbackFormat=p},get warnHtmlMessage(){return g},set warnHtmlMessage(y){g=y,L.warnHtmlMessage=y},get escapeParameter(){return _},set escapeParameter(y){_=y,L.escapeParameter=y},t:h1,getLocaleMessage:t1,setLocaleMessage:c,mergeLocaleMessage:u,getPostTranslationHandler:Y,setPostTranslationHandler:p1,getMissingHandler:R1,setMissingHandler:s1,[ht]:z};return A.datetimeFormats=$,A.numberFormats=O,A.rt=T1,A.te=u1,A.tm=r1,A.d=l2,A.n=Y1,A.getDateTimeFormat=m,A.setDateTimeFormat=v,A.mergeDateTimeFormat=S,A.getNumberFormat=H,A.setNumberFormat=V,A.mergeNumberFormat=N,A[mt]=e.__injectWithOption,A[W5]=T,A[Z5]=D,A[U5]=q,A}function fd(e){const t=Z(e.locale)?e.locale:F3,r=Z(e.fallbackLocale)||S1(e.fallbackLocale)||n1(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:t,a=H1(e.missing)?e.missing:void 0,n=d1(e.silentTranslationWarn)||s0(e.silentTranslationWarn)?!e.silentTranslationWarn:!0,s=d1(e.silentFallbackWarn)||s0(e.silentFallbackWarn)?!e.silentFallbackWarn:!0,i=d1(e.fallbackRoot)?e.fallbackRoot:!0,l=!!e.formatFallbackMessages,o=n1(e.modifiers)?e.modifiers:{},f=e.pluralizationRules,d=H1(e.postTranslation)?e.postTranslation:void 0,h=Z(e.warnHtmlInMessage)?e.warnHtmlInMessage!=="off":!0,C=!!e.escapeParameterHtml,p=d1(e.sync)?e.sync:!0;let b=e.messages;if(n1(e.sharedMessages)){const L=e.sharedMessages;b=Object.keys(L).reduce((x,U)=>{const I=x[U]||(x[U]={});return W1(I,L[U]),x},b||{})}const{__i18n:M,__root:E,__injectWithOption:g}=e,_=e.datetimeFormats,F=e.numberFormats,k=e.flatJson;return{locale:t,fallbackLocale:r,messages:b,flatJson:k,datetimeFormats:_,numberFormats:F,missing:a,missingWarn:n,fallbackWarn:s,fallbackRoot:i,fallbackFormat:l,modifiers:o,pluralRules:f,postTranslation:d,warnHtmlMessage:h,escapeParameter:C,messageResolver:e.messageResolver,inheritLocale:p,__i18n:M,__root:E,__injectWithOption:g}}function G5(e={},t){{const r=O7(fd(e)),a={id:r.id,get locale(){return r.locale.value},set locale(n){r.locale.value=n},get fallbackLocale(){return r.fallbackLocale.value},set fallbackLocale(n){r.fallbackLocale.value=n},get messages(){return r.messages.value},get datetimeFormats(){return r.datetimeFormats.value},get numberFormats(){return r.numberFormats.value},get availableLocales(){return r.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(n){},get missing(){return r.getMissingHandler()},set missing(n){r.setMissingHandler(n)},get silentTranslationWarn(){return d1(r.missingWarn)?!r.missingWarn:r.missingWarn},set silentTranslationWarn(n){r.missingWarn=d1(n)?!n:n},get silentFallbackWarn(){return d1(r.fallbackWarn)?!r.fallbackWarn:r.fallbackWarn},set silentFallbackWarn(n){r.fallbackWarn=d1(n)?!n:n},get modifiers(){return r.modifiers},get formatFallbackMessages(){return r.fallbackFormat},set formatFallbackMessages(n){r.fallbackFormat=n},get postTranslation(){return r.getPostTranslationHandler()},set postTranslation(n){r.setPostTranslationHandler(n)},get sync(){return r.inheritLocale},set sync(n){r.inheritLocale=n},get warnHtmlInMessage(){return r.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(n){r.warnHtmlMessage=n!=="off"},get escapeParameterHtml(){return r.escapeParameter},set escapeParameterHtml(n){r.escapeParameter=n},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(n){},get pluralizationRules(){return r.pluralRules||{}},__composer:r,t(...n){const[s,i,l]=n,o={};let f=null,d=null;if(!Z(s))throw I1(A1.INVALID_ARGUMENT);const h=s;return Z(i)?o.locale=i:S1(i)?f=i:n1(i)&&(d=i),S1(l)?f=l:n1(l)&&(d=l),Reflect.apply(r.t,r,[h,f||d||{},o])},rt(...n){return Reflect.apply(r.rt,r,[...n])},tc(...n){const[s,i,l]=n,o={plural:1};let f=null,d=null;if(!Z(s))throw I1(A1.INVALID_ARGUMENT);const h=s;return Z(i)?o.locale=i:N1(i)?o.plural=i:S1(i)?f=i:n1(i)&&(d=i),Z(l)?o.locale=l:S1(l)?f=l:n1(l)&&(d=l),Reflect.apply(r.t,r,[h,f||d||{},o])},te(n,s){return r.te(n,s)},tm(n){return r.tm(n)},getLocaleMessage(n){return r.getLocaleMessage(n)},setLocaleMessage(n,s){r.setLocaleMessage(n,s)},mergeLocaleMessage(n,s){r.mergeLocaleMessage(n,s)},d(...n){return Reflect.apply(r.d,r,[...n])},getDateTimeFormat(n){return r.getDateTimeFormat(n)},setDateTimeFormat(n,s){r.setDateTimeFormat(n,s)},mergeDateTimeFormat(n,s){r.mergeDateTimeFormat(n,s)},n(...n){return Reflect.apply(r.n,r,[...n])},getNumberFormat(n){return r.getNumberFormat(n)},setNumberFormat(n,s){r.setNumberFormat(n,s)},mergeNumberFormat(n,s){r.mergeNumberFormat(n,s)},getChoiceIndex(n,s){return-1},__onComponentInstanceCreated(n){const{componentInstanceCreatedListener:s}=e;s&&s(n,a)}};return a}}const A7={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function dd({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((a,n)=>a=[...a,...S1(n.children)?n.children:[n]],[]):t.reduce((r,a)=>{const n=e[a];return n&&(r[a]=n()),r},{})}function yt(e){return O1}const W8={name:"i18n-t",props:W1({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>N1(e)||!isNaN(e)}},A7),setup(e,t){const{slots:r,attrs:a}=t,n=e.i18n||R7({useScope:e.scope,__useComponent:!0});return()=>{const s=Object.keys(r).filter(h=>h!=="_"),i={};e.locale&&(i.locale=e.locale),e.plural!==void 0&&(i.plural=Z(e.plural)?+e.plural:e.plural);const l=dd(t,s),o=n[W5](e.keypath,l,i),f=W1({},a),d=Z(e.tag)||w1(e.tag)?e.tag:yt();return S0(d,f,o)}}};function Cd(e){return S1(e)&&!Z(e[0])}function Lt(e,t,r,a){const{slots:n,attrs:s}=t;return()=>{const i={part:!0};let l={};e.locale&&(i.locale=e.locale),Z(e.format)?i.key=e.format:w1(e.format)&&(Z(e.format.key)&&(i.key=e.format.key),l=Object.keys(e.format).reduce((C,p)=>r.includes(p)?W1({},C,{[p]:e.format[p]}):C,{}));const o=a(e.value,i,l);let f=[i.key];S1(o)?f=o.map((C,p)=>{const b=n[C.type],M=b?b({[C.type]:C.value,index:p,parts:o}):[C.value];return Cd(M)&&(M[0].key=`${C.type}-${p}`),M}):Z(o)&&(f=[o]);const d=W1({},s),h=Z(e.tag)||w1(e.tag)?e.tag:yt();return S0(h,d,f)}}const Z8={name:"i18n-n",props:W1({value:{type:Number,required:!0},format:{type:[String,Object]}},A7),setup(e,t){const r=e.i18n||R7({useScope:"parent",__useComponent:!0});return Lt(e,t,dt,(...a)=>r[U5](...a))}},U8={name:"i18n-d",props:W1({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},A7),setup(e,t){const r=e.i18n||R7({useScope:"parent",__useComponent:!0});return Lt(e,t,ft,(...a)=>r[Z5](...a))}};function hd(e,t){const r=e;if(e.mode==="composition")return r.__getInstance(t)||e.global;{const a=r.__getInstance(t);return a!=null?a.__composer:e.global.__composer}}function md(e){const t=i=>{const{instance:l,modifiers:o,value:f}=i;if(!l||!l.$)throw I1(A1.UNEXPECTED_ERROR);const d=hd(e,l.$),h=j8(f);return[Reflect.apply(d.t,d,[...G8(h)]),d]};return{created:(i,l)=>{const[o,f]=t(l);P5&&e.global===f&&(i.__i18nWatcher=D2(f.locale,()=>{l.instance&&l.instance.$forceUpdate()})),i.__composer=f,i.textContent=o},unmounted:i=>{P5&&i.__i18nWatcher&&(i.__i18nWatcher(),i.__i18nWatcher=void 0,delete i.__i18nWatcher),i.__composer&&(i.__composer=void 0,delete i.__composer)},beforeUpdate:(i,{value:l})=>{if(i.__composer){const o=i.__composer,f=j8(l);i.textContent=Reflect.apply(o.t,o,[...G8(f)])}},getSSRProps:i=>{const[l]=t(i);return{textContent:l}}}}function j8(e){if(Z(e))return{path:e};if(n1(e)){if(!("path"in e))throw I1(A1.REQUIRED_VALUE,"path");return e}else throw I1(A1.INVALID_VALUE)}function G8(e){const{path:t,locale:r,args:a,choice:n,plural:s}=e,i={},l=a||{};return Z(r)&&(i.locale=r),N1(n)&&(i.plural=n),N1(s)&&(i.plural=s),[t,l,i]}function gd(e,t,...r){const a=n1(r[0])?r[0]:{},n=!!a.useI18nComponentName;(d1(a.globalInstall)?a.globalInstall:!0)&&(e.component(n?"i18n":W8.name,W8),e.component(Z8.name,Z8),e.component(U8.name,U8)),e.directive("t",md(t))}function pd(e,t,r){return{beforeCreate(){const a=B2();if(!a)throw I1(A1.UNEXPECTED_ERROR);const n=this.$options;if(n.i18n){const s=n.i18n;n.__i18n&&(s.__i18n=n.__i18n),s.__root=t,this===this.$root?this.$i18n=q8(e,s):(s.__injectWithOption=!0,this.$i18n=G5(s))}else n.__i18n?this===this.$root?this.$i18n=q8(e,n):this.$i18n=G5({__i18n:n.__i18n,__injectWithOption:!0,__root:t}):this.$i18n=e;n.__i18nGlobal&&pt(t,n,n),e.__onComponentInstanceCreated(this.$i18n),r.__setInstance(a,this.$i18n),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$tc=(...s)=>this.$i18n.tc(...s),this.$te=(s,i)=>this.$i18n.te(s,i),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s)},mounted(){},unmounted(){const a=B2();if(!a)throw I1(A1.UNEXPECTED_ERROR);delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__deleteInstance(a),delete this.$i18n}}}function q8(e,t){e.locale=t.locale||e.locale,e.fallbackLocale=t.fallbackLocale||e.fallbackLocale,e.missing=t.missing||e.missing,e.silentTranslationWarn=t.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=t.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=t.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=t.postTranslation||e.postTranslation,e.warnHtmlInMessage=t.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=t.escapeParameterHtml||e.escapeParameterHtml,e.sync=t.sync||e.sync,e.__composer[ht](t.pluralizationRules||e.pluralizationRules);const r=A6(e.locale,{messages:t.messages,__i18n:t.__i18n});return Object.keys(r).forEach(a=>e.mergeLocaleMessage(a,r[a])),t.datetimeFormats&&Object.keys(t.datetimeFormats).forEach(a=>e.mergeDateTimeFormat(a,t.datetimeFormats[a])),t.numberFormats&&Object.keys(t.numberFormats).forEach(a=>e.mergeNumberFormat(a,t.numberFormats[a])),e}const yd=l0("global-vue-i18n");function Ld(e={},t){const r=__VUE_I18N_LEGACY_API__&&d1(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__,a=d1(e.globalInjection)?e.globalInjection:!0,n=__VUE_I18N_LEGACY_API__&&r?!!e.allowComposition:!0,s=new Map,[i,l]=vd(e,r),o=l0("");function f(C){return s.get(C)||null}function d(C,p){s.set(C,p)}function h(C){s.delete(C)}{const C={get mode(){return __VUE_I18N_LEGACY_API__&&r?"legacy":"composition"},get allowComposition(){return n},async install(p,...b){p.__VUE_I18N_SYMBOL__=o,p.provide(p.__VUE_I18N_SYMBOL__,C),!r&&a&&xd(p,C.global),__VUE_I18N_FULL_INSTALL__&&gd(p,C,...b),__VUE_I18N_LEGACY_API__&&r&&p.mixin(pd(l,l.__composer,C));const M=p.unmount;p.unmount=()=>{C.dispose(),M()}},get global(){return l},dispose(){i.stop()},__instances:s,__getInstance:f,__setInstance:d,__deleteInstance:h};return C}}function R7(e={}){const t=B2();if(t==null)throw I1(A1.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&t.appContext.app!=null&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw I1(A1.NOT_INSLALLED);const r=_d(t),a=bd(r),n=gt(t),s=kd(e,n);if(__VUE_I18N_LEGACY_API__&&r.mode==="legacy"&&!e.__useComponent){if(!r.allowComposition)throw I1(A1.NOT_AVAILABLE_IN_LEGACY_MODE);return wd(t,s,a,e)}if(s==="global")return pt(a,e,n),a;if(s==="parent"){let o=Md(r,t,e.__useComponent);return o==null&&(o=a),o}const i=r;let l=i.__getInstance(t);if(l==null){const o=W1({},e);"__i18n"in n&&(o.__i18n=n.__i18n),a&&(o.__root=a),l=O7(o),Sd(i,t),i.__setInstance(t,l)}return l}function vd(e,t,r){const a=J5();{const n=__VUE_I18N_LEGACY_API__&&t?a.run(()=>G5(e)):a.run(()=>O7(e));if(n==null)throw I1(A1.UNEXPECTED_ERROR);return[a,n]}}function _d(e){{const t=f2(e.isCE?yd:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw I1(e.isCE?A1.NOT_INSLALLED_WITH_PROVIDE:A1.UNEXPECTED_ERROR);return t}}function kd(e,t){return H6(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function bd(e){return e.mode==="composition"?e.global:e.global.__composer}function Md(e,t,r=!1){let a=null;const n=t.root;let s=t.parent;for(;s!=null;){const i=e;if(e.mode==="composition")a=i.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const l=i.__getInstance(s);l!=null&&(a=l.__composer,r&&a&&!a[mt]&&(a=null))}if(a!=null||n===s)break;s=s.parent}return a}function Sd(e,t,r){M0(()=>{},t),p6(()=>{e.__deleteInstance(t)},t)}function wd(e,t,r,a={}){const n=t==="local",s=ge(null);if(n&&e.proxy&&!(e.proxy.$options.i18n||e.proxy.$options.__i18n))throw I1(A1.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const i=d1(a.inheritLocale)?a.inheritLocale:!0,l=E1(n&&i?r.locale.value:Z(a.locale)?a.locale:F3),o=E1(n&&i?r.fallbackLocale.value:Z(a.fallbackLocale)||S1(a.fallbackLocale)||n1(a.fallbackLocale)||a.fallbackLocale===!1?a.fallbackLocale:l.value),f=E1(A6(l.value,a)),d=E1(n1(a.datetimeFormats)?a.datetimeFormats:{[l.value]:{}}),h=E1(n1(a.numberFormats)?a.numberFormats:{[l.value]:{}}),C=n?r.missingWarn:d1(a.missingWarn)||s0(a.missingWarn)?a.missingWarn:!0,p=n?r.fallbackWarn:d1(a.fallbackWarn)||s0(a.fallbackWarn)?a.fallbackWarn:!0,b=n?r.fallbackRoot:d1(a.fallbackRoot)?a.fallbackRoot:!0,M=!!a.fallbackFormat,E=H1(a.missing)?a.missing:null,g=H1(a.postTranslation)?a.postTranslation:null,_=n?r.warnHtmlMessage:d1(a.warnHtmlMessage)?a.warnHtmlMessage:!0,F=!!a.escapeParameter,k=n?r.modifiers:n1(a.modifiers)?a.modifiers:{},L=a.pluralRules||n&&r.pluralRules;function P(){return[l.value,o.value,f.value,d.value,h.value]}const x=X({get:()=>s.value?s.value.locale.value:l.value,set:u=>{s.value&&(s.value.locale.value=u),l.value=u}}),U=X({get:()=>s.value?s.value.fallbackLocale.value:o.value,set:u=>{s.value&&(s.value.fallbackLocale.value=u),o.value=u}}),I=X(()=>s.value?s.value.messages.value:f.value),R=X(()=>d.value),$=X(()=>h.value);function O(){return s.value?s.value.getPostTranslationHandler():g}function Y(u){s.value&&s.value.setPostTranslationHandler(u)}function p1(){return s.value?s.value.getMissingHandler():E}function R1(u){s.value&&s.value.setMissingHandler(u)}function s1(u){return P(),u()}function Q(...u){return s.value?s1(()=>Reflect.apply(s.value.t,null,[...u])):s1(()=>"")}function h1(...u){return s.value?Reflect.apply(s.value.rt,null,[...u]):""}function T1(...u){return s.value?s1(()=>Reflect.apply(s.value.d,null,[...u])):s1(()=>"")}function l2(...u){return s.value?s1(()=>Reflect.apply(s.value.n,null,[...u])):s1(()=>"")}function Y1(u){return s.value?s.value.tm(u):{}}function G1(u,m){return s.value?s.value.te(u,m):!1}function Z1(u){return s.value?s.value.getLocaleMessage(u):{}}function o2(u,m){s.value&&(s.value.setLocaleMessage(u,m),f.value[u]=m)}function T(u,m){s.value&&s.value.mergeLocaleMessage(u,m)}function q(u){return s.value?s.value.getDateTimeFormat(u):{}}function D(u,m){s.value&&(s.value.setDateTimeFormat(u,m),d.value[u]=m)}function z(u,m){s.value&&s.value.mergeDateTimeFormat(u,m)}function u1(u){return s.value?s.value.getNumberFormat(u):{}}function f1(u,m){s.value&&(s.value.setNumberFormat(u,m),h.value[u]=m)}function r1(u,m){s.value&&s.value.mergeNumberFormat(u,m)}const t1={get id(){return s.value?s.value.id:-1},locale:x,fallbackLocale:U,messages:I,datetimeFormats:R,numberFormats:$,get inheritLocale(){return s.value?s.value.inheritLocale:i},set inheritLocale(u){s.value&&(s.value.inheritLocale=u)},get availableLocales(){return s.value?s.value.availableLocales:Object.keys(f.value)},get modifiers(){return s.value?s.value.modifiers:k},get pluralRules(){return s.value?s.value.pluralRules:L},get isGlobal(){return s.value?s.value.isGlobal:!1},get missingWarn(){return s.value?s.value.missingWarn:C},set missingWarn(u){s.value&&(s.value.missingWarn=u)},get fallbackWarn(){return s.value?s.value.fallbackWarn:p},set fallbackWarn(u){s.value&&(s.value.missingWarn=u)},get fallbackRoot(){return s.value?s.value.fallbackRoot:b},set fallbackRoot(u){s.value&&(s.value.fallbackRoot=u)},get fallbackFormat(){return s.value?s.value.fallbackFormat:M},set fallbackFormat(u){s.value&&(s.value.fallbackFormat=u)},get warnHtmlMessage(){return s.value?s.value.warnHtmlMessage:_},set warnHtmlMessage(u){s.value&&(s.value.warnHtmlMessage=u)},get escapeParameter(){return s.value?s.value.escapeParameter:F},set escapeParameter(u){s.value&&(s.value.escapeParameter=u)},t:Q,getPostTranslationHandler:O,setPostTranslationHandler:Y,getMissingHandler:p1,setMissingHandler:R1,rt:h1,d:T1,n:l2,tm:Y1,te:G1,getLocaleMessage:Z1,setLocaleMessage:o2,mergeLocaleMessage:T,getDateTimeFormat:q,setDateTimeFormat:D,mergeDateTimeFormat:z,getNumberFormat:u1,setNumberFormat:f1,mergeNumberFormat:r1};function c(u){u.locale.value=l.value,u.fallbackLocale.value=o.value,Object.keys(f.value).forEach(m=>{u.mergeLocaleMessage(m,f.value[m])}),Object.keys(d.value).forEach(m=>{u.mergeDateTimeFormat(m,d.value[m])}),Object.keys(h.value).forEach(m=>{u.mergeNumberFormat(m,h.value[m])}),u.escapeParameter=F,u.fallbackFormat=M,u.fallbackRoot=b,u.fallbackWarn=p,u.missingWarn=C,u.warnHtmlMessage=_}return Oe(()=>{if(e.proxy==null||e.proxy.$i18n==null)throw I1(A1.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const u=s.value=e.proxy.$i18n.__composer;t==="global"?(l.value=u.locale.value,o.value=u.fallbackLocale.value,f.value=u.messages.value,d.value=u.datetimeFormats.value,h.value=u.numberFormats.value):n&&c(u)}),t1}const Ed=["locale","fallbackLocale","availableLocales"],Fd=["t","rt","d","n","tm"];function xd(e,t){const r=Object.create(null);Ed.forEach(a=>{const n=Object.getOwnPropertyDescriptor(t,a);if(!n)throw I1(A1.UNEXPECTED_ERROR);const s=M1(n.value)?{get(){return n.value.value},set(i){n.value.value=i}}:{get(){return n.get&&n.get()}};Object.defineProperty(r,a,s)}),e.config.globalProperties.$i18n=r,Fd.forEach(a=>{const n=Object.getOwnPropertyDescriptor(t,a);if(!n||!n.value)throw I1(A1.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${a}`,n)})}Yf(ad);Xf(Tf);Jf(rt);cd();if(__INTLIFY_PROD_DEVTOOLS__){const e=h3();e.__INTLIFY__=!0,Bf(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const Hd="Hallo",Td={clothes:"Kleidung",top:"Kopfbedeckung",accessories:"Zubeh\xF6r",hairColor:"Haarfarbe",facialHair:"Gesichtsbehaarung",eyes:"Augen",eyebrows:"Augenbrauen",mouths:"Mund",skins:"Hautfarbe",graphic:"Bild"},Od={firstName:"Vorname",lastName:"Nachname",email:"E-Mail",yob:"Jahrgang",password:"Passwort",confirmPassword:"Passwort best\xE4tigen",register:"Registrieren",language:"Sprache"},Ad={hello:Hd,avatar:Td,account:Od},Rd="Salut",Nd={hello:Rd},Id="de-CH",Pd={"de-CH":Ad,"fr-CH":Nd},R6=vn();R6.use(wn);const Dd=Object.assign(Pd),Vd=Ld({locale:Id,messages:Dd});qa(Hs).use(Q9).use(R6).use(Vd).mount("#app");const vt=i0(R6),_t=W2(R6);vt.fetch("clients");vt.fetch("history");var K8;_t.setStyle((K8=localStorage[w9])!=null?K8:"basic");(!localStorage[A5]&&window.matchMedia("(prefers-color-scheme: dark)").matches||localStorage[A5]==="1")&&_t.setDarkMode(!0);const z8="Rowmate";Q9.afterEach(e=>{var t;document.title=(t=e.meta)!=null&&t.title?`${e.meta.title} \u2014 ${z8}`:z8});export{eC as $,t0 as A,X as B,M0 as C,x2 as D,L6 as E,O1 as F,$1 as G,dC as H,I5 as I,Su as J,fC as K,a6 as L,oC as M,iC as N,Ua as O,E7 as P,K1 as Q,Pu as R,o7 as S,S0 as T,M1 as U,i1 as V,d7 as W,Ba as X,$d as Y,K9 as Z,Vu as _,a1 as a,w7 as a0,Eu as a1,Yd as a2,Ji as a3,nC as a4,hC as a5,wu as a6,El as a7,Jd as a8,Kd as a9,tC as aa,W2 as ab,CC as ac,aC as ad,Xd as ae,qd as af,zd as ag,Qd as ah,sC as ai,lC as aj,Ki as ak,S9 as al,jd as am,Gd as an,Ud as ao,Bd as ap,Wd as aq,Wu as b,L1 as c,kl as d,Sl as e,z9 as f,Wi as g,K as h,qe as i,rC as j,ml as k,uC as l,cC as m,q9 as n,W as o,l1 as p,Zd as q,E1 as r,D2 as s,$3 as t,B as u,Da as v,F1 as w,y6 as x,i0 as y,E0 as z};
