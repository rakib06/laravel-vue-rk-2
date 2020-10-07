import Vue from 'vue';
import routes from './router/index';

import { HasError, AlertError } from 'vform'
 
import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
Vue.config.devtools = true;
var toastrConfigs = {
    position: 'top right',
    showDuration: 1000,
    timeOut:5000,
    closeButton:true,
    showMethod: 'bounceIn',
    hideMethod: 'rollIn'
}
Vue.use(CxltToastr, toastrConfigs)

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

require('./bootstrap');



Vue.component('app-header', require('./components/Header.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({ // main entry point
    el: '#app', // #app ekta div id 
    router: routes,
});
