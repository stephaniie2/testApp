<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>There are {{ catLength }} categories by {{ user.id }}</p>
    <p>{{ getEventById(2) }}</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getEventById', 'catLength']),
    ...mapState(['user', 'categories'])
  }
}
</script>

<style scoped></style>
