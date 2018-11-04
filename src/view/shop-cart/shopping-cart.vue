<template>
    <div>
        <div class="title">
            购物车
        </div>
        <div class="shopcart">
            <ul>
                <li v-for="(item,index) in shops" :key="index">
                    <div class="shop-name">

                        <van-checkbox-group v-model="result">
                        <van-cell-group>
                            <van-cell
                            v-for="item in list"
                            clickable
                            :key="item"
                            :title="`复选框 ${item}`"
                            @click="toggle(index)"
                            >
                            <van-checkbox :name="item" ref="checkboxes" />
                            </van-cell>
                        </van-cell-group>
                        </van-checkbox-group>


                        <van-checkbox v-model='checked' id="checkbox"></van-checkbox>
                        <span>{{item.name}}</span>
                        <label>></label>
                    </div>
                    <ul>
                        <li v-for='(item,index) in goods' :key='index' class="goods">
                            <van-checkbox v-model='checked' id="checkbox"></van-checkbox>
                            <img src="../../assets/img/Group 8.png" alt="">
                            <div class="goods-right">
                                <p class="goods-name">{{item.name}}</p>
                                <p class="goods-color">{{item.color}}</p>
                                <div class="goods-price">
                                    <span class="item-price">￥{{item.price}}</span>
                                    <span class="item-price-orig">￥{{item.orig}}</span>
                                    <van-stepper v-model="goodsnumber" id="van-stepper"/>
                                </div>
                            </div>    
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="place-an-order">

        </div>
    </div>
</template>
<style lang='less' scoped>
.title{
    width: 10rem;
    height: 1.706rem;
    border: 0.013rem solid #DADADA;
    // margin-bottom: 0.266rem;
}
.shopcart{
    padding-left: 0.4rem;
}
.place-an-order{
    width: 10rem;
    height: 1.253rem;
    border: solid #f00 0.013rem;
    background: #ccc;

    
}
.shop-name{
font-size: 0.32rem;
height: 1.066rem;
line-height: 1.066rem;
display: flex;
border-bottom: #D9D9D9 solid 0.033rem;
margin-top: 0.266rem;
}
.shop-name span{
    display: inline-block;
    margin: 0 0.4rem;
}
.shop-name .van-icon{
    width: 1rem;
}
.goods{
    height:2.666rem;
    // border: 0.013rem solid #f00;
    display: flex;
    font-size: 0.373rem;
    color:#333;
    // line-height: 2.666rem;
    align-items: center;
}
.goods img{
width: 2.133rem;
height: 2.133rem;
margin-left: 0.453rem;
margin-right: 0.32rem;
background: #ccc;

}
.goods-name{
    height: 0.533rem;
    align-items: flex-start;
    margin: 0.06rem 0;
    font-size: 0.373rem;
    color: #333;
   
}
.goods-color{
    height: 0.44rem;
    font-size: 0.32rem;
    color: #999;
}
.goods-right{
    height: 2.133rem;
}
.goods-price{
    height: 0.693rem;
    width: 5.893rem;
    // background: #ccc;
    margin-top: 0.346rem;
    line-height: 0.693rem;
   
}
.item-price{
    color:#D7282D;
}
.item-price-orig{
    color:#999;
}
.item-number{
    display: inline-block;

}

.van-stepper{
    
    float: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 2.346rem;
    height: 0.693rem;
}
</style>
<script>
export default {
    data(){
        return{
            shops:[
                {name: 'ZARA官方旗舰店'},
                {name: 'ZARA官方旗舰店'}
            ],
            goods:[
                {name: '男士经典风衣', color:'s 浅灰',price: '599.00',orig:'990',number:'2'},
                {name: '100%羊毛，男士格纹...', color:'s 浅灰',price:'599.00',number:'4'}
            ],
            checked:false,
            goodsnumber:2
        }
    }
}
</script>

