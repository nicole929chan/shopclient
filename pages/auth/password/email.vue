<template>
  <div class="section">
    <div class="container is-fluid">
      <div class="columns is-centered">
        <div class="column is-6">
          <h1 class="title is-4">
            Reset Password
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
              <div class="control">
                <button class="button is-danger is-fullwidth">
                  Send Password Reset Link
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
        email: ''
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
        const response = await this.$axios.$post('auth/password/email', this.form)

        this.flash(response.msg)
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
