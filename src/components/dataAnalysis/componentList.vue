<template>
	<div class="analysisList">
		<div class="title">
			{{itemData.title}}
		</div>
		<div class="listContent">
			<img :src.sync='itemData.imgUrl' />
			<div class="button">
				<span class="icon iconfont">&#xe619;</span>
			</div>
		</div>
		<div class="listBottom">
			<mt-swipe :auto="0" v-if='list.length<=2'>
				<mt-swipe-item >
					<div  v-for="item in list" :key="item.length"
						:class="['button',item.type=='def'? 'defColor':'',item.type=='imp'?'impColor':'',item.type=='zy'? 'zyColor':'']"
            @click="details(item.path)"
						>
						{{item.name}}
					</div>
				</mt-swipe-item>
			</mt-swipe>
			<mt-swipe :auto="0" v-if='list.length<=4&&list.length>2'>
				<mt-swipe-item >
					<div v-for="(item,index) in list" v-if="index<2" :key="index"
						:class="['button',item.type=='def'? 'defColor':'',item.type=='imp'?'impColor':'',item.type=='zy'? 'zyColor':'']"
            @click="details(item.path)"
						>
						{{item.name}}
					</div>
				</mt-swipe-item>
				<mt-swipe-item >
					<div v-for="(item,index) in list" v-if="index>=2" :key="index"
						:class="['button',item.type=='def'? 'defColor':'',item.type=='imp'?'impColor':'',item.type=='zy'? 'zyColor':'']"
            @click="details(item.path)">
						{{item.name}}
					</div>
				</mt-swipe-item>
			</mt-swipe>
			<mt-swipe :auto="0" v-if='list.length<=6&&list.length>4'>
				<mt-swipe-item >
					<div v-for="(item,index) in list" v-if="index<2" :key="index"
					:class="['button',item.type=='def'? 'defColor':'',item.type=='imp'?'impColor':'',item.type=='zy'? 'zyColor':'']"
            @click="details(item.path)">
						{{item.name}}
					</div>
				</mt-swipe-item>
				<mt-swipe-item >
					<div v-for="(item,index) in list" v-if="index>=2&&index<4" :key="index"
						:class="['button',item.type=='def'? 'defColor':'',item.type=='imp'?'impColor':'',item.type=='zy'? 'zyColor':'']"
            @click="details(item.path)">
						{{item.name}}
					</div>
				</mt-swipe-item>
				<mt-swipe-item >
					<div v-for="(item,index) in list" v-if="index>=4&&index<6" :key="index"
						:class="['button',item.type=='def'? 'defColor':'',item.type=='imp'?'impColor':'',item.type=='zy'? 'zyColor':'']"
            @click="details(item.path)">
						{{item.name}}
					</div>
				</mt-swipe-item>
			</mt-swipe>
			
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default {
		props: {
			itemData: {
				type: Object,
				default: function() {
					return {
						list: [],
						imgUrl: ""
					};
				}
			}
		},
		data() {
			return {
				list: [],
				imgUrl: ""
			};
		},
		mounted() {},
		methods: {
			openDestislList() {
				console.log("arrow");
				// if (name == "") {
				//   this.$message("暂无模块");
				//   return;
				// }
				// newWindow.openNewWindow(name, true, "staff", 1500, 1000);
			},
			allModule() {
				this.$emit("allModule");
			},
			details(name) {
				console.log(name);
				if(name == "") {
					Toast('暂无模块');
					return;
				}
			}
		},
		created() {
			
			this.list = this.itemData.list
			console.log(this.list)
		},
		watch: {
			itemData: {
				handler(newName, oldName) {
					this.list = this.itemData.list;
				},
				deep: true
			}
		}
	};
</script>
<style scoped>
	.analysisList .mint-swipe .mint-swipe-items-wrap .button{
		float: right;
	}
	.analysisList .mint-swipe .mint-swipe-items-wrap .button:nth-of-type(2n-1){
		float: left;
	}
	.button {
		background-color: #5c8ccc;
	}
	
	.defColor {
		background-color: #ccc;
	}
	
	.zyColor {
		background-color: #923931;
	}
	
	.impColor {
		background-color: #fc0;
	}
</style>