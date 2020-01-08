<!--
 * @Author: your name
 * @Date: 2020-01-02 17:22:35
 * @LastEditTime : 2020-01-08 10:48:39
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cjjtAp\src\components\dataAnalysis\contractAnalyze\messageDetails.vue
 -->
<template>
  <div class="messageDetails">
    <Heade :text="'合同信息列表'"></Heade>
    <div id="main" style="width:100%;display:flex;flex-direction:column;">
      <div class="menu">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">总包</mt-tab-item>
          <mt-tab-item id="2">专业分包</mt-tab-item>
          <mt-tab-item id="3">劳务分包</mt-tab-item>
          <mt-tab-item id="4">采购</mt-tab-item>
          <mt-tab-item id="5">租赁</mt-tab-item>
          <mt-tab-item id="6">其他</mt-tab-item>
        </mt-navbar>
      </div>
      <mt-tab-container v-model="selected" v-for="(item,index) in itemdetail" :key="index">
        <mt-tab-container-item id="1">
          <ul v-for="(item,index) in item.totals" :key="index">
            <h3>{{item.name}}</h3>
            <li>
              <p>合同造价(含税)：</p>
              <p>{{item.cost}}元</p>
            </li>
            <li>
              <p>工程计量(业主批复)：</p>
              <p>{{item.measure}}元</p>
            </li>
            <li>
              <p>合同开工日期：</p>
              <p>{{item.stating}}</p>
            </li>
            <li>
              <p>合同竣工日期：</p>
              <p>{{item.end}}</p>
            </li>
            <li>
              <p>合同日期：</p>
              <p>{{item.days}}天</p>
            </li>
            <li>
              <p>签约日期：</p>
              <p>{{item.contractDate}}</p>
            </li>
            <li>
              <p>建设单位：</p>
              <p>{{item.danwei}}</p>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
           <h3 id="itemTop">{{item.title}}</h3>
          <ul v-for="(item,index) in item.professionals" :key="index">
            <li>
              <ol class="items">
                <li>
                  <p>合同名称：</p>
                  <p>{{item.title}}</p>
                </li>
                <li>
                  <p>合同金额(含税)：</p>
                  <p>{{item.sum}}元</p>
                </li>
                <li>
                  <p>计 量：</p>
                  <p>{{item.metering}}元</p>
                </li>
                <li>
                  <p>付 款：</p>
                  <p>{{item.payment}}元</p>
                </li>
                <li>
                  <p>分包商：</p>
                  <p>{{item.subContractor}}</p>
                </li>
                <li>
                  <p>法人：</p>
                  <p>{{item.Corp}}</p>
                </li>
              </ol>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <ul v-for="(item,index) in item.subcontractors" :key="index">
            <h3>{{item.name}}</h3>
            <li>
              <p>合同造价(含税)：</p>
              <p>{{item.cost}}元</p>
            </li>
            <li>
              <p>工程计量(业主批复)：</p>
              <p>{{item.measure}}元</p>
            </li>
            <li>
              <p>合同开工日期：</p>
              <p>{{item.stating}}</p>
            </li>
            <li>
              <p>合同竣工日期：</p>
              <p>{{item.end}}</p>
            </li>
            <li>
              <p>合同日期：</p>
              <p>{{item.days}}天</p>
            </li>
            <li>
              <p>签约日期：</p>
              <p>{{item.contractDate}}</p>
            </li>
            <li>
              <p>建设单位：</p>
              <p>{{item.danwei}}</p>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="4" v-for="(item,index) in item.cagou" :key="index">
          <ul v-for="(item,index) in item.totals" :key="index">
            <h3>{{item.name}}</h3>
            <li>
              <p>合同造价(含税)：</p>
              <p>{{item.cost}}元</p>
            </li>
            <li>
              <p>工程计量(业主批复)：</p>
              <p>{{item.measure}}元</p>
            </li>
            <li>
              <p>合同开工日期：</p>
              <p>{{item.stating}}</p>
            </li>
            <li>
              <p>合同竣工日期：</p>
              <p>{{item.end}}</p>
            </li>
            <li>
              <p>合同日期：</p>
              <p>{{item.days}}天</p>
            </li>
            <li>
              <p>签约日期：</p>
              <p>{{item.contractDate}}</p>
            </li>
            <li>
              <p>建设单位：</p>
              <p>{{item.danwei}}</p>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="5" v-for="(item,index) in item.zulin" :key="index">
          <ul v-for="(item,index) in item.totals" :key="index">
            <h3>{{item.name}}</h3>
            <li>
              <p>合同造价(含税)：</p>
              <p>{{item.cost}}元</p>
            </li>
            <li>
              <p>工程计量(业主批复)：</p>
              <p>{{item.measure}}元</p>
            </li>
            <li>
              <p>合同开工日期：</p>
              <p>{{item.stating}}</p>
            </li>
            <li>
              <p>合同竣工日期：</p>
              <p>{{item.end}}</p>
            </li>
            <li>
              <p>合同日期：</p>
              <p>{{item.days}}天</p>
            </li>
            <li>
              <p>签约日期：</p>
              <p>{{item.contractDate}}</p>
            </li>
            <li>
              <p>建设单位：</p>
              <p>{{item.danwei}}</p>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="6" v-for="(item,index) in item.qita" :key="index">
          <ul v-for="(item,index) in item.totals" :key="index">
            <h3>{{item.name}}</h3>
            <li>
              <p>合同造价(含税)：</p>
              <p>{{item.cost}}元</p>
            </li>
            <li>
              <p>工程计量(业主批复)：</p>
              <p>{{item.measure}}元</p>
            </li>
            <li>
              <p>合同开工日期：</p>
              <p>{{item.stating}}</p>
            </li>
            <li>
              <p>合同竣工日期：</p>
              <p>{{item.end}}</p>
            </li>
            <li>
              <p>合同日期：</p>
              <p>{{item.days}}天</p>
            </li>
            <li>
              <p>签约日期：</p>
              <p>{{item.contractDate}}</p>
            </li>
            <li>
              <p>建设单位：</p>
              <p>{{item.danwei}}</p>
            </li>
          </ul>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- <div class="footer">
        <b>业主合同1项</b>
    </div>-->
  </div>
</template>
<script>
import lists from "./list.js";
import Heade from "./contarctList/headers.vue";
export default {
  name: "messageDetails",
  data() {
    return {
      selected: "1",
      tabNum: 1,
      itemdetail: [],
      total: [], //总包
      profess: [], //专业
      subcons: [], //劳务
      cagous: [], //采购
      zulins: [], //租赁
      qitas: [] //其他
    };
  },
  components: {
    Heade
  },
  methods: {
    toggle(i, v) {
      console.log(i, v);
      this.active = i;
      this.currentView = v;
    }
    // demoClick: function(index) {
    //   console.log(index);
    //   this.tabNum = index;
    // }
    // tab(m){
    //  this.zujian=m;
    // }
  },
  mounted() {
    // console.log(lists)
    let c = lists.filter((item, index) => {
      return item.id == this.$route.params.id;
    });
    this.itemdetail = c;
    console.log(this.itemdetail);
  }
};
</script>
