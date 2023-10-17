var React = require('react');

var styles = {"gridcontainer":"_1wusp"};

var ExampleComponent = function ExampleComponent() {
  return React.createElement("div", {
    className: styles.gridcontainer
  }, React.createElement("div", {
    className: 'item1'
  }, "1"), React.createElement("div", {
    className: 'item2'
  }, "2"), React.createElement("div", {
    className: 'item3'
  }, "3"), React.createElement("div", {
    className: 'item4'
  }, "4"), React.createElement("div", {
    className: 'item5'
  }, "5"), React.createElement("div", {
    className: 'item6'
  }, "6"), React.createElement("div", {
    className: 'item7'
  }, "7"), React.createElement("div", {
    className: 'item8'
  }, "8"));
};

module.exports = ExampleComponent;
//# sourceMappingURL=index.js.map
