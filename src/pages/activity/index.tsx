import Taro, { Component } from '@tarojs/taro';
import { ComponentClass } from 'react';
import { View, Text, Video, Map } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import IconMe from '../../static/images/me.png';

type PageState = {};
interface PageDvaProps {
  dispatch: Function;
}
interface PageOwnProps {
  // 父组件要传放这
}
interface PageStateProps {
  // 自己要用的放这
}
type IProps = PageStateProps & PageDvaProps & PageOwnProps;
@connect(({ activity, loading }) => ({
  ...activity
}))
class Activity extends Component<IProps, {}> {
  config = {
    navigationBarTitleText: '活动详情'
  };

  state = {
    // 地图参数
    markers: [
      {
        iconPath: IconMe,
        id: 0,
        latitude: 23.099994,
        longitude: 113.32452,
        width: 20,
        height: 20
      }
    ],
    polyline: [
      {
        points: [
          {
            longitude: 113.3245211,
            latitude: 23.10229
          },
          {
            longitude: 113.32452,
            latitude: 23.21229
          }
        ],
        color: '#FF0000DD',
        width: 2,
        dottedLine: true
      }
    ],
    controls: [
      {
        id: 1,
        iconPath: IconMe,
        position: {
          left: 0,
          top: 300 - 50,
          width: 20,
          height: 20
        },
        clickable: true
      }
    ],

    images: [
      'https://ae01.alicdn.com/kf/Hc960befbbe4248f7a2aed58b548dd051A.jpg',
      'https://pic1.superbed.cn/item/5def3ca41f8f59f4d67856ab.jpg',
      'https://ae01.alicdn.com/kf/Hc960befbbe4248f7a2aed58b548dd051A.jpg',
      'https://pic1.superbed.cn/item/5def3ca41f8f59f4d67856ab.jpg',
      'https://ae01.alicdn.com/kf/Hc960befbbe4248f7a2aed58b548dd051A.jpg'
    ]
  };

  componentDidMount() {}

  render() {
    const {} = this.props;
    return (
      <View className="activity-wrap">
        <View className="act-video">
          <Video
            src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
            controls={true}
            autoplay={false}
            poster="http://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg"
            initialTime={0}
            id="video"
            loop={false}
            muted={false}
          />
        </View>

        <View className="act-map">
          <Map
            id="map"
            longitude={113.32452}
            latitude={23.099994}
            scale={14}
            controls={this.state.controls}
            // bindcontroltap="controltap"
            markers={this.state.markers}
            // bindmarkertap="markertap"
            polyline={this.state.polyline}
            // bindregionchange="regionchange"
            show-location
            style="width: 100%; height: 150px;"
          />

          <View className="act-data">
            <View className="item">
              <View className="name">
                距离 <Text className="unit">(公里)</Text>
              </View>
              <View className="num">15</View>
            </View>

            <View className="item">
              <View className="name">
                活动时间 <Text className="unit">(小时)</Text>
              </View>
              <View className="num">15</View>
            </View>

            <View className="item">
              <View className="name">
                海拔爬升 <Text className="unit">(米)</Text>
              </View>
              <View className="num">15</View>
            </View>
          </View>
        </View>

        <View className="act-imgs">
          <View className="box">
            {this.state.images.map((item, index) => {
              return (
                <View>
                  <View className="activity-date">2019-09-08</View>
                  <View className="activity-item">
                    <View className="activity-content" style={{ backgroundImage: `url(${this.state.images[index]})` }}>
                      <View className="info-wrap"></View>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>

          <View className="commit">
            <View className="item item-date">2019-05-93</View>
            <View className="item item-zan">
              <View className="icon"></View>
              <Text>3</Text>
            </View>
            <View className="item">
              <View className="icon icon-commit"></View>
              <Text>1</Text>
            </View>
            <View className="item ">
              <View className="icon icon-share"></View>
              <Text>2</Text>
            </View>
          </View>
        </View>

        <View className="act-likes">
          <View className="icon"></View>
          <View className="users">
            <Text>小新</Text> ，<Text>小丸子</Text> ，<Text>小杜</Text> ，<Text>周杰伦</Text>
            <Text>小新</Text> ，<Text>小丸子</Text> ，<Text>小杜</Text> ，<Text>周杰伦</Text>
            <Text>小新</Text> ，<Text>小丸子</Text> ，<Text>小杜</Text> ，<Text>周杰伦</Text>
          </View>
        </View>

        <View className="act-commit">
          <View className="icon"></View>

          <View className="commit-list">
            <View className="item">
              <Text className="name">小谭</Text> ：<Text className="ctn">好好看的视频！！！！！！</Text>
            </View>

            <View className="item">
              <Text className="name">大王</Text> ：<Text className="ctn">好好看的视频！！！！！！</Text>
            </View>

            <View className="item">
              <Text className="name">孙悟空</Text> ：<Text className="ctn">好好看的视频！！！！！！</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Activity as ComponentClass<PageOwnProps, PageState>;
