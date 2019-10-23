<template>
<div>
	<div class="searchbar">
		<div class="title">언어선택</div>
		<el-select v-model="selected_languages" multiple placeholder="Select" style="width: auto; margin-left: 8px;">
			<el-option
				v-for="item in options"
				:key="item.value"
				:label="item.label"
				:value="item.value">
			</el-option>
		</el-select>
		<span class="seperator">|</span>
		<div class="title">키워드로 검색(검색)</div>
		<div class="keyword">
			
		</div>
	</div>
</div>
</template>

<script>
	export default {
		name: 'searchbar',
		data() {
			return {
				options: [{
					value: 'C#',
					label: 'C#'
				}, {
					value: 'JS',
					label: 'JS'
				}, {
					value: 'Python',
					label: 'Python'
				}, {
					value: 'JAVA',
					label: 'JAVA'
				}, {
					value: 'C++',
					label: 'C++'
				}, {
					value: 'C#',
					label: 'C#'
				}, {
					value: 'CSS',
					label: 'CSS'
				}, {
					value: 'HTML',
					label: 'HTML'
				}, {
					value: 'Node.js',
					label: 'Node.js'
				}, {
					value: 'Ruby',
					label: 'Ruby'
				}],
				selected_languages: []
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.searchbar{
		display:flex;
		height:64px;
		width:100%;
		padding-left:24px;
		border-top: 1px solid #aaa;
		border-bottom: 1px solid #aaa;
		box-shadow:0 4px 2px -2px rgba(0,0,0,0.12);
		align-items:center;
	}
	.title{
		font-size: 16px;
		font-weight: bold;
	}
	.selected-languages{
		margin: 0 8px;
	}
	.seperator{
		margin: 0 8px;
		color: #aaa;
	}
</style>
