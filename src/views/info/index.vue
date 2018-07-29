<template>
    <div class="info-wrapper">
        <mt-header fixed title="牛人列表"></mt-header>
        <div class="content">
            <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :top-method="loadTop">
                <div class="job-seeker" @click="showMessage">
                    <div class="left">
                        <div class="title">前端开发工程师</div>
                        <div class="education">
                            <span>本科</span><span>3年工作经验</span>
                        </div>
                        <div class="name">
                            <img src="../../assets/img/p1.png" alt="">
                            <span>侯建东</span>
                        </div>
                    </div>
                    <div class="right">
                        15-25k
                    </div>
                </div>
            </mt-loadmore>
        </div>
        <div class="footer" @click="tabChange($event)">
            <div class="boss" data-index ="1" :class="{act: activeindex == 1}">
                <img src="../../assets/img/boss.png" alt="">
                <div>牛人</div>
            </div>
            <div class="message" data-index="2" :class="{act: activeindex == 2}">
                <img src="../../assets/img/message.png" alt="">
                <div>消息</div>
            </div>
            <div class="me" data-index="3" :class="{act: activeindex == 3}">
                <img src="../../assets/img/me.png" alt="">
                <div>我</div>
            </div>
        </div>
        <msg-list ref="message" :person="item"></msg-list>
    </div>
</template>

<script>
    import p1 from '../../assets/img/p1.png'
    import io from 'socket.io-client'
    import msgList from '../../components/chatWrap.vue'
  export default {
    name: '',
    data () {
      return {
        activeindex: 1,
        allLoaded: false,
        selected: '1',
        list: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1],
        item: {}
      }
    },
    methods: {
      loadTop () {
        console.log('top')
      },
      loadBottom () {
        let bottom = this.$el.getBoundingClientRect().bottom
            console.log(bottom)
          },
      tabChange (e) {
        this.activeindex = e.target.parentNode.getAttribute('data-index')
      },
      showMessage () {
        this.item.name = 'hjd'
        this.item.headImg = p1
        this.$refs.message.show = true
      }
    },
    components: {
      msgList
    },
    sockets:{
      connect: function(){
        console.log('io,sucess')
      },
      news: function(val){
        console.log(val)
      }
    },
    mounted () {
        this.id=this.$socket.id
        console.log(this.id)
    },
    created () {
      this.$socket.emit('my other event', { my: 'data' });
    }
  }
</script>

<style lang="scss" scoped>
    @import '../../assets/css/config.scss';
    .mint-header {
        height: 80px;
    }
    .info-wrapper {
        background-color: #f6f6f6;
        height: 100%;
        .content {
            position: absolute;
            top: 80px;
            bottom: 120px;
            left: 0;
            right: 0;
            overflow-y: auto;
            .job-seeker {
                height: 200px;
                background-color: #fff;
                margin-bottom: 10px;
                width: 100%;
                box-sizing: border-box;
                display: flex;
                padding: 20px 20px;
                .left {
                    flex: 1;
                    text-align: left;
                    .title {
                        @include font-dpr(16)
                    }
                    .education {
                    @include font-dpr(14)
                    }
                    .name {
                        width: 100%;
                        height: 80px;
                        display: flex;
                        align-items: center;
                        line-height: 80px;
                        @include font-dpr(14);
                        img {
                            width: 80px;
                            border-radius: 50%;
                            margin-right: 30px;
                            height: 100%;
                        }
                    }
                }
                .right {
                @include font-dpr(14)
                    width: 150px;
                    height: 100%;
                    line-height: 160px;
                }
            }
        }
        .footer {
            height: 120px;
            border-top: 1px solid #cdcdcd;
            position: absolute;
            bottom: 0;
            left:0;
            right: 0;
            display: flex;
            flex-direction: row;
            @include font-dpr(14)
            color: #cdcdcd;
            .act {
                color: dodgerblue;
            }
            .boss {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                img {
                    width: 80px;
                    height: 60px;
                }
            }
            .message {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                img {
                    width: 80px;
                    height: 60px;
                }
            }
            .me {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                img {
                    width: 80px;
                    height: 60px;
                }
            }
        }
    }

</style>