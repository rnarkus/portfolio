// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'
//import the App component
import App from './App'
//import the vue router
import firebase from "firebase"
import VueRouter from 'vue-router'
//tell vue to use the router
Vue.use(VueRouter)
//define your routes
//import the hello component
import Home from './components/Home'
//import the about component
import Projects from './components/Projects'
import Blog from './components/Blog'
import Photos from './components/Photos'
//define your routes
import Param from './components/Param'
//import paramdetails component
import paramdetails from './components/paramdetails'
//define your routes
import vueBulmaComponents from 'vue-bulma-components'
import Login from './components/Login'
import SignUp from './components/SignUp'


  // Initialize Firebase
  let app;
var config = {
    apiKey: "AIzaSyClTizFGdo0nys3-H3GkXdcoxiTDcphIyU",
    authDomain: "portfolio-8f5f8.firebaseapp.com",
    databaseURL: "https://portfolio-8f5f8.firebaseio.com",
    projectId: "portfolio-8f5f8",
    storageBucket: "portfolio-8f5f8.appspot.com",
    messagingSenderId: "553723185936"
};
firebase.initializeApp(config);




Vue.use(vueBulmaComponents)
const routes = [
    //route for the home route of the webpage
    { path: '*', redirect: '/login'},
    { path: '/', component: Home },
    //route for the about route of the webpage
    { path: '/projects', component: Projects },
    //route for the param route of the webpage
    { path: '/param', component: Param },
    { path: '/blog', component: Blog, meta: {requiresAuth: true} },
    { path: '/photos', component: Photos },
    //route for the paramdetails passing in params
    { path: '/Paramdetails/:id', component: paramdetails, name: 'Paramdetails'},
    { path: '/login', component: Login },
    { path: '/sign-up', component: SignUp },
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({

      base: '/~dihu0041/portfolio/',

      routes
})

router.beforeEach((to, from, next) => {
    let currentUser= firebase.auth().currentUser;
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) next('login')
    else if (!requiresAuth && currentUser) next('blog')
    else next()
})

export default router

firebase.auth().onAuthStateChanged(function(user) {
    if (!app) {
        app = new Vue({
        //define the selector for the root component
            el: '#app',
          //pass the template to the root component
            template: '<App/>',
          //declare components that the root component can access
            components: { App },
          //pass in the router to the Vue instance
            router,

            render: h => h(App)
        }).$mount('#app')//mount the router on the app
    }
})
