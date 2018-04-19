<template>
  <div class="container">
    <input type="file" name="file" accept="image/jpeg,image/png" @change="up">
    <img :src="img" v-if="img">
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "ajaxUp",
    data() {
      return {
        token: '',
        img: ""
      }
    },
    methods: {
      up($event) {
        console.log($event)
        var file = $event.target.files[0];

        var form = new FormData();
        form.append("file", file);
        form.append("token", this.token);

        axios.post("https://upload-z1.qiniup.com", form, {
          headers: {"Content-Type": "multipart/form-data"}
        }).then(res => {
          console.log(res)
          this.img = res.data.url;
        })

      },
      getToken() {
        axios.get("http://up.yaojunrong.com/getToken").then(res => {
          this.token = res.data.data;
        })
      }
    },
    created() {
      this.getToken();
    }
  }
</script>

<style scoped>

</style>
