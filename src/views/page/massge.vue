<template>
<div>
  <dl v-for="(item,index) in getdata" :key="index" class="ul-box">
      <dt><img :src=item.img alt=""></dt>
      <dd>
          <h4>{{item.title}}</h4>
          <span>{{item.massge}}</span>
      </dd>
  </dl>
</div>
</template>
<script>
export default {
    computed: {
        getdata(){
            return this.$store.getters.getlist
        }
    }
}
</script>
<style lang="scss" scoped>
.ul-box{
    width: 100%;
    height: 100px;
    display: flex;
    margin: 5px 0;
    dt{
        width: 27%;
        height: 100px;
        float: left;
    }
    dd{
        width: 77%;
        height: 100px; 
        float: right;
        span{
            color: #666;
        }
    }
}
</style>