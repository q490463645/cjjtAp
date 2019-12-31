<template>
	<div class="businessSector">
		<headered></headered>
		<menus :selected="'业务板块'"></menus>
		<div class="main">
			业务板块
		</div>
	</div>
</template>

<script>
	import headered from "../public/headered";
	import menus from "../public/menus";
	export default {
		name: "businessSector",
		components: {
			headered,
			menus
		},
		data() {
			return {
				msg: ''
			}
		}
	}
</script>