'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

var classnames$1 = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
}(classnames$1));

var classnames = classnames$1.exports;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$q = ":root {\n  --rs-primary: 25, 91, 255;\n  --rs-warn: 255, 186, 0;\n  --rs-danger: 255, 71, 87;\n  --rs-success: 70, 201, 58;\n  --rs-dark: 30, 30, 30;\n  --rs-light: 244, 247, 248;\n  --rs-color: 17, 18, 20;\n  --rs-facebook: 59, 89, 153;\n  --rs-twitter: 29, 161, 242;\n  --rs-youtube: 255, 0, 0;\n  --rs-pinterest: 189, 8, 28;\n  --rs-linkedin: 0, 119, 181;\n  --rs-snapchat: 255, 252, 0;\n  --rs-whatsapp: 37, 211, 102;\n  --rs-tumblr: 54, 70, 93;\n  --rs-reddit: 255, 69, 0;\n  --rs-spotify: 30, 215, 96;\n  --rs-amazon: 255, 153, 0;\n  --rs-medium: 2, 184, 117;\n  --rs-vimeo: 26, 183, 234;\n  --rs-skype: 0, 175, 240;\n  --rs-dribbble: 234, 76, 137;\n  --rs-slack: 74, 21, 75;\n  --rs-yahoo: 67, 2, 151;\n  --rs-twitch: 100, 65, 164;\n  --rs-discord: 114, 137, 218;\n  --rs-telegram: 0, 136, 204;\n  --rs-google-plus: 219, 68, 55;\n  --rs-messenger: 0, 132, 255;\n  --rs-background: 255, 255, 255;\n  --rs-text: 44, 62, 80;\n  --rs-gray-1: 249, 252, 253;\n  --rs-gray-2: 244, 247, 248;\n  --rs-gray-3: 240, 243, 244;\n  --rs-gray-4: 230, 233, 234; }\n\n.rs-alert {\n  --rs-color: var(--rs-primary); }\n\n.rs-alert {\n  background: rgba(var(--rs-color), 0.1);\n  color: rgba(var(--rs-color), 1);\n  width: 100%;\n  padding: 0px 20px;\n  border-radius: 0px 12px 12px 0px;\n  position: relative;\n  font-size: 0.9rem;\n  z-index: 10;\n  transition: height 0.25s ease;\n  overflow: hidden; }\n  .rs-alert::selection {\n    background: rgba(var(--rs-color), 0.15); }\n  .rs-alert *::selection {\n    background: rgba(var(--rs-color), 0.15); }\n  .rs-alert b {\n    font-weight: 600; }\n  .rs-alert a {\n    color: inherit !important;\n    text-decoration: underline; }\n    .rs-alert a:hover {\n      opacity: 0.6; }\n  .rs-alert::after {\n    content: '';\n    background: rgba(var(--rs-color), 1);\n    left: 0px;\n    top: 0px;\n    width: 2px;\n    height: 100%;\n    position: absolute; }\n  .rs-alert--solid {\n    background: rgba(var(--rs-color), 1);\n    color: #fff; }\n    .rs-alert--solid .rs-alert__icon i {\n      color: #fff; }\n    .rs-alert--solid .rs-alert__icon svg {\n      fill: #fff; }\n    .rs-alert--solid .rs-alert__close {\n      color: #fff;\n      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.15); }\n      .rs-alert--solid .rs-alert__close:hover {\n        transform: translate(0, -2px);\n        box-shadow: 0px 5px 18px 0px rgba(0, 0, 0, 0.15); }\n      .rs-alert--solid .rs-alert__close svg {\n        fill: #fff; }\n    .rs-alert--solid::after {\n      background: rgba(255, 255, 255, 0.4); }\n  .rs-alert--border {\n    background: transparent; }\n    .rs-alert--border::before {\n      border: 1px solid rgba(var(--rs-color), 1);\n      border-left: 0px;\n      width: calc(100% - 2px);\n      content: '';\n      position: absolute;\n      height: calc(100% - 2px);\n      top: 0px;\n      left: 0px;\n      z-index: -1;\n      border-radius: inherit; }\n  .rs-alert--shadow {\n    background: transparent;\n    box-shadow: 0px 4px 15px 0px rgba(var(--rs-color), 0.12); }\n  .rs-alert--gradient {\n    background: rgba(var(--rs-color), 1);\n    color: #fff;\n    border-radius: 12px; }\n    .rs-alert--gradient .rs-alert__icon i {\n      color: #fff; }\n    .rs-alert--gradient .rs-alert__icon svg {\n      fill: #fff; }\n    .rs-alert--gradient .rs-alert__close {\n      color: #fff;\n      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.15); }\n      .rs-alert--gradient .rs-alert__close:hover {\n        transform: translate(0, -2px);\n        box-shadow: 0px 5px 18px 0px rgba(0, 0, 0, 0.15); }\n      .rs-alert--gradient .rs-alert__close svg {\n        fill: #fff; }\n    .rs-alert--gradient::after {\n      display: none; }\n    .rs-alert--gradient::before {\n      background: linear-gradient(30deg, rgba(var(--rs-color), 0) 33%, rgba(var(--rs-color), 1) 100%);\n      filter: hue-rotate(-50deg);\n      width: 100%;\n      content: '';\n      position: absolute;\n      height: 100%;\n      top: 0px;\n      left: 0px;\n      z-index: -1;\n      border-radius: inherit; }\n  .rs-alert--flat {\n    background: rgba(0, 0, 0, 0.03); }\n  .rs-alert--relief {\n    background: rgba(var(--rs-color), 1);\n    color: #fff;\n    border-radius: 12px;\n    box-shadow: 6px 6px 0px 0px rgba(var(--rs-color), 0.3); }\n    .rs-alert--relief .rs-alert__icon i {\n      color: #fff; }\n    .rs-alert--relief .rs-alert__icon svg {\n      fill: #fff; }\n    .rs-alert--relief .rs-alert__close {\n      color: #fff;\n      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.15); }\n      .rs-alert--relief .rs-alert__close:hover {\n        transform: translate(0, -2px);\n        background: rgba(0, 0, 0, 0.2);\n        box-shadow: 0px 5px 18px 0px rgba(0, 0, 0, 0.15); }\n      .rs-alert--relief .rs-alert__close svg {\n        fill: #fff; }\n    .rs-alert--relief::after {\n      display: none; }\n\n.rs-alert__title {\n  font-weight: 600;\n  font-size: 1rem;\n  padding: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  .rs-alert__title--clickHidden {\n    cursor: pointer;\n    padding-right: 0px; }\n  .rs-alert__title ~ .rs-alert__content .rs-alert__content__text {\n    padding-top: 0px; }\n\n.rs-alert__content {\n  transition: height 0.25s ease;\n  overflow: hidden; }\n  .rs-alert__content__text {\n    padding: 15px 15px;\n    padding-top: 20px;\n    padding-bottom: 20px; }\n\n.rs-alert__close {\n  position: absolute;\n  top: 9px;\n  right: 6px;\n  background: transparent;\n  border: 0px;\n  color: rgba(var(--rs-color), 1);\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.25s ease;\n  box-shadow: 0px 0px 0px 0px rgba(var(--rs-color), 0.3);\n  border-radius: 10px;\n  padding: 0px; }\n  .rs-alert__close:hover {\n    transform: translate(0, -2px);\n    box-shadow: 0px 5px 18px 0px rgba(var(--rs-color), 0.3); }\n  .rs-alert__close svg {\n    fill: rgba(var(--rs-color), 1); }\n\n.rs-alert__footer {\n  position: relative;\n  width: 100%;\n  padding: 10px 15px;\n  padding-top: 0px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end; }\n\n.rs-alert__icon {\n  position: absolute;\n  width: 50px;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-left: 2px; }\n  .rs-alert__icon i {\n    font-size: 1.3rem;\n    color: rgba(var(--rs-color), 1); }\n  .rs-alert__icon svg {\n    width: 24px;\n    height: 24px;\n    fill: rgba(var(--rs-color), 1); }\n  .rs-alert__icon ~ .rs-alert__footer {\n    padding-left: 35px; }\n  .rs-alert__icon ~ .rs-alert__content {\n    padding-left: 20px; }\n  .rs-alert__icon ~ .rs-alert__title {\n    padding-left: 35px; }\n\n.rs-alert__progress {\n  width: 100%;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  height: 2px;\n  background: rgba(var(--rs-color), 0.2); }\n  .rs-alert__progress__bar {\n    width: 30%;\n    left: 0px;\n    position: relative;\n    height: 100%;\n    background: rgba(var(--rs-color), 1);\n    transition: all 0.25s ease; }\n\n.rs-alert__pagination {\n  position: relative;\n  padding: 0px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-bottom: 10px; }\n  .rs-alert__pagination span {\n    font-size: 0.8rem;\n    margin: 0px 8px;\n    min-width: 28px;\n    text-align: center; }\n  .rs-alert__pagination button {\n    border: 0px;\n    background: transparent;\n    color: rgba(var(--rs-color), 1);\n    padding: 0px 7px;\n    font-size: 1rem;\n    background: rgba(var(--rs-color), 0.1);\n    border-radius: 8px;\n    transition: all 0.25s ease;\n    cursor: pointer; }\n    .rs-alert__pagination button:hover {\n      background: rgba(var(--rs-color), 1);\n      color: #fff; }\n";
styleInject(css_248z$q);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var css_248z$p = ":root {\n  --rs-primary: 25, 91, 255;\n  --rs-warn: 255, 186, 0;\n  --rs-danger: 255, 71, 87;\n  --rs-success: 70, 201, 58;\n  --rs-dark: 30, 30, 30;\n  --rs-light: 244, 247, 248;\n  --rs-color: 17, 18, 20;\n  --rs-facebook: 59, 89, 153;\n  --rs-twitter: 29, 161, 242;\n  --rs-youtube: 255, 0, 0;\n  --rs-pinterest: 189, 8, 28;\n  --rs-linkedin: 0, 119, 181;\n  --rs-snapchat: 255, 252, 0;\n  --rs-whatsapp: 37, 211, 102;\n  --rs-tumblr: 54, 70, 93;\n  --rs-reddit: 255, 69, 0;\n  --rs-spotify: 30, 215, 96;\n  --rs-amazon: 255, 153, 0;\n  --rs-medium: 2, 184, 117;\n  --rs-vimeo: 26, 183, 234;\n  --rs-skype: 0, 175, 240;\n  --rs-dribbble: 234, 76, 137;\n  --rs-slack: 74, 21, 75;\n  --rs-yahoo: 67, 2, 151;\n  --rs-twitch: 100, 65, 164;\n  --rs-discord: 114, 137, 218;\n  --rs-telegram: 0, 136, 204;\n  --rs-google-plus: 219, 68, 55;\n  --rs-messenger: 0, 132, 255;\n  --rs-background: 255, 255, 255;\n  --rs-text: 44, 62, 80;\n  --rs-gray-1: 249, 252, 253;\n  --rs-gray-2: 244, 247, 248;\n  --rs-gray-3: 240, 243, 244;\n  --rs-gray-4: 230, 233, 234; }\n\n.rs-icon-close {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  transition: all 0.25s ease; }\n  .rs-icon-close:before {\n    background: rgba(var(--rs-color), 1);\n    content: '';\n    position: absolute;\n    width: 16px;\n    transform: rotate(-45deg);\n    height: 2px;\n    border-radius: 2px;\n    transition: all 0.3s ease; }\n  .rs-icon-close:after {\n    background: rgba(var(--rs-color), 1);\n    content: '';\n    position: absolute;\n    width: 16px;\n    height: 2px;\n    transform: rotate(45deg);\n    border-radius: 2px;\n    transition: all 0.3s ease; }\n  .rs-icon-close.rs-icon-hover-less:hover:after {\n    width: 12px;\n    transform: rotate(180deg); }\n  .rs-icon-close.rs-icon-hover-less:hover:before {\n    width: 12px;\n    transform: rotate(180deg); }\n\n.rs-icon-plus {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  transition: all 0.25s ease;\n  cursor: pointer; }\n  .rs-icon-plus:before {\n    background: rgba(var(--rs-color), 1);\n    content: '';\n    position: absolute;\n    width: 14px;\n    transform: rotate(0deg);\n    height: 2px;\n    border-radius: 2px;\n    transition: all 0.3s ease; }\n  .rs-icon-plus:after {\n    background: rgba(var(--rs-color), 1);\n    content: '';\n    position: absolute;\n    width: 14px;\n    height: 2px;\n    transform: rotate(90deg);\n    border-radius: 2px;\n    transition: all 0.4s ease; }\n  .rs-icon-plus:hover:not(.less) {\n    transform: rotate(-90deg); }\n  .rs-icon-plus.less:hover {\n    transform: scale(0.75); }\n  .rs-icon-plus.less:after {\n    transform: rotate(180deg); }\n\n.rs-icon-check {\n  width: 23px;\n  height: 23px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.25s ease;\n  border-radius: inherit; }\n  .rs-icon-check span {\n    transform: rotate(45deg);\n    display: block;\n    position: relative;\n    width: 8px;\n    height: 13px;\n    margin-top: -4px; }\n    .rs-icon-check span .line1 {\n      background: transparent;\n      content: '';\n      position: absolute;\n      height: 2px;\n      border-radius: 2px;\n      transition: all 0.2s ease;\n      border-radius: 5px;\n      z-index: 100;\n      width: 8px;\n      bottom: 0px; }\n      .rs-icon-check span .line1:after {\n        content: '';\n        position: absolute;\n        width: 0%;\n        height: 2px;\n        background: #fff;\n        transition: all 0.25s ease;\n        border-radius: 5px 0px 0px 5px; }\n    .rs-icon-check span .line2 {\n      bottom: 0px;\n      right: 0rem;\n      z-index: 100;\n      border-radius: 5px;\n      background: transparent;\n      content: '';\n      position: absolute;\n      height: 13px;\n      border-radius: 5px;\n      transition: all 0.2s ease;\n      width: 2px; }\n      .rs-icon-check span .line2:after {\n        content: '';\n        position: absolute;\n        width: 2px;\n        height: 0%;\n        background: #fff;\n        transition: all 0.25s ease;\n        bottom: 0px;\n        border-radius: 5px 5px 0px 0px; }\n  .rs-icon-check.active:before {\n    width: 8px; }\n  .rs-icon-check.active:after {\n    width: 4px; }\n  .rs-icon-check.indeterminate span {\n    transform: rotate(0);\n    height: auto;\n    margin: 0px;\n    width: auto; }\n    .rs-icon-check.indeterminate span:after {\n      position: relative;\n      content: '';\n      width: 10px;\n      height: 2px;\n      background: #fff;\n      display: block; }\n    .rs-icon-check.indeterminate span .line1 {\n      transform: rotate(-45deg);\n      bottom: 0px;\n      right: -1px;\n      opacity: 0;\n      display: none; }\n    .rs-icon-check.indeterminate span .line2 {\n      right: 0px !important;\n      bottom: -0.14rem !important;\n      transform: rotate(45deg) !important;\n      transition: all 0.25s ease !important;\n      height: 11px !important;\n      display: none; }\n\n.rs-icon-arrow {\n  pointer-events: none;\n  width: 7px;\n  height: 7px;\n  transform: rotate(-135deg);\n  transition: all 0.25s ease;\n  transform-origin: center; }\n  .rs-icon-arrow:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background: rgba(var(--rs-text), 1);\n    position: absolute;\n    display: block;\n    top: 0px; }\n  .rs-icon-arrow:before {\n    top: 0px;\n    content: '';\n    width: 1px;\n    height: 100%;\n    background: rgba(var(--rs-text), 1);\n    position: absolute;\n    display: block; }\n";
styleInject(css_248z$p);

const RsIconClose = (_a) => {
    var props = __rest(_a, []);
    const { hover } = props;
    const RsIconCloseClasses = classnames('rs-icon-close', [
        `rs-icon-hover-${hover}`
    ]);
    return React__default["default"].createElement("i", { className: RsIconCloseClasses });
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;

var reactIs_development = {};

/** @license React v16.13.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development.AsyncMode = AsyncMode;
reactIs_development.ConcurrentMode = ConcurrentMode;
reactIs_development.ContextConsumer = ContextConsumer;
reactIs_development.ContextProvider = ContextProvider;
reactIs_development.Element = Element;
reactIs_development.ForwardRef = ForwardRef;
reactIs_development.Fragment = Fragment;
reactIs_development.Lazy = Lazy;
reactIs_development.Memo = Memo;
reactIs_development.Portal = Portal;
reactIs_development.Profiler = Profiler;
reactIs_development.StrictMode = StrictMode;
reactIs_development.Suspense = Suspense;
reactIs_development.isAsyncMode = isAsyncMode;
reactIs_development.isConcurrentMode = isConcurrentMode;
reactIs_development.isContextConsumer = isContextConsumer;
reactIs_development.isContextProvider = isContextProvider;
reactIs_development.isElement = isElement;
reactIs_development.isForwardRef = isForwardRef;
reactIs_development.isFragment = isFragment;
reactIs_development.isLazy = isLazy;
reactIs_development.isMemo = isMemo;
reactIs_development.isPortal = isPortal;
reactIs_development.isProfiler = isProfiler;
reactIs_development.isStrictMode = isStrictMode;
reactIs_development.isSuspense = isSuspense;
reactIs_development.isValidElementType = isValidElementType;
reactIs_development.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs.exports = reactIs_production_min;
} else {
  reactIs.exports = reactIs_development;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$3 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$3;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$2 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactIs$1 = reactIs.exports;
var assign = objectAssign;

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
var checkPropTypes = checkPropTypes_1;

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs$1.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs.exports;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = factoryWithThrowingShims();
}

var PropTypes = propTypes.exports;

/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass$1(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

var config = {
  disabled: false
};

var timeoutsShape = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
  enter: PropTypes.number,
  exit: PropTypes.number,
  appear: PropTypes.number
}).isRequired]) : null;
var classNamesShape = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
  enter: PropTypes.string,
  exit: PropTypes.string,
  active: PropTypes.string
}), PropTypes.shape({
  enter: PropTypes.string,
  enterDone: PropTypes.string,
  enterActive: PropTypes.string,
  exit: PropTypes.string,
  exitDone: PropTypes.string,
  exitActive: PropTypes.string
})]) : null;

var TransitionGroupContext = React__default["default"].createContext(null);

var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM__default["default"].findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : ReactDOM__default["default"].findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM__default["default"].findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children;
        _this$props.in;
        _this$props.mountOnEnter;
        _this$props.unmountOnExit;
        _this$props.appear;
        _this$props.enter;
        _this$props.exit;
        _this$props.timeout;
        _this$props.addEndListener;
        _this$props.onEnter;
        _this$props.onEntering;
        _this$props.onEntered;
        _this$props.onExit;
        _this$props.onExiting;
        _this$props.onExited;
        _this$props.nodeRef;
        var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      React__default["default"].createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : React__default["default"].cloneElement(React__default["default"].Children.only(children), childProps))
    );
  };

  return Transition;
}(React__default["default"].Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: PropTypes.shape({
    current: typeof Element === 'undefined' ? PropTypes.any : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return PropTypes.instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func
} : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition$1 = Transition;

var _addClass = function addClass$1(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return addClass(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return removeClass$1(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props;
        _this$props.classNames;
        var props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);

    return /*#__PURE__*/React__default["default"].createElement(Transition$1, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(React__default["default"].Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, Transition$1.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes.func
}) : {};
var CSSTransition$1 = CSSTransition;

const isColor = (color) => {
    const rsColors = [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'dark',
        'light',
        'warn',
        // social colors
        'facebook',
        'twitter',
        'youtube',
        'pinterest',
        'linkedin',
        'snapchat',
        'whatsapp',
        'tumblr',
        'reddit',
        'spotify',
        'amazon',
        'medium',
        'vimeo',
        'skype',
        'dribbble',
        'slack',
        'yahoo',
        'twitch',
        'discord',
        'telegram',
        'google-plus',
        'messenger'
    ];
    return rsColors.includes(color);
};
const setVar = (propertyName, value, el) => {
    if (!el) {
        document.documentElement.style.setProperty(`--rs-${propertyName}`, value);
    }
    else {
        if (el.nodeName !== '#comment') {
            el.style.setProperty(`--rs-${propertyName}`, value);
        }
    }
};
const setColor = (colorName, color, el, addClass) => {
    function hexToRgb(hex) {
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, (m, r, g, b) => {
            return r + r + g + g + b + b;
        });
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        console.log(result);
        return result
            ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            }
            : null;
    }
    const isRGB = /^(rgb|rgba)/.test(color);
    const isRGBNumbers = /^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(color);
    const isHEX = /^(#)/.test(color);
    let newColor;
    if (color === 'dark') {
        el.classList.add('rs-component-dark');
    }
    if (isRGB) {
        const arrayColor = color.replace(/[rgba()]/g, '').split(',');
        newColor = `${arrayColor[0]},${arrayColor[1]},${arrayColor[2]}`;
        setVar(colorName, newColor, el);
        if (addClass) {
            el.classList.add('rs-change-color');
        }
    }
    else if (isHEX) {
        const rgb = hexToRgb(color);
        newColor = `${rgb.r},${rgb.g},${rgb.b}`;
        setVar(colorName, newColor, el);
        if (addClass) {
            el.classList.add('rs-change-color');
        }
    }
    else if (isColor(color)) {
        const style = getComputedStyle(document.body);
        newColor = style.getPropertyValue('--rs-' + color);
        setVar(colorName, newColor, el);
        if (addClass) {
            el.classList.add('rs-change-color');
        }
    }
    else if (isRGBNumbers) {
        setVar(colorName, color, el);
        if (addClass) {
            el.classList.add('rs-change-color');
        }
    }
};
// TODO: DRY CODE PLEASE.
const setComponentColor = (color) => {
    function hexToRgb(hex) {
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, (m, r, g, b) => {
            return r + r + g + g + b + b;
        });
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            }
            : null;
    }
    const isRGB = /^(rgb|rgba)/.test(color);
    const isRGBNumbers = /^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(color);
    const isHEX = /^(#)/.test(color);
    let newColor;
    if (isRGB) {
        const arrayColor = color.replace(/[rgba()]/g, '').split(',');
        newColor = `${arrayColor[0]},${arrayColor[1]},${arrayColor[2]}`;
        return newColor;
    }
    else if (isHEX) {
        const rgb = hexToRgb(color);
        newColor = `${rgb.r},${rgb.g},${rgb.b}`;
        return newColor;
    }
    else if (isColor(color)) {
        const style = getComputedStyle(document.body);
        newColor = style.getPropertyValue('--rs-' + color);
        return newColor;
    }
    else if (isRGBNumbers) {
        return color;
    }
};
let lastId = 0;
const generateID = (prefix = 'id') => {
    lastId++;
    return `${prefix}${lastId}`;
};
const setTooltipCords = (element, parent, position) => {
    const cords = parent.getBoundingClientRect();
    const x = cords.x + 8;
    const y = cords.y;
    const w = cords.width;
    const h = cords.height;
    const style = element.style;
    const scrollTop = window.pageYOffset;
    const elTop = element.clientHeight + cords.y + scrollTop;
    const rootTop = scrollTop + window.innerHeight;
    if (x + w + 10 + element.getBoundingClientRect().width > window.innerWidth &&
        position === 'right') {
        position = 'left';
        element.classList.remove('right');
        element.classList.add('left');
    }
    if (x - 10 < element.getBoundingClientRect().width && position === 'left') {
        position = 'top';
        element.classList.remove('left');
        element.classList.add('top');
    }
    if (rootTop - elTop < 30 || position === 'top') {
        // console.log('hola mundo')
        style.top = `${y + scrollTop - element.clientHeight - 8}px`;
        const left = x + (w - element.getBoundingClientRect().width) / 2;
        if (left + element.getBoundingClientRect().width < window.innerWidth) {
            if (left > 0) {
                style.left = `${left}px`;
            }
            else {
                style.left = '10px';
                element.classList.add('notArrow');
            }
        }
        else {
            style.left = 'auto';
            style.right = '10px';
            element.classList.add('notArrow');
        }
    }
    else if (position === 'bottom') {
        style.top = `${y + scrollTop + h + 8}px`;
        const left = x + (w - element.getBoundingClientRect().width) / 2;
        if (left + element.getBoundingClientRect().width < window.innerWidth) {
            if (left > 0) {
                style.left = `${left}px`;
            }
            else {
                style.left = '10px';
                element.classList.add('notArrow');
            }
        }
        else {
            style.left = 'auto';
            style.right = '10px';
            element.classList.add('notArrow');
        }
    }
    else if (position === 'left') {
        style.top = `${y +
            scrollTop +
            (h - element.getBoundingClientRect().height) / 2}px`;
        style.left = `${x - element.getBoundingClientRect().width - 8}px`;
    }
    else if (position === 'right') {
        style.top = `${y +
            scrollTop +
            (h - element.getBoundingClientRect().height) / 2}px`;
        style.left = `${x + w + 8}px`;
    }
};

class RsAlert extends React__default["default"].Component {
    constructor(props) {
        super(props);
        this.handleClickNextPage = this.handleClickNextPage.bind(this);
        this.handleClickPrevPage = this.handleClickPrevPage.bind(this);
        this.state = {
            page: 0,
            totalPages: 0,
        };
        this.alertRef = React__default["default"].createRef();
        this.contentRef = React__default["default"].createRef();
    }
    // TODO: WRITE DRY CODE HERE PLEASE.
    componentDidMount() {
        if (this.alertRef && this.contentRef && this.props.active) {
            setTimeout(() => {
                const el = this.alertRef.current;
                el.style.height = el.scrollHeight - 1 + "px";
                const content = this.contentRef.current;
                content.style.minHeight = content.scrollHeight + "px";
            }, 0);
        }
        else if (typeof this.props.hiddenContent === "boolean") {
            setTimeout(() => {
                const content = this.contentRef.current;
                content.style.minHeight = 0 + "px";
                content.style.height = content.scrollHeight - 1 + "px";
            }, 0);
        }
        if (this.props.pagination) {
            this.setState({ page: 1, totalPages: this.props.pagination.length });
        }
    }
    handleClickNextPage() {
        const { page, totalPages } = this.state;
        if (page < totalPages) {
            this.setState({ page: page + 1 });
        }
    }
    handleClickPrevPage() {
        const { page } = this.state;
        if (page > 1) {
            this.setState({ page: page - 1 });
        }
    }
    leave(el) {
        el.style.minHeight = "0px";
        el.style.height = "0px";
    }
    beforeEnter(el) {
        el.style.height = 0;
    }
    enter(el) {
        let h = el.scrollHeight;
        el.style.height = h - 1 + "px";
    }
    render() {
        const { active, color, solid, border, shadow, relief, gradient, title, footer, children, icon, closable, hiddenContent = null, toggleHiddenContent, pagination, } = this.props;
        const { page, totalPages } = this.state;
        const alertClasses = classnames("rs-alert", { "rs-alert--solid": solid }, { "rs-alert--border": border }, { "rs-alert--shadow": shadow }, { "rs-alert--relief": relief }, { "rs-alert--pages": pagination }, { "rs-alert--gradient": gradient });
        const titleClasses = classnames("rs-alert__title", {
            "rs-alert__title--clickHidden": typeof hiddenContent === "boolean",
        });
        return (React__default["default"].createElement(Transition$1, { component: "span", in: active, timeout: 500, onEnter: (e) => this.beforeEnter(e), onEntering: (e) => this.enter(e), onExit: (e) => this.leave(e) },
            React__default["default"].createElement("div", { className: alertClasses, ref: this.alertRef, style: {
                    "--rs-color": setComponentColor(color || "primary"),
                } },
                React__default["default"].createElement(React__default["default"].Fragment, null,
                    icon ? React__default["default"].createElement("div", { className: "rs-alert__icon" }, icon) : null,
                    React__default["default"].createElement("div", { className: titleClasses, onClick: toggleHiddenContent }, title),
                    closable ? (React__default["default"].createElement("button", { className: "rs-alert__close" },
                        " ",
                        React__default["default"].createElement(RsIconClose, { hover: "less" }))) : null,
                    React__default["default"].createElement(Transition$1, { component: "span", in: !hiddenContent, timeout: 500, onEnter: (e) => this.beforeEnter(e), onEntering: (e) => this.enter(e), onExit: (e) => this.leave(e) },
                        React__default["default"].createElement("div", { className: "rs-alert__content", ref: this.contentRef },
                            React__default["default"].createElement("div", { className: "rs-alert__content__text" }, pagination ? pagination[page - 1] : children))),
                    footer ? React__default["default"].createElement("div", { className: "rs-alert__footer" }, footer) : null,
                    pagination ? (React__default["default"].createElement("div", { className: "rs-alert__pagination" },
                        React__default["default"].createElement("button", { onClick: this.handleClickPrevPage },
                            " ",
                            "<",
                            " "),
                        React__default["default"].createElement("span", null, `${page} / ${totalPages}`),
                        React__default["default"].createElement("button", { onClick: this.handleClickNextPage }, ">"))) : null))));
    }
}

