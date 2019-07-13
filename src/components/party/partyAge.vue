<template>
  <div class="partyAge">
    <div :id="itemName" class="chart"></div>
    <div class="title">
      <div class="top-flag" :style="{'background-color':allData.colorConfig[0]}"></div>
      <div class="title-text" v-text="allData.showItemText"></div>
    </div>
  </div>
</template>
<script>
  const echarts = require('echarts')
  export default {
    name: 'partyAge',
    data () {
      return {}
    },
    props: {
      allData: {},
      itemName:''
    },
    methods: {
      init () {
        let myChart = echarts.init(document.getElementById(this.itemName))
        const option = {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          series: [
            {
              name: '党员年龄',
              type: 'pie',
              radius: ['70%', '85%'],
              hoverAnimation:false,
              avoidLabelOverlap: false,
              itemStyle: {
                normal: {
                  color: this.allData.colorConfig[0]
                },
              },
              label: {
                normal: {
                  show: true,
                  position: 'center',
                  fontSize:'16',
                  fontWeight:'bold',
                  color:'#01dcfc',
                  formatter:function(a,b){
                    return a.data.value
                  }
                },
                emphasis: {
                  show: true,

                  textStyle: {
                    fontSize: '16',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false,
                }
              },
              data: [
                {name: this.allData.showItemText,value: this.allData.value}
              ]
            },
            {
              type: 'pie',
              radius: ['63.8%', '65%'],
              hoverAnimation:false,
              avoidLabelOverlap: false,
              itemStyle: {
                normal: {
                  color: this.allData.colorConfig[0]
                },
              },
              label: {
                normal: {
                  show: true,
                  position: 'center',
                  fontSize:'16',
                  fontWeight:'bold',
                  color:'#01dcfc',
                  formatter:function(a,b){
                    return a.data.value
                  }
                },
                emphasis: {
                  show: true,

                  textStyle: {
                    fontSize: '16',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false,
                }
              },
              data: [
                {name: this.allData.showItemText,value: this.allData.value}
              ]
            }
          ],
          legend: {
            show: false,
            left: 0,
            top: 0,
            bottom: 0,
            right: 0
          },
        }
        myChart.setOption(option)
      }
    },
    mounted () {
      this.$nextTick(()=>{
        this.init()
      })
    }
  }
</script>
<style lang="scss">
  .partyAge {
    height: 30%;
    width: 50%;
    display: flex;
    .chart{
      flex: 1 1 auto;
    }
    .title{
      position: relative;
      flex: 0 0 92px;
      background-image: url("../../assets/images/age-title-bg.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: left bottom;
      margin-bottom: 10px;
      .title-text{
        position: absolute;
        color: #01dcfc;
        font-size: 14px;
        bottom: 22px;
      }
      .top-flag{
        width: 14px;
        height: 2px;
        position: absolute;
        left: 0;
        bottom: 42px;
      }
    }
  }
</style>
