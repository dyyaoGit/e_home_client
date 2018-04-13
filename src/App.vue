<template>
  <div id="app">
    <mt-header v-if="$route.name!='index'" :title="title">
      <mt-button icon="back" slot="left" @click="$router.back()"></mt-button>
    </mt-header>
    <router-view/>
    <tabs v-if="isShow"></tabs>
  </div>
</template>

<script>
  import tabs from '@/components/tabs'

  export default {
    name: 'App',
    components: {
      tabs
    },
    computed: {
      title() {
        return this.$route.meta.title
      },
      isShow() {
        if(this.$route.name === "login"){
          return false
        }
        else{
          return true
        }
      }
    },
    mounted() {

    }
  }
</script>

<style>
  @import './style/init.css';

  .container {
    padding-top: 45px;
    padding-bottom: 56px;
  }

  .mint-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 998;
    background: #c50206;
    height: 45px;
    padding: 0 23px;
  }
  .mint-header-title {
    font-size: 16px;
    font-weight: 400;
  }
</style>
