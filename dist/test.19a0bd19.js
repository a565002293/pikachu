parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"K4Xi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=".skin *{box-sizing: border-box;margin: 0;padding: 0;}\n.skin *::before, .skin *::after{box-sizing: border-box;}\n\n.skin{\n  background: #ffe600;\n  min-height: 50vh;\n  position: relative;\n}\n.nose{\n  border: 10px solid black;\n  border-color: black transparent transparent;\n  border-bottom: none;\n  width: 0px;\n  height: 0px;\n  position: relative;\n  left: 50%;\n  top: 145px;\n  margin-left: -10px;\n  z-index: 10;\n}\n@keyframes wave{\n  0%{\n    transform: rotate(0deg);\n}\n  33%{\n    transform: rotate(5deg);\n}\n  66%{\n    transform: rotate(-5deg);\n}\n  100%{\n    transform: rotate(0deg);\n}\n\n}\n.nose:hover{\n  transform-origin: center bottom;\n  animation: wave 300ms infinite linear;\n}\n\n.yuan{\n  position: absolute;\n  width: 20px;\n  height: 6px;\n  top: -16px;\n  left: -10px;\n  border-radius: 10px 10px 0 0;\n  background: black;\n}\n\n.eye {\n  border: 2px solid #000;\n  width: 64px;\n  height: 64px;\n  position: absolute;\n  left: 50%;\n  top: 100px;\n  margin-left: -32px;\n  background: #2e2e2e;\n  border-radius: 50%;\n}\n.eye::before{\n  content: '';\n  display: block;\n  border: 3px solid #000;\n  width: 30px;\n  height: 30px;\n  background: #fff;\n  border-radius: 50%;\n  position: relative;\n  left: 4px;\n  top: 2px;\n}\n.eye.left{\n  transform: translateX(-100px);\n}\n.eye.right{\n  transform: translateX(100px);\n}\n.mouth{\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  left: 50%;\n  top: 170px;\n  margin-left: -100px;\n}\n.mouth .up{\n  position: relative;\n  top: -20px;\n  z-index: 1;\n}\n.mouth .up .lip{\n  border: 3px solid black;\n  height: 30px;\n  width: 100px;\n  background: #ffe600;\n  border-top-color: transparent;\n  border-right-color: transparent;\n  position: relative;\n  position: absolute;\n  left: 50%;\n  margin-left: -50px;\n}\n.mouth .up .lip.left{\n  border-radius: 0 0 0 50px;\n  transform: rotate(-15deg) translateX(-53px);\n}\n.mouth .up .lip.right{\n  border-radius: 0 0 50px 0px;\n  transform: rotate(15deg) translateX(53px);\n}\n.mouth .up .lip::before{\n  content: '';\n  display: block;\n  width: 7px;\n  height: 30px;\n  position: absolute;\n  bottom: 0;\n  background: #ffe600;\n}\n.mouth .up .lip.left::before{\n  right: -6px;\n\n}\n.mouth .up .lip.right::before{\n  left: -6px;\n}\n.mouth .down{\n  height: 180px;\n  position: absolute;\n  top: 5px;\n  width: 100%;\n  overflow: hidden;\n}\n.mouth .down .yuan1{\n  border: 3px solid black;\n  width: 150px;\n  height: 1000px;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  margin-left: -75px;\n  border-radius: 75px/300px;\n  background: #9b000a;\n  overflow: hidden;\n}\n.mouth .down .yuan1 .yuan2{\n  width: 200px;\n  height: 300px;\n  background: #ff485f;\n  position: absolute;\n  bottom: -155px;\n  left: 50%;\n  margin-left: -100px;\n  border-radius: 100px;\n\n}\n.face{\n  position: absolute;\n  left: 50%;\n  border: 3px solid black;\n  width: 88px;\n  height: 88px;\n  top: 200px;\n  margin-left: -44px;\n  z-index: 3;\n}\n.face > img{\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n.face.left{\n  transform: translateX(-180px);\n  background: #ff0000;\n  border-radius: 50%;\n}\n.face.left > img{\n  transform: rotateY(180deg);\n  transform-origin: 0 0;\n}\n.face.right{\n  transform: translateX(180px);\n  background: #ff0000;\n  border-radius: 50%;\n}\n",t=n;exports.default=t;
},{}],"HdJB":[function(require,module,exports) {
"use strict";var e=n(require("./css.js"));function n(e){return e&&e.__esModule?e:{default:e}}var t={id:void 0,time:150,ui:{demo:document.querySelector("#demo"),demo2:document.querySelector("#demo2")},events:{"#btnPause":"pause","#btnPlay":"play","#btnSlow":"slow","#btnNormal":"normal","#btnFast":"fast"},n:1,init:function(){t.ui.demo.innerText=e.default.substr(0,t.n),t.ui.demo2.innerHTML=e.default.substr(0,t.n),t.bindEvents(),t.play()},bindEvents:function(){for(var e in t.events)if(t.events.hasOwnProperty(e)){var n=t.events[e];document.querySelector(e).onclick=t[n]}},run:function(){t.n+=1,t.n>e.default.length?window.clearInterval(t.id):(t.ui.demo.innerText=e.default.substr(0,t.n),t.ui.demo2.innerHTML=e.default.substr(0,t.n),t.ui.demo.scrollTop=t.ui.demo.scrollHeight)},play:function(){t.id=setInterval(t.run,t.time)},pause:function(){window.clearInterval(t.id)},slow:function(){t.pause(),t.time=300,t.play()},normal:function(){t.pause(),t.time=150,t.play()},fast:function(){t.pause(),t.time=0,t.play()}};t.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=/test.19a0bd19.js.map