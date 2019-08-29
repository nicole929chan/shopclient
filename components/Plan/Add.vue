<template>
  <section>
    <template v-if="plan">
      <h3 class="title is-4">
        {{ msg }}
      </h3>
    </template>
    <template v-else>
      <button class="button is-primary is-rounded" @click.prevent="join = true">
        Join now!
      </button>
      <form v-if="join" action="#" @submit.prevent="upload">
        <div class="file has-name">
          <label class="file-label">
            <input type="file" class="file-input" @change="onChange">
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload" />
              </span>
              <span class="file-label">
                Choose a photo
              </span>
            </span>
            <button class="file-name button is-link">
              Upload
            </button>
          </label>
        </div>
      </form>
    </template>
  </section>
</template>

<script>
export default {
  props: {
    member: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      plan: null,
      join: false,
      form: {
        memberId: this.member.id,
        image: {}
      },
      src: null,
      msg: 'Already join!'
    }
  },
  created () {
    this.getPlan()
  },
  methods: {
    async getPlan () {
      const response = await this.$axios.$get(`user/${this.$auth.user.id}/plans?member_id=${this.member.id}`)

      this.plan = response.data
    },
    onChange (e) {
      if (!e.target.files.length) {
        return
      }

      const image = e.target.files[0]
      const reader = new FileReader()

      reader.readAsDataURL(image)
      reader.onload = (e) => {
        const src = e.target.result
        this.form.image = image
        this.src = src
      }
    },
    async upload () {
      const data = new FormData()
      data.append('image', this.form.image)
      data.append('member_id', this.form.memberId)

      const response = await this.$axios.$post('plan', data)

      this.msg = response.msg
      this.plan = response.plan
      this.join = false
    }
  }
}
</script>
