<template>
    <div class="new-product">
         <div class="title">新品发布</div>
        <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
              <div class="good-pic">
                   <img src="@/assets/img/yf.png" alt="" class="good-img">
              </div>
              <p class="good-name">呢绒大衣</p>
              <p class="good-color">深米色</p>
              <p class="good-price">￥599.00</p>
             
          </div>
           <div class="swiper-slide">
              <div class="good-pic">
                   <img src="@/assets/img/yf.png" alt="" class="good-img">
              </div>
              <p class="good-name">呢绒大衣</p>
              <p class="good-color">深米色</p>
              <p class="good-price">￥599.00</p>
             
          </div>
           <div class="swiper-slide">
              <div class="good-pic">
                   <img src="@/assets/img/yf.png" alt="" class="good-img">
              </div>
              <p class="good-name">呢绒大衣</p>
              <p class="good-color">深米色</p>
              <p class="good-price">￥599.00</p>
             
          </div>
           <div class="swiper-slide">
              <div class="good-pic">
                   <img src="@/assets/img/yf.png" alt="" class="good-img">
              </div>
              <p class="good-name">呢绒大衣</p>
              <p class="good-color">深米色</p>
              <p class="good-price">￥599.00</p>
             
          </div>
           <div class="swiper-slide">
              <div class="good-pic">
                   <img src="@/assets/img/yf.png" alt="" class="good-img">
              </div>
              <p class="good-name">呢绒大衣</p>
              <p class="good-color">深米色</p>
              <p class="good-price">￥599.00</p>
             
          </div>
           <div class="swiper-slide">
              <div class="good-pic">
                   <img src="@/assets/img/yf.png" alt="" class="good-img">
              </div>
              <p class="good-name">呢绒大衣</p>
              <p class="good-color">深米色</p>
              <p class="good-price">￥599.00</p>
             
          </div>
        </div>
    </div>
    </div>
</template>
<style lang="less" scoped>
.new-product {
  width: 10rem;
  height: 6.266rem;
  background-color: #fff;
  margin-top: 0.24rem;
  .title {
    height: 1.08rem;
    width: 10rem;
    display: flex;
    text-align: center;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    font-size: 0.373rem;
    color: #333;
  }
  .swiper-container {
    width: 10rem;
    height: 6.266rem;
    .swiper-slide {
        width: 3.6rem;
        height: 4.906rem;
        
        .good-pic{
            width:  2.4rem;
            height: 2.4rem;
            margin: 0 auto;
            margin-top: 0.72rem;
            
           
        
        }
         .good-img{
             width: 100%;
             height: 100%;
          }
          .good-name{
              font-size: 0.32rem;
              margin-left: 0.386rem;
              margin-top: 0.533rem;
          }
          .good-color{
              font-size: 0.24rem;
              color: #232323;
              margin-left: 0.386rem;
          }
          .good-price{
              font-size: 0.32rem;
              color: #D7282D;
              margin-left: 0.386rem;
          }
       
    }
  }
}
</style>
<script>
export default {
  data() {
    return {};
  },
  methods: {
      show(){
      var Swiper = this.$Swiper;
      var mySwiper = new Swiper(".swiper-container", {
        direction: "horizontal",
        loop: false, // 循环模式选项

        slidesPerView:3.2,
        spaceBetween:10,
       
       
      });
  
      }
  },
  mounted() {
      this.$nextTick(()=>{
           this.show()
      })
     
  }
};
</script>

