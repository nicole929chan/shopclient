<template>
  <nav class="pagination is-rounded is-small" role="navigation" aria-label="pagination">
    <a href="#" class="pagination-previous" :disabled="meta.current_page === 1" @click.prevent="switched(meta.current_page - 1)">
      Prev
    </a>
    <a href="#" class="pagination-next" :disabled="meta.current_page === meta.last_page" @click.prevent="switched(meta.current_page + 1)">
      Next
    </a>
    <ul class="pagination-list">
      <li v-for="page in meta.last_page" :key="page">
        <a href="#" class="pagination-link" :class="{ 'is-current': meta.current_page === page }" @click.prevent="switched(page)">
          {{ page }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    meta: {
      type: Object,
      required: true
    }
  },
  methods: {
    switched (page) {
      if (page <= 0 || page > this.meta.last_page) {
        return
      }

      this.$emit('pagination:switched', page)
    }
  }
}
</script>
