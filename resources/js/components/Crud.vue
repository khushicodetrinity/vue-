<template>
    <div class="page-banner-section section">
        <form action="" method="post">
            <input type="hidden" v-model="id">
            <div class="name">
                <label for="">Name : </label>
                <input type="text" v-model="name">
            </div>
            <br>
            <div class="email">
                <label for="">Email : </label>
                <input type="email" v-model="email">
            </div>
            <br>
            <div class="password">
                <div>
                    <label for="">Password : </label>
                    <input type="password" v-model="password">
                </div>
                <br>
                <div>
                    <label for="">Confirm Password : </label>
                    <input type="password" v-model="confirm_password">
                </div>
                <br>
            </div>
            <div>
                <button type="button" class="user_add" @click="add_user()">Add User</button>
                <button type="button" class="user_update d-none" @click="update_user()">Update User</button>
            </div>
        </form>
    </div>
    <div class="product-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50  pb-70 pb-lg-50 pb-md-40 pb-sm-30 pb-xs-20">
        <table class="w-50 mx-auto">
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr v-for="item in list" :key="item">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.email}}</td>
                    <td><button v-on:click.prevent="edit_data()" :href="'/api/user/edit/' + item.id" class="btn btn-success">Edit</button> <button v-on:click.prevent="delete_user()" :href="'/api/user/delete/' + item.id" class="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name:'Crud',
    data() {
        return {
            id: '',
            name: '',
            email: '',
            password: '',
            confirm_password: '',
            list: []
        }
    },
    async mounted() {
        this.users();
    },
    methods: {
        async users(){
            let result = await axios.get("/api/users");
            this.list = result.data;
        },
        async add_user(){
            await axios.post('/api/user',{
                name : this.name,
                email : this.email,
                password : this.password,
                confirm_password : this.confirm_password,
            }).then(res => {
                this.list.push(res.data)
                this.name = '';
                this.email = '';
                this.password = '';
                this.confirm_password = '';
            }).catch(err => {
                console.log(err);
            });
        },
        async edit_data(){
            var url = event.target.getAttribute('href');
            let result = await axios.get(url);
            this.id = result.data.id;
            this.name = result.data.name;
            this.email = result.data.email;
            $('.password').addClass('d-none');
            $('.user_add').hide();
            $('.user_update').removeClass('d-none');
        },
        async update_user(){
            await axios.post('/api/user/update',{
                id : this.id,
                name : this.name,
                email : this.email,
            }).then(res => {
                this.users();
                this.name = '';
                this.email = '';
            }).catch(err => {
                console.log(err);
            });
        },
        async delete_user(){
            var url = event.target.getAttribute('href');
            await axios.delete(url).then(res => {
                this.users();
            }).catch(err => {
                console.log(err);
            });;
        }
    },
}
</script>

<style scoped>
    form{
        color:white;
        text-align: center;
    }
    button{
        color:black;
    }
    table,th,td{
        border:2px solid;
        text-align: center;
    }
    .btn{
        color: #fff;
        height: 0;
        line-height: 0;
        margin: 7px;
    }
    .btn-success{
        background-color: #198754 !important;
    }
    .btn-success::before ,.btn-success::after{
        border-color:#198754;
    }
    .btn-danger{
        background-color: #dc3545 !important;
    }
    .btn-danger::before,.btn-danger::after{
        border-color:#dc3545;
    }
</style>
