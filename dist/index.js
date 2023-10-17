var React = require('react');

var styles = {"gridContainer":"_1bGdx"};

var ExampleComponent = function ExampleComponent() {
  return React.createElement("div", {
    className: styles.gridContainer
  }, React.createElement("a", {
    href: '/fasdfsd',
    className: 'item1'
  }, "ds"), React.createElement("div", {
    className: 'item2'
  }, "2"), React.createElement("div", {
    className: 'item3'
  }, "3"), React.createElement("div", {
    className: 'item4'
  }, "4"), React.createElement("div", {
    className: 'item5'
  }, "5"));
};

module.exports = ExampleComponent;
//# sourceMappingURL=index.js.map
