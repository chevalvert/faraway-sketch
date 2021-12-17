/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/faraway-sketch/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(19);

var iterableToArrayLimit = __webpack_require__(20);

var nonIterableRest = __webpack_require__(21);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(16);

var iterableToArray = __webpack_require__(17);

var nonIterableSpread = __webpack_require__(18);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return n; });
/* unused harmony export normalize */
/* unused harmony export map */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return e; });
/* unused harmony export roundTo */
/* unused harmony export floorTo */
/* unused harmony export fract */
function n(n,t,r){return Math.max(t,Math.min(n,r))}function t(n,t,o,u){return void 0===u&&(u=!1),r(n,t,o,0,1,u)}function r(t,r,o,u,i,a){void 0===a&&(a=!1);var e=(t-r)*(i-u)/(o-r)+u;return a?n(e,u,i):e}function o(n,t,r){return n+r*(t-n)}function u(n,t,r){return void 0===r&&(r=Math.random),void 0!==t?o(n,t,r()):o(0,n,r())}function i(n,t,r){return void 0===r&&(r=Math.random),Math.floor(u(n,t,r))}function a(n){return 180*n/Math.PI}function e(n){return n*Math.PI/180}function f(n,t){return Math.ceil(n/t)*t}function c(n,t){return Math.floor(n/t)*t}function h(n,t){var r=n-Math.floor(n);return t?+r.toFixed(t):r}
//# sourceMappingURL=missing-math.m.js.map


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
module.exports = __webpack_require__(29);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hotkeys_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internet_raf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_abstractions_Scene__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__points_csv__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__points_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__points_csv__);




window.addEventListener('click', function () {
  document.getElementById('clickToStart').remove();
  window.store = {
    debug: false,
    scene: {
      color: '#333',
      padding: 200 // px

    },
    phare: {
      displayLights: true,
      duration: {
        awake: 3.5 * 1000 // ms

      },
      base: {
        color: 'rgba(0, 0, 0, 0.2)',
        radius: 800 / 2 // mm

      },
      led: {
        length: 1700 // mm

      },
      arm: {
        color: '#000',
        length: 3000,
        // mm
        offset: -500,
        // mm
        thickness: 80 // mm

      }
    }
  };
  var canvas = document.querySelector('canvas');
  window.scene = new __WEBPACK_IMPORTED_MODULE_2_abstractions_Scene__["a" /* default */](canvas, __WEBPACK_IMPORTED_MODULE_3__points_csv___default.a.filter(function (_ref) {
    var x = _ref.x;
    return !isNaN(x);
  }).map(function (_ref2) {
    var x = _ref2.x,
        y = _ref2.y;
    return [x, -y];
  }));
  __WEBPACK_IMPORTED_MODULE_1__internet_raf__["a" /* default */].add(function (dt) {
    try {
      window.scene.update(dt);
    } catch (error) {
      console.error(error);
      __WEBPACK_IMPORTED_MODULE_1__internet_raf__["a" /* default */].stop();
    }
  });
  Object(__WEBPACK_IMPORTED_MODULE_0_hotkeys_js__["a" /* default */])('w', function () {
    window.store.debug = !window.store.debug;
  });
  Object(__WEBPACK_IMPORTED_MODULE_0_hotkeys_js__["a" /* default */])('l', function () {
    window.store.phare.displayLights = !window.store.phare.displayLights;
  });
  Object(__WEBPACK_IMPORTED_MODULE_0_hotkeys_js__["a" /* default */])('r', function () {
    return window.scene.clear();
  });
}, {
  once: true
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*!
 * hotkeys-js v3.8.1
 * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
 * 
 * Copyright (c) 2020 kenny wong <wowohoo@qq.com>
 * http://jaywcjlove.github.io/hotkeys
 * 
 * Licensed under the MIT license.
 */

var isff = typeof navigator !== 'undefined' ? navigator.userAgent.toLowerCase().indexOf('firefox') > 0 : false; // 绑定事件

function addEvent(object, event, method) {
  if (object.addEventListener) {
    object.addEventListener(event, method, false);
  } else if (object.attachEvent) {
    object.attachEvent("on".concat(event), function () {
      method(window.event);
    });
  }
} // 修饰键转换成对应的键码


function getMods(modifier, key) {
  var mods = key.slice(0, key.length - 1);

  for (var i = 0; i < mods.length; i++) {
    mods[i] = modifier[mods[i].toLowerCase()];
  }

  return mods;
} // 处理传的key字符串转换成数组


function getKeys(key) {
  if (typeof key !== 'string') key = '';
  key = key.replace(/\s/g, ''); // 匹配任何空白字符,包括空格、制表符、换页符等等

  var keys = key.split(','); // 同时设置多个快捷键，以','分割

  var index = keys.lastIndexOf(''); // 快捷键可能包含','，需特殊处理

  for (; index >= 0;) {
    keys[index - 1] += ',';
    keys.splice(index, 1);
    index = keys.lastIndexOf('');
  }

  return keys;
} // 比较修饰键的数组


function compareArray(a1, a2) {
  var arr1 = a1.length >= a2.length ? a1 : a2;
  var arr2 = a1.length >= a2.length ? a2 : a1;
  var isIndex = true;

  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) isIndex = false;
  }

  return isIndex;
}

var _keyMap = {
  backspace: 8,
  tab: 9,
  clear: 12,
  enter: 13,
  return: 13,
  esc: 27,
  escape: 27,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  del: 46,
  delete: 46,
  ins: 45,
  insert: 45,
  home: 36,
  end: 35,
  pageup: 33,
  pagedown: 34,
  capslock: 20,
  '⇪': 20,
  ',': 188,
  '.': 190,
  '/': 191,
  '`': 192,
  '-': isff ? 173 : 189,
  '=': isff ? 61 : 187,
  ';': isff ? 59 : 186,
  '\'': 222,
  '[': 219,
  ']': 221,
  '\\': 220
}; // Modifier Keys

var _modifier = {
  // shiftKey
  '⇧': 16,
  shift: 16,
  // altKey
  '⌥': 18,
  alt: 18,
  option: 18,
  // ctrlKey
  '⌃': 17,
  ctrl: 17,
  control: 17,
  // metaKey
  '⌘': 91,
  cmd: 91,
  command: 91
};
var modifierMap = {
  16: 'shiftKey',
  18: 'altKey',
  17: 'ctrlKey',
  91: 'metaKey',
  shiftKey: 16,
  ctrlKey: 17,
  altKey: 18,
  metaKey: 91
};
var _mods = {
  16: false,
  18: false,
  17: false,
  91: false
};
var _handlers = {}; // F1~F12 special key

