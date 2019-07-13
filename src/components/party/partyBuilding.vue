<template>
    <div id="partyBuilding"></div>
</template>
<script>
const echarts = require("echarts")
export default {
    name:'partyBuilding',
    data(){
        return{

        }
    },
    methods:{
        init(){
            let myChart = echarts.init(document.getElementById('partyBuilding'));
            let buildingJson = {
                all:"2000",
                "charts":{
                    "1月":436,
                    "2月":567,
                    "3月":874,
                    "4月":1023,
                    "5月":968,
                    "6月":1374,
                    "7月":1298
                }
            }
            const option = {
                tooltip: {},
                xAxis: {
                    type: 'category',
                    data: Object.keys(buildingJson.charts),
                    axisTick: {
                        show: false
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#267a95'
                        }
                    },
                },
                yAxis: {
                    type: 'value',
                    axisLine:{
                        lineStyle:{
                            color:'#267a95'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    // y轴分隔线
                    splitLine: {
                        show: true,
                        lineStyle:{
                            color:'#083a46'
                        }
                    },
                },
                textStyle:{
                    color:'#3cd1fa',
                },
                legend: {
                    data: ['2017','2018', '2019']
                },
                series: [
                    {
                    name:'2017',
                    type: 'bar',
                    barWidth:20,
                    itemStyle: {
                            normal:{
                            color: function (params){
                                let colorList = ['#00e1fb','#28e0c8','#acd598','#c75386','#504fa6','#018ffb','#3cd1fa'];
                                return colorList[params.dataIndex];
                            }
                        },
                    },
                    stack: 'chart',
                    z:3,
                    label:{
                        normal: {
                            position: 'top',
                            show: true
                        }
                    },
                    data: Object.keys(buildingJson.charts).map(function (key) {
                        return buildingJson.charts[key];
                        })
                    },
                    {
                        type: 'bar',
                        stack: 'chart',
                        silent: true,
                        itemStyle: {
                            normal: {
                                color: '#122b39'
                            }
                        },
                        data: Object.keys(buildingJson.charts).map(function (key) {
                            return buildingJson.all - buildingJson.charts[key];
                        })
                    }
                ],
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
#partyBuilding{
    width: 100%;
    margin-top: -40px;
    height: 100%;
}
</style>
