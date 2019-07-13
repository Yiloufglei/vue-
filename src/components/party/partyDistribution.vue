<template>
    <div class="e_precent">
        <div class="e_con">
            <div id="c1"></div>
        </div>
    </div>
</template>

<script>
import G2 from '@antv/g2';
export default {
    name: 'partyDistribution',
    data () {
        return {
            title: '党员数量分布情况'
        }
    },
    methods:{
        init(){
            var data = [{
                country: '巴西',
                population: 18203
            }, 
            {
                country: '印尼',
                population: 23489
            }, 
            {
                country: '美国',
                population: 29034
            }, 
            {
                country: '中国',
                population: 131744
            }];
            var chart = new G2.Chart({
                container:'c1',
                forceFit: true,
                width:320,
                height:200
            });
            chart.source(data);
            chart.axis('country', {
            label: {
                offset: 12
            }
            });
            chart.coord().transpose();
            chart.interval().position('country*population');
            chart.render();
        }

    },
    mounted(){
        this.init();
    }
}
</script>

<style lang="scss" scoped>
.e_precent{
    .e_con{
        width: 100%;
        height: 21.296%;
        background: #122a39;
    }
}
</style>
