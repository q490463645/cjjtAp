<template>
  <div class="header">
    <headered ></headered>
    <div class="main">
    	
    	<bmap></bmap>
    	
    </div>
    <menus :selected="'首页'"></menus>
  </div>
</template>

<script>
	import headered from "../public/headered";
	import menus from "../public/menus";
	import bmap from "./map";
export default {
	name:"home",
	components: {
    headered,menus,bmap
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style>

	
</style>
