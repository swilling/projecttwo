import Vue from 'vue'
import VueRouter from 'vue-router'

// const Home = () => import('../views/Tabbar/home');
const Home = () => import('views/Tabbar/home');
const Profile = () => import('views/Tabbar/profile');
const Gategory = () => import('views/Tabbar/gategory');
const Sopcart = () => import('views/Tabbar/sopcart');

Vue.use(VueRouter)

const routes=[
	{
		path:'',
		redirect:'/home'
	},
	{
		path:'/home',
		component:Home
	},
	{
		path:'/profile',
		component:Profile
	},
	{
		path:'/gategory',
		component:Gategory
	},
	{
		path:'/sopcart',
		component:Sopcart
	}
]

const router = new VueRouter({
	routes,
	mode:'history'
})

export default router