var css_248z$o = ":root {\n  --rs-primary: 25, 91, 255;\n  --rs-warn: 255, 186, 0;\n  --rs-danger: 255, 71, 87;\n  --rs-success: 70, 201, 58;\n  --rs-dark: 30, 30, 30;\n  --rs-light: 244, 247, 248;\n  --rs-color: 17, 18, 20;\n  --rs-facebook: 59, 89, 153;\n  --rs-twitter: 29, 161, 242;\n  --rs-youtube: 255, 0, 0;\n  --rs-pinterest: 189, 8, 28;\n  --rs-linkedin: 0, 119, 181;\n  --rs-snapchat: 255, 252, 0;\n  --rs-whatsapp: 37, 211, 102;\n  --rs-tumblr: 54, 70, 93;\n  --rs-reddit: 255, 69, 0;\n  --rs-spotify: 30, 215, 96;\n  --rs-amazon: 255, 153, 0;\n  --rs-medium: 2, 184, 117;\n  --rs-vimeo: 26, 183, 234;\n  --rs-skype: 0, 175, 240;\n  --rs-dribbble: 234, 76, 137;\n  --rs-slack: 74, 21, 75;\n  --rs-yahoo: 67, 2, 151;\n  --rs-twitch: 100, 65, 164;\n  --rs-discord: 114, 137, 218;\n  --rs-telegram: 0, 136, 204;\n  --rs-google-plus: 219, 68, 55;\n  --rs-messenger: 0, 132, 255;\n  --rs-background: 255, 255, 255;\n  --rs-text: 44, 62, 80;\n  --rs-gray-1: 249, 252, 253;\n  --rs-gray-2: 244, 247, 248;\n  --rs-gray-3: 240, 243, 244;\n  --rs-gray-4: 230, 233, 234; }\n\n.rs-avatar-content {\n  --rs-color: var(--rs-gray-2);\n  --rs-badge: var(--rs-primary); }\n\n.rs-avatar-content {\n  border-radius: 35%;\n  z-index: 1;\n  width: 44px;\n  height: 44px;\n  position: relative;\n  transition: all 0.25s ease;\n  user-select: none; }\n  .rs-avatar-content.rs-change-color-badge .rs-avatar__badge .rs-avatar__points__point {\n    background: rgba(var(--rs-background), 1); }\n  .rs-avatar-content.rs-change-color:hover .rs-avatar {\n    box-shadow: inset 0px 0px 40px 0px rgba(0, 0, 0, 0.1); }\n  .rs-avatar-content:hover .rs-avatar {\n    box-shadow: inset 0px 0px 40px 0px rgba(0, 0, 0, 0.04); }\n  .rs-avatar-content:hover img {\n    transform: scale(1.1); }\n  .rs-avatar-content--hasIcons {\n    margin-right: 20px; }\n  .rs-avatar-content--hidden {\n    display: none; }\n  .rs-avatar-content--circle {\n    border-radius: 50% !important; }\n    .rs-avatar-content--circle .rs-avatar__badge {\n      right: -2px;\n      bottom: -2px; }\n      .rs-avatar-content--circle .rs-avatar__badge.top-right {\n        top: -2px;\n        bottom: auto; }\n      .rs-avatar-content--circle .rs-avatar__badge.top-left {\n        top: -2px;\n        left: -2px;\n        bottom: auto;\n        right: auto; }\n      .rs-avatar-content--circle .rs-avatar__badge.bottom-left {\n        left: -2px;\n        right: auto; }\n  .rs-avatar-content--square {\n    border-radius: 0% !important; }\n  .rs-avatar-content.history--gradient:after {\n    background-image: linear-gradient(40deg, #f99b4a 0%, #df376b 74%, #c52d91 74%) !important; }\n  .rs-avatar-content.history .rs-avatar {\n    width: calc(100% - 4px);\n    height: calc(100% - 4px);\n    border: 2px solid rgba(var(--rs-background), 1);\n    margin: 2px; }\n  .rs-avatar-content.history:after {\n    content: '';\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    border-radius: inherit;\n    background-color: #ffe53b;\n    z-index: -1;\n    background: rgba(var(--rs-color), 1); }\n  .rs-avatar-content.rs-change-color .rs-avatar {\n    color: rgba(var(--rs-background), 1); }\n  .rs-avatar-content.rs-change-color .rs-avatar__points .rs-avatar__points__point {\n    background: rgba(var(--rs-background), 1); }\n\n.rs-avatar {\n  background: rgba(var(--rs-color), 1);\n  color: #fff;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(var(--rs-text), 1);\n  border-radius: inherit;\n  width: 100%;\n  height: 100%;\n  transition: all 0.25s ease;\n  box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.05); }\n  .rs-avatar i {\n    font-size: 1.4rem; }\n  .rs-avatar img {\n    width: 100%;\n    height: auto;\n    display: block;\n    transition: all 0.25s ease;\n    border-radius: inherit; }\n  .rs-avatar__loading {\n    position: absolute;\n    width: 100%;\n    top: 0px;\n    left: 0px;\n    background: rgba(0, 0, 0, 0.5);\n    z-index: 100;\n    height: 100%;\n    border-radius: inherit;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .rs-avatar__loading__animate {\n      height: 60%;\n      width: 60%;\n      border-radius: 50%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      position: relative; }\n      .rs-avatar__loading__animate:after {\n        box-sizing: border-box;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border: 2px solid #fff;\n        border-radius: inherit;\n        border-top: 2px solid transparent;\n        border-left: 2px solid transparent;\n        border-right: 2px solid transparent;\n        animation: rotateInputLoading 0.8s ease infinite;\n        top: 0px;\n        content: ''; }\n      .rs-avatar__loading__animate:before {\n        box-sizing: border-box;\n        top: 0px;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border: 2px dashed #fff;\n        border-radius: inherit;\n        border-top: 2px solid transparent;\n        border-left: 2px solid transparent;\n        border-right: 2px solid transparent;\n        animation: rotateInputLoading 0.8s linear infinite;\n        opacity: 0.2;\n        content: ''; }\n  .rs-avatar--letter--3 {\n    font-size: 0.9rem; }\n  .rs-avatar--letter--4 {\n    font-size: 0.8rem; }\n  .rs-avatar--letter--5 {\n    font-size: 0.7rem; }\n  .rs-avatar--letter--6 {\n    font-size: 0.6rem; }\n  .rs-avatar__badge {\n    position: absolute;\n    width: 13px;\n    height: 13px;\n    background: rgba(var(--rs-badge), 1);\n    border-radius: 50%;\n    right: -4px;\n    bottom: -4px;\n    font-size: 0.6rem;\n    font-weight: bold;\n    z-index: 200;\n    color: rgba(var(--rs-text), 1); }\n    .rs-avatar__badge.isSlot, .rs-avatar__badge.writing {\n      width: auto;\n      height: auto;\n      border-radius: 7px;\n      min-width: 18px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: rgba(var(--rs-background), 1);\n      line-height: 0.9rem;\n      padding: 0px 3px;\n      min-height: 18px; }\n    .rs-avatar__badge.top-right {\n      top: -4px;\n      bottom: auto; }\n    .rs-avatar__badge.top-left {\n      top: -4px;\n      left: -4px;\n      bottom: auto;\n      right: auto; }\n    .rs-avatar__badge.bottom-left {\n      left: -4px;\n      right: auto; }\n  .rs-avatar__points {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .rs-avatar__points__point {\n      width: 5px;\n      height: 5px;\n      background: rgba(var(--rs-text), 1);\n      margin: 0px 2px;\n      border-radius: 50%; }\n      .rs-avatar__points__point:nth-child(1) {\n        animation: point 1.2s ease infinite; }\n      .rs-avatar__points__point:nth-child(2) {\n        animation: point 1.2s ease infinite 0.4s; }\n      .rs-avatar__points__point:nth-child(3) {\n        animation: point 1.2s ease infinite 0.8s; }\n  .rs-avatar__latest {\n    background: rgba(0, 0, 0, 0.5);\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: 300;\n    border-radius: inherit;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #fff;\n    font-weight: 600;\n    user-select: none; }\n  .rs-avatar__icons {\n    position: absolute;\n    width: auto;\n    height: auto;\n    min-height: 90%;\n    background: rgba(var(--rs-gray-3), 1);\n    top: 50%;\n    transform: translate(0, -50%);\n    right: -20px;\n    padding: 3px;\n    padding-left: 5px;\n    display: flex;\n    align-items: flex-end;\n    justify-content: center;\n    flex-direction: column;\n    z-index: -1;\n    border-radius: 5px 5px 5px 5px;\n    font-size: 1rem; }\n    .rs-avatar__icons i {\n      cursor: pointer;\n      transition: all 0.25s ease; }\n      .rs-avatar__icons i:hover {\n        opacity: 0.7; }\n\n@keyframes point {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0.4;\n    transform: scale(0.5); }\n  100% {\n    opacity: 1; } }\n\n@keyframes rotateInputLoading {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n";
styleInject(css_248z$o);

const RsAvatar = (_a) => {
    var props = __rest(_a, []);
    const avatarRef = React__default["default"].createRef();
    const [max, setMax] = React.useState(0);
    const [elIndex, setIndex] = React.useState(0);
    const [avatarLength, setAvatarLength] = React.useState(0);
    const [group, setGroup] = React.useState(false);
    const { history, historyGradient, circle, square, icons, size, text, children, loading, badge, badgePosition, badgeColor, writing, icon, color, pointer, } = props;
    const getText = (text) => {
        const trimmedText = text.trim();
        let getLetters = [trimmedText];
        if (trimmedText.length > 5) {
            getLetters = trimmedText.split(/\s/g).map((item) => {
                return item[0];
            });
        }
        return getLetters;
    };
    const getTextLength = (text) => {
        if (text && text.length <= 5) {
            return text.length;
        }
    };
    React.useEffect(() => {
        const el = avatarRef.current;
        if (el && el.parentNode.className.includes("rs-avatar__group")) {
            setGroup(true);
            setIndex(Array.from(el.parentNode.children).indexOf(avatarRef.current));
            setMax(el.parentNode.getAttribute("data-max"));
            setAvatarLength(el.parentNode.childElementCount);
        }
    }, [avatarRef]);
    const avatarContentClasses = classnames("rs-avatar-content", { history: history }, { "history--gradient": historyGradient }, { "rs-avatar-content--circle": circle }, { "rs-avatar-content--square": square }, { "rs-avatar-content--hidden": group && elIndex > max - 1 }, { "rs-avatar-content--latest": group && elIndex === max - 1 }, { "rs-avatar-cotnent--hasIcons": icons }, { [`rs-avatar-content--size--${size}`]: size });
    const avatarClasses = classnames("rs-avatar", {
        [`rs-avatar--letter--${getTextLength(text)}`]: text,
    });
    const badgeClasses = classnames("rs-avatar__badge", { isSlot: typeof badge !== "boolean" }, { writing: writing }, badgePosition);
    return (React__default["default"].createElement("div", { ref: avatarRef, className: avatarContentClasses, style: {
            "--rs-color": setComponentColor(color || ""),
            "--rs-badge": setComponentColor(badgeColor || "primary"),
            width: `${size}px`,
            height: `${size}px`,
            cursor: pointer && "pointer",
        } },
        loading ? (React__default["default"].createElement("div", { className: "rs-avatar__loading" },
            React__default["default"].createElement("div", { className: "rs-avatar__loading__animate" }))) : null,
        React__default["default"].createElement("div", { className: avatarClasses },
            text ? getText(text) : null,
            children),
        badge ? (React__default["default"].createElement("div", { className: badgeClasses },
            " ",
            writing ? (React__default["default"].createElement("div", { className: "rs-avatar__points" },
                React__default["default"].createElement("div", { className: "rs-avatar__points__point" }),
                React__default["default"].createElement("div", { className: "rs-avatar__points__point" }),
                React__default["default"].createElement("div", { className: "rs-avatar__points__point" }))) : (badge))) : null,
        group && elIndex === max - 1 ? (React__default["default"].createElement("div", { className: "rs-avatar__latest" },
            `+${avatarLength - elIndex - 1}`,
            " ")) : null,
        icon ? React__default["default"].createElement("div", { className: "rs-avatar__icons" },
            " ",
            icon) : null));
};

var css_248z$n = ".rs-avatar__group {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-left: 18px; }\n  .rs-avatar__group.float {\n    flex-wrap: wrap;\n    align-items: flex-start;\n    justify-content: flex-start;\n    padding-left: 0px; }\n    .rs-avatar__group.float .rs-avatar-content {\n      position: relative;\n      z-index: 2;\n      border: 3px solid rgba(var(--rs-background), 1);\n      margin: 0px; }\n  .rs-avatar__group:not(.float) .rs-avatar-content {\n    margin-left: -18px;\n    position: relative;\n    z-index: 2; }\n    .rs-avatar__group:not(.float) .rs-avatar-content:hover .rs-avatar {\n      box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1); }\n    .rs-avatar__group:not(.float) .rs-avatar-content:hover img {\n      transform: scale(1); }\n    .rs-avatar__group:not(.float) .rs-avatar-content .rs-avatar__latest {\n      width: calc(100% - 6px);\n      height: calc(100% - 6px);\n      margin: 3px; }\n    .rs-avatar__group:not(.float) .rs-avatar-content:not(.rs-change-color) .rs-avatar {\n      background: rgba(var(--rs-background), 1); }\n    .rs-avatar__group:not(.float) .rs-avatar-content img {\n      width: calc(100% - 6px); }\n    .rs-avatar__group:not(.float) .rs-avatar-content:hover:not(.rs-avatar-content--hasIcons) {\n      transform: translate(-10px); }\n      .rs-avatar__group:not(.float) .rs-avatar-content:hover:not(.rs-avatar-content--hasIcons) .rs-avatar {\n        transform: scale(1); }\n    .rs-avatar__group:not(.float) .rs-avatar-content--hasIcons {\n      margin-right: 0px; }\n      .rs-avatar__group:not(.float) .rs-avatar-content--hasIcons:hover {\n        transform: translate(-34px) !important; }\n";
styleInject(css_248z$n);

const RsAvatarGroup = (_a) => {
    var props = __rest(_a, []);
    const { max, float, children } = props;
    const avatarGroupClasses = classnames('rs-avatar__group', { float: float });
    return (React__default["default"].createElement("div", { className: avatarGroupClasses, "data-max": max }, children));
};

var css_248z$m = ":root {\n  --rs-primary: 25, 91, 255;\n  --rs-warn: 255, 186, 0;\n  --rs-danger: 255, 71, 87;\n  --rs-success: 70, 201, 58;\n  --rs-dark: 30, 30, 30;\n  --rs-light: 244, 247, 248;\n  --rs-color: 17, 18, 20;\n  --rs-facebook: 59, 89, 153;\n  --rs-twitter: 29, 161, 242;\n  --rs-youtube: 255, 0, 0;\n  --rs-pinterest: 189, 8, 28;\n  --rs-linkedin: 0, 119, 181;\n  --rs-snapchat: 255, 252, 0;\n  --rs-whatsapp: 37, 211, 102;\n  --rs-tumblr: 54, 70, 93;\n  --rs-reddit: 255, 69, 0;\n  --rs-spotify: 30, 215, 96;\n  --rs-amazon: 255, 153, 0;\n  --rs-medium: 2, 184, 117;\n  --rs-vimeo: 26, 183, 234;\n  --rs-skype: 0, 175, 240;\n  --rs-dribbble: 234, 76, 137;\n  --rs-slack: 74, 21, 75;\n  --rs-yahoo: 67, 2, 151;\n  --rs-twitch: 100, 65, 164;\n  --rs-discord: 114, 137, 218;\n  --rs-telegram: 0, 136, 204;\n  --rs-google-plus: 219, 68, 55;\n  --rs-messenger: 0, 132, 255;\n  --rs-background: 255, 255, 255;\n  --rs-text: 44, 62, 80;\n  --rs-gray-1: 249, 252, 253;\n  --rs-gray-2: 244, 247, 248;\n  --rs-gray-3: 240, 243, 244;\n  --rs-gray-4: 230, 233, 234; }\n\n.rs-ripple-content {\n  --rs-color: var(--rs-background);\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  width: 100%;\n  pointer-events: none;\n  overflow: hidden;\n  height: 100%;\n  top: 0px;\n  right: 0px;\n  border-radius: inherit;\n  z-index: -1; }\n  .rs-ripple-content .rs-ripple {\n    width: 0px;\n    height: 0px;\n    border-radius: 50%;\n    opacity: 0;\n    position: absolute;\n    transform: translate(-50%, -50%);\n    transition: all 0.5s ease;\n    background: radial-gradient(circle, rgba(var(--rs-color), 0.05), rgba(var(--rs-color), 0.6)); }\n    .rs-ripple-content .rs-ripple--solid {\n      background: rgba(var(--rs-color), 1);\n      opacity: 1; }\n  .rs-ripple-content .rs-ripple-invert {\n    width: 0px;\n    height: 0px;\n    border-radius: 50%;\n    opacity: 0;\n    position: absolute;\n    transform: translate(-50%, -50%);\n    transition: all 0.5s ease;\n    background-image: radial-gradient(circle, rgba(var(--rs-color), 0.5), rgba(var(--rs-color), 0)); }\n  .rs-ripple-content .rs-ripple-cut-1 {\n    width: 0px;\n    height: 0px;\n    opacity: 0;\n    position: absolute;\n    transform: translate(-100%, -50%) skew(20deg);\n    transition: all 0.6s ease;\n    background-image: linear-gradient(270deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%); }\n  .rs-ripple-content .rs-ripple-cut-2 {\n    width: 0px;\n    height: 0px;\n    opacity: 0;\n    position: absolute;\n    transform: translate(0%, -50%) skew(20deg);\n    transition: all 0.6s ease;\n    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%); }\n";
styleInject(css_248z$m);

const ripple = (evt, color = '', solid = false) => {
    const el = evt.currentTarget;
    const offset = el.getBoundingClientRect();
    const x = evt.clientX - offset.left;
    const y = evt.clientY - offset.top;
    let time = 0.6;
    if (el.clientWidth > 150) {
        time = 1.2;
    }
    const effectContent = document.createElement('div');
    effectContent.className = 'rs-ripple-content';
    const effect = document.createElement('div');
    setColor('color', color, effectContent);
    effect.className = 'rs-ripple';
    if (solid) {
        effect.classList.add('rs-ripple--solid');
        setColor('color', color || 'primary', effectContent);
    }
    effect.style.transition = `all ${time}s ease`;
    effect.style.left = `${x}px`;
    effect.style.top = `${y}px`;
    effectContent.appendChild(effect);
    el.appendChild(effectContent);
    effect.style.width = `${el.clientWidth * 2.5}px`;
    effect.style.height = `${el.clientWidth * 2.5}px`;
    effect.style.opacity = `1`;
    let noTime = false;
    setTimeout(() => {
        noTime = true;
    }, 300);
    function removeEffect(evt) {
        effect.style.transition = `all 0.${time * 600}s ease`;
        setTimeout(() => {
            effect.style.opacity = `0`;
            setTimeout(() => {
                el.removeChild(effectContent);
            }, time * 300);
        }, noTime ? 0 : time * 400);
        evt.target.removeEventListener('mouseup', removeEffect);
        evt.target.removeEventListener('mouseleave', removeEffect);
    }
    evt.target.addEventListener('mouseup', removeEffect);
    evt.target.addEventListener('mouseleave', removeEffect);
};
const rippleReverse = (evt) => {
    const el = evt.currentTarget;
    const offset = el.getBoundingClientRect();
    const x = evt.clientX - offset.left;
    const y = evt.clientY - offset.top;
    let time = 0.6;
    if (el.clientWidth > 150) {
        time = 1.2;
    }
    const effectContent = document.createElement('div');
    effectContent.className = 'rs-ripple-content';
    const effect = document.createElement('div');
    effect.className = 'rs-ripple-invert';
    // effect.style.transition = `all ${time}s ease`
    effect.style.left = `${x}px`;
    effect.style.top = `${y}px`;
    effect.style.width = `${el.clientWidth * 2.5}px`;
    effect.style.height = `${el.clientWidth * 2.5}px`;
    effect.style.opacity = `0`;
    effectContent.appendChild(effect);
    el.appendChild(effectContent);
    setTimeout(() => {
        effect.style.width = `0px`;
        effect.style.height = `0px`;
        effect.style.opacity = `0.5`;
    }, 1);
    let noTime = false;
    setTimeout(() => {
        noTime = true;
    }, 300);
    function removeEffect(evt) {
        effect.style.transition = `all 0.${time * 600}s ease`;
        setTimeout(() => {
            effect.style.opacity = `0`;
            setTimeout(() => {
                el.removeChild(effectContent);
            }, time * 300);
        }, noTime ? 0 : time * 400);
        evt.target.removeEventListener('mouseup', removeEffect);
        evt.target.removeEventListener('mouseleave', removeEffect);
    }
    evt.target.addEventListener('mouseup', removeEffect);
    evt.target.addEventListener('mouseleave', removeEffect);
};
//
const rippleCut = (evt) => {
    const el = evt.currentTarget;
    const offset = el.getBoundingClientRect();
    const x = evt.clientX - offset.left;
    const y = evt.clientY - offset.top;
    let time = 0.6;
    if (el.clientWidth > 150) {
        time = 1.2;
    }
    const effectContent = document.createElement('div');
    effectContent.className = 'rs-ripple-content';
    const effect = document.createElement('div');
    const effect2 = document.createElement('div');
    effect.className = 'rs-ripple-cut-1';
    effect2.className = 'rs-ripple-cut-2';
    // effect.style.transition = `all ${time}s ease`
    effect.style.left = effect2.style.left = `${x}px`;
    effect.style.top = effect2.style.top = `${y}px`;
    effect.style.width = effect2.style.width = `${el.clientWidth * 2.5}px`;
    effect.style.height = effect2.style.height = `${el.clientWidth * 2.5}px`;
    effect.style.opacity = effect2.style.opacity = `1`;
    effectContent.appendChild(effect);
    effectContent.appendChild(effect2);
    el.appendChild(effectContent);
    setTimeout(() => {
        effect.style.left = `-${el.clientWidth * 1.3}px`;
        effect.style.opacity = `1`;
        effect2.style.left = `${el.clientWidth * 1.3}px`;
        effect2.style.opacity = `1`;
    }, 1);
    let noTime = false;
    setTimeout(() => {
        noTime = true;
    }, 300);
    function removeEffect(evt) {
        effect.style.transition = `all 0.${time * 600}s ease`;
        setTimeout(() => {
            effect.style.opacity = `0`;
            setTimeout(() => {
                el.removeChild(effectContent);
            }, time * 300);
        }, noTime ? 0 : time * 400);
        evt.target.removeEventListener('mouseup', removeEffect);
        evt.target.removeEventListener('mouseleave', removeEffect);
    }
    evt.target.addEventListener('mouseup', removeEffect);
    evt.target.addEventListener('mouseleave', removeEffect);
};