for (var k = 1; k < 20; k++) {
  _keyMap["f".concat(k)] = 111 + k;
}

var _downKeys = []; // 记录摁下的绑定键

var _scope = 'all'; // 默认热键范围

var elementHasBindEvent = []; // 已绑定事件的节点记录
// 返回键码

var code = function code(x) {
  return _keyMap[x.toLowerCase()] || _modifier[x.toLowerCase()] || x.toUpperCase().charCodeAt(0);
}; // 设置获取当前范围（默认为'所有'）


function setScope(scope) {
  _scope = scope || 'all';
} // 获取当前范围


function getScope() {
  return _scope || 'all';
} // 获取摁下绑定键的键值


function getPressedKeyCodes() {
  return _downKeys.slice(0);
} // 表单控件控件判断 返回 Boolean
// hotkey is effective only when filter return true


function filter(event) {
  var target = event.target || event.srcElement;
  var tagName = target.tagName;
  var flag = true; // ignore: isContentEditable === 'true', <input> and <textarea> when readOnly state is false, <select>

  if (target.isContentEditable || (tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT') && !target.readOnly) {
    flag = false;
  }

  return flag;
} // 判断摁下的键是否为某个键，返回true或者false


function isPressed(keyCode) {
  if (typeof keyCode === 'string') {
    keyCode = code(keyCode); // 转换成键码
  }

  return _downKeys.indexOf(keyCode) !== -1;
} // 循环删除handlers中的所有 scope(范围)


function deleteScope(scope, newScope) {
  var handlers;
  var i; // 没有指定scope，获取scope

  if (!scope) scope = getScope();

  for (var key in _handlers) {
    if (Object.prototype.hasOwnProperty.call(_handlers, key)) {
      handlers = _handlers[key];

      for (i = 0; i < handlers.length;) {
        if (handlers[i].scope === scope) handlers.splice(i, 1);else i++;
      }
    }
  } // 如果scope被删除，将scope重置为all


  if (getScope() === scope) setScope(newScope || 'all');
} // 清除修饰键


function clearModifier(event) {
  var key = event.keyCode || event.which || event.charCode;

  var i = _downKeys.indexOf(key); // 从列表中清除按压过的键


  if (i >= 0) {
    _downKeys.splice(i, 1);
  } // 特殊处理 cmmand 键，在 cmmand 组合快捷键 keyup 只执行一次的问题


  if (event.key && event.key.toLowerCase() === 'meta') {
    _downKeys.splice(0, _downKeys.length);
  } // 修饰键 shiftKey altKey ctrlKey (command||metaKey) 清除


  if (key === 93 || key === 224) key = 91;

  if (key in _mods) {
    _mods[key] = false; // 将修饰键重置为false

    for (var k in _modifier) {
      if (_modifier[k] === key) hotkeys[k] = false;
    }
  }
}

function unbind(keysInfo) {
  // unbind(), unbind all keys
  if (!keysInfo) {
    Object.keys(_handlers).forEach(function (key) {
      return delete _handlers[key];
    });
  } else if (Array.isArray(keysInfo)) {
    // support like : unbind([{key: 'ctrl+a', scope: 's1'}, {key: 'ctrl-a', scope: 's2', splitKey: '-'}])
    keysInfo.forEach(function (info) {
      if (info.key) eachUnbind(info);
    });
  } else if (typeof keysInfo === 'object') {
    // support like unbind({key: 'ctrl+a, ctrl+b', scope:'abc'})
    if (keysInfo.key) eachUnbind(keysInfo);
  } else if (typeof keysInfo === 'string') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    // support old method
    // eslint-disable-line
    var scope = args[0],
        method = args[1];

    if (typeof scope === 'function') {
      method = scope;
      scope = '';
    }

    eachUnbind({
      key: keysInfo,
      scope: scope,
      method: method,
      splitKey: '+'
    });
  }
} // 解除绑定某个范围的快捷键


var eachUnbind = function eachUnbind(_ref) {
  var key = _ref.key,
      scope = _ref.scope,
      method = _ref.method,
      _ref$splitKey = _ref.splitKey,
      splitKey = _ref$splitKey === void 0 ? '+' : _ref$splitKey;
  var multipleKeys = getKeys(key);
  multipleKeys.forEach(function (originKey) {
    var unbindKeys = originKey.split(splitKey);
    var len = unbindKeys.length;
    var lastKey = unbindKeys[len - 1];
    var keyCode = lastKey === '*' ? '*' : code(lastKey);
    if (!_handlers[keyCode]) return; // 判断是否传入范围，没有就获取范围

    if (!scope) scope = getScope();
    var mods = len > 1 ? getMods(_modifier, unbindKeys) : [];
    _handlers[keyCode] = _handlers[keyCode].map(function (record) {
      // 通过函数判断，是否解除绑定，函数相等直接返回
      var isMatchingMethod = method ? record.method === method : true;

      if (isMatchingMethod && record.scope === scope && compareArray(record.mods, mods)) {
        return {};
      }

      return record;
    });
  });
}; // 对监听对应快捷键的回调函数进行处理


function eventHandler(event, handler, scope) {
  var modifiersMatch; // 看它是否在当前范围

  if (handler.scope === scope || handler.scope === 'all') {
    // 检查是否匹配修饰符（如果有返回true）
    modifiersMatch = handler.mods.length > 0;

    for (var y in _mods) {
      if (Object.prototype.hasOwnProperty.call(_mods, y)) {
        if (!_mods[y] && handler.mods.indexOf(+y) > -1 || _mods[y] && handler.mods.indexOf(+y) === -1) {
          modifiersMatch = false;
        }
      }
    } // 调用处理程序，如果是修饰键不做处理


    if (handler.mods.length === 0 && !_mods[16] && !_mods[18] && !_mods[17] && !_mods[91] || modifiersMatch || handler.shortcut === '*') {
      if (handler.method(event, handler) === false) {
        if (event.preventDefault) event.preventDefault();else event.returnValue = false;
        if (event.stopPropagation) event.stopPropagation();
        if (event.cancelBubble) event.cancelBubble = true;
      }
    }
  }
} // 处理keydown事件


