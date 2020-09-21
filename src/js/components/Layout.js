import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {title: "Welcome"};
  }
  render() {
    // let components = [<Header />, <Footer />];

    setTimeout(
      () => { this.setState({title: "Welcome fo-ji!"});}
      , 2000
    );

    return (
      <div>
        {/* {this.state.name}
        {components} */}
        <Header title={this.state.title} />
        <Header title={"Thank you"} />
        <Footer />
      </div>
    );
  }
}
