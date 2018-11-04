<template>
    <div id="app">
        <router-view></router-view>
       <van-tabbar v-model="active">
          <van-tabbar-item icon="wap-home"  to="/">首页</van-tabbar-item>
          <van-tabbar-item icon="cart" to="/shopping-cart">购物车</van-tabbar-item>
          <van-tabbar-item icon="contact">我的</van-tabbar-item>
       </van-tabbar>
    </div>

</template>

<script>

export default {
  name: "App",
  data() {
    return {
       active: 0
    };
  }
};

</script>

<style scoped lang='less'>
  #app{
    padding-bottom:50px;
  }
</style>

