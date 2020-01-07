<template>
	<div class="contractAnalyze">
		<headered></headered>
		<menus :selected="'合同动态分析'"></menus>
		<div class="main">
			<mt-navbar v-model="selected" description='acceptable'>
				<mt-tab-item id="1">合同金额排名</mt-tab-item>
				<mt-tab-item id="2">合同方排名</mt-tab-item>
				<mt-tab-item id="3">计量统计分析</mt-tab-item>
			</mt-navbar>
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<echt :id="'echarts6'" :data="eData6" @changeLegend="changeLegend">
					</echt>
					<div class="projectLists">
						<div class="projectList" v-for="item in tableData">
							<p>
								<label class="labelItem">
									{{item.R}}
								</label>
								<span class="itemTit">
									{{item.HTMC}}
								</span>
							</p>
							<p   v-if='eData6.flag=="总包合同"'>
								<label class="label">
									建设单位:
								</label>
								<span class="itemTxt">
									{{item.JSDW}}
								</span>
							</p>
							<p  v-else-if='eData6.flag=="租赁合同"'>
								<label class="label">
									客商名称:
								</label>
								<span class="itemTxt">
									{{item.KSMC}}
								</span>
							</p>
							<p  v-else-if='eData6.flag=="采购合同"'>
								<label class="label">
									供应商:
								</label>
								<span class="itemTxt">
									{{item.GYSMC}}
								</span>
							</p>
							<p  v-else-if='eData6.flag=="其他类合同"'>
								<label class="label">
									供应商:
								</label>
								<span class="itemTxt">
									{{item.GYS}}
								</span>
							</p>
							<p  v-else>
								<label class="label">
									分包商:
								</label>
								<span class="itemTxt">
									{{item.FBSMC}}
								</span>
							</p>
							<p  v-if='eData6.flag=="总包合同"'>
								<label class="label">
									合同造价:
								</label>
								<span class="itemTxt">
									{{item.HTZJ? utils.fmoney(item.HTZJ,1) : ''}}
								</span>
							</p>
							<p  v-else>
								<label class="label">
									合同金额:
								</label>
								<span class="itemTxt">
									{{item.HTJE? utils.fmoney(item.HTJE,1) : ''}}
								</span>
							</p>
							<p>
								<label class="label">
									所属单位:
								</label>
								<span class="itemTxt">
									{{item.SSDW}}
								</span>
							</p>
						</div>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">

				</mt-tab-container-item>
				<mt-tab-container-item id="3">

				</mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>

<script>
	import headered from "./public/headered";

	import menus from "./public/menus";
	import echt from "./echart";
	export default {
		name: "contractAnalyze",
		components: {
			headered,
			menus,
			echt
		},
		data() {
			return {
				contractList: ['业主方', '专业分包方', '劳务分包方', '采购供货商', '租赁供应商', '其他合同供应商'],
				eData6: {
					HTZJ: [],
					PROFESSIONAL: [],
					LABOUR: [],
					PURCHASE: [],
					LEASE: [],
					OTHER: [],
					name: [],
					flag: ''
				},
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
				allTable:[],
			    legendData:'',
			    legendData2:'',
			    tableData:[]
			}
		},
		created() {

		},
		mounted() {
			this.setEData6('总包合同');
		},
		methods: {
			setEData6(name){
				let names=[
					'总包合同','专业分包合同','劳务分包合同','采购合同','租赁合同','其他类合同'
				]
				let index=names.findIndex(item=>{
					return item==name
				})
				let type=[
					"owner",'professional','labour','purchase','lease','other'
				]
				let obj = {
					jgrq: "",
					kgrq: "",
					orgcode: "",
					type: type[index]
				}
				this.$http.get('http://172.16.1.100:8080/datacenter/contract/ranking_list', {
					params: obj
				}).then(res => {
					this.allTable = res.data;
					this.tableData = res.data;
					console.log(res.data);
					this.clearData()
					switch(obj.type) {
						case 'owner':
							res.data.forEach(res => {
								this.eData6.name.push(res.HTMC)
								// this.list.forEach(item => {
								//   this.eData6[item].push( res[item] == undefined ? 0 : res[item])
								// })
								this.eData6.HTZJ.push(res.HTZJ)
								this.eData6.flag = '总包合同'
							})
							break;
						case 'professional':
							res.data.forEach(res => {
								this.eData6.name.push(res.HTMC)
								this.eData6.PROFESSIONAL.push(res.HTJE)
							})
							this.eData6.flag = '专业分包合同'
							break;
						case 'labour':
							res.data.forEach(res => {
								this.eData6.name.push(res.HTMC)
								this.eData6.LABOUR.push(res.HTJE)
							})
							this.eData6.flag = '劳务分包合同'
							break;
						case 'purchase':
							res.data.forEach(res => {
								this.eData6.name.push(res.HTMC)
								this.eData6.PURCHASE.push(res.HTJE)
							})
							this.eData6.flag = '采购合同'
							break;
						case 'lease':
							res.data.forEach(res => {
								this.eData6.name.push(res.HTMC)
								this.eData6.LEASE.push(res.HTJE)
							})
							this.eData6.flag = '租赁合同'
							break;
						case 'other':
							res.data.forEach(res => {
								this.eData6.name.push(res.HTMC)
								this.eData6.OTHER.push(res.HTJE)
							})
							this.eData6.flag = '其他类合同'
							break;
					}
				})
			},
			changeLegend(name) {
				this.setEData6(name);
				this.eData6.flag = name;
			},
			clearData () {
		      this.eData6 = {
		        HTZJ:[],
		        PROFESSIONAL:[],
		        LABOUR:[],
		        PURCHASE:[],
		        LEASE:[],
		        OTHER:[],
		        name:[]
		      }
		    }
		},
		watch: {
			selected: function(val, oldVal) {
				console.log(val)
			}

		}
	}
</script>