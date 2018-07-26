const state ={
	cart : localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')) :{}
}

export default state