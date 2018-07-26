 import Vue from 'vue'
 const state ={
 	//app中间的标题
 	title :'购物车'
 }
const getters ={
	
}
const mutations ={
	//修改app中间的标题
	modifyTitle(state,val){
		state.title =val;
	}
}
const actions ={
	//执行修改app中间的标题
	handleModifyTitle(context,val){
		context.commit('modifyTitle',val)
	}

}

export default{
	namespaced:true,
	state,
	actions,
	getters,
	mutations
}
