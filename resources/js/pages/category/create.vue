<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between ">

                        <h5>Create Category </h5>
                        <router-link :to="{name: 'category-list' }" class="btn btn-primary">Cancel  </router-link>

                    </div>

                    <div class="card-body">
                        <div class="row">
                            <div class="col-6 offset-3">
                                <form @submit.prevent="createCategory">
                                    <div class="form-group">
                                        <label for=""> Category Name </label>
                                        <input type="text" v-model="categoryName" class="form-control" placeholder="category name">
                                    </div>
                                    <div class="form-group mr-auto">
                                        <button type="submit" class="btn btn-success "> Save </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>

</template>

<script>
export default {
    data(){
        return {
            categoryName:'',
        }
    },
    methods: {
        createCategory(){
            console.log(this.categoryName);
            axios.post('/api/category', {name: this.categoryName}).then(response => {
            console.log(response);
            })
        }
    }

}
</script>

<style>

</style>