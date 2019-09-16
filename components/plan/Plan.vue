<template>
  <div class="section">
    <div class="container is-fluid">
      <div class="columns is-centered">
        <div class="column is-6">
          <article class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img :src="plan.member.logo" alt="">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>
                    {{ plan.member.name }}
                  </strong>
                  <br>
                  <small>
                    {{ start_date }} ~ {{ finish_date }}
                  </small>
                  <br>
                  Get Gift! {{ plan.member.activity.points }} points
                  <br>
                </p>
              </div>
              <div class="columns is-mobile">
                <div class="column is-half">
                  <button class="button is-danger is-small is-fullwidth" @click.prevent="showCard = true">
                    Get!
                  </button>
                </div>
                <div class="column">
                  <button class="button is-danger is-small is-fullwidth" @click.prevent="showRedeem = true">
                    Redeem!
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
        <Card v-show="showCard" :card="plan.card" @close="showCard = false" />
        <Redeem v-show="showRedeem" :redeem="plan.redeem" @close="showRedeem = false" />
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Card from '@/components/plan/Card'
import Redeem from '@/components/plan/Redeem'

export default {
  components: {
    Card,
    Redeem
  },
  props: {
    plan: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      showCard: false,
      showRedeem: false
    }
  },
  computed: {
    start_date () {
      return moment(this.plan.member.activity.activity_start).format('YYYY-MM-DD hh:mm')
    },
    finish_date () {
      return moment(this.plan.member.activity.activity_end).format('YYYY-MM-DD hh:mm')
    }
  }
}
</script>
