<template>
     <div class="wrap">
     	<NoSearchHeader>
     	  <!--如果你需要的设置左边的按钮-->
    	   <button slot="leftBtn" class="leftBtn"></button>
           <!--中间由全局调控所以没有-->
           <!--如果你需要的设置左边的按钮-->
           <button slot="rightBtn" class="rightBtn" @click='handleControl' ref='control'>管理</button>
     		
     	</NoSearchHeader> 
     	<app-content>
     	
        
 		<transition name='fade'>
 			<div class='clearAllWrap paddingLeftRight30' v-if="isShowControl">
 			<div class="iconWrap" >
 				<i class="_icon _icon_delete"></i>
 				<span>清理</span>
 			</div>
 			<button class="clearBtn" @click='deleteGoods()'>删除</button>
 		</div>
 		</transition>
 		<div class="cartContent">
 			<transition name='fade'>
 				<div class="noGoodWrap" v-if="selectArray.length==0">
 					<p>你还没有添加任何商品哦~~</p>
 				</div>	
 			</transition>
 			<ul class="listWrap">
	 			<li class="goodsWrap" v-for="(item,key) in cartGoodsList" :key="key">
	 				<div class="isCheckedImgWrap">
	 				<i class="_icon" :class="item.selected?'_icon_tick':'_icon_circle'" ref='iconSign'  @click='isChecked(item)'></i>
	 				
	 				</div>
	 				
	 				
	 				<div class="box">
	 					<img :src= 'item.imgPath' class="goodImg"/>
	 					<dl class="listInfo">
	 						<dt class="infoName">{{item.title}}</dt>
	 						<dd class="infoDetail">{{item.info}}</dd>
	 						<dd class="infoPrice">¥{{item.money}}</dd>
	 					</dl>
	 					<div class="goodNum">
		 					<i class="_icon _icon_minus" @click="reduceGoods(item)"></i>
		 					<span class="num">{{item.num}}</span>
		 				    <i class="_icon _icon_add "  @click="addGoods(item)"></i>
		 				</div>
	 				</div>
	 				
	 			</li>
	 			
	 		</ul>
	 			
 		</div>
     	<div class="goodRecommend">
     		<h2 class="recommendTitle">商品推荐</h2>
     		<ul class="recommendList">
     			<li class="recommendGoodInfo">
     				<a href="##">
     					<img src= '../../../public/img/mockImg/cart/good.jpg' class="recommendImg"/>
     					<h3 class="recommendGoodName">精选双人套餐</h3>
     					<span class="recommendGoodPrice"><strong>¥29.9</strong><em>29.9</em></span>
     				</a>
     			</li>
     			<li class="recommendGoodInfo">
     				<a href="##">
     					<img src= '../../../public/img/mockImg/cart/good.jpg' class="recommendImg"/>
     					<h3 class="recommendGoodName">精选双人套餐</h3>
     					<span class="recommendGoodPrice"><strong>¥29.9</strong><em>29.9</em></span>
     				</a>
     			</li>
     			<li class="recommendGoodInfo">
     				<a href="##">
     					<img src= '../../../public/img/mockImg/cart/good.jpg' class="recommendImg"/>
     					<h3 class="recommendGoodName">精选双人套餐</h3>
     					<span class="recommendGoodPrice"><strong>¥29.9</strong><em>29.9</em></span>
     				</a>
     			</li>
     			<li class="recommendGoodInfo">
     				<a href="##">
     					<img src= '../../../public/img/mockImg/cart/good.jpg' class="recommendImg"/>
     					<h3 class="recommendGoodName">精选双人套餐</h3>
     					<span class="recommendGoodPrice"><strong>¥29.9</strong><em>29.9</em></span>
     				</a>
     			</li>
     			<li class="recommendGoodInfo">
     				<a href="##">
     					<img src= '../../../public/img/mockImg/cart/good.jpg' class="recommendImg"/>
     					<h3 class="recommendGoodName">精选双人套餐</h3>
     					<span class="recommendGoodPrice"><strong>¥29.9</strong><em>29.9</em></span>
     				</a>
     			</li>
     			<li class="recommendGoodInfo">
     				<a href="##">
     					<img src= '../../../public/img/mockImg/cart/good.jpg' class="recommendImg"/>
     					<h3 class="recommendGoodName">精选双人套餐</h3>
     					<span class="recommendGoodPrice"><strong>¥29.9</strong><em>29.9</em></span>
     				</a>
     			</li>
     		</ul>
     	</div>
     	
     
     </app-content>
    	 <div class="paymentWrap">
     		<label>
     		<!--	<input type="checkbox" id="all" />-->
     			<i class="_icon " :class="isAllChecked?'_icon_tick':'_icon_circle'" @click.stop="allChecked()" id="#all"></i>
     			<span class="allText">全选</span>
     		</label>
     		
     		<label>合计：<span>¥{{AllcurrentSelectedMoney}}</span></label>
     		<div class="payBtn">去结算<span class="payNum">({{currentSelected.length}})</span></div>
     	</div>
     <router-view></router-view>
     </div>
