"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var JSX =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(JSX, _React$PureComponent);

  function JSX() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, JSX);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(JSX)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onPressCopy = function () {
      var storySource = _this.props.storySource;

      _reactNative.Clipboard.setString(storySource);
    };

    return _this;
  }

  _createClass(JSX, [{
    key: "render",
    value: function render() {
      var storySource = this.props.storySource;
      return _react["default"].createElement(_reactNative.View, {
        style: style.wrapper
      }, _react["default"].createElement(_reactNative.View, {
        style: {
          flex: 1
        }
      }, storySource.split('\n').map(function (item, idx) {
        return (// eslint-disable-next-line react/no-array-index-key
          _react["default"].createElement(_reactNative.Text, {
            style: style.text,
            key: idx
          }, item)
        );
      })), _react["default"].createElement(_reactNative.View, {
        style: {
          position: 'absolute',
          right: 5,
          top: 5
        }
      }, _react["default"].createElement(_reactNative.TouchableOpacity, {
        onPress: this.onPressCopy
      }, _react["default"].createElement(_reactNative.Text, null, "COPY"))));
    }
  }]);

  return JSX;
}(_react["default"].PureComponent);

exports["default"] = JSX;
var style = {
  text: {
    color: 'rgb(68, 68, 68)',
    fontSize: 12,
    letterSpacing: 1
  },
  wrapper: {
    flex: 1,
    padding: 10
  }
};