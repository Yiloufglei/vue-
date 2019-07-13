<template>
    <div class="e_sl">
        <Gheader :title="title"></Gheader>
        <div class="group_info">
            <div class="group_tip">
                <span></span>签约
            </div>
            <div class="group_tip">
                <span class="pay"></span>交付
            </div>
            <div class="group_tip">
                <span class="rent"></span>可租
            </div>
            <div class="group_tip">
                (单位：万平)
            </div>
        </div>
        <div class="e_con">
            <div class="list" v-for="(item,index) in data">
                <div class="title ellips" :title="item.name">{{item.name}}</div>
                <div class="con">
                    <div class="contract fl" :style="'width:'+ (item.contract/150)*width+'%'"></div>
                    <div class="pay fl" :style="'width:'+(item.pay/150)*width+'%'"></div>
                    <div class="rent fl" :style="'width:'+(item.rent/150)*width+'%'"></div>
                    <div class="hover">
                        <div class="title_h">{{item.name}}</div>
                        <div class="item">签约面积：{{item.contract}}</div>
                        <div class="item">交付面积：{{item.pay}}</div>
                        <div class="item">可租面积：{{item.rent}}</div>
                    </div>
                </div>
            </div>
            <div class="list last">
                <div class="title"></div>
                <div class="con clearfix">
                    <div class="fl"><span>0</span></div>
                    <div class="fl"><span>30</span></div>
                    <div class="fl"><span>60</span></div>
                    <div class="fl"><span>90</span></div>
                    <div class="fl"><span>120</span><span>150</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Gheader from '@/components/Gheader';
export default {
    components:{
        Gheader
    },
    name: 'SurveyLight',
    data () {
        return {
            width: 0,
            title: '轻资产运营状况',
            data: [
                {name:'江桥一期',contract: 4.8,pay: 3.4,rent: 3.2},
                {name:'外高桥',contract: 1.4,pay: 1.4,rent: 1.1},
                {name:'丽泽中心',contract: 4.1,pay: 4.1,rent: 3.3},
                {name:'中关村壹号',contract: 49.8,pay: 49.8,rent: 16.6},
                {name:'产业1.1期',contract: 16.8,pay: 16.8,rent: 10.7},
                {name:'海科兴',contract: 7.1,pay: 7.1,rent: 6.9},
                {name:'高铁新城',contract: 20.3,pay: 7.8,rent: 6.1},
                {name:'吴中尚金湾',contract: 40.1,pay: 40.1,rent: 5.8},
                {name:'建业工业园',contract: 5.3,pay: 5.3,rent: 4.0},
                {name:'大仓港城广场',contract: 16.4,pay: 0,rent: 0},
                {name:'长兴开发区',contract: 27,pay: 6.5,rent: 6.5},

                {name:'创美科技产业园',contract: 40,pay: 12.6,rent: 11.7},
                {name:'梅溪湖创新中心',contract: 5.2,pay: 5.2,rent: 5.2},
                {name:'未来港',contract: 32,pay: 0,rent: 0},
                {name:'九华创业园',contract: 32,pay: 32,rent: 9.4},
                {name:'国宾总部',contract: 8.2,pay: 8.2,rent: 5.0},
                {name:'西部北斗产业园',contract: 70,pay: 20,rent: 9.3},
                {name:'绵阳科技城',contract: 6.3,pay: 6.3,rent: 3.1},
                {name:'航空航天城',contract: 70,pay: 12.3,rent: 4.9},
                {name:'香邑广场',contract: 1,pay: 0.8,rent: 0.8},
                {name:'幕府绿色智谷',contract: 44,pay: 0,rent: 0},
                {name:'宝龙广场',contract: 22.7,pay: 0,rent: 0},

                {name:'瑶海都市科技',contract: 42.5,pay: 7.9,rent: 7.9},
                {name:'庐阳DT产业园',contract: 24.3,pay: 0,rent: 0},
                {name:'协同创新港',contract: 20,pay: 2.2,rent: 1.8},
                {name:'哈加国际综合体',contract: 8.9,pay: 8.2,rent: 8.2},
                {name:'长沙科技新城',contract: 54,pay: 25.5,rent: 25.5},
                {name:'两江健康城',contract: 40.5,pay: 4,rent: 11}
            ],
        }
    },
    mounted(){
        this.width = 100;
    }
}
</script>

<style lang="scss" scoped>
.e_sl{
    .group_info{
        font-size: 0;
        .group_tip{
            display: inline-block;
            font-size: 12px;
            line-height: 16px;
            margin-left: 10px;
            cursor: pointer;
            span{
                display: inline-block;
                width: 12px;
                height: 12px;
                border-radius: 2px;
                float: left;
                background: #00e1fb;
                margin-top: 2px;
                margin-right: 4px;
            }
            .pay{
                background: #018ffb;
            }
            .rent{
                background: #C75386;
            }
            &:last-child{
                cursor: default;
            }
        }
    }
    .e_con{
        width: 100%;
        height: 28.7037%;
        padding-top: 12px;
        .list{
            width: 100%;
            height: 14px;
            font-size: 12px;
            margin-bottom: 12px;
            .title{
                float: left;
                width: 22%;
                overflow: hidden;
                color: #3cd1fa;
                text-align: right;
                height: 100%;
                padding-right: 10px;
                overflow: hidden;
            }
            .con{
                width: 78%;
                height: 100%;
                float: left;
                background: #0c1e26;
                position: relative;
                &>div{
                    height: 100%;
                    width: 0;
                    transition: width .5s linear;
                    -webkit-transition: width .5s linear;
                    cursor: pointer;
                }
                .contract{
                    background: #00e1fb;
                }
                .pay{
                    background: #018ffb;
                }
                .rent{
                    background: #C75386;
                }
                .hover{
                    width: 192px;
                    height: 146px;
                    display: none;
                    z-index: 100;
                    padding: 14px 20px;
                    position: absolute;
                    left: 25%;
                    top: -14px;
                    background: url(../../assets/images/dialog_bac.png) center center no-repeat;
                    .title_h{
                        line-height: 26px;
                        text-indent: 2px;
                        margin-bottom: 10px;
                    }
                    .item{
                        width: 152px;
                        height: 24px;
                        line-height: 24px;
                        text-indent: 2px;
                        &:hover{
                            background: url(../../assets/images/s_hover.png) center center no-repeat;
                        }
                    }
                }
                &:hover{
                    .hover{
                        display: block;
                    }
                }
            }
            &:last-child{
                .con{
                    background: none;
                    &>div{
                        width: 20%;
                        text-align: left;
                        color: #3cd1fa;
                        span:nth-child(2){
                            float: right;
                            transform: translate(0,-50%);
                            -webkit-transform: translate(0,-50%);
                        }
                        span:first-child{
                            float: left;
                            transform: translate(-50%,-50%);
                            -webkit-transform: translate(-50%,-50%);
                        }
                    }

                }
            }
        }
    }
}
</style>
