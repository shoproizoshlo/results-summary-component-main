// Загрузка JSON данных с помощью Fetch API
fetch("data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `Ошибка загрузки: ${response.status} ${response.statusText}`
      );
    }
    return response.json();
  })
  .then((jsonData) => {
    const contentElement = document.getElementById("content");

    // Создание HTML для каждого объекта в JSON
    let contentHTML = "";
    jsonData.forEach((item) => {
      contentHTML += `
        <li>
            <div class="li-summary">
              <img
                src="${item.icon}"
                alt="icon-${item.category}"
              />
              <span>${item.category}</span>
            </div>
            <div class="li-summary-num">
              ${item.score} <span class="li-summary-total">/ 100</span>
            </div>
          </li>
      `;
    });

    // Замена содержимого элемента
    contentElement.innerHTML = contentHTML;
  })
  .catch((error) => {
    console.error("Ошибка при загрузке JSON:", error);
  });

const button = document.querySelector("#continue");

function clickButton() {
  alert("nothing happens here 🥲");
}

button.addEventListener("click", clickButton);
