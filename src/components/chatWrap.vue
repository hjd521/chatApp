<template>
   <div id="chat-wrap" v-show="show">
       <mt-header :title="person.name" fixed>
           <mt-button icon="back" slot="left" @click="back"></mt-button>
       </mt-header>
       <div class="message-list">
          <div class="person">
            <img :src="person.headUrl">
            <div class="message-info">{{person.username}}</div>
          </div>
           <div class="message-item" v-for='(item,index) in messageList' :key='index'>
               <img src="../assets/img/p2.png">
               <div class="message-info">{{item.fromName + '：' + item.content}}</div>
           </div>
       </div>
       <div class="send-control">
           <mt-field label='' v-model='message' style='flex:1;' @keydown.enter="send"></mt-field>
           <mt-button type="primary" @click='send' >发送</mt-button>
       </div>
   </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        message: '',
        show: false
      }
    },
    props: {
      person: Object,
      messageList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      back () {
        this.show = false
      },
      send(e) {
          this.$emit('message', this.message)
      }
    }
  }
</script>

<style lang="scss">
    #chat-wrap {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        height: 100%;
        /*background-color: gray;*/
        width: 100%;
        box-sizing: border-box;
        padding-top: .8rem;
        .message-list {
           position: absolute;
            top: .8rem;
            bottom: .8rem;
            box-sizing: border-box;
            background-color: #fff;
            width: 100%;
            .message-item {
                width: 100%;
                margin-top: .1rem;
                box-sizing: border-box;
                padding: 0 .2rem;
                align-items: center;
                display: flex;
                flex-direction: row;
                img {
                    width: .6rem;
                    height: .6rem;
                    border-radius: 50%;
                    margin-right: .1rem;
                }
                .message-info {
                    height: auto;
                    flex-wrap: wrap;
                    font-size: .32rem;
                    text-align: left;
                    border: 1px solid #fff;
                }
            }
            .person {
              height: 50px;
              font-size: 30px;
              color: #333;
              align-items: center;
              display: flex;
              img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin-right: 20px;
              }
            }
        }
        .send-control {
            display: flex;
            position: fixed;
            bottom: 0;
            height: .8rem;
            width: 100%;
            background-color: #fff;
            justify-content: space-between;
            input {
                flex: 1;
            }

        }
    }
</style>