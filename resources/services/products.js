import axios from 'axios'

class Products {
    getProducts () {
        return axios({
            method: 'get',
            url: '//localhost:8181/products',
            data: {}
        })
    }
}

export default new Products()