</template>
<script>
import Vuex from 'vuex';

export default{
	data(){
		return{
			//是否显示管理
			isShowControl:false,
			//选中的商品
			selectArray:[],
			//是否全选
			isAllChecked:true,
			//标记的商品
			checkedArray:[]
		}
	},
	
	computed:{
		//获得全局购物车对象
		...Vuex.mapState({
			cartGoodsList:state=>state.cart.cart
		}),
		
		...Vuex.mapGetters({
			//当前选择的商品(对象)
			currentSelected:'cart/currentSelected',
			//当前选择的商品的总价
			AllcurrentSelectedMoney:'cart/AllcurrentSelectedMoney'
		})
	},
	watch:{
		//监听购物车，将购物车的数组给到选择的数组
		cartGoodsList(newVal){
			this.selectArray = Object.keys(newVal);
		
		},
		selectArray(newVal){
			let  cartGoodsList= this.cartGoodsList;
			return Object.keys(cartGoodsList)
		},
		
		checkedArray(newVal){
			
			if(Object.keys(this.cartGoodsList).length!=newVal.length){
					
					this.isAllChecked =false
			}else{
				this.isAllChecked =true
			}
			
			let checkedArray = this.currentSelected.map(item=>item.id)
			
			return checkedArray
		},
		'$route'(){
			if(this.selectArray.length==0){
				this.isAllChecked =true
			}
		}
		
	},
	methods:{
		handleControl(){
		
			this.isShowControl =!this.isShowControl;
			if(this.isShowControl){
				
				this.$refs.control.innerText = '完成'
			}else{
				this.$refs.control.innerText = '管理'
			}
		
		},
		//增加商品
		addGoods(goods){
			
			this.$store.dispatch('cart/addGoodsFromCart',goods)
			
		},
		//减少商品
		reduceGoods(goods){
		    this.$store.dispatch('cart/reduceGoodsFromCart',goods)
		
		},
		//切换选中状态
		isChecked(goods){
		
			this.$store.dispatch('cart/checkedGoodsInCart',goods)
			
			if(this.selectArray.length!=this.currentSelected.length){
				this.isAllChecked=false;
			}else{
				this.isAllChecked=!this.isAllChecked;
			}
		},
		//删除选中商品
		deleteGoods(){
		
			let currentSelected = this.currentSelected;
			
			currentSelected&&this.$store.dispatch('cart/deleteGoodsFromCart',currentSelected)
	
		    
		},
		//全选
		allChecked(){
		
			if(this.cartGoodsList){
				
				let currentSelected = this.currentSelected;
			
				let selectArray =this.selectArray;
				
				this.$store.dispatch('cart/checkedAllGoodsFromCart',currentSelected)
				
				this.isAllChecked = this.$store.getters['cart/isShowAllChecked'](selectArray,currentSelected,this.isAllChecked )
			
		   		
			}
			
		}
	},
	mounted(){
		if(this.cartGoodsList){
				this.selectArray = Object.keys(this.cartGoodsList);
				this.checkedArray = this.currentSelected.map(item=>item.id)
			
		}
	  
	}
}
</script>
<style scoped>

