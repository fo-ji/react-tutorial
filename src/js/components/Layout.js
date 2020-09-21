import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {name: "fo-ji"};
  // }
  render() {
    // let components = [<Header />, <Footer />];

    // setTimeout(
    //   () => { this.setState({name: "Hello"});}
    //   , 1000
    // );
    const title = "Welcome fo-ji!";

    return (
      <div>
        {/* {this.state.name}
        {components} */}
        <Header title={title} />
        <Header title={"Thank you"} />
        <Footer />
      </div>
    );
  }
}
