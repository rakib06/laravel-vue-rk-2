<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between ">

                        <h5>Create Product </h5>
                        <router-link :to="{name: 'product-list' }" class="btn btn-primary">Cancel  </router-link>

                    </div>

                    <div class="card-body">
                        <div class="row">
                            <div class="col-6 offset-3">
                                <form @submit.prevent="createProduct">
                                    <div class="form-group">
                                        <label for=""> Product Name </label>
                                        <input type="text" v-model="productForm.title" class="form-control" placeholder="product title" :class="{ 'is-invalid': productForm.errors.has('title') }">

      <has-error :form="productForm" field="title"></has-error>
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
            productForm: new Form({
                title: '',
                
            })
           
        }
    },
    methods: {
        createProduct(){
            this.productForm.post('/api/product')
            .then(({ data }) => { 
                this.ProductForm.title = '';
                this.$toast.success({
                    title:'Success!',
                    message:'Product Created!'
                })
                console.log(data);

            })

        }
    }

}
</script>

<style>

</style>