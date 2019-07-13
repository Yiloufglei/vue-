<template>
  <div id="partyMember"></div>
</template>
<script>
  const echarts = require('echarts')
  export default {
    name: 'partyMember',
    data () {
      return {}
    },
    methods: {
      init () {
        let myChart = echarts.init(document.getElementById('partyMember'))
        let partyJson = {
          // 'all': 8,
          'charts': {
            "软件产业园":5,
            '外高桥项目': 6,
            '合肥瑶海项目': 6,
            '梅溪湖创新中心': 3,
            '海科兴项目': 3,
            "创客空间":1,
            '泸州航空航天': 3,
            '丽泽中心项目': 5
          }
        }
        const option = {
          tooltip: {},
          grid: {
            left: '2%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLine: {
              lineStyle: {
                color: '#267a95'
              }
            },
            axisLabel: {
              show: true
            },
            max: partyJson.all,
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          },
          yAxis: {
            type: 'category',
            data: Object.keys(partyJson.charts),
            axisLine: {
              lineStyle: {
                color: '#267a95'
              }
            },
            axisTick: {
              show: false
            }
          },
          textStyle: {
            color: '#3cd1fa'
          },
          legend: {
            show: false,
            left: 0,
            top: 0,
            bottom: 0,
            right: 0
          },
          series: [
            {
              name: '分布情况',
              type: 'bar',
              barWidth: 12,
              color: '#3cd1fa',
              stack: 'chart',
              z: 3,
              label: {
                normal: {
                  position: 'right',
                  show: true
                }
              },
              data: Object.keys(partyJson.charts).map(function (key) {
                return partyJson.charts[key]
              })
            },
            {
              type: 'bar',
              stack: 'chart',
              silent: true,
              itemStyle: {
                normal: {
                  color: '#122b39'
                }
              },
              data: Object.keys(partyJson.charts).map(function (key) {
                return partyJson.all - partyJson.charts[key]
              })
            }
          ]
        }
        myChart.setOption(option)
      }
    },
    mounted () {
      this.init()
    }
  }
</script>
<style lang="scss">
  #partyMember {
    width: 100%;
    margin-top: -40px;
    height: calc(100% - 20px);
  }
</style>
