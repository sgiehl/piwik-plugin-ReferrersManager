(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("CoreHome"), require("vue"), require("CorePluginsAdmin"));
	else if(typeof define === 'function' && define.amd)
		define(["CoreHome", , "CorePluginsAdmin"], factory);
	else if(typeof exports === 'object')
		exports["ReferrersManager"] = factory(require("CoreHome"), require("vue"), require("CorePluginsAdmin"));
	else
		root["ReferrersManager"] = factory(root["CoreHome"], root["Vue"], root["CorePluginsAdmin"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__19dc__, __WEBPACK_EXTERNAL_MODULE__8bbf__, __WEBPACK_EXTERNAL_MODULE_a5a2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "plugins/ReferrersManager/vue/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "19dc":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__19dc__;

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "a5a2":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_a5a2__;

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "ManagePage", function() { return /* reexport */ ManagePage; });
__webpack_require__.d(__webpack_exports__, "ManageSearchEngines", function() { return /* reexport */ ManageSearchEngines; });
__webpack_require__.d(__webpack_exports__, "ManageSocials", function() { return /* reexport */ ManageSocials; });
__webpack_require__.d(__webpack_exports__, "URLChecker", function() { return /* reexport */ URLChecker; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/ReferrersManager/vue/src/ManagePage/ManagePage.vue?vue&type=template&id=1ea01344

var _hoisted_1 = {
  class: "row",
  ref: "tabs"
};
var _hoisted_2 = {
  class: "tabs"
};
var _hoisted_3 = {
  class: "tab col s6"
};
var _hoisted_4 = {
  href: "#searchengineTab",
  class: "active"
};
var _hoisted_5 = {
  class: "tab col s6"
};
var _hoisted_6 = {
  href: "#socialTab"
};
var _hoisted_7 = {
  id: "searchengineTab",
  class: "col s12"
};
var _hoisted_8 = {
  id: "socialTab",
  class: "col s12"
};
var _hoisted_9 = {
  class: "ui-confirm",
  id: "removeDataConfirm"
};
var _hoisted_10 = ["innerHTML"];
var _hoisted_11 = ["value"];
var _hoisted_12 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_URLChecker = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("URLChecker");

  var _component_ContentBlock = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ContentBlock");

  var _component_ManageSearchEngines = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ManageSearchEngines");

  var _component_ManageSocials = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ManageSocials");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ContentBlock, {
    "content-title": _ctx.title
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_URLChecker)];
    }),
    _: 1
  }, 8, ["content-title"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ContentBlock, {
    id: "referrersmanage"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", _hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", _hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_ManageSearchEngines')), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", _hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", _hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_ManageSocials')), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ManageSearchEngines)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ManageSocials, {
        "own-social-definitions": _ctx.ownSocialDefinitions
      }, null, 8, ["own-social-definitions"])])], 512), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_9, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", {
        innerHTML: _ctx.translate('ReferrersManager_ConfirmRemove', "<span class='name'></span>")
      }, null, 8, _hoisted_10), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
        role: "yes",
        type: "button",
        value: _ctx.translate('General_Yes')
      }, null, 8, _hoisted_11), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
        role: "no",
        type: "button",
        value: _ctx.translate('General_Cancel')
      }, null, 8, _hoisted_12)])];
    }),
    _: 1
  })], 64);
}
// CONCATENATED MODULE: ./plugins/ReferrersManager/vue/src/ManagePage/ManagePage.vue?vue&type=template&id=1ea01344

// EXTERNAL MODULE: external "CoreHome"
var external_CoreHome_ = __webpack_require__("19dc");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/ReferrersManager/vue/src/URLChecker/URLChecker.vue?vue&type=template&id=a1e541b8

