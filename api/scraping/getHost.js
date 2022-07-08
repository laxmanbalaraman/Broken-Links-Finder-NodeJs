const { URL } = require("url");

const getHost = (url) => {
  return new URL(url).hostname;
};

module.exports = getHost;
