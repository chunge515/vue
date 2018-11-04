<template>
    <div class="swipe-show">
      <van-swipe :autoplay="3000">
        <van-swipe-item>
            <img src="@/assets/img/swipe-show.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
              <img src="@/assets/img/swipe-show.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
              <img src="@/assets/img/swipe-show.png" alt="">
        </van-swipe-item>
       
     </van-swipe>
    </div>
</template>
<style lang="less" scoped>
    .swipe-show{
        .van-swipe {
            width: 10rem;
            height: 4.946rem;
            background-color: red;
            .van-swipe-item {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
<script>
export default {
    
}
</script>
