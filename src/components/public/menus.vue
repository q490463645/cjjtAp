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
					name: "首页",
					path: "/",
					icon: "&#xe608;"
				}, {
					name: "业务板块",
					path: "/businessSector",
					icon: "&#xe636;"
				}, {
					name: "数据分析",
					path: "/dataAnalysis",
					icon: "&#xe62c;"
				}, {
					name: "我的",
					path: "/my",
					icon: "&#xe635;"
				}],
				 selected1:"首页"
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