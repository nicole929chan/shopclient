<template>
  <div class="section">
    <div class="container is-fluid">
      <div class="columns is-centered">
        <div class="column is-6">
          <h1 class="title is-4">
            Sign up
          </h1>
          <form action="#" @submit.prevent="signup">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input v-model="form.name" type="text" class="input">
                <div v-if="errors.name" class="field">
                  <span class="has-text-danger">
                    {{ errors.name[0] }}
                  </span>
                </div>
              </div>
            </div>
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
              <label class="label">Birthdate</label>
              <div class="columns is-mobile">
                <div class="column">
                  <div class="select is-fullwidth">
                    <select v-model="form.birth_year">
                      <option value="">
                        YEAR
                      </option>
                      <option v-for="year in years" :key="year" :value="year">
                        {{ year }}
                      </option>
                    </select>
                    <div v-if="errors.birth_year" class="field">
                      <span class="has-text-danger">
                        {{ errors.birth_year[0] }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="select is-fullwidth">
                    <select v-model="form.birth_month">
                      <option value="">
                        MONTH
                      </option>
                      <option v-for="month in 12" :key="month" :value="month">
                        {{ month }}
                      </option>
                    </select>
                    <div v-if="errors.birth_month" class="field">
                      <span class="has-text-danger">
                        {{ errors.birth_month[0] }}
                      </span>
                    </div>
                  </div>
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
              <p class="control">
                <button class="button is-danger is-fullwidth">
                  Sign up
                </button>
              </p>
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
        name: '',
        email: '',
        password: '',
        birth_year: '',
        birth_month: ''
      },
      errors: {}
    }
  },
  computed: {
    years () {
      const year = new Date().getFullYear()
      return Array.from({ length: year - 1930 }, (value, index) => 1931 + index)
    }
  },
  methods: {
    ...mapActions({
      flash: 'alert/flash'
    }),
    async signup () {
      try {
        await this.$axios.$post('auth/register', this.form)

        this.flash('Sign up successfully! Please login your account.')

        this.$router.replace({
          'name': 'auth-signin'
        })
      } catch (e) {
        this.errors = e.response.data.errors
      }
    }
  }
}
</script>
