<template>
		<mt-tabbar v-model="selected1" fixed>
			<mt-tab-item v-for='(item,index) in menu' :id="item.name" :key='index'>
				<span class="icon iconfont" v-html="item.icon"></span>
				{{item.name}}
			</mt-tab-item>
		</mt-tabbar>
</template>

<script>
	export default {
		props: ['selected'],
		name: "menus",
		data() {
			return {
				menu: [{
					name: "合同信息分析",
					path: "/contractInformationAnalysis",
					icon: "&#xe638;"
				}, {
					name: "合同信息列表",
					path: "/contractAnalyze",
					icon: "&#xe61f;"
				}, {
					name: "合同动态分析",
					path: "/contractDynamicAnalysis",
					icon: "&#xe62e;"
				}],
				 selected1:"合同信息列表"
			}
		},
		mounted() {
    	this.selected1=this.selected;
    	
   		},
		watch: {
			selected1: function(val, oldVal) {
				let index = this.menu.findIndex(item => {
					return item.name == val
				})
				if(this.$route.path!==this.menu[index].path)
				this.$router.push(this.menu[index].path)
			}

		}
	}
</script>