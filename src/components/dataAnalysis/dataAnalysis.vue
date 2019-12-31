<template>
	<div class="dataAnalysis">
		<headered></headered>
		<menus :selected="'数据分析'"></menus>
		<div class="main">
				<componentList  v-for='(item,index) in msg.allModules' :key='index' :itemData='item'></componentList>
		</div>
	</div>
</template>

<script>
	import headered from "../public/headered";
	import menus from "../public/menus";
	import componentList from "./componentList.vue";
	export default {
		name: "dataAnalysis",
		components: {
			headered,
			menus,
			componentList
		},
		data() {
			return {
				msg: {
					"allModules": [{
						"id": "1",
						"title": "人力资源",
						"subtitle": "人员分析",
						"index": 1,
						"list": [{
							"name": "人员信息",
							"path": "staffAnalyze",
							"type": "info",
							"checked": true
						}, {
							"name": "培训教育",
							"path": "",
							"type": "def",
							"checked": true
						}, {
							"name": "人才库",
							"path": "",
							"type": "def",
							"checked": true
						}, {
							"name": "人员证书",
							"path": "occupation",
							"type": "info",
							"checked": true
						}],
						"checked": true,
						"component": "a1/A1.vue",
						"iconName": "icon-dilanxianxingiconyihuifu_huabanfuben",
						"imgUrl": "rlzz.png"
					}, {
						"id": "2",
						"title": "组织与项目",
						"subtitle": "A2组件分析",
						"index": 2,
						"component": "A2.vue",
						"list": [{
							"name": "组织信息",
							"path": "",
							"type": "def",
							"checked": true
						}, {
							"name": "项目信息",
							"path": "projectInfo",
							"type": "info",
							"checked": true
						}],
						"checked": true,
						"iconName": "icon-renliziyuan",
						"imgUrl": "zzhxmlalala.png"
					}, {
						"id": "3",
						"title": "生产管理",
						"subtitle": "A3组件分析",
						"index": 3,
						"component": "A3.vue",
						"remark": "",
						"checked": true,
						"iconName": "icon-shengchangongxuchaxun",
						"list": [{
							"name": "特种设备",
							"path": "specialEquipment",
							"type": "imp",
							"checked": true
						}, {
							"name": "隐患排查",
							"type": "info",
							"path": "prodAnalyze",
							"checked": true
						}, {
							"name": "质量巡检",
							"type": "def",
							"path": "",
							"checked": true
						}, {
							"name": "劳务实名制",
							"type": "def",
							"path": "",
							"checked": true
						}, {
							"name": "特殊工种",
							"type": "def",
							"path": "",
							"checked": true
						}],
						"imgUrl": "scgl.png"
					}, {
						"id": "4",
						"title": "合同",
						"subtitle": "合同",
						"index": 4,
						"component": "A4.vue",
						"remark": "",
						"checked": true,
						"iconName": "icon-hetong1",
						"list": [{
							"name": "合同信息",
							"type": "info",
							"path": "contractAnalyze",
							"checked": true
						}],
						"imgUrl": "hygl.png"
					}, {
						"id": "5",
						"title": "财务",
						"subtitle": "A5觅分析",
						"index": 5,
						"component": "A5.vue",
						"remark": "",
						"checked": true,
						"iconName": "icon-zichan",
						"list": [{
							"name": "财务信息",
							"path": "",
							"type": "def",
							"checked": true
						}],
						"imgUrl": "cwgl.jpg"
					}, {
						"id": "6",
						"title": "资产置业",
						"subtitle": "A6组件分析",
						"index": 6,
						"component": "A6.vue",
						"remark": "",
						"checked": true,
						"iconName": "icon-shiwuzhongxin_gudingzichan",
						"list": [{
							"name": "置业信息",
							"type": "def",
							"path": "",
							"checked": true
						}],
						"imgUrl": "zyxx.jpg"
					}, {
						"id": "8",
						"title": "智慧工地",
						"subtitle": "智慧工地",
						"index": 6,
						"component": "A8.vue",
						"remark": "",
						"checked": true,
						"iconName": "icon-shiwuzhongxin_gudingzichan",
						"list": [{
							"name": "智慧工地",
							"type": "def",
							"path": "",
							"checked": true
						}],
						"imgUrl": "zyxx.jpg"
					}]
				}

			}
		},
		created() {
			this.msg.allModules.map((item,index,arr)=>{
				arr[index].imgUrl = require("../../assets/home_img/" + item.imgUrl);
			})
			
		},
		methods: {
			fun() {
				console.log(123)
			}
		}
	}
</script>