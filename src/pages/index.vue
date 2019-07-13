<template>
    <div class="page customer_page">
        <Header />
        <div class="content clearfix">
            <div class="eight_container fl">
                <EightPrecent />
                <EightNumber />
                <EightInvest />
            </div>
            <div class="customer_container fl">
                <div class="info_list clearfix">
                    <div class="list fl" v-for="(item,index) in names">
                        <div class="name fl">{{item}}</div>
                        <div class="val titleff fr">{{vals[index]}}</div>
                    </div>
                </div>
                <div class="survey">
                    <div class="survey_l fl">
                        <SurveyLight />
                    </div>
                    <div class="survey_r fr">
                        <SurveyProperty />
                        <SurveyComAna />
                        <SurveyComType />
                    </div>
                </div>
            </div>
            <div class="park_container fl">
                <CompanyAnalysis />
                <EmployeeAnalysis />
            </div>
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header';
import EightPrecent from '@/components/index/eightPrecent';
import EightInvest from '@/components/index/eightInvest';
import EightNumber from '@/components/index/eightNumber';
import CompanyAnalysis from '@/components/index/companyAnalysis';//在园企业性质分析
import EmployeeAnalysis from '@/components/index/employeeAnalysis';//在园企业员工规模
import SurveyComAna from '@/components/index/surveyComAna'//入驻企业性质占比
import SurveyLight from '@/components/index/surveyLight'
import SurveyProperty from '@/components/index/surveyProperty'//持有物业运营情况
import SurveyComType from '@/components/index/surveyComType'//入驻企业类别数量
export default {
    name: 'customer',
    components:{
        Header,
        EightPrecent,
        EightNumber,
        EightInvest,
        CompanyAnalysis,
        EmployeeAnalysis,
        SurveyComAna,
        SurveyLight,
        SurveyProperty,
        SurveyComType,
    },
    data () {
        return {
            names: ['总量','世界五百强','行业百强','独角兽企业','上市公司','其他'],
            vals: [916,61,86,5,74,720],
            math: [0,0,0,0,0,0]
        }
    },
    methods:{
        count(count,name){
            let _this = this;
            let div_by = count>100?100:count,
            speed = Math.floor(count / div_by) || 1,
            sum=0,
            run_count = 1,
            int_speed = 50;
            if(count==0){
                _this.$set(math,name,count);
                return 
            }
            var int = setInterval(function () {
                if (run_count <= div_by&&speed!=0) {
                    _this.$set(_this.math,name,(sum=speed * run_count));
                    run_count++;
                } else if (sum < count) {                   
                    _this.$set(_this.math,name,++sum);
                } else {
                    clearInterval(int);
                }
            }, int_speed);
        },
    },
    mounted(){
        // let _this = this;
        // this.vals.forEach((item,index)=>{
        //     this.count(_this.vals[index],index);
        // })
    }
}
</script>

<style lang="scss" scoped>
.customer_page{
    color: #fff;
    .eight_container {
        height: 100%;
        width: 23.4375%;
        padding-left: 30px;
        .e_invest,
        .e_number,
        .e_precent {
            height: 33.33333333333333%
        }
    }
    .customer_container {
        height: 100%;
        width: 53.125%;
        padding: 0 2.5%;
        .info_list {
            .list {
                width: 32.17%;
                height: 70px;
                margin-bottom: 10px;
                margin-right: 1.568627%;
                background: url(../assets/images/info-list.png) center center no-repeat;
                &:nth-child(3n) {
                    margin-right: 0;
                }
                .name {
                    font-size: 16px;
                    padding-left: 8px;
                    padding-top: 8px;
                }
                .val {
                    font-size: 36px;
                    color: #01dcfb;
                    padding-top: 4px;
                    padding-right: 10px;
                }
            }
        }
        .survey {
            height: 83.838%;
            .survey_l {
                width: 47.826%;
            }
            .survey_r {
               height: 100%;
               width: 47.826%;
            }
        }
    }
    .park_container {
        height: 100%;
        width: 23.43%;
        padding-right: 30px;
        .c_analysis,
        .e_analysis {
            height: 50%;
        }
    }
}
</style>
