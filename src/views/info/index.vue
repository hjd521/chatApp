<template>
    <div class="info-wrapper">
        <mt-header fixed title="信息列表"></mt-header>
        <div class="content">
            <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :top-method="loadTop">
                <ul class="scroll-content">
                    <li v-for="item in list">{{ item }}</li>
                </ul>
            </mt-loadmore>
        </div>
        <div class="footer" @click="tabChange($event)">
            <div class="boss" data-index ="1" :class="{act: activeindex == 1}">
                <img src="../../assets/img/boss.png" alt="">
                <div>boss</div>
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
    </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        activeindex: 1,
        allLoaded: false,
        selected: '1',
        list: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1]
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
      }

    },
    components: {
    }
  }
</script>

<style lang="scss" scoped>
    @import '../../assets/css/config.scss';
    .mint-header {
        height: 80px;
    }
    .info-wrapper {
        height: 100%;
        .content {
            position: absolute;
            top: 80px;
            bottom: 120px;
            left: 0;
            right: 0;
            overflow-y: auto;
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