import Taro, { Component } from '@tarojs/taro';
import { View, Button, CoverImage } from '@tarojs/components';

interface Props {
  userInfo: any;
}
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
    const { userInfo } = this.props;
    console.log('userInfo', userInfo);

    return (
      <View className="me-wrap">
        {userInfo == undefined || userInfo == '' ? (
          <Button openType="getUserInfo" onClick={this.handleGetUserInfo}>
            点击获取用户信息
          </Button>
        ) : null}

        <View
          style={{
            padding: '20px',
            textAlign: 'center'
          }}
        >
          <CoverImage src={userInfo.avatarUrl} style={{ width: '50px', height: '50px', borderRadius: '50%', margin: '30px auto' }} />
          <View>{userInfo.nickName}</View>
        </View>
      </View>
    );
  }
}
