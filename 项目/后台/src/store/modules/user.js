import { getUserList, getUserCount } from '../../util/axios'

// state
const state = {
    userList: [],
    size: 2,//每页渲染的条数
    page: 1, // 页码
    total: 0  //总条数
}

// getters
const getters = {
    // 导出用户列表
    getUserList() {
        console.log(state.userList);
        return state.userList
    },
    // 导出总条数
    getUserCount() {
        return state.total
    },
    // 导出总条数
    getUserSize() {
        return state.size
    }
}

//mutations
const mutations = {
    //修改state的userList
    REQ_USERLIST(state, payload) {
        state.userList = payload;
    },
    //修改state中的total总条数
    REQ_USERCOUNT(state, payload) {
        state.total = payload;
    },
    REQ_PAGE(state, payload) {
        state.page = payload
    },
    REQ_PAGE(state,payload){
        state.page=payload
    }
}


//actions 
const actions = {
    getUserAction(context) {
        // console.log(1);
        getUserList({
            // istree:true
            size: context.state.size,
            page: context.state.page
        })
            .then(res => {
                console.log(res);
                if (res.data.code == 200) {
                    // 提交mutation及携带的参数
                    context.commit("REQ_USERLIST", res.data.list)
                }
            })

    },
    getCountAction({ commit }) {
        getUserCount()
            .then(res => {
                if (res.data.code == 200) {
                    commit('REQ_USERCOUNT', res.data.list[0].total)
                    console.log(res.data.list[0].total)
                }
            })
    },
    // 修改页数
    changePageAction(context,payload){
        // context.commit('') 
        context.commit('REQ_PAGE',payload)
        context.dispatch('getUserAction')
    }
}


//默认导出所有的内容
export default {
    state,
    getters,
    mutations,
    actions,
    //命名空间
    namespaced: true
}