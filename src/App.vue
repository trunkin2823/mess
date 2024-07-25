<template>
  <div id="app">
    <div class="chat-container">
      <div class="chat-header">
        <h2>mCHAT</h2>
      </div>
      <div class="chat-content">
        <ChatRoom />
      </div>
    </div>
  </div>
</template>

<script>
import ChatRoom from './components/ChatRoom.vue';

export default {
  name: 'App',
  components: {
    ChatRoom
  }
};
</script>

<style>

@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');



#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
}

.chat-container {
  width: 350%; /* Tăng chiều rộng của khung chat */
  max-width: 1400px; /* Bạn có thể điều chỉnh giá trị này nếu cần */
  height: 90vh;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.chat-header {
  width: 100%;
  padding: 10px;
  background: #343a40;
  color: white;
  text-align: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.chat-content {
  width: 100%;
  flex: 1;
  display: flex;
}
</style>
