import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { View, Text, Image, Button } from '@tarojs/components';
import './index.scss';
// import MyExif from '../../utils/myexif';
import TabBar from './components/TabBar';
import HomeList from './components/HomeList';
import Me from './components/Me';
import Work from './components/Work';

type PageStateProps = {
  // counter: {
  //   num: number;
  // };
};

type PageDispatchProps = {
  add: () => void;
  dec: () => void;
  asyncAdd: () => any;
};

type PageOwnProps = {
  currentIndex: Number;
  userInfo: object;
};

type PageState = {
  //current: number;
  // imgUrl: string;
  // imgInfo: boolean;
};
interface PageDvaProps {
  dispatch: Function;
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps & PageState & PageDvaProps;

interface Index {
  props: IProps;
}

@connect(({ common, loading, account }) => ({
  ...common,
  ...account
}))
class Index extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: 'TOOO'
  };

  state: {
    current: 0;
    // imgUrl: '';
    // imgInfo: '';
  };

  componentWillMount() {}

  componentWillReceiveProps(nextProps) {
    // console.log(this.props, nextProps);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {
    console.log(this.props);

    // 调用登录
    this.props.dispatch({
      type: 'common/login'
    });
  }

  componentDidHide() {}

  // onUploadImgs() {
  //   const _this = this;

  //   Taro.chooseImage({
  //     count: 100,
  //     sizeType: ['original'],
  //     sourceType: ['album'],
  //     success(res) {
  //       const array = Taro.getFileSystemManager().readFileSync(res.tempFilePaths[0]);
  //       const r = MyExif.handleBinaryFile(array);
  //       _this.setState({
  //         imgInfo: r
  //       });

  //       console.log('img info', r);
  //     }
  //   });
  // }

  // mapObjectKey(obj) {
  //   let arr = [];
  //   for (let key in obj) {
  //     //console.log(key + '---' + obj[key]);
  //     const val = key + ': ' + obj[key];
  //     arr.push(val);
  //   }
  //   return arr;
  // }

  /**
   * 修改导航栏
   */
  onChangeHomeIndex = (num) => {
    this.props.dispatch({
      type: 'common/save',
      payload: {
        currentIndex: num
      }
    });
  };

  render() {
    const { currentIndex, userInfo } = this.props;

    return (
      <View className="home-wrap">
        <View>
          {/* <Image id="imgId" src={this.state.imgUrl} />
          <Button onClick={this.onUploadImgs}>add image </Button> */}

          {/* <View>
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
          </View> */}
        </View>

        <View>{currentIndex === 0 ? <HomeList /> : null}</View>
        <View>{currentIndex === 1 ? <Work userInfo={userInfo} /> : null}</View>
        <View>{currentIndex === 2 ? <Me userInfo={userInfo} /> : null}</View>

        <TabBar current={currentIndex} switchModal={this.onChangeHomeIndex} />
      </View>
    );
  }
}

export default Index as ComponentClass;
