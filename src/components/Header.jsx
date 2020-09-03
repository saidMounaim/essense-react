import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalValue } from '../context/GlobalState';

const Header = () => {
	const [{ cart }] = useGlobalValue();
	return (
		<header class="header_area">
			<div class="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
				<nav class="classy-navbar" id="essenceNav">
					<Link class="nav-brand" to="/">
						<img src={`${window.location.origin}/assets/img/core-img/logo.png`} alt="" />
					</Link>
					<div class="classy-navbar-toggler">
						<span class="navbarToggler">
							<span></span>
							<span></span>
							<span></span>
						</span>
					</div>
					<div class="classy-menu">
						<div class="classycloseIcon">
							<div class="cross-wrap">
								<span class="top"></span>
								<span class="bottom"></span>
							</div>
						</div>
						<div class="classynav">
							<ul>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/products">Products</Link>
								</li>
								<li>
									<Link to="/blog">Blog</Link>
								</li>
								<li>
									<Link to="/contact">Contact</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>

				<div class="header-meta d-flex clearfix justify-content-end">
					<div class="search-area">
						<form action="#" method="post">
							<input type="search" name="search" id="headerSearch" placeholder="Type for search" />
							<button type="submit">
								<i class="fa fa-search" aria-hidden="true"></i>
							</button>
						</form>
					</div>
					<div class="favourite-area">
						<a href="#">
							<img src={`${window.location.origin}/assets/img/core-img/heart.svg`} alt="" />
						</a>
					</div>
					<div class="user-login-info">
						<a href="#">
							<img src={`${window.location.origin}/assets/img/core-img/user.svg`} alt="" />
						</a>
					</div>
					<div class="cart-area">
						<a href="#" id="essenceCartBtn">
							<img src={`${window.location.origin}/assets/img/core-img/bag.svg`} alt="" />
							<span>{cart?.length}</span>
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
