!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=332)}({332:function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.r(n);var o=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,o;return n=e,(t=[{key:"post",value:function(e,n,t){return new Promise(function(t,r){fetch(e,{method:"POST",body:JSON.stringify(n),headers:{"Content-type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return t(e)}).catch(function(e){return r(e)})})}},{key:"get",value:function(e,n){return new Promise(function(n,t){fetch(e).then(function(e){return e.json()}).then(function(e){return n(e)}).catch(function(e){return t(e)})})}}])&&r(n.prototype,t),o&&r(n,o),e}(),a="https://mostlikedperson-api.herokuapp.com/api";function i(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"login",value:function(e,n){var t=new o;return new Promise(function(r,o){t.post("".concat(a,"/public/auth/login"),{email:e,password:n}).then(function(e){if(!e.auth)return o(e);localStorage.setItem("sn_user_id",e.id),localStorage.setItem("sn_user_token",e.token),r(e)}).catch(function(e){return o(e)})})}},{key:"token",get:function(){return localStorage.getItem("sn_user_token")}},{key:"userId",get:function(){return localStorage.getItem("sn_user_id")}}])&&i(n.prototype,t),r&&i(n,r),e}();function c(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"navigate",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;location.appData=n,location.hash=e}}])&&c(n.prototype,t),r&&c(n,r),e}();function f(e,n,t,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void t(e)}u.done?n(c):Promise.resolve(c).then(r,o)}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._autService=new u,this._routing=new s}var n,t,r;return n=e,(t=[{key:"beforeRender",value:function(){var e,n=(e=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this._autService.token&&this._routing.navigate("/users/".concat(this._autService.userId));case 1:case"end":return e.stop()}},e,this)}),function(){var n=this,t=arguments;return new Promise(function(r,o){var a=e.apply(n,t);function i(e){f(a,r,o,i,u,"next",e)}function u(e){f(a,r,o,i,u,"throw",e)}i(void 0)})});return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){return'\n        <div class="auth-wrap d-flex mt-5">\n            <div class="auth-form col col-6 mx-auto my-auto">\n                <h3>Login to Social.</h3>\n                <p class="text-secondary">Enter your e-mail address & password to login to your Social account.</p>\n                <form name="loginForm" novalidate>\n                    <div class="form-group">\n                        <input type="email" class="form-control form-control-sm" id="email" placeholder="name@example.com" required data-pattern="^S+@[a-z]+.[a-z]+$">\n                        <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required data-pattern="S+">\n                        <div class="d-flex mt-5">\n                            <button type="submit" class="btn btn-primary btn-sm">Login</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            \x3c!-- /.auth-form --\x3e\n            <div class="auth-bg col col-6">\n\n            </div>\n            \x3c!-- /.auth-bg --\x3e\n        </div>\n        \x3c!-- /.auth-wrap --\x3e\n        '}},{key:"afterRender",value:function(){var e=this;document.forms.loginForm.addEventListener("submit",function(n){n.preventDefault();var t=n.target.elements.email.value,r=n.target.elements.password.value;t&&r&&e._autService.login(t,r).then(function(n){e._routing.navigate("/users/".concat(n.id),{myData:"My data"})}).catch(function(e){console.log(e)})})}}])&&l(n.prototype,t),r&&l(n,r),e}();function d(e,n,t,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void t(e)}u.done?n(c):Promise.resolve(c).then(r,o)}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"beforeRender",value:function(){var e,n=(e=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}),function(){var n=this,t=arguments;return new Promise(function(r,o){var a=e.apply(n,t);function i(e){d(a,r,o,i,u,"next",e)}function u(e){d(a,r,o,i,u,"throw",e)}i(void 0)})});return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){return"\n            <div>Home</div>\n        "}},{key:"afterRender",value:function(){}}])&&p(n.prototype,t),r&&p(n,r),e}();function m(e,n,t,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void t(e)}u.done?n(c):Promise.resolve(c).then(r,o)}function y(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"beforeRender",value:function(){var e,n=(e=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}),function(){var n=this,t=arguments;return new Promise(function(r,o){var a=e.apply(n,t);function i(e){m(a,r,o,i,u,"next",e)}function u(e){m(a,r,o,i,u,"throw",e)}i(void 0)})});return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){return"\n            <div>404</div>\n        "}},{key:"afterRender",value:function(){}}])&&y(n.prototype,t),r&&y(n,r),e}();function b(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"parseRequestURL",value:function(){var e=location.hash.slice(1).toLowerCase()||"/",n=e.split("/");return{resourse:n[1],id:n[2],url:e}}}])&&b(n.prototype,t),r&&b(n,r),e}();function k(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"getUser",value:function(e){var n=new o;return new Promise(function(t,r){n.get("".concat(a,"/public/users/get-info/").concat(e)).then(function(e){console.log(e),t(e)}).catch(function(e){return r(e)})})}}])&&k(n.prototype,t),r&&k(n,r),e}();function _(e,n,t,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void t(e)}u.done?n(c):Promise.resolve(c).then(r,o)}function P(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._activeRoute=new g,this._authService=new u,this._userService=new x,this._authUserId=this._authService.userId,this._activeUserId=this._activeRoute.parseRequestURL().id,this._user}var n,t,r;return n=e,(t=[{key:"beforeRender",value:function(){var e,n=(e=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._userService.getUser(this._activeUserId);case 2:this._user=e.sent;case 3:case"end":return e.stop()}},e,this)}),function(){var n=this,t=arguments;return new Promise(function(r,o){var a=e.apply(n,t);function i(e){_(a,r,o,i,u,"next",e)}function u(e){_(a,r,o,i,u,"throw",e)}i(void 0)})});return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){return"\n            \x3c!-- Component styles --\x3e\n            <style>\n                ".concat(this.style(),'\n            </style>\n            \x3c!-- Component html --\x3e\n            <div class="user-cover-container"\n                style="background: url(').concat(this._user.cover,') no-repeat center / cover;"\n            >\n            </div>\n            <div class="user-avatar-container d-flex justify-content-center">\n                <div class="user-avatar">\n                    <img src="').concat(this._user.avatar,'">\n                </div>\n            </div>\n        ')}},{key:"style",value:function(){return"\n            img {\n                max-width: 100%;\n            }\n            .user-cover-container {\n                height: 400px;\n                width: 100%;\n            }\n            .user-avatar-container {\n                transform: translateY(-50%);\n            }\n            .user-avatar {\n                width: 138px;\n                height: 138px;\n                border-radius: 50%;\n                overflow: hidden;\n            }\n        "}},{key:"afterRender",value:function(){}}])&&P(n.prototype,t),r&&P(n,r),e}();function S(e,n,t,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void t(e)}u.done?n(c):Promise.resolve(c).then(r,o)}var j={"/":new h,"/login":new v,"/users/:id":new R,"**":new w},O=new g,C=function(){var e,n=(e=regeneratorRuntime.mark(function e(){var n,t,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=document.querySelector("app-container"),t=O.parseRequestURL(),r=(t.resourse?"/"+t.resourse:"/")+(t.id?"/:id":""),o=j[r]||j["**"],e.next=6,o.beforeRender();case 6:n.innerHTML=o.render(),o.afterRender();case 8:case"end":return e.stop()}},e)}),function(){var n=this,t=arguments;return new Promise(function(r,o){var a=e.apply(n,t);function i(e){S(a,r,o,i,u,"next",e)}function u(e){S(a,r,o,i,u,"throw",e)}i(void 0)})});return function(){return n.apply(this,arguments)}}();window.addEventListener("load",C),window.addEventListener("hashchange",C)}});