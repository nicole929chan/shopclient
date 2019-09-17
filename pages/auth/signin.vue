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
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-danger is-fullwidth">
                  Sign in
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
    async signin () {
      try {
        await this.$auth.loginWith('local', {
          data: this.form
        })

        this.$router.replace({
          'name': 'index'
        })
      } catch (e) {
        console.log(e.response)
        this.errors = e.response.data.errors
      }
    }
  }
}
</script>