var URLCheckervue_type_template_id_a1e541b8_hoisted_1 = {
  class: "url-checker"
};
var URLCheckervue_type_template_id_a1e541b8_hoisted_2 = {
  class: "detectionresult"
};
var URLCheckervue_type_template_id_a1e541b8_hoisted_3 = ["src"];
var URLCheckervue_type_template_id_a1e541b8_hoisted_4 = ["textContent"];
var URLCheckervue_type_template_id_a1e541b8_hoisted_5 = ["innerHTML"];
var URLCheckervue_type_template_id_a1e541b8_hoisted_6 = {
  class: "socialresult"
};
var URLCheckervue_type_template_id_a1e541b8_hoisted_7 = ["src"];
var URLCheckervue_type_template_id_a1e541b8_hoisted_8 = ["textContent"];
function URLCheckervue_type_template_id_a1e541b8_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SaveButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SaveButton");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_CheckUrl')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_CheckUrlDesc')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", URLCheckervue_type_template_id_a1e541b8_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    size: "50",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.urlToCheck = $event;
    }),
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.clearResult();
    })
  }, null, 544), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.urlToCheck]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
    onConfirm: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.checkResult();
    }),
    class: "checkurlbutton",
    value: _ctx.translate('ReferrersManager_CheckUrlSend')
  }, null, 8, ["value"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", URLCheckervue_type_template_id_a1e541b8_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_DetectedEngine')) + ": ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
    src: _ctx.detectedEngineImg,
    height: "16"
  }, null, 8, URLCheckervue_type_template_id_a1e541b8_hoisted_3), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "engine",
    textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.detectedEngine)
  }, null, 8, URLCheckervue_type_template_id_a1e541b8_hoisted_4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_DetectedKeywords')) + ": ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "keywords",
    innerHTML: _ctx.$sanitize(_ctx.detectedKeyword)
  }, null, 8, URLCheckervue_type_template_id_a1e541b8_hoisted_5)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", URLCheckervue_type_template_id_a1e541b8_hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_DetectedSocial')) + ": ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
    src: _ctx.detectedSocialImg,
    height: "16"
  }, null, 8, URLCheckervue_type_template_id_a1e541b8_hoisted_7), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "social",
    textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.detectedSocial)
  }, null, 8, URLCheckervue_type_template_id_a1e541b8_hoisted_8)])])], 64);
}
// CONCATENATED MODULE: ./plugins/ReferrersManager/vue/src/URLChecker/URLChecker.vue?vue&type=template&id=a1e541b8

// EXTERNAL MODULE: external "CorePluginsAdmin"
var external_CorePluginsAdmin_ = __webpack_require__("a5a2");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/ReferrersManager/vue/src/URLChecker/URLChecker.vue?vue&type=script&lang=ts



/* harmony default export */ var URLCheckervue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  data: function data() {
    return {
      urlToCheck: '',
      detectedEngineImg: '',
      detectedEngine: '',
      detectedKeyword: '',
      detectedSocialImg: '',
      detectedSocial: ''
    };
  },
  components: {
    SaveButton: external_CorePluginsAdmin_["SaveButton"]
  },
  created: function created() {
    this.clearResult();
  },
  methods: {
    clearResult: function clearResult() {
      this.detectedEngine = '';
      this.detectedKeyword = '';
      this.detectedEngineImg = 'plugins/Morpheus/icons/dist/searchEngines/xx.png';
      this.detectedSocial = '';
      this.detectedSocialImg = 'plugins/Morpheus/icons/dist/socials/xx.png';
    },
    checkResult: function checkResult() {
      var _this = this;

      if (!/^https?:\/\//.test(this.urlToCheck)) {
        this.urlToCheck = "https://".concat(this.urlToCheck);
      }

      external_CoreHome_["AjaxHelper"].fetch({
        module: 'ReferrersManager',
        action: 'checkUrl',
        url: this.urlToCheck
      }, {
        withTokenInUrl: true
      }).then(function (response) {
        if (response.searchengine && response.searchengine.name) {
          _this.detectedEngine = response.searchengine.name;
          _this.detectedKeyword = response.searchengine.keywords;
          _this.detectedEngineImg = response.searchengine.image;
        } else {
          _this.detectedEngine = '';
          _this.detectedKeyword = '';
          _this.detectedEngineImg = 'plugins/Morpheus/icons/dist/searchEngines/xx.png';
        }

        if (response.social && response.social.name) {
          _this.detectedSocial = response.social.name;
          _this.detectedSocialImg = response.social.image;
        } else {
          _this.detectedSocial = '';
          _this.detectedSocialImg = 'plugins/Morpheus/icons/dist/socials/xx.png';
        }
      });
    }
  }
}));
// CONCATENATED MODULE: ./plugins/ReferrersManager/vue/src/URLChecker/URLChecker.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/ReferrersManager/vue/src/URLChecker/URLChecker.vue



