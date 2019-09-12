<template>
  <div class="modal is-active">
    <div class="modal-background" />
    <div class="modal-content">
      <p class="image is-4by3">
        <img :src="redeem">
      </p>
    </div>
    <button class="modal-close is-large" aria-label="close" @click.prevent="$emit('close')" />
  </div>
</template>

<script>
export default {
  props: {
    redeem: {
      type: String,
      required: true
    }
  }
}
</script>
