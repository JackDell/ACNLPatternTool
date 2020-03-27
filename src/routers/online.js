import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '/pages/Home.vue';
import Browse from '/pages/Browse.vue';
import Editor from '/pages/Editor.vue';
import FAQ from '/pages/FAQ.vue';
import Changelog from '/pages/Changelog.vue';
import Generator from '/pages/Generator.vue';
import Missing from '/pages/Missing.vue';
import ModeratorIndex from '/pages/moderator/Index.vue';
import ModeratorLogin from '/pages/moderator/Login.vue';
import ModeratorDashboard from '/pages/moderator/Dashboard.vue';
Vue.use(VueRouter);

const mode = "history";

const routes = [
  { path: "/", component:  Generator},
  { path: "*", component: Missing }
];

const router = new VueRouter({
  mode,
  routes
});

export default router;