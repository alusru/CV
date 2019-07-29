import React, {Component} from 'react';
import Sidebar from '../../components/Sidebar/sidebar';
class Layout extends Component{
state = {
}
  render(){
    return (
      <div>
      <Sidebar />
          {this.props.children}
      </div>
    )
  }
}


export default Layout;
