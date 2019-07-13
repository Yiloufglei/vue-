<template>
    <div  class="casbox">
        <div class="c_analysis">
            <Gheader :title="title" ></Gheader>
            <img src="../../assets/images/companyAstop.png">
        </div>
        <div class="centre">
            <ul>
                 <li v-for="(item,index) in names">{{item}}<div><p>{{vals[index]}}</p></div></li>
            </ul>
        </div>
    </div>
</template>

<script>
import Gheader from '@/components/Gheader';
export default {
    components:{
        Gheader,
    },
    name: 'companyAnalysis',
    data () {
        return {
            title: '在园企业性质分析',
            names: ['国有全资','国有控股','国有参股','民营主板','民营中小板','民营新三板','民营港股','民营非上市','中外合资','外商独资','政府部门','商业配套','其他'],
            vals: [5,5,1,9,4,5,1,468,1,4,10,2,2]
        }
    },
    methods : {
    }
}
</script>

<style lang="scss" scoped>
.casbox{
    height: 49.4%;
    .c_analysis{
        width: 100%;
        img{
            margin-top: 3.8%;
            display: block;
            width: 100%;
            height: 100%;
        }
    };
    .centre{
        width: 100%;
        height: 85.07%;
        margin-top: 0.61%;
        font-size: 12px;
        ul{
            height: 100%;
            li{
                height: 7.69%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: #3cd1fa;
                div{
                    width: 11.9%;
                    height: 77.42%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: url(../../assets/images/companyAslistbj.png) center center no-repeat;
                }
            }
            li:nth-child(5n+1){
                border-bottom: 1px solid #197971;
            }
            li:nth-child(5n+2){
                border-bottom: 1px solid #5b7459;
            }
            li:nth-child(5n+3){
                border-bottom: 1px solid #693350;
            }
            li:nth-child(5n+4){
                border-bottom: 1px solid #2d3160;
            }
            li:nth-child(5n+5){
                border-bottom: 1px solid #05518b;
            }
        }
    }
}
</style>



