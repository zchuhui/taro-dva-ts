import * as Api from '../service/apiService';
export default {
  namespace: 'account',
  state: {
    account: {
      id: 1
    }
  },
  effects: {
    *load({ payload }, { call, put }) {
      console.log('model account');
      const res = yield call(Api.Demo, { payload });
      if (res.errno === 0) {
        yield put({
          type: 'save',
          payload: {
            topData: res.data // 模拟
          }
        });
      }
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    }
  }
};
