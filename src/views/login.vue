<template>
    <div class="login-wrap">
        <mt-header fixed title="独家招聘"></mt-header>
        <div class="info-wrapper">
            <img class="head-img" src="../assets/logo.png"></img>
            <div class="user-name">
                <input type="text" placeholder="请输入用户名" v-model="user">
            </div>
            <div class="user-password">
                <input type="password" placeholder="请输入用户密码" v-model="password">
            </div>
            <div class="edit-wrap">
                <mt-button size="small" @click="login" type="primary" style="margin-right: 50px">登录</mt-button>
                <mt-button size="small" @click="reg" type="primary">注册</mt-button>
            </div>

        </div>
    </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import { Header,Toast } from 'mint-ui'
  export default {
    name: '',
    data () {
      return {
        user: '',
        password: ''
      }
    },
    methods: {
      login () {
        let self = this
        let param = {
          user: this.user,
          password:this.password
        }
        this.$http('post','login',{},param).then((data) => {
          let result = data.data
          if (parseInt(result.code) === 1) {
            Toast({
              message: '登录成功',
              position: 'middle',
              duration: 2000
            })
            self.$router.push('/info')
            localStorage.setItem('user', JSON.stringify(result.data))
          } else if(parseInt(result.code) === 2) {
            self.$router.push({ 
                path: '/setInfo',
                query: {
                  id: result.data.id
                }
              })
              localStorage.setItem('user', JSON.stringify(result.data))
          } else {
            Toast({
              message: '账号或者密码错误',
              position: 'middle',
              duration: 2000
            })
          }
        })
      },
      reg () {
        this.$router.push('/register')
      },
      ...mapMutations(
          ['setUser']
      )
    },
    components: {

    }
  }
</script>

<style lang="scss" scoped>
    @import "../assets/css/config.scss";
    .mint-header.is-fixed {
        height: 80px;
    }
    .head-img {
        width: 200px;
        height: 200px;
        margin-bottom: 20px;
        border-radius: 50%;
    }
    .login-wrap {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        position: relative;
    }
    .info-wrapper {
        position: absolute;
        top: 80px;
        bottom: 0;
        width: 100%;
        border: 1px solid #cdcdcd;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .user-name,.user-password {
        width: 100%;
        margin-bottom: 10px;
        box-sizing: border-box;
        padding: 0 20px;
        height: 60px;
        justify-content: center;
        align-items: center;
    }
    .user-name input {
        width: 100%;
        height: 100%;
        @include font-dpr(16)
        /*font-size: 16Px;*/
        outline:none;
        border-image: none;
        border: none;
        border-bottom: 1px solid #dbdbdb;
    }
    .user-password input {
        width: 100%;
        height: 100%;
        @include font-dpr(16)
        border-image: none;
        outline:none;
        border: none;
        border-bottom: 1px solid #dbdbdb;
    }
    .edit-wrap {
        margin-top: 30px;
        display: flex;
    }
</style>