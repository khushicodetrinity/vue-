<template>
<!-- Page Banner Section Start -->
<div class="page-banner-section section" style="background-image: url(assets/images/bg/funfact-bg.jpg)">
    <div class="container">
        <div class="row">
            <div class="col">

                <div class="page-banner text-center">
                    <h1>Contact us</h1>
                    <ul class="page-breadcrumb">
                        <li>
                            <router-link to="/">Home</router-link>
                        </li>
                        <li>Contact us</li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</div><!-- Page Banner Section End -->

<!--Contact section start-->
<div class="conact-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50  pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
    <div class="container">

        <div class="row mb-50">

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7125168.022058162!2d70.68733554999999!3d29.309154400000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1625513723843!5m2!1sen!2s" width="1800" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

        </div>

        <div class="row">
            <div class="col-lg-4 col-12 mb-sm-50 mb-xs-50">
                <div class="contact-information">
                    <h3>Contact Information</h3>
                    <ul>
                        <li>
                            <span class="icon"><i class="pe-7s-map"></i></span>
                            <span class="text"><span>Stock Building, 125 Main Street 1st Lane, San Francisco, USA</span></span>
                        </li>
                        <li>
                            <span class="icon"><i class="pe-7s-call"></i></span>
                            <span class="text"><a href="#">(001) 24568 365 987)</a><a href="#">(001) 65897 569 784)</a></span>
                        </li>
                        <li>
                            <span class="icon"><i class="pe-7s-mail-open"></i></span>
                            <span class="text"><a href="#">infor@example.com</a><a href="#">www.example.com</a></span>
                        </li>

                    </ul>
                </div>
            </div>
            <div class="col-lg-8 col-12">
                <div class="contact-form">
                    <h3>Leave Your Message</h3>
                    <form id="contact-form" method="post">
                        <div class="row row-10">
                            <div class="col-md-4 col-12 mb-20"><input name="name" v-model="name" type="text" placeholder="Your Name"></div>
                            <div class="col-md-4 col-12 mb-20"><input name="email" v-model="email" type="email" placeholder="Your Email"></div>
                            <div class="col-md-4 col-12 mb-20"><input name="subject" v-model="subject" type="text" placeholder="Subject"></div>
                            <div class="col-md-4 col-12 mb-20"><input name="phone" v-model="phone" type="text" placeholder="Your Phone"></div>
                            <div class="col-md-4 col-12 mb-20"><select class="form-control" v-model="service" name="select-service">
                                    <option value="Select Service">Select Service</option>
                                    <option value="Building Construction">Building Construction</option>
                                    <option value="House Roomodel">House Roomodel</option>
                                    <option value="Interior Design">Interior Design</option>
                                    <option value="Renovation">Renovation</option>
                                    <option value="OutField Digging">OutField Digging</option>
                                    <option value="Road Construction">Road Construction</option>
                                    <option value="Floors & Roofs">Floors & Roofs</option>
                                    <option value="Plumbing">Plumbing</option>
                                    <option value="Electricity">Electricity</option>
                                </select></div>
                            <div class="col-12 mb-20"><textarea name="message" v-model="massage" placeholder="Your Message"></textarea></div>
                            <div class="col-12"><button type="button" @click="getData()">Send Message</button></div>
                        </div>
                    </form>
                    <p class="form-message"></p>
                </div>
            </div>
        </div>

    </div>
</div>
<!--Contact section end-->

<!--Contact section end-->
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
import axios from "axios";
export default {
    name: 'Contact',
    data(){
        return {
            'name' : '',
            'email' : '',
            'subject' : '',
            'phone' : '',
            'service' : '',
            'massage' : '',
        }
    },
    methods: {
        async getData(){
            console.log("here");
            await axios.post('http://localhost:8000/api/contact',{
                name: this.name,
                email: this.email,
                subject: this.subject,
                phone: this.phone,
                service: this.service,
                massage: this.massage,
            });
            this.name = '';
            this.email = '';
            this.subject = '';
            this.phone = '';
            this.service = '';
            this.massage = '';
        }
    },
}
</script>

<style>

</style>
