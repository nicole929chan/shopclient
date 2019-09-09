<template>
  <div class="section">
    <div class="container is-fluid">
      <figure class="image">
        <img :src="member.activity.image_path" alt="">
      </figure>
      <article class="my-2">
        {{ member.activity.description }}
      </article>
      <template v-if="valid">
        <template v-if="$auth.loggedIn">
          <Add :member="member" />
        </template>
        <template v-else>
          <nuxt-link :to="{ name: 'auth-signin' }" class="button is-primary is-flex">
            Sign in
          </nuxt-link>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import Add from '@/components/plan/Add'

export default {
  components: {
    Add
  },
  async asyncData ({ params, app }) {
    const response = await app.$axios.$get(`members/${params.id}`)
    console.log(response)
    return {
      member: response.data,
      valid: response.meta.valid
    }
  }
}
</script>
