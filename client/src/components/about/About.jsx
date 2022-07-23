import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about">
      <h2>How it works</h2>
      <p>
        Any website can be visualized in the form of a graph data structure
        where each links in the website act as a node and the link between two
        hyperlinks act as the edges. Hence to efficiently find all the links in
        the website, one has to basically just do a graph traversal to discover
        all links and check the connectabillity of the links. In this system a
        Breadth-first search graph traversal technique has been employed. Web
        scraping in implemented to find the links embeded in the web pages. This
        project is a node-based application with the frontend made using React
        and the RESTful backend extensively using node libraries like axios for
        making request, cheerio for downloading the HTML content of the website,
        Express for defining routes and using of various middlewares. This
        application also implements server-sent events to create a one way
        channel for the server to send multiple data to client, so that the user
        knows the progress and is constantly updated with the amount of weblinks
        crawled or found broken.
      </p>
    </div>
  );
}

export default About;
