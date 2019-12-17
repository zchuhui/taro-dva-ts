import Taro, { Component } from '@tarojs/taro';
import { View, Button, CoverImage, WebView } from '@tarojs/components';
import './Work.scss';
import EditIcon from '../../../static/images/icon-edit.png';

interface Props {
  userInfo: any;
}
interface State {}

export default class Work extends Component<Props, State> {
  state = {};

  render() {
    return (
      <View className="work-wrap">
        <View className="work-content">
          <Button
            className="btn-setup"
            onClick={() => {
              Taro.navigateTo({ url: 'www.baidu.com' });
            }}
          >
            设置您的运动数据来源
          </Button>

          <View className="act-types">
            <View className="item">
              <View className="i-type"> 跑步 13km</View>
              <View className="i-address"> 美国华盛顿州 · xxxx大峡谷 </View>
              <View className="i-btn">
                {' '}
                <CoverImage src={EditIcon} />{' '}
              </View>
            </View>

            <View className="item">
              <View className="i-type"> 跑步 13km</View>
              <View className="i-address"> 美国华盛顿州 · xxxx大峡谷 </View>
              <View className="i-btn">
                {' '}
                <CoverImage src={EditIcon} />{' '}
              </View>
            </View>

            <View className="item">
              <View className="i-type"> 跑步 13km</View>
              <View className="i-address"> 美国华盛顿州 · xxxx大峡谷 </View>
              <View className="i-btn">
                {' '}
                <CoverImage src={EditIcon} />{' '}
              </View>
            </View>
          </View>
        </View>

        {/* <WebView src="http://10.1.8.205:8000"></WebView> */}
      </View>
    );
  }
}
