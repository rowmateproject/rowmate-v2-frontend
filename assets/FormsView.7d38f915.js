import{o as k,q as C,i as b,z as D,A as F,u,B as N,C as w,r as x,c as O,w as l,_ as j,a as e,b as q,d as r,f,D as S,E as z,F as i,G as p,h as $,H as E,j as h,I as G,k as M,J as v,K as T}from"./index.8c712fcf.js";import{_}from"./FormCheckRadioGroup.d7c008b4.js";import{_ as H}from"./FormFilePicker.204193c8.js";import{_ as s}from"./FormField.036de3f1.js";import{_ as g}from"./SectionTitle.ba575982.js";const I={class:"flex flex-col mb-6 -mt-6 -mr-6 -ml-6 animate-fade-in"},Y={__name:"NotificationBarInCard",props:{color:{type:String,required:!0}},setup(V){return(d,t)=>(k(),C("div",I,[b("div",{class:F([[u(N)[V.color]],"rounded-t-2xl flex flex-col p-6 transition-colors"])},[D(d.$slots,"default")],2)]))}},A=h("Custom elements"),J=h("Form with status example"),L={class:"capitalize"},R=h(" state"),ee={__name:"FormsView",setup(V){const d=[{id:1,label:"Business development"},{id:2,label:"Marketing"},{id:3,label:"Sales"}],t=w({name:"John Doe",email:"john.doe@example.com",phone:"",department:d[0],subject:"",question:""}),n=w({checkbox:["lorem"],radio:"one",switch:["one"],file:null}),y=()=>{},U=x(!0),m=x(0),c=["info","success","danger","warning"],B=()=>{m.value=c[m.value+1]?m.value+1:0};return(W,o)=>(k(),O(j,null,{default:l(()=>[e($,null,{default:l(()=>[e(q,{icon:u(G),title:"Forms example",main:""},{default:l(()=>[e(r,{href:"https://github.com/justboil/admin-one-vue-tailwind",target:"_blank",icon:u(M),label:"Star on GitHub",color:"contrast","rounded-full":"",small:""},null,8,["icon"])]),_:1},8,["icon"]),e(f,{form:"",onSubmit:S(y,["prevent"])},{footer:l(()=>[e(z,null,{default:l(()=>[e(r,{type:"submit",color:"info",label:"Submit"}),e(r,{type:"reset",color:"info",outline:"",label:"Reset"})]),_:1})]),default:l(()=>[e(s,{label:"Grouped with icons"},{default:l(()=>[e(i,{modelValue:t.name,"onUpdate:modelValue":o[0]||(o[0]=a=>t.name=a),icon:u(v)},null,8,["modelValue","icon"]),e(i,{modelValue:t.email,"onUpdate:modelValue":o[1]||(o[1]=a=>t.email=a),type:"email",icon:u(T)},null,8,["modelValue","icon"])]),_:1}),e(s,{label:"With help line",help:"Do not enter the leading zero"},{default:l(()=>[e(i,{modelValue:t.phone,"onUpdate:modelValue":o[2]||(o[2]=a=>t.phone=a),type:"tel",placeholder:"Your phone number"},null,8,["modelValue"])]),_:1}),e(s,{label:"Dropdown"},{default:l(()=>[e(i,{modelValue:t.department,"onUpdate:modelValue":o[3]||(o[3]=a=>t.department=a),options:d},null,8,["modelValue"])]),_:1}),e(p),e(s,{label:"Question",help:"Your question. Max 255 characters"},{default:l(()=>[e(i,{type:"textarea",placeholder:"Explain how we can help you"})]),_:1})]),_:1},8,["onSubmit"])]),_:1}),e(g,null,{default:l(()=>[A]),_:1}),e($,null,{default:l(()=>[e(f,null,{default:l(()=>[e(s,{label:"Checkbox"},{default:l(()=>[e(_,{modelValue:n.checkbox,"onUpdate:modelValue":o[4]||(o[4]=a=>n.checkbox=a),name:"sample-checkbox",options:{lorem:"Lorem",ipsum:"Ipsum",dolore:"Dolore"}},null,8,["modelValue"])]),_:1}),e(p),e(s,{label:"Radio"},{default:l(()=>[e(_,{modelValue:n.radio,"onUpdate:modelValue":o[5]||(o[5]=a=>n.radio=a),name:"sample-radio",type:"radio",options:{one:"One",two:"Two"}},null,8,["modelValue"])]),_:1}),e(p),e(s,{label:"Switch"},{default:l(()=>[e(_,{modelValue:n.switch,"onUpdate:modelValue":o[6]||(o[6]=a=>n.switch=a),name:"sample-switch",type:"switch",options:{one:"One",two:"Two"}},null,8,["modelValue"])]),_:1}),e(p),e(H,{modelValue:n.file,"onUpdate:modelValue":o[7]||(o[7]=a=>n.file=a),label:"Upload"},null,8,["modelValue"])]),_:1}),e(g,null,{default:l(()=>[J]),_:1}),e(f,{class:"md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto","is-form":"","is-hoverable":"",onSubmit:S(B,["prevent"])},{footer:l(()=>[e(r,{label:"Trigger",type:"submit",color:"info"})]),default:l(()=>[e(Y,{color:c[m.value],"is-placed-with-header":U.value},{default:l(()=>[b("span",null,[b("b",L,E(c[m.value]),1),R])]),_:1},8,["color","is-placed-with-header"]),e(s,{label:"Fields"},{default:l(()=>[e(i,{modelValue:t.name,"onUpdate:modelValue":o[8]||(o[8]=a=>t.name=a),"icon-left":u(v),help:"Your full name",placeholder:"Name"},null,8,["modelValue","icon-left"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1}))}};export{ee as default};
