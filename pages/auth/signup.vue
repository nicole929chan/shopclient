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
              <label class="lable">Name</label>
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
              <label class="lable">Email</label>
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
              <p class="control">
                <button class="button is-info is-medium">
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
export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      },
      errors: {}
    }
  },
  methods: {
    async signup () {
      try {
        await this.$axios.$post('auth/register', this.form)

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
