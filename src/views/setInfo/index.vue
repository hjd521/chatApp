<template>
    <div class="set-info-wrapper">
        <mt-header fixed title="完善信息">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="sel-head">
            <div class="sel-head-title">请选择头像</div>
            <img :src="headImg.filename || ''" alt="" @click="selHead">
        </div>
        <div class="sel-card-id">
            <div class="sel-cardId-title">请选择身份</div>
            <div class="card-id" @click="setCard" v-text="cardId"></div>
        </div>
        <div class="sel-card-id">
            <div class="sel-cardId-title">请选择地点</div>
            <div class="card-id" @click="setPos" v-text="position"></div>
        </div>
        <div class="boss-wrap" v-show="cardId === 'boss'">
            <mt-field label="招聘职位" placeholder="请输入招聘的职位名称" v-model="bState.pos.name" :state="bState.pos.tip"
                      ></mt-field>
            <mt-field label="薪资范围" placeholder="请输入职位的薪资范围" v-model="bState.range.name" :state="bState.range.tip"
                      ></mt-field>
            <mt-field label="工作经验" placeholder="请输入您要求的工作经验" v-model="bState.year.name" :state="bState.year.tip"
                      ></mt-field>
            <mt-field label="招聘要求" placeholder="请输入招聘的要求" rows="5" type="textarea" v-model="bState.req.name" :state="bState.req.tip"
                      ></mt-field>
        </div>
        <div class="normal-wrap" v-show="cardId != 'boss'">
            <mt-field label="求职岗位" placeholder="请输入您的求职岗位" v-model="nState.pos.name" :state="nState.pos.tip"
                      ></mt-field>
            <mt-field label="期望薪资" placeholder="请输入您的期望工资" v-model="nState.range.name" :state="nState.range.tip"
                      ></mt-field>
            <mt-field label="工作经验" placeholder="请输入您的工作经验" v-model="nState.year.name" :state="nState.year.tip"
                      ></mt-field>
            <mt-field label="技能介绍" placeholder="请输入您的基本技能介绍" rows="5" type="textarea" v-model="nState.req.name" :state="nState.req.tip"
                      ></mt-field>
        </div>
        <div class="img-wrapper" v-show="showImg">
            <div class="img-grid">
                <div class="grid-item" v-for="(item,index) in imgs" :key='index'>
                    <img :src="item.filename" alt="" @click="setHead(item)">
                </div>
            </div>
        </div>
        <mt-popup
                v-model="popupVisible"
                position="bottom">
            <mt-picker style="width: 100%;" :slots="slots" @change="onValuesChange"></mt-picker>
        </mt-popup>
        <mt-button type="primary" style="margin-top: 20px;width: 100%" @click="confirmEnter">进入独家招聘</mt-button>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: '',
    data () {
      return {
        bState: {
          pos: {
            name: '',
            tip: '',
          },
          range: {
            name: '',
            tip: ''
          },
          req: {
            name: '',
            tip: ''
          },
          year: {
            name: '',
            tip: ''
          }
        },
        nState: {
          pos: {
            name: '',
            tip: '',
          },
          range: {
            name: '',
            tip: ''
          },
          req: {
            name: '',
            tip: ''
          },
          year: {
            name: '',
            tip: ''
          }
        },
        imgs: [],
        showImg: false,
        headImg: '',
        slots: [
          {values: ['boss', '求职者'], flex: 1,},
        ],
        popupVisible: false, // 控制选择身份的显示
        cardId: '>'
      }
    },
    methods: {
      selHead () {
        this.showImg = true
      },
      setHead (item) {
        this.headImg = item
        this.showImg = false
      },
      onValuesChange (picker) {
        console.log(picker.getValues())
        this.cardId = picker.getValues()[0]
        this.popupVisible = false
      },
      setCard () {
        this.popupVisible = true
      },
      setPos () {
        this.$router.push('/sel')
      },
      confirmEnter () {
        let self = this
        let card = this.cardId === 'boss' ? this.bState : this.nState
        let result = true
        for (let key in card) {
          if (card[key].name === '') {
            card[key].tip = 'error'
            result = false
          } else {
            card[key].tip = 'success'
          }
        }
        if (result) {
          this.$http('put',`/user/${this.$route.query.id}`, {},{
            id: this.$route.query.id, // 用户名
            headUrl: this.headImg.filename,
            identity: this.cardId, //  身份
            location: this.position, // 位置
            pos: card.pos.name, // 职位名称
            range: card.range.name, // 范围
            workLong: card.year.name, // 年限
            skill: card.req.name // 要求
          }).then((data) => {
            if(parseInt(data.data.code) === 1) {
              self.$router.push('/info')
            }
          })
        }

      },
      getHeadImg() {
        this.$http('get', '/user/head').then(data => {
          let result = data.data
          console.log(result)
          if (result.code === 1 && result.success) {
            console.log('cddddrrrr')
            this.imgs = result.data
            this.headImg = result.data[0]
          }
        })
      }
    },
    computed: mapState([
      'position',
      'user'
    ]),
    created() {
      this.getHeadImg()
    }
  }
</script>

<style lang="scss">
    @import "../../assets/css/config.scss";

    .mint-popup {
        width: 100%;
    }

    .mint-cell-wrapper {
        padding: 0;
    }

    .boss-wrap, .normal-wrap {
        text-align: left;
    }

    .set-info-wrapper {
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        padding: 80px 30px 0 30px;

    .sel-head {
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

    .sel-head-title {
    @include font-dpr(16)
    }

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    }
    .sel-card-id {
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

    .sel-cardId-title, .card-id {
    @include font-dpr(16)
    }

    .card-id {
        height: 80px;
        line-height: 80px;
    }

    }

    }
    .mint-header.is-fixed {
        height: 80px;
    }

    .img-wrapper {
        background-color: #ccc;
        position: fixed;
        z-index: 1000;
        top: 80px;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .img-grid {

    .grid-item {
        width: 187.5px;
        height: 187.5px;
        float: left;

    img {
        width: 100%;
        height: 100%;
    }

    }
    }
</style>