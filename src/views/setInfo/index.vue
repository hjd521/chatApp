<template>
    <div class="set-info-wrapper">
        <mt-header fixed title="完善信息"></mt-header>
        <mt-cell title="选择头像"  is-link ></mt-cell>
        <mt-cell title="选择身份"  is-link></mt-cell>
        <div class="boss-wrap">
            <mt-field label="招聘职位" placeholder="请输入招聘的职位名称" v-model="position"></mt-field>
            <mt-field label="薪资范围" placeholder="请输入招聘的职位名称" v-model="range"></mt-field>
            <mt-field label="招聘要求" placeholder="请输入招聘的职位名称" v-model="req"></mt-field>
        </div>
        <div class="normal-wrap">
            <mt-field label="求职岗位" placeholder="请输入您的求职岗位" v-model="nPosition"></mt-field>
            <mt-field label="期望薪资" placeholder="请输入您的期望工资" v-model="nRange"></mt-field>
            <mt-field label="技能介绍" placeholder="请输入您的基本技能介绍" v-model="nReq"></mt-field>
        </div>
        <div class="img-wrapper" v-show="showImg">
            <div class="img-grid">
                <div class="grid-item" v-for="(item,index) in imgs">
                    <img :src="item" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 import p1 from '../../assets/img/p1.png'
 import p2 from '../../assets/img/p2.png'
 import p3 from '../../assets/img/p3.png'
 import p4 from '../../assets/img/p4.png'
 import p5 from '../../assets/img/p5.png'
 import p6 from '../../assets/img/p6.png'
 import p7 from '../../assets/img/p7.png'
 import p8 from '../../assets/img/p8.png'
 import p9 from '../../assets/img/p9.png'
 import p10 from '../../assets/img/p10.png'
 import p11 from '../../assets/img/p11.png'
 import p12 from '../../assets/img/p12.png'
 import p13 from '../../assets/img/p11.png'
 import p14 from '../../assets/img/p12.png'
 import p15 from '../../assets/img/p11.png'
 import p16 from '../../assets/img/p12.png'

  export default {
    name: '',
    data () {
      return {
        position: '',
        range: 0,
        req: '',
        nPosition: '',
        nRange: 0,
        nReq: '',
        imgs: [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16],
        showImg: false
      }
    },
    methods: {
      selHead () {
        this.showImg = true
      }
    }
  }
</script>

<style lang="scss">
    .set-info-wrapper {
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        padding-top: 80px;
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