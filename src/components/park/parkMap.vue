<template>
    <div id="parkMap">
        <div id="map"  style="width:100%;height:100%;"> </div>
        <div class="leftTip">
            <div v-for="(item,index) in leftList"  :key="index">
                <p>{{item.num}}</p>
                <p>{{item.content}}</p>
            </div>
        </div>
        <div class="rightTip">
            <span></span>
            <p>中国境内</p>
            <p>亿达中国旗下运营园区覆盖全国14个省及直辖市。</p>
        </div>
    </div>
</template>
<script>
import echarts from "echarts"
import axios from "axios"

export default {
    props:["data","name"],
    data(){
        return{
            leftList:[
                {num:5,content:"新一代信息技术"},
                {num:29,content:"软件与服务外包"},
                {num:15,content:"智能制造"},
                {num:3,content:"高端装备"},
                {num:12,content:"大健康"},
                {num:2,content:"科技金融"},
                {num:4,content:"数字文创"},
                {num:8,content:"节能环境"},
                {num:24,content:"其他"},
            ],
        }
    },
    mounted(){
        this.init(this.data,this.name);
    },
    methods:{
        init(data,mapName){
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
            var data1=[
                {
                name:"北京市",value:"北京",
                itemStyle:{normal:{label:{show:false},areaColor:'#3cd1fa',opacity:0.5},emphasis:{areaColor:'#3cd1fa',opacity:1}},
                },
                {
                name:"上海市",value:"上海",
                itemStyle:{normal:{label:{show:false},areaColor:'#3cd1fa',opacity:0.5},emphasis:{areaColor:'#3cd1fa',opacity:1}}
                },
                {
                name:"天津市",value:"天津",
                itemStyle:{normal:{label:{show:false},areaColor:'#3cd1fa',opacity:0.5},emphasis:{areaColor:'#3cd1fa',opacity:1}}
                },
                {
                name:"黑龙江省",value:"黑龙江",
                itemStyle:{normal:{label:{show:false},areaColor:'#3cd1fa',opacity:0.5},emphasis:{areaColor:'#3cd1fa',opacity:1}},
                },
                {
                name:"四川省",value:"四川",
                itemStyle:{normal:{label:{show:false},areaColor:'#3cd1fa',opacity:0.5},emphasis:{areaColor:'#3cd1fa',opacity:1}}
                },
                {
                name:"浙江省",value:"浙江",
                itemStyle:{normal:{label:{show:false},areaColor:'#3cd1fa',opacity:0.5},emphasis:{areaColor:'#3cd1fa',opacity:1}}
                },
                {
                name:"辽宁省",value:"辽宁",
                itemStyle:{normal:{label:{show:false},areaColor:'#3cd1fa',opacity:0.5},emphasis:{areaColor:'#3cd1fa',opacity:1}}
                },
                {
                name:"江苏省",value:"江苏",
                itemStyle:{normal:{label:{show:false},areaColor:'#3cd1fa',opacity:0.5},emphasis:{areaColor:'#3cd1fa',opacity:1}}
                },
                {
                name:"广东省",value:"广东",
                itemStyle:{normal:{label:{show:false},areaColor:'#3cd1fa',opacity:0.5},emphasis:{areaColor:'#3cd1fa',opacity:1}}
                },
                {
                name:"重庆市",value:"重庆",
                itemStyle:{normal:{label:{show:false},areaColor:'#3cd1fa',opacity:0.5},emphasis:{areaColor:'#3cd1fa',opacity:1}}
                },
                {
                name:"湖北省",value:"湖北",
                itemStyle:{normal:{label:{show:false},areaColor:'#3cd1fa',opacity:0.5},emphasis:{areaColor:'#3cd1fa',opacity:1}}
                },
                {
                name:"陕西省",value:"陕西",
                itemStyle:{normal:{label:{show:false},areaColor:'#3cd1fa',opacity:0.5},emphasis:{areaColor:'#3cd1fa',opacity:1}}
                },
                {
                name:"河南省",value:"河南",
                itemStyle:{normal:{label:{show:false},areaColor:'#3cd1fa',opacity:0.5},emphasis:{areaColor:'#3cd1fa',opacity:1}}
                },
                {
                name:"安徽省",value:"安徽",
                itemStyle:{normal:{label:{show:false},areaColor:'#3cd1fa',opacity:0.5},emphasis:{areaColor:'#3cd1fa',opacity:1}}
                },
                {
                name:"湖南省",value:"湖南",
                itemStyle:{
                    normal:{label:{show:false},areaColor:'#3cd1fa',opacity:0.5},emphasis:{areaColor:'#3cd1fa',opacity:1}}
                },
            ];
            var data2=[
                {
                    name: '大连', 
                    value:[
                            {name:"大连软件园",data:[{key:"运营面积",value:"63.7"}]},
                            {name:"大连科技新城",data:[{key:"运营面积",value:"14.7"}]},
                            {name:"亿达信息软件园",data:[{key:"运营面积",value:"9.1"}]},
                            {name:"大连腾飞软件园（权益50%）",data:[{key:"运营面积",value:"20.4"}]},
                            {name:"大连天地",data:[{key:"运营面积",value:"33.4"}]},
                          ]   
                },
                {
                    name:"武汉",
                    value:[
                        {name:"武汉产业二期",data:[{key:"运营面积",value:"4.8"}]},
                        {name:"武汉产业三期",data:[{key:"运营面积",value:"11.3"}]},
                        {name:"产业1.1期",data:[{key:"签约面积",value:"16.8"},{key:"交付面积",value:"16.8"},{key:"可租面积",value:"10.4"}]},
                    ]
                },
                {
                    name:"上海",
                    value:[
                        {name:"江桥一期",data:[{key:"签约面积",value:"4.8"},{key:"交付面积",value:"3.4"},{key:"可租面积",value:"3.2"}]},
                        {name:"外高桥",data:[{key:"签约面积",value:"1.4"},{key:"交付面积",value:"1.4"},{key:"可租面积",value:"1.1"}]},
                    ]
                },
                {
                    name:"北京",
                    value:[
                        {name:"丽泽中心",data:[{key:"签约面积",value:"4.1"},{key:"交付面积",value:"4.1"},{key:"可租面积",value:"3.3"}]},
                        {name:"中关村壹号",data:[{key:"签约面积",value:"49.8"},{key:"交付面积",value:"49.8"},{key:"可租面积",value:"20.0"}]},
                        {name:"移动硅谷",data:[{key:"签约面积",value:"14.9"},{key:"交付面积",value:"4.1"},{key:"可租面积",value:"4.0"}]},
                    ]
                },
                {
                    name:"深圳",
                    value:[
                        {name:"海科兴",data:[{key:"签约面积",value:"7.1"},{key:"交付面积",value:"7.1"},{key:"可租面积",value:"6.9"}]},
                    ]
                },
                {
                    name:"苏州",
                    value:[
                        {name:"高铁新城（5载体合计）",data:[{key:"签约面积",value:"20.3"},{key:"交付面积",value:"7.8"},{key:"可租面积",value:"6.1"}]},
                        {name:"吴中尚金湾（6载体合计）",data:[{key:"签约面积",value:"40.1"},{key:"交付面积",value:"40.1"},{key:"可租面积",value:"32"}]},
                        {name:"建业工业园",data:[{key:"签约面积",value:"5.3"},{key:"交付面积",value:"5.3"},{key:"可租面积",value:"4.0"}]},
                    
                    ]
                },
                {
                    name:"湖州",
                    value:[
                        {name:"长兴园",data:[{key:"签约面积",value:"22.3"},{key:"交付面积",value:"10.6"},{key:"可租面积",value:"6.5"}]},
                    ]
                },
                {
                    name:"泰州",
                    value:[
                        {name:"创美科技产业园",data:[{key:"签约面积",value:"40.0"},{key:"交付面积",value:"8.6"},{key:"可租面积",value:"8.6"}]},
                    ]
                },
                {
                    name:"长沙",
                    value:[
                        {name:"梅溪湖创新中心",data:[{key:"签约面积",value:"5.2"},{key:"交付面积",value:"5.2"},{key:"可租面积",value:"5.2"}]},
                        {name:"科技新城",data:[{key:"签约面积",value:"54.0"},{key:"交付面积",value:"25.5"},{key:"可租面积",value:"25.5"}]},
                    ]
                },
                {
                    name:"湘潭",
                    value:[
                        {name:"九华创业园",data:[{key:"签约面积",value:"32.0"},{key:"交付面积",value:"32.0"},{key:"可租面积",value:"9.4"}]},
                    ]
                },
                {
                    name:"成都",
                    value:[
                        {name:"国宾总部",data:[{key:"签约面积",value:"8.2"},{key:"交付面积",value:"8.2"},{key:"可租面积",value:"5.0"}]},
                        {name:"西部北斗产业园",data:[{key:"签约面积",value:"70.0"},{key:"交付面积",value:"20.0"},{key:"可租面积",value:"9.3"}]},
                    ]
                },
                {
                    name:"绵阳",
                    value:[
                        {name:"绵阳科技城软件园",data:[{key:"签约面积",value:"6.3"},{key:"交付面积",value:"6.3"},{key:"可租面积",value:"3.1"}]},
                    ]
                },
                {
                    name:"泸州",
                    value:[
                        {name:"航空航天城",data:[{key:"签约面积",value:"70.0"},{key:"交付面积",value:"12.3"},{key:"可租面积",value:"4.9"}]},
                    ]
                },
                {
                    name:"天津",
                    value:[
                        {name:"香邑广场",data:[{key:"签约面积",value:"1.0"},{key:"交付面积",value:"0.8"},{key:"可租面积",value:"0.8"}]},
                    ]
                },
                {
                    name:"合肥",
                    value:[
                        {name:"瑶海都市科技工业园",data:[{key:"签约面积",value:"42.5"},{key:"交付面积",value:"7.9"},{key:"可租面积",value:"7.9"}]},
                        {name:"庐阳DT产业园",data:[{key:"签约面积",value:"24.3"},{key:"交付面积",value:"-"},{key:"可租面积",value:"-"}]},
                    ]
                },
                {
                    name:"西安",
                    value:[
                        {name:"协同创新港",data:[{key:"签约面积",value:"12.0"},{key:"交付面积",value:"2.2"},{key:"可租面积",value:"0.4"}]},
                    ]
                },
                {
                    name:"哈尔滨",
                    value:[
                        {name:"哈加国际综合体",data:[{key:"签约面积",value:"8.9"},{key:"交付面积",value:"8.2"},{key:"可租面积",value:"8.2"}]},
                    ]
                },
                {
                    name:"重庆",
                    value:[
                        {name:"两江健康城",data:[{key:"签约面积",value:"40.5"},{key:"交付面积",value:"4.0"},{key:"可租面积",value:"11.0"}]},
                    ]
                },
            ];
            var geoCoordMap={
                "西安":[108.95,34.27],
                "郑州":[113.65,34.76],
                "重庆":[106.54,29.59],
                "成都":[104.06,30.67],
                "武汉":[114.31,30.52],
                "长沙":[113,28.21],
                "合肥":[117.27,31.86],
                "大连":[121.62,38.92],
                "上海":[121.48,31.22],
                "北京":[116.46,39.92],
                "哈尔滨":[126.63,45.75],
                "天津":[117.2,39.13],
                "苏州":[120.62,31.32],
                "深圳":[114.07,22.62],
            };
            var convertData = function (data) {
            var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            };

            var option = {
                tooltip : {
                    backgroundColor:"",
                    trigger: 'item',
                    formatter: function(params){
                        if(params.data){
                            if(typeof(params.data.value)=="object"){
                                var result=params.data.value.slice(2);
                                var listResult="";
                                result.forEach(n1 => {
                                    var list="";
                                    list="<div style='text-align:left'>"+n1.name+"："+"</div>";
                                    var listTip="";
                                    n1.data.forEach(n2 => {
                                        listTip+=n2.key+"："+n2.value+"(万平)"+"&nbsp;&nbsp;&nbsp;";
                                    });
                                    list=list+"<div style='text-align:left'>"+listTip+"</div>";
                                    listResult=listResult+list;
                                });
                                return "<div class='tipbox' >"+listResult+"</div>"
                            }else{
                                return  "<div class='tipbox1' >"+params.data.value+"</div>"
                            }
                        }
                    }
                },
                geo: {
                    roam: true,
                    left:100,
                    right:160,
                    top:40,
                    bottom:-150,
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
                        },
                    },
                    regions:data1,//
                },
                series: [
                    {
                        type:"effectScatter",
                        name: '',
                        coordinateSystem: 'geo',
                        data: convertData(data2),
                        symbolSize: function () {
                            return 10;
                        },
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
                                color: '#e15994',
                                // opacity:0.6,
                                shadowBlur: 10,
                                shadowColor: '#333'
                            }
                        },
                        zlevel: 1,
                    },
                    {
                        type: 'map',
                        geoIndex: 0,
                        data:[
                            {name:"北京市",value:"北京"},
                            {name:"上海市",value:"上海"},
                            {name:"天津市",value:"天津"},
                            {name:"黑龙江省",value:"黑龙江"},
                            {name:"四川省",value:"四川"},
                            {name:"浙江省",value:"浙江"},
                            {name:"辽宁省",value:"辽宁"},
                            {name:"江苏省",value:"江苏"},
                            {name:"广东省",value:"广东"},
                            {name:"重庆市",value:"重庆"},
                            {name:"湖北省",value:"湖北"},
                            {name:"陕西省",value:"陕西"},
                            {name:"河南省",value:"河南"},
                            {name:"安徽省",value:"安徽"},
                            {name:"湖南省",value:"湖南"},
                        ],
                    }
                ]
            }
            myChart.setOption(option);
            myChart.on('click', (param)=>{
                // this.$emit("map",param)  //先不做进入省市地图
            });
        },
    }
}
</script>

