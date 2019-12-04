<template>
  <div class="home">
    <div class="head">
      <Head/>
    </div>
    <div class="main">
       <router-view/>
    </div>
    <div class="foot">
      <Foot/>
    </div>

  </div>
</template>

<script>
import Head from "../components/Header";
import Foot from "../components/Footer";

export default {
  name: 'home',
  components: {
    Foot,Head
  },
  created() {
    this.$http.get("/getdata").then(res=>{
      this.$store.commit("adddata",res.data)
    })
    // this.$store.actions.dispatch.getdata()
  },
}
</script>
<style lang="scss">
.home{
  width: 100%;
  height: 100%;
    display: flex;
  flex-direction: column;
}
.head{
  width: 100%;
  height: 50px;
  background: skyblue;
  color: #fff;
  line-height: 50px;
  text-align: center;
}
.main{
  width: 100%;
  flex: 1;
  overflow: auto;
}
.foot{
  width: 100%;
  height: 50px;
  background: skyblue;
  color: #fff;
  line-height: 50px;
  text-align: center;
}
  
</style>
