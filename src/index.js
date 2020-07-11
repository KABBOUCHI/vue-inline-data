import Vue from "vue";

Vue.directive("data", {});
Vue.directive("component", {});
Vue.directive("data-child", {});
Vue.directive("props", {});

window.addEventListener("DOMContentLoaded", () => {
  ["data-child", "component", "component-data"].forEach((tag) => {
    document.querySelectorAll(`[v-${tag}]`).forEach((element, key) => {
      var dataAttr = element.getAttribute(`v-${tag}`);
      const dataExpression = dataAttr === "" ? "{}" : dataAttr;

      var propsAttr = element.getAttribute("v-props");
      const propsExpression = propsAttr === "" ? "{}" : propsAttr;

      Vue.component(`${tag}-${key}`, {
        template: element.outerHTML,
        props: eval(`(${propsExpression})`),
        data() {
          return eval(`(${dataExpression})`);
        },
      });

      var newElement = document.createElement(`${tag}-${key}`);
      for (var i = 0; i < element.attributes.length; i++) {
        var attr = element.attributes.item(i);
        newElement.setAttribute(attr.nodeName, attr.nodeValue);
      }

      element.outerHTML = newElement.outerHTML;

      element.removeAttribute(`v-${tag}`);
      element.removeAttribute("v-props");
    });
  });

  document.querySelectorAll("[v-data]").forEach((element) => {
    var dataAttr = element.getAttribute("v-data");
    const dataExpression = dataAttr === "" ? "{}" : dataAttr;
    element.removeAttribute("v-data");

    new Vue({
      el: element,
      data() {
        return eval(`(${dataExpression})`);
      },
    });
  });
});
