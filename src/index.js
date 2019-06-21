"use strict";

var stringHash = require(`string-hash`);
var getResourceRelativeRequest = require(`./getResourceRelativeRequest`);

module.exports = function getResourceInfoPlugin() {
  const data = {};
  /* Property ResourcePath is a full path to the target resource */
  data.path = this.resourcePath;

  /* Property localPath is a path to the target resource relative to project root */
  data.localPath = getResourceRelativeRequest(this);

  /* Property hashName is a unique name for this resource upon this project */
  data.hashName = stringHash(this.resourcePath);

  return `module.exports = ${JSON.stringify(data)};`;
};
