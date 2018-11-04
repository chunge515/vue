<template>
    <div class="home">
       <logo></logo>
       <tab-nav></tab-nav>
       <swipe-show></swipe-show>
       <discount-time></discount-time>
       <purchase-restrict></purchase-restrict>
       <theme-shopping></theme-shopping>
       <new-product></new-product>
       <recommend-commodities></recommend-commodities>
    </div>
</template>

<script>
    import {
        mapActions,
        mapGetters
    } from "vuex";
    import imgLogo from "@/assets/img/logo.png"
    import Cookies from 'js-cookie'
    import logo from "./home-logo/home-logo.vue"
    import tabNav from "./tab-nav/tab-nav.vue"
    import swipeShow from "./swipe-show/swipe-show.vue"
    import discountTime from "./discount-time/discount-time.vue"
    import purchaseRestrict from "./purchase-restrict/purchase-restrict.vue"
    import themeShopping from "./theme-shopping/theme-shopping.vue"
    import newProduct from "./new-product/new-product.vue"
    import recommendCommodities from "./recommend-commodities/recommend-commodities.vue"
    export default {
        name: "index",
        components:{
            logo,
            tabNav,
            swipeShow,
            discountTime,
            purchaseRestrict,
            themeShopping,
            newProduct,
            recommendCommodities
        },
        data() {
            return {
              
            };
        },
        computed: {
          
        },
        created(){
            
        },
        mounted(){
            
        },
        methods: {
           
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.home{
    background-color: #f7f7f7;
    padding-bottom: 0.853rem;
}
.header {
    text-align: center;
    padding: 20px 0;
    
}

.box {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        width: 120px;
        text-align: center;
    }
}

</style>
