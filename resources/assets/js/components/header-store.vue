<template>
    <div class="header">
        <div class="header__content">
            <div :class="['header__content__cart-icon']" :data-count="cart.count" @click="toogle()"></div>
        </div>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex'

    export default {
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
                'toogle'
            ])
        },
    }
</script>
<style lang="scss" scoped>
    .header {
        background-color: #0d0d0d;
        position: relative;
        width: 100%;
        height: 50px;
        margin-bottom: 15px;
        
        &__content {
            max-width: 750px;
            margin: 0 auto;
            position: relative;

            &__cart-icon {
                background-image: url('/images/cart.png');
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
                width: 30px;
                height: 42px;
                position: absolute;
                top: 3px;
                right: 10px;
                cursor: pointer;

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
    }
</style>