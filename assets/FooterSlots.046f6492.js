import{T as d,u as p,p as u,g as m}from"./index.44e737ed.js";import{d as h}from"./index.77fe3760.js";import{w as f,a as v}from"./utils.72e4e7bc.js";import{_ as g}from"./elevation.a1530723.js";import{e as _,o as l,l as k,j as i,a as e,t as a,r as B,i as F,c as x,k as V,F as w}from"./vendor.9810b84e.js";import"./index.b2852efe.js";import{P as C}from"./Pagination.5f6cd712.js";const E={name:"BasicExample",components:{VarTable:d},setup(){return f(p,"pc"),v(h),{pack:u}}},P=e("td",null,"124",-1),S=e("td",null,"38",-1),T=e("td",null,"100",-1),D=e("td",null,"135",-1);function L(n,s,r,t,b,y){const c=_("var-table");return l(),k(c,{class:"reset"},{default:i(()=>[e("thead",null,[e("tr",null,[e("th",null,a(t.pack.name),1),e("th",null,a(t.pack.math),1),e("th",null,a(t.pack.english),1)])]),e("tbody",null,[e("tr",null,[e("td",null,a(t.pack.jerry),1),P,S]),e("tr",null,[e("td",null,a(t.pack.tom),1),T,D])])]),_:1})}var K=g(E,[["render",L]]);const N={name:"BasicExample",components:{VarTable:d,VarPagination:C},setup(){const n=B(m(1,10)),s=(r,t)=>{n.value=m(r,t)};return f(p,"pc"),v(h),{pack:u,get:s,list:n}}},z={class:"footer"};function I(n,s,r,t,b,y){const c=_("var-pagination"),j=_("var-table");return l(),k(j,{class:"reset"},{footer:i(()=>[e("div",z,[F(c,{simple:!1,current:1,total:100,"size-option":[5,10],onChange:t.get},null,8,["onChange"])])]),default:i(()=>[e("thead",null,[e("tr",null,[e("th",null,a(t.pack.name),1),e("th",null,a(t.pack.math),1),e("th",null,a(t.pack.english),1)])]),e("tbody",null,[(l(!0),x(w,null,V(t.list,o=>(l(),x("tr",{key:o.name},[e("td",null,a(o.name),1),e("td",null,a(o.math),1),e("td",null,a(o.english),1)]))),128))])]),_:1})}var O=g(N,[["render",I],["__scopeId","data-v-decaf4f8"]]);export{K as B,O as F};
