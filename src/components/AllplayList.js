/**
 * Created by liangxiaotian on 2017/9/2.
 */
import React from 'react';
import audioData from '../stores/audioData';
import EventProxy from 'react-eventproxy';
// console.log(audioData);
class AllplayList extends React.Component {
  constructor(props){
    super(props);
  }

  play(info){
    EventProxy.trigger('changeMusicUrl',info);
  }

  playMv(info){
    EventProxy.trigger('sendMvInfo',info);
  }

  render() {
    return (
      <div>
        <button className="listPlayBtn">播放全部</button>
        <div className="tabHeader">
          <div>歌曲</div>
          <div>歌手</div>
          <div>时长</div>
          <div>操作</div>
        </div>
        <ul>
          {
            audioData.all.map((value,key)=>{
              return (
                <li key={key} className="Playlist">
                  <div style={{textAlign:'left'}}>
                    {value.id}.{value.name}
                    <span className={value.mv ? 'mvBtn':''} onClick={()=>this.playMv(value)}></span>
                  </div>
                  <div>{value.singer}</div>
                  <div>3:40</div>
                  <div><span onClick={()=>this.play(value)} className="arrowPlayBtn"></span><span className="loveBtn"></span></div>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

AllplayList.defaultProps = {

};

export default AllplayList;
