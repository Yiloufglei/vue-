<template>
    <div id="provinceMap">
        <div id="map"  style="width:100%;height:100%;"> </div>
        <div class="backTip" @click="backTask">返回上级</div>

    </div>
</template>

<script>
import echarts from "echarts"
import axios from "axios"

export default {
    props:["data","name"],
    data(){
        return{
        }
    },
    mounted(){
        this.init(this.data,this.name);
    },
    methods:{
        backTask(){
            this.$emit("mapback",1)
        },
        init(data,mapName){this.mapNameTip=mapName;
            var mapWarp=document.getElementById('map')
            var resizeWorldMapContainer = function () {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
                mapWarp.style.width = mapWarp.style.width+'px';
                mapWarp.style.height = mapWarp.style.height+'px';
            };
            resizeWorldMapContainer();//设置容器高宽
            var myChart = echarts.init(mapWarp);
            var geoJson = data;
            this.mapTask(myChart,geoJson,mapName);
        },
        
        mapTask(myChart,geoJson,mapName){
            myChart.off('click');
            myChart.hideLoading();
            echarts.registerMap(mapName, geoJson);
            var data1=[{name:"大连市",value:"大连"}];
            // var convertData = function (data) {
            //     var res = [];
            //     for (var i = 0; i < data1.length; i++) {
            //         var geoCoord = this.data.features[data1[i].name].center;
            //         if (geoCoord) {
            //             res.push({
            //                 name: data1[i].name,
            //                 value: geoCoord.concat(data1[i].value)
            //             });
            //         }
            //     }
            //     return res;
            // };
            var convertData =()=> {
                var res = [];
                for (var i = 0; i < data1.length; i++) {
                    for(var j=0;j<this.data.features.length;j++){
                        for(var k=0;k<this.data.features.properties.length;k++){
                        }
                    }
                }
                return res;
            };
            var option = {
                tooltip: {
                    trigger: 'item',
                    backgroundColor:"#e15994",opacity:0.6,
                    padding:10,
                    formatter: function(params){
                        if(params.data){
                            return  params.data.value
                        }
                    }
                },
                geo: {
                        roam: false,
                        left:20,
                        right:20,
                        top:20,
                        bottom:20,
                        map:mapName,
                        label: {
                        emphasis: {
                            show: false
                        },
                    },
                    itemStyle:{
                        normal:{
                            label:{show:false},
                            areaColor:'#3cd1fa',
                            opacity:0.1,  
                            borderWidth:1,
                            borderColor:'#3cd1fa'
                        },
                        emphasis:{
                            label:{show:false},
                            areaColor:'#3cd1fa',
                            opacity:0.5,  
                        },
                    },
                },
                series : [
                    {
                        name: mapName,
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        // data: convertData(data1.sort(function (a, b) {
                        //     return b.value - a.value;
                        // }).slice(0, 6)),
                        // symbolSize: function (val) {
                        //     return val[2] / 10;
                        // },
                        // data: convertData(),
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#f4e925',
                                shadowBlur: 10,
                                shadowColor: '#333'
                            }
                        },
                        zlevel: 1
                    }
                ]
            }
            myChart.setOption(option);
            myChart.on('click', (param)=>{
                this.$emit("provinceMap",param)
            });
        },
    }
}
</script>

<style lang="scss" scoped>
#provinceMap{
    width: 920px;height: 474px;
    position: relative;
    text-align: center;
    .backTip{
        color:#3cd1fa;
        cursor: pointer;
        background:url(../../assets/images/backbg.png);
        width:113px;height:40px;
        line-height: 53px;
        position: absolute;
        bottom:0;left:50%;transform: translate(-50%,0)
    }
    
}
</style>


