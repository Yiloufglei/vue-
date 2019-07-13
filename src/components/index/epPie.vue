<template>
    <div class="ep_pie" ref="ep_pie">
        
       
    </div>
</template>

<script>
import echarts from 'echarts';
export default {
    name: 'epPie',
    data () {
        return {
            title: '轻资产运营状况',
        }
    },
    props:['data'],
    mounted(){
        let total = 100;
        let myChart = echarts.init(this.$refs.ep_pie);
        let placeHolderStyle = {
            normal: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                }
            }
        };
        let _this = this;
        let option = {
            title: [{
                text: _this.data.name,//主标题
                textStyle: {//主标题样式
                    color: '#01dcfc',
                    fontSize: 10,
                },
                left:'center',
                bottom: '-3px'
            },{
                text: _this.data.value,
                textStyle: {//主标题样式
                    color: _this.data.color,
                    fontSize: 14,
                    fontWeight: 'normal'
                },
                left:'center',
                bottom: 'center'
            }],
            tooltip: {
                show: false
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    clockWise: false, //顺时加载
                    hoverAnimation: false, //鼠标移入变大
                    radius: [40, 44],
                    itemStyle: placeHolderStyle,
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    data: [
                    {
                        value: 50,
                        itemStyle: {
                            normal: {
                                color: '#0e202d'
                            }
                        }
                    }, 
                    ]
                },
                {
                    name: '高端装备',
                    type: 'pie',
                    clockWise: false, //顺时加载
                    hoverAnimation: false, //鼠标移入变大
                    radius: [30, 40],
                    itemStyle: placeHolderStyle,
                    startAngle: 315,
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    data: [
                    {
                        value: 75,
                        itemStyle: {
                            normal: {
                                color: _this.data.color
                            }
                        }
                    }, 
                    {
                        value: total-75,
                        itemStyle: {
                            normal: {
                                color: 'rgb(38,44,72)'
                            }
                        }
                    }]
                },
                {
                    name: '',
                    type: 'pie',
                    clockWise: false, //顺时加载
                    hoverAnimation: false, //鼠标移入变大
                    radius: [28, 27],
                    itemStyle: placeHolderStyle,
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    data: [
                    {
                        value: 50,
                        itemStyle: {
                            normal: {
                                color: _this.data.color
                            }
                        }
                    }, 
                    ]
                }
            ]
        };
        myChart.setOption(option);
    }
}
</script>

<style lang="scss" scoped>
.ep_pie{
    width: 88px;
    height: 88px;
}
</style>