var css_248z$l = ":root {\n  --rs-primary: 25, 91, 255;\n  --rs-warn: 255, 186, 0;\n  --rs-danger: 255, 71, 87;\n  --rs-success: 70, 201, 58;\n  --rs-dark: 30, 30, 30;\n  --rs-light: 244, 247, 248;\n  --rs-color: 17, 18, 20;\n  --rs-facebook: 59, 89, 153;\n  --rs-twitter: 29, 161, 242;\n  --rs-youtube: 255, 0, 0;\n  --rs-pinterest: 189, 8, 28;\n  --rs-linkedin: 0, 119, 181;\n  --rs-snapchat: 255, 252, 0;\n  --rs-whatsapp: 37, 211, 102;\n  --rs-tumblr: 54, 70, 93;\n  --rs-reddit: 255, 69, 0;\n  --rs-spotify: 30, 215, 96;\n  --rs-amazon: 255, 153, 0;\n  --rs-medium: 2, 184, 117;\n  --rs-vimeo: 26, 183, 234;\n  --rs-skype: 0, 175, 240;\n  --rs-dribbble: 234, 76, 137;\n  --rs-slack: 74, 21, 75;\n  --rs-yahoo: 67, 2, 151;\n  --rs-twitch: 100, 65, 164;\n  --rs-discord: 114, 137, 218;\n  --rs-telegram: 0, 136, 204;\n  --rs-google-plus: 219, 68, 55;\n  --rs-messenger: 0, 132, 255;\n  --rs-background: 255, 255, 255;\n  --rs-text: 44, 62, 80;\n  --rs-gray-1: 249, 252, 253;\n  --rs-gray-2: 244, 247, 248;\n  --rs-gray-3: 240, 243, 244;\n  --rs-gray-4: 230, 233, 234; }\n\n.rs-button {\n  --rs-color: var(--rs-primary);\n  --rs-color-rotate: var(--rs-primary);\n  --rs-color-darken: var(--rs-primary);\n  --rs-button-padding: 8px 12px;\n  --rs-button-margin: 5px;\n  --rs-button-border-radius: 12px;\n  --rs-button-text-color: #fff; }\n\n.rs-button {\n  border: 0px;\n  margin: var(--rs-button-margin);\n  border-radius: var(--rs-button-border-radius);\n  transition: all 0.25s ease;\n  position: relative;\n  user-select: none;\n  z-index: 1;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0px;\n  outline: none;\n  font-size: 0.8rem;\n  box-sizing: border-box;\n  cursor: pointer; }\n  .rs-button.rs-component-dark.rs-button--transparent {\n    color: rgba(var(--rs-text), 1) !important; }\n  .rs-button--fff {\n    color: #1e1e1e !important; }\n    .rs-button--fff:focus {\n      color: #1e1e1e !important; }\n  .rs-button__content {\n    padding: var(--rs-button-padding);\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .rs-button--active-disabled {\n    pointer-events: none;\n    opacity: 0.6; }\n  .rs-button:disabled {\n    pointer-events: none;\n    opacity: 0.35; }\n  .rs-button.rs-button--animate:not(.rs-button--animate-inactive) .rs-button__content i {\n    font-size: 1.15rem; }\n  .rs-button.rs-button--animate:not(.rs-button--animate-inactive):hover .rs-button__content {\n    transform: translate(-100%); }\n  .rs-button.rs-button--animate:not(.rs-button--animate-inactive):hover .rs-button__animate {\n    transform: translate(0%); }\n  .rs-button.rs-button--animate:not(.rs-button--animate-inactive).rs-button--animate-vertical:hover .rs-button__content {\n    transform: translate(0, -100%) !important;\n    opacity: 0; }\n  .rs-button.rs-button--animate:not(.rs-button--animate-inactive).rs-button--animate-vertical:hover .rs-button__animate {\n    transform: translate(0%) !important; }\n  .rs-button.rs-button--animate:not(.rs-button--animate-inactive).rs-button--animate-scale:hover .rs-button__content {\n    transform: scale(1.4) !important;\n    opacity: 0; }\n  .rs-button.rs-button--animate:not(.rs-button--animate-inactive).rs-button--animate-scale:hover .rs-button__animate {\n    opacity: 1;\n    transform: scale(1); }\n  .rs-button.rs-button--animate:not(.rs-button--animate-inactive).rs-button--animate-rotate:hover .rs-button__content {\n    transform: rotate(180deg) !important;\n    opacity: 0; }\n  .rs-button.rs-button--animate:not(.rs-button--animate-inactive).rs-button--animate-rotate:hover .rs-button__animate {\n    opacity: 1;\n    transform: rotate(0); }\n  .rs-button.rs-button--animate:not(.rs-button--animate-inactive) .rs-button__content {\n    transition: transform 0.25s ease; }\n  .rs-button__animate {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    top: 0px;\n    left: 0px;\n    transition: transform 0.25s ease;\n    transform: translate(100%);\n    pointer-events: none; }\n    .rs-button__animate--vertical {\n      transform: translate(0, 100%); }\n    .rs-button__animate--scale {\n      transform: scale(0.5);\n      opacity: 0; }\n    .rs-button__animate--rotate {\n      transform: rotate(-180deg);\n      opacity: 0; }\n  .rs-button--block {\n    width: 100%;\n    display: block; }\n  .rs-button--upload:after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: rgba(var(--rs-color), 0.4);\n    top: 0px;\n    left: 0px;\n    z-index: 1200;\n    animation: btnupload 0.7s ease infinite;\n    box-sizing: border-box; }\n  .rs-button--loading {\n    pointer-events: none;\n    user-select: none; }\n  .rs-button .rs-button__loading {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: rgba(var(--rs-color), 0.8);\n    border-radius: inherit; }\n    .rs-button .rs-button__loading:after {\n      content: \"\";\n      width: 17px;\n      height: 17px;\n      border: 2px dotted rgba(255, 255, 255, 0.6);\n      border-top: 2px solid rgba(255, 255, 255, 0);\n      border-bottom: 2px solid rgba(255, 255, 255, 0);\n      border-right: 2px solid rgba(255, 255, 255, 0);\n      border-radius: 50%;\n      position: absolute;\n      animation: btnload 0.6s linear infinite;\n      box-sizing: border-box; }\n    .rs-button .rs-button__loading:before {\n      position: absolute;\n      content: \"\";\n      width: 17px;\n      height: 17px;\n      border: 2px solid white;\n      border-top: 2px solid rgba(255, 255, 255, 0);\n      border-bottom: 2px solid rgba(255, 255, 255, 0);\n      border-right: 2px solid rgba(255, 255, 255, 0);\n      border-radius: 50%;\n      animation: btnload 0.6s ease infinite;\n      box-sizing: border-box; }\n  .rs-button--size-xl {\n    border-radius: 20px; }\n    .rs-button--size-xl .rs-button__content {\n      padding: 15px 20px;\n      font-size: 1.1rem; }\n  .rs-button--size-large {\n    font-size: 1rem;\n    border-radius: 15px; }\n    .rs-button--size-large .rs-button__content {\n      padding: 10px 15px; }\n  .rs-button--size-small {\n    font-size: 0.75rem;\n    border-radius: 9px; }\n    .rs-button--size-small .rs-button__content {\n      padding: 5px 10px; }\n  .rs-button--size-mini {\n    font-size: 0.6rem;\n    border-radius: 7px; }\n    .rs-button--size-mini .rs-button__content {\n      padding: 3px 8px; }\n  .rs-button--circle {\n    border-radius: 25px; }\n  .rs-button--square {\n    border-radius: 0px; }\n  .rs-button--icon {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .rs-button--icon .rs-button__content {\n      padding: 8px 8px; }\n    .rs-button--icon i {\n      font-size: 1.15rem; }\n\n.rs-button--default {\n  background: rgba(var(--rs-color), 1);\n  color: #fff; }\n  .rs-button--default.rs-button--active {\n    box-shadow: 0px 10px 20px -10px rgba(var(--rs-color), 1);\n    transform: translate(0, -3px); }\n  .rs-button--default:hover {\n    box-shadow: 0px 10px 20px -10px rgba(var(--rs-color), 1);\n    transform: translate(0, -3px); }\n\n.rs-button--flat {\n  background: rgba(var(--rs-color), 0.15);\n  color: rgba(var(--rs-color), 1); }\n  .rs-button--flat.rs-button--dark {\n    color: rgba(var(--rs-text), 1); }\n  .rs-button--flat:hover {\n    background: rgba(var(--rs-color), 0.25); }\n  .rs-button--flat:focus {\n    color: #fff;\n    background: rgba(var(--rs-color), 1);\n    transition: all 0.25s ease, background 0.25s ease 0.25s; }\n  .rs-button--flat.rs-button--active {\n    background: rgba(var(--rs-color), 1);\n    color: #fff; }\n\n.rs-button--floating {\n  background: rgba(var(--rs-color), 1);\n  color: #fff;\n  box-shadow: 0px 8px 20px -6px rgba(var(--rs-color), 1);\n  transform: translate(0, -3px); }\n  .rs-button--floating:hover {\n    box-shadow: 0px 8px 20px -6px rgba(var(--rs-color), 1);\n    transform: translate(0, -6px); }\n  .rs-button--floating:focus {\n    transform: translate(0, 0px);\n    box-shadow: 0px 0px 0px 0px rgba(var(--rs-color), 1); }\n  .rs-button--floating.rs-button--active {\n    transform: translate(0, 0px);\n    box-shadow: 0px 0px 0px 0px rgba(var(--rs-color), 1); }\n\n.rs-button--border {\n  background: rgba(var(--rs-color), 0);\n  color: rgba(var(--rs-color), 1); }\n  .rs-button--border:before {\n    content: \"\";\n    border: 2px solid rgba(var(--rs-color), 1);\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    border-radius: inherit;\n    background: transparent;\n    pointer-events: none;\n    transition: all 0.25s ease;\n    box-sizing: border-box; }\n  .rs-button--border:hover:before {\n    border: 2px solid rgba(var(--rs-color), 0.5); }\n  .rs-button--border:focus {\n    color: #fff;\n    background: rgba(var(--rs-color), 1); }\n  .rs-button--border.rs-button--active {\n    background: rgba(var(--rs-color), 1);\n    color: #fff; }\n\n.rs-button--gradient {\n  background: rgba(var(--rs-color), 1);\n  color: #fff;\n  overflow: hidden; }\n  .rs-button--gradient.rs-button--primary::before, .rs-button--gradient.rs-button--success::before {\n    filter: hue-rotate(40deg); }\n  .rs-button--gradient::before {\n    content: \"\";\n    background: linear-gradient(30deg, rgba(var(--rs-color), 0) 33%, rgba(var(--rs-color), 1) 100%) !important;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    border-radius: inherit;\n    pointer-events: none;\n    transition: all 0.4s ease;\n    z-index: -1;\n    filter: hue-rotate(-40deg);\n    box-sizing: border-box; }\n  .rs-button--gradient:hover {\n    transform: translate(0, -3px);\n    box-shadow: 0px 10px 20px -10px rgba(var(--rs-color), 0.7); }\n    .rs-button--gradient:hover::before {\n      opacity: 0; }\n  .rs-button--gradient.rs-button--active {\n    transform: translate(0, -3px);\n    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.35); }\n\n.rs-button--relief {\n  background: rgba(var(--rs-color), 1);\n  color: #fff;\n  overflow: hidden;\n  transform: translate(0) scale(1, 1); }\n  .rs-button--relief .rs-button__content {\n    transition: all 0.25s ease; }\n  .rs-button--relief.rs-button--icon.rs-button--active {\n    height: auto; }\n  .rs-button--relief::before {\n    content: \"\";\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    width: 100%;\n    height: calc(100% - 3px);\n    border-radius: inherit;\n    pointer-events: none;\n    transition: all 0.4s ease;\n    z-index: -1;\n    filter: contrast(2) grayscale(0.4);\n    border-bottom: 3px solid rgba(var(--rs-color), 1);\n    box-sizing: border-box; }\n  .rs-button--relief:active {\n    transform: translate(0, 1px); }\n    .rs-button--relief:active .rs-button__content {\n      padding-bottom: 6px; }\n    .rs-button--relief:active::before {\n      border-bottom: 0px solid rgba(var(--rs-color), 1); }\n  .rs-button--relief.rs-button--active {\n    transform: translate(0, 1px); }\n    .rs-button--relief.rs-button--active .rs-button__content {\n      padding-bottom: 6px; }\n    .rs-button--relief.rs-button--active::before {\n      border-bottom: 0px solid rgba(var(--rs-color), 1); }\n\n.rs-button--transparent {\n  background: transparent;\n  color: rgba(var(--rs-color), 1);\n  overflow: hidden; }\n  .rs-button--transparent::before {\n    content: \"\";\n    background: rgba(var(--rs-color), 0.1);\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    border-radius: inherit;\n    pointer-events: none;\n    transition: all 0.25s ease;\n    z-index: -1;\n    transform: scale(0.5);\n    opacity: 0;\n    box-sizing: border-box; }\n  .rs-button--transparent:active:not(.rs-button--active)::before {\n    transform: scale(0.9) !important; }\n  .rs-button--transparent:hover::before {\n    opacity: 1;\n    transform: scale(1); }\n  .rs-button--transparent.rs-button--active::before {\n    background: rgba(var(--rs-color), 0.2);\n    opacity: 1;\n    transform: scale(1); }\n\n.rs-button--shadow {\n  background: rgba(var(--rs-background), 1);\n  color: rgba(var(--rs-text), 1);\n  overflow: hidden;\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, var(--rs-shadow-opacity)); }\n  .rs-button--shadow:active:not(.rs-button--active) {\n    transform: translate(0, -1px);\n    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, var(--rs-shadow-opacity)) !important; }\n  .rs-button--shadow:hover {\n    transform: translate(0, -3px);\n    box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, var(--rs-shadow-opacity)); }\n  .rs-button--shadow.rs-button--active {\n    transform: translate(0, -3px);\n    box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, var(--rs-shadow-opacity)); }\n\n@keyframes btnload {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes btnupload {\n  0% {\n    transform: translate(0, 110%); }\n  100% {\n    transform: translate(0, -110%); } }\n";
styleInject(css_248z$l);

const RsButton = (_a) => {
    var props = __rest(_a, []);
    const buttonRef = React__default["default"].createRef();
    const { children, componentColor = "primary", size = "default", color = "primary", active, disabled, icon, circle, square, loading, upload, block, animationType, animateInactive, flat, border, gradient, relief, transparent, shadow, floating, animate, rippleProp } = props, rest = __rest(props, ["children", "componentColor", "size", "color", "active", "disabled", "icon", "circle", "square", "loading", "upload", "block", "animationType", "animateInactive", "flat", "border", "gradient", "relief", "transparent", "shadow", "floating", "animate", "rippleProp"]);
    const buttonClasses = classnames("rs-button", 
    // `rs-button--${componentColor}`,
    `rs-button--size-${size}`, { "rs-button--primary": color === "primary" }, { "rs-button--success": color === "success" }, { "rs-component-dark": color === "dark" || componentColor === "dark" }, { "rs-change-color": color || componentColor }, { "rs-button--fff": color === "#fff" }, { "rs-button--active": active }, { "rs-button--active-disabled": disabled }, { "rs-button--icon": icon }, { "rs-button--circle": circle }, { "rs-button--square": square }, { "rs-button--loading": loading }, { "rs-button--upload": upload }, { "rs-button--block": block }, { "rs-button--animate": animate }, { [`rs-button--animate-${animationType}`]: animationType }, { "rs-button--animate-inactive": animateInactive }, {
        "rs-button--default": !flat &&
            !border &&
            !gradient &&
            !relief &&
            !transparent &&
            !shadow &&
            !floating,
    }, { "rs-button--flat": flat }, { "rs-button--border": border }, { "rs-button--gradient": gradient }, { "rs-button--relief": relief }, { "rs-button--transparent": transparent }, { "rs-button--shadow": shadow }, { "rs-button--floating": floating });
    const animateButtonClasses = classnames("rs-button__animate", `rs-button__animate--${animationType}`);
    const rippleEffect = (e) => {
        if (rippleProp === "reverse") {
            rippleReverse(e);
        }
        else if (rippleProp === "cut") {
            rippleCut(e);
        }
        else {
            if (flat) {
                ripple(e, (componentColor || color || "primary") &&
                    !active &&
                    document.activeElement !== buttonRef.current
                    ? componentColor || color
                    : null, flat && !active && document.activeElement !== buttonRef.current);
            }
            else {
                ripple(e, null, false);
            }
        }
    };
    return (React__default["default"].createElement("button", Object.assign({ className: buttonClasses, ref: buttonRef, onMouseDown: (e) => rippleEffect(e), style: {
            "--rs-color": setComponentColor(color || componentColor || "primary"),
        } }, rest),
        React__default["default"].createElement("div", { className: "rs-button__content" }, children),
        loading ? React__default["default"].createElement("div", { className: "rs-button__loading" }, " ") : null,
        animate ? React__default["default"].createElement("div", { className: animateButtonClasses },
            animate,
            " ") : null));
};

var css_248z$k = ":root {\n  --rs-primary: 25, 91, 255;\n  --rs-warn: 255, 186, 0;\n  --rs-danger: 255, 71, 87;\n  --rs-success: 70, 201, 58;\n  --rs-dark: 30, 30, 30;\n  --rs-light: 244, 247, 248;\n  --rs-color: 17, 18, 20;\n  --rs-facebook: 59, 89, 153;\n  --rs-twitter: 29, 161, 242;\n  --rs-youtube: 255, 0, 0;\n  --rs-pinterest: 189, 8, 28;\n  --rs-linkedin: 0, 119, 181;\n  --rs-snapchat: 255, 252, 0;\n  --rs-whatsapp: 37, 211, 102;\n  --rs-tumblr: 54, 70, 93;\n  --rs-reddit: 255, 69, 0;\n  --rs-spotify: 30, 215, 96;\n  --rs-amazon: 255, 153, 0;\n  --rs-medium: 2, 184, 117;\n  --rs-vimeo: 26, 183, 234;\n  --rs-skype: 0, 175, 240;\n  --rs-dribbble: 234, 76, 137;\n  --rs-slack: 74, 21, 75;\n  --rs-yahoo: 67, 2, 151;\n  --rs-twitch: 100, 65, 164;\n  --rs-discord: 114, 137, 218;\n  --rs-telegram: 0, 136, 204;\n  --rs-google-plus: 219, 68, 55;\n  --rs-messenger: 0, 132, 255;\n  --rs-background: 255, 255, 255;\n  --rs-text: 44, 62, 80;\n  --rs-gray-1: 249, 252, 253;\n  --rs-gray-2: 244, 247, 248;\n  --rs-gray-3: 240, 243, 244;\n  --rs-gray-4: 230, 233, 234; }\n\n.rs-button-group {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rs-button-group .rs-button {\n    margin: 0px; }\n  .rs-button-group .rs-button:not(:last-of-type):not(:first-of-type) {\n    border-radius: 0px;\n    border: 0px; }\n    .rs-button-group .rs-button:not(:last-of-type):not(:first-of-type).rs-button--border:before {\n      border-left: 0px;\n      width: 100%; }\n    .rs-button-group .rs-button:not(:last-of-type):not(:first-of-type).rs-button--border + .rs-button--border:not(:last-of-type):before {\n      border-right: 0px;\n      width: calc(100%); }\n  .rs-button-group .rs-button:last-of-type {\n    border-radius: 0px 12px 12px 0px; }\n  .rs-button-group .rs-button:first-of-type {\n    border-radius: 12px 0px 0px 12px; }\n";
styleInject(css_248z$k);

const RsButtonGroup = (_a) => {
    var props = __rest(_a, []);
    const { children } = props;
    return React__default["default"].createElement("div", { className: 'rs-button-group' }, children);
};

var css_248z$j = ".rs-card-content {\n  --rs-color: var(--rs-primary); }\n\n.rs-card-content.type-5 .rs-card {\n  box-shadow: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column; }\n  .rs-card-content.type-5 .rs-card:hover .rs-card__interactions {\n    bottom: 50px; }\n  .rs-card-content.type-5 .rs-card:hover .rs-card__text {\n    transform: translate(0);\n    opacity: 1;\n    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, var(--rs-shadow-opacity)); }\n  .rs-card-content.type-5 .rs-card:hover .rs-card__img {\n    border-radius: 6px 40px 6px 40px; }\n    .rs-card-content.type-5 .rs-card:hover .rs-card__img img {\n      transform: scale(1.1); }\n  .rs-card-content.type-5 .rs-card__img {\n    border-radius: 6px 20px 6px 20px; }\n  .rs-card-content.type-5 .rs-card__interactions {\n    bottom: 6px;\n    transition: all 0.25s ease;\n    z-index: 20; }\n  .rs-card-content.type-5 .rs-card__text {\n    background: rgba(var(--rs-background), 1);\n    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, var(--rs-shadow-opacity));\n    border-radius: 6px 20px 6px 20px;\n    margin-top: -50px;\n    z-index: 10;\n    position: relative;\n    width: calc(100% - 30px);\n    padding-top: 10px;\n    transition: all 0.25s ease;\n    transform: translate(0, 25px);\n    opacity: 0; }\n\n.rs-card-content.type-4 .rs-card {\n  box-shadow: none;\n  max-width: 300px; }\n  .rs-card-content.type-4 .rs-card:hover {\n    transform: translate(0, -5px); }\n    .rs-card-content.type-4 .rs-card:hover .rs-card__img img {\n      transform: scale(1); }\n    .rs-card-content.type-4 .rs-card:hover .rs-card__text {\n      padding-top: 15px;\n      padding-bottom: 25px; }\n  .rs-card-content.type-4 .rs-card__img {\n    align-items: center;\n    max-height: 600px; }\n    .rs-card-content.type-4 .rs-card__img img {\n      transform: scale(1.2); }\n  .rs-card-content.type-4 .rs-card__interactions {\n    top: 0px;\n    bottom: auto; }\n  .rs-card-content.type-4 .rs-card__text {\n    background: rgba(var(--rs-background), 0.8);\n    position: absolute;\n    bottom: 0px;\n    backdrop-filter: saturate(180%) blur(20px);\n    border-radius: 0px 0px 20px 20px;\n    transition: all 0.25s ease; }\n    .rs-card-content.type-4 .rs-card__text p {\n      opacity: 1; }\n\n.rs-card-content.type-3 .rs-card {\n  display: flex;\n  max-width: 400px; }\n  .rs-card-content.type-3 .rs-card:hover {\n    transform: scale(1.04); }\n  .rs-card-content.type-3 .rs-card__img img {\n    min-width: 200px; }\n  .rs-card-content.type-3 .rs-card__text {\n    padding-top: 15px; }\n  .rs-card-content.type-3 .rs-card__title h2,\n  .rs-card-content.type-3 .rs-card__title h3,\n  .rs-card-content.type-3 .rs-card__title h4,\n  .rs-card-content.type-3 .rs-card__title h5,\n  .rs-card-content.type-3 .rs-card__title h6 {\n    padding: 0px; }\n\n.rs-card-content.type-2 .rs-card {\n  box-shadow: none;\n  overflow: hidden; }\n  .rs-card-content.type-2 .rs-card:hover {\n    transform: scale(0.95); }\n    .rs-card-content.type-2 .rs-card:hover .rs-card__img img {\n      transform: scale(1.15); }\n    .rs-card-content.type-2 .rs-card:hover .rs-card__text {\n      transform: translate(0);\n      opacity: 1;\n      color: #fff; }\n  .rs-card-content.type-2 .rs-card__interactions {\n    right: 0px;\n    top: 0px;\n    left: auto;\n    bottom: auto;\n    align-items: flex-end; }\n  .rs-card-content.type-2 .rs-card__title {\n    position: relative;\n    color: inherit;\n    padding: 0px; }\n    .rs-card-content.type-2 .rs-card__title h2,\n    .rs-card-content.type-2 .rs-card__title h3,\n    .rs-card-content.type-2 .rs-card__title h4,\n    .rs-card-content.type-2 .rs-card__title h5,\n    .rs-card-content.type-2 .rs-card__title h6 {\n      padding: 0px;\n      padding-bottom: 5px; }\n  .rs-card-content.type-2 .rs-card__text {\n    position: absolute;\n    bottom: 0px;\n    background: rgba(var(--rs-background), 0.9);\n    padding-top: 30px;\n    border-radius: 0px 0px 20px 20px;\n    background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.5) 100%);\n    color: transparent;\n    font-size: 0.9rem;\n    transform: translate(0, 45%);\n    transition: all 0.25s ease; }\n    .rs-card-content.type-2 .rs-card__text p {\n      opacity: 1; }\n\n.rs-card-content.type-1 .rs-card:hover {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, var(--rs-shadow-opacity));\n  transform: translate(0, 5px); }\n  .rs-card-content.type-1 .rs-card:hover .rs-card__img img {\n    transform: scale(1.15); }\n\n.rs-card {\n  background: rgba(var(--rs-background), 1);\n  color: rgba(var(--rs-text), 1);\n  width: 100%;\n  max-width: 350px;\n  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--rs-shadow-opacity));\n  border-radius: 20px;\n  transition: all 0.25s ease;\n  cursor: pointer;\n  position: relative; }\n  .rs-card__text {\n    font-size: 0.85rem;\n    padding: 0px 15px;\n    padding-bottom: 15px; }\n    .rs-card__text p {\n      font-size: inherit;\n      margin: 0px;\n      opacity: 0.8; }\n  .rs-card__title {\n    padding-top: 10px;\n    padding-bottom: 5px; }\n    .rs-card__title h2,\n    .rs-card__title h3,\n    .rs-card__title h4,\n    .rs-card__title h5,\n    .rs-card__title h6 {\n      padding: 0px;\n      margin: 0px;\n      font-size: 1.1rem; }\n  .rs-card__interactions {\n    position: absolute;\n    bottom: 0px;\n    padding: 5px 10px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    left: 0px; }\n  .rs-card__img {\n    position: relative;\n    max-height: 250px;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 20px;\n    transition: all 0.25s ease; }\n    .rs-card__img img {\n      width: 100%;\n      border-radius: 20px;\n      display: block;\n      transition: all 0.25s ease; }\n";
styleInject(css_248z$j);

const RsCard = (_a) => {
    var props = __rest(_a, []);
    const { type = 1, image, interactions, text, title, buttons } = props;
    const CardContentClasses = classnames("rs-card-content", `type-${type}`);
    return (React__default["default"].createElement("div", { className: CardContentClasses },
        React__default["default"].createElement("div", { className: "rs-card" },
            image ? (React__default["default"].createElement("div", { className: "rs-card__img" },
                image,
                interactions ? (React__default["default"].createElement("div", { className: "rs-card__interactions" }, interactions)) : null)) : null,
            text ? (React__default["default"].createElement("div", { className: "rs-card__text" },
                title ? React__default["default"].createElement("div", { className: "rs-card__title" }, title) : null,
                text)) : null,
            buttons ? React__default["default"].createElement("div", { className: "rs-card__buttons" }, buttons) : null)));
};

var css_248z$i = ":root {\n  --rs-primary: 25, 91, 255;\n  --rs-warn: 255, 186, 0;\n  --rs-danger: 255, 71, 87;\n  --rs-success: 70, 201, 58;\n  --rs-dark: 30, 30, 30;\n  --rs-light: 244, 247, 248;\n  --rs-color: 17, 18, 20;\n  --rs-facebook: 59, 89, 153;\n  --rs-twitter: 29, 161, 242;\n  --rs-youtube: 255, 0, 0;\n  --rs-pinterest: 189, 8, 28;\n  --rs-linkedin: 0, 119, 181;\n  --rs-snapchat: 255, 252, 0;\n  --rs-whatsapp: 37, 211, 102;\n  --rs-tumblr: 54, 70, 93;\n  --rs-reddit: 255, 69, 0;\n  --rs-spotify: 30, 215, 96;\n  --rs-amazon: 255, 153, 0;\n  --rs-medium: 2, 184, 117;\n  --rs-vimeo: 26, 183, 234;\n  --rs-skype: 0, 175, 240;\n  --rs-dribbble: 234, 76, 137;\n  --rs-slack: 74, 21, 75;\n  --rs-yahoo: 67, 2, 151;\n  --rs-twitch: 100, 65, 164;\n  --rs-discord: 114, 137, 218;\n  --rs-telegram: 0, 136, 204;\n  --rs-google-plus: 219, 68, 55;\n  --rs-messenger: 0, 132, 255;\n  --rs-background: 255, 255, 255;\n  --rs-text: 44, 62, 80;\n  --rs-gray-1: 249, 252, 253;\n  --rs-gray-2: 244, 247, 248;\n  --rs-gray-3: 240, 243, 244;\n  --rs-gray-4: 230, 233, 234; }\n\n.rs-checkbox-content {\n  --rs-color: var(--rs-primary); }\n\n.rs-checkbox-content {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start; }\n\n.rs-checkbox-con {\n  width: 23px;\n  height: 23px;\n  border-radius: 9px;\n  position: relative;\n  z-index: 1; }\n\n.rs-checkbox-mask {\n  border-radius: 32%;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 50;\n  cursor: pointer;\n  pointer-events: none;\n  box-sizing: border-box;\n  transition: all 0.25s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: -1;\n  box-sizing: border-box;\n  text-align: left; }\n  .rs-checkbox-mask i:not(.rs-icon-check),\n  .rs-checkbox-mask > *:not(.rs-icon-check) {\n    opacity: 0;\n    transition: all 0.25s ease;\n    color: #fff;\n    font-size: 1.1em;\n    transform: scale(0.5); }\n  .rs-checkbox-mask:after {\n    content: \"\";\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    background: rgba(var(--rs-color), 1);\n    transform: scale(0.5);\n    border-radius: inherit;\n    opacity: 0;\n    transition: all 0.25s ease;\n    z-index: -1; }\n  .rs-checkbox-mask:before {\n    content: \"\";\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    border-radius: inherit;\n    transition: all 0.25s ease;\n    z-index: -1;\n    border: 2px solid rgba(var(--rs-gray-4), 1);\n    box-sizing: border-box; }\n  .rs-checkbox-mask .rs-icon-check {\n    opacity: 0;\n    z-index: 200; }\n\n.rs-checkbox {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  margin: 0px;\n  padding: 0px;\n  opacity: 0;\n  z-index: 100;\n  cursor: pointer; }\n  .rs-checkbox:disabled {\n    opacity: 0;\n    pointer-events: none; }\n  .rs-checkbox:active ~ .rs-checkbox-mask {\n    background: rgba(var(--rs-gray-4), 1) !important; }\n  .rs-checkbox:hover ~ .rs-checkbox-mask {\n    background: rgba(var(--rs-gray-3), 1); }\n    .rs-checkbox:hover ~ .rs-checkbox-mask:before {\n      border: 2px solid rgba(var(--rs-gray-4), 0); }\n  .rs-checkbox:checked:hover ~ .rs-checkbox-mask {\n    box-shadow: 0px 3px 15px 0px rgba(var(--rs-color), 0.35); }\n  .rs-checkbox:checked ~ .rs-checkbox-mask {\n    box-shadow: 0px 0px 0px 0px rgba(var(--rs-color), 0.35); }\n    .rs-checkbox:checked ~ .rs-checkbox-mask i:not(.rs-icon-check),\n    .rs-checkbox:checked ~ .rs-checkbox-mask > *:not(.rs-icon-check) {\n      width: 100%;\n      opacity: 1;\n      transform: scale(1);\n      transition: all 0.25s ease 0.15s; }\n    .rs-checkbox:checked ~ .rs-checkbox-mask .rs-icon-check {\n      opacity: 1; }\n      .rs-checkbox:checked ~ .rs-checkbox-mask .rs-icon-check span .line1:after {\n        width: 100%;\n        transition: all 0.25s ease 0.1s; }\n      .rs-checkbox:checked ~ .rs-checkbox-mask .rs-icon-check span .line2:after {\n        transition: all 0.2s ease 0.3s;\n        height: 100%; }\n    .rs-checkbox:checked ~ .rs-checkbox-mask:after {\n      opacity: 1;\n      transform: scale(1); }\n    .rs-checkbox:checked ~ .rs-checkbox-mask:before {\n      opacity: 0;\n      transform: scale(1.2); }\n\n.rs-checkbox-label {\n  user-select: none;\n  cursor: pointer;\n  padding: 7px;\n  transition: all 0.25s ease;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem; }\n  .rs-checkbox-label:before {\n    position: absolute;\n    width: 0px;\n    height: 2px;\n    background: rgba(var(--rs-text), 0.6);\n    content: \"\";\n    transition: all 0.25s ease; }\n\n.rs-checkbox--disabled {\n  pointer-events: none; }\n  .rs-checkbox--disabled .rs-checkbox-label {\n    opacity: 0.5; }\n  .rs-checkbox--disabled .rs-checkbox-mask {\n    opacity: 0.6;\n    background: transparent !important; }\n\n.rs-checkbox--checked .lineThrough {\n  opacity: 0.4; }\n  .rs-checkbox--checked .lineThrough:before {\n    width: calc(100% - 10px); }\n\n.rs-checkbox--loading {\n  pointer-events: none; }\n  .rs-checkbox--loading.rs-checkbox--checked .rs-checkbox-mask {\n    background: transparent !important; }\n    .rs-checkbox--loading.rs-checkbox--checked .rs-checkbox-mask:before {\n      border-radius: 50%;\n      border: 2px solid rgba(var(--rs-color), 1) !important;\n      border-top: 2px solid transparent !important;\n      animation: rotateCheckboxLoading 0.6s linear infinite;\n      opacity: 1 !important; }\n    .rs-checkbox--loading.rs-checkbox--checked .rs-checkbox-mask:after {\n      opacity: 0;\n      transform: scale(0.5); }\n  .rs-checkbox--loading .rs-checkbox-mask {\n    background: transparent !important; }\n    .rs-checkbox--loading .rs-checkbox-mask:before {\n      border-radius: 50%;\n      border: 2px solid rgba(var(--rs-gray-4), 1) !important;\n      border-top: 2px solid transparent !important;\n      animation: rotateCheckboxLoading 0.6s linear infinite; }\n\n@keyframes rotateCheckboxLoading {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.rs-checkbox--label-before .rs-checkbox-label {\n  order: -1; }\n";
styleInject(css_248z$i);

