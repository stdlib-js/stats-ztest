// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import{primitives as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number-array@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@esm/index.mjs";import{factory as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-normal-cdf@esm/index.mjs";import{factory as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-normal-quantile@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-mean@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import{isPrimitive as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import{isPrimitive as f}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import{isPrimitive as g}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-roundn@esm/index.mjs";function w(t){var e,s,i;if(s=4,e=!0,arguments.length>0){if(!j(t))throw new TypeError(a("0ft3X",t));if(v(t,"digits")){if(!b(t.digits))throw new TypeError(a("0ft3b","digits",t.digits));s=t.digits}if(v(t,"decision")){if(!g(t.decision))throw new TypeError(a("0ft30","decision",t.decision));e=t.decision}}switch(i="",i+=this.method,i+="\n\n",i+="Alternative hypothesis: ",i+="True mean is ",this.alternative){case"less":i+="less than ";break;case"greater":i+="greater than ";break;default:i+="not equal to "}return i+=this.nullValue,i+="\n\n",i+="    pValue: "+u(this.pValue,-s)+"\n",i+="    statistic: "+u(this.statistic,-s)+"\n",i+="    "+100*(1-this.alpha)+"% confidence interval: ["+u(this.ci[0],-s)+","+u(this.ci[1],-s)+"]",i+="\n\n",e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+100*this.alpha+"% significance level":i+="Fail to reject null in favor of alternative at "+100*this.alpha+"% significance level",i+="\n"),i}var x=r(0,1),y=n(0,1);function E(r,n,b){var g,u,E,T,k,V,q,P,A,O,R;if(!s(r)&&!e(r))throw new TypeError(a("0ft8j",r));if(!t(n))throw new TypeError(a("0ft7T",n));if(O=r.length,k={},b&&(P=function(t,e){return j(e)?v(e,"alpha")&&(t.alpha=e.alpha,!p(t.alpha)||c(t.alpha))?new TypeError(a("0ft8h","alpha",t.alpha)):v(e,"alternative")&&(t.alternative=e.alternative,!f(t.alternative))?new TypeError(a("0ft2i","alternative",t.alternative)):v(e,"mu")&&(t.mu=e.mu,!p(t.mu)||c(t.mu))?new TypeError(a("0ft8h","mu",t.mu)):null:new TypeError(a("0ft2h",e))}(k,b),P))throw P;if(R=k.mu||0,(u=void 0===k.alpha?.05:k.alpha)<0||u>1)throw new RangeError(a("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",u));if(O<2)throw new Error(a("0ftAn",r));switch(g=d(n*n/O),V=(o(O,r,1)-R)/g,q=k.alternative||"two-sided"){case"two-sided":T=2*x(-l(V)),(E=[V-y(1-u/2),V+y(1-u/2)])[0]=R+E[0]*g,E[1]=R+E[1]*g;break;case"greater":T=1-x(V),(E=[V-y(1-u),h])[0]=R+E[0]*g;break;case"less":T=x(V),(E=[m,V+y(1-u)])[1]=R+E[1]*g;break;default:throw new Error(a("0ft3t","alternative",["two-sided","less","greater"].join('", "'),q))}return i(A={},"rejected",T<=u),i(A,"alpha",u),i(A,"pValue",T),i(A,"statistic",V),i(A,"ci",E),i(A,"alternative",q),i(A,"nullValue",R),i(A,"sd",g),i(A,"method","One-sample z-test"),i(A,"print",w),A}export{E as default};
//# sourceMappingURL=index.mjs.map
