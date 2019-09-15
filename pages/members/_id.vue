<template>
  <div class="section">
    <div class="container is-fluid">
      <figure class="image">
        <img :src="member.activity.image_path" alt="">
      </figure>
      <p class="my-2">
        {{ member.activity.description }}
      </p>
      <p>
        {{ start_date }} ~ {{ member.activity.activity_end }}
      </p>
      <template v-if="valid">
        <template v-if="$auth.loggedIn">
          <Add v-if="!added" :member="member" />
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
import moment from 'moment'
import Add from '@/components/plan/Add'

export default {
  components: {
    Add
  },
  computed: {
    start_date () {
      return moment(this.member.activity.activity_start).format('Y-m-d')
    }
  },
  async asyncData ({ params, app }) {
    const response = await app.$axios.$get(`members/${params.id}`, {
      params: {
        userId: app.$auth.loggedIn ? app.$auth.user.id : null
      }
    })

    return {
      member: response.data,
      valid: response.meta.valid,
      added: response.meta.added
    }
  }
}
</script>
