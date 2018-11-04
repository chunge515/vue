<template>
    <div>我是商品列表</div>
</template>
<style lang="less" scoped>

</style>
<template>
    <div id="goods-list">我是商品列表
         
          <van-tabbar-item icon="close"  to="/"></van-tabbar-item>
       
        <div class="home-shaixuan">
            <div class="shaixuan-fenlei">
                <span>{{fenlei}}</span>
                <ul>
                    <li v-for="(item,index) in fenleis" :key="index"  @click="changeBackground">{{ item.name}}</li>
                </ul>
            </div>
            <div class="shaixuan-pinpai">
                <span>{{pinpai}}</span>
                <ul>
                    <li v-for="(item,index) in pinpais" :key="index">{{ item.name}}</li>
                </ul>
            </div>
            <div class="shaixuan-pinpai">
                <span>{{pinpai}}</span>
                <ul>
                    <li v-for="(item,index) in pinpais" :key="index">{{ item.name}}</li>
                </ul>
            </div>
            
        </div>
    </div>
    
</template>
<style lang="less" scoped>
#good-list{
    display: flex;  
}
.van-tabbar-item__icon{
    float: right;
}
.van-tabbar-item{
    align-items:right;
}
.shaixuan-fenlei li,.shaixuan-pinpai li{
    font-size: 0.64em;
    width: 1.90rem;
    height: 0.69rem;
    border: #979797 solid 0.02rem;
    float: left;
    color: #333;
    margin-right: 0.40rem;
    margin-top: 0.46rem;
    text-align: center;
    line-height: 0.69rem;
}
.shaixuan-fenlei,.shaixuan-pinpai{
    font-size: 0.37rem;
    color: #333;
    display: inline-block;
    margin-left: 0.46rem;
}
</style>
<script>
export default {
   data(){
       return{
           fenlei:'分类',
           pinpai:'品牌',
           fenleis: [
              { name: '全部' },
              { name: '鼠标' },
              { name: '鼠标垫' },
              { name: '机箱' },
              { name: 'CPU' },
              { name: '硬盘' },
              { name: '内存' },
              { name: '显示器' },
              { name: '电源' },
              { name: '散热器' },
              { name: '装机配件' },
              { name: '散热器' },
              { name: '装机配件' },
            ],
            pinpais: [
              { name: '戴尔' },
              { name: '罗技' },
              { name: '雷柏' },
              { name: '小米' },
              { name: '微软' },
              { name: '英菲克' },
              { name: '美商海盗船' },
            ],
            
       }
   },
   methods:{
       changeBackground: function(){
        //    this.style.backgroundColor = '#3C8CFF';
       }
   }
}
</script>


