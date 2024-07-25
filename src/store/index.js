import { createStore } from 'vuex';

export default createStore({
    state: {
        users: [],
        messages: [],
        ws: null
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
        addMessage(state, message) {
            state.messages.push(message);
        },
        setWebSocket(state, ws) {
            state.ws = ws;
        }
    },
    actions: {
        connectWebSocket({ commit }) {
            const ws = new WebSocket('ws://localhost:8080/chat');
            ws.onmessage = (event) => {
                const data = JSON.parse(event.data);
                if (data.type === 'users') {
                    commit('setUsers', data.users);
                } else if (data.type === 'message') {
                    commit('addMessage', data.message);
                }
            };
            commit('setWebSocket', ws);
        },
        sendMessage({ state }, message) {
            if (state.ws && state.ws.readyState === WebSocket.OPEN) {
                const messageData = {
                    user: "YourUserName", // Thay bằng tên người dùng thực tế
                    text: message,
                    id: Date.now()
                };
                state.ws.send(JSON.stringify({ type: 'message', message: messageData }));
                state.messages.push(messageData); // Thêm tin nhắn vào store ngay lập tức
            }
        }
    }
});
