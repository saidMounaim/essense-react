import React from 'react';
import { useGlobalValue } from '../context/GlobalState';

const Cart = () => {
	const [{ cart }, dispatch] = useGlobalValue();

	const removeTocart = (product) => {
		const filtredCart = cart.filter((p) => p.id !== product.id);
		dispatch({ type: 'REMOVE_TO_CART', payload: filtredCart });
	};

	return (
		<React.Fragment>
			<div class="cart-button">
				<a href="#" id="rightSideCart">
					<img src={`${window.location.origin}/assets/img/core-img/bag.svg`} alt="" />{' '}
					<span>{cart?.length}</span>
				</a>
			</div>
			<div class="cart-content d-flex">
				<div class="cart-list">
					{cart &&
						cart.map((product) => (
							<div class="single-cart-item">
								<a href="#" class="product-image">
									<img src={product.image} class="cart-thumb" alt="" />
									<div class="cart-item-desc">
										<span class="product-remove" onClick={() => removeTocart(product)}>
											<i class="fa fa-close" aria-hidden="true"></i>
										</span>
										<span class="badge">Mango</span>
										<h6>Button Through Strap Mini Dress</h6>
										<p class="size">Size: S</p>
										<p class="color">Color: Red</p>
										<p class="price">$45.00</p>
									</div>
								</a>
							</div>
						))}
				</div>
				<div class="cart-amount-summary">
					<h2>Summary</h2>
					<ul class="summary-table">
						<li>
							<span>subtotal:</span> <span>$274.00</span>
						</li>
						<li>
							<span>delivery:</span> <span>Free</span>
						</li>
						<li>
							<span>discount:</span> <span>-15%</span>
						</li>
						<li>
							<span>total:</span> <span>$232.00</span>
						</li>
					</ul>
					<div class="checkout-btn mt-100">
						<a href="checkout.html" class="btn essence-btn">
							check out
						</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Cart;
