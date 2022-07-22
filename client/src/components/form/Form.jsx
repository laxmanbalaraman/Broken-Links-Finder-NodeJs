import React, { useState } from "react";
import axios from "axios";
import "./form.css";
function Form({ setBrokenLinks, setShowResult }) {
  const [link, setLink] = useState("");
  setShowResult(true);
  console.log("link is ", link);
  const handleSubmit = async (event) => {
    event.preventDefault();
    // setShowResult(true);
    try {
      const brokenLinks = await axios.get(
        `http://localhost:5000/find/?link=${link}`,
        {}
      );
      // for (const item in brokenLinks) {
      // }
      console.log(brokenLinks);
      setBrokenLinks(JSON.parse(brokenLinks.data.split(" ").join("")));
    } catch (error) {
      console.log(error);
    }
    console.log(link);
  };

  return (
    <div className="Form">
      <form action="" onSubmit={handleSubmit}>
        <input
          autoFocus="True"
          placeholder="Enter a URL"
          onChange={(e) => setLink(e.target.value)}
          name="link"
          id="link"
          type="link"
          className="input-link"
        />
        <button type="submit" className="submit">
          Find Links
        </button>
      </form>
    </div>
  );
}

export default Form;