function dispatch(event) {
  var asterisk = _handlers['*'];
  var key = event.keyCode || event.which || event.charCode; // 表单控件过滤 默认表单控件不触发快捷键

  if (!hotkeys.filter.call(this, event)) return; // Gecko(Firefox)的command键值224，在Webkit(Chrome)中保持一致
  // Webkit左右 command 键值不一样

  if (key === 93 || key === 224) key = 91;
  /**
   * Collect bound keys
   * If an Input Method Editor is processing key input and the event is keydown, return 229.
   * https://stackoverflow.com/questions/25043934/is-it-ok-to-ignore-keydown-events-with-keycode-229
   * http://lists.w3.org/Archives/Public/www-dom/2010JulSep/att-0182/keyCode-spec.html
   */

  if (_downKeys.indexOf(key) === -1 && key !== 229) _downKeys.push(key);
  /**
   * Jest test cases are required.
   * ===============================
   */

  ['ctrlKey', 'altKey', 'shiftKey', 'metaKey'].forEach(function (keyName) {
    var keyNum = modifierMap[keyName];

    if (event[keyName] && _downKeys.indexOf(keyNum) === -1) {
      _downKeys.push(keyNum);
    } else if (!event[keyName] && _downKeys.indexOf(keyNum) > -1) {
      _downKeys.splice(_downKeys.indexOf(keyNum), 1);
    } else if (keyName === 'metaKey' && event[keyName] && _downKeys.length === 3) {
      /**
       * Fix if Command is pressed:
       * ===============================
       */
      if (!(event.ctrlKey || event.shiftKey || event.altKey)) {
        _downKeys = _downKeys.slice(_downKeys.indexOf(keyNum));
      }
    }
  });
  /**
   * -------------------------------
   */

  if (key in _mods) {
    _mods[key] = true; // 将特殊字符的key注册到 hotkeys 上

    for (var k in _modifier) {
      if (_modifier[k] === key) hotkeys[k] = true;
    }

    if (!asterisk) return;
  } // 将 modifierMap 里面的修饰键绑定到 event 中


  for (var e in _mods) {
    if (Object.prototype.hasOwnProperty.call(_mods, e)) {
      _mods[e] = event[modifierMap[e]];
    }
  }
  /**
   * https://github.com/jaywcjlove/hotkeys/pull/129
   * This solves the issue in Firefox on Windows where hotkeys corresponding to special characters would not trigger.
   * An example of this is ctrl+alt+m on a Swedish keyboard which is used to type μ.
   * Browser support: https://caniuse.com/#feat=keyboardevent-getmodifierstate
   */


  if (event.getModifierState && !(event.altKey && !event.ctrlKey) && event.getModifierState('AltGraph')) {
    if (_downKeys.indexOf(17) === -1) {
      _downKeys.push(17);
    }

    if (_downKeys.indexOf(18) === -1) {
      _downKeys.push(18);
    }

    _mods[17] = true;
    _mods[18] = true;
  } // 获取范围 默认为 `all`


  var scope = getScope(); // 对任何快捷键都需要做的处理

  if (asterisk) {
    for (var i = 0; i < asterisk.length; i++) {
      if (asterisk[i].scope === scope && (event.type === 'keydown' && asterisk[i].keydown || event.type === 'keyup' && asterisk[i].keyup)) {
        eventHandler(event, asterisk[i], scope);
      }
    }
  } // key 不在 _handlers 中返回


  if (!(key in _handlers)) return;

  for (var _i = 0; _i < _handlers[key].length; _i++) {
    if (event.type === 'keydown' && _handlers[key][_i].keydown || event.type === 'keyup' && _handlers[key][_i].keyup) {
      if (_handlers[key][_i].key) {
        var record = _handlers[key][_i];
        var splitKey = record.splitKey;
        var keyShortcut = record.key.split(splitKey);
        var _downKeysCurrent = []; // 记录当前按键键值

        for (var a = 0; a < keyShortcut.length; a++) {
          _downKeysCurrent.push(code(keyShortcut[a]));
        }

        if (_downKeysCurrent.sort().join('') === _downKeys.sort().join('')) {
          // 找到处理内容
          eventHandler(event, record, scope);
        }
      }
    }
  }
} // 判断 element 是否已经绑定事件


function isElementBind(element) {
  return elementHasBindEvent.indexOf(element) > -1;
}

function hotkeys(key, option, method) {
  _downKeys = [];
  var keys = getKeys(key); // 需要处理的快捷键列表

  var mods = [];
  var scope = 'all'; // scope默认为all，所有范围都有效

  var element = document; // 快捷键事件绑定节点

  var i = 0;
  var keyup = false;
  var keydown = true;
  var splitKey = '+'; // 对为设定范围的判断

  if (method === undefined && typeof option === 'function') {
    method = option;
  }

  if (Object.prototype.toString.call(option) === '[object Object]') {
    if (option.scope) scope = option.scope; // eslint-disable-line

    if (option.element) element = option.element; // eslint-disable-line

    if (option.keyup) keyup = option.keyup; // eslint-disable-line

    if (option.keydown !== undefined) keydown = option.keydown; // eslint-disable-line

    if (typeof option.splitKey === 'string') splitKey = option.splitKey; // eslint-disable-line
  }

  if (typeof option === 'string') scope = option; // 对于每个快捷键进行处理

  for (; i < keys.length; i++) {
    key = keys[i].split(splitKey); // 按键列表

    mods = []; // 如果是组合快捷键取得组合快捷键

    if (key.length > 1) mods = getMods(_modifier, key); // 将非修饰键转化为键码

    key = key[key.length - 1];
    key = key === '*' ? '*' : code(key); // *表示匹配所有快捷键
    // 判断key是否在_handlers中，不在就赋一个空数组

    if (!(key in _handlers)) _handlers[key] = [];

    _handlers[key].push({
      keyup: keyup,
      keydown: keydown,
      scope: scope,
      mods: mods,
      shortcut: keys[i],
      method: method,
      key: keys[i],
      splitKey: splitKey
    });
  } // 在全局document上设置快捷键


  if (typeof element !== 'undefined' && !isElementBind(element) && window) {
    elementHasBindEvent.push(element);
    addEvent(element, 'keydown', function (e) {
      dispatch(e);
    });
    addEvent(window, 'focus', function () {
      _downKeys = [];
    });
    addEvent(element, 'keyup', function (e) {
      dispatch(e);
      clearModifier(e);
    });
  }
}

