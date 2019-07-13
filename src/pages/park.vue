<template>
    <div class="page park " id="park">
        <Header />
        <div class="park_content content">
            <div class="content_1">
                <park-left></park-left>
            </div>
            <div class="content_2">
                <div class="content_2_top">
                    <div class="top1">
                        <div></div>
                        <div class="center titleff">20<span class="fz16">城</span></div>
                        <div class="center titleff">34<span class="fz16">园</span></div>
                        <div></div>
                    </div>
                    <div class="top2">
                        <div></div>
                        <div>
                            <p class="subTitle">运营面积</p>
                            <p class="titleff">8,700,000㎡</p>
                        </div>
                        <div>
                            <p class="subTitle">持有物业</p>
                            <p class="titleff">1,574,000㎡</p>
                        </div>
                        <div>
                            <p class="subTitle">委托运营</p>
                            <p class="titleff">7,125,000㎡</p>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div class="content_2_middle">
                    <park-map :data="mapData" :name="mapName" v-if="mapData&&mapTip==1"  @map="mapBackTask"></park-map>
                    <province-map :data="mapData" :name="mapName" v-if="mapData&&mapTip==2"  @mapback="changeMap"  @provinceMap="provinceMapBackTask"></province-map>
                    <city-map></city-map>
                </div>
                <div class="content_2_bottom">
                    <gheader class="subTitle" :title="'城市产值/税收情况'" ></gheader>
                    <div id="content_2_3" style="width: 100%;height:100%;"  ></div>
                </div>
            </div>
            <div class="content_3">
                <park-right></park-right>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Gheader from '@/components/Gheader'
import echarts from "echarts"
import parkRight from '@/components/park/parkRight'
import parkLeft from '@/components/park/parkLeft'
import parkMap from '@/components/park/parkMap'
import provinceMap from '@/components/park/provinceMap'
import cityMap from '@/components/park/cityMap'

import axios from "axios"

export default {
    name: 'park',
    components:{
        Header,parkRight,Gheader,parkLeft,parkMap,provinceMap,cityMap
    },
    data () {
        return {
            ChinaList:"/static/China.json",
            provinceMap:[
                {url:'/static/provinceMap/anhui.json',mapName:'anhui',title:'安徽'},
                {url:'/static/provinceMap/beijing.json',mapName:'beijing',title:'北京'},
                {url:'/static/provinceMap/chongqing.json',mapName:'chongqing',title:'重庆'},
                {url:'/static/provinceMap/guangdong.json',mapName:'guangdong',title:'广东'},
                {url:'/static/provinceMap/heilongjiang.json',mapName:'heilongjiang',title:'黑龙江'},
                {url:'/static/provinceMap/henan.json',mapName:'henan',title:'河南'},
                {url:'/static/provinceMap/hubei.json',mapName:'hubei',title:'湖北'},
                {url:'/static/provinceMap/jiangsu.json',mapName:'jiangsu',title:'江苏'},
                {url:'/static/provinceMap/liaoning.json',mapName:'liaoning',title:'辽宁'},
                {url:'/static/provinceMap/shanghai.json',mapName:'shanghai',title:'上海'},
                {url:'/static/provinceMap/shanxi.json',mapName:'shanxi',title:'陕西'},
                {url:'/static/provinceMap/sichuan.json',mapName:'sichuan',title:'四川'},
                {url:'/static/provinceMap/tianjin.json',mapName:'tianjin',title:'天津'},
                {url:'/static/provinceMap/zhejiang.json',mapName:'zhejiang',title:'浙江'},
            ],
            mapData:"",
            mapName:"China",
            mapTip:"",
        }
    },
    mounted(){
        this.content_2_3_task();
        axios.get(this.ChinaList,{}).then(res => {
            this.mapData=res.data;
            this.mapTip=1;
        })
    },
    methods:{
        changeMap(val){
            if(val==1){
                this.mapName="China";
                axios.get(this.ChinaList,{}).then(res => {
                    this.mapData=res.data;
                    this.mapTip=1;
                })
            }
        },
        mapBackTask(val){
            console.log(val,"val");
            if(val.data){
                for(var i in this.provinceMap){
                    if(this.provinceMap[i].title==val.data.value){
                        this.mapName=this.provinceMap[i].mapName;
                        axios.get(this.provinceMap[i].url,{}).then(res => {
                            this.mapTip=2;
                            this.mapData=res.data;
                            // myChart.dispose();
                            // this.type=this.type+1;
                            // this.init(res.data,mapName);
                        })
                    }
                }
            }
        },
        provinceMapBackTask(val){

        },
        content_2_3_task(){
            var myChart = echarts.init(document.getElementById('content_2_3'));
            var option = {
                    tooltip : {
                        trigger: 'axis',
                        formatter: "{b}: {c} % ",
                    },
                    legend: {
                        data:['产值(单位：亿元)','税收(单位：千万元)'],
                        textStyle:{
                            fontSize:12,
                            color:'#3cd1fa'
                        }
                    },
                    calculable : true,
                    xAxis : [
                        {
                            axisLabel : {
                                show : true,
                                textStyle : {color : '#3cd1fa'}
                            },
                            axisLine: {lineStyle: {color: '#3cd1fa'}},
                            axisTick: {show: false},
                            type : 'category',
                            data : ['哈尔滨','深圳','成都','重庆','绵阳','天津','西安','合肥','上海','北京','长沙','苏州']
                        }
                        
                    ],
                    yAxis : [
                        {
                            axisLabel : {
                                show : true,
                                textStyle : {color : '#3cd1fa'}
                            },
                            axisLine: {lineStyle: {color: '#3cd1fa'}},
                            type : 'value',
                            splitLine:{show:false},
                            axisTick: {show: false}
                        }
                    ],
                    series : [
                        {
                            name:'产值(单位：亿元)',
                            type:'bar',
                            data:[0.6, 11.4, 13.7, 1.4, 20.9, 1.7, 5.8, 3.5,4.2, 2.3, 13.3, 21.1],
                            itemStyle:{color:"#4e4f9f"},
                            label:{show:true,position:"top",color:"#3cd1fa",fontSize:"12"}

                        },
                        {
                            name:'税收(单位：千万元)',
                            type:'bar',
                            data:[3, 59, 71, 7, 108, 9, 30, 18, 22, 12,69, 109],
                            itemStyle:{color:"#3cd1fa"},
                            label:{show:true,position:"top",color:"#3cd1fa",fontSize:"12"},
                            
                        }

                    ]
                };
                myChart.setOption(option);
        },
    }
}
</script>


