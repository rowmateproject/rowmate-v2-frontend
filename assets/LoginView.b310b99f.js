import{t as _,C as b,c as g,w as o,ab as w,o as V,a,f as $,A as k,D as h,E as A,d as i,F as u,u as d,ac as U,J as v,Y as x,ad as r}from"./index.8c712fcf.js";import{_ as y}from"./SectionFullScreen.8908cf0a.js";import{_ as p,a as B}from"./FormField.036de3f1.js";const D={__name:"LoginView",setup(M){const t=_(),s=b({login:"",pass:"",remember:!0}),c=U(),f=()=>{var n=new FormData;n.append("username",s.login),n.append("password",s.pass),r.post(`${t.api}/auth/jwt/login`,n).then(e=>{console.log(e),t.setAccessToken(e.data.access_token),r.defaults.baseURL=t.api,r.defaults.headers.common.Authorization="Bearer "+e.data.access_token,r.get("/users/me").then(m=>{t.setUser(m.data)}),c.push("/dashboard")})};return(n,e)=>(V(),g(w,null,{default:o(()=>[a(y,{bg:"purplePink"},{default:o(({cardClass:m})=>[a($,{class:k(m),"is-form":"",onSubmit:h(f,["prevent"])},{footer:o(()=>[a(A,null,{default:o(()=>[a(i,{type:"submit",color:"info",label:"Login"}),a(i,{to:"/dashboard",color:"info",outline:"",label:"Back"})]),_:1})]),default:o(()=>[a(p,{label:"E-Mail",help:"Please enter your E-Mail-Address"},{default:o(()=>[a(u,{modelValue:s.login,"onUpdate:modelValue":e[0]||(e[0]=l=>s.login=l),icon:d(v),name:"login",autocomplete:"username"},null,8,["modelValue","icon"])]),_:1}),a(p,{label:"Password",help:"Please enter your password"},{default:o(()=>[a(u,{modelValue:s.pass,"onUpdate:modelValue":e[1]||(e[1]=l=>s.pass=l),icon:d(x),type:"password",name:"password",autocomplete:"current-password"},null,8,["modelValue","icon"])]),_:1}),a(B,{modelValue:s.remember,"onUpdate:modelValue":e[2]||(e[2]=l=>s.remember=l),name:"remember",label:"Remember","input-value":!0},null,8,["modelValue"])]),_:2},1032,["class","onSubmit"])]),_:1})]),_:1}))}};export{D as default};
