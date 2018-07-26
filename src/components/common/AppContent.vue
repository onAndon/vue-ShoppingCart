<template>
<div class="content" ref="content">
    <div>
        <slot></slot>
    </div>
</div>
</template>


<script>
export default {
	data(){
		return{

		}
	},
    mounted(){
        this.scroll =new IScroll(this.$refs.content, {
			probeType:3
        });
        this.scroll.on('beforeScrollStart',()=>{
        	this.scroll.refresh()
        })
    }
}
</script>


<style scoped>
.content{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 0.44rem;
    box-sizing: border-box;
    bottom: .49rem;
	background: #f5f5f5;
    overflow: hidden;
    font-size:0.16rem;
}
</style>

