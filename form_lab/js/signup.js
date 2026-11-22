const takenUsernames = ["admin", "nimali", "kavin"];
const form = document.getElementById("signup-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmBox = document.getElementById("confirm");
const terms = document.getElementById("terms");
const showBtn = document.getElementById("show-btn");
const submitBtn = document.getElementById("submit-btn");
const result = document.getElementById("result");
// TODO 1
function checkUsername(value) {
  if (!/^\w{3,15}$/.test(value)) return "Use 3 to 15 letters, numbers or _.";
  if (takenUsernames.includes(value.toLowerCase())) return "That username is taken. Try another.";
  return "";
}

// TODO 2
function checkEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Enter an email like name@example.com.";
}

// TODO 3
function checkPasswordRules(value) {
  const tests = {
    length: value.length >= 8,
    number: /\d/.test(value),
    upper: /[A-Z]/.test(value),
    symbol: /[^A-Za-z0-9]/.test(value)
  };
  let allPass = true;
  let count = 0;
  for (const key in tests) {
    ruleItems[key].classList.toggle("met", tests[key]);
    if (tests[key]) count++; else allPass = false;
  }
  showStrength(count); // challenge
  return allPass;
}

// TODO 4
function checkConfirm() {
  if (confirmBox.value === "") return "Please type your password again.";
  if (confirmBox.value !== password.value) return "Passwords do not match.";
  return "";
}

// TODO 5
showBtn.addEventListener("click", () => {
  const hidden = password.type === "password";
  password.type = hidden ? "text" : "password";
  showBtn.textContent = hidden ? "Hide" : "Show";
});

// Challenge 1
function showStrength(count) {
  const el = document.getElementById("strength");
  if (password.value === "") { el.textContent = ""; return; }
  el.textContent = count <= 2 ? "Weak" : count === 3 ? "Fair" : "Strong";
}

// Challenge 2
password.addEventListener("keydown", (e) => {
  document.getElementById("caps-warning").textContent =
    e.getModifierState("CapsLock") ? "Caps Lock is on" : "";
});