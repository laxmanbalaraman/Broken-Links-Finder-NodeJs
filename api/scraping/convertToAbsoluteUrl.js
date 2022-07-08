var urlToolkit = require("url-toolkit");
const convertToAbsoluteUrl = (url, relativePath) => {
  if (!url.endsWith("/")) url = url + "/";
  return urlToolkit.buildAbsoluteURL(url, relativePath);
};

// console.log(
//   convertToAbsoluteUrl("https://codemonk.in/contact/", "../services")
// );

module.exports = convertToAbsoluteUrl;