URLCheckervue_type_script_lang_ts.render = URLCheckervue_type_template_id_a1e541b8_render

/* harmony default export */ var URLChecker = (URLCheckervue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/ReferrersManager/vue/src/ManageSearchEngines/ManageSearchEngines.vue?vue&type=template&id=67457bc8


var ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-add"
}, null, -1);

var ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-reload"
}, null, -1);

var ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_3 = {
  class: "search-detections"
};
var ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_4 = ["placeholder"];
var ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_5 = {
  key: 0
};
var ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_6 = {
  key: 0
};
var ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_7 = {
  rowspan: "6"
};
var ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_8 = {
  class: "loadingPiwik"
};

var ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_9 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
  src: "plugins/Morpheus/images/loading-blue.gif",
  alt: "{{ translate('General_LoadingData') }}"
}, null, -1);

var ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_10 = ["rowspan"];
var ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_11 = ["src"];
var ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_12 = ["title"];
var _hoisted_13 = ["title"];
var _hoisted_14 = ["title"];
var _hoisted_15 = {
  key: 1
};
var _hoisted_16 = ["onClick"];

var _hoisted_17 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-delete"
}, null, -1);

var _hoisted_18 = {
  for: "engineName"
};
var _hoisted_19 = {
  for: "engineHost"
};
var _hoisted_20 = {
  for: "engineParameter"
};
var _hoisted_21 = {
  for: "engineBacklink"
};
var _hoisted_22 = {
  for: "engineCharset"
};
function ManageSearchEnginesvue_type_template_id_67457bc8_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SaveButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SaveButton");

  var _directive_content_table = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("content-table");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_SearchEnginesList')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_HostnameWildcardDesc')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "add-element",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.showAddSearchEngineForm(true);
    })
  }, [ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_AddSearchEngine')), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "refresh-list",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.refreshList();
    })
  }, [ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Refresh')), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return _ctx.searchText = $event;
    }),
    value: "",
    placeholder: _ctx.translate('General_Search')
  }, null, 8, ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_4), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.searchText]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("table", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("thead", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Name')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_Hostname')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_Parameters')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_BacklinkPattern')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_Charset')), 1), _ctx.userDefinedSearchEngines ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("th", ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_5)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tbody", null, [_ctx.busy ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_8, [ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_9, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_LoadingData')), 1)])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !_ctx.busy ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
    key: 1
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.searchEngineNames.filter(function (name) {
    return name.toLowerCase().includes(_ctx.searchText.toLowerCase());
  }), function (name) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
      key: name
    }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.searchEngines[name], function (url, index) {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", {
        key: index
      }, [index === 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("td", {
        key: 0,
        rowspan: _ctx.searchEngines[name].length
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
        src: _ctx.searchEngineLogos[name],
        width: "16",
        height: "16"
      }, null, 8, ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_11), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.searchEngineLogos[name]]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(name), 1)], 8, ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_10)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
        title: url.url
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.truncateText(url.url, 40)), 9, ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_12), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
        title: url.parameters
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.truncateText(url.parameters, 30)), 9, _hoisted_13), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
        title: url.backlink
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.truncateText(url.backlink, 30)), 9, _hoisted_14), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(url.charset), 1), _ctx.userDefinedSearchEngines ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("td", _hoisted_15, [_ctx.userDefinedSearchEngines[url.url] ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
        key: 0,
        class: "delete-element",
        onClick: function onClick($event) {
          return _ctx.removeEngine(url.url);
        }
      }, [_hoisted_17, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Delete')), 1)], 8, _hoisted_16)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]);
    }), 128))], 64);
  }), 128)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])], 512), [[_directive_content_table]])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.showEngineForm]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_AddSearchEngine')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_ProvideEngineData')) + " ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_DuplicateHostnameInfo')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("table", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", _hoisted_18, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Name')) + "*:", 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return _ctx.newEngineData['name'] = $event;
    }),
    id: "engineName"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.newEngineData['name']]])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", _hoisted_19, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_Hostname')) + "*:", 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return _ctx.newEngineData['host'] = $event;
    }),
    id: "engineHost"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.newEngineData['host']]])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", _hoisted_20, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_Parameters')) + " " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_CommaSeparated')) + ":", 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return _ctx.newEngineData['parameters'] = $event;
    }),
    id: "engineParameter"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.newEngineData['parameters']]])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", _hoisted_21, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_BacklinkPattern')) + ":", 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return _ctx.newEngineData['backlink'] = $event;
    }),
    id: "engineBacklink"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.newEngineData['backlink']]])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", _hoisted_22, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_Charset')) + ":", 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return _ctx.newEngineData['charset'] = $event;
    }),
    id: "engineCharset"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.newEngineData['charset']]])])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
    onConfirm: _cache[8] || (_cache[8] = function ($event) {
      return _ctx.addSearchEngine();
    })
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
    onConfirm: _cache[9] || (_cache[9] = function ($event) {
      return _ctx.showAddSearchEngineForm(false);
    }),
    value: _ctx.translate('General_Cancel')
  }, null, 8, ["value"])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.showEngineForm]])], 64);
}
// CONCATENATED MODULE: ./plugins/ReferrersManager/vue/src/ManageSearchEngines/ManageSearchEngines.vue?vue&type=template&id=67457bc8

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/ReferrersManager/vue/src/ManageSearchEngines/ManageSearchEngines.vue?vue&type=script&lang=ts
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var _window = window,
    $ = _window.$;
