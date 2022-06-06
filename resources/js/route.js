import { createWebHistory, createRouter } from 'vue-router'
import Index from './components/Index.vue'
import About from './components/About.vue'
import Service from './components/Service.vue'
import ServiceDetail from './components/Service-detail.vue'
import Project from './components/Project.vue'
import ProjectDetail from './components/Project-detail.vue'
import Team from './components/Team.vue'
import Shop from './components/Shop.vue'
import ShopLeftSidebar from './components/Shop-left-sidebar.vue'
import ShopRightSidebar from './components/Shop-right-sidebar.vue'
import ProductDeatilsRightSidebar from './components/Product-details-right-sidebar.vue'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Blog from './components/Blog'
import BlogDetail from './components/Blog-detail.vue'
import BlogLeftSidebar from './components/Blog-left-sidebar.vue'
import BlogRightSidebar from './components/Blog-right-sidebar.vue'
import BlogDetailRightSidebar from './components/Blog-detail-right-sidebar.vue'
import Contact from './components/Contact.vue'
import Crud from './components/Crud.vue'

const routes = [
    {
        name : 'Index',
        path : '/',
        component : Index
    },
    {
        name : 'About',
        path : '/about',
        component : About
    },
    {
        name : 'Service',
        path : '/service',
        component : Service
    },
    {
        name : 'ServiceDetail',
        path : '/service-details',
        component : ServiceDetail
    },
    {
        name : 'Project',
        path : '/project',
        component : Project
    },
    {
        name : 'ProjectDetail',
        path : '/project-details',
        component : ProjectDetail
    },
    {
        name : 'Team',
        path : '/team',
        component : Team
    },
    {
        name : 'Shop',
        path : '/shop',
        component : Shop
    },
    {
        name : 'ShopLeftSidebar',
        path : '/shop-left-sidebar',
        component : ShopLeftSidebar
    },
    {
        name : 'ShopRightSidebar',
        path : '/shop-right-sidebar',
        component : ShopRightSidebar
    },
    {
        name : 'ProductDeatilsRightSidebar',
        path : '/project-details-right-sidebar',
        component : ProductDeatilsRightSidebar
    },
    {
        name : 'Cart',
        path : '/cart',
        component : Cart
    },
    {
        name : 'Checkout',
        path : '/checkout',
        component : Checkout
    },
    {
        name : 'Blog',
        path : '/blog',
        component : Blog
    },
    {
        name : 'BlogDetail',
        path : '/blog-details',
        component : BlogDetail
    },
    {
        name : 'BlogLeftSidebar',
        path : '/blog-left-sidebar',
        component : BlogLeftSidebar
    },
    {
        name : 'BlogRightSidebar',
        path : '/blog-right-sidebar',
        component : BlogRightSidebar
    },
    {
        name : 'BlogDetailRightSidebar',
        path : '/blog-details-right-sidebar',
        component : BlogDetailRightSidebar
    },
    {
        name : 'Contact',
        path : '/contact',
        component : Contact
    },
    {
        name : 'Crud',
        path : '/crud',
        component : Crud
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;
