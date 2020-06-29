<template>
    <div class="info-wrapper">
        <mt-header fixed title="牛人列表"></mt-header>
        <div class="content">
            <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :top-method="loadTop">
                <div class="job-seeker" @click="showMessage(item)" v-for='(item,index) in addressList' :key='index'>
                    <div class="left">
                        <div class="title">{{item.location || '--'}}</div>
                        <div class="education">
                            <span>{{item.pos || '--'}}</span><span>  {{item.workLong || '暂无'}}</span>
                        </div>
                        <div class="name">
                            <img src="../../assets/img/p1.png" alt="">
                            <span>{{item.username}}</span>
                        </div>
                    </div>
                    <div class="right">
                        {{item.range}}
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
        <msg-list ref="message" :person="item" @message='sendMessage' :messageList='messageList'></msg-list>
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
                list: [],
                addressList: [], // 聊天人列表
                item: {}, // 聊天信息人
                ws: '',
                messageList: []
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
            // 展示消息弹框
            showMessage (item) {
                this.item = item
                this.$refs.message.show = true
            },
            // 发送消息
            sendMessage(text) {
                let user = JSON.parse(localStorage.getItem('user'))
                let message = {
                    from: user.id,
                    fromName: user.username,
                    to: this.item.id,
                    toName: this.item.username,
                    content: text
                }
                console.log(message)
                this.ws.send(JSON.stringify(message))
            },
            getAddressList() {
                this.$http('get', '/getContact').then(data => {
                    let result = data.data
                    if (result.code === 1) {
                        this.addressList = result.data
                    }
                })
            }
        },
        components: {
            msgList
        },
        mounted () {
            let self = this
            this.ws.onmessage= function(e) {
               let data = JSON.parse(e.data)
               self.messageList.push(data)
            }
        },
        created () {
            let self = this
            if(window.WebSocket) {
                this.ws = new WebSocket('ws://localhost:3000');
                this.ws.onopen = function(e) {
                    console.log('websocket链接打开')
                }
            }
            this.getAddressList()
        },
        bereDestory() {
            this.ws.close()
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
                height: 220px;
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
                        @include font-dpr(14);
                        color: #333;
                    }
                    .education {
                    @include font-dpr(12);
                    color: #666;
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
                @include font-dpr(14);
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