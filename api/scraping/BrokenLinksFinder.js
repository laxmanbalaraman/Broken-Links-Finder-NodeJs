const getHTML = require("./findLinks");
const sse = require("../sse/sse");
// const URL = "https://alanwalker.com/";

const findBrokenLinks = async (URL) => {
  console.log("url is ", URL);
  // bfs algorithm
  const brokenLinks = new Set();
  const queue = [];
  queue.push(URL);
  const visited = new Map();
  console.log(URL);
  while (queue.length) {
    console.log(queue.length);
    const url = queue.pop();
    if (visited.has(url)) continue;
    try {
      visited.set(url, true);
      console.log("crawling ", url);
      const links = await getHTML(url, URL);
      links && queue.push(...links);
      console.log(visited.size);
      sse.send(visited.size, "crawled");
      sse.send(brokenLinks.size, "broken");
      console.log("sending...");
    } catch (error) {
      console.log(error.message, error.statusCode, error.statusMessage);
      console.log("found", url);
      brokenLinks.add(url);
    }
  }
  // console.log(brokenLinks);
  return brokenLinks;
  // console.log(visited.size);
};

// findBrokenLinks("https://alanwalker.com/");

// getHTML(
//   "https://www.keybr.com/auth/oauth-init/facebook",
//   "https://www.keybr.com"
// );

module.exports = findBrokenLinks;
