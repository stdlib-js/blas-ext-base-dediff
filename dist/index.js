"use strict";var _=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var E=_(function(U,k){
var h=require('@stdlib/blas-base-dcopy/dist').ndarray;function G(e,r,i,n,f,u,o,x,q,s,d,j,a,v,c){var g,l,m,p,t,R;if(g=e+f+q,g<=1)return a;for(h(f,u,o,x,a,v,c),p=n,t=c+f*v,l=r[p],R=1;R<e;R++)p+=i,m=r[p],a[t]=m-l,l=m,t+=v;return h(q,s,d,j,a,v,t),a}k.exports=G
});var z=_(function(V,w){
var y=require('@stdlib/strided-base-stride2offset/dist'),H=E();function I(e,r,i,n,f,u,o,x,q,s,d){var j=y(e,i),a=y(n,u),v=y(o,q),c=y(e+n+o-1,d);return H(e,r,i,j,n,f,u,a,o,x,q,v,s,d,c),s}w.exports=I
});var D=_(function(W,C){
var J=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=z(),K=E();J(B,"ndarray",K);C.exports=B
});var L=require("path").join,M=require('@stdlib/utils-try-require/dist'),Q=require('@stdlib/assert-is-error/dist'),S=D(),b,F=M(L(__dirname,"./native.js"));Q(F)?b=S:b=F;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
