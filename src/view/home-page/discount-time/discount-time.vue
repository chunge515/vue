<template>
    <div class="discount-time">
        <div class="discount-time-img">
            <img src="@/assets/img/discount-time.png" alt="" class="discount-img">
            <button class="view-all">查看全部</button>
        </div>
        <div class="discount-goods">
            <div class="discount-box">
                <div class="discount-good">
                    <div class="good-img">
                        <img src="@/assets/img/good.png" alt="">
                    </div>
                    <div class="good-name">   
                        美的净水器家用直饮自来水过滤器反渗透
                    </div>
                    <div class="good-money"> 
                        <span class="good-price">￥600</span>
                        <s class="good-price-before">￥900</s>
                    </div>
                    <div class="good-endtime">
                        <span class="endtime-title">距离结束时间：</span>
                        <span class="endtime">3天</span>
                        <span>:</span>
                        <span  class="endtime">02</span>
                        <span>:</span>
                        <span class="endtime">12</span>
                        <span>:</span>
                        <span class="endtime">23</span>
                    </div>
                </div>
                <div class="discount-good">
                    <div class="good-img">
                        <img src="@/assets/img/good.png" alt="">
                    </div>
                    <div class="good-name">   
                        美的净水器家用直饮自来水过滤器反渗透
                    </div>
                    <div class="good-money"> 
                        <span class="good-price">￥600</span>
                        <s class="good-price-before">￥900</s>
                    </div>
                    <div class="good-endtime">
                        <span class="endtime-title">距离结束时间：</span>
                        <span class="endtime">3天</span>
                        <span>:</span>
                        <span  class="endtime">02</span>
                        <span>:</span>
                        <span class="endtime">12</span>
                        <span>:</span>
                        <span class="endtime">23</span>
                    </div>
                </div>
                <div class="discount-good">
                    <div class="good-img">
                        <img src="@/assets/img/good.png" alt="">
                    </div>
                    <div class="good-name">   
                        美的净水器家用直饮自来水过滤器反渗透
                    </div>
                    <div class="good-money"> 
                        <span class="good-price">￥600</span>
                        <s class="good-price-before">￥900</s>
                    </div>
                    <div class="good-endtime">
                        <span class="endtime-title">距离结束时间：</span>
                        <span class="endtime">3天</span>
                        <span>:</span>
                        <span  class="endtime">02</span>
                        <span>:</span>
                        <span class="endtime">12</span>
                        <span>:</span>
                        <span class="endtime">23</span>
                    </div>
                </div>
                <div class="discount-good">
                    <div class="good-img">
                        <img src="@/assets/img/good.png" alt="">
                    </div>
                    <div class="good-name">   
                        美的净水器家用直饮自来水过滤器反渗透
                    </div>
                    <div class="good-money"> 
                        <span class="good-price">￥600</span>
                        <s class="good-price-before">￥900</s>
                    </div>
                    <div class="good-endtime">
                        <span class="endtime-title">距离结束时间：</span>
                        <span class="endtime">3天</span>
                        <span>:</span>
                        <span  class="endtime">02</span>
                        <span>:</span>
                        <span class="endtime">12</span>
                        <span>:</span>
                        <span class="endtime">23</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .discount-time {
        width: 10rem;
        height: 15.346rem;
        background-color: #fff;
        margin-top: 0.24rem;
       
        .discount-time-img {
            width: 10rem;
            height: 3.466rem;
            background-color: #E2EAF5;
            position: relative;
               .discount-img{
                   width: 100%;
                   height: 100%;
                   
               }
                 .view-all {
                width: 2.466rem;
                height: 0.64rem;
                background-color: #4A96FF;
                border-radius: 24px;
                margin-top: 2.16rem;
                color: #fff;
                font-size: 0.373rem;
                position: absolute;
                top: 0px;
                left: 50%;
                margin-left: -1.233rem;

             }
        }
        .discount-goods {
            width: 10rem;
            height: 11.88rem;
           
            overflow: hidden;
            .discount-box{
                width: 10rem;
                height: 11.08rem;
               
                margin-top: 0.6rem;
                .border-left{
                    border-right: 1px solid #E8E8E8;
                    border-bottom: 1px solid #E8E8E8;
                }
                .border-right{
                     border-left: 1px solid #E8E8E8;
                    border-top: 1px solid #E8E8E8;
                }
                .discount-good{
                    width: 4.986rem;
                    height: 5.68rem;

                    float: left;
                    .good-img{
                        width: 2.4rem;
                        height: 2.4rem;
                       
                        margin: 0 auto;
                    }
                    .good-name {
                        height: 1.066rem;
                        color: #4e4e4e;
                        font-size: 0.373rem;
                        margin-left: 0.453rem;
                        text-align: left;
                        margin-top: 0.266rem;
                    }
                    .good-money{
                       width: 4.073rem;
                        height: 0.653rem;
                         margin-left: 0.453rem;
                         line-height: 0.653rem;
                        .good-price {
                            color: #D7282D;
                            font-size: 0.426rem;
                         float: left;
                         font-weight:bold;
                        }
                        .good-price-before{
                            color: #999999;
                            font-size: 0.266rem;
                             float: left;
                        margin-left: 0.133rem;
                        }
                    }
                    .good-endtime{
                        margin-top: 0.266rem;
                        font-size: 0.266rem;
                         margin-left: 0.453rem;
                         .endtime-title{
                             color: #46587C;
                         }
                         .endtime{
                             background-color: #333;
                             color: #fff;
                             font-size: 0.24rem;
                             display: inline-block;
                             border-radius: 3px;
                             padding: 1px;
                         }
                    }
                }
            }
        }
       
    }
</style>
<script>
export default {
    data(){
        return {
        }
    }
}
</script>
