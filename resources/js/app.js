import Vue from 'vue';
import routes from './router/index';

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
