<template>
  <div>
    <div class="container is-fluid is-marginless">
      <figure class="image">
        <img :src="member.activity.image_path" alt="">
      </figure>
    </div>
    <section class="section">
      <div class="columns is-multiline is-mobile">
        <div class="column is-12">
          <p class="is-size-6 has-text-weight-medium">
            [ {{ start_date }} ~ {{ finish_date }} ]
          </p>
        </div>
        <div class="column is-12">
          <p class="is-size-5">
            {{ member.activity.description }}
          </p>
        </div>
        <template v-if="valid">
          <div class="column is-12">
            <template v-if="$auth.loggedIn">
              <Add v-if="!added" :member="member" />
            </template>
            <template v-else>
              <nuxt-link :to="{ name: 'auth-signin' }" class="button is-danger is-flex">
                Sign in
              </nuxt-link>
            </template>
          </div>
        </template>
      </div>
    </section>
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
      return moment(this.member.activity.activity_start).format('YYYY-MM-DD hh:mm')
    },
    finish_date () {
      return moment(this.member.activity.activity_end).format('YYYY-MM-DD hh:mm')
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
