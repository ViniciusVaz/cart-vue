import axios from 'axios'

class Products {
    getUrl () {
        return config.API_URL
    }

    getProducts () {
        return axios({
            method: 'get',
            url: `/products`,
            data: {}
        })
    }
}

export default new Products()