const RsIconCheck = (_a) => {
    var props = __rest(_a, []);
    const { indeterminate = false } = props;
    const checkIconClasses = classnames('rs-icon-check', {
        indeterminate: indeterminate
    });
    return (React__default["default"].createElement("i", { className: checkIconClasses },
        React__default["default"].createElement("span", null,
            React__default["default"].createElement("div", { className: 'line1' }),
            React__default["default"].createElement("div", { className: 'line2' }))));
};

const RsCheckbox = (_a) => {
    var props = __rest(_a, []);
    const id = React__default["default"].useRef(generateID());
    const { checked, disabled, loading, labelBefore, icon, indeterminate = false, lineThrough, children, color } = props, 
    // onChange,
    rest = __rest(props, ["checked", "disabled", "loading", "labelBefore", "icon", "indeterminate", "lineThrough", "children", "color"]);
    // let isChecked = React.useRef(checked || false);
    const checkboxContentClasses = classnames("rs-checkbox-content", { "rs-checkbox--checked": checked }, { "rs-checkbox--disabled": disabled }, { "rs-checkbox--loading": loading }, { "rs-checkbox--label-before": labelBefore });
    const checkboxLabelClasses = classnames("rs-checkbox-label", {
        lineThrough: lineThrough,
    });
    return (React__default["default"].createElement("div", { className: checkboxContentClasses, style: {
            "--rs-color": setComponentColor(color || "primary"),
        } },
        React__default["default"].createElement("div", { className: "rs-checkbox-con" },
            React__default["default"].createElement("input", Object.assign({ id: id.current, type: "checkbox", className: "rs-checkbox", checked: checked }, rest)),
            React__default["default"].createElement("div", { className: "rs-checkbox-mask" },
                !icon ? React__default["default"].createElement(RsIconCheck, { indeterminate: indeterminate }) : null,
                icon)),
        React__default["default"].createElement("label", { htmlFor: id.current, className: checkboxLabelClasses }, children)));
};

var css_248z$h = ":root {\n  --rs-primary: 25, 91, 255;\n  --rs-warn: 255, 186, 0;\n  --rs-danger: 255, 71, 87;\n  --rs-success: 70, 201, 58;\n  --rs-dark: 30, 30, 30;\n  --rs-light: 244, 247, 248;\n  --rs-color: 17, 18, 20;\n  --rs-facebook: 59, 89, 153;\n  --rs-twitter: 29, 161, 242;\n  --rs-youtube: 255, 0, 0;\n  --rs-pinterest: 189, 8, 28;\n  --rs-linkedin: 0, 119, 181;\n  --rs-snapchat: 255, 252, 0;\n  --rs-whatsapp: 37, 211, 102;\n  --rs-tumblr: 54, 70, 93;\n  --rs-reddit: 255, 69, 0;\n  --rs-spotify: 30, 215, 96;\n  --rs-amazon: 255, 153, 0;\n  --rs-medium: 2, 184, 117;\n  --rs-vimeo: 26, 183, 234;\n  --rs-skype: 0, 175, 240;\n  --rs-dribbble: 234, 76, 137;\n  --rs-slack: 74, 21, 75;\n  --rs-yahoo: 67, 2, 151;\n  --rs-twitch: 100, 65, 164;\n  --rs-discord: 114, 137, 218;\n  --rs-telegram: 0, 136, 204;\n  --rs-google-plus: 219, 68, 55;\n  --rs-messenger: 0, 132, 255;\n  --rs-background: 255, 255, 255;\n  --rs-text: 44, 62, 80;\n  --rs-gray-1: 249, 252, 253;\n  --rs-gray-2: 244, 247, 248;\n  --rs-gray-3: 240, 243, 244;\n  --rs-gray-4: 230, 233, 234; }\n\n.rs-input-parent {\n  --rs-color: var(--rs-primary); }\n\n.rs-input-parent {\n  display: flex;\n  align-self: center;\n  justify-content: center;\n  flex-direction: column;\n  position: relative; }\n  .rs-input-parent--has-label {\n    margin-top: 20px !important; }\n  .rs-input-parent--state-success .rs-input {\n    background: rgba(var(--rs-success), 0.1) !important;\n    color: rgba(var(--rs-success), 1); }\n  .rs-input-parent--state-success .rs-input__label {\n    color: rgba(var(--rs-success), 1); }\n  .rs-input-parent--state-success .rs-input__icon {\n    color: rgba(var(--rs-success), 1);\n    background: rgba(var(--rs-success), 0.1);\n    box-shadow: -15px 10px 10px -10px rgba(var(--rs-success), 0.1); }\n  .rs-input-parent--state-danger .rs-input {\n    background: rgba(var(--rs-danger), 0.1) !important;\n    color: rgba(var(--rs-danger), 1); }\n  .rs-input-parent--state-danger .rs-input__label {\n    color: rgba(var(--rs-danger), 1); }\n  .rs-input-parent--state-danger .rs-input__icon {\n    color: rgba(var(--rs-danger), 1);\n    background: rgba(var(--rs-danger), 0.1);\n    box-shadow: -15px 10px 10px -10px rgba(var(--rs-danger), 0.1); }\n  .rs-input-parent--state-warn .rs-input {\n    background: rgba(var(--rs-warn), 0.1) !important;\n    color: rgba(var(--rs-warn), 1); }\n  .rs-input-parent--state-warn .rs-input__label {\n    color: rgba(var(--rs-warn), 1); }\n  .rs-input-parent--state-warn .rs-input__icon {\n    color: rgba(var(--rs-warn), 1);\n    background: rgba(var(--rs-warn), 0.1);\n    box-shadow: -15px 10px 10px -10px rgba(var(--rs-warn), 0.1); }\n  .rs-input-parent--state-dark .rs-input {\n    background: rgba(var(--rs-dark), 0.1) !important;\n    color: rgba(var(--rs-dark), 1); }\n  .rs-input-parent--state-dark .rs-input__label {\n    color: rgba(var(--rs-dark), 1); }\n  .rs-input-parent--state-dark .rs-input__icon {\n    color: rgba(var(--rs-dark), 1);\n    background: rgba(var(--rs-dark), 0.1);\n    box-shadow: -15px 10px 10px -10px rgba(var(--rs-dark), 0.1); }\n  .rs-input-parent--state-primary .rs-input {\n    background: rgba(var(--rs-primary), 0.1) !important;\n    color: rgba(var(--rs-primary), 1); }\n  .rs-input-parent--state-primary .rs-input__label {\n    color: rgba(var(--rs-primary), 1); }\n  .rs-input-parent--state-primary .rs-input__icon {\n    color: rgba(var(--rs-primary), 1);\n    background: rgba(var(--rs-primary), 0.1);\n    box-shadow: -15px 10px 10px -10px rgba(var(--rs-primary), 0.1); }\n\n.rs-input-content {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  position: relative;\n  border-radius: 12px; }\n  .rs-input-content + .rs-input__message {\n    padding-top: 2px; }\n  .rs-input-content--has-color .rs-input:focus {\n    border-bottom: 2px solid rgba(var(--rs-color), 1); }\n    .rs-input-content--has-color .rs-input:focus ~ .rs-input__icon {\n      color: rgba(var(--rs-color), 1); }\n    .rs-input-content--has-color .rs-input:focus ~ .rs-input__label {\n      color: rgba(var(--rs-color), 1); }\n    .rs-input-content--has-color .rs-input:focus ~ .rs-input__label--placeholder {\n      color: rgba(var(--rs-color), 1); }\n\n.rs-input {\n  background: rgba(var(--rs-gray-2), 1);\n  color: rgba(var(--rs-text), 1);\n  padding: 7px 13px;\n  border-radius: inherit;\n  transition: all 0.25s ease;\n  width: 200px;\n  padding-left: 10px; }\n  .rs-input:focus {\n    background: rgba(var(--rs-gray-3), 1);\n    padding-left: 15px; }\n    .rs-input:focus.rs-input--has-icon:not(.rs-input--has-icon--after) {\n      padding-left: 40px; }\n      .rs-input:focus.rs-input--has-icon:not(.rs-input--has-icon--after) ~ .rs-input__icon {\n        box-shadow: 15px 10px 10px -10px rgba(0, 0, 0, var(--rs-shadow-opacity)); }\n      .rs-input:focus.rs-input--has-icon:not(.rs-input--has-icon--after) ~ .rs-input__label:not(.rs-input__label--placeholder):not(.rs-input__label--label) {\n        left: 44px; }\n    .rs-input:focus ~ .rs-input__icon {\n      box-shadow: -15px 10px 10px -10px rgba(0, 0, 0, var(--rs-shadow-opacity));\n      transform: translate(-6px, -6px);\n      background: rgba(var(--rs-gray-1), 1); }\n      .rs-input:focus ~ .rs-input__icon--after {\n        transform: translate(6px, -6px); }\n    .rs-input:focus ~ .rs-input__label:not(.rs-input__label--placeholder):not(.rs-input__label--label) {\n      opacity: 0;\n      left: 20px; }\n    .rs-input:focus ~ .rs-input__label--placeholder {\n      opacity: 1;\n      visibility: visible;\n      pointer-events: auto;\n      transform: translate(-3%, -77%);\n      font-size: 0.75rem; }\n  .rs-input__label {\n    position: absolute;\n    left: 13px;\n    font-size: 0.8rem;\n    transition: all 0.25s ease;\n    cursor: text;\n    user-select: none;\n    pointer-events: none;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    opacity: 0.4; }\n    .rs-input__label--hidden {\n      opacity: 0;\n      visibility: hidden; }\n      .rs-input__label--hidden.rs-input__label--placeholder {\n        opacity: 1;\n        visibility: visible;\n        pointer-events: auto;\n        transform: translate(-3%, -80%);\n        font-size: 0.75rem; }\n    .rs-input__label--label {\n      opacity: 1;\n      visibility: visible;\n      pointer-events: auto;\n      transform: translate(-2%, -77%);\n      font-size: 0.75rem; }\n  .rs-input--has-icon {\n    padding-left: 38px; }\n    .rs-input--has-icon ~ .rs-input__label {\n      left: 44px; }\n    .rs-input--has-icon--after {\n      padding-left: 7px;\n      padding-right: 38px; }\n      .rs-input--has-icon--after ~ .rs-input__label {\n        left: 13px; }\n      .rs-input--has-icon--after.rs-input__label--label {\n        transform: translate(calc(-3% - 22px), -80%) !important; }\n    .rs-input--has-icon:focus--has-icon--after ~ .rs-input__label {\n      left: 44px; }\n    .rs-input--has-icon:focus--has-icon--after ~ .rs-input__label--placeholder {\n      transform: translate(calc(-3% - 22px), -80%) !important; }\n    .rs-input--has-icon:focus--has-icon--after ~ .rs-input__label {\n      left: 44px; }\n  .rs-input__icon {\n    position: absolute;\n    right: auto;\n    width: 36px;\n    height: 36px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 12px 0px 10px -10px rgba(0, 0, 0, var(--rs-shadow-opacity));\n    transition: all 0.25s ease;\n    border-radius: inherit;\n    background: rgba(var(--rs-gray-2), 1);\n    pointer-events: none;\n    left: 0px; }\n    .rs-input__icon--after {\n      left: auto;\n      right: 0px;\n      box-shadow: -12px 0px 10px -10px rgba(0, 0, 0, var(--rs-shadow-opacity)); }\n    .rs-input__icon--click {\n      pointer-events: auto !important;\n      cursor: pointer; }\n      .rs-input__icon--click:hover {\n        box-shadow: -15px 10px 10px -10px rgba(0, 0, 0, var(--rs-shadow-opacity));\n        transform: translate(-6px, -6px);\n        background: rgba(var(--rs-gray-1), 1); }\n        .rs-input__icon--click:hover.rs-input__icon--after {\n          transform: translate(6px, -6px); }\n  .rs-input__message {\n    font-size: 0.7rem;\n    position: relative;\n    padding: 0px 7px;\n    transition: all 0.25s ease;\n    overflow: hidden;\n    text-align: left; }\n    .rs-input__message--success {\n      color: rgba(var(--rs-success), 1); }\n    .rs-input__message--danger {\n      color: rgba(var(--rs-danger), 1); }\n    .rs-input__message--warn {\n      color: rgba(var(--rs-warn), 1); }\n    .rs-input__message--dark {\n      color: rgba(var(--rs-dark), 1); }\n    .rs-input__message--primary {\n      color: rgba(var(--rs-primary), 1); }\n  .rs-input__progress {\n    width: 95%;\n    left: 2.5%;\n    position: relative;\n    height: 2px;\n    background: rgba(var(--rs-gray-2), 1);\n    margin-top: 5px;\n    overflow: hidden;\n    border-radius: 5px; }\n    .rs-input__progress--danger .rs-input__progress__bar {\n      background: rgba(var(--rs-danger), 1); }\n    .rs-input__progress--warn .rs-input__progress__bar {\n      background: rgba(var(--rs-warn), 1); }\n    .rs-input__progress--success .rs-input__progress__bar {\n      background: rgba(var(--rs-success), 1); }\n    .rs-input__progress__bar {\n      width: 32%;\n      height: 2px;\n      max-width: 100%;\n      transition: all 0.25s ease;\n      border-radius: 5px; }\n  .rs-input__loading {\n    position: absolute;\n    width: 22px;\n    height: 22px;\n    right: 7px;\n    pointer-events: none;\n    border-radius: 50%;\n    box-sizing: border-box;\n    background: inherit;\n    cursor: default; }\n    .rs-input__loading:after {\n      box-sizing: border-box;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      border: 2px solid rgba(var(--rs-primary), 1);\n      border-radius: inherit;\n      border-top: 2px solid transparent;\n      border-left: 2px solid transparent;\n      border-right: 2px solid transparent;\n      animation: rotateInputLoading 0.8s ease infinite;\n      top: 0;\n      right: 0;\n      content: ''; }\n    .rs-input__loading:before {\n      box-sizing: border-box;\n      top: 0;\n      right: 0;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      border: 2px dashed rgba(var(--rs-primary), 1);\n      border-radius: inherit;\n      border-top: 2px solid transparent;\n      border-left: 2px solid transparent;\n      border-right: 2px solid transparent;\n      animation: rotateInputLoading 0.8s linear infinite;\n      opacity: 0.2;\n      content: ''; }\n\n.rs-input-parent--border .rs-input__icon {\n  background: transparent !important;\n  box-shadow: none !important; }\n\n.rs-input-parent--border .rs-input-content {\n  border-radius: 0px; }\n  .rs-input-parent--border .rs-input-content .rs-input__affects {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    pointer-events: none; }\n    .rs-input-parent--border .rs-input-content .rs-input__affects__1 {\n      border-bottom: 2px solid rgba(var(--rs-gray-3), 1);\n      width: 100%;\n      height: 2px;\n      position: absolute;\n      bottom: 0px;\n      transition: all 0.25s ease; }\n    .rs-input-parent--border .rs-input-content .rs-input__affects__2 {\n      border-bottom: 2px solid rgba(var(--rs-color), 1);\n      width: 0%;\n      height: 2px;\n      position: absolute;\n      bottom: 0px;\n      transition: all 0.25s ease;\n      left: 50%;\n      transform: translate(-50%); }\n  .rs-input-parent--border .rs-input-content .rs-input {\n    background: transparent;\n    border-radius: 0px; }\n    .rs-input-parent--border .rs-input-content .rs-input:focus ~ .rs-input__affects .rs-input__affects__2 {\n      width: 100%; }\n\n.rs-input-parent--shadow .rs-input__icon {\n  background: transparent;\n  z-index: 100; }\n\n.rs-input-parent--shadow .rs-input-content .rs-input__affects {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  border-radius: inherit;\n  pointer-events: none;\n  z-index: 10; }\n  .rs-input-parent--shadow .rs-input-content .rs-input__affects__1 {\n    box-shadow: 0px 6px 25px -6px rgba(0, 0, 0, var(--rs-shadow-opacity));\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0px;\n    transition: all 0.25s ease;\n    z-index: 200;\n    border-radius: inherit; }\n\n.rs-input-parent--shadow .rs-input-content .rs-input {\n  background: transparent;\n  border-radius: 0px;\n  border: 2px solid transparent; }\n  .rs-input-parent--shadow .rs-input-content .rs-input:focus {\n    transform: translate(0, 3px); }\n    .rs-input-parent--shadow .rs-input-content .rs-input:focus ~ .rs-input__icon {\n      background: rgba(var(--rs-background), 1) !important;\n      opacity: 1;\n      box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, var(--rs-shadow-opacity)) !important; }\n    .rs-input-parent--shadow .rs-input-content .rs-input:focus ~ .rs-input__affects .rs-input__affects__1 {\n      transform: translate(0, 3px);\n      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, var(--rs-shadow-opacity)); }\n\n@keyframes rotateInputLoading {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n";
styleInject(css_248z$h);

const RsInput = (_a) => {
    var props = __rest(_a, []);
    const [value, setValue] = React.useState("");
    const { state, border, shadow, label, labelPlaceholder, color, icon, iconAfter, placeholder, type, iconClick, loading, progress = 0, messageType = "primary", message, onChange } = props, rest = __rest(props, ["state", "border", "shadow", "label", "labelPlaceholder", "color", "icon", "iconAfter", "placeholder", "type", "iconClick", "loading", "progress", "messageType", "message", "onChange"]);
    const parentClasses = classnames("rs-input-parent", { "rs-change-color": color }, [`rs-input-parent--state-${state}`], { "rs-input-parent--border": border }, { "rs-input-parent--shadow": shadow }, { "rs-input-content--has-label": label || labelPlaceholder });
    const inputContentClasses = classnames("rs-input-content", { "rs-input-content--has-color": color }, { "rs-input-content--has-label": label || labelPlaceholder });
    const inputClasses = classnames("rs-input", { "rs-input--has-icon": icon }, { "rs-input--has-icon--after": iconAfter });
    const placeholderClasses = classnames("rs-input__label", {
        "rs-input__label--hidden": value !== "" || (props.value && props.value !== ""),
    });
    const labelClasses = classnames("rs-input__label", { "rs-input__label--placeholder": labelPlaceholder }, {
        "rs-input__label--hidden": value !== "" ||
            (props.value && props.value !== "") ||
            type === "date" ||
            type === "time",
    }, { "rs-input__label--label": label });
    const iconClasses = classnames("rs-input__icon", { "rs-input__icon--after": iconAfter }, { "rs-input__icon--click": iconClick });
    const progressClasses = classnames("rs-input__progress", { "rs-input__progress--danger": progress < 33 }, { "rs-input__progress--warn": progress < 66 && progress > 33 }, { "rs-input__progress--success": progress > 66 });
    const messageClasses = classnames("rs-input__message", [
        `rs-input__message--${messageType}`,
    ]);
    return (React__default["default"].createElement("div", { className: parentClasses, style: {
            "--rs-color": setComponentColor(color || ""),
        } },
        React__default["default"].createElement("div", { className: inputContentClasses },
            React__default["default"].createElement("input", Object.assign({ className: inputClasses, onChange: (e) => {
                    setValue(e.target.value);
                    onChange(e);
                }, type: type, value: value }, rest)),
            label ? (React__default["default"].createElement("label", { className: placeholderClasses }, placeholder)) : null,
            React__default["default"].createElement("label", { className: labelClasses }, label || placeholder || labelPlaceholder),
            icon ? (React__default["default"].createElement("span", { className: iconClasses, onClick: iconClick }, icon)) : null,
            loading ? React__default["default"].createElement("div", { className: "rs-input__loading" }) : null,
            React__default["default"].createElement("div", { className: "rs-input__affects" },
                React__default["default"].createElement("div", { className: "rs-input__affects__1" }),
                React__default["default"].createElement("div", { className: "rs-input__affects__2" }),
                React__default["default"].createElement("div", { className: "rs-input__affects__3" }),
                React__default["default"].createElement("div", { className: "rs-input__affects__4" }))),
        progress > 0 ? (React__default["default"].createElement("div", { className: progressClasses },
            React__default["default"].createElement("div", { className: "rs-input__progress__bar", style: { width: `${progress}%` } }))) : null,
        React__default["default"].createElement("div", null, message ? React__default["default"].createElement("div", { className: messageClasses },
            " ",
            message) : null)));
};

var css_248z$g = ":root {\n  --rs-primary: 25, 91, 255;\n  --rs-warn: 255, 186, 0;\n  --rs-danger: 255, 71, 87;\n  --rs-success: 70, 201, 58;\n  --rs-dark: 30, 30, 30;\n  --rs-light: 244, 247, 248;\n  --rs-color: 17, 18, 20;\n  --rs-facebook: 59, 89, 153;\n  --rs-twitter: 29, 161, 242;\n  --rs-youtube: 255, 0, 0;\n  --rs-pinterest: 189, 8, 28;\n  --rs-linkedin: 0, 119, 181;\n  --rs-snapchat: 255, 252, 0;\n  --rs-whatsapp: 37, 211, 102;\n  --rs-tumblr: 54, 70, 93;\n  --rs-reddit: 255, 69, 0;\n  --rs-spotify: 30, 215, 96;\n  --rs-amazon: 255, 153, 0;\n  --rs-medium: 2, 184, 117;\n  --rs-vimeo: 26, 183, 234;\n  --rs-skype: 0, 175, 240;\n  --rs-dribbble: 234, 76, 137;\n  --rs-slack: 74, 21, 75;\n  --rs-yahoo: 67, 2, 151;\n  --rs-twitch: 100, 65, 164;\n  --rs-discord: 114, 137, 218;\n  --rs-telegram: 0, 136, 204;\n  --rs-google-plus: 219, 68, 55;\n  --rs-messenger: 0, 132, 255;\n  --rs-background: 255, 255, 255;\n  --rs-text: 44, 62, 80;\n  --rs-gray-1: 249, 252, 253;\n  --rs-gray-2: 244, 247, 248;\n  --rs-gray-3: 240, 243, 244;\n  --rs-gray-4: 230, 233, 234; }\n\n.loading-enter-active,\n.loading-leave-active {\n  transition: opacity 0.5s; }\n\n.loading-enter,\n.loading-leave-to {\n  opacity: 0; }\n\n.rs-loading {\n  --rs-color: var(--rs-primary);\n  --rs-background: 255, 255, 255;\n  --rs-opacity: 0.6;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  z-index: 100000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(var(--rs-background), var(--rs-opacity));\n  transition: all 0.25s ease;\n  padding: 20px;\n  border-radius: inherit; }\n  .rs-loading--target {\n    position: absolute;\n    padding: 0; }\n  .rs-loading__load {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column; }\n    .rs-loading__load__text {\n      font-size: 0.75em;\n      margin: 7px;\n      font-weight: bold;\n      color: rgba(var(--rs-color), 1); }\n    .rs-loading__load__percent {\n      position: relative;\n      font-size: 0.65rem;\n      font-weight: bold;\n      color: rgba(var(--rs-color), 1);\n      margin-top: 1px;\n      z-index: 200; }\n    .rs-loading__load__animation {\n      width: 40px;\n      height: 40px;\n      position: relative;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n\n.rs-loading__progress {\n  width: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 4px;\n  background: rgba(var(--rs-color), 0.2); }\n  .rs-loading__progress__bar {\n    background: rgba(var(--rs-color), 1);\n    height: 100%;\n    position: relative;\n    border-radius: 0px 10px 10px 0px; }\n\n.rs-loading--default .rs-loading__load__animation {\n  border-radius: 50%; }\n  .rs-loading--default .rs-loading__load__animation__1 {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border: 3px solid rgba(var(--rs-color), 1);\n    border-radius: inherit;\n    border-top: 3px solid transparent;\n    border-left: 3px solid transparent;\n    border-right: 3px solid transparent;\n    animation: rotate 0.8s ease infinite;\n    top: 0px; }\n  .rs-loading--default .rs-loading__load__animation__2 {\n    top: 0px;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border: 3px dashed rgba(var(--rs-color), 1);\n    border-radius: inherit;\n    border-top: 3px solid transparent;\n    border-left: 3px solid transparent;\n    border-right: 3px solid transparent;\n    animation: rotate 0.8s linear infinite;\n    opacity: 0.2; }\n  .rs-loading--default .rs-loading__load__animation__3 {\n    display: none; }\n\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.rs-loading--waves .rs-loading__load__animation {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rs-loading--waves .rs-loading__load__animation__1 {\n    width: 0px;\n    background: transparent;\n    height: 0px;\n    position: absolute;\n    animation: waves 0.7s ease infinite;\n    box-shadow: 0px 0px 10px 0px rgba(var(--rs-color), 0.5);\n    border-radius: 50%; }\n  .rs-loading--waves .rs-loading__load__animation__2 {\n    width: 0px;\n    background: transparent;\n    height: 0px;\n    position: absolute;\n    animation: waves 1.4s linear infinite;\n    box-shadow: 0px 0px 10px 0px rgba(var(--rs-color), 0.5);\n    border-radius: 50%; }\n  .rs-loading--waves .rs-loading__load__animation__3 {\n    width: 0px;\n    background: transparent;\n    height: 0px;\n    position: absolute;\n    animation: waves 1.75s ease infinite;\n    box-shadow: 0px 0px 10px 0px rgba(var(--rs-color), 0.5);\n    border-radius: 50%; }\n\n@keyframes waves {\n  0% {\n    width: 0px;\n    height: 0px; }\n  100% {\n    height: 50px;\n    width: 50px;\n    opacity: 0; } }\n\n.rs-loading--corners .rs-loading__load__animation {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rs-loading--corners .rs-loading__load__animation__1 {\n    width: 100%;\n    background: transparent;\n    height: 100%;\n    position: absolute;\n    animation: corners 1s ease infinite;\n    border-radius: 50%;\n    border: 2px solid rgba(var(--rs-color), 1); }\n  .rs-loading--corners .rs-loading__load__animation__2 {\n    display: none; }\n  .rs-loading--corners .rs-loading__load__animation__3 {\n    display: none; }\n\n@keyframes corners {\n  0% {\n    border-radius: 50%;\n    transform: rotate(0deg); }\n  25% {\n    border-radius: 50% 50% 50% 15%; }\n  50% {\n    border-radius: 50% 50% 15% 30%; }\n  75% {\n    border-radius: 50% 15% 30% 30%; }\n  100% {\n    border-radius: 50%;\n    transform: rotate(-180deg); } }\n\n.rs-loading--border .rs-loading__load__animation {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%; }\n  .rs-loading--border .rs-loading__load__animation__1 {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border: 1px solid rgba(var(--rs-color), 1);\n    border-radius: inherit;\n    border-top: 1px solid transparent;\n    border-left: 1px solid transparent;\n    border-right: 1px solid transparent;\n    animation: rotate 1s linear infinite;\n    top: 0px; }\n  .rs-loading--border .rs-loading__load__animation__2 {\n    top: 0px;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border: 1px dashed rgba(var(--rs-color), 1);\n    border-radius: inherit;\n    border-top: 1px solid transparent;\n    border-left: 1px solid transparent;\n    border-right: 1px solid transparent;\n    animation: rotate 1s linear infinite 0.2s; }\n  .rs-loading--border .rs-loading__load__animation__3 {\n    top: 0px;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border: 1px dashed rgba(var(--rs-color), 1);\n    border-radius: inherit;\n    animation: rotate 1s linear infinite 0.4s;\n    opacity: 0.2; }\n\n.rs-loading--points .rs-loading__load__percent {\n  position: absolute;\n  top: -10px; }\n\n.rs-loading--points .rs-loading__load__animation {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  width: auto; }\n  .rs-loading--points .rs-loading__load__animation__1 {\n    width: 8px;\n    height: 8px;\n    background: rgba(var(--rs-color), 1);\n    border-radius: 50%;\n    margin: 3px;\n    animation: points 0.75s ease infinite; }\n  .rs-loading--points .rs-loading__load__animation__2 {\n    width: 8px;\n    height: 8px;\n    background: rgba(var(--rs-color), 1);\n    border-radius: 50%;\n    margin: 3px;\n    animation: points 0.75s ease infinite 0.25s; }\n  .rs-loading--points .rs-loading__load__animation__3 {\n    width: 8px;\n    height: 8px;\n    background: rgba(var(--rs-color), 1);\n    border-radius: 50%;\n    margin: 3px;\n    animation: points 0.75s ease infinite 0.5s; }\n\n@keyframes points {\n  0% {\n    transform: translate(0px, 0px); }\n  50% {\n    transform: translate(0, -15px); }\n  100% {\n    transform: translate(0px, 0px); } }\n\n.rs-loading--square .rs-loading__load__animation {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rs-loading--square .rs-loading__load__animation__1 {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border: 2px solid rgba(var(--rs-color), 1);\n    border-radius: inherit;\n    animation: rotateSquare 4s ease infinite;\n    top: 0px; }\n  .rs-loading--square .rs-loading__load__animation__2 {\n    top: 0px;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border: 2px solid rgba(var(--rs-color), 1);\n    border-radius: inherit;\n    animation: rotateSquare 4s ease infinite reverse;\n    background: rgba(var(--rs-background), 1); }\n  .rs-loading--square .rs-loading__load__animation__3 {\n    display: none; }\n\n@keyframes rotateSquare {\n  0% {\n    transform: rotate(0deg); }\n  50% {\n    transform: rotate(360deg); }\n  100% {\n    transform: rotate(0deg); } }\n\n.rs-loading--gradient .rs-loading__load__animation {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 60px;\n  height: 60px; }\n  .rs-loading--gradient .rs-loading__load__animation__1 {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border: 0px;\n    border-radius: inherit;\n    animation: rotate 1s linear infinite;\n    top: 0px;\n    background: linear-gradient(0deg, rgba(var(--rs-background), 0) 33%, rgba(var(--rs-color), 1) 100%);\n    border-radius: 50%; }\n  .rs-loading--gradient .rs-loading__load__animation__2 {\n    top: 2px;\n    position: absolute;\n    width: calc(100% - 4px);\n    height: calc(100% - 4px);\n    border: 0px;\n    border-radius: inherit;\n    background: rgba(var(--rs-background), 0.1);\n    border-radius: 50%; }\n  .rs-loading--gradient .rs-loading__load__animation__3 {\n    display: none; }\n\n.rs-loading--rectangle .rs-loading__load__percent {\n  position: absolute;\n  bottom: -2px; }\n\n.rs-loading--rectangle .rs-loading__load__animation {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center; }\n  .rs-loading--rectangle .rs-loading__load__animation__1 {\n    position: absolute;\n    width: 15px;\n    height: 15px;\n    border: 0px;\n    border-radius: inherit;\n    animation: rectangle 1s ease infinite;\n    background: rgba(var(--rs-color), 1); }\n  .rs-loading--rectangle .rs-loading__load__animation__2 {\n    position: absolute;\n    width: 15px;\n    height: 15px;\n    border: 0px;\n    border-radius: inherit;\n    animation: rectangle 1s ease-out infinite;\n    background: rgba(var(--rs-color), 0.2); }\n  .rs-loading--rectangle .rs-loading__load__animation__3 {\n    display: none; }\n\n@keyframes rectangle {\n  0% {\n    transform: translate(-50px); }\n  50% {\n    transform: translate(50px); }\n  100% {\n    transform: translate(-50px); } }\n\n.rs-loading--circles .rs-loading__load__animation {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 60px;\n  height: 60px; }\n  .rs-loading--circles .rs-loading__load__animation__1 {\n    position: absolute;\n    width: 40px;\n    height: 40px;\n    animation: rotate 1s ease infinite;\n    border-radius: 50%;\n    border: 2px solid rgba(var(--rs-color), 1);\n    border-top: 3px solid transparent;\n    border-left: 3px solid transparent;\n    border-right: 3px solid transparent; }\n  .rs-loading--circles .rs-loading__load__animation__2 {\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    animation: rotate 1s ease-in-out infinite;\n    border-radius: 50%;\n    border: 2px dashed rgba(var(--rs-color), 1);\n    border-top: 3px solid transparent;\n    border-left: 3px solid transparent;\n    border-right: 3px solid transparent; }\n  .rs-loading--circles .rs-loading__load__animation__3 {\n    position: absolute;\n    width: 60px;\n    height: 60px;\n    animation: rotate 1s linear infinite reverse;\n    border-radius: 50%;\n    border: 2px solid rgba(var(--rs-color), 1);\n    border-top: 3px solid transparent;\n    border-left: 3px solid transparent;\n    border-right: 3px solid transparent; }\n\n.rs-loading--square-rotate .rs-loading__load__percent {\n  position: absolute;\n  bottom: 30px; }\n\n.rs-loading--square-rotate .rs-loading__load__animation {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  width: 60px;\n  height: 60px; }\n  .rs-loading--square-rotate .rs-loading__load__animation__1 {\n    position: absolute;\n    width: 25px;\n    height: 25px;\n    animation: squareRotate 3s ease infinite;\n    background: rgba(var(--rs-color), 1); }\n  .rs-loading--square-rotate .rs-loading__load__animation__2 {\n    display: none; }\n  .rs-loading--square-rotate .rs-loading__load__animation__3 {\n    display: none; }\n\n@keyframes squareRotate {\n  0% {\n    transform: rotateX(0deg) rotateY(0deg); }\n  25% {\n    transform: rotateX(180deg) rotateY(0deg); }\n  50% {\n    transform: rotateX(180deg) rotateY(180deg); }\n  75% {\n    transform: rotateX(0deg) rotateY(180deg); }\n  100% {\n    transform: rotateX(0deg) rotateY(0deg); } }\n\n.rs-loading--scale .rs-loading__load__percent {\n  position: absolute;\n  bottom: 40px; }\n\n.rs-loading--scale .rs-loading__load__animation {\n  display: flex;\n  align-items: cneter;\n  justify-content: center;\n  width: 40px;\n  height: 40px; }\n  .rs-loading--scale .rs-loading__load__animation__1 {\n    position: relative;\n    width: 5px;\n    height: 5px;\n    background: rgba(var(--rs-color), 1);\n    margin: 3px;\n    animation: scale 0.8s ease infinite;\n    border-radius: 5px; }\n  .rs-loading--scale .rs-loading__load__animation__2 {\n    position: relative;\n    width: 5px;\n    height: 5px;\n    background: rgba(var(--rs-color), 1);\n    margin: 3px;\n    animation: scale 0.8s ease infinite 0.2s;\n    border-radius: 5px; }\n  .rs-loading--scale .rs-loading__load__animation__3 {\n    position: relative;\n    width: 5px;\n    height: 5px;\n    background: rgba(var(--rs-color), 1);\n    margin: 3px;\n    animation: scale 0.8s ease infinite 0.4s;\n    border-radius: 5px; }\n\n@keyframes scale {\n  0% {\n    height: 5px; }\n  50% {\n    height: 25px; }\n  0% {\n    height: 5px; } }\n";
styleInject(css_248z$g);

