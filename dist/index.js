"use strict";var q=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var F=q(function(re,j){
var T=require('@stdlib/assert-is-number/dist').isPrimitive,R=require('@stdlib/assert-is-plain-object/dist'),z=require('@stdlib/assert-is-string/dist').isPrimitive,V=require('@stdlib/assert-is-nan/dist'),g=require('@stdlib/assert-has-own-property/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist');function D(e,i){return R(i)?g(i,"alpha")&&(e.alpha=i.alpha,!T(e.alpha)||V(e.alpha))?new TypeError(f('1Lz8P',"alpha",e.alpha)):g(i,"alternative")&&(e.alternative=i.alternative,!z(e.alternative))?new TypeError(f('1Lz2W',"alternative",e.alternative)):g(i,"mu")&&(e.mu=i.mu,!T(e.mu)||V(e.mu))?new TypeError(f('1Lz8P',"mu",e.mu)):null:new TypeError(f('1Lz2V',i));}j.exports=D
});var N=q(function(ie,k){
var S=require('@stdlib/assert-is-positive-integer/dist'),B=require('@stdlib/assert-is-plain-object/dist'),C=require('@stdlib/assert-is-boolean/dist').isPrimitive,P=require('@stdlib/assert-has-own-property/dist'),p=require('@stdlib/math-base-special-roundn/dist'),y=require('@stdlib/error-tools-fmtprodmsg/dist');function L(e){var i,u,r;if(u=4,i=!0,arguments.length>0){if(!B(e))throw new TypeError(y('1Lz3L',e));if(P(e,"digits")){if(!S(e.digits))throw new TypeError(y('1Lz3P',"digits",e.digits));u=e.digits}if(P(e,"decision")){if(!C(e.decision))throw new TypeError(y('1Lz2o',"decision",e.decision));i=e.decision}}switch(r="",r+=this.method,r+="\n\n",r+="Alternative hypothesis: ",r+="True mean is ",this.alternative){case"less":r+="less than ";break;case"greater":r+="greater than ";break;case"two-sided":default:r+="not equal to ";break}return r+=this.nullValue,r+="\n\n",r+="    pValue: "+p(this.pValue,-u)+"\n",r+="    statistic: "+p(this.statistic,-u)+"\n",r+="    "+(1-this.alpha)*100+"% confidence interval: ["+p(this.ci[0],-u)+","+p(this.ci[1],-u)+"]",r+="\n\n",i&&(r+="Test Decision: ",this.rejected?r+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":r+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",r+="\n"),r}k.exports=L
});var I=q(function(ae,A){
var Q=require('@stdlib/assert-is-positive-number/dist').isPrimitive,x=require('@stdlib/assert-is-number-array/dist').primitives,G=require('@stdlib/assert-is-typed-array-like/dist'),s=require('@stdlib/utils-define-read-only-property/dist'),H=require('@stdlib/stats-base-dists-normal-cdf/dist').factory,J=require('@stdlib/stats-base-dists-normal-quantile/dist').factory,c=require('@stdlib/error-tools-fmtprodmsg/dist'),K=require('@stdlib/math-base-special-sqrt/dist'),M=require('@stdlib/math-base-special-abs/dist'),U=require('@stdlib/stats-base-mean/dist'),W=require('@stdlib/constants-float64-ninf/dist'),X=require('@stdlib/constants-float64-pinf/dist'),Y=F(),Z=N(),O=H(0,1),w=J(0,1);function _(e,i,u){var r,n,E,a,m,o,l,d,b,t,h,v;if(!G(e)&&!x(e))throw new TypeError(c('1Lz8R',e));if(!Q(i))throw new TypeError(c('1Lz72',i));if(h=e.length,o={},u&&(b=Y(o,u),b))throw b;if(v=o.mu||0,o.alpha===void 0?n=.05:n=o.alpha,n<0||n>1)throw new RangeError(c('1Lz8V',"alpha",n));if(h<2)throw new Error(c('1LzA2',e));switch(r=K(i*i/h),E=U(h,e,1),l=(E-v)/r,d=o.alternative||"two-sided",d){case"two-sided":m=2*O(-M(l)),a=[l-w(1-n/2),l+w(1-n/2)],a[0]=v+a[0]*r,a[1]=v+a[1]*r;break;case"greater":m=1-O(l),a=[l-w(1-n),X],a[0]=v+a[0]*r;break;case"less":m=O(l),a=[W,l+w(1-n)],a[1]=v+a[1]*r;break;default:throw new Error(c('1Lz4S',"alternative",["two-sided","less","greater"].join('", "'),d))}return t={},s(t,"rejected",m<=n),s(t,"alpha",n),s(t,"pValue",m),s(t,"statistic",l),s(t,"ci",a),s(t,"alternative",d),s(t,"nullValue",v),s(t,"sd",r),s(t,"method","One-sample z-test"),s(t,"print",Z),t}A.exports=_
});var $=I();module.exports=$;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map