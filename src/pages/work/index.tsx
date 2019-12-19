import Taro, { Component } from '@tarojs/taro';
import { ComponentClass } from 'react';
import { View, Map, Input, Picker, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

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
@connect(({ work, loading }) => ({
  ...work
}))
class Work extends Component<IProps, {}> {
  config = {
    navigationBarTitleText: '制作视频'
  };
  state = {
    // 地图参数
    markers: [
      {
        // iconPath: IconMe,
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
        // iconPath: IconMe,
        position: {
          left: 0,
          top: 300 - 50,
          width: 20,
          height: 20
        },
        clickable: true
      }
    ],

    // 类型选择
    selector: ['跑步', '骑行', '自驾', '徒步', '摩旅', '其他'],
    selectorChecked: '跑步'
  };

  componentDidMount() {}

  onChange = (e) => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    });
  };

  render() {
    const {} = this.props;
    return (
      <View className="work-page">
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

        <View className="input-wrap">
          <View className="act-title">
            <Text>标题：</Text>
            <Input placeholder="活动标题，十个字以内" />
          </View>
          <View className="act-type">
            <Picker mode="selector" range={this.state.selector} onChange={this.onChange}>
              <View className="picker">活动类型：{this.state.selectorChecked}</View>
            </Picker>
          </View>
        </View>
      </View>
    );
  }
}
export default Work as ComponentClass<PageOwnProps, PageState>;
