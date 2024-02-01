// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,o=n-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,v=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,w,"$1e"),e=p.call(e,b,"e"),e=p.call(e,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,v,"e+0$1"),e=p.call(e,y,"e-0$1"),r.alternate&&(e=p.call(e,g,"$1."),e=p.call(e,d,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===l.call(r.specifier)?l.call(e):s.call(e)}function j(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function N(r,n,t){var e=n-r.length;return e<0?r:r=t?r+j(e):j(e)+r}var O=String.fromCharCode,E=isNaN,A=Array.isArray;function _(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function T(r){var n,t,e,o,a,c,s,l,p;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(e=r[l]))c+=e;else{if(n=void 0!==e.precision,!(e=_(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+e+"`.");for(e.mapping&&(s=e.mapping),t=e.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[s],10),s+=1,E(e.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[s],10),s+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[s],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!E(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(a)?String(e.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=N(e.arg,e.width,e.padRight)),c+=e.arg||"",s+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function F(r){var n,t,e,i;for(t=[],i=0,e=S.exec(r);e;)(n=r.slice(i,S.lastIndex-e[0].length)).length&&t.push(n),t.push(V(e)),i=S.lastIndex,e=S.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function k(r){return"string"==typeof r}function U(r){var n,t,e;if(!k(r))throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=F(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return T.apply(null,t)}var x,I=Object.prototype,P=I.toString,L=I.__defineGetter__,G=I.__defineSetter__,M=I.__lookupGetter__,R=I.__lookupSetter__;x=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(M.call(r,n)||R.call(r,n)?(e=r.__proto__,r.__proto__=I,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&L&&L.call(r,n,t.get),a&&G&&G.call(r,n,t.set),r};var $=x;function C(r,n,t){$(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function B(r){return"number"==typeof r}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return H&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString,z=Object.prototype.hasOwnProperty;function X(r,n){return null!=r&&z.call(r,n)}var Y="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Y?Y.toStringTag:"",D=W()?function(r){var n,t,e;if(null==r)return Z.call(r);t=r[q],n=X(r,q);try{r[q]=void 0}catch(n){return Z.call(r)}return e=Z.call(r),n?r[q]=t:delete r[q],e}:function(r){return Z.call(r)},J=Number,K=J.prototype.toString,Q=W();function rr(r){return"object"==typeof r&&(r instanceof J||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function nr(r){return B(r)||rr(r)}function tr(r){return B(r)&&r>0}function er(r){return rr(r)&&r.valueOf()>0}function ir(r){return tr(r)||er(r)}C(nr,"isPrimitive",B),C(nr,"isObject",rr),C(ir,"isPrimitive",tr),C(ir,"isObject",er);var or=Math.floor;function ar(r){return or(r)===r}function ur(r){if("function"!=typeof r)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",r));return function(n){var t,e;if(!function(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&ar(r.length)&&r.length>=0&&r.length<=4294967295}(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}var fr=ur(nr.isPrimitive),cr=ur(nr.isObject),sr=ur(nr);C(sr,"primitives",fr),C(sr,"objects",cr);var lr=Number.POSITIVE_INFINITY,pr=J.NEGATIVE_INFINITY;function vr(r){return r<lr&&r>pr&&ar(r)}function yr(r){return B(r)&&vr(r)}function gr(r){return rr(r)&&vr(r.valueOf())}function dr(r){return yr(r)||gr(r)}function hr(r){return yr(r)&&r>=0}function br(r){return gr(r)&&r.valueOf()>=0}function wr(r){return hr(r)||br(r)}function mr(r,n,t){$(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function jr(r){return r!=r}C(dr,"isPrimitive",yr),C(dr,"isObject",gr),C(wr,"isPrimitive",hr),C(wr,"isObject",br);var Nr=Math.ceil;function Or(r){return r<0?Nr(r):or(r)}var Er=1023;function Ar(r){return r===lr||r===pr}var _r,Tr=2147483647,Sr="function"==typeof Uint32Array,Vr="function"==typeof Uint32Array?Uint32Array:null,Fr="function"==typeof Uint32Array?Uint32Array:void 0;_r=function(){var r,n,t;if("function"!=typeof Vr)return!1;try{n=new Vr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(Sr&&t instanceof Uint32Array||"[object Uint32Array]"===D(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Fr:function(){throw new Error("not implemented")};var kr,Ur=_r,xr="function"==typeof Float64Array,Ir="function"==typeof Float64Array?Float64Array:null,Pr="function"==typeof Float64Array?Float64Array:void 0;kr=function(){var r,n,t;if("function"!=typeof Ir)return!1;try{n=new Ir([1,3.14,-3.14,NaN]),t=n,r=(xr&&t instanceof Float64Array||"[object Float64Array]"===D(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?Pr:function(){throw new Error("not implemented")};var Lr,Gr=kr,Mr="function"==typeof Uint8Array,Rr="function"==typeof Uint8Array?Uint8Array:null,$r="function"==typeof Uint8Array?Uint8Array:void 0;Lr=function(){var r,n,t;if("function"!=typeof Rr)return!1;try{n=new Rr(n=[1,3.14,-3.14,256,257]),t=n,r=(Mr&&t instanceof Uint8Array||"[object Uint8Array]"===D(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?$r:function(){throw new Error("not implemented")};var Cr,Br=Lr,Hr="function"==typeof Uint16Array,Wr="function"==typeof Uint16Array?Uint16Array:null,Zr="function"==typeof Uint16Array?Uint16Array:void 0;Cr=function(){var r,n,t;if("function"!=typeof Wr)return!1;try{n=new Wr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Hr&&t instanceof Uint16Array||"[object Uint16Array]"===D(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Zr:function(){throw new Error("not implemented")};var zr,Xr={uint16:Cr,uint8:Br};(zr=new Xr.uint16(1))[0]=4660;var Yr,qr,Dr=52===new Xr.uint8(zr.buffer)[0];!0===Dr?(Yr=1,qr=0):(Yr=0,qr=1);var Jr={HIGH:Yr,LOW:qr},Kr=new Gr(1),Qr=new Ur(Kr.buffer),rn=Jr.HIGH,nn=Jr.LOW;function tn(r,n,t,e){return Kr[0]=r,n[e]=Qr[rn],n[e+t]=Qr[nn],n}function en(r){return tn(r,[0,0],1,0)}C(en,"assign",tn);var on,an,un=!0===Dr?1:0,fn=new Gr(1),cn=new Ur(fn.buffer);function sn(r){return fn[0]=r,cn[un]}!0===Dr?(on=1,an=0):(on=0,an=1);var ln={HIGH:on,LOW:an},pn=new Gr(1),vn=new Ur(pn.buffer),yn=ln.HIGH,gn=ln.LOW;function dn(r,n){return vn[yn]=r,vn[gn]=n,pn[0]}var hn=[0,0];function bn(r,n){var t,e;return en.assign(r,hn,1,0),t=hn[0],t&=Tr,e=sn(n),dn(t|=e&=2147483648,hn[1])}function wn(r){return Math.abs(r)}function mn(r,n,t,e){return jr(r)||Ar(r)?(n[e]=r,n[e+t]=0,n):0!==r&&wn(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}C((function(r){return mn(r,[0,0],1,0)}),"assign",mn);var jn=[0,0],Nn=[0,0];function On(r,n){var t,e;return 0===n||0===r||jr(r)||Ar(r)?r:(mn(r,jn,1,0),n+=jn[1],n+=function(r){var n=sn(r);return(n=(2146435072&n)>>>20)-Er|0}(r=jn[0]),n<-1074?bn(0,r):n>1023?r<0?pr:lr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,en.assign(r,Nn,1,0),t=Nn[0],t&=2148532223,e*dn(t|=n+Er<<20,Nn[1])))}var En=1.4426950408889634,An=1/(1<<28);function _n(r){var n;return jr(r)||r===lr?r:r===pr?0:r>709.782712893384?lr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<An?1+r:function(r,n,t){var e,i,o,a;return On(1-(n-(e=r-n)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=Or(r<0?En*r-.5:En*r+.5)),1.9082149292705877e-10*n,n)}var Tn=!0===Dr?0:1,Sn=new Gr(1),Vn=new Ur(Sn.buffer);function Fn(r,n){return Sn[0]=r,Vn[Tn]=n>>>0,Sn[0]}var kn=.8450629115104675;function Un(r){var n,t,e,i,o,a,u,f;if(jr(r))return NaN;if(r===lr)return 0;if(r===pr)return 2;if(0===r)return 1;if(r<0?(n=!0,t=-r):(n=!1,t=r),t<.84375)return t<13877787807814457e-33?1-r:(i=.12837916709551256+(e=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),o=1+e*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(e),a=i/o,r<.25?1-(r+r*a):(i=r*a,.5-(i+=r-.5)));if(t<1.25)return u=(o=t-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(o)-.0023621185607526594,f=1+o*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(o),n?1+kn+u/f:1-kn-u/f;if(t<28){if(o=1/(t*t),t<2.857142857142857)i=o*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(o)-.009864944034847148,o=1+o*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(o);else{if(r<-6)return 2;i=o*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(o)-.0098649429247001,o=1+o*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(o)}return i=_n(-(e=Fn(t,0))*e-.5625)*_n((e-t)*(e+t)+i/o),n?2-i/t:i/t}return n?2:0}var xn=Math.sqrt;function In(r){return function(){return r}}function Pn(r){return jr(r)?In(NaN):function(n){return jr(n)?NaN:n<r?0:1}}function Ln(r,n){var t;return jr(r)||jr(n)||n<0?In(NaN):0===n?Pn(r):(t=n*xn(2),function(n){return jr(n)?NaN:.5*Un(-(n-r)/t)})}C((function(r,n){return jr(r)||jr(n)?NaN:r<n?0:1}),"factory",Pn),C((function(r,n,t){return jr(r)||jr(n)||jr(t)||t<0?NaN:0===t?r<n?0:1:.5*Un(-(r-n)/(t*xn(2)))}),"factory",Ln);var Gn=!0===Dr?1:0,Mn=new Gr(1),Rn=new Ur(Mn.buffer);function $n(r,n){return Mn[0]=r,Rn[Gn]=n>>>0,Mn[0]}var Cn=.6931471803691238,Bn=1.9082149292705877e-10,Hn=1048575;function Wn(r){var n,t,e,i,o,a,u,f,c,s,l,p;return 0===r?pr:jr(r)||r<0?NaN:(o=0,(t=sn(r))<1048576&&(o-=54,t=sn(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-Er|0,o+=(f=614244+(t&=Hn)&1048576|0)>>20|0,u=(r=$n(r,t|1072693248^f))-1,(Hn&2+t)<3?0===u?0===o?0:o*Cn+o*Bn:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*Cn-(a-o*Bn-u)):(f=t-398458|0,c=440401-t|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),a=e+i,(f|=c)>0?(n=.5*u*u,0===o?u-(n-s*(n+a)):o*Cn-(n-(s*(n+a)+o*Bn)-u)):0===o?u-s*(u-a):o*Cn-(s*(u-a)-o*Bn-u))))}function Zn(r){var n,t,e,i,o;return jr(r)?NaN:1===r?lr:-1===r?pr:0===r?r:r>1||r<-1?NaN:(r<0?(n=-1,t=-r):(n=1,t=r),e=1-t,t<=.5?(i=t*(t+10),o=function(r){var n,t;return 0===r?-.0005087819496582806:((r<0?-r:r)<=1?(n=r*(r*(.03348066254097446+r*(r*(r*(.02198786811111689+r*(.008226878746769157+r*(r*(0+0*r)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,t=1+r*(r*(r*(1.5622155839842302+r*(.662328840472003+r*(r*(r*(.07952836873415717+r*(.0008862163904564247*r-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(n=0+(r=1/r)*(0+r*(r*(.008226878746769157+r*(.02198786811111689+r*(r*(r*(.03348066254097446+r*(-.0005087819496582806*r-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),t=.0008862163904564247+r*(r*(.07952836873415717+r*(r*(r*(.662328840472003+r*(1.5622155839842302+r*(r*(1*r-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),n/t)}(t),n*(.08913147449493408*i+i*o)):e>=.25?(i=xn(-2*Wn(e)),o=function(r){var n,t;return 0===r?-.20243350835593876:((r<0?-r:r)<=1?(n=r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(r*(r*(17.445385985570866+r*(21.12946554483405+-3.6719225470772936*r))-44.6382324441787)-18.851064805871424))))-.20243350835593876,t=1+r*(6.242641248542475+r*(3.971343795334387+r*(r*(r*(48.560921310873994+r*(10.826866735546016+r*(1.7211476576120028*r-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(n=(r=1/r)*(21.12946554483405+r*(17.445385985570866+r*(r*(r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+-.20243350835593876*r)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,t=1.7211476576120028+r*(r*(10.826866735546016+r*(48.560921310873994+r*(r*(r*(3.971343795334387+r*(6.242641248542475+1*r))-28.66081804998)-20.14326346804852)))-22.643693341313973)),n/t)}(e-=.25),n*(i/(2.249481201171875+o))):(e=xn(-Wn(e)))<3?(o=function(r){var n,t;return 0===r?-.1311027816799519:((r<0?-r:r)<=1?(n=r*(r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(r*(2.8522533178221704e-8+-6.81149956853777e-10*r)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,t=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+0*r)))))))))):(n=(r=1/r)*(2.8522533178221704e-8+r*(r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.1311027816799519*r-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,t=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+1*r)))))))))),n/t)}(e-1.125),n*(.807220458984375*e+o*e)):e<6?(o=function(r){var n,t;return 0===r?-.0350353787183178:((r<0?-r:r)<=1?(n=r*(r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(26633922742578204e-28*r-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,t=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+0*r)))))))):(n=26633922742578204e-28+(r=1/r)*(r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0350353787183178*r-.0022242652921344794))))))-2.304047769118826e-10),t=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+1*r)))))))),n/t)}(e-3),n*(.9399557113647461*e+o*e)):(o=function(r){var n,t;return 0===r?-.016743100507663373:((r<0?-r:r)<=1?(n=r*(r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(4.4969678992770644e-7+r*(4.625961635228786e-9+r*(9905570997331033e-32*r-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,t=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(2.82243172016108e-7+r*(0+0*r)))))))):(n=9905570997331033e-32+(r=1/r)*(r*(4.625961635228786e-9+r*(4.4969678992770644e-7+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.016743100507663373*r-.0011295143874558028))))))-2811287356288318e-29),t=0+r*(0+r*(2.82243172016108e-7+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+1*r)))))))),n/t)}(e-6),n*(.9836282730102539*e+o*e)))}function zn(r,n){var t,e;return jr(r)||jr(n)||n<0?In(NaN):(t=r,e=n*xn(2),function(r){return jr(r)||r<0||r>1?NaN:t+e*Zn(2*r-1)})}function Xn(r,n,t,e){var i,o,a,u,f,c,s,l,p,v,y,g,d;if(r<=0)return 0;if(1===r||0===t)return n[e];if(i=e,r<8){for(y=0,d=0;d<r;d++)y+=n[i],i+=t;return y}if(r<=128){for(o=n[i],a=n[i+t],u=n[i+2*t],f=n[i+3*t],c=n[i+4*t],s=n[i+5*t],l=n[i+6*t],p=n[i+7*t],i+=8*t,v=r%8,d=8;d<r-v;d+=8)o+=n[i],a+=n[i+t],u+=n[i+2*t],f+=n[i+3*t],c+=n[i+4*t],s+=n[i+5*t],l+=n[i+6*t],p+=n[i+7*t],i+=8*t;for(y=o+a+(u+f)+(c+s+(l+p));d<r;d++)y+=n[i],i+=t;return y}return g=or(r/2),Xn(g-=g%8,n,t,i)+Xn(r-g,n,t,i+g*t)}function Yn(r,n,t){var e,i,o;if(r<=0)return 0;if(1===r||0===t)return n[0];if(e=t<0?(1-r)*t:0,r<8){for(i=0,o=0;o<r;o++)i+=n[e],e+=t;return i}return Xn(r,n,t,e)}function qn(r,n,t,e,i){var o,a,u,f,c,s,l,p,v,y,g,d,h;if(r<=0)return 0;if(1===r||0===e)return n+t[i];if(o=i,r<8){for(g=0,h=0;h<r;h++)g+=n+t[o],o+=e;return g}if(r<=128){for(a=n+t[o],u=n+t[o+e],f=n+t[o+2*e],c=n+t[o+3*e],s=n+t[o+4*e],l=n+t[o+5*e],p=n+t[o+6*e],v=n+t[o+7*e],o+=8*e,y=r%8,h=8;h<r-y;h+=8)a+=n+t[o],u+=n+t[o+e],f+=n+t[o+2*e],c+=n+t[o+3*e],s+=n+t[o+4*e],l+=n+t[o+5*e],p+=n+t[o+6*e],v+=n+t[o+7*e],o+=8*e;for(g=a+u+(f+c)+(s+l+(p+v));h<r;h++)g+=n+t[o],o+=e;return g}return d=or(r/2),qn(d-=d%8,n,t,e,o)+qn(r-d,n,t,e,o+d*e)}function Dn(r,n,t,e){var i,o,a;if(r<=0)return 0;if(1===r||0===e)return n+t[0];if(i=e<0?(1-r)*e:0,r<8){for(o=0,a=0;a<r;a++)o+=n+t[i],i+=e;return o}return qn(r,n,t,e,i)}function Jn(r,n,t){var e;return r<=0?NaN:1===r||0===t?n[0]:(e=Yn(r,n,t)/r)+Dn(r,-e,n,t)/r}C((function(r,n){return jr(r)||r<0||r>1?NaN:n}),"factory",(function(r){return jr(r)?In(NaN):function(n){return jr(n)||n<0||n>1?NaN:r}})),C((function(r,n,t){return jr(n)||jr(t)||jr(r)||t<0||r<0||r>1?NaN:0===t?n:n+t*xn(2)*Zn(2*r-1)}),"factory",zn),C(Yn,"ndarray",Xn),C(Dn,"ndarray",qn),C(Jn,"ndarray",(function(r,n,t,e){var i;return r<=0?NaN:1===r||0===t?n[e]:(i=Xn(r,n,t,e)/r)+qn(r,-i,n,t,e)/r}));const{ndarray:Kn}=Jn;function Qn(r,n,t){return Jn(r,n,t)}C(Qn,"ndarray",(function(r,n,t,e){return Kn(r,n,t,e)}));var rt=Array.isArray?Array.isArray:function(r){return"[object Array]"===D(r)},nt=/./;function tt(r){return"boolean"==typeof r}var et=Boolean,it=Boolean.prototype.toString,ot=W();function at(r){return"object"==typeof r&&(r instanceof et||(ot?function(r){try{return it.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===D(r)))}function ut(r){return tt(r)||at(r)}function ft(){return new Function("return this;")()}C(ut,"isPrimitive",tt),C(ut,"isObject",at);var ct="object"==typeof self?self:null,st="object"==typeof window?window:null,lt="object"==typeof globalThis?globalThis:null,pt=function(r){if(arguments.length){if(!tt(r))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ft()}if(lt)return lt;if(ct)return ct;if(st)return st;throw new Error("unexpected error. Unable to resolve global object.")}(),vt=pt.document&&pt.document.childNodes,yt=Int8Array;function gt(){return/^\s*function\s*([^(]*)/i}var dt=/^\s*function\s*([^(]*)/i;function ht(r){return null!==r&&"object"==typeof r}function bt(r){var n,t,e,i;if(("Object"===(t=D(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=dt.exec(e.toString()))return n[1]}return ht(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}C(gt,"REGEXP",dt),C(ht,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",r));return function(n){var t,e;if(!rt(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(ht));var wt="function"==typeof nt||"object"==typeof yt||"function"==typeof vt?function(r){return bt(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"==(n=typeof r)?bt(r).toLowerCase():n};function mt(r){return"function"===wt(r)}var jt,Nt=Object,Ot=Object.getPrototypeOf;jt=mt(Object.getPrototypeOf)?Ot:function(r){var n=function(r){return r.__proto__}(r);return n||null===n?n:"[object Function]"===D(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Et=jt,At=Object.prototype;function _t(r){var n;return!!function(r){return"object"==typeof r&&null!==r&&!rt(r)}(r)&&(n=function(r){return null==r?null:(r=Nt(r),Et(r))}(r),!n||!X(r,"constructor")&&X(n,"constructor")&&mt(n.constructor)&&"[object Function]"===D(n.constructor)&&X(n,"isPrototypeOf")&&mt(n.isPrototypeOf)&&(n===At||function(r){var n;for(n in r)if(!X(r,n))return!1;return!0}(r)))}function Tt(r){return"string"==typeof r}var St=String.prototype.valueOf,Vt=W();function Ft(r){return"object"==typeof r&&(r instanceof String||(Vt?function(r){try{return St.call(r),!0}catch(r){return!1}}(r):"[object String]"===D(r)))}function kt(r){return Tt(r)||Ft(r)}function Ut(r){return B(r)&&jr(r)}function xt(r){return rr(r)&&jr(r.valueOf())}function It(r){return Ut(r)||xt(r)}function Pt(r){return yr(r)&&r>0}function Lt(r){return gr(r)&&r.valueOf()>0}function Gt(r){return Pt(r)||Lt(r)}function Mt(r){return ar(r/2)}function Rt(r){return Mt(r>0?r-1:r+1)}function $t(r){return 0|r}C(kt,"isPrimitive",Tt),C(kt,"isObject",Ft),C(It,"isPrimitive",Ut),C(It,"isObject",xt),C(Gt,"isPrimitive",Pt),C(Gt,"isObject",Lt);var Ct=1048576,Bt=[1,1.5],Ht=[0,.5849624872207642],Wt=[0,1.350039202129749e-8],Zt=1048575,zt=1048576,Xt=1083179008,Yt=1e300,qt=1e-300,Dt=[0,0],Jt=[0,0];function Kt(r,n){var t,e,i,o,a,u,f,c,s,l,p,v,y,g;if(jr(r)||jr(n))return NaN;if(en.assign(n,Dt,1,0),a=Dt[0],0===Dt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return xn(r);if(-.5===n)return 1/xn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Ar(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:wn(r)<1==(n===lr)?0:lr}(r,n)}if(en.assign(r,Dt,1,0),o=Dt[0],0===Dt[1]){if(0===o)return function(r,n){return n===pr?lr:n===lr?0:n>0?Rt(n)?r:0:Rt(n)?bn(lr,r):lr}(r,n);if(1===r)return 1;if(-1===r&&Rt(n))return-1;if(Ar(r))return r===pr?Kt(-0,-n):n<0?0:lr}if(r<0&&!1===ar(n))return(r-r)/(r-r);if(i=wn(r),t=o&Tr|0,e=a&Tr|0,f=a>>>31|0,u=(u=o>>>31|0)&&Rt(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(sn(r)&Tr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?u*Yt*Yt:u*qt*qt;if(t>1072693248)return 0===f?u*Yt*Yt:u*qt*qt;p=function(r,n){var t,e,i,o,a,u;return t=(a=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=Fn(e=(o=1.4426950216293335*i)+a,0))-o),r[0]=e,r[1]=t,r}(Jt,i)}else p=function(r,n,t){var e,i,o,a,u,f,c,s,l,p,v,y,g,d,h,b,w,m,j,N,O;return m=0,t<Ct&&(m-=53,t=sn(n*=9007199254740992)),m+=(t>>20)-Er|0,t=1072693248|(j=1048575&t|0),j<=235662?N=0:j<767610?N=1:(N=0,m+=1,t-=Ct),a=Fn(i=(b=(n=$n(n,t))-(c=Bt[N]))*(w=1/(n+c)),0),e=524288+(t>>1|536870912),f=$n(0,e+=N<<18),h=(o=i*i)*o*(0===(O=o)?.5999999999999946:.5999999999999946+O*(.4285714285785502+O*(.33333332981837743+O*(.272728123808534+O*(.23066074577556175+.20697501780033842*O))))),f=Fn(f=3+(o=a*a)+(h+=(u=w*(b-a*f-a*(n-(f-c))))*(a+i)),0),g=(v=-7.028461650952758e-9*(l=Fn(l=(b=a*f)+(w=u*f+(h-(f-3-o))*i),0))+.9617966939259756*(w-(l-b))+Wt[N])-((y=Fn(y=(p=.9617967009544373*l)+v+(s=Ht[N])+(d=m),0))-d-s-p),r[0]=y,r[1]=g,r}(Jt,i,t);if(v=(l=(n-(c=Fn(n,0)))*p[0]+n*p[1])+(s=c*p[0]),en.assign(v,Dt,1,0),y=$t(Dt[0]),g=$t(Dt[1]),y>=Xt){if(0!=(y-Xt|g))return u*Yt*Yt;if(l+8008566259537294e-32>v-s)return u*Yt*Yt}else if((y&Tr)>=1083231232){if(0!=(y-3230714880|g))return u*qt*qt;if(l<=v-s)return u*qt*qt}return v=function(r,n,t){var e,i,o,a,u,f,c,s,l,p;return l=((s=r&Tr|0)>>20)-Er|0,c=0,s>1071644672&&(i=$n(0,((c=r+(zt>>l+1)>>>0)&~(Zt>>(l=((c&Tr)>>20)-Er|0)))>>>0),c=(c&Zt|zt)>>20-l>>>0,r<0&&(c=-c),n-=i),r=$t(r=sn(f=1-((f=(o=.6931471824645996*(i=Fn(i=t+n,0)))+(a=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?On(f,c):$n(f,r)}(y,s,l),u*v}var Qt=Math.round,re=1e308;function ne(r,n){var t,e;return jr(r)||jr(n)||Ar(n)?NaN:Ar(r)||0===r||n<-324||wn(r)>9007199254740992&&n<=0?r:n>308?0*r:n<-308?(t=Kt(10,-(n+308)),Ar(e=r*re*t)?r:Qt(e)/re/t):Ar(e=r*(t=Kt(10,-n)))?r:Qt(e)/t}function te(r){var n,t,e;if(t=4,n=!0,arguments.length>0){if(!_t(r))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",r));if(X(r,"digits")){if(!Gt(r.digits))throw new TypeError(U("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(X(r,"decision")){if(!tt(r.decision))throw new TypeError(U("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));n=r.decision}}switch(e="",e+=this.method,e+="\n\n",e+="Alternative hypothesis: ",e+="True mean is ",this.alternative){case"less":e+="less than ";break;case"greater":e+="greater than ";break;default:e+="not equal to "}return e+=this.nullValue,e+="\n\n",e+="    pValue: "+ne(this.pValue,-t)+"\n",e+="    statistic: "+ne(this.statistic,-t)+"\n",e+="    "+100*(1-this.alpha)+"% confidence interval: ["+ne(this.ci[0],-t)+","+ne(this.ci[1],-t)+"]",e+="\n\n",n&&(e+="Test Decision: ",this.rejected?e+="Reject null in favor of alternative at "+100*this.alpha+"% significance level":e+="Fail to reject null in favor of alternative at "+100*this.alpha+"% significance level",e+="\n"),e}var ee=Ln(0,1),ie=zn(0,1);return function(r,n,t){var e,i,o,a,u,f,c,s,l,p,v,y;if(!(null!==(y=r)&&"object"==typeof y&&hr(y.length)&&y.length<=9007199254740991&&"number"==typeof y.BYTES_PER_ELEMENT&&"number"==typeof y.byteOffset&&"number"==typeof y.byteLength||fr(r)))throw new TypeError(U("invalid argument. First argument must be a numeric array. Value: `%s`.",r));if(!tr(n))throw new TypeError(U("invalid argument. Second argument must be a positive number. Value: `%s`.",n));if(p=r.length,u={},t&&(s=function(r,n){return _t(n)?X(n,"alpha")&&(r.alpha=n.alpha,!B(r.alpha)||It(r.alpha))?new TypeError(U("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):X(n,"alternative")&&(r.alternative=n.alternative,!Tt(r.alternative))?new TypeError(U("invalid option. `%s` option must be a string. Option: `%s`.","alternative",r.alternative)):X(n,"mu")&&(r.mu=n.mu,!B(r.mu)||It(r.mu))?new TypeError(U("invalid option. `%s` option must be a number. Option: `%s`.","mu",r.mu)):null:new TypeError(U("invalid argument. Options argument must be an object. Value: `%s`.",n))}(u,t),s))throw s;if(v=u.mu||0,(i=void 0===u.alpha?.05:u.alpha)<0||i>1)throw new RangeError(U("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",i));if(p<2)throw new Error(U("invalid argument. First argument must contain at least two elements. Value: `%s`.",r));switch(e=xn(n*n/p),f=(Qn(p,r,1)-v)/e,c=u.alternative||"two-sided"){case"two-sided":a=2*ee(-wn(f)),(o=[f-ie(1-i/2),f+ie(1-i/2)])[0]=v+o[0]*e,o[1]=v+o[1]*e;break;case"greater":a=1-ee(f),(o=[f-ie(1-i),lr])[0]=v+o[0]*e;break;case"less":a=ee(f),(o=[pr,f+ie(1-i)])[1]=v+o[1]*e;break;default:throw new Error(U('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"alternative",["two-sided","less","greater"].join('", "'),c))}return mr(l={},"rejected",a<=i),mr(l,"alpha",i),mr(l,"pValue",a),mr(l,"statistic",f),mr(l,"ci",o),mr(l,"alternative",c),mr(l,"nullValue",v),mr(l,"sd",e),mr(l,"method","One-sample z-test"),mr(l,"print",te),l}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).ztest=n();
//# sourceMappingURL=browser.js.map
