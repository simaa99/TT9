import React, { Component } from 'react';
class Image extends Component {

  render() {
    const {src,title}=this.props;
    return(
        <div>
            <img src={src} alt={title} title={title}/>
        </div>
    );
  }
}
 
export default Image;