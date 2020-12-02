<template>
	<div>
		<echt :id="'echarts6'" :data="eData7" @change_Legend="changeLegend" @clickBar='clickBar'></echt>
		<div class="projectLists" ref='projectLists'>
			<div class="projectList" v-for="item in childTable1">
				<p>
					<label class="labelItem">
							{{item.R}}
					</label>
				</p>
				<p v-if='eData7.flag=="业主方"'>
					<span class="itemTxt">
							{{item.DW}}
					</span>
					<label class="label">
						建设单位:
					</label>
					
				</p>
				<p v-else>
					<span class="itemTxt">
							{{item.DW}}
					</span>
					<label class="label">
							{{eData7.flag}}
						</label>
					
				</p>
				<p>
					<span class="itemTxt">
							{{utils.fmoney(item.JE,0) }}
					</span>
					<label class="label">
							合同总金额
						</label>
					
				</p>
				<p>
					<span class="itemTxt">
						<a @click="handleDetail(item)" type="text" size="small">详情</a>
					</span>
					<label class="label">
							操作
					</label>
					
				</p>
			</div>
		</div>
		<data7Details @hide='hide' v-if='showDetail'></data7Details>
	</div>
</template>

<script>
	import headered from "./public/headered";
	import menus from "./public/menus";
	import echt from "./echart7";
	import data7Details from "./data7Details";
	import { Toast } from 'mint-ui';
	export default {
		name: "contractAnalyze",
		components: {
			headered,
			menus,
			echt,
			data7Details
		},
		data() {
			return {
				contractList: ['业主方', '专业分包方', '劳务分包方', '采购供货商', '租赁供应商', '其他合同供应商'],
				 eData7:{
			        OWNER:[],
			        PROFESSIONAL:[],
			        LABOUR:[],
			        PURCHASE:[],
			        LEASE:[],
			        OTHER:[],
			        name:[],  
			        flag:''      
			    },
			    childTable1:[],
			    childTable:[],
			    showDetail:false,
			    obj:{}
			}
		},
		created() {

		},
		mounted() {
			this.setEData6('业主方');
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
				let obj = this.obj = {
					jgrq: "",
					kgrq: "",
					orgcode: "",
					type: type[index]
				}
				 this.$http.get('http://172.16.1.100:8088/datacenter/contract/ranking_merchant',{
			        params:obj
			      }).then(res => {
			        this.clearData()
			        let data = res.data;
			        this.childTable1 = data;
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
			      })
			},
			changeLegend(name) {
				this.setEData6(name);
				this.eData7.flag = name;
			},
			clickBar(num) {
				this.$refs.projectLists.scrollTop = num * 121;
			},
			clearData() {
				 this.eData7 = {
			        OWNER:[],
			        PROFESSIONAL:[],
			        LABOUR:[],
			        PURCHASE:[],
			        LEASE:[],
			        OTHER:[],
			        name:[]
			      }
			},
			handleDetail(item){
				this.$store.commit('setData7Details',{
		          ...this.obj,
		          dw:item.DW
		       })
			   this.showDetail=true;
			},
			hide(){
				this.showDetail=false
			}
		}
	}
</script>