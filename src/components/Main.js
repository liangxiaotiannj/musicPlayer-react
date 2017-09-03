require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import {MemoryRouter, Route, Switch} from 'react-router-dom';

import Menu from './Menu';
import MusicHeader from './Header';
import MusicControl from './Control';
import MvPlayer from './MvPlay';
import AllplayList from './AllplayList';
import MyFavouriteList from './MyFavouriteList';
import RecommendList from './RecommendList';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AppComponent extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div className="index">
        <MusicHeader></MusicHeader>
        <MusicControl></MusicControl>
        <MemoryRouter>
          <div className="menuBox">
            <Menu></Menu>
            <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
              <Switch>
                <Route location={location} exact path="/" component={AllplayList}/>
                <Route location={location} path="/Favourite" component={MyFavouriteList}/>
                <Route location={location} path="/Recommend" component={RecommendList}/>
              </Switch>
            </ReactCSSTransitionGroup>
          </div>
        </MemoryRouter>
        <MvPlayer></MvPlayer>
      </div>
    );
  }
}

AppComponent.defaultProps = {
  audio: null
};

export default AppComponent;
