import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './TabBar.scss';

interface Props {
  current: Number;
  switchModal: Function;
}
interface State {}

export default class TabBar extends Component<Props, State> {
  state = {};

  /**
   * 页面跳转
   */
  toPage = (num) => {
    // Taro.redirectTo({
    //   url: path
    // });

    this.props.switchModal(num);
  };

  render() {
    const current = this.props.current;

    return (
      <View className="tabbar-wrap">
        <View className="tabbar-item" onClick={this.toPage.bind(this, 0)}>
          <View className={`tabbar-box ${current === 0 || current === undefined ? 'tabbar-active' : null}`}>
            <View className="iconfont home"></View>
            <View>首页</View>
          </View>
        </View>

        <View className="tabbar-item" onClick={this.toPage.bind(this, 1)}>
          <View className={`tabbar-box ${current === 1 ? 'tabbar-active' : null}`}>
            <View className="iconfont work"></View>
            <View>制作</View>
          </View>
        </View>

        <View className="tabbar-item" onClick={this.toPage.bind(this, 2)}>
          <View className={`tabbar-box ${current === 2 ? 'tabbar-active' : null}`}>
            <View className="iconfont me"></View>
            <View>我的</View>
          </View>
        </View>
      </View>
    );
  }
}
