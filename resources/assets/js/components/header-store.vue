<template>
    <div class="header">
        <div class="header__content">
            <div :class="['header__content__cart-icon']" @click="toogle()"></div>
        </div>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        computed: {
            ...mapState([
                'toggle'
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
        font-family: 'Open-sans', 'sans-serif';
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
                width: 35px;
                height: 42px;
                position: absolute;
                top: 3px;
                right: 10px;
                cursor: pointer;
            }
        }
    }
</style>