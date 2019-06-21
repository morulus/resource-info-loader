"use strict";

/* Get resource path relative to project root */

module.exports = function getResourceRelativeRequest(lc) {
  if (lc.context) {
    // Webpack 4
    return lc.resourcePath.substring(lc.context.length);
  }
  // Webpack <4
  return lc.resourcePath.substring(lc.options.context.length - 1);
};