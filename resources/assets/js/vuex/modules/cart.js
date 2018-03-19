import {
    ADD_PRODUCT,
    REMOVE_PRODUCT
} from './../mutation-types.js'

import growl from 'growl-alert'

import Vue from 'vue'

const cartStorage = JSON.parse(localStorage.getItem('cart'));

export default {
    state: {
        products: cartStorage ? cartStorage.products : [],
        total: cartStorage ? cartStorage.total : 0,
        count: cartStorage ? cartStorage.count : 0
    },
    mutations: {
        [ADD_PRODUCT] (state, product) {
            const productExist = state.products.find(p => (p.key === product.key ))
            
            if (productExist) {
                state.products = state.products.map(p => {
                    if(p.key === product.key) {
                        p.quantity += 1
                    }

                    return p
                })
            } else {
                Vue.set(product, 'quantity', 1)
                state.products.push(product)
            }

            state.total += product.price
            state.count += 1

            localStorage.setItem('cart', JSON.stringify(state));
            
            growl.success('Added to cart')
        },
        [REMOVE_PRODUCT] (state, key) {
            state.products = state.products.filter(p => p.key !== key)
            state.total = state.products.reduce((a, b) => a + (b.price * b.quantity), 0)
            state.count = state.products.length
            
            localStorage.setItem('cart', JSON.stringify(state));

            growl.success('Product removed')
        }
    },
    getters: {
        productsCart: state => state
    },
    actions: {
        addProduct ({ commit }, product) {
            commit(ADD_PRODUCT, product)
        },
        removeProduct ({ commit }, { key }) {
            commit(REMOVE_PRODUCT, key)
        }
    }
}