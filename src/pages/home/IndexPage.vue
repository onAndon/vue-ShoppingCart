<template>
     <app-content>
	     <div class="goods-list">
		    <div class="goods-item" v-for="(item, index) in goodList" :key="index">
		       <img :src="item.imgPath">
		      <div class="goods-info">
		        <p class="goods-title">{{item.title}}</p>
		        <p class="goods-money">￥{{item.money}}</p>
		      </div>
		      <div class="add-cart" @click="addCart(item)">加入购物车</div>
		    </div>
		  </div>
     </app-content>
     
     
</template>
<script>
import goodsData from '../../moca/moca.js'
export default{
	data(){
		return{
			goodList :[]
		}
	},
	created(){
		
		this.goodList = goodsData
		
	},
	methods:{
		addCart(goods){
		
			let hasGoods = this.$store.getters['cart/hasGoods'](goods)
			if(!hasGoods){
				this.$store.dispatch('cart/createGoodsToCart',goods)
			}else{
				this.$store.dispatch('cart/addGoodsFromCart',goods)
			}
		}
	}
}
</script>