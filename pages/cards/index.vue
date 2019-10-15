<template>
  <div class="container" style="padding: .5rem;">
    <figure class="image is-3by2">
      <img :src="card" alt="">
    </figure>
  </div>
</template>

<script>
export default {
  async asyncData ({ query, app, error }) {
    try {
      const response = await app.$axios.$get(`sharing/${query.user}?member_id=${query.member}`)

      return {
        card: response.card
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
