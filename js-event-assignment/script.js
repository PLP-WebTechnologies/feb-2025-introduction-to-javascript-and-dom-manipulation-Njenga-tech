// Button click
document.getElementById("magicButton").addEventListener("click", () => {
    const msg = document.getElementById("clickMessage");
    msg.textContent = "🎉 You've discovered JavaScript magic!";
    msg.style.color = "var(--highlight-color)";
  });
  
  // Keypress detection
  document.getElementById("keyInput").addEventListener("keyup", (e) => {
    document.getElementById("keyOutput").textContent = `You typed: ${e.key}`;
  });
  
  // Tabs
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-content").forEach((tab) => {
        tab.classList.add("hidden");
      });
      document.getElementById(`tab${btn.dataset.tab}`).classList.remove("hidden");
    });
  });
  
  // Double-click secret
  document.getElementById("hoverImage").addEventListener("dblclick", () => {
    alert("🔓 Secret unlocked! Welcome to the advanced level!");
  });
  
  // Form validation
  document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const msg = document.getElementById("formMessage");
  
    if (!email.includes("@") || pass.length < 8) {
      msg.textContent = "❌ Invalid email or password!";
      msg.style.color = "red";
    } else {
      msg.textContent = "✅ Form submitted successfully!";
      msg.style.color = "green";
    }
  });
  
  // Real-time password feedback
  document.getElementById("password").addEventListener("input", (e) => {
    const pass = e.target.value;
    const msg = document.getElementById("formMessage");
    if (pass.length < 8) {
      msg.textContent = "⚠️ Password too short!";
      msg.style.color = "orange";
    } else {
      msg.textContent = "";
    }
  });
  
  // Toggle Light/Dark Mode
  document.getElementById("modeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  