import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {title: "Welcome"};
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    // let components = [<Header />, <Footer />];

    // setTimeout(
    //   () => { this.setState({title: "Welcome fo-ji!"});}
    //   , 2000
    // );

    return (
      <div>
        {/* {this.state.name}
        {components} */}
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
