<template>
  <div class="container">
    <!--<img :src="img">-->
    <label id="btn-wrap">
      <input type="file" accept="image/jpeg,image/png,image/gif" name="file" id="file-input">
      <i class="iconfont icon-jiahao"></i>
    </label>
    <input type="date">
  </div>
</template>

<script>
  import axios from 'axios'
  import qiniu from '../util/qiniu'
  import vueUpload from 'vue-core-image-upload';
  export default {
    name: "qiniuSDK",
    components: {
      vueUpload
    },
    data() {
      return {
        isInit: false,   //是否已经初始化了七牛的上传的SDK
        token: "",
        img: "",
        data: {
          token: ""
        }
      }
    },
    methods: {
      getToken() {
        axios.get("http://up.yaojunrong.com/getToken").then(res => {
          this.token = res.data.data;
          this.data.token = res.data.data;

          if(!this.isInit){
            qiniu({
              container: "btn-wrap",
              button: "file-input",
              token: this.token
            },(data) => {
              console.log(data)
              this.img = data.url;
            })
            this.isInit = true;
          }


        })
      },
      imageuploaded(data) {
        console.log(data)
      }
    },
    created() {
      this.getToken();
    }
  }
</script>

<style scoped>
  #file-input {
    display: none;
  }
  #btn-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 4px;
    border: 1px dashed #bbb;
  }
  .icon-jiahao {
    font-size: 25px;
    color: #000;
  }

</style>
