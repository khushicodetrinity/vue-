<template>

    <!-- Page Banner Section Start -->
    <div class="page-banner-section section" style="background-image: url(assets/images/bg/funfact-bg.jpg)">
        <div class="container">
            <div class="row">
                <div class="col">

                    <div class="page-banner text-center">
                        <h1>Project Details</h1>
                        <ul class="page-breadcrumb">
                            <li><router-link to="/">Home</router-link></li>
                            <li>Project Details</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div><!-- Page Banner Section End -->

    <!--Projects section start-->
    <div class="project-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50  pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
        <div class="container">
            <div class="row">

                <div class="col-12 mb-40">
                    <div class="project-image"><img src="/assets/images/project/project-details.jpg" alt=""></div>
                </div>
                 <div class="col-lg-8 col-12 mb-30 pl-30 pl-sm-15 pl-xs-15">
                    <div class="project-details">
                        <h2>Mountain Tunnel</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem veritatis quo et ullam, ducimus itaque earum dolorem? Consectetur, et, aut. A, corporis officia eius dicta explicabo saepe nesciunt, mollitia minima, atque maiores optio cum. Atque amet unde impedit voluptate cumque distinctio minima, aspernatur nemo! Expedita in, numquam blanditiis ullam rem!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi cum fugit officia dolores eligendi, rem. Quibusdam quasi impedit perspiciatis iure maiores, eaque numquam doloremque, quo nam soluta itaque obcaecati tempore!.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ex, nam adipisci dolores laborum earum. Unde cum, ut nostrum nihil alias, laudantium molestiae, vitae quidem dolorem officiis ipsum. Aliquid nemo consequuntur cupiditate delectus sapiente doloribus dolorem, at suscipit, non laudantium mollitia magnam repellat atque quia! Aut, veniam, nam. Ex porro optio facilis nostrum, qui ipsa?</p>
                    </div>
                </div>
                <div class="col-lg-4 col-12 mb-30">
                    <div class="project-information">
                        <h3>Project Information</h3>
                        <ul>
                            <li><strong>Client:</strong> <a href="javascript:;">RRS Company</a></li>
                            <li><strong>Location:</strong> San Francisco</li>
                            <li><strong>Area(sf):</strong> 550,000 sf</li>
                            <li><strong>Year:</strong> 2018</li>
                            <li><strong>Budget:</strong> $245000000</li>
                            <li><strong>Architect:</strong> Scott & Austin</li>
                            <li><strong>Sector:</strong> <a href="javascript:;">Tunnel</a>, <a href="javascript:;">Transport</a></li>
                        </ul>
                    </div>
                </div>


                <div class="col-12">
                    <div class="row row-5">

                        <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mt-10">
                            <router-link to="/assets/images/project/project-3.jpg" class="gallery-item gallery-popup"><img src="assets/images/project/project-3.jpg" alt=""><span class="plus"></span></router-link>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mt-10">
                            <router-link to="/assets/images/project/project-6.jpg" class="gallery-item gallery-popup"><img src="assets/images/project/project-6.jpg" alt=""><span class="plus"></span></router-link>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mt-10">
                            <router-link to="/assets/images/project/project-4.jpg" class="gallery-item gallery-popup"><img src="assets/images/project/project-4.jpg" alt=""><span class="plus"></span></router-link>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mt-10">
                            <router-link to="/assets/images/project/project-12.jpg" class="gallery-item gallery-popup"><img src="assets/images/project/project-12.jpg" alt=""><span class="plus"></span></router-link>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mt-10">
                            <router-link to="/assets/images/project/project-10.jpg" class="gallery-item gallery-popup"><img src="assets/images/project/project-10.jpg" alt=""><span class="plus"></span></router-link>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mt-10">
                            <router-link to="/assets/images/project/project-11.jpg" class="gallery-item gallery-popup"><img src="assets/images/project/project-11.jpg" alt=""><span class="plus"></span></router-link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
    <!--Projects section end-->

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
    name:'ProjectDetail'
}
</script>
