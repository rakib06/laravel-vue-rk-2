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
                                        <input type="text" v-model="categoryForm.name" class="form-control" placeholder="category name" :class="{ 'is-invalid': categoryForm.errors.has('name') }">

      <has-error :form="categoryForm" field="name"></has-error>
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
        createCategory(){
            this.categoryForm.post('/api/category')
            .then(({ data }) => { 
                this.categoryForm.name = '';
                this.$toast.success({
                    title:'Success!',
                    message:'Category Created!'
                })
                console.log(data);

            })

        }
    }

}
</script>

<style>

</style>