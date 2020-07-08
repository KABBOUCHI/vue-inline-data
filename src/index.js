window.addEventListener("DOMContentLoaded", () => {
  if (typeof window !== "undefined" && window.Vue) {
    window.Vue.directive("data", {});
    window.Vue.directive("data-child", {});

    document.querySelectorAll("[v-data-child]").forEach((element, key) => {
      var dataAttr = element.getAttribute("v-data-child");
      const dataExpression = dataAttr === "" ? "{}" : dataAttr;

      var propsAttr = element.getAttribute("v-props");
      const propsExpression = propsAttr === "" ? "{}" : propsAttr;

      window.Vue.component("data-child-" + key, {
        template: element.outerHTML,
        props: eval(`(${propsExpression})`),
        data() {
          return eval(`(${dataExpression})`);
        },
      });

      var newElement = document.createElement(`data-child-${key}`);
      for (var i = 0; i < element.attributes.length; i++) {
        var attr = element.attributes.item(i);
        newElement.setAttribute(attr.nodeName, attr.nodeValue);
      }

      element.outerHTML = newElement.outerHTML;
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
