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
__webpack_require__.d(__webpack_exports__, "ManageAIAssistants", function() { return /* reexport */ ManageAIAssistants; });
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

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/ReferrersManager/vue/src/ManagePage/ManagePage.vue?vue&type=template&id=bee45af6

const _hoisted_1 = {
  class: "row",
  ref: "tabs"
};
const _hoisted_2 = {
  class: "tabs"
};
const _hoisted_3 = {
  class: "tab col s4"
};
const _hoisted_4 = {
  href: "#searchengineTab",
  class: "active"
};
const _hoisted_5 = {
  class: "tab col s4"
};
const _hoisted_6 = {
  href: "#socialTab"
};
const _hoisted_7 = {
  class: "tab col s4"
};
const _hoisted_8 = {
  href: "#aiAssistantTab"
};
const _hoisted_9 = {
  id: "searchengineTab",
  class: "col s12"
};
const _hoisted_10 = {
  id: "socialTab",
  class: "col s12"
};
const _hoisted_11 = {
  id: "aiAssistantTab",
  class: "col s12"
};
const _hoisted_12 = {
  class: "ui-confirm",
  id: "removeDataConfirm"
};
const _hoisted_13 = ["innerHTML"];
const _hoisted_14 = ["value"];
const _hoisted_15 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_URLChecker = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("URLChecker");
  const _component_ContentBlock = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ContentBlock");
  const _component_ManageSearchEngines = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ManageSearchEngines");
  const _component_ManageSocials = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ManageSocials");
  const _component_ManageAIAssistants = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ManageAIAssistants");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ContentBlock, {
    "content-title": _ctx.title
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_URLChecker)]),
    _: 1
  }, 8, ["content-title"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ContentBlock, {
    id: "referrersmanage"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", _hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", _hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_ManageSearchEngines')), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", _hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", _hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_ManageSocials')), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", _hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", _hoisted_8, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_ManageAIAssistants')), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_9, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ManageSearchEngines)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_10, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ManageSocials, {
      "own-social-definitions": _ctx.ownSocialDefinitions
    }, null, 8, ["own-social-definitions"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_11, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ManageAIAssistants, {
      "own-ai-assistant-definitions": _ctx.ownAiAssistantDefinitions
    }, null, 8, ["own-ai-assistant-definitions"])])], 512), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_12, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", {
      innerHTML: _ctx.translate('ReferrersManager_ConfirmRemove', `<span class='name'></span>`)
    }, null, 8, _hoisted_13), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
      role: "yes",
      type: "button",
      value: _ctx.translate('General_Yes')
    }, null, 8, _hoisted_14), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
      role: "no",
      type: "button",
      value: _ctx.translate('General_Cancel')
    }, null, 8, _hoisted_15)])]),
    _: 1
  })], 64);
}
// CONCATENATED MODULE: ./plugins/ReferrersManager/vue/src/ManagePage/ManagePage.vue?vue&type=template&id=bee45af6

// EXTERNAL MODULE: external "CoreHome"
var external_CoreHome_ = __webpack_require__("19dc");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/ReferrersManager/vue/src/URLChecker/URLChecker.vue?vue&type=template&id=2600e93d

