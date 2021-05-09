"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _touchSupport = _interopRequireDefault(require("./touch-support"));

var _touchStyles = _interopRequireDefault(require("./touch-styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _extends = Object.assign || function (target) {
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

var Tappable = /*#__PURE__*/function (_Component) {
  _inherits(Tappable, _Component);

  var _super = _createSuper(Tappable);

  function Tappable(props, context) {
    var _this;

    _classCallCheck(this, Tappable);

    _this = _super.call(this, props, context);
    _this.state = _this.getInitialState();
    _this.touchable = (0, _touchSupport["default"])();
    return _this;
  }

  _createClass(Tappable, [{
    key: "getInitialState",
    value: function getInitialState() {
      return {
        x: null,
        y: null,
        swiping: false,
        start: 0
      };
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props,
          style = {};

      _extends(style, _touchStyles["default"], props.style);

      var newComponentProps = _extends({}, props, {
        style: style,
        className: props.className,
        disabled: props.disabled //, handlers: this.handlers

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
      delete newComponentProps.delta; //delete newComponentProps.handlers

      return /*#__PURE__*/(0, _react.createElement)(props.component, newComponentProps, props.children);
    }
  }, {
    key: "calculatePos",
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
    key: "touchStart",
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
    key: "touchMove",
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

      this.setState({
        swiping: true
      });

      if (cancelPageSwipe) {
        e.preventDefault();
      }
    }
  }, {
    key: "touchEnd",
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
    key: "touchCancel",
    value: function touchCancel(ev) {
      this.setState(this.getInitialState());
    }
  }, {
    key: "_handleClick",
    value: function _handleClick(ev) {
      var _this2 = this;

      //!this.touchable && this._handleTap(ev)
      if (this.state.start === 0) {
        this._handleTap(ev);
      } else {
        setTimeout(function () {
          _this2.state.start === 0 && _this2._handleTap(ev);
        }, 300);
      }
    }
  }, {
    key: "_handleTap",
    value: function _handleTap(ev) {
      this.props.onTap && this.props.onTap(ev);
    }
  }, {
    key: "handlers",
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

exports["default"] = Tappable;

_defineProperty(Tappable, "propTypes", {
  component: _propTypes["default"].any,
  onTap: _propTypes["default"].func,
  onSwiped: _propTypes["default"].func,
  onSwipingUp: _propTypes["default"].func,
  onSwipingRight: _propTypes["default"].func,
  onSwipingDown: _propTypes["default"].func,
  onSwipingLeft: _propTypes["default"].func,
  onSwipedUp: _propTypes["default"].func,
  onSwipedRight: _propTypes["default"].func,
  onSwipedDown: _propTypes["default"].func,
  onSwipedLeft: _propTypes["default"].func,
  flickThreshold: _propTypes["default"].number,
  delta: _propTypes["default"].number
});

_defineProperty(Tappable, "defaultProps", {
  component: 'div',
  flickThreshold: 0.6,
  delta: 10
});
