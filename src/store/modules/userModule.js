import json from '@/assets/Front_ForTable.json'


const userModule = {

  state: () => {
    users: [];
  },
  getters: {
    allUsers(state) {
      return state.users
    },
    sortUsers: state => sortType => {
      let items = state.users.sort(function (a,b) {
        if (sortType === 'username') {
          if (a.username > b.username) return 1
          if (a.username < b.username) return -1
          return 0
        } else {
          if (a.pay_status > b.pay_status) return 1
          if (a.pay_status < b.pay_status) return -1
          return 0
        }
      })
      return items
    },
    searchingUsers: state => searchItem => {
        return state.users.filter(elem => {
          if (elem.username.includes(searchItem) ||
              elem.first_name.includes(searchItem) ||
              elem.last_name.includes(searchItem) ||
              elem.email.includes(searchItem)) {
            return elem
          }
        })
      }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    newUser(state, user) {
      state.users.push(user)
    }
  },
  actions: {
    setFirstData(ctx) {
      ctx.commit('setUsers', json)
    },
    addNewItem(ctx, item) {
      ctx.commit('newUser', item)
    }
  }
}

export default userModule;