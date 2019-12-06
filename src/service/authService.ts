import Taro from '@tarojs/taro';
import request from '../utils/request';

/**
 * 整合登录
 */
async function login() {
  const checkLogin = Taro.getStorageSync('token');
  if (checkLogin) return;

  const wxLoginRes = await wxLogin();
  const wxUserInfo = await wxGetUserInfo();
  if (wxUserInfo.userInfo) {
    Taro.setStorageSync('userInfo', wxUserInfo.userInfo);
    return wxUserInfo;
  }

  console.log('wxLoginRes', wxLoginRes, wxUserInfo);

  // const res = await request({
  //   method: 'GET',
  //   url: '',
  //   data: { code: wxLoginRes.code, userInfo: wxUserInfo }
  // });

  // if (res.errno === 0) {
  //   //存储用户信息
  //   Taro.setStorageSync('userInfo', res.data.userInfo);
  //   Taro.setStorageSync('token', res.data.token);
  //   return res;
  // } else {
  //   Taro.showToast({
  //     title: '登录失败'
  //   });
  //   return;
  // }
}

/**
 * 微信登录
 */
const wxLogin = () => {
  return Taro.login();
};

/**
 * 检查是否登录
 */
const checkLogin = () => {
  return Taro.getStorageSync('token');
};

/**
 * 获取用户信息
 */
const wxGetUserInfo = () => {
  return Taro.getUserInfo({
    lang: 'zh_CN',
    withCredentials: true
  });
};

export { login };
