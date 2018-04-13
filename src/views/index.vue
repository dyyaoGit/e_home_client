<template>
  <div class="container">
    <div class="head-main">
      <div class="header-left">
        <img src="../assets/logo.png" class="header-pic">
      </div>
      <router-link to="/login" class="header-right">
        登录
      </router-link>
    </div>

    <div class="slider">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item,index) in slider" :key="index">
          <div class="slider-wrap">
            <router-link class="slider-wrap" href="/news" to="/news">
              <img :src="item.imgUrl">
              <div class="desc" v-text="item.title"></div>
            </router-link>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <div class="main-menu">
      <div class="menu-row">
        <router-link to="/news">
          <div class="menu-icon-wrap">
            <img src="../assets/icon_01.png">
          </div>
          <div class="menu-title">
            信工新闻眼
          </div>
        </router-link>
        <router-link to="/news">
          <div class="menu-icon-wrap">
            <img src="../assets/icon_01.png">
          </div>
          <div class="menu-title">
            信工新闻眼
          </div>
        </router-link>
        <router-link to="/news">
          <div class="menu-icon-wrap">
            <img src="../assets/icon_01.png">
          </div>
          <div class="menu-title">
            信工新闻眼
          </div>
        </router-link>
      </div>
      <div class="menu-row">
        <router-link to="/news">
          <div class="menu-icon-wrap">
            <img src="../assets/icon_01.png">
          </div>
          <div class="menu-title">
            信工新闻眼
          </div>
        </router-link>
        <router-link to="/news">
          <div class="menu-icon-wrap">
            <img src="../assets/icon_01.png">
          </div>
          <div class="menu-title">
            信工新闻眼
          </div>
        </router-link>
        <router-link to="/news">
          <div class="menu-icon-wrap">
            <img src="../assets/icon_01.png">
          </div>
          <div class="menu-title">
            信工新闻眼
          </div>
        </router-link>
      </div>
    </div>

    <div class="banner">
      <img src="../assets/banner02.png" style="display: block">
    </div>

    <div class="foot-menu">
      <div class="cell-left">

      </div>
      <div class="cell-right">
        <div class="cell-row">
          <router-link to="/one"></router-link>
          <router-link to="/two"></router-link>
        </div>
        <div class="cell-row">
          <router-link to="/two"></router-link>
          <router-link to="/two"></router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  // require styles
  import 'swiper/dist/css/swiper.css'

  export default {
    name: 'index',
    components: {
      swiper, swiperSlide
    },
    data() {
      return {
        slider: [],
        swiperOption: {
          loop: true,
          pagination: '.swiper-pagination',
          autoplay: 0
        }
      }
    },
    methods: {
      getSlider() {
        axios.get("http://211.67.177.56:8080/hhdj/carousel/carouselList.do?type=0").then(res => {
          this.slider = res.data.rows;
        })
      }
    },
    created() {
      this.getSlider();

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>


<style scoped lang="scss">
  @import "../style/index";

</style>
<style>

</style>

