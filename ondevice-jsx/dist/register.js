"use strict";

var _react = _interopRequireDefault(require("react"));

var _addons = _interopRequireDefault(require("@storybook/addons"));

var _containers = _interopRequireDefault(require("./containers"));

var _consts = require("./consts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_addons["default"].register(_consts.ADDON_ID, function () {
  _addons["default"].addPanel(_consts.PANEL_ID, {
    title: 'JSX',
    render: function render(_ref) {
      var key = _ref.key;
      return _react["default"].createElement(_containers["default"], {
        key: key
      });
    }
  });
});