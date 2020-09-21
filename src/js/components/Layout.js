import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  // constructor() {
  //   super();
  //   this.name = "fo-ji";
  // }
  render() {
    let components = [<Header />, <Footer />];
    return (
    // <h1>It's {this.name}!</h1>
    <div>
      {components}
    </div>
    );
  }
}
