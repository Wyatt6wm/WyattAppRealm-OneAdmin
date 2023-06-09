<template>
  <ul class="context-menu-container">
    <li @click="onRefreshClick">
      刷新
    </li>
    <li @click="onCloseAllClick">
      全部关闭
    </li>
    <li @click="onCloseRightClick">
      关闭右侧
    </li>
    <li @click="onCloseOtherClick">
      关闭其他
    </li>
  </ul>
</template>

<script setup>
/**
 * 说明：
 * 标签页右键菜单，实现了刷新、删除右侧菜单、删除其他菜单功能
 * index：当前标签页在列表中的下标，Number，必填
 * path: 当前标签页的路由路由路径，String，必填
 */
import { defineProps } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { getViewTagIndexByPath } from '@/utils/common'

const router = useRouter()
const route = useRoute()
const store = useStore()

const props = defineProps({
  index: {
    type: Number,
    required: true
  },
  tagPath: {
    type: String,
    required: true
  }
})

const onRefreshClick = () => {
  router.go(0)
}

const onCloseAllClick = () => {
  store.dispatch('viewSettings/removeViewTags', { mode: 'all' })
  router.push('/')
}

const onCloseRightClick = () => {
  // 如果激活页面标签在当前页面标签的右边，则跳转到该当前页面
  const activeIndex = getViewTagIndexByPath(store.getters.viewTagList, route.path)
  store.dispatch('viewSettings/removeViewTags', { mode: 'right', index: props.index })
  if (activeIndex > props.index) {
    router.push(props.tagPath)
  }
}

const onCloseOtherClick = () => {
  store.dispatch('viewSettings/removeViewTags', { mode: 'other', index: props.index })
  // 如果在未激活的页面标签关闭其他标签，则跳转到该标签的页面
  if (!(props.tagPath === route.path)) {
    router.push(props.tagPath)
  }
}
</script>

<style lang="scss" scoped>
.context-menu-container {
  position: fixed;
  background: #fff;
  z-index: 3000;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);

  li {
    margin: 0;
    padding: 7px 16px;
    cursor: pointer;

    &:hover {
      background: #eee;
    }
  }
}
</style>
