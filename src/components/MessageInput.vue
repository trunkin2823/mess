<template>
  <div class="input-group">
    <input type="text" v-model="message" @keyup.enter="sendMessage" class="form-control" placeholder="Enter your message"/>
    <button @click="sendMessage" class="btn btn-primary">Send</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup(props, { emit }) {
    const message = ref('');

    const sendMessage = () => {
      if (message.value.trim() !== '') {
        emit('sendMessage', message.value);
        message.value = '';
      }
    };

    return {
      message,
      sendMessage
    };
  }
};
</script>

<style>
.input-group {
  display: flex;
  padding: 10px;
  border-top: 1px solid #ccc;
}

.input-group input {
  flex: 1;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.input-group button {
  margin-left: 10px;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: white;
}
</style>
