import * as type from './type.js';
import Vue from 'vue'

const mutations ={
    //添加购物车
	[type.CREATE_GOODS_TO_CART]:(state,goods)=>{
		if(!goods.num){
			goods.num = 1;
		}
		goods.selected = true;
	
        Vue.set(state.cart,`p${goods.id}`,goods)
        
    },
    //删除购物车商品
    [type.DELETE_GOODS_FROM_CART]:(state,goodsArr)=>{
    	goodsArr.map(item=>{
    		Vue.delete(state.cart,`p${item.id}`)
    	})
       // Vue.delete(state.cart,`p${goods.id}`)
    },
    //增加购物车的数量
    [type.ADD_GOODS_FROM_CART]:(state,goods)=>{
        let item =state.cart[`p${goods.id}`];
        
        let num  = item.num;
        state.cart[`p${goods.id}`] = Object.assign({},item,{num:num+1})
        
    },
    //减少购物车的数量
    [type.REDUCE_GOODS_FROM_CART]:(state,goods)=>{
        let item = state.cart[`p${goods.id}`]
        let num = item.num;
        if(num<=1) return ;
        state.cart[`p${goods.id}`] =Object.assign({},item,{num:num-1})
    },
    //修改购物车的数量
    [type.MODIFY_GOODS_NUM_FROM_CART]:(state,data)=>{
        let goods =data.goods;
        let num = data.num;
        let item = state.cart[`p${goods.id}`]
        state.cart[`p${goods.id}`] = Object.assign({},item,{num:num})
    },
    //更新购物车
    [type.UPDATE_CART]:(state)=>{
        localStorage.setItem('cart',JSON.stringify(state.cart))
    },
    //是否选中切换
    [type.CHECKED_GOODS_IN_CART]:(state,goods)=>{
    	
    	 let item = state.cart[`p${goods.id}`];
    	 item.selected = !item.selected ;
   		 state.cart[`p${goods.id}`] =Object.assign({},item,{selected:item.selected})	
    },
    //如果全选 中则 反选，如果是非全选则 全选
    [type.CHECKED_ALL_GOODS_FROM_CART]:(state,goodsArr)=>{
     	let item = state.cart;
    	
    	if(Object.keys(item).length !=goodsArr.length){
    		for(var i in item){
    			item[i]['selected'] = true
    		}
    	}else{
    		for(var i in item){
    			item[i]['selected'] = false
    		}
    	}
    	
    }
}

export default mutations