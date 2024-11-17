import{a as ce,b as Re,Q as ve}from"./QBtn.04815baf.js";import{k as qe,r as B,o as oe,w as N,c as y,R as Ve,g as W,i as Ae,S as Fe,m as ae,U as _e,V as Ce,N as Ee,p as Y,W as Be,X as $e,h as S,O as X,L as Te,Y as Pe,Z as Oe,l as Ie,J as ge,_ as Ne,d as De,A as ze,B as je,C as Le,f as re,M as Ue,$ as Ke,P as Ze}from"./index.10a47e1f.js";import{a as G}from"./render.3e5ae0ee.js";import{u as He,Q as Qe}from"./use-quasar.9156e196.js";let ie,ee=0;const P=new Array(256);for(let e=0;e<256;e++)P[e]=(e+256).toString(16).substring(1);const Ye=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const o=new Uint8Array(t);return e.getRandomValues(o),o}}return t=>{const o=[];for(let i=t;i>0;i--)o.push(Math.floor(Math.random()*256));return o}})(),me=4096;function se(){(ie===void 0||ee+16>me)&&(ee=0,ie=Ye(me));const e=Array.prototype.slice.call(ie,ee,ee+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,P[e[0]]+P[e[1]]+P[e[2]]+P[e[3]]+"-"+P[e[4]]+P[e[5]]+"-"+P[e[6]]+P[e[7]]+"-"+P[e[8]]+P[e[9]]+"-"+P[e[10]]+P[e[11]]+P[e[12]]+P[e[13]]+P[e[14]]+P[e[15]]}function Je(e){return e==null?null:e}function he(e,t){return e==null?t===!0?`f_${se()}`:null:e}function We({getValue:e,required:t=!0}={}){if(qe.value===!0){const o=e!==void 0?B(Je(e())):B(null);return t===!0&&o.value===null&&oe(()=>{o.value=`f_${se()}`}),e!==void 0&&N(e,i=>{o.value=he(i,t)}),o}return e!==void 0?y(()=>he(e(),t)):B(`f_${se()}`)}const pe=/^on[A-Z]/;function Xe(){const{attrs:e,vnode:t}=W(),o={listeners:B({}),attributes:B({})};function i(){const c={},d={};for(const f in e)f!=="class"&&f!=="style"&&pe.test(f)===!1&&(c[f]=e[f]);for(const f in t.props)pe.test(f)===!0&&(d[f]=t.props[f]);o.attributes.value=c,o.listeners.value=d}return Ve(i),i(),o}const Ge={dark:{type:Boolean,default:null}};function et(e,t){return y(()=>e.dark===null?t.dark.isActive:e.dark)}function tt({validate:e,resetValidation:t,requiresQForm:o}){const i=Ae(Fe,!1);if(i!==!1){const{props:c,proxy:d}=W();Object.assign(d,{validate:e,resetValidation:t}),N(()=>c.disable,f=>{f===!0?(typeof t=="function"&&t(),i.unbindComponent(d)):i.bindComponent(d)}),oe(()=>{c.disable!==!0&&i.bindComponent(d)}),ae(()=>{c.disable!==!0&&i.unbindComponent(d)})}else o===!0&&console.error("Parent QForm not found on useFormChild()!")}const be=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ye=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ke=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,te=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ne=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ue={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>be.test(e),hexaColor:e=>ye.test(e),hexOrHexaColor:e=>ke.test(e),rgbColor:e=>te.test(e),rgbaColor:e=>ne.test(e),rgbOrRgbaColor:e=>te.test(e)||ne.test(e),hexOrRgbColor:e=>be.test(e)||te.test(e),hexaOrRgbaColor:e=>ye.test(e)||ne.test(e),anyColor:e=>ke.test(e)||te.test(e)||ne.test(e)},nt=[!0,!1,"ondemand"],lt={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>nt.includes(e)}};function ot(e,t){const{props:o,proxy:i}=W(),c=B(!1),d=B(null),f=B(!1);tt({validate:j,resetValidation:z});let w=0,F;const k=y(()=>o.rules!==void 0&&o.rules!==null&&o.rules.length!==0),b=y(()=>o.disable!==!0&&k.value===!0&&t.value===!1),h=y(()=>o.error===!0||c.value===!0),D=y(()=>typeof o.errorMessage=="string"&&o.errorMessage.length!==0?o.errorMessage:d.value);N(()=>o.modelValue,()=>{f.value=!0,b.value===!0&&o.lazyRules===!1&&O()});function T(){o.lazyRules!=="ondemand"&&b.value===!0&&f.value===!0&&O()}N(()=>o.reactiveRules,U=>{U===!0?F===void 0&&(F=N(()=>o.rules,T,{immediate:!0,deep:!0})):F!==void 0&&(F(),F=void 0)},{immediate:!0}),N(()=>o.lazyRules,T),N(e,U=>{U===!0?f.value=!0:b.value===!0&&o.lazyRules!=="ondemand"&&O()});function z(){w++,t.value=!1,f.value=!1,c.value=!1,d.value=null,O.cancel()}function j(U=o.modelValue){if(o.disable===!0||k.value===!1)return!0;const _=++w,Q=t.value!==!0?()=>{f.value=!0}:()=>{},K=(R,M)=>{R===!0&&Q(),c.value=R,d.value=M||null,t.value=!1},L=[];for(let R=0;R<o.rules.length;R++){const M=o.rules[R];let $;if(typeof M=="function"?$=M(U,ue):typeof M=="string"&&ue[M]!==void 0&&($=ue[M](U)),$===!1||typeof $=="string")return K(!0,$),!1;$!==!0&&$!==void 0&&L.push($)}return L.length===0?(K(!1),!0):(t.value=!0,Promise.all(L).then(R=>{if(R===void 0||Array.isArray(R)===!1||R.length===0)return _===w&&K(!1),!0;const M=R.find($=>$===!1||typeof $=="string");return _===w&&K(M!==void 0,M),M===void 0},R=>(_===w&&(console.error(R),K(!0)),!1)))}const O=_e(j,0);return ae(()=>{F!==void 0&&F(),O.cancel()}),Object.assign(i,{resetValidation:z,validate:j}),Ce(i,"hasError",()=>h.value),{isDirtyModel:f,hasRules:k,hasError:h,errorMessage:D,validate:j,resetValidation:z}}let de=[],at=[];function Me(e){at.length===0?e():de.push(e)}function rt(e){de=de.filter(t=>t!==e)}function fe(e){return e!=null&&(""+e).length!==0}const it={...Ge,...lt,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},ut={...it,maxlength:[Number,String]},st=["update:modelValue","clear","focus","blur"];function dt({requiredForAttr:e=!0,tagProp:t,changeEvent:o=!1}={}){const{props:i,proxy:c}=W(),d=et(i,c.$q),f=We({required:e,getValue:()=>i.for});return{requiredForAttr:e,changeEvent:o,tag:t===!0?y(()=>i.tag):{value:"label"},isDark:d,editable:y(()=>i.disable!==!0&&i.readonly!==!0),innerLoading:B(!1),focused:B(!1),hasPopupOpen:!1,splitAttrs:Xe(),targetUid:f,rootRef:B(null),targetRef:B(null),controlRef:B(null)}}function ft(e){const{props:t,emit:o,slots:i,attrs:c,proxy:d}=W(),{$q:f}=d;let w=null;e.hasValue===void 0&&(e.hasValue=y(()=>fe(t.modelValue))),e.emitValue===void 0&&(e.emitValue=u=>{o("update:modelValue",u)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:a,onFocusout:l}),Object.assign(e,{clearValue:s,onControlFocusin:a,onControlFocusout:l,focus:M}),e.computedCounter===void 0&&(e.computedCounter=y(()=>{if(t.counter!==!1){const u=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,v=t.maxlength!==void 0?t.maxlength:t.maxValues;return u+(v!==void 0?" / "+v:"")}}));const{isDirtyModel:F,hasRules:k,hasError:b,errorMessage:h,resetValidation:D}=ot(e.focused,e.innerLoading),T=e.floatingLabel!==void 0?y(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):y(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),z=y(()=>t.bottomSlots===!0||t.hint!==void 0||k.value===!0||t.counter===!0||t.error!==null),j=y(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),O=y(()=>`q-field row no-wrap items-start q-field--${j.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(T.value===!0?" q-field--float":"")+(_.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(b.value===!0?" q-field--error":"")+(b.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&z.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),U=y(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(b.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),_=y(()=>t.labelSlot===!0||t.label!==void 0),Q=y(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&b.value!==!0?` text-${t.labelColor}`:"")),K=y(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:T.value,modelValue:t.modelValue,emitValue:e.emitValue})),L=y(()=>{const u={};return e.targetUid.value&&(u.for=e.targetUid.value),t.disable===!0&&(u["aria-disabled"]="true"),u});function R(){const u=document.activeElement;let v=e.targetRef!==void 0&&e.targetRef.value;v&&(u===null||u.id!==e.targetUid.value)&&(v.hasAttribute("tabindex")===!0||(v=v.querySelector("[tabindex]")),v&&v!==u&&v.focus({preventScroll:!0}))}function M(){Me(R)}function $(){rt(R);const u=document.activeElement;u!==null&&e.rootRef.value.contains(u)&&u.blur()}function a(u){w!==null&&(clearTimeout(w),w=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,o("focus",u))}function l(u,v){w!==null&&clearTimeout(w),w=setTimeout(()=>{w=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,o("blur",u)),v!==void 0&&v())})}function s(u){Ee(u),f.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),o("update:modelValue",null),e.changeEvent===!0&&o("change",null),o("clear",t.modelValue),Y(()=>{const v=F.value;D(),F.value=v})}function r(u){[13,32].includes(u.keyCode)&&s(u)}function p(){const u=[];return i.prepend!==void 0&&u.push(S("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:X},i.prepend())),u.push(S("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),b.value===!0&&t.noErrorIcon===!1&&u.push(m("error",[S(ce,{name:f.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?u.push(m("inner-loading-append",i.loading!==void 0?i.loading():[S(Re,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&u.push(m("inner-clearable-append",[S(ce,{class:"q-field__focusable-action",name:t.clearIcon||f.iconSet.field.clear,tabindex:0,role:"button","aria-hidden":"false","aria-label":f.lang.label.clear,onKeyup:r,onClick:s})])),i.append!==void 0&&u.push(S("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:X},i.append())),e.getInnerAppend!==void 0&&u.push(m("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&u.push(e.getControlChild()),u}function g(){const u=[];return t.prefix!==void 0&&t.prefix!==null&&u.push(S("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&u.push(e.getShadowControl()),e.getControl!==void 0?u.push(e.getControl()):i.rawControl!==void 0?u.push(i.rawControl()):i.control!==void 0&&u.push(S("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(K.value))),_.value===!0&&u.push(S("div",{class:Q.value},G(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&u.push(S("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),u.concat(G(i.default))}function q(){let u,v;b.value===!0?h.value!==null?(u=[S("div",{role:"alert"},h.value)],v=`q--slot-error-${h.value}`):(u=G(i.error),v="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(u=[S("div",t.hint)],v=`q--slot-hint-${t.hint}`):(u=G(i.hint),v="q--slot-hint"));const C=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&C===!1&&u===void 0)return;const V=S("div",{key:v,class:"q-field__messages col"},u);return S("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:X},[t.hideBottomSpace===!0?V:S(Te,{name:"q-transition--field-message"},()=>V),C===!0?S("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function m(u,v){return v===null?null:S("div",{key:u,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},v)}let x=!1;return Be(()=>{x=!0}),$e(()=>{x===!0&&t.autofocus===!0&&d.focus()}),t.autofocus===!0&&oe(()=>{d.focus()}),ae(()=>{w!==null&&clearTimeout(w)}),Object.assign(d,{focus:M,blur:$}),function(){const v=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...L.value}:L.value;return S(e.tag.value,{ref:e.rootRef,class:[O.value,c.class],style:c.style,...v},[i.before!==void 0?S("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:X},i.before()):null,S("div",{class:"q-field__inner relative-position col self-stretch"},[S("div",{ref:e.controlRef,class:U.value,tabindex:-1,...e.controlEvents},p()),z.value===!0?q():null]),i.after!==void 0?S("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:X},i.after()):null])}}const xe={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},le={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Se=Object.keys(le);Se.forEach(e=>{le[e].regex=new RegExp(le[e].pattern)});const ct=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Se.join("")+"])|(.)","g"),we=/[.*+?^${}()|[\]\\]/g,E=String.fromCharCode(1),vt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function gt(e,t,o,i){let c,d,f,w,F,k;const b=B(null),h=B(T());function D(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}N(()=>e.type+e.autogrow,j),N(()=>e.mask,a=>{if(a!==void 0)O(h.value,!0);else{const l=M(h.value);j(),e.modelValue!==l&&t("update:modelValue",l)}}),N(()=>e.fillMask+e.reverseFillMask,()=>{b.value===!0&&O(h.value,!0)}),N(()=>e.unmaskedValue,()=>{b.value===!0&&O(h.value)});function T(){if(j(),b.value===!0){const a=L(M(e.modelValue));return e.fillMask!==!1?$(a):a}return e.modelValue}function z(a){if(a<c.length)return c.slice(-a);let l="",s=c;const r=s.indexOf(E);if(r!==-1){for(let p=a-s.length;p>0;p--)l+=E;s=s.slice(0,r)+l+s.slice(r)}return s}function j(){if(b.value=e.mask!==void 0&&e.mask.length!==0&&D(),b.value===!1){w=void 0,c="",d="";return}const a=xe[e.mask]===void 0?e.mask:xe[e.mask],l=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=l.replace(we,"\\$&"),r=[],p=[],g=[];let q=e.reverseFillMask===!0,m="",x="";a.replace(ct,(V,n,A,H,Z)=>{if(H!==void 0){const I=le[H];g.push(I),x=I.negate,q===!0&&(p.push("(?:"+x+"+)?("+I.pattern+"+)?(?:"+x+"+)?("+I.pattern+"+)?"),q=!1),p.push("(?:"+x+"+)?("+I.pattern+")?")}else if(A!==void 0)m="\\"+(A==="\\"?"":A),g.push(A),r.push("([^"+m+"]+)?"+m+"?");else{const I=n!==void 0?n:Z;m=I==="\\"?"\\\\\\\\":I.replace(we,"\\\\$&"),g.push(I),r.push("([^"+m+"]+)?"+m+"?")}});const u=new RegExp("^"+r.join("")+"("+(m===""?".":"[^"+m+"]")+"+)?"+(m===""?"":"["+m+"]*")+"$"),v=p.length-1,C=p.map((V,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+V):n===v?new RegExp("^"+V+"("+(x===""?".":x)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+V));f=g,w=V=>{const n=u.exec(e.reverseFillMask===!0?V:V.slice(0,g.length+1));n!==null&&(V=n.slice(1).join(""));const A=[],H=C.length;for(let Z=0,I=V;Z<H;Z++){const J=C[Z].exec(I);if(J===null)break;I=I.slice(J.shift().length),A.push(...J)}return A.length!==0?A.join(""):V},c=g.map(V=>typeof V=="string"?V:E).join(""),d=c.split(E).join(l)}function O(a,l,s){const r=i.value,p=r.selectionEnd,g=r.value.length-p,q=M(a);l===!0&&j();const m=L(q),x=e.fillMask!==!1?$(m):m,u=h.value!==x;r.value!==x&&(r.value=x),u===!0&&(h.value=x),document.activeElement===r&&Y(()=>{if(x===d){const C=e.reverseFillMask===!0?d.length:0;r.setSelectionRange(C,C,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const C=r.selectionEnd;let V=p-1;for(let n=F;n<=V&&n<C;n++)c[n]!==E&&V++;_.right(r,V);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)!==-1){const C=e.reverseFillMask===!0?p===0?x.length>m.length?1:0:Math.max(0,x.length-(x===d?0:Math.min(m.length,g)+1))+1:p;r.setSelectionRange(C,C,"forward");return}if(e.reverseFillMask===!0)if(u===!0){const C=Math.max(0,x.length-(x===d?0:Math.min(m.length,g+1)));C===1&&p===1?r.setSelectionRange(C,C,"forward"):_.rightReverse(r,C)}else{const C=x.length-g;r.setSelectionRange(C,C,"backward")}else if(u===!0){const C=Math.max(0,c.indexOf(E),Math.min(m.length,p)-1);_.right(r,C)}else{const C=p-1;_.right(r,C)}});const v=e.unmaskedValue===!0?M(x):x;String(e.modelValue)!==v&&(e.modelValue!==null||v!=="")&&o(v,!0)}function U(a,l,s){const r=L(M(a.value));l=Math.max(0,c.indexOf(E),Math.min(r.length,l)),F=l,a.setSelectionRange(l,s,"forward")}const _={left(a,l){const s=c.slice(l-1).indexOf(E)===-1;let r=Math.max(0,l-1);for(;r>=0;r--)if(c[r]===E){l=r,s===!0&&l++;break}if(r<0&&c[l]!==void 0&&c[l]!==E)return _.right(a,0);l>=0&&a.setSelectionRange(l,l,"backward")},right(a,l){const s=a.value.length;let r=Math.min(s,l+1);for(;r<=s;r++)if(c[r]===E){l=r;break}else c[r-1]===E&&(l=r);if(r>s&&c[l-1]!==void 0&&c[l-1]!==E)return _.left(a,s);a.setSelectionRange(l,l,"forward")},leftReverse(a,l){const s=z(a.value.length);let r=Math.max(0,l-1);for(;r>=0;r--)if(s[r-1]===E){l=r;break}else if(s[r]===E&&(l=r,r===0))break;if(r<0&&s[l]!==void 0&&s[l]!==E)return _.rightReverse(a,0);l>=0&&a.setSelectionRange(l,l,"backward")},rightReverse(a,l){const s=a.value.length,r=z(s),p=r.slice(0,l+1).indexOf(E)===-1;let g=Math.min(s,l+1);for(;g<=s;g++)if(r[g-1]===E){l=g,l>0&&p===!0&&l--;break}if(g>s&&r[l-1]!==void 0&&r[l-1]!==E)return _.leftReverse(a,s);a.setSelectionRange(l,l,"forward")}};function Q(a){t("click",a),k=void 0}function K(a){if(t("keydown",a),Pe(a)===!0||a.altKey===!0)return;const l=i.value,s=l.selectionStart,r=l.selectionEnd;if(a.shiftKey||(k=void 0),a.keyCode===37||a.keyCode===39){a.shiftKey&&k===void 0&&(k=l.selectionDirection==="forward"?s:r);const p=_[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(a.preventDefault(),p(l,k===s?r:s),a.shiftKey){const g=l.selectionStart;l.setSelectionRange(Math.min(k,g),Math.max(k,g),"forward")}}else a.keyCode===8&&e.reverseFillMask!==!0&&s===r?(_.left(l,s),l.setSelectionRange(l.selectionStart,r,"backward")):a.keyCode===46&&e.reverseFillMask===!0&&s===r&&(_.rightReverse(l,r),l.setSelectionRange(s,l.selectionEnd,"forward"))}function L(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return R(a);const l=f;let s=0,r="";for(let p=0;p<l.length;p++){const g=a[s],q=l[p];if(typeof q=="string")r+=q,g===q&&s++;else if(g!==void 0&&q.regex.test(g))r+=q.transform!==void 0?q.transform(g):g,s++;else return r}return r}function R(a){const l=f,s=c.indexOf(E);let r=a.length-1,p="";for(let g=l.length-1;g>=0&&r!==-1;g--){const q=l[g];let m=a[r];if(typeof q=="string")p=q+p,m===q&&r--;else if(m!==void 0&&q.regex.test(m))do p=(q.transform!==void 0?q.transform(m):m)+p,r--,m=a[r];while(s===g&&m!==void 0&&q.regex.test(m));else return p}return p}function M(a){return typeof a!="string"||w===void 0?typeof a=="number"?w(""+a):a:w(a)}function $(a){return d.length-a.length<=0?a:e.reverseFillMask===!0&&a.length!==0?d.slice(0,-a.length)+a:a+d.slice(a.length)}return{innerValue:h,hasMask:b,moveCursorForPaste:U,updateMaskValue:O,onMaskedKeydown:K,onMaskedClick:Q}}const mt={name:String};function ht(e){return y(()=>e.name||e.for)}function pt(e,t){function o(){const i=e.modelValue;try{const c="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(d=>{c.items.add(d)}),{files:c.files}}catch{return{files:void 0}}}return t===!0?y(()=>{if(e.type==="file")return o()}):y(o)}const bt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,yt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,kt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,xt=/[a-z0-9_ -]$/i;function wt(e){return function(o){if(o.type==="compositionend"||o.type==="change"){if(o.target.qComposing!==!0)return;o.target.qComposing=!1,e(o)}else o.type==="compositionupdate"&&o.target.qComposing!==!0&&typeof o.data=="string"&&(Oe.is.firefox===!0?xt.test(o.data)===!1:bt.test(o.data)===!0||yt.test(o.data)===!0||kt.test(o.data)===!0)===!0&&(o.target.qComposing=!0)}}var Ct=Ie({name:"QInput",inheritAttrs:!1,props:{...ut,...vt,...mt,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...st,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:o}){const{proxy:i}=W(),{$q:c}=i,d={};let f=NaN,w,F,k=null,b;const h=B(null),D=ht(e),{innerValue:T,hasMask:z,moveCursorForPaste:j,updateMaskValue:O,onMaskedKeydown:U,onMaskedClick:_}=gt(e,t,m,h),Q=pt(e,!0),K=y(()=>fe(T.value)),L=wt(g),R=dt({changeEvent:!0}),M=y(()=>e.type==="textarea"||e.autogrow===!0),$=y(()=>M.value===!0||["text","search","url","tel","password"].includes(e.type)),a=y(()=>{const n={...R.splitAttrs.listeners.value,onInput:g,onPaste:p,onChange:u,onBlur:v,onFocus:ge};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=L,z.value===!0&&(n.onKeydown=U,n.onClick=_),e.autogrow===!0&&(n.onAnimationend=q),n}),l=y(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:D.value,...R.splitAttrs.attributes.value,id:R.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return M.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});N(()=>e.type,()=>{h.value&&(h.value.value=e.modelValue)}),N(()=>e.modelValue,n=>{if(z.value===!0){if(F===!0&&(F=!1,String(n)===f))return;O(n)}else T.value!==n&&(T.value=n,e.type==="number"&&d.hasOwnProperty("value")===!0&&(w===!0?w=!1:delete d.value));e.autogrow===!0&&Y(x)}),N(()=>e.autogrow,n=>{n===!0?Y(x):h.value!==null&&o.rows>0&&(h.value.style.height="auto")}),N(()=>e.dense,()=>{e.autogrow===!0&&Y(x)});function s(){Me(()=>{const n=document.activeElement;h.value!==null&&h.value!==n&&(n===null||n.id!==R.targetUid.value)&&h.value.focus({preventScroll:!0})})}function r(){h.value!==null&&h.value.select()}function p(n){if(z.value===!0&&e.reverseFillMask!==!0){const A=n.target;j(A,A.selectionStart,A.selectionEnd)}t("paste",n)}function g(n){if(!n||!n.target)return;if(e.type==="file"){t("update:modelValue",n.target.files);return}const A=n.target.value;if(n.target.qComposing===!0){d.value=A;return}if(z.value===!0)O(A,!1,n.inputType);else if(m(A),$.value===!0&&n.target===document.activeElement){const{selectionStart:H,selectionEnd:Z}=n.target;H!==void 0&&Z!==void 0&&Y(()=>{n.target===document.activeElement&&A.indexOf(n.target.value)===0&&n.target.setSelectionRange(H,Z)})}e.autogrow===!0&&x()}function q(n){t("animationend",n),x()}function m(n,A){b=()=>{k=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==n&&f!==n&&(f=n,A===!0&&(F=!0),t("update:modelValue",n),Y(()=>{f===n&&(f=NaN)})),b=void 0},e.type==="number"&&(w=!0,d.value=n),e.debounce!==void 0?(k!==null&&clearTimeout(k),d.value=n,k=setTimeout(b,e.debounce)):b()}function x(){requestAnimationFrame(()=>{const n=h.value;if(n!==null){const A=n.parentNode.style,{scrollTop:H}=n,{overflowY:Z,maxHeight:I}=c.platform.is.firefox===!0?{}:window.getComputedStyle(n),J=Z!==void 0&&Z!=="scroll";J===!0&&(n.style.overflowY="hidden"),A.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.height=n.scrollHeight+"px",J===!0&&(n.style.overflowY=parseInt(I,10)<n.scrollHeight?"auto":"hidden"),A.marginBottom="",n.scrollTop=H}})}function u(n){L(n),k!==null&&(clearTimeout(k),k=null),b!==void 0&&b(),t("change",n.target.value)}function v(n){n!==void 0&&ge(n),k!==null&&(clearTimeout(k),k=null),b!==void 0&&b(),w=!1,F=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{h.value!==null&&(h.value.value=T.value!==void 0?T.value:"")})}function C(){return d.hasOwnProperty("value")===!0?d.value:T.value!==void 0?T.value:""}ae(()=>{v()}),oe(()=>{e.autogrow===!0&&x()}),Object.assign(R,{innerValue:T,fieldClass:y(()=>`q-${M.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:y(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:h,emitValue:m,hasValue:K,floatingLabel:y(()=>K.value===!0&&(e.type!=="number"||isNaN(T.value)===!1)||fe(e.displayValue)),getControl:()=>S(M.value===!0?"textarea":"input",{ref:h,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...l.value,...a.value,...e.type!=="file"?{value:C()}:Q.value}),getShadowControl:()=>S("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(M.value===!0?"":" text-no-wrap")},[S("span",{class:"invisible"},C()),S("span",e.shadowText)])});const V=ft(R);return Object.assign(i,{focus:s,select:r,getNativeElement:()=>h.value}),Ce(i,"nativeEl",()=>h.value),V}});const Mt=De({name:"IndexPage",setup(){He().dark.set(!0);const t=B(!1),o=B(""),i=B("https://dexif.com/#/nfc");async function c(){(await navigator.permissions.query({name:"nfc"})).state==="granted"&&(t.value=!0)}const d=new AbortController;d.signal.onabort=k=>{};let f=function(){},w=function(){},F=function(){};if("NDEFReader"in window){const k=new NDEFReader;w=function(){d.abort()},F=async function(){const b={recordType:"url",data:i.value};await k.write({records:[b]},{signal:d.signal})},f=async function(){await k.scan({signal:d.signal}),k.onreading=b=>{o.value+=JSON.stringify(b)+`
`;const h=b.message;for(const D of h.records)switch(o.value+="Record type:  "+D.recordType+`
`,o.value+="MIME type:    "+D.mediaType+`
`,o.value+="Record id:    "+D.id+`
`,o.value+=JSON.stringify(D)+`
`,D.recordType){case"text":break;case"url":o.value+=D.data;break}}}}return{allow:t,scan:f,abort:w,writeDexif:F,requestPermissions:c,loglist:o,url:i}},mounted(){this.requestPermissions()}});function St(e,t,o,i,c,d){return ze(),je(Qe,{class:"flex flex-center"},{default:Le(()=>[re(ve,{color:e.allow?"white":"grey",flat:"",size:"xl",icon:"mdi-nfc-variant",text:"Scan",onClick:t[0]||(t[0]=f=>e.scan())},null,8,["color"]),re(ve,{color:e.allow?"white":"grey",flat:"",size:"xl",icon:"mdi-pencil",text:"Write dexif",onClick:t[1]||(t[1]=f=>e.writeDexif())},null,8,["color"]),re(Ct,{modelValue:e.url,"onUpdate:modelValue":t[2]||(t[2]=f=>e.url=f),filled:"",type:"url",hint:"URL"},null,8,["modelValue"]),Ue(Ze("textarea",{"onUpdate:modelValue":t[3]||(t[3]=f=>e.loglist=f),style:{width:"100%","min-height":"200px"}},null,512),[[Ke,e.loglist]])]),_:1})}var Ft=Ne(Mt,[["render",St]]);export{Ft as default};
