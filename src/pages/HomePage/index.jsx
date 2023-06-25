import React, { Fragment ,Component } from "react";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import Image from "../../component/Image";
 
class  HomePage extends Component{
  render() {
    return (
        <Fragment>
            <Header/>
            <Image/>
            <Footer/>
        </Fragment>

    );
  }
}
 
export default HomePage;