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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _touchSupport = __webpack_require__(8);

var _touchSupport2 = _interopRequireDefault(_touchSupport);

var _touchStyles = __webpack_require__(7);

var _touchStyles2 = _interopRequireDefault(_touchStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var Tappable = function (_Component) {
    _inherits(Tappable, _Component);

    function Tappable(props, context) {
        _classCallCheck(this, Tappable);

        var _this = _possibleConstructorReturn(this, (Tappable.__proto__ || Object.getPrototypeOf(Tappable)).call(this, props, context));

        _this.state = {
            x: null,
            y: null,
            swiping: false,
            start: 0
        };

        _this.touchable = (0, _touchSupport2.default)();
        return _this;
    }

    _createClass(Tappable, [{
        key: 'render',
        value: function render() {
            var props = this.props,
                style = {};
            _extends(style, _touchStyles2.default, props.style);

            var newComponentProps = _extends({}, props, {
                style: style,
                className: props.className,
                disabled: props.disabled
            }, this.handlers());

            delete newComponentProps.onTap;
            delete newComponentProps.onPress;
            delete newComponentProps.onPinchStart;
            delete newComponentProps.onPinchMove;
            delete newComponentProps.onPinchEnd;
            delete newComponentProps.moveThreshold;
            delete newComponentProps.pressDelay;
            delete newComponentProps.pressMoveThreshold;
            delete newComponentProps.preventDefault;
            delete newComponentProps.stopPropagation;
            delete newComponentProps.component;
            delete newComponentProps.flickThreshold;
            delete newComponentProps.delta;


            return (0, _react.createElement)(props.component, newComponentProps, props.children);
        }
    }, {
        key: 'calculatePos',
        value: function calculatePos(e) {
            var x = e.changedTouches[0].clientX;
            var y = e.changedTouches[0].clientY;

            var xd = this.state.x - x;
            var yd = this.state.y - y;

            var axd = Math.abs(xd);
            var ayd = Math.abs(yd);

            return {
                deltaX: xd,
                deltaY: yd,
                absX: axd,
                absY: ayd
            };
        }
    }, {
        key: 'touchStart',
        value: function touchStart(e) {
            if (e.touches.length > 1) {
                return;
            }

            if (!this.touchable) {
                console.debug('Damn! You are using a non-touchable browser simulating touch events!');
                this.touchable = true;
            }

            this.setState({
                start: Date.now(),
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
                swiping: false
            });
        }
    }, {
        key: 'touchMove',
        value: function touchMove(e) {
            if (!this.state.x || !this.state.y || e.touches.length > 1) {
                return;
            }

            var cancelPageSwipe = false;
            var pos = this.calculatePos(e);

            if (pos.absX < this.props.delta && pos.absY < this.props.delta) {
                return;
            }

            if (pos.absX > pos.absY) {
                if (pos.deltaX > 0) {
                    if (this.props.onSwipingLeft) {
                        this.props.onSwipingLeft(e, pos.absX);
                        cancelPageSwipe = true;
                    }
                } else {
                    if (this.props.onSwipingRight) {
                        this.props.onSwipingRight(e, pos.absX);
                        cancelPageSwipe = true;
                    }
                }
            } else {
                if (pos.deltaY > 0) {
                    if (this.props.onSwipingUp) {
                        this.props.onSwipingUp(e, pos.absY);
                        cancelPageSwipe = true;
                    }
                } else {
                    if (this.props.onSwipingDown) {
                        this.props.onSwipingDown(e, pos.absY);
                        cancelPageSwipe = true;
                    }
                }
            }

            this.setState({ swiping: true });

            if (cancelPageSwipe) {
                e.preventDefault();
            }
        }
    }, {
        key: 'touchEnd',
        value: function touchEnd(ev) {
            if (this.state.swiping) {
                var pos = this.calculatePos(ev);

                var time = Date.now() - this.state.start;
                var velocity = Math.sqrt(pos.absX * pos.absX + pos.absY * pos.absY) / time;
                var isFlick = velocity > this.props.flickThreshold;

                this.props.onSwiped && this.props.onSwiped(ev, pos.deltaX, pos.deltaY, isFlick);

                if (pos.absX > pos.absY) {
                    if (pos.deltaX > 0) {
                        this.props.onSwipedLeft && this.props.onSwipedLeft(ev, pos.deltaX);
                    } else {
                        this.props.onSwipedRight && this.props.onSwipedRight(ev, pos.deltaX);
                    }
                } else {
                    if (pos.deltaY > 0) {
                        this.props.onSwipedUp && this.props.onSwipedUp(ev, pos.deltaY);
                    } else {
                        this.props.onSwipedDown && this.props.onSwipedDown(ev, pos.deltaY);
                    }
                }
            } else {
                this._handleTap(ev);
            }

            this.setState(this.getInitialState());
        }
    }, {
        key: 'touchCancel',
        value: function touchCancel(ev) {
            this.setState(this.getInitialState());
        }
    }, {
        key: '_handleClick',
        value: function _handleClick(ev) {
            var _this2 = this;

            if (this.state.start === 0) {
                this._handleTap(ev);
            } else {
                setTimeout(function () {
                    _this2.state.start === 0 && _this2._handleTap(ev);
                }, 300);
            }
        }
    }, {
        key: '_handleTap',
        value: function _handleTap(ev) {
            this.props.onTap && this.props.onTap(ev);
        }
    }, {
        key: 'handlers',
        value: function handlers() {
            return {
                onTouchStart: this.touchStart.bind(this),
                onTouchMove: this.touchMove.bind(this),
                onTouchEnd: this.touchEnd.bind(this),
                onTouchCancel: this.touchCancel.bind(this),
                onClick: this._handleClick.bind(this)
            };
        }
    }]);

    return Tappable;
}(_react.Component);

Tappable.propTypes = {
    component: _propTypes2.default.any,
    onTap: _propTypes2.default.func,

    onSwiped: _propTypes2.default.func,
    onSwipingUp: _propTypes2.default.func,
    onSwipingRight: _propTypes2.default.func,
    onSwipingDown: _propTypes2.default.func,
    onSwipingLeft: _propTypes2.default.func,
    onSwipedUp: _propTypes2.default.func,
    onSwipedRight: _propTypes2.default.func,
    onSwipedDown: _propTypes2.default.func,
    onSwipedLeft: _propTypes2.default.func,
    flickThreshold: _propTypes2.default.number,
    delta: _propTypes2.default.number
};

Tappable.defaultProps = {
    component: 'div',
    flickThreshold: 0.6,
    delta: 10
};

exports.default = Tappable;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = docReady;

function docReady(callback) {

    function completed() {
        document.removeEventListener("DOMContentLoaded", completed, false);
        window.removeEventListener("load", completed, false);
        callback();
    }

    //Events.on(document, 'DOMContentLoaded', completed)

    if (document.readyState === "complete") {
        // Handle it asynchronously to allow scripts the opportunity to delay ready
        setTimeout(callback);
    } else {

        // Use the handy event callback
        document.addEventListener("DOMContentLoaded", completed, false);

        // A fallback to window.onload, that will always work
        window.addEventListener("load", completed, false);
    }
}

module.exports = exports["default"];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
    value: true
});

