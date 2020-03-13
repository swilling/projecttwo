<template>
    <div>
		<tabbar>
			<tabbaritem path="/home" isActiveColor="blue">
				<template v-slot:item-icon>
					<!-- 注意：下面src="~assets/img/TABBAR/home.svg"。因为我是在这个img里面的src里使用的别名，所以需要在前面加上一个这个符号(~)。 -->
					<img src="~assets/img/TABBAR/home.svg" alt="">
				</template>
				<template v-slot:item-icon-active>
					<img src="~assets/img/TABBAR/home_active.svg" alt="">
				</template>
				<template v-slot:item-text>
					<div>首页</div>
				</template>		
			</tabbaritem>
			
			<tabbaritem path="/gategory" isActiveColor="blue">
				<template v-slot:item-icon>
					<img src="~assets/img/TABBAR/category.svg" alt="">
				</template>
				<template v-slot:item-icon-active>
					<img src="~assets/img/TABBAR/category_active.svg" alt="">
				</template>
				<template v-slot:item-text>
					<div >分类</div>
				</template>
			</tabbaritem>
			
			<tabbaritem path="/sopcart" isActiveColor="blue">
				<template v-slot:item-icon>
					<img src="~assets/img/TABBAR/cart.svg" alt="">
				</template>
				<template v-slot:item-icon-active>
					<img src="~assets/img/TABBAR/cart_active.svg" alt="">
				</template>
				<template v-slot:item-text>
					<div >购物车</div>
				</template>
			</tabbaritem>
			
			<tabbaritem path="/profile" isActiveColor="blue">
				<template v-slot:item-icon>
					<img src="~assets/img/TABBAR/profile.svg" alt="">
				</template>
				<template v-slot:item-icon-active>
					<img src="~assets/img/TABBAR/profile_active.svg" alt="">
				</template>
				<template v-slot:item-text>
					<div >我的</div>
				</template>
			</tabbaritem>
		</tabbar>
    </div>
</template>
<!-- 给路径取别名：在webpack.base.conf.js下面的resolve选项中进行配置 -->
<script>
// import vue from 'vue';
	import tabbar from 'components/common/TABBAR/tabbar.vue';
	import tabbaritem from 'components/common/TABBAR/tabbarItem.vue'
    export default {
        name: "mainTabbar",
		components:{
			tabbar,
			tabbaritem
		}
     }
</script>

<style scoped>

</style>
