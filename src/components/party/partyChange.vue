<template>
    <div id="partyChange"></div>
</template>
<script>
const echarts = require("echarts")
export default {
    name:'partyChange',
    data(){
        return{

        }
    },
    methods:{
        init(){
            let myChart = echarts.init(document.getElementById('partyChange'));
            const option = {
                tooltip: {},
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data:[{value:''},2013,2014,2015,2016,2017,2018],
                    splitLine: {
                        show: true,
                        onZero:true,
                        lineStyle:{
                            color:'#083a46'
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#267a95'
                        }
                    },
                    axisTick: {
                        show: false,
                    }
                },
                yAxis: {
                    type: 'value',
                    splitLine: {
                        show: true,
                        lineStyle:{
                            color:'#083a46'
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#267a95'
                        }
                    },
                    axisTick: {
                        show: false
                    }
                },
                series: [
                    {
                        type: 'line',
                        name:'党员数量变化',
                        stack: 'chart',
                        symbolSize:4,//拐点大小
                        symbol: "circle",
                        itemStyle: {
                            normal: {
                                color:'#0b141c',  // 会设置点和线的颜色，所以需要下面定制 line
                                borderColor: "#3cd1fa"  // 点边线的颜色
                            }
                        },
                        lineStyle: {
                            normal: {
                                color: "#3cd1fa"   // 线条颜色
                            }
                        },
                        z:3,
                        label:{
                            normal: {
                                position: 'top',
                                show: true
                            }
                        },
                        areaStyle: {normal: {
                            color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#067083 '},
                                        {offset: 0.5, color: '#0a3d4a'},
                                        {offset: 1, color: '#0d1923'}
                                    ]
                            )
                        }},
                        data:[{value:'0',label:{show:false},itemStyle:{opacity:0}},2,2,4,233,291,514]
                    }
                ],
                textStyle:{
                    color:'#3cd1fa',
                },
                legend:{
                    show:false,
                    left:0,
                    top:0,
                    bottom:0,
                    right:0
                },
            }
            myChart.setOption(option);
        }
    },
    mounted(){
        this.init()
    }
}
</script>
<style lang="scss">
#partyChange{
    width: 100%;
    height: 100%;
  margin-top: -40px;
}
</style>

