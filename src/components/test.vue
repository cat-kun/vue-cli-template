<template>
  <div>
    <span>请求结果看 console 控制台</span>
    <a href="javascript:" class="btn" @click="getData">发送get请求，不带参数</a>
    <a href="javascript:" class="btn" @click="getData2">发送get请求，带参数</a>
    <a href="javascript:" class="btn" @click="getData3">发送post请求，带参数</a>
  </div>
</template>
<script>
import { test, test2, postData } from '@/api/test'

export default {
  name: 'Test',
  data() {
    return {
      form: {
        id: 1,
        name: '张三'
      }
    }
  },
  created() {

  },
  methods: {
    getData() {
      test().then(res => {
        console.log('res1', res);
      })
    },
    getData2() {
      test2(this.form).then(res => {
        console.log('res2', res);
      })
    },
    getData3() {
      postData(this.form).then(res => {
        console.log('res3', res);
      })
    }
  }
}
</script>
<style scoped>
.btn{
  /* width: 100px; */
  float: left;
  margin: 0 10px;
  height: 40px;
  color: #f40;

}
span{
  float: left;
}
</style>
