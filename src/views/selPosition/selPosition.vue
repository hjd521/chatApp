<template>
    <div class="position-wrapper">
        <mt-header fixed title="选择城市">
            <mt-button slot="right">关闭</mt-button>
        </mt-header>
        <div class="position-title">
            热门城市
        </div>
        <div class="position-item">
            <div class="item" v-for="(item,index) in hotCity">
                <div :class="{active: index === hotIndex}" @click="setHot(index)">{{item}}</div>

            </div>
        </div>
        <div class="position-title">
            ABCDEF
        </div>
        <div class="position-item">
            <div class="item" v-for="(item,index) in aCity">
                <div  :class="{active: index === aIndex}" @click="setA(index)">{{item}}</div>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: '',
    data () {
      return {
        hotIndex: 0,
        hotCity: ['北京','杭州','上海','广州','上海','深圳','南京','苏州','天津'],
        aIndex: '',
        aCity: ['北京','杭州','上海','广州','上海','深圳','南京','苏州','天津']
      }
    },
    methods: {
      setHot (index) {
        this.hotIndex = index
        this.aIndex = ''
        this.setPosition(this.hotCity[index])
        this.$router.back()
      },
      setA (index) {
        this.aIndex = index
        this.hotIndex = ''
        this.setPosition(this.aCity[index])
        this.$router.back()
      },
        ...mapMutations(
            ['setPosition']
        )
    }
  }
</script>

<style lang="scss">
    @import "../../assets/css/config.scss";
    .position-wrapper {
        height: 100%;
        background-color: #fff;
        width: 100%;
        color: $fontColor;
        box-sizing: border-box;
        padding-top: 80px;
        .position-title {
            width: 100%;
            height: 40px;
            border-radius: 20px;
            background-color: #cdcdcd;
            color: $activeBorder;
            line-height: 40px;
            text-align: left;
            box-sizing: border-box;
            padding-left: 20px;
        @include font-dpr(14)
        }
        .position-item {
            width: 100%;
            box-sizing: border-box;
            padding: 20px 15px 10px 15px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: wrap;
            .item {
                width: 235px;
                display: flex;
                margin-bottom: 20px;
                justify-content: center;
                height: 50px;
                div {
                    width: 150px;
                    height: 50px;
                    line-height: 50px;
                    border-radius: 20px;
                    text-align: center;
                    @include font-dpr(12)
                    border: 1px solid #cdcdcd;
                }
                div.active {
                    border: 1px solid $activeBorder;
                }
            }
        }
    }

</style>