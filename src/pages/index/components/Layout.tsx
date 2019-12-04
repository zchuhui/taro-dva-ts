import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import TabBar from './TabBar';

interface Props {}
interface State {}

export default class Layout extends Component<Props, State> {
  state = {};

  render() {
    return (
      <View className="layout-wrap">
        <View>{this.props.children}</View>

        <TabBar current={0} />
      </View>
    );
  }
}
