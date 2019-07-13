<template>
  <!--3d地图组件-->
  <div class="map3D" id="my3D"></div>
</template>

<script>
  import echarts from 'echarts';
  import axios from "axios"
  import 'echarts-gl';
  let myChart
  export default {
    name: 'map3D',
    data () {
      return {}
    },
    methods: {
      getRandomData(mapData){
        let arr = []
        const len = mapData.length - 1
        let indexMap = {}
        let mathIndex = ''
        let selectItem = {}
        for(let i = 0; i < 3;i++){
          mathIndex = parseInt(Math.random() * len)
          if(indexMap[mathIndex]){
            continue
          }else {
            indexMap[mathIndex] = 1
            selectItem = mapData[mathIndex].properties
            arr.push({name:selectItem.name,value:selectItem.center.concat(5)})
          }
        }
        return arr
      },
      initChart(mapData,item){
        let geoCoordMap = {};
        echarts.registerMap(item.mapName, mapData);
        //随机获取一些点来显示点
        const scatterData = this.getRandomData(mapData.features)
        const barData = this.getRandomData(mapData.features)
        console.log(scatterData,barData,'data')
        const option = {
          title: {show:false},
          tooltip: {show: true,
            // formatter:(params)=>{
            //   let data = "测试1:"+params.name + "<br/>"+"值:"+ params.value[2]+"<br/>"+"地理坐标:[" + params.value[0]+","+params.value[1] +"]";
            //   return data;
            // },
          },
          geo3D: {
            left:0,
            right:0,
            top:0,
            bottom:20,
            map: item.mapName,
            roam: true,
            itemStyle: {
              color:'#0c3946',
              opacity: 0.8,
              borderWidth: 0.4,
              borderColor: '#02cae8'
            },
            label: {show: false},
            emphasis: { //当鼠标放上去  地区区域是否显示名称
              label: {
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize: 3,
                  backgroundColor: 'rgba(0,23,11,0)'
                }
              }
            },
            shading: 'realistic',
            light: { //光照阴影
              main: {
                color: '#fff', //光照颜色
                intensity: 1.2, //光照强度
                // shadowQuality: 'high', //阴影亮度
                shadow: false, //是否显示阴影
                alpha: 55,
                beta: 10
              },
              ambient: {
                intensity: 0.3
              }
            },
            viewControl: {
              alpha: 40,
              autoRotate: true,
              autoRotateAfterStill: 10
            }
          },
          series: [
            // {
            //   type: 'map3D',
            //   left:0,
            //   right:0,
            //   top:0,
            //   bottom:0,
            //   map: item.mapName,
            //   room: true,
            //   itemStyle: {
            //     color:'#0c3946',
            //     opacity: 0.8,
            //     borderWidth: 0.4,
            //     borderColor: '#0694ab'
            //   },
            //   label: {show: false},
            //   emphasis: { //当鼠标放上去  地区区域是否显示名称
            //     label: {
            //       show: true,
            //       textStyle: {
            //         color: '#fff',
            //         fontSize: 3,
            //         backgroundColor: 'rgba(0,23,11,0)'
            //       }
            //     }
            //   },
            //   shading: 'realistic',
            //   light: { //光照阴影
            //     main: {
            //       color: '#fff', //光照颜色
            //       intensity: 1.2, //光照强度
            //       // shadowQuality: 'high', //阴影亮度
            //       shadow: false, //是否显示阴影
            //       alpha: 55,
            //       beta: 10
            //     },
            //     ambient: {
            //       intensity: 0.3
            //     }
            //   },
            //   viewControl: {
            //     alpha: 40,
            //     autoRotate: true,
            //     autoRotateAfterStill: 10
            //   }
            // },
            // {
            //   name: 'bar3D',
            //   type: "bar3D",
            //   coordinateSystem: 'geo3D',
            //   barSize: 1, //柱子粗细
            //   shading: 'lambert',
            //   opacity: 1,
            //   symbol:'path://M42.8,340.9v191.7H17.2V353.7V149.2V8.6l345.1,172.5L42.8,340.9z',
            //   symbolSize:20,
            //   bevelSize: 0.3,
            //   label: {
            //     show: false,
            //     formatter: '{b}'
            //   },
            //   data: barData
            // },
            {
              name: 'scatter3D',
              type: "scatter3D",
              coordinateSystem: 'geo3D',
              symbol: 'image://data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAApCAYAAADEZlLzAAACIElEQVRYhe3Uv4vTYBzH8ffzJE3b9NfZVvBQHAQRnAQXkQN7gi6O5yAIgoMHugkOp8vVoZOC+4G4OPoniHcF8RwUDkddRIcTzpOrmrbXpIlDTG1s2ialEYR+phC+eV7P9/s8RGwu1daBKlAn5kigAmwA68C5uDEvsaMy4F1saBAWGzoKmzoaBgtEC2vzsWI+tLG8HbnTkZhICbTzGdJX8oj8QGmFiOMNxERBohxLkDir09kwsD6a5FYPop7QgspDowOYLCtkV8pkV8qkLmWRJQXzdQvzTQv9VhFZVIatNRb1YbKskLlTQpbcBZuP97B3ugDsPzcQaUHyYmbU5keiPix9teDbeepyDpFxS+ydLs4PG/VUahw2FPVhzSd7WO87GA926X4yUY4kyNwu9kAckIMXJSx63/el893GeLiL9aGD8eibCx51QeWwishL7IYdFasDi8BqDxM5SaJvRI5hu+Dn3+DdMgDm23ZUxOvszxgTp1PoNw+QvlZAHlJ7YOtpA0wHoQkXe9WMjHhRvQdZVHAsB21BR1vQcQwbbLfj/qSvz/Gz9nUYUv0bCMTUk0k6L5qYW22SFzKoxzWELrG/WJhbbTovW+g35rDe7UdGvIjNpZozrmhIQiNeJvkR14HFwtp8JQoEfWMMiVQ9oLG8HcUJjUUe1yTY1JBR2NSRICw2JAirxIV4meTqTxzfmZ15di9W7J92NsNm2AybYf8J9gvkErDGNiRHVgAAAABJRU5ErkJggg==',
              symbolSize: 15,
              opacity: 1,
              label: {
                show: false,
                formatter: '{b}'
              },
              itemStyle: {
                color:'#c75385',
                borderWidth: 0,
                opacity:1
              },
              data: scatterData
            }
          ]
        };
        myChart.on("click", (params) => {
          let geoName = params.name,
            flag = false;
          let option = myChart.getOption();
          if (geoName && '' !== geoName) {
            let coord = geoCoordMap[geoName];
            if (coord) {
              flag = true;
              option.geo3D[0].viewControl.alpha = 90;
              option.geo3D[0].viewControl.distance = 0;
              myChart.setOption(option)
            }
          }
          if (!flag) {
            option.geo3D[0].viewControl.alpha = 40;
            option.geo3D[0].viewControl.distance = 100;
            myChart.setOption(option)
            myChart.hideLoading()
          }
        })
        myChart.setOption(option)
        myChart.hideLoading()
      },
      changeMap(item){
        if(myChart){
          myChart.clear()
        }
        myChart = echarts.init(document.getElementById('my3D'));
        myChart.showLoading()
        axios.get(item.url,{}).then(res => {
          this.initChart(res.data,item)
        })
      }
    },
    computed: {},
    mounted:function(){},
    created: function () {}
  }
</script>

<style lang="scss">
  .map3D {
    margin-top: -50px;
    width: 100%;
    height: calc(100% + 50px);
  }
</style>
