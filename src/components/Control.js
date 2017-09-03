/**
 * Created by liangxiaotian on 2017/9/2.
 */
import React from 'react';
import EventProxy from 'react-eventproxy';

class MusicProgress extends React.Component {
  render() {
    return (
      <div className="progress">
        <div className="progress-all">
          <div className="progress-now"></div>
        </div>
      </div>
    );
  }
}


class MusicControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlay: false,
      isMuted: false,
      volume: 100,
      allTime: 0,
      currentTime: 0,
      url:'http://www.clazone.com/musicApp/music/mp3/bgm.mp3'
    }
  }

  controlAudio(control){
    const audio = document.getElementById('Audio');
    switch (control) {
      case 'pause':
        audio.pause();
        this.setState({
          isPlay: false
        });
        break;
      case 'play':
        audio.play();
        this.setState({
          isPlay: true
        });
        break;
      default:
        audio.pause();
        this.setState({
          isPlay: false
        });
      break;
    }
  }

  componentDidMount() {
    EventProxy.on('changeMusicUrl',(info)=>{
      this.setState({
        url:info.path,
        isPlay:true
      });
      let t = function () {
        const audio = document.getElementById('Audio');
        audio.play();
      };
      setTimeout(t,200)
    });
  }

  render() {
    let isPlay = this.state.isPlay;
    return (
      <div className="control">
        <audio src={this.state.url} controls="controls" ref="Audio"
               id="Audio"></audio>
        {/*<video src="http://www.clazone.com/musicApp/music/mp4/the Ocean.mp4" controls="controls"></video>*/}
        <MusicProgress></MusicProgress>
        <div style={{padding: 10}}>
          <button>上一曲</button>
          <button onClick={() => this.controlAudio( isPlay? 'pause' : 'play' )}>暂停</button>
          <button>下一曲</button>
          <input type="range"/>
        </div>
      </div>
    );
  }
}

MusicControl.defaultProps = {};

export default MusicControl;