<style lang="scss">
#parkMap{
    position: relative;
    .tipbox{
        background:RGBA(225,89,148,0.7);
        border-radius: 4px;
        padding:10px;
        border-top:1px solid #e15994;
        // overflow: hidden;
        // // animation:mymove 1s linear;
        // height: 100%;
        // color:"#fff";
    }

    @keyframes mymove{
        0% {height: 0px;background:"";color:""}
        100% {height: 100%;background:RGBA(225,89,148,0.7);color:"#fff"}
    }
    .tipbox1{
        // background:"",
        background:RGBA(225,89,148,0.7);
        border-radius: 4px;
        padding:5px;
        border-top:1px solid #e15994;

    }
}
</style>


<style lang="scss" scoped>
#parkMap{
    width: 920px;height: 474px;
    position: relative;
    text-align: center;
    .leftTip{
        position: absolute;
        bottom:0;top:0;left:8px;
        >div{
            background:url(../../assets/images/leftbox.png);
            width: 90px;height: 39px;margin:12px 0;
            color:#3cd1fa;
            // color:#fff;
            text-align: left;
            padding:0 2px;
            :first-child{
                font-weight: bold;
                font-size: 16px;
            }
            :last-child{
                font-size: 10px;
            }
        }
    }
    .rightTip{
        background:url(../../assets/images/rightbox.png);
        width:150px;height: 90px;
        position: absolute;
        top:8px;right:8px;
        text-align: left;color: #3cd1fa;
        span{
            width: 16px;height: 2px;
            background-color: #01dcfc;
            display: inline-block;
            position: absolute;top:5px;left:5px;
        }
        p:nth-child(2){
            font-weight: bold;
            font-size: 18px; 
            margin:10px 5px;
        }
        p:last-child{
            font-size: 12px;margin:0 5px;
        }
    }
}
</style>
