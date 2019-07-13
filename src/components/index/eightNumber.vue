<template>
    <div class="e_precent">
        <Gheader :title="title"></Gheader>
        <div class="group_info">
            <span>纵轴(单位：个)</span>
            <span>横轴(单位：百万)</span>
        </div>
        <div class="e_con" ref="e_num">
            
        </div>
    </div>
</template>

<script>
import echarts from 'echarts';
import Gheader from '@/components/Gheader';
export default {
    components:{
        Gheader
    },
    name: 'EightNumber',
    data () {
        return {
            title: '八大产业数量'
        }
    },
    mounted(){
        var dom = this.$refs.e_num;
        var myChart = echarts.init(dom);
        var app = {};
        let option = {};
        app.title = '坐标轴刻度与标签对齐';

        option = {
            color: ['rgb(22,63,80)'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            
                    type : 'shadow'
                }
            },
            grid: {
                left: '0',
                right: '0',
                bottom: '0',
                top: '5%',
                containLabel: true
            },
            xAxis : [
                {
                    type: 'category',
                    data: ['高端装备', '智能制造', '人工智能', '物联网', '生命科技', '军民融合', '现代服务','文创传媒','其他'],
                    axisLabel:{
                        interval:0,
                        color: '#01dcfc',
                        fontSize: '12px',
                        formatter:function(value)
                        {   
                            if(value){
                                let arr = value.split("");
                                let st = '';
                                arr.forEach((item,index)=>{
                                    st = st+item+(index%2!=0?'\n':'');
                                })
                                return st
                            }
                            return value
                        }

                    },
                    axisLine:{
                        lineStyle:{
                            color: 'rgb(23,66,83)'
                        }
                    }
                    
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLine:{
                        lineStyle:{
                            width: 0
                        }
                    },
                    axisLabel:{
                        interval:0,
                        color: '#01dcfc'
                    },
                    splitLine:{
                        lineStyle:{
                            color:['rgb(20,49,64']
                        }
                    }
                }
            ],
            series : [
                {
                    name:'企业数量',
                    type:'bar',
                    barWidth: '30%',
                    data:[36, 49, 10, 60, 58, 15, 205,41,43],
                    itemStyle: {   
                        normal:{  
                            color: function (params){
                                var colorList = ['rgb(0,225,251)','rgb(40,224,200)','rgb(172,213,152)','rgb(199,83,134)','rgb(240,97,86)','rgb(80,79,166)','rgb(0,143,251)','rgb(237,152,95)','rgb(60,209,250)'];
                                return colorList[params.dataIndex];
                            }
                        },
                        
                    },
                }
            ]
        };
        ;
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }
}
</script>

<style lang="scss" scoped>
.e_precent{
    .e_con{
        width: 100%;
        height: 260px;
    }
    .group_info{
        span:first-child{
            margin-right: 10px;
        }
    }
}
</style>
