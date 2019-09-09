<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link :to="{ name: 'index' }" class="navbar-item">
        Shareluck
      </nuxt-link>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start" />
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <template v-if="$auth.loggedIn">
              <button @click.prevent="logout" class="button is-primary">
                logout
              </button>
            </template>
            <template v-else>
              <div class="button is-primary">
                <nuxt-link :to="{ name: 'auth-signup' }">
                  Sign up
                </nuxt-link>
              </div>
              <nuxt-link :to="{ name: 'auth-signin' }" class="button is-light">
                Sign in
              </nuxt-link>
            </template>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$auth.logout()
    }
  }
}
</script>
