function handleUserInput() {
    const input = document.getElementById("user-input").value.trim();
    if (input === "") return;
  
    appendMessage("You", input);
    respondToUser(input);
    document.getElementById("user-input").value = "";
  }
  
  function appendMessage(sender, message) {
    const chatBox = document.getElementById("chat-box");
    const messageElem = document.createElement("div");
    messageElem.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageElem);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  function respondToUser(input) {
    let response = "";
  
    input = input.toLowerCase();
  
    if (input.includes("hello") || input.includes("hi")) {
      response = "Hello! How can I assist you today?";
    } else if (input.includes("your name")) {
      response = "I'm your virtual assistant!";
    } else if (input.includes("time")) {
      response = `The current time is ${new Date().toLocaleTimeString()}.`;
    } else {
      response = "I'm not sure how to respond to that yet.";
    }
  
    setTimeout(() => {
      appendMessage("Assistant", response);
    }, 500);
  }
  