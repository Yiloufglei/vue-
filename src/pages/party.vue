<template>
  <div class="page party">
    <Header/>
    <div class="container">
      <div class="container-box box-left">
        <div class="party-count chart">
          <titleT :title="'党员数量分布情况'" :units="['(单位：个)']"></titleT>
          <partyMember></partyMember>
        </div>
        <div class="party-count chart">
          <titleT :title="'党员学历水平分布'" :units="['(单位：%)']"></titleT>
          <partyEducation></partyEducation>
        </div>
        <div class="party-count chart">
          <titleT :title="'党员人口年龄结构'"></titleT>
          <div class="party-age-box">
            <partyAge :all-data="item" v-for="(item,index) in ageDataList" :key="index" :item-name="'age' + index"></partyAge>
          </div>
        </div>
      </div>
      <div class="container-box box-center">
        <div class="container-top">
          <div class="data-box"><span class="title">党委</span><span class="value titleff">11</span></div>
          <div class="data-box"><span class="title">党支部</span><span class="value titleff">22</span></div>
          <div class="data-box"><span class="title">党员</span><span class="value titleff">387</span></div>
        </div>
        <div class="map-container"><div class="map-title" v-text="selectItem.title"></div>
          <map3D ref="map3D"></map3D>
        </div>
        <div class="container-bottom">
          <div class="bottom-chart-box" :class="{acitve:selectIndex == index}" v-for="(item,index) in mapList" @click="changeSelect(index)" :key="index">
            <map2D :all-data="item" :isSelect="selectIndex == index"></map2D>
          </div>
        </div>
      </div>
      <div class="box-right container-box">
        <div class="party-count chart">
          <titleT :title="'党员数量变化情况'" :units="['纵轴(单位：个)','横轴(单位：年)']"></titleT>
          <partyChange></partyChange>
        </div>
        <div class="party-count chart">
          <titleT :title="'党建平台活跃度'" :units="['(单位：人)']"></titleT>
          <partyBuilding></partyBuilding>
        </div>
        <div class="party-count chart">
          <titleT :title="'党费缴纳情况'" :units="['纵轴(单位：万元)','横轴(单位：年)']"></titleT>
          <partyPayment></partyPayment>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import titleT from '../components/index/titleTemplate'
  import partyMember from '../components/party/partyMember'
  import partyEducation from '../components/party/partyEducation'
  import partyAge from '../components/party/partyAge'
  import partyChange from '../components/party/partyChange'
  import partyBuilding from '../components/party/partyBuilding'
  import partyPayment from '../components/party/partyPayment'
  import map3D from '../components/party/map3D'
  import map2D from "../components/party/map2D"
  export default {
    name: 'party',
    components: {
      Header,titleT,partyMember,map3D,partyEducation,partyAge,partyChange,partyBuilding,partyPayment,map2D
    },
    data () {
      return {
        mapList:[
          {url:'/static/mapJson/dalian.json',mapName:'dalian',title:'大连支部地图'},
          {url:'/static/mapJson/wuhan.json',mapName:'wuhan',title:'武汉支部地图'},
          {url:'/static/mapJson/suzhou.json',mapName:'suzhou',title:'苏州支部地图'},
          {url:'/static/mapJson/shanghai.json',mapName:'shanghai',title:'上海支部地图'},
          {url:'/static/mapJson/changsha.json',mapName:'changsha',title:'长沙支部地图'}
        ],
        ageDataList:[
          {colorConfig:['#c75386'],value:0,showItemText:'<20(岁)'},
          {colorConfig:['#018ffb'],value:187,showItemText:'20-30(岁)'},
          {colorConfig:['#acd598'],value:215,showItemText:'30-40(岁)'},
          {colorConfig:['#504fa6'],value:61,showItemText:'40-50(岁)'},
          {colorConfig:['#28e0c8'],value:16,showItemText:'50-60(岁)'},
          {colorConfig:['#01dcfc'],value:3,showItemText:'>60(岁)'}
        ],
        selectIndex:0
      }
    },
    methods:{
      changeSelect(index){
        this.selectIndex = index
        this.$refs.map3D.changeMap(this.selectItem)
      },
      //自动切换地图展示
      autoChangeSelect(){
        if(this.selectIndex == this.mapList.length - 1){
          this.selectIndex = 0
        }else {
          this.selectIndex = ++this.selectIndex
        }
        this.$refs.map3D.changeMap(this.selectItem)
      }
    },
    mounted:function(){
      this.$nextTick(()=>{
        this.$refs.map3D.changeMap(this.selectItem)
      })
      // setInterval(()=>{
      //   this.autoChangeSelect()
      // },10000)
    },
    computed:{
      selectItem(){
        return this.mapList[this.selectIndex]
      }

    }
  }
</script>

<style lang="scss">
  .page.party{
    height: 100%;
    .container{
      height: 100%;
      padding: 0 30px;
      padding-top: 90px;
      display: flex;
      justify-content: space-around;
      .container-box{
        display: flex;
        flex-direction: column;
        .party-count{
          height: 31.25%;
        }
        .party-age-box{
          height: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
        }
      }
      .box-left{
        flex: 0 0 23.33%;
      }
      .box-center{
        flex: 0 0 50%;
        .container-top{
          display: flex;
          justify-content: center;
          height: 81px;
          margin-bottom: 35px;
          .data-box{
            background-image: url("../assets/images/big-data-bg.png");
            background-size: cover;
            flex: 0 0 32.5%;
            padding: 20px 10px;
            &:nth-child(2){
              margin: 0 1.25%;
            }
            .title{
              font-size: 16px;
              color: #fff;
            }
            .value{
              float: right;
              font-size: 40px;
              color: #01dcfb;
            }
          }
        }
        .map-container{
          background-image: url("../assets/images/map-bg.png");
          background-size: cover;
          height: 60.29%;
          margin-bottom: 20px;
          padding: 20px;
          .map-title{
            background-image: url("../assets/images/map-title.png");
            background-size: cover;
            font-size: 12px;
            color: #3cd1fa;
            width: 180px;
            height: 28px;
            display: flex;
            align-items:center;
            padding-left: 10px;
          }
        }
      }
      .box-right{
        flex: 0 0 23.33%;
      }
      .container-bottom{
        display: flex;
        height: 20.23%;
        justify-content: space-around;
        .bottom-chart-box{
          background-color: #0a1820;
          cursor: pointer;
          flex:0 0 19.5%;
          &.acitve{
            pointer-events: none;
          }
        }
      }
    }
  }
</style>

