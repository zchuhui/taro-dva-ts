import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './TabBar.scss';

interface Props {
  current: Number;
}
interface State {}

export default class TabBar extends Component<Props, State> {
  state = {};

  render() {
    const current = this.props.current;
    console.log(current);

    return (
      <View className="tabbar-wrap">
        <View className="tabbar-item">
          <View className={`tabbar-box ${current === 0 ? 'tabbar-active' : null}`}>
            <View className="iconfont">&#xe685;</View>
            首页
          </View>
        </View>
        <View className="tabbar-item">
          <View className="tabbar-box">
            <View className="iconfont">&#xe7a3;</View>
            数据
          </View>
        </View>
        <View className="tabbar-item">
          <View className="tabbar-box">
            <View className="iconfont">&#xe619;</View>
            我的
          </View>
        </View>
      </View>
    );
  }
}
