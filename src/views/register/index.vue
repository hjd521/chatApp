<template>
    <div class="register-wrap">
        <mt-header fixed title="独家招聘-注册页">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="reg-content">
            <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
            <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
            <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
            <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-model="introduction"></mt-field>
            <mt-button type="primary" size="large" @click="confirm">注册</mt-button>
        </div>
    </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        username: '',
        email: '',
        password: '',
        phone: '',
        birthday: '',
        introduction: '',
      }
    },
    methods: {
      confirm() {
        let param = {
          user: this.username,
          email: this.email,
          password: this.password,
          phone: this.phone,
          birthday: this.birthday,
          introduction: this.introduction,
        }
        this.$http('post', '/reg',  {},param).then( (data)=> {
          console.log(data)
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="scss">
    .mint-header.is-fixed {
        height: 80px;
    }
    .reg-content {
        position: absolute;
        top: 80px;
        bottom: 0;
        width: 100%;
        border: 1px solid #cdcdcd;
    }
</style>