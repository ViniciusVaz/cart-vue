<template>
    <div class="product-item">
        <div class="product-item__image">
            <img src="/images/camiseta.jpg" alt="">
        </div>
        <div class="product-item__info">
            <div class="product-item__info__name">
                {{ product.title }}
            </div>
            <div class="product-item__info__price price">
                <span class="price__currency">
                    {{ product.currencyFormat }}
                </span>
                <span class="price__value">
                    {{ product.price }}
                </span>
            </div>
        </div>
        <div class="product-item__button" @click="addProduct(product)">
            ADD TO CART
        </div>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'

    export default {
        name: "Product-Item",
        props: {
            product: {
                type: Object,
                default: {}
            }
        },
        methods: {
            ...mapActions([
                'addProduct'
            ])
        }
    }
</script>
<style lang="scss" scoped>
    .product-item {
        font-family: 'Open Sans', sans-serif;
        width: 205px;
        padding: 0 15px 40px 15px;

        &__image {
            text-align: center;
        }

        &__info {
            &__name {
                font-size: 14px;
                height: 42px;
                text-align: center;
            }

            &__price {
                font-weight: bold;
                position: relative;
                text-align: center;

                &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translate(-50%);
                    width: 15px;
                    height: 2px;
                    background-color: #dfbd00;
                }
            }

            .price {
                &__currency {
                    font-size: 12px;
                }

                &__value {
                    font-size: 24px;
                    font-weight: bold;
                }
            }
        }

        &__button {
            height: 35px;
            background-color: #000;
            border: 1px solid #fff;
            transition: background .4s ease;

            font-size: 14px;
            color: #fff;
            
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 10px;

            &:hover {
                background-color: #fff;
                border: 1px solid #000;
                color: #000;
                cursor: pointer;
            }
        }
    }
</style>