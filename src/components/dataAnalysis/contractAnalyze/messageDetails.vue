<!--
 * @Author: your name
 * @Date: 2020-01-02 17:22:35
 * @LastEditTime : 2020-01-06 14:13:07
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
          <ul v-for="(item,index) in item.professionals" :key="index">
            <h3>{{item.name}}</h3>
            <li>
              <p>合同名称：</p>
              <p>{{item.title}}元</p>
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
              <p>付 款</p>
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
      <!-- <div class="boxDetail" v-for="(c,k) in memulist" :key="k" v-show="c.type == 'totals'">
        <ul v-for="(item,ind) in c.value" :key="ind">
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
      </div>-->
    </div>
    <div class="footer">
      <b>业主合同1项</b>
    </div>
  </div>
</template>
<script>
import lists from "./list.js";
import Heade from "./contarctList/headers.vue";
export default {
  name: "messageDetails",
  data() {
    return {
      selected: 1,
      itemdetail: [],
      memulist: [
        {
          name: "总包",
          type: "totals",
          value: [
            {
              name: "亚洲基础设施投资银行总部永久办公场所项目B标段",
              cost: "1,2000,000,000",
              measure: "800,000,000",
              stating: "2017-04-10",
              end: "2019-07-28",
              days: "839",
              contractDate: "2017-04-10",
              danwei: "北京城市副中心投资件事集团有限公司"
            }
          ]
        },
        {
          name: "专业分包",
          type: "professionals",
          value: [
            //专业分包
            {
              name: "亚洲基础设施投资银行总部永久办公场所项目B标段",
              sum: "4,250,000",
              metering: "3,198,000",
              payment: "3,198,000",
              subContractor: "北京鑫泰德安机电设备安装工程有限公司",
              Corp: "李勇"
            },
            {
              name: "亚洲基础设施投资银行总部永久办公场所项目B标段",
              sum: "4,250,000",
              metering: "3,198,000",
              payment: "3,198,000",
              subContractor: "北京鑫泰德安机电设备安装工程有限公司",
              Corp: "李勇"
            },
            {
              name: "亚洲基础设施投资银行总部永久办公场所项目B标段",
              sum: "4,250,000",
              metering: "3,198,000",
              payment: "3,198,000",
              subContractor: "北京鑫泰德安机电设备安装工程有限公司",
              Corp: "李勇"
            },
            {
              name: "亚洲基础设施投资银行总部永久办公场所项目B标段",
              sum: "4,250,000",
              metering: "3,198,000",
              payment: "3,198,000",
              subContractor: "北京鑫泰德安机电设备安装工程有限公司",
              Corp: "李勇"
            },
            {
              name: "亚洲基础设施投资银行总部永久办公场所项目B标段",
              sum: "4,250,000",
              metering: "3,198,000",
              payment: "3,198,000",
              subContractor: "北京鑫泰德安机电设备安装工程有限公司",
              Corp: "李勇"
            },
            {
              name: "亚洲基础设施投资银行总部永久办公场所项目B标段",
              sum: "4,250,000",
              metering: "3,198,000",
              payment: "3,198,000",
              subContractor: "北京鑫泰德安机电设备安装工程有限公司",
              Corp: "李勇"
            }
          ]
        },
        {
          name: "劳务分包",
          type: "subcontractors",
          value: [
            //劳务分包
            {
              name: "亚洲基础设施投资银行总部",
              sum: "1,250,000",
              metering: "198,000",
              payment: "198,000",
              subContractor: "北京安机电设备安装工程有限公司",
              Corp: "李胖"
            }
          ]
        },
        {
          name: "采购",
          type: "cagou",
          value: [
            {
              name: "亚洲基础设施投资银行总部",
              sum: "1,250,000",
              metering: "198,000",
              payment: "198,000",
              subContractor: "北京安机电设备安装工程有限公司",
              Corp: "李胖"
            }
          ]
        },
        {
          name: "租赁",
          type: "zulin",
          value: []
        },
        {
          name: "其他",
          type: "qita",
          value: []
        }
      ],
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
    },
    demoClick: function(index) {
      console.log(index);
      this.tabNum = index;
    }
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
