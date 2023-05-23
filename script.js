// // Weather API integration example
// const apiKey = '';
// const city = '';
// const weatherEndpoint = ``;

// function getWeather() {
//   // Fetch weather data using appropriate API endpoint and process the response
//   fetch(weatherEndpoint)
//     .then(response => response.json())
//     .then(data => {
//       const temperatureElement = document.getElementById('temperature');
//       const weatherIconElement = document.getElementById('weather-icon');

//       temperatureElement.textContent = `${data.main.temp}°C`;
//       weatherIconElement.style.backgroundImage = `url(https://openweathermap.org/img/w/${data.weather[0].icon}.png)`;
//     })
//     .catch(error => console.error('Error retrieving weather data:', error));
// }

// // Load weather data when the page loads
// window.addEventListener('load', getWeather);

// Light/Dark mode functionality
const modeSwitch = document.getElementById('mode-switch');
modeSwitch.addEventListener('change', () => {
  if (modeSwitch.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});

// Set initial theme based on saved preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  modeSwitch.checked = savedTheme === 'dark';
}

// Search functionality
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () => {
  const searchBar = document.getElementById('search-bar');
  const searchValue = searchBar.value.trim();
  if (searchValue !== '') {
    const searchURL = `https://www.google.com/search?q=${searchValue}`;
    window.location.href = searchURL;
  }
});

// Todo List functionality
const todoList = document.getElementById('todo-list');
const newTodoInput = document.getElementById('new-todo');
const addTodoButton = document.getElementById('add-todo');

function createTodoItem(text) {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const span = document.createElement('span');
  span.textContent = text;
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.innerHTML = '&#x2715;';

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);
}

// createTodoItem('Here are examples of items to add to your checklist');
// createTodoItem('You can click on the delete button to delete it');
// createTodoItem('Or you can hit the checkbox to cross it off');

todoList.addEventListener('click', event => {
  const target = event.target;
  if (target.matches('.delete-btn')) {
    target.parentElement.remove();
  } else if (target.matches('input[type="checkbox"]')) {
    const listItem = target.parentElement;
    listItem.classList.toggle('completed');
  }
});

addTodoButton.addEventListener('click', () => {
  const newTodoValue = newTodoInput.value.trim();
  if (newTodoValue !== '') {
    createTodoItem(newTodoValue);
    newTodoInput.value = '';
  }
});
newTodoInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      addTodoItem();
    }
  });
  

// Time-based greeting
const greeting = document.getElementById('greeting');
const currentHour = new Date().getHours();
if (currentHour >= 5 && currentHour < 12) {
  greeting.textContent = 'Good morning!';
} else if (currentHour >= 12 && currentHour < 18) {
  greeting.textContent = 'Good afternoon!';
} else {
  greeting.textContent = 'Good evening!';
}

// Motivational quote API
fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    const quoteContainer = document.getElementById('quote');
    quoteContainer.textContent = `"${data.content}" - ${data.author}`;
  })
  .catch(error => {
    console.log('Error fetching quote:', error);
  });

  // Restore saved checklist items
  const savedItems = JSON.parse(localStorage.getItem('todoItems'));
  if (savedItems && Array.isArray(savedItems)) {
    savedItems.forEach(item => {
      createTodoItem(item.text);
      if (item.completed) {
        const lastItem = todoList.lastChild;
        const checkbox = lastItem.querySelector('input[type="checkbox"]');
        toggleTodoItem(checkbox);
      }
    });
  }

  // Save checklist items
  function saveChecklistItems() {
    const items = Array.from(todoList.children).map(listItem => {
      const checkbox = listItem.querySelector('input[type="checkbox"]');
      return {
        text: listItem.querySelector('span').textContent,
        completed: checkbox.checked
      };
    });
    localStorage.setItem('todoItems', JSON.stringify(items));
  }

  todoList.addEventListener('click', saveChecklistItems);
