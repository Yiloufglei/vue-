<template>
    <div id="parkRight">
        <div class="content_3_top">
            <gheader class="subTitle" :title="'各园区出租率'"></gheader>
            <!-- 柱形图画布容器 -->
            <div id="top_content" style="width: 100%;height: 100%;top:0;bottom:0;left:0;right:0"></div>
        </div>
        <div class="content_3_middle">
            <gheader class="subTitle" :title="'各园区出租面积'"></gheader>
            <div style="height:18.24%">
                <div class="text-title">(单位：万平)</div>
                <div class="group-content"></div>
                <!-- 园区出租面积列表 -->
                <div class="content_list">
                    <ul>
                        <li v-for="(item,index) in listData" :key="index" class="subList clearfix" >
                            <span class="list-left">{{item.title}}</span><span class="list-right">{{item.num}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="content_3_bottom">
            <gheader class="subTitle" :title="'各园区企业行业分类'"></gheader>
            <div class="bottom_content">
                <!-- 环形图画布容器 -->
                <div id="content_3_3" style="width: 100%;height:340px;z-index:1"></div>
                <!-- <img class="radius-boder" src="../../assets/images/radius.png"/> -->
                <!-- <img class="border-oblong" src="../../assets/images/border.png"/> -->
            </div>
            <div class="bottom-title">
                <ul>
                    <li v-for="(item,index) in listData" :class="{active:listIndex==index}" :key="index" @click="addClassTap(index)" class="title-list">{{item.title}}</li>
                </ul>
            </div>
            
        </div>
    </div>
</template>

<script>
import echarts from "echarts"
import Gheader from '@/components/Gheader'

export default {
    name: 'parkRight',
    components:{
        Gheader
    },
    data(){
        return {
            listData:[
                {title:"大连软件园",num:"60.00"},
                {title:"大连科技城",num:"12.42"},
                {title:"亿达信息软件园",num:"9.07"},
                {title:"大连天地",num:"13.14"},
                {title:"武汉产业二三期",num:"6.66"},
                {title:"轻资产在管项目",num:"364.08"},
            ],
            listIndex:0,
            echartsData: [
                    {value:44, name:'软件外包与服务'},
                    {value:16, name:'新一代信息技术'},
                    {value:6, name:'智能制造'},
                    {value:8, name:'高端装备'},
                    {value:5, name:'大健康'},
                    {value:10, name:'科技金融'},
                    {value:12, name:'数字文创'},
                    {value:12, name:'节能环保'},
            ],
            CustomerData:[
                [
                    {value:7, name:'软件外包与服务'},
                    {value:13, name:'新一代信息技术'},
                    {value:32, name:'智能制造'},
                    {value:12, name:'高端装备'},
                    {value:6, name:'大健康'},
                    {value:10, name:'科技金融'},
                    {value:8, name:'数字文创'},
                    {value:12, name:'节能环保'},
                ],
                [
                    {value:12, name:'软件外包与服务'},
                    {value:36, name:'新一代信息技术'},
                    {value:12, name:'智能制造'},
                    {value:8, name:'高端装备'},
                    {value:5, name:'大健康'},
                    {value:5, name:'科技金融'},
                    {value:10, name:'数字文创'},
                    {value:12, name:'节能环保'},
                ],
                [
                    {value:44, name:'软件外包与服务'},
                    {value:16, name:'新一代信息技术'},
                    {value:6, name:'智能制造'},
                    {value:8, name:'高端装备'},
                    {value:5, name:'大健康'},
                    {value:10, name:'科技金融'},
                    {value:12, name:'数字文创'},
                    {value:12, name:'节能环保'},
                ],
                [
                    {value:14, name:'软件外包与服务'},
                    {value:10, name:'新一代信息技术'},
                    {value:20, name:'智能制造'},
                    {value:14, name:'高端装备'},
                    {value:12, name:'大健康'},
                    {value:10, name:'科技金融'},
                    {value:8, name:'数字文创'},
                    {value:12, name:'节能环保'},
                ],                
                [
                    {value:11, name:'软件外包与服务'},
                    {value:19, name:'新一代信息技术'},
                    {value:10, name:'智能制造'},
                    {value:8, name:'高端装备'},
                    {value:2, name:'大健康'},
                    {value:10, name:'科技金融'},
                    {value:17, name:'数字文创'},
                    {value:23, name:'节能环保'},
                ],
                [
                    {value:44, name:'软件外包与服务'},
                    {value:16, name:'新一代信息技术'},
                    {value:6, name:'智能制造'},
                    {value:8, name:'高端装备'},
                    {value:5, name:'大健康'},
                    {value:10, name:'科技金融'},
                    {value:12, name:'数字文创'},
                    {value:12, name:'节能环保'},
                ]
            ]
        }
    },
    mounted(){
        this.top_content();// 初始化柱形图数据
        this.bottom_content();// 初始化环形图数据
    },
    methods:{
        addClassTap(index){
            this.listIndex = index;
            this.echartsData = this.CustomerData[index];
            this.bottom_content();
            // console.log("=======",index,this.listIndex)
        },
        top_content(){// 柱形统计图
                var myChart = echarts.init(document.getElementById('top_content'));// 绑定dom元素
                var data = [51.1, 41.4, 76.3, 99.7, 84.5, 94.2];
                var xMax = 120;
                var option = {
                    backgroundColor:'rgba(0, 0, 0, 0)',
                    tooltip: {
                        trigger: 'item',
                        formatter: "{b}: {c} % ",
                    },
                    grid: {// 统计图在画布的位置
                        left: '0',
                        right: '10%',
                        top: '5%',
                        bottom:'20%',
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
                            data: ['轻资产在管项目','武汉产业二三期','大连天地','亿达信息科技园','大连科技城','大连软件园'],
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
                            name:'100',
                            type:'bar',
                            stack: '总量',
                            z: 3,
                            barWidth:'30%',
                            data: [51.1, 41.4, 76.3, 99.7, 84.5, 94.2],
                            itemStyle: { 
                                normal: {
                                    // barBorderRadius:[2,2,0,0], 
                                    color: function(params) {
                                        // build a color map as your need.
                                        var colorList = [
                                        '#01dcfc','#26d4be','#acd598','#c75386','#514fa6',
                                        '#018ffc','#9BCA63','#FAD860','#F3A43B','#60C0DD'
                                        ];
                                        return colorList[params.dataIndex]
                                    },
                                    label: {
                                        show: true,
                                        textStyle: {
                                            fontSize: '12',
                                            fontFamily: '微软雅黑'
                                        },
                                        position: 'right'
                                    }
                                }
                            },
                            barWidth:10,
                        },
                        { 
                            name:'占位',
                            type: 'bar',
                            barWidth:'30%',
                            barGap:'-100%',
                            silent:true,
                            itemStyle: {
                                normal: {
                                    color: '#0e202b',
                                }
                            },
                            data: data.map(function(d){
                                return xMax
                            }),
                            barWidth:10,
                        },
                        
                    ]
                    };
                myChart.setOption(option);
        },
        bottom_content(){// 环形统计图
            var myChart = echarts.init(document.getElementById('content_3_3'));
            let option = {
                color:['#01dcfc','#2f8ce3','#7b61c9','#c75385','#acd598','#667f92','#485b6a','#374651'],
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}:{d}%",
                },
                legend:[
                    {// data文字的样式
                        orient: 'horizontal',  
                        // x: 'right',
                        left:'2%',
                        itemWidth: 10,
                        itemHeight: 10,
                        bottom:'30%',
                        right:'5%',
                        align:"left",
                        itemGap:20,
                        data:['软件外包与服务'],
                        textStyle:{//图例文字的样式
                            color:'#39c5ec',
                            fontSize:12,
                                
                        },
                        formatter: function (params) {
                            console.log(params);
                            for (var i = 0; i < option.series[0].data.length; i++) {
                                if (option.series[0].data[i].name == params) {
                                    return  Number(option.series[0].data[i].value) +'%'+' '+ params

                                }
                            }
                        }
                    },
                    {// data文字的样式
                        orient: 'horizontal',  
                        // x: 'right',
                        left:'35%',
                        itemWidth: 10,
                        itemHeight: 10,
                        bottom:'30%',
                        right:'5%',
                        align:"left",
                        itemGap:20,
                        data:['新一代信息技术'],
                            textStyle:{//图例文字的样式
                                color:'#39c5ec',
                                fontSize:12,
                                    
                            },
                        formatter: function (params) {
                            console.log(params);
                            for (var i = 0; i < option.series[0].data.length; i++) {
                                if (option.series[0].data[i].name == params) {
                                    return  Number(option.series[0].data[i].value) +'%'+' '+ params

                                }
                            }
                        }                            
                    },
                    {// data文字的样式
                        orient: 'horizontal',  
                        // x: 'right',
                        left:'70%',
                        itemWidth: 10,
                        itemHeight: 10,
                        bottom:'30%',
                        right:'5%',
                        align:"left",
                        itemGap:20,
                        data:['智能制造'],
                            textStyle:{//图例文字的样式
                                color:'#39c5ec',
                                fontSize:12,
                                    
                            },
                        formatter: function (params) {
                            console.log(params);
                            for (var i = 0; i < option.series[0].data.length; i++) {
                                if (option.series[0].data[i].name == params) {
                                    return  Number(option.series[0].data[i].value) +'%'+' '+ params

                                }
                            }
                        }                           
                    },
                    {// data文字的样式
                        orient: 'horizontal',  
                        // x: 'right',
                        left:'2%',
                        itemWidth: 10,
                        itemHeight: 10,
                        bottom:'18%',
                        right:'5%',
                        align:"left",
                        itemGap:20,
                        data:['高端装备'],
                            textStyle:{//图例文字的样式
                                color:'#39c5ec',
                                fontSize:12,
                                    
                            },
                        formatter: function (params) {
                            console.log(params);
                            for (var i = 0; i < option.series[0].data.length; i++) {
                                if (option.series[0].data[i].name == params) {
                                    return  Number(option.series[0].data[i].value) +'%'+' '+ params

                                }
                            }
                        }                           
                    },
                    {// data文字的样式
                        orient: 'horizontal',  
                        // x: 'right',
                        left:'35%',
                        itemWidth: 10,
                        itemHeight: 10,
                        bottom:'18%',
                        right:'5%',
                        align:"left",
                        itemGap:20,
                        data:['大健康'],
                            textStyle:{//图例文字的样式
                                color:'#39c5ec',
                                fontSize:12,
                                    
                            },
                        formatter: function (params) {
                            console.log(params);
                            for (var i = 0; i < option.series[0].data.length; i++) {
                                if (option.series[0].data[i].name == params) {
                                    return  Number(option.series[0].data[i].value) +'%'+' '+ params

                                }
                            }
                        }                           
                    },
                    {// data文字的样式
                        orient: 'horizontal',  
                        // x: 'right',
                        left:'70%',
                        itemWidth: 10,
                        itemHeight: 10,
                        bottom:'18%',
                        right:'5%',
                        align:"left",
                        itemGap:20,
                        data:['科技金融'],
                            textStyle:{//图例文字的样式
                                color:'#39c5ec',
                                fontSize:12,
                                    
                            },
                        formatter: function (params) {
                            console.log(params);
                            for (var i = 0; i < option.series[0].data.length; i++) {
                                if (option.series[0].data[i].name == params) {
                                    return  Number(option.series[0].data[i].value) +'%'+' '+ params

                                }
                            }
                        }                       
                    },
                    {// data文字的样式
                        orient: 'horizontal',  
                        // x: 'right',
                        left:'2%',
                        itemWidth: 10,
                        itemHeight: 10,
                        bottom:'5%',
                        right:'5%',
                        align:"left",
                        itemGap:20,
                        data:['数字文创'],
                            textStyle:{//图例文字的样式
                                color:'#39c5ec',
                                fontSize:12,
                                    
                            },
                        formatter: function (params) {
                            console.log(params);
                            for (var i = 0; i < option.series[0].data.length; i++) {
                                if (option.series[0].data[i].name == params) {
                                    return  Number(option.series[0].data[i].value) +'%'+' '+ params

                                }
                            }
                        }                           
                    },
                    {// data文字的样式
                        orient: 'horizontal',  
                        // x: 'right',
                        left:'35%',
                        itemWidth: 10,
                        itemHeight: 10,
                        bottom:'5%',
                        right:'5%',
                        align:"left",
                        itemGap:20,
                        data:['节能环保'],
                            textStyle:{//图例文字的样式
                                color:'#39c5ec',
                                fontSize:12,
                                    
                            },
                        formatter: function (params) {
                            console.log(params);
                            for (var i = 0; i < option.series[0].data.length; i++) {
                                if (option.series[0].data[i].name == params) {
                                    return  Number(option.series[0].data[i].value) +'%'+' '+ params

                                }
                            }
                        }                         
                    },
                ],
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['23%', '37%'],
                        center: ['21.5%', '31%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {// 鼠标移上的样式
                                show: true,
                                textStyle: {
                                    fontSize: '12',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:this.echartsData
                    }
                ]
            };
            myChart.setOption(option);
        }
    }
}
</script>

