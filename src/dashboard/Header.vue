<template>
	<div class="header">
		<img class="logo" src="../assets/nf_logo_beta.svg">
		<div class = "right">
			<button type="button"
				onclick="window.open('http://osam2019.run.goorm.io/editor')"
				target="_blank" class="right-btn right-btn-editor">
				에디터
			</button>
			<span class="seperator">|</span>
			<button type="button"
				onclick="location.href='http://osam2019.run.goorm.io/dashboard'"
				target="_blank"
				class="right-btn right-btn-shareboard">
				대쉬보드
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Header'
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.header{
		display:flex;
		position:relative;
		justify-content:space-between;
		align-items:center;
	}
	
	.logo {
		margin: 8px 16px;
		height: 48px;
	}
	
	.right{
		display:flex;
		margin-right:32px;
		align-items:center;
	}
	.right-btn{
		border:0;
		outline:0;
		background-color:white;
		font-size:16px;
		color:#aaa;
		/*오븐앱 컬러*/
		/*color:rgb(52, 152, 219);*/		
	}
	.right-btn:hover{
		color:skyblue;
	}
	.seperator{
		margin: 0 8px;
		color: #aaa;
	}
	
	
	
</style>
