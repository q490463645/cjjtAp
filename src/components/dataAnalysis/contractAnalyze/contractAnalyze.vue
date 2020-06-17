<!--
 * @Author: your name
 * @Date: 2020-01-07 17:17:16
 * @LastEditTime : 2020-01-16 17:02:11
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cjjtAp\src\components\dataAnalysis\contractAnalyze\contractAnalyze.vue
 -->
<template>
	<div class="contractAnalyze">
		<headered></headered>
		<menus :selected="'合同信息列表'"></menus>
		<div class="main" ref="wrapper" :style="{ height: (wrapperHeight-50) + 'px' }">
			<mt-loadmore
				:top-method="loadTop"
				:bottom-method="loadBottom"
				:bottom-all-loaded="allLoaded"
				ref="loadmore"
				:autoFill="isAutoFill"
			>
				<ul class="contractList">
					<li v-for="(item,index) in msg" :key="index" @click="enterItem(item)">
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
			</mt-loadmore>
		</div>
	</div>
</template>

<script>
import headered from "./public/headered";
import menus from "./public/menus";
import { constants } from 'zlib';
export default {
  name: "contractAnalyze",
  components: {
    headered,
    menus
  },
  data() {
    return {
	  msg: [],
	   //可以进行上拉
      allLoaded: false,
      //是否自动触发上拉函数
	  isAutoFill: false,
	  courrentPage:0,
	  wrapperHeight:0
    };
  },
  created() {
    // this.$http
    //   .get(this.$store.state.base + "/contract/advance_query", {})
    //   .then(res => {
    //     // console.log(res.data.content)
    //     this.msg = res.data.content;
    //     console.log(this.msg);
	//   });
	  this.loadFrist();
  },
  mounted() {
    // 父控件要加上高度，否则会出现上拉不动的情况
    this.wrapperHeight =
      document.documentElement.clientHeight -
      this.$refs.wrapper.getBoundingClientRect().top;
  },
  methods: {
    enterItem(row) {
      console.log(row.pk);
      return
      this.$router.push({ path: `/contractAnalyze/messageDetails/${row.pk}` });
	},
	//   下拉刷新
    loadTop() {
		console.log('下拉刷新');
      this.loadFrist();
    },
    // 上拉加载
    loadBottom() {
		console.log('上拉加载');
		let isBottom = true;
      this.loadMore(isBottom);
    },
    // 下来刷新加载
    loadFrist() {
		this.$http
      .get(this.$store.state.base + "/contract/advance_query", {})
      .then(res => {
		 console.log(res.data.content)
		this.courrentPage = 1;
        this.allLoaded = false; // 可以进行上拉
		res.data.content.map(val=>{
			this.msg.push(val)
		})
		this.$refs.loadmore.onTopLoaded();
        console.log(this.msg);
	  }).catch(error => {
          console.log(error);
          alert("网络错误，不能访问");
        });
    },
    // 加载更多
    loadMore(isBottom) {
    	this.courrentPage++;
    	this.allLoaded =true;
    	this.$http
      .get(this.$store.state.base + "/contract/advance_query?page="+this.courrentPage, {
        })
      .then(res => {
      	 this.allLoaded = false;
		 if(res.data.content.length==0){
		 	this.allLoaded =true;
		 }
		  console.log(res.data,'加载更多数据')
		 res.data.content.map(val=>{
			this.msg.push(val)
		})
		  console.log(this.courrentPage)
          this.$refs.loadmore.onBottomLoaded();
        })
        .catch(error => {
          console.log(error);
          alert("网络错误，不能访问");
        });
    }
  }
};
</script>