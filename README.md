# Broken-Links-Finder - NodeJs
A web application to find all the dead links in a website <br/>
Link to web application: https://broken-links-finder.netlify.app/

## introduction

The broken links finder is an online based web crawling bot which finds all the broken links present in a website. The project was implemented through python using the python’s inbuilt libraries. The GUI was built using Node, React, Express with Server sent events.. The project solves the problem of finding all the broken link using breadth first algorithm. Extracting of links from a given webpage is done using a technique called web scraping.

### What is a Broken Link?

Broken link is the phenomenon of hyperlink tending over time to cease to point to their originally targeted file, web page, or server.
Some of the reasons why links don’t work include:
* A website is no longer available
* A webpage was moved without a redirect being added
* The URL structure of a website was changed

For every link being accessed, the browser returns a response code stating the behaviour of the webpage. A healthy webpage always returns 200 response code. A link is said to be broken if the webpage that the link is pointing to doesn’t yield 200 as response code. A common error yielded by the broken links are HTTP 404 error. 
However, there are different other codes which has different meaning.

*Refer this site for all the https codes and their actual meaning: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status*

### Broken links finder and BFS Algo

If visualised properly one can see that the network of the website links can be represented as a directed graph data structure where each links act as a node. Visiting each link is nothing but traversing through this graph. This project the graph traversal was implemented using breadth first search. In this traversal algorithm one node is selected and then all of the adjacent nodes are visited one by one. After completing all of the adjacent vertices, it moves further to check another vertex and checks its adjacent vertices again. Also, we should make sure that the already visited links should not be visited again and again. Hence to maintain redundancy we use queue data structure to keep track of all visited links.


#### Sample screenshot of the web application: 
![BLF website](https://user-images.githubusercontent.com/67074796/192000381-9b98ead9-9fed-444a-a663-ae08b6801c5a.jpg)

