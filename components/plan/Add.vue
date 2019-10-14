<template>
  <div class="">
    <form v-show="!msg" action="#" @submit.prevent="upload">
      <div class="field">
        <div class="file is-centered is-medium has-name is-boxed">
          <label class="file-label file-outer">
            <input type="file" class="file-input" @change="onChange">
            <span class="file-cta">
              <span class="file-label has-text-danger">
                UPLOAD TO GET GIFT!
              </span>
            </span>
            <span class="file-name is-size-5 has-text-danger has-text-centered" style="margin: 1rem 0; padding: 3rem 0 6rem 0; border-top: 1px solid #ff470f; border-top-left-radius: 4px; border-top-right-radius: 4px;" v-html="filename" />
            <button class="button is-rounded has-text-white" style="background-color: orangered; margin: 0 3rem;" :disabled="disabled">
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
      errors: {},
      filename: '<i class="fas fa-plus-circle"></i>',
      disabled: false
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

      this.filename = e.target.files[0].name

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
      this.disabled = true

      try {
        const response = await this.$axios.$post('plan', data)

        this.errors = {}
        this.msg = response.msg
        this.flash(response.msg)
      } catch (e) {
        this.errors = e.response.data.errors
        this.msg = ''
        this.disabled = false
      }
    }
  }
}
</script>

<style scoped>
.file-outer {
    padding: .25rem;
    border: 1px solid hsl(174, 70%, 54%);
}
</style>
