<template>
  <!--Header section start-->
  <header class="header header-transparent header-sticky">
    <div class="header-top">
      <div class="container">
        <div class="row justify-content-between m-0 g-0">
          <!--Socail start-->
          <div class="col-auto header-top-social">
            <a href="javascript:;"><i class="fa fa-facebook"></i></a>
            <a href="javascript:;"><i class="fa fa-twitter"></i></a>
            <a href="javascript:;"><i class="fa fa-linkedin"></i></a>
            <a href="javascript:;"><i class="fa fa-pinterest-p"></i></a>
            <a href="javascript:;"><i class="fa fa-google-plus"></i></a>
          </div>
          <!--Socail end-->
          <!--Links start-->
          <div class="col-auto header-top-links">
            <ul>
              <li>
                <i class="fa fa-map-marker"></i> 256, 1st AVE, Manchester 125 ,
                Noth England
              </li>

              <li>
                <router-link to="/"
                  ><i class="fa fa-phone"></i>(001) 25465 258 369</router-link
                >
              </li>
            </ul>
          </div>
          <!--Links end-->
        </div>
      </div>
    </div>
    <div class="header-bottom menu-right">
      <div class="container">
        <div class="row justify-content-between m-0 g-0">
          <!--Logo start-->
          <div class="col-auto mt-20 mb-20">
            <div class="logo">
              <router-link to="/" ><img src="assets/images/logo-dark.png" alt="" /></router-link>
            </div>
          </div>
          <!--Logo end-->

          <!--Menu start-->
          <div class="col-auto d-flex">
            <nav class="main-menu">
              <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li>
                  <router-link to="/service">Service</router-link>
                  <ul class="sub-menu">
                    <li><router-link to="/service">All Services</router-link></li>
                    <li><router-link to="/service">Building Construction</router-link></li>
                    <li><router-link to="/service">House Remodel</router-link></li>
                    <li><router-link to="/service">Interior Design</router-link></li>
                    <li><router-link to="/service">Renovation</router-link></li>
                    <li><router-link to="/service">OutField Digging</router-link></li>
                    <li><router-link to="/service">Road Construction</router-link></li>
                    <li><router-link to="/service">Floors & Roofs</router-link></li>
                    <li><router-link to="/service">Plumbing</router-link></li>
                    <li><router-link to="/service">Electricity</router-link></li>
                  </ul>
                </li>
                <li>
                  <router-link to="/project">Project</router-link>
                  <ul class="sub-menu">
                    <li><router-link to="/project-details">Project Details</router-link></li>
                  </ul>
                </li>
                <li><router-link to="/team">Team</router-link></li>
                <li><router-link to="/shop">Shop</router-link>
                  <ul class="sub-menu">
                    <li><router-link to="/shop">Shop 4 Column (No Sidebar)</router-link></li>
                    <li><router-link to="/shop-left-sidebar">Shop 3 Column Left Sidebar</router-link></li>
                    <li><router-link to="/shop-right-sidebar">Shop 3 Column Right Sidebar</router-link></li>
                    <li><router-link to="/project-details">Product Details Left Sidebar</router-link></li>
                    <li><router-link to="/project-details-right-sidebar">Product Details Right Sidebar</router-link></li>
                    <li><router-link to="/cart">Shopping Cart</router-link></li>
                    <li><router-link to="/checkout">Checkout</router-link></li>
                  </ul>
                </li>
                <li><router-link to="/blog">Blog</router-link>
                  <ul class="sub-menu">
                    <li><router-link to="/blog">Blog 3 Column (No Sidebar)</router-link></li>
                    <li><router-link to="/blog-left-sidebar">Blog 2 Column Left Sidebar</router-link></li>
                    <li><router-link to="/blog-right-sidebar">Blog 2 Column Right Sidebar</router-link></li>
                    <li><router-link to="/blog-details">Blog Details Left Sidebar</router-link></li>
                    <li><router-link to="/blog-details-right-sidebar">Blog Details Right Sidebar</router-link></li>
                  </ul>
                </li>
                <li><router-link to="/contact">Contact</router-link></li>
              </ul>
            </nav>
            <div class="header-search">
              <button class="header-search-toggle">
                <i class="pe-7s-search"></i>
              </button>
              <div class="header-search-form">
                <form action="#">
                  <input type="text" placeholder="Type and hit enter" />
                  <button><i class="pe-7s-search"></i></button>
                </form>
              </div>
            </div>
            <div class="header-cart">
              <router-link to="/cart"><i class="pe-7s-cart"></i><span>3</span></router-link>
            </div>
          </div>
          <!--Menu end-->
        </div>

        <!--Mobile Menu start-->
        <div class="row">
          <div class="col-12 d-flex d-lg-none">
            <div class="mobile-menu"></div>
          </div>
        </div>
        <!--Mobile Menu end-->
      </div>
    </div>
  </header>
  <!--Header section end-->

  <router-view></router-view>

  <!--Footer section start-->
  <footer
    class="footer-section section"
    style="background-image: url(assets/images/bg/footer-bg.jpg)"
  >
    <!--Footer Top start-->
    <div
      class="
        footer-top
        section
        pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50
        pb-60 pb-lg-40 pb-md-30 pb-sm-20 pb-xs-10
      "
    >
      <div class="container">
        <div class="row row-25">
          <!--Footer Widget start-->
          <div class="footer-widget col-lg-3 col-md-6 col-12 mb-40">
            <div class="logo">
              <router-link to="/"><img src="assets/images/logo-white.png" alt="" /></router-link>
            </div>
            <div class="footer-social">
              <a href="javascript:;" class="facebook"><i class="fa fa-facebook"></i></a>
              <a href="javascript:;" class="twitter"><i class="fa fa-twitter"></i></a>
              <a href="javascript:;" class="linkedin"><i class="fa fa-linkedin"></i></a>
              <a href="javascript:;" class="google"><i class="fa fa-google-plus"></i></a>
              <a href="javascript:;" class="pinterest"
                ><i class="fa fa-pinterest-p"></i
              ></a>
            </div>
          </div>
          <!--Footer Widget end-->

          <!--Footer Widget start-->
          <div class="footer-widget col-lg-3 col-md-6 col-12 mb-40">
            <h4 class="title"><span class="text">Contact us</span></h4>
            <ul>
              <li>
                <i class="fa fa-map-marker"></i
                ><span>256, 1st AVE, Manchester 125 , Noth England</span>
              </li>
              <li>
                <i class="fa fa-phone"></i
                ><span
                  ><a href="javascript:;">+012 345 678 102</a
                  ><a href="javascript:;">+012 345 678 101</a></span
                >
              </li>

              <li>
                <i class="fa fa-envelope-o"></i
                ><span
                  ><a href="javascript:;">info@example.com</a
                  ><a href="javascript:;">www.example.com</a></span
                >
              </li>
            </ul>
          </div>
          <!--Footer Widget end-->

          <!--Footer Widget start-->
          <div class="footer-widget col-lg-3 col-md-6 col-12 mb-40">
            <h4 class="title"><span class="text">Instagram Feed</span></h4>
            <ul id="instafeed" class="footer-instafeed">
              <li>
                <a href="javascript:;"
                  ><img src="assets/images/project/project-1.jpg" alt=""
                /></a>
              </li>
              <li>
                <a href="javascript:;"
                  ><img src="assets/images/project/project-2.jpg" alt=""
                /></a>
              </li>
              <li>
                <a href="javascript:;"
                  ><img src="assets/images/project/project-3.jpg" alt=""
                /></a>
              </li>
              <li>
                <a href="javascript:;"
                  ><img src="assets/images/project/project-4.jpg" alt=""
                /></a>
              </li>
              <li>
                <a href="javascript:;"
                  ><img src="assets/images/project/project-5.jpg" alt=""
                /></a>
              </li>
              <li>
                <a href="javascript:;"
                  ><img src="assets/images/project/project-6.jpg" alt=""
                /></a>
              </li>
            </ul>
          </div>
          <!--Footer Widget end-->

          <!--Footer Widget start-->
          <div class="footer-widget col-lg-3 col-md-6 col-12 mb-40">
            <h4 class="title"><span class="text">About us</span></h4>
            <p>
              Konstructo- Construction Bootstrap 5 Templatethe best theme for
              elit, sed do to eiumod tempor dolor sit amet, ctetur adipiscing
              elit seddo dolor sit amet.
            </p>
          </div>
          <!--Footer Widget end-->
        </div>
      </div>
    </div>
    <!--Footer Top end-->

    <!--Footer bottom start-->
    <div class="footer-bottom section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="copyright text-center">
              <p>
                Copyright &copy;2021 <a href="javascript:;">Konstructo </a>. All rights
                reserved.
              </p>
            </div>
          </div>

          <div class="col-md-6">
            <div class="footer-social text-center">
              <a href="javascript:;" class="facebook"><i class="fa fa-facebook"></i></a>
              <a href="javascript:;" class="twitter"><i class="fa fa-twitter"></i></a>
              <a href="javascript:;" class="linkedin"><i class="fa fa-linkedin"></i></a>
              <a href="javascript:;" class="google"><i class="fa fa-google-plus"></i></a>
              <a href="javascript:;" class="pinterest"><i class="fa fa-pinterest-p"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Footer bottom end-->
  </footer>
  <!--Footer section end-->
</template>
<script>
export default {
  name: "Layout",
};
</script>
