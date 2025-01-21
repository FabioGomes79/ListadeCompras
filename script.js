const form = document.getElementById("add-item-form");
const input = document.getElementById("item-input");
const shoppingList = document.getElementById("shopping-list");
const notification = document.getElementById("notification");
const closeNotificationBtn = document.querySelector(".close-btn");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const itemText = input.value.trim();

  if (itemText === "") return;

  const listItem = document.createElement("li");
  listItem.innerHTML = ` 
<label> 
<input type="checkbox">
<span>${itemText}</span>
</label>
<button class="delete-btn">
      <img src="./assests/delete-02-stroke-rounded.svg" alt="Excluir">
      </button>
      `;

  shoppingList.appendChild(listItem);
  input.value = "";

  deleteEvent(listItem.querySelector(".delete-btn"));
});

function deleteEvent(deleteBtn) {
  deleteBtn.addEventListener("click", (event) => {
    const listItem = event.target.closest("li");
    listItem.remove();

    showNotification();
  });
}

function showNotification() {
  notification.classList.remove("hidden");

  setTimeout(() => {
    notification.classList.add("hidden");
  }, 3000);
}

closeNotificationBtn.addEventListener("click", () => {
  notification.classList.add("hidden");
});