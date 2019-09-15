<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="member.logo">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">
            <nuxt-link :to="{ name: 'members-id', params: { id: member.id } }">
              {{ member.name }}
            </nuxt-link>
          </p>
        </div>
      </div>
      <div class="content">
        <div>
          {{ member.address }}
        </div>
        <div>
          {{ member.phone_number }}
        </div>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    member: {
      required: true,
      type: Object
    }
  }
}
</script>
