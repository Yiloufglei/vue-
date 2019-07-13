<template>
    <div id="parkLeft">
        <div class="content_1_top">
            <gheader class="subTitle" :title="'城市分布情况'"></gheader>
            <div class="text-title">(单位：万平)</div>
            <div class="top_content" id="content_1_1"  style="width: 100%;height:100%;"></div>
        </div>
        <div class="content_1_bottom">
            <gheader class="subTitle" :title="'资产类型占比'"></gheader>
            <div style="height:100%;width:100%;">
                <div style="height:100%;width:50%;float:left;">
                    <div id="content_1_2" style="width: 100%;height:100%;"></div>
                    <div class="Heavy-assets">自持型</div>
                </div>
                <div style="height:100%;width:50%;float:left;">
                    <div id="content_1_3" style="width: 100%;height:100%;"></div>
                    <div class="Light-assets">委托型</div>
                </div>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import echarts from "echarts"
import Gheader from '@/components/Gheader'

export default {
    name: 'parkLeft',
    components:{
        Gheader
    },
    data(){
        return {
            
        }
    },
    mounted(){
        this.content_1_2_task();
        this.content_1_3_task();
        this.content_1_1_task();
    },
    methods:{
        content_1_1_task(){
            var myChart = echarts.init(document.getElementById('content_1_1'));
            var data = [8.9, 40.0, 22.3, 1.0,  70.0, 6.3, 78.2, 32.0,65.7, 12.0, 66.8, 5.2,  16.8,7.1, 6.2, 53.9, 141.3];
            var xMax = 150;
            var option = {
                backgroundColor:'rgba(0, 0, 0, 0)',
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}:{c}",
                },
                grid: {// 统计图在画布的位置
                    left: '5%',
                    right: '5%',
                    top: '5%',
                    bottom:'15%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'value',
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: true,
                            lineStyle:{
                                color:'#3cd1fa'
                            }
                        },
                        axisTick:{
                            show: false
                        },
                        axisLabel:{
                            textStyle:{
                                color:'#3cd1fa'
                            }
                        },
                    }
                ],
                yAxis : [
                    {
                        type : 'category',
                        data : ['哈尔滨','泰州','湖州','天津','泸州','绵阳','成都','湘潭','苏州','西安','合肥','长沙','武汉','深圳','上海','北京','大连'],
                        boundaryGap: ['20%', '20%'],
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: true,
                            lineStyle:{
                                color:'#3cd1fa'
                            }
                        },
                        axisTick:{
                            show: false
                        },
                        axisLabel:{
                            textStyle:{
                                color:'#3cd1fa'
                            }
                        }
                    }
                ],
                series : [
                    {
                        name:'面积',
                        type:'bar',
                        stack: '总量',
                        z: 3,
                        barWidth:'30%',
                        data:[8.9, 40.0, 22.3, 1.0,  70.0, 6.3, 78.2, 32.0,65.7, 12.0, 66.8, 5.2,  16.8,7.1, 6.2, 53.9, 141.3],
                        itemStyle: { 
                            normal: {
                                // barBorderRadius:[2,2,0,0], 
                                color: '#3cd1fa',
                                label: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '12'
                                    },
                                    position: 'right', 
                                }
                            }
                        },
                        barWidth:10,
                    },
                    // { 
                    //     name:'总量',
                    //     type: 'bar',
                    //     barWidth:'30%',
                    //     barGap:'-100%',
                    //     silent:true,
                    //     itemStyle: {
                    //         normal: {
                    //             color: '#112937',
                    //         }
                    //     },
                    //     data: data.map(function(d){
                    //         return xMax
                    //     }),
                    //     barWidth:10,
                    // },
                    
                ]
            };
            myChart.setOption(option);
        },
        content_1_2_task(){// 环形图画布
            var myChart = echarts.init(document.getElementById('content_1_2'));
            let option = {
                // tooltip: {
                //     trigger: 'item',
                //     formatter: "{a} {b}:{d}%"
                // },
                legend: {
                    orient: 'vertical',
                    x: 'bottom',
                    data:['重资产型','轻资产型']
                },
                graphic:{
                    type:'text',
                    left:'center',
                    top:'center',
                    style:{
                        text:'28%',
                        textAlign:'center',
                        fill:'#c75385',
                        fontSize:30,
                        fontfamily: "方正粗倩简体",
                    }
                },
                series: [
                    {
                        name:['重资产型'],
                        type:'pie',
                        radius: ['45%', '70%'],
                        avoidLabelOverlap: false,
                        color:['#c75385','#271f2d'],
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:28},
                            {value:72},
                        ]
                    },
                    {
                        name:'访问',
                        type:'pie',
                        radius: [40, 39],
                        avoidLabelOverlap: false,
                        color:['#c75385','#271f2d'],
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:0},
                            {value:100},

                        ]
                    },
                ]
            }
            myChart.setOption(option);
        },
        content_1_3_task(){// 环形图画布
            var myChart = echarts.init(document.getElementById('content_1_3'));
            let option = {
                // tooltip: {
                //     trigger: 'item',
                //     formatter: "{a} {b}: {d}%"
                // },
                legend: {
                    orient: 'vertical',
                    x: 'bottom',
                    data:['轻资产型','重资产型']
                },
                graphic:{
                    type:'text',
                    left:'center',
                    top:'center',
                    style:{
                        text:'72%',
                        textAlign:'center',
                        fill:'#26d4be',
                        fontSize:30,
                        fontfamily: "方正粗倩简体",
                    }
                },
                series: [
                    {
                        name:'轻资产型',
                        type:'pie',
                        radius: ['45%', '70%'],
                        avoidLabelOverlap: false,
                        color:['#26d4be','#0f292f'],
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:72},
                            {value:28},
                        ]
                    },
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: [40, 39],
                        avoidLabelOverlap: false,
                        color:['#26d4be','#0f292f'],
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:0},
                            {value:100},
                        ]
                    },
                ]
            }
            myChart.setOption(option);
        },
    }
}
</script>

<style lang="scss" scoped>
#parkLeft{
    width:100%;height:100%;
    .content_1_top{
        width:100%;height:61.38%;
        .text-title{
            width: 100%;
            text-align: right;
            color: #3cd1fa;
            font-size: 12px;
        }
    }
    .content_1_bottom{
        width:100%;height: 23.70%;
        .Heavy-assets{
            background: url(../../assets/images/Heavy-assets.png) left center no-repeat;
            background-size: 100% 100%;
            height: 32px;
            width: 100px;
            text-align: center;
            line-height: 32px;
            font-size: 14px;
            color: #c75385;
            margin:auto;
        }
        .Light-assets{
            background: url(../../assets/images/Light-assets.png) left center no-repeat;
            background-size: 100% 100%;
            height: 32px;
            width: 100px;
            font-size: 14px;
            text-align: center;
            line-height: 32px;
            color: #26d4be;
            margin:auto;
        }
    }
  
  
}
</style>
