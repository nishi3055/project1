document.addEventListener('DOMContentLoaded', function () {
    const chatForm = document.getElementById('chat-form');
    const messageInput = document.getElementById('message-input');
    const chatMessages = document.getElementById('chat-messages');

    chatForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const content = messageInput.value.trim();
        if (content) {
            sendMessage(content);
        }
    });

    function sendMessage(content) {
        axios.post(`events/${eventId}/messages`, { content })
            .then(response => {
                appendMessage(response.data);
                messageInput.value = '';
            })
            .catch(error => console.error('Error sending message:', error));
    }

    function appendMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.innerHTML = `<strong>${message.user.name}:</strong> ${message.content}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function loadMessages() {
        axios.get(`events/${eventId}/messages`)
            .then(response => {
                chatMessages.innerHTML = '';
                response.data.forEach(appendMessage);
            })
            .catch(error => console.error('Error loading messages:', error));
    }

    // 初回読み込みと定期的な更新
    loadMessages();
    setInterval(loadMessages, 5000);
});