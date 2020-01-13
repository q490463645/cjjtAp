<template>
	<div class="hidden">
		<a class="icon iconfont back" @click="changeRoute">&#xe618;</a>
		<iframe src="http://203.187.185.185:7109/dist/www/index.html" class="hiddenIframe"></iframe>
	</div>
</template>

<script>
	import headered from "../public/headered";
	import menus from "../public/menus";
	import { Toast } from 'mint-ui';
	export default {
		name: "hidden",
		components: {
			headered,
			menus
		},
		data() {
			return {
				msg: []
			}
		},
		methods: {
			changeRoute() {
				this.$router.back(-1);
			}
		},
	}
</script>