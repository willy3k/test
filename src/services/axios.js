import axios from 'axios';

export default axios.create({
  baseURL:
    'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC',
});
// https://apidisphelpostgres-apidisphel.up.railway.app/product/0
// https://apidisphelpostgres-apidisphel.up.railway.app/test
// https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC
