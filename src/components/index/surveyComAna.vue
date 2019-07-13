<template>
    <div class="s_com_ana">
        <Gheader :title="title"></Gheader>
        <div class="group_info">单位(%)</div>
        <div id="top_content" style="width: 100%;height: 82.62%;"></div>
    </div>
</template>

<script>
import Gheader from '@/components/Gheader';
import echarts from "echarts"
export default {
    components:{
        Gheader
    },
    name: 'EightPrecent',
    data () {
        return {
            title: '入驻企业性质占比'
        }
    },
    mounted(){
        this.top_content();// 初始化饼形图数据
    },
    methods : {
        top_content () {
            var myChart = echarts.init(document.getElementById('top_content'));
            var data = ['国有控股','国有全资','民营主板','民营新三板','民营非上市','外商独资','中外合资','其他'];
            var datalist =  [
                        {value:450,name:'国有控股'},{value:120,name:'国有全资'},{value:450,name:'民营主板'},{value:120,name:'民营新三板'},
                        {value:6080,name:'民营非上市'},{value:340,name:'外商独资'},{value:110,name:'中外合资'},{value:2330,name:'其他'},
                    ];
            var option = {
                tooltip : {
                    trigger: 'item',
                },
              legend: {//图例
                orient: 'vertical',
                left: 'right',
                top : '13%',
                align :'left',
                itemGap:8,
                itemWidth: 12,
                itemWidth: 12,
                textStyle: {
                    color: '#3cd1fa',
                },
                data : data,    
              },
                  series: [{
                    type: 'pie',
                    radius:'56%',
                    center: ['40%', '50%'],
                    clockwise : '30' ,
                    selectedOffset: '100',
                    startAngle:120,
                    clockwise :true,
                    minAngle :10,
                    color:['#f06156','#28e0c8','#acd598','#c75386','#3cd1fa','#504fa6','#018ffb','#ed985f'],//自己设置扇形图颜色
                    data:datalist,
                    label:{            //饼图图形上的文本标签
                        normal:{
                            show:true,
                            position:'left', //标签的位置
                            textStyle : {
                                fontWeight : 300 ,
                                color: '#3cd1fa',
                                fontSize : 12   ,//文字的字体大小
                            },
                            formatter:'{d}%'
                        },
                    },
                    labelLine: {    //指示线状态
                        show: true,
                        color :'red',
                        lineStyle: {
                            color: '#3cd1fa',
                            width: 1,
                            type: 'solid',
                        }
                    }
                }],
            };
            myChart.setOption(option);
       }
    }
}
</script>

<style lang="scss" scoped>
.s_com_ana{
    height: 36.626%;
    
}
</style>


