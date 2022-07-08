// const cheerio = require("cheerio");
const axios = require("axios");
const cheerio = require("cheerio");
const cleanLink = require("./cleanLink");
const getHost = require("./getHost");

// const URL = "https://nodejs.org/docs";

// const brokenLinks = [];

class BrokenLinkError extends Error {
  constructor(message, statusMessage, statusCode) {
    super(message);

    this.statusMessage = statusMessage;
    this.statusCode = statusCode;
  }
}

const getHTML = async (url, baseURL) => {
  try {
    console.log("crawling ", url);
    const response = await axios.get(url);
    // console.log(response);
    if (getHost(url) !== getHost(baseURL)) return;
    return findAnchorTags(response.data, url, baseURL);
  } catch (error) {
    if (error.response) {
      // console.log(error);
      const { response } = error;
      // console.log(response);
      throw new BrokenLinkError(
        "Broken link found",
        response.statusText,
        response.status
      );
    }
  }
};

const findAnchorTags = (html, url, baseURL) => {
  // console.log(html);
  const links = [];
  const $ = cheerio.load(html);
  const hyperlinks = $("[href],[src]");
  hyperlinks.each((index, element) => {
    const text = $(element).text(); // get the text
    const href = $(element).attr("href"); // get the href attribute
    // console.log(text, href);
    if (href) {
      console.log("cleaning ", url, "->", href);

      const valid_href = cleanLink(href, url);
      // console.log(valid_href, href);
      valid_href && links.push(valid_href);
    }
  });
  // console.log(links);
  return links;
};

module.exports = getHTML;
