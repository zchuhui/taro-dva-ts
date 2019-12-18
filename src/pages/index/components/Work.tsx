import Taro, { Component } from '@tarojs/taro';
import { View, Button, CoverImage } from '@tarojs/components';
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
            // onClick={() => {
            //   Taro.navigateTo({ url: 'www.baidu.com' });
            // }}
          >
            设置您的运动数据来源 <View className="icon-add"></View>
          </Button>

          <View className="act-types">
            <View className="item item-run">
              <View className="i-type">
                {' '}
                跑步 13 <View className="km">km</View>{' '}
              </View>
              <View className="i-address"> 美国华盛顿州 · xxxx大峡谷 </View>
              <View className="i-btn">
                <CoverImage className="icon-img" src={EditIcon} />
              </View>
            </View>

            <View className="item item-bike">
              <View className="i-type">
                {' '}
                骑行 13 <View className="km">km</View>
              </View>
              <View className="i-address"> 美国华盛顿州 · xxxx大峡谷 </View>
              <View className="i-btn">
                <CoverImage className="icon-img" src={EditIcon} />
              </View>
            </View>

            <View className="item item-onfoot">
              <View className="i-type">
                {' '}
                徒步 13 <View className="km">km</View>
              </View>
              <View className="i-address"> 美国华盛顿州 · xxxx大峡谷 </View>
              <View className="i-btn">
                <CoverImage className="icon-img" src={EditIcon} />
              </View>
            </View>
          </View>
        </View>

        {/* <WebView src="http://10.1.8.205:8000"></WebView> */}
      </View>
    );
  }
}
