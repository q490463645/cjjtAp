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
	// console.log(this.msg);
	ajax.getContractList(res=>{
		console.log(res)
	})
  },
  methods: {
	enterItem (row) {
		console.log(row.id)
	  this.$router.push({path:`/contractAnalyze/messageDetails/${row.id}`})
    }
  }
};
</script>