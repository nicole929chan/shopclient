<template>
  <div>
    <social-sharing :url="url" inline-template>
      <div class="has-text-right">
        <network network="facebook">
          <i class="fab fa-facebook-square" />
          Facebook
        </network>
      </div>
    </social-sharing>
  </div>
</template>

<script>
export default {
  props: {
    member: {
      type: Number,
      required: true
    }
  },
  computed: {
    url () {
      const memberId = this.member.id
      const userId = this.$auth.user.id

      return process.env.APP_DOMAIN + `/cards?member=${memberId}&user=${userId}`
    }
  }
}
</script>