const URLCheckervue_type_template_id_2600e93d_hoisted_1 = {
  class: "url-checker"
};
const URLCheckervue_type_template_id_2600e93d_hoisted_2 = {
  class: "detectionresult"
};
const URLCheckervue_type_template_id_2600e93d_hoisted_3 = ["src"];
const URLCheckervue_type_template_id_2600e93d_hoisted_4 = ["textContent"];
const URLCheckervue_type_template_id_2600e93d_hoisted_5 = ["innerHTML"];
const URLCheckervue_type_template_id_2600e93d_hoisted_6 = {
  class: "socialresult"
};
const URLCheckervue_type_template_id_2600e93d_hoisted_7 = ["src"];
const URLCheckervue_type_template_id_2600e93d_hoisted_8 = ["textContent"];
const URLCheckervue_type_template_id_2600e93d_hoisted_9 = {
  class: "aiassistantresult"
};
const URLCheckervue_type_template_id_2600e93d_hoisted_10 = ["src"];
const URLCheckervue_type_template_id_2600e93d_hoisted_11 = ["textContent"];
function URLCheckervue_type_template_id_2600e93d_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SaveButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SaveButton");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_CheckUrlWithAIAssistants')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_CheckUrlDescWithAIAssistants')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", URLCheckervue_type_template_id_2600e93d_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    size: "50",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.urlToCheck = $event),
    onChange: _cache[1] || (_cache[1] = $event => _ctx.clearResult())
  }, null, 544), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.urlToCheck]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
    onConfirm: _cache[2] || (_cache[2] = $event => _ctx.checkResult()),
    class: "checkurlbutton",
    value: _ctx.translate('ReferrersManager_CheckUrlSend')
  }, null, 8, ["value"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", URLCheckervue_type_template_id_2600e93d_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_DetectedEngine')) + ": ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
    src: _ctx.detectedEngineImg,
    height: "16"
  }, null, 8, URLCheckervue_type_template_id_2600e93d_hoisted_3), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "engine",
    textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.detectedEngine)
  }, null, 8, URLCheckervue_type_template_id_2600e93d_hoisted_4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_DetectedKeywords')) + ": ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "keywords",
    innerHTML: _ctx.$sanitize(_ctx.detectedKeyword)
  }, null, 8, URLCheckervue_type_template_id_2600e93d_hoisted_5)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", URLCheckervue_type_template_id_2600e93d_hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_DetectedSocial')) + ": ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
    src: _ctx.detectedSocialImg,
    height: "16"
  }, null, 8, URLCheckervue_type_template_id_2600e93d_hoisted_7), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "social",
    textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.detectedSocial)
  }, null, 8, URLCheckervue_type_template_id_2600e93d_hoisted_8)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", URLCheckervue_type_template_id_2600e93d_hoisted_9, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_DetectedAIAssistant')) + ": ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
    src: _ctx.detectedAIAssistantImg,
    height: "16"
  }, null, 8, URLCheckervue_type_template_id_2600e93d_hoisted_10), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "aiassistant",
    textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.detectedAIAssistant)
  }, null, 8, URLCheckervue_type_template_id_2600e93d_hoisted_11)])])], 64);
}
// CONCATENATED MODULE: ./plugins/ReferrersManager/vue/src/URLChecker/URLChecker.vue?vue&type=template&id=2600e93d

// EXTERNAL MODULE: external "CorePluginsAdmin"
var external_CorePluginsAdmin_ = __webpack_require__("a5a2");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/ReferrersManager/vue/src/URLChecker/URLChecker.vue?vue&type=script&lang=ts



/* harmony default export */ var URLCheckervue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  data() {
    return {
      urlToCheck: '',
      detectedEngineImg: '',
      detectedEngine: '',
      detectedKeyword: '',
      detectedSocialImg: '',
      detectedSocial: '',
      detectedAIAssistantImg: '',
      detectedAIAssistant: ''
    };
  },
  components: {
    SaveButton: external_CorePluginsAdmin_["SaveButton"]
  },
  created() {
    this.clearResult();
  },
  methods: {
    clearResult() {
      this.detectedEngine = '';
      this.detectedKeyword = '';
      this.detectedEngineImg = 'plugins/Morpheus/icons/dist/searchEngines/xx.png';
      this.detectedSocial = '';
      this.detectedSocialImg = 'plugins/Morpheus/icons/dist/socials/xx.png';
      this.detectedAIAssistant = '';
      this.detectedAIAssistantImg = 'plugins/Morpheus/icons/dist/aiAssistants/xx.png';
    },
    checkResult() {
      if (!/^https?:\/\//.test(this.urlToCheck)) {
        this.urlToCheck = `https://${this.urlToCheck}`;
      }
      external_CoreHome_["AjaxHelper"].fetch({
        module: 'ReferrersManager',
        action: 'checkUrl',
        url: this.urlToCheck
      }, {
        withTokenInUrl: true
      }).then(response => {
        if (response.searchengine && response.searchengine.name) {
          this.detectedEngine = response.searchengine.name;
          this.detectedKeyword = response.searchengine.keywords;
          this.detectedEngineImg = response.searchengine.image;
        } else {
          this.detectedEngine = '';
          this.detectedKeyword = '';
          this.detectedEngineImg = 'plugins/Morpheus/icons/dist/searchEngines/xx.png';
        }
        if (response.social && response.social.name) {
          this.detectedSocial = response.social.name;
          this.detectedSocialImg = response.social.image;
        } else {
          this.detectedSocial = '';
          this.detectedSocialImg = 'plugins/Morpheus/icons/dist/socials/xx.png';
        }
        if (response.aiassistant && response.aiassistant.name) {
          this.detectedAIAssistant = response.aiassistant.name;
          this.detectedAIAssistantImg = response.aiassistant.image;
        } else {
          this.detectedAIAssistant = '';
          this.detectedAIAssistantImg = 'plugins/Morpheus/icons/dist/aiAssistants/xx.png';
        }
      });
    }
  }
}));
// CONCATENATED MODULE: ./plugins/ReferrersManager/vue/src/URLChecker/URLChecker.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/ReferrersManager/vue/src/URLChecker/URLChecker.vue



