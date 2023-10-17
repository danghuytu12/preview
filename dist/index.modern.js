import { createElement } from 'react';

var styles = {"gridcontainer":"_1wusp"};

var ExampleComponent = function ExampleComponent() {
  return createElement("div", {
    className: styles.gridcontainer
  }, createElement("div", {
    className: 'item1'
  }, "1"), createElement("div", {
    className: 'item2'
  }, "2"), createElement("div", {
    className: 'item3'
  }, "3"), createElement("div", {
    className: 'item4'
  }, "4"), createElement("div", {
    className: 'item5'
  }, "5"), createElement("div", {
    className: 'item6'
  }, "6"), createElement("div", {
    className: 'item7'
  }, "7"), createElement("div", {
    className: 'item8'
  }, "8"));
};

export default ExampleComponent;
//# sourceMappingURL=index.modern.js.map
