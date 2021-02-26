import Vue from 'vue';
import ogvdesign from './ogvdesign';
let ogvSchema = {
    install(app, options) {
        Vue.component('ogvdesign', Vue.extend(ogvdesign));
        window.OGVSchema = this;
    }
}
export default ogvSchema;