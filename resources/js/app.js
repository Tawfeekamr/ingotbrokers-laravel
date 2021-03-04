/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


window.Vue = require('vue').default;

import VeeValidate from 'vee-validate';
// import { ValidationProvider } from 'vee-validate';

window.VeeValidate = require('vee-validate');

Vue.use(VeeValidate);

// try {
//     window.$ = window.jQuery = require('jquery');
// } catch (e) {}
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('login-component', require('./components/LoginComponent.vue').default);
Vue.component('reg-component', require('./components/RegFormComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import Vue from 'vue';

const app = new Vue({
    el: '#app',
});


window.onscroll = function() {stickyHeader()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
