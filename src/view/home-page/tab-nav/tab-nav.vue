<template>
       <div class="tab-nav">   
         <ly-tab
            v-model="selectedId"
            :items="items"
            :options="options"
            additionalX="50px">
         </ly-tab>
        </div>
</template>
<style lang="less" scoped>
     .tab-nav {
            margin-top: 0.266rem;
            .ly-tab{
                border: none;
            }
        }
</style>
<script>
export default {
    data(){
        return{
            selectedId: 0,
             items: [
               {label: '推荐'},
               {label: '全部'},
               {label: '鞋子'},
               {label: '衣服'},
               {label: '电器'},
               {label: 'iOS'},
               {label: '产品'},
               {label: '人工智能'},
               {label: '设计'}
             ],
             options: {
               activeColor: '#1d98bd'
               // 可在这里指定labelKey为你数据里文字对应的字段
             },
        }
    }
}
</script>
