window.addEventListener("DOMContentLoaded", () => {
  if (typeof window !== "undefined" && window.Vue) {
    window.Vue.directive("data", {});
    window.Vue.directive("data-child", {});

    document.querySelectorAll("[v-data-child]").forEach((element, key) => {
      var dataAttr = element.getAttribute("v-data-child");
      const dataExpression = dataAttr === "" ? "{}" : dataAttr;

      window.Vue.component("data-child-" + key, {
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
      new window.Vue({
        el: element,
        data() {
          return eval(`(${dataExpression})`);
        },
      });
    });
  }
});
