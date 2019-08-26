export const state = () => ({
  members: []
})

export const getters = {
  members (state) {
    return state.members
  }
}

export const mutations = {
  SET_MEMBERS (state, members) {
    state.members = members
  }
}

export const actions = {
  async nuxtServertInit ({ commit, dispatch }) {
    const response = await this.$axios.$get('members')

    commit('SET_MEMBERS', response.data)
  }
}
