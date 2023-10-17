var React = require('react');

var styles = {"gridContainer":"_1bGdx"};

var ExampleComponent = function ExampleComponent() {
  return React.createElement("div", {
    className: styles.gridContainer
  }, React.createElement("a", {
    href: 'https://www.facebook.com/',
    className: 'item1'
  }, "ds"), React.createElement("a", {
    href: 'https://www.facebook.com/',
    className: 'item2'
  }, "2"), React.createElement("a", {
    className: 'item3'
  }, "3"), React.createElement("a", {
    className: 'item4'
  }, "4"), React.createElement("a", {
    className: 'item5'
  }, "5"));
};

module.exports = ExampleComponent;
//# sourceMappingURL=index.js.map
