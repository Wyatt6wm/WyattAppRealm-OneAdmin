const loginActive = false
const getProfileActive = false

// 登录接口
export function login() {
  const data = {
    succ: true,
    mesg: null,
    data: {
      token: '77ae89be36504adfb5c09ef71409ea0e',
      avatar: ''
    }
  }
  return {
    apiActive: loginActive,
    url: '/login',
    type: 'post', // 必须要小写
    data
  }
}

// 获取个人信息接口
export function getProfile() {
  const data = {
    succ: true,
    mesg: null,
    data: {
      name: 'hahaha',
      avatar:
        'https://img.touxiangwu.com/uploads/allimg/2022010122/byxatb4bthd.jpg'
    }
  }
  return {
    apiActive: getProfileActive,
    url: '/getProfile',
    type: 'get', // 必须要小写
    data
  }
}
