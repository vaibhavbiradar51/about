import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{title:'About Us Page'}
  }
]

const router = new VueRouter({
  routes
})
const DEFAULT_TITLE = 'Some Default Title';
router.afterEach((to, from) => {
        Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router
