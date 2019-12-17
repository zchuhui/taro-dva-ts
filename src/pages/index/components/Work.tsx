import Taro, { Component } from '@tarojs/taro';
import { View, Button, WebView } from '@tarojs/components';

interface Props {
  userInfo: any;
}
interface State {}

export default class Work extends Component<Props, State> {
  state = {};

  render() {
    return (
      <View className="work-wrap">
        <Button
          className="btn-setup"
          onClick={() => {
            Taro.navigateTo({ url: 'www.baidu.com' });
          }}
        >
          设置您的运动数据来源
        </Button>

        {/* <WebView src="http://10.1.8.205:8000"></WebView> */}
      </View>
    );
  }
}
