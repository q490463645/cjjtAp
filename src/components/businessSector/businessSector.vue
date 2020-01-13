<template>
	<div class="businessSector">
		<headered></headered>
		<menus :selected="'业务板块'"></menus>
		<div class="main">
			<div class="items">
				<div class="item" v-for="(item,index) in msg" :key='index'>
					<h3>{{item.title}}</h3>
					<div class="buttonBox">
						<button 
							v-for="(item1,index1) in item.children" 
							:key='index1' 
							@click="route(item1.path)"
							:class="['button',item1.type=='def'? 'defColor':'',item1.type=='imp'?'impColor':'',item1.type=='zy'? 'zyColor':'']"
						>
							{{item1.tit}}
						</button>
					</div>
				</div>
					
			</div>
		
		</div>
	</div>
</template>

<script>
	import headered from "../public/headered";
	import menus from "../public/menus";
	import { Toast } from 'mint-ui';
	export default {
		name: "businessSector",
		components: {
			headered,
			menus
		},
		data() {
			return {
				msg: [
					{
						title:"生产管理",
						children:[
							{
								tit:'质量巡检',
								type:'def',
								path:''
							},
							{
								tit:'特种设备',
								type:'imp',
								path:''
							},
							{
								tit:'特殊工种',
								type:'imp',
								path:''
							},
							{
								tit:'工程进度',
								path:''
							}
						]
					},{
						title:"安全管理",
						children:[
							{
								tit:'隐患排查',
								type:'def',
								path:'/hidden'
							},
							{
								tit:'特种设备',
								path:''
							}
						]
					}
				]
			}
		},
		methods: {
			route(name) {
				console.log(name);
				if(name == "") {
					Toast('暂无模块');
					return;
				}else{
					this.$router.push({path:name})
				}
			}
		},
	}
</script>