/* harmony default export */ var ManageSearchEnginesvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  data: function data() {
    return {
      searchEngines: {},
      searchEngineNames: [],
      userDefinedSearchEngines: {},
      searchEngineLogos: {},
      newEngineData: {},
      busy: false,
      showEngineForm: false,
      searchText: ''
    };
  },
  created: function created() {
    this.fetchSearchEngines();
  },
  directives: {
    ContentTable: external_CoreHome_["ContentTable"]
  },
  components: {
    SaveButton: external_CorePluginsAdmin_["SaveButton"]
  },
  methods: {
    refreshList: function refreshList() {
      var _this = this;

      external_CoreHome_["AjaxHelper"].post({
        module: 'ReferrersManager',
        action: 'refresh',
        type: 'searchengines'
      }, {}, {
        withTokenInUrl: true
      }).then(function () {
        _this.fetchSearchEngines();
      });
    },
    fetchSearchEngines: function fetchSearchEngines() {
      var _this2 = this;

      if (this.busy) {
        return;
      }

      this.busy = true;
      var promises = [];
      promises.push(external_CoreHome_["AjaxHelper"].fetch({
        module: 'API',
        method: 'ReferrersManager.getSearchEngineDefinitions'
      }));
      promises.push(external_CoreHome_["AjaxHelper"].fetch({
        module: 'API',
        method: 'ReferrersManager.getSearchEngineLogos'
      }));
      promises.push(external_CoreHome_["AjaxHelper"].fetch({
        module: 'API',
        method: 'ReferrersManager.getUserDefinedSearchEngines'
      }));
      Promise.all(promises).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 3),
            searchEngines = _ref2[0],
            logos = _ref2[1],
            userDefinedData = _ref2[2];

        _this2.searchEngines = searchEngines;
        _this2.searchEngineNames = Object.keys(searchEngines);
        _this2.searchEngineLogos = logos;
        _this2.userDefinedSearchEngines = userDefinedData;
        _this2.busy = false;
      });
    },
    showAddSearchEngineForm: function showAddSearchEngineForm(show) {
      this.showEngineForm = show;
    },
    removeEngine: function removeEngine(host) {
      var _this3 = this;

      $('#removeDataConfirm').find('h2 .name').text(host);
      external_CoreHome_["Matomo"].helper.modalConfirm('#removeDataConfirm', {
        yes: function yes() {
          external_CoreHome_["AjaxHelper"].fetch({
            module: 'API',
            method: 'ReferrersManager.removeSearchEngine',
            host: host
          }).then(function () {
            _this3.refreshList();
          });
        }
      });
    },
    addSearchEngine: function addSearchEngine() {
      var _this4 = this;

      external_CoreHome_["AjaxHelper"].post({
        module: 'API',
        method: 'ReferrersManager.addSearchEngine'
      }, this.newEngineData).then(function (response) {
        if (!response) {
          _this4.showAddEngineError();

          return;
        } // hide/reset form and refresh list


        _this4.showAddSearchEngineForm(false);

        _this4.newEngineData = {
          name: '',
          host: '',
          parameters: '',
          backlink: '',
          charset: ''
        };

        _this4.refreshList();
      });
    },
    truncateText: function truncateText(text, length) {
      if (text && text.length > length) {
        return "".concat(text.substr(0, length - 3), "...");
      }

      return text;
    },
    showAddEngineError: function showAddEngineError() {
      external_CoreHome_["NotificationsStore"].show({
        message: Object(external_CoreHome_["translate"])('ReferrersManager_AddEngineError'),
        context: 'error',
        noclear: true,
        type: 'toast',
        style: {
          display: 'inline-block'
        },
        id: 'addEngineError'
      });
    }
  }
}));
// CONCATENATED MODULE: ./plugins/ReferrersManager/vue/src/ManageSearchEngines/ManageSearchEngines.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/ReferrersManager/vue/src/ManageSearchEngines/ManageSearchEngines.vue



