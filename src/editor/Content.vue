<template>
	<div class="content">
		<Main />
		<Sub v-show="visible" />
		<SubHidden v-show="!visible" />
	</div>
</template>

<script>
	import Main from "./content/Main.vue";
	import Sub from "./content/Sub.vue";
	import SubHidden from "./content/SubHidden.vue";
	
	export default {
		name: 'Content',
		components: {
			Main, Sub, SubHidden
		},
		computed: {
			visible: function() {
				return this.$store.state.Menubook.visible;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.content {
		display: flex;
		position: relative;
		width: 100%;
		height: calc(100vh - 64px);
		background: #ddd;
	}
</style>
