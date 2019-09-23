<template>
  <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link :to="{ name: 'index' }" class="navbar-item is-size-5">
        Shareluck
      </nuxt-link>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="toggle"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': active }">
      <div class="navbar-start" />
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <template v-if="$auth.loggedIn">
              <nuxt-link :to="{ name: 'plans' }" class="button is-danger is-small">
                Me
              </nuxt-link>
              <button class="button is-danger is-small" @click.prevent="logout">
                logout
              </button>
            </template>
            <template v-else>
              <nuxt-link :to="{ name: 'auth-signup' }" class="button is-danger is-small">
                Sign up
              </nuxt-link>
              <nuxt-link :to="{ name: 'auth-signin' }" class="button is-danger is-small">
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
  data () {
    return {
      active: false
    }
  },
  methods: {
    toggle () {
      this.active = !this.active
    },
    logout () {
      this.$auth.logout()
      this.toggle()
    }
  }
}
</script>
