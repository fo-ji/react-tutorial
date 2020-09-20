import React from "react";
import Header from "./Header";

export default class Layout extends React.Component {
  // constructor() {
  //   super();
  //   this.name = "fo-ji";
  // }
  render() {
    return (
    // <h1>It's {this.name}!</h1>
    <div>
      <Header />
      {/* <Header />
      <Header /> */}
    </div>
    );
  }
}
