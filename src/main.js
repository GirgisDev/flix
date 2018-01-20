import Vue from 'vue'
import App from './App.vue'
import vueResource from "vue-resource";
import vueRouter from "vue-router";
import Routes from './routes';

Vue.use(vueResource);
Vue.use(vueRouter);

const router = new vueRouter({
  routes: Routes,
  mode: 'history'
});

Vue.directive('theme', {
  bind(el, binding, vnode) {
    binding.value == 'wide' 
    ? el.style.maxWidth = '1200px' 
    : el.style.maxWidth = '800px';
  }
});

// Vue.filter('toUppercase', function (data) {
//   return data.toUpperCase();
// });

Vue.filter('to-uppercase', function (data) {
  if (!data)
    return;
  return data.toUpperCase();
});
Vue.filter('snippet', function (data) {
  if (!data)
    return;
  return data.slice(0, 80) + '....'
});
Vue.filter('snippetTitle', function (data) {
  if (!data)
    return;
  if (data.length > 26)
    return data.slice(0, 26) + '....'
  else
    return data.slice(0, 26);
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
