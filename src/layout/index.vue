<template>
  <div class="app-wrapper" :class="[$store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']">
    <sidebar class="sidebar-container" :style="{ backgroundColor: variables.menuBg }"></sidebar>
    <div class="main-container">
      <div class="fixed-header">
        <navbar></navbar>
        <view-tag></view-tag>
      </div>
      <app-main></app-main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import ViewTag from '@/components/ViewTag'
import AppMain from './components/AppMain'
import variables from '@/styles/common/variables.scss'
</script>

<style lang="scss" scoped>
@import '~@/styles/common/mixin.scss';
@import '~@/styles/common/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width #{$sideBarDuration};
}

.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}
</style>
