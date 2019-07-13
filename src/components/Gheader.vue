<template>
    <div class="group-head">
        <div>{{title}}</div>
    </div>
</template>

<script>
export default {
    name: 'Gheader',
    data () {
        return {
            
        }
    },
    props:['title']
}
</script>

<style lang="scss" scoped>
.group-head {
    background: url(../assets/images/head.png) left center no-repeat;
    height: 36px;
    width: 100%;
    div {
        text-indent: 75px;
    }
}
</style>
