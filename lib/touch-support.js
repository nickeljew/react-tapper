"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _eventSupport = _interopRequireDefault(require("./event-support"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __TouchSupported;

var touchSupport = function touchSupport() {
  if (typeof __TouchSupported === 'boolean') return __TouchSupported;
  __TouchSupported = (0, _eventSupport["default"])("touchstart"); //("ontouchstart" in document.documentElement)

  return __TouchSupported;
};

var _default = touchSupport;
exports["default"] = _default;
