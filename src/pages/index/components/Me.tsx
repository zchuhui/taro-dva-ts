import Taro, { Component } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';

interface Props {}
interface State {}

export default class Me extends Component<Props, State> {
  state = {};

  handleGetUserInfo = (res) => {
    // console.error('get userinfo',res);

    // 必须是在用户已经授权的情况下调用
    Taro.getUserInfo({
      success: function(res) {
        var userInfo = res.userInfo;
        var nickName = userInfo.nickName;
        var avatarUrl = userInfo.avatarUrl;
        var gender = userInfo.gender; //性别 0：未知、1：男、2：女
        var province = userInfo.province;
        var city = userInfo.city;
        var country = userInfo.country;

        console.log('get userInfo:', userInfo);
      }
    });
  };

  render() {
    return (
      <View className="me-wrap">
        <Button openType="getUserInfo" onClick={this.handleGetUserInfo}>
          点击获取用户信息
        </Button>
      </View>
    );
  }
}
