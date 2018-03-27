// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.config.productionTip = false;

Vue.http.options.root = "http://comments.stage.itsvit.org/api/";

/* eslint-disable no-new */

var bus = new Vue();
// in component A's method
bus.$on('id-selected', function (id) {
  alert(id);
})
window.f = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
