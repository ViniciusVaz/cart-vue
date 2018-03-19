<template>
    <div>
        <div :class="['cart', { 'cart--active': toggle.toogle }]">
            <div class="cart__header">
                <div class="cart__header__close" @click="toogle()"></div>
                <div class="cart__header__icon" :data-count="cart.count"></div>
                <h3>Sacola</h3>
            </div>
            <div class="cart__body">
                <template v-for="(product, i) in cart.products">
                    <cart-item :key="i" :product="product"></cart-item>
                </template>
            </div>
            <div class="cart__footer">
                <div class="cart__footer__total total">
                    <span class="total__title">Subtotal</span>
                    <span class="total__value">R$ {{ formatPrice(cart.total) }}</span>
                </div>
                <div class="cart__footer__button">
                    Comprar
                </div>
            </div>
        </div>
        <div class="overlay" v-if="toggle.toogle" @click="toogle()"></div>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex'

    import CartItem from '_components/cart/cart-item.vue'
    import formatPrice from '_helpers/index'

    export default {
        name: "Cart",
        components: {
            CartItem
        },
        data () {
            return {
                count: 0
            }
        },
        computed: {
            ...mapState([
                'toggle',
                'cart'
            ])
        },
        methods: {
            ...mapActions([
                'toogle',
            ]),
            formatPrice
        }
    }
</script>
<style lang="scss" scoped>
    .cart {
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 480px;
        background-color: #202025;
        opacity: 0;
        transform: translateX(100%);
        transition: all .4s ease;
        z-index: 1000;
        border-left: 2px solid rgba(32, 32, 37, 0.2);

        @media screen and (max-width: 600px) {
            width: 100%;
        }

        &--active {
            transform: translateX(0);
            opacity: 1;
        }

        &__header {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 150px;
            border-bottom: 2px solid #131316;
            margin: 0 20px;

            > h3 {
                color: #fff;
                padding-left: 20px;
                text-transform: uppercase;
                font-size: 24px;
                font-weight: bold;
            }
            
            &__close {
                background-image: url('/images/close-white.png');
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
                width: 20px;
                height: 20px;    
                position: absolute;
                right: 25px;
                top: 20px;
                transition: background-image .4s ease;
                cursor: pointer;
            }

            &__icon {
                background-image: url('/images/cart.png');
                width: 35px;
                height: 41px;
                position: relative;

                &:after {
                    content: attr(data-count);
                    color: #000;
                    background-color: #dfbd00;
                    position: absolute;
                    right: -5px;
                    bottom: -5px;
                    border-radius: 50%;
                    width: 20px;
                    height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    font-size: 12px;
                }
            }
        }

        &__body {
            overflow-y: auto;
            max-height: calc(100vh - 300px);
        }

        &__footer {
            padding: 0 20px;

            &__total {
                font-size: 18px;
                font-weight: bold;
                color: #737376;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 30px 0;
            }

            .total {
                &__title {
                    text-transform: uppercase;
                    font-size: 14px;
                    font-weight: 400;
                    color: #878789;
                }

                &__value {
                    color: #dfbd00;
                    font-weight: bold;
                    font-size: 24px;
                }
            }

            &__button {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 50px;
                background-color: #000;
                color: #fff;
                text-transform: uppercase;
                transition: background-color .4s ease;
                cursor: pointer;

                &:hover {
                    background-color: lighten(#000, 5%);
                }
            }
        }
    }
    .overlay {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(32, 32, 37, 0.4);
        cursor: pointer;
        z-index: 10;
    }
</style>