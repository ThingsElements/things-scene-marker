!function(e){var t={};function r(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(n,l,function(t){return e[t]}.bind(null,l));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=scene},function(e,t,r){e.exports=r(2)},function(e,t,r){"use strict";r.r(t);var n=r(0);const l={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"color",label:"inner-circle-fill-style",name:"innerCircleFillStyle",property:"innerCircleFillStyle"}]};class o extends n.Rect{_draw(e){var{innerCircleFillStyle:t,top:r,left:n,width:l,height:o}=this.model;e.translate(n,r),e.beginPath(),e.moveTo(l/2,.9*o),e.bezierCurveTo(l/2.3,.6*o,0,o/2,0,o/4),e.ellipse(l/2,o/4,l/2,o/4,0,1*Math.PI,0*Math.PI),e.bezierCurveTo(l,o/2,l/1.7,.6*o,l/2,.9*o),e.closePath(),this.drawFill(e),this.drawStroke(e),e.beginPath(),e.ellipse(l/2,o/4,.18*l,.09*o,0,0,2*Math.PI),e.fillStyle=t,e.fill(),e.translate(-n,-r)}get controls(){}_post_draw(e){this.drawText(e)}get nature(){return l}}n.Component.register("marker",o),r.d(t,"Marker",function(){return o})}]);
//# sourceMappingURL=things-scene-marker.js.map