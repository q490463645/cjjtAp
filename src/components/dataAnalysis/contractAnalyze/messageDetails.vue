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
          <ul v-for="(item,index) in total" :key="index">
            <h3>{{item.htmc}}</h3>
            <li>
              <!-- get_thousand_num -->
              <p>合同造价(含税)：</p>
              <p>{{get_thousand_num(item.htzj)+"&nbsp;元"}}</p>
            </li>
            <li>
              <p style="width:120px;">工程计量(业主批复)：</p>
              <p
                @click="clickBlock(item.calculates)"
              >{{Array.isArray(item.calculates) && (item.calculates[0] ? get_thousand_num(item.calculates[0].finalAmount)+"&nbsp;元" : "暂无数据")}}</p>
            </li>
            <li>
              <p>合同开工日期：</p>
              <p>{{item.htkgrq}}</p>
            </li>
            <li>
              <p>合同竣工日期：</p>
              <p>{{item.htjgrq}}</p>
            </li>
            <li>
              <p>合同工期：</p>
              <p>{{item.htgq}}&nbsp;天</p>
            </li>
            <li>
              <p>签约日期：</p>
              <p>{{item.qyrq}}</p>
            </li>
            <li>
              <p>建设单位：</p>
              <p>{{item.jsdw}}</p>
            </li>
          </ul>
          <div class="footer">
            <b>总包合同&nbsp;{{item.ownersSize}}&nbsp;项</b>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <h3 id="itemTop">{{item.name}}</h3>
          <!-- {{item.professionals}} -->
          <ul v-for="(items,k) in profess" :key="k">
            <li>
              <ol class="items">
                <li style="display:flex;justify-content: space-between;">
                  <p>合同名称：</p>
                  <p class="contractName">{{items.htmc}}</p>
                </li>
                <li>
                  <p>合同金额(含税)：</p>
                  <p>{{get_thousand_num(items.htje)+"&nbsp;元"}}</p>
                </li>
                <li>
                  <p>计量：</p>
                  <p
                    @click="clickBlock(items.calculates)"
                  >{{Array.isArray(items.calculates) && (items.calculates[0] ? get_thousand_num(items.calculates[0].finalAmount)+"&nbsp;元" : "暂无数据")}}</p>
                </li>
                <li>
                  <p>付 款：</p>
                  <p></p>
                </li>
                <li style="display:flex;justify-content: space-between;">
                  <p>分包商：</p>
                  <p class="fenbao">{{items.fbsmc}}</p>
                </li>
                <li>
                  <p>法人：</p>
                  <p>{{items.fr}}</p>
                </li>
              </ol>
            </li>
          </ul>
          <div class="footer">
            <b>专业分包合同&nbsp;{{item.professionalsSize+"&nbsp;项"}}</b>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <h3 id="itemTop">{{item.name}}</h3>
          <ul v-for="(item,index) in item.labours" :key="index">
            <li>
              <ol class="items">
                <li>
                  <p>合同名称：</p>
                  <p class="contractName">{{item.title? item.title : "暂无数据"}}</p>
                </li>
                <li>
                  <p>合同金额(含税)：</p>
                  <p>{{get_thousand_num(item.htje)+"&nbsp;元"}}</p>
                </li>
                <li>
                  <p>计 量：</p>
                  <p
                    @click="clickBlock(item.calculates)"
                  >{{Array.isArray(item.calculates) && (item.calculates[0] ? get_thousand_num(item.calculates[0].finalAmount)+"&nbsp;元" : "暂无数据")}}</p>
                </li>
                <li>
                  <p>付 款：</p>
                  <p></p>
                </li>
                <li>
                  <p>分包商：</p>
                  <p class="fenbao">{{item.fbsmc}}</p>
                </li>
                <li>
                  <p>法人：</p>
                  <p>{{item.fr}}</p>
                </li>
              </ol>
            </li>
          </ul>
          <div class="footer">
            <b>劳务分包合同&nbsp;{{item.laboursSize+"&nbsp;项"}}</b>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <h3 id="itemTop">{{item.name}}</h3>
          <ul v-for="(items,index) in item.purchases" :key="index">
            <li>
              <ol class="items">
                <li>
                  <p>合同名称：</p>
                  <p class="contractName">{{items.title? items.title : "暂无数据"}}</p>
                </li>
                <li>
                  <p>合同金额(含税)：</p>
                  <p>{{get_thousand_num(items.htje)+"&nbsp;元"}}</p>
                </li>
                <li>
                  <p>计 量：</p>
                  <p></p>
                </li>
                <li>
                  <p>付 款：</p>
                  <p></p>
                </li>
                <li>
                  <p>分包商：</p>
                  <p class="fenbao">{{item.fbsmc}}</p>
                </li>
                <li>
                  <p>法人：</p>
                  <p>{{item.fr}}</p>
                </li>
              </ol>
            </li>
          </ul>
          <div class="footer">
            <b>采购合同&nbsp;{{item.purchasesSize+"&nbsp;项"}}</b>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
          <h3 id="itemTop">{{item.name}}</h3>
          <ul v-for="(items,index) in item.leases" :key="index">
            <li>
              <ol class="items">
                <li>
                  <p>合同名称：</p>
                  <p class="contractName">{{items.title? items.title : "暂无数据"}}</p>
                </li>
                <li>
                  <p>合同金额(含税)：</p>
                  <p>{{get_thousand_num(items.htje)+"&nbsp;元"}}</p>
                </li>
                <li>
                  <p>计 量：</p>
                  <p
                    @click="clickBlock(items.calculates)"
                  >{{Array.isArray(items.calculates) && (items.calculates[0] ? get_thousand_num(items.calculates[0].finalAmount)+"&nbsp;元" : "暂无数据")}}</p>
                </li>
                <li>
                  <p>付 款：</p>
                  <p></p>
                </li>
                <li>
                  <p>分包商：</p>
                  <p class="fenbao">{{item.fbsmc}}</p>
                </li>
                <li>
                  <p>法人：</p>
                  <p>{{item.fr}}</p>
                </li>
              </ol>
            </li>
          </ul>
          <div class="footer">
            <b>租赁合同&nbsp;{{item.leasesSize+"&nbsp;项"}}</b>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="6">
          <h3 id="itemTop">{{item.name}}</h3>
          <ul v-for="(item,index) in item.others" :key="index">
            <li>
              <ol class="items">
                <li>
                  <p>合同名称：</p>
                  <p class="contractName">{{item.title? item.title : "暂无数据"}}</p>
                </li>
                <li>
                  <p>合同金额(含税)：</p>
                  <p>{{get_thousand_num(item.htje)+"&nbsp;元"}}</p>
                </li>
                <li>
                  <p>计 量：</p>
                  <p
                    @click="clickBlock(item.calculates)"
                  >{{Array.isArray(item.calculates) && (item.calculates[0] ? get_thousand_num(item.calculates[0].finalAmount)+"&nbsp;元" : "暂无数据")}}</p>
                </li>
                <li>
                  <p>付 款：</p>
                  <p></p>
                </li>
                <li>
                  <p>分包商：</p>
                  <p class="fenbao">{{item.fbsmc}}</p>
                </li>
                <li>
                  <p>法人：</p>
                  <p>{{item.fr}}</p>
                </li>
              </ol>
            </li>
          </ul>
          <div class="footer">
            <b>其他合同&nbsp;{{item.othersSize+"&nbsp;项"}}</b>
          </div>
        </mt-tab-container-item>
        <mt-popup
          v-model="showDropDown"
          popup-transition="popup-fade"
          :closeOnClickModal="showDropDown"
        >
          <ul class="market">
            <li
              v-for="(items, index) in list"
              :key="index"
            >第{{items.time}}次付款：{{items.currentAmount}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{items.day&& items.day.substr(0,10)}}</li>
          </ul>
        </mt-popup>
        <div class="v-modal" style="z-index:2000;" v-if="showDropDown" @click="changeviews()"></div>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
