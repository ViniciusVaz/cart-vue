import config from '_config'
import axios from 'axios'

class Products {
    getUrl () {
        return config.API_URL
    }

    getProducts () {
        return axios({
            method: 'get',
            url: this.getUrl(),
            data: {}
        })
    }
}

export default new Products()