// 公共

import api from '@/api'
import { ElMessage } from 'element-plus'

export default {
  namespaced: true,

  // ----------
  // 存储状态的变量
  state: {
    captchaKey: ''
  },

  // ----------
  // mutation翻译：变化
  // 专注于修改state，理论上是修改state的唯一途径，必须同步执行
  mutations: {
    // 存储验证码KEY
    setCaptchaKey(state, key) {
      state.captchaKey = key
    },
    // 退出登录时清除state
    clearStateOnLogout(state) {
      state.captchaKey = ''
    }
  },

  // ----------
  // 业务逻辑代码，可以异步，但不能直接操作state
  // 视图dispatch触发action，action再commit触发mutation
  actions: {
    /**
     * 获取验证码
     * @param {*} context
     * @returns 验证码Base64格式图像
     */
    getCaptcha(context) {
      return api.system
        .getCaptcha()
        .then((res) => {
          if (res.succ) {
            const { captchaKey, captchaImage } = res.data
            context.commit('setCaptchaKey', captchaKey)
            return captchaImage
          }
        })
        .catch(() => {
          ElMessage.error('获取验证码失败')
        })
    }
  }
}
