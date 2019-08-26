<template>
  <div>
    <img :src="member.activity.image_path" alt="">
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
