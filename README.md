# Mous-t-Do

Mous-t-Do is a productivity-focused browser extension that enhances the new tab experience by providing a to-do list, weather display, and motivational quotes. It is built using HTML, CSS, and JavaScript.

## Features

- **To-Do List**: Keep track of your tasks and manage them efficiently with the built-in to-do list. Add new items, mark them as completed, and delete tasks as needed.

- **Weather Display**: Stay updated with the current weather conditions, including temperature, weather icons, and additional information such as air quality index, UV index, and humidity. The weather data is fetched from the OpenWeatherMap API.

- **Motivational Quotes**: Get inspired with daily motivational quotes that change each time you refresh the new tab. The quotes are sourced from the Quotable API.

## Getting Started

To use Mous-t-Do, you need to load it as a Chrome extension in your browser. Here's how:

1. Clone or download this repository to your local machine.

2. Open Google Chrome and go to `chrome://extensions/`.

3. Enable the "Developer mode" toggle on the top right corner of the page.

4. Click on the "Load unpacked" button and select the root folder of the cloned/downloaded repository.

5. Mous-t-Do should now appear among your Chrome extensions. Open a new tab, and you'll see the enhanced new tab page with the Mous-t-Do features.

## API Integration

Mous-t-Do integrates with the following APIs to provide its functionality:

- **OpenWeatherMap API**: The extension fetches weather data to display the current weather conditions. You can customize the API integration by modifying the `weather.js` file.

- **Quotable API**: The extension retrieves motivational quotes to display on the new tab. You can modify the API integration in the `quote.js` file.

## Contributions

Contributions to Mous-t-Do are welcome! If you find any issues or have ideas for improvements, feel free to open an issue or submit a pull request. Please follow the existing code style and guidelines.

## License

This project is licensed under the [MIT License](LICENSE).

