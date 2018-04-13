<template>
  <div class="container">
    <div class="login">
      <div class="logo-wrap">
        <img src="../assets/logo.png">
      </div>
      <form @submit.prevent class="form">
        <div class="input-wrap">
          <input type="text" v-model="formData.userName" placeholder="身份证号">
        </div>
        <div class="input-wrap">
          <input type="password" v-model="formData.pwd" placeholder="密码">
        </div>
        <div class="input-wrap">
          <mt-button size="large" class="btn">登录</mt-button>
        </div>
      </form>

    </div>

  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        formData: {
          userName: '',
          pwd: ''
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../style/login.scss';

</style>
<style lang="scss">
  .login .mint-button {
    font-size: 14px;
    color: #fff;
  }
  .login{
    .btn {
      background: #e43228;
    }
  }
</style>
