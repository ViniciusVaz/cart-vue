import axios from 'axios'

const port = process.env.PORT || 5000

class Products {
    getProducts () {
        return axios({
            method: 'get',
            url: `//localhost:${port}/products`,
            data: {}
        })
    }
}

export default new Products()