<template>
    <div :class="['cart-list', { 'cart-list--active': toggle.toogle }]">
        <div class="cart-list__header">
            <div class="cart-list__header__close" @click="toogle()"></div>
            <div class="cart-list__header__icon" :data-count="cart.count"></div>
            <h3>Sacola</h3>
        </div>
        <div class="cart-list__body">
            <template v-for="product in cart.products">
                <cart-item :product="product"></cart-item>
            </template>
        </div>
        <div class="cart-list__footer">
            <div class="cart-list__footer__total total">
                <span>Subtotal</span>
                <span class="total__value"> R$ {{ cart.total }}</span>
            </div>
            <div class="cart-list__footer__button">
                Comprar
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex'

    import CartItem from '_components/cart/cart-item.vue'

    export default {
        name: "Cart-list",
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
            ])
        },
    }
</script>
<style lang="scss" scoped>
    .cart-list {
        font-family: 'Open-sans', 'sans-serif';
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
        padding: 0 20px;

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

            > h3 {
                color: #fff;
                padding-left: 20px;
                text-transform: uppercase;
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
                height: 42px;
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
                }
            }
        }

        &__footer {
            &__total {
                font-size: 18px;
                font-weight: bold;
                color: #737376;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 30px 0;
            }

            .total__value {
                color: #dfbd00;
                font-weight: bold;
                font-size: 24px;
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
</style>