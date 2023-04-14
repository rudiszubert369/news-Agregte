# News Aggregator

This is a news aggregator app that displays the latest news articles from a variety of sources. User can pick a country, toggle between list view and tile view, 2 languages versions are supported. 
## Technologies Used

- [React](https://reactjs.org/)
- [Ant Design](https://ant.design/)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

![Screenshot of list view](https://i.imgur.com/Th8tqWE.png)
![Screenshot of tile view](https://i.imgur.com/T230FJ9.png)

## Installation

To install and run the app locally, follow these steps:

1. Clone this repository: `git clone https://github.com/your-username/news-aggregator.git`
2. Navigate to the project directory: `cd news-aggregator`
3. Install dependencies: `npm install`
4. Start the app: `npm start`
5. Open the app in your browser: `http://localhost:3000`

## Usage

To use the app, simply browse the list of news articles displayed on the home page. You can filter the articles by category using the dropdown menu at the top of the page, or search for articles by entering a keyword in the search bar. Clicking on an article will take you to the full article on the source's website.

## State Management

This app uses Redux and Redux Toolkit for state management. The Redux store is configured in the `store.js` file, and the reducers are defined in the `reducers` directory. The `actions` directory contains action creators and async thunk functions for fetching data from the API.

## Testing

This app uses Jest and React Testing Library for unit testing and integration testing. The test files are located in the `src/tests` directory. To run the tests, use the command `npm test`.

## Contributing

If you would like to contribute to this project, please submit a pull request with your changes. Before submitting a pull request, please ensure that all tests are passing and that your changes have been thoroughly tested.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
