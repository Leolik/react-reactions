'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlackFontsCSS = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slackIconsRegular = require('../../assets/fonts/slack-icons-Regular.eot');

var _slackIconsRegular2 = _interopRequireDefault(_slackIconsRegular);

var _slackIconsRegular3 = require('../../assets/fonts/slack-icons-Regular.ttf');

var _slackIconsRegular4 = _interopRequireDefault(_slackIconsRegular3);

var _slackIconsRegular5 = require('../../assets/fonts/slack-icons-Regular.woff');

var _slackIconsRegular6 = _interopRequireDefault(_slackIconsRegular5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlackFontsCSS = exports.SlackFontsCSS = function SlackFontsCSS() {
  return _react2.default.createElement('style', {
    dangerouslySetInnerHTML: { __html: '\n        @font-face {\n          font-family: Slack;\n          src: url(' + _slackIconsRegular2.default + ');\n          src: url(' + _slackIconsRegular2.default + '?#iefix) format(\'embedded-opentype\'),\n               url(' + _slackIconsRegular6.default + ') format(\'woff\'),\n               url(' + _slackIconsRegular4.default + ') format(\'truetype\')\n        }\n      ' }
  });
};

exports.default = SlackFontsCSS;