<template>
  <div class="chat-room">
    <div class="user-list-container">
      <UserList :users="users" />
    </div>
    <div class="chat-main">
      <MessageList :messages="messages" />
      <MessageInput @sendMessage="sendMessage" />
    </div>
  </div>
</template>

<script>
import UserList from './UserList.vue';
import MessageList from './MessageList.vue';
import MessageInput from './MessageInput.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  components: {
    UserList,
    MessageList,
    MessageInput
  },
  setup() {
    const store = useStore();
    const users = computed(() => store.state.users);
    const messages = computed(() => store.state.messages);

    const sendMessage = (message) => {
      store.dispatch('sendMessage', message);
    };

    store.dispatch('connectWebSocket');

    return {
      users,
      messages,
      sendMessage
    };
  }
};
</script>

<style>
.chat-room {
  display: flex;
  height: 100%;
}

.user-list-container {
  width: 20%;
  border-right: 1px solid #ddd;
  overflow-y: auto;
}

.chat-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.message-list {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
}

.message-input {
  padding: 10px;
  border-top: 1px solid #ddd;
}
</style>
