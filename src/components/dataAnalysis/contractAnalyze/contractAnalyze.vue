<!--
 * @Author: your name
 * @Date: 2020-01-07 17:17:16
 * @LastEditTime : 2020-01-16 09:43:32
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cjjtAp\src\components\dataAnalysis\contractAnalyze\contractAnalyze.vue
 -->
<template>
	<div class="contractAnalyze">
		<headered></headered>
		<menus :selected="'合同信息列表'"></menus>
		<div class="main">
			<ul class="contractList">
				<li
					v-for="(item,index) in msg"
					:key="index"
					@click="enterItem(item)"
				>
					<div class="itemsPro">
						<span>
							<b>项目名称：</b>
							{{item.name}}
						</span>
						<span>
							<b>所属单位：</b>
							{{item.ssdw}}
						</span>
						<span>
							<b>工程所在省份(地址)：</b>
							{{item.sssf}}
						</span>
						<span>
							<b>总包合同：</b>
							{{item.ownersSize}}&nbsp;项
						</span>
						<span>
							<b>分包、采购、租赁、其他合同：</b>
							{{item.professionalsSize+item.laboursSize+item.purchasesSize+item.leasesSize+item.othersSize}}&nbsp;项
						</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import headered from "./public/headered";
import menus from "./public/menus";
export default {
  name: "contractAnalyze",
  components: {
    headered,
    menus
  },
  data() {
    return {
      msg: []
    };
  },
  created() {
	this.$http.get(this.$store.state.base+'/contract/advance_query',{}).then(res=>{
		// console.log(res.data.content)
		this.msg=res.data.content;
		console.log(this.msg)
	})
  },
  methods: {
	enterItem (row) {
		console.log(row.pk)
	  this.$router.push({path:`/contractAnalyze/messageDetails/${row.pk}`})
    }
  }
};
</script>