ManageSearchEnginesvue_type_script_lang_ts.render = ManageSearchEnginesvue_type_template_id_67457bc8_render

/* harmony default export */ var ManageSearchEngines = (ManageSearchEnginesvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/ReferrersManager/vue/src/ManageSocials/ManageSocials.vue?vue&type=template&id=a06c1f9e

var ManageSocialsvue_type_template_id_a06c1f9e_hoisted_1 = {
  class: "notification system notification-warning"
};

var ManageSocialsvue_type_template_id_a06c1f9e_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])();

var ManageSocialsvue_type_template_id_a06c1f9e_hoisted_3 = {
  class: "notification system notification-success"
};

var ManageSocialsvue_type_template_id_a06c1f9e_hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])();

var ManageSocialsvue_type_template_id_a06c1f9e_hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-add"
}, null, -1);

var ManageSocialsvue_type_template_id_a06c1f9e_hoisted_6 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-reload"
}, null, -1);

var ManageSocialsvue_type_template_id_a06c1f9e_hoisted_7 = {
  class: "search-detections"
};
var ManageSocialsvue_type_template_id_a06c1f9e_hoisted_8 = ["placeholder"];
var ManageSocialsvue_type_template_id_a06c1f9e_hoisted_9 = {
  key: 0
};
var ManageSocialsvue_type_template_id_a06c1f9e_hoisted_10 = {
  key: 0
};
var ManageSocialsvue_type_template_id_a06c1f9e_hoisted_11 = {
  rowspan: "6"
};
var ManageSocialsvue_type_template_id_a06c1f9e_hoisted_12 = {
  class: "loadingPiwik"
};
var ManageSocialsvue_type_template_id_a06c1f9e_hoisted_13 = ["alt"];
var ManageSocialsvue_type_template_id_a06c1f9e_hoisted_14 = ["rowspan"];
var ManageSocialsvue_type_template_id_a06c1f9e_hoisted_15 = ["src"];
var ManageSocialsvue_type_template_id_a06c1f9e_hoisted_16 = {
  key: 1
};
var ManageSocialsvue_type_template_id_a06c1f9e_hoisted_17 = ["onClick"];

