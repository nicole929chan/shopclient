<template>
  <div>
    <Plan v-for="plan in plans" :key="plan.id" :plan="plan" />
  </div>
</template>

<script>
import Plan from '@/components/plan/Plan'

export default {
  components: {
    Plan
  },
  data () {
    return {
      plans: null
    }
  },
  async asyncData ({ params, app }) {
    const response = await app.$axios.$get(`user/${app.$auth.user.id}/plans`)

    return {
      plans: response.data
    }
  }
}
</script>
