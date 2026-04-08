const chatWindow = document.getElementById("chatWindow");
const chatInput  = document.getElementById("chatInput");
const sendBtn    = document.getElementById("sendBtn");

// Show a welcome message on load
addBubble("bot", "Hi! Ask me anything about growing fruits and vegetables 🌱");

// Send on button click
sendBtn.addEventListener("click", sendMessage);

// Send on Enter key
chatInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") sendMessage();
});

async function sendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;

  chatInput.value = "";
  addBubble("user", text);
  sendBtn.disabled = true;
  chatInput.disabled = true;

  try {
    const res = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text })
    });

    if (!res.ok) throw new Error("Server error: " + res.status);

    const data = await res.json();
    addBubble("bot", data.response);

  } catch (err) {
    addBubble("error", "Could not reach the server. Is Flask running on port 5000?");
  } finally {
    sendBtn.disabled = false;
    chatInput.disabled = false;
    chatInput.focus();
  }
}

function addBubble(type, text) {
  const div = document.createElement("div");
  div.className = "bubble " + type;
  div.textContent = text;
  chatWindow.appendChild(div);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