URLCheckervue_type_script_lang_ts.render = URLCheckervue_type_template_id_2600e93d_render

/* harmony default export */ var URLChecker = (URLCheckervue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/ReferrersManager/vue/src/ManageSearchEngines/ManageSearchEngines.vue?vue&type=template&id=67457bc8

const ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-add"
}, null, -1);
const ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-reload"
}, null, -1);
const ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_3 = {
  class: "search-detections"
};
const ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_4 = ["placeholder"];
const ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_5 = {
  key: 0
};
const ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_6 = {
  key: 0
};
const ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_7 = {
  rowspan: "6"
};
const ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_8 = {
  class: "loadingPiwik"
};
const ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_9 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
  src: "plugins/Morpheus/images/loading-blue.gif",
  alt: "{{ translate('General_LoadingData') }}"
}, null, -1);
const ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_10 = ["rowspan"];
const ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_11 = ["src"];
const ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_12 = ["title"];
const ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_13 = ["title"];
const ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_14 = ["title"];
const ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_15 = {
  key: 1
};
const _hoisted_16 = ["onClick"];
const _hoisted_17 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-delete"
}, null, -1);
const _hoisted_18 = {
  for: "engineName"
};
const _hoisted_19 = {
  for: "engineHost"
};
const _hoisted_20 = {
  for: "engineParameter"
};
const _hoisted_21 = {
  for: "engineBacklink"
};
const _hoisted_22 = {
  for: "engineCharset"
};
function ManageSearchEnginesvue_type_template_id_67457bc8_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SaveButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SaveButton");
  const _directive_content_table = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("content-table");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_SearchEnginesList')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_HostnameWildcardDesc')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "add-element",
    onClick: _cache[0] || (_cache[0] = $event => _ctx.showAddSearchEngineForm(true))
  }, [ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_AddSearchEngine')), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "refresh-list",
    onClick: _cache[1] || (_cache[1] = $event => _ctx.refreshList())
  }, [ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Refresh')), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.searchText = $event),
    value: "",
    placeholder: _ctx.translate('General_Search')
  }, null, 8, ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_4), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.searchText]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("table", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("thead", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Name')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_Hostname')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_Parameters')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_BacklinkPattern')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_Charset')), 1), _ctx.userDefinedSearchEngines ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("th", ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_5)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tbody", null, [_ctx.busy ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_8, [ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_9, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_LoadingData')), 1)])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !_ctx.busy ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
    key: 1
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.searchEngineNames.filter(name => name.toLowerCase().includes(_ctx.searchText.toLowerCase())), name => {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
      key: name
    }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.searchEngines[name], (url, index) => {
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
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.truncateText(url.parameters, 30)), 9, ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_13), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
        title: url.backlink
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.truncateText(url.backlink, 30)), 9, ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_14), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(url.charset), 1), _ctx.userDefinedSearchEngines ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("td", ManageSearchEnginesvue_type_template_id_67457bc8_hoisted_15, [_ctx.userDefinedSearchEngines[url.url] ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
        key: 0,
        class: "delete-element",
        onClick: $event => _ctx.removeEngine(url.url)
      }, [_hoisted_17, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Delete')), 1)], 8, _hoisted_16)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]);
    }), 128))], 64);
  }), 128)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])])), [[_directive_content_table]])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.showEngineForm]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_AddSearchEngine')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_ProvideEngineData')) + " ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_DuplicateHostnameInfo')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("table", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", _hoisted_18, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Name')) + "*:", 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.newEngineData['name'] = $event),
    id: "engineName"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.newEngineData['name']]])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", _hoisted_19, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_Hostname')) + "*:", 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.newEngineData['host'] = $event),
    id: "engineHost"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.newEngineData['host']]])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", _hoisted_20, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_Parameters')) + " " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_CommaSeparated')) + ":", 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.newEngineData['parameters'] = $event),
    id: "engineParameter"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.newEngineData['parameters']]])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", _hoisted_21, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_BacklinkPattern')) + ":", 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.newEngineData['backlink'] = $event),
    id: "engineBacklink"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.newEngineData['backlink']]])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", _hoisted_22, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_Charset')) + ":", 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.newEngineData['charset'] = $event),
    id: "engineCharset"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.newEngineData['charset']]])])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
    onConfirm: _cache[8] || (_cache[8] = $event => _ctx.addSearchEngine())
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
    onConfirm: _cache[9] || (_cache[9] = $event => _ctx.showAddSearchEngineForm(false)),
    value: _ctx.translate('General_Cancel')
  }, null, 8, ["value"])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.showEngineForm]])], 64);
}
// CONCATENATED MODULE: ./plugins/ReferrersManager/vue/src/ManageSearchEngines/ManageSearchEngines.vue?vue&type=template&id=67457bc8

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/ReferrersManager/vue/src/ManageSearchEngines/ManageSearchEngines.vue?vue&type=script&lang=ts



