import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../pages/Search.vue";
import SearchResult from "../pages/SearchResult.vue";
import Login from "../components/UI/Login.vue";
import { store } from "../store/index.js";

Vue.use(VueRouter);

// router Guard
const rejectAuthUser = (to, from, next) => {
    if (store.state.isLogin === true) {
        alert("이미 로그인을 하였습니다");
        next("/");
    } else {
        next();
    }
};

export const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Search
        },
        {
            path: "/search",
            name: "search",
            component: Search
        },
        {
            path: "/searchresult",
            component: SearchResult
        },
        {
            path: "/login",
            name: "login",
            component: Login,
            beforeEnter: rejectAuthUser
        }
    ]
});