const RsLoading = (_a) => {
    var props = __rest(_a, []);
    const { isVisible, type, target, background = "primary", color, scale, text, percent, progress, opacity, } = props;
    const visibleClasses = classnames("rs-loading", [`rs-loading--${type || "default"}`], { "rs-loading--target": target }, { "rs-loading--background": background });
    return (React__default["default"].createElement(React__default["default"].Fragment, null, isVisible ? (React__default["default"].createElement("div", { className: visibleClasses, style: {
            "--rs-color": setComponentColor(color || "primary"),
            "--rs-background": background
                ? setComponentColor(background)
                : null,
            "--rs-opacity": opacity,
        } },
        React__default["default"].createElement("div", { className: "rs-loading__load", style: { transform: `scale(${scale})` } },
            React__default["default"].createElement("div", { className: "rs-loading__load__animation" },
                React__default["default"].createElement("div", { className: "rs-loading__load__percent" }, percent ? `${percent}%` : null),
                React__default["default"].createElement("div", { className: "rs-loading__load__animation__1" }),
                React__default["default"].createElement("div", { className: "rs-loading__load__animation__2" }),
                React__default["default"].createElement("div", { className: "rs-loading__load__animation__3" })),
            React__default["default"].createElement("div", { className: "rs-loading__load__text" }, text)),
        progress ? (React__default["default"].createElement("div", { className: "rs-loading__progress" },
            React__default["default"].createElement("div", { className: "rs-loading__progress__bar", style: { width: `${progress}%` } }))) : null)) : null));
};

var css_248z$f = ":root {\n  --rs-primary: 25, 91, 255;\n  --rs-warn: 255, 186, 0;\n  --rs-danger: 255, 71, 87;\n  --rs-success: 70, 201, 58;\n  --rs-dark: 30, 30, 30;\n  --rs-light: 244, 247, 248;\n  --rs-color: 17, 18, 20;\n  --rs-facebook: 59, 89, 153;\n  --rs-twitter: 29, 161, 242;\n  --rs-youtube: 255, 0, 0;\n  --rs-pinterest: 189, 8, 28;\n  --rs-linkedin: 0, 119, 181;\n  --rs-snapchat: 255, 252, 0;\n  --rs-whatsapp: 37, 211, 102;\n  --rs-tumblr: 54, 70, 93;\n  --rs-reddit: 255, 69, 0;\n  --rs-spotify: 30, 215, 96;\n  --rs-amazon: 255, 153, 0;\n  --rs-medium: 2, 184, 117;\n  --rs-vimeo: 26, 183, 234;\n  --rs-skype: 0, 175, 240;\n  --rs-dribbble: 234, 76, 137;\n  --rs-slack: 74, 21, 75;\n  --rs-yahoo: 67, 2, 151;\n  --rs-twitch: 100, 65, 164;\n  --rs-discord: 114, 137, 218;\n  --rs-telegram: 0, 136, 204;\n  --rs-google-plus: 219, 68, 55;\n  --rs-messenger: 0, 132, 255;\n  --rs-background: 255, 255, 255;\n  --rs-text: 44, 62, 80;\n  --rs-gray-1: 249, 252, 253;\n  --rs-gray-2: 244, 247, 248;\n  --rs-gray-3: 240, 243, 244;\n  --rs-gray-4: 230, 233, 234; }\n\n.rs-dialog-content {\n  --rs-color: var(--rs-primary); }\n\n.rs-dialog-enter-active {\n  transition: all 0.25s ease; }\n  .rs-dialog-enter-active .rs-dialog:not(.rs-dialog--fullScreen) {\n    animation: rebound 0.4s; }\n\n.rs-dialog-leave-active {\n  transition: all 0.25s ease; }\n  .rs-dialog-leave-active .rs-dialog {\n    transition: all 0.15s ease; }\n\n.rs-dialog-enter,\n.rs-dialog-leave-to {\n  opacity: 0; }\n  .rs-dialog-enter .rs-dialog,\n  .rs-dialog-leave-to .rs-dialog {\n    transform: scale(0.7);\n    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, var(--rs-shadow-opacity)); }\n    .rs-dialog-enter .rs-dialog--fullScreen,\n    .rs-dialog-leave-to .rs-dialog--fullScreen {\n      transform: translate(0, 8%) !important; }\n\n@keyframes rebound {\n  0% {\n    transform: scale(0.8); }\n  40% {\n    transform: scale(1.08); }\n  80% {\n    transform: scale(0.98); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes reboundClick {\n  0% {\n    transform: scale(1); }\n  40% {\n    transform: scale(1.05); }\n  80% {\n    transform: scale(0.96); }\n  100% {\n    transform: scale(1); } }\n\n.rs-dialog-content {\n  background: rgba(0, 0, 0, var(--rs-background-opacity));\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  z-index: var(--rs-zindex-2);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  max-height: 100vh;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding-top: 80px;\n  padding-bottom: 80px; }\n  .rs-dialog-content.fullScreen {\n    padding: 0px;\n    overflow: hidden; }\n  .rs-dialog-content.blur {\n    backdrop-filter: saturate(180%) blur(15px); }\n\n.rs-dialog {\n  background: rgba(var(--rs-background), 1);\n  color: rgba(var(--rs-text), 1);\n  position: relative;\n  min-width: 400px;\n  border-radius: var(--rs-radius);\n  transition: all 0.25s ease;\n  box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, var(--rs-shadow-opacity));\n  max-width: 800px;\n  margin: auto; }\n  .rs-dialog--notCenter .rs-dialog__header {\n    display: block; }\n  .rs-dialog__loading {\n    width: 100%;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    height: 100%;\n    border-radius: inherit;\n    background: rgba(var(--rs-background), 0.8);\n    z-index: 100;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .rs-dialog__loading:after {\n      content: '';\n      position: absolute;\n      width: 30px;\n      height: 30px;\n      border-radius: inherit;\n      border: 2px solid rgba(var(--rs-color), 1);\n      border-top: 2px solid rgba(var(--rs-color), 0);\n      border-left: 2px solid rgba(var(--rs-color), 0);\n      border-bottom: 2px solid rgba(var(--rs-color), 0);\n      box-sizing: border-box;\n      transition: all 0.25s ease;\n      display: block;\n      box-shadow: 0px 0px 0px 0px rgba(var(--rs-color), 1);\n      animation: loadingDialog 0.6s ease infinite; }\n    .rs-dialog__loading:before {\n      content: '';\n      position: absolute;\n      width: 30px;\n      height: 30px;\n      border-radius: inherit;\n      border: 2px dashed rgba(var(--rs-color), 1);\n      border-top: 2px solid rgba(var(--rs-color), 0);\n      border-left: 2px solid rgba(var(--rs-color), 0);\n      border-bottom: 2px solid rgba(var(--rs-color), 0);\n      box-sizing: border-box;\n      transition: all 0.25s ease;\n      display: block;\n      box-shadow: 0px 0px 0px 0px rgba(var(--rs-color), 1);\n      animation: loadingDialog 0.6s linear infinite; }\n  .rs-dialog--scroll .rs-dialog__content {\n    max-height: calc(80vh - 200px);\n    overflow: auto; }\n  .rs-dialog--autoWidth {\n    width: auto !important;\n    min-width: auto !important;\n    max-width: auto !important; }\n  .rs-dialog--square {\n    border-radius: 0px; }\n    .rs-dialog--square .rs-dialog__close {\n      border-radius: 0px; }\n  .rs-dialog--notPadding .rs-dialog__footer {\n    padding: 0px; }\n  .rs-dialog--notPadding .rs-dialog__content {\n    padding: 0px;\n    margin-bottom: 0px !important; }\n  .rs-dialog--notPadding .rs-dialog__header {\n    padding: 0px; }\n  .rs-dialog--rebound {\n    animation: reboundClick 0.3s !important; }\n  .rs-dialog--fullScreen {\n    width: calc(100% - 30px) !important;\n    height: calc(100% - 30px) !important;\n    max-width: none !important;\n    max-height: none !important; }\n  .rs-dialog__footer {\n    padding: 10px 16px;\n    padding-top: 0px; }\n  .rs-dialog__header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 10px 16px; }\n  .rs-dialog__content {\n    padding: 10px 16px;\n    width: 100%;\n    position: relative;\n    border-radius: inherit; }\n    .rs-dialog__content.notFooter {\n      margin-bottom: 20px; }\n  .rs-dialog__close {\n    --rs-color: var(--rs-text);\n    position: absolute;\n    top: -6px;\n    right: -6px;\n    padding: 0px;\n    margin: 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: inherit;\n    border-radius: 12px;\n    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--rs-shadow-opacity));\n    transition: all 0.25s ease;\n    z-index: 200; }\n    .rs-dialog__close i {\n      width: 34px;\n      height: 34px;\n      opacity: 0.7; }\n      .rs-dialog__close i:after {\n        width: 14px; }\n      .rs-dialog__close i:before {\n        width: 14px; }\n    .rs-dialog__close:hover {\n      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, var(--rs-shadow-opacity));\n      transform: translate(-2px, 2px); }\n      .rs-dialog__close:hover i {\n        opacity: 1; }\n\n@keyframes loadingDialog {\n  0% {\n    transform: rotate(0); }\n  100% {\n    transform: rotate(360deg); } }\n\n@media (max-width: 600px) {\n  .rs-dialog {\n    min-width: calc(100vw - 20px);\n    max-width: calc(100vw - 20px);\n    margin: auto 10px; } }\n";
styleInject(css_248z$f);

const RsModal = (_a) => {
    var props = __rest(_a, []);
    const [rebound, setRebound] = React.useState(false);
    const dialogRef = React__default["default"].createRef();
    const { active, blur, fullScreen, notPadding, square, autoWidth, scroll, loading, notCenter, notClose, overflowHidden, header, children, footer, preventClose, handleClose, } = props;
    React.useEffect(() => {
        window.addEventListener("keydown", handleEsc);
        if (overflowHidden && active)
            document.body.style.overflow = "hidden";
        return () => window.removeEventListener("keydown", handleEsc);
    });
    const handleEsc = (e) => {
        if (e.which === 27 && !preventClose) {
            handleInternalClose(dialogRef.current);
        }
    };
    const handleInternalClose = (el) => {
        if (el) {
            el.classList.add("rs-dialog-leave-active");
            el.classList.add("rs-dialog-leave-to");
            setTimeout(() => {
                if (handleClose) {
                    if (overflowHidden) {
                        document.body.style.overflow = "";
                    }
                    handleClose();
                }
            }, 100);
        }
    };
    const dialogContentClasses = classnames("rs-dialog-content", { blur: blur }, { fullScreen: fullScreen });
    const dialogClasses = classnames("rs-dialog", { "rs-dialog--fullScreen": fullScreen }, { "rs-dialog--rebound": rebound }, { "rs-dialog--notPadding": notPadding }, { "rs-dialog--square": square }, { "rs-dialog--autoWidth": autoWidth }, { "rs-dialog--scroll": scroll }, { "rs-dialog--loading": loading }, { "rs-dialog--notCenter": notCenter });
    const dialogChildrenClasses = classnames("rs-dialog__content", {
        notFooter: !footer,
    });
    return (React__default["default"].createElement(CSSTransition$1, { timeout: 300, in: active, mountOnEnter: true, unmountOnExit: true, classNames: {
            enterActive: "rs-dialog-enter-active",
        } },
        React__default["default"].createElement(React__default["default"].Fragment, null, active ? (ReactDOM__default["default"].createPortal(React__default["default"].createElement("div", { className: dialogContentClasses, ref: dialogRef, onClick: (e) => {
                if (!e.target.closest(".rs-dialog") && !preventClose) {
                    handleInternalClose(dialogRef.current);
                }
                if (preventClose && !e.target.closest(".rs-dialog")) {
                    setRebound(true);
                    setTimeout(() => {
                        setRebound(false);
                    }, 300);
                }
            } },
            React__default["default"].createElement("div", { className: dialogClasses },
                loading ? (React__default["default"].createElement("div", { className: "rs-dialog__loading" },
                    React__default["default"].createElement("div", { className: "rs-dialog__loading__load" }))) : null,
                !notClose ? (React__default["default"].createElement("button", { className: "rs-dialog__close", onClick: () => handleInternalClose(dialogRef.current) },
                    React__default["default"].createElement(RsIconClose, { hover: "x" }))) : null,
                React__default["default"].createElement("header", { className: "rs-dialog__header" }, header),
                React__default["default"].createElement("div", { className: dialogChildrenClasses }, children),
                React__default["default"].createElement("footer", { className: "rs-dialog__footer" }, footer))), document.body)) : (React__default["default"].createElement(React__default["default"].Fragment, null)))));
};

var css_248z$e = ".rs-navbar-content {\n  --rs-color: var(--rs-background); }\n\n.rs-navbar-content {\n  width: 100%;\n  position: absolute;\n  z-index: 9000;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  border-radius: 0px 0px 15px 15px;\n  background: rgba(var(--rs-color), 1);\n  transition: all 0.25s ease;\n  color: rgba(var(--rs-text), 1); }\n  .rs-navbar-content.paddingScroll:not(.paddingScrollActive) {\n    padding-top: 20px;\n    padding-bottom: 20px; }\n    .rs-navbar-content.paddingScroll:not(.paddingScrollActive) .rs-navbar__group__items {\n      margin-bottom: -30px; }\n  .rs-navbar-content.rsNavbarSquare {\n    border-radius: 0px; }\n  .rs-navbar-content.textWhite {\n    color: #fff; }\n    .rs-navbar-content.textWhite .rs-navbar__line {\n      background: #fff; }\n    .rs-navbar-content.textWhite .rs-navbar__item:before {\n      background: #fff; }\n  .rs-navbar-content.fixed {\n    position: fixed !important; }\n  .rs-navbar-content.shadow, .rs-navbar-content.shadowActive {\n    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, var(--rs-shadow-opacity)); }\n  .rs-navbar-content.hidden {\n    transform: translate(0, -100%); }\n\n.rs-navbar {\n  width: 100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: 0px 15px;\n  box-sizing: border-box;\n  min-height: 44px; }\n  .rs-navbar__left {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start; }\n  .rs-navbar__right {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end; }\n  .rs-navbar__center {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .rs-navbar__line {\n    position: absolute;\n    left: 0px;\n    bottom: 0px;\n    width: 100px;\n    background: rgba(var(--rs-text), 1);\n    height: 3px;\n    transition: all 0.25s ease; }\n    .rs-navbar__line.notTransition {\n      transition: none !important; }\n";
styleInject(css_248z$e);

