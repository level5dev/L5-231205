(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{665:function(t,e,o){"use strict";o.r(e),function(t){o.d(e,"default",(function(){return u}));var n=o(116),r=o(33),a=o(43),i=o(56);function c(t,e){return(c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}var u=function(e){var o,n;function u(){return e.apply(this,arguments)||this}n=e,(o=u).prototype=Object.create(n.prototype),o.prototype.constructor=o,c(o,n);var s=u.prototype;return s.onReady=function(){this.registerContactFormValidation()},s.registerContactFormValidation=function(){var e="form[data-contact-form]",o=Object(r.a)({submit:e+' input[type="submit"]',tap:i.b}),n=t(e);o.add([{selector:e+' input[name="contact_email"]',validate:function(t,e){t(a.a.email(e))},errorMessage:this.context.contactEmail},{selector:e+' textarea[name="contact_question"]',validate:function(t,e){t(a.a.notEmpty(e))},errorMessage:this.context.contactQuestion}]),n.on("submit",(function(t){o.performCheck(),o.areAll("valid")||t.preventDefault()}))},u}(n.a)}.call(this,o(1))}}]);
//# sourceMappingURL=theme-bundle.chunk.16.js.map
