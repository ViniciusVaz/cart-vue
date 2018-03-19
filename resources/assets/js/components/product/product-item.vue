<template>
    <div class="product-item">
        <div class="product-item__image">
            <img src="/images/camiseta.jpg" alt="">
        </div>
        <div class="product-item__info">
            <div class="product-item__info__name">
                {{ product.title }}
            </div>
            <div class="product-item__info__variation variation">
                <template v-for="(variation, key) in product.availableSizes">
                    <div :key="key" :class="['variation__option', activeVariation == key ? 'variation__option--active': '']" @click="selectVariation(key)">
                        <label :for="'variation'+key" class="variation__option__label">{{variation}}</label>
                    </div>
                </template>
            </div>
            <div class="product-item__info__price price">
                <span class="price__currency">
                    {{ product.currencyFormat }}
                </span>
                <span class="price__value">
                    {{ formatPrice(product.price) }}
                </span>
            </div>
        </div>
        <div class="product-item__button" @click="addProduct(product)">
            Add to cart
        </div>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    import formatPrice from '_helpers/index'

    export default {
        name: "Product-Item",
        data() {
            return {
                activeVariation: 0,
                product: {}
            }
        },
        mounted () {
            this.product = Object.assign({}, this.item)
            this.selectVariation(this.activeVariation)
        },
        methods: {
            ...mapActions([
                'addProduct'
            ]),
            formatPrice,
            selectVariation(key) {
                this.activeVariation = key
                this.product = Object.assign({}, this.item, {
                    key: this.item.id + key.toString(),
                    selectedVariation: this.item.availableSizes[key]
                })
            }
        },
        props: {
            item: {
                type: Object
            }
        }
    }
</script>
<style lang="scss" scoped>
    .product-item {
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

            .variation {
                display: flex;
                align-items: center;
                justify-content: center;
                padding-bottom: 10px;

                &__option {
                    min-width: 25px;
                    height: 25px;
                    background-color: #fff;
                    margin: 0 5px;
                    border: solid 1px #202025;

                    &--active {
                        background-color: #ccc;
                    }

                    &__label {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 14px;
                        cursor: pointer;
                    }
                }
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
            text-transform: uppercase;
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