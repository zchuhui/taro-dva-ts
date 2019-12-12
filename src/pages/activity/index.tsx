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
    navigationBarTitleText: 'activity'
  };

  state = {
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
    ]
  };

  componentDidMount() {}

  render() {
    const {} = this.props;
    return (
      <View className="activity-wrap">
        <View className="act-data">
          <View>
            <View className="data">
              10.00 <Text>KM</Text>{' '}
            </View>
            <View className="desc">距离</View>
          </View>
          <View>
            <View className="data">
              10.00 <Text>KM</Text>{' '}
            </View>
            <View className="desc">时长</View>
          </View>
          <View>
            <View className="data">
              10.00 <Text>KM</Text>{' '}
            </View>
            <View className="desc">爬升海拔</View>
          </View>
        </View>

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
        </View>

        <View className="act-imgs"></View>
      </View>
    );
  }
}
export default Activity as ComponentClass<PageOwnProps, PageState>;
