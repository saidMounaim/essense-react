import React, { useEffect } from 'react';
import ProductsApi from '../services/ProductsApi';
import { useGlobalValue } from '../context/GlobalState';
import Slider from 'react-slick';
import ProductCard from './ProductCard';

const NewArrivals = () => {
	const [{ popularProducts }, dispatch] = useGlobalValue();

	const fetchPopularProducts = async () => {
		try {
			const products = await ProductsApi.getPopularProducts();
			dispatch({ type: 'FETCH_POPULAR_PRODUCTS', payload: products });
		} catch (error) {
			console.log(error.response);
		}
	};

	useEffect(() => {
		fetchPopularProducts();
	}, []);
	console.log(popularProducts);

	var settingsSlick = {
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
	};

	return (
		<React.Fragment>
			<section class="new_arrivals_area section-padding-80 clearfix">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="section-heading text-center">
								<h2>Popular Products</h2>
							</div>
						</div>
					</div>
				</div>

				<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="popular-products-slides">
								<Slider {...settingsSlick}>
									{popularProducts &&
										popularProducts.slice(0, 6).map((product) => <ProductCard product={product} />)}
								</Slider>
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default NewArrivals;
