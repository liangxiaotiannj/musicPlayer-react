/**
 * Created by liangxiaotian on 2017/9/2.
 */
import React from 'react';

import {NavLink} from 'react-router-dom';

class NewLi extends React.Component {
  render() {
    let linkTo = this.props.name == 'All' ? '/' : '/' + this.props.name;
    let activeClass = this.props.name == 'All' ? 'menuLi active' : 'menuLi';
    return (
      <li>
          <NavLink to={linkTo} className={activeClass}>
            {this.props.liName}
          </NavLink>
      </li>
    );
  }
}

export default NewLi;
