import{a as d}from"./FormField.ccb7a2e0.js";import{A as p,o as l,p as u,F as f,D as y,c as V,u as b,U as x,V as s}from"./index.a40d960c.js";const C={__name:"FormCheckRadioGroup",props:{options:{type:Object,default:()=>{}},name:{type:String,required:!0},type:{type:String,default:"checkbox",validator:e=>["checkbox","radio","switch"].includes(e)},componentClass:{type:String,default:null},isColumn:Boolean,modelValue:{type:[Array,String,Number,Boolean],default:null}},emits:["update:modelValue"],setup(e,{emit:m}){const r=e,a=p({get:()=>r.modelValue,set:t=>{m("update:modelValue",t)}});return(t,o)=>(l(),u("div",{class:s(["flex justify-start flex-wrap -mb-3",{"flex-col":e.isColumn}])},[(l(!0),u(f,null,y(e.options,(c,n)=>(l(),V(d,{key:n,modelValue:b(a),"onUpdate:modelValue":o[0]||(o[0]=i=>x(a)?a.value=i:null),type:e.type,name:e.name,"input-value":n,label:c,class:s([e.componentClass,"mr-6 mb-3 last:mr-0 my-3"])},null,8,["modelValue","type","name","input-value","label","class"]))),128))],2))}};export{C as _};