import Vue from "vue";

window.addEventListener("DOMContentLoaded", () => {
  Vue.directive("data", {});
  Vue.directive("data-child", {});

  document.querySelectorAll("[v-data-child]").forEach((element, key) => {
    var dataAttr = element.getAttribute("v-data-child");
    const dataExpression = dataAttr === "" ? "{}" : dataAttr;

    Vue.component("data-child-" + key, {
      template: element.outerHTML,
      data() {
        return eval(`(${dataExpression})`);
      },
    });

    element.outerHTML = `<data-child-${key}></data-child-${key}>`;
  });

  document.querySelectorAll("[v-data]").forEach((element) => {
    var dataAttr = element.getAttribute("v-data");
    const dataExpression = dataAttr === "" ? "{}" : dataAttr;
    new Vue({
      el: element,
      data() {
        return eval(`(${dataExpression})`);
      },
    });
  });
});