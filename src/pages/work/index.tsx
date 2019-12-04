import Taro, { Component } from '@tarojs/taro';
import { ComponentClass } from 'react';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import TabBar from '../../components/TabBar';

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
    navigationBarTitleText: 'work'
  };
  componentDidMount() {}
  render() {
    const {} = this.props;
    return (
      <View className="work-page">
        <TabBar current={1} />
      </View>
    );
  }
}
export default Work as ComponentClass<PageOwnProps, PageState>;
