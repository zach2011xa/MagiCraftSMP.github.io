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

        document.querySelector('.chat-messages').appendChild(messageContainer);
        input.value = '';
        document.querySelector('.chat-messages').scrollTop = document.querySelector('.chat-messages').scrollHeight;
    }
});
