<template>
    <div>
        <cart-list></cart-list>
        <header-store></header-store>
        <product-list></product-list>
    </div>
</template>
<script>
    import HeaderStore from "./header-store.vue"
    import ProductList from "./product/product-list.vue"
    import CartList from "./cart/cart-list.vue"

    export default {
        components: {
            ProductList,
            HeaderStore,
            CartList
        }
    }
</script>
<style lang="scss"></style>