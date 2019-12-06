import Taro from '@tarojs/taro';
import * as AuthApi from '../service/authService';

export default {
  namespace: 'common',
  state: {
    accessToken: Taro.getStorageSync('accessToken'),
    userInfo: Taro.getStorageSync('userInfo')
  },

  effects: {
    *add({ payload }, { call, put }) {
      console.log('model common');
    },
    *login({ payload }, { call, put }) {
      const res = yield call(AuthApi.login, { payload });
      console.log('res', res);

      // if (res.errno === 0) {
      //   yield put({
      //     type: 'save',
      //     payload: {
      //       topData: res.data // 模拟
      //     }
      //   });
      // }
    }
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    }
  }
};
