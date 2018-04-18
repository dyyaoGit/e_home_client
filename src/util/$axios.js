import axios from 'axios';
import Vue from 'vue';
import api from './api'
import router from '../router/index'

var xhr = axios.create({
  baseURL: 'http://211.67.177.56:8080',
  timeout: 5000
});

var $axios = {
  get: function(url, params,config) {
    return new Promise((resolve, reject) => {
      xhr.get(api[url], {params: params,config}).then(res => {
        if(res.data.code == 1){
          alert("登陆失败");
          router.push("/login");
        }
        resolve(res.data)
      })
    })
  },
  post(url, params,config){
    return xhr.post(url,params, config)
  }
}

Vue.prototype.$axios = $axios;

