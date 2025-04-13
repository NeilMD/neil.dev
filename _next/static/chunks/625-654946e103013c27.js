"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[625],{83625:(e,t,r)=>{r.d(t,{CS:()=>rh,zh:()=>t8});var n,s,i,a,o=k(),u=e=>v(e,o),l=k();u.write=e=>v(e,l);var f=k();u.onStart=e=>v(e,f);var d=k();u.onFrame=e=>v(e,d);var h=k();u.onFinish=e=>v(e,h);var c=[];u.setTimeout=(e,t)=>{let r=u.now()+t,n=()=>{let e=c.findIndex(e=>e.cancel==n);~e&&c.splice(e,1),y-=~e?1:0},s={time:r,handler:e,cancel:n};return c.splice(p(r),0,s),y+=1,x(),s};var p=e=>~(~c.findIndex(t=>t.time>e)||~c.length);u.cancel=e=>{f.delete(e),d.delete(e),h.delete(e),o.delete(e),l.delete(e)},u.sync=e=>{b=!0,u.batchedUpdates(e),b=!1},u.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,u.onStart(r)}return n.handler=e,n.cancel=()=>{f.delete(r),t=null},n};var m="undefined"!=typeof window?window.requestAnimationFrame:()=>{};u.use=e=>m=e,u.now="undefined"!=typeof performance?()=>performance.now():Date.now,u.batchedUpdates=e=>e(),u.catch=console.error,u.frameLoop="always",u.advance=()=>{"demand"!==u.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):w()};var g=-1,y=0,b=!1;function v(e,t){b?(t.delete(e),e(0)):(t.add(e),x())}function x(){g<0&&(g=0,"demand"!==u.frameLoop&&m(_))}function _(){~g&&(m(_),u.batchedUpdates(w))}function w(){let e=g,t=p(g=u.now());if(t&&(P(c.splice(0,t),e=>e.handler()),y-=t),!y){g=-1;return}f.flush(),o.flush(e?Math.min(64,g-e):16.667),d.flush(),l.flush(),h.flush()}function k(){let e=new Set,t=e;return{add(r){y+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(y-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,y-=t.size,P(t,t=>t(r)&&e.add(t)),y+=e.size,t=e)}}}function P(e,t){e.forEach(e=>{try{t(e)}catch(e){u.catch(e)}})}var S=r(12115),A=Object.defineProperty,C={};function I(){}((e,t)=>{for(var r in t)A(e,r,{get:t[r],enumerable:!0})})(C,{assign:()=>U,colors:()=>F,createStringInterpolator:()=>n,skipAnimation:()=>T,to:()=>s,willAdvance:()=>N});var V=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),R={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function O(e,t){if(R.arr(e)){if(!R.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var j=(e,t)=>e.forEach(t);function E(e,t,r){if(R.arr(e)){for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);return}for(let n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var M=e=>R.und(e)?[]:R.arr(e)?e:[e];function z(e,t){if(e.size){let r=Array.from(e);e.clear(),j(r,t)}}var $=(e,...t)=>z(e,e=>e(...t)),q=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),F=null,T=!1,N=I,U=e=>{e.to&&(s=e.to),e.now&&(u.now=e.now),void 0!==e.colors&&(F=e.colors),null!=e.skipAnimation&&(T=e.skipAnimation),e.createStringInterpolator&&(n=e.createStringInterpolator),e.requestAnimationFrame&&u.use(e.requestAnimationFrame),e.batchedUpdates&&(u.batchedUpdates=e.batchedUpdates),e.willAdvance&&(N=e.willAdvance),e.frameLoop&&(u.frameLoop=e.frameLoop)},Q=new Set,D=[],L=[],W=0,G={get idle(){return!Q.size&&!D.length},start(e){W>e.priority?(Q.add(e),u.onStart(Z)):(B(e),u(J))},advance:J,sort(e){if(W)u.onFrame(()=>G.sort(e));else{let t=D.indexOf(e);~t&&(D.splice(t,1),H(e))}},clear(){D=[],Q.clear()}};function Z(){Q.forEach(B),Q.clear(),u(J)}function B(e){D.includes(e)||H(e)}function H(e){D.splice(function(e,t){let r=e.findIndex(t);return r<0?e.length:r}(D,t=>t.priority>e.priority),0,e)}function J(e){let t=L;for(let r=0;r<D.length;r++){let n=D[r];W=n.priority,n.idle||(N(n),n.advance(e),n.idle||t.push(n))}return W=0,(L=D).length=0,(D=t).length>0}var X="[-+]?\\d*\\.?\\d+",Y=X+"%";function K(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var ee=RegExp("rgb"+K(X,X,X)),et=RegExp("rgba"+K(X,X,X,X)),er=RegExp("hsl"+K(X,Y,Y)),en=RegExp("hsla"+K(X,Y,Y,X)),es=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ei=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ea=/^#([0-9a-fA-F]{6})$/,eo=/^#([0-9a-fA-F]{8})$/;function eu(e,t,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function el(e,t,r){let n=r<.5?r*(1+t):r+t-r*t,s=2*r-n;return Math.round(255*eu(s,n,e+1/3))<<24|Math.round(255*eu(s,n,e))<<16|Math.round(255*eu(s,n,e-1/3))<<8}function ef(e){let t=parseInt(e,10);return t<0?0:t>255?255:t}function ed(e){return(parseFloat(e)%360+360)%360/360}function eh(e){let t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function ec(e){let t=parseFloat(e);return t<0?0:t>100?1:t/100}function ep(e){let t;let r="number"==typeof e?e>>>0===e&&e>=0&&e<=0xffffffff?e:null:(t=ea.exec(e))?parseInt(t[1]+"ff",16)>>>0:F&&void 0!==F[e]?F[e]:(t=ee.exec(e))?(ef(t[1])<<24|ef(t[2])<<16|ef(t[3])<<8|255)>>>0:(t=et.exec(e))?(ef(t[1])<<24|ef(t[2])<<16|ef(t[3])<<8|eh(t[4]))>>>0:(t=es.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=eo.exec(e))?parseInt(t[1],16)>>>0:(t=ei.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=er.exec(e))?(255|el(ed(t[1]),ec(t[2]),ec(t[3])))>>>0:(t=en.exec(e))?(el(ed(t[1]),ec(t[2]),ec(t[3]))|eh(t[4]))>>>0:null;if(null===r)return e;let n=(0xff000000&(r=r||0))>>>24,s=(0xff0000&r)>>>16,i=(65280&r)>>>8,a=(255&r)/255;return`rgba(${n}, ${s}, ${i}, ${a})`}var em=(e,t,r)=>{if(R.fun(e))return e;if(R.arr(e))return em({range:e,output:t,extrapolate:r});if(R.str(e.output[0]))return n(e);let s=e.output,i=e.range||[0,1],a=e.extrapolateLeft||e.extrapolate||"extend",o=e.extrapolateRight||e.extrapolate||"extend",u=e.easing||(e=>e);return t=>{let r=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(t,i);return function(e,t,r,n,s,i,a,o,u){let l=u?u(e):e;if(l<t){if("identity"===a)return l;"clamp"===a&&(l=t)}if(l>r){if("identity"===o)return l;"clamp"===o&&(l=r)}return n===s?n:t===r?e<=t?n:s:(t===-1/0?l=-l:r===1/0?l-=t:l=(l-t)/(r-t),l=i(l),n===-1/0?l=-l:s===1/0?l+=n:l=l*(s-n)+n,l)}(t,i[r],i[r+1],s[r],s[r+1],u,a,o,e.map)}},eg=Symbol.for("FluidValue.get"),ey=Symbol.for("FluidValue.observers"),eb=e=>!!(e&&e[eg]),ev=e=>e&&e[eg]?e[eg]():e,ex=e=>e[ey]||null;function e_(e,t){let r=e[ey];r&&r.forEach(e=>{e.eventObserved?e.eventObserved(t):e(t)})}var ew=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");ek(this,e)}},ek=(e,t)=>eA(e,eg,t);function eP(e,t){if(e[eg]){let r=e[ey];r||eA(e,ey,r=new Set),!r.has(t)&&(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function eS(e,t){let r=e[ey];if(r&&r.has(t)){let n=r.size-1;n?r.delete(t):e[ey]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var eA=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),eC=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,eI=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,eV=RegExp(`(${eC.source})(%|[a-z]+)`,"i"),eR=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,eO=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,ej=e=>{let[t,r]=eE(e);if(!t||q())return e;let n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){let e=window.getComputedStyle(document.documentElement).getPropertyValue(r);if(e)return e}else if(r&&eO.test(r))return ej(r);else if(r)return r;return e},eE=e=>{let t=eO.exec(e);if(!t)return[,];let[,r,n]=t;return[r,n]},eM=(e,t,r,n,s)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${s})`,ez=e=>{i||(i=F?RegExp(`(${Object.keys(F).join("|")})(?!\\w)`,"g"):/^\b$/);let t=e.output.map(e=>ev(e).replace(eO,ej).replace(eI,ep).replace(i,ep)),r=t.map(e=>e.match(eC).map(Number)),n=r[0].map((e,t)=>r.map(e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})).map(t=>em({...e,output:t}));return e=>{let r=!eV.test(t[0])&&t.find(e=>eV.test(e))?.replace(eC,""),s=0;return t[0].replace(eC,()=>`${n[s++](e)}${r||""}`).replace(eR,eM)}},e$="react-spring: ",eq=e=>{let t=!1;if("function"!=typeof e)throw TypeError(`${e$}once requires a function parameter`);return(...r)=>{t||(e(...r),t=!0)}},eF=eq(console.warn),eT=eq(console.warn);function eN(e){return R.str(e)&&("#"==e[0]||/\d/.test(e)||!q()&&eO.test(e)||e in(F||{}))}var eU=new WeakMap,eQ=new Set,eD=()=>{let e=()=>{eQ.forEach(e=>e({width:window.innerWidth,height:window.innerHeight}))};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},eL=q()?S.useEffect:S.useLayoutEffect,eW=()=>{let e=(0,S.useRef)(!1);return eL(()=>(e.current=!0,()=>{e.current=!1}),[]),e};function eG(){let e=(0,S.useState)()[1],t=eW();return()=>{t.current&&e(Math.random())}}var eZ=e=>(0,S.useEffect)(e,eB),eB=[];function eH(e){let t=(0,S.useRef)();return(0,S.useEffect)(()=>{t.current=e}),t.current}var eJ=Symbol.for("Animated:node"),eX=e=>!!e&&e[eJ]===e,eY=e=>e&&e[eJ],eK=(e,t)=>V(e,eJ,t),e0=e=>e&&e[eJ]&&e[eJ].getPayload(),e1=class{constructor(){eK(this,this)}getPayload(){return this.payload||[]}},e2=class extends e1{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,R.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new e2(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return R.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){let{done:e}=this;this.done=!1,R.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},e5=class extends e2{constructor(e){super(0),this._string=null,this._toString=em({output:[e,e]})}static create(e){return new e5(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(R.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=em({output:[this.getValue(),e]})),this._value=0,super.reset()}},e8={dependencies:null},e9=class extends e1{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){let t={};return E(this.source,(r,n)=>{eX(r)?t[n]=r.getValue(e):eb(r)?t[n]=ev(r):e||(t[n]=r)}),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&j(this.payload,e=>e.reset())}_makePayload(e){if(e){let t=new Set;return E(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){e8.dependencies&&eb(e)&&e8.dependencies.add(e);let t=e0(e);t&&j(t,e=>this.add(e))}},e3=class extends e9{constructor(e){super(e)}static create(e){return new e3(e)}getValue(){return this.source.map(e=>e.getValue())}setValue(e){let t=this.getPayload();return e.length==t.length?t.map((t,r)=>t.setValue(e[r])).some(Boolean):(super.setValue(e.map(e6)),!0)}};function e6(e){return(eN(e)?e5:e2).create(e)}function e4(e){let t=eY(e);return t?t.constructor:R.arr(e)?e3:eN(e)?e5:e2}var e7=(e,t)=>{let r=!R.fun(e)||e.prototype&&e.prototype.isReactComponent;return(0,S.forwardRef)((n,s)=>{let i=(0,S.useRef)(null),a=r&&(0,S.useCallback)(e=>{i.current=function(e,t){return e&&(R.fun(e)?e(t):e.current=t),t}(s,e)},[s]),[o,l]=function(e,t){let r=new Set;return e8.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)}),e=new e9(e),e8.dependencies=null,[e,r]}(n,t),f=eG(),d=()=>{let e=i.current;(!r||e)&&!1===(!!e&&t.applyAnimatedValues(e,o.getValue(!0)))&&f()},h=new te(d,l),c=(0,S.useRef)();eL(()=>(c.current=h,j(l,e=>eP(e,h)),()=>{c.current&&(j(c.current.deps,e=>eS(e,c.current)),u.cancel(c.current.update))})),(0,S.useEffect)(d,[]),eZ(()=>()=>{let e=c.current;j(e.deps,t=>eS(t,e))});let p=t.getComponentProps(o.getValue());return S.createElement(e,{...p,ref:a})})},te=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&u.write(this.update)}},tt=Symbol.for("AnimatedComponent"),tr=e=>R.str(e)?e:e&&R.str(e.displayName)?e.displayName:R.fun(e)&&e.name||null;function tn(e,...t){return R.fun(e)?e(...t):e}var ts=(e,t)=>!0===e||!!(t&&e&&(R.fun(e)?e(t):M(e).includes(t))),ti=(e,t)=>R.obj(e)?t&&e[t]:e,ta=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,to=e=>e,tu=(e,t=to)=>{let r=tl;e.default&&!0!==e.default&&(r=Object.keys(e=e.default));let n={};for(let s of r){let r=t(e[s],s);R.und(r)||(n[s]=r)}return n},tl=["config","onProps","onStart","onChange","onPause","onResume","onRest"],tf={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function td(e){let t=function(e){let t={},r=0;if(E(e,(e,n)=>{!tf[n]&&(t[n]=e,r++)}),r)return t}(e);if(t){let r={to:t};return E(e,(e,n)=>n in t||(r[n]=e)),r}return{...e}}function th(e){return e=ev(e),R.arr(e)?e.map(th):eN(e)?C.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function tc(e){return R.fun(e)||R.arr(e)&&R.obj(e[0])}var tp={tension:170,friction:26,mass:1,damping:1,easing:e=>e,clamp:!1},tm=class{constructor(){this.velocity=0,Object.assign(this,tp)}};function tg(e,t){if(R.und(t.decay)){let r=!R.und(t.tension)||!R.und(t.friction);!r&&R.und(t.frequency)&&R.und(t.damping)&&R.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var ty=[],tb=class{constructor(){this.changed=!1,this.values=ty,this.toValues=null,this.fromValues=ty,this.config=new tm,this.immediate=!1}};function tv(e,{key:t,props:r,defaultProps:n,state:s,actions:i}){return new Promise((a,o)=>{let l,f;let d=ts(r.cancel??n?.cancel,t);if(d)p();else{R.und(r.pause)||(s.paused=ts(r.pause,t));let e=n?.pause;!0!==e&&(e=s.paused||ts(e,t)),l=tn(r.delay||0,t),e?(s.resumeQueue.add(c),i.pause()):(i.resume(),c())}function h(){s.resumeQueue.add(c),s.timeouts.delete(f),f.cancel(),l=f.time-u.now()}function c(){l>0&&!C.skipAnimation?(s.delayed=!0,f=u.setTimeout(p,l),s.pauseQueue.add(h),s.timeouts.add(f)):p()}function p(){s.delayed&&(s.delayed=!1),s.pauseQueue.delete(h),s.timeouts.delete(f),e<=(s.cancelId||0)&&(d=!0);try{i.start({...r,callId:e,cancel:d},a)}catch(e){o(e)}}})}var tx=(e,t)=>1==t.length?t[0]:t.some(e=>e.cancelled)?tk(e.get()):t.every(e=>e.noop)?t_(e.get()):tw(e.get(),t.every(e=>e.finished)),t_=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),tw=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),tk=e=>({value:e,cancelled:!0,finished:!1});function tP(e,t,r,n){let{callId:s,parentId:i,onRest:a}=t,{asyncTo:o,promise:l}=r;return i||e!==o||t.reset?r.promise=(async()=>{let f,d,h;r.asyncId=s,r.asyncTo=e;let c=tu(t,(e,t)=>"onRest"===t?void 0:e),p=new Promise((e,t)=>(f=e,d=t)),m=e=>{let t=s<=(r.cancelId||0)&&tk(n)||s!==r.asyncId&&tw(n,!1);if(t)throw e.result=t,d(e),e},g=(e,t)=>{let i=new tA,a=new tC;return(async()=>{if(C.skipAnimation)throw tS(r),a.result=tw(n,!1),d(a),a;m(i);let o=R.obj(e)?{...e}:{...t,to:e};o.parentId=s,E(c,(e,t)=>{R.und(o[t])&&(o[t]=e)});let u=await n.start(o);return m(i),r.paused&&await new Promise(e=>{r.resumeQueue.add(e)}),u})()};if(C.skipAnimation)return tS(r),tw(n,!1);try{let t;t=R.arr(e)?(async e=>{for(let t of e)await g(t)})(e):Promise.resolve(e(g,n.stop.bind(n))),await Promise.all([t.then(f),p]),h=tw(n.get(),!0,!1)}catch(e){if(e instanceof tA)h=e.result;else if(e instanceof tC)h=e.result;else throw e}finally{s==r.asyncId&&(r.asyncId=i,r.asyncTo=i?o:void 0,r.promise=i?l:void 0)}return R.fun(a)&&u.batchedUpdates(()=>{a(h,n,n.item)}),h})():l}function tS(e,t){z(e.timeouts,e=>e.cancel()),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var tA=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},tC=class extends Error{constructor(){super("SkipAnimationSignal")}},tI=e=>e instanceof tR,tV=1,tR=class extends ew{constructor(){super(...arguments),this.id=tV++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){let e=eY(this);return e&&e.getValue()}to(...e){return C.to(this,e)}interpolate(...e){return eF(`${e$}The "interpolate" function is deprecated in v9 (use "to" instead)`),C.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){e_(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||G.sort(this),e_(this,{type:"priority",parent:this,priority:e})}},tO=Symbol.for("SpringPhase"),tj=e=>(1&e[tO])>0,tE=e=>(2&e[tO])>0,tM=e=>(4&e[tO])>0,tz=(e,t)=>t?e[tO]|=3:e[tO]&=-3,t$=(e,t)=>t?e[tO]|=4:e[tO]&=-5,tq=class extends tR{constructor(e,t){if(super(),this.animation=new tb,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!R.und(e)||!R.und(t)){let r=R.obj(e)?{...e}:{...t,from:e};R.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(tE(this)||this._state.asyncTo)||tM(this)}get goal(){return ev(this.animation.to)}get velocity(){let e=eY(this);return e instanceof e2?e.lastVelocity||0:e.getPayload().map(e=>e.lastVelocity||0)}get hasAnimated(){return tj(this)}get isAnimating(){return tE(this)}get isPaused(){return tM(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1,n=this.animation,{toValues:s}=n,{config:i}=n,a=e0(n.to);!a&&eb(n.to)&&(s=M(ev(n.to))),n.values.forEach((o,u)=>{if(o.done)return;let l=o.constructor==e5?1:a?a[u].lastPosition:s[u],f=n.immediate,d=l;if(!f){let t;if(d=o.lastPosition,i.tension<=0){o.done=!0;return}let r=o.elapsedTime+=e,s=n.fromValues[u],a=null!=o.v0?o.v0:o.v0=R.arr(i.velocity)?i.velocity[u]:i.velocity,h=i.precision||(s==l?.005:Math.min(1,.001*Math.abs(l-s)));if(R.und(i.duration)){if(i.decay){let e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*r);d=s+a/(1-e)*(1-n),f=Math.abs(o.lastPosition-d)<=h,t=a*n}else{t=null==o.lastVelocity?a:o.lastVelocity;let r=i.restVelocity||h/10,n=i.clamp?0:i.bounce,u=!R.und(n),c=s==l?o.v0>0:s<l,p=Math.ceil(e/1);for(let e=0;e<p&&!(!(Math.abs(t)>r)&&(f=Math.abs(l-d)<=h));++e){u&&(d==l||d>l==c)&&(t=-t*n,d=l);let e=(-(1e-6*i.tension)*(d-l)+-(.001*i.friction)*t)/i.mass;t+=1*e,d+=1*t}}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,o.durationProgress>0&&(o.elapsedTime=i.duration*o.durationProgress,r=o.elapsedTime+=e)),n=(n=(i.progress||0)+r/this._memoizedDuration)>1?1:n<0?0:n,o.durationProgress=n),t=((d=s+i.easing(n)*(l-s))-o.lastPosition)/e,f=1==n}o.lastVelocity=t,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),f=!0)}a&&!a[u].done&&(f=!1),f?o.done=!0:t=!1,o.setValue(d,i.round)&&(r=!0)});let o=eY(this),u=o.getValue();if(t){let e=ev(n.to);(u!==e||r)&&!i.decay?(o.setValue(e),this._onChange(e)):r&&i.decay&&this._onChange(u),this._stop()}else r&&this._onChange(u)}set(e){return u.batchedUpdates(()=>{this._stop(),this._focus(e),this._set(e)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(tE(this)){let{to:e,config:t}=this.animation;u.batchedUpdates(()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()})}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return R.und(e)?(r=this.queue||[],this.queue=[]):r=[R.obj(e)?e:{...t,to:e}],Promise.all(r.map(e=>this._update(e))).then(e=>tx(this,e))}stop(e){let{to:t}=this.animation;return this._focus(this.get()),tS(this._state,e&&this._lastCallId),u.batchedUpdates(()=>this._stop(t,e)),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){let t=this.key||"",{to:r,from:n}=e;(null==(r=R.obj(r)?r[t]:r)||tc(r))&&(r=void 0),null==(n=R.obj(n)?n[t]:n)&&(n=void 0);let s={to:r,from:n};return tj(this)||(e.reverse&&([r,n]=[n,r]),n=ev(n),R.und(n)?eY(this)||this._set(r):this._set(n)),s}_update({...e},t){let{key:r,defaultProps:n}=this;e.default&&Object.assign(n,tu(e,(e,t)=>/^on/.test(t)?ti(e,r):e)),tD(this,e,"onProps"),tL(this,"onProps",e,this);let s=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");let i=this._state;return tv(++this._lastCallId,{key:r,props:e,defaultProps:n,state:i,actions:{pause:()=>{tM(this)||(t$(this,!0),$(i.pauseQueue),tL(this,"onPause",tw(this,tF(this,this.animation.to)),this))},resume:()=>{tM(this)&&(t$(this,!1),tE(this)&&this._resume(),$(i.resumeQueue),tL(this,"onResume",tw(this,tF(this,this.animation.to)),this))},start:this._merge.bind(this,s)}}).then(r=>{if(e.loop&&r.finished&&!(t&&r.noop)){let t=tT(e);if(t)return this._update(t,!0)}return r})}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(tk(this));let n=!R.und(e.to),s=!R.und(e.from);if(n||s){if(!(t.callId>this._lastToId))return r(tk(this));this._lastToId=t.callId}let{key:i,defaultProps:a,animation:o}=this,{to:l,from:f}=o,{to:d=l,from:h=f}=e;s&&!n&&(!t.default||R.und(d))&&(d=h),t.reverse&&([d,h]=[h,d]);let c=!O(h,f);c&&(o.from=h),h=ev(h);let p=!O(d,l);p&&this._focus(d);let m=tc(t.to),{config:g}=o,{decay:y,velocity:b}=g;(n||s)&&(g.velocity=0),t.config&&!m&&function(e,t,r){for(let n in r&&(tg(r={...r},t),t={...r,...t}),tg(e,t),Object.assign(e,t),tp)null==e[n]&&(e[n]=tp[n]);let{frequency:n,damping:s}=e,{mass:i}=e;R.und(n)||(n<.01&&(n=.01),s<0&&(s=0),e.tension=Math.pow(2*Math.PI/n,2)*i,e.friction=4*Math.PI*s*i/n)}(g,tn(t.config,i),t.config!==a.config?tn(a.config,i):void 0);let v=eY(this);if(!v||R.und(d))return r(tw(this,!0));let x=R.und(t.reset)?s&&!t.default:!R.und(h)&&ts(t.reset,i),_=x?h:this.get(),w=th(d),k=R.num(w)||R.arr(w)||eN(w),P=!m&&(!k||ts(a.immediate||t.immediate,i));if(p){let e=e4(d);if(e!==v.constructor){if(P)v=this._set(w);else throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`)}}let S=v.constructor,A=eb(d),C=!1;if(!A){let e=x||!tj(this)&&c;(p||e)&&(A=!(C=O(th(_),w))),(O(o.immediate,P)||P)&&O(g.decay,y)&&O(g.velocity,b)||(A=!0)}if(C&&tE(this)&&(o.changed&&!x?A=!0:A||this._stop(l)),!m&&((A||eb(l))&&(o.values=v.getPayload(),o.toValues=eb(d)?null:S==e5?[1]:M(w)),o.immediate==P||(o.immediate=P,P||x||this._set(l)),A)){let{onRest:e}=o;j(tQ,e=>tD(this,t,e));let n=tw(this,tF(this,l));$(this._pendingCalls,n),this._pendingCalls.add(r),o.changed&&u.batchedUpdates(()=>{o.changed=!x,e?.(n,this),x?tn(a.onRest,n):o.onStart?.(n,this)})}x&&this._set(_),m?r(tP(t.to,t,this._state,this)):A?this._start():tE(this)&&!p?this._pendingCalls.add(r):r(t_(_))}_focus(e){let t=this.animation;e!==t.to&&(ex(this)&&this._detach(),t.to=e,ex(this)&&this._attach())}_attach(){let e=0,{to:t}=this.animation;eb(t)&&(eP(t,this),tI(t)&&(e=t.priority+1)),this.priority=e}_detach(){let{to:e}=this.animation;eb(e)&&eS(e,this)}_set(e,t=!0){let r=ev(e);if(!R.und(r)){let e=eY(this);if(!e||!O(r,e.getValue())){let n=e4(r);e&&e.constructor==n?e.setValue(r):eK(this,n.create(r)),e&&u.batchedUpdates(()=>{this._onChange(r,t)})}}return eY(this)}_onStart(){let e=this.animation;e.changed||(e.changed=!0,tL(this,"onStart",tw(this,tF(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),tn(this.animation.onChange,e,this)),tn(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){let e=this.animation;eY(this).reset(ev(e.to)),e.immediate||(e.fromValues=e.values.map(e=>e.lastPosition)),tE(this)||(tz(this,!0),tM(this)||this._resume())}_resume(){C.skipAnimation?this.finish():G.start(this)}_stop(e,t){if(tE(this)){tz(this,!1);let r=this.animation;j(r.values,e=>{e.done=!0}),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),e_(this,{type:"idle",parent:this});let n=t?tk(this.get()):tw(this.get(),tF(this,e??r.to));$(this._pendingCalls,n),r.changed&&(r.changed=!1,tL(this,"onRest",n,this))}}};function tF(e,t){let r=th(t);return O(th(e.get()),r)}function tT(e,t=e.loop,r=e.to){let n=tn(t);if(n){let s=!0!==n&&td(n),i=(s||e).reverse,a=!s||s.reset;return tN({...e,loop:t,default:!1,pause:void 0,to:!i||tc(r)?r:void 0,from:a?e.from:void 0,reset:a,...s})}}function tN(e){let{to:t,from:r}=e=td(e),n=new Set;return R.obj(t)&&tU(t,n),R.obj(r)&&tU(r,n),e.keys=n.size?Array.from(n):null,e}function tU(e,t){E(e,(e,r)=>null!=e&&t.add(r))}var tQ=["onStart","onRest","onChange","onPause","onResume"];function tD(e,t,r){e.animation[r]=t[r]!==ta(t,r)?ti(t[r],e.key):void 0}function tL(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var tW=["onStart","onChange","onRest"],tG=1,tZ=class{constructor(e,t){this.id=tG++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(e=>e.idle&&!e.isDelayed&&!e.isPaused)}get item(){return this._item}set item(e){this._item=e}get(){let e={};return this.each((t,r)=>e[r]=t.get()),e}set(e){for(let t in e){let r=e[t];R.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(tN(e)),this}start(e){let{queue:t}=this;return(e?t=M(e).map(tN):this.queue=[],this._flush)?this._flush(this,t):(t0(this,t),tB(this,t))}stop(e,t){if(!!e!==e&&(t=e),t){let r=this.springs;j(M(t),t=>r[t].stop(!!e))}else tS(this._state,this._lastAsyncId),this.each(t=>t.stop(!!e));return this}pause(e){if(R.und(e))this.start({pause:!0});else{let t=this.springs;j(M(e),e=>t[e].pause())}return this}resume(e){if(R.und(e))this.start({pause:!1});else{let t=this.springs;j(M(e),e=>t[e].resume())}return this}each(e){E(this.springs,e)}_onFrame(){let{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,s=this._changed.size>0;(n&&!this._started||s&&!this._started)&&(this._started=!0,z(e,([e,t])=>{t.value=this.get(),e(t,this,this._item)}));let i=!n&&this._started,a=s||i&&r.size?this.get():null;s&&t.size&&z(t,([e,t])=>{t.value=a,e(t,this,this._item)}),i&&(this._started=!1,z(r,([e,t])=>{t.value=a,e(t,this,this._item)}))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}u.onFrame(this._onFrame)}};function tB(e,t){return Promise.all(t.map(t=>tH(e,t))).then(t=>tx(e,t))}async function tH(e,t,r){let{keys:n,to:s,from:i,loop:a,onRest:o,onResolve:l}=t,f=R.obj(t.default)&&t.default;a&&(t.loop=!1),!1===s&&(t.to=null),!1===i&&(t.from=null);let d=R.arr(s)||R.fun(s)?s:void 0;d?(t.to=void 0,t.onRest=void 0,f&&(f.onRest=void 0)):j(tW,r=>{let n=t[r];if(R.fun(n)){let s=e._events[r];t[r]=({finished:e,cancelled:t})=>{let r=s.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):s.set(n,{value:null,finished:e||!1,cancelled:t||!1})},f&&(f[r]=t[r])}});let h=e._state;!h.paused===t.pause?(h.paused=t.pause,$(t.pause?h.pauseQueue:h.resumeQueue)):h.paused&&(t.pause=!0);let c=(n||Object.keys(e.springs)).map(r=>e.springs[r].start(t)),p=!0===t.cancel||!0===ta(t,"cancel");(d||p&&h.asyncId)&&c.push(tv(++e._lastAsyncId,{props:t,state:h,actions:{pause:I,resume:I,start(t,r){p?(tS(h,e._lastAsyncId),r(tk(e))):(t.onRest=o,r(tP(d,t,h,e)))}}})),h.paused&&await new Promise(e=>{h.resumeQueue.add(e)});let m=tx(e,await Promise.all(c));if(a&&m.finished&&!(r&&m.noop)){let r=tT(t,a,s);if(r)return t0(e,[r]),tH(e,r,!0)}return l&&u.batchedUpdates(()=>l(m,e,e.item)),m}function tJ(e,t){let r={...e.springs};return t&&j(M(t),e=>{R.und(e.keys)&&(e=tN(e)),R.obj(e.to)||(e={...e,to:void 0}),tK(r,e,e=>tY(e))}),tX(e,r),r}function tX(e,t){E(t,(t,r)=>{e.springs[r]||(e.springs[r]=t,eP(t,e))})}function tY(e,t){let r=new tq;return r.key=e,t&&eP(r,t),r}function tK(e,t,r){t.keys&&j(t.keys,n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)})}function t0(e,t){j(t,t=>{tK(e.springs,t,t=>tY(t,e))})}var t1=({children:e,...t})=>{let r=(0,S.useContext)(t2),n=t.pause||!!r.pause,s=t.immediate||!!r.immediate;t=function(e,t){let[r]=(0,S.useState)(()=>({inputs:t,result:e()})),n=(0,S.useRef)(),s=n.current,i=s;return i?t&&i.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,i.inputs)||(i={inputs:t,result:e()}):i=r,(0,S.useEffect)(()=>{n.current=i,s==r&&(r.inputs=r.result=void 0)},[i]),i.result}(()=>({pause:n,immediate:s}),[n,s]);let{Provider:i}=t2;return S.createElement(i,{value:t},e)},t2=function(e,t){return Object.assign(e,S.createContext(t)),e.Provider._context=e,e.Consumer._context=e,e}(t1,{});t1.Provider=t2.Provider,t1.Consumer=t2.Consumer;var t5=()=>{let e=[],t=function(t){eT(`${e$}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);let n=[];return j(e,(e,s)=>{if(R.und(t))n.push(e.start());else{let i=r(t,e,s);i&&n.push(e.start(i))}}),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){let r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return j(e,e=>e.pause(...arguments)),this},t.resume=function(){return j(e,e=>e.resume(...arguments)),this},t.set=function(t){j(e,(e,r)=>{let n=R.fun(t)?t(r,e):t;n&&e.set(n)})},t.start=function(t){let r=[];return j(e,(e,n)=>{if(R.und(t))r.push(e.start());else{let s=this._getProps(t,e,n);s&&r.push(e.start(s))}}),r},t.stop=function(){return j(e,e=>e.stop(...arguments)),this},t.update=function(t){return j(e,(e,r)=>e.update(this._getProps(t,e,r))),this};let r=function(e,t,r){return R.fun(e)?e(r,t):e};return t._getProps=r,t};function t8(e,t){let r=R.fun(e),[[n],s]=function(e,t,r){let n=R.fun(t)&&t;n&&!r&&(r=[]);let s=(0,S.useMemo)(()=>n||3==arguments.length?t5():void 0,[]),i=(0,S.useRef)(0),a=eG(),o=(0,S.useMemo)(()=>({ctrls:[],queue:[],flush(e,t){let r=tJ(e,t);return!(i.current>0)||o.queue.length||Object.keys(r).some(t=>!e.springs[t])?new Promise(n=>{tX(e,r),o.queue.push(()=>{n(tB(e,t))}),a()}):tB(e,t)}}),[]),u=(0,S.useRef)([...o.ctrls]),l=[],f=eH(e)||0;function d(e,r){for(let s=e;s<r;s++){let e=u.current[s]||(u.current[s]=new tZ(null,o.flush)),r=n?n(s,e):t[s];r&&(l[s]=function(e){let t=tN(e);return R.und(t.default)&&(t.default=tu(t)),t}(r))}}(0,S.useMemo)(()=>{j(u.current.slice(e,f),e=>{e.ref?.delete(e),s?.delete(e),e.stop(!0)}),u.current.length=e,d(f,e)},[e]),(0,S.useMemo)(()=>{d(0,Math.min(f,e))},r);let h=u.current.map((e,t)=>tJ(e,l[t])),c=(0,S.useContext)(t1),p=eH(c),m=c!==p&&function(e){for(let t in e)return!0;return!1}(c);eL(()=>{i.current++,o.ctrls=u.current;let{queue:e}=o;e.length&&(o.queue=[],j(e,e=>e())),j(u.current,(e,t)=>{var r;s?.add(e),m&&e.start({default:c});let n=l[t];n&&((r=n.ref)&&e.ref!==r&&(e.ref?.delete(e),r.add(e),e.ref=r),e.ref?e.queue.push(n):e.start(n))})}),eZ(()=>()=>{j(o.ctrls,e=>e.stop(!0))});let g=h.map(e=>({...e}));return s?[g,s]:g}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,s]:n}var t9=class extends tR{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=em(...t);let r=this._get();eK(this,e4(r).create(r))}advance(e){let t=this._get();O(t,this.get())||(eY(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&t6(this._active)&&t4(this)}_get(){let e=R.arr(this.source)?this.source.map(ev):M(ev(this.source));return this.calc(...e)}_start(){this.idle&&!t6(this._active)&&(this.idle=!1,j(e0(this),e=>{e.done=!1}),C.skipAnimation?(u.batchedUpdates(()=>this.advance()),t4(this)):G.start(this))}_attach(){let e=1;j(M(this.source),t=>{eb(t)&&eP(t,this),tI(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))}),this.priority=e,this._start()}_detach(){j(M(this.source),e=>{eb(e)&&eS(e,this)}),this._active.clear(),t4(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=M(this.source).reduce((e,t)=>Math.max(e,(tI(t)?t.priority:0)+1),0))}};function t3(e){return!1!==e.idle}function t6(e){return!e.size||Array.from(e).every(t3)}function t4(e){e.idle||(e.idle=!0,j(e0(e),e=>{e.done=!0}),e_(e,{type:"idle",parent:e}))}C.assign({createStringInterpolator:ez,to:(e,t)=>new t9(e,t)}),G.advance;var t7=r(47650),re=/^--/,rt={},rr={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rn=(e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1),rs=["Webkit","Ms","Moz","O"];rr=Object.keys(rr).reduce((e,t)=>(rs.forEach(r=>e[rn(r,t)]=e[t]),e),rr);var ri=/^(matrix|translate|scale|rotate|skew)/,ra=/^(translate)/,ro=/^(rotate|skew)/,ru=(e,t)=>R.num(e)&&0!==e?e+t:e,rl=(e,t)=>R.arr(e)?e.every(e=>rl(e,t)):R.num(e)?e===t:parseFloat(e)===t,rf=class extends e9{constructor({x:e,y:t,z:r,...n}){let s=[],i=[];(e||t||r)&&(s.push([e||0,t||0,r||0]),i.push(e=>[`translate3d(${e.map(e=>ru(e,"px")).join(",")})`,rl(e,0)])),E(n,(e,t)=>{if("transform"===t)s.push([e||""]),i.push(e=>[e,""===e]);else if(ri.test(t)){if(delete n[t],R.und(e))return;let r=ra.test(t)?"px":ro.test(t)?"deg":"";s.push(M(e)),i.push("rotate3d"===t?([e,t,n,s])=>[`rotate3d(${e},${t},${n},${ru(s,r)})`,rl(s,0)]:e=>[`${t}(${e.map(e=>ru(e,r)).join(",")})`,rl(e,t.startsWith("scale")?1:0)])}}),s.length&&(n.transform=new rd(s,i)),super(n)}},rd=class extends ew{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return j(this.inputs,(r,n)=>{let s=ev(r[0]),[i,a]=this.transforms[n](R.arr(s)?s:r.map(ev));e+=" "+i,t=t&&a}),t?"none":e}observerAdded(e){1==e&&j(this.inputs,e=>j(e,e=>eb(e)&&eP(e,this)))}observerRemoved(e){0==e&&j(this.inputs,e=>j(e,e=>eb(e)&&eS(e,this)))}eventObserved(e){"change"==e.type&&(this._value=null),e_(this,e)}};C.assign({batchedUpdates:t7.unstable_batchedUpdates,createStringInterpolator:ez,colors:{transparent:0,aliceblue:0xf0f8ffff,antiquewhite:0xfaebd7ff,aqua:0xffffff,aquamarine:0x7fffd4ff,azure:0xf0ffffff,beige:0xf5f5dcff,bisque:0xffe4c4ff,black:255,blanchedalmond:0xffebcdff,blue:65535,blueviolet:0x8a2be2ff,brown:0xa52a2aff,burlywood:0xdeb887ff,burntsienna:0xea7e5dff,cadetblue:0x5f9ea0ff,chartreuse:0x7fff00ff,chocolate:0xd2691eff,coral:0xff7f50ff,cornflowerblue:0x6495edff,cornsilk:0xfff8dcff,crimson:0xdc143cff,cyan:0xffffff,darkblue:35839,darkcyan:9145343,darkgoldenrod:0xb8860bff,darkgray:0xa9a9a9ff,darkgreen:6553855,darkgrey:0xa9a9a9ff,darkkhaki:0xbdb76bff,darkmagenta:0x8b008bff,darkolivegreen:0x556b2fff,darkorange:0xff8c00ff,darkorchid:0x9932ccff,darkred:0x8b0000ff,darksalmon:0xe9967aff,darkseagreen:0x8fbc8fff,darkslateblue:0x483d8bff,darkslategray:0x2f4f4fff,darkslategrey:0x2f4f4fff,darkturquoise:0xced1ff,darkviolet:0x9400d3ff,deeppink:0xff1493ff,deepskyblue:0xbfffff,dimgray:0x696969ff,dimgrey:0x696969ff,dodgerblue:0x1e90ffff,firebrick:0xb22222ff,floralwhite:0xfffaf0ff,forestgreen:0x228b22ff,fuchsia:0xff00ffff,gainsboro:0xdcdcdcff,ghostwhite:0xf8f8ffff,gold:0xffd700ff,goldenrod:0xdaa520ff,gray:0x808080ff,green:8388863,greenyellow:0xadff2fff,grey:0x808080ff,honeydew:0xf0fff0ff,hotpink:0xff69b4ff,indianred:0xcd5c5cff,indigo:0x4b0082ff,ivory:0xfffff0ff,khaki:0xf0e68cff,lavender:0xe6e6faff,lavenderblush:0xfff0f5ff,lawngreen:0x7cfc00ff,lemonchiffon:0xfffacdff,lightblue:0xadd8e6ff,lightcoral:0xf08080ff,lightcyan:0xe0ffffff,lightgoldenrodyellow:0xfafad2ff,lightgray:0xd3d3d3ff,lightgreen:0x90ee90ff,lightgrey:0xd3d3d3ff,lightpink:0xffb6c1ff,lightsalmon:0xffa07aff,lightseagreen:0x20b2aaff,lightskyblue:0x87cefaff,lightslategray:0x778899ff,lightslategrey:0x778899ff,lightsteelblue:0xb0c4deff,lightyellow:0xffffe0ff,lime:0xff00ff,limegreen:0x32cd32ff,linen:0xfaf0e6ff,magenta:0xff00ffff,maroon:0x800000ff,mediumaquamarine:0x66cdaaff,mediumblue:52735,mediumorchid:0xba55d3ff,mediumpurple:0x9370dbff,mediumseagreen:0x3cb371ff,mediumslateblue:0x7b68eeff,mediumspringgreen:0xfa9aff,mediumturquoise:0x48d1ccff,mediumvioletred:0xc71585ff,midnightblue:0x191970ff,mintcream:0xf5fffaff,mistyrose:0xffe4e1ff,moccasin:0xffe4b5ff,navajowhite:0xffdeadff,navy:33023,oldlace:0xfdf5e6ff,olive:0x808000ff,olivedrab:0x6b8e23ff,orange:0xffa500ff,orangered:0xff4500ff,orchid:0xda70d6ff,palegoldenrod:0xeee8aaff,palegreen:0x98fb98ff,paleturquoise:0xafeeeeff,palevioletred:0xdb7093ff,papayawhip:0xffefd5ff,peachpuff:0xffdab9ff,peru:0xcd853fff,pink:0xffc0cbff,plum:0xdda0ddff,powderblue:0xb0e0e6ff,purple:0x800080ff,rebeccapurple:0x663399ff,red:0xff0000ff,rosybrown:0xbc8f8fff,royalblue:0x4169e1ff,saddlebrown:0x8b4513ff,salmon:0xfa8072ff,sandybrown:0xf4a460ff,seagreen:0x2e8b57ff,seashell:0xfff5eeff,sienna:0xa0522dff,silver:0xc0c0c0ff,skyblue:0x87ceebff,slateblue:0x6a5acdff,slategray:0x708090ff,slategrey:0x708090ff,snow:0xfffafaff,springgreen:0xff7fff,steelblue:0x4682b4ff,tan:0xd2b48cff,teal:8421631,thistle:0xd8bfd8ff,tomato:0xff6347ff,turquoise:0x40e0d0ff,violet:0xee82eeff,wheat:0xf5deb3ff,white:0xffffffff,whitesmoke:0xf5f5f5ff,yellow:0xffff00ff,yellowgreen:0x9acd32ff}});var rh=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new e9(e),getComponentProps:n=e=>e}={})=>{let s={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{let t=tr(e)||"Anonymous";return(e=R.str(e)?i[e]||(i[e]=e7(e,s)):e[tt]||(e[tt]=e7(e,s))).displayName=`Animated(${t})`,e};return E(e,(t,r)=>{R.arr(e)&&(r=tr(t)),i[r]=i(t)}),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;let r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{className:n,style:s,children:i,scrollTop:a,scrollLeft:o,viewBox:u,...l}=t,f=Object.values(l),d=Object.keys(l).map(t=>r||e.hasAttribute(t)?t:rt[t]||(rt[t]=t.replace(/([A-Z])/g,e=>"-"+e.toLowerCase())));for(let t in void 0!==i&&(e.textContent=i),s)if(s.hasOwnProperty(t)){var h;let r=null==(h=s[t])||"boolean"==typeof h||""===h?"":"number"!=typeof h||0===h||re.test(t)||rr.hasOwnProperty(t)&&rr[t]?(""+h).trim():h+"px";re.test(t)?e.style.setProperty(t,r):e.style[t]=r}d.forEach((t,r)=>{e.setAttribute(t,f[r])}),void 0!==n&&(e.className=n),void 0!==a&&(e.scrollTop=a),void 0!==o&&(e.scrollLeft=o),void 0!==u&&e.setAttribute("viewBox",u)},createAnimatedStyle:e=>new rf(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}).animated}}]);