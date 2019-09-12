<template>
  <div class="container">
    <div>
      {{ plan.member.name }}
    </div>
    <div>
      {{ plan.member.activity.activity_start }} ~ {{ plan.member.activity.activity_end }}
    </div>
    <div>
      Get Gift! {{ plan.member.activity.points }} points
    </div>
    <button @click.prevent="showCard = true">
      Get!
    </button>
    <button @click.prevent="showRedeem = true">
      Redeem!
    </button>
    <Card v-show="showCard" :card="plan.card" @close="showCard = false" />
    <Redeem v-show="showRedeem" :redeem="plan.redeem" @close="showRedeem = false" />
  </div>
</template>

<script>
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
  }
}
</script>
