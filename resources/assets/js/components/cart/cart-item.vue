<template>
    <div :class="['cart-item' , disabled ? 'cart-item--disabled' : '']">
        <div class="cart-item__remove" @click="removeProduct(product)" @mouseover="hoverRemoveItem()" @mouseleave="hoverRemoveItem()">
        </div>
        <div class="cart-item__image">
            <img src="/images/camiseta.jpg" alt="">
        </div>
        <div class="cart-item__details">
            <span class="cart-item__details__name">
                {{product.title}}
            </span>
            <div class="cart-item__details__variation">
                <span class="cart-item__details__variation__selected">{{product.selectedVariation}} | {{product.style}}</span>
            </div>
            <div class="cart-item__details__block info">
                <span class="info__quantity">
                    Quantity: {{ product.quantity }}
                </span>
                <div class="info__price">
                    <span class="info__price__currency">{{ product.currencyFormat }}</span>
                    <span class="info__price__value">{{ formatPrice(product.price) }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex'
    import formatPrice from '_helpers/index'

    export default {
        data () {
            return {
                disabled: false
            }
        },
        methods: {
            ...mapActions([
                'removeProduct'
            ]),
            hoverRemoveItem() {
                return this.disabled = !this.disabled
            },
            formatPrice
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
        padding: 15px 20px;
        display: flex;
        align-items: center;
        position: relative;

        &::after {
            content: '';
            width: calc(100% - 40px);
            height: 2px;
            background-color: #131316;
            position: absolute;
            bottom: 0;
            left: 20px;
        }

        &--disabled {
            background-color: #131316;

            .cart-item {
                &__details {
                    &__name {
                        text-decoration: line-through;
                    }

                    .info {
                        &__quantity {
                            text-decoration: line-through;
                        }
                        &__price {
                            > span {
                                text-decoration: line-through;
                            }
                        }
                    }
                }
            }
        }

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

            &__variation {
                width: 100%;
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
            right: 20px;
            cursor: pointer;

            &:hover {
                background-image: url(/images/remove-hover.png);
            }
        }
    }
</style>