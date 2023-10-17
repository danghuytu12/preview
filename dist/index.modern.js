import { createElement } from 'react';

var styles = {"gridContainer":"_1bGdx"};

var ExampleComponent = function ExampleComponent() {
  return createElement("div", {
    className: styles.gridContainer
  }, createElement("a", {
    href: '/fasdfsd',
    className: 'item1'
  }, "ds"), createElement("div", {
    className: 'item2'
  }, "2"), createElement("div", {
    className: 'item3'
  }, "3"), createElement("div", {
    className: 'item4'
  }, "4"), createElement("div", {
    className: 'item5'
  }, "5"));
};

export default ExampleComponent;
//# sourceMappingURL=index.modern.js.map
