import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './HomeList.scss';

interface Props {}
interface State {}

export default class HomeList extends Component<Props, State> {
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

  render() {
    return (
      <View className="activity-wrap">
        {this.state.list.map((item, index) => {
          return (
            <View className="activity-item">
              <View className="activity-top">
                <View className="userinfo">
                  <View
                    className="avatar"
                    style={{ backgroundImage: `url(${'https://pic2.superbed.cn/item/5dee0df31f8f59f4d65947ab.png'})` }}
                  ></View>
                  <View className="usr">
                    <View className="name">Klll Zhang</View>
                    <View className="time">2019.7.20 20:01</View>
                  </View>
                </View>
                <View className="more">
                  <View className="i">
                    <View className="icon"></View>
                  </View>
                  <View className="i">
                    <View className="icon"></View> 222
                  </View>
                  <View className="i">
                    <View className="icon"></View> 1000
                  </View>
                </View>
              </View>

              <View className="activity-content" style={{ backgroundImage: `url(${this.state.images[index]})` }}>
                <View className="info-wrap">
                  <View className="info">
                    <View className="km">10.8 KM 4000 A.S.L </View>
                    <View className="title">西藏雪山一日游路线分享 10.8 KM</View>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}
