import Vue from "vue";
import { v4 as uuidv4 } from "uuid";

window.addEventListener("DOMContentLoaded", () => {
  loadComponents();
  loadRootVueInstances();
});

function loadComponents() {
  document.querySelectorAll("[vi-data]").forEach((element, key) => {
    let parentVueNode = element.parentNode.closest("[vi-data]");
    if (parentVueNode == null) {
      return;
    }

    const dataAttr = element.getAttribute("vi-data");
    const dataExpression = dataAttr === "" ? "{}" : dataAttr;
    element.removeAttribute("vi-data");

    const propsAttr = element.getAttribute("vi-props");
    const propsExpression = propsAttr === "" ? "{}" : propsAttr;

    const name = element.getAttribute("vi-name");

    const tag = `vi-data-${uuidv4()}`;

    Vue.component(tag, {
      name: name || tag,
      template: element.outerHTML,
      props: eval(`(${propsExpression})`),
      data() {
        return eval(`(${dataExpression})`);
      },
    });

    var newElement = document.createElement(tag);
    for (var i = 0; i < element.attributes.length; i++) {
      var attr = element.attributes.item(i);
      newElement.setAttribute(attr.nodeName, attr.nodeValue);
    }

    element.outerHTML = newElement.outerHTML;
    element.removeAttribute("vi-props");
  });
}

function loadRootVueInstances() {
  document.querySelectorAll("[vi-data]").forEach((element, key) => {
    let parentVueNode = element.parentNode.closest("[vi-data]");
    if (parentVueNode != null) {
      return;
    }

    const dataAttr = element.getAttribute("vi-data");
    const dataExpression = dataAttr === "" ? "{}" : dataAttr;
    element.removeAttribute("vi-data");

    new Vue({
      el: element,
      data() {
        return eval(`(${dataExpression})`);
      },
    });
  });
}
