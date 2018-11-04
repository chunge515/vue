import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [
        // 按需加载（推荐）
        {
            path: '/',
            name: 'HomePage',
            component: resolve => require(['@/view/home-page/index.vue'], resolve)
        },
        //购物车 
        {
            path: '/shopping-cart',
            name: 'shoppingCart',
            component: resolve => require(['@/view/shop-cart/shopping-cart.vue'], resolve)
        },
        //商品详情
        {
            path: '/goods',
            name: 'goods',
            component: resolve => require(['@/view/goods/goods.vue'], resolve)
        },
        //列表
        {
            path: '/goods-list',
            name: 'goodsList',
            component: resolve => require(['@/view/goods-list/goods-list.vue'], resolve)
        }

    ]
})

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0)
    next()
})

router.beforeResolve((to, from, next) => {
    next()
})

export default router
