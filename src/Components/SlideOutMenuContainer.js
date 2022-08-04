import React, {Component} from 'react';
import './SlideOutMenuContainer.css';
class SlideOutMenuContainer extends Component {
  constructor(props, context) {
  super(props, context);
 
  this.state = {
    visible: false
  };
}
  render() {
    const { visible } = this.state;
    return (
      <div className='slide-box'>
            <div id='slide_nav'>     
                <p id="slide_nav_button" onClick={() => this.setState({visible: !visible })}>☰</p>
            </div>
            <div>
                <ul id='slide_menu' style={{ display: (visible ? 'block' : 'none') }}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
          </div>
      </div>
    );
  }
}
export default SlideOutMenuContainer;