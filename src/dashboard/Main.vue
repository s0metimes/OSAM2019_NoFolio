<template>
  <div id="main">
    <Header />
	<searchbar />
	<shareboard />
  </div>
</template>

<script>
	import Header from './Header.vue'
	
	import searchbar from './searchbar.vue'
	
	import shareboard from './shareboard.vue'

	export default {
		name: 'main',
		components: {
			Header, searchbar, shareboard
		}
	}
</script>

