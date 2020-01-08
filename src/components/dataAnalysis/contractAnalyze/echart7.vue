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
                    OWNER:[],      
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
                this.init()
                this.flag = false
            },
            deep:true
        },
    },
    data () {
        return {
            myChart1: null,
            flag:false,
            selects:{
                '业主方':true,
                '专业分包方':false,
                '劳务分包方':false,
                '租赁供应商':false,
                '采购供货商':false,
                '其他合同供应商':false,
            },
            legend:['业主方','专业分包方', '劳务分包方','租赁供应商','采购供货商','其他合同供应商'],
            paramsName:'业主方'
        }
    },
    created () {

    },
    mounted () {
        this.init()
        window.addEventListener('resize', () => {
            this.myChart1.resize()
        })    
    },
    methods: {
        init () {
            let that = this
            const myChart =  this.myChart1 = this.$echarts.init(document.getElementById(this.id));
            this.myChart1.off("legendselectchanged");
            for(var key in this.selects) {
                this.selects[key] = false
            }
            this.selects[this.data.flag] = true
            this.myChart1.setOption({
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
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis:  {
                    type: 'value',
                    axisLabel:{color:'#fff'},   // x轴字体颜色
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
                        name: '业主方',
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
                        data:this.data.OWNER
                    },
                    {
                        name: '专业分包方',
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
                        data:this.data.PROFESSIONAL
                    },
                    {
                        name: '劳务分包方',
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
                        name: '租赁供应商',
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
                        name: '采购供货商',
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
                        name: '其他合同供应商',
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
            this.myChart1.on('legendselectchanged', (params) => {
            	this.paramsName=params.name
                this.$emit('change_Legend',params.name)
            })
            // this.myChart1.on('datazoom', (params) => {
            //     var startValue = myChart.getModel().option.dataZoom[0].startValue;
    		//     this.$emit('screenEchart',startValue);
            // })
        },

    },

}
</script>

<style scoped>

</style>