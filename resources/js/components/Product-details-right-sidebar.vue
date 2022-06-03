<template>

    <!-- Page Banner Section Start -->
    <div class="page-banner-section section" style="background-image: url(assets/images/bg/funfact-bg.jpg)">
        <div class="container">
            <div class="row">
                <div class="col">

                    <div class="page-banner text-center">
                        <h1>Product Details</h1>
                        <ul class="page-breadcrumb">
                            <li><router-link to="/">Home</router-link></li>
                            <li>Product Details Right Sidebar</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div><!-- Page Banner Section End -->

    <!--Product section start-->
    <div class="product-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50  pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
        <div class="container">
            <div class="row">

                <div class="col-lg-9 col-12 order-1 pr-30 pr-sm-15 pr-xs-15 mb-sm-50 mb-xs-50">
                    <div class="row">

                        <div class="product-details col-12 mb-50">
                            <div class="product-inner row">
                                <div class="col-md-5 col-12 mb-xs-30">
                                    <div class="product-image-slider">
                                        <div class="item"><a href="assets/images/product/product-1-big.jpg" class="gallery-popup"><i class="pe-7s-search"></i><img src="assets/images/product/product-1-mid.jpg" alt=""></a></div>
                                        <div class="item"><a href="assets/images/product/product-2-big.jpg" class="gallery-popup"><i class="pe-7s-search"></i><img src="assets/images/product/product-2-mid.jpg" alt=""></a></div>
                                        <div class="item"><a href="assets/images/product/product-3-big.jpg" class="gallery-popup"><i class="pe-7s-search"></i><img src="assets/images/product/product-3-mid.jpg" alt=""></a></div>
                                        <div class="item"><a href="assets/images/product/product-4-big.jpg" class="gallery-popup"><i class="pe-7s-search"></i><img src="assets/images/product/product-4-mid.jpg" alt=""></a></div>
                                        <div class="item"><a href="assets/images/product/product-5-big.jpg" class="gallery-popup"><i class="pe-7s-search"></i><img src="assets/images/product/product-5-mid.jpg" alt=""></a></div>
                                    </div>
                                    <div class="product-thumb-slider">
                                        <div class="item"><img src="assets/images/product/product-1-small.jpg" alt=""></div>
                                        <div class="item"><img src="assets/images/product/product-2-small.jpg" alt=""></div>
                                        <div class="item"><img src="assets/images/product/product-3-small.jpg" alt=""></div>
                                        <div class="item"><img src="assets/images/product/product-4-small.jpg" alt=""></div>
                                        <div class="item"><img src="assets/images/product/product-5-small.jpg" alt=""></div>
                                    </div>
                                </div>
                                <div class="col-md-7 col-12">
                                    <div class="content">
                                        <h3 class="title">Black Cable Restorer</h3>

                                        <h3 class="price">
                                            <span class="new">$25</span>
                                            <span class="old">$35</span>
                                        </h3>

                                        <div class="ratting-wrap">
                                            <h4>Review:</h4>
                                            <span class="ratting">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </span>
                                        </div>

                                        <div class="desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt vitae ut itaque distinctio omnis, accusamus harum excepturi voluptate suscipit fuga vel quo esse, saepe veritatis molestias maxime assumenda laboriosam. Voluptates.</p>
                                        </div>

                                        <div class="actions">
                                            <div class="pro-qty"><input type="text" value="1"></div>
                                            <a href="#" class="add-to-cart"><i class="pe-7s-cart"></i>add to cart</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 mb-50">
                            <ul class="product-details-tab-list nav">
                                <li><a class="active show" href="#product-description" data-bs-toggle="tab">Description</a></li>
                                <li><a href="#product-specification" data-bs-toggle="tab">Specification</a></li>
                                <li><a href="#product-review" data-bs-toggle="tab">Review</a></li>
                            </ul>
                            <div class="tab-content">
                                <div id="product-description" class="tab-pane active show">
                                    <div class="product-description">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa est sit esse commodi molestias explicabo totam. Iste, consequuntur? Ad odit voluptatem nostrum consequatur culpa, dicta, mollitia modi, praesentium dolor iste maiores. Nobis voluptas eius ab assumenda, iure at illum fugiat.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum neque voluptatem eveniet, pariatur laborum repellendus numquam accusantium quae molestias quisquam, ab, vel deserunt, eos! At!</p>
                                    </div>
                                </div>
                                <div id="product-specification" class="tab-pane">
                                    <div class="product-specification">
                                        <table class="table table-bordered m-0">
                                            <tbody>
                                                <tr>
                                                    <td>Item Weight</td>
                                                    <td>4.1 pounds</td>
                                                </tr>
                                                <tr>
                                                    <td>Dimensions</td>
                                                    <td>11.1 x 3.1 x 8.8 inches</td>
                                                </tr>
                                                <tr>
                                                    <td>Model number</td>
                                                    <td>BDCDMT120C</td>
                                                </tr>
                                                <tr>
                                                    <td>Size</td>
                                                    <td>Medium</td>
                                                </tr>
                                                <tr>
                                                    <td>Color</td>
                                                    <td>Black</td>
                                                </tr>
                                                <tr>
                                                    <td>Material</td>
                                                    <td>Black & Decker Lithium Matrix</td>
                                                </tr>
                                                <tr>
                                                    <td>Voltage</td>
                                                    <td>20 volts</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div id="product-review" class="tab-pane">
                                    <div class="product-review">

                                        <div class="review-form">
                                            <h4>Leave Your Review</h4>
                                            <form action="#">
                                                <div class="row row-10">
                                                    <div class="col-12 mb-20">
                                                        <div class="ratting-wrap d-flex align-items-center">
                                                            <h5 class="mb-0 mr-10">Your Ratting:</h5>
                                                            <div class="ratting">
                                                                <i class="fa fa-star-o"></i>
                                                                <i class="fa fa-star-o"></i>
                                                                <i class="fa fa-star-o"></i>
                                                                <i class="fa fa-star-o"></i>
                                                                <i class="fa fa-star-o"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-12 mb-20"><input type="text" placeholder="Your Name"></div>
                                                    <div class="col-md-6 col-12 mb-20"><input type="email" placeholder="Your Email"></div>
                                                    <div class="col-12 mb-20"><textarea placeholder="Your Review"></textarea></div>
                                                    <div class="col-12"><input type="submit" value="Submit"></div>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="row">

                                <div class="col-12">
                                    <div class="section-title no-icon mb-30">
                                        <h3>Related Product</h3>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <div class="product-slider-3 section">

                                        <div class="product">
                                            <div class="product-inner">
                                                <div class="media">
                                                    <router-link to="product-details.html" class="image"><img src="assets/images/product/product-1.jpg" alt=""></router-link>
                                                    <router-link to="#" class="add-to-cart"><i class="pe-7s-cart"></i>add to cart</router-link>
                                                </div>
                                                <div class="content">
                                                    <h4 class="title"><router-link to="product-details">Black Cable Restorer</router-link></h4>
                                                    <span class="ratting">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </span>
                                                    <h4 class="price"><span class="new">$25</span><span class="old">$33</span></h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="product">
                                            <div class="product-inner">
                                                <div class="media">
                                                    <router-link to="product-details" class="image"><img src="assets/images/product/product-2.jpg" alt=""></router-link>
                                                    <a href="#" class="add-to-cart"><i class="pe-7s-cart"></i>add to cart</a>
                                                </div>
                                                <div class="content">
                                                    <h4 class="title"><router-link to="product-details">Black Die Grinder</router-link></h4>
                                                    <span class="ratting">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </span>
                                                    <h4 class="price"><span class="new">$25</span><span class="old">$33</span></h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="product">
                                            <div class="product-inner">
                                                <div class="media">
                                                    <router-link to="product-details" class="image"><img src="assets/images/product/product-3.jpg" alt=""></router-link>
                                                    <a href="#" class="add-to-cart"><i class="pe-7s-cart"></i>add to cart</a>
                                                </div>
                                                <div class="content">
                                                    <h4 class="title"><router-link to="product-details">Orange Decker drill</router-link></h4>
                                                    <span class="ratting">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </span>
                                                    <h4 class="price"><span class="new">$25</span><span class="old">$33</span></h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="product">
                                            <div class="product-inner">
                                                <div class="media">
                                                    <router-link to="product-details" class="image"><img src="assets/images/product/product-4.jpg" alt=""></router-link>
                                                    <a href="#" class="add-to-cart"><i class="pe-7s-cart"></i>add to cart</a>
                                                </div>
                                                <div class="content">
                                                    <h4 class="title"><router-link to="product-details">Metal Cutter</router-link></h4>
                                                    <span class="ratting">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </span>
                                                    <h4 class="price"><span class="new">$25</span><span class="old">$33</span></h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="product">
                                            <div class="product-inner">
                                                <div class="media">
                                                    <router-link to="product-details" class="image"><img src="assets/images/product/product-5.jpg" alt=""></router-link>
                                                    <a href="#" class="add-to-cart"><i class="pe-7s-cart"></i>add to cart</a>
                                                </div>
                                                <div class="content">
                                                    <h4 class="title"><router-link to="product-details">Multitool Gerber</router-link></h4>
                                                    <span class="ratting">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </span>
                                                    <h4 class="price"><span class="new">$25</span><span class="old">$33</span></h4>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div class="col-lg-3 col-12 order-2">

                    <div class="sidebar sidebar-two">
                        <h3 class="sidebar-title">Search</h3>

                        <div class="sidebar-search">
                            <form action="#">
                                <input type="text" placeholder="Search">
                                <button><i class="pe-7s-search"></i></button>
                            </form>
                        </div>

                    </div>

                    <div class="sidebar sidebar-two">
                        <h3 class="sidebar-title">Categories</h3>

                        <ul class="sidebar-list">
                            <li><a href="#">Painting</a></li>
                            <li><a href="#">Flooring</a></li>
                            <li><a href="#">Plumbing</a></li>
                            <li><a href="#">Roofing</a></li>
                            <li><a href="#">Tools</a></li>
                            <li><a href="#">Electrical</a></li>
                        </ul>

                    </div>

                    <div class="sidebar sidebar-two">
                        <h3 class="sidebar-title">Popular Product</h3>

                        <div class="sidebar-product">
                            <router-link to="product-details" class="image"><img src="assets/images/product/product-1-sidebar.jpg" alt=""></router-link>
                            <div class="content">
                                <h5 class="title"><router-link to="product-details">Black Cable Restorer</router-link></h5>
                                <span class="ratting">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </span>
                                <h5 class="price"><span class="new">$25</span><span class="old">$33</span></h5>
                            </div>
                        </div>

                        <div class="sidebar-product">
                            <a href="product-details.html" class="image"><img src="assets/images/product/product-2-sidebar.jpg" alt=""></a>
                            <div class="content">
                                <h5 class="title"><a href="product-details.html">Black Die Grinder</a></h5>
                                <span class="ratting">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </span>
                                <h5 class="price"><span class="new">$25</span><span class="old">$33</span></h5>
                            </div>
                        </div>

                        <div class="sidebar-product">
                            <a href="product-details.html" class="image"><img src="assets/images/product/product-3-sidebar.jpg" alt=""></a>
                            <div class="content">
                                <h5 class="title"><a href="product-details.html">Orange Decker drill</a></h5>
                                <span class="ratting">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </span>
                                <h5 class="price"><span class="new">$25</span><span class="old">$33</span></h5>
                            </div>
                        </div>

                    </div>

                    <div class="sidebar sidebar-two">
                        <h3 class="sidebar-title">Popular Tags</h3>

                        <ul class="sidebar-tag">
                            <li><a href="#">Painting</a></li>
                            <li><a href="#">Plumbing</a></li>
                            <li><a href="#">Flooring</a></li>
                            <li><a href="#">Roofing</a></li>
                            <li><a href="#">Tools</a></li>
                            <li><a href="#">Electrical</a></li>
                        </ul>

                    </div>

                </div>

            </div>
        </div>
    </div>
    <!--Product section end-->

    <!--Brand section start-->
    <div class="brand-section section bg-gray pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
        <div class="container">
            <div class="row">
                <!--Brand Slider start-->
                <div class="brand-slider section">
                    <div class="brand col"><img src="assets/images/brands/brand-1.png" alt=""></div>
                    <div class="brand col"><img src="assets/images/brands/brand-2.png" alt=""></div>
                    <div class="brand col"><img src="assets/images/brands/brand-3.png" alt=""></div>
                    <div class="brand col"><img src="assets/images/brands/brand-4.png" alt=""></div>
                </div>
                <!--Brand Slider end-->
            </div>
        </div>
    </div>
    <!--Brand section end-->
</template>

<script>
export default {
    name: 'ProductDetailsRightSidebar'
}
</script>
