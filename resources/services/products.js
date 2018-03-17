import axios from 'axios'

class Products {
    getProducts () {
        return axios({
            method: 'get',
            url: '//localhost/products',
            data: {}
        })
    }
}

export default new Products()