<style lang="scss" scoped>
#parkRight{
    // .content_3_top,.content_3_middle,.content_3_bottom{border:1px solid red}
    width:100%;
    height: 100%;
        .content_3_top{
            width:100%;
            // height: 100%;
            height: 25.18%;
            // height: 24.07%;
            #top_content{
                // height: 13.88%;
            }
        }
        .content_3_middle{// 园区出租面积列表样式
            width:100%;
            // height: 25.18%;
            margin:2.77% 0;
            .text-title{
                color: #39c5ec;
                text-align: right;
                margin-bottom:0.4%;
                font-size: 12px;
            }
            .group-content{
                background:url(../../assets/images/title.png);
                width: 100%;height: 18px;display: inline-block;margin:0.2% 0;
            }
            .content_list{height:100%;width:100%;
                margin-top: 1%;
                font-size: 12px;
                ul{height:100%;width:100%;
                    li:nth-of-type(even){
                        background: #0d1e29;
                    }
                    li:nth-of-type(odd){
                        background: #0c2e39;
                    }
                }
                .subList{
                    height: 10.29%;
                    padding:1% 0;
                    width:100%;
                }
                span{
                    color: #39c5ec;
                }
                .list-left{
                    margin-left: 2%;
                    float: left;
                }
                .list-right{
                    margin-right: 2%;
                    float: right;
                }
            }
        }
        .content_3_bottom{// 环形图背景图和列表样式
            width:100%;
            height: 33.24%;
            // margin-top: 3%;
            position: relative;
            .bottom_content{
                height: 350px;
                background: url(../../assets/images/radius.png)  no-repeat;
                background-position-x:0;
                background-position-y: 20px;
                #content_3_3{
                    background: url(../../assets/images/border.png)  no-repeat;
                    background-size: 100% 40%!important;
                    background-position:bottom;
                    background-position-x:0;
                }
            }
            .radius-boder{
                position: absolute;
                top: 17%;
                left: 0;
            }
            .border-oblong{
                position: absolute;
                bottom: -10%;
                left: 0;
            }
            
            .bottom-title{
                position: absolute; 
                right: 0px;
                top: 58px;
                width: 230px;
                height: 28px;
                z-index: 2;
                .title-list{
                    color: #39c5ec;
                    text-align: right;
                    height: 28px;
                    line-height: 28px;
                    width: 230px;
                    padding-right: 10px;
                    color: #1e596f;
                    font-size: 12px;
                    cursor:pointer;
                }
                // .title-list:hover {
                //     color: #39c5ec;
                //     text-align: right;
                //     height: 28px;
                //     width: 230px;
                //     line-height: 28px;
                //     padding-right: 10px;
                //     background: url(../../assets/images/border-list.png) left center no-repeat;
                //     background-size: 100% 100%;
                //     color: #3cd1fa;
                //     font-size: 12px;
                // }
                .active{
                    background: url(../../assets/images/border-list.png) left center no-repeat;
                    background-size: 100% 100%;
                    color: #3cd1fa;
                }
            }
        }
}
</style>
