<!--
 * @Author: your name
 * @Date: 2020-01-07 17:17:16
 * @LastEditTime : 2020-01-07 17:34:08
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
							{{item.title}}
						</span>
						<span>
							<b>所属单位：</b>
							{{item.pro}}
						</span>
						<span>
							<b>工程地址：</b>
							{{item.address}}
						</span>
						<span>
							<b>总包合同：</b>
							{{item.total}}
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
import lists from "./list.js";
export default {
  name: "contractAnalyze",
  components: {
    headered,
    menus
  },
  data() {
    return {
      msg: lists
    };
  },
  created() {
  },
  methods: {
	enterItem (row) {
		console.log(row.id)
	  this.$router.push({path:`/contractAnalyze/messageDetails/${row.id}`})
    }
  }
};
</script>