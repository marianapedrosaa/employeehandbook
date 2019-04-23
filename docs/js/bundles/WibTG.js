var pageComponent =
webpackJsonppageComponent([6],{

/***/ 318:
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

var _segurodevidaSoy = __webpack_require__(319);

var _segurodevidaSoy2 = _interopRequireDefault(_segurodevidaSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WibTG = function (_Component) {
  _inherits(WibTG, _Component);

  function WibTG() {
    _classCallCheck(this, WibTG);

    return _possibleConstructorReturn(this, (WibTG.__proto__ || Object.getPrototypeOf(WibTG)).apply(this, arguments));
  }

  return WibTG;
}(_metalComponent2.default);

;

_metalSoy2.default.register(WibTG, _segurodevidaSoy2.default);

exports.default = WibTG;

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.WibTG = undefined;

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

  // This file was automatically generated from segurodevida.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace WibTG.
   * @public
   */

  goog.module('WibTG.incrementaldom');

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
    var param591 = function param591() {
      ie_open('h6');
      var dyn45 = opt_data.page.description;
      if (typeof dyn45 == 'function') dyn45();else if (dyn45 != null) itext(dyn45);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('p');
      itext('El ');
      ie_open('b');
      itext('valor');
      ie_close('b');
      itext(' de la p\xF3liza que ser\xE1 sufragado por Liferay, ser\xE1 de 10 veces el salario del empleado. Quedando hoy bajo la responsabilidad del empleado, presupuestar con las aseguradoras y presentarnos la propuesta.');
      ie_close('p');
      ie_open('h4');
      itext('Pago');
      ie_close('h4');
      ie_open('p');
      itext('El pago se realizar\xE1 mediante reembolso, utilizando la tarjeta corporativa y siguiendo las reglas oficiales de reembolso.');
      ie_close('p');
      ie_open('h6');
      itext('En caso de dudas no duden en contactar el RR.HH. Latam.');
      ie_close('h6');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param591 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'WibTG.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var WibTG = function (_Component) {
  _inherits(WibTG, _Component);

  function WibTG() {
    _classCallCheck(this, WibTG);

    return _possibleConstructorReturn(this, (WibTG.__proto__ || Object.getPrototypeOf(WibTG)).apply(this, arguments));
  }

  return WibTG;
}(_metalComponent2.default);

_metalSoy2.default.register(WibTG, templates);
exports.WibTG = WibTG;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[318]);