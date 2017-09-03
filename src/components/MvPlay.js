/**
 * Created by liangxiaotian on 2017/9/3.
 */
import React from 'react';

import EventProxy from 'react-eventproxy';

class MvPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlay: false,
      url: '',
      style:{
        height: 0,
      }
    }
  }

  componentDidMount() {
    EventProxy.on('sendMvInfo', (info) => {
      this.setState({
        url: info.mv,
        isPlay: true,
        style:{
          height: '100%'
        }
      });
      let t = function () {
        const mv = document.getElementById('mvplay');
        mv.play();
      };
      setTimeout(t, 200)
    });
  }

  mvPlayHide() {
    this.setState({
      isPlay: false,
      style:{
        height: 0,
      }
    });
  }

  render() {
    return (
      <div className="mvPlay" style={this.state.style}>
        <div>
          <span onClick={() => this.mvPlayHide()}>×</span>
          <video src={this.state.url} controls="controls" id="mvplay"></video>
        </div>
      </div>
    );
  }
}

MvPlayer.defaultProps = {};

export default MvPlayer;
