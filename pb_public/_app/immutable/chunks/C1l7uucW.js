var pt=Object.defineProperty;var tt=n=>{throw TypeError(n)};var lt=(n,t,e)=>t in n?pt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var x=(n,t,e)=>lt(n,typeof t!="symbol"?t+"":t,e),et=(n,t,e)=>t.has(n)||tt("Cannot "+e);var d=(n,t,e)=>(et(n,t,"read from private field"),e?e.call(n):t.get(n)),l=(n,t,e)=>t.has(n)?tt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e);var H=(n,t,e)=>(et(n,t,"access private method"),e);import"./Bg9kRutz.js";import{w as h,v as u,p as V,f as W,a as X,d as ht,c as j,x as J,r as L,t as Q}from"./DQMf8gWK.js";import{e as z,a as w,t as U}from"./BGOrq1ZG.js";import{c as dt}from"./D7_cnrTr.js";import{p as a,i as ft,r as K,s as Pt,b as nt}from"./DjKtoK8y.js";import{a as rt}from"./DWr6XhLj.js";import{s as N}from"./D3E8oDJG.js";import{s as Y}from"./DvbRtjlS.js";import{a as Z,u as st,b as k,m as mt}from"./B7uXBihW.js";import{C as vt,g as yt,c as it,E as ot,d as bt,H as kt,n as xt}from"./B8S9RRQw.js";import{g as wt,e as _t}from"./KMVKlTlO.js";const Tt="data-pagination-root",Nt="data-pagination-page",It="data-pagination-prev",At="data-pagination-next";var I,A,C,R,S,E,M;class Ct{constructor(t){x(this,"opts");l(this,I,h(()=>this.opts.count.current===0?1:Math.ceil(this.opts.count.current/this.opts.perPage.current)));l(this,A,h(()=>{const t=(this.opts.page.current-1)*this.opts.perPage.current,e=Math.min(t+this.opts.perPage.current,this.opts.count.current);return{start:t,end:e}}));l(this,C,h(()=>Et({page:this.opts.page.current,totalPages:this.totalPages,siblingCount:this.opts.siblingCount.current})));l(this,R,h(()=>this.opts.page.current>1));l(this,S,h(()=>this.opts.page.current<this.totalPages));l(this,E,h(()=>({pages:this.pages,range:this.range,currentPage:this.opts.page.current})));l(this,M,h(()=>({id:this.opts.id.current,"data-orientation":yt(this.opts.orientation.current),[Tt]:""})));this.opts=t,Z(t)}get totalPages(){return u(d(this,I))}get range(){return u(d(this,A))}get pages(){return u(d(this,C))}setPage(t){this.opts.page.current=t}getPageTriggerNodes(){const t=this.opts.ref.current;return t?Array.from(t.querySelectorAll("[data-pagination-page]")):[]}getButtonNode(t){const e=this.opts.ref.current;if(e)return e.querySelector(`[data-pagination-${t}]`)}get hasPrevPage(){return u(d(this,R))}get hasNextPage(){return u(d(this,S))}prevPage(){this.opts.page.current=Math.max(this.opts.page.current-1,1)}nextPage(){this.opts.page.current=Math.min(this.opts.page.current+1,this.totalPages)}get snippetProps(){return u(d(this,E))}get props(){return u(d(this,M))}}I=new WeakMap,A=new WeakMap,C=new WeakMap,R=new WeakMap,S=new WeakMap,E=new WeakMap,M=new WeakMap;var O,B;class Rt{constructor(t,e){x(this,"opts");x(this,"root");l(this,O,h(()=>this.opts.page.current.value===this.root.opts.page.current));l(this,B,h(()=>({id:this.opts.id.current,"aria-label":`Page ${this.opts.page.current.value}`,"data-value":`${this.opts.page.current.value}`,"data-selected":u(d(this,O))?"":void 0,[Nt]:"",onclick:this.onclick,onkeydown:this.onkeydown})));this.opts=t,this.root=e,Z(t),this.onclick=this.onclick.bind(this),this.onkeydown=this.onkeydown.bind(this)}onclick(t){this.opts.disabled.current||t.button===0&&this.root.setPage(this.opts.page.current.value)}onkeydown(t){t.key===it||t.key===ot?(t.preventDefault(),this.root.setPage(this.opts.page.current.value)):at(t,this.opts.ref.current,this.root)}get props(){return u(d(this,B))}}O=new WeakMap,B=new WeakMap;var _,F,D,G;class St{constructor(t,e){l(this,_);x(this,"opts");x(this,"root");l(this,D,h(()=>this.opts.disabled.current?!0:this.opts.type==="prev"?!this.root.hasPrevPage:this.opts.type==="next"?!this.root.hasNextPage:!1));l(this,G,h(()=>({id:this.opts.id.current,[It]:this.opts.type==="prev"?"":void 0,[At]:this.opts.type==="next"?"":void 0,disabled:u(d(this,D)),onclick:this.onclick,onkeydown:this.onkeydown})));this.opts=t,this.root=e,Z(t),this.onclick=this.onclick.bind(this),this.onkeydown=this.onkeydown.bind(this)}onclick(t){this.opts.disabled.current||t.button===0&&H(this,_,F).call(this)}onkeydown(t){t.key===it||t.key===ot?(t.preventDefault(),H(this,_,F).call(this)):at(t,this.opts.ref.current,this.root)}get props(){return u(d(this,G))}}_=new WeakSet,F=function(){this.opts.type==="prev"?this.root.prevPage():this.root.nextPage()},D=new WeakMap,G=new WeakMap;function at(n,t,e){if(!t||!e.opts.ref.current)return;const i=e.getPageTriggerNodes(),s=e.getButtonNode("next"),o=e.getButtonNode("prev");o&&i.unshift(o),s&&i.push(s);const c=i.indexOf(t),g=wt(e.opts.ref.current),{nextKey:v,prevKey:y}=_t(g,e.opts.orientation.current),r=e.opts.loop.current;let p={[v]:c+1,[y]:c-1,[kt]:0,[bt]:i.length-1}[n.key];if(p===void 0)return;n.preventDefault(),p<0&&r?p=i.length-1:p===i.length&&r&&(p=0);const m=i[p];m&&m.focus()}function Et({page:n=1,totalPages:t,siblingCount:e=1}){const i=[],s=new Set([1,t]),o=3+e,c=t-2-e;if(o>c)for(let r=2;r<=t-1;r++)s.add(r);else if(n<o)for(let r=2;r<=Math.min(o,t);r++)s.add(r);else if(n>c)for(let r=t-1;r>=Math.max(c,2);r--)s.add(r);else for(let r=Math.max(n-e,2);r<=Math.min(n+e,t);r++)s.add(r);function g(r){i.push({type:"page",value:r,key:`page-${r}`})}function v(){const r=st();i.push({type:"ellipsis",key:`ellipsis-${r}`})}let y=0;for(const r of Array.from(s).sort((b,p)=>b-p))r-y>1&&v(),g(r),y=r;return i}const $=new vt("Pagination.Root");function Mt(n){return $.set(new Ct(n))}function Ut(n){return new Rt(n,$.get())}function Yt(n){return new St(n,$.get())}var Ot=U("<div><!></div>");function Bt(n,t){V(t,!0);let e=a(t,"id",19,st),i=a(t,"perPage",3,1),s=a(t,"page",15,1),o=a(t,"ref",15,null),c=a(t,"siblingCount",3,1),g=a(t,"onPageChange",3,xt),v=a(t,"loop",3,!1),y=a(t,"orientation",3,"horizontal"),r=K(t,["$$slots","$$events","$$legacy","id","count","perPage","page","ref","siblingCount","onPageChange","loop","orientation","child","children"]);const b=Mt({id:k.with(()=>e()),count:k.with(()=>t.count),perPage:k.with(()=>i()),page:k.with(()=>s(),f=>{var P;s(f),(P=g())==null||P(f)}),loop:k.with(()=>v()),siblingCount:k.with(()=>c()),orientation:k.with(()=>y()),ref:k.with(()=>o(),f=>o(f))}),p=h(()=>mt(r,b.props));var m=z(),ut=W(m);{var ct=f=>{var P=z(),T=W(P),q=ht(()=>({props:u(p),...b.snippetProps}));N(T,()=>t.child,()=>u(q)),w(f,P)},gt=f=>{var P=Ot();let T;var q=j(P);N(q,()=>t.children??J,()=>b.snippetProps),L(P),Q(()=>T=Y(P,T,{...u(p)})),w(f,P)};ft(ut,f=>{t.child?f(ct):f(gt,!1)})}w(n,m),X()}function Zt(n,t){V(t,!0);let e=a(t,"ref",15,null),i=a(t,"count",3,0),s=a(t,"perPage",3,10),o=a(t,"page",15,1),c=a(t,"siblingCount",3,1),g=K(t,["$$slots","$$events","$$legacy","ref","class","count","perPage","page","siblingCount"]);var v=z(),y=W(v);const r=h(()=>rt("mx-auto flex w-full flex-col items-center",t.class));dt(y,()=>Bt,(b,p)=>{p(b,Pt({get class(){return u(r)},get count(){return i()},get perPage(){return s()},get siblingCount(){return c()}},()=>g,{get ref(){return e()},set ref(m){e(m)},get page(){return o()},set page(m){o(m)}}))}),w(n,v),X()}var Dt=U("<ul><!></ul>");function $t(n,t){V(t,!0);let e=a(t,"ref",15,null),i=K(t,["$$slots","$$events","$$legacy","ref","class","children"]);var s=Dt();let o;var c=j(s);N(c,()=>t.children??J),L(s),nt(s,g=>e(g),()=>e()),Q(g=>o=Y(s,o,{class:g,...i}),[()=>rt("flex flex-row items-center gap-1",t.class)]),w(n,s),X()}var Gt=U("<li><!></li>");function te(n,t){let e=a(t,"ref",15,null),i=K(t,["$$slots","$$events","$$legacy","ref","children"]);var s=Gt();let o;var c=j(s);N(c,()=>t.children??J),L(s),nt(s,g=>e(g),()=>e()),Q(()=>o=Y(s,o,{...i})),w(n,s)}export{Zt as P,$t as a,te as b,Ut as c,Yt as u};
