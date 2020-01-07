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
            paramsName:'总包合同'
        }
    },
    created () {

    },
    mounted () {
        this.init()
        window.addEventListener('resize', () => {
            this.myChart.resize()
        })    
    },
    methods: {
        init () {
            let that = this
            const myChart =  this.myChart = this.$echarts.init(document.getElementById(this.id));
            this.myChart.off("legendselectchanged");
            for(var key in this.selects) {
                this.selects[key] = false
            }
            this.selects[this.data.flag] = true
            this.myChart.setOption({
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {  
                        type : 'shadow'
                    }
                },
                legend: {
                    data: this.legend,
                    textStyle:{
                        color:'#fff'
                    },
                    selected: this.selects
                },
                grid: {
                    left: '3%',
                    right: '10%',
                    bottom: '10%',
                    containLabel: true
                },
                xAxis:  {
                    type: 'value',
                    axisLabel:{
                        color:'#fff',
                        formatter : function (value)
                          {
                            return that.utils.fmoney(value,1) ;
                          }                         
                    },   // x轴字体颜色
                    axisLine:{
                        lineStyle:{color:'#fff'}    // x轴坐标轴颜色
                    },
                    axisTick:{
                        lineStyle:{color:'#fff'}    // x轴刻度的颜色
                    },
                    offset: 20
                },
                yAxis: {
                    type: 'category',
                    data: this.data.name,
                    axisLabel:{
                        color:'#fff',
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
                        lineStyle:{color:'#fff'}    // y轴坐标轴颜色
                    },
                    axisTick:{
                        lineStyle:{color:'#fff'}    // y轴刻度的颜色
                    },
                    inverse:true,
                },
                
                dataZoom: [{
                    show: true,
                    right: '1%',
                    yAxisIndex: [
                        0
                    ],
                    start: 0,
                    end: 18,
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
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight',
                                formatter: function (res) {
                                    return that.utils.fmoney(res.data,1)
                                }
                            }
                        },
                        data: this.data.HTZJ    
                    },
                    {
                        name: '专业分包合同',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight',
                                formatter: function (res) {
                                    return that.utils.fmoney(res.data,1)
                                }
                            }
                        },
                        data: this.data.PROFESSIONAL
                    },
                    {
                        name: '劳务分包合同',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight',
                                formatter: function (res) {
                                    return that.utils.fmoney(res.data,1)
                                }
                            }
                        },
                        data: this.data.LABOUR
                    },
                    {
                        name: '租赁合同',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight',
                                formatter: function (res) {
                                    return that.utils.fmoney(res.data,1)
                                }
                            }
                        },
                        data: this.data.LEASE
                    },
                    {
                        name: '采购合同',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight',
                                formatter: function (res) {
                                    return that.utils.fmoney(res.data,1)
                                }
                            }
                        },
                        data: this.data.PURCHASE
                    },
                    {
                        name: '其他类合同',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight',
                                formatter: function (res) {
                                    return that.utils.fmoney(res.data,1)
                                }
                            }
                        },
                        data: this.data.OTHER
                    }
                ]
            })
            this.myChart.on('legendselectchanged', (params) => {
            	console.log(params)
            	this.paramsName=params.name
                this.$emit('changeLegend',params.name)
            })
            // this.myChart.on('datazoom', (params) => {
            //     var startValue = myChart.getModel().option.dataZoom[0].startValue;
    		//     this.$emit('screenEchart',startValue);
            // })
        },

    },

}
</script>

<style scoped>

</style>