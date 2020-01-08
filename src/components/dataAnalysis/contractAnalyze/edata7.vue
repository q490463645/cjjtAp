<template>
	<div>
		<echt :id="'echarts6'" :data="eData6" @changeLegend="changeLegend" @clickBar='clickBar'></echt>
		<div class="projectLists" ref='projectLists'>
			<div class="projectList" v-for="item in tableData">
				<p>
					<label class="labelItem">
							{{item.R}}
						</label>
					<span class="itemTit">
							{{item.HTMC}}
						</span>
				</p>
				<p v-if='eData6.flag=="总包合同"'>
					<label class="label">
							建设单位:
						</label>
					<span class="itemTxt">
							{{item.JSDW}}
						</span>
				</p>
				<p v-else-if='eData6.flag=="租赁合同"'>
					<label class="label">
							客商名称:
						</label>
					<span class="itemTxt">
							{{item.KSMC}}
						</span>
				</p>
				<p v-else-if='eData6.flag=="采购合同"'>
					<label class="label">
							供应商:
						</label>
					<span class="itemTxt">
							{{item.GYSMC}}
						</span>
				</p>
				<p v-else-if='eData6.flag=="其他类合同"'>
					<label class="label">
							供应商:
						</label>
					<span class="itemTxt">
							{{item.GYS}}
						</span>
				</p>
				<p v-else>
					<label class="label">
							分包商:
						</label>
					<span class="itemTxt">
							{{item.FBSMC}}
						</span>
				</p>
				<p v-if='eData6.flag=="总包合同"'>
					<label class="label">
							合同造价:
						</label>
					<span class="itemTxt">
							{{item.HTZJ? utils.fmoney(item.HTZJ,1) : ''}}
						</span>
				</p>
				<p v-else>
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
	</div>
</template>

<script>
	import headered from "./public/headered";

	import menus from "./public/menus";
	import echt from "./echart7";
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
				
			}
		},
		created() {

		},
		mounted() {
			this.setEData6('总包合同');
		},
		methods: {
			setEData6(name) {
				let names = ['业主方', '专业分包方', '劳务分包方', '采购供货商', '租赁供应商', '其他合同供应商'];
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
				 this.$http.get('http://172.16.1.100:8080/datacenter/contract/ranking_merchant',{
			        params:obj
			      }).then(res => {
			        this.clearData1()
			        let data = res.data
			        this.childTable1 = data
			        switch (obj.type) {
			          case 'owner':
			            data.forEach(item => {
			              this.eData7.name.push(item.DW)
			              this.eData7.OWNER.push( item.JE)
			              this.eData7.flag = '业主方'
			            })
			            break;
			          case 'professional':
			            data.forEach(item => {
			              this.eData7.name.push(item.DW)
			              this.eData7.PROFESSIONAL.push( item.JE)
			            })
			            this.eData7.flag = '专业分包方'
			            break;
			          case 'labour':
			            data.forEach(item => {
			              this.eData7.name.push(item.DW)
			              this.eData7.LABOUR.push( item.JE)
			            }) 
			            this.eData7.flag = '劳务分包方'
			            break;
			          case 'purchase':
			            data.forEach(item => {
			              this.eData7.name.push(item.DW)
			              this.eData7.PURCHASE.push( item.JE)
			            }) 
			            this.eData7.flag = '采购供货商'
			            break;
			          case 'lease':
			            data.forEach(item => {
			              this.eData7.name.push(item.DW)
			              this.eData7.LEASE.push( item.JE)
			            }) 
			            this.eData7.flag = '租赁供应商'
			            break;
			          case 'other':
			            data.forEach(item => {
			              this.eData7.name.push(item.DW)
			              this.eData7.OTHER.push( item.JE)
			            }) 
			            this.eData7.flag = '其他合同供应商'
			            break;
			        }
			        console.log(this.eData7)
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
		},
		watch: {
			selected: function(val, oldVal) {
				console.log(val)
			}

		}
	}
</script>