document.getElementById('sendButton').addEventListener('click', function() {
    const input = document.getElementById('messageInput');
    const messageText = input.value.trim();

    if (messageText !== '') {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message');

        const usernameSpan = document.createElement('span');
        usernameSpan.classList.add('username');
        usernameSpan.textContent = 'You:';

        const messageSpan = document.createElement('span');
        messageSpan.classList.add('message-text');
        messageSpan.textContent = messageText;

        messageContainer.appendChild(usernameSpan);
        messageContainer.appendChild(messageSpan);

        document.getElementById('chatMessages').appendChild(messageContainer);
        input.value = '';
        document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;
    }
});

// Optional: Allow pressing Enter to send the message
document.getElementById('messageInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('sendButton').click();
    }
});