import lists from "./list.js";
import Heade from "./contarctList/headers.vue";
import { types } from "util";
import { Popup } from "mint-ui";
export default {
  name: "messageDetails",
  data() {
    return {
      selected: "1",
      tabNum: 1,
      pk: "",
      itemdetail: [],
      total: [], //总包
      profess: [], //专业
      subcons: [], //劳务
      cagous: [], //采购
      zulins: [], //租赁
      qitas: [], //其他,
      showDropDown: false,
      list: []
    };
  },
  components: {
    Heade,
    Popup
  },
  methods: {
    clickBlock(list) {
      this.list = list;
      console.log(list);
      list.length ? (this.showDropDown = false) : (this.showDropDown = true);
      this.showDropDown = !this.showDropDown;
    },
    changeviews() {
      this.showDropDown = false;
    },
    get_thousand_num(num) {
      return (num || 0).toString().replace(/\d+/, function(n) {
        var len = n.length;
        if (len % 3 === 0) {
          return n.replace(/(\d{3})/g, ",$1").slice(1);
        } else {
          return (
            n.slice(0, len % 3) + n.slice(len % 3).replace(/(\d{3})/g, ",$1")
          );
        }
      });
    }
  },
  mounted() {
    this.$http
      .get(this.$store.state.base + "/contract/advance_query", {})
      .then(res => {
        console.log(res.data.content,"res")
        console.log(this.$route.params.pk)
        let data = res.data.content;
        let arr = data.filter((item, index) => {
          return this.$route.params.pk == item.pk;
        });
        // this.itemdetail = arr
        arr.forEach((item, k) => {
          this.total = item.owners;
          this.profess = item.professionals;
          this.subcons = item.labours;
          this.cagous = item.purchases;
          this.zulins = item.leases;
          this.qitas = item.others;
        });
        this.itemdetail = arr;
      });
  },
  created() {
    console.log(this.$route.params)
  }
};
</script>
