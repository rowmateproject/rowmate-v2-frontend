import{y as p,c as f,w as a,ag as _,o as c,a as e,f as b,S as g,O as w,d as r,U as t,u as n,ah as V,X as $,a5 as h}from"./index.60a4687c.js";import{_ as y}from"./SectionFullScreen.4bae382b.js";import{_ as m,a as k}from"./FormField.6fb7a956.js";import{_ as U}from"./BaseButtons.80fe1415.js";const j={__name:"RegisterView",setup(P){const o=p({login:"john.doe",pass:"highly-secure-password-fYjUw-",remember:!0}),u=V(),i=()=>{u.push("/dashboard")};return(R,s)=>(c(),f(_,null,{default:a(()=>[e(y,{bg:"purplePink"},{default:a(({cardClass:d})=>[e(b,{class:g(d),"is-form":"",onSubmit:w(i,["prevent"])},{footer:a(()=>[e(U,null,{default:a(()=>[e(r,{type:"submit",color:"info",label:"Login"}),e(r,{to:"/dashboard",color:"info",outline:"",label:"Back"})]),_:1})]),default:a(()=>[e(m,{label:"Register",help:"Please enter your login"},{default:a(()=>[e(t,{modelValue:o.login,"onUpdate:modelValue":s[0]||(s[0]=l=>o.login=l),icon:n($),name:"login",autocomplete:"username"},null,8,["modelValue","icon"])]),_:1}),e(m,{label:"Password",help:"Please enter your password"},{default:a(()=>[e(t,{modelValue:o.pass,"onUpdate:modelValue":s[1]||(s[1]=l=>o.pass=l),icon:n(h),type:"password",name:"password",autocomplete:"current-password"},null,8,["modelValue","icon"])]),_:1}),e(k,{modelValue:o.remember,"onUpdate:modelValue":s[2]||(s[2]=l=>o.remember=l),name:"remember",label:"Remember","input-value":!0},null,8,["modelValue"])]),_:2},1032,["class","onSubmit"])]),_:1})]),_:1}))}};export{j as default};