var _api = {
  setScope: setScope,
  getScope: getScope,
  deleteScope: deleteScope,
  getPressedKeyCodes: getPressedKeyCodes,
  isPressed: isPressed,
  filter: filter,
  unbind: unbind
};

for (var a in _api) {
  if (Object.prototype.hasOwnProperty.call(_api, a)) {
    hotkeys[a] = _api[a];
  }
}

if (typeof window !== 'undefined') {
  var _hotkeys = window.hotkeys;

  hotkeys.noConflict = function (deep) {
    if (deep && window.hotkeys === hotkeys) {
      window.hotkeys = _hotkeys;
    }

    return hotkeys;
  };

  window.hotkeys = hotkeys;
}

/* harmony default export */ __webpack_exports__["a"] = (hotkeys);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RafTimer_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fpsLimiter_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raf_js__ = __webpack_require__(11);
/* unused harmony reexport RafTimer */
/* unused harmony reexport fpsLimiter */
/* unused harmony reexport raf */





/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2__raf_js__["a" /* default */]);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/**
 * Create a new RafTimer instance.
 * @class RafTimer
 * @param {number} delay Number of milliseconds before executing the callback.
 * @param {Function} cb Callback function executed when the timer hit 0. For convenience, a restart method will be passed as 1st arg of the cb function.
 * @param {boolean} [autostart=true] Optional (default true). Auto-start the timer (Don't need to call start() method).
 * @constructor
 * @example
 * import { raf, RafTimer } from '@internet/raf'
 *
 * const timer = new RafTimer(2000, restart => {
 *   console.log('Will be logged after 2000ms')
 *   restart() // Restart the timer. onDone will be called after another 2000ms.
 * })
 *
 * raf.add(dt => timer.update(dt))
 */

function RafTimer (delay, cb, autostart) {
  if (autostart === void 0) autostart = true

  this._stopped = !autostart
  this._remainder = 0
  this._delay = delay | 0
  this._remainingTime = delay
  this._callback = cb === undefined ? function () {} : cb

  // fast binding
  var restart = this.restart
  var self = this
  this.restart = function (n, u) { restart.call(self, n, u) }

  if (this._delay === 0) this._stopped = true
}

/**
 * Set a new callback function.
 * @method
 * @param {function} newCallback New callback function. For convenience, a restart method will be passed as 1st arg of the cb function.
 * @param {number} [newDelay] Optional. Set a new delay (in ms). If set, the timer will be restarted
 */
RafTimer.prototype.setCallback = function setCallback (newCallback, newDelay) {
  this._callback = newCallback === undefined ? function () {} : newCallback
  if (newDelay) this.restart(newDelay)
}

/**
 * Stop the timer. update() calls will do nothing.
 * @method
 */
RafTimer.prototype.stop = function stop () {
  this._stopped = true
}

/**
 * Start the timer if stopped.
 * @method
 */
RafTimer.prototype.start = function start () {
  if (!this._stopped) return
  this.restart()
}

/**
 * Restart the timer
 * @method
 * @param {number} newDelay
 * @param {boolean} [useRemainder=true] Optional (default true). Use deltatime's remainder from the last time the timer hits 0.
 */
RafTimer.prototype.restart = function restart (newDelay, useRemainder) {
  if (useRemainder === void 0) useRemainder = true

  if (newDelay !== undefined) this._delay = newDelay
  this._stopped = false
  this._remainingTime = this._delay - (this._remainder * (+useRemainder))
}

/**
 * Update remaining time. Usually executed inside a requestAnimationFrame call.
 * @method
 * @param {number} dt Time elapsed since the last call (in ms).
 */
RafTimer.prototype.update = function update (dt) {
  if (this._stopped) return
  this._remainingTime -= dt
  if (this._remainingTime <= 0) {
    this._stopped = true
    this._remainder = (-this._remainingTime) % this._delay
    this._callback(this.restart)
  } else {
    this._remainder = 0
  }
}

/**
 * Stop the timer and remove callback reference
 * @method
 */
RafTimer.prototype.dispose = function dispose () {
  this._callback = this.restart = function () {}
  this._stopped = true
  this._remainder = 0
  this._remainingTime = this._delay
}

/* unused harmony default export */ var _unused_webpack_default_export = (RafTimer);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/**
 * Limit function calls to a specific framerate
 * @param {number} [framerate=30] Framerate
 * @param {function} callback Function to be called at the specified frame interval
 * @return {function} Framerate-limited function to add to your raf
 * @example
 * import { raf, fpsLimiter } from '@internet/raf'
 *
 * function tick () {
 *   console.log('called each 10 fps')
 * }
 *
 * const limited = fpsLimiter(10, tick)
 * raf.add(limited)
 */
