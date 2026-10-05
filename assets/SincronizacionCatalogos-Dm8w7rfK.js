import{T as ft}from"./index-BDzQNBg-.js";import{B as M,C as W,o as u,c as h,a2 as L,E as m,ay as rt,aT as ht,aU as mt,a7 as lt,aV as Q,bi as gt,aD as U,a_ as yt,aW as R,aK as xt,bj as st,a0 as dt,l as E,z as $,a3 as Y,i as N,a,aF as kt,aa as wt,aX as F,w as b,n as Tt,N as $t,H as _t,b as d,u as r,g as X,A as B,t as y,F as P,r as G,f as J,L as nt,K as C,T as Bt,R as Ct,x as Nt,Q as Ot,j as k,M as D,bk as At}from"./index-C8clDulR.js";import{s as St}from"./index-FLLf7WvR.js";import{s as it}from"./index-C6y9mzQK.js";import{s as ot}from"./index-6XSXqRQn.js";import{s as zt}from"./index-CXDjNxE9.js";import{s as j}from"./sincronizacionServices-ektcUUy8.js";var It=`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
        overflow: hidden;
        background: dt('tabs.tablist.background');
    }

    .p-tablist-viewport {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-viewport::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-tab-list {
        position: relative;
        display: flex;
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        flex-grow: 1;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`,Pt={root:function(t){var o=t.props;return["p-tabs p-component",{"p-tabs-scrollable":o.scrollable}]}},Lt=M.extend({name:"tabs",style:It,classes:Pt}),Et={name:"BaseTabs",extends:W,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:Lt,provide:function(){return{$pcTabs:this,$parentInstance:this}}},ct={name:"Tabs",extends:Et,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(t){this.d_value=t}},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isVertical:function(){return this.orientation==="vertical"}}};function Kt(e,t,o,i,v,n){return u(),h("div",m({class:e.cx("root")},e.ptmi("root")),[L(e.$slots,"default")],16)}ct.render=Kt;var Vt={root:"p-tablist",content:"p-tablist-content p-tablist-viewport",tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Rt=M.extend({name:"tablist",classes:Vt}),Ft={name:"BaseTabList",extends:W,props:{},style:Rt,provide:function(){return{$pcTabList:this,$parentInstance:this}}},ut={name:"TabList",extends:Ft,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,inkBarObserver:void 0,watch:{showNavigators:function(t){t?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar(),this.bindInkBarObserver()}}},mounted:function(){var t=this;setTimeout(function(){t.updateInkBar(),t.bindInkBarObserver()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver(),this.unbindInkBarObserver()},methods:{onScroll:function(t){this.showNavigators&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick:function(){var t=this.$refs.content,o=this.getVisibleButtonWidths(),i=Q(t)-o,v=Math.abs(t.scrollLeft),n=i*.8,f=v-n,g=Math.max(f,0);t.scrollLeft=st(t)?-1*g:g},onNextButtonClick:function(){var t=this.$refs.content,o=this.getVisibleButtonWidths(),i=Q(t)-o,v=Math.abs(t.scrollLeft),n=i*.8,f=v+n,g=t.scrollWidth-i,w=Math.min(f,g);t.scrollLeft=st(t)?-1*w:w},bindResizeObserver:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){return t.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var t;(t=this.resizeObserver)===null||t===void 0||t.unobserve(this.$refs.list),this.resizeObserver=void 0},bindInkBarObserver:function(){var t=this;this.unbindInkBarObserver();var o=this.$refs.content,i=U(o,'[data-pc-name="tab"][data-p-active="true"]');i&&(this.inkBarObserver=new ResizeObserver(function(){return t.updateInkBar()}),this.inkBarObserver.observe(i))},unbindInkBarObserver:function(){var t;(t=this.inkBarObserver)===null||t===void 0||t.disconnect(),this.inkBarObserver=void 0},updateInkBar:function(){var t=this.$refs,o=t.content,i=t.inkbar,v=t.tabs;if(i){var n=U(o,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(i.style.height=yt(n)+"px",i.style.top=R(n).top-R(v).top+"px"):(i.style.width=xt(n)+"px",i.style.left=R(n).left-R(v).left+"px")}},updateButtonState:function(){var t=this.$refs,o=t.list,i=t.content,v=i.scrollTop,n=i.scrollWidth,f=i.scrollHeight,g=i.offsetWidth,w=i.offsetHeight,_=Math.abs(i.scrollLeft),A=[Q(i),gt(i)],H=A[0],S=A[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=v!==0,this.isNextButtonEnabled=o.offsetHeight>=w&&parseInt(v)!==f-S):(this.isPrevButtonEnabled=_!==0,this.isNextButtonEnabled=o.offsetWidth>=g&&parseInt(_)!==n-H)},getVisibleButtonWidths:function(){var t=this.$refs,o=t.prevButton,i=t.nextButton,v=0;return this.showNavigators&&(v=((o==null?void 0:o.offsetWidth)||0)+((i==null?void 0:i.offsetWidth)||0)),v}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return lt({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:mt,ChevronRightIcon:ht},directives:{ripple:rt}},Dt=["data-p"],jt=["aria-label","tabindex"],Ut=["data-p"],Mt=["aria-orientation"],Wt=["aria-label","tabindex"];function Ht(e,t,o,i,v,n){var f=dt("ripple");return u(),h("div",m({ref:"list",class:e.cx("root"),"data-p":n.dataP},e.ptmi("root")),[n.showNavigators&&v.isPrevButtonEnabled?E((u(),h("button",m({key:0,ref:"prevButton",type:"button",class:e.cx("prevButton"),"aria-label":n.prevButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:t[0]||(t[0]=function(){return n.onPrevButtonClick&&n.onPrevButtonClick.apply(n,arguments)})},e.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(u(),$(Y(n.templates.previcon||"ChevronLeftIcon"),m({"aria-hidden":"true"},e.ptm("prevIcon")),null,16))],16,jt)),[[f]]):N("",!0),a("div",m({ref:"content",class:e.cx("content"),onScroll:t[1]||(t[1]=function(){return n.onScroll&&n.onScroll.apply(n,arguments)}),"data-p":n.dataP},e.ptm("content")),[a("div",m({ref:"tabs",class:e.cx("tabList"),role:"tablist","aria-orientation":n.$pcTabs.orientation||"horizontal"},e.ptm("tabList")),[L(e.$slots,"default"),a("span",m({ref:"inkbar",class:e.cx("activeBar"),role:"presentation","aria-hidden":"true"},e.ptm("activeBar")),null,16)],16,Mt)],16,Ut),n.showNavigators&&v.isNextButtonEnabled?E((u(),h("button",m({key:1,ref:"nextButton",type:"button",class:e.cx("nextButton"),"aria-label":n.nextButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:t[2]||(t[2]=function(){return n.onNextButtonClick&&n.onNextButtonClick.apply(n,arguments)})},e.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(u(),$(Y(n.templates.nexticon||"ChevronRightIcon"),m({"aria-hidden":"true"},e.ptm("nextIcon")),null,16))],16,Wt)),[[f]]):N("",!0)],16,Dt)}ut.render=Ht;var qt={root:function(t){var o=t.instance,i=t.props;return["p-tab",{"p-tab-active":o.active,"p-disabled":i.disabled}]}},Zt=M.extend({name:"tab",classes:qt}),Qt={name:"BaseTab",extends:W,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Zt,provide:function(){return{$pcTab:this,$parentInstance:this}}},tt={name:"Tab",extends:Qt,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowRightKey:function(t){var o=this.findNextTab(t.currentTarget);o?this.changeFocusedTab(t,o):this.onHomeKey(t),t.preventDefault()},onArrowLeftKey:function(t){var o=this.findPrevTab(t.currentTarget);o?this.changeFocusedTab(t,o):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var o=this.findFirstTab();this.changeFocusedTab(t,o),t.preventDefault()},onEndKey:function(t){var o=this.findLastTab();this.changeFocusedTab(t,o),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.findLastTab()),t.preventDefault()},onPageUpKey:function(t){this.scrollInView(this.findFirstTab()),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue()},findNextTab:function(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=o?t:t.nextElementSibling;return i?F(i,"data-p-disabled")||F(i,"data-pc-section")==="activebar"?this.findNextTab(i):U(i,'[data-pc-name="tab"]'):null},findPrevTab:function(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=o?t:t.previousElementSibling;return i?F(i,"data-p-disabled")||F(i,"data-pc-section")==="activebar"?this.findPrevTab(i):U(i,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(t,o){wt(o),this.scrollInView(o)},scrollInView:function(t){var o;t==null||(o=t.scrollIntoView)===null||o===void 0||o.call(t,{block:"nearest"})}},computed:{active:function(){var t;return kt((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tab_").concat(this.value)},ariaControls:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tabpanel_").concat(this.value)},attrs:function(){return m(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return lt({active:this.active})}},directives:{ripple:rt}};function Xt(e,t,o,i,v,n){var f=dt("ripple");return e.asChild?L(e.$slots,"default",{key:1,dataP:n.dataP,class:Tt(e.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs,onClick:n.onClick}):E((u(),$(Y(e.as),m({key:0,class:e.cx("root"),"data-p":n.dataP,onClick:n.onClick},n.attrs),{default:b(function(){return[L(e.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[f]])}tt.render=Xt;var Gt={root:"p-tabpanels"},Jt=M.extend({name:"tabpanels",classes:Gt}),Yt={name:"BaseTabPanels",extends:W,props:{},style:Jt,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},bt={name:"TabPanels",extends:Yt,inheritAttrs:!1};function te(e,t,o,i,v,n){return u(),h("div",m({class:e.cx("root"),role:"presentation"},e.ptmi("root")),[L(e.$slots,"default")],16)}bt.render=te;const ee={class:"grid grid-cols-12 gap-4"},ae={class:"col-span-12"},se={class:"card mb-0"},ne={class:"flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"},ie={class:"flex gap-3 items-center"},oe={key:1,class:"text-sm text-muted-color mt-2 mb-0"},re={class:"card mb-0"},le={class:"col-span-12 md:col-span-6 xl:col-span-3"},de={class:"card mb-0"},ce={class:"flex justify-between"},ue={class:"col-span-12 md:col-span-6 xl:col-span-3"},be={class:"card mb-0"},ve={class:"flex justify-between"},pe={class:"text-surface-900 dark:text-surface-0 font-medium text-lg"},fe={class:"col-span-12 md:col-span-6 xl:col-span-3"},he={class:"card mb-0"},me={class:"flex justify-between"},ge={class:"text-surface-900 dark:text-surface-0 font-medium text-xl"},ye={class:"text-muted-color text-base"},xe={class:"col-span-12 md:col-span-6 xl:col-span-3"},ke={class:"card mb-0"},we={class:"flex justify-between"},Te={class:"text-surface-900 dark:text-surface-0 font-medium text-xl"},$e={class:"col-span-12"},_e={class:"card"},Be={class:"font-medium"},Ce={class:"text-xs text-muted-color"},Ne={key:1,class:"text-red-500 text-sm"},Oe={key:0,class:"text-sm text-muted-color mb-3"},Ve={__name:"SincronizacionCatalogos",setup(e){const t=$t(),o={actividades:"Actividades económicas",productos_servicios:"Productos y servicios",leyendas:"Leyendas de factura",mensajes:"Mensajes de servicios",eventos:"Eventos significativos",motivos_anulacion:"Motivos de anulación",documentos_identidad:"Documentos de identidad",documentos_sector:"Documentos sector",tipos_emision:"Tipos de emisión",tipos_habitacion:"Tipos de habitación",metodos_pago:"Métodos de pago",monedas:"Monedas",tipos_punto_venta:"Tipos de punto de venta",tipos_factura:"Tipos de factura",unidades:"Unidades de medida",paises:"Países de origen"},i={OK:"success",PARCIAL:"warn",ERROR:"danger",NUNCA_SINCRONIZADO:"secondary"},v={OK:"Sincronizado",PARCIAL:"Parcial",ERROR:"Con errores",NUNCA_SINCRONIZADO:"Sin sincronizar"},n=k(!0),f=k(null),g=k(null),w=D(()=>{var l;return((l=f.value)==null?void 0:l.estado_general)??"NUNCA_SINCRONIZADO"}),_=D(()=>{var l;return((l=f.value)==null?void 0:l.resumen)??{total:0,exitosos:0,fallidos:0,porcentaje:0}}),A=(l,s)=>Object.entries(l??{}).map(([p,T])=>({clave:p,tipo:s,etiqueta:o[p]??p,...T})),H=D(()=>{var l,s;return[{valor:"catalogos",filas:A((l=f.value)==null?void 0:l.catalogos,"catalogo")},{valor:"parametros",filas:A((s=f.value)==null?void 0:s.parametros,"parametro")}]});async function S(){var l,s;n.value=!0,g.value=null;try{const p=await j.estado();f.value=p.data}catch(p){g.value=((s=(l=p.response)==null?void 0:l.data)==null?void 0:s.message)??"No se pudo cargar el estado."}finally{n.value=!1}}const q=l=>l?new Date(l.replace(" ","T")).toLocaleString("es-BO",{dateStyle:"medium",timeStyle:"short"}):"—",O=k(!1);async function vt(){var l,s;O.value=!0;try{const p=await j.sincronizar(0);t.add({severity:p.estado_general==="OK"?"success":"warn",summary:p.estado_general==="OK"?"Sincronización completa":"Sincronización parcial",detail:p.message,life:5e3})}catch(p){t.add({severity:"error",summary:"No se pudo sincronizar",detail:((s=(l=p.response)==null?void 0:l.data)==null?void 0:s.message)??"Error de conexión con el servidor.",life:6e3})}finally{O.value=!1,S()}}const K=k(!1),Z=k(!1),et=k(""),z=k({}),V=k([]),I=k({global:{value:null,matchMode:At.CONTAINS}}),at=D(()=>{const l=V.value[0];return l?Object.keys(l):[]});async function pt(l){var s,p;K.value=!0,Z.value=!0,et.value=l.etiqueta,V.value=[],z.value={},I.value.global.value=null;try{const T=l.tipo==="catalogo"?await j.catalogo(l.clave):await j.parametro(l.clave);V.value=T.data??[],z.value=T.meta??{}}catch(T){K.value=!1,t.add({severity:"error",summary:"No se pudo leer",detail:((p=(s=T.response)==null?void 0:s.data)==null?void 0:p.message)??"Error al consultar los datos.",life:5e3})}finally{Z.value=!1}}return _t(S),(l,s)=>{var T;const p=ft;return u(),h(P,null,[a("div",ee,[a("div",ae,[a("div",se,[a("div",ne,[s[3]||(s[3]=a("div",null,[a("h2",{class:"text-2xl font-semibold m-0"},"Catálogos y parámetros SIAT"),a("p",{class:"text-muted-color mt-1 mb-0"}," Información sincronizada con Impuestos Nacionales para la emisión de facturas. ")],-1)),a("div",ie,[d(r(X),{label:"Sincronizar",icon:"pi pi-sync",loading:O.value,onClick:vt},null,8,["loading"]),E(d(r(X),{icon:"pi pi-refresh",severity:"secondary",outlined:"",disabled:O.value,onClick:S},null,8,["disabled"]),[[p,"Actualizar estado",void 0,{top:!0}]])])]),O.value?(u(),$(r(it),{key:0,mode:"indeterminate",style:{height:"4px"},class:"mt-4"})):N("",!0),O.value?(u(),h("p",oe," Consultando el SIAT, esto puede tardar unos segundos… ")):N("",!0)])]),g.value?(u(),$(r(ot),{key:0,severity:"error",class:"col-span-12",closable:!1},{default:b(()=>[B(y(g.value),1)]),_:1})):N("",!0),n.value?(u(),h(P,{key:1},G(4,x=>a("div",{key:x,class:"col-span-12 md:col-span-6 xl:col-span-3"},[a("div",re,[d(r(zt),{height:"4.5rem"})])])),64)):(u(),h(P,{key:2},[a("div",le,[a("div",de,[a("div",ce,[a("div",null,[s[4]||(s[4]=a("span",{class:"block text-muted-color font-medium mb-3"},"Estado general",-1)),d(r(J),{value:v[w.value]??w.value,severity:i[w.value]??"secondary",class:"text-base"},null,8,["value","severity"])]),s[5]||(s[5]=a("div",{class:"flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border",style:{width:"2.5rem",height:"2.5rem"}},[a("i",{class:"pi pi-shield text-blue-500 text-xl"})],-1))])])]),a("div",ue,[a("div",be,[a("div",ve,[a("div",null,[s[6]||(s[6]=a("span",{class:"block text-muted-color font-medium mb-3"},"Última sincronización",-1)),a("div",pe,y(q((T=f.value)==null?void 0:T.ultima_sincronizacion)),1)]),s[7]||(s[7]=a("div",{class:"flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-border",style:{width:"2.5rem",height:"2.5rem"}},[a("i",{class:"pi pi-clock text-orange-500 text-xl"})],-1))])])]),a("div",fe,[a("div",he,[a("div",me,[a("div",null,[s[8]||(s[8]=a("span",{class:"block text-muted-color font-medium mb-3"},"Correctos",-1)),a("div",ge,[B(y(_.value.exitosos)+" ",1),a("span",ye,"/ "+y(_.value.total),1)])]),s[9]||(s[9]=a("div",{class:"flex items-center justify-center bg-green-100 dark:bg-green-400/10 rounded-border",style:{width:"2.5rem",height:"2.5rem"}},[a("i",{class:"pi pi-check-circle text-green-500 text-xl"})],-1))]),d(r(it),{value:_.value.porcentaje??0,showValue:!1,style:{height:"6px"},class:"mt-3"},null,8,["value"])])]),a("div",xe,[a("div",ke,[a("div",we,[a("div",null,[s[10]||(s[10]=a("span",{class:"block text-muted-color font-medium mb-3"},"Con errores",-1)),a("div",Te,y(_.value.fallidos),1)]),s[11]||(s[11]=a("div",{class:"flex items-center justify-center bg-red-100 dark:bg-red-400/10 rounded-border",style:{width:"2.5rem",height:"2.5rem"}},[a("i",{class:"pi pi-exclamation-triangle text-red-500 text-xl"})],-1))])])])],64)),a("div",$e,[a("div",_e,[!n.value&&w.value==="NUNCA_SINCRONIZADO"?(u(),$(r(ot),{key:0,severity:"info",closable:!1,class:"mb-4"},{default:b(()=>[...s[12]||(s[12]=[B(" Aún no se han sincronizado los catálogos. Presione ",-1),a("b",null,"Sincronizar",-1),B(" para descargarlos del SIAT. ",-1)])]),_:1})):N("",!0),d(r(ct),{value:"catalogos"},{default:b(()=>[d(r(ut),null,{default:b(()=>[d(r(tt),{value:"catalogos"},{default:b(()=>[...s[13]||(s[13]=[a("i",{class:"pi pi-book mr-2"},null,-1),B("Catálogos",-1)])]),_:1}),d(r(tt),{value:"parametros"},{default:b(()=>[...s[14]||(s[14]=[a("i",{class:"pi pi-sliders-h mr-2"},null,-1),B("Parámetros",-1)])]),_:1})]),_:1}),d(r(bt),null,{default:b(()=>[(u(!0),h(P,null,G(H.value,x=>(u(),$(r(St),{key:x.valor,value:x.valor},{default:b(()=>[d(r(nt),{value:x.filas,loading:n.value,stripedRows:"",dataKey:"clave"},{empty:b(()=>[...s[15]||(s[15]=[a("div",{class:"text-center text-muted-color py-6"},"Sin información sincronizada.",-1)])]),default:b(()=>[d(r(C),{field:"etiqueta",header:"Nombre"},{body:b(({data:c})=>[a("div",Be,y(c.etiqueta),1),a("div",Ce,y(c.clave),1)]),_:1}),d(r(C),{header:"Estado"},{body:b(({data:c})=>[d(r(J),{value:c.success?"OK":"Error",severity:c.success?"success":"danger"},null,8,["value","severity"])]),_:1}),d(r(C),{field:"cantidad",header:"Registros",style:{width:"8rem"}}),d(r(C),{header:"Cambios"},{body:b(({data:c})=>[c.success?(u(),$(r(J),{key:0,value:c.cambio_detectado?"Actualizado":"Sin cambios",severity:c.cambio_detectado?"info":"secondary"},null,8,["value","severity"])):(u(),h("span",Ne,y(c.message),1))]),_:1}),d(r(C),{header:"Fecha"},{body:b(({data:c})=>[B(y(q(c.fecha)),1)]),_:1}),d(r(C),{header:"",style:{width:"6rem"},alignFrozen:"right"},{body:b(({data:c})=>[E(d(r(X),{icon:"pi pi-eye",severity:"secondary",rounded:"",text:"",disabled:!c.success,onClick:Ae=>pt(c)},null,8,["disabled","onClick"]),[[p,"Ver datos",void 0,{top:!0}]])]),_:1})]),_:1},8,["value","loading"])]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])])]),d(r(Ot),{visible:K.value,"onUpdate:visible":s[2]||(s[2]=x=>K.value=x),header:et.value,modal:"",maximizable:"",style:{width:"85vw"},breakpoints:{"960px":"95vw"}},{default:b(()=>{var x;return[(x=z.value)!=null&&x.fecha_sincronizacion?(u(),h("div",Oe,y(z.value.cantidad)+" registros · sincronizado el "+y(q(z.value.fecha_sincronizacion)),1)):N("",!0),d(r(nt),{value:V.value,loading:Z.value,filters:I.value,"onUpdate:filters":s[1]||(s[1]=c=>I.value=c),globalFilterFields:at.value,paginator:"",rows:10,rowsPerPageOptions:[10,25,50,100],scrollable:"",scrollHeight:"55vh",stripedRows:"",size:"small"},{header:b(()=>[d(r(Bt),null,{default:b(()=>[d(r(Ct),{class:"pi pi-search"}),d(r(Nt),{modelValue:I.value.global.value,"onUpdate:modelValue":s[0]||(s[0]=c=>I.value.global.value=c),placeholder:"Buscar…",class:"w-full sm:w-80"},null,8,["modelValue"])]),_:1})]),empty:b(()=>[...s[16]||(s[16]=[a("div",{class:"text-center text-muted-color py-6"},"No hay registros.",-1)])]),default:b(()=>[(u(!0),h(P,null,G(at.value,c=>(u(),$(r(C),{key:c,field:c,header:c,style:{"min-width":"9rem"}},null,8,["field","header"]))),128))]),_:1},8,["value","loading","filters","globalFilterFields"])]}),_:1},8,["visible","header"])],64)}}};export{Ve as default};
