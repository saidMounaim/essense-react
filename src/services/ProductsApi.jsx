import axios from 'axios';

function getPopularProducts() {
	return axios
		.get(`http://localhost:8000/api/products?order[id]=desc`)
		.then((response) => response.data['hydra:member']);
}

export default {
	getPopularProducts,
};
