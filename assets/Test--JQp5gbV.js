import{T as ye}from"./index-BDzQNBg-.js";import{p as _e,N as he,O as xe,H as we,c as w,a as s,b as n,u as t,g as p,U as ke,x as $e,l as Ce,z as Se,i as j,F as Pe,t as c,f as K,w as f,K as V,n as Ee,Z as Ne,L as Ve,A as Y,aq as De,Q as Re,j as u,M as B,o as h}from"./index-C8clDulR.js";import{s as Fe}from"./index-BH_LQaH6.js";import{g as Ie,a as Ue,p as G}from"./productReportService-CJp0pnh9.js";const ze={class:"inv"},Be={class:"inv-header"},Le={class:"inv-actions"},Oe={class:"inv-card inv-filters"},Te={class:"field"},je={class:"field field--grow"},qe={class:"p-input-icon-left w-full"},Me={class:"field field--buttons"},Ae={class:"inv-stats"},He={class:"stat"},Ke={class:"stat"},Ye={class:"stat"},Ge={class:"stat"},Qe={class:"inv-card inv-table"},We={class:"inv-table__head"},Xe={class:"inv-branch"},Ze={class:"inv-table__tools"},Je={class:"empty"},ea={class:"code"},aa={class:"product"},sa={class:"product__name"},la={key:0},ta={key:0,class:"inv-pager"},oa={class:"inv-pager__info"},na={class:"inv-pager__nav"},ia={class:"inv-pager__page"},ra={key:1,class:"inv-card inv-welcome"},da={class:"preview-bar"},ua={class:"preview-bar__count"},ca={key:0,class:"empty"},pa=["srcdoc"],va={__name:"Test",setup(ma){const x=he(),D=u(!1),R=u(!1),q=()=>{const a=new Date,e=o=>String(o).padStart(2,"0");return`${a.getFullYear()}${e(a.getMonth()+1)}${e(a.getDate())}_${e(a.getHours())}${e(a.getMinutes())}${e(a.getSeconds())}`},M=(a,e)=>{const o=window.URL.createObjectURL(a),l=document.createElement("a");l.href=o,l.download=e,document.body.appendChild(l),l.click(),l.remove(),window.URL.revokeObjectURL(o)},Q=async()=>{D.value=!0;try{const a=await G.excel();M(a.data,`reporte_productos_${q()}.xlsx`),x.add({severity:"success",summary:"Excel generado",detail:"El reporte Excel fue descargado correctamente.",life:4e3})}catch(a){console.error("ERROR EXCEL:",a),x.add({severity:"error",summary:"Error",detail:"No se pudo generar el Excel.",life:4e3})}finally{D.value=!1}},W=async()=>{R.value=!0;try{const a=await G.pdf();M(a.data,`reporte_productos_${q()}.pdf`),x.add({severity:"success",summary:"PDF generado",detail:"El reporte PDF fue descargado correctamente.",life:4e3})}catch(a){console.error("ERROR PDF:",a),x.add({severity:"error",summary:"Error",detail:"No se pudo generar el PDF.",life:4e3})}finally{R.value=!1}},A=u([]),m=u(null),L=u(!1),y=u([]),g=u(!1),r=u(1),X=u(100),S=u(0),v=u(1),b=u(""),_=u({}),P=u({}),Z=async()=>{var a;L.value=!0;try{const e=await Ie();A.value=((a=e==null?void 0:e.data)==null?void 0:a.data)??[]}catch(e){console.error("Error cargando sucursales:",e),x.add({severity:"error",summary:"Error",detail:"No se pudieron cargar las sucursales.",life:4e3})}finally{L.value=!1}},k=async()=>{var e,o,l;if(!m.value){y.value=[],S.value=0;return}const a=Number(m.value.id);if(!a||Number.isNaN(a)){x.add({severity:"warn",summary:"Sucursal",detail:"La sucursal seleccionada no tiene un ID válido.",life:4e3});return}g.value=!0;try{const d=await Ue(a,r.value,X.value,b.value),i=d==null?void 0:d.data;y.value=(i==null?void 0:i.data)??[],S.value=(i==null?void 0:i.total)??0,v.value=(i==null?void 0:i.last_page)??1}catch(d){console.error("ERROR PRODUCTOS:",d),console.error("RESPUESTA DEL SERVIDOR:",(e=d.response)==null?void 0:e.data),x.add({severity:"error",summary:"Error",detail:((l=(o=d.response)==null?void 0:o.data)==null?void 0:l.message)||"No se pudieron obtener los productos.",life:5e3})}finally{g.value=!1}};xe(m,async a=>{if(_.value={},P.value={},b.value="",r.value=1,!a){y.value=[],S.value=0,v.value=1;return}await k()});const O=async()=>{r.value=1,await k()},J=async()=>{b.value="",await O()},ee=async()=>{r.value<=1||(r.value--,await k())},ae=async()=>{r.value>=v.value||(r.value++,await k())},se=async()=>{r.value!==1&&(r.value=1,await k())},le=async()=>{r.value!==v.value&&(r.value=v.value,await k())},te=a=>_.value[a]??null,oe=(a,e)=>{if(e==null){delete _.value[a.id],delete P.value[a.id];return}_.value[a.id]=Number(e),P.value[a.id]={id:a.id,codigo:a.product_code||"",producto:a.name||"",modelo:a.model_product||"",stock:Number(a.stock_actual??0)}},ne=()=>{_.value={},P.value={}},F=a=>{const e=_.value[a.id];return e==null?null:Number(e)-Number(a.stock_actual??0)},ie=a=>{const e=F(a);return e===null?"-":e>0?`+${e}`:`${e}`},re=a=>{const e=F(a);return e===null||e===0?"secondary":e>0?"success":"danger"},de=a=>{const e=F(a);return e===null||e===0?"":e>0?"row-sobrante":"row-faltante"},I=B(()=>{let a=0,e=0,o=0;for(const l of y.value){const d=F(l);d!==null&&(a++,d<0&&(e+=Math.abs(d)),d>0&&(o+=d))}return{contados:a,faltantes:e,sobrantes:o}}),T=B(()=>{var a;return((a=m.value)==null?void 0:a.branch_name)??"Sucursal"}),E=a=>new Intl.NumberFormat("es-BO").format(Number(a??0));we(Z);const U=u(!1),H=u(null),ue=["Solo contados","Página actual"],N=u("Solo contados"),ce=()=>{N.value=Object.keys(_.value).length?"Solo contados":"Página actual",U.value=!0},z=B(()=>{const a=e=>{const o=_.value[e.id],l=o!=null;return{...e,contada:l?Number(o):null,diferencia:l?Number(o)-e.stock:null}};return N.value==="Solo contados"?Object.values(P.value).map(a).sort((e,o)=>e.producto.localeCompare(o.producto,"es")):y.value.map(e=>a({id:e.id,codigo:e.product_code||"",producto:e.name||"",modelo:e.model_product||"",stock:Number(e.stock_actual??0)}))}),$=a=>String(a??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),pe=()=>{const a=new Date,e=o=>String(o).padStart(2,"0");return`${e(a.getDate())}/${e(a.getMonth()+1)}/${a.getFullYear()} ${e(a.getHours())}:${e(a.getMinutes())}`},ve=B(()=>{const a=z.value;let e=0,o=0,l=0;for(const i of a)i.diferencia!==null&&(e++,i.diferencia<0&&(o+=Math.abs(i.diferencia)),i.diferencia>0&&(l+=i.diferencia));const d=a.map((i,ge)=>{const C=i.diferencia,be=C===null?"":C>0?`+${C}`:`${C}`,fe=C>0?"pos":C<0?"neg":"";return`
            <tr>
                <td class="n">${ge+1}</td>
                <td class="code">${$(i.codigo||"-")}</td>
                <td>
                    <div class="name">${$(i.producto)}</div>
                    ${i.modelo?`<div class="model">${$(i.modelo)}</div>`:""}
                </td>
                <td class="num">${i.stock}</td>
                <td class="num contada">${i.contada??""}</td>
                <td class="num ${fe}">${be}</td>
            </tr>`}).join("");return`<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>Inventario - ${$(T.value)}</title>
<style>
    @page { size: A4; margin: 12mm; }
    * { box-sizing: border-box; }
    body {
        font-family: Arial, Helvetica, sans-serif; font-size: 11px; color: #111; margin: 0;
        -webkit-print-color-adjust: exact; print-color-adjust: exact;
    }
    .page { padding: 0; }
    @media screen {
        body { background: #e5e7eb; padding: 16px; }
        .page { max-width: 780px; margin: 0 auto; background: #fff; padding: 28px; box-shadow: 0 2px 10px rgba(0,0,0,.15); }
    }
    h1 { font-size: 18px; margin: 0 0 4px; }
    .meta { color: #555; line-height: 1.6; margin-bottom: 10px; }
    .kpis { display: flex; gap: 18px; margin: 0 0 12px; padding: 8px 10px; background: #f1f5f9; border-radius: 4px; }
    .kpis b { font-size: 13px; }
    table { width: 100%; border-collapse: collapse; }
    thead { display: table-header-group; }
    tr { page-break-inside: avoid; }
    th { background: #334155; color: #fff; text-align: left; padding: 6px 8px; font-size: 10.5px; }
    td { padding: 5px 8px; border-bottom: 1px solid #ddd; vertical-align: top; }
    tbody tr:nth-child(even) td { background: #f6f7f9; }
    th.num, td.num { text-align: right; white-space: nowrap; }
    td.n { color: #888; width: 28px; }
    .code { font-family: Consolas, monospace; white-space: nowrap; }
    .name { font-weight: 600; }
    .model { color: #666; font-size: 10px; }
    .contada { font-weight: 700; }
    .pos { color: #16a34a; font-weight: 700; }
    .neg { color: #dc2626; font-weight: 700; }
    .firmas { display: flex; gap: 40px; margin-top: 48px; page-break-inside: avoid; }
    .firmas div { flex: 1; border-top: 1px solid #333; padding-top: 4px; text-align: center; color: #555; }
</style>
</head>
<body>
<div class="page">
    <h1>Inventario</h1>
    <div class="meta">
        Sucursal: <strong>${$(T.value)}</strong><br>
        Generado: ${pe()}
        ${N.value==="Página actual"?` &nbsp;|&nbsp; Página ${r.value} de ${v.value}`:""}
        ${b.value?` &nbsp;|&nbsp; Búsqueda: ${$(b.value)}`:""}
    </div>
    <div class="kpis">
        <span>Productos: <b>${a.length}</b></span>
        <span>Contados: <b>${e}</b></span>
        <span>Faltantes: <b class="neg">${o}</b></span>
        <span>Sobrantes: <b class="pos">${l}</b></span>
    </div>
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Código</th>
                <th>Producto</th>
                <th class="num">Stock</th>
                <th class="num">Contada</th>
                <th class="num">Dif.</th>
            </tr>
        </thead>
        <tbody>${d}</tbody>
    </table>
    <div class="firmas">
        <div>Responsable</div>
        <div>Revisado por</div>
    </div>
</div>
</body>
</html>`}),me=()=>{var e;const a=(e=H.value)==null?void 0:e.contentWindow;a&&(a.focus(),a.print())};return(a,e)=>{const o=ye;return h(),w("div",ze,[s("header",Be,[e[5]||(e[5]=s("div",{class:"inv-title"},[s("span",{class:"inv-title__icon"},[s("i",{class:"pi pi-box"})]),s("div",null,[s("h2",null,"Inventario"),s("p",null,"Consulta y control de stock por sucursal.")])],-1)),s("div",Le,[n(t(p),{label:"Excel",icon:"pi pi-file-excel",severity:"success",outlined:"",loading:D.value,disabled:R.value,onClick:Q},null,8,["loading","disabled"]),n(t(p),{label:"PDF",icon:"pi pi-file-pdf",severity:"danger",outlined:"",loading:R.value,disabled:D.value,onClick:W},null,8,["loading","disabled"])])]),s("section",Oe,[s("div",Te,[e[6]||(e[6]=s("label",{for:"sucursal"},"Sucursal",-1)),n(t(Fe),{id:"sucursal",modelValue:m.value,"onUpdate:modelValue":e[0]||(e[0]=l=>m.value=l),options:A.value,optionLabel:"branch_name",placeholder:"Seleccione una sucursal",class:"w-full",loading:L.value},null,8,["modelValue","options","loading"])]),s("div",je,[e[8]||(e[8]=s("label",{for:"buscar"},"Buscar producto",-1)),s("span",qe,[e[7]||(e[7]=s("i",{class:"pi pi-search"},null,-1)),n(t($e),{id:"buscar",modelValue:b.value,"onUpdate:modelValue":e[1]||(e[1]=l=>b.value=l),placeholder:"Código, producto o modelo",class:"w-full",disabled:!m.value,onKeyup:ke(O,["enter"])},null,8,["modelValue","disabled"])])]),s("div",Me,[n(t(p),{label:"Buscar",icon:"pi pi-search",loading:g.value,disabled:!m.value,onClick:O},null,8,["loading","disabled"]),b.value?Ce((h(),Se(t(p),{key:0,icon:"pi pi-times",severity:"secondary",outlined:"","aria-label":"Limpiar búsqueda",disabled:g.value,onClick:J},null,8,["disabled"])),[[o,"Limpiar búsqueda",void 0,{top:!0}]]):j("",!0)])]),m.value?(h(),w(Pe,{key:0},[s("section",Ae,[s("div",He,[e[10]||(e[10]=s("span",{class:"stat__icon stat__icon--primary"},[s("i",{class:"pi pi-list"})],-1)),s("div",null,[e[9]||(e[9]=s("small",null,"Productos",-1)),s("strong",null,c(E(S.value)),1)])]),s("div",Ke,[e[12]||(e[12]=s("span",{class:"stat__icon stat__icon--info"},[s("i",{class:"pi pi-check-square"})],-1)),s("div",null,[e[11]||(e[11]=s("small",null,"Contados (página)",-1)),s("strong",null,c(I.value.contados),1)])]),s("div",Ye,[e[14]||(e[14]=s("span",{class:"stat__icon stat__icon--danger"},[s("i",{class:"pi pi-arrow-down"})],-1)),s("div",null,[e[13]||(e[13]=s("small",null,"Faltantes",-1)),s("strong",null,c(E(I.value.faltantes)),1)])]),s("div",Ge,[e[16]||(e[16]=s("span",{class:"stat__icon stat__icon--success"},[s("i",{class:"pi pi-arrow-up"})],-1)),s("div",null,[e[15]||(e[15]=s("small",null,"Sobrantes",-1)),s("strong",null,c(E(I.value.sobrantes)),1)])])]),s("section",Qe,[s("div",We,[s("div",Xe,[e[17]||(e[17]=s("i",{class:"pi pi-building"},null,-1)),s("span",null,c(T.value),1)]),s("div",Ze,[n(t(p),{label:"Vista previa",icon:"pi pi-print",outlined:"",size:"small",onClick:ce}),n(t(p),{label:"Limpiar cantidades",icon:"pi pi-eraser",text:"",size:"small",disabled:!I.value.contados,onClick:ne},null,8,["disabled"]),n(t(K),{value:`Página ${r.value} de ${v.value}`,severity:"info"},null,8,["value"])])]),n(t(Ve),{value:y.value,loading:g.value,dataKey:"id",responsiveLayout:"scroll",rowClass:de,size:"small"},{empty:f(()=>[s("div",Je,[e[18]||(e[18]=s("i",{class:"pi pi-inbox"},null,-1)),e[19]||(e[19]=s("strong",null,"Sin resultados",-1)),s("span",null,c(b.value?"No hay productos que coincidan con la búsqueda.":"Esta sucursal no tiene productos."),1)])]),default:f(()=>[n(t(V),{header:"Código",style:{"min-width":"130px"}},{body:f(({data:l})=>[s("span",ea,c(l.product_code||"-"),1)]),_:1}),n(t(V),{header:"Producto",style:{"min-width":"280px"}},{body:f(({data:l})=>[s("div",aa,[s("span",sa,c(l.name),1),l.model_product?(h(),w("small",la,c(l.model_product),1)):j("",!0)])]),_:1}),n(t(V),{header:"Stock",style:{width:"130px"},bodyClass:"text-right",headerClass:"text-right"},{body:f(({data:l})=>[s("span",{class:Ee(["stock",{"stock--zero":Number(l.stock_actual??0)<=0}])},c(E(l.stock_actual)),3)]),_:1}),n(t(V),{header:"Cantidad contada",style:{width:"190px"}},{body:f(({data:l})=>[n(t(Ne),{modelValue:te(l.id),"onUpdate:modelValue":d=>oe(l,d),min:0,useGrouping:!1,placeholder:"0",class:"w-full",inputClass:"w-full text-center"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),n(t(V),{header:"Diferencia",style:{width:"130px"},bodyClass:"text-center",headerClass:"text-center"},{body:f(({data:l})=>[n(t(K),{value:ie(l),severity:re(l),rounded:""},null,8,["value","severity"])]),_:1})]),_:1},8,["value","loading"]),y.value.length?(h(),w("div",ta,[s("span",oa,[e[20]||(e[20]=Y(" Mostrando ",-1)),s("strong",null,c(y.value.length),1),e[21]||(e[21]=Y(" de ",-1)),s("strong",null,c(E(S.value)),1)]),s("div",na,[n(t(p),{icon:"pi pi-angle-double-left",text:"",rounded:"","aria-label":"Primera página",disabled:r.value<=1||g.value,onClick:se},null,8,["disabled"]),n(t(p),{icon:"pi pi-angle-left",text:"",rounded:"","aria-label":"Página anterior",disabled:r.value<=1||g.value,onClick:ee},null,8,["disabled"]),s("span",ia,c(r.value)+" / "+c(v.value),1),n(t(p),{icon:"pi pi-angle-right",text:"",rounded:"","aria-label":"Página siguiente",disabled:r.value>=v.value||g.value,onClick:ae},null,8,["disabled"]),n(t(p),{icon:"pi pi-angle-double-right",text:"",rounded:"","aria-label":"Última página",disabled:r.value>=v.value||g.value,onClick:le},null,8,["disabled"])])])):j("",!0)])],64)):(h(),w("section",ra,[...e[22]||(e[22]=[s("span",{class:"inv-welcome__icon"},[s("i",{class:"pi pi-building"})],-1),s("h3",null,"Seleccione una sucursal",-1),s("p",null,"Elija una sucursal arriba para ver su inventario y comparar el stock con lo contado.",-1)])])),n(t(Re),{visible:U.value,"onUpdate:visible":e[4]||(e[4]=l=>U.value=l),modal:"",header:"Vista previa de impresión",draggable:!1,style:{width:"60rem"},breakpoints:{"1199px":"90vw","640px":"98vw"}},{footer:f(()=>[n(t(p),{label:"Cerrar",severity:"secondary",text:"",onClick:e[3]||(e[3]=l=>U.value=!1)}),n(t(p),{label:"Imprimir",icon:"pi pi-print",disabled:!z.value.length,onClick:me},null,8,["disabled"])]),default:f(()=>[s("div",da,[n(t(De),{modelValue:N.value,options:ue,"onUpdate:modelValue":e[2]||(e[2]=l=>l&&(N.value=l))},null,8,["modelValue"]),s("small",ua,c(z.value.length)+" productos ",1)]),z.value.length?(h(),w("iframe",{key:1,ref_key:"previewFrame",ref:H,class:"preview-frame",title:"Vista previa de impresión",srcdoc:ve.value},null,8,pa)):(h(),w("div",ca,[...e[23]||(e[23]=[s("i",{class:"pi pi-inbox"},null,-1),s("strong",null,"Nada para imprimir",-1),s("span",null,' Ingrese cantidades en la tabla o cambie a "Página actual". ',-1)])]))]),_:1},8,["visible"])])}}},_a=_e(va,[["__scopeId","data-v-9fc3393d"]]);export{_a as default};
