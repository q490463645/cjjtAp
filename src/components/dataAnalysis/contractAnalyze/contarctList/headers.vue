<template>
  <div class="listheader">
    <a class="icon iconfont" @click="changeRoute">&#xe618;</a>
    <h3>{{text}}</h3>
    <b></b>
  </div>
</template>

<script>
export default {
  name: "listheader",
  data() {
    return {};
  },
  props: ["text"],
  methods: {
    changeRoute() {
      this.$router.back(-1);
    }
  }
};
</script>
