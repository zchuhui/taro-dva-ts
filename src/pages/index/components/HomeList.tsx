import Taro, { Component } from '@tarojs/taro';
import { View, CoverImage } from '@tarojs/components';
import './HomeList.scss';
import IconPlay from '../../../static/images/icon-play.png';

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

              <View className="activity-top">
                <View className="userinfo">
                  <View
                    className="avatar"
                    style={{ backgroundImage: `url(${'https://pic2.superbed.cn/item/5dee0df31f8f59f4d65947ab.png'})` }}
                  ></View>
                  <View className="name">张师傅</View>
                </View>
                <View className="more">
                  <View className="i">
                    <View className="icon"></View>
                    <View className="count">10</View>
                  </View>
                  <View className="i">
                    <View className="icon icon-commit"></View>
                    <View className="count">10</View>
                  </View>
                  <View className="i">
                    <View className="icon icon-share"></View>
                    <View className="count">10</View>
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
