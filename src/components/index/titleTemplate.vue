<template>
  <!--标题组件-->
  <div class="titleTemplate">
    <div class="main-title">
      <div class="title-text" v-text="title"></div>
      <div class="units">
        <div class="unit" v-for="(item,index) in units" :key="index" v-text="item"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'titleTemplate',
    props:{
      title:{
        required:true
      },
      units:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data () {
      return {}
    },
    methods: {},
    computed: {},
    created: function () {
    }
  }
</script>

<style lang="scss">
  .titleTemplate {
    .main-title{
      width: 100%;
      position: relative;
      background: url(../../assets/images/head.png) left center no-repeat;
      height: 50px;
      .title-text{
        text-indent:75px;
        font-size: 16px;
        color: #ffffff;
      }
      .units{
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: 12px;
        color: #3cd1fa;
        .unit{
          display: inline-block;
          margin-right: 26px;
          &:last-child{
            margin-right: 0;
          }
        }
      }
    }
  }
</style>
