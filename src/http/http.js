import baowen2 from './baowen2.js'
import baowen from './baowen.js'

import $ from 'jquery'
let url =
  // 'http://192.168.3.88:7101/datacenter/'
  // 'http://124.42.66.13:7101/datacenter/'
  'http://172.16.1.100:8088/datacenter/'
export default {
  // 获取隐患排查
  getPro(obj, callback) {
    $.ajax({
      type: 'POST',
      url: 'http://203.187.185.185:7109/uapws/service/IBigScreenDangerWs',
      async: true,
      data: baowen2.getPro(obj),
      success: function (data) {
        var data = data["responseText"] || data;
        data = $(data)
          .find("return")
          .html();
        data = JSON.parse(data);
        callback && callback(data);
      }
    })
  },
  getPK(pk, callback) {
    $.ajax({
      type: 'POST',
      url: 'http://203.187.185.185:7109/uapws/service/IBigScreenDangerWs',
      async: true,
      data: baowen2.getPK(pk),
      success: function (data) {
        var data = data["responseText"] || data;
        data = $(data)
          .find("return")
          .html();
        data = JSON.parse(data);
        callback && callback(data);
      }
    })
  },
  mxGetCorpName(c) {
    this.$store.state.dict.corp.forEach(o => {});
  },
  //获取人力头条咨询
  getHomeMessage(obj, callback) {
    $.ajax({
      type: 'get',
      url: url+'person/headlines',
      async: true,
      data: obj,
      success: function (data) {
        callback && callback(data)
      }
    })
  },
  getMap(obj, callback) {
    $.ajax({
      type: 'get',
      url: url+'contract/project_location',
      async: true,
      data: obj,
      success: function (data) {
        callback && callback(data)
      }
    })
  },
  getMapInfo(obj, callback) {
    $.ajax({
      type: 'get',
      url: url+'contract/project_provincecount',
      async: true,
      data: obj,
      success: function (data) {
        callback && callback(data)
      }
    })
  },
  // 获取合同列表下列表
  getContractList(url, callback, page, size, sort) {
    $.ajax({
      type: 'get',
      url: url,
      async: true,
      success: function (data) {
        callback && callback(data)
      }
    })
  },
  // 获取一级单位和二级单位rest版   
  getCompany(callback) {
    $.ajax({
      type: 'get',
      url: url + 'person/getOrg',
      async: true,
      success: function (data) {
        callback && callback(data)
      }
    })
  },
  // 获取职称，年龄，学历，性别数据rest
  getkinds(echartsData, callback) {
    $.ajax({
      type: 'get',
      url: url + 'person/base_query',
      async: true,
      data: echartsData,
      success: function (data) {
        console.log(data)
        callback && callback(data)
      }
    })
  },

  // 高级搜索和点击对应的表格 rest版本
  getAdvanceData(AdvanceData, callback, href = "") {
    $.ajax({
      type: 'get',
      url: url + 'person/advance_query' + href,
      async: true,
      data: AdvanceData,
      success: function (data) {
        callback && callback(data)
      }
    })
  },

  //人员动态分析 rest
  getPersonDynamicAnalysis(peoData, callback) {
    $.ajax({
      type: 'get',
      url: url + 'person/dynamic_analysis',
      async: true,
      data: peoData,
      success: function (data) {
        callback && callback(data)
      }
    })
  },

  //动态分析点击年份出来表格 rest
  getDyntable(dynData, callback) {
    $.ajax({
      type: 'get',
      url: url + 'person/dynamic_query',
      async: true,
      data: dynData,
      success: function (data) {
        callback && callback(data)
      }
    })
  },
  //获取全部的字段名
  getField(type, callback, data) {
    //  let obj = {
    //    "name": data.name
    //  };
    //  if (data.value) {
    //    obj = {
    //      "name": data.name,
    //      "value": data.value
    //    }
    //  }
    //  if (data.name == '一级菜单') {
    //    obj = {
    //      "name": data.name,
    //      "value": data.value,
    //      "modelName": data.modelName
    //    }
    //  }
    //  console.log(obj)
    $.ajax({
      type: type,
      url: url+'menus/menu',
      contentType: 'application/json; charset=UTF-8',
      dataType: 'json',
      data: type == 'post' ? JSON.stringify(data) : data,
      async: true,
      success: function (data) {
        callback && callback(data)
      }
    })
  },
  //获取表头
  getHead(flag, callback) {
    $.ajax({
      type: 'get',
      url: url+'menus/' + flag,
      async: true,
      success: function (data) {
        callback && callback(data)
      }
    })
  },
  //获取特种设备列表
  getEquipList(obj, callback) {
    $.ajax({
      type: 'get',
      url: url+'produce/device/deviceList',
      async: true,
      data: obj,
      success: function (data) {
        callback && callback(data)
      }
    })
  },
  //获取组织
  getOrgList(callback) {
    $.ajax({
      type: 'get',
      url: url+'produce/device/getOrg',
      async: true,
      success: function (data) {
        callback && callback(data)
      }
    })
  },
  //获取状态和类型
  getOwnerList(callback) {
    $.ajax({
      type: 'get',
      url: url+'produce/device/ownership',
      async: true,
      success: function (data) {
        callback && callback(data)
      }
    })
  },
  //项目信息
  //获取项目列表
  getProjectList(obj, callback) {
    $.ajax({
      type: 'get',
      url: url+'contract/advance_query?orgcode=0106&project=&kgrq=&jgrq=',
      async: true,
      data: obj,
      success: function (data) {
        callback && callback(data)
      }
    })
  },
  //特殊设备echarts
  getEquipEchart(callback) {
    $.ajax({
      type: 'get',
      url: url+'produce/device/dynamic_query',
      async: true,
      success: function (data) {
        callback && callback(data)
      }
    })
  },
  //证书类型 
  getOccupaType(callback) {
    $.ajax({
      type: 'get',
      url: url+'certificate/certificateType',
      async: true,
      success: function (data) {
        callback && callback(data)
      }
    })
  },
  //获取证书列表 http://172.16.21.179:8080/certificate/certificateTypeList
  getOccupaList(obj, callback){
    $.ajax({
      type: 'get',
      url: url+'certificate/certificateTypeList',
      async: true,
      data: obj,
      success: function (data) {
        callback && callback(data)
      }
    })
  },
  //人员证书--根据姓氏模糊匹配
  getSearchName(obj, callback){
    $.ajax({
      type: 'get',
      url: url+'certificate/type?',
      async: true,
      data: obj,
      success: function (data) {
        callback && callback(data)
      }
    })
  },
  //人员证书--echarts
  getOccupaEcharts(obj,callback){
    $.ajax({
      type: 'get',
      url: url+'certificate/informationanalysis',
      async: true,
      data: obj,
      success: function (data) {
        callback && callback(data)
      }
    })
  }
}