const {
  $
} = window;
/* harmony default export */ var ManageSearchEnginesvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  data() {
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
  created() {
    this.fetchSearchEngines();
  },
  directives: {
    ContentTable: external_CoreHome_["ContentTable"]
  },
  components: {
    SaveButton: external_CorePluginsAdmin_["SaveButton"]
  },
  methods: {
    refreshList() {
      external_CoreHome_["AjaxHelper"].post({
        module: 'ReferrersManager',
        action: 'refresh',
        type: 'searchengines'
      }, {}, {
        withTokenInUrl: true
      }).then(() => {
        this.fetchSearchEngines();
      });
    },
    fetchSearchEngines() {
      if (this.busy) {
        return;
      }
      this.busy = true;
      const promises = [];
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
      Promise.all(promises).then(([searchEngines, logos, userDefinedData]) => {
        this.searchEngines = searchEngines;
        this.searchEngineNames = Object.keys(searchEngines);
        this.searchEngineLogos = logos;
        this.userDefinedSearchEngines = userDefinedData;
        this.busy = false;
      });
    },
    showAddSearchEngineForm(show) {
      this.showEngineForm = show;
    },
    removeEngine(host) {
      $('#removeDataConfirm').find('h2 .name').text(host);
      external_CoreHome_["Matomo"].helper.modalConfirm('#removeDataConfirm', {
        yes: () => {
          external_CoreHome_["AjaxHelper"].fetch({
            module: 'API',
            method: 'ReferrersManager.removeSearchEngine',
            host
          }).then(() => {
            this.refreshList();
          });
        }
      });
    },
    addSearchEngine() {
      external_CoreHome_["AjaxHelper"].post({
        module: 'API',
        method: 'ReferrersManager.addSearchEngine'
      }, this.newEngineData).then(response => {
        if (!response) {
          this.showAddEngineError();
          return;
        }
        // hide/reset form and refresh list
        this.showAddSearchEngineForm(false);
        this.newEngineData = {
          name: '',
          host: '',
          parameters: '',
          backlink: '',
          charset: ''
        };
        this.refreshList();
      });
    },
    truncateText(text, length) {
      if (text && text.length > length) {
        return `${text.substr(0, length - 3)}...`;
      }
      return text;
    },
    showAddEngineError() {
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
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/ReferrersManager/vue/src/ManageSocials/ManageSocials.vue?vue&type=template&id=a06c1f9e

const ManageSocialsvue_type_template_id_a06c1f9e_hoisted_1 = {
  class: "notification system notification-warning"
};
const ManageSocialsvue_type_template_id_a06c1f9e_hoisted_2 = {
  class: "notification system notification-success"
};
const ManageSocialsvue_type_template_id_a06c1f9e_hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-add"
}, null, -1);
const ManageSocialsvue_type_template_id_a06c1f9e_hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-reload"
}, null, -1);
const ManageSocialsvue_type_template_id_a06c1f9e_hoisted_5 = {
  class: "search-detections"
};
const ManageSocialsvue_type_template_id_a06c1f9e_hoisted_6 = ["placeholder"];
const ManageSocialsvue_type_template_id_a06c1f9e_hoisted_7 = {
  key: 0
};
const ManageSocialsvue_type_template_id_a06c1f9e_hoisted_8 = {
  key: 0
};
const ManageSocialsvue_type_template_id_a06c1f9e_hoisted_9 = {
  rowspan: "6"
};
const ManageSocialsvue_type_template_id_a06c1f9e_hoisted_10 = {
  class: "loadingPiwik"
};
const ManageSocialsvue_type_template_id_a06c1f9e_hoisted_11 = ["alt"];
const ManageSocialsvue_type_template_id_a06c1f9e_hoisted_12 = ["rowspan"];
const ManageSocialsvue_type_template_id_a06c1f9e_hoisted_13 = ["src"];
const ManageSocialsvue_type_template_id_a06c1f9e_hoisted_14 = {
  key: 1
};
const ManageSocialsvue_type_template_id_a06c1f9e_hoisted_15 = ["onClick"];
const ManageSocialsvue_type_template_id_a06c1f9e_hoisted_16 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-delete"
}, null, -1);
const ManageSocialsvue_type_template_id_a06c1f9e_hoisted_17 = {
  key: 0
};
const ManageSocialsvue_type_template_id_a06c1f9e_hoisted_18 = {
  for: "socialName"
};
const ManageSocialsvue_type_template_id_a06c1f9e_hoisted_19 = {
  for: "socialHost"
};
function ManageSocialsvue_type_template_id_a06c1f9e_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SaveButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SaveButton");
  const _directive_content_table = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("content-table");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_SocialsList')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", ManageSocialsvue_type_template_id_a06c1f9e_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_SocialListDisabled')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
    href: "javascript:;",
    id: "enablesocials",
    onClick: _cache[0] || (_cache[0] = $event => _ctx.setDefaultSocialsDisabled(false))
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_EnableSocialList')), 1)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.usesOwnSocialDefinitions]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", ManageSocialsvue_type_template_id_a06c1f9e_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_UsingDefaultSocials')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
    href: "javascript:;",
    id: "disablesocials",
    onClick: _cache[1] || (_cache[1] = $event => _ctx.setDefaultSocialsDisabled(true))
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_DisableSocialList')), 1)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.usesOwnSocialDefinitions]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "add-element",
    onClick: _cache[2] || (_cache[2] = $event => _ctx.showAddSocialForm(true))
  }, [ManageSocialsvue_type_template_id_a06c1f9e_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_AddSocial')), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "refresh-list",
    onClick: _cache[3] || (_cache[3] = $event => _ctx.refreshList())
  }, [ManageSocialsvue_type_template_id_a06c1f9e_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Refresh')), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageSocialsvue_type_template_id_a06c1f9e_hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.searchText = $event),
    value: "",
    placeholder: _ctx.translate('General_Search')
  }, null, 8, ManageSocialsvue_type_template_id_a06c1f9e_hoisted_6), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.searchText]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("table", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("thead", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Name')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_Hostname')), 1), _ctx.userDefinedSocials ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("th", ManageSocialsvue_type_template_id_a06c1f9e_hoisted_7)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tbody", null, [_ctx.busy ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", ManageSocialsvue_type_template_id_a06c1f9e_hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", ManageSocialsvue_type_template_id_a06c1f9e_hoisted_9, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageSocialsvue_type_template_id_a06c1f9e_hoisted_10, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
    src: "plugins/Morpheus/images/loading-blue.gif",
    alt: _ctx.translate('General_LoadingData')
  }, null, 8, ManageSocialsvue_type_template_id_a06c1f9e_hoisted_11), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_LoadingData')), 1)])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !_ctx.busy ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
    key: 1
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.socialNames.filter(name => name.toLowerCase().includes(_ctx.searchText.toLowerCase())), name => {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
      key: name
    }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.socials[name], (host, index) => {
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
      }, null, 8, ManageSocialsvue_type_template_id_a06c1f9e_hoisted_13)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(name), 1)], 8, ManageSocialsvue_type_template_id_a06c1f9e_hoisted_12)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(host), 1), _ctx.userDefinedSocials ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("td", ManageSocialsvue_type_template_id_a06c1f9e_hoisted_14, [_ctx.userDefinedSocials[host] ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
        key: 0,
        class: "delete-element",
        onClick: $event => _ctx.removeSocial(host)
      }, [ManageSocialsvue_type_template_id_a06c1f9e_hoisted_16, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Delete')), 1)], 8, ManageSocialsvue_type_template_id_a06c1f9e_hoisted_15)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]);
    }), 128))], 64);
  }), 128)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])])), [[_directive_content_table]])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.showSocialForm]]), _ctx.showSocialForm ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", ManageSocialsvue_type_template_id_a06c1f9e_hoisted_17, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_AddSocial')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_ProvideSocialData')) + " ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_DuplicateHostnameInfo')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("table", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", ManageSocialsvue_type_template_id_a06c1f9e_hoisted_18, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Name')) + "*:", 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.newSocialData['name'] = $event),
    id: "socialName"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.newSocialData['name']]])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", ManageSocialsvue_type_template_id_a06c1f9e_hoisted_19, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_Hostname')) + "*:", 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.newSocialData['host'] = $event),
    id: "socialHost"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.newSocialData['host']]])])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
    onConfirm: _cache[7] || (_cache[7] = $event => _ctx.addSocial())
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
    onConfirm: _cache[8] || (_cache[8] = $event => _ctx.showAddSocialForm(false)),
    value: _ctx.translate('General_Cancel')
  }, null, 8, ["value"])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 64);
}
// CONCATENATED MODULE: ./plugins/ReferrersManager/vue/src/ManageSocials/ManageSocials.vue?vue&type=template&id=a06c1f9e

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/ReferrersManager/vue/src/ManageSocials/ManageSocials.vue?vue&type=script&lang=ts



