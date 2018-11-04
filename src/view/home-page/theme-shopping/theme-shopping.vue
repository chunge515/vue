<template>
    <div class="theme-shopping">
       <div class="theme-title">主题购</div>
       <div class="theme">    
           <div class="theme-box">
               <div class="theme1">
                   <img src="@/assets/img/theme1.png" alt="">
               </div>
               <div class="theme2">
                     <img src="@/assets/img/theme2.png" alt="">
               </div>
               <div class="theme3">
                     <img src="@/assets/img/theme3.png" alt="">
               </div>
                <div class="theme4">
                      <img src="@/assets/img/theme4.png" alt="">
               </div>
           </div>
       </div>
    </div>
</template>
<style lang="less" scoped>
    .theme-shopping{
        width: 10rem;
        height: 7.693rem;
        margin-top: 0.24rem;
       background-color: #fff;
       .theme-title{
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
       .theme{
           .theme-box{
               width: 9.52rem;
               height: 6.293rem;
               margin: 0 auto;
                background-color: #fff;
           }
           .theme1{
               width: 4.706rem;
               height: 4.173rem;
              
                margin-bottom: 0.106rem;
               float: left;
               img{
                   width: 100%;
                   height: 100%;
               }
           }
           .theme2 {
                width: 4.706rem;
               height: 4.173rem;
              
               margin-left:0.106rem; 
               margin-bottom: 0.106rem;
               float: left;
               img{
                   width: 100%;
                   height: 100%;
               }
           }
           .theme3{
                 width: 4.706rem;
                 height: 2rem;
                
                 float: left;
                 img{
                   width: 100%;
                   height: 100%;
               }
           }
           .theme4{
                 width: 4.706rem;
                 height: 2rem;
                 margin-left:0.106rem; 
               
                 float: left;
                 img{
                   width: 100%;
                   height: 100%;
               }
           }
       }
    }
</style>
