<template>
    <div class="product-list">
        <template v-for="(product, i) in products">
            <product-item :key="i" :item="product"></product-item>
        </template>
    </div>
</template>
<script>
    import ProductItem from './product-item.vue'
    import ProductService from '../../../../services/products'

    export default {
        data () {
            return {
                products: []
            }
        },
        mounted () {
            this.init()
        },
        methods: {
            init () {
                return ProductService.getProducts().then(result => {
                    if(result.status == 200) {
                        this.products = result.data.products
                    }
                }).catch(error => {
                    console.log(error)
                })
            }
        },
        components: {
            ProductItem
        }
    }
</script>
<style lang="scss" scoped>
    .product-list {
        max-width: 750px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 auto;
    }
</style>