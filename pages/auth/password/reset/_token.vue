<template>
  <div class="section">
    <div class="container is-fluid">
      <div class="columns is-centered">
        <div class="column is-6">
          <h1 class="title is-4">
            Reset Password
          </h1>
          <form action="#" @submit.prevent="submit">
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
              </div>
              <div v-if="errors.password" class="field">
                <span class="has-text-danger">
                  {{ errors.password[0] }}
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label">Confirm Password</label>
              <div class="control">
                <input v-model="form.password_confirmation" type="password" class="input">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-danger is-fullwidth">
                  Reset Password
                </button>
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
        password: '',
        password_confirmation: '',
        token: ''
      },
      errors: {}
    }
  },
  middleware: ['guest'],
  mounted () {
    this.form.token = this.$route.params.token
    this.form.email = this.$route.query.email
  },
  methods: {
    ...mapActions({
      flash: 'alert/flash'
    }),
    async submit () {
      this.errors = {}

      try {
        const response = await this.$axios.$post('auth/password/reset', this.form)

        this.flash(response.msg)
        this.$router.push({
          name: 'auth-signin'
        })
      } catch (e) {
        this.errors = e.response.data.errors
      }
    }
  }
}
</script>
