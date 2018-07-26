<template>
    <header class="noSearchHeader">
    	  <slot name='leftBtn' class='leftBtn'></slot>
          <h1>{{title}}</h1>
          <slot name='rightBtn' class='rightBtn'></slot>
    </header>

</template>

<script>
import Vuex from 'vuex';
export default{
	data(){
		return{
			
		}
	},
	
	computed:{
		...Vuex.mapState({
			title:state=>state.appTitle.title
		})
	},
	methods:{
		handleRightBtn(){
			this.$router.push({
				name:'redpacket'
				
			})
		}
	},
	mounted(){
		
	}
}
</script>
<style scoped>
.noSearchHeader{
    line-height: 0.44rem;
    height: 0.44rem;
    width:100%;
 	top: 0;
 	left: 0;
  	position: absolute;
  	text-align: center;
  	color: #fff;
  	background: #F87D88;
  	z-index: 10;
}
button{
	color: inherit;
	
}
h1{
	display: inline-block;
	font-size: 0.16rem;
	
}
.leftBtn,.rightBtn{
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	
}
.leftBtn{
	left: 0.16rem;
}
.rightBtn{
	right: 0.23rem;
	font-size: 0.15rem;
}

</style>
