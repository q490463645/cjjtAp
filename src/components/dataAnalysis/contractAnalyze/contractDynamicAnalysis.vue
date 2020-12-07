<template>
	<div class="contractAnalyze">
		<headered></headered>
		<menus :selected="'合同动态分析'"></menus>
		<div class="main">
			<mt-navbar v-model="selected" description='acceptable'>
				<mt-tab-item id="1">合同金额排名</mt-tab-item>
				<mt-tab-item id="2">业主方排名</mt-tab-item>
				<mt-tab-item id="3">分包方排名</mt-tab-item>
				<mt-tab-item id="4">计量统计分析</mt-tab-item>
			</mt-navbar>
			<edata6 v-if='selected=="1"'></edata6>
			<edata7 v-if='selected=="2"'></edata7>
		</div>
	</div>
</template>

<script>
	import headered from "./public/headered";
	import menus from "./public/menus";
	import edata6 from "./edata6";
	import edata7 from "./edata7";
	export default {
		name: "contractAnalyze",
		components: {
			headered,
			menus,
			edata6,
			edata7
		},
		data() {
			return {
				contractList: ['业主方', '专业分包方', '劳务分包方', '采购供货商', '租赁供应商', '其他合同供应商'],
			
				eData7: {
					OWNER: [],
					PROFESSIONAL: [],
					LABOUR: [],
					PURCHASE: [],
					LEASE: [],
					OTHER: [],
					name: [],
					flag: ''
				},
				selected: '1',
			    legendData2:''
			}
		},
		created() {

		},
		mounted() {
			
		},
		methods: {
		
		},
		watch: {
			selected: function(val, oldVal) {
				console.log(val)
			}

		}
	}
</script>