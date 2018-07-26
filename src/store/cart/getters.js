
const getters ={
  //判断商品是否存在购物车
  hasGoods :state=>(goods)=>{
    return `p${goods.id}` in state.cart
  },
  currentSelected(state){
  	let cart = state.cart;
	  	if(cart){
	  		var arr = [];
	  		for(var i in cart){
	  			if(cart[i].selected==true){
	  				arr.push(cart[i])
	  			}
	  		}
	  	}

	  	return arr
  },
  AllcurrentSelectedMoney(state){
  	let cart = state.cart;
  	
	  	if(cart){
	  		var countmoney =0;
	  		for(var i in cart){
	  			if(cart[i].selected==true){
	  				
	  				 countmoney += cart[i].num * parseFloat(cart[i].money)
	  			}
	  		}
	  		countmoney = (parseInt(countmoney*100)/100).toString()
	  		
	  	}
			 return countmoney
  },
  //判断是否显示全选
  isShowAllChecked:state=>(cart,currentSelected,isAllChecked)=>{
  	if(currentSelected.length ==0){
  		  if(currentSelected.length==cart.length){
  		  	  return !isAllChecked
  		  }else{
  		  	return true
  		  }
  	}else if(currentSelected.length != cart.length){
  		  return true
  	
  	}else{
			return false  		
  	}
		
    
  }
}

export default getters