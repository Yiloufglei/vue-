<template>
    <div class="e_precent">
        <Gheader :title="title"></Gheader>
        <div class="group_info">(单位：%)</div>
        <div class="e_con" ref="e_precent">
            <ep-pie v-for="(item,index) in data" :data="item" :key="index"></ep-pie>
        </div>
    </div>
</template>

<script>
import epPie from './epPie';
import Gheader from '@/components/Gheader';
export default {
    components:{
        Gheader,
        epPie
    },
    name: 'EightPrecent',
    data () {
        return {
            title: '八大产业占比',
            data:[
                {name: '高端装备',value:'7.0%',color:'rgb(60,209,250)'},
                {name: '智能制造',value:'9.5%',color:'rgb(40,224,200)'},
                {name: '人工智能',value:'1.9%',color:'rgb(172,213,152)'},
                {name: '物联网',value:'11.6%',color:'rgb(199,83,134)'},
                {name: '生命科技',value:'11.2%',color:'rgb(240,97,86)'},
                {name: '军民融合',value:'2.9%',color:'rgb(80,79,166)'},
                {name: '现代服务',value:'39.7%',color:'rgb(0,143,251)'},
                {name: '文创传媒',value:'7.9%',color:'rgb(237,152,95)'}
            ]
        }
    },
    mounted(){
        
    }
}
</script>

<style lang="scss" scoped>
.e_precent{
    .e_con{
        padding: 5px;
        width: 100%;
        height: 69.7%;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        background: #122a39;
        border-radius: 8px;
        overflow: hidden;
        .ep_pie{
            float: left;
            margin-right: 17px;
            margin-top: 13px;
        }
        .ep_pie:nth-child(4n){
            margin-right: 0;
        }
    }
}
</style>


