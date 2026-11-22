console.log("Forms lab ready");
// TASK A1
const form = document.getElementById("reg-form"); 
 
form.addEventListener("submit", (e) => { 
  e.preventDefault();            
  console.log("Form submitted"); 
});

// TASK 2
const nameInput = document.getElementById("full-name"); 
const guestsInput = document.getElementById("guests"); 
 
const name = nameInput.value.trim();          
const guests = Number(guestsInput.value);     
 
const data = Object.fromEntries(new FormData(form)); 
console.log(data);

// TASK 3
form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  // 1.
  const name = document.getElementById("full-name").value.trim();
  const workshopSel = document.getElementById("workshop");
  const workshopText = workshopSel.options[workshopSel.selectedIndex].text;
  const session = document.querySelector('input[name="session"]:checked').value;
  const guests = Number(document.getElementById("guests").value);
  const ownLaptop = document.getElementById("laptop").checked;

  // 4.
  console.log(Object.fromEntries(new FormData(form)));

  // 2.
  summary.textContent = "";
  const h2 = document.createElement("h2");
  h2.textContent = "Registration received";

  const ul = document.createElement("ul");
  const lines = [
    `Name: ${name}`,
    `Workshop: ${workshopText}`,
    `Session: ${session}`,
    `Guests: ${guests}`,
    `Own laptop: ${ownLaptop ? "Yes" : "No"}`
  ];
  for (const text of lines) {
    const li = document.createElement("li");
    li.textContent = text;
    ul.append(li);
  }
  summary.append(h2, ul);

  // 3.
  statusMsg.textContent = `Thank you, ${name}!`;
  form.reset();
});