(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[129],{3042:function(e,t,n){"use strict";var r=n(5664),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,i,l,s,c,d=!1;t||(t={}),n=t.debug||!1;try{if(i=r(),l=document.createRange(),s=document.getSelection(),(c=document.createElement("span")).textContent=e,c.ariaHidden="true",c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(c),l.selectNodeContents(c),s.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(u){n&&console.error("unable to copy using execCommand: ",u),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(u){n&&console.error("unable to copy using clipboardData: ",u),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(l):s.removeAllRanges()),c&&document.body.removeChild(c),i()}return d}},3737:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _e}});var r=n(9980),o=n(277),a=n(2983),i=n(9474),l=n(9494),s=n(6743),c=n(3360),d=n(8626),u=n(2876),p=n(5457),f=n(9029),m=n(6874),g=n(6212),x=n(3274),h=i.forwardRef(((e,t)=>{const{children:n,width:r=10,height:o=5,...a}=e;return(0,x.jsx)(g.sG.svg,{...a,ref:t,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:(0,x.jsx)("polygon",{points:"0,0 30,0 15,10"})})}));h.displayName="Arrow";var y=h,b=n(7021),w=n(2005),v=n(5765),E="Popper",[C,j]=(0,d.A)(E),[N,O]=C(E),T=e=>{const{__scopePopper:t,children:n}=e,[r,o]=i.useState(null);return(0,x.jsx)(N,{scope:t,anchor:r,onAnchorChange:o,children:n})};T.displayName=E;var k="PopperAnchor",A=i.forwardRef(((e,t)=>{const{__scopePopper:n,virtualRef:r,...o}=e,a=O(k,n),l=i.useRef(null),s=(0,c.s)(t,l);return i.useEffect((()=>{a.onAnchorChange(r?.current||l.current)})),r?null:(0,x.jsx)(g.sG.div,{...o,ref:s})}));A.displayName=k;var P="PopperContent",[R,D]=C(P),S=i.forwardRef(((e,t)=>{const{__scopePopper:n,side:r="bottom",sideOffset:o=0,align:a="center",alignOffset:l=0,arrowPadding:s=0,avoidCollisions:d=!0,collisionBoundary:u=[],collisionPadding:p=0,sticky:h="partial",hideWhenDetached:y=!1,updatePositionStrategy:E="optimized",onPlaced:C,...j}=e,N=O(P,n),[T,k]=i.useState(null),A=(0,c.s)(t,(e=>k(e))),[D,S]=i.useState(null),_=(0,v.X)(D),I=_?.width??0,L=_?.height??0,U=r+("center"!==a?"-"+a:""),W="number"==typeof p?p:{top:0,right:0,bottom:0,left:0,...p},z=Array.isArray(u)?u:[u],$=z.length>0,X={padding:W,boundary:z.filter(M),altBoundary:$},{refs:Y,floatingStyles:F,placement:G,isPositioned:K,middlewareData:q}=(0,f.we)({strategy:"fixed",placement:U,whileElementsMounted:(...e)=>(0,m.ll)(...e,{animationFrame:"always"===E}),elements:{reference:N.anchor},middleware:[(0,f.cY)({mainAxis:o+L,alignmentAxis:l}),d&&(0,f.BN)({mainAxis:!0,crossAxis:!1,limiter:"partial"===h?(0,f.ER)():void 0,...X}),d&&(0,f.UU)({...X}),(0,f.Ej)({...X,apply:({elements:e,rects:t,availableWidth:n,availableHeight:r})=>{const{width:o,height:a}=t.reference,i=e.floating.style;i.setProperty("--radix-popper-available-width",`${n}px`),i.setProperty("--radix-popper-available-height",`${r}px`),i.setProperty("--radix-popper-anchor-width",`${o}px`),i.setProperty("--radix-popper-anchor-height",`${a}px`)}}),D&&(0,f.UE)({element:D,padding:s}),H({arrowWidth:I,arrowHeight:L}),y&&(0,f.jD)({strategy:"referenceHidden",...X})]}),[V,Z]=B(G),J=(0,b.c)(C);(0,w.N)((()=>{K&&J?.()}),[K,J]);const Q=q.arrow?.x,ee=q.arrow?.y,te=0!==q.arrow?.centerOffset,[ne,re]=i.useState();return(0,w.N)((()=>{T&&re(window.getComputedStyle(T).zIndex)}),[T]),(0,x.jsx)("div",{ref:Y.setFloating,"data-radix-popper-content-wrapper":"",style:{...F,transform:K?F.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ne,"--radix-popper-transform-origin":[q.transformOrigin?.x,q.transformOrigin?.y].join(" "),...q.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:(0,x.jsx)(R,{scope:n,placedSide:V,onArrowChange:S,arrowX:Q,arrowY:ee,shouldHideArrow:te,children:(0,x.jsx)(g.sG.div,{"data-side":V,"data-align":Z,...j,ref:A,style:{...j.style,animation:K?void 0:"none"}})})})}));S.displayName=P;var _="PopperArrow",I={top:"bottom",right:"left",bottom:"top",left:"right"},L=i.forwardRef((function(e,t){const{__scopePopper:n,...r}=e,o=D(_,n),a=I[o.placedSide];return(0,x.jsx)("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:(0,x.jsx)(y,{...r,ref:t,style:{...r.style,display:"block"}})})}));function M(e){return null!==e}L.displayName=_;var H=e=>({name:"transformOrigin",options:e,fn(t){const{placement:n,rects:r,middlewareData:o}=t,a=0!==o.arrow?.centerOffset,i=a?0:e.arrowWidth,l=a?0:e.arrowHeight,[s,c]=B(n),d={start:"0%",center:"50%",end:"100%"}[c],u=(o.arrow?.x??0)+i/2,p=(o.arrow?.y??0)+l/2;let f="",m="";return"bottom"===s?(f=a?d:`${u}px`,m=-l+"px"):"top"===s?(f=a?d:`${u}px`,m=`${r.floating.height+l}px`):"right"===s?(f=-l+"px",m=a?d:`${p}px`):"left"===s&&(f=`${r.floating.width+l}px`,m=a?d:`${p}px`),{data:{x:f,y:m}}}});function B(e){const[t,n="center"]=e.split("-");return[t,n]}var U=T,W=A,z=S,$=L,X=n(5262),Y=n(3629),F=n(2422),G=n(2025),K=n(6036),[q,V]=(0,d.A)("Tooltip",[j]),Z=j(),J="TooltipProvider",Q=700,ee="tooltip.open",[te,ne]=q(J),re=e=>{const{__scopeTooltip:t,delayDuration:n=Q,skipDelayDuration:r=300,disableHoverableContent:o=!1,children:a}=e,[l,s]=i.useState(!0),c=i.useRef(!1),d=i.useRef(0);return i.useEffect((()=>{const e=d.current;return()=>window.clearTimeout(e)}),[]),(0,x.jsx)(te,{scope:t,isOpenDelayed:l,delayDuration:n,onOpen:i.useCallback((()=>{window.clearTimeout(d.current),s(!1)}),[]),onClose:i.useCallback((()=>{window.clearTimeout(d.current),d.current=window.setTimeout((()=>s(!0)),r)}),[r]),isPointerInTransitRef:c,onPointerInTransitChange:i.useCallback((e=>{c.current=e}),[]),disableHoverableContent:o,children:a})};re.displayName=J;var oe="Tooltip",[ae,ie]=q(oe),le=e=>{const{__scopeTooltip:t,children:n,open:r,defaultOpen:o=!1,onOpenChange:a,disableHoverableContent:l,delayDuration:s}=e,c=ne(oe,e.__scopeTooltip),d=Z(t),[u,f]=i.useState(null),m=(0,p.B)(),g=i.useRef(0),h=l??c.disableHoverableContent,y=s??c.delayDuration,b=i.useRef(!1),[w=!1,v]=(0,G.i)({prop:r,defaultProp:o,onChange:e=>{e?(c.onOpen(),document.dispatchEvent(new CustomEvent(ee))):c.onClose(),a?.(e)}}),E=i.useMemo((()=>w?b.current?"delayed-open":"instant-open":"closed"),[w]),C=i.useCallback((()=>{window.clearTimeout(g.current),g.current=0,b.current=!1,v(!0)}),[v]),j=i.useCallback((()=>{window.clearTimeout(g.current),g.current=0,v(!1)}),[v]),N=i.useCallback((()=>{window.clearTimeout(g.current),g.current=window.setTimeout((()=>{b.current=!0,v(!0),g.current=0}),y)}),[y,v]);return i.useEffect((()=>()=>{g.current&&(window.clearTimeout(g.current),g.current=0)}),[]),(0,x.jsx)(U,{...d,children:(0,x.jsx)(ae,{scope:t,contentId:m,open:w,stateAttribute:E,trigger:u,onTriggerChange:f,onTriggerEnter:i.useCallback((()=>{c.isOpenDelayed?N():C()}),[c.isOpenDelayed,N,C]),onTriggerLeave:i.useCallback((()=>{h?j():(window.clearTimeout(g.current),g.current=0)}),[j,h]),onOpen:C,onClose:j,disableHoverableContent:h,children:n})})};le.displayName=oe;var se="TooltipTrigger",ce=i.forwardRef(((e,t)=>{const{__scopeTooltip:n,...r}=e,o=ie(se,n),a=ne(se,n),l=Z(n),d=i.useRef(null),u=(0,c.s)(t,d,o.onTriggerChange),p=i.useRef(!1),f=i.useRef(!1),m=i.useCallback((()=>p.current=!1),[]);return i.useEffect((()=>()=>document.removeEventListener("pointerup",m)),[m]),(0,x.jsx)(W,{asChild:!0,...l,children:(0,x.jsx)(g.sG.button,{"aria-describedby":o.open?o.contentId:void 0,"data-state":o.stateAttribute,...r,ref:u,onPointerMove:(0,s.m)(e.onPointerMove,(e=>{"touch"!==e.pointerType&&(f.current||a.isPointerInTransitRef.current||(o.onTriggerEnter(),f.current=!0))})),onPointerLeave:(0,s.m)(e.onPointerLeave,(()=>{o.onTriggerLeave(),f.current=!1})),onPointerDown:(0,s.m)(e.onPointerDown,(()=>{p.current=!0,document.addEventListener("pointerup",m,{once:!0})})),onFocus:(0,s.m)(e.onFocus,(()=>{p.current||o.onOpen()})),onBlur:(0,s.m)(e.onBlur,o.onClose),onClick:(0,s.m)(e.onClick,o.onClose)})})}));ce.displayName=se;var de="TooltipPortal",[ue,pe]=q(de,{forceMount:void 0}),fe=e=>{const{__scopeTooltip:t,forceMount:n,children:r,container:o}=e,a=ie(de,t);return(0,x.jsx)(ue,{scope:t,forceMount:n,children:(0,x.jsx)(Y.C,{present:n||a.open,children:(0,x.jsx)(X.Z,{asChild:!0,container:o,children:r})})})};fe.displayName=de;var me="TooltipContent",ge=i.forwardRef(((e,t)=>{const n=pe(me,e.__scopeTooltip),{forceMount:r=n.forceMount,side:o="top",...a}=e,i=ie(me,e.__scopeTooltip);return(0,x.jsx)(Y.C,{present:r||i.open,children:i.disableHoverableContent?(0,x.jsx)(be,{side:o,...a,ref:t}):(0,x.jsx)(xe,{side:o,...a,ref:t})})})),xe=i.forwardRef(((e,t)=>{const n=ie(me,e.__scopeTooltip),r=ne(me,e.__scopeTooltip),o=i.useRef(null),a=(0,c.s)(t,o),[l,s]=i.useState(null),{trigger:d,onClose:u}=n,p=o.current,{onPointerInTransitChange:f}=r,m=i.useCallback((()=>{s(null),f(!1)}),[f]),g=i.useCallback(((e,t)=>{const n=e.currentTarget,r={x:e.clientX,y:e.clientY},o=function(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n})}return r}(r,function(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),a=Math.abs(t.left-e.x);switch(Math.min(n,r,o,a)){case a:return"left";case o:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}(r,n.getBoundingClientRect())),a=function(e){const t=e.slice();return t.sort(((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:e.y>t.y?1:0)),function(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const n=e[r];for(;t.length>=2;){const e=t[t.length-1],r=t[t.length-2];if(!((e.x-r.x)*(n.y-r.y)>=(e.y-r.y)*(n.x-r.x)))break;t.pop()}t.push(n)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const t=e[r];for(;n.length>=2;){const e=n[n.length-1],r=n[n.length-2];if(!((e.x-r.x)*(t.y-r.y)>=(e.y-r.y)*(t.x-r.x)))break;n.pop()}n.push(t)}return n.pop(),1===t.length&&1===n.length&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}(t)}([...o,...function(e){const{top:t,right:n,bottom:r,left:o}=e;return[{x:o,y:t},{x:n,y:t},{x:n,y:r},{x:o,y:r}]}(t.getBoundingClientRect())]);s(a),f(!0)}),[f]);return i.useEffect((()=>()=>m()),[m]),i.useEffect((()=>{if(d&&p){const e=e=>g(e,p),t=e=>g(e,d);return d.addEventListener("pointerleave",e),p.addEventListener("pointerleave",t),()=>{d.removeEventListener("pointerleave",e),p.removeEventListener("pointerleave",t)}}}),[d,p,g,m]),i.useEffect((()=>{if(l){const e=e=>{const t=e.target,n={x:e.clientX,y:e.clientY},r=d?.contains(t)||p?.contains(t),o=!function(e,t){const{x:n,y:r}=e;let o=!1;for(let a=0,i=t.length-1;a<t.length;i=a++){const e=t[a].x,l=t[a].y,s=t[i].x,c=t[i].y;l>r!=c>r&&n<(s-e)*(r-l)/(c-l)+e&&(o=!o)}return o}(n,l);r?m():o&&(m(),u())};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}}),[d,p,l,u,m]),(0,x.jsx)(be,{...e,ref:a})})),[he,ye]=q(oe,{isInside:!1}),be=i.forwardRef(((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":o,onEscapeKeyDown:a,onPointerDownOutside:l,...s}=e,c=ie(me,n),d=Z(n),{onClose:p}=c;return i.useEffect((()=>(document.addEventListener(ee,p),()=>document.removeEventListener(ee,p))),[p]),i.useEffect((()=>{if(c.trigger){const e=e=>{const t=e.target;t?.contains(c.trigger)&&p()};return window.addEventListener("scroll",e,{capture:!0}),()=>window.removeEventListener("scroll",e,{capture:!0})}}),[c.trigger,p]),(0,x.jsx)(u.qW,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:a,onPointerDownOutside:l,onFocusOutside:e=>e.preventDefault(),onDismiss:p,children:(0,x.jsxs)(z,{"data-state":c.stateAttribute,...d,...s,ref:t,style:{...s.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[(0,x.jsx)(F.xV,{children:r}),(0,x.jsx)(he,{scope:n,isInside:!0,children:(0,x.jsx)(K.b,{id:c.contentId,role:"tooltip",children:o||r})})]})})}));ge.displayName=me;var we="TooltipArrow",ve=i.forwardRef(((e,t)=>{const{__scopeTooltip:n,...r}=e,o=Z(n);return ye(we,n).isInside?null:(0,x.jsx)($,{...o,...r,ref:t})}));ve.displayName=we;var Ee=re,Ce=le,je=ce,Ne=fe,Oe=ge,Te=ve;var ke=e=>i.createElement(Ee,null,i.createElement(Ce,null,i.createElement(je,{asChild:!0},e.children),i.createElement(Ne,null,i.createElement(Oe,{className:"tooltip-content",sideOffset:5},i.createElement("span",{className:"p-1 text-xs font-medium"},e.tooltipTitle),i.createElement(Te,{className:"tooltip-arrow"}))))),Ae=n(4723),Pe=n(9361),Re=n(6787),De=n(1875),Se=n(9443);var _e=e=>{const{pageContext:t,location:n}=e,{makerUrl:s,makerName:c,sculptUrl:d,sculptName:u,colorway:p}=t,f=c+" - "+p.name+" "+u,{0:m,1:g}=(0,i.useState)({text:"Copy link"}),{0:x,1:h}=(0,i.useState)(!1),{0:y,1:b}=(0,i.useState)(!1),{0:w,1:v}=(0,i.useState)(!1),E=()=>{g({text:"Copied!"})},{0:C,1:j}=(0,i.useState)(Re.WI);(0,i.useEffect)((()=>{j((0,Re.Ti)())}),[]);const N=C.wishlists.find((e=>e.id===C.activeWishlistId)),O="https://cdn.keycap-archivist.com/keycaps/720/"+p.id+".jpg",T=(0,i.useMemo)((()=>p.releaseDate||p.totalCount||p.commissioned||p.giveaway||p.photoCredit||!1),[p]);return i.createElement(o.Kq,{swipeDirection:"right"},i.createElement(De.A,null,x&&i.createElement(Pe.A,{variant:"success",open:x,onOpenChange:h,className:"toast-root rounded-md bg-white p-4 shadow-md"},i.createElement("span",null,"Suggestion successfully submitted !")),y&&i.createElement(Pe.A,{variant:"error",open:y,onOpenChange:b,className:"toast-root rounded-md bg-white p-4 shadow-md"},i.createElement("span",null,"Suggestion submission failed.")),w&&i.createElement(Pe.A,{variant:"error",open:w,onOpenChange:v,className:"toast-root rounded-md bg-white p-4 shadow-md"},i.createElement("span",null,"Wishlist or trade list items exceeded.")),i.createElement(Ae.A,{title:f,img:O}),i.createElement("div",null,i.createElement("div",{className:"mt-6"},[{label:"Home",link:"/"},{label:c,link:s},{label:u,link:d}].map((e=>i.createElement(i.Fragment,null,i.createElement(a.N_,{to:e.link,className:(0,Se.A)("text-sm font-medium text-slate-900/60 underline transition-colors","hover:text-slate-800/60","dark:text-slate-50/80 dark:hover:text-white/90")},e.label)," ","/"," ")))),i.createElement("div",{className:"mb-6 mt-10 flex flex-col items-center justify-between sm:flex-row lg:my-6"},i.createElement("div",{className:"mb-2 inline-flex items-center gap-x-3 pr-3 leading-snug sm:mb-0"},i.createElement("h2",{className:"text-3xl font-bold leading-none"},p.name?p.name:"(Unknown)")," ",i.createElement(l.CopyToClipboard,{text:n.href,onCopy:E},i.createElement("button",{className:(0,Se.A)("flex items-center justify-center gap-x-3 rounded bg-blue-500 px-3 py-2 text-xs font-bold text-white transition-colors","hover:bg-blue-700")},i.createElement(r.g,{icon:["fa-solid","copy"]}),m.text))),i.createElement("div",{className:"mt-1 flex shrink-0 flex-row flex-nowrap items-center"})),i.createElement("div",{className:(0,Se.A)("mt-0 flex flex-col gap-8 lg:mt-12 lg:flex-row",T?"":"justify-center")},i.createElement("div",{className:(0,Se.A)(T?"flex basis-auto lg:basis-1/2":"relative w-full lg:w-1/2","space-y-4")},i.createElement("img",{loading:"lazy",className:"block h-full w-full rounded-lg object-cover",alt:f,src:O}),!T&&i.createElement("div",{className:(0,Se.A)("flex items-center justify-between gap-x-3 rounded-lg bg-black/80 p-3")},(0,Re.Lf)(N,p.id)?i.createElement(ke,{tooltipTitle:'Remove from "'+N.settings.title.text+'" wishlist'},i.createElement("button",{onClick:()=>j((0,Re.uA)(p.id)),className:(0,Se.A)("inline-flex flex-1 items-center justify-center gap-x-2 rounded-lg bg-red-500 px-3 py-2 text-white transition-colors","hover:bg-red-700")},i.createElement(r.g,{icon:["fas","star"]}),i.createElement("span",{className:"truncate text-xs font-medium"},'Remove from "'+N.settings.title.text+'" wishlist'))):i.createElement(ke,{tooltipTitle:'Add to "'+N.settings.title.text+'" wishlist'},i.createElement("button",{onClick:()=>{(0,Re.a6)(N,p.id)&&(0,Re.yd)(p.id),N.items.length>=Re.po?v(!0):j((0,Re.IN)(p.id))},className:(0,Se.A)("inline-flex flex-1 items-center justify-center gap-x-2 rounded-lg bg-green-500 px-3 py-2 text-white transition-colors","hover:bg-green-700")},i.createElement(r.g,{icon:["fas","star"]}),i.createElement("span",{className:"truncate text-xs font-medium"},'Add to "'+N.settings.title.text+'" wishlist'))),(0,Re.a6)(N,p.id)?i.createElement(ke,{tooltipTitle:'Remove from "'+N.settings.title.text+'" trade list'},i.createElement("button",{onClick:()=>j((0,Re.yd)(p.id)),className:(0,Se.A)("inline-flex flex-1 items-center justify-center gap-x-2 rounded-lg bg-red-500 px-3 py-2 text-white transition-colors","hover:bg-red-700")},i.createElement(r.g,{icon:["fas","redo"]}),i.createElement("span",{className:"truncate text-xs font-medium"},'Remove from "'+N.settings.title.text+'" trade list'))):i.createElement(ke,{tooltipTitle:'Add to "'+N.settings.title.text+'" trade list'},i.createElement("button",{onClick:()=>{(0,Re.Lf)(N,p.id)&&(0,Re.uA)(p.id),N.tradeItems.length>=Re.em?v(!0):j((0,Re.O1)(p.id))},className:(0,Se.A)("inline-flex flex-1 items-center justify-center gap-x-2 rounded-lg bg-green-500 px-3 py-2 text-white transition-colors","hover:bg-green-700")},i.createElement(r.g,{icon:["fas","redo"]}),i.createElement("span",{className:"truncate text-xs font-medium"},'Add to "'+N.settings.title.text+'" trade list'))))),T&&i.createElement("div",{className:"flex flex-1 flex-col gap-y-2"},p.releaseDate?i.createElement("dl",{className:"flex items-center"},i.createElement(r.g,{className:"h-4 w-4 text-xl text-indigo-500",icon:["fa","calendar"]}),i.createElement("dd",{className:"mx-2 font-bold"},"Release date:"),i.createElement("dt",null,p.releaseDate)):null,p.totalCount?i.createElement("dl",{className:"flex items-center"},i.createElement(r.g,{className:"h-4 w-4 text-xl text-indigo-500",icon:["fa","calculator"]}),i.createElement("dd",{className:"mx-2 font-bold"},"Total Count:"),i.createElement("dt",null,p.totalCount)):null,p.commissioned?i.createElement("dl",{className:"flex items-center"},i.createElement(r.g,{className:"h-4 w-4 text-xl text-indigo-500",icon:["fa","palette"]}),i.createElement("dd",{className:"mx-2 font-bold"},"Commissioned")):null,p.giveaway?i.createElement("dl",{className:"flex items-center"},i.createElement(r.g,{className:"h-4 w-4 text-xl text-indigo-500",icon:["fa","gift"]}),i.createElement("dd",{className:"mx-2 font-bold"},"Giveaway")):null,p.photoCredit?i.createElement("dl",{className:"flex items-center"},i.createElement(r.g,{className:"h-4 w-4 text-xl text-indigo-500",icon:["fa","camera"]}),i.createElement("dd",{className:"mx-2 font-bold"},"Photo Credit: "),i.createElement("dt",null,p.photoCredit)):null,i.createElement("div",{className:(0,Se.A)("flex items-center gap-3",T?"mt-0 lg:mt-3":null)},i.createElement(l.CopyToClipboard,{text:n.href,onCopy:E},i.createElement("button",{className:(0,Se.A)("flex items-center justify-center rounded bg-blue-500 px-3 py-2 text-xs font-bold text-white transition-colors"," hover:bg-blue-700")},m.text)),(0,Re.Lf)(N,p.id)?i.createElement(ke,{tooltipTitle:'Remove from "'+N.settings.title.text+'" wishlist'},i.createElement("button",{onClick:()=>j((0,Re.uA)(p.id)),className:"inline-flex items-center justify-center rounded-full bg-red-500 px-3 py-2 text-white transition-colors hover:bg-red-700"},i.createElement(r.g,{icon:["fas","star"]}))):i.createElement(ke,{tooltipTitle:'Add to "'+N.settings.title.text+'" wishlist'},i.createElement("button",{onClick:()=>{(0,Re.a6)(N,p.id)&&(0,Re.yd)(p.id),N.items.length>=Re.po?v(!0):j((0,Re.IN)(p.id))},className:"inline-flex items-center justify-center rounded-full bg-green-500 px-3 py-2 text-white transition-colors hover:bg-green-700"},i.createElement(r.g,{icon:["fas","star"]}))),(0,Re.a6)(N,p.id)?i.createElement(ke,{tooltipTitle:'Remove from "'+N.settings.title.text+'" trade list'},i.createElement("button",{onClick:()=>j((0,Re.yd)(p.id)),className:"inline-flex items-center justify-center rounded-full bg-red-500 px-3 py-2 text-white transition-colors hover:bg-red-700"},i.createElement(r.g,{icon:["fas","redo"]}))):i.createElement(ke,{tooltipTitle:'Add to "'+N.settings.title.text+'" trade list'},i.createElement("button",{onClick:()=>{(0,Re.Lf)(N,p.id)&&(0,Re.uA)(p.id),N.tradeItems.length>=Re.em?v(!0):j((0,Re.O1)(p.id))},className:"inline-flex items-center justify-center rounded-full bg-green-500 px-3 py-2 text-white transition-colors hover:bg-green-700"},i.createElement(r.g,{icon:["fas","redo"]})))))))))}},6525:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=l(n(9474)),a=l(n(3042)),i=["text","onCopy","options","children"];function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=g(e);if(t){var a=g(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,n)}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(s,e);var t,n,r,l=f(s);function s(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return x(m(e=l.call.apply(l,[this].concat(n))),"onClick",(function(t){var n=e.props,r=n.text,i=n.onCopy,l=n.children,s=n.options,c=o.default.Children.only(l),d=(0,a.default)(r,s);i&&i(r,d),c&&c.props&&"function"==typeof c.props.onClick&&c.props.onClick(t)})),e}return t=s,(n=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=d(e,i),r=o.default.Children.only(t);return o.default.cloneElement(r,c(c({},n),{},{onClick:this.onClick}))}}])&&u(t.prototype,n),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(o.default.PureComponent);t.CopyToClipboard=h,x(h,"defaultProps",{onCopy:void 0,options:void 0})},9494:function(e,t,n){"use strict";var r=n(6525).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},5664:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},5765:function(e,t,n){"use strict";n.d(t,{X:function(){return a}});var r=n(9474),o=n(2005);function a(e){const[t,n]=r.useState(void 0);return(0,o.N)((()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const t=new ResizeObserver((t=>{if(!Array.isArray(t))return;if(!t.length)return;const r=t[0];let o,a;if("borderBoxSize"in r){const e=r.borderBoxSize,t=Array.isArray(e)?e[0]:e;o=t.inlineSize,a=t.blockSize}else o=e.offsetWidth,a=e.offsetHeight;n({width:o,height:a})}));return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)}),[e]),t}}}]);