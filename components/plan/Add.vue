<template>
  <section>
    <h3 v-show="msg" class="title is-5">
      {{ msg }}
    </h3>
    <form v-show="!msg" action="#" @submit.prevent="upload">
      <div class="field">
        <div class="file has-name is-boxed">
          <label class="file-label">
            <input type="file" class="file-input" @change="onChange">
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-cloud-upload-alt" />
              </span>
              <span class="file-label">
                UPLOAD TO GET GIFT!
              </span>
            </span>
            <span class="file-name">
              {{ member.activity.description }}
            </span>
            <button class="button is-danger is-rounded">
              SUBMIT
            </button>
          </label>
        </div>
      </div>
    </form>
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
      form: {
        memberId: this.member.id,
        image: {}
      },
      src: null,
      msg: null
    }
  },
  methods: {
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
    }
  }
}
</script>