const RsNavbar = (_a) => {
    var props = __rest(_a, []);
    const NavbarRef = React__default["default"].createRef();
    const { fixed, shadow, textWhite, paddingScroll, shadowScroll, square, color, children, hideScroll, } = props;
    const [hidden, setHidden] = React.useState(false);
    const [prevScrollPos, setPrevScrollPos] = React.useState(window.pageYOffset);
    const [paddingScrollActive, setPaddingScrollActive] = React.useState(false);
    const [shadowScrollActive, setShadowScrollActive] = React.useState(false);
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPos < currentScrollPos;
        console.log(shadowScrollActive);
        if (hideScroll) {
            setHidden(visible);
            setPrevScrollPos(currentScrollPos);
        }
        else if (paddingScroll) {
            if (window.pageYOffset > 0) {
                setPaddingScrollActive(true);
            }
            else {
                setPaddingScrollActive(false);
            }
        }
        else if (shadowScroll) {
            if (window.pageYOffset > 0) {
                setShadowScrollActive(true);
            }
            else {
                setShadowScrollActive(false);
            }
        }
    };
    React.useEffect(() => {
        if (hideScroll || paddingScroll || shadowScroll) {
            window.addEventListener("scroll", handleScroll);
        }
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
    const navbarContentClasses = classnames("rs-navbar-content", { fixed: fixed }, { shadow: shadow }, { hidden: hidden }, { shadowActive: shadowScrollActive }, { textWhite: textWhite }, { paddingScroll: paddingScroll }, { paddingScrollActive: paddingScrollActive }, { rsNavbarSquare: square });
    return (React__default["default"].createElement("div", { ref: NavbarRef, style: {
            "--rs-color": setComponentColor(color || ""),
        }, className: navbarContentClasses },
        React__default["default"].createElement("div", { className: "rs-navbar" }, children)));
};

var css_248z$d = ".rs-navbar__group {\n  position: relative; }\n  .rs-navbar__group:hover .rs-navbar__group__item {\n    opacity: 1; }\n  .rs-navbar__group:hover .rs-navbar__group__items {\n    opacity: 1;\n    visibility: visible;\n    transform: translate(0, 100%); }\n  .rs-navbar__group__item {\n    padding: 10px 15px;\n    background: transparent;\n    color: inherit;\n    font-weight: bold;\n    transition: all 0.25s ease, color 0s;\n    opacity: 0.7;\n    border: 0px; }\n  .rs-navbar__group__items {\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    margin-bottom: -12px;\n    transform: translate(0, 90%);\n    background: rgba(var(--rs-color), 1);\n    border-radius: 5px 18px 18px 18px;\n    padding: 10px;\n    min-width: 160px;\n    opacity: 0;\n    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--rs-shadow-opacity));\n    transition: all 0.25s ease;\n    color: inherit;\n    visibility: hidden; }\n    .rs-navbar__group__items:after {\n      content: \"\";\n      left: 0px;\n      top: -13px;\n      background: transparent;\n      width: 100%;\n      height: 14px;\n      position: absolute;\n      z-index: -1; }\n    .rs-navbar__group__items .rs-navbar__item {\n      text-align: left;\n      width: 100%;\n      position: relative;\n      padding: 5px 10px; }\n      .rs-navbar__group__items .rs-navbar__item:before {\n        content: \"\";\n        left: 0px;\n        top: 0px;\n        width: 4px;\n        height: 4px;\n        background: rgba(var(--rs-text), 1);\n        position: absolute;\n        border-radius: 50%;\n        top: calc(50% - 2px);\n        opacity: 0;\n        transform: translate(-10px);\n        transition: all 0.25s ease; }\n      .rs-navbar__group__items .rs-navbar__item.active:before {\n        opacity: 1;\n        transform: translate(0px); }\n";
styleInject(css_248z$d);

const RsNavbarGroup = (_a) => {
    var props = __rest(_a, []);
    const { title, children } = props;
    return (React__default["default"].createElement("div", { className: "rs-navbar__group" },
        React__default["default"].createElement("button", { className: "rs-navbar__group__item" }, title),
        React__default["default"].createElement("div", { className: "rs-navbar__group__items" }, children)));
};

var css_248z$c = ".rs-navbar__item {\n  padding: 10px 15px;\n  margin: 0px;\n  border: 0px;\n  background: transparent;\n  font-size: 0.85rem;\n  opacity: 0.7;\n  transition: all 0.25s ease, color 0s;\n  font-weight: bold;\n  color: inherit; }\n  .rs-navbar__item.active {\n    opacity: 1; }\n  .rs-navbar__item:hover {\n    opacity: 1; }\n";
styleInject(css_248z$c);

const RsNavbarItem = (_a) => {
    var props = __rest(_a, []);
    const { active, children } = props;
    const ButtonClasses = classnames("rs-navbar__item", { active: active });
    return React__default["default"].createElement("button", { className: ButtonClasses }, children);
};

var css_248z$b = ":root {\n  --rs-primary: 25, 91, 255;\n  --rs-warn: 255, 186, 0;\n  --rs-danger: 255, 71, 87;\n  --rs-success: 70, 201, 58;\n  --rs-dark: 30, 30, 30;\n  --rs-light: 244, 247, 248;\n  --rs-color: 17, 18, 20;\n  --rs-facebook: 59, 89, 153;\n  --rs-twitter: 29, 161, 242;\n  --rs-youtube: 255, 0, 0;\n  --rs-pinterest: 189, 8, 28;\n  --rs-linkedin: 0, 119, 181;\n  --rs-snapchat: 255, 252, 0;\n  --rs-whatsapp: 37, 211, 102;\n  --rs-tumblr: 54, 70, 93;\n  --rs-reddit: 255, 69, 0;\n  --rs-spotify: 30, 215, 96;\n  --rs-amazon: 255, 153, 0;\n  --rs-medium: 2, 184, 117;\n  --rs-vimeo: 26, 183, 234;\n  --rs-skype: 0, 175, 240;\n  --rs-dribbble: 234, 76, 137;\n  --rs-slack: 74, 21, 75;\n  --rs-yahoo: 67, 2, 151;\n  --rs-twitch: 100, 65, 164;\n  --rs-discord: 114, 137, 218;\n  --rs-telegram: 0, 136, 204;\n  --rs-google-plus: 219, 68, 55;\n  --rs-messenger: 0, 132, 255;\n  --rs-background: 255, 255, 255;\n  --rs-text: 44, 62, 80;\n  --rs-gray-1: 249, 252, 253;\n  --rs-gray-2: 244, 247, 248;\n  --rs-gray-3: 240, 243, 244;\n  --rs-gray-4: 230, 233, 234; }\n\n.notification-enter-active {\n  transition: all 0.3s ease 0.05s, transform 0.3s ease, margin 0.25s ease,\r clip-path 8s ease 0.8s; }\n\n.notification-leave-active {\n  transition: all 0.25s ease !important; }\n\n.notification-leave-to {\n  max-height: 0px !important;\n  height: 0px !important;\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);\n  opacity: 0 !important;\n  clip-path: circle(0% at 80% 35%) !important;\n  transform: translate(0, 10px) !important; }\n\n.notification-enter {\n  transform: translate(25%);\n  clip-path: circle(0% at 80% 35%) !important; }\n  .notification-enter .rs-notification__content {\n    opacity: 0;\n    transform: translate(10%); }\n\n.rs-notification-parent {\n  position: fixed;\n  right: 0px;\n  bottom: 0px;\n  z-index: 200000;\n  transition: all 25s ease;\n  padding: 10px 0px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: flex-end; }\n  .rs-notification-parent--top-right {\n    bottom: auto;\n    top: 0px;\n    display: flex;\n    flex-direction: column-reverse; }\n  .rs-notification-parent--top-center {\n    bottom: auto;\n    top: 0px;\n    display: flex;\n    flex-direction: column-reverse;\n    left: 50%;\n    right: auto;\n    transform: translate(-50%); }\n    .rs-notification-parent--top-center .rs-notification--sticky {\n      margin: 3px 20px;\n      border-radius: 20px; }\n      .rs-notification-parent--top-center .rs-notification--sticky:last-child {\n        border-radius: 0px 0px 20px 20px;\n        margin-top: -10px; }\n    .rs-notification-parent--top-center .rs-notification {\n      clip-path: circle(120% at 50% 0%);\n      transition: all 0.25s ease, transform 0.3s ease, max-height 0.25s ease,\r clip-path 0.5s ease 0.1s; }\n      .rs-notification-parent--top-center .rs-notification.rs-notification--border {\n        border: 3px solid transparent;\n        border-top: 3px solid rgba(var(--rs-border), 1); }\n    .rs-notification-parent--top-center .notification-enter {\n      transform: translate(0, -25%);\n      clip-path: circle(0% at 50% 0%) !important; }\n      .rs-notification-parent--top-center .notification-enter .rs-notification__content {\n        opacity: 0;\n        transform: translate(0, -10%); }\n  .rs-notification-parent--bottom-center {\n    left: 50%;\n    right: auto;\n    transform: translate(-50%); }\n    .rs-notification-parent--bottom-center .rs-notification--sticky {\n      margin: 3px 20px;\n      border-radius: 20px; }\n      .rs-notification-parent--bottom-center .rs-notification--sticky:last-child {\n        border-radius: 20px 20px 0px 0px;\n        margin-bottom: -10px; }\n    .rs-notification-parent--bottom-center .rs-notification {\n      clip-path: circle(120% at 50% 100%);\n      transition: all 0.25s ease, transform 0.3s ease, max-height 0.25s ease,\r clip-path 0.5s ease 0.1s; }\n      .rs-notification-parent--bottom-center .rs-notification.rs-notification--border {\n        border: 3px solid transparent;\n        border-bottom: 3px solid rgba(var(--rs-border), 1); }\n    .rs-notification-parent--bottom-center .notification-enter {\n      transform: translate(0, 25%);\n      clip-path: circle(0% at 50% 100%) !important; }\n      .rs-notification-parent--bottom-center .notification-enter .rs-notification__content {\n        opacity: 0;\n        transform: translate(0, 10%); }\n  .rs-notification-parent--top-left {\n    bottom: auto;\n    top: 0px;\n    left: 0px;\n    right: auto;\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: flex-start;\n    justify-content: flex-end; }\n    .rs-notification-parent--top-left .rs-notification--sticky {\n      margin-left: 0px;\n      border-radius: 0px 20px 20px 0px; }\n    .rs-notification-parent--top-left .rs-notification {\n      clip-path: circle(145% at 0% 50%); }\n      .rs-notification-parent--top-left .rs-notification.rs-notification--border {\n        border: 3px solid transparent;\n        border-left: 3px solid rgba(var(--rs-border), 1); }\n    .rs-notification-parent--top-left .notification-enter {\n      transform: translate(-25%);\n      clip-path: circle(0% at 20% 35%) !important; }\n      .rs-notification-parent--top-left .notification-enter .rs-notification__content {\n        opacity: 0;\n        transform: translate(-10%); }\n  .rs-notification-parent--bottom-left {\n    left: 0px;\n    right: auto;\n    align-items: flex-start; }\n    .rs-notification-parent--bottom-left .rs-notification--sticky {\n      margin-left: 0px;\n      border-radius: 0px 20px 20px 0px; }\n    .rs-notification-parent--bottom-left .rs-notification {\n      clip-path: circle(145% at 0% 50%); }\n      .rs-notification-parent--bottom-left .rs-notification.rs-notification--border {\n        border: 3px solid transparent;\n        border-left: 3px solid rgba(var(--rs-border), 1); }\n    .rs-notification-parent--bottom-left .notification-enter {\n      transform: translate(-25%);\n      clip-path: circle(0% at 20% 35%) !important; }\n      .rs-notification-parent--bottom-left .notification-enter .rs-notification__content {\n        opacity: 0;\n        transform: translate(-10%); }\n\n.rs-notification {\n  --rs-color: var(--rs-background);\n  --rs-border: var(--rs-background);\n  --rs-opacity: 0.6;\n  position: relative;\n  max-width: 340px;\n  width: 100%;\n  height: auto;\n  border-radius: 20px;\n  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, var(--rs-shadow-opacity));\n  overflow: hidden;\n  clip-path: circle(145% at 100% 50%);\n  background: rgba(var(--rs-color), 1);\n  color: rgba(var(--rs-text), 1);\n  margin: 3px 10px;\n  transition: all 0.25s ease, transform 0.3s ease 0.1s, max-height 0.25s ease,\r clip-path 0.5s ease 0.1s; }\n  .rs-notification:hover:not(.rs-notification--flat) {\n    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, var(--rs-shadow-opacity));\n    transform: translate(0, 3px); }\n  .rs-notification--notPadding {\n    padding: 0px !important; }\n  .rs-notification.rs-notification--icon {\n    padding-left: 50px !important; }\n  .rs-notification.rs-notification--loading {\n    width: 100px !important;\n    max-height: 100px !important;\n    min-height: 100px !important;\n    padding: 0px !important;\n    padding-left: 0px !important;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .rs-notification--width-auto {\n    width: auto;\n    max-width: none; }\n  .rs-notification--width-all {\n    max-width: calc(100vw - 50px);\n    width: calc(100vw - 50px); }\n  .rs-notification--square {\n    border-radius: 0px !important; }\n  .rs-notification--sticky {\n    margin-right: 0px;\n    margin-bottom: 0px;\n    border-radius: 20px 0px 0px 20px; }\n  .rs-notification--flat {\n    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, var(--rs-shadow-opacity));\n    background: rgba(var(--rs-background), 1);\n    color: rgba(var(--rs-color), 1) !important; }\n    .rs-notification--flat:hover::after {\n      background: rgba(var(--rs-color), 0.15); }\n    .rs-notification--flat .rs-notification__progress {\n      background: rgba(var(--rs-color), 1); }\n    .rs-notification--flat .rs-notification__close {\n      --rs-color: inherit; }\n    .rs-notification--flat .rs-notification__content {\n      color: rgba(var(--rs-color), 1) !important; }\n    .rs-notification--flat.rs-notification--border {\n      border: 0px solid transparent !important;\n      border-right: 3px solid rgba(var(--rs-border), 1) !important; }\n    .rs-notification--flat:after {\n      content: '';\n      background: rgba(var(--rs-color), 0.1);\n      width: 100%;\n      height: 100%;\n      border-radius: inherit;\n      position: absolute;\n      top: 0px;\n      left: 0px;\n      z-index: -1;\n      transition: all 0.25s ease; }\n  .rs-notification.rs-notification--onClick {\n    cursor: pointer; }\n  .rs-notification.rs-notification--color:not(.rs-notification--flat) {\n    color: #fff; }\n    .rs-notification.rs-notification--color:not(.rs-notification--flat) .rs-notification__progress {\n      background: #fff; }\n    .rs-notification.rs-notification--color:not(.rs-notification--flat) .rs-notification__close {\n      --rs-color: 255, 255, 255; }\n    .rs-notification.rs-notification--color:not(.rs-notification--flat) .rs-notification__loading:after {\n      border: 2px solid #fff;\n      border-top: 2px solid transparent;\n      border-left: 2px solid transparent;\n      border-right: 2px solid transparent; }\n    .rs-notification.rs-notification--color:not(.rs-notification--flat) .rs-notification__loading:before {\n      border: 2px dashed #fff;\n      border-top: 2px solid transparent;\n      border-left: 2px solid transparent;\n      border-right: 2px solid transparent; }\n  .rs-notification.rs-notification--border {\n    border: 3px solid transparent;\n    border-right: 3px solid rgba(var(--rs-border), 1); }\n  .rs-notification__progress {\n    width: 0%;\n    height: 3px;\n    background: rgba(var(--rs-text), 1);\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    transition: all 0.25s ease; }\n  .rs-notification__loading {\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    position: absolute; }\n    .rs-notification__loading:after {\n      box-sizing: border-box;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      border: 2px solid rgba(var(--rs-text), 1);\n      border-radius: inherit;\n      border-top: 2px solid transparent;\n      border-left: 2px solid transparent;\n      border-right: 2px solid transparent;\n      animation: loadingNoti 0.8s ease infinite;\n      top: 0px;\n      content: ''; }\n    .rs-notification__loading:before {\n      box-sizing: border-box;\n      top: 0px;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      border: 2px dashed rgba(var(--rs-text), 1);\n      border-radius: inherit;\n      border-top: 2px solid transparent;\n      border-left: 2px solid transparent;\n      border-right: 2px solid transparent;\n      animation: loadingNoti 0.8s linear infinite;\n      opacity: 0.2;\n      content: ''; }\n  .rs-notification__close {\n    --rs-color: var(--rs-text);\n    position: absolute;\n    border: 0px;\n    background: transparent;\n    top: 2px;\n    right: 2px;\n    transform: scale(0.75);\n    padding: 0px; }\n  .rs-notification__icon {\n    position: absolute;\n    top: calc(50% - 22px);\n    background: transparent;\n    width: 45px;\n    height: 45px;\n    left: 2px;\n    border-radius: 0px 35% 35% 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .rs-notification__icon i {\n      font-size: 1.2rem; }\n  .rs-notification__content {\n    position: relative;\n    width: auto;\n    height: auto;\n    transition: all 0.25s ease 0.2s;\n    opacity: 1; }\n    .rs-notification__content__text {\n      width: 100%; }\n      .rs-notification__content__text p {\n        margin: 0px;\n        padding: 0px;\n        font-size: 0.75rem;\n        line-height: 1rem; }\n    .rs-notification__content__header {\n      width: 100%;\n      margin: 0px;\n      padding: 0px;\n      padding-bottom: 6px; }\n      .rs-notification__content__header h4 {\n        width: 100%;\n        margin: 0px;\n        padding: 0px;\n        font-size: 0.9rem; }\n\n.darken .rs-notification--dark {\n  color: #fff !important; }\n  .darken .rs-notification--dark .rs-notification__close {\n    --rs-color: 255, 255, 255 !important; }\n  .darken .rs-notification--dark h4 {\n    color: #fff !important; }\n  .darken .rs-notification--dark p {\n    color: #fff !important; }\n\n@keyframes loadingNoti {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes progressNoti {\n  0% {\n    width: 0%; }\n  100% {\n    width: 100%; } }\n\n@media (max-width: 600px) {\n  .rs-notification {\n    margin: 3px 0px !important;\n    border-radius: 0px !important;\n    width: 100% !important;\n    max-width: 100% !important;\n    min-width: 100% !important; }\n    .rs-notification:hover {\n      transform: translate(0) !important; }\n    .rs-notification:last-child {\n      margin-bottom: 0px !important; }\n  .rs-notification-parent {\n    padding: 0px;\n    width: 100% !important;\n    max-width: 100% !important; }\n    .rs-notification-parent .rs-notification--sticky {\n      margin-bottom: 0px !important; }\n    .rs-notification-parent.rs-notification-parent--top-center .rs-notification:last-child {\n      margin-bottom: 3px;\n      margin-top: 0px !important; } }\n";
styleInject(css_248z$b);

const RsNotification = (_a) => {
    var props = __rest(_a, []);
    const notificationRef = React__default["default"].createRef();
    const [isVisible, setVisible] = React.useState(false);
    const destroyTimer = React__default["default"].useRef(false);
    const { color, border, icon, pointer, flat, sticky, square, width, loading, notPadding, classNotification, notificationPosition, title, text, closeButton, duration, content, } = props;
    React.useEffect(() => {
        const parent = document.querySelector(`.rs-notification-parent--${notificationPosition || "bottom-right"}`) || document.createElement("div");
        if (!document.querySelector(`.rs-notification-parent--${notificationPosition || "bottom-right"}`)) {
            parent.className = "rs-notification-parent";
            parent.classList.add(`rs-notification-parent--${notificationPosition || "bottom-right"}`);
        }
        if (notificationRef.current) {
            parent.appendChild(notificationRef.current);
            document.body.appendChild(parent);
        }
        setVisible(true);
        if (!sticky) {
            destroyTimer.current = setTimeout(() => {
                if (notificationRef.current) {
                    destroy();
                }
            }, duration * 1000 || 4000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [notificationRef, notificationPosition]);
    const destroy = () => {
        notificationRef.current.classList.add("notification-leave-active", "notification-leave-to");
        const parent = notificationRef.current.parentNode;
        if (parent.childNodes.length === 1) {
            return setTimeout(() => {
                document.body.removeChild(parent);
            }, 500);
        }
        setTimeout(() => {
            parent.removeChild(notificationRef.current);
        }, 500);
    };
    const forceDestroy = () => {
        console.log(notificationRef);
        notificationRef.current.classList.add("notification-leave-active", "notification-leave-to");
    };
    const handleMouseEnter = () => {
        if (!sticky) {
            clearTimeout(destroyTimer.current);
        }
    };
    const handleMouseLeave = () => {
        if (!sticky) {
            destroyTimer.current = setTimeout(() => {
                destroy();
            }, duration * 1000 || 4000);
        }
    };
    const beforeEnter = (el) => {
        el.style.maxHeight = `0px`;
        el.style.padding = `0px 20px`;
    };
    const enter = (el) => {
        const h = el.scrollHeight;
        el.style.maxHeight = `${h + 40}px`;
        if (window.innerWidth < 600) {
            el.style.padding = `15px`;
        }
        else {
            el.style.padding = `20px`;
        }
    };
    const notificatinClasses = classnames("rs-notification", { "rs-notification--color": color }, { "rs-notification--border": border }, { "rs-notification--icon": icon }, { "rs-notification--onClick": pointer }, { "rs-notification--flat": flat }, { "rs-notification--sticky": sticky }, { "rs-notification--square": square }, { "rs-notification--width-all": width === "100%" }, { "rs-notification--width-auto": width === "auto" }, { "rs-notification--loading": loading }, { "rs-notification--notPadding": notPadding }, classNotification);
    console.log(notificationRef);
    return (React__default["default"].createElement(CSSTransition$1, { timeout: 100, in: isVisible, onEnter: beforeEnter, onEntered: enter, mountOnEnter: true, unmountOnExit: true, classNames: {
            enter: "notification-enter",
            enterActive: "notification-enter-active",
        } }, isVisible ? (React__default["default"].createElement("div", { className: notificatinClasses, ref: notificationRef, style: {
            "--rs-color": setComponentColor(color || ""),
            "--rs-border": setComponentColor(border || ""),
        }, onMouseEnter: () => handleMouseEnter(), onMouseLeave: () => handleMouseLeave() },
        !loading && icon ? (React__default["default"].createElement("div", { className: "rs-notification__icon" }, icon)) : null,
        !loading && !content ? (React__default["default"].createElement("div", { className: "rs-notification__content" },
            title ? (React__default["default"].createElement("div", { className: "rs-notification__content__header" },
                React__default["default"].createElement("h4", null, title))) : null,
            text ? (React__default["default"].createElement("div", { className: "rs-notification__content__text" },
                React__default["default"].createElement("p", null, text))) : null)) : null,
        !loading && content ? (React__default["default"].createElement("div", { className: "rs-notification__content" },
            React__default["default"].createElement("div", { className: "rs-notification__content__header" }, title),
            React__default["default"].createElement("div", { className: "rs-notification__content__text" }, text),
            content)) : null,
        closeButton ? (React__default["default"].createElement("button", { className: "rs-notification__close", onClick: forceDestroy },
            React__default["default"].createElement(RsIconClose, { hover: "less" }))) : null,
        loading ? React__default["default"].createElement("div", { className: "rs-notification__loading" }, " ") : null)) : (React__default["default"].createElement(React__default["default"].Fragment, null))));
};

const Notification = (params) => {
    const { title, text, content, loading, border, icon, flat, sticky, square, width, notPadding, color, duration = 4, notificationPosition, pointer, } = params;
    const notification = (React__default["default"].createElement(RsNotification, { title: title, text: text, content: content, loading: loading, border: border, icon: icon, flat: flat, sticky: sticky, square: square, width: width, notPadding: notPadding, color: color, duration: duration, closeButton: true, pointer: pointer, notificationPosition: notificationPosition }));
    if (!document.querySelector(".notification-container")) {
        const container = document.createElement("div");
        container.className = "notification-container";
        document.body.appendChild(container);
    }
    ReactDOM__default["default"].render(notification, document.querySelector(".notification-container"));
    const container = document.querySelector(".notification-container");
    document.body.removeChild(container);
};

//TODO: Add event listener.
const RsIconArrow = (_a) => {
    __rest(_a, []);
    return React__default["default"].createElement("i", { className: 'rs-icon-arrow' });
};

var css_248z$a = ":root {\n  --rs-primary: 25, 91, 255;\n  --rs-warn: 255, 186, 0;\n  --rs-danger: 255, 71, 87;\n  --rs-success: 70, 201, 58;\n  --rs-dark: 30, 30, 30;\n  --rs-light: 244, 247, 248;\n  --rs-color: 17, 18, 20;\n  --rs-facebook: 59, 89, 153;\n  --rs-twitter: 29, 161, 242;\n  --rs-youtube: 255, 0, 0;\n  --rs-pinterest: 189, 8, 28;\n  --rs-linkedin: 0, 119, 181;\n  --rs-snapchat: 255, 252, 0;\n  --rs-whatsapp: 37, 211, 102;\n  --rs-tumblr: 54, 70, 93;\n  --rs-reddit: 255, 69, 0;\n  --rs-spotify: 30, 215, 96;\n  --rs-amazon: 255, 153, 0;\n  --rs-medium: 2, 184, 117;\n  --rs-vimeo: 26, 183, 234;\n  --rs-skype: 0, 175, 240;\n  --rs-dribbble: 234, 76, 137;\n  --rs-slack: 74, 21, 75;\n  --rs-yahoo: 67, 2, 151;\n  --rs-twitch: 100, 65, 164;\n  --rs-discord: 114, 137, 218;\n  --rs-telegram: 0, 136, 204;\n  --rs-google-plus: 219, 68, 55;\n  --rs-messenger: 0, 132, 255;\n  --rs-background: 255, 255, 255;\n  --rs-text: 44, 62, 80;\n  --rs-gray-1: 249, 252, 253;\n  --rs-gray-2: 244, 247, 248;\n  --rs-gray-3: 240, 243, 244;\n  --rs-gray-4: 230, 233, 234; }\n\n.rs-pagination-content {\n  --rs-color: var(--rs-primary); }\n\n.rs-pagination-content {\n  position: relative;\n  display: flex;\n  align-self: center;\n  justify-content: center; }\n  .rs-pagination-content.notMargin .rs-pagination__dotted {\n    background: rgba(var(--rs-gray-3), 1);\n    margin: 0px; }\n  .rs-pagination-content.notMargin .rs-pagination__arrow {\n    margin: 0px !important;\n    border-radius: 0px; }\n    .rs-pagination-content.notMargin .rs-pagination__arrow:first-of-type {\n      border-radius: 12px 0px 0px 12px; }\n    .rs-pagination-content.notMargin .rs-pagination__arrow:last-of-type {\n      border-radius: 0px 12px 12px 0px; }\n  .rs-pagination-content.notMargin .rs-pagination__button {\n    border-radius: 0px;\n    margin: 0px !important; }\n  .rs-pagination-content.disabled {\n    opacity: 0.5;\n    pointer-events: none;\n    user-select: none; }\n  .rs-pagination-content.square .rs-pagination__active {\n    border-radius: 0px; }\n  .rs-pagination-content.square .rs-pagination__button {\n    border-radius: 0px; }\n  .rs-pagination-content.square .rs-pagination__arrow {\n    border-radius: 0px; }\n  .rs-pagination-content.circle .rs-pagination__active {\n    border-radius: 50%; }\n  .rs-pagination-content.circle .rs-pagination__button {\n    border-radius: 50%; }\n  .rs-pagination-content.circle .rs-pagination__arrow {\n    border-radius: 50%; }\n  .rs-pagination-content.buttonsDotted .rs-pagination__arrow {\n    width: 15px;\n    height: 12px;\n    min-width: 15px;\n    padding: 0px;\n    background: transparent; }\n    .rs-pagination-content.buttonsDotted .rs-pagination__arrow i {\n      width: 6px;\n      height: 6px; }\n      .rs-pagination-content.buttonsDotted .rs-pagination__arrow i:before {\n        width: 1px; }\n      .rs-pagination-content.buttonsDotted .rs-pagination__arrow i:after {\n        height: 1px; }\n  .rs-pagination-content.buttonsDotted .rs-pagination__dotted {\n    width: 12px;\n    height: 12px;\n    font-size: 0.9rem;\n    letter-spacing: 1px; }\n  .rs-pagination-content.buttonsDotted .rs-pagination__button {\n    width: 12px;\n    height: 12px; }\n    .rs-pagination-content.buttonsDotted .rs-pagination__button.active {\n      transform: scale(1); }\n  .rs-pagination-content.buttonsDotted .rs-pagination__active {\n    width: 12px;\n    height: 12px;\n    box-shadow: 0px 2px 10px 0px rgba(var(--rs-color), 0.4);\n    transform: scale(1); }\n    .rs-pagination-content.buttonsDotted .rs-pagination__active.move {\n      transform: scale(1.2); }\n\n.rs-pagination {\n  display: flex;\n  align-self: center;\n  justify-content: center;\n  position: relative; }\n  .rs-pagination__progress {\n    width: calc(100% - 16px);\n    height: 3px;\n    background: rgba(var(--rs-gray-3), 1);\n    position: absolute;\n    bottom: -8px;\n    border-radius: 10px; }\n    .rs-pagination__progress .progress {\n      width: 0px;\n      background: rgba(var(--rs-color), 1);\n      height: 100%;\n      position: relative;\n      border-radius: inherit;\n      transition: all 0.25s ease;\n      max-width: 100%; }\n  .rs-pagination__slot {\n    min-height: 36px;\n    min-width: 36px;\n    position: relative;\n    display: block;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .rs-pagination__arrow {\n    position: relative;\n    width: auto;\n    height: 36px;\n    min-width: 36px;\n    border-radius: 12px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0px 2px;\n    background: rgba(var(--rs-gray-3), 1);\n    transition: all 0.25s ease; }\n    .rs-pagination__arrow:disabled {\n      opacity: 0.4;\n      pointer-events: none; }\n    .rs-pagination__arrow:hover {\n      background: rgba(var(--rs-gray-4), 1); }\n    .rs-pagination__arrow i {\n      width: 10px;\n      height: 10px;\n      position: relative;\n      display: block;\n      margin-left: 4px;\n      transform: rotate(-45deg) scale(0.8); }\n      .rs-pagination__arrow i:before {\n        width: 2px; }\n      .rs-pagination__arrow i:after {\n        height: 2px; }\n    .rs-pagination__arrow.next i {\n      margin-left: -4px;\n      transform: rotate(135deg) scale(0.8); }\n  .rs-pagination__active {\n    position: absolute;\n    left: 50%;\n    top: 0px;\n    width: 36px;\n    height: 36px;\n    background: rgba(var(--rs-color), 1);\n    border-radius: 12px;\n    z-index: 100;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 0.9rem;\n    transition: all 0.25s ease;\n    color: #fff;\n    box-shadow: 0px 5px 20px 0px rgba(var(--rs-color), 0.3);\n    cursor: default; }\n    .rs-pagination__active.move {\n      transform: scale(1.1); }\n  .rs-pagination__dotted {\n    width: 36px;\n    height: 36px;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.4rem;\n    letter-spacing: 2px;\n    margin: 0px 2px;\n    cursor: pointer; }\n    .rs-pagination__dotted:hover span.dotted {\n      opacity: 0;\n      margin-left: -1px;\n      transition: all 0.25s ease; }\n    .rs-pagination__dotted:hover .con-arrows {\n      opacity: 1;\n      margin-left: -1px;\n      transition: all 0.25s ease; }\n    .rs-pagination__dotted.next:hover span.dotted {\n      opacity: 0;\n      margin-left: 1px;\n      transition: all 0.25s ease; }\n    .rs-pagination__dotted.next:hover .con-arrows {\n      opacity: 1;\n      margin-left: 1px;\n      transition: all 0.25s ease; }\n    .rs-pagination__dotted span.dotted {\n      margin-right: -2px;\n      text-align: center; }\n    .rs-pagination__dotted.next .con-arrows {\n      transform: rotate(180deg);\n      margin-left: -5px; }\n    .rs-pagination__dotted .con-arrows {\n      width: 10px;\n      height: 10px;\n      position: absolute;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-left: 5px;\n      opacity: 0;\n      transition: all 0.1s ease; }\n      .rs-pagination__dotted .con-arrows i {\n        width: 10px;\n        height: 10px;\n        position: relative;\n        display: block;\n        transform: rotate(-45deg) scale(0.8); }\n        .rs-pagination__dotted .con-arrows i:before {\n          width: 2px; }\n        .rs-pagination__dotted .con-arrows i:after {\n          height: 2px; }\n        .rs-pagination__dotted .con-arrows i:last-child {\n          position: absolute;\n          top: 0px;\n          margin-left: 6px; }\n  .rs-pagination__button {\n    width: 36px;\n    height: 36px;\n    border-radius: 12px;\n    padding: 0px;\n    background: rgba(var(--rs-gray-3), 1);\n    margin: 0px 2px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 0.9rem;\n    transition: all 0.25s ease;\n    color: rgba(var(--rs-text), 1);\n    position: relative; }\n    .rs-pagination__button.loading {\n      border-radius: 50%;\n      opacity: 0.5;\n      pointer-events: none;\n      user-select: none; }\n      .rs-pagination__button.loading:after {\n        content: \"\";\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: 50%;\n        border: 2px solid rgba(var(--rs-color), 1);\n        border-top: 2px solid rgba(var(--rs-background), 0);\n        border-left: 2px solid rgba(var(--rs-background), 0);\n        border-bottom: 2px solid rgba(var(--rs-background), 0);\n        box-sizing: border-box;\n        transition: all 0.25s ease;\n        display: block;\n        box-shadow: 0px 0px 0px 0px rgba(var(--rs-color), 1);\n        animation: loadingPagination 0.6s ease infinite; }\n      .rs-pagination__button.loading:before {\n        content: \"\";\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: 50%;\n        border: 2px dashed rgba(var(--rs-color), 1);\n        border-top: 2px solid rgba(var(--rs-background), 0);\n        border-left: 2px solid rgba(var(--rs-background), 0);\n        border-bottom: 2px solid rgba(var(--rs-background), 0);\n        box-sizing: border-box;\n        transition: all 0.25s ease;\n        display: block;\n        box-shadow: 0px 0px 0px 0px rgba(var(--rs-color), 1);\n        animation: loadingPagination 0.6s linear infinite; }\n    .rs-pagination__button.disabled {\n      opacity: 0.4;\n      pointer-events: none;\n      user-select: none; }\n    .rs-pagination__button:hover {\n      background: rgba(var(--rs-gray-4), 1); }\n    .rs-pagination__button:active {\n      transform: scale(0.9); }\n\n@keyframes loadingPagination {\n  0% {\n    transform: rotate(0); }\n  100% {\n    transform: rotate(360deg); } }\n";
styleInject(css_248z$a);

const RsPagination = (_a) => {
    var props = __rest(_a, []);
    const [value, setValue] = React.useState(1);
    const [leftActive, setLeftActive] = React.useState(42);
    const [activeClassMove, setActiveClassMove] = React.useState(false);
    //Button Refs Object
    const buttonRefs = React__default["default"].useRef({});
    const paginationRef = React__default["default"].createRef();
    const { buttonsDotted, circle, square, disabled, notMargin, onlyArrows, children, notArrows, arrowPrev, arrowNext, progress, length, max = 9, disabledItems = [], loadingItems = [], dottedNumber = 5, infinite, color, } = props;
    React.useEffect(() => {
        handleValue(value, value + 1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    const handleValue = (val, prevValue) => {
        if (isDisabledItem(val) || isLoadingItem(val)) {
            let newVal = val;
            if (val > prevValue) {
                newVal += 1;
            }
            else {
                newVal -= 1;
            }
            if (newVal > length) {
                newVal = infinite ? 1 : prevValue;
            }
            else if (newVal <= 0) {
                newVal = infinite ? length : prevValue;
            }
            val = newVal;
            setValue(newVal);
        }
        else {
            if (paginationRef.current) {
                setActiveClassMove(true);
                const offsetLeftPagination = paginationRef.current.offsetLeft;
                if (length) {
                    setLeftActive(buttonRefs.current[`btn${value}`].offsetLeft + offsetLeftPagination);
                }
                setTimeout(() => {
                    setActiveClassMove(false);
                }, 300);
            }
        }
    };
    const setNextValue = () => {
        let newValue;
        if (disabledItems.length > 0 || loadingItems.length > 0) {
            newValue = value + 1;
            while (disabledItems.includes(newValue) ||
                loadingItems.includes(newValue)) {
                newValue++;
            }
            setValue(newValue);
        }
        else {
            newValue = value + 1;
            setValue(newValue);
            if (infinite && value === length) {
                setValue(1);
            }
        }
    };
    const getProgress = () => {
        let percent = 0;
        percent = (value * 100) / length;
        return percent;
    };
    const isMobile = () => {
        let isMobile = false;
        if (window.innerWidth < 600) {
            isMobile = true;
        }
        return isMobile;
    };
    const isDisabledItem = (item) => {
        return disabledItems.indexOf(item) !== -1;
    };
    const isLoadingItem = (item) => {
        return loadingItems.indexOf(item) !== -1;
    };
    const renderDotted = (text = "...", index) => {
        const dottedClasses = classnames("rs-pagination__dotted", {
            next: value === length ? false : text === "...>",
        });
        return (React__default["default"].createElement("div", { className: dottedClasses, key: index, onClick: () => {
                let newVal = (value === length ? false : text === "...>")
                    ? value + dottedNumber
                    : value - dottedNumber;
                if (newVal > length) {
                    newVal = length;
                }
                else if (newVal < 1) {
                    newVal = 1;
                }
                setValue(newVal);
            } },
            React__default["default"].createElement("span", { className: "dotted" }, "..."),
            React__default["default"].createElement("span", { className: "con-arrows" },
                React__default["default"].createElement(RsIconArrow, null),
                React__default["default"].createElement(RsIconArrow, null))));
    };
    const renderButton = (NumberPage = 1, index) => {
        const buttonClasses = classnames("rs-pagination__button", { active: NumberPage === value }, { prevActive: NumberPage === value - 1 }, { nextActive: NumberPage === value + 1 }, { disabled: isDisabledItem(NumberPage) }, { loading: isLoadingItem(NumberPage) });
        return (React__default["default"].createElement("button", { ref: (el) => (buttonRefs.current[`btn${NumberPage}`] = el), className: buttonClasses, onClick: () => setValue(NumberPage), key: index }, buttonsDotted ? "" : `${NumberPage}`));
    };
    const renderButtons = (array) => {
        const buttons = [];
        array.forEach((item, index) => {
            if (item === "...>" || item === "<...") {
                buttons.push(renderDotted(item, index));
            }
            else {
                buttons.push(renderButton(item, index));
            }
        });
        return buttons;
    };
    const getButtons = (start = 1, end = 6) => {
        const buttons = [];
        for (start > 0 ? start : 1; start <= end; start++) {
            buttons.push(start);
        }
        return buttons;
    };
    const getPages = () => {
        const pagLength = Number(length);
        const pagMax = isMobile() ? 5 : max;
        const even = pagMax % 2 === 0 ? 1 : 0;
        const prevRange = Math.floor(pagMax / 2);
        const nextRange = length - prevRange + 1 + even;
        if (value >= prevRange && value <= nextRange && !buttonsDotted) {
            const start = value - prevRange + 2;
            const end = value + prevRange - 2 - even;
            return renderButtons([
                1,
                "<...",
                ...getButtons(start, end),
                "...>",
                length,
            ]);
        }
        else if (!buttonsDotted && length > 6) {
            return renderButtons([
                ...getButtons(1, prevRange),
                "...>",
                ...getButtons(nextRange, pagLength),
            ]);
        }
        else if (buttonsDotted || length <= 6) {
            return renderButtons([...getButtons(1, length)]);
        }
        return [];
    };
    const paginationContentClasses = classnames("rs-pagination-content", { buttonsDotted: buttonsDotted }, { circle: circle }, { square: square }, { disabled: disabled }, { notMargin: notMargin }, { "rs-change-color": color });
    const paginationActiveClasses = classnames("rs-pagination__active", {
        move: activeClassMove,
    });
    return (React__default["default"].createElement("div", { style: {
            "--rs-color": setComponentColor(color || "primary"),
        }, className: paginationContentClasses },
        !onlyArrows && !children ? (React__default["default"].createElement("div", { className: paginationActiveClasses, style: { left: `${leftActive}px` } }, buttonsDotted ? "" : value)) : null,
        !notArrows ? (React__default["default"].createElement("button", { className: "rs-pagination__arrow prev", disabled: infinite ? false : value <= 1, onClick: () => {
                const newVal = value - 1;
                if (newVal > 0) {
                    setValue(newVal);
                }
                else if (infinite) {
                    setValue(length);
                }
            } }, arrowPrev ? arrowPrev : React__default["default"].createElement(RsIconArrow, null))) : null,
        children ? (React__default["default"].createElement("div", { className: "rs-pagination__slot" },
            " ",
            children,
            " ")) : null,
        !onlyArrows && !children ? (React__default["default"].createElement("div", { ref: paginationRef, className: "rs-pagination" }, getPages().map((page) => page))) : null,
        !notArrows ? (React__default["default"].createElement("button", { className: "rs-pagination__arrow next", disabled: infinite ? false : value >= length, onClick: () => {
                // const newVal = value + 1;
                // if (newVal <= length) {
                //   setValue(newVal);
                // } else if (infinite) {
                //   setValue(1);
                // }
                setNextValue();
            } }, arrowNext ? arrowNext : React__default["default"].createElement(RsIconArrow, null))) : null,
        progress ? (React__default["default"].createElement("div", { className: "rs-pagination__progress" },
            React__default["default"].createElement("div", { className: "progress", style: { width: `${getProgress()}%` } }))) : null));
};

var css_248z$9 = ":root {\n  --rs-primary: 25, 91, 255;\n  --rs-warn: 255, 186, 0;\n  --rs-danger: 255, 71, 87;\n  --rs-success: 70, 201, 58;\n  --rs-dark: 30, 30, 30;\n  --rs-light: 244, 247, 248;\n  --rs-color: 17, 18, 20;\n  --rs-facebook: 59, 89, 153;\n  --rs-twitter: 29, 161, 242;\n  --rs-youtube: 255, 0, 0;\n  --rs-pinterest: 189, 8, 28;\n  --rs-linkedin: 0, 119, 181;\n  --rs-snapchat: 255, 252, 0;\n  --rs-whatsapp: 37, 211, 102;\n  --rs-tumblr: 54, 70, 93;\n  --rs-reddit: 255, 69, 0;\n  --rs-spotify: 30, 215, 96;\n  --rs-amazon: 255, 153, 0;\n  --rs-medium: 2, 184, 117;\n  --rs-vimeo: 26, 183, 234;\n  --rs-skype: 0, 175, 240;\n  --rs-dribbble: 234, 76, 137;\n  --rs-slack: 74, 21, 75;\n  --rs-yahoo: 67, 2, 151;\n  --rs-twitch: 100, 65, 164;\n  --rs-discord: 114, 137, 218;\n  --rs-telegram: 0, 136, 204;\n  --rs-google-plus: 219, 68, 55;\n  --rs-messenger: 0, 132, 255;\n  --rs-background: 255, 255, 255;\n  --rs-text: 44, 62, 80;\n  --rs-gray-1: 249, 252, 253;\n  --rs-gray-2: 244, 247, 248;\n  --rs-gray-3: 240, 243, 244;\n  --rs-gray-4: 230, 233, 234; }\n\n.rs-radio-content {\n  --rs-color: var(--rs-primary); }\n\n.rs-radio-content {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rs-radio-content.active .rs-radio__effect__icon {\n    opacity: 0;\n    transition: all 0.25s ease;\n    transform: scale(1.3); }\n  .rs-radio-content.active .rs-radio__effect:after {\n    border: 7px solid rgba(var(--rs-color), 1);\n    box-shadow: 0px 3px 12px 0px rgba(var(--rs-color), 0.3); }\n  .rs-radio-content:not(.active) .rs-radio input:hover ~ .rs-radio__effect .rs-radio__effect__icon {\n    opacity: 0.7; }\n  .rs-radio-content:not(.active) .rs-radio input:hover ~ .rs-radio__effect::after {\n    border: 2px solid rgba(var(--rs-text), 0.2); }\n  .rs-radio-content.loading {\n    pointer-events: none;\n    user-select: none; }\n    .rs-radio-content.loading .rs-radio__effect:after {\n      opacity: 0.1; }\n    .rs-radio-content.loading .rs-radio__effect__loading {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      border-radius: inherit; }\n      .rs-radio-content.loading .rs-radio__effect__loading:after {\n        content: \"\";\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: inherit;\n        border: 2px solid rgba(var(--rs-text), 0.4);\n        border-top: 2px solid rgba(var(--rs-text), 0);\n        border-left: 2px solid rgba(var(--rs-text), 0);\n        border-bottom: 2px solid rgba(var(--rs-text), 0);\n        box-sizing: border-box;\n        transition: all 0.25s ease;\n        display: block;\n        box-shadow: 0px 0px 0px 0px rgba(var(--rs-color), 0.4);\n        animation: loadingRadio 0.6s ease infinite; }\n      .rs-radio-content.loading .rs-radio__effect__loading:before {\n        content: \"\";\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: inherit;\n        border: 2px dashed rgba(var(--rs-text), 0.4);\n        border-top: 2px solid rgba(var(--rs-text), 0);\n        border-left: 2px solid rgba(var(--rs-text), 0);\n        border-bottom: 2px solid rgba(var(--rs-text), 0);\n        box-sizing: border-box;\n        transition: all 0.25s ease;\n        display: block;\n        box-shadow: 0px 0px 0px 0px rgba(var(--rs-color), 0.4);\n        animation: loadingRadio 0.6s linear infinite; }\n  .rs-radio-content label {\n    cursor: pointer; }\n  .rs-radio-content.disabled {\n    opacity: 0.5;\n    pointer-events: none; }\n    .rs-radio-content.disabled .rs-radio__effect {\n      background: rgba(var(--rs-gray-3), 1); }\n    .rs-radio-content.disabled label {\n      pointer-events: none; }\n\n.rs-radio {\n  width: 20px;\n  height: 20px;\n  margin: 0px;\n  padding: 0px;\n  border-radius: 50%;\n  position: relative;\n  z-index: 10; }\n  .rs-radio__label {\n    margin: 0px 6px; }\n  .rs-radio__effect {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-radius: inherit;\n    left: 0px;\n    top: 0px;\n    transition: all 0.25s ease;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    z-index: 10; }\n    .rs-radio__effect__icon {\n      transition: all 0.25s ease; }\n      .rs-radio__effect__icon i {\n        font-size: 0.75rem; }\n    .rs-radio__effect:after {\n      content: \"\";\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      border-radius: inherit;\n      border: 2px solid rgba(var(--rs-text), 0.4);\n      box-sizing: border-box;\n      transition: all 0.25s ease;\n      display: block;\n      box-shadow: 0px 0px 0px 0px rgba(var(--rs-color), 0.4); }\n  .rs-radio input {\n    margin: 0px;\n    padding: 0px;\n    width: 100%;\n    height: 100%;\n    position: relative;\n    z-index: 100;\n    opacity: 0;\n    cursor: pointer; }\n    .rs-radio input:active ~ .rs-radio__effect:after {\n      transform: scale(0.9); }\n\n@keyframes loadingRadio {\n  0% {\n    transform: rotate(0); }\n  100% {\n    transform: rotate(360deg); } }\n";
styleInject(css_248z$9);

const RsRadio = (_a) => {
    var props = __rest(_a, []);
    const id = React__default["default"].useRef(generateID());
    const { disabled, loading, label, labelBefore, icon, color, value, name, active } = props, rest = __rest(props, ["disabled", "loading", "label", "labelBefore", "icon", "color", "value", "name", "active"]);
    const isChecked = () => {
        return value === active;
    };
    const radioContentClasses = classnames('rs-radio-content', { disabled: disabled }, { loading: loading }, { active: isChecked() });
    return (React__default["default"].createElement("div", { className: radioContentClasses, style: {
            '--rs-color': setComponentColor(color || 'primary')
        } },
        labelBefore ? (React__default["default"].createElement("label", { htmlFor: id.current, className: 'rs-radio__label' }, labelBefore)) : null,
        React__default["default"].createElement("div", { className: 'rs-radio' },
            React__default["default"].createElement("input", Object.assign({ type: 'radio', value: value, name: name || active, checked: isChecked(), id: id.current }, rest)),
            React__default["default"].createElement("span", { className: 'rs-radio__effect' },
                React__default["default"].createElement("span", { className: 'rs-radio__effect__icon' }, icon),
                React__default["default"].createElement("span", { className: 'rs-radio__effect__loading' }))),
        label ? (React__default["default"].createElement("label", { htmlFor: id.current, className: 'rs-radio__label' }, label)) : null));
};

var css_248z$8 = ".rs-sidebar-content {\n  --rs-color: var(--rs-primary); }\n\n@keyframes delayOpacity {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.rs-sidebar-content {\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  width: calc(100% - 50px);\n  max-width: 260px;\n  height: 100vh;\n  border-radius: 0px 30px 30px 0px;\n  color: rgba(var(--rs-text), 1);\n  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, var(--rs-shadow-opacity));\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-direction: column;\n  z-index: 21000;\n  background: rgba(var(--rs-background), 1);\n  transition: all 0.25s ease;\n  transform: translate(-110%); }\n  .rs-sidebar-content.right {\n    left: auto;\n    right: 0px;\n    border-radius: 30px 0px 0px 30px;\n    transform: translate(110%); }\n    .rs-sidebar-content.right.open {\n      transform: translate(0); }\n    .rs-sidebar-content.right.reduce .rs-sidebar__item:hover .rs-sidebar__item__text-tooltip {\n      opacity: 1;\n      left: auto !important;\n      right: 60px !important; }\n  .rs-sidebar-content.absolute {\n    position: absolute !important;\n    z-index: 9001;\n    height: 100%; }\n  .rs-sidebar-content.relative {\n    position: relative !important;\n    z-index: 9001;\n    height: 100%; }\n  .rs-sidebar-content.textWhite .rs-sidebar__group__content:after {\n    background: rgba(255, 255, 255, 0.4); }\n  .rs-sidebar-content.textWhite .rs-sidebar__item:after {\n    background: #fff !important; }\n  .rs-sidebar-content.textWhite .rs-sidebar__item.active {\n    color: #fff !important; }\n  .rs-sidebar-content.textWhite .rs-sidebar__item > * {\n    color: #fff; }\n  .rs-sidebar-content.notShadow {\n    box-shadow: none !important; }\n  .rs-sidebar-content.square {\n    border-radius: 0px; }\n  .rs-sidebar-content.notLineActive .rs-sidebar .rs-sidebar__item:after {\n    display: none; }\n  .rs-sidebar-content.open {\n    transform: translate(0%); }\n  .rs-sidebar-content.reduce .rs-sidebar__footer {\n    padding: 10px 0px; }\n  .rs-sidebar-content.reduce .rs-sidebar__header .rs-avatar-content {\n    width: 44px !important;\n    height: 44px !important; }\n  .rs-sidebar-content.reduce .rs-sidebar__logo img {\n    width: 80%; }\n  .rs-sidebar-content.reduce .rs-sidebar__item {\n    padding-left: 16px !important;\n    min-height: 47px; }\n    .rs-sidebar-content.reduce .rs-sidebar__item:not(.hasIcon) .rs-sidebar__item__text {\n      font-size: 0.5rem; }\n    .rs-sidebar-content.reduce .rs-sidebar__item.hasIcon .rs-sidebar__item__text {\n      transform: translate(-10px);\n      margin-left: -50px; }\n    .rs-sidebar-content.reduce .rs-sidebar__item__arrow {\n      position: absolute;\n      left: 36px;\n      top: 10px;\n      animation: delayOpacity 0.6s ease;\n      width: 5px;\n      height: 5px; }\n    .rs-sidebar-content.reduce .rs-sidebar__item:hover .rs-sidebar__item__text-tooltip {\n      opacity: 1;\n      left: 60px; }\n  .rs-sidebar-content.reduce .rs-sidebar__item.hasIcon {\n    padding: 0px !important; }\n    .rs-sidebar-content.reduce .rs-sidebar__item.hasIcon:after {\n      left: -6px; }\n  .rs-sidebar-content .rs-sidebar__logo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding: 25px 0px;\n    min-height: 80px; }\n    .rs-sidebar-content .rs-sidebar__logo img {\n      max-width: 120px;\n      max-height: 35px; }\n  .rs-sidebar-content .rs-sidebar {\n    overflow-x: hidden;\n    width: 100%;\n    flex-grow: 1;\n    display: flex;\n    align-items: flex-start;\n    justify-content: flex-start;\n    flex-direction: column; }\n    .rs-sidebar-content .rs-sidebar::-webkit-scrollbar {\n      width: 0px; }\n    .rs-sidebar-content .rs-sidebar__header {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 100%;\n      padding: 10px; }\n    .rs-sidebar-content .rs-sidebar__footer {\n      display: flex;\n      align-items: center;\n      justify-self: flex-start;\n      width: 100%;\n      padding: 10px; }\n";
styleInject(css_248z$8);

const RsSidebar = (_a) => {
    var props = __rest(_a, []);
    const SidebarRef = React__default["default"].createRef();
    const { open, notLineActive, square, notShadow, textWhite, relative, absolute, right, hoverExpand, logo, header, children, footer, color = "", reduce, } = props;
    const [reduceInternal, setReduceInternal] = React.useState(reduce);
    const staticWidth = "260px";
    React.useEffect(() => {
        const el = SidebarRef.current;
        if (reduceInternal && el) {
            el.style.width = "50px";
        }
        else if (el && !reduceInternal) {
            el.style.width = staticWidth;
        }
    }, [reduceInternal]);
    const SidebarContentClasses = classnames("rs-sidebar-content", { reduce: reduceInternal }, { open: open }, { notLineActive: notLineActive }, { square: square }, { notShadow: notShadow }, { textWhite: textWhite }, { relative: relative }, { absolute: absolute }, { right: right });
    return (React__default["default"].createElement("div", { className: SidebarContentClasses, ref: SidebarRef, onMouseEnter: () => {
            if (hoverExpand && reduce) {
                setReduceInternal(false);
            }
        }, onMouseLeave: () => {
            if (hoverExpand && reduce) {
                setReduceInternal(true);
            }
        }, style: {
            "--rs-background": setComponentColor(color || ""),
        } },
        logo ? React__default["default"].createElement("div", { className: "rs-sidebar__logo" }, logo) : null,
        header ? React__default["default"].createElement("div", { className: "vs-sidebar__header" }, header) : null,
        React__default["default"].createElement("div", { className: "rs-sidebar" }, children),
        footer ? React__default["default"].createElement("div", { className: "rs-sidebar__footer" }, footer) : null));
};

var css_248z$7 = ".rs-sidebar__group {\n  padding: 0px;\n  width: 100%;\n  min-width: 260px;\n  position: relative; }\n  .rs-sidebar__group.open .rs-sidebar__group__content:after {\n    transform: translate(0);\n    opacity: 1; }\n  .rs-sidebar__group.open > .rs-sidebar__group__header .rs-sidebar__item {\n    opacity: 1; }\n  .rs-sidebar__group.open > .rs-sidebar__group__header .rs-sidebar__item__arrow {\n    transform: rotate(45deg) !important; }\n  .rs-sidebar__group__header {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .rs-sidebar__group__content {\n    overflow: hidden;\n    transition: all 0.25s ease;\n    position: relative; }\n    .rs-sidebar__group__content:after {\n      content: \"\";\n      position: absolute;\n      left: 0px;\n      top: 0px;\n      background: rgba(var(--rs-color), 0.3);\n      width: 4px;\n      height: 100%;\n      opacity: 0;\n      transition: all 0.25s ease;\n      transform: translate(-100%);\n      border-radius: 0px 10px 10px 0px;\n      z-index: 60; }\n  .rs-sidebar__group > .rs-sidebar__group__header .rs-sidebar__item:hover {\n    padding-left: 0px; }\n";
styleInject(css_248z$7);

const RsSidebarGroup = (_a) => {
    var props = __rest(_a, []);
    const { header, children } = props;
    const [open, setOpen] = React.useState(false);
    const SidebarGroupClasses = classnames("rs-sidebar__group", {
        open: open,
    });
    const beforeEnter = (el) => {
        el.style.height = 0;
    };
    const enter = (el) => {
        const h = el.scrollHeight;
        el.style.height = h - 1 + "px";
    };
    const leave = (el) => {
        el.style.minHeight = "0px";
        el.style.height = "0px";
    };
    return (React__default["default"].createElement("div", { className: SidebarGroupClasses },
        React__default["default"].createElement("div", { className: "rs-sidebar__group__header", onClick: () => setOpen((prevState) => !prevState) }, header),
        React__default["default"].createElement(Transition$1, { component: "div", in: open, mountOnEnter: true, timeout: 100, onEnter: (e) => beforeEnter(e), onEntered: (e) => enter(e), onExit: (e) => leave(e) },
            React__default["default"].createElement("div", { className: "rs-sidebar__group__content" }, children))));
};

var css_248z$6 = ".rs-sidebar__item {\n  width: 100%;\n  padding: 14px 16px;\n  padding-top: 15px;\n  text-align: left;\n  background: transparent;\n  font-size: 1rem;\n  font-weight: bold;\n  opacity: 0.7;\n  transition: all 0.25s ease;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  position: relative;\n  color: rgba(var(--rs-text), 1);\n  border: 0px; }\n  .rs-sidebar__item.hasIcon {\n    padding: 0px; }\n    .rs-sidebar__item.hasIcon.active {\n      padding-left: 8px; }\n    .rs-sidebar__item.hasIcon:hover {\n      padding-left: 8px;\n      opacity: 1; }\n  .rs-sidebar__item:after {\n    content: \"\";\n    position: absolute;\n    left: -4px;\n    top: 0px;\n    width: 10px;\n    height: 100%;\n    background: rgba(var(--rs-color), 1);\n    border-radius: 0px 20px 20px 0px;\n    transform: translate(-6px);\n    transition: all 0.25s ease;\n    z-index: 60; }\n  .rs-sidebar__item.active:not(.hasIcon) {\n    padding-left: 25px; }\n  .rs-sidebar__item.active {\n    opacity: 1;\n    color: rgba(var(--rs-color), 1); }\n    .rs-sidebar__item.active:after {\n      transform: translate(0px); }\n  .rs-sidebar__item__icon {\n    min-width: 50px;\n    height: 47px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.2rem;\n    z-index: 50;\n    background: rgba(var(--rs-background), 1); }\n  .rs-sidebar__item:hover:not(.hasIcon) {\n    opacity: 1;\n    padding-left: 25px; }\n  .rs-sidebar__item__text {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    z-index: 10;\n    transition: all 0.25s ease;\n    font-size: 0.9rem; }\n  .rs-sidebar__item__arrow {\n    width: 7px;\n    height: 7px;\n    position: relative;\n    justify-self: flex-end;\n    margin-left: auto;\n    margin-right: 15px;\n    transition: all 0.25s ease;\n    transform: rotate(-135deg) !important;\n    z-index: 80; }\n    .rs-sidebar__item__arrow .rs-icon-arrow:before {\n      width: 2px; }\n    .rs-sidebar__item__arrow .rs-icon-arrow:after {\n      height: 2px; }\n  .rs-sidebar__item__text-tooltip {\n    position: fixed;\n    left: 50px;\n    opacity: 0;\n    pointer-events: none;\n    transition: all 0.25s ease;\n    font-size: 0.85rem;\n    white-space: nowrap; }\n";
styleInject(css_248z$6);

const RsSidebarItem = (_a) => {
    var props = __rest(_a, []);
    const { active, icon, children, arrow } = props;
    const SidebarItemClasses = classnames("rs-sidebar__item", { active: active }, { hasIcon: icon });
    return (React__default["default"].createElement("button", { className: SidebarItemClasses },
        icon ? React__default["default"].createElement("div", { className: "rs-sidebar__item__icon" }, icon) : null,
        React__default["default"].createElement("div", { className: "rs-sidebar__item__text" }, children),
        React__default["default"].createElement("div", { className: "rs-sidebar__item__text-tooltip" }, children),
        arrow ? (React__default["default"].createElement("div", { className: "rs-sidebar__item__arrow" },
            React__default["default"].createElement(RsIconArrow, null))) : null));
};

var css_248z$5 = ":root {\n  --rs-primary: 25, 91, 255;\n  --rs-warn: 255, 186, 0;\n  --rs-danger: 255, 71, 87;\n  --rs-success: 70, 201, 58;\n  --rs-dark: 30, 30, 30;\n  --rs-light: 244, 247, 248;\n  --rs-color: 17, 18, 20;\n  --rs-facebook: 59, 89, 153;\n  --rs-twitter: 29, 161, 242;\n  --rs-youtube: 255, 0, 0;\n  --rs-pinterest: 189, 8, 28;\n  --rs-linkedin: 0, 119, 181;\n  --rs-snapchat: 255, 252, 0;\n  --rs-whatsapp: 37, 211, 102;\n  --rs-tumblr: 54, 70, 93;\n  --rs-reddit: 255, 69, 0;\n  --rs-spotify: 30, 215, 96;\n  --rs-amazon: 255, 153, 0;\n  --rs-medium: 2, 184, 117;\n  --rs-vimeo: 26, 183, 234;\n  --rs-skype: 0, 175, 240;\n  --rs-dribbble: 234, 76, 137;\n  --rs-slack: 74, 21, 75;\n  --rs-yahoo: 67, 2, 151;\n  --rs-twitch: 100, 65, 164;\n  --rs-discord: 114, 137, 218;\n  --rs-telegram: 0, 136, 204;\n  --rs-google-plus: 219, 68, 55;\n  --rs-messenger: 0, 132, 255;\n  --rs-background: 255, 255, 255;\n  --rs-text: 44, 62, 80;\n  --rs-gray-1: 249, 252, 253;\n  --rs-gray-2: 244, 247, 248;\n  --rs-gray-3: 240, 243, 244;\n  --rs-gray-4: 230, 233, 234; }\n\n.rs-switch {\n  --rs-color: var(--rs-primary); }\n\n@keyframes rotateSwitch {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.rs-switch {\n  color: #fff;\n  padding: 5px;\n  border-radius: 20px;\n  min-width: 48px;\n  height: 28px;\n  border: 0px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(var(--rs-gray-3), 1);\n  transition: all 0.25s ease;\n  overflow: hidden; }\n  .rs-switch--icon .rs-switch__input:checked ~ .rs-switch__circle {\n    color: #fff !important; }\n  .rs-switch--icon .rs-switch__circle {\n    background: transparent !important;\n    box-shadow: none !important; }\n    .rs-switch--icon .rs-switch__circle i {\n      opacity: 1;\n      font-size: 1.3rem; }\n  .rs-switch--indeterminate .rs-switch__input {\n    pointer-events: none; }\n  .rs-switch--indeterminate .rs-switch__circle {\n    left: 50% !important;\n    transform: translate(-50%); }\n  .rs-switch--square {\n    border-radius: 5px; }\n    .rs-switch--square .rs-switch__background {\n      border-radius: 5px !important; }\n    .rs-switch--square .rs-switch__circle {\n      border-radius: 5px !important; }\n  .rs-switch:after {\n    transition: all 0s ease 0s;\n    opacity: 0;\n    visibility: hidden;\n    content: '';\n    position: absolute;\n    width: calc(100% - 8px);\n    height: calc(100% - 8px);\n    border: 3px dashed rgba(var(--rs-color), 1);\n    z-index: 200;\n    border-radius: 50%;\n    border-top: 3px solid transparent;\n    border-right: 3px solid transparent;\n    animation: rotateSwitch 0.6s linear infinite 0.25s;\n    pointer-events: none; }\n  .rs-switch:before {\n    pointer-events: none;\n    transition: all 0s ease 0s;\n    opacity: 0;\n    visibility: hidden;\n    content: '';\n    position: absolute;\n    width: calc(100% - 8px);\n    height: calc(100% - 8px);\n    border: 3px solid rgba(var(--rs-color), 1);\n    z-index: 200;\n    border-radius: 50%;\n    border-top: 3px solid transparent;\n    border-right: 3px solid transparent;\n    animation: rotateSwitch 0.6s ease infinite 0.25s; }\n  .rs-switch--loading {\n    width: 28px !important;\n    min-width: 28px !important;\n    pointer-events: none;\n    border-radius: 20px !important; }\n    .rs-switch--loading .rs-switch__circle {\n      border-radius: 50% !important; }\n    .rs-switch--loading .rs-switch__background {\n      opacity: 0 !important; }\n    .rs-switch--loading:after {\n      opacity: 1;\n      visibility: visible;\n      transition: all 0.25s ease 0.3s; }\n    .rs-switch--loading:before {\n      opacity: 1;\n      visibility: visible;\n      transition: all 0.25s ease 0.3s; }\n  .rs-switch:hover {\n    background: rgba(var(--rs-gray-4), 1); }\n  .rs-switch:active {\n    transform: scale(0.9); }\n  .rs-switch__background {\n    width: 100%;\n    height: auto;\n    position: absolute;\n    background: rgba(var(--rs-color), 1);\n    border-radius: inherit;\n    z-index: 2;\n    transition: all 0.25s ease-out;\n    transform: scale(1);\n    left: -100%;\n    border-radius: 50%;\n    padding-bottom: 100%; }\n  .rs-switch__text {\n    font-size: 0.7rem;\n    padding: 5px;\n    padding-left: 25px;\n    transition: all 0.25s ease 0.05s;\n    color: rgba(var(--rs-text), 1);\n    z-index: 9;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    overflow: hidden;\n    white-space: nowrap; }\n    .rs-switch__text.on {\n      transform: translate(-100%);\n      position: absolute;\n      opacity: 0; }\n    .rs-switch__text i {\n      font-size: 1rem;\n      opacity: 0.7; }\n  .rs-switch__circle {\n    width: 20px;\n    height: 20px;\n    background: rgba(var(--rs-background), 1);\n    border-radius: 20px;\n    transition: all 0.25s ease;\n    position: absolute;\n    z-index: 10;\n    left: 4px;\n    color: rgba(var(--rs-text), 1);\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .rs-switch__circle i {\n      font-size: 0.8rem; }\n  .rs-switch__input {\n    position: absolute;\n    width: 100%;\n    opacity: 0 !important;\n    height: 100%;\n    border-radius: inherit;\n    z-index: 100;\n    top: 0px;\n    left: 0px;\n    margin: 0px;\n    cursor: pointer; }\n    .rs-switch__input:active:checked ~ .rs-switch__circle {\n      left: calc(100% - 30px); }\n    .rs-switch__input:active ~ .rs-switch__circle {\n      width: 25px; }\n    .rs-switch__input:checked ~ .rs-switch__background {\n      opacity: 1;\n      transform: scale(1);\n      width: 100%;\n      padding-bottom: 100%;\n      left: 0px;\n      border-radius: 50%;\n      transition: all 0.25s ease; }\n    .rs-switch__input:checked ~ .rs-switch__text {\n      padding-left: 5px;\n      padding-right: 25px;\n      color: #fff; }\n      .rs-switch__input:checked ~ .rs-switch__text i {\n        opacity: 1; }\n      .rs-switch__input:checked ~ .rs-switch__text.on {\n        transform: translate(0);\n        position: relative;\n        opacity: 1; }\n      .rs-switch__input:checked ~ .rs-switch__text.off {\n        transform: translate(100%);\n        position: absolute;\n        opacity: 0; }\n    .rs-switch__input:checked ~ .rs-switch__circle {\n      left: calc(100% - 24px);\n      box-shadow: -5px 0px 25px 0px rgba(var(--rs-background), 0.6);\n      color: rgba(var(--rs-color), 1); }\n";
styleInject(css_248z$5);

const RsSwitch = (_a) => {
    var props = __rest(_a, []);
    const isChecked = React__default["default"].useRef(false);
    const { loading, square, indeterminate, circle, switchOn, switchOff, children, checked, color } = props, rest = __rest(props, ["loading", "square", "indeterminate", "circle", "switchOn", "switchOff", "children", "checked", "color"]);
    const switchClasses = classnames("rs-switch", { "rs-switch--loading": loading }, { "rs-switch--square": square }, { "rs-switch--indeterminate": indeterminate }
    // { 'rs-swtich--icon': icon }
    );
    return (React__default["default"].createElement("div", { className: switchClasses, style: {
            "--rs-color": setComponentColor(color || "primary"),
        } },
        React__default["default"].createElement("input", Object.assign({ type: "checkbox", className: "rs-switch__input", checked: isChecked.current || checked }, rest)),
        React__default["default"].createElement("div", { className: "rs-switch__circle" },
            " ",
            circle,
            " "),
        React__default["default"].createElement("div", { className: "rs-switch__text on" }, switchOn ? switchOn : children),
        React__default["default"].createElement("div", { className: "rs-switch__text off" }, switchOff ? switchOff : children),
        React__default["default"].createElement("div", { className: "rs-switch__background" })));
};

var css_248z$4 = ".rs-table-content {\n  --rs-color: var(--rs-primary); }\n\n.rs-table-content {\n  width: 100%;\n  border-radius: 16px; }\n\n.rs-table {\n  width: 100%;\n  font-size: 0.9rem;\n  margin: 0px;\n  overflow: auto; }\n  .rs-table table {\n    margin: 0px;\n    border-collapse: collapse;\n    width: 100%;\n    min-width: 500px;\n    border: 0px; }\n  .rs-table.striped .rs-table__tr:nth-child(2n) {\n    background: rgba(var(--rs-gray-1), 1) !important; }\n  .rs-table_not-found {\n    display: none;\n    padding: 20px;\n    text-align: center;\n    width: 100%; }\n    .rs-table_not-found tr {\n      text-align: center; }\n      .rs-table_not-found tr td {\n        padding: 20px;\n        border: 0px; }\n  .rs-table__tbody:empty {\n    display: none;\n    background: #000; }\n    .rs-table__tbody:empty ~ .rs-table_not-found {\n      display: table-row-group; }\n  .rs-table.isSelectedValue tr {\n    cursor: pointer; }\n  .rs-table__footer {\n    padding: 8px 10px;\n    background: rgba(var(--rs-gray-2), 1);\n    border-radius: 0px 0px 14px 14px; }\n  .rs-table__header {\n    width: 100%;\n    padding: 10px;\n    background: rgba(var(--rs-gray-2), 1);\n    border-radius: 14px 14px 0px 0px; }\n    .rs-table__header ~ .rs-table .rs-table__th:first-child {\n      border-radius: 0px; }\n    .rs-table__header ~ .rs-table .rs-table__th:last-child {\n      border-radius: 0px; }\n  .rs-table__thead {\n    width: 100%; }\n    .rs-table__thead .rs-table__th {\n      background: rgba(var(--rs-gray-2), 1); }\n      .rs-table__thead .rs-table__th:first-child {\n        border-radius: 14px 0px 0px 0px; }\n      .rs-table__thead .rs-table__th:last-child {\n        border-radius: 0px 14px 0px 0px; }\n";
styleInject(css_248z$4);

const RsTable = (_a) => {
    var props = __rest(_a, []);
    const theadRef = React__default["default"].createRef();
    // const [value, setValue] = useState("");
    // const [colspan, setColspan] = useState(0);
    const { header, footer, striped, isMultipleSelected, children, notFound, } = props;
    const tableDivClasses = classnames("rs-table", 
    // { isSelectedValue: value },
    { striped: striped }, { isMultipleSelected: isMultipleSelected });
    return (React__default["default"].createElement("div", { className: "rs-table-content" },
        header ? React__default["default"].createElement("header", { className: "rs-table__header" }, header) : null,
        React__default["default"].createElement("div", { className: tableDivClasses },
            React__default["default"].createElement("table", null,
                React__default["default"].createElement("thead", { ref: theadRef, className: "rs-table__thead" }, children.filter((obj) => obj.props.thead)),
                React__default["default"].createElement("tbody", { className: "rs-table__tbody" }, children.filter((obj) => !obj.props.thead)),
                notFound ? (React__default["default"].createElement("tbody", { className: "rs-table_not-found" },
                    React__default["default"].createElement("tr", null,
                        React__default["default"].createElement("td", null, notFound || "No matching records found")))) : null)),
        footer ? React__default["default"].createElement("footer", { className: "rs-table__footer" }, footer) : null));
};

var css_248z$3 = ".rs-table__td {\n  padding: 10px 12px;\n  transition: all 0.25s ease;\n  font-size: 0.8rem;\n  border: 0px; }\n  .rs-table__td:last-child {\n    border-radius: 0px 15px 15px 0px; }\n  .rs-table__td:first-child {\n    border-radius: 15px 0px 0px 15px; }\n  .rs-table__td.isCheckbox {\n    width: 23px; }\n  .rs-table__td.isEdit {\n    text-decoration: underline;\n    cursor: pointer; }\n";
styleInject(css_248z$3);

const RsTableTd = (_a) => {
    var props = __rest(_a, []);
    const { checkbox, edit, children } = props;
    const RsTdClasses = classnames("rs-table__td", { isCheckbox: checkbox }, { isEdit: edit });
    return React__default["default"].createElement("td", { className: RsTdClasses }, children);
};

var css_248z$2 = ".rs-table__th {\n  padding: 10px 12px;\n  text-align: left;\n  transition: all 0.25s ease;\n  font-size: 0.8rem;\n  border: 0px; }\n  .rs-table__th.sort .rs-table__th__content {\n    pointer-events: none; }\n  .rs-table__th.sort:hover {\n    background: rgba(var(--rs-gray-3), 1); }\n  .rs-table__th[data-sort-type=\"asc\"] .icon-sort-2 {\n    margin-top: -7px;\n    transform: rotate(45deg) !important; }\n  .rs-table__th[data-sort-type=\"asc\"] .icon-sort-1 {\n    margin-top: -1px;\n    transform: rotate(45deg) !important; }\n  .rs-table__th[data-sort-type=\"desc\"] .icon-sort-2 {\n    margin-top: -7px; }\n  .rs-table__th[data-sort-type=\"desc\"] .icon-sort-1 {\n    margin-top: -1px;\n    transform: rotate(-135deg) !important; }\n  .rs-table__th__content {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    transition: all 0.25s ease; }\n    .rs-table__th__content__icons {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      margin-left: 7px;\n      transform: scale(0.8); }\n    .rs-table__th__content .rs-icon-arrow {\n      position: relative;\n      display: block; }\n      .rs-table__th__content .rs-icon-arrow.icon-sort-1 {\n        transform: rotate(45deg); }\n      .rs-table__th__content .rs-icon-arrow.icon-sort-2 {\n        transform: rotate(-135deg); }\n";
styleInject(css_248z$2);

const RsTableTh = (_a) => {
    var props = __rest(_a, []);
    const { sort, children } = props;
    const tableThClasses = classnames("rs-table__th", { sort: sort });
    return (React__default["default"].createElement("th", { className: tableThClasses },
        React__default["default"].createElement("div", { className: "rs-table__th__content" },
            children,
            sort ? (React__default["default"].createElement("div", { className: "rs-table__th__content__icons" },
                React__default["default"].createElement(RsIconArrow, { className: "icon-sort-1" }),
                React__default["default"].createElement(RsIconArrow, { className: "icon-sort-2" }))) : null)));
};

var css_248z$1 = ".isMultipleSelected .rs-table__tr .rs-table__td {\n  border-radius: 0px !important; }\n\n.rs-table__tr {\n  padding: 5px;\n  border: 0px; }\n  .rs-table__tr.expand {\n    cursor: pointer; }\n  .rs-table__tr.rs-change-color .rs-table__td {\n    background: rgba(var(--rs-color), 0.1) !important;\n    color: rgba(var(--rs-color), 1) !important; }\n    .rs-table__tr.rs-change-color .rs-table__td:hover {\n      background: rgba(var(--rs-color), 0.2) !important; }\n  .rs-table__tr:first-of-type .rs-table__td:last-child {\n    border-radius: 0px 0px 15px 0px; }\n  .rs-table__tr:first-of-type .rs-table__td:first-child {\n    border-radius: 0px 0px 0px 15px; }\n  .rs-table__tr.isExpand:first-of-type .rs-table__td {\n    background: rgba(var(--rs-gray-1), 1) !important;\n    border-radius: 0px; }\n  .rs-table__tr.isExpand:not(:first-of-type) .rs-table__td {\n    background: rgba(var(--rs-gray-1), 1) !important; }\n    .rs-table__tr.isExpand:not(:first-of-type) .rs-table__td:last-child {\n      border-radius: 0px 15px 0px 0px; }\n    .rs-table__tr.isExpand:not(:first-of-type) .rs-table__td:first-child {\n      border-radius: 15px 0px 0px 0px; }\n  .rs-table__tr.isExpand:not(:first-of-type) + .rs-table__tr__expand td {\n    border-radius: 0px 0px 15px 15px !important; }\n  .rs-table__tr.selected .rs-table__td {\n    background: rgba(var(--rs-color), 0.1) !important;\n    color: rgba(var(--rs-color), 1) !important; }\n  .rs-table__tr .rs-table__td {\n    background: rgba(var(--rs-bg), 0.1);\n    color: rgba(var(--rs-bg), 1); }\n  .rs-table__tr.rs-change-color:hover .rs-table__td {\n    background: rgba(var(--rs-color), 0.2) !important; }\n  .rs-table__tr:hover .rs-table__td {\n    background: rgba(var(--rs-gray-1), 1); }\n\n.rs-table__tr__expand {\n  transition: all 0.25s ease;\n  border: 0px; }\n  .rs-table__tr__expand td {\n    transition: all 0.25s ease;\n    padding: 0px;\n    background: rgba(var(--rs-gray-1), 1) !important;\n    border: 0px; }\n    .rs-table__tr__expand td .rs-table__expand__td__content {\n      overflow: hidden;\n      display: block;\n      transition: all 0.25s ease; }\n      .rs-table__tr__expand td .rs-table__expand__td__content__sub {\n        padding: 10px 15px;\n        z-index: 1;\n        position: relative; }\n\n.fade-expand-enter-active,\n.fade-expand-leave-active {\n  transition: all 0.25s ease; }\n\n.fade-expand-enter,\n.fade-expand-leave-to {\n  opacity: 0; }\n  .fade-expand-enter td .rs-table__expand__td__content,\n  .fade-expand-leave-to td .rs-table__expand__td__content {\n    height: 0px !important; }\n";
styleInject(css_248z$1);

const RsTableTr = (_a) => {
    var props = __rest(_a, []);
    const { isSelected, expand, isExpand, children, color } = props;
    const tableTrClasses = classnames("rs-table__tr", { "rs-change-color": color }, { selected: isSelected }, { expand: expand }, { isExpand: isExpand });
    return (React__default["default"].createElement("tr", { style: {
            "--rs-color": setComponentColor(color || "primary"),
        }, className: tableTrClasses }, children));
};

var css_248z = ":root {\n  --rs-primary: 25, 91, 255;\n  --rs-warn: 255, 186, 0;\n  --rs-danger: 255, 71, 87;\n  --rs-success: 70, 201, 58;\n  --rs-dark: 30, 30, 30;\n  --rs-light: 244, 247, 248;\n  --rs-color: 17, 18, 20;\n  --rs-facebook: 59, 89, 153;\n  --rs-twitter: 29, 161, 242;\n  --rs-youtube: 255, 0, 0;\n  --rs-pinterest: 189, 8, 28;\n  --rs-linkedin: 0, 119, 181;\n  --rs-snapchat: 255, 252, 0;\n  --rs-whatsapp: 37, 211, 102;\n  --rs-tumblr: 54, 70, 93;\n  --rs-reddit: 255, 69, 0;\n  --rs-spotify: 30, 215, 96;\n  --rs-amazon: 255, 153, 0;\n  --rs-medium: 2, 184, 117;\n  --rs-vimeo: 26, 183, 234;\n  --rs-skype: 0, 175, 240;\n  --rs-dribbble: 234, 76, 137;\n  --rs-slack: 74, 21, 75;\n  --rs-yahoo: 67, 2, 151;\n  --rs-twitch: 100, 65, 164;\n  --rs-discord: 114, 137, 218;\n  --rs-telegram: 0, 136, 204;\n  --rs-google-plus: 219, 68, 55;\n  --rs-messenger: 0, 132, 255;\n  --rs-background: 255, 255, 255;\n  --rs-text: 44, 62, 80;\n  --rs-gray-1: 249, 252, 253;\n  --rs-gray-2: 244, 247, 248;\n  --rs-gray-3: 240, 243, 244;\n  --rs-gray-4: 230, 233, 234; }\n\n.rs-tooltip {\n  --rs-color: var(--rs-text); }\n\n.rs-tooltip-enter-active,\n.rs-tooltip-leave-active {\n  transition: all 0.25s ease; }\n\n.rs-tooltip-enter,\n.rs-tooltip-leave-to {\n  opacity: 0; }\n  .rs-tooltip-enter.top,\n  .rs-tooltip-leave-to.top {\n    transform: translate(0, 5px); }\n  .rs-tooltip-enter.bottom,\n  .rs-tooltip-leave-to.bottom {\n    transform: translate(0, -5px); }\n  .rs-tooltip-enter.left,\n  .rs-tooltip-leave-to.left {\n    transform: translate(5px); }\n  .rs-tooltip-enter.right,\n  .rs-tooltip-leave-to.right {\n    transform: translate(-5px); }\n\n.darken .rs-tooltip {\n  --rs-color: var(--rs-gray-3);\n  color: #fff; }\n  .darken .rs-tooltip:not(.rs-change-color) {\n    color: #fff !important; }\n\n.rs-tooltip {\n  background: rgba(var(--rs-color), 1);\n  color: rgba(var(--rs-background), 1);\n  position: absolute;\n  z-index: 1000000;\n  text-align: center;\n  padding: 5px 10px;\n  border-radius: 12px;\n  font-size: 0.85rem;\n  max-width: 350px;\n  min-width: 30px;\n  min-height: 30px;\n  transition: all 0.25s ease; }\n  .rs-tooltip.loading {\n    color: rgba(var(--rs-background), 0.2); }\n    .rs-tooltip.loading * {\n      opacity: 0.5;\n      pointer-events: none; }\n  .rs-tooltip__loading {\n    width: 22px;\n    height: 22px;\n    position: absolute;\n    display: block;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 50%;\n    opacity: 1 !important; }\n    .rs-tooltip__loading:after {\n      content: '';\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      border-radius: inherit;\n      border: 2px solid rgba(var(--rs-background), 1);\n      border-top: 2px solid rgba(var(--rs-background), 0);\n      border-left: 2px solid rgba(var(--rs-background), 0);\n      border-bottom: 2px solid rgba(var(--rs-background), 0);\n      box-sizing: border-box;\n      transition: all 0.25s ease;\n      display: block;\n      box-shadow: 0px 0px 0px 0px rgba(var(--rs-color), 1);\n      animation: loadingTooltip 0.6s ease infinite; }\n    .rs-tooltip__loading:before {\n      content: '';\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      border-radius: inherit;\n      border: 2px dashed rgba(var(--rs-background), 1);\n      border-top: 2px solid rgba(var(--rs-background), 0);\n      border-left: 2px solid rgba(var(--rs-background), 0);\n      border-bottom: 2px solid rgba(var(--rs-background), 0);\n      box-sizing: border-box;\n      transition: all 0.25s ease;\n      display: block;\n      box-shadow: 0px 0px 0px 0px rgba(var(--rs-color), 1);\n      animation: loadingTooltip 0.6s linear infinite; }\n  .rs-tooltip.borderThick {\n    background: rgba(var(--rs-background), 1);\n    color: rgba(var(--rs-color), 1);\n    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, var(--rs-shadow-opacity)); }\n    .rs-tooltip.borderThick.top {\n      border-bottom: 4px solid rgba(var(--rs-color), 1); }\n      .rs-tooltip.borderThick.top:after {\n        bottom: -7px; }\n    .rs-tooltip.borderThick.left {\n      border-right: 4px solid rgba(var(--rs-color), 1); }\n      .rs-tooltip.borderThick.left:after {\n        right: -7px; }\n    .rs-tooltip.borderThick.right {\n      border-left: 4px solid rgba(var(--rs-color), 1); }\n      .rs-tooltip.borderThick.right:after {\n        left: -7px; }\n    .rs-tooltip.borderThick.bottom {\n      border-top: 4px solid rgba(var(--rs-color), 1); }\n      .rs-tooltip.borderThick.bottom:after {\n        top: -7px; }\n    .rs-tooltip.borderThick:before {\n      width: 100%;\n      height: 100%;\n      z-index: -1;\n      background: inherit;\n      border-radius: inherit;\n      top: 0px;\n      left: 0px;\n      content: '';\n      position: absolute; }\n    .rs-tooltip.borderThick:after {\n      background: rgba(var(--rs-color), 1) !important; }\n  .rs-tooltip.border {\n    background: rgba(var(--rs-background), 1);\n    color: rgba(var(--rs-color), 1);\n    border: 2px solid rgba(var(--rs-color), 1); }\n    .rs-tooltip.border:before {\n      width: 100%;\n      height: 100%;\n      z-index: -1;\n      background: inherit;\n      border-radius: inherit;\n      top: 0px;\n      left: 0px;\n      content: '';\n      position: absolute; }\n    .rs-tooltip.border:after {\n      border: 2px solid rgba(var(--rs-color), 1);\n      width: 12px !important;\n      height: 12px !important; }\n  .rs-tooltip.circle {\n    border-radius: 20px; }\n  .rs-tooltip.square {\n    border-radius: 0px; }\n  .rs-tooltip.notArrow:after {\n    display: none; }\n  .rs-tooltip.shadow {\n    background: rgba(var(--rs-background), 1);\n    color: rgba(var(--rs-color), 1);\n    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, var(--rs-shadow-opacity)); }\n    .rs-tooltip.shadow:before {\n      width: 100%;\n      height: 100%;\n      z-index: -1;\n      background: inherit;\n      border-radius: inherit;\n      top: 0px;\n      left: 0px;\n      content: '';\n      position: absolute; }\n    .rs-tooltip.shadow:after {\n      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, var(--rs-shadow-opacity)); }\n  .rs-tooltip.isDark {\n    --rs-color: var(--rs-gray-3);\n    color: #fff; }\n  .rs-tooltip.top:after {\n    content: '';\n    position: absolute;\n    bottom: -3px;\n    background: inherit;\n    width: 10px;\n    height: 10px;\n    left: 50%;\n    transform: translate(-50%) rotate(45deg);\n    z-index: -2;\n    border-radius: 0px 0px 2px 0px; }\n  .rs-tooltip.bottom:after {\n    content: '';\n    position: absolute;\n    top: -3px;\n    background: inherit;\n    width: 10px;\n    height: 10px;\n    left: 50%;\n    transform: translate(-50%) rotate(45deg);\n    z-index: -2;\n    border-radius: 2px 0px 0px 0px; }\n  .rs-tooltip.left:after {\n    content: '';\n    position: absolute;\n    right: -3px;\n    background: inherit;\n    width: 10px;\n    height: 10px;\n    top: 50%;\n    transform: translate(0, -50%) rotate(45deg);\n    z-index: -2;\n    border-radius: 0px 2px 0px 0px; }\n  .rs-tooltip.right:after {\n    content: '';\n    position: absolute;\n    left: -3px;\n    background: inherit;\n    width: 10px;\n    height: 10px;\n    top: 50%;\n    transform: translate(0, -50%) rotate(45deg);\n    z-index: -2;\n    border-radius: 0px 0px 0px 2px; }\n\n@keyframes loadingTooltip {\n  0% {\n    transform: rotate(0); }\n  100% {\n    transform: rotate(360deg); } }\n";
styleInject(css_248z);

const RsTooltip = (_a) => {
    var props = __rest(_a, []);
    const [activeTooltip, setActiveTooltip] = React.useState(false);
    const [isHoverTooltip, setIsHoverTooltip] = React.useState(false);
    const tooltipRef = React__default["default"].createRef();
    const tooltipContent = React__default["default"].createRef();
    const { tooltip, children, bottom, left, right, shadow, noArrow, square, circle, border, borderThick, loading, color, notHover, interactivity } = props;
    React.useEffect(() => {
        let position = 'top';
        if (bottom) {
            position = 'bottom';
        }
        else if (left) {
            position = 'left';
        }
        else if (right) {
            position = 'right';
        }
        if (tooltipRef.current) {
            tooltipRef.current.classList.add('rs-tooltip-enter');
            setTooltipCords(tooltipRef.current, tooltipContent.current, position);
            setTimeout(() => {
                if (tooltipRef.current) {
                    tooltipRef.current.classList.remove('rs-tooltip-enter');
                }
            }, 30);
        }
    }, [tooltipRef, tooltipContent, bottom, left, right]);
    const handleMouseEnter = () => {
        setActiveTooltip(true);
    };
    const handleMouseLeave = () => {
        if (tooltipRef.current) {
            tooltipRef.current.classList.add('rs-tooltip-leave-to');
        }
        setTimeout(() => {
            setActiveTooltip(false);
        }, 150);
    };
    const tooltipClasses = classnames('rs-tooltip', { top: !bottom && !left && !right }, { bottom: bottom }, { left: left }, { right: right }, { shadow: shadow }, { notArrow: noArrow }, { square: square }, { circle: circle }, { border: border }, { borderThick: borderThick }, { loading: loading });
    return (React__default["default"].createElement("div", { className: 'rs-tooltip-content', ref: tooltipContent, onMouseEnter: e => {
            if (!notHover) {
                handleMouseEnter();
            }
        }, onMouseLeave: () => {
            if (!notHover) {
                if (interactivity) {
                    setTimeout(() => {
                        if (!isHoverTooltip) {
                            handleMouseLeave();
                        }
                    }, 250);
                }
                else {
                    handleMouseLeave();
                }
            }
        } },
        activeTooltip ? (ReactDOM__default["default"].createPortal(React__default["default"].createElement("div", { className: tooltipClasses, ref: tooltipRef, style: {
                '--rs-color': setComponentColor(color || '')
            }, onMouseEnter: () => {
                if (interactivity) {
                    setIsHoverTooltip(true);
                    handleMouseEnter();
                }
            }, onMouseLeave: () => {
                setIsHoverTooltip(false);
                handleMouseLeave();
            } },
            tooltip,
            loading ? React__default["default"].createElement("div", { className: 'rs-tooltip__loading' }) : null), document.body)) : (React__default["default"].createElement(React__default["default"].Fragment, null)),
        children));
};

exports.Notification = Notification;
exports.RsAlert = RsAlert;
exports.RsAvatar = RsAvatar;
exports.RsAvatarGroup = RsAvatarGroup;
exports.RsButton = RsButton;
exports.RsButtonGroup = RsButtonGroup;
exports.RsCard = RsCard;
exports.RsCheckbox = RsCheckbox;
exports.RsInput = RsInput;
exports.RsLoading = RsLoading;
exports.RsModal = RsModal;
exports.RsNavbar = RsNavbar;
exports.RsNavbarGroup = RsNavbarGroup;
exports.RsNavbarItem = RsNavbarItem;
exports.RsPagination = RsPagination;
exports.RsRadio = RsRadio;
exports.RsSidebar = RsSidebar;
exports.RsSidebarGroup = RsSidebarGroup;
exports.RsSidebarItem = RsSidebarItem;
exports.RsSwitch = RsSwitch;
exports.RsTable = RsTable;
exports.RsTableTd = RsTableTd;
exports.RsTableTh = RsTableTh;
exports.RsTableTr = RsTableTr;
exports.RsTooltip = RsTooltip;
//# sourceMappingURL=index.js.map
