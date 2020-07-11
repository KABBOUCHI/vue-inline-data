import Vue from 'vue';

window.addEventListener("DOMContentLoaded", function () {
  Vue.directive("data", {});
  Vue.directive("component", {});
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
    element.removeAttribute("v-data-child");
    element.removeAttribute("v-props");
  });
  document.querySelectorAll("[v-component]").forEach(function (element, key) {
    var dataAttr = element.getAttribute("v-component");
    var dataExpression = dataAttr === "" ? "{}" : dataAttr;
    var propsAttr = element.getAttribute("v-props");
    var propsExpression = propsAttr === "" ? "{}" : propsAttr;
    Vue.component("component-" + key, {
      template: element.outerHTML,
      props: eval("(".concat(propsExpression, ")")),
      data: function data() {
        return eval("(".concat(dataExpression, ")"));
      }
    });
    var newElement = document.createElement("component-".concat(key));

    for (var i = 0; i < element.attributes.length; i++) {
      var attr = element.attributes.item(i);
      newElement.setAttribute(attr.nodeName, attr.nodeValue);
    }

    element.outerHTML = newElement.outerHTML;
    element.removeAttribute("v-component");
    element.removeAttribute("v-props");
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
