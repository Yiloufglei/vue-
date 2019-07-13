<template>
    <div id="partyEducation"></div>
</template>
<script>
const echarts = require("echarts")
export default {
    name:'partyEducation',
    data(){
        return{

        }
    },
    methods:{
        init(){
            let myChart = echarts.init(document.getElementById('partyEducation'));
            const option = {
                tooltip: {},
                radar:{
                    radius:'65%',
                    name:{
                        formatter:function(a,b){
                            return a.split("|")[0] +'\n' + a.split("|")[1]
                        },
                    },
                    indicator : [
                        { name: '2.09%|博士', max: 420},
                        { name: '2.32%|其他', max: 420},
                        { name: '3.02%|大专', max: 420},
                        { name: '76.53%|本科', max: 420},
                        { name: '16.04%|硕士', max: 420},
                        ],
                    splitArea : {
                            show : true,
                            areaStyle : {
                                color: '#0f2b38'
                                // 图表背景网格的颜色
                            }
                    },
                    splitLine : {
                        show : true,
                        lineStyle : {
                            width : 1,
                            color : '#0e3c4b'
                            // 图表背景网格线的颜色
                            }
                    },
                    axisLine:{//雷达线
                        show:true,
                        lineStyle:{
                            color:'#0e3847'
                        }
                    }

                },
                textStyle:{
                    color: '#38c0e6'
                },
                series: [
                    {
                        name:'党员数量分布',
                        type: 'radar',
                        symbol: 'none',//去掉拐点的圈
                        itemStyle:{
                            normal: {
                                color:'red',
                                areaStyle: {
                                    type: 'default',
                                    color:'#01dcfc',
                                    opacity: 0.6,
                                },
                            },
                        },
                        lineStyle:{
                            // 图表中各个图区域的边框线颜色
                            normal:{
                                color:"rgba(255,255,255,0)"
                            }
                        },
                        data : [
                            {
                                value : [9, 10, 13, 329, 69],
                            }
                        ]
                    }
                ],
                legend:{
                    show:false,
                    left:0,
                    top:50,
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
#partyEducation{
    width:100%;
    height: calc(100% - 50px);
}
</style>

