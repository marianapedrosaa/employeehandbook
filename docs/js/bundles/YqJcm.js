var pageComponent =
webpackJsonppageComponent([8],{

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

var _learnandgetbetterSoy = __webpack_require__(315);

var _learnandgetbetterSoy2 = _interopRequireDefault(_learnandgetbetterSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YqJcm = function (_Component) {
  _inherits(YqJcm, _Component);

  function YqJcm() {
    _classCallCheck(this, YqJcm);

    return _possibleConstructorReturn(this, (YqJcm.__proto__ || Object.getPrototypeOf(YqJcm)).apply(this, arguments));
  }

  return YqJcm;
}(_metalComponent2.default);

;

_metalSoy2.default.register(YqJcm, _learnandgetbetterSoy2.default);

exports.default = YqJcm;

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.YqJcm = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from learnandgetbetter.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace YqJcm.
   * @public
   */

  goog.module('YqJcm.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param569 = function param569() {
      ie_open('h6');
      var dyn43 = opt_data.page.description;
      if (typeof dyn43 == 'function') dyn43();else if (dyn43 != null) itext(dyn43);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h5');
      itext('Proyectos del programa');
      ie_close('h5');
      ie_open('ul');
      ie_open('li');
      itext('Biblioteca Liferay;');
      ie_close('li');
      ie_open('li');
      itext('Beneficio Educaci\xF3n;');
      ie_close('li');
      ie_open('li');
      itext('Tech Talks;');
      ie_close('li');
      ie_open('li');
      itext('Plan de Desarrollo Individual (PDI);');
      ie_close('li');
      ie_open('li');
      itext('Hackathon, etc.');
      ie_close('li');
      ie_close('ul');
      ie_open('h6');
      itext('En caso de dudas no duden en contactar el RR.HH. Latam.');
      ie_close('h6');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param569 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'YqJcm.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var YqJcm = function (_Component) {
  _inherits(YqJcm, _Component);

  function YqJcm() {
    _classCallCheck(this, YqJcm);

    return _possibleConstructorReturn(this, (YqJcm.__proto__ || Object.getPrototypeOf(YqJcm)).apply(this, arguments));
  }

  return YqJcm;
}(_metalComponent2.default);

_metalSoy2.default.register(YqJcm, templates);
exports.YqJcm = YqJcm;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[314]);