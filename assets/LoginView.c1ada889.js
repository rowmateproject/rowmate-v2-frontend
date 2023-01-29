import{y as w,z as d,c as p,w as r,ak as $,o as m,a,f as y,V as c,L as A,d as f,p as E,E as v,F as D,J as _,u as b,al as L,e as B,i as S,D as U,a3 as M,a9 as N,A as i}from"./index.93260499.js";import{_ as R}from"./SectionFullScreen.61973be9.js";import{_ as x}from"./FormCheckRadio.f77d6b48.js";import{_ as g}from"./FormField.dcff6fad.js";import{_ as F}from"./BaseButtons.cd78754e.js";const j={__name:"LoginView",setup(I){const n=w(),s=d({login:"",pass:"",remember:!0}),o=d({errors:[]}),h=L(),V=()=>{var l=new FormData;l.append("username",s.login),l.append("password",s.pass),i.post(`${n.api}/auth/jwt/login`,l).then(e=>{n.setAccessToken("Bearer "+e.data.access_token),i.defaults.baseURL=n.api,i.defaults.headers.common.Authorization="Bearer "+e.data.access_token,i.get("/users/me").then(u=>{n.setUser(u.data)}).then(function(){h.push("/dashboard")})}).catch(e=>{e.response&&(e.response.status==422?o.errors.push("Field validation error"):e.response.data.detail=="LOGIN_BAD_CREDENTIALS"?o.errors.push("Wrong login"):(e.response.data.detail="LOGIN_USER_NOT_VERIFIED")&&o.errors.push("User is not verified. Make sure that you have verified your E-Mail-Address and that the organisation has accepted your Account."),o.errors=o.errors.slice(-3))})};return(l,e)=>(m(),p($,null,{default:r(()=>[a(R,{bg:"purplePink"},{default:r(({cardClass:u})=>[a(y,{class:c(u),"is-form":"",onSubmit:A(V,["prevent"])},{footer:r(()=>[a(F,null,{default:r(()=>[a(f,{type:"submit",color:"info",label:"Login"}),a(f,{to:"/dashboard",color:"info",outline:"",label:"Back"})]),_:1})]),default:r(()=>[(m(!0),E(D,null,v(o.errors,(t,k)=>(m(),p(B,{onDeleted:P=>o.errors.splice(k,1),key:o.errors,color:"danger"},{default:r(()=>[S(U(t),1)]),_:2},1032,["onDeleted"]))),128)),a(g,{label:"E-Mail",help:"Please enter your E-Mail-Address"},{default:r(()=>[a(_,{modelValue:s.login,"onUpdate:modelValue":e[0]||(e[0]=t=>s.login=t),icon:b(M),name:"login",autocomplete:"username"},null,8,["modelValue","icon"])]),_:1}),a(g,{label:"Password",help:"Please enter your password"},{default:r(()=>[a(_,{modelValue:s.pass,"onUpdate:modelValue":e[1]||(e[1]=t=>s.pass=t),icon:b(N),type:"password",name:"password",class:c(""),autocomplete:"current-password"},null,8,["modelValue","icon"])]),_:1}),a(x,{modelValue:s.remember,"onUpdate:modelValue":e[2]||(e[2]=t=>s.remember=t),name:"remember",label:"Remember","input-value":!0},null,8,["modelValue"])]),_:2},1032,["class","onSubmit"])]),_:1})]),_:1}))}};export{j as default};
