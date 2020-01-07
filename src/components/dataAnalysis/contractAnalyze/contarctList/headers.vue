<template>
    <div class="listheader" style="display:flex;flex-direction:column;">
        <mt-header :title="text">
          <div @click="changeRoute" slot="left">
            <mt-button icon="back"></mt-button>
          </div>
        </mt-header>
        
    </div>
</template>

<script>
export default {
  name: "listheader",
  data() {
    return {
    };
  },
  props:["text"],
  methods: {
    changeRoute(){
      this.$router.back(-1);
    }    
  },
  

};
</script>
