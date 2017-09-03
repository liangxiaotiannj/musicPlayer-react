/**
 * Created by liangxiaotian on 2017/9/2.
 */
import React from 'react';

import NewLi from '../components/MenuLi';

import '../styles/Menu.scss';

let menuLis = ['All', 'Favourite', 'Recommend'];

class MenuUl extends React.Component {
  render() {
    return (
      <ul>
        {
          menuLis.map(function (menuLi) {
            let liName = '';
            if(menuLi==='All'){
              liName = '全部'
            }else if (menuLi==='Favourite'){
              liName = '最喜欢'
            }else if (menuLi==='Recommend'){
              liName = '推荐'
            }
            return <NewLi name={menuLi} key={menuLi} liName={liName}></NewLi>
          })
        }
      </ul>
    );
  }
}

class Menu extends React.Component {
  render() {
    return (
      <nav>
        <div id="menu">
          <MenuUl/>
        </div>
      </nav>
    )
  }
}


export default Menu;