const {
  $: ManageSocialsvue_type_script_lang_ts_$
} = window;
/* harmony default export */ var ManageSocialsvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    ownSocialDefinitions: Boolean
  },
  data() {
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
  created() {
    this.fetchSocials();
  },
  directives: {
    ContentTable: external_CoreHome_["ContentTable"]
  },
  components: {
    SaveButton: external_CorePluginsAdmin_["SaveButton"]
  },
  methods: {
    refreshList() {
      external_CoreHome_["AjaxHelper"].post({
        module: 'ReferrersManager',
        action: 'refresh',
        type: 'socials'
      }, {}, {
        withTokenInUrl: true
      }).then(() => {
        this.fetchSocials();
      });
    },
    fetchSocials() {
      if (this.busy) {
        return;
      }
      this.busy = true;
      const promises = [];
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
      Promise.all(promises).then(([searchEngines, logos, userDefinedData]) => {
        this.socials = searchEngines;
        this.socialNames = Object.keys(searchEngines);
        this.socialLogos = logos;
        this.userDefinedSocials = userDefinedData;
        this.busy = false;
      });
    },
    showAddSocialForm(show) {
      this.showSocialForm = show;
    },
    removeSocial(host) {
      ManageSocialsvue_type_script_lang_ts_$('#removeDataConfirm').find('h2 .name').text(host);
      external_CoreHome_["Matomo"].helper.modalConfirm('#removeDataConfirm', {
        yes: () => {
          external_CoreHome_["AjaxHelper"].fetch({
            module: 'API',
            method: 'ReferrersManager.removeSocial',
            host
          }).then(() => {
            this.refreshList();
          });
        }
      });
    },
    addSocial() {
      external_CoreHome_["AjaxHelper"].post({
        module: 'API',
        method: 'ReferrersManager.addSocial'
      }, this.newSocialData).then(response => {
        if (!response) {
          this.showAddEngineError();
          return;
        }
        // hide/reset form and refresh list
        this.showAddSocialForm(false);
        this.newSocialData = {
          name: '',
          host: ''
        };
        this.refreshList();
      });
    },
    setDefaultSocialsDisabled(state) {
      external_CoreHome_["AjaxHelper"].fetch({
        module: 'API',
        method: 'ReferrersManager.setDefaultSocialsDisabled',
        state
      }, this.newSocialData).then(() => {
        this.fetchSocials();
        this.usesOwnSocialDefinitions = state;
      });
    },
    truncateText(text, length) {
      if (text && text.length > length) {
        return `${text.substr(0, length - 3)}...`;
      }
      return text;
    },
    showAddEngineError() {
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
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/ReferrersManager/vue/src/ManageAIAssistants/ManageAIAssistants.vue?vue&type=template&id=e5957e0c

const ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_1 = {
  class: "notification system notification-warning"
};
const ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_2 = {
  class: "notification system notification-success"
};
const ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-add"
}, null, -1);
const ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-reload"
}, null, -1);
const ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_5 = {
  class: "search-detections"
};
const ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_6 = ["placeholder"];
const ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_7 = {
  key: 0
};
const ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_8 = {
  key: 0
};
const ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_9 = {
  rowspan: "6"
};
const ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_10 = {
  class: "loadingPiwik"
};
const ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_11 = ["alt"];
const ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_12 = ["rowspan"];
const ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_13 = ["src"];
const ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_14 = {
  key: 1
};
const ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_15 = ["onClick"];
const ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_16 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-delete"
}, null, -1);
const ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_17 = {
  key: 0
};
const ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_18 = {
  for: "assistantName"
};
const ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_19 = {
  for: "assistantHost"
};
function ManageAIAssistantsvue_type_template_id_e5957e0c_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SaveButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SaveButton");
  const _directive_content_table = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("content-table");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_AIAssistantsList')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_AIAssistantListDisabled')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
    href: "javascript:;",
    id: "enableaiassistants",
    onClick: _cache[0] || (_cache[0] = $event => _ctx.setDefaultAIAssistantsDisabled(false))
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_EnableAIAssistantList')), 1)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.usesOwnAIAssistantDefinitions]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_UsingDefaultAIAssistants')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
    href: "javascript:;",
    id: "disableaiassistants",
    onClick: _cache[1] || (_cache[1] = $event => _ctx.setDefaultAIAssistantsDisabled(true))
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_DisableAIAssistantList')), 1)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.usesOwnAIAssistantDefinitions]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "add-element",
    onClick: _cache[2] || (_cache[2] = $event => _ctx.showAddAIAssistantForm(true))
  }, [ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_AddAIAssistant')), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "refresh-list",
    onClick: _cache[3] || (_cache[3] = $event => _ctx.refreshList())
  }, [ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Refresh')), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.searchText = $event),
    value: "",
    placeholder: _ctx.translate('General_Search')
  }, null, 8, ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_6), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.searchText]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("table", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("thead", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Name')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_Hostname')), 1), _ctx.userDefinedAIAssistants ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("th", ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_7)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tbody", null, [_ctx.busy ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_9, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_10, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
    src: "plugins/Morpheus/images/loading-blue.gif",
    alt: _ctx.translate('General_LoadingData')
  }, null, 8, ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_11), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_LoadingData')), 1)])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !_ctx.busy ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
    key: 1
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.assistantNames.filter(name => name.toLowerCase().includes(_ctx.searchText.toLowerCase())), name => {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
      key: name
    }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.assistants[name], (host, index) => {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", {
        key: index
      }, [index === 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("td", {
        key: 0,
        rowspan: _ctx.assistants[name].length
      }, [_ctx.assistantLogos[name] ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("img", {
        key: 0,
        src: _ctx.assistantLogos[name],
        width: "16",
        height: "16"
      }, null, 8, ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_13)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(name), 1)], 8, ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_12)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(host), 1), _ctx.userDefinedAIAssistants ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("td", ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_14, [_ctx.userDefinedAIAssistants[host] ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
        key: 0,
        class: "delete-element",
        onClick: $event => _ctx.removeAIAssistant(host)
      }, [ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_16, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Delete')), 1)], 8, ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_15)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]);
    }), 128))], 64);
  }), 128)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])])), [[_directive_content_table]])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.showAIAssistantForm]]), _ctx.showAIAssistantForm ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_17, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_AddAIAssistant')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_ProvideAIAssistantData')) + " ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_DuplicateHostnameInfo')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("table", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_18, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Name')) + "*:", 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.newAIAssistantData['name'] = $event),
    id: "assistantName"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.newAIAssistantData['name']]])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", ManageAIAssistantsvue_type_template_id_e5957e0c_hoisted_19, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('ReferrersManager_Hostname')) + "*:", 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.newAIAssistantData['host'] = $event),
    id: "assistantHost"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.newAIAssistantData['host']]])])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
    onConfirm: _cache[7] || (_cache[7] = $event => _ctx.addAIAssistant())
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
    onConfirm: _cache[8] || (_cache[8] = $event => _ctx.showAddAIAssistantForm(false)),
    value: _ctx.translate('General_Cancel')
  }, null, 8, ["value"])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 64);
}
// CONCATENATED MODULE: ./plugins/ReferrersManager/vue/src/ManageAIAssistants/ManageAIAssistants.vue?vue&type=template&id=e5957e0c

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/ReferrersManager/vue/src/ManageAIAssistants/ManageAIAssistants.vue?vue&type=script&lang=ts



