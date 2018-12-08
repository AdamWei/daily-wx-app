import * as types from '../type'

const state = {

  // 用户登录信息
  userInfo:  {}
}

const actions = {
  setUserInfo({ commit }, res) {
    commit(types.SET_USER_INFO, res)
  },
}

const getters = {
  userInfo: state => state.userInfo
}

const mutations = {
  [types.SET_USER_INFO](state, res) {
    state.userInfo = res
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
