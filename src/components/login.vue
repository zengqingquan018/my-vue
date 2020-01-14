<template>
  <div>
    <input type="text" v-model="loginForm.username" placeholder="用户名"/>
    <input type="text" v-model="loginForm.password" placeholder="密码"/>
    <button @click="login">登录</button>
  </div>
</template>
 
<script>
import { mapMutations } from 'vuex';
export default {
  data () {
    return {
      loginForm: {
        username: 'test',
        password: 'test'
      }
    };
  },
 
  methods: {
    ...mapMutations(['changeLogin']),
    async login () {
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        alert('账号或密码不能为空');
        return
      } 
      try{
        const result =await this.$root.Api.login({...this.loginForm});
        const resData = result.data;
        if(this.$root.Utils.checkResult(result)){
          console.log('1231',result.data);
          //this.userToken = 'Bearer ' + result.data.data.body.token;
          // 将用户token保存到vuex中
          //this.changeLogin({ Authorization: this.userToken });
          this.$router.push('/HelloWorld');
          // alert('登陆成功');
          this.$message.success('hello world')
        }
      }catch(e){
        alert('账号或密码错误');
        console.log(e);
      }
    }
  }
};
</script>