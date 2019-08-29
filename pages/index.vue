<template>
  <div class="section">
    <div class="container is-fluid">
      <div class="columns is-multiline">
        <div v-for="member in members" :key="member.id" class="column is-3">
          <Member :member="member" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Member from '@/components/members/Member'

export default {
  components: {
    Member
  },
  computed: {
    ...mapGetters({
      members: 'members'
    })
  }
}
</script>
