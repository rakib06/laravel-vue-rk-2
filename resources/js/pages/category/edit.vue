<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between ">

                        <h5>Edit Category - {{ categoryForm.name }} </h5>
                        <router-link :to="{name: 'category-list' }" class="btn btn-primary">Cancel  </router-link>

                    </div>

                    <div class="card-body">
                        <div class="row">
                            <div class="col-6 offset-3">
                                <form @submit.prevent="updateCategory">
                                    <div class="form-group">
                                        <label for=""> Category Name </label>
                                        <input type="text" v-model="categoryForm.name" class="form-control" placeholder="category name" :class="{ 'is-invalid': categoryForm.errors.has('name') }">

                                        <has-error :form="categoryForm" field="name"></has-error>
                                    </div>
                                    <div class="form-group mr-auto">
                                        <button type="submit" class="btn btn-success "> Update </button>
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

import { Form } from 'vform'
export default {
    data(){
        return {
            // Create a new form instance
            categoryForm: new Form({
                name: '',
                
            })
           
        }
    },
    methods: {
        updateCategory(){
            let id = this.$route.params.id;
            // console.log(this.$route.params)
            this.categoryForm.put(`/api/category/${id}`)
            .then(() => { 
                
                this.$toast.success({
                    title:'Success!',
                    message:'Category Updated!'
                })
                

            })

        },

        loadCategory(){
            let id = this.$route.params.id;
            console.log(id)
            axios.get(`/api/category/${id}/edit`).then(response =>{
                        this.categoryForm.name = response.data.name;
                        console.log(response);
                    }
                )
        }
    },
    mounted() {
            this.loadCategory();
    }



}
</script>

<style>

</style>