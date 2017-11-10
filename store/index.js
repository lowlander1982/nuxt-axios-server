import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: {
        id: null,
        name: null,
        username: null,
        email: null
      },
      billingInfo: {
        balance: {
          check: 0,
          cash: 0
        },
        registeredAccounts: {
          own: [],
          thirdParty: []
        }
      }
    },
    mutations: {
      setUser (state, _user) {
        state.user.id = _user.id
        state.user.name = _user.name
        state.user.username = _user.username
        state.user.email = _user.email
      },
      setCheckBalance (state, _balance) {
        state.billingInfo.balance.check = _balance
      },
      registerOwnAccount (state, _account) {
        state.billingInfo.registeredAccounts.own.push(_account)
      },
      unRegisterOwnAccount (state, _account) {
        state.registeredAccounts.own = state.registeredAccounts.own.filter(account => account !== _account)
      }
    },
    actions: {
      nuxtServerInit ({ dispatch }) {
        // This is happening just on the server side the first time. Useful to load common data
        return dispatch('fetchUser')
      },
      fetchUser ({ commit }) {
        return this.$axios.$get('https://jsonplaceholder.typicode.com/users/1')
          .then((response) => commit('setUser', response))
      },
      fetchBalance ({ commit }) {
        commit('setCheckBalance', Math.floor(Math.random() * 99999999))
      }
    }
  })
}

export default createStore