var ManageSocialsvue_type_template_id_a06c1f9e_hoisted_18 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-delete"
}, null, -1);

var ManageSocialsvue_type_template_id_a06c1f9e_hoisted_19 = {
  key: 0
};
var ManageSocialsvue_type_template_id_a06c1f9e_hoisted_20 = {
  for: "socialName"
};
var ManageSocialsvue_type_template_id_a06c1f9e_hoisted_21 = {
  for: "socialHost"
};
function ManageSocialsvue_type_template_id_a06c1f9e_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SaveButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SaveButton");

  var _directive_content_table = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("content-table");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_SocialsList')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", ManageSocialsvue_type_template_id_a06c1f9e_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_SocialListDisabled')), 1), ManageSocialsvue_type_template_id_a06c1f9e_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
    href: "javascript:;",
    id: "enablesocials",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.setDefaultSocialsDisabled(false);
    })
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_EnableSocialList')), 1)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.usesOwnSocialDefinitions]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", ManageSocialsvue_type_template_id_a06c1f9e_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_UsingDefaultSocials')), 1), ManageSocialsvue_type_template_id_a06c1f9e_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
    href: "javascript:;",
    id: "disablesocials",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.setDefaultSocialsDisabled(true);
    })
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_DisableSocialList')), 1)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.usesOwnSocialDefinitions]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "add-element",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.showAddSocialForm(true);
    })
  }, [ManageSocialsvue_type_template_id_a06c1f9e_hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_AddSocial')), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "refresh-list",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.refreshList();
    })
  }, [ManageSocialsvue_type_template_id_a06c1f9e_hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Refresh')), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageSocialsvue_type_template_id_a06c1f9e_hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return _ctx.searchText = $event;
    }),
    value: "",
    placeholder: _ctx.translate('General_Search')
  }, null, 8, ManageSocialsvue_type_template_id_a06c1f9e_hoisted_8), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.searchText]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("table", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("thead", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Name')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_Hostname')), 1), _ctx.userDefinedSocials ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("th", ManageSocialsvue_type_template_id_a06c1f9e_hoisted_9)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tbody", null, [_ctx.busy ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", ManageSocialsvue_type_template_id_a06c1f9e_hoisted_10, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", ManageSocialsvue_type_template_id_a06c1f9e_hoisted_11, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageSocialsvue_type_template_id_a06c1f9e_hoisted_12, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
    src: "plugins/Morpheus/images/loading-blue.gif",
    alt: _ctx.translate('General_LoadingData')
  }, null, 8, ManageSocialsvue_type_template_id_a06c1f9e_hoisted_13), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_LoadingData')), 1)])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !_ctx.busy ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
    key: 1
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.socialNames.filter(function (name) {
    return name.toLowerCase().includes(_ctx.searchText.toLowerCase());
  }), function (name) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
      key: name
    }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.socials[name], function (host, index) {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", {
        key: index
      }, [index === 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("td", {
        key: 0,
        rowspan: _ctx.socials[name].length
      }, [_ctx.socialLogos[name] ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("img", {
        key: 0,
        src: _ctx.socialLogos[name],
        width: "16",
        height: "16"
      }, null, 8, ManageSocialsvue_type_template_id_a06c1f9e_hoisted_15)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(name), 1)], 8, ManageSocialsvue_type_template_id_a06c1f9e_hoisted_14)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(host), 1), _ctx.userDefinedSocials ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("td", ManageSocialsvue_type_template_id_a06c1f9e_hoisted_16, [_ctx.userDefinedSocials[host] ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
        key: 0,
        class: "delete-element",
        onClick: function onClick($event) {
          return _ctx.removeSocial(host);
        }
      }, [ManageSocialsvue_type_template_id_a06c1f9e_hoisted_18, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Delete')), 1)], 8, ManageSocialsvue_type_template_id_a06c1f9e_hoisted_17)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]);
    }), 128))], 64);
  }), 128)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])], 512), [[_directive_content_table]])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.showSocialForm]]), _ctx.showSocialForm ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", ManageSocialsvue_type_template_id_a06c1f9e_hoisted_19, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_AddSocial')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_ProvideSocialData')) + " ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_DuplicateHostnameInfo')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("table", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", ManageSocialsvue_type_template_id_a06c1f9e_hoisted_20, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Name')) + "*:", 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return _ctx.newSocialData['name'] = $event;
    }),
    id: "socialName"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.newSocialData['name']]])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", ManageSocialsvue_type_template_id_a06c1f9e_hoisted_21, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_Hostname')) + "*:", 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return _ctx.newSocialData['host'] = $event;
    }),
    id: "socialHost"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.newSocialData['host']]])])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
    onConfirm: _cache[7] || (_cache[7] = function ($event) {
      return _ctx.addSocial();
    })
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
    onConfirm: _cache[8] || (_cache[8] = function ($event) {
      return _ctx.showAddSocialForm(false);
    }),
    value: _ctx.translate('General_Cancel')
  }, null, 8, ["value"])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 64);
}
// CONCATENATED MODULE: ./plugins/ReferrersManager/vue/src/ManageSocials/ManageSocials.vue?vue&type=template&id=a06c1f9e

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/ReferrersManager/vue/src/ManageSocials/ManageSocials.vue?vue&type=script&lang=ts
function ManageSocialsvue_type_script_lang_ts_slicedToArray(arr, i) { return ManageSocialsvue_type_script_lang_ts_arrayWithHoles(arr) || ManageSocialsvue_type_script_lang_ts_iterableToArrayLimit(arr, i) || ManageSocialsvue_type_script_lang_ts_unsupportedIterableToArray(arr, i) || ManageSocialsvue_type_script_lang_ts_nonIterableRest(); }

