"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.repeat");

require("core-js/modules/es.string.split");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JSX = void 0;

var _react = _interopRequireDefault(require("react"));

var _addons = _interopRequireWildcard(require("@storybook/addons"));

var _fp = _interopRequireDefault(require("lodash/fp"));

var _util = require("util");

var _consts = require("./consts");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var JSX = (0, _addons.makeDecorator)({
  name: 'JSX',
  parameterName: null,
  skipIfNoParametersOrOptions: false,
  wrapper: function wrapper(getStory, context) {
    var story = getStory(context);
    var storySource = getComponentRepresentation(story);

    var channel = _addons["default"].getChannel();

    channel.emit(_consts.EVENT_ID, {
      storySource: storySource
    });
    return story;
  }
});
exports.JSX = JSX;

var getSpaces = function getSpaces(depth) {
  return _fp["default"].repeat(depth * 4, "\xA0");
};

var getArrayOfAllNonDefaultProps = function getArrayOfAllNonDefaultProps(props, defaultProps) {
  return _fp["default"].toPairs(props).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        value = _ref2[1];

    return !defaultProps || defaultProps[name] !== value;
  });
};

var getFuncName = function getFuncName(value) {
  return value.name || 'anonymous';
};

var isObject = function isObject(value) {
  return _fp["default"].isObject(value) && !_fp["default"].isArray(value);
};

var renderValue = _fp["default"].cond([[_fp["default"].isFunction, getFuncName], [isObject, objToString], [_fp["default"].stubTrue, _util.inspect]]);

function objToString(obj) {
  var representation = _fp["default"].toPairs(obj).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];

    return "".concat(key, ": ").concat(isObject(value) ? objToString(value) : renderValue(value));
  }).join(', ');

  return "{".concat(representation, "}");
}

function getComponentRepresentation(story) {
  var name = story.type.displayName || story.type.name;
  var props = getArrayOfAllNonDefaultProps(story.props, story.type.defaultProps);

  if (props.length === 0) {
    return "<".concat(name, "/>\n");
  }

  var propsWithoutChildren = props.filter(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 1),
        prop = _ref6[0];

    return prop !== 'children';
  });
  var propsRepresentation = propsWithoutChildren.map(function (_ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
        prop = _ref8[0],
        value = _ref8[1];

    return getSpaces(1) + (value === true ? prop : "".concat(prop, "={").concat(renderValue(value), "}")) + '\n';
  }).join('');

  var childRepresentation = story.props.children && _react["default"].Children.map(story.props.children, function (child) {
    return _fp["default"].isObject(child) ? getComponentRepresentation(child).split('\n').map(function (x) {
      return x && getSpaces(1) + x;
    }).join('\n') : getSpaces(1) + child + '\n';
  }).join('');

  return ["<".concat(name), propsRepresentation && '\n' + propsRepresentation, !childRepresentation && '/>\n', childRepresentation && '>\n' + childRepresentation + "</".concat(name, ">\n")].filter(_fp["default"].identity).join('');
}