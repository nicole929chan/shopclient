<template>
  <div class="container is-fluid">
    <Member :member="member" />
  </div>
</template>

<script>
import Member from '@/components/members/Member'

export default {
  components: {
    Member
  },
  data () {
    return {
      member: null
    }
  },
  async asyncData ({ params, app }) {
    const response = await app.$axios.$get(`members/${params.id}`)

    return {
      member: response.data
    }
  }
}
</script>
