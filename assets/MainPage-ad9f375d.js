import{o as n,c,a as _,t as g,n as m,u as v,_ as l,r as C,b as f,v as h,d as x,e as u,f as y,F as $,g as S,h as p,p as I,i as k}from"./index-8b54ba58.js";const M=["src"],P={__name:"Card",props:{name:String,textColor:String,image:String,slug:String},setup(e){const t=e,s=v();function o(){s.push(`/catalog/${t.slug}`),s.replace({path:`/catalog/${t.slug}`})}return(d,i)=>(n(),c("section",{class:"card",onClick:o},[_("img",{src:e.image,alt:"card image",class:"card__image"},null,8,M),_("div",{class:"card__text",style:m({color:e.textColor})},g(e.name),5)]))}};const B={components:{Card:P},name:"Cards",setup(){const e=S(),t=C([]);return f(async()=>{try{t.value=await e.dispatch("products/getProducts",{city_id:h.city_id})}catch(s){console.log(s)}}),{cardsArr:t,products:x(()=>e.state.products)}}};function N(e,t,s,o,d,i){const r=u("Card");return n(!0),c($,null,y(o.products.products,a=>(n(),c("div",{class:"cards",key:a.id},[p(r,{name:a.name,image:a.image,textColor:a.text_color,slug:a.slug},null,8,["name","image","textColor","slug"])]))),128)}const b=l(B,[["render",N],["__scopeId","data-v-9a80733f"]]);const w={name:"MainPage",components:{Cards:b}},F=e=>(I("data-v-751dc546"),e=e(),k(),e),V={class:"mainpage__content"},z=F(()=>_("h1",{class:"mainpage__content__title"},"Категории товаров",-1));function A(e,t,s,o,d,i){const r=u("Cards");return n(),c("div",V,[z,p(r)])}const E=l(w,[["render",A],["__scopeId","data-v-751dc546"]]);export{E as default};
