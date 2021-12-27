import axios  from 'axios'

export default class Api {
  constructor() {
    this.products = null
    this.api_url = "http://localhost:5000/api"
  }

  init() {
    let headers = {
      Accept: "application/json"
    }

    console.log(this.api_url)
    this.products = axios.create({
      baseURL : this.api_url,
      timeout: 31000,
      headers
    })

    return this.products
  }

  getAllProducts = (params) => {
    if (!Object.keys(params).length) {
      return this.init().get("/products")
    }
      return this.init().get("/products/q", {params})
  }

  getProduct = (productId) => {
    return this.init().get(`/products/${productId}`)
  }
}