.clearAllWrap{
	height: 0.48rem;
	background: #FFFFFF;
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.1rem;
}
.paddingLeftRight30{
	padding: 0 0.15rem 0 0.15rem;
	
}
._icon_delete{
	align-self: center;
}
.iconWrap span{
	margin-left: 0.1rem;
	line-height: 0.48rem;

}
.iconWrap{
	display: flex;
}
.clearBtn{
	width: 0.72rem;
	height: 0.26rem;
	line-height:0.26rem ;
	border:1px solid #fd7f8e;
	border-radius: 0.02rem;
	text-align: center;
	align-self: center;
	font-size: 0.14rem;
	color: #fe808f;
	
}
._icon_tick,._icon_minus,._icon_add,._icon_circle{
	width: 0.22rem;
	height: 0.22rem;
	
}
._icon_tick,._icon_circle{
	margin-right: 0.16rem;
	align-self: center;

}
.listWrap{
	margin-bottom: 0.1rem ;
}
.listWrap,.goodRecommend{
	background: #fff;
	
}
.goodsWrap{
	padding: 0.19rem 0 0 0.15rem;
	display: flex;
	position:relative;
	
}
.isCheckedImgWrap,.goodNum{
	margin-top: -.13rem;
}
.listInfo{
	height: 0.59rem;
	width: 1.31rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin-left: 0.15rem;
	
}
.infoName{
	font-size: 0.14rem;
	line-height: 0.14rem;
	
}
.infoDetail{
	line-height: 0.35rem;
	color: #999999;
	font-size: 0.12rem;
	
}
.goodImg{
	width: 0.6rem;
	height: 0.6rem;
}
.box{
	display: flex;
	flex-grow: 1;

	border-bottom:1px solid #ccc;
	position: relative;
	box-sizing: border-box;
	padding-bottom: 0.15rem;
}
.listWrap .goodsWrap:last-child .box{
	
	border-bottom:none;
}
.infoPrice{
	font-size: 0.09rem;
	line-height: 0.09rem;
	color: #fe7d8c;
}
.goodNum{
	width: 0.74rem;
	height: 0.22rem;
	position: absolute;
	right: 0.15rem;
	top: 50%;
	transform: translateY(-50%);
	
}
.num{
	display: inline-block;
	width: 0.3rem;
	text-align: center;
	vertical-align: top;
	
}
.recommendTitle{
	font-size: 0.15rem;
	line-height: 0.15rem;
}
.goodRecommend{
	padding: 0.15rem 0.15rem 0 0.15rem;
	
}
.recommendImg{
	width: 0.6rem;
	height: 0.6rem;
	margin: 0.12rem 0 0.09rem 0;
	display: inline-block;
}
.recommendGoodInfo{
	text-align: center;
	flex-basis: 0.9rem;
}
.recommendGoodName{
	font-size: 0.14rem;
	line-height: 0.14rem;
	
}
.recommendGoodPrice{
	line-height: 0.18rem;
	height: 0.18rem;
	
	color: #666666;
	display: flex;
	padding: 0 0.11rem;
	justify-content: space-between;
}
.recommendGoodPrice strong{
	font-size: 0.1rem;
}
.recommendGoodPrice em{
	font-size: 0.08rem;
	color: #999999;
}
.recommendList{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	
}
.paymentWrap{
	height: 0.44rem;
	background: #fff;
	padding-left: 0.15rem;
	display: flex;
	width:100%;
	box-sizing: border-box;
	justify-content: space-between;
	position: relative;
	margin-top:0.15rem;
	position: absolute;
	bottom: 0.49rem;
	left: 0;
	border-bottom: 1px solid #e5e5e5;
}
.paymentWrap ._icon_tick{
	margin-top: 0;
}
/*#all{
	position: absolute;
	width: 0.2rem;
	height: 0.2rem;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	opacity: 0;
	
}*/
label{
	line-height:0.44rem;
	vertical-align: top;
	display: flex;
	/*position: relative;*/
}
.allBg{
	align-items: center;

}
.allText{
	display: inline-block;
	line-height: 0.44rem;
	
}
.payBtn{
	width: 1.35rem;
	height: 0.44rem;
	background: #f87d88;
	color: #FFFFFF;
	font-size: 0.14rem;
	text-align: center;
	line-height: 0.44rem;
	
}
.payNum{
	display: inline-block;
	transform: translateY(-0.01rem);
}
em{
	text-decoration: line-through ;
}
.noGoodWrap{
	height: 1.8rem;
	background: #fff url(../../../public/img/mockImg/cart/noGoodBg.jpg)no-repeat;
	background-size: 0.5rem auto;
	background-position: 50% 50%;
	position: relative;
}
.noGoodWrap p{
	text-align: center;
	width: 100%;
	position: absolute;
	bottom: 0.3rem;
	left: 0;
}

.isCheckedImgWrap{
	position: relative;
	display: flex;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>