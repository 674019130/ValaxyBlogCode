import{d as r,o as s,e as o,v as t,g as a,r as n}from"./app-B_lbTwZU.js";const l={class:"yun-card flex-center rounded",flex:"col","min-h":"100px",bg:"$va-c-bg-light"},c=["src"],d={key:1,class:"yun-card-header"},i={key:2,class:"yun-card-content",w:"full"},v=r({__name:"YunCard",props:{cover:{}},setup(u){return(e,h)=>(s(),o("div",l,[e.cover?(s(),o("img",{key:0,width:"640",height:"360",class:"object-cover select-none",h:"64 md:sm",w:"full",src:e.cover,loading:"lazy"},null,8,c)):t("v-if",!0),e.$slots.header?(s(),o("div",d,[a("header",null,[n(e.$slots,"header")])])):t("v-if",!0),n(e.$slots,"default"),e.$slots.content?(s(),o("div",i,[n(e.$slots,"content")])):t("v-if",!0)]))}});export{v as _};