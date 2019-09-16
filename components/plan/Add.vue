<template>
  <div class="">
    <form v-show="!msg" action="#" @submit.prevent="upload">
      <div class="field">
        <div class="file is-medium has-name is-boxed">
          <label class="file-label">
            <input type="file" class="file-input" @change="onChange">
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload" />
              </span>
              <span class="file-label has-text-danger">
                UPLOAD TO GET GIFT!
              </span>
            </span>
            <span class="file-name is-size-4 has-text-danger has-text-centered">
              +
            </span>
            <button class="button is-danger">
              SUBMIT
            </button>
          </label>
        </div>
        <div v-if="errors.image" class="field">
          <span class="has-text-danger">
            {{ errors.image[0] }}
          </span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    member: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      form: {
        memberId: this.member.id,
        image: {}
      },
      src: null,
      msg: null,
      errors: {}
    }
  },
  methods: {
    ...mapActions({
      flash: 'alert/flash'
    }),
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

      try {
        const response = await this.$axios.$post('plan', data)

        this.errors = {}
        this.msg = response.msg
        this.flash(response.msg)
      } catch (e) {
        this.errors = e.response.data.errors
        this.msg = ''
      }
    }
  }
}
</script>
