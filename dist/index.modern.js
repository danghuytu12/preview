import { createElement } from 'react';

var styles = {"gridContainer":"_1bGdx"};

var ExampleComponent = function ExampleComponent() {
  return createElement("div", {
    className: styles.gridContainer
  }, createElement("a", {
    href: 'https://www.facebook.com/',
    className: 'item1'
  }, "ds"), createElement("a", {
    href: 'https://www.facebook.com/',
    className: 'item2'
  }, "2"), createElement("a", {
    className: 'item3'
  }, "3"), createElement("a", {
    className: 'item4'
  }, "4"), createElement("a", {
    className: 'item5'
  }, "5"));
};

export default ExampleComponent;
//# sourceMappingURL=index.modern.js.map
