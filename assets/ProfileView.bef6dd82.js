import{t as y,v as q,r as U,o as v,c as S,w as a,a as e,U as k,i,j as p,H as w,u as t,V as j,W as C,X as P,f as _,C as V,_ as R,b as F,d as m,D as $,E as h,F as d,G as M,h as Y,J as g,k as A,K as B,Y as D,Z as x}from"./index.8c712fcf.js";import{a as E,_ as r}from"./FormField.036de3f1.js";import{_ as G}from"./FormFilePicker.204193c8.js";const H={class:"space-y-3 text-center md:text-left lg:mx-12"},O={class:"flex justify-center md:block"},T={class:"text-2xl"},J=p("! "),K=i("p",null,[p("Last login "),i("b",null,"12 mins ago"),p(" from "),i("b",null,"127.0.0.1")],-1),L={class:"flex justify-center md:block"},W={__name:"UserCard",setup(N){const u=y(),n=q(()=>u.userName),s=U(!1);return(f,c)=>(v(),S(_,null,{default:a(()=>[e(P,{type:"justify-around lg:justify-center"},{default:a(()=>[e(k,{class:"lg:mx-12"}),i("div",H,[i("div",O,[e(E,{modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=b=>s.value=b),name:"notifications-switch",type:"switch",label:"Notifications","input-value":!0},null,8,["modelValue"])]),i("h1",T,[p(w(f.$t("message.hello"))+", ",1),i("b",null,w(t(n)),1),J]),K,i("div",L,[e(j,{label:"Verified",color:"info",icon:t(C)},null,8,["icon"])])])]),_:1})]),_:1}))}},X={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},Q={__name:"ProfileView",setup(N){const u=y(),n=V({name:u.userName,email:u.userEmail}),s=V({password_current:"",password:"",password_confirmation:""}),f=()=>{u.setUser(n)},c=()=>{};return(b,o)=>(v(),S(R,null,{default:a(()=>[e(Y,null,{default:a(()=>[e(F,{icon:t(g),title:"Profile",main:""},{default:a(()=>[e(m,{href:"https://github.com/justboil/admin-one-vue-tailwind",target:"_blank",icon:t(A),label:"Star on GitHub",color:"contrast","rounded-full":"",small:""},null,8,["icon"])]),_:1},8,["icon"]),e(W,{class:"mb-6"}),i("div",X,[e(_,{"is-form":"",onSubmit:$(f,["prevent"])},{footer:a(()=>[e(h,null,{default:a(()=>[e(m,{color:"info",type:"submit",label:"Submit"}),e(m,{color:"info",label:"Options",outline:""})]),_:1})]),default:a(()=>[e(r,{label:"Avatar",help:"Max 500kb"},{default:a(()=>[e(G,{label:"Upload"})]),_:1}),e(r,{label:"Name",help:"Required. Your name"},{default:a(()=>[e(d,{modelValue:n.name,"onUpdate:modelValue":o[0]||(o[0]=l=>n.name=l),icon:t(g),name:"username",required:"",autocomplete:"username"},null,8,["modelValue","icon"])]),_:1}),e(r,{label:"E-mail",help:"Required. Your e-mail"},{default:a(()=>[e(d,{modelValue:n.email,"onUpdate:modelValue":o[1]||(o[1]=l=>n.email=l),icon:t(B),type:"email",name:"email",required:"",autocomplete:"email"},null,8,["modelValue","icon"])]),_:1})]),_:1},8,["onSubmit"]),e(_,{"is-form":"",onSubmit:$(c,["prevent"])},{footer:a(()=>[e(h,null,{default:a(()=>[e(m,{type:"submit",color:"info",label:"Submit"}),e(m,{color:"info",label:"Options",outline:""})]),_:1})]),default:a(()=>[e(r,{label:"Current password",help:"Required. Your current password"},{default:a(()=>[e(d,{modelValue:s.password_current,"onUpdate:modelValue":o[2]||(o[2]=l=>s.password_current=l),icon:t(D),name:"password_current",type:"password",required:"",autocomplete:"current-password"},null,8,["modelValue","icon"])]),_:1}),e(M),e(r,{label:"New password",help:"Required. New password"},{default:a(()=>[e(d,{modelValue:s.password,"onUpdate:modelValue":o[3]||(o[3]=l=>s.password=l),icon:t(x),name:"password",type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue","icon"])]),_:1}),e(r,{label:"Confirm password",help:"Required. New password one more time"},{default:a(()=>[e(d,{modelValue:s.password_confirmation,"onUpdate:modelValue":o[4]||(o[4]=l=>s.password_confirmation=l),icon:t(x),name:"password_confirmation",type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue","icon"])]),_:1})]),_:1},8,["onSubmit"])])]),_:1})]),_:1}))}};export{Q as default};
