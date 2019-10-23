
<template>
    <div class="shareboard" id="shareboard-top">
		<div class="box-list">
			<div class="box" v-for="(item,i) in items" v-bind:key="item.id">
				<div class="name"><p>{{item.name}}</p></div>
				<div class="career">{{item.carrer}}</div>
				<div class="about-me">{{item.about}}</div>
				<div class="project-image" id="images">
					<img height="100vh" :src="getImageUrl(i)"/>
				</div>
				<div class="bottom">
					<div class="language-skill">
						<img src="../assets/lang_icons/python_lang.svg" class="lang_icon" alt="python">
						<img src="../assets/lang_icons/cpp_lang.svg" class="lang_icon" alt="cpp">
						<img src="../assets/lang_icons/javascript_lang.svg" class="lang_icon" alt="js">
					</div>
					<img class="profile-image" :src="getImageUrl2(i)"/>
				 </div>
        	</div>
		</div>
		<button class="topbtn topbtn-image" @click="scrollShareboardTop">
			<img src="../assets/arrow_upward.svg">
		</button>
    </div>
</template>

<script>
    var items = [];
    var i;
    for(i = 0; i < 10; i++) {
        items.push({
            name: "범석" + i,
            carrer: i + "년",
            about: "니혼진"
        });
    }

    export default {
        name: 'shareboard',
        data: function() {
            return {
                items: items
            }
        },
        methods :{
            getImageUrl(i) {
                var filenum = i%10;
                var images = require.context('../assets/', true, /\.jpg$/)
                return images('./photo_sample/project_' + filenum + ".jpg");

                //return require('../assets/' + name + ".jpg");
            },
			getImageUrl2(i) {
                var filenum = i%6;
                var images = require.context('../assets/', true, /\.jpg$/)
                return images('./photo_sample/people_' + filenum + ".jpg");

                //return require('../assets/' + name + ".jpg");
            },			
            scrollShareboardTop:function() {

                var shareboard = document.getElementById("shareboard-top");

                var scrollTopValue = shareboard.scrollTop;

                var shareboardAnimation = setInterval(function() {
                    if(shareboard.scrollTop <= 0) {
                        shareboard.scrollTop = 0;
                        clearInterval(shareboardAnimation);
                        return;
                    }
                    else {
                        shareboard.scrollTop -= (scrollTopValue / 10);
                    }
                }, 25);

                this.data();

            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    p{
        padding: 0;
        margin : 0;
    }
    .shareboard{
		display:flex;
		justify-content:center;
		width:100%;
        height:calc(100vh - 128px);
        background-color:rgba(52,152,219,0.2);
        padding: 8px 120px;
        overflow: auto;
    }
	.box-list{
		display:flex;
        width:100%;
        flex-flow:row wrap;
        justify-content:center;
	}
    .box{
		flex:none;
		flex-basis:24vw;
        display:flex;
        flex-flow:column;
        position: relative;
        height: 36vw;
        width: 24vw;

        min-height: 360px;
        min-width: 240px;
        max-height: 480px;
        max-width: 360px;
        margin:12px;
        background-color:white;
        box-shadow:0 2px 12px rgba(0,0,0,0.12);
        padding:16px;
    }
    .name {
        padding:0 16px;
        flex:1;
        font-size: 16px;
        font-weight:bold;
    }
    .career{
        padding:0 16px;
        flex:1;
        border-top:1px solid #eee;
        border-bottom:1px solid #eee;
    }
    .about-me{
        padding:0 16px;
        flex:1;
        height:16px;
        border-bottom:1px solid #eee;
    }
    .project-image{
        flex:4;
        display:flex;
        justify-content:center;
		
    }
    .bottom{
        flex:2;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }
    .language-skill{
        display:flex;
        align-items:flex-end;
        height:6vw;
        min-height:70px
    }
    .lang_icon{
        height:3vw;
        width:3vw;
		min-height:24px;
		min-width:24px;
		
    }
    .profile-image{
        width:8vh;
        height:8vh;
        border-radius:50%;
        border:8px solid rgb(52,152,219);
        background-color:rgb(52,152,219);
    }

    @media (max-width: 640px) {
        .box{
            min-height: 360px;
            min-width: 240px;
        }

    }
	
    .topbtn{
        border-radius:50%;
        border:8px solid rgb(52,152,219);
        background-color:rgb(52,152,219);
        width:8vh;
        height:8vh;
        position:fixed;
        bottom:24px;
        right:32px;
    }
    .topbtn-image{
        min-width:64px;
        min-height:64px;
    }

</style>