function fpsLimiter (framerate, callback) {
  if (callback === void 0) throw new Error('You must specify a callback')
  if (framerate === void 0) framerate = 30
  var _interval = 1000 / framerate
  var _remainingTime = 0
  var _elapsedTime = 0
  return function (dt) {
    _remainingTime -= dt
    _elapsedTime += dt
    if (_remainingTime <= 0) {
      callback(_elapsedTime)
      _elapsedTime = 0
      _remainingTime = _interval + (_remainingTime % _interval)
    }
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (fpsLimiter);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * Core of the raf package
 * @module raf
 * @type {Object}
 * @example
 * import { raf } from '@internet/raf'
 *
 * function tick (dt) {
 *  console.log('called on new frame')
 * }
 *
 * raf.add(tick)
 */

var root = typeof window === 'undefined' ? global : window
var _observers = []
var _afterObservers = []
var _beforeObservers = []
var _rafHandler = null
var _lastDate = null
var _once = false
var _complex = false

/**
 * Time elapsed between the previous and the current frame
 * @type {number}
 * @static
 * @category properties
 */
var time

/**
 * Current delta time
 * @type {number}
 * @static
 * @category properties
 */
var dt

function _frame (timestamp) {
  // compute deltatime and time
  if (timestamp === void 0) timestamp = 0
  if (_lastDate === null) _lastDate = timestamp
  dt = timestamp - _lastDate
  time += dt
  _lastDate = timestamp
  // we request the frame now, allowing to cancel it from observers
  _rafHandler = _once ? null : root.requestAnimationFrame(_frame)
  if (_once) _once = false
  // call all observers
  var i
  if (_complex) {
    for (i = 0; i < _beforeObservers.length; i++) _beforeObservers[i](dt)
    for (i = 0; i < _observers.length; i++) _observers[i](dt)
    for (i = 0; i < _afterObservers.length; i++) _afterObservers[i](dt)
  } else {
    for (i = 0; i < _observers.length; i++) _observers[i](dt)
  }
}

function _swapRunner () {
  _complex = !!(_afterObservers.length > 0 || _beforeObservers.length > 0)
}

function _addObserver (arr, fn, prepend) {
  if (!fn || !arr) return false
  if (~arr.indexOf(fn)) return false
  prepend = !!prepend
  prepend ? arr.unshift(fn) : arr.push(fn)
  return true
}

function _removeObserver (arr, fn) {
  if (!fn) return false
  var index = arr.indexOf(fn)
  if (!~index) return false
  arr.splice(index, 1)
  return !!(arr.length === 0)
}

/**
 * Add a function for execution at the beginning of the raf call
 * Calling addBefore will not start the raf.
 * @param {function} fn Function to be called at the start of the raf
 * @param {function} [prepend=false] Prepend the function to the beginning of the functions list
 * @static
 * @category methods
 */
function addBefore (fn, prepend) {
  _addObserver(_beforeObservers, fn, prepend) && _swapRunner()
}

/**
 * Add a function for execution at the end of the raf call
 * Calling addAfter will not start the raf.
 * @param {function} fn Function to be called at the end of the raf
 * @param {function} [prepend=false] Prepend the function to the beginning of the functions list
 * @static
 * @category methods
 */
function addAfter (fn, prepend) {
  _addObserver(_afterObservers, fn, prepend) && _swapRunner()
}

/**
 * Add a function for execution on each frame
 * @param {function} fn Function to be called
 * @param {function} [prepend=false] Prepend the function to the beginning of the functions list
 * @static
 * @category methods
 */
function add (fn, prepend) {
  _addObserver(_observers, fn, prepend) && start()
}

/**
 * Remove a function for execution at the beginning of the raf call
 * Calling removeBefore will not stop the raf.
 * @param {function} fn Function to remove from the raf
 * @static
 * @category methods
 */
function removeBefore (fn) {
  _removeObserver(_beforeObservers, fn) && _swapRunner()
}

/**
 * Remove a function for execution at the end of the raf call
 * Calling removeAfter will not stop the raf.
 * @param {function} fn Function to remove from the raf
 * @param {function} [prepend=false] Prepend the function to the beginning of the functions list
 * @static
 * @category methods
 */
function removeAfter (fn, prepend) {
  _removeObserver(_afterObservers, fn) && _swapRunner()
}

/**
 * Remove a function for execution on each frame
 * @param {function} fn Function to remove from the raf
 * @static
 * @category methods
 */
function remove (fn) {
  _removeObserver(_observers, fn) && stop()
}

/**
 * Force start the raf. You usually don't need to use it.
 * @param {boolean} [instant=false] Directly make a raf call without waiting for the next frame (default false)
 * @static
 * @category methods
 */
function start (instant) {
  _once = false
  if (_rafHandler) return
  instant = !!instant
  _lastDate = null
  if (instant) _frame()
  else _rafHandler = root.requestAnimationFrame(_frame)
}

/**
 * Request once the raf. Will not be executed if the raf is already running.
 * @static
 * @category methods
 */
function requestOnce () {
  if (_rafHandler) return
  _once = true
  _lastDate = null
  _rafHandler = root.requestAnimationFrame(_frame)
}

/**
 * Force stop the raf. You usually don't need to use it.
 * @static
 * @category methods
 */
function stop () {
  if (!_rafHandler) return
  root.cancelAnimationFrame(_rafHandler)
  _rafHandler = null
}

/**
 * Remove all observers from the raf singleton and stop the raf if it's running. Reset time.
 * @static
 * @category methods
 */
function dispose () {
  stop()
  _observers.length = 0
  _afterObservers.length = 0
  _beforeObservers.length = 0
  _complex = false
  _lastDate = null
  time = 0
  dt = 0
}

/* harmony default export */ __webpack_exports__["a"] = ({
  add: add,
  addAfter: addAfter,
  addBefore: addBefore,
  remove: remove,
  removeAfter: removeAfter,
  removeBefore: removeBefore,
  start: start,
  stop: stop,
  time: time,
  dt: dt,
  requestOnce: requestOnce,
  dispose: dispose
});

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(12)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scene; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_construct__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_construct___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_construct__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_toConsumableArray__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_slicedToArray__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_abstractions_Phare__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_abstractions_BoundingBox__ = __webpack_require__(27);








var Scene =
/*#__PURE__*/
function () {
  function Scene(canvas, points) {
    __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_classCallCheck___default()(this, Scene);

    this.handleResize = this.handleResize.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
    this.props = {
      canvas: canvas,
      points: points
    };
    this.ctx = canvas.getContext('2d');
    this.bbox = new __WEBPACK_IMPORTED_MODULE_6_abstractions_BoundingBox__["a" /* default */](points);
    this.phares = points.map(function (_ref) {
      var _ref2 = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_slicedToArray___default()(_ref, 2),
          x = _ref2[0],
          y = _ref2[1];

      return new __WEBPACK_IMPORTED_MODULE_5_abstractions_Phare__["a" /* default */](x, y);
    });
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    this.props.canvas.addEventListener('click', this.handleClick);
  }

  __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_createClass___default()(Scene, [{
    key: "clear",
    value: function clear() {
      this.phares.length = 0;
    }
  }, {
    key: "add",
    value: function add(x, y) {
      this.phares.push(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_construct___default()(__WEBPACK_IMPORTED_MODULE_5_abstractions_Phare__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_toConsumableArray___default()(this.screenToWorld(x, y))));
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      this.dpi = 1;
      this.props.canvas.width = window.innerWidth * this.dpi;
      this.props.canvas.height = window.innerHeight * this.dpi;
      this.props.canvas.style.width = window.innerWidth + 'px';
      this.props.canvas.style.height = window.innerHeight + 'px';
      this.scale = Math.min((this.width - window.store.scene.padding * 2) / this.bbox.width, (this.height - window.store.scene.padding * 2) / this.bbox.height);
      this.offset = [(this.width / this.scale - this.bbox.width) / 2 - this.bbox.xmin, (this.height / this.scale - this.bbox.height) / 2 - this.bbox.ymin];
    } // click on a Phare to trigger
    // click on the Scene to add a Phare
    // shift + click on a Phare to delete

  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var position = this.screenToWorld(e.offsetX, e.offsetY);
      var activeIndex = this.phares.findIndex(function (phare) {
        return phare.isUnder(position);
      });

      if (activeIndex > -1) {
        if (e.shiftKey) this.phares.splice(activeIndex, 1);else this.phares[activeIndex].trigger(true);
      } else {
        this.phares.push(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_construct___default()(__WEBPACK_IMPORTED_MODULE_5_abstractions_Phare__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_toConsumableArray___default()(this.screenToWorld(e.offsetX, e.offsetY))));
      }
    }
  }, {
    key: "screenToWorld",
    value: function screenToWorld(x, y) {
      return [x / (this.scale / this.dpi) - this.offset[0], y / (this.scale / this.dpi) - this.offset[1]];
    }
  }, {
    key: "update",
    value: function update(dt) {
      var _this = this;

      this.props.canvas.style['background'] = window.store.scene.color;
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.save();
      this.ctx.scale(this.scale, this.scale);
      this.ctx.translate(this.offset[0], this.offset[1]);
      this.phares.forEach(function (phare) {
        return phare.update(dt);
      });
      this.phares.forEach(function (phare) {
        _this.phares.forEach(function (candidate) {
          phare.hit(candidate) && candidate.trigger();
        });

        phare.render(_this.ctx, _this.scale * _this.dpi);
        if (window.store.debug) phare.debugGeometry(_this.ctx, _this.scale * _this.dpi);
      });
      this.ctx.restore();
    }
  }, {
    key: "width",
    get: function get() {
      return this.props.canvas.width;
    }
  }, {
    key: "height",
    get: function get() {
      return this.props.canvas.height;
    }
  }]);

  return Scene;
}();



/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(15);

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Phare; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_toConsumableArray__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_segseg__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_missing_math__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_utils_distance__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_utils_simulate_falloff__ = __webpack_require__(26);





/* global Audio */





var Phare =
/*#__PURE__*/
function () {
  function Phare(x, y) {
    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default()(this, Phare);

    this.position = [x, y];
    this.radius = window.store.phare.arm.length + window.store.phare.arm.offset;
    this.alpha = Object(__WEBPACK_IMPORTED_MODULE_5_missing_math__["e" /* random */])(0, 360);
    this.state = 'iddle';
    this.direction = Math.sign(Object(__WEBPACK_IMPORTED_MODULE_5_missing_math__["e" /* random */])(-1, 1));
    var i = Object(__WEBPACK_IMPORTED_MODULE_5_missing_math__["f" /* randomInt */])(4, 7);
    this.sound = new Audio("FA-S".concat(i, "-20210525v2.wav"));
    this.seed = Math.random() * 9999;
  }

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(Phare, [{
    key: "isUnder",
    value: function isUnder(realWorldTarget) {
      return Object(__WEBPACK_IMPORTED_MODULE_6_utils_distance__["a" /* default */])(this.position, realWorldTarget) < this.radius;
    }
  }, {
    key: "update",
    value: function update(dt) {
      this.stateTime += dt;

      switch (this.state) {
        case 'iddle':
          {
            this.alpha += this.direction * 0.1;
            break;
          }

        case 'awake':
          {
            if (this.stateTime > window.store.phare.duration.awake) {
              this.state = 'iddle';
              this.direction = -this.direction;
              break;
            }

            var brake = 1 - Math.pow(this.stateTime / window.store.phare.duration.awake, 2); // SEE https://github.com/Hemisphere-Project/FarAway/blob/master/Simulation/Acceleration_theorique_FarAway/Acceleration_theorique_FarAway.pde

            var J = 2.73;
            var K1 = 4.5 / (J * 2);
            var pt = this.stateTime - dt;
            var t = this.stateTime;
            var step = Object(__WEBPACK_IMPORTED_MODULE_5_missing_math__["b" /* degrees */])(K1 * pt * pt / 1000000) - Object(__WEBPACK_IMPORTED_MODULE_5_missing_math__["b" /* degrees */])(K1 * t * t / 1000000);
            this.alpha += step * brake * -this.direction;
            break;
          }
      }
    }
  }, {
    key: "trigger",
    value: function trigger() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.sound.play(); // XXX: Toggle multiple trigger in one awake session

      if (!force && this.state === 'awake') return; // if (!force && this.state === 'awake' && this.stateTime < 500) return

      this.sound.currentTime = 0;
      this.state = 'awake';
    }
  }, {
    key: "hit",
    value: function hit(phare) {
      if (phare === this) return;
      return __WEBPACK_IMPORTED_MODULE_4_segseg__["a" /* default */].apply(void 0, [[]].concat(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_toConsumableArray___default()(this.body), __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_toConsumableArray___default()(phare.sensor)));
    }
  }, {
    key: "render",
    value: function render(ctx, scale) {
      var _this = this;

      ctx.lineCap = 'round';
      var _window$store$phare = window.store.phare,
          base = _window$store$phare.base,
          arm = _window$store$phare.arm,
          led = _window$store$phare.led,
          displayLights = _window$store$phare.displayLights;
      ctx.save();
      ctx.translate(this.position[0], this.position[1]);
      ctx.rotate(Object(__WEBPACK_IMPORTED_MODULE_5_missing_math__["d" /* radians */])(this.alpha)); // Render base

      ctx.fillStyle = base.color;
      ctx.beginPath();
      ctx.arc(0, 0, base.radius, 0, Math.PI * 2);
      ctx.fill();

      if (displayLights) {
        // Render light
        var light = this.computeLight();
        var a = arm.length + arm.offset - led.length;
        var b = arm.length + arm.offset;
        Object(__WEBPACK_IMPORTED_MODULE_7_utils_simulate_falloff__["a" /* default */])(function (_ref) {
          var intensity = _ref.intensity,
              density = _ref.density;

          var _light$rgba = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default()(light.rgba, 3),
              R = _light$rgba[0],
              G = _light$rgba[1],
              B = _light$rgba[2];

          ctx.beginPath();
          ctx.strokeStyle = "rgba(".concat(R, ", ").concat(G, ", ").concat(B, ", ").concat(intensity, ")");
          ctx.lineWidth = density;
          ctx.moveTo(Object(__WEBPACK_IMPORTED_MODULE_5_missing_math__["c" /* lerp */])(a, b, light.bounds[0]), 0);
          ctx.lineTo(Object(__WEBPACK_IMPORTED_MODULE_5_missing_math__["c" /* lerp */])(a, b, light.bounds[1]), 0);
          ctx.stroke(); // HACK: Blink a white LED when iddle

          if (_this.state === 'iddle') {
            var t = (Math.sin(_this.seed + _this.stateTime / 500) + 1) / 2;
            ctx.beginPath();
            ctx.strokeStyle = "rgba(255, 255, 255, ".concat(intensity * 2 * t, ")");
            ctx.moveTo(b, 0);
            ctx.lineTo(b, 0);
            ctx.stroke();
          }
        }, {
          initialIntensity: light.rgba[3],
          initialDensity: Math.max(1 / scale, arm.thickness),
          passes: 8
        });
      } // Render arm


      ctx.beginPath();
      ctx.strokeStyle = arm.color;
      ctx.lineWidth = Math.max(1 / scale, arm.thickness);
      ctx.moveTo(arm.offset, 0);
      ctx.lineTo(arm.length + arm.offset, 0);
      ctx.stroke(); // Render back light

      displayLights && Object(__WEBPACK_IMPORTED_MODULE_7_utils_simulate_falloff__["a" /* default */])(function (_ref2) {
        var intensity = _ref2.intensity,
            density = _ref2.density;
        ctx.fillStyle = "rgba(255, 0, 0, ".concat(intensity, ")");
        ctx.beginPath();
        ctx.arc(arm.offset, 0, density, 0, Math.PI * 2);
        ctx.fill();
      }, {
        passes: 3,
        initialIntensity: 0.2,
        initialDensity: arm.thickness / 2
      });
      ctx.restore();
    }
  }, {
    key: "computeLight",
    value: function computeLight() {
      switch (this.state) {
        case 'iddle':
          {
            var t = Object(__WEBPACK_IMPORTED_MODULE_5_missing_math__["a" /* clamp */])(this.stateTime / 1000 * 2, 0, 1);
            return {
              rgba: [255, 0, 0, t * 0.3],
              bounds: [0, 1]
            };
          }

        case 'awake':
          {
            var t1 = Object(__WEBPACK_IMPORTED_MODULE_5_missing_math__["a" /* clamp */])(this.stateTime / 50, 0, 1);
            var t2 = 1 - Math.pow(this.stateTime / window.store.phare.duration.awake, 3);
            return {
              rgba: [255, 255, 255, t2],
              bounds: [1 - t1, 1]
            };
          }
      }
    }
  }, {
    key: "debugGeometry",
    value: function debugGeometry(ctx, scale) {
      switch (this.state) {
        default:
        case 'iddle':
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
          break;

        case 'awake':
          ctx.strokeStyle = 'rgba(255, 255, 255, 1)';
          break;
      }

      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1 / scale; // Radius

      ctx.beginPath();
      ctx.arc(this.position[0], this.position[1], this.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke(); // Ray

      ctx.beginPath();
      ctx.strokeStyle = 'cyan';
      ctx.moveTo(this.sensor[0][0], this.sensor[0][1]);
      ctx.lineTo(this.sensor[1][0], this.sensor[1][1]);
      ctx.stroke();
    }
  }, {
    key: "state",
    get: function get() {
      return this._state;
    },
    set: function set(s) {
      this.stateTime = 0;
      this._state = s;
    }
  }, {
    key: "body",
    get: function get() {
      return [this.position, [this.position[0] + Math.cos(Object(__WEBPACK_IMPORTED_MODULE_5_missing_math__["d" /* radians */])(this.alpha)) * this.radius, this.position[1] + Math.sin(Object(__WEBPACK_IMPORTED_MODULE_5_missing_math__["d" /* radians */])(this.alpha)) * this.radius]];
    }
  }, {
    key: "sensor",
    get: function get() {
      return [[this.position[0] + Math.cos(Object(__WEBPACK_IMPORTED_MODULE_5_missing_math__["d" /* radians */])(this.alpha)) * this.radius * 0.9, this.position[1] + Math.sin(Object(__WEBPACK_IMPORTED_MODULE_5_missing_math__["d" /* radians */])(this.alpha)) * this.radius * 0.9], [this.position[0] + Math.cos(Object(__WEBPACK_IMPORTED_MODULE_5_missing_math__["d" /* radians */])(this.alpha)) * this.radius, this.position[1] + Math.sin(Object(__WEBPACK_IMPORTED_MODULE_5_missing_math__["d" /* radians */])(this.alpha)) * this.radius]];
    }
  }]);

  return Phare;
}();



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = segseg;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__segpoint_js__ = __webpack_require__(24);



const DONT_INTERSECT = 0
const DO_INTERSECT = 1
const COLINEAR = 2


/*  Ported from Mukesh Prasad's public domain code:
 *    http://www.realtimerendering.com/resources/GraphicsGems/gemsii/xlines.c
 *
 *   This function computes whether two line segments,
 *   respectively joining the input points (x1,y1) -- (x2,y2)
 *   and the input points (x3,y3) -- (x4,y4) intersect.
 *   If the lines intersect, the return value is an array
 *   containing coordinates of the point of intersection.
 *
 *   Params
 *        p1, p2   Coordinates of endpoints of one segment.
 *        p3, p4   Coordinates of endpoints of other segment.
 *
 *   The value returned by the function is an enumeration of DONT_INTERSECT | DO_INTERSECT | COLINEAR
 */

function _segseg (out, p1, p2, p3, p4) {
  let x1 = p1[0]
  let y1 = p1[1]
  let x2 = p2[0]
  let y2 = p2[1]
  let x3 = p3[0]
  let y3 = p3[1]
  let x4 = p4[0]
  let y4 = p4[1]

  let a1, a2, b1, b2, c1, c2 // Coefficients of line eqns.
  let r1, r2, r3, r4         // 'Sign' values
  let denom, offset          // Intermediate values
  let x, y                   // Intermediate return values

  // Compute a1, b1, c1, where line joining points 1 and 2
  // is "a1 x  +  b1 y  +  c1  =  0".
  a1 = y2 - y1
  b1 = x1 - x2
  c1 = x2 * y1 - x1 * y2

  // Compute r3 and r4.
  r3 = a1 * x3 + b1 * y3 + c1
  r4 = a1 * x4 + b1 * y4 + c1

  // Check signs of r3 and r4.  If both point 3 and point 4 lie on
  // same side of line 1, the line segments do not intersect.
  if ( r3 !== 0 && r4 !== 0 && ((r3 >= 0 && r4 >= 0) || (r3 < 0 && r4 < 0)))
    return DONT_INTERSECT

  // Compute a2, b2, c2
  a2 = y4 - y3
  b2 = x3 - x4
  c2 = x4 * y3 - x3 * y4

  // Compute r1 and r2
  r1 = a2 * x1 + b2 * y1 + c2
  r2 = a2 * x2 + b2 * y2 + c2

  // Check signs of r1 and r2.  If both point 1 and point 2 lie
  // on same side of second line segment, the line segments do
  // not intersect.
  if (r1 !== 0 && r2 !== 0 && ((r1 >= 0 && r2 >= 0) || (r1 < 0 && r2 < 0)))
    return DONT_INTERSECT

  // Line segments intersect: compute intersection point.
  denom = a1 * b2 - a2 * b1

  if (denom === 0)
    return COLINEAR

  offset = denom < 0 ? - denom / 2 : denom / 2

  x = b1 * c2 - b2 * c1
  y = a2 * c1 - a1 * c2

  out[0] = ( x < 0 ? x : x ) / denom
  out[1] = ( y < 0 ? y : y ) / denom
  
  return DO_INTERSECT
}


function segseg (out, p1, p2, p3, p4) {
  const result = _segseg(out, p1, p2, p3, p4)

  if (result === DO_INTERSECT)
    return result

  // handle colinear cases and when a line segment endpoint lies on the other segment
  if (Object(__WEBPACK_IMPORTED_MODULE_0__segpoint_js__["a" /* default */])(p1, p3, p4)) {
    out[0] = p1[0]
    out[1] = p1[1]
    return true
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_0__segpoint_js__["a" /* default */])(p2, p3, p4)) {
    out[0] = p2[0]
    out[1] = p2[1]
    return true
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_0__segpoint_js__["a" /* default */])(p3, p1, p2)) {
    out[0] = p3[0]
    out[1] = p3[1]
    return true
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_0__segpoint_js__["a" /* default */])(p4, p1, p2)) {
    out[0] = p4[0]
    out[1] = p4[1]
    return true
  }

  return false
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = distToSegment;
// from https://gist.github.com/mattdesl/47412d930dcd8cd765c871a65532ffac

