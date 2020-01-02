<template>
	<div class="contractAnalyze">
		<headered></headered>
		<menus :selected="'合同信息列表'"></menus>
		<div class="main">
				合同信息列表
		</div>
	</div>
</template>

<script>
	import headered from "./public/headered";
	import menus from "./public/menus";
	export default {
		name: "contractAnalyze",
		components: {
			headered,
			menus
		},
		data() {
			return {
				msg:''

			}
		},
		created() {
			
		},
		methods: {
		}
	}
</script>