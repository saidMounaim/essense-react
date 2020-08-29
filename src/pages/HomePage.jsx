import React from 'react';
import Cart from '../components/Cart';
import NewArrivals from '../components/NewArrivals';

const HomePage = () => {
	return (
		<React.Fragment>
			<div class="cart-bg-overlay"></div>

			<div class="right-side-cart-area">
				<div class="cart-button">
					<a href="#" id="rightSideCart">
						<img src={`${window.location.origin}/assets/img/core-img/bag.svg`} alt="" /> <span>3</span>
					</a>
				</div>
				{/* CART COMPONENT */}
				<Cart />
			</div>
			<section
				class="welcome_area bg-img background-overlay"
				style={{ backgroundImage: `url(${window.location.origin}/assets/img/bg-img/bg-1.jpg)` }}
			>
				<div class="container h-100">
					<div class="row h-100 align-items-center">
						<div class="col-12">
							<div class="hero-content">
								<h6>asoss</h6>
								<h2>New Collection</h2>
								<a href="#" class="btn essence-btn">
									view collection
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<NewArrivals />
		</React.Fragment>
	);
};

export default HomePage;
