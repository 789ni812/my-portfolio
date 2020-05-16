import React, { Component } from "react";
// import Home from "./content/home";
// import Examples from "./content/examples";
// import About from "./content/about";
// import Contact from "./content/contact";
// Create naviagtion to load the content from href
// make decision based on page pressed
// load page in
//Note: this will bound to be wrong but interesting to play with it.

class ContentDisplay extends Component {
  state = {
    content: [
      {
        id: 0,
        title: "home",
        teaser: "Genrally, the first page a user lands on"
      },
      {
        id: 1,
        title: "Examples",
        teaser: "Be amazed by the examples before you"
      },
      { id: 2, title: "About", teaser: "I've got previous" },
      {
        id: 3,
        title: "Contact",
        teaser: "If you would like to get in touch with me"
      }
    ],
    currentContent: 0
  };

  switchContentHandler = contentID => {
    return this.setState({ currentContent: contentID });
  };

  render() {
    return (
      <div>
        <div className="ui inverted segment">
          {this.state.content.map((item, key) => (
            <button
              className="ui inverted blue basic button"
              key={item.key}
              onClick={this.switchContentHandler.bind(this, key)}
            >
              {item.title}
            </button>
          ))}
        </div>

        <h1 className="ui header1">
          {this.state.content[this.state.currentContent].title}
        </h1>
        <p>{this.state.content[this.state.currentContent].teaser}</p>
      </div>
    );
  }
}

export default ContentDisplay;
