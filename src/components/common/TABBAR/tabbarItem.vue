<template>
    <div class="tab-bar-item" @click="itemclick">
		<div v-if="!isactive">
			<slot name="item-icon"></slot>
		</div>
		<div v-else>
			<slot name="item-icon-active"></slot>
		</div>
		<!-- 我们在活跃状态也需要给这个文字加上一些style，这里就需要用到v-bind(:)，动态绑定类(class) -->
		<!-- 注意添加样式、指令、属性些在外层的div上不会被之后的给替换掉 -->
		<div :style="activeColor">
			<slot name="item-text"></slot>
		</div>>
    </div>
</template>
<!-- 因为我们的<slot></slot>插槽在被覆盖使是通过ctrl+c粘贴复制的这种方式覆盖的，
所以我们<slot></slot>上添加的一些属性很可能会被覆盖掉，所以我们尽量在外层套一个div或者是其他的标签 -->

<script>
// import vue from 'vue';

    export default {
        name: "tabbarItem",
		props:{
			path:String,
			isActiveColor:{
				type:String,
				default:'red'
			}
		},
		data(){
			return{
				// isactive:true,
			}
		},
		computed:{
			isactive(){
				// indexOf()是否包含括号里的数:等于-1就是没找到,不等于-1就是找到了
				// 下面是让this.$route.path(即处于活跃的那个路由)和this.path比较,看是否包含this.path,如果包含则证明就是那个path
				return this.$route.path.indexOf(this.path) !==-1,
				console.log(this.$route.path)
			},
			activeColor(){
				// 下面是在计算属性中采用三目运算符,如果this.isactive(即处于活跃的),会得到{color:this.isactive}否则会的到一个{}(空对象)
				return this.isactive ? {color:this.isActiveColor}:{}
			}
		},
		methods:{
			itemclick(){
				this.$router.replace(this.path)
			}
		}
     }
</script>

<style scoped>
.tab-bar-item{
	/* 对我们多个的tab-bar-item进行均等分 */
	flex: 1;
	/* 文本对齐 */
	text-align: center;
	/* 49px是tabbar在手机移动端中比较标准的高度,用户体验最好的高度 */
	height: 49px;
}
.tab-bar-item img{
	widows: 27px;
	height: 27px;
	margin-top: 2px;
	/* vertical-align 属性设置元素的垂直对齐方式。middle把元素放置在父元素的中部; */
	vertical-align: middle;
}

</style>
