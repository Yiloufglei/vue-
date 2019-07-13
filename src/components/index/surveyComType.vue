<template>
    <div class="surveyComType">
        <Gheader :title="title"></Gheader>
        <div class="group_info">单位(:家)</div>
        <div id="btm_content" style="width: 100%;height: 72%;"></div>
    </div>
</template>

<script>
import Gheader from '@/components/Gheader';
import echarts from "echarts"
export default {
    components:{
        Gheader
    },
    name: 'SurveyComType',
    data () {
        return {
            title: '入驻企业类别数量'
        }
    },
    mounted(){
        this.top_content();
    },
    methods : {
        top_content () {
            var myChart = echarts.init(document.getElementById('btm_content'));
            var builderJson = {
                "all": 300,
                "ie": 9743
            };
            var waterMarkText = 'ECHARTS';
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            canvas.width = canvas.height = 100;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.globalAlpha = 0.08;
            ctx.font = '20px Microsoft Yahei';
            ctx.translate(50, 50);
            ctx.rotate(-Math.PI / 4);
            ctx.fillText(waterMarkText, 0, 0);
            var namelists = ["测试中心", "培训中心", "总部","区域总部","生产基地","销售中心","研发中心","其他"];
            var numberlists = [18,3,259,151,10,34,26,16];
            var namelist = namelists.reverse();
            var numberlist = numberlists.reverse();
            var option = {
                backgroundColor: {
                    type: 'pattern',
                    image: canvas,
                    repeat: 'repeat'
                },
                itemStyle:{
                    color:'#018ffb',  //圆柱颜色
                },
               
                barWidth:12,//设置柱的宽度
                // barGap:'80',/*多个并排柱子设置柱子之间的间距*/
  	            // barCategoryGap:'50%',/*多个并排柱子设置柱子之间的间距*/
                textStyle:{                 //----图例内容样式
                    color:'#39c4eb',  
                    "fontSize": 12
                },
                tooltip: {},
                    grid: [{//图标样式位置
                        left: '5%',
                        right: '6%',
                        top: '5%',
                        bottom:'3%',
                        width : 'auto',
                        height : 'auto',
                        containLabel: true
                    }],
                    xAxis: [{//x轴
                        type: 'value',
                        max: builderJson.all,
                        axisTick: {//决定是否显示坐标刻度  
                            show:false
                        },
                        splitLine:{  // x轴分割线
                            show:false,
                            
                        },
                        axisLine :{// x轴样式
                            lineStyle:{
                                color:'#0f2530',
                                width: 1
                            }
                        },
                    }],
                    yAxis: [{//y轴
                        type: 'category',
                        data: namelist,
                        axisLabel: {
                            interval: 0,
                        },
                        axisLine:{       //去y轴
                            "show":false,
                        },
                        axisTick: {//决定是否显示坐标刻度  
                            show:false
                        },
                        splitLine: {// x轴分割线样式
                            show: true,
                            lineStyle:{
                                color:'#0f2530',
                                width: 1,
                            }
                        },
                        
                        
                    }],
                    series: [{//圆柱右侧文字
                        type: 'bar',
                        stack: 'chart',
                        z: 3,
                        label: {
                            normal: {
                                position: 'right',
                                show: true
                            }
                        },
                        data: numberlist,
                    } ]
            }
            myChart.setOption(option);
        }
    }
}
</script>

<style lang="scss" scoped>
.surveyComType{
    height: 32.53%;
   
}
</style>


