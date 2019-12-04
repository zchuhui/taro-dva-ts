import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './TabBar.scss';

interface Props {
  current: Number;
}
interface State {}

export default class TabBar extends Component<Props, State> {
  state = {};

  /**
   * 页面跳转
   */
  toPage = (path) => {
    Taro.redirectTo({
      url: path
    });
  };

  render() {
    const current = this.props.current;

    return (
      <View className="tabbar-wrap">
        <View className="tabbar-item" onClick={this.toPage.bind(this, '/pages/index/index')}>
          <View className={`tabbar-box ${current === 0 ? 'tabbar-active' : null}`}>
            <View className="iconfont">&#xe686;</View>
            首页
          </View>
        </View>
        <View className="tabbar-item" onClick={this.toPage.bind(this, '/pages/work/index')}>
          <View className={`tabbar-box ${current === 1 ? 'tabbar-active' : null}`}>
            <View className="iconfont">&#xe7a3;</View>
            数据
          </View>
        </View>
        <View className="tabbar-item" onClick={this.toPage.bind(this, '/pages/account/index')}>
          <View className={`tabbar-box ${current === 2 ? 'tabbar-active' : null}`}>
            <View className="iconfont">&#xe619;</View>
            我的
          </View>
        </View>
      </View>
    );
  }
}
