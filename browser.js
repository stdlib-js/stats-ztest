// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).ztest=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,i=e.toString,o=e.__defineGetter__,u=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,v,s;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),v="get"in n,s="set"in n,l&&(v||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&o&&o.call(r,t,n.get),s&&u&&u.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function v(r){return"number"==typeof r}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return s&&"symbol"==typeof Symbol.toStringTag}var p=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;function h(r,t){return null!=r&&b.call(r,t)}var d="function"==typeof Symbol?Symbol.toStringTag:"";var w=y()?function(r){var t,n,e;if(null==r)return p.call(r);n=r[d],t=h(r,d);try{r[d]=void 0}catch(t){return p.call(r)}return e=p.call(r),t?r[d]=n:delete r[d],e}:function(r){return p.call(r)},m=Number,g=m.prototype.toString;var j=y();function N(r){return"object"==typeof r&&(r instanceof m||(j?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Number]"===w(r)))}function O(r){return v(r)||N(r)}function A(r){return v(r)&&r>0}function _(r){return N(r)&&r.valueOf()>0}function E(r){return A(r)||_(r)}l(O,"isPrimitive",v),l(O,"isObject",N),l(E,"isPrimitive",A),l(E,"isObject",_);var T=Math.floor;function U(r){return T(r)===r}function P(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!function(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&U(r.length)&&r.length>=0&&r.length<=4294967295}(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}var S=P(O.isPrimitive),I=P(O.isObject),F=P(O);l(F,"primitives",S),l(F,"objects",I);var V=Number.POSITIVE_INFINITY,L=m.NEGATIVE_INFINITY;function M(r){return r<V&&r>L&&U(r)}function k(r){return v(r)&&M(r)}function B(r){return N(r)&&M(r.valueOf())}function G(r){return k(r)||B(r)}function H(r){return k(r)&&r>=0}function x(r){return B(r)&&r.valueOf()>=0}function R(r){return H(r)||x(r)}l(G,"isPrimitive",k),l(G,"isObject",B),l(R,"isPrimitive",H),l(R,"isObject",x);function C(r,t,n){c(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}function W(r){return r!=r}var Y=Math.ceil;function q(r){return r<0?Y(r):T(r)}var z=1023;function X(r){return r===V||r===L}var D="function"==typeof Uint32Array;var J="function"==typeof Uint32Array?Uint32Array:null;var K,Q="function"==typeof Uint32Array?Uint32Array:void 0;K=function(){var r,t,n;if("function"!=typeof J)return!1;try{t=new J(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(D&&n instanceof Uint32Array||"[object Uint32Array]"===w(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Q:function(){throw new Error("not implemented")};var Z=K,$="function"==typeof Float64Array;var rr="function"==typeof Float64Array?Float64Array:null;var tr,nr="function"==typeof Float64Array?Float64Array:void 0;tr=function(){var r,t,n;if("function"!=typeof rr)return!1;try{t=new rr([1,3.14,-3.14,NaN]),n=t,r=($&&n instanceof Float64Array||"[object Float64Array]"===w(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var er=tr,ir="function"==typeof Uint8Array;var or="function"==typeof Uint8Array?Uint8Array:null;var ur,fr="function"==typeof Uint8Array?Uint8Array:void 0;ur=function(){var r,t,n;if("function"!=typeof or)return!1;try{t=new or(t=[1,3.14,-3.14,256,257]),n=t,r=(ir&&n instanceof Uint8Array||"[object Uint8Array]"===w(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var ar=ur,cr="function"==typeof Uint16Array;var lr="function"==typeof Uint16Array?Uint16Array:null;var vr,sr="function"==typeof Uint16Array?Uint16Array:void 0;vr=function(){var r,t,n;if("function"!=typeof lr)return!1;try{t=new lr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(cr&&n instanceof Uint16Array||"[object Uint16Array]"===w(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var yr,pr={uint16:vr,uint8:ar};(yr=new pr.uint16(1))[0]=4660;var br,hr,dr=52===new pr.uint8(yr.buffer)[0];!0===dr?(br=1,hr=0):(br=0,hr=1);var wr={HIGH:br,LOW:hr},mr=new er(1),gr=new Z(mr.buffer),jr=wr.HIGH,Nr=wr.LOW;function Or(r,t){return mr[0]=t,r[0]=gr[jr],r[1]=gr[Nr],r}function Ar(r,t){return 1===arguments.length?Or([0,0],r):Or(r,t)}var _r,Er,Tr=!0===dr?1:0,Ur=new er(1),Pr=new Z(Ur.buffer);function Sr(r){return Ur[0]=r,Pr[Tr]}!0===dr?(_r=1,Er=0):(_r=0,Er=1);var Ir={HIGH:_r,LOW:Er},Fr=new er(1),Vr=new Z(Fr.buffer),Lr=Ir.HIGH,Mr=Ir.LOW;function kr(r,t){return Vr[Lr]=r,Vr[Mr]=t,Fr[0]}var Br=[0,0];function Gr(r,t){var n,e;return Ar(Br,r),n=Br[0],n&=2147483647,e=Sr(t),kr(n|=e&=2147483648,Br[1])}function Hr(r){return Math.abs(r)}function xr(r,t,n,e){return W(r)||X(r)?(t[e]=r,t[e+n]=0,t):0!==r&&Hr(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}l((function(r){return xr(r,[0,0],1,0)}),"assign",xr);var Rr=[0,0],Cr=[0,0];function Wr(r,t){var n,e;return 0===t||0===r||W(r)||X(r)?r:(xr(r,Rr,1,0),t+=Rr[1],t+=function(r){var t=Sr(r);return(t=(2146435072&t)>>>20)-z|0}(r=Rr[0]),t<-1074?Gr(0,r):t>1023?r<0?L:V:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Ar(Cr,r),n=Cr[0],n&=2148532223,e*kr(n|=t+z<<20,Cr[1])))}var Yr=1.4426950408889634,qr=1/(1<<28);function zr(r){var t;return W(r)||r===V?r:r===L?0:r>709.782712893384?V:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<qr?1+r:function(r,t,n){var e,i,o,u;return Wr(1-(t-(e=r-t)*(o=e-(i=e*e)*(0===(u=i)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),n)}(r-.6931471803691238*(t=q(r<0?Yr*r-.5:Yr*r+.5)),1.9082149292705877e-10*t,t)}var Xr=!0===dr?0:1,Dr=new er(1),Jr=new Z(Dr.buffer);function Kr(r,t){return Dr[0]=r,Jr[Xr]=t>>>0,Dr[0]}var Qr=.8450629115104675;function Zr(r){var t,n,e,i,o,u,f,a;if(W(r))return NaN;if(r===V)return 0;if(r===L)return 2;if(0===r)return 1;if(r<0?(t=!0,n=-r):(t=!1,n=r),n<.84375)return n<13877787807814457e-33?1-r:(i=.12837916709551256+(e=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),o=1+e*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(e),u=i/o,r<.25?1-(r+r*u):(i=r*u,.5-(i+=r-.5)));if(n<1.25)return f=(o=n-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(o)-.0023621185607526594,a=1+o*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(o),t?1+Qr+f/a:1-Qr-f/a;if(n<28){if(o=1/(n*n),n<2.857142857142857)i=o*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(o)-.009864944034847148,o=1+o*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(o);else{if(r<-6)return 2;i=o*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(o)-.0098649429247001,o=1+o*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(o)}return i=zr(-(e=Kr(n,0))*e-.5625)*zr((e-n)*(e+n)+i/o),t?2-i/n:i/n}return t?2:0}var $r=Math.sqrt;function rt(r){return function(){return r}}function tt(r){return W(r)?rt(NaN):function(t){if(W(t))return NaN;return t<r?0:1}}function nt(r,t){var n;return W(r)||W(t)||t<0?rt(NaN):0===t?tt(r):(n=t*$r(2),function(t){if(W(t))return NaN;return.5*Zr(-(t-r)/n)})}l((function(r,t){return W(r)||W(t)?NaN:r<t?0:1}),"factory",tt),l((function(r,t,n){return W(r)||W(t)||W(n)||n<0?NaN:0===n?r<t?0:1:.5*Zr(-(r-t)/(n*$r(2)))}),"factory",nt);var et=!0===dr?1:0,it=new er(1),ot=new Z(it.buffer);function ut(r,t){return it[0]=r,ot[et]=t>>>0,it[0]}var ft=.6931471803691238,at=1.9082149292705877e-10,ct=1048575;function lt(r){var t,n,e,i,o,u,f,a,c,l,v,s;return 0===r?L:W(r)||r<0?NaN:(o=0,(n=Sr(r))<1048576&&(o-=54,n=Sr(r*=0x40000000000000)),n>=2146435072?r+r:(o+=(n>>20)-z|0,o+=(a=(n&=ct)+614244&1048576|0)>>20|0,f=(r=ut(r,n|1072693248^a))-1,(ct&2+n)<3?0===f?0===o?0:o*ft+o*at:(u=f*f*(.5-.3333333333333333*f),0===o?f-u:o*ft-(u-o*at-f)):(a=n-398458|0,c=440401-n|0,i=(v=(s=(l=f/(2+f))*l)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),u=e+i,(a|=c)>0?(t=.5*f*f,0===o?f-(t-l*(t+u)):o*ft-(t-(l*(t+u)+o*at)-f)):0===o?f-l*(f-u):o*ft-(l*(f-u)-o*at-f))))}function vt(r){var t,n,e,i,o;return W(r)?NaN:1===r?V:-1===r?L:0===r?r:r>1||r<-1?NaN:(r<0?(t=-1,n=-r):(t=1,n=r),e=1-n,n<=.5?(i=n*(n+10),o=function(r){var t,n;return 0===r?-.0005087819496582806:((r<0?-r:r)<=1?(t=r*(r*(.03348066254097446+r*(r*(r*(.02198786811111689+r*(.008226878746769157+r*(r*(0+0*r)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,n=1+r*(r*(r*(1.5622155839842302+r*(.662328840472003+r*(r*(r*(.07952836873415717+r*(.0008862163904564247*r-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(t=0+(r=1/r)*(0+r*(r*(.008226878746769157+r*(.02198786811111689+r*(r*(r*(.03348066254097446+r*(-.0005087819496582806*r-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),n=.0008862163904564247+r*(r*(.07952836873415717+r*(r*(r*(.662328840472003+r*(1.5622155839842302+r*(r*(1*r-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),t/n)}(n),t*(.08913147449493408*i+i*o)):e>=.25?(i=$r(-2*lt(e)),o=function(r){var t,n;return 0===r?-.20243350835593876:((r<0?-r:r)<=1?(t=r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(r*(r*(17.445385985570866+r*(21.12946554483405+-3.6719225470772936*r))-44.6382324441787)-18.851064805871424))))-.20243350835593876,n=1+r*(6.242641248542475+r*(3.971343795334387+r*(r*(r*(48.560921310873994+r*(10.826866735546016+r*(1.7211476576120028*r-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(t=(r=1/r)*(21.12946554483405+r*(17.445385985570866+r*(r*(r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+-.20243350835593876*r)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,n=1.7211476576120028+r*(r*(10.826866735546016+r*(48.560921310873994+r*(r*(r*(3.971343795334387+r*(6.242641248542475+1*r))-28.66081804998)-20.14326346804852)))-22.643693341313973)),t/n)}(e-=.25),t*(i/(2.249481201171875+o))):(e=$r(-lt(e)))<3?(o=function(r){var t,n;return 0===r?-.1311027816799519:((r<0?-r:r)<=1?(t=r*(r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(r*(2.8522533178221704e-8+-6.81149956853777e-10*r)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,n=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+0*r)))))))))):(t=(r=1/r)*(2.8522533178221704e-8+r*(r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.1311027816799519*r-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,n=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+1*r)))))))))),t/n)}(e-1.125),t*(.807220458984375*e+o*e)):e<6?(o=function(r){var t,n;return 0===r?-.0350353787183178:((r<0?-r:r)<=1?(t=r*(r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(26633922742578204e-28*r-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,n=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+0*r)))))))):(t=26633922742578204e-28+(r=1/r)*(r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0350353787183178*r-.0022242652921344794))))))-2.304047769118826e-10),n=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+1*r)))))))),t/n)}(e-3),t*(.9399557113647461*e+o*e)):(o=function(r){var t,n;return 0===r?-.016743100507663373:((r<0?-r:r)<=1?(t=r*(r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(4.4969678992770644e-7+r*(4.625961635228786e-9+r*(9905570997331033e-32*r-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,n=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(2.82243172016108e-7+r*(0+0*r)))))))):(t=9905570997331033e-32+(r=1/r)*(r*(4.625961635228786e-9+r*(4.4969678992770644e-7+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.016743100507663373*r-.0011295143874558028))))))-2811287356288318e-29),n=0+r*(0+r*(2.82243172016108e-7+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+1*r)))))))),t/n)}(e-6),t*(.9836282730102539*e+o*e)))}function st(r,t){var n,e;return W(r)||W(t)||t<0?rt(NaN):(n=r,e=t*$r(2),function(r){if(W(r)||r<0||r>1)return NaN;return n+e*vt(2*r-1)})}function yt(){var r,t=arguments,n=t[0],e="https://stdlib.io/e/"+n+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}l((function(r,t){return W(r)||r<0||r>1?NaN:t}),"factory",(function(r){return W(r)?rt(NaN):function(t){if(W(t)||t<0||t>1)return NaN;return r}})),l((function(r,t,n){return W(t)||W(n)||W(r)||n<0||r<0||r>1?NaN:0===n?t:t+n*$r(2)*vt(2*r-1)}),"factory",st);function pt(r,t,n,e){var i,o,u,f,a,c,l,v,s,y,p,b,h;if(r<=0)return 0;if(1===r||0===n)return t[e];if(i=e,r<8){for(p=0,h=0;h<r;h++)p+=t[i],i+=n;return p}if(r<=128){for(o=t[i],u=t[i+n],f=t[i+2*n],a=t[i+3*n],c=t[i+4*n],l=t[i+5*n],v=t[i+6*n],s=t[i+7*n],i+=8*n,y=r%8,h=8;h<r-y;h+=8)o+=t[i],u+=t[i+n],f+=t[i+2*n],a+=t[i+3*n],c+=t[i+4*n],l+=t[i+5*n],v+=t[i+6*n],s+=t[i+7*n],i+=8*n;for(p=o+u+(f+a)+(c+l+(v+s));h<r;h++)p+=t[i],i+=n;return p}return b=T(r/2),pt(b-=b%8,t,n,i)+pt(r-b,t,n,i+b*n)}function bt(r,t,n){var e,i,o;if(r<=0)return 0;if(1===r||0===n)return t[0];if(e=n<0?(1-r)*n:0,r<8){for(i=0,o=0;o<r;o++)i+=t[e],e+=n;return i}return pt(r,t,n,e)}l(bt,"ndarray",pt);function ht(r,t,n,e,i){var o,u,f,a,c,l,v,s,y,p,b,h,d;if(r<=0)return 0;if(1===r||0===e)return t+n[i];if(o=i,r<8){for(b=0,d=0;d<r;d++)b+=t+n[o],o+=e;return b}if(r<=128){for(u=t+n[o],f=t+n[o+e],a=t+n[o+2*e],c=t+n[o+3*e],l=t+n[o+4*e],v=t+n[o+5*e],s=t+n[o+6*e],y=t+n[o+7*e],o+=8*e,p=r%8,d=8;d<r-p;d+=8)u+=t+n[o],f+=t+n[o+e],a+=t+n[o+2*e],c+=t+n[o+3*e],l+=t+n[o+4*e],v+=t+n[o+5*e],s+=t+n[o+6*e],y+=t+n[o+7*e],o+=8*e;for(b=u+f+(a+c)+(l+v+(s+y));d<r;d++)b+=t+n[o],o+=e;return b}return h=T(r/2),ht(h-=h%8,t,n,e,o)+ht(r-h,t,n,e,o+h*e)}function dt(r,t,n,e){var i,o,u;if(r<=0)return 0;if(1===r||0===e)return t+n[0];if(i=e<0?(1-r)*e:0,r<8){for(o=0,u=0;u<r;u++)o+=t+n[i],i+=e;return o}return ht(r,t,n,e,i)}function wt(r,t,n){var e;return r<=0?NaN:1===r||0===n?t[0]:(e=bt(r,t,n)/r)+dt(r,-e,t,n)/r}l(dt,"ndarray",ht),l(wt,"ndarray",(function(r,t,n,e){var i;return r<=0?NaN:1===r||0===n?t[e]:(i=pt(r,t,n,e)/r)+ht(r,-i,t,n,e)/r}));const{ndarray:mt}=wt;function gt(r,t,n){return wt(r,t,n)}l(gt,"ndarray",(function(r,t,n,e){return mt(r,t,n,e)}));var jt=Array.isArray?Array.isArray:function(r){return"[object Array]"===w(r)};var Nt=/./;function Ot(r){return"boolean"==typeof r}var At=Boolean.prototype.toString;var _t=y();function Et(r){return"object"==typeof r&&(r instanceof Boolean||(_t?function(r){try{return At.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===w(r)))}function Tt(r){return Ot(r)||Et(r)}function Ut(){return new Function("return this;")()}l(Tt,"isPrimitive",Ot),l(Tt,"isObject",Et);var Pt="object"==typeof self?self:null,St="object"==typeof window?window:null,It="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ft="object"==typeof It?It:null;var Vt=function(r){if(arguments.length){if(!Ot(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Ut()}if(Pt)return Pt;if(St)return St;if(Ft)return Ft;throw new Error("unexpected error. Unable to resolve global object.")}(),Lt=Vt.document&&Vt.document.childNodes,Mt=Int8Array;function kt(){return/^\s*function\s*([^(]*)/i}var Bt=/^\s*function\s*([^(]*)/i;function Gt(r){return null!==r&&"object"==typeof r}function Ht(r){var t,n,e,i;if(("Object"===(n=w(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=Bt.exec(e.toString()))return t[1]}return Gt(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}l(kt,"REGEXP",Bt),l(Gt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!jt(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(Gt));var xt="function"==typeof Nt||"object"==typeof Mt||"function"==typeof Lt?function(r){return Ht(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Ht(r).toLowerCase():t};function Rt(r){return"function"===xt(r)}var Ct,Wt=Object.getPrototypeOf;Ct=Rt(Object.getPrototypeOf)?Wt:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===w(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Yt=Ct;var qt=Object.prototype;function zt(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!jt(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),Yt(r))}(r),!t||!h(r,"constructor")&&h(t,"constructor")&&Rt(t.constructor)&&"[object Function]"===w(t.constructor)&&h(t,"isPrototypeOf")&&Rt(t.isPrototypeOf)&&(t===qt||function(r){var t;for(t in r)if(!h(r,t))return!1;return!0}(r)))}function Xt(r){return"string"==typeof r}var Dt=String.prototype.valueOf;var Jt=y();function Kt(r){return"object"==typeof r&&(r instanceof String||(Jt?function(r){try{return Dt.call(r),!0}catch(r){return!1}}(r):"[object String]"===w(r)))}function Qt(r){return Xt(r)||Kt(r)}function Zt(r){return v(r)&&W(r)}function $t(r){return N(r)&&W(r.valueOf())}function rn(r){return Zt(r)||$t(r)}function tn(r){return k(r)&&r>0}function nn(r){return B(r)&&r.valueOf()>0}function en(r){return tn(r)||nn(r)}function on(r){return U(r/2)}function un(r){return on(r>0?r-1:r+1)}function fn(r){return 0|r}l(Qt,"isPrimitive",Xt),l(Qt,"isObject",Kt),l(rn,"isPrimitive",Zt),l(rn,"isObject",$t),l(en,"isPrimitive",tn),l(en,"isObject",nn);var an=1048576,cn=[1,1.5],ln=[0,.5849624872207642],vn=[0,1.350039202129749e-8];var sn=2147483647,yn=1048575,pn=1048576;var bn=2147483647,hn=1083179008,dn=1e300,wn=1e-300,mn=[0,0],gn=[0,0];function jn(r,t){var n,e,i,o,u,f,a,c,l,v,s,y,p,b;if(W(r)||W(t))return NaN;if(Ar(mn,t),u=mn[0],0===mn[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return $r(r);if(-.5===t)return 1/$r(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(X(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:Hr(r)<1==(t===V)?0:V}(r,t)}if(Ar(mn,r),o=mn[0],0===mn[1]){if(0===o)return function(r,t){return t===L?V:t===V?0:t>0?un(t)?r:0:un(t)?Gr(V,r):V}(r,t);if(1===r)return 1;if(-1===r&&un(t))return-1;if(X(r))return r===L?jn(-0,-t):t<0?0:V}if(r<0&&!1===U(t))return(r-r)/(r-r);if(i=Hr(r),n=o&bn|0,e=u&bn|0,a=u>>>31|0,f=(f=o>>>31|0)&&un(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&Sr(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===a?f*dn*dn:f*wn*wn;if(n>1072693248)return 0===a?f*dn*dn:f*wn*wn;s=function(r,t){var n,e,i,o,u,f;return n=(u=1.9259629911266175e-8*(i=t-1)-i*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Kr(e=(o=1.4426950216293335*i)+u,0))-o),r[0]=e,r[1]=n,r}(gn,i)}else s=function(r,t,n){var e,i,o,u,f,a,c,l,v,s,y,p,b,h,d,w,m,g,j,N,O;return g=0,n<an&&(g-=53,n=Sr(t*=9007199254740992)),g+=(n>>20)-z|0,n=1072693248|(j=1048575&n|0),j<=235662?N=0:j<767610?N=1:(N=0,g+=1,n-=an),u=Kr(i=(w=(t=ut(t,n))-(c=cn[N]))*(m=1/(t+c)),0),e=524288+(n>>1|536870912),a=ut(0,e+=N<<18),d=(o=i*i)*o*(0===(O=o)?.5999999999999946:.5999999999999946+O*(.4285714285785502+O*(.33333332981837743+O*(.272728123808534+O*(.23066074577556175+.20697501780033842*O))))),a=Kr(a=3+(o=u*u)+(d+=(f=m*(w-u*a-u*(t-(a-c))))*(u+i)),0),b=(y=-7.028461650952758e-9*(v=Kr(v=(w=u*a)+(m=f*a+(d-(a-3-o))*i),0))+.9617966939259756*(m-(v-w))+vn[N])-((p=Kr(p=(s=.9617967009544373*v)+y+(l=ln[N])+(h=g),0))-h-l-s),r[0]=p,r[1]=b,r}(gn,i,n);if(v=(t-(c=Kr(t,0)))*s[0]+t*s[1],l=c*s[0],Ar(mn,y=v+l),p=fn(mn[0]),b=fn(mn[1]),p>=hn){if(0!=(p-hn|b))return f*dn*dn;if(v+8008566259537294e-32>y-l)return f*dn*dn}else if((p&bn)>=1083231232){if(0!=(p-3230714880|b))return f*wn*wn;if(v<=y-l)return f*wn*wn}return y=function(r,t,n){var e,i,o,u,f,a,c,l,v,s;return v=((l=r&sn|0)>>20)-z|0,c=0,l>1071644672&&(i=ut(0,((c=r+(pn>>v+1)>>>0)&~(yn>>(v=((c&sn)>>20)-z|0)))>>>0),c=(c&yn|pn)>>20-v>>>0,r<0&&(c=-c),t-=i),r=fn(r=Sr(a=1-((a=(o=.6931471824645996*(i=Kr(i=n+t,0)))+(u=.6931471805599453*(n-(i-t))+-1.904654299957768e-9*i))*(e=a-(i=a*a)*(0===(s=i)?.16666666666666602:.16666666666666602+s*(s*(6613756321437934e-20+s*(4.1381367970572385e-8*s-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=u-(a-o))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Wr(a,c):ut(a,r)}(p,l,v),f*y}var Nn=Math.round,On=1e308;function An(r,t){var n,e;return W(r)||W(t)||X(t)?NaN:X(r)||0===r||t<-324||Hr(r)>9007199254740992&&t<=0?r:t>308?0*r:t<-308?(n=jn(10,-(t+308)),X(e=r*On*n)?r:Nn(e)/On/n):X(e=r*(n=jn(10,-t)))?r:Nn(e)/n}function _n(r){var t,n,e;if(n=4,t=!0,arguments.length>0){if(!zt(r))throw new TypeError(yt("0ft3X",r));if(h(r,"digits")){if(!en(r.digits))throw new TypeError(yt("0ft3b","digits",r.digits));n=r.digits}if(h(r,"decision")){if(!Ot(r.decision))throw new TypeError(yt("0ft30","decision",r.decision));t=r.decision}}switch(e="",e+=this.method,e+="\n\n",e+="Alternative hypothesis: ",e+="True mean is ",this.alternative){case"less":e+="less than ";break;case"greater":e+="greater than ";break;default:e+="not equal to "}return e+=this.nullValue,e+="\n\n",e+="    pValue: "+An(this.pValue,-n)+"\n",e+="    statistic: "+An(this.statistic,-n)+"\n",e+="    "+100*(1-this.alpha)+"% confidence interval: ["+An(this.ci[0],-n)+","+An(this.ci[1],-n)+"]",e+="\n\n",t&&(e+="Test Decision: ",this.rejected?e+="Reject null in favor of alternative at "+100*this.alpha+"% significance level":e+="Fail to reject null in favor of alternative at "+100*this.alpha+"% significance level",e+="\n"),e}var En=nt(0,1),Tn=st(0,1);return function(r,t,n){var e,i,o,u,f,a,c,l,s,y,p,b;if(!(b=r,null!==b&&"object"==typeof b&&H(b.length)&&b.length<=9007199254740991&&"number"==typeof b.BYTES_PER_ELEMENT&&"number"==typeof b.byteOffset&&"number"==typeof b.byteLength||S(r)))throw new TypeError(yt("0ft8j",r));if(!A(t))throw new TypeError(yt("0ft7T",t));if(y=r.length,f={},n&&(l=function(r,t){return zt(t)?h(t,"alpha")&&(r.alpha=t.alpha,!v(r.alpha)||rn(r.alpha))?new TypeError(yt("0ft8h","alpha",r.alpha)):h(t,"alternative")&&(r.alternative=t.alternative,!Xt(r.alternative))?new TypeError(yt("0ft2i","alternative",r.alternative)):h(t,"mu")&&(r.mu=t.mu,!v(r.mu)||rn(r.mu))?new TypeError(yt("0ft8h","mu",r.mu)):null:new TypeError(yt("0ft2h",t))}(f,n),l))throw l;if(p=f.mu||0,(i=void 0===f.alpha?.05:f.alpha)<0||i>1)throw new RangeError(yt("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",i));if(y<2)throw new Error(yt("0ftAn",r));switch(e=$r(t*t/y),a=(gt(y,r,1)-p)/e,c=f.alternative||"two-sided"){case"two-sided":u=2*En(-Hr(a)),(o=[a-Tn(1-i/2),a+Tn(1-i/2)])[0]=p+o[0]*e,o[1]=p+o[1]*e;break;case"greater":u=1-En(a),(o=[a-Tn(1-i),V])[0]=p+o[0]*e;break;case"less":u=En(a),(o=[L,a+Tn(1-i)])[1]=p+o[1]*e;break;default:throw new Error(yt("0ft3t","alternative",["two-sided","less","greater"].join('", "'),c))}return C(s={},"rejected",u<=i),C(s,"alpha",i),C(s,"pValue",u),C(s,"statistic",a),C(s,"ci",o),C(s,"alternative",c),C(s,"nullValue",p),C(s,"sd",e),C(s,"method","One-sample z-test"),C(s,"print",_n),s}}));
//# sourceMappingURL=browser.js.map
