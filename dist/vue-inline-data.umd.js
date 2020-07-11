(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = global || self, factory(global.Vue));
}(this, (function (Vue) { 'use strict';

  Vue = Vue && Object.prototype.hasOwnProperty.call(Vue, 'default') ? Vue['default'] : Vue;

  Vue.directive("data", {});
  Vue.directive("component", {});
  Vue.directive("data-child", {});
  Vue.directive("props", {});
  window.addEventListener("DOMContentLoaded", function () {
    ["data-child", "component", "component-data"].forEach(function (tag) {
      document.querySelectorAll("[v-".concat(tag, "]")).forEach(function (element, key) {
        var dataAttr = element.getAttribute("v-".concat(tag));
        var dataExpression = dataAttr === "" ? "{}" : dataAttr;
        var propsAttr = element.getAttribute("v-props");
        var propsExpression = propsAttr === "" ? "{}" : propsAttr;
        Vue.component("".concat(tag, "-").concat(key), {
          template: element.outerHTML,
          props: eval("(".concat(propsExpression, ")")),
          data: function data() {
            return eval("(".concat(dataExpression, ")"));
          }
        });
        var newElement = document.createElement("".concat(tag, "-").concat(key));

        for (var i = 0; i < element.attributes.length; i++) {
          var attr = element.attributes.item(i);
          newElement.setAttribute(attr.nodeName, attr.nodeValue);
        }

        element.outerHTML = newElement.outerHTML;
        element.removeAttribute("v-".concat(tag));
        element.removeAttribute("v-props");
      });
    });
    document.querySelectorAll("[v-data]").forEach(function (element) {
      var dataAttr = element.getAttribute("v-data");
      var dataExpression = dataAttr === "" ? "{}" : dataAttr;
      element.removeAttribute("v-data");
      new Vue({
        el: element,
        data: function data() {
          return eval("(".concat(dataExpression, ")"));
        }
      });
    });
  });

})));
