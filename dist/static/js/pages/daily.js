global.webpackJsonp([5],{

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_daily_vue__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6f1571cb_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_daily_vue__ = __webpack_require__(39);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(37)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6f1571cb"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_daily_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6f1571cb_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_daily_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/daily.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] daily.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f1571cb", Component.options)
  } else {
    hotAPI.reload("data-v-6f1571cb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 37:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_input__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mpvue_toast__ = __webpack_require__(4);
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

// import {showToast,showLoading,hideLoading,showModal, showActionSheet} from "../utils/wx_api"



/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      index: -1,
      nameList: [],
      formItem: {
        uid: 12,
        uname: '12',
        todayplan: '',
        yesterdaywork: '',
        complate: '',
        problem: ''
      }
    };
  },
  components: {
    'mr-input': __WEBPACK_IMPORTED_MODULE_0__components_input__["a" /* default */],
    toast: __WEBPACK_IMPORTED_MODULE_1_mpvue_toast__["a" /* default */]
  },

  methods: {
    bindPickerChange(e) {
      console.log('picker发送选择改变，携带值为', e.mp.detail.value);
      this.index = e.mp.detail.value;
      //注意：不是官网的e.detail.value,而是 e.mp.detail.value
    },
    submit() {
      this.formItem.name = this.nameList[this.index];
      console.log(this.formItem, 12345);
      this.$http.post('http://localhost:3000/daily/add', { data: this.formItem }).then(d => {
        //输出请求数据
        this.nameList = d.data.map(item => item.name);
        console.log(this.nameList, 123);
        // console.log(d.data)
      }).catch(err => {
        console.log(err.status, err.message);
      });
    }

  },
  created() {
    console.log(123);
    this.$http.get('http://localhost:3000/user/list').then(d => {
      //输出请求数据
      this.nameList = d.data.map(item => item.name);
      console.log(this.nameList, 123);
      // console.log(d.data)
    }).catch(err => {
      console.log(err.status, err.message);
    });
  },

  onShareAppMessage: function () {}
});

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('picker', {
    attrs: {
      "value": _vm.index,
      "range": _vm.nameList,
      "eventid": '0'
    },
    on: {
      "change": _vm.bindPickerChange
    }
  }, [_c('div', {
    staticClass: "picker"
  }, [_vm._v("\n      姓名：" + _vm._s(_vm.nameList[_vm.index] || '请选择') + "\n    ")])]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("昨天工作内容：")]), _vm._v(" "), _c('div', {
    staticClass: "section"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formItem.yesterdaywork),
      expression: "formItem.yesterdaywork"
    }],
    attrs: {
      "auto-height": "",
      "placeholder": "请输入昨天工作内容",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.formItem.yesterdaywork)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formItem.yesterdaywork = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("完成情况：")]), _vm._v(" "), _c('div', {
    staticClass: "section"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formItem.complate),
      expression: "formItem.complate"
    }],
    attrs: {
      "auto-height": "",
      "placeholder": "请输入完成情况",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.formItem.complate)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formItem.complate = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("今日计划：")]), _vm._v(" "), _c('div', {
    staticClass: "section"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formItem.todayplan),
      expression: "formItem.todayplan"
    }],
    attrs: {
      "auto-height": "",
      "placeholder": "请输入今日计划",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.formItem.todayplan)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formItem.todayplan = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("存在问题：")]), _vm._v(" "), _c('div', {
    staticClass: "section"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formItem.problem),
      expression: "formItem.problem"
    }],
    attrs: {
      "auto-height": "",
      "placeholder": "请输入存在问题",
      "eventid": '4'
    },
    domProps: {
      "value": (_vm.formItem.problem)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formItem.problem = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "placeHolder"
  }), _vm._v(" "), _c('button', {
    staticClass: "submit",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("提交")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6f1571cb", esExports)
  }
}

/***/ })

},[58]);
//# sourceMappingURL=daily.js.map