<template>
	<div class="right">
		<button class="btn mainbtn el-button">
			로그인
		</button>
		<Properties />
	</div>
</template>

<script>
	import Properties from "./right/Properties.vue";
	export default {
		name: 'Right',
		components: {
			Properties
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.right {
		flex: 1 auto;
		display: flex;
		flex-flow: row-reverse;
		margin-right: 32px;
		align-items: center;
	}

	.btn {
		margin-left: 8px;
	}

	.profilebtn {
		background: skyblue;
		color: white;
	}
</style>