function sqr (x) {
  return x * x
}


function dist2 (v, w) {
  return sqr(v[0] - w[0]) + sqr(v[1] - w[1])
}


// p - point
// v - start point of segment
// w - end point of segment
function distToSegmentSquared (p, v, w) {
  const l2 = dist2(v, w)
  if (l2 === 0)
      return dist2(p, v)

  let t = ((p[0] - v[0]) * (w[0] - v[0]) + (p[1] - v[1]) * (w[1] - v[1])) / l2
  t = Math.max(0, Math.min(1, t))
  return dist2(p, [ v[0] + t * (w[0] - v[0]), v[1] + t * (w[1] - v[1]) ])
}


// p - point
// t0 - start point of segment
// t1 - end point of segment
// return boolean indicating if p is on the segment
function distToSegment (p, t0, t1) {
  return Math.sqrt(distToSegmentSquared(p, t0, t1)) < 1
}


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray__);

/* harmony default export */ __webpack_exports__["a"] = (function (_ref, _ref2) {
  var _ref3 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default()(_ref, 2),
      x1 = _ref3[0],
      y1 = _ref3[1];

  var _ref4 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default()(_ref2, 2),
      x2 = _ref4[0],
      y2 = _ref4[1];

  var dx = x2 - x1;
  var dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_missing_math__ = __webpack_require__(4);

/* harmony default export */ __webpack_exports__["a"] = (function (render) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$passes = _ref.passes,
      passes = _ref$passes === void 0 ? 5 : _ref$passes,
      _ref$initialIntensity = _ref.initialIntensity,
      initialIntensity = _ref$initialIntensity === void 0 ? 1 : _ref$initialIntensity,
      _ref$initialDensity = _ref.initialDensity,
      initialDensity = _ref$initialDensity === void 0 ? 1 : _ref$initialDensity;

  for (var i = 0; i < passes; i++) {
    var n = i / passes;
    var intensity = i ? Object(__WEBPACK_IMPORTED_MODULE_0_missing_math__["c" /* lerp */])(initialIntensity * 0.1, 0, 1 - Math.pow(n, 2)) : initialIntensity;
    var density = initialDensity * (i ? 100 - Math.pow(n, 1.3) * 100 : 3);
    if (intensity < 0.0001) break;
    render({
      intensity: intensity,
      density: density
    });
  }
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray__);

/* harmony default export */ __webpack_exports__["a"] = (function (points) {
  var bbox = {
    xmin: Number.POSITIVE_INFINITY,
    xmax: Number.NEGATIVE_INFINITY,
    ymin: Number.POSITIVE_INFINITY,
    ymax: Number.NEGATIVE_INFINITY,

    get width() {
      return Math.abs(this.xmax - this.xmin);
    },

    get height() {
      return Math.abs(this.ymax - this.ymin);
    }

  };
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = points[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default()(_step.value, 2),
          x = _step$value[0],
          y = _step$value[1];

      if (x < bbox.xmin) bbox.xmin = x;
      if (x > bbox.xmax) bbox.xmax = x;
      if (y < bbox.ymin) bbox.ymin = y;
      if (y > bbox.ymax) bbox.ymax = y;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return bbox;
});

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = [{"x":-33604.9109,"y":170070.6215,"z":3.038},{"x":-37104.9109,"y":170070.6215,"z":3.038},{"x":-40604.9109,"y":170070.6215,"z":3.038},{"x":-44104.9109,"y":170070.6215,"z":3.038},{"x":-47604.9109,"y":170070.6215,"z":3.038},{"x":-51104.9109,"y":170070.6215,"z":3.038},{"x":-54604.9109,"y":170070.6215,"z":3.038},{"x":-58104.9109,"y":170070.6215,"z":3.038},{"x":-61604.9109,"y":170070.6215,"z":3.038},{"x":-65104.9109,"y":170070.6215,"z":3.038},{"x":-68604.9109,"y":170070.6215,"z":3.038},{"x":-72104.9109,"y":170070.6215,"z":3.038}]

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=80d35918725f232c785b.js.map