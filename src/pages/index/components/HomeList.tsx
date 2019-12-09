import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

interface Props {}
interface State {}

export default class HomeList extends Component<Props, State> {
  state = {};

  render() {
    return <View className="home-wrap">home</View>;
  }
}
