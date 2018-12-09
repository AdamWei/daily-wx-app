global.webpackJsonp([4],{

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f3488ff8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(26);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(20)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f3488ff8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f3488ff8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f3488ff8", Component.options)
  } else {
    hotAPI.reload("data-v-f3488ff8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_input__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mpvue_toast__ = __webpack_require__(39);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {};
  },
  components: {
    'mr-input': __WEBPACK_IMPORTED_MODULE_0__components_input__["a" /* default */],
    toast: __WEBPACK_IMPORTED_MODULE_1_mpvue_toast__["a" /* default */]
  },

  methods: {
    write() {
      wx.navigateTo({
        url: '/pages/daily'
      });
    },
    look() {
      wx.navigateTo({
        url: '/pages/dailies'
      });
    }
  },
  created() {
    console.log(123);
  },

  onShareAppMessage: function () {}
});

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "itemView",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.write
    }
  }, [_c('div', {
    staticClass: "navigator"
  }, [_vm._v("填写日报")])]), _vm._v(" "), _c('div', {
    staticClass: "itemView",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.look
    }
  }, [_c('div', {
    staticClass: "navigator"
  }, [_vm._v("查看日报")])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "itemView"
  }, [_c('div', {
    staticClass: "navigator"
  }, [_vm._v("修改密码")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "itemView"
  }, [_c('span', {
    staticClass: "navigator",
    attrs: {
      "bindtouchstart": "logout"
    }
  }, [_vm._v("退出登录")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f3488ff8", esExports)
  }
}

/***/ })

},[52]);
//# sourceMappingURL=index.js.map