<style lang="scss">
#park{
    .subTitle{
        font-size: 16px;color:#fff;text-align: left;
    }
}
</style>

<style lang="scss" scoped>
#park{
    .park_content{
        height:100%;
        display: -webkit-flex;display: flex;
        div{
            display: inline-block;
        }
        .content_1,.content_3{
            width:21.87%;height:100%;
        }
        .content_2{width:47.91%;height:100%;
            .content_2_top{width:100%;
                .top1,.top2{
                    display: -webkit-flex;display: flex;
                    height:7.37%;
                    >div:first-child,div:last-child{
                        width: 5.43%;margin:0 0.26%;
                        background: url(../assets/images/subcount.png) left top no-repeat;
                    }
                    >:last-child{transform:rotateY(180deg)}
                }
                .top1{
                    >:nth-child(2),:nth-child(3){
                        width: 42.93%;font-size:50px;color: #3cd1fa;margin:0 0.5%;
                        background: url(../assets/images/count.png) left top no-repeat;
                        span{margin-left:7px;}
                    }
                }
                .top2{margin:1.57% 0 1.85% ;
                    >:nth-child(2),:nth-child(3),:nth-child(4){
                        width: 28.26%;margin:0 0.5%;padding:0.6%;
                        background: url(../assets/images/countsmall.png) left top no-repeat;
                        >:first-child{text-align: left}
                        >:last-child{
                            color:#01dcfb;font-size:30px;width:100%;
                        }
                        >:last-child::after{
                            content:"";display: inline-block;
                            background:url(../assets/images/uptip.png);
                            width:12px;height:34px; vertical-align:middle;margin-left:2%;
                        }
                    }
                }
            }
            
            .content_2_middle{
                background: url(../assets/images/mapbg.png) left center no-repeat;
                height: 474px;width:920px;
                margin-bottom:2.77%;

            }
            .content_2_bottom{
                width: 100%;height:23.70%;
            }
        }
        .content_1,.content_2,.content_3{
            margin:0 1.3% 1.3% ;
        }
    }
}
</style>


