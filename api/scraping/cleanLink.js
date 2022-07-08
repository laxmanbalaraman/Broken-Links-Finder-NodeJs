const convertToAbsoluteUrl = require("./convertToAbsoluteUrl");

function isUrlAbsolute(url) {
  return url.indexOf("://") > 0 || url.indexOf("//") === 0;
}

const cleanLink = (link, url) => {
  if (
    link.startsWith("#") ||
    link.startsWith("mailto") ||
    link.startsWith("tel")
  )
    return;
  // console.log("cleaning the link", link);
  try {
    if (!isUrlAbsolute(link)) {
      // convert relative url to absolute url
      const abs = convertToAbsoluteUrl(url, link);
      console.log("absolute url is", abs, url, link);
      return abs;
    }

    return link;
  } catch (error) {
    console.log(error);
  }
};

module.exports = cleanLink;
