<template>
  <div class="user-list">
    <ul class="list-group">
      <li v-for="user in users" :key="user.id" class="list-group-item">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['users']
};
</script>

<style>
.user-list {
  padding: 10px;
}

.list-group-item {
  padding: 10px;
}
</style>
