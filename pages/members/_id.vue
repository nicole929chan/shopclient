<template>
  <div class="section">
    <div class="container is-fluid">
      <div>
        <img :src="image" alt="">
        <section>
          {{ member.activity.description }}
        </section>
      </div>
      <template v-if="$auth.loggedIn">
        <Add :member="member" />
      </template>
      <template v-else>
        <nuxt-link :to="{ name: 'auth-signin' }" class="button">
          Sign in
        </nuxt-link>
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
  computed: {
    image () {
      return `http://shop.test/storage/${this.member.activity.image_path}`
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
