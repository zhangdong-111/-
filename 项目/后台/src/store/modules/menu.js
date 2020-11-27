//引入封装好的接口
import {getMenuList} from '../../util/axios'

//state
const state = {
    menuList:[]
}

//getters
const getters = {
    // 封装了一个state中的菜单列表
    getMenuList(state){
        return state.menuList
    }
}

//mutations
const mutations = {
    REQ_MENULIST(state,payload){
        state.menuList = payload
    }
}

//actions 
const actions = {
    getMenuListAction({commit}){
        getMenuList({
            istree:true
        }) 
        .then(res=>{
            console.log(res,'响应')
            if(res.data.code==200){
                // 提交mutation及携带的参数
                commit("REQ_MENULIST",res.data.list)
            }
        })
        .catch(err=>{
            console.log(err,'错误响应')
        })
    }
}


//默认导出所有的内容
export default {
    state,
    getters,
    mutations,
    actions, 
    //命名空间
    namespaced:true
}