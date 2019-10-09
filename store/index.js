export const state = () => ({
  members: [],
  meta: {}
})

export const getters = {
  members (state) {
    return state.members
  },
  meta (state) {
    return state.meta
  }
}

export const mutations = {
  SET_MEMBERS (state, members) {
    state.members = members
  },
  SET_META (state, meta) {
    state.meta = meta
  }
}

export const actions = {
  async nuxtServerInit ({ commit, dispatch }) {
    const response = await this.$axios.$get('members')

    commit('SET_MEMBERS', response.data)
    commit('SET_META', response.meta)
  }
}
