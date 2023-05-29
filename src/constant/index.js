// 常量

// ---------- 应用运行有关常量 ----------
const env = 'dev'
export const SERVER =
  env === 'dev' ? 'http://localhost:8000/' : 'http://basic-gateway:8000/'
export const MOCK_ACTIVE = env === 'dev'
// ---------- token有关常量 ----------
// token
export const TOKEN = 'token'
// token时间戳
export const TOKEN_TIMESTAMP = 'tokenTimestamp'
// token超时时长，单位：ms
export const TOKEN_TIMEOUT = 2 * 3600 * 1000 // 2h
// ---------- 组件有关 ----------
// 侧边栏展开
export const SIDEBAR_OPENED = 'sidebarOpened'
// 页面标签列表
export const VIEW_TAG_LIST = 'viewTagList'
