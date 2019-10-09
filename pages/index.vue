<template>
  <div class="section">
    <div class="container is-fluid">
      <div class="columns is-multiline">
        <div v-for="member in members" :key="member.id" class="column is-3">
          <Member :member="member" />
        </div>
      </div>
      <Pagination :meta="meta" @pagination:switched="getMembers" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Member from '@/components/members/Member'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Member,
    Pagination
  },
  computed: {
    ...mapGetters({
      members: 'members',
      meta: 'meta'
    })
  },
  methods: {
    async getMembers (page = 1) {
      const response = await this.$axios.$get('members', {
        params: {
          page
        }
      })

      this.$store.commit('SET_MEMBERS', response.data)
      this.$store.commit('SET_META', response.meta)
    }
  }
}
</script>