var dom = {

    isDescendant: function isDescendant(parent, child) {
        var node = child.parentNode;

        while (node !== null) {
            if (node === parent) return true;
            node = node.parentNode;
        }

        return false;
    },

    offset: function offset(el) {
        var rect = el.getBoundingClientRect();
        return {
            top: rect.top + document.body.scrollTop,
            left: rect.left + document.body.scrollLeft
        };
    },

    getStyleAttributeAsNumber: function getStyleAttributeAsNumber(el, attr) {
        var attrStyle = el.style[attr];
        var attrNum = 0;
        if (attrStyle && attrStyle.length) {
            attrNum = parseInt(attrStyle);
        }

        return attrNum;
    },

    addClass: function addClass(el, className) {
        if (el.classList) el.classList.add(className);else el.className += ' ' + className;
    },

    removeClass: function removeClass(el, className) {
        if (el.classList) el.classList.remove(className);else el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    },

    hasClass: function hasClass(el, className) {
        if (el.classList) return el.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    },

    toggleClass: function toggleClass(el, className) {
        if (this.hasClass(el, className)) this.removeClass(el, className);else this.addClass(el, className);
    },

    forceRedraw: function forceRedraw(el) {
        var originalDisplay = el.style.display;

        el.style.display = 'none';
        el.offsetHeight;
        el.style.display = originalDisplay;
    },

    withoutTransition: function withoutTransition(el, callback) {
        var originalTransition = el.style.transition;

        //turn off transition
        el.style.transition = null;

        callback();

        //force a redraw
        this.forceRedraw(el);

        //put the transition back
        el.style.transition = originalTransition;
    },

    nodeById: function nodeById(id) {
        return document.getElementById(id);
    },

    nodeBySelector: function nodeBySelector(el, s) {
        return (el || document).querySelector(s);
    },

    nodesBySelector: function nodesBySelector(el, s) {
        return (el || document).querySelectorAll(s);
    },

    text: function text(el, _text) {
        if (typeof _text === 'string') {
            el && (el.innerText = _text);
            return this;
        }
        return el ? el.innerText || el.textContent || '' : '';
    }

};

