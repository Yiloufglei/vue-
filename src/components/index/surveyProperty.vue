<template>
    <div class="s_pro">
        <Gheader :title="title" class="textsize"></Gheader>
        <div class="group_info">单位:(万平)</div>
        <ul class="list">
            <li v-for="(item,index) of listname">
                <div class="listleft">
                    <img src="../../assets/images/listimg.png" alt="">
                    {{item}}
                </div>
                <div class="listright">
                    <div class="bjbox">
                        <div :style="{width:(listlenght[index])/100*bjboxwidth+'px'}"></div>
                    </div>
                    <span>{{Number(listlenght[index]).toFixed(1)}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import Gheader from '@/components/Gheader';
import echarts from "echarts"
export default {
    components:{
        Gheader,
    },
    name: 'SurveyProperty',
    data(){
        return {
            bjboxwidth : 0,
            title: '持有物业运营概况',
            listname : ['大连软件园','大连科技园','亿达信息软件园','大连腾飞软件园','大连天地软件园','武汉花山软件新城'],
            listlenght : [63.7,14.7,9.1,20.4,33.4,16.1]
        }
    },
    mounted () {
        let x = document.getElementsByClassName('listright')[0].clientWidth;
        this.bjboxwidth = x;
    },
}
</script>
<style lang="scss" scoped>

.s_pro{
    .textsize{
        font-size: 16px;
    }
    font-size: 12px;
    height: 30.84%;
    .list{
        font-size: 12px;
        height: 79.58%;
        padding-left: 10%;
       li{
           width: 100%;
           height: 12.53%;
           border-bottom: 1px solid #0f2530;
           display: flex;
           justify-content: space-between;
           color: #3cd1fa;
           .listleft{
               width:45%;
               display: flex;
               align-items: flex-end;
               img{
                   margin-right: 1.8%;
               }
           }
           .listright{
               height: 100%;
               width: 55%;
               display: flex;
               align-items: flex-end;
               flex-direction :row-reverse;
           }
           .bjbox{
               height: 100%;
               display: flex;
               align-items: flex-end;
               div{
                   transition: width 1s;
               }
           }
            .listright .bjbox div{
                height: 50%;
                background: #28e0c8;
                margin-left:9px;
            };
       }
    }
    
}
</style>

