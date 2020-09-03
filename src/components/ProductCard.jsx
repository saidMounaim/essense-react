import React from 'react';
import { useGlobalValue } from '../context/GlobalState';

const ProductCard = ({ product }) => {
	const [{ cart }, dispatch] = useGlobalValue();

	const addTocart = (p) => {
		dispatch({ type: 'ADD_TO_CART', payload: p });
	};

	return (
		<div class="single-product-wrapper">
			<div class="product-img">
				<img src={product.image} alt="" />
				<div class="product-badge new-badge">
					<span>New</span>
				</div>
				<div class="product-favourite">
					<a href="#" class="favme fa fa-heart"></a>
				</div>
			</div>
			<div class="product-description">
				<span>{product.category.name}</span>
				<a href="single-product-details.html">
					<h6>PETITE Belted Jumper Dress</h6>
				</a>
				<p class="product-price">${product.price.toFixed(2)}</p>

				<div class="hover-content">
					<div class="add-to-cart-btn">
						<button
							disabled={cart.find((c) => c.id == product.id) ? 'disabled' : false}
							onClick={() => addTocart(product)}
							class="btn essence-btn"
						>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
