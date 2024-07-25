<template>
  <div class="message-list">
    <div v-for="message in messages" :key="message.id" class="message">
      <strong>{{ message.user }}:</strong> {{ message.text }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['messages']
};
</script>

<style>
.message {
  margin-bottom: 10px;
}
</style>
