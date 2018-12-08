global.webpackJsonp([2],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_authorization_vue__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_732fd4ad_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_authorization_vue__ = __webpack_require__(115);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(113)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-732fd4ad"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_authorization_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_732fd4ad_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_authorization_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/authorization.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] authorization.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-732fd4ad", Component.options)
  } else {
    hotAPI.reload("data-v-732fd4ad", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 113:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  data: function data() {
    return {
      title: '每日优鲜',
      subtitle: '需要微信授权才能访问优鲜小程序'
    };
  },


  components: {},

  methods: {
    getUserInfo: function getUserInfo(e) {
      // 调用登录接口
      var userInfo = e.mp.detail.userInfo;

      wx.redirectTo({
        url: '/pages/index'
      });
    },
    clickHandle: function clickHandle(msg, ev) {
      console.log('clickHandle:', msg, ev);
    }
  },

  created: function created() {
    // 调用应用实例的方法获取全局数据
    console.log('授权页面');
  }
});

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
    staticClass: "subtitle"
  }, [_vm._v(_vm._s(_vm.subtitle))]), _vm._v(" "), _c('button', {
    attrs: {
      "open-type": "getUserInfo",
      "lang": "zh_CN",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.getUserInfo
    }
  }, [_vm._v("点击微信授权登陆")])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "logo-box"
  }, [_c('img', {
    staticClass: "logo",
    attrs: {
      "src": __webpack_require__(116),
      "alt": ""
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-732fd4ad", esExports)
  }
}

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAFPFKMkAAAAAXNSR0IArs4c6QAADwdJREFUeAHlXH1wVcUVP3vfe0msibV1qiCiZbT4VfpH1YAWdfyg5AOjVEXQGUT8oEoSpnWKllqK2qKtrW1egmhRo4yKQhXlI4SgICo1qHUcGbRYUSqMBIuONaGQvLy7/Z29d9+7975737sveaHR7szN3T3n7J7ds3vPnnN2X4g8SVY21HlA2Yvy8qVF2Snyxuo+yKr4bVwZLA7xNmKINbMaFVDKGhBEqGvPbxVxZcNCL3FgWV7UdKrVSF9HkWrBy4PlggFM88JJVsSXZgALC5BVjaO4RVnRIL0tCw2QlfH3kT+GpCwmIb4AuYBQD+MO7tFE/XtjIh/XLcjq+IU67/uWlY2zfREAZu0SuPwlqGIQXM6TRgoHSdySKuSZQc+eEDzXYtmkHq6Lxorx2gmxfkO0zoqhd92QbDMwM1AWqNBJQj4BmilK3FyJk+9iYXhF47WKgPOV8Td1fkDeOWcpF1dZ1TQug8Yl7QxsGuCtnFqraZJ0DuvlEhLmyRDuc2JN/TtpTI4chLgiiERe9MDX5EWNJwXhFVxevGB4VgIbiane5EsXVh66Mnq8TOfVG4DHXICQBVnVcFdI0hBkWNodIcgCSSDsYw0a/b1jNAXrKzS6UH/uGGYvyttT+Mr4PsD26bJ69x74h6vsVXqo0KIJnDhXvjLemNYHoOYvlStpIiywKlWujO/kt3+SZVEs4ZGipfY9JlCVBTWQrYQxrM8BbidDThWrZ20AvovpNDPOozQWn3nDG1bhf/RXTmsuYdZKJhDgjj714zMz5qrH0+kC5ChAXut9SdDQJ74IDxB0N3tAmUVwWZwJVbP3qR88q1LyVoBSr8dOMAcb7K+ofNRDYt55GSKQE+7/DvX2/Bq7wvFUUlQllt8YanReXq4yhj4GT5+0hLMhWbPoKLSzwwkLlefFnq+eC9UwiNB2s5y3IZqVXkkgpKbO2lAIJHj5TxkQgXtNiHb7RAKeta6KahG6IAevoL8ue66EspH82MvqhtOwlY8kimwQLTNdGwuU6nFEyXOgkN4SLXVbvPWVg7Bvz0Q6svQZ8cg1B7x4LovW+qmQzKNQrrAbfBKU7sN4XnaiWIPLyxeU8k6ltwKNB+1rsM3mcxmj3IRng8bZsHXe9jQeHVkeVcYL0bMaqN+wCqfLGx5gy3EJto7JCm7Q7WLZTN4u+BHA3QFp3QbWrI9eEK11cxQdybPc24ka+Thv5y1a/JXi3Sj+PJcCODIY0TradeA9dGgKwPywBfo6JPhNZJ8iMl8CLoL8XIWrjlczI9UBIVgi6yH28xnHCZ1uA69XrZLnr5CX2jtufCkqTfKgVVFWL/wuycTpZEbfFK03ve2kkTWNR1NCnofx7hBr6jIML7Wl7em8lI4qezpojXB7sqLpaovZxIVHsjnoZHKw8pDyZy5esua+E2XVgiEu4AAXMH17A1kAmSHiQOI+ItithyRCbOFstVfEsSALm1QHPJ+15pDTDFC6QciPYTo26Ur5vNWC7ejcRUWHjhArru0MqpuzI96Kyn3p6b0TcHzSgo3jXfgs4ZWaR6N8Jsr8Sd+BjvsaRsD5prw7olvBHJ9Cgsqh7NABiZEaO6n0qBbtUmu6sO/QHZH4xOlATwtGv52iRbeJVT92+xLgqOyM17ZcCyvudlhx80VLfbxgHVGuZkJupFjxCLFyxn/CNsx0VrxEjsU01eRTL4MW4t/BZl4GIk8A2nkMz5g8q2EkHCorsD7hRY42l4bujPL8KxuSoSvkQch2MDrDzl/2ZBMWXJE5udo8sksG8+hv0DpbKkBeTVPQmilstCJ3b3kB+1IB4baofakKCwRPt+cA6+nxwrII15qlZxy0WMl57QuOqv3OplyZsDG4fnMMaACzoVyUKFk76TQ/OmU+JnsqyTT2iNaZr3hpYGteQBGzhIYVt4k/z0hk4hecwTDUfd2LS5U5ssA06FE3rHEOPrsSFtJabF4/xA67HBsd7Fk5HmGGEeLZG3fI6sbxlDRbgfsbKm3DDnwlmroHBvhsbgQHCVeSaWLdCdsvkmfDOpgiWmufdDFhWnbIt/7LYBdhuRfJZa8PgtFXcac1TknDUdFJz3n2iTSamTnxGq7f7OQZKOzSAPdbdGER7+VYHcMxmpaU5ITA4k4+D8mkdlXtUMGiuxUmwHbnVNkBnW0ZX0mKoTncwOSoQF8KZmcg5jIYO7UkzXY1Qu6UfRKFbf1qihaPhPjnWjhIoKpptFUV00kyYz1Z02QC55dEGTw9GuqHYpg9p2pelcLr3M1To4wp2zA6nenUl9fd+5HCGXIdmWI6w92J1wkfevgkQR/zGtnmg8pYI0yj51lJweMDKdjEpiM0nTMqlHuNxE+JoiIbu5lJ0NMWY/EIpq9IfRlCtClCwziDzN7dWEPPALcXX9U16GavWF5rRwyNSdT+dgKD3Ai4QB6hi8iUTCbAIvgH6b7DEpnqR8Aw4Iox9xOwyCp1aNZJKysWjMVmOQl0qVi6Cz8hXi7xOGHePAaTNjv6fQzkbT2PMlSCCn7z54svUaZ7lUcj/SVVmhuxWG7H6kgsco6f6PvLKGf9RPeHOiCsOiJW1m4ldgsPYlLeQUycq1laEuESfFMszHEaMeDvxP7NYmXd3335YPXfzB67L7KAQHwpm3I2B6INOYn6QYD2m/VWkbMZ7sxASAbtPuXUuDk7wgRqmgq4ZtDeJ9kOGrJGA2TNQ2XUs+9DGlJ2TLaoYLaRoQO12AaGiZZZP89Gl7UjuqK6T5JIvkQRcYVYXf+8hmd7YxoWowMR2DBXZaPTuFAd0cT8xgh5b+IgL/xj+SqMgt3Y10pRxn4jWUsuoaLoL8VzM3ciHzrl3ZHQLduElq0iz0do63yAfoDODoddsgP5d5D/N/KdGEgnGaawBiRhkImvA38K8N9Gnge0iaSxnmKxDYjRfITygKWCCsRaSuYvMFsVMF9WwdBZHHZJhR2hMhSSNBU8JoBHK8WM36gdKmwDOej6JRD1cfd2zYGFej06OA+h/wf7+pHn6Gcg2j52uA7CmYdz/0UULZ2fLZob2JCNyFsgSjVubvwJ6t9CwrgKlxPW5WJyMPHKfJBwMYW8m8rr/yTmCTMf/qEFojaq9i1tWAmfUumQyYguQ5kN3qQ27K6OJ7FyjkB8eELY+HBOgSizobNjLST+IbaM6YNXBME9g5OQhMLeSGVDKnIdE2QVCFsjYDMRK+Lcwb4igsVhYdSK6ex4CXrmaRgj9wbR+wpEKcvEvi3QEdcPNh0RNJCwcFvHLKLYoaP8lG+GQOxzmVeo6JBTxYrr94Rl9GWiU05dz/6tFBNjvT5V2sHDiCw7AodUbCN/RYXBE6fGhjHiFsFG77Xu1ApRR4b7e96lWMnwsBr5y7Qq/PqqgiG93buoJHaSKxahiPn8lJ2VPI8v/Rh9WWBqrAZNUmfHzk6zowRvbKkT9v+UVwEB+wJN1B74XJysV4YVArawQ6ir41YcWPCJG18zSidBbBnibEHMRXQcDpw7ITrKDh7uRcHh8yYhdiF0/3sqr20MsjCxS3C0vRkG4mi0kY4jCWF5vZHi6X43BLysXGXcKqBkzxrAHsUJDe45YADo/IkuooCCdfPffBAd6sGgL0O9lU5SdPg4dBgxAnkCBrcGeHbFVQIv/gkC3HOxlsqKrxDLZsDbtXH844f2JpzwmNZt8KgYLVbVv5bCVzXiipVEmS+XiedR/zJX/UuaD6cDnbiSLi8EXlJEnoH7zHyCFCqhbxz8n4hzEVz64HhC2CTksYpUiv1UFHnLWw12yz9pzKiTyYjguMv4IxgdxjR24PZbNv1W52AYxisCN+juRr0TVd0kJWxaUkdkponzNxZG9Gyc2YzLqP/sNZ8zHJNwpqJL0hvK5tCN5HyrmEo5r5A5HIdIX+fLWRMdbDiLkgLnNhzbsBNOqTCsFsSuV2MmX8TK6NYo/Vb+0OYt96EeLrfYUW4SB4B/EZOKurHVYvVNH2h6/cY3jnMdOQ2DbUO74zU86A36VaCvxmQ3h3U37JP/L6BDcB1IBB9a+THFUvwr4NZKQcZ2pPgkdRyEcQ8+i1E42oF8qAV/fqSFYx/l3QA6flRS231374WoU03JxF2odyjq7ScRuThlJQusDAlyqf7aNUO88HurEFQWiYq2yY8hENyNIh8F59OS7fqvB30JGeJnCP68zGS2n9OOLD93Mkydukhi/bEID1+VnQroTaDeBgFdzTSc7P3/CWT5QfCvaQKZyZUkk22y+r7j1YoxjCU4VUYdOZ6Vst91TK7LCXzGKOFyIcKrOHSCbjNeMPiiGHcjTBza0vz47ZWEhk/K9Xye5mUnpeSj9BvwGX7fwtmHfsOLl6A8FJ3lLb6VrwVn1OVbVDKpBIrPY7v+fMTqurWIvp2OlWPirPcVtN+mdZNuQ0KpMhztQx9CqbJS5nohkjV2xGH50hzTo6FHoADbcVn6/hD1rV9Ydu2eCcaz0QGtKNNVBe2FtB9Ay7/DavgijQCEL24nxe2cc8JTeUEvoO58rAKsxMykfv6Q7H4YvM8E74iDohewV6Hop4sVM993wHNmcU1kBib5rNTKte4Z9e/nSjm5DmICLIiOjCszfJkGS3nxIO73gHSNx5y6SOTlAEk9jm+zzz8I9bY32MvQgbMhEKXMA/sKgazAwyb5VzrxGHms3kG64iGMhGKpwQ5xNK8WL/FXpQxBPIaNaJgaq2dQgYYLKvEF4BXQ2qflexzo4TFoikpx9iTZv6mBMNhmykiBAmFKyxBDWEDCkxxTNyXIA81odZABbIPyKWXpjqmbnG0cWQWix2WfyezFMnuGRtdfl61BXWcwvG1BwCuHexItGRYm+BVKIHpw6oymazcsVTGUiiOTB+unZH8asIxlB5UOvTLXWYweH7/zEoizoq1j4CvITSSiN3t/LuikPRh5FUlP7P8DeI3FMzlIR+TqS58F4myYfylGiV54ufBxBN2LO6SNYZans41883aAuA48fwqem+G7zPYeKeTbJtMXRCBexpZLn5jMjhxw+P8nAidmAr4JnvJTP/D7iba3DS4r3fXGthFkJi5AWAF3TOQ5AHOYcTEVx57UkXK/un2FDYhAsnXG0kMdJ0A4IzHAwyG0MkxLKYSGvnBsRl2gwS9b5Hs4Qn0/n+8/G9+wuP8Czg21JrEhs1kAAAAASUVORK5CYII="

/***/ })

},[134]);
//# sourceMappingURL=authorization.js.map