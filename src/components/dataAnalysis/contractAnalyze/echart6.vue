<template>
    <div :id="id"></div>
</template>
<script>
export default {
    props:{
        "data":{
            type: Object,
            default: function () {
                return {         
                    PROFESSIONAL:[],
                    LABOUR:[],
                    PURCHASE:[],
                    LEASE:[],
                    OTHER:[],
                    HTZJ:[],
                    name:[] ,
                    flag:''
                }
            }
        },
        "id": {
            type:String,
            default: function () {
                return ''
            }
        }
    },
    watch: {
        data: {
            handler(val) {
            	if(val.HTZJ.length>0){
            		this.max = this.findMax(val.HTZJ);
            	}
            	if(val.PROFESSIONAL.length>0){
            		this.max = this.findMax(val.PROFESSIONAL);
            	}
            	if(val.LABOUR.length>0){
            		this.max = this.findMax(val.LABOUR);
            	}
            	if(val.PURCHASE.length>0){
            		this.max = this.findMax(val.PURCHASE);
            	}
            	if(val.LEASE.length>0){
            		this.max = this.findMax(val.LEASE);
            	}
            	if(val.OTHER.length>0){
            		this.max = this.findMax(val.OTHER);
            	}
                this.init();
                this.flag = false
            },
            deep:true
        },
    },
    data () {
        return {
            myChart: null,
            flag:false,
            selects:{
                '总包合同':true,
                '专业分包合同':false,
                '其他类合同':false,
                '劳务分包合同':false,
                '租赁合同':false,
                '采购合同':false
            },
            legend:['总包合同','专业分包合同', '劳务分包合同','租赁合同','采购合同','其他类合同'],
            paramsName:'总包合同',
            characteristic:0, //拖动标识
            dataZoom:0,
            max:0
        }
    },
    created () {

    },
    mounted () {
    	this.max = this.findMax(this.data.HTZJ);
        this.init()
        window.addEventListener('resize', () => {
            this.myChart.resize()
        })    
    },
    methods: {
        init () {
            let that = this;
            const myChart =  this.myChart = this.$echarts.init(document.getElementById(this.id));
            this.myChart.off("legendselectchanged");
            for(var key in this.selects) {
                this.selects[key] = false;
            }
            this.selects[this.data.flag] = true;
            let option={
                tooltip : {
                    trigger: 'axis',
                    position:[5,5],
                    axisPointer : {  
                        type : 'shadow'
                    }
                },
                legend: {
                    data: this.legend,
                    textStyle:{
                        color:'#333'
                    },
                    selected: this.selects
                },
                grid: {
                    left: '1%',
                    right: '3%',
                    bottom: '1%',
                    containLabel: true
                },
                xAxis:  {
                    type: 'value',
                    axisLabel:{
                        color:'#333',
                        interval:0,
                        rotate:30,
                        formatter : function (value)
                          {
                            return that.fmoneyToString(value) ;
                          }                         
                    },   // x轴字体颜色
                    axisLine:{
                        lineStyle:{color:'#333'}    // x轴坐标轴颜色
                    },
                    axisTick:{
                        lineStyle:{color:'#333'}    // x轴刻度的颜色
                    },
                    offset: 1,
                    max:this.max
                },
                yAxis: {
                    type: 'category',
                    data: this.data.name,
                    axisLabel:{
                        color:'#333',
                        interval:0,
                        rotate:30,
                        formatter : function (value)
                          {
                              let valueTxt = '';
                              if (value.length > 3) {
                                  valueTxt = value.substring(0, 7) + '...';
                              }
                              else {
                                  valueTxt = value;
                              }
                              return valueTxt ;
                          }                     
                    },   //y轴字体颜色
                    axisLine:{
                    	show:true,
                        lineStyle:{color:'#333'}    // y轴坐标轴颜色
                    },
                    axisTick:{
                        lineStyle:{color:'#333'}    // y轴刻度的颜色
                    },
                    inverse:true,
                },
                
                dataZoom: [{
                    show: false,
                    type:'inside',
                    right: '10',
                    yAxisIndex: [
                        0
                    ],
                    start: 0,
                    end: 10,
                    handleSize: '50%',
                    handleStyle: {
                        color: "#d3dee5",
                    },
                    textStyle: {
                        color: "#fff"
                    },
                    borderColor: "#90979c",
                    zoomLock: true
                }],
                series: [
                    {
                        name: '总包合同',
                        type: 'bar',
                        stack: '总量',
                        itemStyle:{
                        	barBorderRadius: [0, 5, 5, 0]
                        },
                         barMaxWidth:'50%',
                        label: {
                            normal: {
                                show: false,
                                position: 'insideRight',
                                formatter: function (res) {
                                    return that.fmoney(res.data,1)
                                }
                            }
                        },
                        data: this.data.HTZJ    
                    },
                    {
                        name: '专业分包合同',
                        type: 'bar',
                        stack: '总量',itemStyle:{
                        	barBorderRadius: [0, 5, 5, 0]
                        },
                         barMaxWidth:'50%',
                        label: {
                            normal: {
                               show: false,
                                position: 'insideRight',
                                formatter: function (res) {
                                    return that.fmoney(res.data,1)
                                }
                            }
                        },
                        data: this.data.PROFESSIONAL
                    },
                    {
                        name: '劳务分包合同',
                        type: 'bar',
                        stack: '总量',itemStyle:{
                        	barBorderRadius: [0, 5, 5, 0]
                        },
                         barMaxWidth:'50%',
                        label: {
                            normal: {
                               show: false,
                                position: 'insideRight',
                                formatter: function (res) {
                                    return that.fmoney(res.data,1)
                                }
                            }
                        },
                        data: this.data.LABOUR
                    },
                    {
                        name: '租赁合同',
                        type: 'bar',
                        stack: '总量',itemStyle:{
                        	barBorderRadius: [0, 5, 5, 0]
                        },
                         barMaxWidth:'50%',
                        label: {
                            normal: {
                                show: false,
                                position: 'insideRight',
                                formatter: function (res) {
                                    return that.fmoney(res.data,1)
                                }
                            }
                        },
                        data: this.data.LEASE
                    },
                    {
                        name: '采购合同',
                        type: 'bar',
                        stack: '总量',itemStyle:{
                        	barBorderRadius: [0, 5, 5, 0]
                        },
                         barMaxWidth:'50%',
                        label: {
                            normal: {
                                show: false,
                                position: 'insideRight',
                                formatter: function (res) {
                                    return that.fmoney(res.data,1)
                                }
                            }
                        },
                        data: this.data.PURCHASE
                    },
                    {
                        name: '其他类合同',
                        type: 'bar',
                        stack: '总量',itemStyle:{
                        	barBorderRadius: [0, 5, 5, 0]
                        },
                         barMaxWidth:'50%',
                        label: {
                            normal: {
                                show: false,
                                position: 'insideRight',
                                formatter: function (res) {
                                    return that.fmoney(res.data,1)
                                }
                            }
                        },
                        data: this.data.OTHER
                    }
                ]
            }
            this.myChart.setOption(option);
            this.myChart.on('legendselectchanged', (params) => {
            	this.paramsName = params.name;
                this.$emit('changeLegend',params.name);
            })
            this.myChart.on('click', (params) => {
                this.$emit('clickBar',params.dataIndex);
            })
//          let dom=document.getElementById(this.id);
//          dom.addEventListener('touchstart', (event) => {
//             this.characteristic = event.zrY;
//          })
//          dom.addEventListener('touchmove', (event) => {
//             let end = Math.floor((this.characteristic - event.zrY)/25);
//             console.log(end)
//             this.dataZoom = this.dataZoom + end;
//             if(this.dataZoom>=90){
//             	 this.dataZoom=90;
//             }
//             if(this.dataZoom<=0){
//             	 this.dataZoom=0;
//             }
//             option.dataZoom[0].start =  this.dataZoom;
//             option.dataZoom[0].end =  this.dataZoom + 10;
//             this.myChart.setOption(option);
//          })
//          dom.addEventListener('touchend', (event) => {
//            dom.removeEventListener('touchstart',function(){})
//            dom.removeEventListener('touchmove',function(){})
//            dom.removeEventListener('touchend',function(){})
//          })
        },
        findMax(arr){
        	let max=0;
        	for (let i = arr.length; i >= 0 ; i--) {
        		if(arr[i]> max){
        			max = arr[i]
        		}
        	}
        	return max
        },
        fmoney(s, n) {
		    n = n >= 1 && n <= 5 ? n : 1;
		    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
		    var l = s
		        .split(".")[0]
		        .split("")
		        .reverse(),
		      r = s.split(".")[1];
		    var t = "";
		    for (var i = 0; i < l.length; i++) {
		      t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? "," : "");
		    }
		    return (
		      t
		        .split("")
		        .reverse()
		        .join("") +
		      "." +
		      r
		    );
		},
		fmoneyToString(s){
			s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(1) + "";
			var l = s.split(".")[0];
			switch (l.length){
				case 5:case 6:case 7:
					l= (l/10000).toFixed(2)+'万'
					break;
				case 8:
					l= (l/10000000).toFixed(2)+'千万'
					break;
				case 9:case 10:case 11:case 12:
					l=(l/100000000).toFixed(2)+'亿'
					break;
				default: l=l
					break;
			}
			return l
		}

    },

}
</script>

<style scoped>

</style>