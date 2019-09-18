<template>
  <div class="section">
    <h1 v-if="error.statusCode === 404" class="title has-text-centered">
      Page not found
    </h1>
    <h1 v-else class="title has-text-centered">
      An error occurred
    </h1>
    <nuxt-link to="/">
      <p class="has-text-centered">
        Home page
      </p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>
