<template>
    <div class="e_precent">
        <Gheader :title="title"></Gheader>
        <div class="group_info">(单位：%)</div>
        <div class="e_con" ref="e_con"> 
            <!-- <div>合作伙伴</div>
            <div>集团推荐</div>
            <div>原有扩张</div>
            <div>政府推荐</div>
            <div>自主招商</div> -->
            <div class="e_pie" ref="e_pie">
                
            </div>
        </div>
    </div>
</template>

<script>
import Gheader from '@/components/Gheader';
import echarts from 'echarts'
export default {
    components:{
        Gheader
    },
    name: 'EightInvest',
    data () {
        return {
            title: '入园企业招商渠道'
        }
    },
    mounted(){
        let total = 100;
        let myChart = echarts.init(this.$refs.e_con);
        let _this = this;
        let option = {
            tooltip: {
               
            },
            calculable: true,
            polar: [
                {
                    indicator: [
                        {text: '39.6%自主招商', max: 200},
                        {text: '14.3%全民经纪', max: 200},
                        {text: '20.5%政策招商', max: 200},
                        {text: '16.8%渠道招商', max: 200},
                        {text: ' 8.8%战略合作', max: 200}
                    ],
                    radius: 75,
                    type: 'circle',
                    name:{
                        formatter:function(a,b){
                            return a.split("%")[0]+'%' +'\n' + a.split("%")[1]
                        },
                    },
                    splitNumber: 4,
                    
                    axisLine: {            // 坐标轴线
                        show: true,        // 默认显示，属性show控制显示与否
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: '#3cd1fa',
                            width: '0.5',
                            type: 'solid'
                        }
                    },
                    splitArea : {
                        show: true,
                        areaStyle : {
                            color: ['rgb(25,73,91)','rgb(25,73,91)','rgb(20,58,72)','rgb(16,41,52)']
                        }
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: '雷达图',
                    type: 'radar',
                    symbol: 'none',//去掉拐点的圈
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                color: ['rgb(0,225,251)']
                            }
                        },
                        emphasis:{
                            lineStyle:{
                                width: 4
                            }
                        }
                    },
                    lineStyle:{
                        // 图表中各个图区域的边框线颜色
                        normal:{
                            color:"rgba(255,255,255,0)"
                        }
                    },
                    data : [
                        {
                            value: [158, 57, 82, 67, 36],
                            name: '入园企业招商来源',
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'solid',
                                        width: 0
                                    }
                                }
                            }
                        }
                    ]
                }
            ]
        };
                           
        myChart.setOption(option);
    }
}
</script>

<style lang="scss" scoped>
.e_precent{
    .e_con{
        width: 100%;
        height: 78%;
        &>div{
            color: #3cd1fa;
            font-size: 12px;
        }
        .e_pie{
            width: 500px;
            height: 500px;
            margin-top: -200px;
        }
    }
}
</style>

