"use strict";var _=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var E=_(function(U,k){
var h=require('@stdlib/blas-base-dcopy/dist').ndarray;function G(e,r,q,v,n,u,f,x,o,s,d,j,a,i,c){var g,l,m,p,t,R;if(g=e+n+o,g<=1)return a;for(h(n,u,f,x,a,i,c),p=v,t=c+n*i,l=r[p],R=1;R<e;R++)p+=q,m=r[p],a[t]=m-l,l=m,t+=i;return h(o,s,d,j,a,i,t),a}k.exports=G
});var z=_(function(V,w){
var y=require('@stdlib/strided-base-stride2offset/dist'),H=E();function I(e,r,q,v,n,u,f,x,o,s,d){var j=y(e,q),a=y(v,u),i=y(f,o),c=y(e+v+f-1,d);return H(e,r,q,j,v,n,u,a,f,x,o,i,s,d,c),s}w.exports=I
});var D=_(function(W,C){
var J=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=z(),K=E();J(B,"ndarray",K);C.exports=B
});var L=require("path").join,M=require('@stdlib/utils-try-require/dist'),Q=require('@stdlib/assert-is-error/dist'),S=D(),b,F=M(L(__dirname,"./native.js"));Q(F)?b=S:b=F;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
