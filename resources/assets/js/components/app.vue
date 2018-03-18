<template>
    <div>
        <cart></cart>
        <header-store></header-store>
        <product-list></product-list>
    </div>
</template>
<script>
    import HeaderStore from "./header-store.vue"
    import ProductList from "./product/product-list.vue"
    import Cart from "./cart/cart.vue"

    export default {
        components: {
            ProductList,
            HeaderStore,
            Cart
        }
    }
</script>
<style lang="scss"></style>