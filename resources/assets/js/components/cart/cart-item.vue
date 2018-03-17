<template>
    <div class="cart-item">
        <div class="cart-item__remove" @click="removeProduct(product)">
        </div>
        <div class="cart-item__image">
            <img src="/images/camiseta.jpg" alt="">
        </div>
        <div class="cart-item__details">
            <span class="cart-item__details__name">
                {{product.title}}
            </span>
            <div class="cart-item__details__block info">
                <span class="info__quantity">
                    Quantity: {{product.quantity}}
                </span>
                <div class="info__price">
                    <span class="info__price__currency">{{product.currencyFormat}}</span>
                    <span class="info__price__value">{{product.price}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        methods: {
            ...mapActions([
                'removeProduct'
            ])
        },
        props: {
            product: {
                type: Object,
                default: {}
            }
        }
    }
</script>
<style lang="scss" scoped>
    .cart-item {
        font-family: 'Open-sans', sans-serif;
        padding: 15px 0;
        border-bottom: 2px solid #131316;
        display: flex;
        align-items: center;
        position: relative;

        &__image {
            width: 55px;
            height: 55px;
            overflow: hidden;

            img {
                width: 100%;
            }
        }

        &__details {
            width: 100%;
            color: #fff;
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-left: 15px;

            &__name {
                width: 100%;
                text-align: left;
                margin: 0;
                font-weight: 600;
            }

            &__block {
                width: 100%;
                display: flex;
                justify-content: space-between;
            }

            .info {
                &__quantity {
                    margin: 0;
                    font-size: 12px;
                    font-weight: 300;
                    color: #999999;
                    padding-top: 5px;
                }

                &__price {
                    margin: 0;
                    color: #dfbd00;
                    font-size: 14px;
                    padding-top: 5px;
                    
                    &__value {
                        font-weight: bold;
                    }
                }
            }
        }

        &__remove {
            background-image: url(/images/remove.png);
            background-repeat: no-repeat;
            background-position: center;
            width: 16px;
            height: 16px;
            position: absolute;
            top: 15px;
            right: 0;
            cursor: pointer;

            &:hover {
                background-image: url(/images/remove-hover.png);
            }
        }
    }
</style>