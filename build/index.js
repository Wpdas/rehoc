module.exports=/******/function(a){/******//******/// The require function
/******/function b(d){/******//******/// Check if module is in cache
/******/if(c[d])/******/return c[d].exports;/******//******/// Create a new module (and put it into the cache)
/******/var e=c[d]={/******/i:d,/******/l:!1,/******/exports:{}/******/};/******//******/// Execute the module function
/******//******//******/// Return the exports of the module
/******/return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports;/******/}/******//******//******/// expose the modules object (__webpack_modules__)
/******/// webpackBootstrap
/******/// The module cache
/******/var c={};/******//******//******/// Load entry module and return exports
/******/return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){/******/if(1&c&&(a=b(a)),8&c)return a;/******/if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;/******/var d=Object.create(null);/******//******/if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));/******/return d;/******/},b.n=function(a){/******/var c=a&&a.__esModule?/******/function(){return a['default']}:/******/function(){return a};/******//******/return b.d(c,'a',c),c;/******/},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=0);/******/}(/************************************************************************//******/[/* 0 *//***/function(a,b,c){'use strict';function d(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function e(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function f(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(b,'__esModule',{value:!0}),b.getStore=b.updateState=b.connect=b.setStates=b.rehoc=void 0;/***/var g=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},h=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),i=c(1),j=function(a){return a&&a.__esModule?a:{default:a}}(i),k={},l=void 0,m=void 0,n=b.rehoc=function(a){return s(),function(b){function c(){return d(this,c),e(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}return f(c,b),h(c,[{key:'render',value:function(){return j.default.createElement(l,{value:k},j.default.createElement(a,this.props))}}]),c}(j.default.Component)},o=b.setStates=function(){k=g({},0>=arguments.length?void 0:arguments[0]),s()},p=b.connect=function(a){return s(),function(b){function c(a){d(this,c);var b=e(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,a));return b.onUpdateStoreHandler=b.onUpdateStoreHandler.bind(b),m=function(){b.onUpdateStoreHandler()},b}return f(c,b),h(c,[{key:'onUpdateStoreHandler',value:function(){this.forceUpdate()}},{key:'render',value:function(){var b=g({},this.props,k);return j.default.createElement(a,b)}}]),c}(j.default.Component)},q=b.updateState=function(a,b){k[a]=g({},k[a],b),m&&m()},r=b.getStore=function(){return k},s=function(){if(!l){var a=j.default.createContext(),b=a.Provider;l=b}};/**
 * Init Rehoc
 * @param {React.Component} WrappedComponent
 *//**
 * Set states
 * Example: setStates({stateA:{}, stateB:{}})
 * @param  {Object} state
 *//**
 * Creates a connection between states and component
 * @param {React.Component} ChildWrappedComponent
 *//**
 * Updates the state body by stateKey
 * Example: updateState('stateA', {});
 * @param {String} stateKey
 * @param {Object} updatedObject
 *//**
 * Return store containing all states
 */},/* 1 *//***/function(a){a.exports=require('react')}]/***//******/);