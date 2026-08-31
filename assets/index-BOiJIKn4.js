(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const C of m.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&c(C)}).observe(document,{childList:!0,subtree:!0});function l(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(f){if(f.ep)return;f.ep=!0;const m=l(f);fetch(f.href,m)}})();var Ks={exports:{}},Lr={},Xs={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cc;function Ud(){if(cc)return Z;cc=1;var s=Symbol.for("react.element"),u=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),C=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),D=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),j=Symbol.iterator;function P(y){return y===null||typeof y!="object"?null:(y=j&&y[j]||y["@@iterator"],typeof y=="function"?y:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,I={};function b(y,R,Y){this.props=y,this.context=R,this.refs=I,this.updater=Y||$}b.prototype.isReactComponent={},b.prototype.setState=function(y,R){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,R,"setState")},b.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function q(){}q.prototype=b.prototype;function K(y,R,Y){this.props=y,this.context=R,this.refs=I,this.updater=Y||$}var X=K.prototype=new q;X.constructor=K,Q(X,b.prototype),X.isPureReactComponent=!0;var ne=Array.isArray,se=Object.prototype.hasOwnProperty,ue={current:null},ge={key:!0,ref:!0,__self:!0,__source:!0};function ke(y,R,Y){var ee,re={},ie=null,ce=null;if(R!=null)for(ee in R.ref!==void 0&&(ce=R.ref),R.key!==void 0&&(ie=""+R.key),R)se.call(R,ee)&&!ge.hasOwnProperty(ee)&&(re[ee]=R[ee]);var oe=arguments.length-2;if(oe===1)re.children=Y;else if(1<oe){for(var me=Array(oe),Ye=0;Ye<oe;Ye++)me[Ye]=arguments[Ye+2];re.children=me}if(y&&y.defaultProps)for(ee in oe=y.defaultProps,oe)re[ee]===void 0&&(re[ee]=oe[ee]);return{$$typeof:s,type:y,key:ie,ref:ce,props:re,_owner:ue.current}}function ze(y,R){return{$$typeof:s,type:y.type,key:R,ref:y.ref,props:y.props,_owner:y._owner}}function Xe(y){return typeof y=="object"&&y!==null&&y.$$typeof===s}function jt(y){var R={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(Y){return R[Y]})}var rt=/\/+/g;function Ie(y,R){return typeof y=="object"&&y!==null&&y.key!=null?jt(""+y.key):R.toString(36)}function Ue(y,R,Y,ee,re){var ie=typeof y;(ie==="undefined"||ie==="boolean")&&(y=null);var ce=!1;if(y===null)ce=!0;else switch(ie){case"string":case"number":ce=!0;break;case"object":switch(y.$$typeof){case s:case u:ce=!0}}if(ce)return ce=y,re=re(ce),y=ee===""?"."+Ie(ce,0):ee,ne(re)?(Y="",y!=null&&(Y=y.replace(rt,"$&/")+"/"),Ue(re,R,Y,"",function(Ye){return Ye})):re!=null&&(Xe(re)&&(re=ze(re,Y+(!re.key||ce&&ce.key===re.key?"":(""+re.key).replace(rt,"$&/")+"/")+y)),R.push(re)),1;if(ce=0,ee=ee===""?".":ee+":",ne(y))for(var oe=0;oe<y.length;oe++){ie=y[oe];var me=ee+Ie(ie,oe);ce+=Ue(ie,R,Y,me,re)}else if(me=P(y),typeof me=="function")for(y=me.call(y),oe=0;!(ie=y.next()).done;)ie=ie.value,me=ee+Ie(ie,oe++),ce+=Ue(ie,R,Y,me,re);else if(ie==="object")throw R=String(y),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return ce}function je(y,R,Y){if(y==null)return y;var ee=[],re=0;return Ue(y,ee,"","",function(ie){return R.call(Y,ie,re++)}),ee}function $e(y){if(y._status===-1){var R=y._result;R=R(),R.then(function(Y){(y._status===0||y._status===-1)&&(y._status=1,y._result=Y)},function(Y){(y._status===0||y._status===-1)&&(y._status=2,y._result=Y)}),y._status===-1&&(y._status=0,y._result=R)}if(y._status===1)return y._result.default;throw y._result}var we={current:null},M={transition:null},G={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:M,ReactCurrentOwner:ue};function F(){throw Error("act(...) is not supported in production builds of React.")}return Z.Children={map:je,forEach:function(y,R,Y){je(y,function(){R.apply(this,arguments)},Y)},count:function(y){var R=0;return je(y,function(){R++}),R},toArray:function(y){return je(y,function(R){return R})||[]},only:function(y){if(!Xe(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},Z.Component=b,Z.Fragment=l,Z.Profiler=f,Z.PureComponent=K,Z.StrictMode=c,Z.Suspense=S,Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,Z.act=F,Z.cloneElement=function(y,R,Y){if(y==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+y+".");var ee=Q({},y.props),re=y.key,ie=y.ref,ce=y._owner;if(R!=null){if(R.ref!==void 0&&(ie=R.ref,ce=ue.current),R.key!==void 0&&(re=""+R.key),y.type&&y.type.defaultProps)var oe=y.type.defaultProps;for(me in R)se.call(R,me)&&!ge.hasOwnProperty(me)&&(ee[me]=R[me]===void 0&&oe!==void 0?oe[me]:R[me])}var me=arguments.length-2;if(me===1)ee.children=Y;else if(1<me){oe=Array(me);for(var Ye=0;Ye<me;Ye++)oe[Ye]=arguments[Ye+2];ee.children=oe}return{$$typeof:s,type:y.type,key:re,ref:ie,props:ee,_owner:ce}},Z.createContext=function(y){return y={$$typeof:C,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},y.Provider={$$typeof:m,_context:y},y.Consumer=y},Z.createElement=ke,Z.createFactory=function(y){var R=ke.bind(null,y);return R.type=y,R},Z.createRef=function(){return{current:null}},Z.forwardRef=function(y){return{$$typeof:h,render:y}},Z.isValidElement=Xe,Z.lazy=function(y){return{$$typeof:A,_payload:{_status:-1,_result:y},_init:$e}},Z.memo=function(y,R){return{$$typeof:D,type:y,compare:R===void 0?null:R}},Z.startTransition=function(y){var R=M.transition;M.transition={};try{y()}finally{M.transition=R}},Z.unstable_act=F,Z.useCallback=function(y,R){return we.current.useCallback(y,R)},Z.useContext=function(y){return we.current.useContext(y)},Z.useDebugValue=function(){},Z.useDeferredValue=function(y){return we.current.useDeferredValue(y)},Z.useEffect=function(y,R){return we.current.useEffect(y,R)},Z.useId=function(){return we.current.useId()},Z.useImperativeHandle=function(y,R,Y){return we.current.useImperativeHandle(y,R,Y)},Z.useInsertionEffect=function(y,R){return we.current.useInsertionEffect(y,R)},Z.useLayoutEffect=function(y,R){return we.current.useLayoutEffect(y,R)},Z.useMemo=function(y,R){return we.current.useMemo(y,R)},Z.useReducer=function(y,R,Y){return we.current.useReducer(y,R,Y)},Z.useRef=function(y){return we.current.useRef(y)},Z.useState=function(y){return we.current.useState(y)},Z.useSyncExternalStore=function(y,R,Y){return we.current.useSyncExternalStore(y,R,Y)},Z.useTransition=function(){return we.current.useTransition()},Z.version="18.3.1",Z}var pc;function so(){return pc||(pc=1,Xs.exports=Ud()),Xs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dc;function $d(){if(dc)return Lr;dc=1;var s=so(),u=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,f=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function C(h,S,D){var A,j={},P=null,$=null;D!==void 0&&(P=""+D),S.key!==void 0&&(P=""+S.key),S.ref!==void 0&&($=S.ref);for(A in S)c.call(S,A)&&!m.hasOwnProperty(A)&&(j[A]=S[A]);if(h&&h.defaultProps)for(A in S=h.defaultProps,S)j[A]===void 0&&(j[A]=S[A]);return{$$typeof:u,type:h,key:P,ref:$,props:j,_owner:f.current}}return Lr.Fragment=l,Lr.jsx=C,Lr.jsxs=C,Lr}var fc;function Qd(){return fc||(fc=1,Ks.exports=$d()),Ks.exports}var d=Qd(),k=so(),Qi={},Ys={exports:{}},Ke={},Zs={exports:{}},eo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mc;function Wd(){return mc||(mc=1,(function(s){function u(M,G){var F=M.length;M.push(G);e:for(;0<F;){var y=F-1>>>1,R=M[y];if(0<f(R,G))M[y]=G,M[F]=R,F=y;else break e}}function l(M){return M.length===0?null:M[0]}function c(M){if(M.length===0)return null;var G=M[0],F=M.pop();if(F!==G){M[0]=F;e:for(var y=0,R=M.length,Y=R>>>1;y<Y;){var ee=2*(y+1)-1,re=M[ee],ie=ee+1,ce=M[ie];if(0>f(re,F))ie<R&&0>f(ce,re)?(M[y]=ce,M[ie]=F,y=ie):(M[y]=re,M[ee]=F,y=ee);else if(ie<R&&0>f(ce,F))M[y]=ce,M[ie]=F,y=ie;else break e}}return G}function f(M,G){var F=M.sortIndex-G.sortIndex;return F!==0?F:M.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;s.unstable_now=function(){return m.now()}}else{var C=Date,h=C.now();s.unstable_now=function(){return C.now()-h}}var S=[],D=[],A=1,j=null,P=3,$=!1,Q=!1,I=!1,b=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(M){for(var G=l(D);G!==null;){if(G.callback===null)c(D);else if(G.startTime<=M)c(D),G.sortIndex=G.expirationTime,u(S,G);else break;G=l(D)}}function ne(M){if(I=!1,X(M),!Q)if(l(S)!==null)Q=!0,$e(se);else{var G=l(D);G!==null&&we(ne,G.startTime-M)}}function se(M,G){Q=!1,I&&(I=!1,q(ke),ke=-1),$=!0;var F=P;try{for(X(G),j=l(S);j!==null&&(!(j.expirationTime>G)||M&&!jt());){var y=j.callback;if(typeof y=="function"){j.callback=null,P=j.priorityLevel;var R=y(j.expirationTime<=G);G=s.unstable_now(),typeof R=="function"?j.callback=R:j===l(S)&&c(S),X(G)}else c(S);j=l(S)}if(j!==null)var Y=!0;else{var ee=l(D);ee!==null&&we(ne,ee.startTime-G),Y=!1}return Y}finally{j=null,P=F,$=!1}}var ue=!1,ge=null,ke=-1,ze=5,Xe=-1;function jt(){return!(s.unstable_now()-Xe<ze)}function rt(){if(ge!==null){var M=s.unstable_now();Xe=M;var G=!0;try{G=ge(!0,M)}finally{G?Ie():(ue=!1,ge=null)}}else ue=!1}var Ie;if(typeof K=="function")Ie=function(){K(rt)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,je=Ue.port2;Ue.port1.onmessage=rt,Ie=function(){je.postMessage(null)}}else Ie=function(){b(rt,0)};function $e(M){ge=M,ue||(ue=!0,Ie())}function we(M,G){ke=b(function(){M(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(M){M.callback=null},s.unstable_continueExecution=function(){Q||$||(Q=!0,$e(se))},s.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ze=0<M?Math.floor(1e3/M):5},s.unstable_getCurrentPriorityLevel=function(){return P},s.unstable_getFirstCallbackNode=function(){return l(S)},s.unstable_next=function(M){switch(P){case 1:case 2:case 3:var G=3;break;default:G=P}var F=P;P=G;try{return M()}finally{P=F}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(M,G){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var F=P;P=M;try{return G()}finally{P=F}},s.unstable_scheduleCallback=function(M,G,F){var y=s.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?y+F:y):F=y,M){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=F+R,M={id:A++,callback:G,priorityLevel:M,startTime:F,expirationTime:R,sortIndex:-1},F>y?(M.sortIndex=F,u(D,M),l(S)===null&&M===l(D)&&(I?(q(ke),ke=-1):I=!0,we(ne,F-y))):(M.sortIndex=R,u(S,M),Q||$||(Q=!0,$e(se))),M},s.unstable_shouldYield=jt,s.unstable_wrapCallback=function(M){var G=P;return function(){var F=P;P=G;try{return M.apply(this,arguments)}finally{P=F}}}})(eo)),eo}var vc;function Vd(){return vc||(vc=1,Zs.exports=Wd()),Zs.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gc;function Gd(){if(gc)return Ke;gc=1;var s=so(),u=Vd();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,f={};function m(e,t){C(e,t),C(e+"Capture",t)}function C(e,t){for(f[e]=t,e=0;e<t.length;e++)c.add(t[e])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),S=Object.prototype.hasOwnProperty,D=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,A={},j={};function P(e){return S.call(j,e)?!0:S.call(A,e)?!1:D.test(e)?j[e]=!0:(A[e]=!0,!1)}function $(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Q(e,t,n,r){if(t===null||typeof t>"u"||$(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function I(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){b[e]=new I(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];b[t]=new I(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){b[e]=new I(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){b[e]=new I(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){b[e]=new I(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){b[e]=new I(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){b[e]=new I(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){b[e]=new I(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){b[e]=new I(e,5,!1,e.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function K(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(q,K);b[t]=new I(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(q,K);b[t]=new I(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(q,K);b[t]=new I(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){b[e]=new I(e,1,!1,e.toLowerCase(),null,!1,!1)}),b.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){b[e]=new I(e,1,!1,e.toLowerCase(),null,!0,!0)});function X(e,t,n,r){var i=b.hasOwnProperty(t)?b[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Q(t,n,i,r)&&(n=null),r||i===null?P(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ne=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,se=Symbol.for("react.element"),ue=Symbol.for("react.portal"),ge=Symbol.for("react.fragment"),ke=Symbol.for("react.strict_mode"),ze=Symbol.for("react.profiler"),Xe=Symbol.for("react.provider"),jt=Symbol.for("react.context"),rt=Symbol.for("react.forward_ref"),Ie=Symbol.for("react.suspense"),Ue=Symbol.for("react.suspense_list"),je=Symbol.for("react.memo"),$e=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),M=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var F=Object.assign,y;function R(e){if(y===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);y=t&&t[1]||""}return`
`+y+e}var Y=!1;function ee(e,t){if(!e||Y)return"";Y=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(E){var r=E}Reflect.construct(e,[],t)}else{try{t.call()}catch(E){r=E}e.call(t.prototype)}else{try{throw Error()}catch(E){r=E}e()}}catch(E){if(E&&r&&typeof E.stack=="string"){for(var i=E.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,p=a.length-1;1<=o&&0<=p&&i[o]!==a[p];)p--;for(;1<=o&&0<=p;o--,p--)if(i[o]!==a[p]){if(o!==1||p!==1)do if(o--,p--,0>p||i[o]!==a[p]){var v=`
`+i[o].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=o&&0<=p);break}}}finally{Y=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?R(e):""}function re(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function ie(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ge:return"Fragment";case ue:return"Portal";case ze:return"Profiler";case ke:return"StrictMode";case Ie:return"Suspense";case Ue:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case jt:return(e.displayName||"Context")+".Consumer";case Xe:return(e._context.displayName||"Context")+".Provider";case rt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case je:return t=e.displayName||null,t!==null?t:ie(e.type)||"Memo";case $e:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}function ce(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(t);case 8:return t===ke?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function oe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function me(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ye(e){var t=me(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ir(e){e._valueTracker||(e._valueTracker=Ye(e))}function go(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=me(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Mr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ra(e,t){var n=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ho(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=oe(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Co(e,t){t=t.checked,t!=null&&X(e,"checked",t,!1)}function ia(e,t){Co(e,t);var n=oe(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?aa(e,t.type,n):t.hasOwnProperty("defaultValue")&&aa(e,t.type,oe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function yo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function aa(e,t,n){(t!=="number"||Mr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Un=Array.isArray;function hn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+oe(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function sa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(l(92));if(Un(n)){if(1<n.length)throw Error(l(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:oe(n)}}function xo(e,t){var n=oe(t.value),r=oe(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function So(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Eo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Eo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Or,Ao=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Or=Or||document.createElement("div"),Or.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $n(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vc=["Webkit","ms","Moz","O"];Object.keys(Qn).forEach(function(e){Vc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qn[t]=Qn[e]})});function ko(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qn.hasOwnProperty(e)&&Qn[e]?(""+t).trim():t+"px"}function jo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ko(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Gc=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function la(e,t){if(t){if(Gc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function ua(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ca=null;function pa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var da=null,Cn=null,yn=null;function Do(e){if(e=fr(e)){if(typeof da!="function")throw Error(l(280));var t=e.stateNode;t&&(t=si(t),da(e.stateNode,e.type,t))}}function Lo(e){Cn?yn?yn.push(e):yn=[e]:Cn=e}function Ro(){if(Cn){var e=Cn,t=yn;if(yn=Cn=null,Do(e),t)for(e=0;e<t.length;e++)Do(t[e])}}function No(e,t){return e(t)}function Bo(){}var fa=!1;function To(e,t,n){if(fa)return e(t,n);fa=!0;try{return No(e,t,n)}finally{fa=!1,(Cn!==null||yn!==null)&&(Bo(),Ro())}}function Wn(e,t){var n=e.stateNode;if(n===null)return null;var r=si(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var ma=!1;if(h)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){ma=!0}}),window.addEventListener("test",Vn,Vn),window.removeEventListener("test",Vn,Vn)}catch{ma=!1}function Jc(e,t,n,r,i,a,o,p,v){var E=Array.prototype.slice.call(arguments,3);try{t.apply(n,E)}catch(N){this.onError(N)}}var Gn=!1,qr=null,_r=!1,va=null,Kc={onError:function(e){Gn=!0,qr=e}};function Xc(e,t,n,r,i,a,o,p,v){Gn=!1,qr=null,Jc.apply(Kc,arguments)}function Yc(e,t,n,r,i,a,o,p,v){if(Xc.apply(this,arguments),Gn){if(Gn){var E=qr;Gn=!1,qr=null}else throw Error(l(198));_r||(_r=!0,va=E)}}function nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Po(e){if(nn(e)!==e)throw Error(l(188))}function Zc(e){var t=e.alternate;if(!t){if(t=nn(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Po(i),e;if(a===r)return Po(i),t;a=a.sibling}throw Error(l(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,p=i.child;p;){if(p===n){o=!0,n=i,r=a;break}if(p===r){o=!0,r=i,n=a;break}p=p.sibling}if(!o){for(p=a.child;p;){if(p===n){o=!0,n=a,r=i;break}if(p===r){o=!0,r=a,n=i;break}p=p.sibling}if(!o)throw Error(l(189))}}if(n.alternate!==r)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function Io(e){return e=Zc(e),e!==null?Mo(e):null}function Mo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Mo(e);if(t!==null)return t;e=e.sibling}return null}var Oo=u.unstable_scheduleCallback,qo=u.unstable_cancelCallback,ep=u.unstable_shouldYield,tp=u.unstable_requestPaint,Se=u.unstable_now,np=u.unstable_getCurrentPriorityLevel,ga=u.unstable_ImmediatePriority,_o=u.unstable_UserBlockingPriority,Fr=u.unstable_NormalPriority,rp=u.unstable_LowPriority,Fo=u.unstable_IdlePriority,Hr=null,wt=null;function ip(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Hr,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:op,ap=Math.log,sp=Math.LN2;function op(e){return e>>>=0,e===0?32:31-(ap(e)/sp|0)|0}var zr=64,Ur=4194304;function Jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $r(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var p=o&~i;p!==0?r=Jn(p):(a&=o,a!==0&&(r=Jn(a)))}else o=n&~i,o!==0?r=Jn(o):a!==0&&(r=Jn(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),i=1<<n,r|=e[n],t&=~i;return r}function lp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function up(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-pt(a),p=1<<o,v=i[o];v===-1?((p&n)===0||(p&r)!==0)&&(i[o]=lp(p,t)):v<=t&&(e.expiredLanes|=p),a&=~p}}function ha(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ho(){var e=zr;return zr<<=1,(zr&4194240)===0&&(zr=64),e}function Ca(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function cp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function ya(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var le=0;function zo(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Uo,wa,$o,Qo,Wo,xa=!1,Qr=[],Ot=null,qt=null,_t=null,Xn=new Map,Yn=new Map,Ft=[],pp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vo(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":Xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yn.delete(t.pointerId)}}function Zn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=fr(t),t!==null&&wa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function dp(e,t,n,r,i){switch(t){case"focusin":return Ot=Zn(Ot,e,t,n,r,i),!0;case"dragenter":return qt=Zn(qt,e,t,n,r,i),!0;case"mouseover":return _t=Zn(_t,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Xn.set(a,Zn(Xn.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Yn.set(a,Zn(Yn.get(a)||null,e,t,n,r,i)),!0}return!1}function Go(e){var t=rn(e.target);if(t!==null){var n=nn(t);if(n!==null){if(t=n.tag,t===13){if(t=bo(n),t!==null){e.blockedOn=t,Wo(e.priority,function(){$o(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ea(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ca=r,n.target.dispatchEvent(r),ca=null}else return t=fr(n),t!==null&&wa(t),e.blockedOn=n,!1;t.shift()}return!0}function Jo(e,t,n){Wr(e)&&n.delete(t)}function fp(){xa=!1,Ot!==null&&Wr(Ot)&&(Ot=null),qt!==null&&Wr(qt)&&(qt=null),_t!==null&&Wr(_t)&&(_t=null),Xn.forEach(Jo),Yn.forEach(Jo)}function er(e,t){e.blockedOn===t&&(e.blockedOn=null,xa||(xa=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,fp)))}function tr(e){function t(i){return er(i,e)}if(0<Qr.length){er(Qr[0],e);for(var n=1;n<Qr.length;n++){var r=Qr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ot!==null&&er(Ot,e),qt!==null&&er(qt,e),_t!==null&&er(_t,e),Xn.forEach(t),Yn.forEach(t),n=0;n<Ft.length;n++)r=Ft[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ft.length&&(n=Ft[0],n.blockedOn===null);)Go(n),n.blockedOn===null&&Ft.shift()}var wn=ne.ReactCurrentBatchConfig,Vr=!0;function mp(e,t,n,r){var i=le,a=wn.transition;wn.transition=null;try{le=1,Sa(e,t,n,r)}finally{le=i,wn.transition=a}}function vp(e,t,n,r){var i=le,a=wn.transition;wn.transition=null;try{le=4,Sa(e,t,n,r)}finally{le=i,wn.transition=a}}function Sa(e,t,n,r){if(Vr){var i=Ea(e,t,n,r);if(i===null)Fa(e,t,r,Gr,n),Vo(e,r);else if(dp(i,e,t,n,r))r.stopPropagation();else if(Vo(e,r),t&4&&-1<pp.indexOf(e)){for(;i!==null;){var a=fr(i);if(a!==null&&Uo(a),a=Ea(e,t,n,r),a===null&&Fa(e,t,r,Gr,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Fa(e,t,r,null,n)}}var Gr=null;function Ea(e,t,n,r){if(Gr=null,e=pa(r),e=rn(e),e!==null)if(t=nn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bo(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gr=e,null}function Ko(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(np()){case ga:return 1;case _o:return 4;case Fr:case rp:return 16;case Fo:return 536870912;default:return 16}default:return 16}}var Ht=null,Aa=null,Jr=null;function Xo(){if(Jr)return Jr;var e,t=Aa,n=t.length,r,i="value"in Ht?Ht.value:Ht.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Jr=i.slice(e,1<r?1-r:void 0)}function Kr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xr(){return!0}function Yo(){return!1}function Ze(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(a):a[p]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Xr:Yo,this.isPropagationStopped=Yo,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xr)},persist:function(){},isPersistent:Xr}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ka=Ze(xn),nr=F({},xn,{view:0,detail:0}),gp=Ze(nr),ja,Da,rr,Yr=F({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ra,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rr&&(rr&&e.type==="mousemove"?(ja=e.screenX-rr.screenX,Da=e.screenY-rr.screenY):Da=ja=0,rr=e),ja)},movementY:function(e){return"movementY"in e?e.movementY:Da}}),Zo=Ze(Yr),hp=F({},Yr,{dataTransfer:0}),Cp=Ze(hp),yp=F({},nr,{relatedTarget:0}),La=Ze(yp),wp=F({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),xp=Ze(wp),Sp=F({},xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ep=Ze(Sp),Ap=F({},xn,{data:0}),el=Ze(Ap),kp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Dp[e])?!!t[e]:!1}function Ra(){return Lp}var Rp=F({},nr,{key:function(e){if(e.key){var t=kp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Kr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ra,charCode:function(e){return e.type==="keypress"?Kr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Np=Ze(Rp),Bp=F({},Yr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tl=Ze(Bp),Tp=F({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ra}),bp=Ze(Tp),Pp=F({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ip=Ze(Pp),Mp=F({},Yr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Op=Ze(Mp),qp=[9,13,27,32],Na=h&&"CompositionEvent"in window,ir=null;h&&"documentMode"in document&&(ir=document.documentMode);var _p=h&&"TextEvent"in window&&!ir,nl=h&&(!Na||ir&&8<ir&&11>=ir),rl=" ",il=!1;function al(e,t){switch(e){case"keyup":return qp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function Fp(e,t){switch(e){case"compositionend":return sl(t);case"keypress":return t.which!==32?null:(il=!0,rl);case"textInput":return e=t.data,e===rl&&il?null:e;default:return null}}function Hp(e,t){if(Sn)return e==="compositionend"||!Na&&al(e,t)?(e=Xo(),Jr=Aa=Ht=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nl&&t.locale!=="ko"?null:t.data;default:return null}}var zp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zp[e.type]:t==="textarea"}function ll(e,t,n,r){Lo(r),t=ri(t,"onChange"),0<t.length&&(n=new ka("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ar=null,sr=null;function Up(e){jl(e,0)}function Zr(e){var t=Dn(e);if(go(t))return e}function $p(e,t){if(e==="change")return t}var ul=!1;if(h){var Ba;if(h){var Ta="oninput"in document;if(!Ta){var cl=document.createElement("div");cl.setAttribute("oninput","return;"),Ta=typeof cl.oninput=="function"}Ba=Ta}else Ba=!1;ul=Ba&&(!document.documentMode||9<document.documentMode)}function pl(){ar&&(ar.detachEvent("onpropertychange",dl),sr=ar=null)}function dl(e){if(e.propertyName==="value"&&Zr(sr)){var t=[];ll(t,sr,e,pa(e)),To(Up,t)}}function Qp(e,t,n){e==="focusin"?(pl(),ar=t,sr=n,ar.attachEvent("onpropertychange",dl)):e==="focusout"&&pl()}function Wp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zr(sr)}function Vp(e,t){if(e==="click")return Zr(t)}function Gp(e,t){if(e==="input"||e==="change")return Zr(t)}function Jp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dt=typeof Object.is=="function"?Object.is:Jp;function or(e,t){if(dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!S.call(t,i)||!dt(e[i],t[i]))return!1}return!0}function fl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ml(e,t){var n=fl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fl(n)}}function vl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gl(){for(var e=window,t=Mr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mr(e.document)}return t}function ba(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Kp(e){var t=gl(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vl(n.ownerDocument.documentElement,n)){if(r!==null&&ba(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=ml(n,a);var o=ml(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xp=h&&"documentMode"in document&&11>=document.documentMode,En=null,Pa=null,lr=null,Ia=!1;function hl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ia||En==null||En!==Mr(r)||(r=En,"selectionStart"in r&&ba(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lr&&or(lr,r)||(lr=r,r=ri(Pa,"onSelect"),0<r.length&&(t=new ka("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var An={animationend:ei("Animation","AnimationEnd"),animationiteration:ei("Animation","AnimationIteration"),animationstart:ei("Animation","AnimationStart"),transitionend:ei("Transition","TransitionEnd")},Ma={},Cl={};h&&(Cl=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function ti(e){if(Ma[e])return Ma[e];if(!An[e])return e;var t=An[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cl)return Ma[e]=t[n];return e}var yl=ti("animationend"),wl=ti("animationiteration"),xl=ti("animationstart"),Sl=ti("transitionend"),El=new Map,Al="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zt(e,t){El.set(e,t),m(t,[e])}for(var Oa=0;Oa<Al.length;Oa++){var qa=Al[Oa],Yp=qa.toLowerCase(),Zp=qa[0].toUpperCase()+qa.slice(1);zt(Yp,"on"+Zp)}zt(yl,"onAnimationEnd"),zt(wl,"onAnimationIteration"),zt(xl,"onAnimationStart"),zt("dblclick","onDoubleClick"),zt("focusin","onFocus"),zt("focusout","onBlur"),zt(Sl,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ed=new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));function kl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yc(r,t,void 0,e),e.currentTarget=null}function jl(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var p=r[o],v=p.instance,E=p.currentTarget;if(p=p.listener,v!==a&&i.isPropagationStopped())break e;kl(i,p,E),a=v}else for(o=0;o<r.length;o++){if(p=r[o],v=p.instance,E=p.currentTarget,p=p.listener,v!==a&&i.isPropagationStopped())break e;kl(i,p,E),a=v}}}if(_r)throw e=va,_r=!1,va=null,e}function de(e,t){var n=t[Wa];n===void 0&&(n=t[Wa]=new Set);var r=e+"__bubble";n.has(r)||(Dl(t,e,2,!1),n.add(r))}function _a(e,t,n){var r=0;t&&(r|=4),Dl(n,e,r,t)}var ni="_reactListening"+Math.random().toString(36).slice(2);function cr(e){if(!e[ni]){e[ni]=!0,c.forEach(function(n){n!=="selectionchange"&&(ed.has(n)||_a(n,!1,e),_a(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ni]||(t[ni]=!0,_a("selectionchange",!1,t))}}function Dl(e,t,n,r){switch(Ko(t)){case 1:var i=mp;break;case 4:i=vp;break;default:i=Sa}n=i.bind(null,t,n,e),i=void 0,!ma||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Fa(e,t,n,r,i){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var p=r.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var v=o.tag;if((v===3||v===4)&&(v=o.stateNode.containerInfo,v===i||v.nodeType===8&&v.parentNode===i))return;o=o.return}for(;p!==null;){if(o=rn(p),o===null)return;if(v=o.tag,v===5||v===6){r=a=o;continue e}p=p.parentNode}}r=r.return}To(function(){var E=a,N=pa(n),B=[];e:{var L=El.get(e);if(L!==void 0){var O=ka,H=e;switch(e){case"keypress":if(Kr(n)===0)break e;case"keydown":case"keyup":O=Np;break;case"focusin":H="focus",O=La;break;case"focusout":H="blur",O=La;break;case"beforeblur":case"afterblur":O=La;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=Cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=bp;break;case yl:case wl:case xl:O=xp;break;case Sl:O=Ip;break;case"scroll":O=gp;break;case"wheel":O=Op;break;case"copy":case"cut":case"paste":O=Ep;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=tl}var z=(t&4)!==0,Ee=!z&&e==="scroll",w=z?L!==null?L+"Capture":null:L;z=[];for(var g=E,x;g!==null;){x=g;var T=x.stateNode;if(x.tag===5&&T!==null&&(x=T,w!==null&&(T=Wn(g,w),T!=null&&z.push(pr(g,T,x)))),Ee)break;g=g.return}0<z.length&&(L=new O(L,H,null,n,N),B.push({event:L,listeners:z}))}}if((t&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",L&&n!==ca&&(H=n.relatedTarget||n.fromElement)&&(rn(H)||H[Dt]))break e;if((O||L)&&(L=N.window===N?N:(L=N.ownerDocument)?L.defaultView||L.parentWindow:window,O?(H=n.relatedTarget||n.toElement,O=E,H=H?rn(H):null,H!==null&&(Ee=nn(H),H!==Ee||H.tag!==5&&H.tag!==6)&&(H=null)):(O=null,H=E),O!==H)){if(z=Zo,T="onMouseLeave",w="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(z=tl,T="onPointerLeave",w="onPointerEnter",g="pointer"),Ee=O==null?L:Dn(O),x=H==null?L:Dn(H),L=new z(T,g+"leave",O,n,N),L.target=Ee,L.relatedTarget=x,T=null,rn(N)===E&&(z=new z(w,g+"enter",H,n,N),z.target=x,z.relatedTarget=Ee,T=z),Ee=T,O&&H)t:{for(z=O,w=H,g=0,x=z;x;x=kn(x))g++;for(x=0,T=w;T;T=kn(T))x++;for(;0<g-x;)z=kn(z),g--;for(;0<x-g;)w=kn(w),x--;for(;g--;){if(z===w||w!==null&&z===w.alternate)break t;z=kn(z),w=kn(w)}z=null}else z=null;O!==null&&Ll(B,L,O,z,!1),H!==null&&Ee!==null&&Ll(B,Ee,H,z,!0)}}e:{if(L=E?Dn(E):window,O=L.nodeName&&L.nodeName.toLowerCase(),O==="select"||O==="input"&&L.type==="file")var U=$p;else if(ol(L))if(ul)U=Gp;else{U=Wp;var W=Qp}else(O=L.nodeName)&&O.toLowerCase()==="input"&&(L.type==="checkbox"||L.type==="radio")&&(U=Vp);if(U&&(U=U(e,E))){ll(B,U,n,N);break e}W&&W(e,L,E),e==="focusout"&&(W=L._wrapperState)&&W.controlled&&L.type==="number"&&aa(L,"number",L.value)}switch(W=E?Dn(E):window,e){case"focusin":(ol(W)||W.contentEditable==="true")&&(En=W,Pa=E,lr=null);break;case"focusout":lr=Pa=En=null;break;case"mousedown":Ia=!0;break;case"contextmenu":case"mouseup":case"dragend":Ia=!1,hl(B,n,N);break;case"selectionchange":if(Xp)break;case"keydown":case"keyup":hl(B,n,N)}var V;if(Na)e:{switch(e){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else Sn?al(e,n)&&(J="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(J="onCompositionStart");J&&(nl&&n.locale!=="ko"&&(Sn||J!=="onCompositionStart"?J==="onCompositionEnd"&&Sn&&(V=Xo()):(Ht=N,Aa="value"in Ht?Ht.value:Ht.textContent,Sn=!0)),W=ri(E,J),0<W.length&&(J=new el(J,e,null,n,N),B.push({event:J,listeners:W}),V?J.data=V:(V=sl(n),V!==null&&(J.data=V)))),(V=_p?Fp(e,n):Hp(e,n))&&(E=ri(E,"onBeforeInput"),0<E.length&&(N=new el("onBeforeInput","beforeinput",null,n,N),B.push({event:N,listeners:E}),N.data=V))}jl(B,t)})}function pr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ri(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Wn(e,n),a!=null&&r.unshift(pr(e,a,i)),a=Wn(e,t),a!=null&&r.push(pr(e,a,i))),e=e.return}return r}function kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ll(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var p=n,v=p.alternate,E=p.stateNode;if(v!==null&&v===r)break;p.tag===5&&E!==null&&(p=E,i?(v=Wn(n,a),v!=null&&o.unshift(pr(n,v,p))):i||(v=Wn(n,a),v!=null&&o.push(pr(n,v,p)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var td=/\r\n?/g,nd=/\u0000|\uFFFD/g;function Rl(e){return(typeof e=="string"?e:""+e).replace(td,`
`).replace(nd,"")}function ii(e,t,n){if(t=Rl(t),Rl(e)!==t&&n)throw Error(l(425))}function ai(){}var Ha=null,za=null;function Ua(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $a=typeof setTimeout=="function"?setTimeout:void 0,rd=typeof clearTimeout=="function"?clearTimeout:void 0,Nl=typeof Promise=="function"?Promise:void 0,id=typeof queueMicrotask=="function"?queueMicrotask:typeof Nl<"u"?function(e){return Nl.resolve(null).then(e).catch(ad)}:$a;function ad(e){setTimeout(function(){throw e})}function Qa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);tr(t)}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jn=Math.random().toString(36).slice(2),xt="__reactFiber$"+jn,dr="__reactProps$"+jn,Dt="__reactContainer$"+jn,Wa="__reactEvents$"+jn,sd="__reactListeners$"+jn,od="__reactHandles$"+jn;function rn(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dt]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bl(e);e!==null;){if(n=e[xt])return n;e=Bl(e)}return t}e=n,n=e.parentNode}return null}function fr(e){return e=e[xt]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function si(e){return e[dr]||null}var Va=[],Ln=-1;function $t(e){return{current:e}}function fe(e){0>Ln||(e.current=Va[Ln],Va[Ln]=null,Ln--)}function pe(e,t){Ln++,Va[Ln]=e.current,e.current=t}var Qt={},Me=$t(Qt),Qe=$t(!1),an=Qt;function Rn(e,t){var n=e.type.contextTypes;if(!n)return Qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function We(e){return e=e.childContextTypes,e!=null}function oi(){fe(Qe),fe(Me)}function Tl(e,t,n){if(Me.current!==Qt)throw Error(l(168));pe(Me,t),pe(Qe,n)}function bl(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(l(108,ce(e)||"Unknown",i));return F({},n,r)}function li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qt,an=Me.current,pe(Me,e),pe(Qe,Qe.current),!0}function Pl(e,t,n){var r=e.stateNode;if(!r)throw Error(l(169));n?(e=bl(e,t,an),r.__reactInternalMemoizedMergedChildContext=e,fe(Qe),fe(Me),pe(Me,e)):fe(Qe),pe(Qe,n)}var Lt=null,ui=!1,Ga=!1;function Il(e){Lt===null?Lt=[e]:Lt.push(e)}function ld(e){ui=!0,Il(e)}function Wt(){if(!Ga&&Lt!==null){Ga=!0;var e=0,t=le;try{var n=Lt;for(le=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Lt=null,ui=!1}catch(i){throw Lt!==null&&(Lt=Lt.slice(e+1)),Oo(ga,Wt),i}finally{le=t,Ga=!1}}return null}var Nn=[],Bn=0,ci=null,pi=0,it=[],at=0,sn=null,Rt=1,Nt="";function on(e,t){Nn[Bn++]=pi,Nn[Bn++]=ci,ci=e,pi=t}function Ml(e,t,n){it[at++]=Rt,it[at++]=Nt,it[at++]=sn,sn=e;var r=Rt;e=Nt;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var a=32-pt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rt=1<<32-pt(t)+i|n<<i|r,Nt=a+e}else Rt=1<<a|n<<i|r,Nt=e}function Ja(e){e.return!==null&&(on(e,1),Ml(e,1,0))}function Ka(e){for(;e===ci;)ci=Nn[--Bn],Nn[Bn]=null,pi=Nn[--Bn],Nn[Bn]=null;for(;e===sn;)sn=it[--at],it[at]=null,Nt=it[--at],it[at]=null,Rt=it[--at],it[at]=null}var et=null,tt=null,ve=!1,ft=null;function Ol(e,t){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ql(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,tt=Ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=sn!==null?{id:Rt,overflow:Nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,tt=null,!0):!1;default:return!1}}function Xa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ya(e){if(ve){var t=tt;if(t){var n=t;if(!ql(e,t)){if(Xa(e))throw Error(l(418));t=Ut(n.nextSibling);var r=et;t&&ql(e,t)?Ol(r,n):(e.flags=e.flags&-4097|2,ve=!1,et=e)}}else{if(Xa(e))throw Error(l(418));e.flags=e.flags&-4097|2,ve=!1,et=e}}}function _l(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function di(e){if(e!==et)return!1;if(!ve)return _l(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ua(e.type,e.memoizedProps)),t&&(t=tt)){if(Xa(e))throw Fl(),Error(l(418));for(;t;)Ol(e,t),t=Ut(t.nextSibling)}if(_l(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=et?Ut(e.stateNode.nextSibling):null;return!0}function Fl(){for(var e=tt;e;)e=Ut(e.nextSibling)}function Tn(){tt=et=null,ve=!1}function Za(e){ft===null?ft=[e]:ft.push(e)}var ud=ne.ReactCurrentBatchConfig;function mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var r=n.stateNode}if(!r)throw Error(l(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var p=i.refs;o===null?delete p[a]:p[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function fi(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hl(e){var t=e._init;return t(e._payload)}function zl(e){function t(w,g){if(e){var x=w.deletions;x===null?(w.deletions=[g],w.flags|=16):x.push(g)}}function n(w,g){if(!e)return null;for(;g!==null;)t(w,g),g=g.sibling;return null}function r(w,g){for(w=new Map;g!==null;)g.key!==null?w.set(g.key,g):w.set(g.index,g),g=g.sibling;return w}function i(w,g){return w=en(w,g),w.index=0,w.sibling=null,w}function a(w,g,x){return w.index=x,e?(x=w.alternate,x!==null?(x=x.index,x<g?(w.flags|=2,g):x):(w.flags|=2,g)):(w.flags|=1048576,g)}function o(w){return e&&w.alternate===null&&(w.flags|=2),w}function p(w,g,x,T){return g===null||g.tag!==6?(g=$s(x,w.mode,T),g.return=w,g):(g=i(g,x),g.return=w,g)}function v(w,g,x,T){var U=x.type;return U===ge?N(w,g,x.props.children,T,x.key):g!==null&&(g.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===$e&&Hl(U)===g.type)?(T=i(g,x.props),T.ref=mr(w,g,x),T.return=w,T):(T=Oi(x.type,x.key,x.props,null,w.mode,T),T.ref=mr(w,g,x),T.return=w,T)}function E(w,g,x,T){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Qs(x,w.mode,T),g.return=w,g):(g=i(g,x.children||[]),g.return=w,g)}function N(w,g,x,T,U){return g===null||g.tag!==7?(g=vn(x,w.mode,T,U),g.return=w,g):(g=i(g,x),g.return=w,g)}function B(w,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=$s(""+g,w.mode,x),g.return=w,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case se:return x=Oi(g.type,g.key,g.props,null,w.mode,x),x.ref=mr(w,null,g),x.return=w,x;case ue:return g=Qs(g,w.mode,x),g.return=w,g;case $e:var T=g._init;return B(w,T(g._payload),x)}if(Un(g)||G(g))return g=vn(g,w.mode,x,null),g.return=w,g;fi(w,g)}return null}function L(w,g,x,T){var U=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return U!==null?null:p(w,g,""+x,T);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case se:return x.key===U?v(w,g,x,T):null;case ue:return x.key===U?E(w,g,x,T):null;case $e:return U=x._init,L(w,g,U(x._payload),T)}if(Un(x)||G(x))return U!==null?null:N(w,g,x,T,null);fi(w,x)}return null}function O(w,g,x,T,U){if(typeof T=="string"&&T!==""||typeof T=="number")return w=w.get(x)||null,p(g,w,""+T,U);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case se:return w=w.get(T.key===null?x:T.key)||null,v(g,w,T,U);case ue:return w=w.get(T.key===null?x:T.key)||null,E(g,w,T,U);case $e:var W=T._init;return O(w,g,x,W(T._payload),U)}if(Un(T)||G(T))return w=w.get(x)||null,N(g,w,T,U,null);fi(g,T)}return null}function H(w,g,x,T){for(var U=null,W=null,V=g,J=g=0,Be=null;V!==null&&J<x.length;J++){V.index>J?(Be=V,V=null):Be=V.sibling;var ae=L(w,V,x[J],T);if(ae===null){V===null&&(V=Be);break}e&&V&&ae.alternate===null&&t(w,V),g=a(ae,g,J),W===null?U=ae:W.sibling=ae,W=ae,V=Be}if(J===x.length)return n(w,V),ve&&on(w,J),U;if(V===null){for(;J<x.length;J++)V=B(w,x[J],T),V!==null&&(g=a(V,g,J),W===null?U=V:W.sibling=V,W=V);return ve&&on(w,J),U}for(V=r(w,V);J<x.length;J++)Be=O(V,w,J,x[J],T),Be!==null&&(e&&Be.alternate!==null&&V.delete(Be.key===null?J:Be.key),g=a(Be,g,J),W===null?U=Be:W.sibling=Be,W=Be);return e&&V.forEach(function(tn){return t(w,tn)}),ve&&on(w,J),U}function z(w,g,x,T){var U=G(x);if(typeof U!="function")throw Error(l(150));if(x=U.call(x),x==null)throw Error(l(151));for(var W=U=null,V=g,J=g=0,Be=null,ae=x.next();V!==null&&!ae.done;J++,ae=x.next()){V.index>J?(Be=V,V=null):Be=V.sibling;var tn=L(w,V,ae.value,T);if(tn===null){V===null&&(V=Be);break}e&&V&&tn.alternate===null&&t(w,V),g=a(tn,g,J),W===null?U=tn:W.sibling=tn,W=tn,V=Be}if(ae.done)return n(w,V),ve&&on(w,J),U;if(V===null){for(;!ae.done;J++,ae=x.next())ae=B(w,ae.value,T),ae!==null&&(g=a(ae,g,J),W===null?U=ae:W.sibling=ae,W=ae);return ve&&on(w,J),U}for(V=r(w,V);!ae.done;J++,ae=x.next())ae=O(V,w,J,ae.value,T),ae!==null&&(e&&ae.alternate!==null&&V.delete(ae.key===null?J:ae.key),g=a(ae,g,J),W===null?U=ae:W.sibling=ae,W=ae);return e&&V.forEach(function(zd){return t(w,zd)}),ve&&on(w,J),U}function Ee(w,g,x,T){if(typeof x=="object"&&x!==null&&x.type===ge&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case se:e:{for(var U=x.key,W=g;W!==null;){if(W.key===U){if(U=x.type,U===ge){if(W.tag===7){n(w,W.sibling),g=i(W,x.props.children),g.return=w,w=g;break e}}else if(W.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===$e&&Hl(U)===W.type){n(w,W.sibling),g=i(W,x.props),g.ref=mr(w,W,x),g.return=w,w=g;break e}n(w,W);break}else t(w,W);W=W.sibling}x.type===ge?(g=vn(x.props.children,w.mode,T,x.key),g.return=w,w=g):(T=Oi(x.type,x.key,x.props,null,w.mode,T),T.ref=mr(w,g,x),T.return=w,w=T)}return o(w);case ue:e:{for(W=x.key;g!==null;){if(g.key===W)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(w,g.sibling),g=i(g,x.children||[]),g.return=w,w=g;break e}else{n(w,g);break}else t(w,g);g=g.sibling}g=Qs(x,w.mode,T),g.return=w,w=g}return o(w);case $e:return W=x._init,Ee(w,g,W(x._payload),T)}if(Un(x))return H(w,g,x,T);if(G(x))return z(w,g,x,T);fi(w,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(w,g.sibling),g=i(g,x),g.return=w,w=g):(n(w,g),g=$s(x,w.mode,T),g.return=w,w=g),o(w)):n(w,g)}return Ee}var bn=zl(!0),Ul=zl(!1),mi=$t(null),vi=null,Pn=null,es=null;function ts(){es=Pn=vi=null}function ns(e){var t=mi.current;fe(mi),e._currentValue=t}function rs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function In(e,t){vi=e,es=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ve=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(es!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(vi===null)throw Error(l(308));Pn=e,vi.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var ln=null;function is(e){ln===null?ln=[e]:ln.push(e)}function $l(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,is(t)):(n.next=i.next,i.next=n),t.interleaved=n,Bt(e,r)}function Bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Vt=!1;function as(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ql(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(te&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Bt(e,n)}return i=r.interleaved,i===null?(t.next=t,is(r)):(t.next=i.next,i.next=t),r.interleaved=t,Bt(e,n)}function gi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ya(e,n)}}function Wl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function hi(e,t,n,r){var i=e.updateQueue;Vt=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var v=p,E=v.next;v.next=null,o===null?a=E:o.next=E,o=v;var N=e.alternate;N!==null&&(N=N.updateQueue,p=N.lastBaseUpdate,p!==o&&(p===null?N.firstBaseUpdate=E:p.next=E,N.lastBaseUpdate=v))}if(a!==null){var B=i.baseState;o=0,N=E=v=null,p=a;do{var L=p.lane,O=p.eventTime;if((r&L)===L){N!==null&&(N=N.next={eventTime:O,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var H=e,z=p;switch(L=t,O=n,z.tag){case 1:if(H=z.payload,typeof H=="function"){B=H.call(O,B,L);break e}B=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=z.payload,L=typeof H=="function"?H.call(O,B,L):H,L==null)break e;B=F({},B,L);break e;case 2:Vt=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,L=i.effects,L===null?i.effects=[p]:L.push(p))}else O={eventTime:O,lane:L,tag:p.tag,payload:p.payload,callback:p.callback,next:null},N===null?(E=N=O,v=B):N=N.next=O,o|=L;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;L=p,p=L.next,L.next=null,i.lastBaseUpdate=L,i.shared.pending=null}}while(!0);if(N===null&&(v=B),i.baseState=v,i.firstBaseUpdate=E,i.lastBaseUpdate=N,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);pn|=o,e.lanes=o,e.memoizedState=B}}function Vl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(l(191,i));i.call(r)}}}var vr={},St=$t(vr),gr=$t(vr),hr=$t(vr);function un(e){if(e===vr)throw Error(l(174));return e}function ss(e,t){switch(pe(hr,t),pe(gr,e),pe(St,vr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:oa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=oa(t,e)}fe(St),pe(St,t)}function Mn(){fe(St),fe(gr),fe(hr)}function Gl(e){un(hr.current);var t=un(St.current),n=oa(t,e.type);t!==n&&(pe(gr,e),pe(St,n))}function os(e){gr.current===e&&(fe(St),fe(gr))}var he=$t(0);function Ci(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ls=[];function us(){for(var e=0;e<ls.length;e++)ls[e]._workInProgressVersionPrimary=null;ls.length=0}var yi=ne.ReactCurrentDispatcher,cs=ne.ReactCurrentBatchConfig,cn=0,Ce=null,De=null,Re=null,wi=!1,Cr=!1,yr=0,cd=0;function Oe(){throw Error(l(321))}function ps(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!dt(e[n],t[n]))return!1;return!0}function ds(e,t,n,r,i,a){if(cn=a,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,yi.current=e===null||e.memoizedState===null?md:vd,e=n(r,i),Cr){a=0;do{if(Cr=!1,yr=0,25<=a)throw Error(l(301));a+=1,Re=De=null,t.updateQueue=null,yi.current=gd,e=n(r,i)}while(Cr)}if(yi.current=Ei,t=De!==null&&De.next!==null,cn=0,Re=De=Ce=null,wi=!1,t)throw Error(l(300));return e}function fs(){var e=yr!==0;return yr=0,e}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?Ce.memoizedState=Re=e:Re=Re.next=e,Re}function ot(){if(De===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Re===null?Ce.memoizedState:Re.next;if(t!==null)Re=t,De=e;else{if(e===null)throw Error(l(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Re===null?Ce.memoizedState=Re=e:Re=Re.next=e}return Re}function wr(e,t){return typeof t=="function"?t(e):t}function ms(e){var t=ot(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=De,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var p=o=null,v=null,E=a;do{var N=E.lane;if((cn&N)===N)v!==null&&(v=v.next={lane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),r=E.hasEagerState?E.eagerState:e(r,E.action);else{var B={lane:N,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null};v===null?(p=v=B,o=r):v=v.next=B,Ce.lanes|=N,pn|=N}E=E.next}while(E!==null&&E!==a);v===null?o=r:v.next=p,dt(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=v,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Ce.lanes|=a,pn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vs(e){var t=ot(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);dt(a,t.memoizedState)||(Ve=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Jl(){}function Kl(e,t){var n=Ce,r=ot(),i=t(),a=!dt(r.memoizedState,i);if(a&&(r.memoizedState=i,Ve=!0),r=r.queue,gs(Zl.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,xr(9,Yl.bind(null,n,r,i,t),void 0,null),Ne===null)throw Error(l(349));(cn&30)!==0||Xl(n,t,i)}return i}function Xl(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yl(e,t,n,r){t.value=n,t.getSnapshot=r,eu(t)&&tu(e)}function Zl(e,t,n){return n(function(){eu(t)&&tu(e)})}function eu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!dt(e,n)}catch{return!0}}function tu(e){var t=Bt(e,1);t!==null&&ht(t,e,1,-1)}function nu(e){var t=Et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:e},t.queue=e,e=e.dispatch=fd.bind(null,Ce,e),[t.memoizedState,e]}function xr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ru(){return ot().memoizedState}function xi(e,t,n,r){var i=Et();Ce.flags|=e,i.memoizedState=xr(1|t,n,void 0,r===void 0?null:r)}function Si(e,t,n,r){var i=ot();r=r===void 0?null:r;var a=void 0;if(De!==null){var o=De.memoizedState;if(a=o.destroy,r!==null&&ps(r,o.deps)){i.memoizedState=xr(t,n,a,r);return}}Ce.flags|=e,i.memoizedState=xr(1|t,n,a,r)}function iu(e,t){return xi(8390656,8,e,t)}function gs(e,t){return Si(2048,8,e,t)}function au(e,t){return Si(4,2,e,t)}function su(e,t){return Si(4,4,e,t)}function ou(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lu(e,t,n){return n=n!=null?n.concat([e]):null,Si(4,4,ou.bind(null,t,e),n)}function hs(){}function uu(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ps(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cu(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ps(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function pu(e,t,n){return(cn&21)===0?(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n):(dt(n,t)||(n=Ho(),Ce.lanes|=n,pn|=n,e.baseState=!0),t)}function pd(e,t){var n=le;le=n!==0&&4>n?n:4,e(!0);var r=cs.transition;cs.transition={};try{e(!1),t()}finally{le=n,cs.transition=r}}function du(){return ot().memoizedState}function dd(e,t,n){var r=Yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fu(e))mu(t,n);else if(n=$l(e,t,n,r),n!==null){var i=He();ht(n,e,r,i),vu(n,t,r)}}function fd(e,t,n){var r=Yt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fu(e))mu(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,p=a(o,n);if(i.hasEagerState=!0,i.eagerState=p,dt(p,o)){var v=t.interleaved;v===null?(i.next=i,is(t)):(i.next=v.next,v.next=i),t.interleaved=i;return}}catch{}finally{}n=$l(e,t,i,r),n!==null&&(i=He(),ht(n,e,r,i),vu(n,t,r))}}function fu(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function mu(e,t){Cr=wi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ya(e,n)}}var Ei={readContext:st,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},md={readContext:st,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:iu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,xi(4194308,4,ou.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xi(4194308,4,e,t)},useInsertionEffect:function(e,t){return xi(4,2,e,t)},useMemo:function(e,t){var n=Et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=dd.bind(null,Ce,e),[r.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:nu,useDebugValue:hs,useDeferredValue:function(e){return Et().memoizedState=e},useTransition:function(){var e=nu(!1),t=e[0];return e=pd.bind(null,e[1]),Et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ce,i=Et();if(ve){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Ne===null)throw Error(l(349));(cn&30)!==0||Xl(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,iu(Zl.bind(null,r,a,e),[e]),r.flags|=2048,xr(9,Yl.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Et(),t=Ne.identifierPrefix;if(ve){var n=Nt,r=Rt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=yr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=cd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},vd={readContext:st,useCallback:uu,useContext:st,useEffect:gs,useImperativeHandle:lu,useInsertionEffect:au,useLayoutEffect:su,useMemo:cu,useReducer:ms,useRef:ru,useState:function(){return ms(wr)},useDebugValue:hs,useDeferredValue:function(e){var t=ot();return pu(t,De.memoizedState,e)},useTransition:function(){var e=ms(wr)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Jl,useSyncExternalStore:Kl,useId:du,unstable_isNewReconciler:!1},gd={readContext:st,useCallback:uu,useContext:st,useEffect:gs,useImperativeHandle:lu,useInsertionEffect:au,useLayoutEffect:su,useMemo:cu,useReducer:vs,useRef:ru,useState:function(){return vs(wr)},useDebugValue:hs,useDeferredValue:function(e){var t=ot();return De===null?t.memoizedState=e:pu(t,De.memoizedState,e)},useTransition:function(){var e=vs(wr)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Jl,useSyncExternalStore:Kl,useId:du,unstable_isNewReconciler:!1};function mt(e,t){if(e&&e.defaultProps){t=F({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Cs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:F({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ai={isMounted:function(e){return(e=e._reactInternals)?nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=He(),i=Yt(e),a=Tt(r,i);a.payload=t,n!=null&&(a.callback=n),t=Gt(e,a,i),t!==null&&(ht(t,e,i,r),gi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=He(),i=Yt(e),a=Tt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Gt(e,a,i),t!==null&&(ht(t,e,i,r),gi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),r=Yt(e),i=Tt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Gt(e,i,r),t!==null&&(ht(t,e,r,n),gi(t,e,r))}};function gu(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!or(n,r)||!or(i,a):!0}function hu(e,t,n){var r=!1,i=Qt,a=t.contextType;return typeof a=="object"&&a!==null?a=st(a):(i=We(t)?an:Me.current,r=t.contextTypes,a=(r=r!=null)?Rn(e,i):Qt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ai,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Cu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ai.enqueueReplaceState(t,t.state,null)}function ys(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},as(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=st(a):(a=We(t)?an:Me.current,i.context=Rn(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Cs(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ai.enqueueReplaceState(i,i.state,null),hi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function On(e,t){try{var n="",r=t;do n+=re(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function ws(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hd=typeof WeakMap=="function"?WeakMap:Map;function yu(e,t,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Bi||(Bi=!0,Ms=r),xs(e,t)},n}function wu(e,t,n){n=Tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){xs(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){xs(e,t),typeof r!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function xu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hd;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Bd.bind(null,e,t,n),t.then(e,e))}function Su(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Eu(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tt(-1,1),t.tag=2,Gt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Cd=ne.ReactCurrentOwner,Ve=!1;function Fe(e,t,n,r){t.child=e===null?Ul(t,null,n,r):bn(t,e.child,n,r)}function Au(e,t,n,r,i){n=n.render;var a=t.ref;return In(t,i),r=ds(e,t,n,r,a,i),n=fs(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,bt(e,t,i)):(ve&&n&&Ja(t),t.flags|=1,Fe(e,t,r,i),t.child)}function ku(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Us(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,ju(e,t,a,r,i)):(e=Oi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:or,n(o,r)&&e.ref===t.ref)return bt(e,t,i)}return t.flags|=1,e=en(a,r),e.ref=t.ref,e.return=t,t.child=e}function ju(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(or(a,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=a,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Ve=!0);else return t.lanes=e.lanes,bt(e,t,i)}return Ss(e,t,n,r,i)}function Du(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(_n,nt),nt|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,pe(_n,nt),nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,pe(_n,nt),nt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,pe(_n,nt),nt|=r;return Fe(e,t,i,n),t.child}function Lu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ss(e,t,n,r,i){var a=We(n)?an:Me.current;return a=Rn(t,a),In(t,i),n=ds(e,t,n,r,a,i),r=fs(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,bt(e,t,i)):(ve&&r&&Ja(t),t.flags|=1,Fe(e,t,n,i),t.child)}function Ru(e,t,n,r,i){if(We(n)){var a=!0;li(t)}else a=!1;if(In(t,i),t.stateNode===null)ji(e,t),hu(t,n,r),ys(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,p=t.memoizedProps;o.props=p;var v=o.context,E=n.contextType;typeof E=="object"&&E!==null?E=st(E):(E=We(n)?an:Me.current,E=Rn(t,E));var N=n.getDerivedStateFromProps,B=typeof N=="function"||typeof o.getSnapshotBeforeUpdate=="function";B||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(p!==r||v!==E)&&Cu(t,o,r,E),Vt=!1;var L=t.memoizedState;o.state=L,hi(t,r,o,i),v=t.memoizedState,p!==r||L!==v||Qe.current||Vt?(typeof N=="function"&&(Cs(t,n,N,r),v=t.memoizedState),(p=Vt||gu(t,n,p,r,L,v,E))?(B||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=E,r=p):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Ql(e,t),p=t.memoizedProps,E=t.type===t.elementType?p:mt(t.type,p),o.props=E,B=t.pendingProps,L=o.context,v=n.contextType,typeof v=="object"&&v!==null?v=st(v):(v=We(n)?an:Me.current,v=Rn(t,v));var O=n.getDerivedStateFromProps;(N=typeof O=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(p!==B||L!==v)&&Cu(t,o,r,v),Vt=!1,L=t.memoizedState,o.state=L,hi(t,r,o,i);var H=t.memoizedState;p!==B||L!==H||Qe.current||Vt?(typeof O=="function"&&(Cs(t,n,O,r),H=t.memoizedState),(E=Vt||gu(t,n,E,r,L,H,v)||!1)?(N||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,H,v),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,H,v)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||p===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=H),o.props=r,o.state=H,o.context=v,r=E):(typeof o.componentDidUpdate!="function"||p===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),r=!1)}return Es(e,t,n,r,a,i)}function Es(e,t,n,r,i,a){Lu(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Pl(t,n,!1),bt(e,t,a);r=t.stateNode,Cd.current=t;var p=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=bn(t,e.child,null,a),t.child=bn(t,null,p,a)):Fe(e,t,p,a),t.memoizedState=r.state,i&&Pl(t,n,!0),t.child}function Nu(e){var t=e.stateNode;t.pendingContext?Tl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tl(e,t.context,!1),ss(e,t.containerInfo)}function Bu(e,t,n,r,i){return Tn(),Za(i),t.flags|=256,Fe(e,t,n,r),t.child}var As={dehydrated:null,treeContext:null,retryLane:0};function ks(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tu(e,t,n){var r=t.pendingProps,i=he.current,a=!1,o=(t.flags&128)!==0,p;if((p=o)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),pe(he,i&1),e===null)return Ya(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=o):a=qi(o,r,0,null),e=vn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ks(n),t.memoizedState=As,e):js(t,o));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return yd(e,t,o,r,p,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,p=i.sibling;var v={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=v,t.deletions=null):(r=en(i,v),r.subtreeFlags=i.subtreeFlags&14680064),p!==null?a=en(p,a):(a=vn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?ks(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=As,r}return a=e.child,e=a.sibling,r=en(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function js(e,t){return t=qi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ki(e,t,n,r){return r!==null&&Za(r),bn(t,e.child,null,n),e=js(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yd(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=ws(Error(l(422))),ki(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=qi({mode:"visible",children:r.children},i,0,null),a=vn(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&bn(t,e.child,null,o),t.child.memoizedState=ks(o),t.memoizedState=As,a);if((t.mode&1)===0)return ki(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var p=r.dgst;return r=p,a=Error(l(419)),r=ws(a,r,void 0),ki(e,t,o,r)}if(p=(o&e.childLanes)!==0,Ve||p){if(r=Ne,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Bt(e,i),ht(r,e,i,-1))}return zs(),r=ws(Error(l(421))),ki(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Td.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,tt=Ut(i.nextSibling),et=t,ve=!0,ft=null,e!==null&&(it[at++]=Rt,it[at++]=Nt,it[at++]=sn,Rt=e.id,Nt=e.overflow,sn=t),t=js(t,r.children),t.flags|=4096,t)}function bu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),rs(e.return,t,n)}function Ds(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Pu(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Fe(e,t,r.children,n),r=he.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bu(e,n,t);else if(e.tag===19)bu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(pe(he,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ci(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ds(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ci(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ds(t,!0,n,null,a);break;case"together":Ds(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ji(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=en(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=en(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wd(e,t,n){switch(t.tag){case 3:Nu(t),Tn();break;case 5:Gl(t);break;case 1:We(t.type)&&li(t);break;case 4:ss(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;pe(mi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(pe(he,he.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Tu(e,t,n):(pe(he,he.current&1),e=bt(e,t,n),e!==null?e.sibling:null);pe(he,he.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Pu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(he,he.current),r)break;return null;case 22:case 23:return t.lanes=0,Du(e,t,n)}return bt(e,t,n)}var Iu,Ls,Mu,Ou;Iu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ls=function(){},Mu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,un(St.current);var a=null;switch(n){case"input":i=ra(e,i),r=ra(e,r),a=[];break;case"select":i=F({},i,{value:void 0}),r=F({},r,{value:void 0}),a=[];break;case"textarea":i=sa(e,i),r=sa(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ai)}la(n,r);var o;n=null;for(E in i)if(!r.hasOwnProperty(E)&&i.hasOwnProperty(E)&&i[E]!=null)if(E==="style"){var p=i[E];for(o in p)p.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else E!=="dangerouslySetInnerHTML"&&E!=="children"&&E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(f.hasOwnProperty(E)?a||(a=[]):(a=a||[]).push(E,null));for(E in r){var v=r[E];if(p=i!=null?i[E]:void 0,r.hasOwnProperty(E)&&v!==p&&(v!=null||p!=null))if(E==="style")if(p){for(o in p)!p.hasOwnProperty(o)||v&&v.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in v)v.hasOwnProperty(o)&&p[o]!==v[o]&&(n||(n={}),n[o]=v[o])}else n||(a||(a=[]),a.push(E,n)),n=v;else E==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,p=p?p.__html:void 0,v!=null&&p!==v&&(a=a||[]).push(E,v)):E==="children"?typeof v!="string"&&typeof v!="number"||(a=a||[]).push(E,""+v):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&(f.hasOwnProperty(E)?(v!=null&&E==="onScroll"&&de("scroll",e),a||p===v||(a=[])):(a=a||[]).push(E,v))}n&&(a=a||[]).push("style",n);var E=a;(t.updateQueue=E)&&(t.flags|=4)}},Ou=function(e,t,n,r){n!==r&&(t.flags|=4)};function Sr(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xd(e,t,n){var r=t.pendingProps;switch(Ka(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return We(t.type)&&oi(),qe(t),null;case 3:return r=t.stateNode,Mn(),fe(Qe),fe(Me),us(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(di(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ft!==null&&(_s(ft),ft=null))),Ls(e,t),qe(t),null;case 5:os(t);var i=un(hr.current);if(n=t.type,e!==null&&t.stateNode!=null)Mu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(l(166));return qe(t),null}if(e=un(St.current),di(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[xt]=t,r[dr]=a,e=(t.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<ur.length;i++)de(ur[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":ho(r,a),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},de("invalid",r);break;case"textarea":wo(r,a),de("invalid",r)}la(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var p=a[o];o==="children"?typeof p=="string"?r.textContent!==p&&(a.suppressHydrationWarning!==!0&&ii(r.textContent,p,e),i=["children",p]):typeof p=="number"&&r.textContent!==""+p&&(a.suppressHydrationWarning!==!0&&ii(r.textContent,p,e),i=["children",""+p]):f.hasOwnProperty(o)&&p!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Ir(r),yo(r,a,!0);break;case"textarea":Ir(r),So(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=ai)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Eo(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[xt]=t,e[dr]=r,Iu(e,t,!1,!1),t.stateNode=e;e:{switch(o=ua(n,r),n){case"dialog":de("cancel",e),de("close",e),i=r;break;case"iframe":case"object":case"embed":de("load",e),i=r;break;case"video":case"audio":for(i=0;i<ur.length;i++)de(ur[i],e);i=r;break;case"source":de("error",e),i=r;break;case"img":case"image":case"link":de("error",e),de("load",e),i=r;break;case"details":de("toggle",e),i=r;break;case"input":ho(e,r),i=ra(e,r),de("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=F({},r,{value:void 0}),de("invalid",e);break;case"textarea":wo(e,r),i=sa(e,r),de("invalid",e);break;default:i=r}la(n,i),p=i;for(a in p)if(p.hasOwnProperty(a)){var v=p[a];a==="style"?jo(e,v):a==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&Ao(e,v)):a==="children"?typeof v=="string"?(n!=="textarea"||v!=="")&&$n(e,v):typeof v=="number"&&$n(e,""+v):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(f.hasOwnProperty(a)?v!=null&&a==="onScroll"&&de("scroll",e):v!=null&&X(e,a,v,o))}switch(n){case"input":Ir(e),yo(e,r,!1);break;case"textarea":Ir(e),So(e);break;case"option":r.value!=null&&e.setAttribute("value",""+oe(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?hn(e,!!r.multiple,a,!1):r.defaultValue!=null&&hn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ai)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(e&&t.stateNode!=null)Ou(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(l(166));if(n=un(hr.current),un(St.current),di(t)){if(r=t.stateNode,n=t.memoizedProps,r[xt]=t,(a=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:ii(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ii(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=t,t.stateNode=r}return qe(t),null;case 13:if(fe(he),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&tt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Fl(),Tn(),t.flags|=98560,a=!1;else if(a=di(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(l(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(l(317));a[xt]=t}else Tn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),a=!1}else ft!==null&&(_s(ft),ft=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(he.current&1)!==0?Le===0&&(Le=3):zs())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return Mn(),Ls(e,t),e===null&&cr(t.stateNode.containerInfo),qe(t),null;case 10:return ns(t.type._context),qe(t),null;case 17:return We(t.type)&&oi(),qe(t),null;case 19:if(fe(he),a=t.memoizedState,a===null)return qe(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Sr(a,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Ci(e),o!==null){for(t.flags|=128,Sr(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return pe(he,he.current&1|2),t.child}e=e.sibling}a.tail!==null&&Se()>Fn&&(t.flags|=128,r=!0,Sr(a,!1),t.lanes=4194304)}else{if(!r)if(e=Ci(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Sr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ve)return qe(t),null}else 2*Se()-a.renderingStartTime>Fn&&n!==1073741824&&(t.flags|=128,r=!0,Sr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Se(),t.sibling=null,n=he.current,pe(he,r?n&1|2:n&1),t):(qe(t),null);case 22:case 23:return Hs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(nt&1073741824)!==0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function Sd(e,t){switch(Ka(t),t.tag){case 1:return We(t.type)&&oi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mn(),fe(Qe),fe(Me),us(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return os(t),null;case 13:if(fe(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(he),null;case 4:return Mn(),null;case 10:return ns(t.type._context),null;case 22:case 23:return Hs(),null;case 24:return null;default:return null}}var Di=!1,_e=!1,Ed=typeof WeakSet=="function"?WeakSet:Set,_=null;function qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(e,t,r)}else n.current=null}function Rs(e,t,n){try{n()}catch(r){xe(e,t,r)}}var qu=!1;function Ad(e,t){if(Ha=Vr,e=gl(),ba(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,p=-1,v=-1,E=0,N=0,B=e,L=null;t:for(;;){for(var O;B!==n||i!==0&&B.nodeType!==3||(p=o+i),B!==a||r!==0&&B.nodeType!==3||(v=o+r),B.nodeType===3&&(o+=B.nodeValue.length),(O=B.firstChild)!==null;)L=B,B=O;for(;;){if(B===e)break t;if(L===n&&++E===i&&(p=o),L===a&&++N===r&&(v=o),(O=B.nextSibling)!==null)break;B=L,L=B.parentNode}B=O}n=p===-1||v===-1?null:{start:p,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(za={focusedElem:e,selectionRange:n},Vr=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var H=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(H!==null){var z=H.memoizedProps,Ee=H.memoizedState,w=t.stateNode,g=w.getSnapshotBeforeUpdate(t.elementType===t.type?z:mt(t.type,z),Ee);w.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(T){xe(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return H=qu,qu=!1,H}function Er(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Rs(t,n,a)}i=i.next}while(i!==r)}}function Li(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ns(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function _u(e){var t=e.alternate;t!==null&&(e.alternate=null,_u(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[dr],delete t[Wa],delete t[sd],delete t[od])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fu(e){return e.tag===5||e.tag===3||e.tag===4}function Hu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ai));else if(r!==4&&(e=e.child,e!==null))for(Bs(e,t,n),e=e.sibling;e!==null;)Bs(e,t,n),e=e.sibling}function Ts(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ts(e,t,n),e=e.sibling;e!==null;)Ts(e,t,n),e=e.sibling}var be=null,vt=!1;function Jt(e,t,n){for(n=n.child;n!==null;)zu(e,t,n),n=n.sibling}function zu(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Hr,n)}catch{}switch(n.tag){case 5:_e||qn(n,t);case 6:var r=be,i=vt;be=null,Jt(e,t,n),be=r,vt=i,be!==null&&(vt?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(vt?(e=be,n=n.stateNode,e.nodeType===8?Qa(e.parentNode,n):e.nodeType===1&&Qa(e,n),tr(e)):Qa(be,n.stateNode));break;case 4:r=be,i=vt,be=n.stateNode.containerInfo,vt=!0,Jt(e,t,n),be=r,vt=i;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&((a&2)!==0||(a&4)!==0)&&Rs(n,t,o),i=i.next}while(i!==r)}Jt(e,t,n);break;case 1:if(!_e&&(qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(p){xe(n,t,p)}Jt(e,t,n);break;case 21:Jt(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,Jt(e,t,n),_e=r):Jt(e,t,n);break;default:Jt(e,t,n)}}function Uu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ed),t.forEach(function(r){var i=bd.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,p=o;e:for(;p!==null;){switch(p.tag){case 5:be=p.stateNode,vt=!1;break e;case 3:be=p.stateNode.containerInfo,vt=!0;break e;case 4:be=p.stateNode.containerInfo,vt=!0;break e}p=p.return}if(be===null)throw Error(l(160));zu(a,o,i),be=null,vt=!1;var v=i.alternate;v!==null&&(v.return=null),i.return=null}catch(E){xe(i,t,E)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$u(t,e),t=t.sibling}function $u(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),At(e),r&4){try{Er(3,e,e.return),Li(3,e)}catch(z){xe(e,e.return,z)}try{Er(5,e,e.return)}catch(z){xe(e,e.return,z)}}break;case 1:gt(t,e),At(e),r&512&&n!==null&&qn(n,n.return);break;case 5:if(gt(t,e),At(e),r&512&&n!==null&&qn(n,n.return),e.flags&32){var i=e.stateNode;try{$n(i,"")}catch(z){xe(e,e.return,z)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,p=e.type,v=e.updateQueue;if(e.updateQueue=null,v!==null)try{p==="input"&&a.type==="radio"&&a.name!=null&&Co(i,a),ua(p,o);var E=ua(p,a);for(o=0;o<v.length;o+=2){var N=v[o],B=v[o+1];N==="style"?jo(i,B):N==="dangerouslySetInnerHTML"?Ao(i,B):N==="children"?$n(i,B):X(i,N,B,E)}switch(p){case"input":ia(i,a);break;case"textarea":xo(i,a);break;case"select":var L=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var O=a.value;O!=null?hn(i,!!a.multiple,O,!1):L!==!!a.multiple&&(a.defaultValue!=null?hn(i,!!a.multiple,a.defaultValue,!0):hn(i,!!a.multiple,a.multiple?[]:"",!1))}i[dr]=a}catch(z){xe(e,e.return,z)}}break;case 6:if(gt(t,e),At(e),r&4){if(e.stateNode===null)throw Error(l(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(z){xe(e,e.return,z)}}break;case 3:if(gt(t,e),At(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{tr(t.containerInfo)}catch(z){xe(e,e.return,z)}break;case 4:gt(t,e),At(e);break;case 13:gt(t,e),At(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Is=Se())),r&4&&Uu(e);break;case 22:if(N=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(E=_e)||N,gt(t,e),_e=E):gt(t,e),At(e),r&8192){if(E=e.memoizedState!==null,(e.stateNode.isHidden=E)&&!N&&(e.mode&1)!==0)for(_=e,N=e.child;N!==null;){for(B=_=N;_!==null;){switch(L=_,O=L.child,L.tag){case 0:case 11:case 14:case 15:Er(4,L,L.return);break;case 1:qn(L,L.return);var H=L.stateNode;if(typeof H.componentWillUnmount=="function"){r=L,n=L.return;try{t=r,H.props=t.memoizedProps,H.state=t.memoizedState,H.componentWillUnmount()}catch(z){xe(r,n,z)}}break;case 5:qn(L,L.return);break;case 22:if(L.memoizedState!==null){Vu(B);continue}}O!==null?(O.return=L,_=O):Vu(B)}N=N.sibling}e:for(N=null,B=e;;){if(B.tag===5){if(N===null){N=B;try{i=B.stateNode,E?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(p=B.stateNode,v=B.memoizedProps.style,o=v!=null&&v.hasOwnProperty("display")?v.display:null,p.style.display=ko("display",o))}catch(z){xe(e,e.return,z)}}}else if(B.tag===6){if(N===null)try{B.stateNode.nodeValue=E?"":B.memoizedProps}catch(z){xe(e,e.return,z)}}else if((B.tag!==22&&B.tag!==23||B.memoizedState===null||B===e)&&B.child!==null){B.child.return=B,B=B.child;continue}if(B===e)break e;for(;B.sibling===null;){if(B.return===null||B.return===e)break e;N===B&&(N=null),B=B.return}N===B&&(N=null),B.sibling.return=B.return,B=B.sibling}}break;case 19:gt(t,e),At(e),r&4&&Uu(e);break;case 21:break;default:gt(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Fu(n)){var r=n;break e}n=n.return}throw Error(l(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($n(i,""),r.flags&=-33);var a=Hu(e);Ts(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,p=Hu(e);Bs(e,p,o);break;default:throw Error(l(161))}}catch(v){xe(e,e.return,v)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kd(e,t,n){_=e,Qu(e)}function Qu(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var i=_,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Di;if(!o){var p=i.alternate,v=p!==null&&p.memoizedState!==null||_e;p=Di;var E=_e;if(Di=o,(_e=v)&&!E)for(_=i;_!==null;)o=_,v=o.child,o.tag===22&&o.memoizedState!==null?Gu(i):v!==null?(v.return=o,_=v):Gu(i);for(;a!==null;)_=a,Qu(a),a=a.sibling;_=i,Di=p,_e=E}Wu(e)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,_=a):Wu(e)}}function Wu(e){for(;_!==null;){var t=_;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:_e||Li(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Vl(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Vl(t,o,n)}break;case 5:var p=t.stateNode;if(n===null&&t.flags&4){n=p;var v=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&n.focus();break;case"img":v.src&&(n.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var E=t.alternate;if(E!==null){var N=E.memoizedState;if(N!==null){var B=N.dehydrated;B!==null&&tr(B)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}_e||t.flags&512&&Ns(t)}catch(L){xe(t,t.return,L)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Vu(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Gu(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Li(4,t)}catch(v){xe(t,n,v)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(v){xe(t,i,v)}}var a=t.return;try{Ns(t)}catch(v){xe(t,a,v)}break;case 5:var o=t.return;try{Ns(t)}catch(v){xe(t,o,v)}}}catch(v){xe(t,t.return,v)}if(t===e){_=null;break}var p=t.sibling;if(p!==null){p.return=t.return,_=p;break}_=t.return}}var jd=Math.ceil,Ri=ne.ReactCurrentDispatcher,bs=ne.ReactCurrentOwner,lt=ne.ReactCurrentBatchConfig,te=0,Ne=null,Ae=null,Pe=0,nt=0,_n=$t(0),Le=0,Ar=null,pn=0,Ni=0,Ps=0,kr=null,Ge=null,Is=0,Fn=1/0,Pt=null,Bi=!1,Ms=null,Kt=null,Ti=!1,Xt=null,bi=0,jr=0,Os=null,Pi=-1,Ii=0;function He(){return(te&6)!==0?Se():Pi!==-1?Pi:Pi=Se()}function Yt(e){return(e.mode&1)===0?1:(te&2)!==0&&Pe!==0?Pe&-Pe:ud.transition!==null?(Ii===0&&(Ii=Ho()),Ii):(e=le,e!==0||(e=window.event,e=e===void 0?16:Ko(e.type)),e)}function ht(e,t,n,r){if(50<jr)throw jr=0,Os=null,Error(l(185));Kn(e,n,r),((te&2)===0||e!==Ne)&&(e===Ne&&((te&2)===0&&(Ni|=n),Le===4&&Zt(e,Pe)),Je(e,r),n===1&&te===0&&(t.mode&1)===0&&(Fn=Se()+500,ui&&Wt()))}function Je(e,t){var n=e.callbackNode;up(e,t);var r=$r(e,e===Ne?Pe:0);if(r===0)n!==null&&qo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&qo(n),t===1)e.tag===0?ld(Ku.bind(null,e)):Il(Ku.bind(null,e)),id(function(){(te&6)===0&&Wt()}),n=null;else{switch(zo(r)){case 1:n=ga;break;case 4:n=_o;break;case 16:n=Fr;break;case 536870912:n=Fo;break;default:n=Fr}n=ic(n,Ju.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ju(e,t){if(Pi=-1,Ii=0,(te&6)!==0)throw Error(l(327));var n=e.callbackNode;if(Hn()&&e.callbackNode!==n)return null;var r=$r(e,e===Ne?Pe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Mi(e,r);else{t=r;var i=te;te|=2;var a=Yu();(Ne!==e||Pe!==t)&&(Pt=null,Fn=Se()+500,fn(e,t));do try{Rd();break}catch(p){Xu(e,p)}while(!0);ts(),Ri.current=a,te=i,Ae!==null?t=0:(Ne=null,Pe=0,t=Le)}if(t!==0){if(t===2&&(i=ha(e),i!==0&&(r=i,t=qs(e,i))),t===1)throw n=Ar,fn(e,0),Zt(e,r),Je(e,Se()),n;if(t===6)Zt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Dd(i)&&(t=Mi(e,r),t===2&&(a=ha(e),a!==0&&(r=a,t=qs(e,a))),t===1))throw n=Ar,fn(e,0),Zt(e,r),Je(e,Se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(l(345));case 2:mn(e,Ge,Pt);break;case 3:if(Zt(e,r),(r&130023424)===r&&(t=Is+500-Se(),10<t)){if($r(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=$a(mn.bind(null,e,Ge,Pt),t);break}mn(e,Ge,Pt);break;case 4:if(Zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-pt(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jd(r/1960))-r,10<r){e.timeoutHandle=$a(mn.bind(null,e,Ge,Pt),r);break}mn(e,Ge,Pt);break;case 5:mn(e,Ge,Pt);break;default:throw Error(l(329))}}}return Je(e,Se()),e.callbackNode===n?Ju.bind(null,e):null}function qs(e,t){var n=kr;return e.current.memoizedState.isDehydrated&&(fn(e,t).flags|=256),e=Mi(e,t),e!==2&&(t=Ge,Ge=n,t!==null&&_s(t)),e}function _s(e){Ge===null?Ge=e:Ge.push.apply(Ge,e)}function Dd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!dt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zt(e,t){for(t&=~Ps,t&=~Ni,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function Ku(e){if((te&6)!==0)throw Error(l(327));Hn();var t=$r(e,0);if((t&1)===0)return Je(e,Se()),null;var n=Mi(e,t);if(e.tag!==0&&n===2){var r=ha(e);r!==0&&(t=r,n=qs(e,r))}if(n===1)throw n=Ar,fn(e,0),Zt(e,t),Je(e,Se()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,mn(e,Ge,Pt),Je(e,Se()),null}function Fs(e,t){var n=te;te|=1;try{return e(t)}finally{te=n,te===0&&(Fn=Se()+500,ui&&Wt())}}function dn(e){Xt!==null&&Xt.tag===0&&(te&6)===0&&Hn();var t=te;te|=1;var n=lt.transition,r=le;try{if(lt.transition=null,le=1,e)return e()}finally{le=r,lt.transition=n,te=t,(te&6)===0&&Wt()}}function Hs(){nt=_n.current,fe(_n)}function fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rd(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(Ka(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oi();break;case 3:Mn(),fe(Qe),fe(Me),us();break;case 5:os(r);break;case 4:Mn();break;case 13:fe(he);break;case 19:fe(he);break;case 10:ns(r.type._context);break;case 22:case 23:Hs()}n=n.return}if(Ne=e,Ae=e=en(e.current,null),Pe=nt=t,Le=0,Ar=null,Ps=Ni=pn=0,Ge=kr=null,ln!==null){for(t=0;t<ln.length;t++)if(n=ln[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}ln=null}return e}function Xu(e,t){do{var n=Ae;try{if(ts(),yi.current=Ei,wi){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wi=!1}if(cn=0,Re=De=Ce=null,Cr=!1,yr=0,bs.current=null,n===null||n.return===null){Le=1,Ar=t,Ae=null;break}e:{var a=e,o=n.return,p=n,v=t;if(t=Pe,p.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var E=v,N=p,B=N.tag;if((N.mode&1)===0&&(B===0||B===11||B===15)){var L=N.alternate;L?(N.updateQueue=L.updateQueue,N.memoizedState=L.memoizedState,N.lanes=L.lanes):(N.updateQueue=null,N.memoizedState=null)}var O=Su(o);if(O!==null){O.flags&=-257,Eu(O,o,p,a,t),O.mode&1&&xu(a,E,t),t=O,v=E;var H=t.updateQueue;if(H===null){var z=new Set;z.add(v),t.updateQueue=z}else H.add(v);break e}else{if((t&1)===0){xu(a,E,t),zs();break e}v=Error(l(426))}}else if(ve&&p.mode&1){var Ee=Su(o);if(Ee!==null){(Ee.flags&65536)===0&&(Ee.flags|=256),Eu(Ee,o,p,a,t),Za(On(v,p));break e}}a=v=On(v,p),Le!==4&&(Le=2),kr===null?kr=[a]:kr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var w=yu(a,v,t);Wl(a,w);break e;case 1:p=v;var g=a.type,x=a.stateNode;if((a.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Kt===null||!Kt.has(x)))){a.flags|=65536,t&=-t,a.lanes|=t;var T=wu(a,p,t);Wl(a,T);break e}}a=a.return}while(a!==null)}ec(n)}catch(U){t=U,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(!0)}function Yu(){var e=Ri.current;return Ri.current=Ei,e===null?Ei:e}function zs(){(Le===0||Le===3||Le===2)&&(Le=4),Ne===null||(pn&268435455)===0&&(Ni&268435455)===0||Zt(Ne,Pe)}function Mi(e,t){var n=te;te|=2;var r=Yu();(Ne!==e||Pe!==t)&&(Pt=null,fn(e,t));do try{Ld();break}catch(i){Xu(e,i)}while(!0);if(ts(),te=n,Ri.current=r,Ae!==null)throw Error(l(261));return Ne=null,Pe=0,Le}function Ld(){for(;Ae!==null;)Zu(Ae)}function Rd(){for(;Ae!==null&&!ep();)Zu(Ae)}function Zu(e){var t=rc(e.alternate,e,nt);e.memoizedProps=e.pendingProps,t===null?ec(e):Ae=t,bs.current=null}function ec(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=xd(n,t,nt),n!==null){Ae=n;return}}else{if(n=Sd(n,t),n!==null){n.flags&=32767,Ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,Ae=null;return}}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Le===0&&(Le=5)}function mn(e,t,n){var r=le,i=lt.transition;try{lt.transition=null,le=1,Nd(e,t,n,r)}finally{lt.transition=i,le=r}return null}function Nd(e,t,n,r){do Hn();while(Xt!==null);if((te&6)!==0)throw Error(l(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(cp(e,a),e===Ne&&(Ae=Ne=null,Pe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ti||(Ti=!0,ic(Fr,function(){return Hn(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=lt.transition,lt.transition=null;var o=le;le=1;var p=te;te|=4,bs.current=null,Ad(e,n),$u(n,e),Kp(za),Vr=!!Ha,za=Ha=null,e.current=n,kd(n),tp(),te=p,le=o,lt.transition=a}else e.current=n;if(Ti&&(Ti=!1,Xt=e,bi=i),a=e.pendingLanes,a===0&&(Kt=null),ip(n.stateNode),Je(e,Se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Bi)throw Bi=!1,e=Ms,Ms=null,e;return(bi&1)!==0&&e.tag!==0&&Hn(),a=e.pendingLanes,(a&1)!==0?e===Os?jr++:(jr=0,Os=e):jr=0,Wt(),null}function Hn(){if(Xt!==null){var e=zo(bi),t=lt.transition,n=le;try{if(lt.transition=null,le=16>e?16:e,Xt===null)var r=!1;else{if(e=Xt,Xt=null,bi=0,(te&6)!==0)throw Error(l(331));var i=te;for(te|=4,_=e.current;_!==null;){var a=_,o=a.child;if((_.flags&16)!==0){var p=a.deletions;if(p!==null){for(var v=0;v<p.length;v++){var E=p[v];for(_=E;_!==null;){var N=_;switch(N.tag){case 0:case 11:case 15:Er(8,N,a)}var B=N.child;if(B!==null)B.return=N,_=B;else for(;_!==null;){N=_;var L=N.sibling,O=N.return;if(_u(N),N===E){_=null;break}if(L!==null){L.return=O,_=L;break}_=O}}}var H=a.alternate;if(H!==null){var z=H.child;if(z!==null){H.child=null;do{var Ee=z.sibling;z.sibling=null,z=Ee}while(z!==null)}}_=a}}if((a.subtreeFlags&2064)!==0&&o!==null)o.return=a,_=o;else e:for(;_!==null;){if(a=_,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Er(9,a,a.return)}var w=a.sibling;if(w!==null){w.return=a.return,_=w;break e}_=a.return}}var g=e.current;for(_=g;_!==null;){o=_;var x=o.child;if((o.subtreeFlags&2064)!==0&&x!==null)x.return=o,_=x;else e:for(o=g;_!==null;){if(p=_,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:Li(9,p)}}catch(U){xe(p,p.return,U)}if(p===o){_=null;break e}var T=p.sibling;if(T!==null){T.return=p.return,_=T;break e}_=p.return}}if(te=i,Wt(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Hr,e)}catch{}r=!0}return r}finally{le=n,lt.transition=t}}return!1}function tc(e,t,n){t=On(n,t),t=yu(e,t,1),e=Gt(e,t,1),t=He(),e!==null&&(Kn(e,1,t),Je(e,t))}function xe(e,t,n){if(e.tag===3)tc(e,e,n);else for(;t!==null;){if(t.tag===3){tc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kt===null||!Kt.has(r))){e=On(n,e),e=wu(t,e,1),t=Gt(t,e,1),e=He(),t!==null&&(Kn(t,1,e),Je(t,e));break}}t=t.return}}function Bd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&(Pe&n)===n&&(Le===4||Le===3&&(Pe&130023424)===Pe&&500>Se()-Is?fn(e,0):Ps|=n),Je(e,t)}function nc(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ur,Ur<<=1,(Ur&130023424)===0&&(Ur=4194304)));var n=He();e=Bt(e,t),e!==null&&(Kn(e,t,n),Je(e,n))}function Td(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),nc(e,n)}function bd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(l(314))}r!==null&&r.delete(t),nc(e,n)}var rc;rc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qe.current)Ve=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ve=!1,wd(e,t,n);Ve=(e.flags&131072)!==0}else Ve=!1,ve&&(t.flags&1048576)!==0&&Ml(t,pi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ji(e,t),e=t.pendingProps;var i=Rn(t,Me.current);In(t,n),i=ds(null,t,r,e,i,n);var a=fs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(r)?(a=!0,li(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,as(t),i.updater=Ai,t.stateNode=i,i._reactInternals=t,ys(t,r,e,n),t=Es(null,t,r,!0,a,n)):(t.tag=0,ve&&a&&Ja(t),Fe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ji(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Id(r),e=mt(r,e),i){case 0:t=Ss(null,t,r,e,n);break e;case 1:t=Ru(null,t,r,e,n);break e;case 11:t=Au(null,t,r,e,n);break e;case 14:t=ku(null,t,r,mt(r.type,e),n);break e}throw Error(l(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Ss(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Ru(e,t,r,i,n);case 3:e:{if(Nu(t),e===null)throw Error(l(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Ql(e,t),hi(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=On(Error(l(423)),t),t=Bu(e,t,r,n,i);break e}else if(r!==i){i=On(Error(l(424)),t),t=Bu(e,t,r,n,i);break e}else for(tt=Ut(t.stateNode.containerInfo.firstChild),et=t,ve=!0,ft=null,n=Ul(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tn(),r===i){t=bt(e,t,n);break e}Fe(e,t,r,n)}t=t.child}return t;case 5:return Gl(t),e===null&&Ya(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Ua(r,i)?o=null:a!==null&&Ua(r,a)&&(t.flags|=32),Lu(e,t),Fe(e,t,o,n),t.child;case 6:return e===null&&Ya(t),null;case 13:return Tu(e,t,n);case 4:return ss(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bn(t,null,r,n):Fe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Au(e,t,r,i,n);case 7:return Fe(e,t,t.pendingProps,n),t.child;case 8:return Fe(e,t,t.pendingProps.children,n),t.child;case 12:return Fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,pe(mi,r._currentValue),r._currentValue=o,a!==null)if(dt(a.value,o)){if(a.children===i.children&&!Qe.current){t=bt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var p=a.dependencies;if(p!==null){o=a.child;for(var v=p.firstContext;v!==null;){if(v.context===r){if(a.tag===1){v=Tt(-1,n&-n),v.tag=2;var E=a.updateQueue;if(E!==null){E=E.shared;var N=E.pending;N===null?v.next=v:(v.next=N.next,N.next=v),E.pending=v}}a.lanes|=n,v=a.alternate,v!==null&&(v.lanes|=n),rs(a.return,n,t),p.lanes|=n;break}v=v.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(l(341));o.lanes|=n,p=o.alternate,p!==null&&(p.lanes|=n),rs(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Fe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,In(t,n),i=st(i),r=r(i),t.flags|=1,Fe(e,t,r,n),t.child;case 14:return r=t.type,i=mt(r,t.pendingProps),i=mt(r.type,i),ku(e,t,r,i,n);case 15:return ju(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),ji(e,t),t.tag=1,We(r)?(e=!0,li(t)):e=!1,In(t,n),hu(t,r,i),ys(t,r,i,n),Es(null,t,r,!0,e,n);case 19:return Pu(e,t,n);case 22:return Du(e,t,n)}throw Error(l(156,t.tag))};function ic(e,t){return Oo(e,t)}function Pd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,r){return new Pd(e,t,n,r)}function Us(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Id(e){if(typeof e=="function")return Us(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rt)return 11;if(e===je)return 14}return 2}function en(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Oi(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")Us(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case ge:return vn(n.children,i,a,t);case ke:o=8,i|=8;break;case ze:return e=ut(12,n,t,i|2),e.elementType=ze,e.lanes=a,e;case Ie:return e=ut(13,n,t,i),e.elementType=Ie,e.lanes=a,e;case Ue:return e=ut(19,n,t,i),e.elementType=Ue,e.lanes=a,e;case we:return qi(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xe:o=10;break e;case jt:o=9;break e;case rt:o=11;break e;case je:o=14;break e;case $e:o=16,r=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=ut(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function vn(e,t,n,r){return e=ut(7,e,r,t),e.lanes=n,e}function qi(e,t,n,r){return e=ut(22,e,r,t),e.elementType=we,e.lanes=n,e.stateNode={isHidden:!1},e}function $s(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function Qs(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Md(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ca(0),this.expirationTimes=Ca(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ca(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ws(e,t,n,r,i,a,o,p,v){return e=new Md(e,t,n,p,v),t===1?(t=1,a===!0&&(t|=8)):t=0,a=ut(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},as(a),e}function Od(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ue,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ac(e){if(!e)return Qt;e=e._reactInternals;e:{if(nn(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(We(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(We(n))return bl(e,n,t)}return t}function sc(e,t,n,r,i,a,o,p,v){return e=Ws(n,r,!0,e,i,a,o,p,v),e.context=ac(null),n=e.current,r=He(),i=Yt(n),a=Tt(r,i),a.callback=t??null,Gt(n,a,i),e.current.lanes=i,Kn(e,i,r),Je(e,r),e}function _i(e,t,n,r){var i=t.current,a=He(),o=Yt(i);return n=ac(n),t.context===null?t.context=n:t.pendingContext=n,t=Tt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gt(i,t,o),e!==null&&(ht(e,i,o,a),gi(e,i,o)),o}function Fi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function oc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vs(e,t){oc(e,t),(e=e.alternate)&&oc(e,t)}function qd(){return null}var lc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gs(e){this._internalRoot=e}Hi.prototype.render=Gs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));_i(e,t,null,null)},Hi.prototype.unmount=Gs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dn(function(){_i(null,e,null,null)}),t[Dt]=null}};function Hi(e){this._internalRoot=e}Hi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qo();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ft.length&&t!==0&&t<Ft[n].priority;n++);Ft.splice(n,0,e),n===0&&Go(e)}};function Js(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uc(){}function _d(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var E=Fi(o);a.call(E)}}var o=sc(t,r,e,0,null,!1,!1,"",uc);return e._reactRootContainer=o,e[Dt]=o.current,cr(e.nodeType===8?e.parentNode:e),dn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var p=r;r=function(){var E=Fi(v);p.call(E)}}var v=Ws(e,0,!1,null,null,!1,!1,"",uc);return e._reactRootContainer=v,e[Dt]=v.current,cr(e.nodeType===8?e.parentNode:e),dn(function(){_i(t,v,n,r)}),v}function Ui(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var p=i;i=function(){var v=Fi(o);p.call(v)}}_i(t,o,e,i)}else o=_d(n,t,e,i,r);return Fi(o)}Uo=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Jn(t.pendingLanes);n!==0&&(ya(t,n|1),Je(t,Se()),(te&6)===0&&(Fn=Se()+500,Wt()))}break;case 13:dn(function(){var r=Bt(e,1);if(r!==null){var i=He();ht(r,e,1,i)}}),Vs(e,1)}},wa=function(e){if(e.tag===13){var t=Bt(e,134217728);if(t!==null){var n=He();ht(t,e,134217728,n)}Vs(e,134217728)}},$o=function(e){if(e.tag===13){var t=Yt(e),n=Bt(e,t);if(n!==null){var r=He();ht(n,e,t,r)}Vs(e,t)}},Qo=function(){return le},Wo=function(e,t){var n=le;try{return le=e,t()}finally{le=n}},da=function(e,t,n){switch(t){case"input":if(ia(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=si(r);if(!i)throw Error(l(90));go(r),ia(r,i)}}}break;case"textarea":xo(e,n);break;case"select":t=n.value,t!=null&&hn(e,!!n.multiple,t,!1)}},No=Fs,Bo=dn;var Fd={usingClientEntryPoint:!1,Events:[fr,Dn,si,Lo,Ro,Fs]},Dr={findFiberByHostInstance:rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hd={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Io(e),e===null?null:e.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance||qd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$i.isDisabled&&$i.supportsFiber)try{Hr=$i.inject(Hd),wt=$i}catch{}}return Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fd,Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Js(t))throw Error(l(200));return Od(e,t,null,n)},Ke.createRoot=function(e,t){if(!Js(e))throw Error(l(299));var n=!1,r="",i=lc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ws(e,1,!1,null,null,n,!1,r,i),e[Dt]=t.current,cr(e.nodeType===8?e.parentNode:e),new Gs(t)},Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Io(t),e=e===null?null:e.stateNode,e},Ke.flushSync=function(e){return dn(e)},Ke.hydrate=function(e,t,n){if(!zi(t))throw Error(l(200));return Ui(null,e,t,!0,n)},Ke.hydrateRoot=function(e,t,n){if(!Js(e))throw Error(l(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=lc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=sc(t,null,e,1,n??null,i,!1,a,o),e[Dt]=t.current,cr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Hi(t)},Ke.render=function(e,t,n){if(!zi(t))throw Error(l(200));return Ui(null,e,t,!1,n)},Ke.unmountComponentAtNode=function(e){if(!zi(e))throw Error(l(40));return e._reactRootContainer?(dn(function(){Ui(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1},Ke.unstable_batchedUpdates=Fs,Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zi(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return Ui(e,t,n,!1,r)},Ke.version="18.3.1-next-f1338f8080-20240426",Ke}var hc;function Jd(){if(hc)return Ys.exports;hc=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),Ys.exports=Gd(),Ys.exports}var Cc;function Kd(){if(Cc)return Qi;Cc=1;var s=Jd();return Qi.createRoot=s.createRoot,Qi.hydrateRoot=s.hydrateRoot,Qi}var Xd=Kd();/**
 * react-router v7.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var yc="popstate";function wc(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function Yd(s={}){function u(f,m){let{pathname:C="/",search:h="",hash:S=""}=gn(f.location.hash.substring(1));return!C.startsWith("/")&&!C.startsWith(".")&&(C="/"+C),io("",{pathname:C,search:h,hash:S},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function l(f,m){let C=f.document.querySelector("base"),h="";if(C&&C.getAttribute("href")){let S=f.location.href,D=S.indexOf("#");h=D===-1?S:S.slice(0,D)}return h+"#"+(typeof m=="string"?m:Nr(m))}function c(f,m){yt(f.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(m)})`)}return ef(u,l,c,s)}function ye(s,u){if(s===!1||s===null||typeof s>"u")throw new Error(u)}function yt(s,u){if(!s){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function Zd(){return Math.random().toString(36).substring(2,10)}function xc(s,u){return{usr:s.state,key:s.key,idx:u,masked:s.mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function io(s,u,l=null,c,f){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof u=="string"?gn(u):u,state:l,key:u&&u.key||c||Zd(),mask:f}}function Nr({pathname:s="/",search:u="",hash:l=""}){return u&&u!=="?"&&(s+=u.charAt(0)==="?"?u:"?"+u),l&&l!=="#"&&(s+=l.charAt(0)==="#"?l:"#"+l),s}function gn(s){let u={};if(s){let l=s.indexOf("#");l>=0&&(u.hash=s.substring(l),s=s.substring(0,l));let c=s.indexOf("?");c>=0&&(u.search=s.substring(c),s=s.substring(0,c)),s&&(u.pathname=s)}return u}function ef(s,u,l,c={}){let{window:f=document.defaultView,v5Compat:m=!1}=c,C=f.history,h="POP",S=null,D=A();D==null&&(D=0,C.replaceState({...C.state,idx:D},""));function A(){return(C.state||{idx:null}).idx}function j(){h="POP";let b=A(),q=b==null?null:b-D;D=b,S&&S({action:h,location:I.location,delta:q})}function P(b,q){h="PUSH";let K=wc(b)?b:io(I.location,b,q);l&&l(K,b),D=A()+1;let X=xc(K,D),ne=I.createHref(K.mask||K);try{C.pushState(X,"",ne)}catch(se){if(se instanceof DOMException&&se.name==="DataCloneError")throw se;f.location.assign(ne)}m&&S&&S({action:h,location:I.location,delta:1})}function $(b,q){h="REPLACE";let K=wc(b)?b:io(I.location,b,q);l&&l(K,b),D=A();let X=xc(K,D),ne=I.createHref(K.mask||K);C.replaceState(X,"",ne),m&&S&&S({action:h,location:I.location,delta:0})}function Q(b){return tf(b)}let I={get action(){return h},get location(){return s(f,C)},listen(b){if(S)throw new Error("A history only accepts one active listener");return f.addEventListener(yc,j),S=b,()=>{f.removeEventListener(yc,j),S=null}},createHref(b){return u(f,b)},createURL:Q,encodeLocation(b){let q=Q(b);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:P,replace:$,go(b){return C.go(b)}};return I}function tf(s,u=!1){let l="http://localhost";typeof window<"u"&&(l=window.location.origin!=="null"?window.location.origin:window.location.href),ye(l,"No window.location.(origin|href) available to create URL");let c=typeof s=="string"?s:Nr(s);return c=c.replace(/ $/,"%20"),!u&&c.startsWith("//")&&(c=l+c),new URL(c,l)}function Dc(s,u,l="/"){return nf(s,u,l,!1)}function nf(s,u,l,c,f){let m=typeof u=="string"?gn(u):u,C=It(m.pathname||"/",l);if(C==null)return null;let h=rf(s),S=null,D=gf(C);for(let A=0;S==null&&A<h.length;++A)S=mf(h[A],D,c);return S}function rf(s){let u=Lc(s);return af(u),u}function Lc(s,u=[],l=[],c="",f=!1){let m=(C,h,S=f,D)=>{let A={relativePath:D===void 0?C.path||"":D,caseSensitive:C.caseSensitive===!0,childrenIndex:h,route:C};if(A.relativePath.startsWith("/")){if(!A.relativePath.startsWith(c)&&S)return;ye(A.relativePath.startsWith(c),`Absolute route path "${A.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),A.relativePath=A.relativePath.slice(c.length)}let j=Ct([c,A.relativePath]),P=l.concat(A);C.children&&C.children.length>0&&(ye(C.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${j}".`),Lc(C.children,u,P,j,S)),!(C.path==null&&!C.index)&&u.push({path:j,score:df(j,C.index),routesMeta:P})};return s.forEach((C,h)=>{var S;if(C.path===""||!((S=C.path)!=null&&S.includes("?")))m(C,h);else for(let D of Rc(C.path))m(C,h,!0,D)}),u}function Rc(s){let u=s.split("/");if(u.length===0)return[];let[l,...c]=u,f=l.endsWith("?"),m=l.replace(/\?$/,"");if(c.length===0)return f?[m,""]:[m];let C=Rc(c.join("/")),h=[];return h.push(...C.map(S=>S===""?m:[m,S].join("/"))),f&&h.push(...C),h.map(S=>s.startsWith("/")&&S===""?"/":S)}function af(s){s.sort((u,l)=>u.score!==l.score?l.score-u.score:ff(u.routesMeta.map(c=>c.childrenIndex),l.routesMeta.map(c=>c.childrenIndex)))}var sf=/^:[\w-]+$/,of=3,lf=2,uf=1,cf=10,pf=-2,Sc=s=>s==="*";function df(s,u){let l=s.split("/"),c=l.length;return l.some(Sc)&&(c+=pf),u&&(c+=lf),l.filter(f=>!Sc(f)).reduce((f,m)=>f+(sf.test(m)?of:m===""?uf:cf),c)}function ff(s,u){return s.length===u.length&&s.slice(0,-1).every((c,f)=>c===u[f])?s[s.length-1]-u[u.length-1]:0}function mf(s,u,l=!1){let{routesMeta:c}=s,f={},m="/",C=[];for(let h=0;h<c.length;++h){let S=c[h],D=h===c.length-1,A=m==="/"?u:u.slice(m.length)||"/",j=Xi({path:S.relativePath,caseSensitive:S.caseSensitive,end:D},A),P=S.route;if(!j&&D&&l&&!c[c.length-1].route.index&&(j=Xi({path:S.relativePath,caseSensitive:S.caseSensitive,end:!1},A)),!j)return null;Object.assign(f,j.params),C.push({params:f,pathname:Ct([m,j.pathname]),pathnameBase:wf(Ct([m,j.pathnameBase])),route:P}),j.pathnameBase!=="/"&&(m=Ct([m,j.pathnameBase]))}return C}function Xi(s,u){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[l,c]=vf(s.path,s.caseSensitive,s.end),f=u.match(l);if(!f)return null;let m=f[0],C=m.replace(/(.)\/+$/,"$1"),h=f.slice(1);return{params:c.reduce((D,{paramName:A,isOptional:j},P)=>{if(A==="*"){let Q=h[P]||"";C=m.slice(0,m.length-Q.length).replace(/(.)\/+$/,"$1")}const $=h[P];return j&&!$?D[A]=void 0:D[A]=($||"").replace(/%2F/g,"/"),D},{}),pathname:m,pathnameBase:C,pattern:s}}function vf(s,u=!1,l=!0){yt(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let c=[],f="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(C,h,S,D,A)=>{if(c.push({paramName:h,isOptional:S!=null}),S){let j=A.charAt(D+C.length);return j&&j!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(c.push({paramName:"*"}),f+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?f+="\\/*$":s!==""&&s!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,u?void 0:"i"),c]}function gf(s){try{return s.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return yt(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),s}}function It(s,u){if(u==="/")return s;if(!s.toLowerCase().startsWith(u.toLowerCase()))return null;let l=u.endsWith("/")?u.length-1:u.length,c=s.charAt(l);return c&&c!=="/"?null:s.slice(l)||"/"}var hf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Cf(s,u="/"){let{pathname:l,search:c="",hash:f=""}=typeof s=="string"?gn(s):s,m;return l?(l=Bc(l),l.startsWith("/")?m=Ec(l.substring(1),"/"):m=Ec(l,u)):m=u,{pathname:m,search:xf(c),hash:Sf(f)}}function Ec(s,u){let l=Yi(u).split("/");return s.split("/").forEach(f=>{f===".."?l.length>1&&l.pop():f!=="."&&l.push(f)}),l.length>1?l.join("/"):"/"}function to(s,u,l,c){return`Cannot include a '${s}' character in a manually specified \`to.${u}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function yf(s){return s.filter((u,l)=>l===0||u.route.path&&u.route.path.length>0)}function Nc(s){let u=yf(s);return u.map((l,c)=>c===u.length-1?l.pathname:l.pathnameBase)}function oo(s,u,l,c=!1){let f;typeof s=="string"?f=gn(s):(f={...s},ye(!f.pathname||!f.pathname.includes("?"),to("?","pathname","search",f)),ye(!f.pathname||!f.pathname.includes("#"),to("#","pathname","hash",f)),ye(!f.search||!f.search.includes("#"),to("#","search","hash",f)));let m=s===""||f.pathname==="",C=m?"/":f.pathname,h;if(C==null)h=l;else{let j=u.length-1;if(!c&&C.startsWith("..")){let P=C.split("/");for(;P[0]==="..";)P.shift(),j-=1;f.pathname=P.join("/")}h=j>=0?u[j]:"/"}let S=Cf(f,h),D=C&&C!=="/"&&C.endsWith("/"),A=(m||C===".")&&l.endsWith("/");return!S.pathname.endsWith("/")&&(D||A)&&(S.pathname+="/"),S}var Bc=s=>s.replace(/\/\/+/g,"/"),Ct=s=>Bc(s.join("/")),Yi=s=>s.replace(/\/+$/,""),wf=s=>Yi(s).replace(/^\/*/,"/"),xf=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Sf=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,Ef=class{constructor(s,u,l,c=!1){this.status=s,this.statusText=u||"",this.internal=c,l instanceof Error?(this.data=l.toString(),this.error=l):this.data=l}};function Af(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function kf(s){let u=s.map(l=>l.route.path).filter(Boolean);return Ct(u)||"/"}var Tc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function bc(s,u){let l=s;if(typeof l!="string"||!hf.test(l))return{absoluteURL:void 0,isExternal:!1,to:l};let c=l,f=!1;if(Tc)try{let m=new URL(window.location.href),C=l.startsWith("//")?new URL(m.protocol+l):new URL(l),h=It(C.pathname,u);C.origin===m.origin&&h!=null?l=h+C.search+C.hash:f=!0}catch{yt(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:f,to:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Pc=["POST","PUT","PATCH","DELETE"];new Set(Pc);var jf=["GET",...Pc];new Set(jf);var zn=k.createContext(null);zn.displayName="DataRouter";var ta=k.createContext(null);ta.displayName="DataRouterState";var Ic=k.createContext(!1);function Df(){return k.useContext(Ic)}var Mc=k.createContext({isTransitioning:!1});Mc.displayName="ViewTransition";var Lf=k.createContext(new Map);Lf.displayName="Fetchers";var Rf=k.createContext(null);Rf.displayName="Await";var ct=k.createContext(null);ct.displayName="Navigation";var Tr=k.createContext(null);Tr.displayName="Location";var kt=k.createContext({outlet:null,matches:[],isDataRoute:!1});kt.displayName="Route";var lo=k.createContext(null);lo.displayName="RouteError";var Oc="REACT_ROUTER_ERROR",Nf="REDIRECT",Bf="ROUTE_ERROR_RESPONSE";function Tf(s){if(s.startsWith(`${Oc}:${Nf}:{`))try{let u=JSON.parse(s.slice(28));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.location=="string"&&typeof u.reloadDocument=="boolean"&&typeof u.replace=="boolean")return u}catch{}}function bf(s){if(s.startsWith(`${Oc}:${Bf}:{`))try{let u=JSON.parse(s.slice(40));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string")return new Ef(u.status,u.statusText,u.data)}catch{}}function Pf(s,{relative:u}={}){ye(br(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:c}=k.useContext(ct),{hash:f,pathname:m,search:C}=Pr(s,{relative:u}),h=m;return l!=="/"&&(h=m==="/"?l:Ct([l,m])),c.createHref({pathname:h,search:C,hash:f})}function br(){return k.useContext(Tr)!=null}function Mt(){return ye(br(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(Tr).location}var qc="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function _c(s){k.useContext(ct).static||k.useLayoutEffect(s)}function If(){let{isDataRoute:s}=k.useContext(kt);return s?Gf():Mf()}function Mf(){ye(br(),"useNavigate() may be used only in the context of a <Router> component.");let s=k.useContext(zn),{basename:u,navigator:l}=k.useContext(ct),{matches:c}=k.useContext(kt),{pathname:f}=Mt(),m=JSON.stringify(Nc(c)),C=k.useRef(!1);return _c(()=>{C.current=!0}),k.useCallback((S,D={})=>{if(yt(C.current,qc),!C.current)return;if(typeof S=="number"){l.go(S);return}let A=oo(S,JSON.parse(m),f,D.relative==="path");s==null&&u!=="/"&&(A.pathname=A.pathname==="/"?u:Ct([u,A.pathname])),(D.replace?l.replace:l.push)(A,D.state,D)},[u,l,m,f,s])}k.createContext(null);function Fc(){let{matches:s}=k.useContext(kt),u=s[s.length-1];return(u==null?void 0:u.params)??{}}function Pr(s,{relative:u}={}){let{matches:l}=k.useContext(kt),{pathname:c}=Mt(),f=JSON.stringify(Nc(l));return k.useMemo(()=>oo(s,JSON.parse(f),c,u==="path"),[s,f,c,u])}function Of(s,u){return Hc(s,u)}function Hc(s,u,l){var b;ye(br(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=k.useContext(ct),{matches:f}=k.useContext(kt),m=f[f.length-1],C=m?m.params:{},h=m?m.pathname:"/",S=m?m.pathnameBase:"/",D=m&&m.route;{let q=D&&D.path||"";Uc(h,!D||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let A=Mt(),j;if(u){let q=typeof u=="string"?gn(u):u;ye(S==="/"||((b=q.pathname)==null?void 0:b.startsWith(S)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${q.pathname}" was given in the \`location\` prop.`),j=q}else j=A;let P=j.pathname||"/",$=P;if(S!=="/"){let q=S.replace(/^\//,"").split("/");$="/"+P.replace(/^\//,"").split("/").slice(q.length).join("/")}let Q=l&&l.state.matches.length?l.state.matches.map(q=>Object.assign(q,{route:l.manifest[q.route.id]||q.route})):Dc(s,{pathname:$});yt(D||Q!=null,`No routes matched location "${j.pathname}${j.search}${j.hash}" `),yt(Q==null||Q[Q.length-1].route.element!==void 0||Q[Q.length-1].route.Component!==void 0||Q[Q.length-1].route.lazy!==void 0,`Matched leaf route at location "${j.pathname}${j.search}${j.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let I=zf(Q&&Q.map(q=>Object.assign({},q,{params:Object.assign({},C,q.params),pathname:Ct([S,c.encodeLocation?c.encodeLocation(q.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?S:Ct([S,c.encodeLocation?c.encodeLocation(q.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathnameBase])})),f,l);return u&&I?k.createElement(Tr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...j},navigationType:"POP"}},I):I}function qf(){let s=Vf(),u=Af(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),l=s instanceof Error?s.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},m={padding:"2px 4px",backgroundColor:c},C=null;return console.error("Error handled by React Router default ErrorBoundary:",s),C=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:m},"ErrorBoundary")," or"," ",k.createElement("code",{style:m},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},u),l?k.createElement("pre",{style:f},l):null,C)}var _f=k.createElement(qf,null),zc=class extends k.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,u){return u.location!==s.location||u.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:u.error,location:u.location,revalidation:s.revalidation||u.revalidation}}componentDidCatch(s,u){this.props.onError?this.props.onError(s,u):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const l=bf(s.digest);l&&(s=l)}let u=s!==void 0?k.createElement(kt.Provider,{value:this.props.routeContext},k.createElement(lo.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?k.createElement(Ff,{error:s},u):u}};zc.contextType=Ic;var no=new WeakMap;function Ff({children:s,error:u}){let{basename:l}=k.useContext(ct);if(typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){let c=Tf(u.digest);if(c){let f=no.get(u);if(f)throw f;let m=bc(c.location,l);if(Tc&&!no.get(u))if(m.isExternal||c.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const C=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:c.replace}));throw no.set(u,C),C}return k.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return s}function Hf({routeContext:s,match:u,children:l}){let c=k.useContext(zn);return c&&c.static&&c.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=u.route.id),k.createElement(kt.Provider,{value:s},l)}function zf(s,u=[],l){let c=l==null?void 0:l.state;if(s==null){if(!c)return null;if(c.errors)s=c.matches;else if(u.length===0&&!c.initialized&&c.matches.length>0)s=c.matches;else return null}let f=s,m=c==null?void 0:c.errors;if(m!=null){let A=f.findIndex(j=>j.route.id&&(m==null?void 0:m[j.route.id])!==void 0);ye(A>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),f=f.slice(0,Math.min(f.length,A+1))}let C=!1,h=-1;if(l&&c){C=c.renderFallback;for(let A=0;A<f.length;A++){let j=f[A];if((j.route.HydrateFallback||j.route.hydrateFallbackElement)&&(h=A),j.route.id){let{loaderData:P,errors:$}=c,Q=j.route.loader&&!P.hasOwnProperty(j.route.id)&&(!$||$[j.route.id]===void 0);if(j.route.lazy||Q){l.isStatic&&(C=!0),h>=0?f=f.slice(0,h+1):f=[f[0]];break}}}}let S=l==null?void 0:l.onError,D=c&&S?(A,j)=>{var P,$;S(A,{location:c.location,params:(($=(P=c.matches)==null?void 0:P[0])==null?void 0:$.params)??{},pattern:kf(c.matches),errorInfo:j})}:void 0;return f.reduceRight((A,j,P)=>{let $,Q=!1,I=null,b=null;c&&($=m&&j.route.id?m[j.route.id]:void 0,I=j.route.errorElement||_f,C&&(h<0&&P===0?(Uc("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Q=!0,b=null):h===P&&(Q=!0,b=j.route.hydrateFallbackElement||null)));let q=u.concat(f.slice(0,P+1)),K=()=>{let X;return $?X=I:Q?X=b:j.route.Component?X=k.createElement(j.route.Component,null):j.route.element?X=j.route.element:X=A,k.createElement(Hf,{match:j,routeContext:{outlet:A,matches:q,isDataRoute:c!=null},children:X})};return c&&(j.route.ErrorBoundary||j.route.errorElement||P===0)?k.createElement(zc,{location:c.location,revalidation:c.revalidation,component:I,error:$,children:K(),routeContext:{outlet:null,matches:q,isDataRoute:!0},onError:D}):K()},null)}function uo(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Uf(s){let u=k.useContext(zn);return ye(u,uo(s)),u}function $f(s){let u=k.useContext(ta);return ye(u,uo(s)),u}function Qf(s){let u=k.useContext(kt);return ye(u,uo(s)),u}function co(s){let u=Qf(s),l=u.matches[u.matches.length-1];return ye(l.route.id,`${s} can only be used on routes that contain a unique "id"`),l.route.id}function Wf(){return co("useRouteId")}function Vf(){var c;let s=k.useContext(lo),u=$f("useRouteError"),l=co("useRouteError");return s!==void 0?s:(c=u.errors)==null?void 0:c[l]}function Gf(){let{router:s}=Uf("useNavigate"),u=co("useNavigate"),l=k.useRef(!1);return _c(()=>{l.current=!0}),k.useCallback(async(f,m={})=>{yt(l.current,qc),l.current&&(typeof f=="number"?await s.navigate(f):await s.navigate(f,{fromRouteId:u,...m}))},[s,u])}var Ac={};function Uc(s,u,l){!u&&!Ac[s]&&(Ac[s]=!0,yt(!1,l))}k.memo(Jf);function Jf({routes:s,manifest:u,future:l,state:c,isStatic:f,onError:m}){return Hc(s,void 0,{manifest:u,state:c,isStatic:f,onError:m})}function Gi(s){ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Kf({basename:s="/",children:u=null,location:l,navigationType:c="POP",navigator:f,static:m=!1,useTransitions:C}){ye(!br(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),S=k.useMemo(()=>({basename:h,navigator:f,static:m,useTransitions:C,future:{}}),[h,f,m,C]);typeof l=="string"&&(l=gn(l));let{pathname:D="/",search:A="",hash:j="",state:P=null,key:$="default",mask:Q}=l,I=k.useMemo(()=>{let b=It(D,h);return b==null?null:{location:{pathname:b,search:A,hash:j,state:P,key:$,mask:Q},navigationType:c}},[h,D,A,j,P,$,c,Q]);return yt(I!=null,`<Router basename="${h}"> is not able to match the URL "${D}${A}${j}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:k.createElement(ct.Provider,{value:S},k.createElement(Tr.Provider,{children:u,value:I}))}function Xf({children:s,location:u}){return Of(ao(s),u)}function ao(s,u=[]){let l=[];return k.Children.forEach(s,(c,f)=>{if(!k.isValidElement(c))return;let m=[...u,f];if(c.type===k.Fragment){l.push.apply(l,ao(c.props.children,m));return}ye(c.type===Gi,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ye(!c.props.index||!c.props.children,"An index route cannot have child routes.");let C={id:c.props.id||m.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(C.children=ao(c.props.children,m)),l.push(C)}),l}var Ji="get",Ki="application/x-www-form-urlencoded";function na(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function Yf(s){return na(s)&&s.tagName.toLowerCase()==="button"}function Zf(s){return na(s)&&s.tagName.toLowerCase()==="form"}function e2(s){return na(s)&&s.tagName.toLowerCase()==="input"}function t2(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function n2(s,u){return s.button===0&&(!u||u==="_self")&&!t2(s)}var Wi=null;function r2(){if(Wi===null)try{new FormData(document.createElement("form"),0),Wi=!1}catch{Wi=!0}return Wi}var i2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ro(s){return s!=null&&!i2.has(s)?(yt(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ki}"`),null):s}function a2(s,u){let l,c,f,m,C;if(Zf(s)){let h=s.getAttribute("action");c=h?It(h,u):null,l=s.getAttribute("method")||Ji,f=ro(s.getAttribute("enctype"))||Ki,m=new FormData(s)}else if(Yf(s)||e2(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let S=s.getAttribute("formaction")||h.getAttribute("action");if(c=S?It(S,u):null,l=s.getAttribute("formmethod")||h.getAttribute("method")||Ji,f=ro(s.getAttribute("formenctype"))||ro(h.getAttribute("enctype"))||Ki,m=new FormData(h,s),!r2()){let{name:D,type:A,value:j}=s;if(A==="image"){let P=D?`${D}.`:"";m.append(`${P}x`,"0"),m.append(`${P}y`,"0")}else D&&m.append(D,j)}}else{if(na(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=Ji,c=null,f=Ki,C=s}return m&&f==="text/plain"&&(C=m,m=void 0),{action:c,method:l.toLowerCase(),encType:f,formData:m,body:C}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function po(s,u){if(s===!1||s===null||typeof s>"u")throw new Error(u)}function $c(s,u,l,c){let f=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return l?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${c}`:f.pathname=`${f.pathname}.${c}`:f.pathname==="/"?f.pathname=`_root.${c}`:u&&It(f.pathname,u)==="/"?f.pathname=`${Yi(u)}/_root.${c}`:f.pathname=`${Yi(f.pathname)}.${c}`,f}async function s2(s,u){if(s.id in u)return u[s.id];try{let l=await import(s.module);return u[s.id]=l,l}catch(l){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function o2(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function l2(s,u,l){let c=await Promise.all(s.map(async f=>{let m=u.routes[f.route.id];if(m){let C=await s2(m,l);return C.links?C.links():[]}return[]}));return d2(c.flat(1).filter(o2).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function kc(s,u,l,c,f,m){let C=(S,D)=>l[D]?S.route.id!==l[D].route.id:!0,h=(S,D)=>{var A;return l[D].pathname!==S.pathname||((A=l[D].route.path)==null?void 0:A.endsWith("*"))&&l[D].params["*"]!==S.params["*"]};return m==="assets"?u.filter((S,D)=>C(S,D)||h(S,D)):m==="data"?u.filter((S,D)=>{var j;let A=c.routes[S.route.id];if(!A||!A.hasLoader)return!1;if(C(S,D)||h(S,D))return!0;if(S.route.shouldRevalidate){let P=S.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((j=l[0])==null?void 0:j.params)||{},nextUrl:new URL(s,window.origin),nextParams:S.params,defaultShouldRevalidate:!0});if(typeof P=="boolean")return P}return!0}):[]}function u2(s,u,{includeHydrateFallback:l}={}){return c2(s.map(c=>{let f=u.routes[c.route.id];if(!f)return[];let m=[f.module];return f.clientActionModule&&(m=m.concat(f.clientActionModule)),f.clientLoaderModule&&(m=m.concat(f.clientLoaderModule)),l&&f.hydrateFallbackModule&&(m=m.concat(f.hydrateFallbackModule)),f.imports&&(m=m.concat(f.imports)),m}).flat(1))}function c2(s){return[...new Set(s)]}function p2(s){let u={},l=Object.keys(s).sort();for(let c of l)u[c]=s[c];return u}function d2(s,u){let l=new Set;return new Set(u),s.reduce((c,f)=>{let m=JSON.stringify(p2(f));return l.has(m)||(l.add(m),c.push({key:m,link:f})),c},[])}function fo(){let s=k.useContext(zn);return po(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function f2(){let s=k.useContext(ta);return po(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var mo=k.createContext(void 0);mo.displayName="FrameworkContext";function vo(){let s=k.useContext(mo);return po(s,"You must render this element inside a <HydratedRouter> element"),s}function m2(s,u){let l=k.useContext(mo),[c,f]=k.useState(!1),[m,C]=k.useState(!1),{onFocus:h,onBlur:S,onMouseEnter:D,onMouseLeave:A,onTouchStart:j}=u,P=k.useRef(null);k.useEffect(()=>{if(s==="render"&&C(!0),s==="viewport"){let I=q=>{q.forEach(K=>{C(K.isIntersecting)})},b=new IntersectionObserver(I,{threshold:.5});return P.current&&b.observe(P.current),()=>{b.disconnect()}}},[s]),k.useEffect(()=>{if(c){let I=setTimeout(()=>{C(!0)},100);return()=>{clearTimeout(I)}}},[c]);let $=()=>{f(!0)},Q=()=>{f(!1),C(!1)};return l?s!=="intent"?[m,P,{}]:[m,P,{onFocus:Rr(h,$),onBlur:Rr(S,Q),onMouseEnter:Rr(D,$),onMouseLeave:Rr(A,Q),onTouchStart:Rr(j,$)}]:[!1,P,{}]}function Rr(s,u){return l=>{s&&s(l),l.defaultPrevented||u(l)}}function v2({page:s,...u}){let l=Df(),{router:c}=fo(),f=k.useMemo(()=>Dc(c.routes,s,c.basename),[c.routes,s,c.basename]);return f?l?k.createElement(h2,{page:s,matches:f,...u}):k.createElement(C2,{page:s,matches:f,...u}):null}function g2(s){let{manifest:u,routeModules:l}=vo(),[c,f]=k.useState([]);return k.useEffect(()=>{let m=!1;return l2(s,u,l).then(C=>{m||f(C)}),()=>{m=!0}},[s,u,l]),c}function h2({page:s,matches:u,...l}){let c=Mt(),{future:f}=vo(),{basename:m}=fo(),C=k.useMemo(()=>{if(s===c.pathname+c.search+c.hash)return[];let h=$c(s,m,f.unstable_trailingSlashAwareDataRequests,"rsc"),S=!1,D=[];for(let A of u)typeof A.route.shouldRevalidate=="function"?S=!0:D.push(A.route.id);return S&&D.length>0&&h.searchParams.set("_routes",D.join(",")),[h.pathname+h.search]},[m,f.unstable_trailingSlashAwareDataRequests,s,c,u]);return k.createElement(k.Fragment,null,C.map(h=>k.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...l})))}function C2({page:s,matches:u,...l}){let c=Mt(),{future:f,manifest:m,routeModules:C}=vo(),{basename:h}=fo(),{loaderData:S,matches:D}=f2(),A=k.useMemo(()=>kc(s,u,D,m,c,"data"),[s,u,D,m,c]),j=k.useMemo(()=>kc(s,u,D,m,c,"assets"),[s,u,D,m,c]),P=k.useMemo(()=>{if(s===c.pathname+c.search+c.hash)return[];let I=new Set,b=!1;if(u.forEach(K=>{var ne;let X=m.routes[K.route.id];!X||!X.hasLoader||(!A.some(se=>se.route.id===K.route.id)&&K.route.id in S&&((ne=C[K.route.id])!=null&&ne.shouldRevalidate)||X.hasClientLoader?b=!0:I.add(K.route.id))}),I.size===0)return[];let q=$c(s,h,f.unstable_trailingSlashAwareDataRequests,"data");return b&&I.size>0&&q.searchParams.set("_routes",u.filter(K=>I.has(K.route.id)).map(K=>K.route.id).join(",")),[q.pathname+q.search]},[h,f.unstable_trailingSlashAwareDataRequests,S,c,m,A,u,s,C]),$=k.useMemo(()=>u2(j,m),[j,m]),Q=g2(j);return k.createElement(k.Fragment,null,P.map(I=>k.createElement("link",{key:I,rel:"prefetch",as:"fetch",href:I,...l})),$.map(I=>k.createElement("link",{key:I,rel:"modulepreload",href:I,...l})),Q.map(({key:I,link:b})=>k.createElement("link",{key:I,nonce:l.nonce,...b,crossOrigin:b.crossOrigin??l.crossOrigin})))}function y2(...s){return u=>{s.forEach(l=>{typeof l=="function"?l(u):l!=null&&(l.current=u)})}}var w2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{w2&&(window.__reactRouterVersion="7.15.1")}catch{}function x2({basename:s,children:u,useTransitions:l,window:c}){let f=k.useRef();f.current==null&&(f.current=Yd({window:c,v5Compat:!0}));let m=f.current,[C,h]=k.useState({action:m.action,location:m.location}),S=k.useCallback(D=>{l===!1?h(D):k.startTransition(()=>h(D))},[l]);return k.useLayoutEffect(()=>m.listen(S),[m,S]),k.createElement(Kf,{basename:s,children:u,location:C.location,navigationType:C.action,navigator:m,useTransitions:l})}var Qc=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Te=k.forwardRef(function({onClick:u,discover:l="render",prefetch:c="none",relative:f,reloadDocument:m,replace:C,mask:h,state:S,target:D,to:A,preventScrollReset:j,viewTransition:P,defaultShouldRevalidate:$,...Q},I){let{basename:b,navigator:q,useTransitions:K}=k.useContext(ct),X=typeof A=="string"&&Qc.test(A),ne=bc(A,b);A=ne.to;let se=Pf(A,{relative:f}),ue=Mt(),ge=null;if(h){let je=oo(h,[],ue.mask?ue.mask.pathname:"/",!0);b!=="/"&&(je.pathname=je.pathname==="/"?b:Ct([b,je.pathname])),ge=q.createHref(je)}let[ke,ze,Xe]=m2(c,Q),jt=k2(A,{replace:C,mask:h,state:S,target:D,preventScrollReset:j,relative:f,viewTransition:P,defaultShouldRevalidate:$,useTransitions:K});function rt(je){u&&u(je),je.defaultPrevented||jt(je)}let Ie=!(ne.isExternal||m),Ue=k.createElement("a",{...Q,...Xe,href:(Ie?ge:void 0)||ne.absoluteURL||se,onClick:Ie?rt:u,ref:y2(I,ze),target:D,"data-discover":!X&&l==="render"?"true":void 0});return ke&&!X?k.createElement(k.Fragment,null,Ue,k.createElement(v2,{page:se})):Ue});Te.displayName="Link";var S2=k.forwardRef(function({"aria-current":u="page",caseSensitive:l=!1,className:c="",end:f=!1,style:m,to:C,viewTransition:h,children:S,...D},A){let j=Pr(C,{relative:D.relative}),P=Mt(),$=k.useContext(ta),{navigator:Q,basename:I}=k.useContext(ct),b=$!=null&&N2(j)&&h===!0,q=Q.encodeLocation?Q.encodeLocation(j).pathname:j.pathname,K=P.pathname,X=$&&$.navigation&&$.navigation.location?$.navigation.location.pathname:null;l||(K=K.toLowerCase(),X=X?X.toLowerCase():null,q=q.toLowerCase()),X&&I&&(X=It(X,I)||X);const ne=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let se=K===q||!f&&K.startsWith(q)&&K.charAt(ne)==="/",ue=X!=null&&(X===q||!f&&X.startsWith(q)&&X.charAt(q.length)==="/"),ge={isActive:se,isPending:ue,isTransitioning:b},ke=se?u:void 0,ze;typeof c=="function"?ze=c(ge):ze=[c,se?"active":null,ue?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let Xe=typeof m=="function"?m(ge):m;return k.createElement(Te,{...D,"aria-current":ke,className:ze,ref:A,style:Xe,to:C,viewTransition:h},typeof S=="function"?S(ge):S)});S2.displayName="NavLink";var E2=k.forwardRef(({discover:s="render",fetcherKey:u,navigate:l,reloadDocument:c,replace:f,state:m,method:C=Ji,action:h,onSubmit:S,relative:D,preventScrollReset:A,viewTransition:j,defaultShouldRevalidate:P,...$},Q)=>{let{useTransitions:I}=k.useContext(ct),b=L2(),q=R2(h,{relative:D}),K=C.toLowerCase()==="get"?"get":"post",X=typeof h=="string"&&Qc.test(h),ne=se=>{if(S&&S(se),se.defaultPrevented)return;se.preventDefault();let ue=se.nativeEvent.submitter,ge=(ue==null?void 0:ue.getAttribute("formmethod"))||C,ke=()=>b(ue||se.currentTarget,{fetcherKey:u,method:ge,navigate:l,replace:f,state:m,relative:D,preventScrollReset:A,viewTransition:j,defaultShouldRevalidate:P});I&&l!==!1?k.startTransition(()=>ke()):ke()};return k.createElement("form",{ref:Q,method:K,action:q,onSubmit:c?S:ne,...$,"data-discover":!X&&s==="render"?"true":void 0})});E2.displayName="Form";function A2(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wc(s){let u=k.useContext(zn);return ye(u,A2(s)),u}function k2(s,{target:u,replace:l,mask:c,state:f,preventScrollReset:m,relative:C,viewTransition:h,defaultShouldRevalidate:S,useTransitions:D}={}){let A=If(),j=Mt(),P=Pr(s,{relative:C});return k.useCallback($=>{if(n2($,u)){$.preventDefault();let Q=l!==void 0?l:Nr(j)===Nr(P),I=()=>A(s,{replace:Q,mask:c,state:f,preventScrollReset:m,relative:C,viewTransition:h,defaultShouldRevalidate:S});D?k.startTransition(()=>I()):I()}},[j,A,P,l,c,f,u,s,m,C,h,S,D])}var j2=0,D2=()=>`__${String(++j2)}__`;function L2(){let{router:s}=Wc("useSubmit"),{basename:u}=k.useContext(ct),l=Wf(),c=s.fetch,f=s.navigate;return k.useCallback(async(m,C={})=>{let{action:h,method:S,encType:D,formData:A,body:j}=a2(m,u);if(C.navigate===!1){let P=C.fetcherKey||D2();await c(P,l,C.action||h,{defaultShouldRevalidate:C.defaultShouldRevalidate,preventScrollReset:C.preventScrollReset,formData:A,body:j,formMethod:C.method||S,formEncType:C.encType||D,flushSync:C.flushSync})}else await f(C.action||h,{defaultShouldRevalidate:C.defaultShouldRevalidate,preventScrollReset:C.preventScrollReset,formData:A,body:j,formMethod:C.method||S,formEncType:C.encType||D,replace:C.replace,state:C.state,fromRouteId:l,flushSync:C.flushSync,viewTransition:C.viewTransition})},[c,f,u,l])}function R2(s,{relative:u}={}){let{basename:l}=k.useContext(ct),c=k.useContext(kt);ye(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),m={...Pr(s||".",{relative:u})},C=Mt();if(s==null){m.search=C.search;let h=new URLSearchParams(m.search),S=h.getAll("index");if(S.some(A=>A==="")){h.delete("index"),S.filter(j=>j).forEach(j=>h.append("index",j));let A=h.toString();m.search=A?`?${A}`:""}}return(!s||s===".")&&f.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(m.pathname=m.pathname==="/"?l:Ct([l,m.pathname])),Nr(m)}function N2(s,{relative:u}={}){let l=k.useContext(Mc);ye(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Wc("useViewTransitionState"),f=Pr(s,{relative:u});if(!l.isTransitioning)return!1;let m=It(l.currentLocation.pathname,c)||l.currentLocation.pathname,C=It(l.nextLocation.pathname,c)||l.nextLocation.pathname;return Xi(f.pathname,C)!=null||Xi(f.pathname,m)!=null}const jc=[{id:"backend",name:"后端开发工具",icon:"🖥️",type:"tool"},{id:"frontend",name:"前端开发工具",icon:"🌐",type:"tool"},{id:"devops",name:"DevOps工具",icon:"🔧",type:"tool"},{id:"wechat",name:"微信生态",icon:"💬",type:"tool"},{id:"basics",name:"Java基础",icon:"📚",type:"question"},{id:"oop",name:"面向对象",icon:"🎯",type:"question"},{id:"collection",name:"集合框架",icon:"📦",type:"question"},{id:"concurrent",name:"并发编程",icon:"⚡",type:"question"},{id:"jvm",name:"JVM原理",icon:"🔧",type:"question"},{id:"advanced",name:"高级特性",icon:"🚀",type:"question"},{id:"design-pattern",name:"设计模式",icon:"🎨",type:"question"},{id:"microservice",name:"微服务与分布式",icon:"🌐",type:"question"}],B2=({isOpen:s,onClose:u})=>{const l=c=>{const f=document.getElementById(c);f&&(f.scrollIntoView({behavior:"smooth"}),u())};return d.jsxs(d.Fragment,{children:[s&&d.jsx("div",{"trae-inspector-start-line":"43","trae-inspector-start-column":"8","trae-inspector-end-line":"46","trae-inspector-end-column":"10","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden",onClick:u}),d.jsx("aside",{"trae-inspector-start-line":"50","trae-inspector-start-column":"6","trae-inspector-end-line":"90","trae-inspector-end-column":"14","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"hidden md:block fixed left-0 top-16 h-screen w-64 bg-white shadow-xl overflow-y-auto border-r border-gray-100 z-40",children:d.jsxs("div",{"trae-inspector-start-line":"51","trae-inspector-start-column":"8","trae-inspector-end-line":"89","trae-inspector-end-column":"14","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"p-4",children:[d.jsxs("div",{"trae-inspector-start-line":"52","trae-inspector-start-column":"10","trae-inspector-end-line":"69","trae-inspector-end-column":"16","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"mb-6",children:[d.jsxs("h3",{"trae-inspector-start-line":"53","trae-inspector-start-column":"12","trae-inspector-end-line":"55","trae-inspector-end-column":"17","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3 flex items-center",children:[d.jsx("span",{"trae-inspector-start-line":"54","trae-inspector-start-column":"14","trae-inspector-end-line":"54","trae-inspector-end-column":"46","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%94%A7%22%2C%22textStartLine%22%3A%2254%22%2C%22textStartColumn%22%3A%2237%22%2C%22textEndLine%22%3A%2254%22%2C%22textEndColumn%22%3A%2239%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"mr-2",children:"🔧"})," 开发工具"]}),d.jsx("ul",{"trae-inspector-start-line":"56","trae-inspector-start-column":"12","trae-inspector-end-line":"68","trae-inspector-end-column":"17","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"space-y-1",children:jc.filter(c=>c.type==="tool").map(c=>d.jsx("li",{"trae-inspector-start-line":"58","trae-inspector-start-column":"16","trae-inspector-end-line":"66","trae-inspector-end-column":"21","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",children:d.jsxs("button",{"trae-inspector-start-line":"59","trae-inspector-start-column":"18","trae-inspector-end-line":"65","trae-inspector-end-column":"27","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",onClick:()=>l(c.id),className:"w-full text-left px-4 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r from-indigo-50 to-purple-50 hover:text-indigo-700 transition-all duration-300 flex items-center space-x-3 text-sm font-medium group",children:[d.jsx("span",{"trae-inspector-start-line":"63","trae-inspector-start-column":"20","trae-inspector-end-line":"63","trae-inspector-end-column":"107","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-lg group-hover:scale-110 transition-transform",children:c.icon}),d.jsx("span",{"trae-inspector-start-line":"64","trae-inspector-start-column":"20","trae-inspector-end-line":"64","trae-inspector-end-column":"44","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",children:c.name})]})},c.id))})]}),d.jsxs("div",{"trae-inspector-start-line":"71","trae-inspector-start-column":"10","trae-inspector-end-line":"88","trae-inspector-end-column":"16","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"mb-6",children:[d.jsxs("h3",{"trae-inspector-start-line":"72","trae-inspector-start-column":"12","trae-inspector-end-line":"74","trae-inspector-end-column":"17","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3 flex items-center",children:[d.jsx("span",{"trae-inspector-start-line":"73","trae-inspector-start-column":"14","trae-inspector-end-line":"73","trae-inspector-end-column":"46","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%93%9D%22%2C%22textStartLine%22%3A%2273%22%2C%22textStartColumn%22%3A%2237%22%2C%22textEndLine%22%3A%2273%22%2C%22textEndColumn%22%3A%2239%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"mr-2",children:"📝"})," 面试题分类"]}),d.jsx("ul",{"trae-inspector-start-line":"75","trae-inspector-start-column":"12","trae-inspector-end-line":"87","trae-inspector-end-column":"17","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"space-y-1",children:jc.filter(c=>c.type==="question").map(c=>d.jsx("li",{"trae-inspector-start-line":"77","trae-inspector-start-column":"16","trae-inspector-end-line":"85","trae-inspector-end-column":"21","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",children:d.jsxs(Te,{to:`/category/${c.id}`,className:"block px-4 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r from-indigo-50 to-purple-50 hover:text-indigo-700 transition-all duration-300 flex items-center space-x-3 text-sm font-medium group",children:[d.jsx("span",{"trae-inspector-start-line":"82","trae-inspector-start-column":"20","trae-inspector-end-line":"82","trae-inspector-end-column":"107","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-lg group-hover:scale-110 transition-transform",children:c.icon}),d.jsx("span",{"trae-inspector-start-line":"83","trae-inspector-start-column":"20","trae-inspector-end-line":"83","trae-inspector-end-column":"44","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",children:c.name})]})},c.id))})]})]})}),d.jsx("nav",{"trae-inspector-start-line":"93","trae-inspector-start-column":"6","trae-inspector-end-line":"132","trae-inspector-end-column":"12","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50 shadow-xl",children:d.jsxs("div",{"trae-inspector-start-line":"94","trae-inspector-start-column":"8","trae-inspector-end-line":"131","trae-inspector-end-column":"14","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"flex justify-around items-center py-2",children:[d.jsxs(Te,{to:"/",className:"flex flex-col items-center text-indigo-600 p-2",children:[d.jsx("span",{"trae-inspector-start-line":"99","trae-inspector-start-column":"12","trae-inspector-end-line":"99","trae-inspector-end-column":"53","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%8F%A0%22%2C%22textStartLine%22%3A%2299%22%2C%22textStartColumn%22%3A%2244%22%2C%22textEndLine%22%3A%2299%22%2C%22textEndColumn%22%3A%2246%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-2xl mb-1",children:"🏠"}),d.jsx("span",{"trae-inspector-start-line":"100","trae-inspector-start-column":"12","trae-inspector-end-line":"100","trae-inspector-end-column":"47","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E9%A6%96%E9%A1%B5%22%2C%22textStartLine%22%3A%22100%22%2C%22textStartColumn%22%3A%2238%22%2C%22textEndLine%22%3A%22100%22%2C%22textEndColumn%22%3A%2240%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-xs",children:"首页"})]}),d.jsxs(Te,{to:"/category/basics",className:"flex flex-col items-center text-gray-600 p-2",children:[d.jsx("span",{"trae-inspector-start-line":"106","trae-inspector-start-column":"12","trae-inspector-end-line":"106","trae-inspector-end-column":"53","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%93%9A%22%2C%22textStartLine%22%3A%22106%22%2C%22textStartColumn%22%3A%2244%22%2C%22textEndLine%22%3A%22106%22%2C%22textEndColumn%22%3A%2246%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-2xl mb-1",children:"📚"}),d.jsx("span",{"trae-inspector-start-line":"107","trae-inspector-start-column":"12","trae-inspector-end-line":"107","trae-inspector-end-column":"48","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E9%9D%A2%E8%AF%95%E9%A2%98%22%2C%22textStartLine%22%3A%22107%22%2C%22textStartColumn%22%3A%2238%22%2C%22textEndLine%22%3A%22107%22%2C%22textEndColumn%22%3A%2241%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-xs",children:"面试题"})]}),d.jsxs("a",{"trae-inspector-start-line":"109","trae-inspector-start-column":"10","trae-inspector-end-line":"119","trae-inspector-end-column":"14","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",href:"#ai-tools",className:"flex flex-col items-center text-gray-600 p-2",onClick:c=>{c.preventDefault(),l("ai-tools")},children:[d.jsx("span",{"trae-inspector-start-line":"117","trae-inspector-start-column":"12","trae-inspector-end-line":"117","trae-inspector-end-column":"53","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%A4%96%22%2C%22textStartLine%22%3A%22117%22%2C%22textStartColumn%22%3A%2244%22%2C%22textEndLine%22%3A%22117%22%2C%22textEndColumn%22%3A%2246%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-2xl mb-1",children:"🤖"}),d.jsx("span",{"trae-inspector-start-line":"118","trae-inspector-start-column":"12","trae-inspector-end-line":"118","trae-inspector-end-column":"49","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22AI%E5%B7%A5%E5%85%B7%22%2C%22textStartLine%22%3A%22118%22%2C%22textStartColumn%22%3A%2238%22%2C%22textEndLine%22%3A%22118%22%2C%22textEndColumn%22%3A%2242%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-xs",children:"AI工具"})]}),d.jsxs("a",{"trae-inspector-start-line":"120","trae-inspector-start-column":"10","trae-inspector-end-line":"130","trae-inspector-end-column":"14","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",href:"#docs",className:"flex flex-col items-center text-gray-600 p-2",onClick:c=>{c.preventDefault(),l("docs")},children:[d.jsx("span",{"trae-inspector-start-line":"128","trae-inspector-start-column":"12","trae-inspector-end-line":"128","trae-inspector-end-column":"53","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%94%A7%22%2C%22textStartLine%22%3A%22128%22%2C%22textStartColumn%22%3A%2244%22%2C%22textEndLine%22%3A%22128%22%2C%22textEndColumn%22%3A%2246%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-2xl mb-1",children:"🔧"}),d.jsx("span",{"trae-inspector-start-line":"129","trae-inspector-start-column":"12","trae-inspector-end-line":"129","trae-inspector-end-column":"48","trae-inspector-file-path":"src\\\\components\\\\Sidebar.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%B7%A5%E5%85%B7%E7%AE%B1%22%2C%22textStartLine%22%3A%22129%22%2C%22textStartColumn%22%3A%2238%22%2C%22textEndLine%22%3A%22129%22%2C%22textEndColumn%22%3A%2241%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-xs",children:"工具箱"})]})]})})]})},Br=({isOpen:s,onToggle:u,onClose:l})=>d.jsxs(d.Fragment,{children:[d.jsx("nav",{"trae-inspector-start-line":"13","trae-inspector-start-column":"6","trae-inspector-end-line":"88","trae-inspector-end-column":"12","trae-inspector-file-path":"src\\\\components\\\\Navbar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 shadow-2xl sticky top-0 z-50",children:d.jsx("div",{"trae-inspector-start-line":"14","trae-inspector-start-column":"8","trae-inspector-end-line":"87","trae-inspector-end-column":"14","trae-inspector-file-path":"src\\\\components\\\\Navbar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:d.jsxs("div",{"trae-inspector-start-line":"15","trae-inspector-start-column":"10","trae-inspector-end-line":"86","trae-inspector-end-column":"16","trae-inspector-file-path":"src\\\\components\\\\Navbar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"flex items-center justify-between h-16",children:[d.jsxs("div",{"trae-inspector-start-line":"16","trae-inspector-start-column":"12","trae-inspector-end-line":"35","trae-inspector-end-column":"18","trae-inspector-file-path":"src\\\\components\\\\Navbar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"flex items-center space-x-2",children:[d.jsx("button",{"trae-inspector-start-line":"18","trae-inspector-start-column":"14","trae-inspector-end-line":"29","trae-inspector-end-column":"23","trae-inspector-file-path":"src\\\\components\\\\Navbar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",onClick:u,className:"md:hidden text-white hover:text-indigo-200 transition-colors",children:d.jsx("svg",{"trae-inspector-start-line":"22","trae-inspector-start-column":"16","trae-inspector-end-line":"28","trae-inspector-end-column":"22","trae-inspector-file-path":"src\\\\components\\\\Navbar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s?d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),d.jsxs(Te,{to:"/",className:"flex items-center space-x-2",children:[d.jsx("span",{"trae-inspector-start-line":"32","trae-inspector-start-column":"16","trae-inspector-end-line":"32","trae-inspector-end-column":"51","trae-inspector-file-path":"src\\\\components\\\\Navbar.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E2%98%95%22%2C%22textStartLine%22%3A%2232%22%2C%22textStartColumn%22%3A%2243%22%2C%22textEndLine%22%3A%2232%22%2C%22textEndColumn%22%3A%2244%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-2xl",children:"☕"}),d.jsx("span",{"trae-inspector-start-line":"33","trae-inspector-start-column":"16","trae-inspector-end-line":"33","trae-inspector-end-column":"77","trae-inspector-file-path":"src\\\\components\\\\Navbar.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22Java%E9%9D%A2%E8%AF%95%E9%A2%98%22%2C%22textStartLine%22%3A%2233%22%2C%22textStartColumn%22%3A%2263%22%2C%22textEndLine%22%3A%2233%22%2C%22textEndColumn%22%3A%2270%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-white font-bold text-xl",children:"Java面试题"})]})]}),d.jsxs("div",{"trae-inspector-start-line":"36","trae-inspector-start-column":"12","trae-inspector-end-line":"85","trae-inspector-end-column":"18","trae-inspector-file-path":"src\\\\components\\\\Navbar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"hidden md:flex items-center space-x-8",children:[d.jsx(Te,{to:"/",className:"text-white hover:text-indigo-200 transition-all duration-200 font-medium py-1",children:"首页"}),d.jsxs("a",{"trae-inspector-start-line":"43","trae-inspector-start-column":"14","trae-inspector-end-line":"56","trae-inspector-end-column":"18","trae-inspector-file-path":"src\\\\components\\\\Navbar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",href:"#ai-tools",onClick:c=>{c.preventDefault();const f=document.getElementById("ai-tools");f&&f.scrollIntoView({behavior:"smooth"})},className:"text-white hover:text-indigo-200 transition-all duration-200 font-medium flex items-center",children:[d.jsx("span",{"trae-inspector-start-line":"54","trae-inspector-start-column":"16","trae-inspector-end-line":"54","trae-inspector-end-column":"48","trae-inspector-file-path":"src\\\\components\\\\Navbar.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%A4%96%22%2C%22textStartLine%22%3A%2254%22%2C%22textStartColumn%22%3A%2239%22%2C%22textEndLine%22%3A%2254%22%2C%22textEndColumn%22%3A%2241%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"mr-1",children:"🤖"}),"AI工具"]}),d.jsxs("a",{"trae-inspector-start-line":"57","trae-inspector-start-column":"14","trae-inspector-end-line":"70","trae-inspector-end-column":"18","trae-inspector-file-path":"src\\\\components\\\\Navbar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",href:"#docs",onClick:c=>{c.preventDefault();const f=document.getElementById("docs");f&&f.scrollIntoView({behavior:"smooth"})},className:"text-white hover:text-indigo-200 transition-all duration-200 font-medium flex items-center",children:[d.jsx("span",{"trae-inspector-start-line":"68","trae-inspector-start-column":"16","trae-inspector-end-line":"68","trae-inspector-end-column":"48","trae-inspector-file-path":"src\\\\components\\\\Navbar.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%94%A7%22%2C%22textStartLine%22%3A%2268%22%2C%22textStartColumn%22%3A%2239%22%2C%22textEndLine%22%3A%2268%22%2C%22textEndColumn%22%3A%2241%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"mr-1",children:"🔧"}),"工具箱"]}),d.jsxs("a",{"trae-inspector-start-line":"71","trae-inspector-start-column":"14","trae-inspector-end-line":"84","trae-inspector-end-column":"18","trae-inspector-file-path":"src\\\\components\\\\Navbar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",href:"#categories",onClick:c=>{c.preventDefault();const f=document.getElementById("categories");f&&f.scrollIntoView({behavior:"smooth"})},className:"text-white hover:text-indigo-200 transition-all duration-200 font-medium flex items-center",children:[d.jsx("span",{"trae-inspector-start-line":"82","trae-inspector-start-column":"16","trae-inspector-end-line":"82","trae-inspector-end-column":"48","trae-inspector-file-path":"src\\\\components\\\\Navbar.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%93%9A%22%2C%22textStartLine%22%3A%2282%22%2C%22textStartColumn%22%3A%2239%22%2C%22textEndLine%22%3A%2282%22%2C%22textEndColumn%22%3A%2241%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"mr-1",children:"📚"}),"知识分类"]})]})]})})}),d.jsx(B2,{isOpen:s,onClose:l})]}),Zi=[{id:"basics",name:"Java基础",icon:"📚",color:"bg-blue-500",description:"Java语言的核心基础知识，包括语法、类型系统、异常处理等"},{id:"oop",name:"面向对象",icon:"🎯",color:"bg-green-500",description:"面向对象编程的三大特性：封装、继承、多态"},{id:"collection",name:"集合框架",icon:"📦",color:"bg-purple-500",description:"Java集合框架的核心实现类，如List、Map、Set等"},{id:"concurrent",name:"并发编程",icon:"⚡",color:"bg-yellow-500",description:"多线程编程、线程安全、并发工具类等"},{id:"jvm",name:"JVM原理",icon:"🔧",color:"bg-red-500",description:"Java虚拟机原理、内存模型、GC机制等"},{id:"advanced",name:"高级特性",icon:"🚀",color:"bg-indigo-500",description:"反射、注解、泛型、Lambda表达式等高级特性"},{id:"design-pattern",name:"设计模式",icon:"🎨",color:"bg-teal-500",description:"GoF设计模式：创建型、结构型、行为型模式"},{id:"microservice",name:"微服务与分布式",icon:"🌐",color:"bg-cyan-500",description:"微服务架构、分布式系统、Spring Cloud、服务治理"}],ea=[{id:"1",title:"Java中==和equals的区别是什么？",content:"请详细解释Java中==运算符和equals方法的区别，并举例说明。",category:"basics",difficulty:"easy",answer:"==用于比较基本数据类型的值是否相等，或比较引用类型的引用地址是否相同。equals方法用于比较对象的内容是否相等，默认行为与==相同，但通常被重写（如String、Integer等类）来比较内容。",codeExample:`String s1 = new String("hello");
String s2 = new String("hello");
System.out.println(s1 == s2);      // false，引用不同
System.out.println(s1.equals(s2)); // true，内容相同

int a = 10;
int b = 10;
System.out.println(a == b);        // true，基本类型比较值`,tags:["基础","面向对象"]},{id:"2",title:"什么是Java的自动装箱和拆箱？",content:"解释Java中的自动装箱（autoboxing）和拆箱（unboxing）概念，并说明它们的使用场景和注意事项。",category:"basics",difficulty:"easy",answer:"自动装箱是Java编译器自动将基本类型转换为对应的包装类类型的过程，拆箱则是相反的过程。例如int自动转换为Integer，Double自动转换为double等。这简化了代码，但在性能敏感的场景或集合操作中需要注意。",codeExample:`// 自动装箱
Integer i = 100; // 相当于 Integer.valueOf(100)

// 自动拆箱
int j = i;       // 相当于 i.intValue()

// 在集合中使用
List<Integer> list = new ArrayList<>();
list.add(1);     // 自动装箱`,tags:["基础","类型系统"]},{id:"3",title:"String、StringBuilder和StringBuffer的区别",content:"比较这三个字符串相关类的特点、使用场景和性能差异。",category:"basics",difficulty:"medium",answer:"String是不可变的，每次修改都会创建新对象。StringBuilder是可变的，非线程安全，性能高。StringBuffer是可变的，线程安全（方法都加了synchronized），性能略低于StringBuilder。",codeExample:`// String - 不可变
String s = "hello";
s = s + " world"; // 创建新对象

// StringBuilder - 可变，非线程安全
StringBuilder sb = new StringBuilder("hello");
sb.append(" world"); // 原地修改

// StringBuffer - 可变，线程安全
StringBuffer sbuf = new StringBuffer("hello");
sbuf.append(" world");`,tags:["字符串","性能"]},{id:"4",title:"Java中的异常体系是怎样的？",content:"请描述Java异常的层次结构，以及Error、Exception、RuntimeException的区别。",category:"basics",difficulty:"medium",answer:"Java异常体系的根类是Throwable，分为Error和Exception。Error表示系统级错误，通常无法恢复。Exception分为受检异常（必须处理）和非受检异常（RuntimeException及其子类）。RuntimeException表示编程错误，如空指针、数组越界等。",codeExample:`// 受检异常 - 需要catch或throws
public void readFile() throws IOException {
    FileInputStream fis = new FileInputStream("file.txt");
}

// 非受检异常 - 可以不处理
public void divide(int a, int b) {
    if (b == 0) {
        throw new ArithmeticException("除数不能为0");
    }
}`,tags:["异常处理","核心概念"]},{id:"5",title:"什么是Java的反射机制？",content:"解释Java反射的概念、用途、优缺点以及基本使用方法。",category:"advanced",difficulty:"hard",answer:"反射允许程序在运行时检查类、接口、方法和字段的信息，并且可以在运行时创建对象、调用方法、访问字段。它是框架开发的基础，但会降低性能并破坏封装性。",codeExample:`// 获取Class对象
Class<?> clazz = Class.forName("java.lang.String");

// 获取构造函数并创建对象
Constructor<?> constructor = clazz.getConstructor(String.class);
String str = (String) constructor.newInstance("hello");

// 获取方法并调用
Method method = clazz.getMethod("length");
int length = (int) method.invoke(str);`,tags:["高级特性","反射"]},{id:"6",title:"HashMap的实现原理是什么？",content:"详细描述Java 8中HashMap的底层数据结构、hash算法、扩容机制等。",category:"collection",difficulty:"hard",answer:"Java 8的HashMap底层使用数组+链表+红黑树实现。当链表长度超过8且数组容量大于64时，链表会转为红黑树。hash通过hash(key) ^ (hash >>> 16)计算。当size超过负载因子0.75*capacity时，数组会扩容为原来的2倍。",codeExample:`// HashMap的基本使用
HashMap<String, Integer> map = new HashMap<>();
map.put("a", 1);
map.put("b", 2);

// 遍历方式
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}`,tags:["集合","数据结构"]},{id:"7",title:"ArrayList和LinkedList的区别",content:"对比这两个List实现类的底层结构、性能特点和适用场景。",category:"collection",difficulty:"medium",answer:"ArrayList基于动态数组实现，随机访问快，插入删除慢（需要移动元素）。LinkedList基于双向链表实现，插入删除快，随机访问慢（需要遍历）。ArrayList默认容量10，扩容为1.5倍。",codeExample:`// ArrayList
List<String> arrayList = new ArrayList<>();
arrayList.get(0);        // O(1) 快速随机访问
arrayList.add(0, "a");   // O(n) 需要移动元素

// LinkedList
List<String> linkedList = new LinkedList<>();
linkedList.get(0);       // O(n) 需要遍历
linkedList.add(0, "a");  // O(1) 只修改指针`,tags:["集合","List"]},{id:"7-1",title:"HashMap和Hashtable的区别",content:"对比HashMap和Hashtable在线程安全、性能、null支持等方面的区别。",category:"collection",difficulty:"medium",answer:"HashMap线程不安全，允许key和value为null，效率高。Hashtable线程安全（synchronized修饰），不允许key或value为null，效率低。推荐使用ConcurrentHashMap替代Hashtable。",codeExample:`// HashMap允许null
HashMap<String, Integer> map = new HashMap<>();
map.put(null, 1);      // 允许
map.put("key", null);  // 允许

// Hashtable不允许null
Hashtable<String, Integer> table = new Hashtable<>();
table.put(null, 1);    // NullPointerException
table.put("key", null); // NullPointerException

// 线程安全推荐使用ConcurrentHashMap
ConcurrentHashMap<String, Integer> concurrentMap = new ConcurrentHashMap<>();
concurrentMap.put("key", 1); // 高效的线程安全操作`,tags:["集合","Map"]},{id:"7-2",title:"ConcurrentHashMap的实现原理",content:"详细解释ConcurrentHashMap如何实现高效的并发访问，包括JDK 7的分段锁和JDK 8的CAS+synchronized。",category:"collection",difficulty:"hard",answer:"JDK 7使用Segment数组+链表，每个Segment类似一个Hashtable。JDK 8取消分段锁，采用数组+链表+红黑树，使用CAS操作和synchronized来保证并发安全。put时如果数组为空，用CAS初始化头节点；否则对头节点加锁插入。",codeExample:`// ConcurrentHashMap基本操作
ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();

// 原子操作
map.putIfAbsent("key", 1);  // 不存在才插入
map.computeIfAbsent("key", k -> 1);  // compute
map.merge("key", 1, Integer::sum);  // 合并

// 高并发场景
for (int i = 0; i < 100; i++) {
    new Thread(() -> {
        map.put(Thread.currentThread().getName(), 1);
    }).start();
}

// JDK 8后采用CAS+synchronized
// 1. 使用CAS初始化数组
// 2. 使用synchronized锁住头节点进行插入
// 3. 链表转红黑树阈值仍为8`,tags:["集合","并发","线程安全"]},{id:"7-3",title:"HashSet的实现原理",content:"解释HashSet如何保证元素唯一性，以及它与HashMap的关系。",category:"collection",difficulty:"medium",answer:"HashSet底层使用HashMap实现，元素作为Map的key，value使用一个Object对象（PRESENT）。添加元素时调用hashCode和equals判断唯一性。由于HashMap的key不能重复，所以HashSet元素唯一。",codeExample:`// HashSet内部实际使用HashMap
private transient HashMap<E, Object> map;
private static final Object PRESENT = new Object();

public boolean add(E e) {
    return map.put(e, PRESENT) == null;
}

// HashSet保证唯一性的过程
// 1. 计算hashCode确定bucket位置
// 2. 通过equals比较是否已存在
// 3. 已存在返回false，不存在则添加返回true

Set<String> set = new HashSet<>();
set.add("hello");
set.add("hello");  // 返回false，不会重复添加

// LinkedHashSet保持插入顺序
Set<String> linkedSet = new LinkedHashSet<>();
linkedSet.add("a");
linkedSet.add("b");
linkedSet.add("a");  // 保持a,b的插入顺序`,tags:["集合","Set"]},{id:"7-4",title:"TreeMap和HashMap的区别",content:"对比TreeMap和HashMap的底层数据结构、排序方式和使用场景。",category:"collection",difficulty:"medium",answer:"HashMap基于哈希表，无序；TreeMap基于红黑树，有序（自然顺序或自定义Comparator）。HashMap查找O(1)，TreeMap查找O(log n)。TreeMap支持范围查询和按序遍历。",codeExample:`// HashMap - 无序
Map<String, Integer> hashMap = new HashMap<>();
hashMap.put("banana", 2);
hashMap.put("apple", 1);
hashMap.put("cherry", 3);
// 遍历顺序不确定

// TreeMap - 有序
Map<String, Integer> treeMap = new TreeMap<>();
treeMap.put("banana", 2);
treeMap.put("apple", 1);
treeMap.put("cherry", 3);
// 遍历顺序: apple, banana, cherry（字典序）

// 自定义排序
TreeMap<Integer, String> customMap = new TreeMap<>(Comparator.reverseOrder());
customMap.put(1, "one");
customMap.put(3, "three");
customMap.put(2, "two");
// 遍历顺序: 3, 2, 1（降序）

// TreeMap特有功能
treeMap.firstKey();  // 获取最小key
treeMap.lastKey();   // 获取最大key
treeMap.subMap("a", "c");  // 获取子Map`,tags:["集合","Map","红黑树"]},{id:"7-5",title:"ArrayList的扩容机制",content:"详细解释ArrayList的扩容原理，包括默认容量、扩容公式和性能影响。",category:"collection",difficulty:"hard",answer:"ArrayList默认容量为10。添加第一个元素时数组初始化为空数组，扩容时创建新数组并复制元素。JDK 6及之前：newCapacity = (oldCapacity * 3) / 2 + 1；JDK 7开始使用 oldCapacity + (oldCapacity >> 1)，即1.5倍。扩容操作耗时，应预估容量或使用ArrayList(int initialCapacity)预分配。",codeExample:`// ArrayList扩容源码（JDK 8）
private void grow(int minCapacity) {
    int oldCapacity = elementData.length;
    // 新容量 = 旧容量 + 旧容量/2（即1.5倍）
    int newCapacity = oldCapacity + (oldCapacity >> 1);
    if (newCapacity - minCapacity < 0)
        newCapacity = minCapacity;
    if (newCapacity - MAX_ARRAY_SIZE > 0)
        newCapacity = hugeCapacity(minCapacity);
    // 复制数组
    elementData = Arrays.copyOf(elementData, newCapacity);
}

// 性能影响
List<Integer> list = new ArrayList<>();
// 每次add都可能触发扩容和数组复制
for (int i = 0; i < 100000; i++) {
    list.add(i);  // 多次扩容，效率低
}

// 推荐做法：预估容量
List<Integer> list2 = new ArrayList<>(100000);
for (int i = 0; i < 100000; i++) {
    list2.add(i);  // 一次分配，效率高
}

// trimToSize()回收多余空间
list2.trimToSize();`,tags:["集合","ArrayList","性能"]},{id:"7-6",title:"fail-fast与fail-safe的区别",content:"解释Java集合框架中的fail-fast和fail-safe机制，以及它们在并发环境下的表现。",category:"collection",difficulty:"hard",answer:"fail-fast在检测到并发修改时立即抛出ConcurrentModificationException，通过modCount实现。ArrayList、HashMap等非线程安全集合采用fail-fast。fail-safe复制集合快照进行遍历，不抛异常，如CopyOnWriteArrayList、ConcurrentHashMap。",codeExample:`// fail-fast示例
List<String> list = new ArrayList<>();
list.add("a");
for (String item : list) {  // ConcurrentModificationException
    list.remove(item);
}

// 正确遍历删除方式
Iterator<String> iterator = list.iterator();
while (iterator.hasNext()) {
    if (iterator.next().equals("a")) {
        iterator.remove();  // 使用迭代器删除
    }
}

// fail-safe示例
List<String> safeList = new CopyOnWriteArrayList<>();
safeList.add("a");
for (String item : safeList) {  // 不会抛异常
    safeList.remove(item);       // 可以安全删除
}

// ConcurrentHashMap遍历
ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
map.put("a", 1);
// 安全遍历，不会抛ConcurrentModificationException
map.forEach((k, v) -> System.out.println(k + ": " + v));`,tags:["集合","并发","异常处理"]},{id:"8",title:"什么是Java的多态？",content:"解释多态的概念、实现方式（重载和重写）以及向上转型和向下转型。",category:"oop",difficulty:"medium",answer:"多态是指同一操作作用于不同对象会产生不同的结果。实现方式包括方法重载（编译时多态）和方法重写（运行时多态）。向上转型是子类转父类，自动进行；向下转型是父类转子类，需要强制类型转换并可能抛出ClassCastException。",codeExample:`class Animal {
    void makeSound() { System.out.println("Animal sound"); }
}

class Dog extends Animal {
    @Override
    void makeSound() { System.out.println("Woof!"); }
}

// 多态示例
Animal animal = new Dog(); // 向上转型
animal.makeSound();        // 运行时调用Dog的方法`,tags:["面向对象","多态"]},{id:"9",title:"synchronized关键字的作用和原理",content:"解释synchronized的用法、作用范围以及底层实现原理。",category:"concurrent",difficulty:"hard",answer:"synchronized用于保证多线程环境下的原子性、可见性和有序性。可以修饰方法或代码块。底层通过对象头的Mark Word和monitor机制实现。JDK 6后引入了偏向锁、轻量级锁、重量级锁的锁升级机制来优化性能。",codeExample:`// 修饰实例方法
public synchronized void increment() {
    count++;
}

// 修饰代码块
public void decrement() {
    synchronized (this) {
        count--;
    }
}

// 修饰静态方法
public static synchronized void staticMethod() {
    // ...
}`,tags:["并发","线程安全"]},{id:"10",title:"Java内存模型（JMM）是什么？",content:"描述Java内存模型的概念、主内存和工作内存的关系，以及volatile、synchronized等关键字在JMM中的作用。",category:"jvm",difficulty:"hard",answer:"JMM定义了线程和主内存之间的抽象关系，规定了共享变量的访问规则。每个线程有自己的工作内存，共享变量存于主内存。需要保证原子性、可见性、有序性。volatile保证可见性和有序性，synchronized保证三者都有。",codeExample:`// volatile保证可见性和禁止指令重排序
private volatile boolean flag = false;

public void writer() {
    flag = true; // 写操作会立即刷新到主内存
}

public void reader() {
    if (flag) { // 读操作会从主内存重新读取
        // ...
    }
}`,tags:["JVM","并发"]},{id:"11",title:"Spring Boot自动配置原理是什么？",content:"详细解释Spring Boot的自动配置机制，包括@SpringBootApplication注解、@EnableAutoConfiguration、spring.factories文件等。",category:"advanced",difficulty:"hard",answer:"Spring Boot自动配置通过@EnableAutoConfiguration注解，利用SpringFactoriesLoader加载META-INF/spring.factories文件中定义的自动配置类，根据@Conditional条件注解判断是否生效，最终将Bean注册到容器中。",codeExample:`// @SpringBootApplication包含了三个注解
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

// 自定义自动配置
@Configuration
@ConditionalOnClass(SomeClass.class)
@EnableConfigurationProperties(MyProperties.class)
public class MyAutoConfiguration {
    @Bean
    @ConditionalOnMissingBean
    public MyBean myBean() {
        return new MyBean();
    }
}`,tags:["Spring Boot","自动配置"]},{id:"12",title:"什么是微服务？微服务的优缺点是什么？",content:"解释微服务架构的概念、特点、与单体架构的区别，以及微服务的优缺点。",category:"advanced",difficulty:"medium",answer:"微服务是将应用拆分为多个小型、独立部署的服务，每个服务专注于单一业务功能，通过轻量级通信机制协作。优点：独立部署、技术栈灵活、易于扩展。缺点：运维复杂、分布式事务、服务调用开销。",codeExample:`// 简单的Spring Boot微服务
@SpringBootApplication
@RestController
public class UserService {
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        // 从数据库查询用户
        return new User(id, "张三");
    }
}

// 使用Feign调用其他微服务
@FeignClient(name = "order-service")
public interface OrderClient {
    @GetMapping("/orders/user/{userId}")
    List<Order> getOrdersByUserId(@PathVariable Long userId);
}`,tags:["微服务","架构设计"]},{id:"13",title:"Redis的数据结构有哪些？应用场景是什么？",content:"介绍Redis的主要数据结构及其应用场景，包括String、Hash、List、Set、Sorted Set等。",category:"advanced",difficulty:"medium",answer:"Redis支持String（缓存、计数器）、Hash（对象存储）、List（消息队列、栈）、Set（去重、交集）、Sorted Set（排行榜）、HyperLogLog（基数统计）、Bitmap（用户签到）、Geo（地理位置）等数据结构。",codeExample:`// String - 缓存用户信息
set user:1 "{"id":1,"name":"张三"}"

// Hash - 存储购物车
hset cart:1 product:1001 2
hset cart:1 product:1002 1

// List - 消息队列
lpush queue:order "order001"

// Sorted Set - 排行榜
zadd leaderboard 100 "user1"
zadd leaderboard 200 "user2"`,tags:["Redis","缓存"]},{id:"14",title:"什么是Spring Cloud？常用组件有哪些？",content:"介绍Spring Cloud的概念、作用以及常用的组件，如Eureka、Ribbon、Feign、Hystrix、Zuul/Gateway等。",category:"advanced",difficulty:"hard",answer:"Spring Cloud是一套微服务开发工具集，提供服务发现（Eureka/Nacos）、负载均衡（Ribbon）、服务调用（Feign）、熔断器（Hystrix/Sentinel）、网关（Zuul/Gateway）、配置中心（Config）、链路追踪（Sleuth/Zipkin）等功能。",codeExample:`// 服务注册与发现
@EnableDiscoveryClient
@SpringBootApplication
public class ServiceApplication { }

// Feign客户端
@FeignClient("user-service")
public interface UserClient {
    @GetMapping("/users/{id}")
    User getUser(@PathVariable("id") Long id);
}

// 网关路由配置
spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://user-service
          predicates:
            - Path=/users/**`,tags:["Spring Cloud","微服务"]},{id:"15",title:"MySQL索引原理及B+树为什么适合做索引？",content:"解释MySQL索引的底层数据结构，以及为什么InnoDB选择B+树而不是B树或红黑树。",category:"advanced",difficulty:"hard",answer:"InnoDB使用B+树作为索引结构。B+树的优点：1)节点可以存储更多key，树更矮，IO次数少；2)查询性能稳定；3)叶子节点有链表，范围查询高效；4)全表扫描更快。相比B树，B+树只有叶子节点存数据，非叶子节点只存索引，内存利用率更高。",codeExample:`-- 创建索引
CREATE INDEX idx_username ON users(username);

-- 联合索引
CREATE INDEX idx_name_age ON users(name, age);

-- 查看索引
SHOW INDEX FROM users;

-- 使用EXPLAIN分析查询
EXPLAIN SELECT * FROM users WHERE username = '张三';`,tags:["MySQL","索引"]},{id:"16",title:"JVM垃圾回收机制和常用垃圾回收器",content:"详细解释JVM垃圾回收的原理、常用算法（标记清除、复制、标记整理、分代收集）以及常用GC器。",category:"jvm",difficulty:"hard",answer:"JVM垃圾回收识别不再被引用的对象并回收内存。常用算法：标记清除（产生碎片）、复制（年轻代，无碎片但需额外空间）、标记整理（老年代）、分代收集（年轻代+老年代）。常用GC器：Serial、Parallel、CMS、G1、ZGC、Shenandoah。",codeExample:`// JVM参数配置
-XX:+UseG1GC           # 使用G1收集器
-XX:MaxGCPauseMillis=200 # 最大GC停顿时间
-XX:+HeapDumpOnOutOfMemoryError # OOM时dump堆
-Xms4g -Xmx4g         # 初始和最大堆大小

// 查看GC日志
-XX:+PrintGCDetails
-XX:+PrintGCDateStamps
-Xloggc:gc.log`,tags:["JVM","GC"]},{id:"17",title:"什么是分布式事务？解决方案有哪些？",content:"解释分布式事务的概念、问题，以及常见的解决方案如2PC、3PC、TCC、Saga、本地消息表、Seata等。",category:"advanced",difficulty:"hard",answer:"分布式事务是跨多个数据库或服务的事务，需要保证ACID特性。解决方案：2PC（两阶段提交）、3PC（三阶段）、TCC（Try-Confirm-Cancel）、Saga（长期事务）、本地消息表、Seata（AT/TCC/Saga模式）等。",codeExample:`// Seata AT模式示例
@GlobalTransactional
public void createOrder(Order order) {
    // 1. 扣库存
    inventoryService.deduct(order.getProductId(), order.getCount());
    // 2. 创建订单
    orderService.create(order);
    // 3. 扣余额
    accountService.debit(order.getUserId(), order.getAmount());
}

// TCC模式
public interface TccService {
    @TwoPhaseBusinessAction(name = "tccAction", commitMethod = "commit", rollbackMethod = "rollback")
    void try(BusinessActionContext context);
    void commit(BusinessActionContext context);
    void rollback(BusinessActionContext context);
}`,tags:["分布式","事务"]},{id:"18",title:"Kafka的架构和原理是什么？",content:"介绍Kafka的核心概念（Producer、Consumer、Broker、Topic、Partition、Offset）和架构原理。",category:"advanced",difficulty:"hard",answer:"Kafka是分布式消息系统，采用发布-订阅模式。核心组件：Producer（生产者）、Consumer（消费者）、Broker（服务器）、Topic（主题）、Partition（分区）、Replica（副本）、Consumer Group（消费组）、Offset（偏移量）。特点：高吞吐、持久化、分布式。",codeExample:`// 生产者
Properties props = new Properties();
props.put("bootstrap.servers", "localhost:9092");
props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");

Producer<String, String> producer = new KafkaProducer<>(props);
producer.send(new ProducerRecord<>("topic", "key", "value"));

// 消费者
@KafkaListener(topics = "topic", groupId = "group")
public void listen(String message) {
    System.out.println("收到消息: " + message);
}`,tags:["Kafka","消息队列"]},{id:"19",title:"如何保证接口的幂等性？",content:"解释幂等性的概念，以及常见的保证接口幂等性的方案（唯一索引、Token机制、悲观锁、乐观锁、分布式锁等）。",category:"advanced",difficulty:"medium",answer:"幂等性指同一请求多次执行产生的结果一致。解决方案：1)唯一索引（防止重复插入）；2)Token机制（防重复提交）；3)数据库乐观锁（version字段）；4)Redis分布式锁；5)状态机（状态只能单向变更）。",codeExample:`// 1. Token机制
@GetMapping("/token")
public String getToken() {
    String token = UUID.randomUUID().toString();
    redisTemplate.opsForValue().set(token, "1", 30, TimeUnit.SECONDS);
    return token;
}

@PostMapping("/order")
public String createOrder(@RequestHeader("token") String token, @RequestBody Order order) {
    Boolean exists = redisTemplate.delete(token);
    if (!exists) {
        return "请勿重复提交";
    }
    orderService.create(order);
    return "成功";
}

// 2. 乐观锁
@Update("UPDATE account SET balance = balance - #{amount}, version = version + 1 WHERE id = #{id} AND version = #{version}")
int deduct(@Param("id") Long id, @Param("amount") BigDecimal amount, @Param("version") Integer version);`,tags:["幂等性","高并发"]},{id:"20",title:"ThreadLocal的原理和内存泄漏问题",content:"解释ThreadLocal的工作原理、使用场景，以及为什么会产生内存泄漏，如何避免。",category:"concurrent",difficulty:"hard",answer:"ThreadLocal提供线程本地变量，每个线程都有独立副本。原理：Thread内部有ThreadLocalMap，key是ThreadLocal对象（弱引用），value是线程本地值。内存泄漏原因：key是弱引用会被GC回收，但value是强引用，线程不结束value不会回收，需手动调用remove()。",codeExample:`// ThreadLocal使用
public class UserContext {
    private static final ThreadLocal<User> USER_THREAD_LOCAL = new ThreadLocal<>();
    
    public static void setUser(User user) {
        USER_THREAD_LOCAL.set(user);
    }
    
    public static User getUser() {
        return USER_THREAD_LOCAL.get();
    }
    
    public static void clear() {
        USER_THREAD_LOCAL.remove(); // 防止内存泄漏！
    }
}

// 在过滤器中使用
public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) {
    try {
        User user = getCurrentUser(request);
        UserContext.setUser(user);
        chain.doFilter(request, response);
    } finally {
        UserContext.clear(); // 必须清理！
    }
}`,tags:["并发","ThreadLocal"]},{id:"21",title:"什么是限流？常用的限流算法有哪些？",content:"解释限流的概念和作用，以及常见的限流算法（固定窗口、滑动窗口、漏桶、令牌桶）的实现原理。",category:"advanced",difficulty:"hard",answer:"限流是限制系统请求速率，防止过载。常用算法：1)固定窗口计数器（简单但有临界问题）；2)滑动窗口（更平滑）；3)漏桶（恒定速率处理）；4)令牌桶（允许突发流量）。常用实现：Guava RateLimiter、Redis + Lua脚本、Sentinel。",codeExample:`// Guava RateLimiter
RateLimiter limiter = RateLimiter.create(10.0); // 每秒10个令牌
if (limiter.tryAcquire()) {
    // 处理请求
}

// Redis + Lua 滑动窗口
local key = KEYS[1]
local window = tonumber(ARGV[1])
local limit = tonumber(ARGV[2])
local currentTime = tonumber(ARGV[3])

redis.call('ZREMRANGEBYSCORE', key, 0, currentTime - window)
local count = redis.call('ZCARD', key)
if count < limit then
    redis.call('ZADD', key, currentTime, currentTime)
    redis.call('EXPIRE', key, window + 1)
    return 1
else
    return 0
end`,tags:["限流","高并发"]},{id:"22",title:"Spring中的循环依赖问题及解决方案",content:"解释什么是循环依赖，Spring是如何解决循环依赖问题的（三级缓存）。",category:"advanced",difficulty:"hard",answer:"循环依赖是A依赖B，B又依赖A的情况。Spring通过三级缓存解决：1)一级缓存（singletonObjects）存完整Bean；2)二级缓存（earlySingletonObjects）存刚实例化的Bean；3)三级缓存（singletonFactories）存ObjectFactory。关键是在Bean完全初始化前就暴露出来让其他Bean注入。",codeExample:`// 循环依赖示例
@Service
public class A {
    @Autowired
    private B b;
}

@Service
public class B {
    @Autowired
    private A a;
}

// 三级缓存源码（DefaultSingletonBeanRegistry）
private final Map<String, Object> singletonObjects = new ConcurrentHashMap<>(256);
private final Map<String, Object> earlySingletonObjects = new HashMap<>(16);
private final Map<String, ObjectFactory<?>> singletonFactories = new HashMap<>(16);`,tags:["Spring","循环依赖"]},{id:"23",title:"如何进行SQL优化？",content:"介绍SQL优化的常用方法和技巧，包括索引优化、SQL语句优化、表结构优化等。",category:"advanced",difficulty:"medium",answer:"SQL优化方法：1)建立合适的索引（避免全表扫描）；2)避免SELECT *；3)使用JOIN代替子查询；4)避免在WHERE子句使用函数或表达式；5)使用LIMIT分页；6)EXPLAIN分析执行计划；7)读写分离；8)使用覆盖索引。",codeExample:`-- 不好的写法（索引失效）
SELECT * FROM users WHERE YEAR(create_time) = 2024;
SELECT * FROM users WHERE name LIKE '%张%';

-- 好的写法
SELECT * FROM users WHERE create_time >= '2024-01-01' AND create_time < '2025-01-01';
SELECT * FROM users WHERE name LIKE '张%';

-- 使用覆盖索引
CREATE INDEX idx_name_age ON users(name, age);
SELECT name, age FROM users WHERE name = '张三'; -- 不需要回表

-- EXPLAIN分析
EXPLAIN SELECT * FROM users WHERE id = 1;`,tags:["SQL优化","MySQL"]},{id:"24",title:"什么是ZooKeeper？有哪些应用场景？",content:"介绍ZooKeeper的概念、特点、数据结构，以及常见的应用场景（分布式锁、配置中心、服务发现、Leader选举）。",category:"advanced",difficulty:"medium",answer:"ZooKeeper是分布式协调服务，提供类似文件系统的树形数据结构。特点：有序节点、临时节点、Watcher通知、数据一致性。应用场景：分布式锁、配置中心、服务注册发现、Leader选举、分布式队列。",codeExample:`// Curator实现分布式锁
InterProcessMutex lock = new InterProcessMutex(client, "/locks/order");
try {
    if (lock.acquire(10, TimeUnit.SECONDS)) {
        // 执行业务
    }
} finally {
    lock.release();
}

// 监听节点变化
client.getData().usingWatcher((CuratorWatcher) event -> {
    System.out.println("节点变化: " + event.getType());
}).forPath("/config");`,tags:["ZooKeeper","分布式协调"]},{id:"25",title:"什么是CAP理论？BASE理论？",content:"解释CAP理论的三个要素（一致性、可用性、分区容错性），以及BASE理论（Basically Available、Soft state、Eventually consistent）。",category:"advanced",difficulty:"medium",answer:"CAP理论：分布式系统中一致性（C）、可用性（A）、分区容错性（P）三者不可兼得，只能选两个。CP系统（HBase、MongoDB）优先保证一致性，AP系统（Cassandra、Eureka）优先保证可用性。BASE理论：基本可用、软状态、最终一致，是对CAP的折中。",codeExample:`// Redis保证最终一致性（BASE）
// 写入时先缓存，异步同步到数据库
@CachePut(value = "user", key = "#user.id")
public User update(User user) {
    userDao.update(user);
    // 异步消息通知其他节点
    messageQueue.send("user:update", user.getId());
    return user;
}

// 读取时先从缓存读
@Cacheable(value = "user", key = "#id")
public User getById(Long id) {
    return userDao.findById(id);
}`,tags:["CAP","分布式理论"]},{id:"26",title:"什么是分库分表？如何实现？",content:"解释分库分表的原因、策略（水平分表、垂直分表、水平分库、垂直分库），以及常用中间件（ShardingSphere、MyCat）。",category:"advanced",difficulty:"hard",answer:"分库分表解决单库单表数据量过大的问题。策略：1)垂直分表（按列拆分）；2)水平分表（按行拆分，如哈希、范围分表）；3)垂直分库（按业务拆分库）；4)水平分库（数据分散到多个库）。常用中间件：ShardingSphere-JDBC/Proxy、MyCat。",codeExample:`// ShardingSphere配置
spring:
  shardingsphere:
    datasource:
      names: ds0,ds1
      ds0:
        jdbc-url: jdbc:mysql://localhost:3306/db0
        username: root
      ds1:
        jdbc-url: jdbc:mysql://localhost:3306/db1
        username: root
    sharding:
      tables:
        t_order:
          actual-data-nodes: ds\${0..1}.t_order_\${0..1}
          database-strategy:
            inline:
              sharding-column: user_id
              algorithm-expression: ds\${user_id % 2}
          table-strategy:
            inline:
              sharding-column: order_id
              algorithm-expression: t_order_\${order_id % 2}`,tags:["分库分表","数据库"]},{id:"27",title:"什么是MySQL的事务隔离级别？",content:"介绍SQL标准的四个事务隔离级别（读未提交、读已提交、可重复读、串行化）以及InnoDB的默认隔离级别。",category:"advanced",difficulty:"medium",answer:"四个隔离级别：1)READ UNCOMMITTED（读未提交）；2)READ COMMITTED（读已提交，Oracle默认）；3)REPEATABLE READ（可重复读，MySQL默认）；4)SERIALIZABLE（串行化）。InnoDB默认REPEATABLE READ，通过MVCC和Next-Key Lock解决幻读问题。",codeExample:`-- 设置隔离级别
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

-- 查询当前隔离级别
SELECT @@tx_isolation;

-- MySQL 8.0+
SELECT @@transaction_isolation;

-- 开启事务
BEGIN;
-- 执行业务操作
UPDATE account SET balance = balance - 100 WHERE id = 1;
UPDATE account SET balance = balance + 100 WHERE id = 2;
-- 提交事务
COMMIT;`,tags:["MySQL","事务"]},{id:"28",title:"什么是Nginx？如何配置负载均衡？",content:"介绍Nginx的功能和特点，以及如何配置Nginx实现反向代理和负载均衡。",category:"advanced",difficulty:"medium",answer:"Nginx是高性能Web服务器和反向代理服务器。支持反向代理、负载均衡、静态资源服务、SSL/TLS、限流等。负载均衡策略：轮询（默认）、加权轮询、IP hash、least_conn、url_hash等。",codeExample:`# Nginx配置
http {
    upstream backend {
        server 192.168.1.10:8080 weight=3;
        server 192.168.1.11:8080 weight=2;
        server 192.168.1.12:8080 backup;
    }

    server {
        listen 80;
        server_name example.com;

        location / {
            proxy_pass http://backend;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
    }
}`,tags:["Nginx","负载均衡"]},{id:"29",title:"什么是Docker？Dockerfile常用指令？",content:"介绍Docker的概念、核心组件（镜像、容器、仓库），以及Dockerfile常用指令。",category:"advanced",difficulty:"easy",answer:"Docker是容器化平台，将应用和依赖打包成容器。核心概念：Image（镜像）、Container（容器）、Repository（仓库）。Dockerfile常用指令：FROM、RUN、COPY、ADD、WORKDIR、EXPOSE、CMD、ENTRYPOINT、ENV、VOLUME等。",codeExample:`# Dockerfile示例
FROM openjdk:11-jre-slim
WORKDIR /app
COPY target/myapp.jar app.jar
EXPOSE 8080
ENV JAVA_OPTS="-Xmx512m"
ENTRYPOINT ["java", "-jar", "app.jar"]

# 构建镜像
docker build -t myapp:1.0 .

# 运行容器
docker run -d -p 8080:8080 --name myapp myapp:1.0

# Docker Compose
version: '3'
services:
  app:
    build: .
    ports:
      - "8080:8080"
  redis:
    image: redis:6
    ports:
      - "6379:6379"`,tags:["Docker","容器化"]},{id:"30",title:"什么是Netty？核心组件有哪些？",content:"介绍Netty的概念、特点、应用场景，以及核心组件（EventLoop、Channel、ChannelPipeline、ChannelHandler等）。",category:"advanced",difficulty:"hard",answer:"Netty是高性能异步事件驱动的网络框架。核心组件：1)EventLoop（事件循环，处理IO事件）；2)Channel（网络操作抽象）；3)ChannelPipeline（责任链模式）；4)ChannelHandler（业务逻辑处理）；5)ByteBuf（字节容器）。应用场景：RPC框架、游戏服务器、消息推送等。",codeExample:`// Netty服务器
ServerBootstrap bootstrap = new ServerBootstrap();
bootstrap.group(new NioEventLoopGroup(), new NioEventLoopGroup())
    .channel(NioServerSocketChannel.class)
    .childHandler(new ChannelInitializer<SocketChannel>() {
        @Override
        protected void initChannel(SocketChannel ch) {
            ch.pipeline()
                .addLast(new StringDecoder())
                .addLast(new StringEncoder())
                .addLast(new SimpleChannelInboundHandler<String>() {
                    @Override
                    protected void channelRead0(ChannelHandlerContext ctx, String msg) {
                        System.out.println("收到: " + msg);
                        ctx.writeAndFlush("收到你的消息");
                    }
                });
        }
    });
bootstrap.bind(8080).sync();`,tags:["Netty","网络编程"]},{id:"31",title:"什么是MyBatis？#{}和${}的区别是什么？",content:"解释MyBatis的概念、特点，以及#{}和${}的区别、使用场景。",category:"advanced",difficulty:"medium",answer:"MyBatis是持久层框架，避免JDBC代码。#{}是预编译处理，使用PreparedStatement，能防止SQL注入。${}是字符串替换，直接替换，有SQL注入风险。#{id} → ?，${table} → 直接替换。",codeExample:`<!-- #{}预编译，安全 -->
<select id="getUser" resultType="User">
    SELECT * FROM user WHERE id = #{id}
</select>

<!-- \${}字符串替换，需注意SQL注入 -->
<select id="getUsers" resultType="User">
    SELECT * FROM \${tableName}
</select>

<!-- 模糊查询 - 正确做法 -->
<select id="searchUser" resultType="User">
    SELECT * FROM user WHERE name LIKE CONCAT('%', #{keyword}, '%')
</select>`,tags:["MyBatis","ORM"]},{id:"32",title:"什么是RESTful API？设计原则是什么？",content:"解释RESTful API的概念、设计原则（资源、HTTP方法、状态码、URI设计等）。",category:"advanced",difficulty:"medium",answer:"RESTful是基于REST架构风格的API设计。核心原则：1)资源用URI表示；2)用HTTP动词操作（GET查、POST增、PUT改、DELETE删）；3)无状态；4)用HTTP状态码；5)HATEOAS。",codeExample:`// RESTful API示例
GET    /users              # 获取用户列表
GET    /users/1            # 获取id为1的用户
POST   /users              # 创建新用户
PUT    /users/1            # 更新用户
DELETE /users/1            # 删除用户
GET    /users/1/orders     # 获取用户的订单列表
POST   /users/1/orders     # 为用户创建订单

// HTTP状态码
200 OK                    // 成功
201 Created               // 创建成功
400 Bad Request           // 请求参数错误
401 Unauthorized          // 未授权
404 Not Found             // 资源不存在
500 Internal Server Error // 服务器错误`,tags:["RESTful","API设计"]},{id:"33",title:"什么是Redis持久化？RDB和AOF的区别？",content:"解释Redis持久化的概念、RDB和AOF两种方式的原理、优缺点对比。",category:"advanced",difficulty:"hard",answer:"Redis持久化将内存数据保存到磁盘。RDB是快照式，save/bgsave生成.rdb文件。AOF记录每次写命令，追加到.aof文件，支持重写。RDB快、文件小但可能丢数据。AOF更可靠、文件大。混合模式是推荐方案。",codeExample:`# RDB配置
save 900 1          # 900秒内1个修改
save 300 10         # 300秒内10个修改
rdbfilename dump.rdb

# AOF配置
appendonly yes
appendfsync everysec  # 每秒同步
no-appendfsync-on-rewrite yes

# 混合持久化（Redis 4.0+）
aof-use-rdb-preamble yes

# 命令
SAVE       # 同步保存
BGSAVE     # 后台保存
BGREWRITEAOF # AOF重写`,tags:["Redis","持久化"]},{id:"34",title:"什么是缓存雪崩、缓存穿透、缓存击穿？如何解决？",content:"解释这三个缓存问题的概念、原因及解决方案。",category:"advanced",difficulty:"hard",answer:"缓存雪崩：大量key同时过期。解决：过期时间加随机值。缓存穿透：查不存在的数据。解决：布隆过滤器。缓存击穿：热点key过期。解决：互斥锁、永不过期。",codeExample:`// 互斥锁解决缓存击穿
public User getUser(Long id) {
    String key = "user:" + id;
    User user = redis.get(key);
    if (user != null) {
        return user;
    }
    String lockKey = "lock:user:" + id;
    if (redis.set(lockKey, "1", "NX", "EX", 10)) {
        try {
            user = db.getUser(id);
            if (user != null) {
                redis.set(key, user, 3600);
            }
            return user;
        } finally {
            redis.del(lockKey);
        }
    } else {
        Thread.sleep(100);
        return getUser(id);
    }
}

// 布隆过滤器
BloomFilter<Long> filter = BloomFilter.create(Funnels.longFunnel(), 1000000, 0.01);
filter.put(userId);
if (filter.mightContain(userId)) {
    // 查询缓存或数据库
}`,tags:["缓存","Redis"]},{id:"35",title:"什么是JVM类加载机制？双亲委派模型？",content:"解释JVM类加载过程、类加载器、双亲委派模型的原理和优势。",category:"jvm",difficulty:"hard",answer:"类加载过程：加载、验证、准备、解析、初始化。类加载器：Bootstrap、Extension、Application、Custom。双亲委派：先父后子加载。优势：避免重复加载、保证核心类安全。",codeExample:`// 类加载器层次
Bootstrap ClassLoader   // 加载JDK核心类
     ↑
Extension ClassLoader  // 加载扩展类
     ↑
Application ClassLoader // 加载应用类
     ↑
Custom ClassLoader

// 打破双亲委派（Tomcat等）
public class MyClassLoader extends ClassLoader {
    @Override
    protected Class<?> loadClass(String name, boolean resolve) throws ClassNotFoundException {
        // 自定义加载逻辑
    }
}

// 查看类加载器
ClassLoader loader = MyClass.class.getClassLoader();
System.out.println(loader);`,tags:["JVM","类加载"]},{id:"36",title:"什么是Sentinel？有什么功能？",content:"介绍Sentinel的概念、主要功能（限流、熔断、降级）和使用场景。",category:"advanced",difficulty:"medium",answer:"Sentinel是阿里的流量控制组件。功能：1)流量控制（QPS限流、并发线程数控制）；2)熔断降级（慢调用、异常比例、异常数）；3)系统保护。比Hystrix更强大。",codeExample:`// 定义资源
try (Entry entry = SphU.entry("resourceName")) {
    // 业务逻辑
} catch (BlockException ex) {
    // 被限流/熔断
}

// 注解方式
@SentinelResource(value = "hello", blockHandler = "handleBlock")
public String hello() {
    return "Hello";
}

public String handleBlock(BlockException ex) {
    return "被限流了";
}

// 配置规则
FlowRule rule = new FlowRule();
rule.setResource("resource");
rule.setGrade(RuleConstant.FLOW_GRADE_QPS);
rule.setCount(10); // 每秒10次
FlowRuleManager.loadRules(Collections.singletonList(rule));`,tags:["Sentinel","限流熔断"]},{id:"37",title:"什么是设计模式？单例模式有几种写法？",content:"介绍设计模式概念，单例模式的多种实现方式（饿汉、懒汉、双重检查、枚举、静态内部类）。",category:"oop",difficulty:"medium",answer:"设计模式是问题解决方案的总结。单例模式：1)饿汉式（类加载初始化）；2)懒汉式（需要时创建，线程不安全）；3)双重检查（volatile + synchronized）；4)静态内部类（推荐）；5)枚举（最佳）。",codeExample:`// 1. 饿汉式
public class Singleton1 {
    private static final Singleton1 INSTANCE = new Singleton1();
    private Singleton1() {}
    public static Singleton1 getInstance() { return INSTANCE; }
}

// 2. 双重检查
public class Singleton2 {
    private static volatile Singleton2 INSTANCE;
    private Singleton2() {}
    public static Singleton2 getInstance() {
        if (INSTANCE == null) {
            synchronized (Singleton2.class) {
                if (INSTANCE == null) {
                    INSTANCE = new Singleton2();
                }
            }
        }
        return INSTANCE;
    }
}

// 3. 静态内部类（推荐）
public class Singleton3 {
    private Singleton3() {}
    private static class Holder {
        private static final Singleton3 INSTANCE = new Singleton3();
    }
    public static Singleton3 getInstance() {
        return Holder.INSTANCE;
    }
}

// 4. 枚举（最佳）
public enum Singleton4 {
    INSTANCE;
}`,tags:["设计模式","单例"]},{id:"38",title:"什么是Nacos？服务注册与配置中心？",content:"介绍Nacos的功能、特点，以及如何实现服务注册发现和配置中心。",category:"advanced",difficulty:"medium",answer:"Nacos是阿里开源的注册中心和配置中心。功能：1)服务发现（替代Eureka）；2)配置中心（替代Config）；3)DNS服务。支持AP和CP模式。",codeExample:`// 服务注册
@SpringBootApplication
@EnableDiscoveryClient
public class App { }

// 配置文件
spring:
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848
      config:
        server-addr: localhost:8848
        file-extension: yaml

// 动态配置
@RefreshScope
@RestController
public class ConfigController {
    @Value("\${app.name}")
    private String appName;
}

// Nacos API
NamingService naming = NamingFactory.createNamingService("localhost:8848");
naming.registerInstance("serviceName", "127.0.0.1", 8080);
Instance instance = naming.selectOneHealthyInstance("serviceName");`,tags:["Nacos","微服务"]},{id:"39",title:"什么是MQ？RabbitMQ的架构？",content:"介绍消息队列的概念、作用，RabbitMQ的核心组件和工作流程。",category:"advanced",difficulty:"medium",answer:"MQ是消息中间件，解耦、异步、削峰。RabbitMQ架构：Producer → Exchange（交换机）→ Queue（队列）→ Consumer。交换机类型：direct、topic、fanout、headers。",codeExample:`// 简单生产者
ConnectionFactory factory = new ConnectionFactory();
factory.setHost("localhost");
Connection connection = factory.newConnection();
Channel channel = connection.createChannel();
channel.queueDeclare("queue", false, false, false, null);
channel.basicPublish("", "queue", null, "Hello".getBytes());

// 简单消费者
channel.basicConsume("queue", true, (tag, delivery) -> {
    String msg = new String(delivery.getBody());
    System.out.println("收到: " + msg);
}, tag -> {});

// Spring Boot
@RabbitListener(queues = "queue")
public void listen(String msg) {
    System.out.println("收到: " + msg);
}

@RabbitListener(bindings = @QueueBinding(
    value = @Queue("queue"),
    exchange = @Exchange(value = "exchange", type = "topic"),
    key = "routing.key"
))`,tags:["RabbitMQ","消息队列"]},{id:"40",title:"什么是GitFlow工作流？常用Git命令？",content:"介绍GitFlow分支管理策略，以及常用Git命令。",category:"basics",difficulty:"easy",answer:"GitFlow是分支管理模型：master（生产）、develop（开发）、feature（功能）、release（发布）、hotfix（热修复）。常用命令：clone、pull、push、add、commit、merge、rebase、stash。",codeExample:`# GitFlow流程
git checkout -b feature/new-feature develop  # 新建功能分支
# 开发完成
git checkout develop
git merge --no-ff feature/new-feature
# 准备发布
git checkout -b release/1.0 develop
# 修复bug后合并到master和develop
git checkout master
git merge --no-ff release/1.0
git tag -a 1.0
git checkout develop
git merge --no-ff release/1.0
# 热修复
git checkout -b hotfix/bug master
# 修复后合并到master和develop

# 常用命令
git clone repo
git pull origin main
git add .
git commit -m "message"
git push origin main
git branch new-branch
git checkout new-branch
git merge other-branch
git rebase main
git stash`,tags:["Git","版本控制"]},{id:"dp-1",title:"单例模式的实现方式有哪些？",content:"列举单例模式的几种常见实现方式，包括饿汉式、懒汉式、双重检查锁、静态内部类、枚举等，并分析各自的优缺点。",category:"design-pattern",difficulty:"easy",answer:"单例模式确保类只有一个实例。常见实现：1)饿汉式（线程安全，类加载时初始化）；2)懒汉式（延迟加载，需同步）；3)双重检查锁（延迟加载+高性能）；4)静态内部类（延迟加载+线程安全）；5)枚举（线程安全+防止反射破坏）。推荐使用枚举或静态内部类。",codeExample:`// 1. 饿汉式
public class Singleton1 {
    private static final Singleton1 INSTANCE = new Singleton1();
    private Singleton1() {}
    public static Singleton1 getInstance() { return INSTANCE; }
}

// 2. 懒汉式（线程安全）
public class Singleton2 {
    private static Singleton2 instance;
    private Singleton2() {}
    public static synchronized Singleton2 getInstance() {
        if (instance == null) {
            instance = new Singleton2();
        }
        return instance;
    }
}

// 3. 双重检查锁（推荐）
public class Singleton3 {
    private volatile static Singleton3 instance;
    private Singleton3() {}
    public static Singleton3 getInstance() {
        if (instance == null) {
            synchronized (Singleton3.class) {
                if (instance == null) {
                    instance = new Singleton3();
                }
            }
        }
        return instance;
    }
}

// 4. 静态内部类（推荐）
public class Singleton4 {
    private Singleton4() {}
    private static class Holder {
        private static final Singleton4 INSTANCE = new Singleton4();
    }
    public static Singleton4 getInstance() {
        return Holder.INSTANCE;
    }
}

// 5. 枚举（最佳实践）
public enum Singleton5 {
    INSTANCE;
    public void doSomething() { /* ... */ }
}`,tags:["创建型","单例模式"]},{id:"dp-2",title:"工厂模式的三种形式",content:"解释简单工厂、工厂方法和抽象工厂三种模式的区别、适用场景和优缺点。",category:"design-pattern",difficulty:"medium",answer:"工厂模式用于封装对象的创建过程。1)简单工厂：一个工厂类创建所有对象，违反开闭原则；2)工厂方法：每个产品有对应的工厂，符合开闭原则；3)抽象工厂：创建一组相关对象，解决产品族问题。Spring的BeanFactory就是抽象工厂模式的应用。",codeExample:`// 1. 简单工厂
public class CarFactory {
    public static Car createCar(String type) {
        switch (type) {
            case "Benz": return new Benz();
            case "BMW": return new BMW();
            default: return null;
        }
    }
}

// 2. 工厂方法
public interface CarFactory {
    Car createCar();
}
public class BenzFactory implements CarFactory {
    public Car createCar() { return new Benz(); }
}
public class BMWFactory implements CarFactory {
    public Car createCar() { return new BMW(); }
}

// 3. 抽象工厂 - 创建产品族
public interface AbstractFactory {
    Car createCar();
    Engine createEngine();
}
public class LuxuryFactory implements AbstractFactory {
    public Car createCar() { return new LuxuryCar(); }
    public Engine createEngine() { return new V8Engine(); }
}
public class EconomyFactory implements AbstractFactory {
    public Car createCar() { return new EconomyCar(); }
    public Engine createEngine() { return new I4Engine(); }
}`,tags:["创建型","工厂模式"]},{id:"dp-3",title:"建造者模式的应用场景",content:"解释建造者模式的设计思想，分析其适用场景，并举例说明在Java中的应用。",category:"design-pattern",difficulty:"medium",answer:"建造者模式将复杂对象的构建与表示分离，使同样的构建过程可以创建不同的表示。适用场景：1)对象有多个可选属性；2)对象创建过程复杂；3)需要生成不同表示的对象。Java中的StringBuilder、Lombok的@Builder注解都是建造者模式的应用。",codeExample:`// 建造者模式实现
public class User {
    private final String name;
    private final int age;
    private final String email;
    private final String phone;
    
    private User(Builder builder) {
        this.name = builder.name;
        this.age = builder.age;
        this.email = builder.email;
        this.phone = builder.phone;
    }
    
    public static class Builder {
        private String name;
        private int age;
        private String email;
        private String phone;
        
        public Builder name(String name) { this.name = name; return this; }
        public Builder age(int age) { this.age = age; return this; }
        public Builder email(String email) { this.email = email; return this; }
        public Builder phone(String phone) { this.phone = phone; return this; }
        
        public User build() {
            if (name == null) throw new IllegalStateException("name is required");
            return new User(this);
        }
    }
}

// 使用
User user = new User.Builder()
    .name("张三")
    .age(28)
    .email("zhangsan@example.com")
    .phone("13800138000")
    .build();

// Lombok简化
@Builder
public class User {
    private String name;
    private int age;
    private String email;
}

// Java StringBuilder也是建造者模式
StringBuilder sb = new StringBuilder()
    .append("Hello")
    .append(" ")
    .append("World")
    .reverse();`,tags:["创建型","建造者模式"]},{id:"dp-4",title:"原型模式的深拷贝和浅拷贝",content:"解释原型模式的概念，区分浅拷贝和深拷贝，并说明如何实现深拷贝。",category:"design-pattern",difficulty:"medium",answer:"原型模式通过复制已有对象创建新对象，避免重复初始化。浅拷贝只复制基本类型和引用，不复制引用指向的对象。深拷贝会递归复制所有对象。实现方式：1)实现Cloneable接口并重写clone()方法；2)使用序列化/反序列化；3)手动递归复制。",codeExample:`// 浅拷贝
public class Person implements Cloneable {
    private String name;
    private Address address; // 引用类型
    
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone(); // 浅拷贝，address引用相同
    }
}

// 深拷贝 - 方式1：重写clone()
public class Person implements Cloneable {
    private String name;
    private Address address;
    
    @Override
    protected Object clone() throws CloneNotSupportedException {
        Person clone = (Person) super.clone();
        clone.address = (Address) address.clone(); // 递归拷贝
        return clone;
    }
}

// 深拷贝 - 方式2：序列化
public class Person implements Serializable {
    private String name;
    private Address address;
    
    public Person deepCopy() {
        try {
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ObjectOutputStream oos = new ObjectOutputStream(baos);
            oos.writeObject(this);
            
            ByteArrayInputStream bais = new ByteArrayInputStream(baos.toByteArray());
            ObjectInputStream ois = new ObjectInputStream(bais);
            return (Person) ois.readObject();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}`,tags:["创建型","原型模式"]},{id:"dp-5",title:"适配器模式的两种形式",content:"解释类适配器和对象适配器的区别，分析各自的优缺点和适用场景。",category:"design-pattern",difficulty:"easy",answer:"适配器模式将一个类的接口转换成客户希望的另一个接口。类适配器使用继承，对象适配器使用组合。类适配器：优点是可以重写适配者的方法，缺点是Java只能单继承限制了灵活性。对象适配器：优点是更灵活、符合组合优于继承原则，缺点是不能重写适配者的方法。推荐使用对象适配器。",codeExample:`// 目标接口
public interface Target {
    void request();
}

// 适配者
public class Adaptee {
    public void specificRequest() {
        System.out.println("Adaptee specific request");
    }
}

// 1. 类适配器 - 使用继承
public class ClassAdapter extends Adaptee implements Target {
    @Override
    public void request() {
        specificRequest();
    }
}

// 2. 对象适配器 - 使用组合（推荐）
public class ObjectAdapter implements Target {
    private Adaptee adaptee;
    
    public ObjectAdapter(Adaptee adaptee) {
        this.adaptee = adaptee;
    }
    
    @Override
    public void request() {
        adaptee.specificRequest();
    }
}

// 使用
Target target1 = new ClassAdapter();
target1.request();

Target target2 = new ObjectAdapter(new Adaptee());
target2.request();

// Java中的实际应用
// Arrays.asList() 返回的List不支持add/remove
// Collections.synchronizedList() 也是适配器模式`,tags:["结构型","适配器模式"]},{id:"dp-6",title:"装饰器模式的应用",content:"解释装饰器模式的设计思想，举例说明其在Java中的实际应用（如IO流）。",category:"design-pattern",difficulty:"medium",answer:"装饰器模式动态地给对象添加额外功能，比继承更灵活。特点：1)装饰器和被装饰者实现相同接口；2)装饰器持有被装饰者引用；3)可以嵌套多个装饰器。Java IO流是典型应用：InputStream作为抽象组件，FileInputStream是具体组件，BufferedInputStream、DataInputStream是装饰器。",codeExample:`// 抽象组件
public interface Coffee {
    double cost();
    String description();
}

// 具体组件
public class SimpleCoffee implements Coffee {
    @Override
    public double cost() { return 5.0; }
    @Override
    public String description() { return "纯咖啡"; }
}

// 抽象装饰器
public abstract class CoffeeDecorator implements Coffee {
    protected Coffee decoratedCoffee;
    public CoffeeDecorator(Coffee coffee) {
        this.decoratedCoffee = coffee;
    }
}

// 具体装饰器
public class MilkDecorator extends CoffeeDecorator {
    public MilkDecorator(Coffee coffee) { super(coffee); }
    @Override
    public double cost() { return decoratedCoffee.cost() + 2.0; }
    @Override
    public String description() { return decoratedCoffee.description() + " + 牛奶"; }
}

public class SugarDecorator extends CoffeeDecorator {
    public SugarDecorator(Coffee coffee) { super(coffee); }
    @Override
    public double cost() { return decoratedCoffee.cost() + 1.0; }
    @Override
    public String description() { return decoratedCoffee.description() + " + 糖"; }
}

// 使用 - 嵌套装饰
Coffee coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
System.out.println(coffee.description()); // 纯咖啡 + 牛奶 + 糖
System.out.println(coffee.cost()); // 8.0

// Java IO中的装饰器模式
InputStream is = new FileInputStream("file.txt");
is = new BufferedInputStream(is);      // 添加缓冲
is = new DataInputStream(is);          // 添加数据读取功能`,tags:["结构型","装饰器模式"]},{id:"dp-7",title:"代理模式的三种形式",content:"解释静态代理、动态代理（JDK）和CGLIB代理的区别和适用场景。",category:"design-pattern",difficulty:"hard",answer:"代理模式为其他对象提供代理以控制访问。1)静态代理：手动编写代理类，不灵活；2)JDK动态代理：基于接口，运行时生成代理类，性能较好；3)CGLIB代理：基于继承，无需接口，性能略低。Spring AOP默认使用JDK动态代理，没有接口时使用CGLIB。",codeExample:`// 1. 静态代理
public interface UserService {
    void add();
}
public class UserServiceImpl implements UserService {
    public void add() { System.out.println("添加用户"); }
}
public class UserServiceProxy implements UserService {
    private UserService target;
    public UserServiceProxy(UserService target) { this.target = target; }
    public void add() {
        System.out.println("开始事务");
        target.add();
        System.out.println("提交事务");
    }
}

// 2. JDK动态代理
public class JDKProxy implements InvocationHandler {
    private Object target;
    public JDKProxy(Object target) { this.target = target; }
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        System.out.println("前置增强");
        Object result = method.invoke(target, args);
        System.out.println("后置增强");
        return result;
    }
}
// 使用
UserService proxy = (UserService) Proxy.newProxyInstance(
    UserService.class.getClassLoader(),
    new Class[]{UserService.class},
    new JDKProxy(new UserServiceImpl())
);

// 3. CGLIB代理
public class CGLIBProxy implements MethodInterceptor {
    public Object intercept(Object obj, Method method, Object[] args, MethodProxy proxy) throws Throwable {
        System.out.println("前置增强");
        Object result = proxy.invokeSuper(obj, args);
        System.out.println("后置增强");
        return result;
    }
}
// 使用
Enhancer enhancer = new Enhancer();
enhancer.setSuperclass(UserServiceImpl.class);
enhancer.setCallback(new CGLIBProxy());
UserService proxy = (UserService) enhancer.create();`,tags:["结构型","代理模式","AOP"]},{id:"dp-8",title:"观察者模式的实现",content:"解释观察者模式的设计思想，说明其在Java中的应用（如JavaFX、Spring事件机制）。",category:"design-pattern",difficulty:"medium",answer:"观察者模式定义对象间一对多依赖，当主题状态改变时所有观察者自动收到通知。Java内置支持：Observable类和Observer接口（已过时）。现代应用：JavaFX的Property/Listener机制、Spring的ApplicationEventPublisher、Guava的EventBus。",codeExample:`// 自定义观察者模式
public interface Subject {
    void registerObserver(Observer observer);
    void removeObserver(Observer observer);
    void notifyObservers();
}

public interface Observer {
    void update(String message);
}

public class ConcreteSubject implements Subject {
    private List<Observer> observers = new ArrayList<>();
    private String message;
    
    @Override
    public void registerObserver(Observer observer) {
        observers.add(observer);
    }
    
    @Override
    public void removeObserver(Observer observer) {
        observers.remove(observer);
    }
    
    @Override
    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(message);
        }
    }
    
    public void setMessage(String message) {
        this.message = message;
        notifyObservers();
    }
}

public class ConcreteObserver implements Observer {
    private String name;
    public ConcreteObserver(String name) { this.name = name; }
    @Override
    public void update(String message) {
        System.out.println(name + "收到消息: " + message);
    }
}

// 使用
Subject subject = new ConcreteSubject();
subject.registerObserver(new ConcreteObserver("张三"));
subject.registerObserver(new ConcreteObserver("李四"));
subject.setMessage("Hello World!");

// Spring事件机制
@Component
public class MyEventListener implements ApplicationListener<MyEvent> {
    @Override
    public void onApplicationEvent(MyEvent event) {
        System.out.println("收到事件: " + event.getMessage());
    }
}
// 发布事件
applicationEventPublisher.publishEvent(new MyEvent("hello"));`,tags:["行为型","观察者模式"]},{id:"dp-9",title:"策略模式的应用场景",content:"解释策略模式的设计思想，说明如何用策略模式消除大量的if-else语句。",category:"design-pattern",difficulty:"easy",answer:"策略模式定义一系列算法，封装每个算法，并使它们可以互换。策略模式让算法独立于使用它的客户。适用场景：1)有多种相似算法；2)算法需要动态切换；3)消除大量if-else分支。Java中的Comparator接口就是策略模式的应用。",codeExample:`// 策略接口
public interface PaymentStrategy {
    void pay(double amount);
}

// 具体策略
public class CreditCardPayment implements PaymentStrategy {
    private String cardNumber;
    public CreditCardPayment(String cardNumber) { this.cardNumber = cardNumber; }
    @Override
    public void pay(double amount) {
        System.out.println("信用卡支付: " + amount + "元");
    }
}

public class WeChatPayment implements PaymentStrategy {
    private String openId;
    public WeChatPayment(String openId) { this.openId = openId; }
    @Override
    public void pay(double amount) {
        System.out.println("微信支付: " + amount + "元");
    }
}

public class AlipayPayment implements PaymentStrategy {
    private String account;
    public AlipayPayment(String account) { this.account = account; }
    @Override
    public void pay(double amount) {
        System.out.println("支付宝支付: " + amount + "元");
    }
}

// 上下文
public class ShoppingCart {
    private PaymentStrategy paymentStrategy;
    
    public void setPaymentStrategy(PaymentStrategy strategy) {
        this.paymentStrategy = strategy;
    }
    
    public void checkout(double amount) {
        paymentStrategy.pay(amount);
    }
}

// 使用
ShoppingCart cart = new ShoppingCart();
cart.setPaymentStrategy(new WeChatPayment("openid123"));
cart.checkout(100.0);

// 消除if-else对比
// 传统方式（不推荐）
if (type.equals("wechat")) { /* ... */ }
else if (type.equals("alipay")) { /* ... */ }
else if (type.equals("credit")) { /* ... */ }

// 策略模式（推荐）
Map<String, PaymentStrategy> strategies = new HashMap<>();
strategies.put("wechat", new WeChatPayment(openId));
strategies.put("alipay", new AlipayPayment(account));
strategies.get(type).pay(amount);`,tags:["行为型","策略模式"]},{id:"dp-10",title:"模板方法模式的实现",content:"解释模板方法模式的设计思想，说明其在Spring框架中的应用。",category:"design-pattern",difficulty:"medium",answer:"模板方法模式定义算法骨架，将某些步骤延迟到子类实现。父类控制算法流程，子类实现具体步骤。特点：1)父类定义算法框架；2)子类实现抽象方法；3)钩子方法可选覆盖。Spring的AbstractApplicationContext的refresh()方法就是模板方法模式的典型应用。",codeExample:`// 抽象类定义模板方法
public abstract class AbstractGame {
    // 模板方法 - 定义算法骨架
    public final void play() {
        initialize();
        startPlay();
        endPlay();
    }
    
    protected abstract void initialize();
    protected abstract void startPlay();
    protected abstract void endPlay();
    
    // 钩子方法 - 可选覆盖
    protected void pause() {
        // 默认实现为空
    }
}

// 具体类实现步骤
public class Cricket extends AbstractGame {
    @Override
    protected void initialize() {
        System.out.println("板球游戏初始化");
    }
    
    @Override
    protected void startPlay() {
        System.out.println("板球游戏开始");
    }
    
    @Override
    protected void endPlay() {
        System.out.println("板球游戏结束");
    }
}

public class Football extends AbstractGame {
    @Override
    protected void initialize() {
        System.out.println("足球游戏初始化");
    }
    
    @Override
    protected void startPlay() {
        System.out.println("足球游戏开始");
    }
    
    @Override
    protected void endPlay() {
        System.out.println("足球游戏结束");
    }
    
    @Override
    protected void pause() {
        System.out.println("足球暂停");
    }
}

// 使用
AbstractGame game = new Cricket();
game.play();

// Spring中的应用
// AbstractApplicationContext.refresh()方法定义了容器初始化的模板
// 子类实现抽象方法 customizeContext()、refreshBeanFactory()等`,tags:["行为型","模板方法模式"]},{id:"dp-11",title:"责任链模式的应用",content:"解释责任链模式的设计思想，说明其在Spring Security中的应用。",category:"design-pattern",difficulty:"medium",answer:"责任链模式将请求沿着链传递，直到有一个处理者处理它。每个处理者可以选择处理请求或传递给下一个。适用场景：1)多个对象可以处理同一请求；2)请求处理者不明确；3)动态组合处理者。Spring Security的FilterChain、Servlet的Filter链都是责任链模式的应用。",codeExample:`// 抽象处理者
public abstract class Handler {
    protected Handler next;
    
    public void setNext(Handler next) {
        this.next = next;
    }
    
    public abstract void handleRequest(String request);
}

// 具体处理者
public class AuthenticationHandler extends Handler {
    @Override
    public void handleRequest(String request) {
        if (request.contains("auth")) {
            System.out.println("AuthenticationHandler处理请求");
        } else if (next != null) {
            next.handleRequest(request);
        }
    }
}

public class AuthorizationHandler extends Handler {
    @Override
    public void handleRequest(String request) {
        if (request.contains("authz")) {
            System.out.println("AuthorizationHandler处理请求");
        } else if (next != null) {
            next.handleRequest(request);
        }
    }
}

public class LoggingHandler extends Handler {
    @Override
    public void handleRequest(String request) {
        System.out.println("LoggingHandler记录日志");
        if (next != null) {
            next.handleRequest(request);
        }
    }
}

// 使用 - 构建责任链
Handler logger = new LoggingHandler();
Handler auth = new AuthenticationHandler();
Handler authz = new AuthorizationHandler();

logger.setNext(auth);
auth.setNext(authz);

logger.handleRequest("auth request");

// Spring Security中的责任链
// FilterChainProxy包含多个Filter，按顺序执行
// UsernamePasswordAuthenticationFilter -> BasicAuthenticationFilter -> ...`,tags:["行为型","责任链模式"]},{id:"dp-12",title:"设计模式在Spring框架中的应用",content:"列举Spring框架中使用的主要设计模式，并说明它们的具体应用场景。",category:"design-pattern",difficulty:"hard",answer:"Spring框架广泛应用设计模式：1)工厂模式（BeanFactory、ApplicationContext）；2)单例模式（默认Bean作用域）；3)代理模式（AOP）；4)策略模式（Resource、TransactionDefinition）；5)模板方法模式（JdbcTemplate、AbstractApplicationContext）；6)观察者模式（ApplicationEvent）；7)责任链模式（FilterChainProxy）；8)适配器模式（HandlerAdapter）；9)装饰器模式（BeanWrapper）。",codeExample:`// 1. 工厂模式
ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
UserService service = context.getBean(UserService.class);

// 2. 单例模式
// @Scope("singleton") - 默认
@Service
public class UserService { /* ... */ }

// 3. 代理模式 - AOP
@Aspect
@Component
public class LogAspect {
    @Around("execution(* com.example.service.*.*(..))")
    public Object log(ProceedingJoinPoint pjp) throws Throwable {
        System.out.println("方法开始");
        Object result = pjp.proceed();
        System.out.println("方法结束");
        return result;
    }
}

// 4. 策略模式 - 事务传播行为
@Transactional(propagation = Propagation.REQUIRED)
public void method() { /* ... */ }

// 5. 模板方法模式 - JdbcTemplate
jdbcTemplate.query("SELECT * FROM users", (rs, rowNum) -> 
    new User(rs.getLong("id"), rs.getString("name"))
);

// 6. 观察者模式 - 事件
applicationEventPublisher.publishEvent(new MyEvent(this, "data"));

// 7. 责任链模式 - Filter链
// SecurityFilterChain

// 8. 适配器模式 - MVC HandlerAdapter
// RequestMappingHandlerAdapter`,tags:["设计模式","Spring"]},{id:"ms-1",title:"什么是微服务架构？",content:"解释微服务架构的概念、特点，以及与单体架构的区别。",category:"microservice",difficulty:"easy",answer:"微服务架构是将应用拆分为多个小型、独立部署的服务。特点：1)服务独立部署、独立扩展；2)服务间通过API通信；3)每个服务专注单一业务；4)可使用不同技术栈。与单体架构对比：单体架构部署简单但扩展困难，微服务灵活但运维复杂。",codeExample:`// 单体架构示例 - 所有功能在一个应用中
@SpringBootApplication
public class MonolithApplication {
    // 用户模块
    @RestController
    class UserController { /* ... */ }
    
    // 订单模块
    @RestController
    class OrderController { /* ... */ }
    
    // 商品模块
    @RestController
    class ProductController { /* ... */ }
}

// 微服务架构示例 - 拆分为独立服务
// 用户服务（独立部署）
@SpringBootApplication
public class UserServiceApplication {
    @RestController
    class UserController {
        @GetMapping("/users/{id}")
        public User getUser(@PathVariable Long id) {
            return userService.findById(id);
        }
    }
}

// 订单服务（独立部署）
@SpringBootApplication
public class OrderServiceApplication {
    @RestController
    class OrderController {
        @PostMapping("/orders")
        public Order createOrder(@RequestBody OrderDTO dto) {
            // 通过Feign调用用户服务
            User user = userClient.getUser(dto.getUserId());
            return orderService.create(dto, user);
        }
    }
}

// 商品服务（独立部署）
@SpringBootApplication
public class ProductServiceApplication { /* ... */ }`,tags:["微服务","架构设计"]},{id:"ms-2",title:"Spring Cloud核心组件有哪些？",content:"列举Spring Cloud的核心组件及其作用，包括服务注册发现、配置中心、负载均衡、服务调用、网关等。",category:"microservice",difficulty:"medium",answer:"Spring Cloud核心组件：1)Eureka/Nacos（服务注册发现）；2)Config/Nacos Config（配置中心）；3)Ribbon/LoadBalancer（负载均衡）；4)Feign/OpenFeign（声明式服务调用）；5)Gateway/Zuul（API网关）；6)Hystrix/Sentinel（服务熔断降级）；7)Sleuth+Zipkin（链路追踪）。",codeExample:`// 1. Eureka服务注册中心
@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}

// application.yml
server:
  port: 8761
eureka:
  client:
    register-with-eureka: false
    fetch-registry: false

// 2. 服务注册到Eureka
@SpringBootApplication
@EnableDiscoveryClient
public class UserServiceApplication { /* ... */ }

// application.yml
spring:
  application:
    name: user-service
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/

// 3. Feign声明式调用
@FeignClient(name = "user-service")
public interface UserClient {
    @GetMapping("/users/{id}")
    User getUser(@PathVariable("id") Long id);
}

@Service
public class OrderService {
    @Autowired
    private UserClient userClient;
    
    public Order createOrder(Long userId) {
        User user = userClient.getUser(userId); // 远程调用
        return new Order(user);
    }
}

// 4. Gateway网关配置
@SpringBootApplication
public class GatewayApplication { /* ... */ }

// application.yml
spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://user-service
          predicates:
            - Path=/api/users/**
        - id: order-service
          uri: lb://order-service
          predicates:
            - Path=/api/orders/**`,tags:["Spring Cloud","服务治理"]},{id:"ms-3",title:"服务注册与发现的原理",content:"解释服务注册发现的工作原理，包括注册中心、服务提供者、服务消费者的交互流程。",category:"microservice",difficulty:"medium",answer:"服务注册发现流程：1)服务启动时向注册中心注册（发送服务名、IP、端口）；2)注册中心维护服务列表并定时心跳检测；3)服务消费者从注册中心获取服务列表；4)消费者通过负载均衡选择服务实例调用；5)服务下线时注册中心剔除。心跳机制保证服务列表实时更新。",codeExample:`// Eureka服务注册流程
// 1. 服务提供者注册
@RestController
@SpringBootApplication
@EnableDiscoveryClient
public class ProviderApplication {
    @Value("\${server.port}")
    private int port;
    
    @GetMapping("/hello")
    public String hello() {
        return "Hello from port: " + port;
    }
    
    // 启动时自动注册到Eureka
    // spring.application.name=provider-service
    // eureka.client.service-url.defaultZone=http://localhost:8761/eureka
}

// 2. 服务消费者发现并调用
@SpringBootApplication
@EnableDiscoveryClient
public class ConsumerApplication {
    @Autowired
    private DiscoveryClient discoveryClient;
    
    @Autowired
    private LoadBalancer loadBalancer;
    
    @GetMapping("/invoke")
    public String invoke() {
        // 从注册中心获取服务实例列表
        List<ServiceInstance> instances = discoveryClient.getInstances("provider-service");
        
        // 负载均衡选择一个实例
        ServiceInstance instance = loadBalancer.choose(instances);
        
        // 调用服务
        String url = instance.getUri() + "/hello";
        return restTemplate.getForObject(url, String.class);
    }
}

// 3. Nacos注册中心配置（推荐）
spring:
  application:
    name: user-service
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848
        namespace: public
        group: DEFAULT_GROUP`,tags:["服务注册","Eureka","Nacos"]},{id:"ms-4",title:"负载均衡策略有哪些？",content:"解释客户端负载均衡和服务端负载均衡的区别，列举常见的负载均衡策略。",category:"microservice",difficulty:"medium",answer:"负载均衡分为客户端（Ribbon/LoadBalancer）和服务端（Nginx）。常见策略：1)轮询（RoundRobin）：依次调用；2)随机（Random）：随机选择；3)加权轮询：按权重分配；4)最少连接：选择连接数最少的服务；5)IP哈希：相同IP请求同一服务。Spring Cloud LoadBalancer默认轮询。",codeExample:`// Ribbon负载均衡配置（已废弃，使用Spring Cloud LoadBalancer）
// 1. 自定义负载均衡策略
@Configuration
public class LoadBalancerConfig {
    @Bean
    ReactorLoadBalancer<ServiceInstance> randomLoadBalancer(Environment environment, LoadBalancerClientFactory factory) {
        String name = environment.getProperty(LoadBalancerClientFactory.PROPERTY_NAME);
        return new RandomLoadBalancer(factory.getLazyProvider(name, ServiceInstanceListSupplier.class), name);
    }
}

// 2. 使用@LoadBalancerClient指定策略
@LoadBalancerClient(name = "user-service", configuration = LoadBalancerConfig.class)
public interface UserClient {
    @GetMapping("/users/{id}")
    User getUser(@PathVariable("id") Long id);
}

// 3. Nginx服务端负载均衡配置
upstream backend {
    # 轮询（默认）
    server 192.168.1.1:8080;
    server 192.168.1.2:8080;
    
    # 加权轮询
    server 192.168.1.3:8080 weight=3;
    server 192.168.1.4:8080 weight=1;
    
    # IP哈希
    ip_hash;
    server 192.168.1.5:8080;
    server 192.168.1.6:8080;
}

server {
    location /api/ {
        proxy_pass http://backend;
    }
}

// 4. 自定义负载均衡算法
public class WeightedLoadBalancer implements ReactorServiceInstanceLoadBalancer {
    private final List<ServiceInstance> instances;
    private final Map<String, Integer> weights;
    
    public Mono<Response<ServiceInstance>> choose(Request request) {
        // 根据权重选择实例
        int totalWeight = weights.values().stream().mapToInt(Integer::intValue).sum();
        int random = ThreadLocalRandom.current().nextInt(totalWeight);
        
        int current = 0;
        for (ServiceInstance instance : instances) {
            current += weights.get(instance.getInstanceId());
            if (random < current) {
                return Mono.just(new DefaultResponse(instance));
            }
        }
        return Mono.just(new DefaultResponse(instances.get(0)));
    }
}`,tags:["负载均衡","Ribbon","Nginx"]},{id:"ms-5",title:"服务熔断与降级",content:"解释服务熔断、降级的概念，说明Sentinel/Hystrix的实现原理和使用方式。",category:"microservice",difficulty:"hard",answer:"熔断：当服务异常率达到阈值时，自动切断调用，防止雪崩效应。降级：服务不可用时返回兜底响应。Sentinel原理：1)定义资源；2)配置规则（QPS、线程数、响应时间）；3)触发规则时执行降级逻辑。状态转换：关闭→开启→半开→关闭。推荐使用Sentinel（阿里巴巴开源）。",codeExample:`// Sentinel熔断降级示例
// 1. 引入依赖
// <dependency>
//     <groupId>com.alibaba.cloud</groupId>
//     <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>
// </dependency>

// 2. 定义资源并配置降级逻辑
@Service
public class UserService {
    @SentinelResource(
        value = "getUser",
        fallback = "getUserFallback",      // 降级方法
        blockHandler = "getUserBlockHandler" // 熔断方法
    )
    public User getUser(Long id) {
        // 可能失败的远程调用
        return userClient.getUser(id);
    }
    
    // 降级逻辑 - 业务异常时执行
    public User getUserFallback(Long id, Throwable ex) {
        log.error("获取用户失败，执行降级", ex);
        return new User(id, "默认用户", "default@example.com");
    }
    
    // 熔断逻辑 - 触发规则时执行
    public User getUserBlockHandler(Long id, BlockException ex) {
        log.warn("触发熔断规则", ex);
        return new User(id, "熔断用户", "blocked@example.com");
    }
}

// 3. 配置熔断规则
// application.yml
spring:
  cloud:
    sentinel:
      transport:
        dashboard: localhost:8080  # Sentinel控制台

// 4. 代码配置规则
@Configuration
public class SentinelConfig {
    @PostConstruct
    public void initRules() {
        // 熔断规则：异常比例超过50%时熔断
        DegradeRule degradeRule = new DegradeRule("getUser");
        degradeRule.setGrade(CircuitBreakerStrategy.ERROR_RATIO.getType());
        degradeRule.setCount(0.5);  // 异常比例阈值
        degradeRule.setTimeWindow(10);  // 熔断持续时间10秒
        degradeRule.setMinRequestAmount(5);  // 最小请求数
        
        DegradeRuleManager.loadDegradeRules(Collections.singletonList(degradeRule));
        
        // 流控规则：QPS限制
        FlowRule flowRule = new FlowRule("getUser");
        flowRule.setCount(10);  // 每秒最多10次
        flowRule.setGrade(RuleConstant.FLOW_GRADE_QPS);
        
        FlowRuleManager.loadRules(Collections.singletonList(flowRule));
    }
}

// 5. Hystrix示例（已停止维护）
@HystrixCommand(
    fallbackMethod = "getUserFallback",
    commandProperties = {
        @HystrixProperty(name = "circuitBreaker.requestVolumeThreshold", value = "10"),
        @HystrixProperty(name = "circuitBreaker.errorThresholdPercentage", value = "50"),
        @HystrixProperty(name = "circuitBreaker.sleepWindowInMilliseconds", value = "5000")
    }
)
public User getUser(Long id) {
    return userClient.getUser(id);
}`,tags:["熔断降级","Sentinel","Hystrix"]},{id:"ms-6",title:"分布式事务解决方案",content:"解释分布式事务的问题，列举常见的解决方案（2PC、3PC、TCC、Saga、本地消息表、Seata）。",category:"microservice",difficulty:"hard",answer:"分布式事务保证跨服务数据一致性。解决方案：1)2PC（两阶段提交）：Prepare→Commit，强一致但阻塞；2)TCC（Try-Confirm-Cancel）：业务层面实现，最终一致；3)Saga：长事务拆分+补偿机制；4)本地消息表：异步确保；5)Seata：AT模式（自动补偿）、TCC模式、Saga模式。推荐使用Seata AT模式。",codeExample:`// Seata分布式事务示例
// 1. 引入依赖
// <dependency>
//     <groupId>io.seata</groupId>
//     <artifactId>seata-spring-boot-starter</artifactId>
//     <version>1.5.2</version>
// </dependency>

// 2. 配置Seata
// application.yml
seata:
  enabled: true
  tx-service-group: my_tx_group
  service:
    vgroup-mapping:
      my_tx_group: default
  registry:
    type: nacos
    nacos:
      server-addr: localhost:8848

// 3. AT模式 - 自动分布式事务
@Service
public class OrderService {
    @Autowired
    private OrderMapper orderMapper;
    
    @Autowired
    private StorageClient storageClient;
    
    @Autowired
    private AccountClient accountClient;
    
    @GlobalTransactional(name = "create-order", rollbackFor = Exception.class)
    public void createOrder(OrderDTO orderDTO) {
        // 创建订单（本地事务）
        orderMapper.insert(orderDTO);
        
        // 扣减库存（远程调用，Seata自动管理）
        storageClient.decrease(orderDTO.getProductId(), orderDTO.getCount());
        
        // 扣减余额（远程调用）
        accountClient.decrease(orderDTO.getUserId(), orderDTO.getAmount());
        
        // Seata自动生成undo_log，失败时自动回滚
    }
}

// 4. TCC模式 - 手动实现Try/Confirm/Cancel
@LocalTCC
public interface StorageTccService {
    @TwoPhaseBusinessAction(name = "prepareDecrease", commitMethod = "commit", rollbackMethod = "rollback")
    boolean prepareDecrease(@BusinessActionContextParameter(paramName = "productId") Long productId,
                            @BusinessActionContextParameter(paramName = "count") Integer count);
    
    boolean commit(BusinessActionContext context);
    
    boolean rollback(BusinessActionContext context);
}

// TCC实现
@Service
public class StorageTccServiceImpl implements StorageTccService {
    @Autowired
    private StorageMapper storageMapper;
    
    @Override
    public boolean prepareDecrease(Long productId, Integer count) {
        // Try阶段：预留库存（冻结）
        storageMapper.freezeStock(productId, count);
        return true;
    }
    
    @Override
    public boolean commit(BusinessActionContext context) {
        // Confirm阶段：真正扣减库存
        Long productId = context.getActionContext("productId");
        Integer count = context.getActionContext("count");
        storageMapper.decreaseFrozenStock(productId, count);
        return true;
    }
    
    @Override
    public boolean rollback(BusinessActionContext context) {
        // Cancel阶段：释放预留库存
        Long productId = context.getActionContext("productId");
        Integer count = context.getActionContext("count");
        storageMapper.releaseFrozenStock(productId, count);
        return true;
    }
}

// 5. 本地消息表方案
@Transactional
public void createOrder(OrderDTO orderDTO) {
    // 创建订单
    orderMapper.insert(orderDTO);
    
    // 写入本地消息表（同一事务）
    Message message = new Message();
    message.setBizId(orderDTO.getId());
    message.setTopic("order-created");
    message.setContent(JSON.toJSONString(orderDTO));
    message.setStatus("PENDING");
    messageMapper.insert(message);
}

// 定时任务扫描消息表并发送
@Scheduled(fixedDelay = 5000)
public void sendPendingMessages() {
    List<Message> messages = messageMapper.selectByStatus("PENDING");
    for (Message message : messages) {
        try {
            mqProducer.send(message.getTopic(), message.getContent());
            messageMapper.updateStatus(message.getId(), "SENT");
        } catch (Exception e) {
            // 发送失败，下次重试
        }
    }
}`,tags:["分布式事务","Seata","TCC"]},{id:"ms-7",title:"API网关的作用和实现",content:"解释API网关的核心功能，说明Spring Cloud Gateway的工作原理和配置方式。",category:"microservice",difficulty:"medium",answer:"API网关是微服务入口，核心功能：1)路由转发；2)负载均衡；3)认证鉴权；4)限流熔断；5)日志监控；6)协议转换。Spring Cloud Gateway基于WebFlux，三大核心概念：Route（路由）、Predicate（断言）、Filter（过滤器）。支持动态路由、自定义过滤器。",codeExample:`// Spring Cloud Gateway配置
// 1. 基础路由配置
@SpringBootApplication
public class GatewayApplication {
    public static void main(String[] args) {
        SpringApplication.run(GatewayApplication.class, args);
    }
}

// application.yml
spring:
  cloud:
    gateway:
      routes:
        # 用户服务路由
        - id: user-service
          uri: lb://user-service  # 负载均衡
          predicates:
            - Path=/api/users/**  # 路径匹配
            - Method=GET,POST     # 方法限制
          filters:
            - StripPrefix=1       # 去掉/api前缀
            - AddRequestHeader=X-Request-Id, \${value}
        
        # 订单服务路由
        - id: order-service
          uri: lb://order-service
          predicates:
            - Path=/api/orders/**
            - After=2024-01-01T00:00:00+08:00  # 时间限制
          filters:
            - name: RequestRateLimiter  # 限流
              args:
                redis-rate-limiter.replenishRate: 10
                redis-rate-limiter.burstCapacity: 20
                key-resolver: "\${user.id}"

// 2. 自定义过滤器
@Component
public class AuthFilter implements GlobalFilter, Ordered {
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        ServerHttpRequest request = exchange.getRequest();
        
        // 获取Token
        String token = request.getHeaders().getFirst("Authorization");
        if (token == null || !validateToken(token)) {
            ServerHttpResponse response = exchange.getResponse();
            response.setStatusCode(HttpStatus.UNAUTHORIZED);
            return response.writeWith(Mono.just(response.bufferFactory().wrap("未授权".getBytes())));
        }
        
        // 验证通过，继续执行
        return chain.filter(exchange);
    }
    
    @Override
    public int getOrder() {
        return -100;  // 优先级最高
    }
    
    private boolean validateToken(String token) {
        // JWT验证逻辑
        return JwtUtil.verify(token);
    }
}

// 3. 动态路由配置
@RestController
@RequestMapping("/routes")
public class RouteController {
    @Autowired
    private RouteDefinitionLocator routeDefinitionLocator;
    
    @Autowired
    private RouteDefinitionWriter routeDefinitionWriter;
    
    @PostMapping
    public Mono<Void> addRoute(@RequestBody RouteDefinition definition) {
        return routeDefinitionWriter.save(Mono.just(definition));
    }
    
    @DeleteMapping("/{id}")
    public Mono<Void> deleteRoute(@PathVariable String id) {
        return routeDefinitionWriter.delete(Mono.just(id));
    }
}

// 4. 跨域配置
@Configuration
public class CorsConfig {
    @Bean
    public CorsWebFilter corsWebFilter() {
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedOrigin("*");
        config.addAllowedMethod("*");
        config.addAllowedHeader("*");
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        
        return new CorsWebFilter(source);
    }
}`,tags:["API网关","Gateway","路由"]},{id:"ms-8",title:"分布式锁的实现方式",content:"解释分布式锁的作用，列举常见的实现方式（Redis、Zookeeper、数据库），并分析各自的优缺点。",category:"microservice",difficulty:"hard",answer:"分布式锁保证跨进程资源互斥。实现方式：1)Redis SETNX+过期时间（推荐Redlock算法）；2)Zookeeper临时顺序节点（CP强一致）；3)数据库唯一索引（简单但性能低）。Redis优点：性能高、实现简单；缺点：锁续期问题（需看门狗）、主从切换可能丢锁。推荐Redisson框架。",codeExample:`// Redis分布式锁实现
// 1. Redisson框架（推荐）
// <dependency>
//     <groupId>org.redisson</groupId>
//     <artifactId>redisson-spring-boot-starter</artifactId>
// </dependency>

@Configuration
public class RedissonConfig {
    @Bean
    public RedissonClient redissonClient() {
        Config config = new Config();
        config.useSingleServer()
            .setAddress("redis://localhost:6379")
            .setLockWatchdogTimeout(30000);  // 看门狗30秒
        return Redisson.create(config);
    }
}

@Service
public class OrderService {
    @Autowired
    private RedissonClient redissonClient;
    
    public String createOrder(Long productId) {
        // 获取分布式锁
        RLock lock = redissonClient.getLock("order:lock:" + productId);
        
        try {
            // 尝试获取锁，最多等待10秒，锁自动释放30秒
            boolean acquired = lock.tryLock(10, 30, TimeUnit.SECONDS);
            if (!acquired) {
                return "获取锁失败";
            }
            
            // 执行业务逻辑
            // 查库存、创建订单、扣库存...
            return "订单创建成功";
            
        } catch (InterruptedException e) {
            return "异常";
        } finally {
            // 释放锁（自动判断是否持有锁）
            if (lock.isHeldByCurrentThread()) {
                lock.unlock();
            }
        }
    }
}

// 2. Redis SETNX原生实现
public class RedisLock {
    @Autowired
    private StringRedisTemplate redisTemplate;
    
    public boolean tryLock(String key, String value, long expireTime) {
        // SET key value NX EX expireTime
        Boolean result = redisTemplate.opsForValue()
            .setIfAbsent(key, value, expireTime, TimeUnit.SECONDS);
        return result != null && result;
    }
    
    public void unlock(String key, String value) {
        // Lua脚本保证原子性：只有自己才能释放锁
        String script = "if redis.call('get', KEYS[1]) == ARGV[1] then " +
                        "   return redis.call('del', KEYS[1]) " +
                        "else " +
                        "   return 0 " +
                        "end";
        redisTemplate.execute(
            new DefaultRedisScript<>(script, Long.class),
            Collections.singletonList(key),
            value
        );
    }
    
    // 看门狗续期
    public void watchdog(String key, String value, long expireTime) {
        new Thread(() -> {
            while (true) {
                try {
                    Thread.sleep(expireTime / 3);
                    // 检查是否还持有锁
                    if (redisTemplate.opsForValue().get(key).equals(value)) {
                        redisTemplate.expire(key, expireTime, TimeUnit.SECONDS);
                    } else {
                        break;
                    }
                } catch (InterruptedException e) {
                    break;
                }
            }
        }).start();
    }
}

// 3. Zookeeper分布式锁
public class ZkLock {
    private final CuratorFramework client;
    
    public ZkLock(CuratorFramework client) {
        this.client = client;
    }
    
    public InterProcessMutex getLock(String path) {
        return new InterProcessMutex(client, path);
    }
    
    public void doWithLock(String path, Runnable task) throws Exception {
        InterProcessMutex lock = new InterProcessMutex(client, "/locks/" + path);
        
        if (lock.acquire(10, TimeUnit.SECONDS)) {
            try {
                task.run();
            } finally {
                lock.release();
            }
        }
    }
}`,tags:["分布式锁","Redis","Redisson"]},{id:"ms-9",title:"分布式ID生成方案",content:"解释分布式ID的要求，列举常见的生成方案（UUID、数据库自增、Redis、Snowflake、Leaf）。",category:"microservice",difficulty:"medium",answer:"分布式ID要求：全局唯一、有序、高性能、可扩展。方案：1)UUID（无序、太长）；2)数据库自增（性能低、单点）；3)Redis INCR（性能高、依赖Redis）；4)Snowflake（Twitter雪花算法，64位：时间戳+机器ID+序列号）；5)Leaf（美团，号段模式+Snowflake）。推荐Snowflake或Leaf。",codeExample:`// Snowflake雪花算法实现
public class SnowflakeIdGenerator {
    // 起始时间戳（2024-01-01）
    private final long startTimestamp = 1704038400000L;
    
    // 机器ID占5位，最多32台机器
    private final long machineIdBits = 5L;
    private final long maxMachineId = ~(-1L << machineIdBits);  // 31
    
    // 序列号占12位，每毫秒最多4096个ID
    private final long sequenceBits = 12L;
    private final long maxSequence = ~(-1L << sequenceBits);  // 4095
    
    // 机器ID左移12位
    private final long machineIdShift = sequenceBits;
    // 时间戳左移17位
    private final long timestampShift = sequenceBits + machineIdBits;
    
    private long machineId;
    private long sequence = 0L;
    private long lastTimestamp = -1L;
    
    public SnowflakeIdGenerator(long machineId) {
        if (machineId > maxMachineId || machineId < 0) {
            throw new IllegalArgumentException("机器ID超出范围");
        }
        this.machineId = machineId;
    }
    
    public synchronized long nextId() {
        long currentTimestamp = System.currentTimeMillis();
        
        // 时间回拨处理
        if (currentTimestamp < lastTimestamp) {
            throw new RuntimeException("时钟回拨");
        }
        
        // 同一毫秒内
        if (currentTimestamp == lastTimestamp) {
            sequence = (sequence + 1) & maxSequence;
            if (sequence == 0) {
                // 序列号溢出，等待下一毫秒
                currentTimestamp = waitNextMillis(lastTimestamp);
            }
        } else {
            sequence = 0L;
        }
        
        lastTimestamp = currentTimestamp;
        
        // 组装ID：时间戳 | 机器ID | 序列号
        return ((currentTimestamp - startTimestamp) << timestampShift)
                | (machineId << machineIdShift)
                | sequence;
    }
    
    private long waitNextMillis(long lastTimestamp) {
        long timestamp = System.currentTimeMillis();
        while (timestamp <= lastTimestamp) {
            timestamp = System.currentTimeMillis();
        }
        return timestamp;
    }
}

// 使用示例
SnowflakeIdGenerator generator = new SnowflakeIdGenerator(1);
long id = generator.nextId();  // 例如：1234567890123456789

// Redis生成ID
@Service
public class RedisIdGenerator {
    @Autowired
    private StringRedisTemplate redisTemplate;
    
    public Long nextId(String key) {
        return redisTemplate.opsForValue().increment(key);
    }
    
    // 带日期前缀的ID（便于按日期统计）
    public String nextIdWithDate(String key) {
        String date = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyyMMdd"));
        Long seq = redisTemplate.opsForValue().increment(key + ":" + date);
        return date + String.format("%06d", seq);
    }
}

// 数据库号段模式（Leaf）
CREATE TABLE leaf_alloc (
    biz_tag VARCHAR(64) PRIMARY KEY,
    max_id BIGINT NOT NULL,
    step INT NOT NULL,
    version INT NOT NULL
);

@Service
public class LeafIdGenerator {
    @Autowired
    private LeafAllocMapper leafAllocMapper;
    
    private final Map<String, SegmentBuffer> buffers = new ConcurrentHashMap<>();
    
    public Long nextId(String bizTag) {
        SegmentBuffer buffer = buffers.computeIfAbsent(bizTag, this::initBuffer);
        return buffer.nextId();
    }
    
    private SegmentBuffer initBuffer(String bizTag) {
        // 从数据库获取号段
        LeafAlloc alloc = leafAllocMapper.selectByBizTag(bizTag);
        leafAllocMapper.updateMaxId(bizTag, alloc.getStep(), alloc.getVersion());
        
        return new SegmentBuffer(alloc.getMaxId(), alloc.getStep());
    }
}`,tags:["分布式ID","Snowflake","Leaf"]},{id:"ms-10",title:"消息队列在微服务中的应用",content:"解释消息队列在微服务中的作用（解耦、异步、削峰），对比RabbitMQ、Kafka、RocketMQ的特点。",category:"microservice",difficulty:"medium",answer:"消息队列作用：1)解耦：服务独立演进；2)异步：提升响应速度；3)削峰：应对流量高峰。对比：RabbitMQ（AMQP协议，可靠性高，适合业务消息）；Kafka（高吞吐、持久化、适合日志大数据）；RocketMQ（阿里开源，事务消息、顺序消息）。选择：可靠性选RabbitMQ，吞吐量选Kafka。",codeExample:`// RabbitMQ示例
// 1. 配置
@Configuration
public class RabbitMQConfig {
    @Bean
    public Queue orderQueue() {
        return new Queue("order.queue", true);
    }
    
    @Bean
    public DirectExchange orderExchange() {
        return new DirectExchange("order.exchange");
    }
    
    @Bean
    public Binding binding() {
        return BindingBuilder.bind(orderQueue())
            .to(orderExchange())
            .with("order.created");
    }
}

// 2. 生产者
@Service
public class OrderProducer {
    @Autowired
    private RabbitTemplate rabbitTemplate;
    
    public void sendOrderCreated(Order order) {
        rabbitTemplate.convertAndSend(
            "order.exchange",
            "order.created",
            order,
            message -> {
                message.getMessageProperties().setDeliveryMode(MessageDeliveryMode.PERSISTENT);
                return message;
            }
        );
    }
}

// 3. 消费者
@Component
@RabbitListener(queues = "order.queue")
public class OrderConsumer {
    @Autowired
    private InventoryService inventoryService;
    
    @RabbitHandler
    public void handleOrderCreated(Order order) {
        // 扣减库存
        inventoryService.decrease(order.getProductId(), order.getCount());
    }
}

// Kafka示例
// 1. 配置
@Configuration
public class KafkaConfig {
    @Bean
    public ProducerFactory<String, String> producerFactory() {
        Map<String, Object> config = new HashMap<>();
        config.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        config.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        config.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        config.put(ProducerConfig.ACKS_CONFIG, "all");  // 确保可靠性
        return new DefaultKafkaProducerFactory<>(config);
    }
    
    @Bean
    public KafkaTemplate<String, String> kafkaTemplate() {
        return new KafkaTemplate<>(producerFactory());
    }
}

// 2. 生产者
@Service
public class LogProducer {
    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;
    
    public void sendLog(String topic, String message) {
        kafkaTemplate.send(topic, message)
            .addCallback(
                result -> log.info("发送成功"),
                ex -> log.error("发送失败", ex)
            );
    }
}

// 3. 消费者
@Component
public class LogConsumer {
    @KafkaListener(topics = "log-topic", groupId = "log-group")
    public void consumeLog(String message) {
        // 处理日志
        logService.save(message);
    }
    
    // 批量消费
    @KafkaListener(topics = "log-topic", batch = "true")
    public void consumeBatch(List<String> messages) {
        logService.batchSave(messages);
    }
}

// RocketMQ事务消息
@Service
public class OrderTransactionProducer {
    @Autowired
    private RocketMQTemplate rocketMQTemplate;
    
    public void sendOrderInTransaction(Order order) {
        rocketMQTemplate.sendMessageInTransaction(
            "order-group",
            MessageBuilder.withPayload(order).build(),
            null
        );
    }
}

@RocketMQTransactionListener(rocketMQTemplateBeanName = "rocketMQTemplate")
class OrderTransactionListener implements RocketMQLocalTransactionListener {
    @Override
    public RocketMQLocalTransactionState executeLocalTransaction(Message msg, Object arg) {
        try {
            // 执行本地事务
            orderService.createOrder(msg);
            return RocketMQLocalTransactionState.COMMIT;
        } catch (Exception e) {
            return RocketMQLocalTransactionState.ROLLBACK;
        }
    }
    
    @Override
    public RocketMQLocalTransactionState checkLocalTransaction(Message msg) {
        // 事务状态回查
        boolean exists = orderService.checkOrderExists(msg);
        return exists ? RocketMQLocalTransactionState.COMMIT : RocketMQLocalTransactionState.ROLLBACK;
    }
}`,tags:["消息队列","RabbitMQ","Kafka"]},{id:"ms-11",title:"服务链路追踪",content:"解释链路追踪的作用，说明Spring Cloud Sleuth + Zipkin/SkyWalking的实现原理。",category:"microservice",difficulty:"medium",answer:"链路追踪用于排查分布式系统问题。核心概念：Trace（完整调用链）、Span（单个服务调用）。实现原理：1)请求入口生成TraceId；2)每个服务调用生成SpanId；3)通过HTTP Header传递TraceId/SpanId；4)异步上报到收集器。常用工具：Zipkin（Twitter）、SkyWalking（Apache，无侵入）、Jaeger（Uber）。",codeExample:`// Spring Cloud Sleuth + Zipkin配置
// 1. 引入依赖
// <dependency>
//     <groupId>org.springframework.cloud</groupId>
//     <artifactId>spring-cloud-starter-sleuth</artifactId>
// </dependency>
// <dependency>
//     <groupId>org.springframework.cloud</groupId>
//     <artifactId>spring-cloud-sleuth-zipkin</artifactId>
// </dependency>

// 2. 配置
// application.yml
spring:
  sleuth:
    sampler:
      probability: 1.0  # 采样率100%
  zipkin:
    base-url: http://localhost:9411
    sender:
      type: web  # 或kafka/rabbit

// 3. 自动生成TraceId/SpanId
// Sleuth自动在日志中添加：
// [user-service,trace-id,span-id,parent-span-id]
log.info("处理请求");  // 输出：[user-service,abc123,def456,null] 处理请求

// 4. 手动创建Span
@Service
public class UserService {
    @Autowired
    private Tracer tracer;
    
    public User getUser(Long id) {
        Span span = tracer.nextSpan().name("db-query");
        try (Tracer.SpanInScope ws = tracer.withSpan(span.start())) {
            return userRepository.findById(id);
        } finally {
            span.finish();
        }
    }
}

// 5. Baggage额外信息传递
// 设置Baggage（会传递到下游服务）
tracer.currentSpan().baggage().put("userId", "123");

// 在下游服务获取
String userId = tracer.currentSpan().baggage().get("userId");

// SkyWalking配置（无侵入）
// 1. Agent启动
// java -javaagent=/path/to/skywalking-agent.jar 
//      -Dskywalking.agent.service_name=user-service 
//      -Dskywalking.collector.backend_service=localhost:11800 
//      -jar app.jar

// 2. 自定义追踪
@Trace
public User getUser(Long id) {
    return userRepository.findById(id);
}

@Trace(operationName = "自定义操作")
@Tags({
    @Tag(key = "userId", value = "arg[0]"),
    @Tag(key = "result", value = "returnedObj.name")
})
public User getUser(Long id) {
    return userRepository.findById(id);
}

// 3. 手动埋点
public void customTrace() {
    AbstractSpan span = ContextManager.createLocalSpan("custom-operation");
    try {
        span.tag("key", "value");
        // 业务逻辑
    } catch (Exception e) {
        span.errorOccurred().log(e);
    } finally {
        ContextManager.stopSpan();
    }
}`,tags:["链路追踪","Sleuth","Zipkin","SkyWalking"]},{id:"ms-12",title:"配置中心的作用和实现",content:"解释配置中心的作用，说明Spring Cloud Config/Nacos Config的工作原理。",category:"microservice",difficulty:"medium",answer:"配置中心统一管理微服务配置，支持动态更新。作用：1)配置集中管理；2)环境隔离（dev/test/prod）；3)动态刷新（无需重启）；4)版本管理。Nacos Config原理：1)服务启动从Nacos拉取配置；2)配置变更推送变更事件；3)应用监听事件刷新配置。推荐使用Nacos Config。",codeExample:`// Nacos配置中心示例
// 1. 引入依赖
// <dependency>
//     <groupId>com.alibaba.cloud</groupId>
//     <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
// </dependency>

// 2. bootstrap.yml配置（优先级高于application.yml）
spring:
  application:
    name: user-service
  profiles:
    active: dev
  cloud:
    nacos:
      config:
        server-addr: localhost:8848
        namespace: public
        group: DEFAULT_GROUP
        file-extension: yaml
        shared-configs:
          - data-id: common.yaml
            group: DEFAULT_GROUP
            refresh: true

// 3. Nacos配置文件
// user-service-dev.yaml
server:
  port: 8081
db:
  url: jdbc:mysql://localhost:3306/user_dev
  username: root
  password: root123

// 4. 动态刷新配置
@RestController
@RefreshScope  // 支持动态刷新
public class ConfigController {
    @Value("\${db.url}")
    private String dbUrl;
    
    @Value("\${custom.config}")
    private String customConfig;
    
    @GetMapping("/config")
    public String getConfig() {
        return "dbUrl=" + dbUrl + ", customConfig=" + customConfig;
    }
    
    // Nacos配置变更后，自动刷新，无需重启
}

// 5. 监听配置变更
@Component
public class ConfigChangeListener implements ApplicationListener<RefreshEvent> {
    @Override
    public void onApplicationEvent(RefreshEvent event) {
        log.info("配置已刷新: {}", event);
    }
}

// 6. 手动获取配置
@Service
public class ConfigService {
    @Autowired
    private ConfigService configService;
    
    public String getConfig(String dataId, String group) {
        return configService.getConfig(dataId, group, 5000);
    }
    
    public void listenConfig(String dataId, String group) {
        configService.addListener(dataId, group, new Listener() {
            @Override
            public void receiveConfigInfo(String configInfo) {
                log.info("收到配置变更: {}", configInfo);
                // 更新本地配置
            }
            
            @Override
            public Executor getExecutor() {
                return null;
            }
        });
    }
}

// Spring Cloud Config示例（Git存储）
// 1. 配置服务端
@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication { /* ... */ }

// application.yml
spring:
  cloud:
    config:
      server:
        git:
          uri: https://github.com/myorg/config-repo
          search-paths: '{application}'
          default-label: main

// 2. 客户端配置
// bootstrap.yml
spring:
  cloud:
    config:
      uri: http://localhost:8888
      name: user-service
      profile: dev
      label: main`,tags:["配置中心","Nacos","动态刷新"]}],T2=[{name:"ChatGPT",url:"https://chat.openai.com",description:"OpenAI的智能对话AI助手，支持代码生成、写作、翻译等",icon:"🤖",color:"from-green-500 to-green-600",category:"大模型"},{name:"Claude",url:"https://claude.ai",description:"Anthropic公司开发的AI助手，擅长长文本处理和代码生成",icon:"🧠",color:"from-orange-500 to-amber-500",category:"大模型"},{name:"Gemini",url:"https://gemini.google.com",description:"Google开发的AI助手，支持多模态交互和代码生成",icon:"✨",color:"from-blue-500 to-indigo-500",category:"大模型"},{name:"通义千问",url:"https://tongyi.aliyun.com",description:"阿里云开发的AI助手，支持对话、代码、写作等功能",icon:"🦅",color:"from-orange-500 to-orange-600",category:"大模型"},{name:"文心一言",url:"https://yiyan.baidu.com",description:"百度开发的AI助手，支持对话、写作、代码生成",icon:"🐼",color:"from-red-500 to-orange-500",category:"大模型"},{name:"智谱AI",url:"https://chatglm.cn",description:"清华系开发的AI助手，支持多模态和编程",icon:"🔬",color:"from-purple-500 to-indigo-500",category:"大模型"},{name:"豆包",url:"https://www.doubao.com",description:"字节跳动开发的AI助手，支持对话、写作、代码",icon:"📦",color:"from-emerald-500 to-teal-500",category:"大模型"},{name:"GitHub Copilot",url:"https://copilot.github.com",description:"AI编程助手，自动补全代码，支持多种编程语言",icon:"🚀",color:"from-gray-700 to-gray-900",category:"编程工具"},{name:"Cursor",url:"https://cursor.so",description:"AI代码编辑器，基于GPT-4，支持代码补全、修复、重构",icon:"✏️",color:"from-blue-600 to-cyan-600",category:"编程工具"},{name:"Codeium",url:"https://codeium.com",description:"免费的AI编程助手，支持多种IDE和编程语言",icon:"💡",color:"from-yellow-500 to-orange-500",category:"编程工具"},{name:"Midjourney",url:"https://www.midjourney.com",description:"AI绘画工具，通过文字描述生成高质量图片",icon:"🎨",color:"from-purple-600 to-pink-600",category:"图像生成"},{name:"Stable Diffusion",url:"https://stability.ai",description:"开源的AI绘画模型，支持本地部署和定制",icon:"🖼️",color:"from-indigo-500 to-purple-500",category:"图像生成"},{name:"DALL-E",url:"https://openai.com/dall-e-3",description:"OpenAI开发的AI绘画工具，生成高质量图片",icon:"🖌️",color:"from-emerald-500 to-green-600",category:"图像生成"},{name:"Runway",url:"https://runwayml.com",description:"AI视频生成和编辑平台，支持多种创意工具",icon:"🎬",color:"from-pink-500 to-rose-600",category:"视频生成"},{name:"Suno",url:"https://suno.ai",description:"AI音乐生成平台，通过文字描述生成音乐",icon:"🎵",color:"from-cyan-500 to-blue-600",category:"音频生成"},{name:"Notion AI",url:"https://www.notion.so/product/ai",description:"Notion内置的AI助手，支持写作、总结、翻译等",icon:"📝",color:"from-gray-800 to-black",category:"写作工具"},{name:"DeepL",url:"https://www.deepl.com",description:"高质量的AI翻译工具，支持多种语言",icon:"🌍",color:"from-red-600 to-red-700",category:"翻译工具"},{name:"Perplexity",url:"https://www.perplexity.ai",description:"AI搜索引擎，提供带引用来源的回答",icon:"🔍",color:"from-yellow-400 to-yellow-600",category:"搜索工具"},{name:"Hugging Face",url:"https://huggingface.co",description:"AI模型库和开源社区，提供各种AI模型和工具",icon:"🤗",color:"from-yellow-500 to-amber-600",category:"开发平台"},{name:"Ollama",url:"https://ollama.com",description:"本地运行大模型的工具，支持多种开源模型",icon:"🦙",color:"from-emerald-600 to-green-700",category:"开发平台"}],b2=[{name:"IntelliJ IDEA",url:"https://www.jetbrains.com/idea/",description:"Java集成开发环境（IDE），业界公认的Java开发首选工具",usage:"安装后安装Tomcat、Spring等插件，配置Maven/Gradle项目，快速开发Java应用。支持代码提示、重构、调试等功能。",icon:"💻",color:"from-purple-500 to-indigo-500"},{name:"Spring Boot",url:"https://spring.io/projects/spring-boot",description:"Spring Framework的子项目，简化Spring应用开发",usage:"创建Spring Boot项目：访问start.spring.io生成项目结构。使用@SpringBootApplication启动应用，自动配置数据库、Web等。",icon:"🌱",color:"from-green-500 to-emerald-500"},{name:"Redis",url:"https://redis.io/",description:"高性能键值对数据库，常用于缓存和会话存储",usage:"安装Redis后，使用redis-cli连接。常用命令：SET/GET存取数据，EXPIRE设置过期，HASH存对象。Java中使用Jedis或Lettuce客户端。",icon:"🔴",color:"from-red-500 to-orange-500"},{name:"MySQL",url:"https://www.mysql.com/",description:"开源关系型数据库，Web应用最常用的数据库之一",usage:"安装MySQL后，使用mysql -u root -p登录。创建数据库：CREATE DATABASE name；创建表：CREATE TABLE；常用命令：SELECT/INSERT/UPDATE/DELETE。",icon:"🐬",color:"from-blue-500 to-cyan-500"},{name:"Maven",url:"https://maven.apache.org/",description:"Java项目管理和依赖管理工具，统一项目结构",usage:"配置pom.xml添加依赖：<dependency>标签。常用命令：mvn clean install编译项目，mvn package打包，mvn spring-boot:run运行Spring Boot项目。",icon:"🧱",color:"from-yellow-500 to-amber-500"}],P2=[{name:"Vue.js",url:"https://vuejs.org/",description:"渐进式JavaScript框架，用于构建用户界面",usage:"使用npm create vue@latest创建项目。组件结构：template写HTML，script写逻辑，style写样式。常用指令：v-if/v-for/v-model。状态管理用Pinia或Vuex。",icon:"💚",color:"from-green-400 to-emerald-400"},{name:"Node.js",url:"https://nodejs.org/",description:"基于Chrome V8引擎的JavaScript运行时，可开发后端服务",usage:'npm init初始化项目，npm install安装依赖。创建服务器：const http = require("http")。Express框架：npm install express，快速搭建Web API。',icon:"🟢",color:"from-green-600 to-green-400"},{name:"Postman",url:"https://www.postman.com/",description:"API开发和测试工具，简化HTTP请求调试",usage:"新建请求：选择GET/POST等方法，输入URL。Params设置参数，Body选择raw/JSON格式发送数据。Headers设置请求头。Collections管理多个请求。",icon:"🚀",color:"from-orange-400 to-yellow-400"}],I2=[{name:"Git",url:"https://git-scm.com/",description:"分布式版本控制系统，管理代码版本和协作开发",usage:"git init初始化仓库。git add添加文件，git commit -m提交。git push推送到远程，git pull拉取更新。git branch创建分支，git merge合并分支。",icon:"🔀",color:"from-orange-500 to-red-500"},{name:"Docker",url:"https://www.docker.com/",description:"容器化平台，实现应用及其依赖的打包和部署",usage:"Dockerfile定义镜像：FROM指定基础镜像，COPY复制文件，RUN执行命令，CMD启动命令。构建镜像：docker build -t name。运行容器：docker run -p 8080:80 name。",icon:"🐳",color:"from-blue-600 to-blue-400"}],M2=[{name:"微信小程序",url:"https://developers.weixin.qq.com/miniprogram/dev/framework/",description:"微信官方小程序开发框架，跨平台移动应用",usage:"下载微信开发者工具，创建项目。pages目录下创建页面，app.json配置路由，app.wxss写样式。调用wx.request发起网络请求，wx.setStorage存本地数据。",icon:"💬",color:"from-green-500 to-green-400"},{name:"微信小游戏",url:"https://developers.weixin.qq.com/minigame/dev/guide/",description:"微信小游戏开发平台，基于Canvas/WebGL渲染",usage:"使用微信开发者工具创建小游戏项目。LayaAir/Cocos Creator等引擎开发。小游戏使用wx.createCanvas()创建画布，通过requestAnimationFrame实现游戏循环。",icon:"🎮",color:"from-blue-400 to-cyan-400"}],Vi=({id:s,title:u,tools:l})=>d.jsxs("section",{"trae-inspector-start-line":"304","trae-inspector-start-column":"4","trae-inspector-end-line":"347","trae-inspector-end-column":"14","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",id:s,className:"mb-12 scroll-mt-24",children:[d.jsxs("h3",{"trae-inspector-start-line":"305","trae-inspector-start-column":"6","trae-inspector-end-line":"308","trae-inspector-end-column":"11","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center",children:[d.jsx("span",{"trae-inspector-start-line":"306","trae-inspector-start-column":"8","trae-inspector-end-line":"306","trae-inspector-end-column":"67","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"mr-2 sm:mr-3",children:u.split(" ")[0]}),d.jsx("span",{"trae-inspector-start-line":"307","trae-inspector-start-column":"8","trae-inspector-end-line":"307","trae-inspector-end-column":"58","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",children:u.split(" ").slice(1).join(" ")})]}),d.jsx("div",{"trae-inspector-start-line":"309","trae-inspector-start-column":"6","trae-inspector-end-line":"346","trae-inspector-end-column":"12","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",children:l.map(c=>d.jsxs("div",{"trae-inspector-start-line":"311","trae-inspector-start-column":"10","trae-inspector-end-line":"344","trae-inspector-end-column":"16","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 group card-hover",children:[d.jsxs("div",{"trae-inspector-start-line":"315","trae-inspector-start-column":"12","trae-inspector-end-line":"323","trae-inspector-end-column":"18","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4",children:[d.jsx("div",{"trae-inspector-start-line":"316","trae-inspector-start-column":"14","trae-inspector-end-line":"318","trae-inspector-end-column":"20","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${c.color} rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-lg`,children:c.icon}),d.jsxs("div",{"trae-inspector-start-line":"319","trae-inspector-start-column":"14","trae-inspector-end-line":"322","trae-inspector-end-column":"20","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"flex-1 min-w-0",children:[d.jsx("h4",{"trae-inspector-start-line":"320","trae-inspector-start-column":"16","trae-inspector-end-line":"320","trae-inspector-end-column":"95","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"font-bold text-gray-900 mb-1 text-sm sm:text-lg",children:c.name}),d.jsx("p",{"trae-inspector-start-line":"321","trae-inspector-start-column":"16","trae-inspector-end-line":"321","trae-inspector-end-column":"133","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none",children:c.description})]})]}),d.jsxs("div",{"trae-inspector-start-line":"325","trae-inspector-start-column":"12","trae-inspector-end-line":"330","trae-inspector-end-column":"18","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4",children:[d.jsxs("h5",{"trae-inspector-start-line":"326","trae-inspector-start-column":"14","trae-inspector-end-line":"328","trae-inspector-end-column":"19","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-indigo-900 font-semibold text-xs sm:text-sm mb-1 sm:mb-2 flex items-center",children:[d.jsx("span",{"trae-inspector-start-line":"327","trae-inspector-start-column":"16","trae-inspector-end-line":"327","trae-inspector-end-column":"48","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%93%96%22%2C%22textStartLine%22%3A%22327%22%2C%22textStartColumn%22%3A%2239%22%2C%22textEndLine%22%3A%22327%22%2C%22textEndColumn%22%3A%2241%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"mr-1",children:"📖"})," 使用方法"]}),d.jsx("p",{"trae-inspector-start-line":"329","trae-inspector-start-column":"14","trae-inspector-end-line":"329","trae-inspector-end-column":"97","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-indigo-800 text-xs leading-relaxed line-clamp-3",children:c.usage})]}),d.jsxs("a",{"trae-inspector-start-line":"332","trae-inspector-start-column":"12","trae-inspector-end-line":"343","trae-inspector-end-column":"16","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",href:c.url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-xs sm:text-sm shadow-lg hover:shadow-xl",children:[d.jsx("span",{"trae-inspector-start-line":"338","trae-inspector-start-column":"14","trae-inspector-end-line":"338","trae-inspector-end-column":"54","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%8C%90%22%2C%22textStartLine%22%3A%22338%22%2C%22textStartColumn%22%3A%2245%22%2C%22textEndLine%22%3A%22338%22%2C%22textEndColumn%22%3A%2247%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"mr-1 sm:mr-2",children:"🌐"}),"访问官方文档",d.jsx("svg",{"trae-inspector-start-line":"340","trae-inspector-start-column":"14","trae-inspector-end-line":"342","trae-inspector-end-column":"20","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})]},c.name))})]}),O2=({tool:s})=>d.jsxs("a",{"trae-inspector-start-line":"352","trae-inspector-start-column":"2","trae-inspector-end-line":"368","trae-inspector-end-column":"6","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",href:s.url,target:"_blank",rel:"noopener noreferrer",className:"bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-3 sm:p-5 border border-white/20 group flex items-start space-x-3 hover:scale-[1.02] card-hover",children:[d.jsx("div",{"trae-inspector-start-line":"358","trae-inspector-start-column":"4","trae-inspector-end-line":"360","trae-inspector-end-column":"10","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${s.color} rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-lg`,children:s.icon}),d.jsxs("div",{"trae-inspector-start-line":"361","trae-inspector-start-column":"4","trae-inspector-end-line":"367","trae-inspector-end-column":"10","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"flex-1 min-w-0",children:[d.jsxs("div",{"trae-inspector-start-line":"362","trae-inspector-start-column":"6","trae-inspector-end-line":"365","trae-inspector-end-column":"12","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"flex items-center justify-between mb-1",children:[d.jsx("h4",{"trae-inspector-start-line":"363","trae-inspector-start-column":"8","trae-inspector-end-line":"363","trae-inspector-end-column":"85","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"font-bold text-gray-900 text-xs sm:text-base",children:s.name}),d.jsx("span",{"trae-inspector-start-line":"364","trae-inspector-start-column":"8","trae-inspector-end-line":"364","trae-inspector-end-column":"197","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-lg text-xs font-medium border border-indigo-200",children:s.category})]}),d.jsx("p",{"trae-inspector-start-line":"366","trae-inspector-start-column":"6","trae-inspector-end-line":"366","trae-inspector-end-column":"94","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-gray-600 text-xs sm:text-sm mt-1 line-clamp-2",children:s.description})]})]}),q2=()=>{const[s,u]=k.useState(!1),l=ea.slice(0,10),c=()=>{const h=document.getElementById("questions");h&&h.scrollIntoView({behavior:"smooth"})},f=h=>{const S=Zi.find(D=>D.id===h);return S?S.name:h},m=h=>{switch(h){case"easy":return"difficulty-easy";case"medium":return"difficulty-medium";case"hard":return"difficulty-hard";default:return"bg-gray-100 text-gray-800"}},C=h=>{switch(h){case"easy":return"简单";case"medium":return"中等";case"hard":return"困难";default:return h}};return d.jsxs("div",{"trae-inspector-start-line":"406","trae-inspector-start-column":"4","trae-inspector-end-line":"560","trae-inspector-end-column":"10","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50",children:[d.jsx(Br,{isOpen:s,onToggle:()=>u(!s),onClose:()=>u(!1)}),d.jsxs("div",{"trae-inspector-start-line":"414","trae-inspector-start-column":"6","trae-inspector-end-line":"559","trae-inspector-end-column":"12","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"md:ml-64 pb-20 sm:pb-0",children:[d.jsxs("div",{"trae-inspector-start-line":"416","trae-inspector-start-column":"8","trae-inspector-end-line":"439","trae-inspector-end-column":"14","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden",children:[d.jsxs("div",{"trae-inspector-start-line":"417","trae-inspector-start-column":"10","trae-inspector-end-line":"420","trae-inspector-end-column":"16","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"absolute inset-0 opacity-10",children:[d.jsx("div",{"trae-inspector-start-line":"418","trae-inspector-start-column":"12","trae-inspector-end-line":"418","trae-inspector-end-column":"100","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"}),d.jsx("div",{"trae-inspector-start-line":"419","trae-inspector-start-column":"12","trae-inspector-end-line":"419","trae-inspector-end-column":"104","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"})]}),d.jsx("div",{"trae-inspector-start-line":"421","trae-inspector-start-column":"10","trae-inspector-end-line":"438","trae-inspector-end-column":"16","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10",children:d.jsxs("div",{"trae-inspector-start-line":"422","trae-inspector-start-column":"12","trae-inspector-end-line":"437","trae-inspector-end-column":"18","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-center animate-fadeInUp",children:[d.jsx("h1",{"trae-inspector-start-line":"423","trae-inspector-start-column":"14","trae-inspector-end-line":"425","trae-inspector-end-column":"19","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22Java%E9%9D%A2%E8%AF%95%E9%A2%98%E7%B2%BE%E9%80%89%22%2C%22textStartLine%22%3A%22423%22%2C%22textStartColumn%22%3A%2286%22%2C%22textEndLine%22%3A%22425%22%2C%22textEndColumn%22%3A%2214%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6",children:"Java面试题精选"}),d.jsx("p",{"trae-inspector-start-line":"426","trae-inspector-start-column":"14","trae-inspector-end-line":"428","trae-inspector-end-column":"18","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E7%B2%BE%E5%BF%83%E6%95%B4%E7%90%86%E7%9A%84Java%E9%9D%A2%E8%AF%95%E9%A2%98%E9%9B%86%EF%BC%8C%E6%B6%B5%E7%9B%96%E5%9F%BA%E7%A1%80%E3%80%81%E9%9B%86%E5%90%88%E3%80%81%E5%B9%B6%E5%8F%91%E3%80%81JVM%E7%AD%89%E6%A0%B8%E5%BF%83%E7%9F%A5%E8%AF%86%EF%BC%8C%E5%8A%A9%E6%82%A8%E9%9D%A2%E8%AF%95%E4%B8%80%E8%87%82%E4%B9%8B%E5%8A%9B%EF%BC%81%22%2C%22textStartLine%22%3A%22426%22%2C%22textStartColumn%22%3A%22110%22%2C%22textEndLine%22%3A%22428%22%2C%22textEndColumn%22%3A%2214%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-base sm:text-lg md:text-2xl text-indigo-100 mb-6 sm:mb-10 max-w-3xl mx-auto",children:"精心整理的Java面试题集，涵盖基础、集合、并发、JVM等核心知识，助您面试一臂之力！"}),d.jsx("div",{"trae-inspector-start-line":"429","trae-inspector-start-column":"14","trae-inspector-end-line":"436","trae-inspector-end-column":"20","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"flex justify-center",children:d.jsx("button",{"trae-inspector-start-line":"430","trae-inspector-start-column":"16","trae-inspector-end-line":"435","trae-inspector-end-column":"25","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%9A%80%20%E5%BC%80%E5%A7%8B%E5%88%B7%E9%A2%98%22%2C%22textStartLine%22%3A%22433%22%2C%22textStartColumn%22%3A%2217%22%2C%22textEndLine%22%3A%22435%22%2C%22textEndColumn%22%3A%2216%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",onClick:c,className:"bg-white text-indigo-600 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold hover:bg-indigo-50 transition-all duration-300 shadow-2xl hover:shadow-3xl text-base sm:text-xl transform hover:scale-[1.05]",children:"🚀 开始刷题"})})]})})]}),d.jsxs("div",{"trae-inspector-start-line":"441","trae-inspector-start-column":"8","trae-inspector-end-line":"549","trae-inspector-end-column":"14","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16",children:[d.jsxs("section",{"trae-inspector-start-line":"443","trae-inspector-start-column":"10","trae-inspector-end-line":"493","trae-inspector-end-column":"20","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",id:"questions",className:"mb-12 sm:mb-20 scroll-mt-24",children:[d.jsx("h2",{"trae-inspector-start-line":"444","trae-inspector-start-column":"12","trae-inspector-end-line":"446","trae-inspector-end-column":"17","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%8E%AF%20%E7%B2%BE%E9%80%89%E9%9D%A2%E8%AF%95%E9%A2%98%22%2C%22textStartLine%22%3A%22444%22%2C%22textStartColumn%22%3A%2268%22%2C%22textEndLine%22%3A%22446%22%2C%22textEndColumn%22%3A%2212%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"section-title mb-6 sm:mb-10 text-center",children:"🎯 精选面试题"}),d.jsx("div",{"trae-inspector-start-line":"447","trae-inspector-start-column":"12","trae-inspector-end-line":"480","trae-inspector-end-column":"18","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6",children:l.map((h,S)=>d.jsxs(Te,{to:`/question/${h.id}`,className:"bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 group card-hover animate-fadeInUp",style:{animationDelay:`${S*.05}s`},children:[d.jsxs("div",{"trae-inspector-start-line":"455","trae-inspector-start-column":"18","trae-inspector-end-line":"462","trae-inspector-end-column":"24","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"flex items-start justify-between mb-2 sm:mb-3",children:[d.jsx("h3",{"trae-inspector-start-line":"456","trae-inspector-start-column":"20","trae-inspector-end-line":"458","trae-inspector-end-column":"25","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-base sm:text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors flex-1 mr-2",children:h.title}),d.jsx("span",{"trae-inspector-start-line":"459","trae-inspector-start-column":"20","trae-inspector-end-line":"461","trae-inspector-end-column":"27","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${m(h.difficulty)} whitespace-nowrap border`,children:C(h.difficulty)})]}),d.jsx("p",{"trae-inspector-start-line":"463","trae-inspector-start-column":"18","trae-inspector-end-line":"465","trae-inspector-end-column":"22","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-gray-600 text-sm mb-3 sm:mb-4 line-clamp-2",children:h.content}),d.jsxs("div",{"trae-inspector-start-line":"466","trae-inspector-start-column":"18","trae-inspector-end-line":"477","trae-inspector-end-column":"24","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"flex items-center justify-between",children:[d.jsx("span",{"trae-inspector-start-line":"467","trae-inspector-start-column":"20","trae-inspector-end-line":"469","trae-inspector-end-column":"27","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-xs sm:text-sm text-gray-500 font-medium",children:f(h.category)}),d.jsx("div",{"trae-inspector-start-line":"470","trae-inspector-start-column":"20","trae-inspector-end-line":"476","trae-inspector-end-column":"26","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"flex flex-wrap gap-1 sm:gap-2",children:h.tags.slice(0,2).map((D,A)=>d.jsx("span",{"trae-inspector-start-line":"472","trae-inspector-start-column":"24","trae-inspector-end-line":"474","trae-inspector-end-column":"31","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-lg text-xs font-medium border border-indigo-200",children:D},A))})]})]},h.id))}),d.jsx("div",{"trae-inspector-start-line":"482","trae-inspector-start-column":"12","trae-inspector-end-line":"492","trae-inspector-end-column":"18","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-center mt-8 sm:mt-10",children:d.jsxs(Te,{to:"/category/basics",className:"inline-flex items-center text-indigo-600 hover:text-purple-600 font-bold text-sm sm:text-lg transition-all duration-300",children:["查看更多题目",d.jsx("svg",{"trae-inspector-start-line":"488","trae-inspector-start-column":"16","trae-inspector-end-line":"490","trae-inspector-end-column":"22","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"w-4 h-4 sm:w-5 sm:h-5 ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})})]}),d.jsxs("section",{"trae-inspector-start-line":"496","trae-inspector-start-column":"10","trae-inspector-end-line":"516","trae-inspector-end-column":"20","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",id:"categories",className:"mb-8 sm:mb-16 scroll-mt-24",children:[d.jsx("h2",{"trae-inspector-start-line":"497","trae-inspector-start-column":"12","trae-inspector-end-line":"499","trae-inspector-end-column":"17","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%93%9A%20%E7%9F%A5%E8%AF%86%E5%88%86%E7%B1%BB%22%2C%22textStartLine%22%3A%22497%22%2C%22textStartColumn%22%3A%2268%22%2C%22textEndLine%22%3A%22499%22%2C%22textEndColumn%22%3A%2212%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"section-title mb-6 sm:mb-10 text-center",children:"📚 知识分类"}),d.jsx("div",{"trae-inspector-start-line":"500","trae-inspector-start-column":"12","trae-inspector-end-line":"515","trae-inspector-end-column":"18","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",children:Zi.map((h,S)=>d.jsxs(Te,{to:`/category/${h.id}`,className:"bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 group card-hover animate-fadeInUp",style:{animationDelay:`${S*.05}s`},children:[d.jsx("div",{"trae-inspector-start-line":"508","trae-inspector-start-column":"18","trae-inspector-end-line":"510","trae-inspector-end-column":"24","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:`w-12 h-12 sm:w-14 sm:h-14 ${h.color} rounded-xl flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-200 shadow-lg`,children:h.icon}),d.jsx("h3",{"trae-inspector-start-line":"511","trae-inspector-start-column":"18","trae-inspector-end-line":"511","trae-inspector-end-column":"102","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-lg sm:text-xl font-bold text-gray-900 mb-2",children:h.name}),d.jsx("p",{"trae-inspector-start-line":"512","trae-inspector-start-column":"18","trae-inspector-end-line":"512","trae-inspector-end-column":"81","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-gray-600 text-sm",children:h.description})]},h.id))})]}),d.jsxs("section",{"trae-inspector-start-line":"519","trae-inspector-start-column":"10","trae-inspector-end-line":"531","trae-inspector-end-column":"20","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",id:"docs",className:"mb-8 sm:mb-16",children:[d.jsx("h2",{"trae-inspector-start-line":"520","trae-inspector-start-column":"12","trae-inspector-end-line":"522","trae-inspector-end-column":"17","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%94%A7%20%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7%E7%AE%B1%22%2C%22textStartLine%22%3A%22520%22%2C%22textStartColumn%22%3A%2259%22%2C%22textEndLine%22%3A%22522%22%2C%22textEndColumn%22%3A%2212%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"section-title mb-2 text-center",children:"🔧 开发工具箱"}),d.jsx("p",{"trae-inspector-start-line":"523","trae-inspector-start-column":"12","trae-inspector-end-line":"525","trae-inspector-end-column":"16","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22Java%E5%BC%80%E5%8F%91%E8%80%85%E5%BF%85%E5%A4%87%E7%9A%84%E5%AE%98%E6%96%B9%E6%96%87%E6%A1%A3%E5%92%8C%E5%B7%A5%E5%85%B7%EF%BC%8C%E5%8C%85%E5%90%AB%E8%AF%A6%E7%BB%86%E4%BD%BF%E7%94%A8%E6%95%99%E7%A8%8B%22%2C%22textStartLine%22%3A%22523%22%2C%22textStartColumn%22%3A%2286%22%2C%22textEndLine%22%3A%22525%22%2C%22textEndColumn%22%3A%2212%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-gray-600 text-center mb-6 sm:mb-10 text-sm sm:text-lg",children:"Java开发者必备的官方文档和工具，包含详细使用教程"}),d.jsx(Vi,{id:"backend",title:"🖥️ 后端开发工具",tools:b2}),d.jsx(Vi,{id:"frontend",title:"🌐 前端开发工具",tools:P2}),d.jsx(Vi,{id:"devops",title:"🔧 DevOps工具",tools:I2}),d.jsx(Vi,{id:"wechat",title:"💬 微信生态",tools:M2})]}),d.jsx("section",{"trae-inspector-start-line":"534","trae-inspector-start-column":"10","trae-inspector-end-line":"548","trae-inspector-end-column":"20","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",id:"ai-tools",className:"bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 py-8 sm:py-12 rounded-3xl shadow-2xl mb-8",children:d.jsxs("div",{"trae-inspector-start-line":"535","trae-inspector-start-column":"12","trae-inspector-end-line":"547","trae-inspector-end-column":"18","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[d.jsxs("div",{"trae-inspector-start-line":"536","trae-inspector-start-column":"14","trae-inspector-end-line":"541","trae-inspector-end-column":"20","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-center mb-6 sm:mb-8",children:[d.jsxs("h2",{"trae-inspector-start-line":"537","trae-inspector-start-column":"16","trae-inspector-end-line":"539","trae-inspector-end-column":"21","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 flex items-center justify-center",children:[d.jsx("span",{"trae-inspector-start-line":"538","trae-inspector-start-column":"18","trae-inspector-end-line":"538","trae-inspector-end-column":"58","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%A4%96%22%2C%22textStartLine%22%3A%22538%22%2C%22textStartColumn%22%3A%2249%22%2C%22textEndLine%22%3A%22538%22%2C%22textEndColumn%22%3A%2251%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"mr-2 sm:mr-3",children:"🤖"})," AI工具导航"]}),d.jsx("p",{"trae-inspector-start-line":"540","trae-inspector-start-column":"16","trae-inspector-end-line":"540","trae-inspector-end-column":"102","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E7%B2%BE%E5%BF%83%E6%95%B4%E7%90%86%E7%9A%84%E7%83%AD%E9%97%A8AI%E5%B7%A5%E5%85%B7%EF%BC%8C%E5%8A%A9%E5%8A%9B%E5%BC%80%E5%8F%91%E8%80%85%E6%8F%90%E5%8D%87%E6%95%88%E7%8E%87%22%2C%22textStartLine%22%3A%22540%22%2C%22textStartColumn%22%3A%2277%22%2C%22textEndLine%22%3A%22540%22%2C%22textEndColumn%22%3A%2298%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-indigo-100 text-sm sm:text-lg md:text-xl",children:"精心整理的热门AI工具，助力开发者提升效率"})]}),d.jsx("div",{"trae-inspector-start-line":"542","trae-inspector-start-column":"14","trae-inspector-end-line":"546","trae-inspector-end-column":"20","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4",children:T2.map(h=>d.jsx(O2,{tool:h},h.name))})]})})]}),d.jsx("footer",{"trae-inspector-start-line":"552","trae-inspector-start-column":"8","trae-inspector-end-line":"558","trae-inspector-end-column":"17","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-6 sm:py-8 border-t border-gray-700",children:d.jsx("div",{"trae-inspector-start-line":"553","trae-inspector-start-column":"10","trae-inspector-end-line":"557","trae-inspector-end-column":"16","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"max-w-7xl mx-auto px-4 text-center",children:d.jsx("p",{"trae-inspector-start-line":"554","trae-inspector-start-column":"12","trae-inspector-end-line":"556","trae-inspector-end-column":"16","trae-inspector-file-path":"src\\\\pages\\\\Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%C2%A9%202024%20Java%E9%9D%A2%E8%AF%95%E9%A2%98.%20%E5%B8%AE%E5%8A%A9%E6%AF%8F%E4%B8%80%E4%BD%8D%E5%BC%80%E5%8F%91%E8%80%85%E5%87%86%E5%A4%87%E9%9D%A2%E8%AF%95%E3%80%82%22%2C%22textStartLine%22%3A%22554%22%2C%22textStartColumn%22%3A%2246%22%2C%22textEndLine%22%3A%22556%22%2C%22textEndColumn%22%3A%2212%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-xs sm:text-sm",children:"© 2024 Java面试题. 帮助每一位开发者准备面试。"})})})]})]})},_2=()=>{const{id:s}=Fc(),[u,l]=k.useState(!1),c=Zi.find(h=>h.id===s),f=ea.filter(h=>h.category===s),m=h=>{switch(h){case"easy":return"bg-green-100 text-green-800";case"medium":return"bg-yellow-100 text-yellow-800";case"hard":return"bg-red-100 text-red-800";default:return"bg-gray-100 text-gray-800"}},C=h=>{switch(h){case"easy":return"简单";case"medium":return"中等";case"hard":return"困难";default:return h}};return c?d.jsxs("div",{"trae-inspector-start-line":"52","trae-inspector-start-column":"4","trae-inspector-end-line":"128","trae-inspector-end-column":"10","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"min-h-screen bg-gray-50",children:[d.jsx(Br,{isOpen:u,onToggle:()=>l(!u),onClose:()=>l(!1)}),d.jsxs("div",{"trae-inspector-start-line":"59","trae-inspector-start-column":"6","trae-inspector-end-line":"127","trae-inspector-end-column":"12","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"md:ml-64 pb-20 sm:pb-0",children:[d.jsx("div",{"trae-inspector-start-line":"61","trae-inspector-start-column":"8","trae-inspector-end-line":"82","trae-inspector-end-column":"14","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:`${c.color} text-white`,children:d.jsxs("div",{"trae-inspector-start-line":"62","trae-inspector-start-column":"10","trae-inspector-end-line":"81","trae-inspector-end-column":"16","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12",children:[d.jsxs(Te,{to:"/",className:"text-blue-100 hover:text-white mb-4 inline-flex items-center text-sm sm:text-base",children:[d.jsx("svg",{"trae-inspector-start-line":"64","trae-inspector-start-column":"14","trae-inspector-end-line":"66","trae-inspector-end-column":"20","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"w-4 h-4 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"返回首页"]}),d.jsxs("div",{"trae-inspector-start-line":"69","trae-inspector-start-column":"12","trae-inspector-end-line":"77","trae-inspector-end-column":"18","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"flex items-center space-x-3 sm:space-x-4 mt-4",children:[d.jsx("div",{"trae-inspector-start-line":"70","trae-inspector-start-column":"14","trae-inspector-end-line":"72","trae-inspector-end-column":"20","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"w-14 h-14 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-2xl sm:text-3xl",children:c.icon}),d.jsxs("div",{"trae-inspector-start-line":"73","trae-inspector-start-column":"14","trae-inspector-end-line":"76","trae-inspector-end-column":"20","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",children:[d.jsx("h1",{"trae-inspector-start-line":"74","trae-inspector-start-column":"16","trae-inspector-end-line":"74","trae-inspector-end-column":"95","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-2xl sm:text-3xl md:text-4xl font-bold",children:c.name}),d.jsx("p",{"trae-inspector-start-line":"75","trae-inspector-start-column":"16","trae-inspector-end-line":"75","trae-inspector-end-column":"97","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-blue-100 mt-2 text-sm sm:text-base",children:c.description})]})]}),d.jsxs("div",{"trae-inspector-start-line":"78","trae-inspector-start-column":"12","trae-inspector-end-line":"80","trae-inspector-end-column":"18","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"mt-4 sm:mt-6 text-base sm:text-lg",children:["共 ",d.jsx("span",{"trae-inspector-start-line":"79","trae-inspector-start-column":"16","trae-inspector-end-line":"79","trae-inspector-end-column":"77","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"font-bold",children:f.length})," 道题目"]})]})}),d.jsx("div",{"trae-inspector-start-line":"84","trae-inspector-start-column":"8","trae-inspector-end-line":"117","trae-inspector-end-column":"14","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12",children:f.length===0?d.jsx("div",{"trae-inspector-start-line":"86","trae-inspector-start-column":"12","trae-inspector-end-line":"88","trae-inspector-end-column":"18","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-center py-12",children:d.jsx("p",{"trae-inspector-start-line":"87","trae-inspector-start-column":"14","trae-inspector-end-line":"87","trae-inspector-end-column":"76","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E8%AF%A5%E5%88%86%E7%B1%BB%E4%B8%8B%E6%9A%82%E6%97%A0%E9%A2%98%E7%9B%AE%22%2C%22textStartLine%22%3A%2287%22%2C%22textStartColumn%22%3A%2264%22%2C%22textEndLine%22%3A%2287%22%2C%22textEndColumn%22%3A%2272%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-gray-500 text-base sm:text-lg",children:"该分类下暂无题目"})}):d.jsx("div",{"trae-inspector-start-line":"90","trae-inspector-start-column":"12","trae-inspector-end-line":"115","trae-inspector-end-column":"18","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"space-y-3 sm:space-y-4",children:f.map(h=>d.jsxs(Te,{to:`/question/${h.id}`,className:"bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 group block",children:[d.jsxs("div",{"trae-inspector-start-line":"97","trae-inspector-start-column":"18","trae-inspector-end-line":"104","trae-inspector-end-column":"24","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"flex items-start justify-between mb-2 sm:mb-3",children:[d.jsx("h3",{"trae-inspector-start-line":"98","trae-inspector-start-column":"20","trae-inspector-end-line":"100","trae-inspector-end-column":"25","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-base sm:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors flex-1 mr-2",children:h.title}),d.jsx("span",{"trae-inspector-start-line":"101","trae-inspector-start-column":"20","trae-inspector-end-line":"103","trae-inspector-end-column":"27","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${m(h.difficulty)} whitespace-nowrap`,children:C(h.difficulty)})]}),d.jsx("p",{"trae-inspector-start-line":"105","trae-inspector-start-column":"18","trae-inspector-end-line":"105","trae-inspector-end-column":"103","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base",children:h.content}),d.jsx("div",{"trae-inspector-start-line":"106","trae-inspector-start-column":"18","trae-inspector-end-line":"112","trae-inspector-end-column":"24","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"flex flex-wrap gap-1.5 sm:gap-2",children:h.tags.map((S,D)=>d.jsx("span",{"trae-inspector-start-line":"108","trae-inspector-start-column":"22","trae-inspector-end-line":"110","trae-inspector-end-column":"29","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs sm:text-sm",children:S},D))})]},h.id))})}),d.jsx("footer",{"trae-inspector-start-line":"120","trae-inspector-start-column":"8","trae-inspector-end-line":"126","trae-inspector-end-column":"17","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"bg-gray-900 text-gray-400 py-6 sm:py-8",children:d.jsx("div",{"trae-inspector-start-line":"121","trae-inspector-start-column":"10","trae-inspector-end-line":"125","trae-inspector-end-column":"16","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"max-w-7xl mx-auto px-4 text-center",children:d.jsx("p",{"trae-inspector-start-line":"122","trae-inspector-start-column":"12","trae-inspector-end-line":"124","trae-inspector-end-column":"16","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%C2%A9%202024%20Java%E9%9D%A2%E8%AF%95%E9%A2%98.%20%E5%B8%AE%E5%8A%A9%E6%AF%8F%E4%B8%80%E4%BD%8D%E5%BC%80%E5%8F%91%E8%80%85%E5%87%86%E5%A4%87%E9%9D%A2%E8%AF%95%E3%80%82%22%2C%22textStartLine%22%3A%22122%22%2C%22textStartColumn%22%3A%2246%22%2C%22textEndLine%22%3A%22124%22%2C%22textEndColumn%22%3A%2212%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-xs sm:text-sm",children:"© 2024 Java面试题. 帮助每一位开发者准备面试。"})})})]})]}):d.jsxs("div",{"trae-inspector-start-line":"33","trae-inspector-start-column":"6","trae-inspector-end-line":"47","trae-inspector-end-column":"12","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"min-h-screen bg-gray-50",children:[d.jsx(Br,{isOpen:u,onToggle:()=>l(!u),onClose:()=>l(!1)}),d.jsx("div",{"trae-inspector-start-line":"39","trae-inspector-start-column":"8","trae-inspector-end-line":"46","trae-inspector-end-column":"14","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"md:ml-64 pb-20 sm:pb-0",children:d.jsxs("div",{"trae-inspector-start-line":"40","trae-inspector-start-column":"10","trae-inspector-end-line":"45","trae-inspector-end-column":"16","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center",children:[d.jsx("h2",{"trae-inspector-start-line":"41","trae-inspector-start-column":"12","trae-inspector-end-line":"41","trae-inspector-end-column":"71","trae-inspector-file-path":"src\\\\pages\\\\Category.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%88%86%E7%B1%BB%E4%B8%8D%E5%AD%98%E5%9C%A8%22%2C%22textStartLine%22%3A%2241%22%2C%22textStartColumn%22%3A%2261%22%2C%22textEndLine%22%3A%2241%22%2C%22textEndColumn%22%3A%2266%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-2xl font-bold text-gray-900",children:"分类不存在"}),d.jsx(Te,{to:"/",className:"text-blue-600 hover:text-blue-800 mt-4 inline-block",children:"返回首页"})]})})]})},F2=()=>{const{id:s}=Fc(),[u,l]=k.useState(!1),[c,f]=k.useState(!1),m=ea.find(A=>A.id===s),C=m?Zi.find(A=>A.id===m.category):void 0,h=m?ea.filter(A=>A.category===m.category&&A.id!==m.id).slice(0,3):[],S=A=>{switch(A){case"easy":return"bg-green-100 text-green-800";case"medium":return"bg-yellow-100 text-yellow-800";case"hard":return"bg-red-100 text-red-800";default:return"bg-gray-100 text-gray-800"}},D=A=>{switch(A){case"easy":return"简单";case"medium":return"中等";case"hard":return"困难";default:return A}};return m?d.jsxs("div",{"trae-inspector-start-line":"56","trae-inspector-start-column":"4","trae-inspector-end-line":"211","trae-inspector-end-column":"10","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"min-h-screen bg-gray-50",children:[d.jsx(Br,{isOpen:c,onToggle:()=>f(!c),onClose:()=>f(!1)}),d.jsxs("div",{"trae-inspector-start-line":"63","trae-inspector-start-column":"6","trae-inspector-end-line":"210","trae-inspector-end-column":"12","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"md:ml-64 pb-20 sm:pb-0",children:[d.jsxs("div",{"trae-inspector-start-line":"64","trae-inspector-start-column":"8","trae-inspector-end-line":"200","trae-inspector-end-column":"14","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12",children:[d.jsx("div",{"trae-inspector-start-line":"66","trae-inspector-start-column":"10","trae-inspector-end-line":"80","trae-inspector-end-column":"16","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"mb-4 sm:mb-6",children:d.jsxs("div",{"trae-inspector-start-line":"67","trae-inspector-start-column":"12","trae-inspector-end-line":"79","trae-inspector-end-column":"18","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"flex items-center text-xs sm:text-sm text-gray-500 space-x-1 sm:space-x-2",children:[d.jsx(Te,{to:"/",className:"hover:text-blue-600",children:"首页"}),d.jsx("span",{"trae-inspector-start-line":"69","trae-inspector-start-column":"14","trae-inspector-end-line":"69","trae-inspector-end-column":"28","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%2F%22%2C%22textStartLine%22%3A%2269%22%2C%22textStartColumn%22%3A%2220%22%2C%22textEndLine%22%3A%2269%22%2C%22textEndColumn%22%3A%2221%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",children:"/"}),C&&d.jsxs(d.Fragment,{children:[d.jsx(Te,{to:`/category/${C.id}`,className:"hover:text-blue-600",children:C.name}),d.jsx("span",{"trae-inspector-start-line":"75","trae-inspector-start-column":"18","trae-inspector-end-line":"75","trae-inspector-end-column":"32","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%2F%22%2C%22textStartLine%22%3A%2275%22%2C%22textStartColumn%22%3A%2224%22%2C%22textEndLine%22%3A%2275%22%2C%22textEndColumn%22%3A%2225%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",children:"/"})]}),d.jsx("span",{"trae-inspector-start-line":"78","trae-inspector-start-column":"14","trae-inspector-end-line":"78","trae-inspector-end-column":"57","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E9%A2%98%E7%9B%AE%E8%AF%A6%E6%83%85%22%2C%22textStartLine%22%3A%2278%22%2C%22textStartColumn%22%3A%2246%22%2C%22textEndLine%22%3A%2278%22%2C%22textEndColumn%22%3A%2250%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-gray-900",children:"题目详情"})]})}),d.jsx("div",{"trae-inspector-start-line":"83","trae-inspector-start-column":"10","trae-inspector-end-line":"128","trae-inspector-end-column":"16","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"bg-white rounded-xl shadow-lg border border-gray-100 mb-6 sm:mb-8",children:d.jsxs("div",{"trae-inspector-start-line":"84","trae-inspector-start-column":"12","trae-inspector-end-line":"127","trae-inspector-end-column":"18","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"p-4 sm:p-8",children:[d.jsx("div",{"trae-inspector-start-line":"85","trae-inspector-start-column":"14","trae-inspector-end-line":"96","trae-inspector-end-column":"20","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"flex items-start justify-between mb-3 sm:mb-4 flex-wrap gap-2",children:d.jsxs("div",{"trae-inspector-start-line":"86","trae-inspector-start-column":"16","trae-inspector-end-line":"95","trae-inspector-end-column":"22","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"flex flex-wrap items-center gap-2",children:[C&&d.jsxs("span",{"trae-inspector-start-line":"88","trae-inspector-start-column":"20","trae-inspector-end-line":"90","trae-inspector-end-column":"27","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-white ${C.color}`,children:[C.icon," ",C.name]}),d.jsx("span",{"trae-inspector-start-line":"92","trae-inspector-start-column":"18","trae-inspector-end-line":"94","trae-inspector-end-column":"25","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${S(m.difficulty)}`,children:D(m.difficulty)})]})}),d.jsx("h1",{"trae-inspector-start-line":"98","trae-inspector-start-column":"14","trae-inspector-end-line":"98","trae-inspector-end-column":"120","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6",children:m.title}),d.jsx("div",{"trae-inspector-start-line":"100","trae-inspector-start-column":"14","trae-inspector-end-line":"102","trae-inspector-end-column":"20","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"bg-gray-50 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6",children:d.jsx("p",{"trae-inspector-start-line":"101","trae-inspector-start-column":"16","trae-inspector-end-line":"101","trae-inspector-end-column":"104","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-base sm:text-lg text-gray-800 leading-relaxed",children:m.content})}),d.jsx("div",{"trae-inspector-start-line":"104","trae-inspector-start-column":"14","trae-inspector-end-line":"110","trae-inspector-end-column":"20","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6",children:m.tags.map((A,j)=>d.jsx("span",{"trae-inspector-start-line":"106","trae-inspector-start-column":"18","trae-inspector-end-line":"108","trae-inspector-end-column":"25","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm",children:A},j))}),d.jsxs("button",{"trae-inspector-start-line":"113","trae-inspector-start-column":"14","trae-inspector-end-line":"126","trae-inspector-end-column":"23","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",onClick:()=>l(!u),className:"w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2 text-sm sm:text-base",children:[d.jsx("span",{"trae-inspector-start-line":"117","trae-inspector-start-column":"16","trae-inspector-end-line":"117","trae-inspector-end-column":"59","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",children:u?"收起答案":"查看答案"}),d.jsx("svg",{"trae-inspector-start-line":"118","trae-inspector-start-column":"16","trae-inspector-end-line":"125","trae-inspector-end-column":"22","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${u?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]})]})}),u&&d.jsxs("div",{"trae-inspector-start-line":"132","trae-inspector-start-column":"12","trae-inspector-end-line":"158","trae-inspector-end-column":"18","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"bg-white rounded-xl shadow-lg border border-gray-100 mb-6 sm:mb-8 overflow-hidden",children:[d.jsx("div",{"trae-inspector-start-line":"133","trae-inspector-start-column":"14","trae-inspector-end-line":"137","trae-inspector-end-column":"20","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"bg-gradient-to-r from-green-600 to-green-700 text-white px-4 sm:px-8 py-3 sm:py-4",children:d.jsxs("h2",{"trae-inspector-start-line":"134","trae-inspector-start-column":"16","trae-inspector-end-line":"136","trae-inspector-end-column":"21","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-lg sm:text-xl font-bold flex items-center",children:[d.jsx("span",{"trae-inspector-start-line":"135","trae-inspector-start-column":"18","trae-inspector-end-line":"135","trae-inspector-end-column":"50","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%92%A1%22%2C%22textStartLine%22%3A%22135%22%2C%22textStartColumn%22%3A%2241%22%2C%22textEndLine%22%3A%22135%22%2C%22textEndColumn%22%3A%2243%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"mr-2",children:"💡"})," 参考答案"]})}),d.jsxs("div",{"trae-inspector-start-line":"138","trae-inspector-start-column":"14","trae-inspector-end-line":"157","trae-inspector-end-column":"20","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"p-4 sm:p-8",children:[d.jsx("div",{"trae-inspector-start-line":"139","trae-inspector-start-column":"16","trae-inspector-end-line":"143","trae-inspector-end-column":"22","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"mb-6 sm:mb-8",children:d.jsx("p",{"trae-inspector-start-line":"140","trae-inspector-start-column":"18","trae-inspector-end-line":"142","trae-inspector-end-column":"22","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-gray-800 leading-relaxed text-sm sm:text-lg whitespace-pre-wrap",children:m.answer})}),m.codeExample&&d.jsxs("div",{"trae-inspector-start-line":"146","trae-inspector-start-column":"18","trae-inspector-end-line":"155","trae-inspector-end-column":"24","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"mt-6 sm:mt-8",children:[d.jsxs("h3",{"trae-inspector-start-line":"147","trae-inspector-start-column":"20","trae-inspector-end-line":"149","trae-inspector-end-column":"25","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center",children:[d.jsx("span",{"trae-inspector-start-line":"148","trae-inspector-start-column":"22","trae-inspector-end-line":"148","trae-inspector-end-column":"54","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%93%9D%22%2C%22textStartLine%22%3A%22148%22%2C%22textStartColumn%22%3A%2245%22%2C%22textEndLine%22%3A%22148%22%2C%22textEndColumn%22%3A%2247%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"mr-2",children:"📝"})," 代码示例"]}),d.jsx("div",{"trae-inspector-start-line":"150","trae-inspector-start-column":"20","trae-inspector-end-line":"154","trae-inspector-end-column":"26","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"bg-gray-900 rounded-lg p-3 sm:p-6 overflow-x-auto",children:d.jsx("pre",{"trae-inspector-start-line":"151","trae-inspector-start-column":"22","trae-inspector-end-line":"153","trae-inspector-end-column":"28","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-green-400 font-mono text-xs sm:text-sm leading-relaxed",children:d.jsx("code",{"trae-inspector-start-line":"152","trae-inspector-start-column":"24","trae-inspector-end-line":"152","trae-inspector-end-column":"59","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",children:m.codeExample})})})]})]})]}),h.length>0&&d.jsx("div",{"trae-inspector-start-line":"163","trae-inspector-start-column":"12","trae-inspector-end-line":"185","trae-inspector-end-column":"18","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"bg-white rounded-xl shadow-lg border border-gray-100",children:d.jsxs("div",{"trae-inspector-start-line":"164","trae-inspector-start-column":"14","trae-inspector-end-line":"184","trae-inspector-end-column":"20","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"p-4 sm:p-8",children:[d.jsxs("h2",{"trae-inspector-start-line":"165","trae-inspector-start-column":"16","trae-inspector-end-line":"167","trae-inspector-end-column":"21","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center",children:[d.jsx("span",{"trae-inspector-start-line":"166","trae-inspector-start-column":"18","trae-inspector-end-line":"166","trae-inspector-end-column":"50","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%93%9A%22%2C%22textStartLine%22%3A%22166%22%2C%22textStartColumn%22%3A%2241%22%2C%22textEndLine%22%3A%22166%22%2C%22textEndColumn%22%3A%2243%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"mr-2",children:"📚"})," 相关题目"]}),d.jsx("div",{"trae-inspector-start-line":"168","trae-inspector-start-column":"16","trae-inspector-end-line":"183","trae-inspector-end-column":"22","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"space-y-2 sm:space-y-4",children:h.map(A=>d.jsx(Te,{to:`/question/${A.id}`,className:"block p-3 sm:p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200",children:d.jsxs("div",{"trae-inspector-start-line":"175","trae-inspector-start-column":"22","trae-inspector-end-line":"180","trae-inspector-end-column":"28","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"flex items-start justify-between",children:[d.jsx("h3",{"trae-inspector-start-line":"176","trae-inspector-start-column":"24","trae-inspector-end-line":"176","trae-inspector-end-column":"113","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"font-medium text-gray-900 text-sm sm:text-base flex-1 mr-2",children:A.title}),d.jsx("span",{"trae-inspector-start-line":"177","trae-inspector-start-column":"24","trae-inspector-end-line":"179","trae-inspector-end-column":"31","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:`px-2 py-1 rounded text-xs font-medium ${S(A.difficulty)} whitespace-nowrap`,children:D(A.difficulty)})]})},A.id))})]})}),d.jsx("div",{"trae-inspector-start-line":"189","trae-inspector-start-column":"10","trae-inspector-end-line":"199","trae-inspector-end-column":"16","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"flex justify-between items-center mt-6 sm:mt-8",children:d.jsxs(Te,{to:`/category/${m.category}`,className:"text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base flex items-center",children:[d.jsx("svg",{"trae-inspector-start-line":"194","trae-inspector-start-column":"14","trae-inspector-end-line":"196","trae-inspector-end-column":"20","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"返回分类"]})})]}),d.jsx("footer",{"trae-inspector-start-line":"203","trae-inspector-start-column":"8","trae-inspector-end-line":"209","trae-inspector-end-column":"17","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"bg-gray-900 text-gray-400 py-6 sm:py-8",children:d.jsx("div",{"trae-inspector-start-line":"204","trae-inspector-start-column":"10","trae-inspector-end-line":"208","trae-inspector-end-column":"16","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"max-w-7xl mx-auto px-4 text-center",children:d.jsx("p",{"trae-inspector-start-line":"205","trae-inspector-start-column":"12","trae-inspector-end-line":"207","trae-inspector-end-column":"16","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%C2%A9%202024%20Java%E9%9D%A2%E8%AF%95%E9%A2%98.%20%E5%B8%AE%E5%8A%A9%E6%AF%8F%E4%B8%80%E4%BD%8D%E5%BC%80%E5%8F%91%E8%80%85%E5%87%86%E5%A4%87%E9%9D%A2%E8%AF%95%E3%80%82%22%2C%22textStartLine%22%3A%22205%22%2C%22textStartColumn%22%3A%2246%22%2C%22textEndLine%22%3A%22207%22%2C%22textEndColumn%22%3A%2212%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-xs sm:text-sm",children:"© 2024 Java面试题. 帮助每一位开发者准备面试。"})})})]})]}):d.jsxs("div",{"trae-inspector-start-line":"37","trae-inspector-start-column":"6","trae-inspector-end-line":"51","trae-inspector-end-column":"12","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"min-h-screen bg-gray-50",children:[d.jsx(Br,{isOpen:c,onToggle:()=>f(!c),onClose:()=>f(!1)}),d.jsx("div",{"trae-inspector-start-line":"43","trae-inspector-start-column":"8","trae-inspector-end-line":"50","trae-inspector-end-column":"14","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"md:ml-64 pb-20 sm:pb-0",children:d.jsxs("div",{"trae-inspector-start-line":"44","trae-inspector-start-column":"10","trae-inspector-end-line":"49","trae-inspector-end-column":"16","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center",children:[d.jsx("h2",{"trae-inspector-start-line":"45","trae-inspector-start-column":"12","trae-inspector-end-line":"45","trae-inspector-end-column":"71","trae-inspector-file-path":"src\\\\pages\\\\QuestionDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E9%A2%98%E7%9B%AE%E4%B8%8D%E5%AD%98%E5%9C%A8%22%2C%22textStartLine%22%3A%2245%22%2C%22textStartColumn%22%3A%2261%22%2C%22textEndLine%22%3A%2245%22%2C%22textEndColumn%22%3A%2266%22%2C%22cwd%22%3A%22D%3A%5C%5Cws-soft%5C%5Cstudy%5C%5Cjava-interview-questions-main%5C%5Cjava-interview-questions-main%22%7D",className:"text-2xl font-bold text-gray-900",children:"题目不存在"}),d.jsx(Te,{to:"/",className:"text-blue-600 hover:text-blue-800 mt-4 inline-block",children:"返回首页"})]})})]})};function H2(){return d.jsx(x2,{children:d.jsxs(Xf,{children:[d.jsx(Gi,{path:"/",element:d.jsx(q2,{})}),d.jsx(Gi,{path:"/category/:id",element:d.jsx(_2,{})}),d.jsx(Gi,{path:"/question/:id",element:d.jsx(F2,{})})]})})}Xd.createRoot(document.getElementById("root")).render(d.jsx(k.StrictMode,{children:d.jsx(H2,{})}));