function ManageSocialsvue_type_script_lang_ts_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ManageSocialsvue_type_script_lang_ts_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ManageSocialsvue_type_script_lang_ts_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ManageSocialsvue_type_script_lang_ts_arrayLikeToArray(o, minLen); }

function ManageSocialsvue_type_script_lang_ts_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ManageSocialsvue_type_script_lang_ts_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ManageSocialsvue_type_script_lang_ts_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ManageSocialsvue_type_script_lang_ts_window = window,
    ManageSocialsvue_type_script_lang_ts_$ = ManageSocialsvue_type_script_lang_ts_window.$;
/* harmony default export */ var ManageSocialsvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    ownSocialDefinitions: Boolean
  },
  data: function data() {
    return {
      socials: {},
      socialNames: [],
      userDefinedSocials: {},
      socialLogos: {},
      newSocialData: {},
      busy: false,
      showSocialForm: false,
      searchText: '',
      usesOwnSocialDefinitions: this.ownSocialDefinitions
    };
  },
  created: function created() {
    this.fetchSocials();
  },
  directives: {
    ContentTable: external_CoreHome_["ContentTable"]
  },
  components: {
    SaveButton: external_CorePluginsAdmin_["SaveButton"]
  },
  methods: {
    refreshList: function refreshList() {
      var _this = this;

      external_CoreHome_["AjaxHelper"].post({
        module: 'ReferrersManager',
        action: 'refresh',
        type: 'socials'
      }, {}, {
        withTokenInUrl: true
      }).then(function () {
        _this.fetchSocials();
      });
    },
    fetchSocials: function fetchSocials() {
      var _this2 = this;

      if (this.busy) {
        return;
      }

      this.busy = true;
      var promises = [];
      promises.push(external_CoreHome_["AjaxHelper"].fetch({
        module: 'API',
        method: 'ReferrersManager.getSocialDefinitions'
      }));
      promises.push(external_CoreHome_["AjaxHelper"].fetch({
        module: 'API',
        method: 'ReferrersManager.getSocialLogos'
      }));
      promises.push(external_CoreHome_["AjaxHelper"].fetch({
        module: 'API',
        method: 'ReferrersManager.getUserDefinedSocials'
      }));
      Promise.all(promises).then(function (_ref) {
        var _ref2 = ManageSocialsvue_type_script_lang_ts_slicedToArray(_ref, 3),
            searchEngines = _ref2[0],
            logos = _ref2[1],
            userDefinedData = _ref2[2];

        _this2.socials = searchEngines;
        _this2.socialNames = Object.keys(searchEngines);
        _this2.socialLogos = logos;
        _this2.userDefinedSocials = userDefinedData;
        _this2.busy = false;
      });
    },
    showAddSocialForm: function showAddSocialForm(show) {
      this.showSocialForm = show;
    },
    removeSocial: function removeSocial(host) {
      var _this3 = this;

      ManageSocialsvue_type_script_lang_ts_$('#removeDataConfirm').find('h2 .name').text(host);
      external_CoreHome_["Matomo"].helper.modalConfirm('#removeDataConfirm', {
        yes: function yes() {
          external_CoreHome_["AjaxHelper"].fetch({
            module: 'API',
            method: 'ReferrersManager.removeSocial',
            host: host
          }).then(function () {
            _this3.refreshList();
          });
        }
      });
    },
    addSocial: function addSocial() {
      var _this4 = this;

      external_CoreHome_["AjaxHelper"].post({
        module: 'API',
        method: 'ReferrersManager.addSocial'
      }, this.newSocialData).then(function (response) {
        if (!response) {
          _this4.showAddEngineError();

          return;
        } // hide/reset form and refresh list


        _this4.showAddSocialForm(false);

        _this4.newSocialData = {
          name: '',
          host: ''
        };

        _this4.refreshList();
      });
    },
    setDefaultSocialsDisabled: function setDefaultSocialsDisabled(state) {
      var _this5 = this;

      external_CoreHome_["AjaxHelper"].fetch({
        module: 'API',
        method: 'ReferrersManager.setDefaultSocialsDisabled',
        state: state
      }, this.newSocialData).then(function () {
        _this5.fetchSocials();

        _this5.usesOwnSocialDefinitions = state;
      });
    },
    truncateText: function truncateText(text, length) {
      if (text && text.length > length) {
        return "".concat(text.substr(0, length - 3), "...");
      }

      return text;
    },
    showAddEngineError: function showAddEngineError() {
      external_CoreHome_["NotificationsStore"].show({
        message: Object(external_CoreHome_["translate"])('ReferrersManager_AddSocialError'),
        context: 'error',
        noclear: true,
        type: 'toast',
        style: {
          display: 'inline-block'
        },
        id: 'addEngineError'
      });
    }
  }
}));
// CONCATENATED MODULE: ./plugins/ReferrersManager/vue/src/ManageSocials/ManageSocials.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/ReferrersManager/vue/src/ManageSocials/ManageSocials.vue



