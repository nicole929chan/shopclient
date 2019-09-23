<template>
  <div class="section">
    <div class="container is-fluid">
      <div class="columns is-centered">
        <div class="column is-6">
          <h1 class="title is-4">
            Sign in
          </h1>
          <form action="#" @submit.prevent="signin">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input v-model="form.email" type="email" class="input">
                <div v-if="errors.email" class="field">
                  <span class="has-text-danger">
                    {{ errors.email[0] }}
                  </span>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input v-model="form.password" type="password" class="input">
                <div v-if="errors.password" class="field">
                  <span class="has-text-danger">
                    {{ errors.password[0] }}
                  </span>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-danger is-fullwidth">
                  Sign in
                </button>
                <nuxt-link :to="{ name: 'auth-password-email' }">
                  <p class="has-text-centered">
                    Forget your password?
                  </p>
                </nuxt-link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      errors: {}
    }
  },
  middleware: ['guest'],
  methods: {
    ...mapActions({
      flash: 'alert/flash'
    }),
    async signin () {
      this.errors = {}

      try {
        await this.$auth.loginWith('local', {
          data: this.form
        })

        this.$bus.$emit('toggle-menu')
        this.flash('You have signed in.')
        this.$router.replace({
          'name': 'index'
        })
      } catch (e) {
        this.errors = e.response.data.errors
      }
    }
  }
}
</script>
