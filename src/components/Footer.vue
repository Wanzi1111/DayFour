<template>
<div class="footer">
    <router-link to="/massge">消息</router-link>
    <router-link to="/mine">我的</router-link>
    <router-link to="/house">空间</router-link>
</div>

</template>
<style lang="scss" scoped>
.footer{
    display: flex;
    flex-wrap: wrap;
    a{
        flex: 3;
    }
}
</style>