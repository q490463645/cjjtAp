<template>
  <div class="my">
    <headered ></headered>
    	我的
    <menus :selected="'我的'"></menus>
  </div>
</template>

<script>
	import headered from "../public/headered";
	import menus from "../public/menus";
export default {
	name:"my",
	components: {
    headered,menus
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
