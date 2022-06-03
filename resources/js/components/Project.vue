<template>
    <!-- Page Banner Section Start -->
    <div class="page-banner-section section" style="background-image: url(assets/images/bg/funfact-bg.jpg)">
        <div class="container">
            <div class="row">
                <div class="col">

                    <div class="page-banner text-center">
                        <h1>Projects</h1>
                        <ul class="page-breadcrumb">
                            <li><router-link to="/">Home</router-link></li>
                            <li>Projects 4 Column</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div><!-- Page Banner Section End -->

    <div class="project-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50  pb-70 pb-lg-50 pb-md-40 pb-sm-30 pb-xs-20">
        <div class="container">

            <div class="row mb-60">
                <div class="col">
                    <div class="section-title text-center">
                        <h1>Working Projects</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, aperiam ea eligendi consectetur et quas ipsa impedit.</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="grid-filter center col">
                    <button class="active" data-filter="*">show all</button>
                    <button data-filter=".building">BUILDING</button>
                    <button data-filter=".transport">INDUSTRIES</button>
                    <button data-filter=".housing">CONSTRUCTION</button>
                    <button data-filter=".mall">HOUSE REPAIR</button>
                </div>
            </div>


            <div class="grid row" style="position: relative; height: 1440px;">

                <div class="grid-item housing col-lg-3 col-sm-6 col-12 mb-30" style="position: absolute; left: 0px; top: 0px;">
                    <div class="project">
                        <router-link to="project-details" class="image"><img src="assets/images/project/project-1.jpg" alt=""></router-link>
                        <div class="content">
                            <h4 class="title"><router-link to="project-details">House Building</router-link></h4>
                            <span class="category"><a href="javascript:;">Buildings</a><a href="javascript:;">Housing</a></span>
                        </div>
                    </div>
                </div>

                <div class="grid-item building mall col-lg-3 col-sm-6 col-12 mb-30" style="position: absolute; left: 360px; top: 0px;">
                    <div class="project">
                        <router-link to="project-details" class="image"><img src="assets/images/project/project-2.jpg" alt=""></router-link>
                        <div class="content">
                            <h4 class="title"><router-link to="project-details">Garden City Mall</router-link></h4>
                            <span class="category"><a href="javascript:;">Mall</a><a href="javascript:;">Building</a></span>
                        </div>
                    </div>
                </div>

                <div class="grid-item transport col-lg-3 col-sm-6 col-12 mb-30" style="position: absolute; left: 0px; top: 360px;">
                    <div class="project">
                        <router-link to="project-details" class="image"><img src="assets/images/project/project-3.jpg" alt=""></router-link>
                        <div class="content">
                            <h4 class="title"><router-link to="project-details">Mountain Tunnel</router-link></h4>
                            <span class="category"><a href="javascript:;">Tunnel</a><a href="javascript:;">Transport</a></span>
                        </div>
                    </div>
                </div>

                <div class="grid-item transport col-lg-3 col-sm-6 col-12 mb-30" style="position: absolute; left: 360px; top: 360px;">
                    <div class="project">
                        <router-link to="project-details" class="image"><img src="assets/images/project/project-4.jpg" alt=""></router-link>
                        <div class="content">
                            <h4 class="title"><router-link to="project-details">RBKS Flyover</router-link></h4>
                            <span class="category"><a href="javascript:;">Flyover</a><a href="javascript:;">Transport</a></span>
                        </div>
                    </div>
                </div>

                <div class="grid-item housing mall col-lg-3 col-sm-6 col-12 mb-30" style="position: absolute; left: 0px; top: 720px;">
                    <div class="project">
                        <router-link to="project-details" class="image"><img src="assets/images/project/project-5.jpg" alt=""></router-link>
                        <div class="content">
                            <h4 class="title"><router-link to="project-details">Eastern Mall</router-link></h4>
                            <span class="category"><a href="javascript:;">Housing</a><a href="javascript:;">Mall</a></span>
                        </div>
                    </div>
                </div>

                <div class="grid-item building housing col-lg-3 col-sm-6 col-12 mb-30" style="position: absolute; left: 360px; top: 720px;">
                    <div class="project">
                        <router-link to="project-details" class="image"><img src="assets/images/project/project-6.jpg" alt=""></router-link>
                        <div class="content">
                            <h4 class="title"><router-link to="project-details">Apartment Building</router-link></h4>
                            <span class="category"><a href="javascript:;">Apartment</a><a href="javascript:;">Building</a></span>
                        </div>
                    </div>
                </div>

                <div class="grid-item transport col-lg-3 col-sm-6 col-12 mb-30" style="position: absolute; left: 0px; top: 1080px;">
                    <div class="project">
                        <router-link to="project-details" class="image"><img src="assets/images/project/project-7.jpg" alt=""></router-link>
                        <div class="content">
                            <h4 class="title"><router-link to="project-details">RRS Highway</router-link></h4>
                            <span class="category"><a href="javascript:;">Highway</a><a href="javascript:;">Transport</a></span>
                        </div>
                    </div>
                </div>

                <div class="grid-item building mall col-lg-3 col-sm-6 col-12 mb-30" style="position: absolute; left: 360px; top: 1080px;">
                    <div class="project">
                        <router-link to="project-details" class="image"><img src="assets/images/project/project-8.jpg" alt=""></router-link>
                        <div class="content">
                            <h4 class="title"><router-link to="project-details">USS Mall</router-link></h4>
                            <span class="category"><a href="javascript:;">Office</a><a href="javascript:;">Building</a></span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>

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
    name:'Project'
}
</script>

<style>

</style>
