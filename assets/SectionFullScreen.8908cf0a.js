import{v as n,$ as t,ae as l,af as i,ag as o,o as u,q as c,z as d,A as g,u as p}from"./index.8c712fcf.js";const f={__name:"SectionFullScreen",props:{bg:{type:String,default:"purplePink",validator:e=>["purplePink","pinkRed"].includes(e)},bgimage:{type:Boolean,default:!0}},setup(e){const r=e,a=n(()=>{if(r.bgimage)return"bg-[url('/img/backgrounds/1.jpg')]";if(t().darkMode)return l;switch(r.bg){case"purplePink":return o;case"pinkRed":return i}return""});return(s,k)=>(u(),c("div",{class:g(["flex min-h-screen items-center justify-center",p(a)]),style:{"background-size":"cover"}},[d(s.$slots,"default",{cardClass:"w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl"})],2))}};export{f as _};
