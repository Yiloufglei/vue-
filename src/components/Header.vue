<template>
    <div class="header">
        <div class="headerNav">
            <router-link to='/park' active-class="active" exact>园区</router-link>
            <router-link to='/' active-class="active" exact>客户</router-link>
            <router-link to='/party' active-class="active" exact>党建</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
        data () {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 90px;
    position: absolute;
    top: 0;
    z-index: 99;
    left: 0;
    text-align: center;
    background: url(../assets/images/header.png) center center no-repeat;
    .headerNav {
        width: 370px;
        height: 100%;
        margin: 0 auto;
        a {
            float: left;
            width: 114px;
            height: 100%;
            margin-right: 14px;
            line-height: 90px;
            font-size: 24px;

            background: url(../assets/images/navNormal.png) center center no-repeat;
            &:last-child {
                margin-right: 0;
            }
            &.active {
                background-image: url(../assets/images/navActive.png);
                color: rgb(1, 220, 251)
            }
            &:hover {
                color: rgb(1, 220, 251);
                transition: all .3s;
            }
            color: rgba(1, 220, 251, .5);
        }
    }
}
</style>
