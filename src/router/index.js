import Vue from 'vue'
import VueRouter from 'vue-router'
import ToDo from '../views/ToDo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ToDo',
    component: ToDo,
    meta:{ title:'ToDo Home'}
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{title:'About Us Page'}
  },
  {
    path: '/done',
    name: 'Done',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Done.vue'),
    meta:{title:'Done Tasks'}
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
