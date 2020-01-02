<template>
	<div class="contractAnalyze">
		<headered></headered>
		<menus :selected="'合同动态分析'"></menus>
		<div class="main">
				合同动态分析
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