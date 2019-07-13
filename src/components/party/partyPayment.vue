<template>
    <div id="partyPayment"></div>
</template>
<script>
const echarts = require("echarts")
export default {
    name:'partyPayment',
    data(){
        return{

        }
    },
    methods:{
        init(){
            let myChart = echarts.init(document.getElementById('partyPayment'));
            const option = {
                tooltip: {show:true},
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data:[{value:''},'2013','2014','2015','2016','2017','2018'],
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
                        name:'党员缴费情况',
                        stack: 'chart',
                        symbolSize:4,//拐点大小
                        symbol: "circle",
                        z:3,
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
                        label:{
                            normal: {
                                position: 'top',
                                show: true
                            }
                        },
                        areaStyle: {normal: {
                            //渐进色
                            color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#067083 '},
                                        {offset: 0.5, color: '#0a3d4a'},
                                        {offset: 1, color: '#0d1923'}
                                    ]
                            )
                        }},
                        data:[{value:0,label:{show:false},itemStyle:{opacity:0}},0.036,0.036,0.072,1.911,2.435,6.698]
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
#partyPayment{
    width: 100%;
    height: 100%;
    margin-top: -10px;
    }
</style>
