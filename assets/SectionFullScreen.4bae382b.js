import{B as n,a7 as t,ai as l,aj as i,ak as o,o as u,p as c,L as p,S as d,u as g}from"./index.60a4687c.js";const f={__name:"SectionFullScreen",props:{bg:{type:String,default:"purplePink",validator:e=>["purplePink","pinkRed"].includes(e)},bgimage:{type:Boolean,default:!0}},setup(e){const r=e,a=n(()=>{if(r.bgimage)return"bg-[url('/img/backgrounds/1.jpg')]";if(t().darkMode)return l;switch(r.bg){case"purplePink":return o;case"pinkRed":return i}return""});return(s,k)=>(u(),c("div",{class:d(["flex min-h-screen items-center justify-center",g(a)]),style:{"background-size":"cover"}},[p(s.$slots,"default",{cardClass:"w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl"})],2))}};export{f as _};