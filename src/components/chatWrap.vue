<template>
   <div id="chat-wrap" v-show="show">
       <mt-header :title="person.name" fixed>
           <mt-button icon="back" slot="left" @click="back"></mt-button>
       </mt-header>
       <div class="message-list">
           <div class="message-item">
               <img :src="person.headImg">
               <div class="message-info">我们</div>
           </div>
       </div>
       <div class="send-control">
           <input type="text">
           <mt-button type="primary">发送</mt-button>
       </div>
   </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
         show: false
      }
    },
    props: {
      person: Object
    },
    methods: {
      back () {
        this.show = false
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