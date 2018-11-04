<template>
    <div class="home-logo">
        <div class="logo">
            <img class="logo-img" src="@/assets/img/logo.png" alt="">
        </div>
        <div class="search">
            <img src="@/assets/img/search.png" alt="" class="search-img">
            <span class="search-hot">{{ msg }}</span>
        </div>
     
    </div>
</template>
<style lang="less" scoped>
    .home-logo{
     
        width: 10rem;
        height: 1.173rem;
       
        .logo{
            width: 1.786rem;
            height: 0.453rem;
            margin-top: 0.453rem; 
            margin-left: 0.56rem;
            float: left;
            
            .logo-img{
              width: 100%;
              height: 100%;
              float: left;
          }
            
           
        }
        .search {
            width: 6.786rem;
            height: 0.8rem;
          
            float: left;
            margin-left: 0.4666rem;
            margin-top: 0.28rem;
            
            border-radius:8px;
            border:1px solid #D9D9D9;
            
            .search-img {
                width: 0.293rem;
                height: 0.293rem;
                margin-left: 0.213rem;
                margin-top: 0.253rem;
                float: left;
            }
            .search-hot{
                font-size: 0.32rem;
                color: #A5A5A5;
                 margin-left: 0.213rem;
                margin-top: 0.186rem;
                float: left;
            }
        }
       
    }
</style>
<script>
export default {
    data(){
        return {
            msg:"中秋佳节",
             
        }
    }
}
</script>
