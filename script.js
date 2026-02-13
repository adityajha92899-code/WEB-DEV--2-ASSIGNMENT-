const form = document.getElementById("eventForm");
const container = document.getElementById("eventContainer");
const clearBtn = document.getElementById("clearBtn");
const sampleBtn = document.getElementById("sampleBtn");
const changeTextBtn = document.getElementById("changeTextBtn");
const demoText = document.getElementById("demoText");

// ADD EVENT
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;

  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${title}</h3>
    <p>${date} | ${category}</p>
    <p>${description}</p>
    <button class="deleteBtn">Delete</button>
  `;

  container.appendChild(card);
  form.reset();
});

// EVENT DELEGATION
container.addEventListener("click", function(e) {
  if (e.target.classList.contains("deleteBtn")) {
    e.target.parentElement.remove();
  }
});

// CLEAR ALL
clearBtn.addEventListener("click", function() {
  container.innerHTML = "<p>All events cleared!</p>";
});

// SAMPLE EVENT
sampleBtn.addEventListener("click", function() {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>Sample Event</h3>
    <p>2026-02-15 | Workshop</p>
    <p>This is a demo event.</p>
    <button class="deleteBtn">Delete</button>
  `;

  container.appendChild(card);
});


