<template>
    <div class="product-list">
        <template v-for="product in products">
            <product-item :product="product"></product-item>
        </template>
    </div>
</template>
<script>
    import ProductItem from './product-item.vue'

    export default {
        data () {
            return {
                products: []
            }
        },
        methods: {
            init () {
               this.products = this.$store.state.products
            }
        },
        mounted () {
            this.init()
        },
        components: {
            ProductItem
        }
    }
</script>
<style lang="scss" scoped>
    .product-list {
        font-family: 'Open-sans', 'sans-serif';
        max-width: 750px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 auto;
    }
</style>