import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text, Image, Button } from '@tarojs/components';
import './index.scss';
// import EXIF from 'exif-js'
// import ExifParser from 'exif-parser';
import MyExif from '../../utils/myexif';

// type PageStateProps = {
//   counter: {
//     num: number
//   }
// }

// type PageDispatchProps = {
//   add: () => void
//   dec: () => void
//   asyncAdd: () => any
// }

// type PageOwnProps = {}

// type PageState = {}

// type IProps = PageStateProps & PageDispatchProps & PageOwnProps

// interface Index {
//   props: IProps;
// }

class Index extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  };
  state: {
    imgUrl: '';
    imgInfo: '';
  };

  componentWillMount() {}

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onUploadImgs() {
    const _this = this;

    Taro.chooseImage({
      count: 100,
      sizeType: ['original'],
      sourceType: ['album'],
      success(res) {
        const array = wx.getFileSystemManager().readFileSync(res.tempFilePaths[0]);
        const r = MyExif.handleBinaryFile(array);
        _this.setState({
          imgInfo: r
        });

        console.log('img info', r);
      }
    });
  }

  mapObjectKey(obj) {
    let arr = [];
    for (let key in obj) {
      //console.log(key + '---' + obj[key]);
      const val = key + ': ' + obj[key];
      arr.push(val);
    }
    return arr;
  }

  render() {
    return (
      <View className="index">
        <View>
          <Image id="imgId" src={this.state.imgUrl} />
          <Button onClick={this.onUploadImgs}>add image </Button>

          <View>
            {this.state.imgInfo &&
              this.mapObjectKey(this.state.imgInfo.data).map((item, index) => {
                return <View>{item}</View>;
              })}
          </View>
          <View>--------------------------------------</View>
          <View>
            {this.state.imgInfo &&
              this.mapObjectKey(this.state.imgInfo.iptcdata).map((item, index) => {
                return <View>{item}</View>;
              })}
          </View>
        </View>
      </View>
    );
  }
}

export default Index as ComponentClass;