const {
  $: ManageAIAssistantsvue_type_script_lang_ts_$
} = window;
/* harmony default export */ var ManageAIAssistantsvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    ownAiAssistantDefinitions: Boolean
  },
  data() {
    return {
      assistants: {},
      assistantNames: [],
      userDefinedAIAssistants: {},
      assistantLogos: {},
      newAIAssistantData: {},
      busy: false,
      showAIAssistantForm: false,
      searchText: '',
      usesOwnAIAssistantDefinitions: this.ownAiAssistantDefinitions
    };
  },
  created() {
    this.fetchAIAssistants();
  },
  directives: {
    ContentTable: external_CoreHome_["ContentTable"]
  },
  components: {
    SaveButton: external_CorePluginsAdmin_["SaveButton"]
  },
  methods: {
    refreshList() {
      external_CoreHome_["AjaxHelper"].post({
        module: 'ReferrersManager',
        action: 'refresh',
        type: 'aiassistants'
      }, {}, {
        withTokenInUrl: true
      }).then(() => {
        this.fetchAIAssistants();
      });
    },
    fetchAIAssistants() {
      if (this.busy) {
        return;
      }
      this.busy = true;
      const promises = [];
      promises.push(external_CoreHome_["AjaxHelper"].fetch({
        module: 'API',
        method: 'ReferrersManager.getAIAssistantDefinitions'
      }));
      promises.push(external_CoreHome_["AjaxHelper"].fetch({
        module: 'API',
        method: 'ReferrersManager.getAIAssistantLogos'
      }));
      promises.push(external_CoreHome_["AjaxHelper"].fetch({
        module: 'API',
        method: 'ReferrersManager.getUserDefinedAIAssistants'
      }));
      Promise.all(promises).then(([assistants, logos, userDefinedData]) => {
        this.assistants = assistants;
        this.assistantNames = Object.keys(assistants);
        this.assistantLogos = logos;
        this.userDefinedAIAssistants = userDefinedData;
        this.busy = false;
      });
    },
    showAddAIAssistantForm(show) {
      this.showAIAssistantForm = show;
    },
    removeAIAssistant(host) {
      ManageAIAssistantsvue_type_script_lang_ts_$('#removeDataConfirm').find('h2 .name').text(host);
      external_CoreHome_["Matomo"].helper.modalConfirm('#removeDataConfirm', {
        yes: () => {
          external_CoreHome_["AjaxHelper"].fetch({
            module: 'API',
            method: 'ReferrersManager.removeAIAssistant',
            host
          }).then(() => {
            this.refreshList();
          });
        }
      });
    },
    addAIAssistant() {
      external_CoreHome_["AjaxHelper"].post({
        module: 'API',
        method: 'ReferrersManager.addAIAssistant'
      }, this.newAIAssistantData).then(response => {
        if (!response) {
          this.showAddAIAssistantError();
          return;
        }
        // hide/reset form and refresh list
        this.showAddAIAssistantForm(false);
        this.newAIAssistantData = {
          name: '',
          host: ''
        };
        this.refreshList();
      });
    },
    setDefaultAIAssistantsDisabled(state) {
      external_CoreHome_["AjaxHelper"].fetch({
        module: 'API',
        method: 'ReferrersManager.setDefaultAIAssistantsDisabled',
        state
      }, this.newAIAssistantData).then(() => {
        this.fetchAIAssistants();
        this.usesOwnAIAssistantDefinitions = state;
      });
    },
    showAddAIAssistantError() {
      external_CoreHome_["NotificationsStore"].show({
        message: Object(external_CoreHome_["translate"])('ReferrersManager_AddAIAssistantError'),
        context: 'error',
        noclear: true,
        type: 'toast',
        style: {
          display: 'inline-block'
        },
        id: 'addAIAssistantError'
      });
    }
  }
}));
// CONCATENATED MODULE: ./plugins/ReferrersManager/vue/src/ManageAIAssistants/ManageAIAssistants.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/ReferrersManager/vue/src/ManageAIAssistants/ManageAIAssistants.vue



ManageAIAssistantsvue_type_script_lang_ts.render = ManageAIAssistantsvue_type_template_id_e5957e0c_render

/* harmony default export */ var ManageAIAssistants = (ManageAIAssistantsvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/ReferrersManager/vue/src/ManagePage/ManagePage.vue?vue&type=script&lang=ts






const {
  $: ManagePagevue_type_script_lang_ts_$
} = window;
/* harmony default export */ var ManagePagevue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    title: String,
    ownSocialDefinitions: Boolean,
    ownAiAssistantDefinitions: Boolean
  },
  mounted() {
    const tabs = this.$refs.tabs;
    setTimeout(() => {
      ManagePagevue_type_script_lang_ts_$('.tabs', tabs).tabs();
    });
  },
  components: {
    ContentBlock: external_CoreHome_["ContentBlock"],
    URLChecker: URLChecker,
    ManageSearchEngines: ManageSearchEngines,
    ManageSocials: ManageSocials,
    ManageAIAssistants: ManageAIAssistants
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