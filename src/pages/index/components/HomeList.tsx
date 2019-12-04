import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

interface Props {}
interface State {}

export default class TabBar extends Component<Props, State> {
  state = {};

  render() {
    return <View className="tabbar-wrap">home list</View>;
  }
}
