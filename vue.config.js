module.exports={
	// module.exports之后会将这个配置和公共的配置合并
	configureWebpack:{
		resolve:{
			// extensions:[]配置了的的后缀名不用了,默认是配置了.json.js.vue这三种文件
			alias:{
				// 配置别名,cli3内部已经帮我们把src的别名配置为@了,所以可以直接用@代替src
				'assets':'@/assets',
				'common':'@/common',
				'components':'@/components',
				'network':'@/network',
				'views':'@/views',
				// router和store:this.store和this.router就可以拿到这个所以应该不需要问他们取别名
			}
		}
	}
}