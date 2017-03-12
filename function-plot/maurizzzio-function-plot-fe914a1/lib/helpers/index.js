/**
 * Created by mauricio on 4/8/15.
 */
'use strict';
var d3 = window.d3;
var derivative = require('./derivative');
var secant = require('./secant');
module.exports = function (options) {
  function helper(selection) {
    selection.each(function () {
      var el = d3.select(this);
      el.call(derivative(options));
      el.call(secant(options));
    });
  }

  return helper;
};
