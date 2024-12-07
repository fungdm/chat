document.addEventListener("DOMContentLoaded", () => {
    const chatInput = document.getElementById("chatInput");
    const sendButton = document.getElementById("sendButton");
    const chatMessages = document.getElementById("chatMessages");
  
    // Function to add a new message
    const addMessage = (text, type) => {
      const messageDiv = document.createElement("div");
      messageDiv.className = `message ${type}`;
      messageDiv.textContent = text;
      chatMessages.appendChild(messageDiv);
  
      // Scroll to the bottom of the chat
      chatMessages.scrollTop = chatMessages.scrollHeight;
    };
  
    // Event listener for sending a message
    sendButton.addEventListener("click", () => {
      const message = chatInput.value.trim();
  
      if (message) {
        // Add the sent message
        addMessage(message, "sent");
  
        // Simulate receiving a reply after 1 second
        setTimeout(() => {
          addMessage("This is an automated reply.", "received");
        }, 1000);
      }
  
      // Clear the input field
      chatInput.value = "";
    });
  
    // Send message on pressing Enter
    chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendButton.click();
      }
    });
  
    // Auto-focus on the input field
    chatInput.focus();
  });
  