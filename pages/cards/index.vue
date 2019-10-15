<template>
  <div class="container" style="padding: .5rem;">
    <figure class="image is-3by2">
      <img :src="card">
    </figure>
  </div>
</template>

<script>
export default {
  async asyncData ({ query, app, error }) {
    try {
      const response = await app.$axios.$get(`user/${query.user}/plans?member_id=${query.member}`)

      return {
        card: response.data.card
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
