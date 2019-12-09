import Taro, { Component } from '@tarojs/taro';
import { View, CoverImage } from '@tarojs/components';

interface Props {
  userInfo: any;
}
interface State {}

export default class Work extends Component<Props, State> {
  state = {};

  render() {
    return <View className="work-wrap">work</View>;
  }
}
