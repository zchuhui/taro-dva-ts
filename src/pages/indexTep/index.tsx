import Taro, { Component } from '@tarojs/taro';
import { ComponentClass } from 'react';
import { View } from '@tarojs/components';
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
@connect(({ indexTep, loading }) => ({
  ...indexTep
}))
class Indextep extends Component<IProps, {}> {
  config = {
    navigationBarTitleText: 'indexTep'
  };
  componentDidMount() {}
  render() {
    const {} = this.props;
    return <View className="indexTep-page">indexTep</View>;
  }
}
export default Indextep as ComponentClass<PageOwnProps, PageState>;
