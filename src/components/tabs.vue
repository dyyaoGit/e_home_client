<template>
  <div class="tabs">
    <router-link class="tabs-item" :class="{active: $route.name === 'index'}" to="/">
      <i class="iconfont icon-dangwugongkai"></i>
      <div class="tabs-title">
        首页
      </div>
    </router-link>
    <router-link class="tabs-item" :class="{active: $route.name === 'zhidao'}" to="/">
      <i class="iconfont icon-xiaoxi"></i>
      <div class="tabs-title">
        通知早知道
      </div>
    </router-link>
    <router-link class="tabs-item" :class="{active: $route.name === 'dangjian'}" to="/">
      <i class="iconfont icon-wode"></i>
      <div class="tabs-title">
        我的党建
      </div>
    </router-link>

  </div>
</template>

<script>
  export default {
    name: 'tabs',
    data() {
      return {

      }
    }
  }
</script>


<style scoped lang="scss">
.tabs {
  border-top: 1px solid #f1f1f1;
  color: #aaa;
  height: 1.12rem;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #fafbfe;

  .tabs-item {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
  .iconfont {
    font-size: 22px;
  }
}
.active {
  border-top: 2px solid #c7000a;
  color: #c7000a;
}
</style>
