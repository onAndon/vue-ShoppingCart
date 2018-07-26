import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import appTitle from './appTitle.js'
import cart from './cart'
const store = new Vuex.Store({
	modules:{
		appTitle,
		cart
	}

})



export default store;