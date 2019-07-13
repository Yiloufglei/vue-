<template>
  <!--渲染普通地图，接受地图路径-->
  <div class="map2D" :class="{active:isSelect}">
    <div class="map" :id="'map' + allData.mapName"></div>
    <div class="title" v-text="allData.title"></div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import axios from "axios"
  export default {
    name: 'map2D',
    props:{
      isSelect:false,
      allData:{}
    },
    data () {
      return {}
    },
    methods: {
      initChart(mapData){
        let myChart = echarts.init(document.getElementById('map' + this.allData.mapName));
        echarts.registerMap(this.allData.mapName, mapData);
        const option = {
          geo: {
            roam: false,
            left:20,
            right:20,
            top:20,
            bottom:20,
            map:this.allData.mapName,
            label: {
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                areaColor: '#066678',
                borderColor: '#404a59'
              },
              emphasis: {
                show:false,
                areaColor: '#01dcfc'
              }
            }
          },
        }
        myChart.setOption(option)
      }
    },
    computed: {},
    mounted:function(){
      axios.get(this.allData.url,{}).then(res => {
        this.initChart(res.data)
      })
    },
    created: function () {

    }
  }
</script>

<style lang="scss">
  .map2D.active{
    background-image: url("../../assets/images/map-select-bg.png");
    background-size: 99% 100%;
  }
  .map2D {
    width: 100%;
    padding: 20px 30px;
    box-sizing: border-box;
    height: 100%;
    .map{
      height: calc(100% - 20px);
    }
    .title{
      text-align: center;
      color: #01dcfc;
      font-size: 14px;
    }
  }
</style>
