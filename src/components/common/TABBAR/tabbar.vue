<template>
    <div>
		<div id="tab-bar">
			<slot></slot>
		</div>
    </div>
</template>


<script>
import vue from 'vue';

    export default {
        name: "tabbar",
     }
</script>

<style scoped>
	/* 下面这种方法是导入assets/css/base.css文件,如果在main.js下调用这个css文件页面就会很乱,main.js挂载了app.vue所以我们可以通过下面这种方式在style中来导入这个css文件 */


#tab-bar{
	/* flex: 意为弹性布局,为盒状模型提供最大的灵活性,设为Flex布局后,子元素的float,clear和vertical-align属性将失效; */
	display: flex;
	background-color: #f8f8;
	/* position: fixed;也是绝对定位的一种扩展或说变型,两者都脱离了文档流,但有很大程度的不同,那就是position:fixed定位的元素会固定原来的位置不变,无论如何拖动滚动条 */
	position: fixed;
	/* 左 */
	left: 0;
	/* 右 */
	right: 0;
	/* 上 */
	/* top: 100px; */
	/* 下 */
	bottom: 0;
	/* height: 49px; */
	box-shadow:0px -1px 1px rgba(100,100,.1);
}

</style>
