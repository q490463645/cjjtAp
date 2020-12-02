<template>
	<div>
		<echt :id="'echarts6'" :data="eData6" @changeLegend="changeLegend" @clickBar='clickBar'>
		</echt>
		<div class="projectLists" ref='projectLists'>
			<div class="projectList" v-for="item in tableData">
				<p>
					<span class="itemTit">
							{{item.HTMC}}
						</span>
					<label class="labelItem">
							{{item.R}}
						</label>

				</p>
				<p v-if='eData6.flag=="总包合同"'>
					<span class="itemTxt">
							{{item.JSDW}}
						</span>
					<label class="label">
							建设单位:
						</label>

				</p>
				<p v-else-if='eData6.flag=="租赁合同"'>
					<span class="itemTxt">
							{{item.KSMC}}
						</span>
					<label class="label">
							客商名称:
						</label>

				</p>
				<p v-else-if='eData6.flag=="采购合同"'>
					<span class="itemTxt">
							{{item.GYSMC}}
						</span>
					<label class="label">
							供应商:
						</label>

				</p>
				<p v-else-if='eData6.flag=="其他类合同"'>
					<span class="itemTxt">
							{{item.GYS}}
						</span>
					<label class="label">
							供应商:
						</label>

				</p>
				<p v-else>
					<span class="itemTxt">
							{{item.FBSMC}}
						</span>
					<label class="label">
							分包商:
						</label>

				</p>
				<p v-if='eData6.flag=="总包合同"'>
					<span class="itemTxt">
							{{item.HTZJ? utils.fmoney(item.HTZJ,1) : ''}}
						</span>
					<label class="label">
							合同造价:
						</label>

				</p>
				<p v-else>
					<span class="itemTxt">
							{{item.HTJE? utils.fmoney(item.HTJE,1) : ''}}
						</span>
					<label class="label">
							合同金额:
						</label>

				</p>
				<p>
					<span class="itemTxt">
							{{item.SSDW}}
						</span>
					<label class="label">
							所属单位:
						</label>

				</p>
			</div>
		</div>
	</div>
</template>

<script>
	import echt from "./echart6";
	export default {
		name: "edata6",
		components: {
			echt
		},
		data() {
			return {
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
				tableData: []
			}
		},
		created() {

		},
		mounted() {
			this.setEData6('总包合同');
		},
		methods: {
			setEData6(name) {
				let names = [
					'总包合同', '专业分包合同', '劳务分包合同', '采购合同', '租赁合同', '其他类合同'
				]
				let index = names.findIndex(item => {
					return item == name
				})
				let type = [
					"owner", 'professional', 'labour', 'purchase', 'lease', 'other'
				]
				let obj = {
					jgrq: "",
					kgrq: "",
					orgcode: "",
					type: type[index]
				}
				this.$http.get('http://172.16.1.100:8088/datacenter/contract/ranking_list', {
					params: obj
				}).then(res => {
					this.allTable = res.data;
					this.tableData = res.data;
					this.clearData()
					switch(obj.type) {
						case 'owner':
							res.data.forEach(res => {
								this.eData6.name.push(res.HTMC);
								// this.list.forEach(item => {
								//   this.eData6[item].push( res[item] == undefined ? 0 : res[item])
								// })
								this.eData6.HTZJ.push(res.HTZJ);
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
			clickBar(num) {
				this.$refs.projectLists.scrollTop = num * 121;
			},
			clearData() {
				this.eData6 = {
					HTZJ: [],
					PROFESSIONAL: [],
					LABOUR: [],
					PURCHASE: [],
					LEASE: [],
					OTHER: [],
					name: []
				}
			}
		}
	}
</script>