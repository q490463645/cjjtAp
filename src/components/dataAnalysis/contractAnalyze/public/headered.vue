<template>
  <div class="header">
  	<a class="icon iconfont" @click="back">&#xe618;</a>
  	<h3>合同信息</h3>
  </div>
</template>

<script>
export default {
	name:"headered",
  data () {
    return {
      msg: ''
    }
  },
  methods: {
  	back(){
  		this.$router.push('/dataAnalysis')
  	}
	}
}
</script>
