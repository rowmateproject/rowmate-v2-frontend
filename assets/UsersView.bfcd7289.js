import{x as T,y as j,z as y,A as c,B as F,q as R,r as m,Y as z,o as u,p,a as t,w as s,h as e,F as V,D as U,Z as H,C as r,d as h,u as n,$ as x,G as q,c as N,H as G,i as P,_ as W,b as Y,f as Z,g as I,M as J}from"./index.f16a4af5.js";import{_ as D}from"./CardBoxModal.7dadac71.js";import{_ as w}from"./BaseButtons.050f4d9a.js";import"./CardBoxComponentTitle.d98255a2.js";const K=e("p",null,[P("Lorem ipsum dolor sit amet "),e("b",null,"adipiscing elit")],-1),O=e("p",null,"This is sample modal",-1),Q=e("p",null,[P("Lorem ipsum dolor sit amet "),e("b",null,"adipiscing elit")],-1),X=e("p",null,"This is sample modal",-1),ee=e("thead",null,[e("tr",null,[e("th"),e("th",null,"Name"),e("th",null,"E-Mail"),e("th",null,"E-Mail verified"),e("th",null,"E-Mail accepted"),e("th",null,"Active"),e("th",null,"Delete")])],-1),ae={class:"border-b-0 lg:w-6 before:hidden"},le={"data-label":"Name"},te={"data-label":"E-Mail"},se={"data-label":"City"},oe={"data-label":"Created"},ne={"data-label":"Active"},ie={"data-label":"Delete"},re={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},ue={__name:"TableUsers",props:{checkable:Boolean,reload:{type:Number,default:0}},setup($){const v=$,b=T(),_=j({users:[],delete:{_id:"",name:""}});y.defaults.baseURL=b.api,y.defaults.headers.common.Authorization=b.access_token;const C=async()=>{_.users=await y.get("/users/").then(o=>o.data)},S=c(()=>v.reload);F(()=>{C()}),R(S,(o,a)=>{C()},{deep:!0});const f=m(!1),g=m(!1),k=m(5),i=m(0),A=c(()=>_.users.slice(k.value*i.value,k.value*(i.value+1))),M=c(()=>Math.ceil(_.users.length/k.value)),B=c(()=>i.value+1),E=c(()=>{const o=[];for(let a=0;a<M.value;a++)o.push(a);return o});return(o,a)=>{const L=z("FormCheckRadio");return u(),p(V,null,[t(D,{modelValue:f.value,"onUpdate:modelValue":a[0]||(a[0]=l=>f.value=l),title:"Sample modal"},{default:s(()=>[K,O]),_:1},8,["modelValue"]),t(D,{modelValue:g.value,"onUpdate:modelValue":a[1]||(a[1]=l=>g.value=l),title:"Please confirm",button:"danger","has-cancel":""},{default:s(()=>[Q,X]),_:1},8,["modelValue"]),e("table",null,[ee,e("tbody",null,[(u(!0),p(V,null,U(n(A),l=>(u(),p("tr",{key:l.id},[e("td",ae,[t(H,{avatar:l.avatar,class:"w-24 h-24 mx-auto lg:w-6 lg:h-6"},null,8,["avatar"])]),e("td",le,r(l.firstname)+" "+r(l.lastname),1),e("td",te,r(l.email),1),e("td",se,r(l.is_email_verified),1),e("td",oe,[t(w,{type:"justify-start lg:justify-start","no-wrap":""},{default:s(()=>[t(h,{color:"info",icon:n(x),small:"",onClick:a[2]||(a[2]=d=>f.value=!0)},null,8,["icon"]),t(L,{modelValue:o.userSwitchVal,"onUpdate:modelValue":a[3]||(a[3]=d=>o.userSwitchVal=d),name:"notifications-switch",type:"switch",label:"Notifications","input-value":!0},null,8,["modelValue"])]),_:1})]),e("td",ne,[t(w,{type:"justify-start lg:justify-start","no-wrap":""},{default:s(()=>[t(h,{color:"info",icon:n(x),small:"",onClick:a[4]||(a[4]=d=>f.value=!0)},null,8,["icon"])]),_:1})]),e("td",ie,[t(h,{color:"danger",icon:n(q),small:"",onClick:a[5]||(a[5]=d=>g.value=!0)},null,8,["icon"])])]))),128))])]),e("div",re,[t(G,null,{default:s(()=>[t(w,null,{default:s(()=>[(u(!0),p(V,null,U(n(E),l=>(u(),N(h,{key:l,active:l===i.value,label:l+1,color:l===i.value?"lightDark":"whiteDark",small:"",onClick:d=>i.value=l},null,8,["active","label","color","onClick"]))),128))]),_:1}),e("small",null,"Page "+r(n(B))+" of "+r(n(M)),1)]),_:1})])],64)}}},fe={__name:"UsersView",setup($){const v=m(0);return(b,_)=>(u(),N(W,null,{default:s(()=>[t(I,null,{default:s(()=>[t(Y,{icon:n(J),title:"Users",main:""},null,8,["icon"]),t(Z,{"has-table":""},{default:s(()=>[t(ue,{reload:v.value},null,8,["reload"])]),_:1})]),_:1})]),_:1}))}};export{fe as default};
