import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

interface Props {}
interface State {}

export default class Me extends Component<Props, State> {
  state = {};

  render() {
    return <View className="tabbar-wrap">me</View>;
  }
}
