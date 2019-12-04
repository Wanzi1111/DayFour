import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newdata:[],
    val:""
  },
  mutations: {
    adddata(state,data){
      state.newdata=data
      console.log(data)
    },
    search(state,data){
      state.val=data
    }
  },
  actions: {
    getdata({commit}){
    axios.get("/getdata").then(res=>{
       commit("adddata",res.data)
      })
    }
  },
  modules: {
  },
  getters:{
    getlist(state){
      return state.newdata=state.newdata.filter(item=>item.title.includes(state.val))
    }

  }
})
