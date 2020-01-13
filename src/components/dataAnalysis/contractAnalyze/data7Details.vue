<!--
 * @Author: your name
 * @Date: 2020-01-02 17:22:35
 * @LastEditTime : 2020-01-08 10:48:39
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cjjtAp\src\components\dataAnalysis\contractAnalyze\messageDetails.vue
 -->
<template>
	<div class="data7Details">
		<div class="listheader">
			<a class="icon iconfont" @click="hide">&#xe618;</a>
			<h3>详情</h3>
			<b></b>
		</div>
		<div class="projectLists1">
			<div class="projectList1" v-for="(item,index) in list" :key='index'>
				<p>
					<span class="itemTxt">
									{{item.NAME}}
								</span>
					<label class="label">
									项目名称:
							</label>
				</p>
				<p>
					<span class="itemTxt">
									{{item.HTMC}}
								</span>
					<label class="label">
									合同名称:
							</label>
				</p>
				<p>
					<span class="itemTxt">
									 {{item.HTZJ ? utils.fmoney(item.HTZJ,0) : 
               item.HTJE ? utils.fmoney(item.HTJE,0) : 0}}
								</span>
					<label class="label">
									合同金额:
							</label>
				</p>
				<p>
					<span class="itemTxt">
									{{item.STARTTIME}}
								</span>
					<label class="label">
									开始日期:
							</label>
				</p>
				<p>
					<span class="itemTxt">
									{{item.ENDTIME}}
								</span>
					<label class="label">
									结束日期:
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
	import lists from "./list.js";
	import Heade from "./contarctList/headers.vue";
	export default {
		name: "data7Details",
		props: {
			"data": {
				type: Array,
				default: function() {
					return []
				}
			}
		},
		data() {
			return {
				list: []
			};
		},
		components: {
			Heade
		},
		methods: {
			hide() {
				this.$emit('hide')
			}
		},
		mounted() {
			this.$http.get('http://172.16.1.100:8080/datacenter/contract/ranking_info?sort=kgrq,desc', {
				params: this.$store.state.data7Details
			}).then(res => {
				if(res.data.length == 0) {
					Toast('暂无数据');
				} else {
					this.list = res.data
					console.log(res.data)
				}
			})
		}
	};
</script>