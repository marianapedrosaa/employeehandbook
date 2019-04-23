var pageComponent =
webpackJsonppageComponent([20],{

/***/ 292:
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

var _gympassSoy = __webpack_require__(293);

var _gympassSoy2 = _interopRequireDefault(_gympassSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bWTAk = function (_Component) {
  _inherits(bWTAk, _Component);

  function bWTAk() {
    _classCallCheck(this, bWTAk);

    return _possibleConstructorReturn(this, (bWTAk.__proto__ || Object.getPrototypeOf(bWTAk)).apply(this, arguments));
  }

  return bWTAk;
}(_metalComponent2.default);

;

_metalSoy2.default.register(bWTAk, _gympassSoy2.default);

exports.default = bWTAk;

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.bWTAk = undefined;

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

  // This file was automatically generated from gympass.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace bWTAk.
   * @public
   */

  goog.module('bWTAk.incrementaldom');

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
    var param452 = function param452() {
      ie_open('h6');
      var dyn34 = opt_data.page.description;
      if (typeof dyn34 == 'function') dyn34();else if (dyn34 != null) itext(dyn34);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h4');
      itext('Formas de ades\xE3o');
      ie_close('h4');
      ie_open('p');
      ie_open('b');
      itext('Desconto em folha de pagamento');
      ie_close('b');
      itext(': preenchimendo de um termo online e aprova\xE7\xE3o do RH;');
      ie_open('b');
      itext('Cart\xE3o de cr\xE9dito');
      ie_close('b');
      itext(': inscri\xE7\xE3o online atrav\xE9s do portal Gympass.');
      ie_close('p');
      ie_open('h4');
      itext('Como funciona');
      ie_close('h4');
      ie_open('p');
      itext('Atrav\xE9s do site, o colaborador poder\xE1 ter acesso aos planos e rede de academias dispon\xEDveis. Todos os colaboradore tem 70% de desconto em cima dos valores dispon\xEDveis no portal do Gympass. Ap\xF3s a inscrci\xE7\xE3o, confirma\xE7\xE3o e ades\xE3o pelo time do RH, o colaborador j\xE1 poder\xE1 ter acesso \xE0 rede de academias.');
      ie_close('p');
      ie_open('h4');
      itext('Dependentes');
      ie_close('h4');
      ie_open('p');
      itext('No pr\xF3prio portal, o colaborador poder\xE1 aderir seus dependentes (n\xE3o h\xE1 limite de quantidade). Eles recebem 30% de desconto sobre os valores da mensalidade dispon\xEDvel no portal do Gympass.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param452 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'bWTAk.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var bWTAk = function (_Component) {
  _inherits(bWTAk, _Component);

  function bWTAk() {
    _classCallCheck(this, bWTAk);

    return _possibleConstructorReturn(this, (bWTAk.__proto__ || Object.getPrototypeOf(bWTAk)).apply(this, arguments));
  }

  return bWTAk;
}(_metalComponent2.default);

_metalSoy2.default.register(bWTAk, templates);
exports.bWTAk = bWTAk;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[292]);