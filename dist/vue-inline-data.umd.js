(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = global || self, factory(global.Vue));
}(this, (function (Vue) { 'use strict';

  Vue = Vue && Object.prototype.hasOwnProperty.call(Vue, 'default') ? Vue['default'] : Vue;

  window.addEventListener("DOMContentLoaded", function () {
    Vue.directive("data", {});
    Vue.directive("data-child", {});
    Vue.directive("props", {});
    document.querySelectorAll("[v-data-child]").forEach(function (element, key) {
      var dataAttr = element.getAttribute("v-data-child");
      var dataExpression = dataAttr === "" ? "{}" : dataAttr;
      var propsAttr = element.getAttribute("v-props");
      var propsExpression = propsAttr === "" ? "{}" : propsAttr;
      Vue.component("data-child-" + key, {
        template: element.outerHTML,
        props: eval("(".concat(propsExpression, ")")),
        data: function data() {
          return eval("(".concat(dataExpression, ")"));
        }
      });
      var newElement = document.createElement("data-child-".concat(key));

      for (var i = 0; i < element.attributes.length; i++) {
        var attr = element.attributes.item(i);
        newElement.setAttribute(attr.nodeName, attr.nodeValue);
      }

      element.outerHTML = newElement.outerHTML;
    });
    document.querySelectorAll("[v-data]").forEach(function (element) {
      var dataAttr = element.getAttribute("v-data");
      var dataExpression = dataAttr === "" ? "{}" : dataAttr;
      new Vue({
        el: element,
        data: function data() {
          return eval("(".concat(dataExpression, ")"));
        }
      });
    });
  });

})));
