<template>
    <div  class="employeeAnalysisbox">
        <div class="c_analysis">
            <Gheader :title="title" ></Gheader>
        </div>
        <div class="employeeAnalysisbtm">
            <ul class="employeeAnalysisbtmleft fl">
                <li v-for="(item,index) of peoplelist">
                    <div class="peoplecountingleft fl">
                        <div :id="'myleftChart'+index" style="width: 100%;height:100%;"></div>
                    </div>
                    <div class="peoplecountinglright fl">
                        <p><span></span>{{scalelist[index]}}</p>
                    </div>
                </li>
            </ul>
            <div class="employeeAnalysisbtmright fr">
                <ul class="employeeAnalysisbtmrtop">
                    <li v-for="(item,index) of listname" @click="liclick(index)">{{item}}</li>
                </ul>
                <div class="employeeAnalysisbtmrbtm">
                    <div id="right_content" style="width: 100%;height: 67.5%;"></div>
                    <div class="enterprisenumber">
                        <p><span></span></p>
                        <h3>企业总数</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Gheader from '@/components/Gheader';
import echarts from "echarts"
export default {
    components:{
        Gheader
    },
    name: 'employeeAnalysis',
    data () {
        return {
           title: '在园企业员工规模',
           listname : ['大连软件园','大连科技城','忆达信息软件园','大连天地','武汉产业二三期','轻资产在管项目',],
           peoplelist : [141,54,10,4],
           scalelist : ['0-100人','100-500人','500-1000人','>1000人']
        }
    },
    methods : {
        liclick (data) {
            var arr = [[141,54,10,4],[47,2,1,0],[1,0,0,1],[0,0,0,0],[2,1,0,0],[599,40,3,2]];
            this.peoplelist = arr[data]
            var li = document.getElementsByClassName('employeeAnalysisbtmrtop')[0].children;
            for(var i =0; i <li.length;i++){
                li[i].className = '';
            }
            li[data].className = 'BjSetting';
            this.left_content();
        },
        NewNumber(arr){
            let number = 0;
            for(var i = 0; i<arr.length; i++){
                number += arr[i]
            }
            if(number == 0){number = '0'}
            return number
        },
        listbox (val) {
            if(val == 'big'){
                var myleftChart = echarts.init(document.getElementById('right_content'));
                var number =this.NewNumber(this.peoplelist);
                var color = '#01dcfc';
                var little = ['68%', '68.5%'];
                var big = ['71%', '85%'];
                var size = 22;
            }else{
                var myleftChart = echarts.init(document.getElementById('myleftChart'+val));
                var number = this.peoplelist[val];
                if(number == 0){number = '0'};
                var arr = ['#c75386','#acd598','#018ffb','#504fa6'];
                var color =arr[val];
                var little = ['67%', '68.5%'];
                var big = ['76%', '85%'];
                var size = 16;
            }
            var option = {
                    tooltip: {
                        trigger: 'item',
                    },
                    legend: {
                        show: false,
                    },
                    series: [
                        {
                            type:'pie',
                            radius: little,
                            silent :true,
                            color :color,
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    position: 'center',
                                    fontSize: size,
                                },
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                },
                                
                            },
                            data:[
                                {value:33, name:number},
                            
                            ]
                        },{
                            type:'pie',
                            radius: big,
                            silent :true,
                            color :color,
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[
                                {value:33, name:number},
                            
                            ]
                        }
                        
                    ]
                };
            myleftChart.setOption(option);
        },
        left_content () {
            for(var i =0;i<this.scalelist.length;i++){
                this.listbox(i)
            };
            this.listbox('big');
        }
    },
    mounted(){
        this.left_content();// 初始化列表饼形图数据
        var li = document.getElementsByClassName('employeeAnalysisbtmrtop')[0].children;
        li[0].className = 'BjSetting';
    },
}
</script>
<style lang="scss" scoped>
.employeeAnalysisbox{
    width: 100%;
    height: 50.6%;
    padding-top: 8.99%;
    .BjSetting{
        background: url(../../assets/images/hover3.png) center center no-repeat;
        background-size:100% 100%;
        color: #01dcfc;          
    }
    #right_content{
        display: flex;
        justify-content: center;
    }
    .c_analysis{
        width: 100%;
    };
    .employeeAnalysisbtm{
        width: 100%;
        margin-top: 3.2%;
        height: 84.5%;
    }
    .employeeAnalysisbtmleft{
        width: 54.428%;
        height: 100%;
        background-color: #0f2532;
        display: flex;
        flex-wrap: wrap;
        padding: 3.59% 0;
        align-content: space-between;
        &:hover{
            background: url(../../assets/images/hover1.png) center center no-repeat;
            background-size:100% 100%;
        }
        li{
            height: 74px;
            width: 100%;
            color: #02cfee;
            .peoplecountingleft{
                width: 32.39%;
                margin: 0 11.47% 0 10.6%;
                height: 100%;
                font-size: 16px;
            };
            .peoplecountinglright{
                width:44.5%;
                height:100%;
                display: flex;
                align-items: center;
                font-size: 12px;
                p{
                    width:100%;
                    height: 35%;
                    span{
                        width: 14%;
                        height: 7.8%;
                        display: block;
                        background-color: #c75386;
                        margin-bottom: 6.8%;
                    }
                }
            }
        }
        li:nth-child(1) .peoplecountinglright p span{
            background-color: #c75386;
        }
        li:nth-child(2) .peoplecountinglright p span{
            background-color: #acd598;
        }
        li:nth-child(3) .peoplecountinglright p span{
            background-color: #018ffb;
        }
        li:nth-child(4) .peoplecountinglright p span{
            background-color: #504fa6;
        }
     
    }
    .employeeAnalysisbtmright{
        font-size: 12px;
        color: #1e5c73;
        width: 43.5%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
    }
    .employeeAnalysisbtmrtop{
        width: 100%;
        height: 47.69%;
        li{
            width: 100%;
            height: 16.81%;
            text-align: right;
            padding-right: 5.5%;
            border-bottom: 1px solid #10222f;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
        li:hover{
            background: url(../../assets/images/hover3.png) center center no-repeat;
            background-size:100% 100%;
            color: #01dcfc;
            cursor: pointer;
        }
        li:nth-child(2n+1){
            background-color: #102633;
        }
        li:nth-child(2n){
            background-color: #0f2b39;
        }
    }
    .employeeAnalysisbtmrbtm{
        width: 100%;
        height: 50.5%;
        background-color: #0f2633;
        display: flex;
        align-content: space-between;
        flex-wrap: wrap;
        &:hover{
            background: url(../../assets/images/hover2.png) center center no-repeat;
            background-size:100% 100%;
        }
        .enterprisenumber {
            width: 100%;
            height: 32.5%;
            p{
                height: 16.88%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            span{
                display: inline-block;
                width: 8%;
                height: 2px;
                background: #01dcfc;
            }
            h3{
                text-align: center;
                font-size: 12px;
                color: #01dcfc;
            }
        }
    }
}
</style>