ManageSocialsvue_type_script_lang_ts.render = ManageSocialsvue_type_template_id_a06c1f9e_render

/* harmony default export */ var ManageSocials = (ManageSocialsvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/ReferrersManager/vue/src/ManagePage/ManagePage.vue?vue&type=script&lang=ts





var ManagePagevue_type_script_lang_ts_window = window,
    ManagePagevue_type_script_lang_ts_$ = ManagePagevue_type_script_lang_ts_window.$;
/* harmony default export */ var ManagePagevue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    title: String,
    ownSocialDefinitions: Boolean
  },
  mounted: function mounted() {
    var tabs = this.$refs.tabs;
    ManagePagevue_type_script_lang_ts_$('.tabs', tabs).tabs();
  },
  components: {
    ContentBlock: external_CoreHome_["ContentBlock"],
    URLChecker: URLChecker,
    ManageSearchEngines: ManageSearchEngines,
    ManageSocials: ManageSocials
  }
}));
// CONCATENATED MODULE: ./plugins/ReferrersManager/vue/src/ManagePage/ManagePage.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/ReferrersManager/vue/src/ManagePage/ManagePage.vue



ManagePagevue_type_script_lang_ts.render = render

/* harmony default export */ var ManagePage = (ManagePagevue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/ReferrersManager/vue/src/index.ts
/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */




// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ })

/******/ });
});
//# sourceMappingURL=ReferrersManager.umd.js.map