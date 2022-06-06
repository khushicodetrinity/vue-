<template>
    <div class="page-banner-section section">
        <form action="" method="post">
            <div>
                <label for="">Name : </label>
                <input type="text" v-model="name">
            </div>
            <br>
            <div>
                <label for="">Email : </label>
                <input type="email" v-model="email">
            </div>
            <br>
            <div>
                <label for="">Password : </label>
                <input type="email" v-model="email">
            </div>
            <br>
            <div>
                <label for="">Confirm Password : </label>
                <input type="email" v-model="email">
            </div>
            <br>
            <div>
                <button type="button">Add User</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    form{
        color:white;
        text-align: center;
    }
</style>
