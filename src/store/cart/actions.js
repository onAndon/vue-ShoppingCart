import * as type from './type.js'
const actions ={
	createGoodsToCart : ({commit},goods)=>{
        commit(type.CREATE_GOODS_TO_CART,goods)
        commit(type.UPDATE_CART)
    },
    deleteGoodsFromCart:({commit},goods)=>{
        commit(type.DELETE_GOODS_FROM_CART,goods)
        commit(type.UPDATE_CART)
    },
    addGoodsFromCart:({commit},goods)=>{
        commit(type.ADD_GOODS_FROM_CART,goods)
        commit(type.UPDATE_CART)
    },
    reduceGoodsFromCart:({commit},goods)=>{
        commit(type.REDUCE_GOODS_FROM_CART,goods)
        commit(type.UPDATE_CART)
    },
    modefyGoodsNumFromCart:({commit},data)=>{
        commit(type.MODIFY_GOODS_NUM_FROM_CART,data)
        commit(type.UPDATE_CART)
    },
    updateCart:({commit})=>{
        commit(type.UPDATE_CART)
    },

    checkedGoodsInCart:({commit},goods)=>{
    	
    	commit(type.CHECKED_GOODS_IN_CART,goods)
    },
    checkedAllGoodsFromCart:({commit},goodsArr)=>{
    	
    	commit(type.CHECKED_ALL_GOODS_FROM_CART,goodsArr)
    }
}

export default actions