import React from 'react';

const NewArrivals = () => {
	return (
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
						<div class="popular-products-slides owl-carousel">
							<div class="single-product-wrapper">
								<div class="product-img">
									<img
										src={`${window.location.origin}/assets/img/product-img/product-1.jpg`}
										alt=""
									/>
									<img
										class="hover-img"
										src={`${window.location.origin}/assets/img/product-img/product-2.jpg`}
										alt=""
									/>
									<div class="product-favourite">
										<a href="#" class="favme fa fa-heart"></a>
									</div>
								</div>
								<div class="product-description">
									<span>topshop</span>
									<a href="single-product-details.html">
										<h6>Knot Front Mini Dress</h6>
									</a>
									<p class="product-price">$80.00</p>

									<div class="hover-content">
										<div class="add-to-cart-btn">
											<a href="#" class="btn essence-btn">
												Add to Cart
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class="single-product-wrapper">
								<div class="product-img">
									<img
										src={`${window.location.origin}/assets/img/product-img/product-2.jpg`}
										alt=""
									/>
									<img
										class="hover-img"
										src={`${window.location.origin}/assets/img/product-img/product-3.jpg`}
										alt=""
									/>
									<div class="product-favourite">
										<a href="#" class="favme fa fa-heart"></a>
									</div>
								</div>
								<div class="product-description">
									<span>topshop</span>
									<a href="single-product-details.html">
										<h6>Poplin Displaced Wrap Dress</h6>
									</a>
									<p class="product-price">$80.00</p>

									<div class="hover-content">
										<div class="add-to-cart-btn">
											<a href="#" class="btn essence-btn">
												Add to Cart
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class="single-product-wrapper">
								<div class="product-img">
									<img
										src={`${window.location.origin}/assets/img/product-img/product-3.jpg`}
										alt=""
									/>
									<img
										class="hover-img"
										src={`${window.location.origin}/assets/img/product-img/product-4.jpg`}
										alt=""
									/>

									<div class="product-badge offer-badge">
										<span>-30%</span>
									</div>

									<div class="product-favourite">
										<a href="#" class="favme fa fa-heart"></a>
									</div>
								</div>
								<div class="product-description">
									<span>mango</span>
									<a href="single-product-details.html">
										<h6>PETITE Crepe Wrap Mini Dress</h6>
									</a>
									<p class="product-price">
										<span class="old-price">$75.00</span> $55.00
									</p>

									<div class="hover-content">
										<div class="add-to-cart-btn">
											<a href="#" class="btn essence-btn">
												Add to Cart
											</a>
										</div>
									</div>
								</div>
							</div>

							<div class="single-product-wrapper">
								<div class="product-img">
									<img
										src={`${window.location.origin}/assets/img/product-img/product-4.jpg`}
										alt=""
									/>
									<div class="product-badge new-badge">
										<span>New</span>
									</div>
									<div class="product-favourite">
										<a href="#" class="favme fa fa-heart"></a>
									</div>
								</div>
								<div class="product-description">
									<span>mango</span>
									<a href="single-product-details.html">
										<h6>PETITE Belted Jumper Dress</h6>
									</a>
									<p class="product-price">$80.00</p>

									<div class="hover-content">
										<div class="add-to-cart-btn">
											<a href="#" class="btn essence-btn">
												Add to Cart
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewArrivals;