exports['default'] = dom;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _es6Docready = __webpack_require__(2);

var _es6Docready2 = _interopRequireDefault(_es6Docready);

var _es6Dom = __webpack_require__(3);

var _es6Dom2 = _interopRequireDefault(_es6Dom);

var _tappable = __webpack_require__(1);

var _tappable2 = _interopRequireDefault(_tappable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _es6Docready2.default)(function () {
    var Main = function (_Component) {
        _inherits(Main, _Component);

        function Main(props, context) {
            _classCallCheck(this, Main);

            var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props, context));

            _this.state = {
                showed: false,
                closeable: false
            };

            _this._handleOverlayTouchTap = _this._handleOverlayTouchTap.bind(_this);
            _this._onShow = _this._onShow.bind(_this);
            _this._onDismiss = _this._onDismiss.bind(_this);
            return _this;
        }

        _createClass(Main, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    'div',
                    { className: 'main' },
                    _react2.default.createElement(
                        'a',
                        { className: 'hitbtn', onClick: this._onShow },
                        'Click to show'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: ["container", "table", this.state.showed ? "show" : ''].join(' ') },
                        _react2.default.createElement(_tappable2.default, { className: 'overlay', onTap: this._handleOverlayTouchTap }),
                        _react2.default.createElement(
                            'div',
                            { className: 'cell' },
                            _react2.default.createElement(
                                'div',
                                { className: 'popup' },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Hello, it\'s me'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'I was wondering if after all these years you\'d like to meet'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'To go over everything'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'They say that time\'s supposed to heal ya'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'But I ain\'t done much healing'
                                ),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    '< click gray area to dismiss >'
                                )
                            )
                        )
                    )
                );
            }
        }, {
            key: '_handleOverlayTouchTap',
            value: function _handleOverlayTouchTap(e) {
                if (this.state.closeable) {
                    this._onDismiss();
                }
            }
        }, {
            key: '_onShow',
            value: function _onShow() {
                setTimeout(function () {
                    this.state.closeable = true;
                }.bind(this), 250);
                this.setState({ showed: true });
            }
        }, {
            key: '_onDismiss',
            value: function _onDismiss() {
                this.setState({ showed: false, closeable: false });
            }
        }]);

        return Main;
    }(_react.Component);

    _reactDom2.default.render(_react2.default.createElement(Main, null), _es6Dom2.default.nodeById("page-container"));
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var TAGNAMES = {
    'select': 'input',
    'change': 'input',
    'submit': 'form',
    'reset': 'form',
    'error': 'img',
    'load': 'img',
    'abort': 'img'
};

var eventSupport = function eventSupport(eventName) {
    if (typeof window === "undefined" || typeof document === "undefined") return false;
    var el = document.createElement(TAGNAMES[eventName] || 'div');
    eventName = 'on' + eventName;
    var isSupported = eventName in el;
    if (!isSupported) {
        el.setAttribute(eventName, 'return;');
        isSupported = typeof el[eventName] == 'function';
    }
    el = null;
    return isSupported;
};

exports.default = eventSupport;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var touchStyles = {
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    KhtmlUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none'
};

exports.default = touchStyles;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _eventSupport = __webpack_require__(6);

var _eventSupport2 = _interopRequireDefault(_eventSupport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __TouchSupported = void 0;
var touchSupport = function touchSupport() {
    if (typeof __TouchSupported === 'boolean') return __TouchSupported;

    __TouchSupported = (0, _eventSupport2.default)("touchstart");
    return __TouchSupported;
};

exports.default = touchSupport;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = PropTypes;

/***/ })
/******/ ]);