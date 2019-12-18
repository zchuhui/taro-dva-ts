import Taro, { Component } from '@tarojs/taro';
import { View, Button, CoverImage, Text } from '@tarojs/components';
import './Me.scss';

interface Props {
  userInfo: any;
}
interface State {}

export default class Me extends Component<Props, State> {
  state = {
    list: [12, 3, 4, 5, 5, 5, 5, 5, 5, 5],
    images: [
      'https://ae01.alicdn.com/kf/Hc960befbbe4248f7a2aed58b548dd051A.jpg',
      'https://pic1.superbed.cn/item/5def3ca41f8f59f4d67856ab.jpg',
      'https://ae01.alicdn.com/kf/Hc960befbbe4248f7a2aed58b548dd051A.jpg',
      'https://pic1.superbed.cn/item/5def3ca41f8f59f4d67856ab.jpg',
      'https://ae01.alicdn.com/kf/Hc960befbbe4248f7a2aed58b548dd051A.jpg',
      'https://pic1.superbed.cn/item/5def3ca41f8f59f4d67856ab.jpg',
      'https://ae01.alicdn.com/kf/Hc960befbbe4248f7a2aed58b548dd051A.jpg',
      'https://pic1.superbed.cn/item/5def3ca41f8f59f4d67856ab.jpg',
      'https://pic1.superbed.cn/item/5def3ca41f8f59f4d67856ab.jpg',
      'https://pic1.superbed.cn/item/5def3ca41f8f59f4d67856ab.jpg',
      'https://pic1.superbed.cn/item/5def3ca41f8f59f4d67856ab.jpg',
      'https://pic1.superbed.cn/item/5def3ca41f8f59f4d67856ab.jpg',
      'https://pic1.superbed.cn/item/5def3ca41f8f59f4d67856ab.jpg',
      'https://pic1.superbed.cn/item/5def3ca41f8f59f4d67856ab.jpg'
    ]
  };

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
    //console.log('userInfo', userInfo);

    return (
      <View className="me-wrap">
        {userInfo == undefined || userInfo == '' ? (
          <Button openType="getUserInfo" onClick={this.handleGetUserInfo}>
            点击获取用户信息
          </Button>
        ) : null}

        <View className="user-box">
          <View className="userinfo">
            <CoverImage src={userInfo.avatarUrl} style={{ width: '50px', height: '50px', borderRadius: '50%', margin: '10px auto' }} />
            <View>{userInfo.nickName}</View>
          </View>

          <View className="data">
            <View className="item">
              <View className="name">
                活动 <Text className="unit">(次)</Text>
              </View>
              <View className="num">15</View>
            </View>

            <View className="item">
              <View className="name">
                距离 <Text className="unit">(公里)</Text>
              </View>
              <View className="num">15</View>
            </View>

            <View className="item">
              <View className="name">
                时长 <Text className="unit">(小时)</Text>
              </View>
              <View className="num">15</View>
            </View>
          </View>
        </View>

        <View className="activity-list">
          {this.state.list.map((item, index) => {
            return (
              <View>
                <View className="activity-date">2019-09-08</View>

                <View
                  className="activity-item"
                  onClick={() => {
                    Taro.navigateTo({ url: `/pages/activity/index?id=${item}` });
                  }}
                >
                  <View className="activity-content" style={{ backgroundImage: `url(${this.state.images[index]})` }}>
                    <View className="info-wrap">
                      {/* <View className="btn-play">
                        <CoverImage src={IconPlay} />
                      </View> */}
                      <View className="info">
                        <View className="title">西藏雪山一日游路线分享</View>
                        <View className="km">徒步 10.8 公里 </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}
