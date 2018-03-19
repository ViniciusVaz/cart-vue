import {
    ADD_PRODUCT,
    REMOVE_PRODUCT
} from './../mutation-types.js'

import growl from 'growl-alert'

import Vue from 'vue'

export default {
    state: {
        products: [],
        total: 0,
        count: 0
    },
    mutations: {
        [ADD_PRODUCT] (state, item) {
            let productExist = state.products.find(p => (p.key === item.product.key ))
            
            if (productExist) {
                state.products = state.products.map(p => {
                    if(p.key === item.product.key) {
                        p.quantity += 1
                    }

                    return p
                })
            } else {
                Vue.set(item.product, 'quantity', 1)
                state.products.push(item.product)
            }

            state.total += item.product.price
            state.count += 1
            
            growl.success('Added to cart')
        },
        [REMOVE_PRODUCT] (state, id) {
            state.products = state.products.filter(p => p.id !== id)
            state.total = state.products.reduce((a, b) => a + (b.price * b.quantity), 0)
            state.count = state.products.length

            growl.success('Product removed')
        }
    },
    getters: {
        productsCart: state => state
    },
    actions: {
        addProduct ({ commit }, product) {
            console.log(product)
            commit(ADD_PRODUCT, product)
        },
        removeProduct ({ commit }, { id }) {
            commit(REMOVE_PRODUCT, id)
        }
    }
}