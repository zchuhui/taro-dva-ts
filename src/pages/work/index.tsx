import Taro, { Component } from '@tarojs/taro';
import { ComponentClass } from 'react';
import { View, Map, Input, Picker, Text, Button, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import MyExif from '../../utils/myexif';
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
@connect(({ work, loading }) => ({
  ...work
}))
class Work extends Component<IProps, {}> {
  config = {
    navigationBarTitleText: '制作视频'
  };

  state = {
    // 地图参数
    markers: [
      {
        iconPath: '', //IconMe,
        id: 0,
        latitude: 23.099994,
        longitude: 113.32452,
        width: 20,
        height: 20
      }
    ],
    polyline: [
      {
        points: [
          {
            longitude: 113.3245211,
            latitude: 23.10229
          },
          {
            longitude: 113.32452,
            latitude: 23.21229
          }
        ],
        color: '#FF0000DD',
        width: 2,
        dottedLine: true
      }
    ],
    controls: [
      {
        id: 1,
        iconPath: '', //IconMe,
        position: {
          left: 0,
          top: 300 - 50,
          width: 20,
          height: 20
        },
        clickable: true
      }
    ],

    // 类型选择
    selector: ['跑步', '骑行', '自驾', '徒步', '摩旅', '其他'],
    selectorChecked: '跑步',

    // 图片列表
    imageList: []
  };

  componentDidMount() {}

  /**
   * 选择类型
   */
  onChange = (e) => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    });
  };

  /**
   * 上传图片
   */
  onUploadImgs() {
    const _this = this;
    // 剩下可上传图片数量
    const imgCount = 4 - _this.state.imageList.length;

    Taro.chooseImage({
      count: imgCount,
      sizeType: ['original'],
      sourceType: ['album'],
      success(res) {
        let imgArr = _this.state.imageList;

        // 遍历读取图片信息
        res.tempFilePaths.map((item, idx) => {
          // 读取图片信息
          let file = Taro.getFileSystemManager().readFileSync(item),
            info = MyExif.handleBinaryFile(file);
          console.log('img info', idx, info);
          // console.log('formatDateTime',_this.formatDateTime(info.data.DateTime));

          // 过滤没有图片信息的图片
          if (info.data !== false) {
            imgArr.push({
              url: item,
              dateTime: _this.formatDateTime(info.data.DateTime)
            });
          }
        });

        // 临时图片
        _this.setState({
          imageList: imgArr
        });

        console.log('this.imgArr', imgArr);
        // 按照时间排序
        _this.sortTime(imgArr);
      }
    });
  }

  // 格式化时间
  formatDateTime(date) {
    let d = date.split(' ')[0];
    let t = date.split(' ')[1];

    let d2 = '';
    d.split(':').map((i, idx) => {
      d2 === '' ? (d2 = i) : (d2 = d2 + '-' + i);
    });

    return d2 + ' ' + t;
  }

  // 根据世界时间排序
  sortTime = (imgArray) => {
    var arr2 = [];
    var json = {};

    for (var index = 0, len = imgArray.length; index < len; index++) {
      json[new Date(imgArray[index].dateTime).getTime()] = imgArray[index];
      arr2.push(new Date(imgArray[index].dateTime).getTime());
    }

    arr2.sort();

    for (var j = 0; j < arr2.length; j++) {
      imgArray[j] = json[arr2[j]];
    }

    return imgArray;
  };

  // 删除
  onDeleteImg = (index) => {
    const list = this.state.imageList.filter((item, idx) => idx !== index);
    this.setState({
      imageList: list
    });
  };

  render() {
    const {} = this.props;
    const { imageList } = this.state;

    return (
      <View className="work-page">
        {/* 地图 */}
        <View>
          <Map
            id="map"
            longitude={113.32452}
            latitude={23.099994}
            scale={14}
            controls={this.state.controls}
            // bindcontroltap="controltap"
            markers={this.state.markers}
            // bindmarkertap="markertap"
            polyline={this.state.polyline}
            // bindregionchange="regionchange"
            show-location
            style="width: 100%; height: 250px;"
          />
        </View>

        <View className="input-wrap">
          {/* 标题 */}
          <View className="act-title">
            <Text>标题：</Text>
            <Input placeholder="活动标题，十个字以内" />
          </View>

          {/* 类型 */}
          <View className="act-type">
            <Picker mode="selector" range={this.state.selector} onChange={this.onChange}>
              <View className="picker">活动类型：{this.state.selectorChecked}</View>
            </Picker>
          </View>

          {/* 图片上传 */}
          <View className="image-wrap">
            {// 以上传列表
            imageList.length > 0 ? (
              <View className="image-list">
                {imageList.map((i, index) => {
                  return (
                    <View className="item">
                      <View className="time">{i.dateTime}</View>
                      <Image src={i.url} mode="aspectFill" />
                      <View className="delete" onClick={this.onDeleteImg.bind(this, index)}></View>
                    </View>
                  );
                })}
              </View>
            ) : null}

            {// 如果图片少于4张，现实按钮继续上传
            imageList.length < 4 ? (
              <View className="btn-upload" onClick={this.onUploadImgs}>
                上传活动照片 +
              </View>
            ) : null}

            <Button className="btn-marker"> 开始制作 </Button>
          </View>
        </View>
      </View>
    );
  }
}
export default Work as ComponentClass<PageOwnProps, PageState>;
